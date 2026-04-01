import { ConfigError, LolzteamError, NetworkError } from "./errors.js";

export type ProxyFetch = (input: string | URL, init?: RequestInit) => Promise<Response>;

const isBrowser =
	typeof globalThis.document !== "undefined" ||
	(typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative");

export async function createProxyFetch(proxyUrl: string): Promise<ProxyFetch> {
	if (isBrowser) {
		throw new ConfigError(
			"Proxy is not supported in browser environments. Remove the proxy option or use a server-side runtime.",
		);
	}

	const parsed = new URL(proxyUrl);

	if (parsed.protocol === "socks5:") {
		return createSocks5Fetch(parsed);
	}

	return createHttpProxyFetch(parsed);
}

/* ---------- HTTP/HTTPS proxy via CONNECT tunnel ---------- */

async function createHttpProxyFetch(parsed: URL): Promise<ProxyFetch> {
	const net = await import("node:net");
	const tls = await import("node:tls");

	const proxyHost = parsed.hostname;
	const proxyPort = parsed.port ? Number.parseInt(parsed.port, 10) : 8080;
	const username = parsed.username ? decodeURIComponent(parsed.username) : undefined;
	const password = parsed.password ? decodeURIComponent(parsed.password) : undefined;

	return async (input, init = {}) => {
		const url = typeof input === "string" ? input : input.toString();
		const target = new URL(url);
		const isHttps = target.protocol === "https:";
		const targetPort = Number.parseInt(target.port || (isHttps ? "443" : "80"), 10);
		const targetHost = target.hostname;

		const socket = await new Promise<import("node:net").Socket>((resolve, reject) => {
			const s = net.connect(proxyPort, proxyHost, () => resolve(s));
			s.on("error", (err: unknown) => reject(new NetworkError(err)));
		});
		socket.pause();

		let tunnelSocket: TunnelSocket = socket;
		try {
			await performConnectHandshake(socket, targetHost, targetPort, username, password);

			if (isHttps) {
				const tlsSocket = tls.connect({ socket, servername: targetHost });
				await new Promise<void>((resolve, reject) => {
					tlsSocket.on("secureConnect", () => resolve());
					tlsSocket.on("error", (err: unknown) => reject(err));
				});
				tunnelSocket = tlsSocket;
			}
		} catch (err) {
			socket.destroy();
			throw err instanceof LolzteamError ? err : new NetworkError(err);
		}

		const reqHeaders: Record<string, string> = {};
		if (init.headers) {
			if (init.headers instanceof Headers) {
				init.headers.forEach((v, k) => {
					reqHeaders[k] = v;
				});
			} else if (!Array.isArray(init.headers)) {
				Object.assign(reqHeaders, init.headers);
			}
		}
		reqHeaders.Host = target.host;

		const bodyStr = init.body && typeof init.body === "string" ? init.body : undefined;

		return sendRawRequest(
			tunnelSocket,
			init.method ?? "GET",
			target,
			reqHeaders,
			bodyStr,
			init.signal ?? undefined,
		);
	};
}

/* ---------- Raw HTTP/1.1 request over tunnel socket ---------- */

type TunnelSocket = import("node:net").Socket | import("node:tls").TLSSocket;

async function sendRawRequest(
	tunnelSocket: TunnelSocket,
	method: string,
	url: URL,
	headers: Record<string, string>,
	body: string | undefined,
	signal: AbortSignal | undefined,
): Promise<Response> {
	const path = url.pathname + url.search;
	headers.Connection = "close";
	if (body !== undefined && headers["Content-Length"] === undefined) {
		headers["Content-Length"] = new TextEncoder().encode(body).length.toString();
	}

	let rawRequest = `${method} ${path} HTTP/1.1\r\n`;
	for (const [key, value] of Object.entries(headers)) {
		rawRequest += `${key}: ${value}\r\n`;
	}
	rawRequest += "\r\n";
	if (body !== undefined) {
		rawRequest += body;
	}

	return new Promise<Response>((resolve, reject) => {
		const chunks: Buffer[] = [];
		let settled = false;

		const cleanup = (): void => {
			tunnelSocket.removeListener("data", onData);
			tunnelSocket.removeListener("end", onEnd);
			tunnelSocket.removeListener("error", onError);
			if (signal !== undefined && onAbort !== undefined) {
				signal.removeEventListener("abort", onAbort);
			}
		};

		const settle = (fn: () => void): void => {
			if (settled) return;
			settled = true;
			cleanup();
			fn();
		};

		const onData = (chunk: Buffer): void => {
			chunks.push(chunk);
		};

		const onEnd = (): void => {
			settle(() => {
				const raw = Buffer.concat(chunks);
				const separatorIdx = raw.indexOf("\r\n\r\n");
				if (separatorIdx === -1) {
					reject(new NetworkError(new Error("Incomplete HTTP response: no header/body separator")));
					return;
				}

				const headerSection = raw.subarray(0, separatorIdx).toString();
				let bodyBuf: Uint8Array = raw.subarray(separatorIdx + 4);

				const headerLines = headerSection.split("\r\n");
				const statusLine = headerLines[0] ?? "";
				const statusMatch = statusLine.match(/^HTTP\/1\.[01] (\d{3})\s?(.*)/);
				const statusCode = statusMatch ? Number.parseInt(statusMatch[1] ?? "200", 10) : 200;
				const statusText = statusMatch?.[2] ?? "";

				const responseHeaders = new Headers();
				let isChunked = false;
				for (let i = 1; i < headerLines.length; i++) {
					const line = headerLines[i] ?? "";
					const colonIdx = line.indexOf(":");
					if (colonIdx === -1) continue;
					const key = line.substring(0, colonIdx).trim();
					const value = line.substring(colonIdx + 1).trim();
					responseHeaders.append(key, value);
					if (
						key.toLowerCase() === "transfer-encoding" &&
						value.toLowerCase().includes("chunked")
					) {
						isChunked = true;
					}
				}

				if (isChunked) {
					bodyBuf = decodeChunkedBody(bodyBuf);
					responseHeaders.delete("Transfer-Encoding");
				}

				resolve(
					new Response(new Uint8Array(bodyBuf).buffer, {
						status: statusCode,
						statusText,
						headers: responseHeaders,
					}),
				);
			});
		};

		const onError = (err: unknown): void => {
			settle(() => reject(new NetworkError(err)));
		};

		let onAbort: (() => void) | undefined;
		if (signal !== undefined) {
			onAbort = (): void => {
				settle(() => {
					tunnelSocket.destroy();
					reject(new Error("Request aborted"));
				});
			};
			if (signal.aborted) {
				onAbort();
				return;
			}
			signal.addEventListener("abort", onAbort, { once: true });
		}

		tunnelSocket.on("data", onData);
		tunnelSocket.on("end", onEnd);
		tunnelSocket.on("error", onError);
		tunnelSocket.resume();
		tunnelSocket.write(rawRequest);
	});
}

function decodeChunkedBody(buf: Uint8Array): Uint8Array {
	const chunks: Uint8Array[] = [];
	let totalLength = 0;
	let offset = 0;

	while (offset < buf.length) {
		let crlfIdx = -1;
		for (let i = offset; i < buf.length - 1; i++) {
			if (buf[i] === 0x0d && buf[i + 1] === 0x0a) {
				crlfIdx = i;
				break;
			}
		}
		if (crlfIdx === -1) break;

		const sizeHex = new TextDecoder().decode(buf.subarray(offset, crlfIdx)).trim();
		const chunkSize = Number.parseInt(sizeHex, 16);
		if (Number.isNaN(chunkSize) || chunkSize === 0) break;

		const dataStart = crlfIdx + 2;
		const dataEnd = dataStart + chunkSize;
		if (dataEnd > buf.length) break;

		chunks.push(buf.subarray(dataStart, dataEnd));
		totalLength += chunkSize;
		offset = dataEnd + 2;
	}

	return mergeUint8Arrays(chunks, totalLength);
}

/* ---------- HTTP CONNECT handshake ---------- */

async function performConnectHandshake(
	socket: ReadableSocket,
	targetHost: string,
	targetPort: number,
	username: string | undefined,
	password: string | undefined,
): Promise<void> {
	let connectReq = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r\nHost: ${targetHost}:${targetPort}\r\n`;
	if (username !== undefined && password !== undefined) {
		const credentials = btoa(`${username}:${password}`);
		connectReq += `Proxy-Authorization: Basic ${credentials}\r\n`;
	}
	connectReq += "\r\n";

	const encoder = new TextEncoder();
	socket.write(encoder.encode(connectReq));

	const response = await readUntilDoubleCrlf(socket);
	const statusLine = response.split("\r\n")[0] ?? "";
	const statusMatch = statusLine.match(/^HTTP\/1\.[01] (\d{3})/);
	if (!statusMatch) {
		throw new NetworkError(new Error(`HTTP proxy returned invalid response: ${statusLine}`));
	}
	const statusCode = Number.parseInt(statusMatch[1] ?? "0", 10);
	if (statusCode !== 200) {
		throw new NetworkError(
			new Error(`HTTP proxy CONNECT failed with status ${statusCode}: ${statusLine}`),
		);
	}
}

function readUntilDoubleCrlf(socket: ReadableSocket): Promise<string> {
	return new Promise((resolve, reject) => {
		const chunks: Uint8Array[] = [];
		let totalLength = 0;
		const decoder = new TextDecoder();
		const MARKER = "\r\n\r\n";

		const cleanup = (): void => {
			socket.removeListener("data", onData);
			socket.removeListener("error", onError);
			socket.removeListener("close", onClose);
		};

		const onData = (data: unknown): void => {
			const chunk = data as Uint8Array;
			chunks.push(chunk);
			totalLength += chunk.length;
			const merged = mergeUint8Arrays(chunks, totalLength);
			const text = decoder.decode(merged);
			const idx = text.indexOf(MARKER);
			if (idx !== -1) {
				cleanup();
				resolve(text.substring(0, idx + MARKER.length));
			}
		};

		const onError = (err: unknown): void => {
			cleanup();
			reject(err);
		};

		const onClose = (): void => {
			cleanup();
			reject(new Error("HTTP proxy closed the connection before completing CONNECT handshake."));
		};

		socket.on("data", onData);
		socket.on("error", onError);
		socket.on("close", onClose);
		socket.resume();
	});
}

/* ---------- SOCKS5 proxy via node:net ---------- */

async function createSocks5Fetch(parsed: URL): Promise<ProxyFetch> {
	const net = await import("node:net");
	const tls = await import("node:tls");

	const proxyHost = parsed.hostname;
	const proxyPort = parsed.port ? Number.parseInt(parsed.port, 10) : 1080;
	const username = parsed.username ? decodeURIComponent(parsed.username) : undefined;
	const password = parsed.password ? decodeURIComponent(parsed.password) : undefined;
	const encoder = new TextEncoder();

	return async (input, init = {}) => {
		const url = typeof input === "string" ? input : input.toString();
		const target = new URL(url);
		const isHttps = target.protocol === "https:";
		const targetPort = Number.parseInt(target.port || (isHttps ? "443" : "80"), 10);

		const socket = await new Promise<import("node:net").Socket>((resolve, reject) => {
			const s = net.connect(proxyPort, proxyHost, () => resolve(s));
			s.on("error", (err: unknown) => reject(new NetworkError(err)));
		});
		socket.pause();

		let tunnelSocket: TunnelSocket = socket;
		try {
			await performSocks5Handshake(
				socket,
				target.hostname,
				targetPort,
				username,
				password,
				encoder,
			);

			if (isHttps) {
				const tlsSocket = tls.connect({ socket, servername: target.hostname });
				await new Promise<void>((resolve, reject) => {
					tlsSocket.on("secureConnect", () => resolve());
					tlsSocket.on("error", (err: unknown) => reject(err));
				});
				tunnelSocket = tlsSocket;
			}
		} catch (err) {
			socket.destroy();
			throw err instanceof LolzteamError ? err : new NetworkError(err);
		}

		const reqHeaders: Record<string, string> = {};
		if (init.headers) {
			if (init.headers instanceof Headers) {
				init.headers.forEach((v, k) => {
					reqHeaders[k] = v;
				});
			} else if (!Array.isArray(init.headers)) {
				Object.assign(reqHeaders, init.headers);
			}
		}
		reqHeaders.Host = target.host;

		const bodyStr = init.body && typeof init.body === "string" ? init.body : undefined;

		return sendRawRequest(
			tunnelSocket,
			init.method ?? "GET",
			target,
			reqHeaders,
			bodyStr,
			init.signal ?? undefined,
		);
	};
}

/* ---------- SOCKS5 protocol implementation (RFC 1928 / 1929) ---------- */

interface ReadableSocket {
	write(data: Uint8Array): boolean;
	on(event: string, listener: (...args: unknown[]) => void): void;
	removeListener(event: string, listener: (...args: unknown[]) => void): void;
	resume(): void;
}

class SocketReader {
	private pending: Uint8Array[] = [];
	private pendingLength = 0;

	feed(chunk: Uint8Array): void {
		this.pending.push(chunk);
		this.pendingLength += chunk.length;
	}

	take(length: number): Uint8Array | null {
		if (this.pendingLength < length) return null;
		const merged = mergeUint8Arrays(this.pending, this.pendingLength);
		this.pending = merged.length > length ? [merged.subarray(length)] : [];
		this.pendingLength = merged.length > length ? merged.length - length : 0;
		return merged.subarray(0, length);
	}
}

async function performSocks5Handshake(
	socket: ReadableSocket,
	targetHost: string,
	targetPort: number,
	username: string | undefined,
	password: string | undefined,
	encoder: TextEncoder,
): Promise<void> {
	const reader = new SocketReader();
	const read = (n: number) => readExact(socket, reader, n);

	const hasAuth = username !== undefined && password !== undefined;

	const greeting = hasAuth
		? new Uint8Array([0x05, 0x02, 0x00, 0x02])
		: new Uint8Array([0x05, 0x01, 0x00]);

	socket.write(greeting);
	const greetingResponse = await read(2);

	if (greetingResponse[0] !== 0x05) {
		throw new NetworkError(
			new Error(`SOCKS5 proxy returned invalid version: 0x${greetingResponse[0]?.toString(16)}`),
		);
	}

	const chosenMethod = greetingResponse[1];

	if (chosenMethod === 0x02 && hasAuth) {
		const userBuf = encoder.encode(username);
		const passBuf = encoder.encode(password);
		const authReq = new Uint8Array(3 + userBuf.length + passBuf.length);
		authReq[0] = 0x01;
		authReq[1] = userBuf.length;
		authReq.set(userBuf, 2);
		authReq[2 + userBuf.length] = passBuf.length;
		authReq.set(passBuf, 3 + userBuf.length);

		socket.write(authReq);
		const authResponse = await read(2);

		if (authResponse[1] !== 0x00) {
			throw new NetworkError(new Error("SOCKS5 proxy authentication failed."));
		}
	} else if (chosenMethod !== 0x00) {
		throw new NetworkError(
			new Error(`SOCKS5 proxy requires unsupported auth method: 0x${chosenMethod?.toString(16)}`),
		);
	}

	const hostBuf = encoder.encode(targetHost);
	const connectReq = new Uint8Array(7 + hostBuf.length);
	connectReq[0] = 0x05;
	connectReq[1] = 0x01;
	connectReq[2] = 0x00;
	connectReq[3] = 0x03;
	connectReq[4] = hostBuf.length;
	connectReq.set(hostBuf, 5);
	const view = new DataView(connectReq.buffer);
	view.setUint16(5 + hostBuf.length, targetPort, false);

	socket.write(connectReq);

	const connectResponse = await read(4);

	if (connectResponse[0] !== 0x05) {
		throw new NetworkError(new Error("SOCKS5 proxy returned invalid version in connect response."));
	}

	if (connectResponse[1] !== 0x00) {
		const reasons: Record<number, string> = {
			1: "general SOCKS server failure",
			2: "connection not allowed by ruleset",
			3: "network unreachable",
			4: "host unreachable",
			5: "connection refused",
			6: "TTL expired",
			7: "command not supported",
			8: "address type not supported",
		};
		const code = connectResponse[1] ?? 0;
		const reason = reasons[code] ?? `unknown error 0x${code.toString(16)}`;
		throw new NetworkError(new Error(`SOCKS5 connect failed: ${reason}`));
	}

	const addrType = connectResponse[3];
	if (addrType === 0x01) {
		await read(6);
	} else if (addrType === 0x04) {
		await read(18);
	} else if (addrType === 0x03) {
		const lenBuf = await read(1);
		await read((lenBuf[0] ?? 0) + 2);
	}
}

function readExact(
	socket: ReadableSocket,
	reader: SocketReader,
	length: number,
): Promise<Uint8Array> {
	const buffered = reader.take(length);
	if (buffered) return Promise.resolve(buffered);

	return new Promise((resolve, reject) => {
		const cleanup = (): void => {
			socket.removeListener("data", onData);
			socket.removeListener("error", onError);
			socket.removeListener("close", onClose);
		};

		const onData = (data: unknown): void => {
			reader.feed(data as Uint8Array);
			const result = reader.take(length);
			if (result) {
				cleanup();
				resolve(result);
			}
		};

		const onError = (err: unknown): void => {
			cleanup();
			reject(err);
		};

		const onClose = (): void => {
			cleanup();
			reject(new Error("SOCKS5 proxy closed the connection unexpectedly."));
		};

		socket.on("data", onData);
		socket.on("error", onError);
		socket.on("close", onClose);
		socket.resume();
	});
}

function mergeUint8Arrays(chunks: Uint8Array[], totalLength: number): Uint8Array {
	if (chunks.length === 1 && chunks[0]?.length === totalLength) {
		return chunks[0];
	}
	const result = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		result.set(chunk, offset);
		offset += chunk.length;
	}
	return result;
}

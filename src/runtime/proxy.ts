import { ConfigError, LolzteamError, NetworkError } from "./errors.js";

const isBrowser =
	typeof globalThis.document !== "undefined" ||
	(typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative");

export async function createProxyDispatcher(proxyUrl: string): Promise<unknown> {
	if (isBrowser) {
		throw new ConfigError(
			"Proxy is not supported in browser environments. Remove the proxy option or use a server-side runtime.",
		);
	}

	const parsed = new URL(proxyUrl);

	if (parsed.protocol === "socks5:") {
		return createSocks5Dispatcher(parsed);
	}

	try {
		const { ProxyAgent } = await import("undici");
		return new ProxyAgent(proxyUrl);
	} catch {
		throw new LolzteamError(
			`Proxy configured (${proxyUrl}) but "undici" is not installed. Run: npm install undici`,
		);
	}
}

async function createSocks5Dispatcher(parsed: URL): Promise<unknown> {
	const proxyHost = parsed.hostname;
	const proxyPort = parsed.port ? Number.parseInt(parsed.port, 10) : 1080;
	const username = parsed.username ? decodeURIComponent(parsed.username) : undefined;
	const password = parsed.password ? decodeURIComponent(parsed.password) : undefined;

	try {
		const { Agent } = await import("undici");
		const net = await import("node:net");
		const tls = await import("node:tls");
		const encoder = new TextEncoder();

		return new Agent({
			connect(options, callback) {
				const targetHost = options.hostname;
				const targetPort = Number.parseInt(options.port, 10);

				const socket = net.connect(proxyPort, proxyHost, () => {
					performSocks5Handshake(socket, targetHost, targetPort, username, password, encoder)
						.then(() => {
							if (options.protocol === "https:") {
								const tlsSocket = tls.connect(
									{ socket, servername: options.servername ?? options.hostname },
									() => callback(null, tlsSocket),
								);
								tlsSocket.on("error", (err: unknown) => {
									callback(err instanceof Error ? err : new Error(String(err)), null);
								});
							} else {
								callback(null, socket);
							}
						})
						.catch((err: Error) => callback(err, null));
				});
				socket.on("error", (err: unknown) => {
					callback(err instanceof Error ? err : new Error(String(err)), null);
				});
			},
		});
	} catch {
		throw new LolzteamError(
			`SOCKS5 proxy configured but "undici" is not installed. Run: npm install undici`,
		);
	}
}

/* ---------- SOCKS5 protocol implementation (RFC 1928 / 1929) ---------- */

interface ReadableSocket {
	write(data: Uint8Array): boolean;
	on(event: string, listener: (...args: unknown[]) => void): void;
	removeListener(event: string, listener: (...args: unknown[]) => void): void;
	unshift(data: Uint8Array): void;
}

async function performSocks5Handshake(
	socket: ReadableSocket,
	targetHost: string,
	targetPort: number,
	username: string | undefined,
	password: string | undefined,
	encoder: TextEncoder,
): Promise<void> {
	const hasAuth = username !== undefined && password !== undefined;

	// Greeting: version, number of methods, methods
	const greeting = hasAuth
		? new Uint8Array([0x05, 0x02, 0x00, 0x02])
		: new Uint8Array([0x05, 0x01, 0x00]);

	socket.write(greeting);
	const greetingResponse = await readExact(socket, 2);

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
		const authResponse = await readExact(socket, 2);

		if (authResponse[1] !== 0x00) {
			throw new NetworkError(new Error("SOCKS5 proxy authentication failed."));
		}
	} else if (chosenMethod !== 0x00) {
		throw new NetworkError(
			new Error(`SOCKS5 proxy requires unsupported auth method: 0x${chosenMethod?.toString(16)}`),
		);
	}

	// Connect request: version, cmd=connect, reserved, addr_type=domain, len, host, port
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

	const connectResponse = await readExact(socket, 4);

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

	// Consume bound address so socket is ready for data
	const addrType = connectResponse[3];
	if (addrType === 0x01) {
		await readExact(socket, 6); // IPv4 (4) + port (2)
	} else if (addrType === 0x04) {
		await readExact(socket, 18); // IPv6 (16) + port (2)
	} else if (addrType === 0x03) {
		const lenBuf = await readExact(socket, 1);
		await readExact(socket, (lenBuf[0] ?? 0) + 2); // domain + port
	}
}

function readExact(socket: ReadableSocket, length: number): Promise<Uint8Array> {
	return new Promise((resolve, reject) => {
		const chunks: Uint8Array[] = [];
		let received = 0;

		const cleanup = (): void => {
			socket.removeListener("data", onData);
			socket.removeListener("error", onError);
			socket.removeListener("close", onClose);
		};

		const onData = (data: unknown): void => {
			const chunk = data as Uint8Array;
			chunks.push(chunk);
			received += chunk.length;
			if (received >= length) {
				cleanup();
				const merged = mergeUint8Arrays(chunks, received);
				if (received > length) {
					socket.unshift(merged.subarray(length));
				}
				resolve(merged.subarray(0, length));
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

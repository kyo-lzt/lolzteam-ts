declare module "node:net" {
	interface Socket {
		write(data: Uint8Array): boolean;
		on(event: string, listener: (...args: unknown[]) => void): this;
		removeListener(event: string, listener: (...args: unknown[]) => void): this;
		unshift(data: Uint8Array): void;
	}

	function connect(port: number, host: string, callback: () => void): Socket;
}

declare module "node:tls" {
	import type { Socket } from "node:net";

	interface TLSSocket extends Socket {}

	interface TlsConnectOptions {
		socket: Socket;
		servername: string;
	}

	function connect(options: TlsConnectOptions, callback: () => void): TLSSocket;
}

declare module "undici" {
	import type { Socket } from "node:net";
	import type { TLSSocket } from "node:tls";

	export class ProxyAgent {
		constructor(url: string);
		close(): Promise<void>;
	}

	interface AgentConnectOptions {
		hostname: string;
		host: string;
		protocol: string;
		port: string;
		servername?: string;
	}

	type AgentConnectCallback = (err: Error | null, socket: Socket | TLSSocket | null) => void;

	type AgentConnectFunction = (
		options: AgentConnectOptions,
		callback: AgentConnectCallback,
	) => void;

	interface AgentOptions {
		connect?: AgentConnectFunction;
	}

	export class Agent {
		constructor(options?: AgentOptions);
		close(): Promise<void>;
	}
}

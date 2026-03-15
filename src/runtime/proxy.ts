import { ConfigError, LolzteamError } from "./errors.js";

const isBrowser =
	typeof globalThis.document !== "undefined" ||
	(typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative");

export async function createProxyDispatcher(proxyUrl: string): Promise<unknown> {
	if (isBrowser) {
		throw new ConfigError(
			"Proxy is not supported in browser environments. Remove the proxy option or use a server-side runtime.",
		);
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

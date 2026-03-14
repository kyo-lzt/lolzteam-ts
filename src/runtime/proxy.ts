import { LolzteamError } from "./errors.js";

export async function createProxyDispatcher(proxyUrl: string): Promise<unknown> {
	try {
		const { ProxyAgent } = await import("undici");
		return new ProxyAgent(proxyUrl);
	} catch {
		throw new LolzteamError(
			`Proxy configured (${proxyUrl}) but "undici" is not installed. Run: bun add undici`,
		);
	}
}

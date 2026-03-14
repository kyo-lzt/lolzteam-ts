// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { AssetsCssParams, AssetsCssResponse } from "./types.js";

export class AssetsApi {
	constructor(private readonly http: HttpClient) {}

	async css(params?: AssetsCssParams): Promise<AssetsCssResponse> {
		return this.http.request({
			method: "GET",
			path: "/css",
			query: params,
		});
	}
}

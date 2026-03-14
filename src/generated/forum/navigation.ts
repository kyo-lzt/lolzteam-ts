// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { NavigationListParams, NavigationListResponse } from "./types.js";

export class NavigationApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: NavigationListParams): Promise<NavigationListResponse> {
		return this.http.request({
			method: "GET",
			path: "/navigation",
			query: params,
		});
	}
}

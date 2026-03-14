// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { PagesGetResponse, PagesListParams, PagesListResponse } from "./types.js";

export class PagesApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: PagesListParams): Promise<PagesListResponse> {
		return this.http.request({
			method: "GET",
			path: "/pages",
			query: params,
		});
	}

	async get(page_id: number): Promise<PagesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/pages/${page_id}`,
		});
	}
}

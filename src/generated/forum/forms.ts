// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { FormsCreateBody, FormsCreateResponse, FormsListParams, FormsListResponse } from "./types.js";

export class FormsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: FormsListParams): Promise<FormsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/forms",
			query: params,
		});
	}

	async create(body?: FormsCreateBody): Promise<FormsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/forms/save",
			body: body,
		});
	}
}

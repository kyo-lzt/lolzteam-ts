// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { TagsFindParams, TagsFindResponse, TagsGetParams, TagsGetResponse, TagsListParams, TagsListResponse, TagsPopularResponse } from "./types.js";

export class TagsApi {
	constructor(private readonly http: HttpClient) {}

	async popular(): Promise<TagsPopularResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags",
		});
	}

	async list(params?: TagsListParams): Promise<TagsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags/list",
			query: params,
		});
	}

	async get(tag_id: number, params?: TagsGetParams): Promise<TagsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/tags/${tag_id}`,
			query: params,
		});
	}

	async find(params?: TagsFindParams): Promise<TagsFindResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags/find",
			query: params,
		});
	}
}

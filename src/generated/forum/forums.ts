// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ForumsEditFeedOptionsBody, ForumsEditFeedOptionsResponse, ForumsFollowBody, ForumsFollowResponse, ForumsFollowedParams, ForumsFollowedResponse, ForumsFollowersResponse, ForumsGetFeedOptionsResponse, ForumsGetResponse, ForumsGroupedResponse, ForumsListParams, ForumsListResponse, ForumsUnfollowResponse } from "./types.js";

export class ForumsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: ForumsListParams): Promise<ForumsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums",
			query: params,
		});
	}

	async grouped(): Promise<ForumsGroupedResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/grouped",
		});
	}

	async get(forum_id: number): Promise<ForumsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/forums/${forum_id}`,
		});
	}

	async followers(forum_id: number): Promise<ForumsFollowersResponse> {
		return this.http.request({
			method: "GET",
			path: `/forums/${forum_id}/followers`,
		});
	}

	async follow(forum_id: number, body?: ForumsFollowBody): Promise<ForumsFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/forums/${forum_id}/followers`,
			body: body,
		});
	}

	async unfollow(forum_id: number): Promise<ForumsUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/forums/${forum_id}/followers`,
		});
	}

	async followed(params?: ForumsFollowedParams): Promise<ForumsFollowedResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/followed",
			query: params,
		});
	}

	async getFeedOptions(): Promise<ForumsGetFeedOptionsResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/feed/options",
		});
	}

	async editFeedOptions(body?: ForumsEditFeedOptionsBody): Promise<ForumsEditFeedOptionsResponse> {
		return this.http.request({
			method: "PUT",
			path: "/forums/feed/options",
			body: body,
		});
	}
}

// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ThreadsBumpResponse, ThreadsClaimBody, ThreadsClaimResponse, ThreadsCreateBody, ThreadsCreateContestBody, ThreadsCreateContestResponse, ThreadsCreateResponse, ThreadsDeleteBody, ThreadsDeleteResponse, ThreadsEditBody, ThreadsEditResponse, ThreadsFinishResponse, ThreadsFollowBody, ThreadsFollowResponse, ThreadsFollowedParams, ThreadsFollowedResponse, ThreadsFollowersResponse, ThreadsGetParams, ThreadsGetResponse, ThreadsHideResponse, ThreadsListParams, ThreadsListResponse, ThreadsMoveBody, ThreadsMoveResponse, ThreadsNavigationResponse, ThreadsPollGetResponse, ThreadsPollVoteBody, ThreadsPollVoteResponse, ThreadsRecentParams, ThreadsRecentResponse, ThreadsStarResponse, ThreadsUnfollowResponse, ThreadsUnreadParams, ThreadsUnreadResponse, ThreadsUnstarResponse } from "./types.js";

export class ThreadsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: ThreadsListParams): Promise<ThreadsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads",
			query: params,
		});
	}

	async create(body?: ThreadsCreateBody): Promise<ThreadsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/threads",
			body: body,
		});
	}

	async createContest(body: ThreadsCreateContestBody): Promise<ThreadsCreateContestResponse> {
		return this.http.request({
			method: "POST",
			path: "/contests",
			body: body,
		});
	}

	async claim(body?: ThreadsClaimBody): Promise<ThreadsClaimResponse> {
		return this.http.request({
			method: "POST",
			path: "/claims",
			body: body,
		});
	}

	async get(thread_id: number, params?: ThreadsGetParams): Promise<ThreadsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}`,
			query: params,
		});
	}

	async edit(thread_id: number, body?: ThreadsEditBody): Promise<ThreadsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/threads/${thread_id}`,
			body: body,
		});
	}

	async delete(thread_id: number, body?: ThreadsDeleteBody): Promise<ThreadsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}`,
			body: body,
		});
	}

	async move(thread_id: number, body?: ThreadsMoveBody): Promise<ThreadsMoveResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/move`,
			body: body,
		});
	}

	async bump(thread_id: number): Promise<ThreadsBumpResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/bump`,
		});
	}

	async hide(thread_id: number): Promise<ThreadsHideResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/hide`,
		});
	}

	async star(thread_id: number): Promise<ThreadsStarResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/star`,
		});
	}

	async unstar(thread_id: number): Promise<ThreadsUnstarResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}/star`,
		});
	}

	async followers(thread_id: number): Promise<ThreadsFollowersResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/followers`,
		});
	}

	async follow(thread_id: number, body?: ThreadsFollowBody): Promise<ThreadsFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/followers`,
			body: body,
		});
	}

	async unfollow(thread_id: number): Promise<ThreadsUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}/followers`,
		});
	}

	async followed(params?: ThreadsFollowedParams): Promise<ThreadsFollowedResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/followed",
			query: params,
		});
	}

	async navigation(thread_id: number): Promise<ThreadsNavigationResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/navigation`,
		});
	}

	async pollGet(thread_id: number): Promise<ThreadsPollGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/poll`,
		});
	}

	async pollVote(thread_id: number, body?: ThreadsPollVoteBody): Promise<ThreadsPollVoteResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/poll/votes`,
			body: body,
		});
	}

	async unread(params?: ThreadsUnreadParams): Promise<ThreadsUnreadResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/new",
			query: params,
		});
	}

	async recent(params?: ThreadsRecentParams): Promise<ThreadsRecentResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/recent",
			query: params,
		});
	}

	async finish(thread_id: number): Promise<ThreadsFinishResponse> {
		return this.http.request({
			method: "POST",
			path: `/contests/${thread_id}/finish`,
		});
	}
}

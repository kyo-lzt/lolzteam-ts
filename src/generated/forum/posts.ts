// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { PostsCommentsCreateBody, PostsCommentsCreateResponse, PostsCommentsDeleteBody, PostsCommentsDeleteResponse, PostsCommentsEditBody, PostsCommentsEditResponse, PostsCommentsGetParams, PostsCommentsGetResponse, PostsCommentsReportBody, PostsCommentsReportResponse, PostsCreateBody, PostsCreateResponse, PostsDeleteBody, PostsDeleteResponse, PostsEditBody, PostsEditResponse, PostsGetResponse, PostsLikeResponse, PostsLikesParams, PostsLikesResponse, PostsListParams, PostsListResponse, PostsReportBody, PostsReportReasonsResponse, PostsReportResponse, PostsUnlikeResponse } from "./types.js";

export class PostsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: PostsListParams): Promise<PostsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/posts",
			query: params,
		});
	}

	async create(body?: PostsCreateBody): Promise<PostsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts",
			body: body,
		});
	}

	async get(post_id: number): Promise<PostsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}`,
		});
	}

	async edit(post_id: number, body?: PostsEditBody): Promise<PostsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/posts/${post_id}`,
			body: body,
		});
	}

	async delete(post_id: number, body?: PostsDeleteBody): Promise<PostsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/posts/${post_id}`,
			body: body,
		});
	}

	async likes(post_id: number, params?: PostsLikesParams): Promise<PostsLikesResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}/likes`,
			query: params,
		});
	}

	async like(post_id: number): Promise<PostsLikeResponse> {
		return this.http.request({
			method: "POST",
			path: `/posts/${post_id}/likes`,
		});
	}

	async unlike(post_id: number): Promise<PostsUnlikeResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/posts/${post_id}/likes`,
		});
	}

	async reportReasons(post_id: number): Promise<PostsReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}/report`,
		});
	}

	async report(post_id: number, body?: PostsReportBody): Promise<PostsReportResponse> {
		return this.http.request({
			method: "POST",
			path: `/posts/${post_id}/report`,
			body: body,
		});
	}

	async commentsGet(params?: PostsCommentsGetParams): Promise<PostsCommentsGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/posts/comments",
			query: params,
		});
	}

	async commentsCreate(body?: PostsCommentsCreateBody): Promise<PostsCommentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts/comments",
			body: body,
		});
	}

	async commentsEdit(body?: PostsCommentsEditBody): Promise<PostsCommentsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/posts/comments",
			body: body,
		});
	}

	async commentsDelete(body?: PostsCommentsDeleteBody): Promise<PostsCommentsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/posts/comments",
			body: body,
		});
	}

	async commentsReport(body?: PostsCommentsReportBody): Promise<PostsCommentsReportResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts/comments/report",
			body: body,
		});
	}
}

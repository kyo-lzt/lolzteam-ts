// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ProfilePostsCommentsCreateBody, ProfilePostsCommentsCreateResponse, ProfilePostsCommentsDeleteBody, ProfilePostsCommentsDeleteResponse, ProfilePostsCommentsEditBody, ProfilePostsCommentsEditResponse, ProfilePostsCommentsGetResponse, ProfilePostsCommentsListParams, ProfilePostsCommentsListResponse, ProfilePostsCommentsReportBody, ProfilePostsCommentsReportResponse, ProfilePostsCreateBody, ProfilePostsCreateResponse, ProfilePostsDeleteParams, ProfilePostsDeleteResponse, ProfilePostsEditBody, ProfilePostsEditResponse, ProfilePostsGetResponse, ProfilePostsLikeResponse, ProfilePostsLikesResponse, ProfilePostsListParams, ProfilePostsListResponse, ProfilePostsReportBody, ProfilePostsReportReasonsResponse, ProfilePostsReportResponse, ProfilePostsStickResponse, ProfilePostsUnlikeResponse, ProfilePostsUnstickResponse } from "./types.js";

export class ProfilePostsApi {
	constructor(private readonly http: HttpClient) {}

	async list(user_id: string | number, params?: ProfilePostsListParams): Promise<ProfilePostsListResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/profile-posts`,
			query: params,
		});
	}

	async get(profile_post_id: number): Promise<ProfilePostsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}`,
		});
	}

	async edit(profile_post_id: number, body?: ProfilePostsEditBody): Promise<ProfilePostsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/profile-posts/${profile_post_id}`,
			body: body,
		});
	}

	async delete(profile_post_id: number, params?: ProfilePostsDeleteParams): Promise<ProfilePostsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}`,
			query: params,
		});
	}

	async reportReasons(profile_post_id: number): Promise<ProfilePostsReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/report`,
		});
	}

	async report(profile_post_id: number, body?: ProfilePostsReportBody): Promise<ProfilePostsReportResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/report`,
			body: body,
		});
	}

	async create(body?: ProfilePostsCreateBody): Promise<ProfilePostsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/profile-posts",
			body: body,
		});
	}

	async stick(profile_post_id: number): Promise<ProfilePostsStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/stick`,
		});
	}

	async unstick(profile_post_id: number): Promise<ProfilePostsUnstickResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}/stick`,
		});
	}

	async likes(profile_post_id: number): Promise<ProfilePostsLikesResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	async like(profile_post_id: number): Promise<ProfilePostsLikeResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	async unlike(profile_post_id: number): Promise<ProfilePostsUnlikeResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	async commentsList(params?: ProfilePostsCommentsListParams): Promise<ProfilePostsCommentsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/profile-posts/comments",
			query: params,
		});
	}

	async commentsCreate(body?: ProfilePostsCommentsCreateBody): Promise<ProfilePostsCommentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/profile-posts/comments",
			body: body,
		});
	}

	async commentsEdit(body?: ProfilePostsCommentsEditBody): Promise<ProfilePostsCommentsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/profile-posts/comments",
			body: body,
		});
	}

	async commentsDelete(body?: ProfilePostsCommentsDeleteBody): Promise<ProfilePostsCommentsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/profile-posts/comments",
			body: body,
		});
	}

	async commentsGet(profile_post_id: number, comment_id: number): Promise<ProfilePostsCommentsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/comments/${comment_id}`,
		});
	}

	async commentsReport(comment_id: number, body?: ProfilePostsCommentsReportBody): Promise<ProfilePostsCommentsReportResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/comments/${comment_id}/report`,
			body: body,
		});
	}
}

// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { UsersAvatarCropBody, UsersAvatarCropResponse, UsersAvatarDeleteResponse, UsersAvatarUploadBody, UsersAvatarUploadResponse, UsersBackgroundCropBody, UsersBackgroundCropResponse, UsersBackgroundDeleteResponse, UsersBackgroundUploadBody, UsersBackgroundUploadResponse, UsersClaimsParams, UsersClaimsResponse, UsersContentsParams, UsersContentsResponse, UsersEditBody, UsersEditResponse, UsersFieldsResponse, UsersFindParams, UsersFindResponse, UsersFollowResponse, UsersFollowersParams, UsersFollowersResponse, UsersFollowingsParams, UsersFollowingsResponse, UsersGetParams, UsersGetResponse, UsersIgnoreEditParams, UsersIgnoreEditResponse, UsersIgnoreResponse, UsersIgnoredParams, UsersIgnoredResponse, UsersLikesParams, UsersLikesResponse, UsersListParams, UsersListResponse, UsersSaCancelResetResponse, UsersSaResetResponse, UsersSecretAnswerTypesResponse, UsersTrophiesResponse, UsersUnfollowResponse, UsersUnignoreResponse } from "./types.js";

export class UsersApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: UsersListParams): Promise<UsersListResponse> {
		return this.http.request({
			method: "GET",
			path: "/users",
			query: params,
		});
	}

	async fields(): Promise<UsersFieldsResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/fields",
		});
	}

	async find(params?: UsersFindParams): Promise<UsersFindResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/find",
			query: params,
		});
	}

	async get(user_id: string | number, params?: UsersGetParams): Promise<UsersGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}`,
			query: params,
		});
	}

	async edit(user_id: string | number, body?: UsersEditBody): Promise<UsersEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/users/${user_id}`,
			body: body,
		});
	}

	async claims(user_id: string | number, params?: UsersClaimsParams): Promise<UsersClaimsResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/claims`,
			query: params,
		});
	}

	async avatarUpload(user_id: string | number, body?: UsersAvatarUploadBody): Promise<UsersAvatarUploadResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/avatar`,
			body: body,
			multipart: true,
		});
	}

	async avatarDelete(user_id: string | number): Promise<UsersAvatarDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/avatar`,
		});
	}

	async avatarCrop(user_id: string | number, body?: UsersAvatarCropBody): Promise<UsersAvatarCropResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/avatar/crop`,
			body: body,
		});
	}

	async backgroundUpload(user_id: string | number, body?: UsersBackgroundUploadBody): Promise<UsersBackgroundUploadResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/background`,
			body: body,
			multipart: true,
		});
	}

	async backgroundDelete(user_id: string | number): Promise<UsersBackgroundDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/background`,
		});
	}

	async backgroundCrop(user_id: string | number, body: UsersBackgroundCropBody): Promise<UsersBackgroundCropResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/background/crop`,
			body: body,
		});
	}

	async followers(user_id: string | number, params?: UsersFollowersParams): Promise<UsersFollowersResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/followers`,
			query: params,
		});
	}

	async follow(user_id: string | number): Promise<UsersFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/followers`,
		});
	}

	async unfollow(user_id: string | number): Promise<UsersUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/followers`,
		});
	}

	async followings(user_id: string | number, params?: UsersFollowingsParams): Promise<UsersFollowingsResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/followings`,
			query: params,
		});
	}

	async likes(user_id: string | number, params?: UsersLikesParams): Promise<UsersLikesResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/likes`,
			query: params,
		});
	}

	async ignored(params?: UsersIgnoredParams): Promise<UsersIgnoredResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/ignored",
			query: params,
		});
	}

	async ignore(user_id: string | number): Promise<UsersIgnoreResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/ignore`,
		});
	}

	async ignoreEdit(user_id: string | number, params?: UsersIgnoreEditParams): Promise<UsersIgnoreEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/users/${user_id}/ignore`,
			query: params,
		});
	}

	async unignore(user_id: string | number): Promise<UsersUnignoreResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/ignore`,
		});
	}

	async contents(user_id: string | number, params?: UsersContentsParams): Promise<UsersContentsResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/timeline`,
			query: params,
		});
	}

	async trophies(user_id: string | number): Promise<UsersTrophiesResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/trophies`,
		});
	}

	async secretAnswerTypes(): Promise<UsersSecretAnswerTypesResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/secret-answer/types",
		});
	}

	async saReset(): Promise<UsersSaResetResponse> {
		return this.http.request({
			method: "POST",
			path: "/account/secret-answer/reset",
		});
	}

	async saCancelReset(): Promise<UsersSaCancelResetResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/account/secret-answer/reset",
		});
	}
}

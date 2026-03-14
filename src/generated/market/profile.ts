// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ProfileClaimsParams, ProfileClaimsResponse, ProfileEditBody, ProfileEditResponse, ProfileGetParams, ProfileGetResponse } from "./types.js";

export class ProfileApi {
	constructor(private readonly http: HttpClient) {}

	async claims(params?: ProfileClaimsParams): Promise<ProfileClaimsResponse> {
		return this.http.request({
			method: "GET",
			path: "/claims",
			query: params,
		});
	}

	async get(params?: ProfileGetParams): Promise<ProfileGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/me",
			query: params,
		});
	}

	async edit(body?: ProfileEditBody): Promise<ProfileEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/me",
			body: body,
		});
	}
}

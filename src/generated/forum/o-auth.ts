// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { OAuthTokenBody, OAuthTokenResponse } from "./types.js";

export class OAuthApi {
	constructor(private readonly http: HttpClient) {}

	async token(body: OAuthTokenBody): Promise<OAuthTokenResponse> {
		return this.http.request({
			method: "POST",
			path: "/oauth/token",
			body: body,
			multipart: true,
		});
	}
}

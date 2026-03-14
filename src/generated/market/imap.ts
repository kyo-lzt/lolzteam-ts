// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ImapCreateBody, ImapCreateResponse, ImapDeleteBody, ImapDeleteResponse } from "./types.js";

export class ImapApi {
	constructor(private readonly http: HttpClient) {}

	async create(body?: ImapCreateBody): Promise<ImapCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/imap",
			body: body,
		});
	}

	async delete(body?: ImapDeleteBody): Promise<ImapDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/imap",
			body: body,
		});
	}
}

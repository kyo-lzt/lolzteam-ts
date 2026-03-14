// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { LinksGetResponse, LinksListResponse } from "./types.js";

export class LinksApi {
	constructor(private readonly http: HttpClient) {}

	async list(): Promise<LinksListResponse> {
		return this.http.request({
			method: "GET",
			path: "/link-forums",
		});
	}

	async get(link_id: number): Promise<LinksGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/link-forums/${link_id}`,
		});
	}
}

// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ProxyAddBody, ProxyAddResponse, ProxyDeleteBody, ProxyDeleteResponse, ProxyGetResponse } from "./types.js";

export class ProxyApi {
	constructor(private readonly http: HttpClient) {}

	async get(): Promise<ProxyGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/proxy",
		});
	}

	async add(body: ProxyAddBody): Promise<ProxyAddResponse> {
		return this.http.request({
			method: "POST",
			path: "/proxy",
			body: body,
		});
	}

	async delete(body?: ProxyDeleteBody): Promise<ProxyDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/proxy",
			body: body,
		});
	}
}

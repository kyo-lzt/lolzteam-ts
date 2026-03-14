// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { PublishingAddBody, PublishingAddResponse, PublishingCheckBody, PublishingCheckResponse, PublishingExternalBody, PublishingExternalResponse, PublishingFastSellBody, PublishingFastSellResponse } from "./types.js";

export class PublishingApi {
	constructor(private readonly http: HttpClient) {}

	async fastSell(body?: PublishingFastSellBody): Promise<PublishingFastSellResponse> {
		return this.http.request({
			method: "POST",
			path: "/item/fast-sell",
			body: body,
		});
	}

	async add(body?: PublishingAddBody): Promise<PublishingAddResponse> {
		return this.http.request({
			method: "POST",
			path: "/item/add",
			body: body,
		});
	}

	async check(item_id: number, body?: PublishingCheckBody): Promise<PublishingCheckResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/goods/check`,
			body: body,
		});
	}

	async external(item_id: number, body?: PublishingExternalBody): Promise<PublishingExternalResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/external-account`,
			body: body,
		});
	}
}

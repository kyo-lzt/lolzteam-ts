// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { CustomDiscountsCreateBody, CustomDiscountsCreateResponse, CustomDiscountsDeleteBody, CustomDiscountsDeleteResponse, CustomDiscountsEditBody, CustomDiscountsEditResponse, CustomDiscountsGetResponse } from "./types.js";

export class CustomDiscountsApi {
	constructor(private readonly http: HttpClient) {}

	async get(): Promise<CustomDiscountsGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/custom-discounts",
		});
	}

	async create(body?: CustomDiscountsCreateBody): Promise<CustomDiscountsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/custom-discounts",
			body: body,
		});
	}

	async edit(body?: CustomDiscountsEditBody): Promise<CustomDiscountsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/custom-discounts",
			body: body,
		});
	}

	async delete(body?: CustomDiscountsDeleteBody): Promise<CustomDiscountsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/custom-discounts",
			body: body,
		});
	}
}

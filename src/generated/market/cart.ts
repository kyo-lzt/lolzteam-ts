// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { CartAddBody, CartAddResponse, CartDeleteBody, CartDeleteResponse, CartGetParams, CartGetResponse } from "./types.js";

export class CartApi {
	constructor(private readonly http: HttpClient) {}

	async get(params?: CartGetParams): Promise<CartGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/cart",
			query: params,
		});
	}

	async add(body: CartAddBody): Promise<CartAddResponse> {
		return this.http.request({
			method: "POST",
			path: "/cart",
			body: body,
		});
	}

	async delete(body?: CartDeleteBody): Promise<CartDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/cart",
			body: body,
		});
	}
}

// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { AutoPaymentsCreateBody, AutoPaymentsCreateResponse, AutoPaymentsDeleteBody, AutoPaymentsDeleteResponse, AutoPaymentsListResponse } from "./types.js";

export class AutoPaymentsApi {
	constructor(private readonly http: HttpClient) {}

	async list(): Promise<AutoPaymentsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/auto-payments",
		});
	}

	async create(body?: AutoPaymentsCreateBody): Promise<AutoPaymentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/auto-payment",
			body: body,
		});
	}

	async delete(body?: AutoPaymentsDeleteBody): Promise<AutoPaymentsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/auto-payment",
			body: body,
		});
	}
}

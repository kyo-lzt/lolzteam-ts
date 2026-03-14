// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { PurchasingCheckResponse, PurchasingConfirmBody, PurchasingConfirmResponse, PurchasingDiscountCancelResponse, PurchasingDiscountRequestBody, PurchasingDiscountRequestResponse, PurchasingFastBuyBody, PurchasingFastBuyResponse } from "./types.js";

export class PurchasingApi {
	constructor(private readonly http: HttpClient) {}

	async fastBuy(item_id: number, body?: PurchasingFastBuyBody): Promise<PurchasingFastBuyResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/fast-buy`,
			body: body,
		});
	}

	async check(item_id: number): Promise<PurchasingCheckResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/check-account`,
		});
	}

	async confirm(item_id: number, body?: PurchasingConfirmBody): Promise<PurchasingConfirmResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/confirm-buy`,
			body: body,
		});
	}

	async discountRequest(item_id: number, body?: PurchasingDiscountRequestBody): Promise<PurchasingDiscountRequestResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/discount`,
			body: body,
		});
	}

	async discountCancel(item_id: number): Promise<PurchasingDiscountCancelResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/discount`,
		});
	}
}

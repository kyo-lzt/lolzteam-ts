// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { PaymentsBalanceExchangeBody, PaymentsBalanceExchangeResponse, PaymentsBalanceListResponse, PaymentsCancelBody, PaymentsCancelResponse, PaymentsCurrencyResponse, PaymentsFeeParams, PaymentsFeeResponse, PaymentsHistoryParams, PaymentsHistoryResponse, PaymentsInvoiceCreateBody, PaymentsInvoiceCreateResponse, PaymentsInvoiceGetParams, PaymentsInvoiceGetResponse, PaymentsInvoiceListParams, PaymentsInvoiceListResponse, PaymentsPayoutBody, PaymentsPayoutResponse, PaymentsPayoutServicesResponse, PaymentsTransferBody, PaymentsTransferResponse } from "./types.js";

export class PaymentsApi {
	constructor(private readonly http: HttpClient) {}

	async invoiceGet(params?: PaymentsInvoiceGetParams): Promise<PaymentsInvoiceGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/invoice",
			query: params,
		});
	}

	async invoiceCreate(body?: PaymentsInvoiceCreateBody): Promise<PaymentsInvoiceCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/invoice",
			body: body,
		});
	}

	async invoiceList(params?: PaymentsInvoiceListParams): Promise<PaymentsInvoiceListResponse> {
		return this.http.request({
			method: "GET",
			path: "/invoice/list",
			query: params,
		});
	}

	async currency(): Promise<PaymentsCurrencyResponse> {
		return this.http.request({
			method: "GET",
			path: "/currency",
		});
	}

	async balanceList(): Promise<PaymentsBalanceListResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/exchange",
		});
	}

	async balanceExchange(body?: PaymentsBalanceExchangeBody): Promise<PaymentsBalanceExchangeResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/exchange",
			body: body,
		});
	}

	async transfer(body?: PaymentsTransferBody): Promise<PaymentsTransferResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/transfer",
			body: body,
		});
	}

	async fee(params?: PaymentsFeeParams): Promise<PaymentsFeeResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/transfer/fee",
			query: params,
		});
	}

	async cancel(body?: PaymentsCancelBody): Promise<PaymentsCancelResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/transfer/cancel",
			body: body,
		});
	}

	async history(params?: PaymentsHistoryParams): Promise<PaymentsHistoryResponse> {
		return this.http.request({
			method: "GET",
			path: "/user/payments",
			query: params,
		});
	}

	async payoutServices(): Promise<PaymentsPayoutServicesResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/payout/services",
		});
	}

	async payout(body?: PaymentsPayoutBody): Promise<PaymentsPayoutResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/payout",
			body: body,
		});
	}
}

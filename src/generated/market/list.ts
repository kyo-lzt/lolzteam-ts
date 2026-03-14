// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ListDownloadParams, ListDownloadResponse, ListFavoritesParams, ListFavoritesResponse, ListOrdersParams, ListOrdersResponse, ListStatesParams, ListStatesResponse, ListUserParams, ListUserResponse, ListViewedParams, ListViewedResponse } from "./types.js";

export class ListApi {
	constructor(private readonly http: HttpClient) {}

	async user(params?: ListUserParams): Promise<ListUserResponse> {
		return this.http.request({
			method: "GET",
			path: "/user/items",
			query: params,
		});
	}

	async orders(params?: ListOrdersParams): Promise<ListOrdersResponse> {
		return this.http.request({
			method: "GET",
			path: "/user/orders",
			query: params,
		});
	}

	async states(params?: ListStatesParams): Promise<ListStatesResponse> {
		return this.http.request({
			method: "GET",
			path: "/user/item-states",
			query: params,
		});
	}

	async download(type: "items" | "orders", params?: ListDownloadParams): Promise<ListDownloadResponse> {
		return this.http.request({
			method: "GET",
			path: `/user/${type}/download`,
			query: params,
		});
	}

	async favorites(params?: ListFavoritesParams): Promise<ListFavoritesResponse> {
		return this.http.request({
			method: "GET",
			path: "/fave",
			query: params,
		});
	}

	async viewed(params?: ListViewedParams): Promise<ListViewedResponse> {
		return this.http.request({
			method: "GET",
			path: "/viewed",
			query: params,
		});
	}
}

// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { CategoriesGetResponse, CategoriesListParams, CategoriesListResponse } from "./types.js";

export class CategoriesApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: CategoriesListParams): Promise<CategoriesListResponse> {
		return this.http.request({
			method: "GET",
			path: "/categories",
			query: params,
		});
	}

	async get(category_id: number): Promise<CategoriesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/categories/${category_id}`,
		});
	}
}

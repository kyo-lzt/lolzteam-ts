// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { BatchExecuteBody, BatchExecuteResponse } from "./types.js";

export class BatchApi {
	constructor(private readonly http: HttpClient) {}

	async execute(body?: BatchExecuteBody): Promise<BatchExecuteResponse> {
		return this.http.request({
			method: "POST",
			path: "/batch",
			body: body,
		});
	}
}

// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { BatchBatchBody, BatchBatchResponse } from "./types.js";

export class BatchApi {
	constructor(private readonly http: HttpClient) {}

	async batch(body: BatchBatchBody): Promise<BatchBatchResponse> {
		return this.http.request({
			method: "POST",
			path: "/batch",
			body: body,
		});
	}
}

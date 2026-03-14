// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { NotificationsGetResponse, NotificationsListParams, NotificationsListResponse, NotificationsReadBody, NotificationsReadResponse } from "./types.js";

export class NotificationsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: NotificationsListParams): Promise<NotificationsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/notifications",
			query: params,
		});
	}

	async get(notification_id: number): Promise<NotificationsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/notifications/${notification_id}/content`,
		});
	}

	async read(body?: NotificationsReadBody): Promise<NotificationsReadResponse> {
		return this.http.request({
			method: "POST",
			path: "/notifications/read",
			body: body,
		});
	}
}

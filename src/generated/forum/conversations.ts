// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ConversationsAlertsDisableResponse, ConversationsAlertsEnableResponse, ConversationsCreateBody, ConversationsCreateResponse, ConversationsDeleteBody, ConversationsDeleteResponse, ConversationsGetResponse, ConversationsInviteBody, ConversationsInviteResponse, ConversationsKickBody, ConversationsKickResponse, ConversationsListParams, ConversationsListResponse, ConversationsMessagesCreateBody, ConversationsMessagesCreateResponse, ConversationsMessagesDeleteResponse, ConversationsMessagesEditBody, ConversationsMessagesEditResponse, ConversationsMessagesGetResponse, ConversationsMessagesListParams, ConversationsMessagesListResponse, ConversationsMessagesStickResponse, ConversationsMessagesUnstickResponse, ConversationsReadAllResponse, ConversationsReadResponse, ConversationsSaveBody, ConversationsSaveResponse, ConversationsSearchBody, ConversationsSearchResponse, ConversationsStarResponse, ConversationsStartBody, ConversationsStartResponse, ConversationsUnstarResponse, ConversationsUpdateBody, ConversationsUpdateResponse } from "./types.js";

export class ConversationsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: ConversationsListParams): Promise<ConversationsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/conversations",
			query: params,
		});
	}

	async create(body?: ConversationsCreateBody): Promise<ConversationsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations",
			body: body,
		});
	}

	async update(body?: ConversationsUpdateBody): Promise<ConversationsUpdateResponse> {
		return this.http.request({
			method: "PUT",
			path: "/conversations",
			body: body,
		});
	}

	async delete(body?: ConversationsDeleteBody): Promise<ConversationsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/conversations",
			body: body,
		});
	}

	async start(body?: ConversationsStartBody): Promise<ConversationsStartResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/start",
			body: body,
		});
	}

	async save(body?: ConversationsSaveBody): Promise<ConversationsSaveResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/save",
			body: body,
		});
	}

	async get(conversation_id: number): Promise<ConversationsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/conversations/${conversation_id}`,
		});
	}

	async messagesList(conversation_id: number, params?: ConversationsMessagesListParams): Promise<ConversationsMessagesListResponse> {
		return this.http.request({
			method: "GET",
			path: `/conversations/${conversation_id}/messages`,
			query: params,
		});
	}

	async messagesCreate(conversation_id: number, body?: ConversationsMessagesCreateBody): Promise<ConversationsMessagesCreateResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/messages`,
			body: body,
		});
	}

	async search(body?: ConversationsSearchBody): Promise<ConversationsSearchResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/search",
			body: body,
		});
	}

	async messagesGet(message_id: number): Promise<ConversationsMessagesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/conversations/messages/${message_id}`,
		});
	}

	async messagesEdit(conversation_id: number, message_id: number, body?: ConversationsMessagesEditBody): Promise<ConversationsMessagesEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/conversations/${conversation_id}/messages/${message_id}`,
			body: body,
		});
	}

	async messagesDelete(conversation_id: number, message_id: number): Promise<ConversationsMessagesDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/messages/${message_id}`,
		});
	}

	async invite(conversation_id: number, body?: ConversationsInviteBody): Promise<ConversationsInviteResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/invite`,
			body: body,
		});
	}

	async kick(conversation_id: number, body?: ConversationsKickBody): Promise<ConversationsKickResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/kick`,
			body: body,
		});
	}

	async read(conversation_id: number): Promise<ConversationsReadResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/read`,
		});
	}

	async readAll(): Promise<ConversationsReadAllResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/read-all",
		});
	}

	async messagesStick(conversation_id: number, message_id: number): Promise<ConversationsMessagesStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/messages/${message_id}/stick`,
		});
	}

	async messagesUnstick(conversation_id: number, message_id: number): Promise<ConversationsMessagesUnstickResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/messages/${message_id}/stick`,
		});
	}

	async star(conversation_id: number): Promise<ConversationsStarResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/star`,
		});
	}

	async unstar(conversation_id: number): Promise<ConversationsUnstarResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/star`,
		});
	}

	async alertsEnable(conversation_id: number): Promise<ConversationsAlertsEnableResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/alerts`,
		});
	}

	async alertsDisable(conversation_id: number): Promise<ConversationsAlertsDisableResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/alerts`,
		});
	}
}

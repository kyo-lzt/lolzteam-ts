// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ChatboxDeleteIgnoreBody, ChatboxDeleteIgnoreResponse, ChatboxDeleteMessageBody, ChatboxDeleteMessageResponse, ChatboxEditMessageBody, ChatboxEditMessageResponse, ChatboxGetIgnoreResponse, ChatboxGetLeaderboardParams, ChatboxGetLeaderboardResponse, ChatboxGetMessagesParams, ChatboxGetMessagesResponse, ChatboxIndexParams, ChatboxIndexResponse, ChatboxOnlineParams, ChatboxOnlineResponse, ChatboxPostIgnoreBody, ChatboxPostIgnoreResponse, ChatboxPostMessageBody, ChatboxPostMessageResponse, ChatboxReportBody, ChatboxReportReasonsParams, ChatboxReportReasonsResponse, ChatboxReportResponse } from "./types.js";

export class ChatboxApi {
	constructor(private readonly http: HttpClient) {}

	async index(params?: ChatboxIndexParams): Promise<ChatboxIndexResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox",
			query: params,
		});
	}

	async getMessages(params?: ChatboxGetMessagesParams): Promise<ChatboxGetMessagesResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages",
			query: params,
		});
	}

	async postMessage(body?: ChatboxPostMessageBody): Promise<ChatboxPostMessageResponse> {
		return this.http.request({
			method: "POST",
			path: "/chatbox/messages",
			body: body,
		});
	}

	async editMessage(body?: ChatboxEditMessageBody): Promise<ChatboxEditMessageResponse> {
		return this.http.request({
			method: "PUT",
			path: "/chatbox/messages",
			body: body,
		});
	}

	async deleteMessage(body?: ChatboxDeleteMessageBody): Promise<ChatboxDeleteMessageResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/chatbox/messages",
			body: body,
		});
	}

	async online(params?: ChatboxOnlineParams): Promise<ChatboxOnlineResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages/online",
			query: params,
		});
	}

	async reportReasons(params?: ChatboxReportReasonsParams): Promise<ChatboxReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages/report",
			query: params,
		});
	}

	async report(body?: ChatboxReportBody): Promise<ChatboxReportResponse> {
		return this.http.request({
			method: "POST",
			path: "/chatbox/messages/report",
			body: body,
		});
	}

	async getLeaderboard(params?: ChatboxGetLeaderboardParams): Promise<ChatboxGetLeaderboardResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages/leaderboard",
			query: params,
		});
	}

	async getIgnore(): Promise<ChatboxGetIgnoreResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/ignore",
		});
	}

	async postIgnore(body?: ChatboxPostIgnoreBody): Promise<ChatboxPostIgnoreResponse> {
		return this.http.request({
			method: "POST",
			path: "/chatbox/ignore",
			body: body,
		});
	}

	async deleteIgnore(body?: ChatboxDeleteIgnoreBody): Promise<ChatboxDeleteIgnoreResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/chatbox/ignore",
			body: body,
		});
	}
}

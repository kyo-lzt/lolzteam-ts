// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { SearchAllBody, SearchAllResponse, SearchPostsBody, SearchPostsResponse, SearchProfilePostsBody, SearchProfilePostsResponse, SearchResultsParams, SearchResultsResponse, SearchTaggedBody, SearchTaggedResponse, SearchThreadsBody, SearchThreadsResponse, SearchUsersBody, SearchUsersResponse } from "./types.js";

export class SearchApi {
	constructor(private readonly http: HttpClient) {}

	async all(body?: SearchAllBody): Promise<SearchAllResponse> {
		return this.http.request({
			method: "POST",
			path: "/search",
			body: body,
		});
	}

	async threads(body?: SearchThreadsBody): Promise<SearchThreadsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/threads",
			body: body,
		});
	}

	async posts(body?: SearchPostsBody): Promise<SearchPostsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/posts",
			body: body,
		});
	}

	async users(body?: SearchUsersBody): Promise<SearchUsersResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/users",
			body: body,
		});
	}

	async profilePosts(body?: SearchProfilePostsBody): Promise<SearchProfilePostsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/profile-posts",
			body: body,
		});
	}

	async tagged(body?: SearchTaggedBody): Promise<SearchTaggedResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/tagged",
			body: body,
		});
	}

	async results(search_id: string | number, params?: SearchResultsParams): Promise<SearchResultsResponse> {
		return this.http.request({
			method: "GET",
			path: `/search/${search_id}/results`,
			query: params,
		});
	}
}

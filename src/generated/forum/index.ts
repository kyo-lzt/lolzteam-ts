// Auto-generated. Do not edit manually.

import { HttpClient } from "../../runtime/http-client.js";
import type { ClientConfig } from "../../runtime/types.js";
import { validateEnum } from "../../runtime/validation.js";
import type {
	AssetsCssParams,
	AssetsCssResponse,
	BatchExecuteBody,
	BatchExecuteResponse,
	CategoriesGetResponse,
	CategoriesListParams,
	CategoriesListResponse,
	ChatboxDeleteIgnoreBody,
	ChatboxDeleteIgnoreResponse,
	ChatboxDeleteMessageBody,
	ChatboxDeleteMessageResponse,
	ChatboxEditMessageBody,
	ChatboxEditMessageResponse,
	ChatboxGetIgnoreResponse,
	ChatboxGetLeaderboardParams,
	ChatboxGetLeaderboardResponse,
	ChatboxGetMessagesParams,
	ChatboxGetMessagesResponse,
	ChatboxIndexParams,
	ChatboxIndexResponse,
	ChatboxOnlineParams,
	ChatboxOnlineResponse,
	ChatboxPostIgnoreBody,
	ChatboxPostIgnoreResponse,
	ChatboxPostMessageBody,
	ChatboxPostMessageResponse,
	ChatboxReportBody,
	ChatboxReportReasonsParams,
	ChatboxReportReasonsResponse,
	ChatboxReportResponse,
	ConversationsAlertsDisableResponse,
	ConversationsAlertsEnableResponse,
	ConversationsCreateBody,
	ConversationsCreateResponse,
	ConversationsDeleteBody,
	ConversationsDeleteResponse,
	ConversationsGetResponse,
	ConversationsInviteBody,
	ConversationsInviteResponse,
	ConversationsKickBody,
	ConversationsKickResponse,
	ConversationsListParams,
	ConversationsListResponse,
	ConversationsMessagesCreateBody,
	ConversationsMessagesCreateResponse,
	ConversationsMessagesDeleteResponse,
	ConversationsMessagesEditBody,
	ConversationsMessagesEditResponse,
	ConversationsMessagesGetResponse,
	ConversationsMessagesListParams,
	ConversationsMessagesListResponse,
	ConversationsMessagesStickResponse,
	ConversationsMessagesUnstickResponse,
	ConversationsReadAllResponse,
	ConversationsReadResponse,
	ConversationsSaveBody,
	ConversationsSaveResponse,
	ConversationsSearchBody,
	ConversationsSearchResponse,
	ConversationsStarResponse,
	ConversationsStartBody,
	ConversationsStartResponse,
	ConversationsUnstarResponse,
	ConversationsUpdateBody,
	ConversationsUpdateResponse,
	FormsCreateBody,
	FormsCreateResponse,
	FormsListParams,
	FormsListResponse,
	ForumsEditFeedOptionsBody,
	ForumsEditFeedOptionsResponse,
	ForumsFollowBody,
	ForumsFollowResponse,
	ForumsFollowedParams,
	ForumsFollowedResponse,
	ForumsFollowersResponse,
	ForumsGetFeedOptionsResponse,
	ForumsGetResponse,
	ForumsGroupedResponse,
	ForumsListParams,
	ForumsListResponse,
	ForumsUnfollowResponse,
	LinksGetResponse,
	LinksListResponse,
	NavigationListParams,
	NavigationListResponse,
	NotificationsGetResponse,
	NotificationsListParams,
	NotificationsListResponse,
	NotificationsReadBody,
	NotificationsReadResponse,
	OAuthTokenBody,
	OAuthTokenResponse,
	PagesGetResponse,
	PagesListParams,
	PagesListResponse,
	PostsCommentsCreateBody,
	PostsCommentsCreateResponse,
	PostsCommentsDeleteBody,
	PostsCommentsDeleteResponse,
	PostsCommentsEditBody,
	PostsCommentsEditResponse,
	PostsCommentsGetParams,
	PostsCommentsGetResponse,
	PostsCommentsReportBody,
	PostsCommentsReportResponse,
	PostsCreateBody,
	PostsCreateResponse,
	PostsDeleteBody,
	PostsDeleteResponse,
	PostsEditBody,
	PostsEditResponse,
	PostsGetResponse,
	PostsLikeResponse,
	PostsLikesParams,
	PostsLikesResponse,
	PostsListParams,
	PostsListResponse,
	PostsReportBody,
	PostsReportReasonsResponse,
	PostsReportResponse,
	PostsUnlikeResponse,
	ProfilePostsCommentsCreateBody,
	ProfilePostsCommentsCreateResponse,
	ProfilePostsCommentsDeleteBody,
	ProfilePostsCommentsDeleteResponse,
	ProfilePostsCommentsEditBody,
	ProfilePostsCommentsEditResponse,
	ProfilePostsCommentsGetResponse,
	ProfilePostsCommentsListParams,
	ProfilePostsCommentsListResponse,
	ProfilePostsCommentsReportBody,
	ProfilePostsCommentsReportResponse,
	ProfilePostsCreateBody,
	ProfilePostsCreateResponse,
	ProfilePostsDeleteParams,
	ProfilePostsDeleteResponse,
	ProfilePostsEditBody,
	ProfilePostsEditResponse,
	ProfilePostsGetResponse,
	ProfilePostsLikeResponse,
	ProfilePostsLikesResponse,
	ProfilePostsListParams,
	ProfilePostsListResponse,
	ProfilePostsReportBody,
	ProfilePostsReportReasonsResponse,
	ProfilePostsReportResponse,
	ProfilePostsStickResponse,
	ProfilePostsUnlikeResponse,
	ProfilePostsUnstickResponse,
	RoomIDModel,
	SearchAllBody,
	SearchAllResponse,
	SearchPostsBody,
	SearchPostsResponse,
	SearchProfilePostsBody,
	SearchProfilePostsResponse,
	SearchResultsParams,
	SearchResultsResponse,
	SearchTaggedBody,
	SearchTaggedResponse,
	SearchThreadsBody,
	SearchThreadsResponse,
	SearchUsersBody,
	SearchUsersResponse,
	TagsFindParams,
	TagsFindResponse,
	TagsGetParams,
	TagsGetResponse,
	TagsListParams,
	TagsListResponse,
	TagsPopularResponse,
	ThreadsBumpResponse,
	ThreadsClaimBody,
	ThreadsClaimResponse,
	ThreadsCreateBody,
	ThreadsCreateContestBody,
	ThreadsCreateContestResponse,
	ThreadsCreateResponse,
	ThreadsDeleteBody,
	ThreadsDeleteResponse,
	ThreadsEditBody,
	ThreadsEditResponse,
	ThreadsFinishResponse,
	ThreadsFollowBody,
	ThreadsFollowResponse,
	ThreadsFollowedParams,
	ThreadsFollowedResponse,
	ThreadsFollowersResponse,
	ThreadsGetParams,
	ThreadsGetResponse,
	ThreadsHideResponse,
	ThreadsListParams,
	ThreadsListResponse,
	ThreadsMoveBody,
	ThreadsMoveResponse,
	ThreadsNavigationResponse,
	ThreadsPollGetResponse,
	ThreadsPollVoteBody,
	ThreadsPollVoteResponse,
	ThreadsRecentParams,
	ThreadsRecentResponse,
	ThreadsStarResponse,
	ThreadsUnfollowResponse,
	ThreadsUnreadParams,
	ThreadsUnreadResponse,
	ThreadsUnstarResponse,
	UserIDModel,
	UsersAvatarCropBody,
	UsersAvatarCropResponse,
	UsersAvatarDeleteResponse,
	UsersAvatarUploadBody,
	UsersAvatarUploadResponse,
	UsersBackgroundCropBody,
	UsersBackgroundCropResponse,
	UsersBackgroundDeleteResponse,
	UsersBackgroundUploadBody,
	UsersBackgroundUploadResponse,
	UsersClaimsParams,
	UsersClaimsResponse,
	UsersContentsParams,
	UsersContentsResponse,
	UsersEditBody,
	UsersEditResponse,
	UsersFieldsResponse,
	UsersFindParams,
	UsersFindResponse,
	UsersFollowResponse,
	UsersFollowersParams,
	UsersFollowersResponse,
	UsersFollowingsParams,
	UsersFollowingsResponse,
	UsersGetParams,
	UsersGetResponse,
	UsersIgnoreEditParams,
	UsersIgnoreEditResponse,
	UsersIgnoreResponse,
	UsersIgnoredParams,
	UsersIgnoredResponse,
	UsersLikesParams,
	UsersLikesResponse,
	UsersListParams,
	UsersListResponse,
	UsersSaCancelResetResponse,
	UsersSaResetResponse,
	UsersSecretAnswerTypesResponse,
	UsersTrophiesResponse,
	UsersUnfollowResponse,
	UsersUnignoreResponse,
} from "./types.js";

class OAuthApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Access Token
	 *
	 * Obtain an access token using various grant types.
	 *
	 * Supports the following grant types:
	 * - Client Credentials
	 * - Authorization Code
	 * - Refresh Token
	 * - Password
	 */
	async token(body: OAuthTokenBody): Promise<OAuthTokenResponse> {
		return this.http.request({
			method: "POST",
			path: "/oauth/token",
			body: {
				...body,
				...("scope" in body && Array.isArray(body.scope) ? { scope: body.scope.join(" ") } : {}),
			},
			bodyEncoding: "multipart",
		});
	}
}

class AssetsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get CSS
	 *
	 * Gets css rulesets for requested selectors.
	 */
	async css(params?: AssetsCssParams): Promise<AssetsCssResponse> {
		return this.http.request({
			method: "GET",
			path: "/css",
			query: params,
		});
	}
}

class CategoriesApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Categories
	 *
	 * List of all categories in the system.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: CategoriesListParams): Promise<CategoriesListResponse> {
		validateEnum("order", params?.order, ["natural", "list"]);
		return this.http.request({
			method: "GET",
			path: "/categories",
			query: params,
		});
	}

	/**
	 * Get Category
	 *
	 * Detail information of a category.
	 *
	 * Required scopes:
	 * + **read**
	 * @param category_id - Id of category.
	 */
	async get(category_id: number): Promise<CategoriesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/categories/${category_id}`,
		});
	}
}

class ForumsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Forums
	 *
	 * List of all forums in the system.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: ForumsListParams): Promise<ForumsListResponse> {
		validateEnum("order", params?.order, ["natural", "list"]);
		return this.http.request({
			method: "GET",
			path: "/forums",
			query: params,
		});
	}

	/**
	 * Get Forums Tree
	 *
	 * Returns grouped forums.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async grouped(): Promise<ForumsGroupedResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/grouped",
		});
	}

	/**
	 * Get Forum
	 *
	 * Detail information of a forum.
	 *
	 * Required scopes:
	 * + **read**
	 * @param forum_id - Id of forum.
	 */
	async get(forum_id: number): Promise<ForumsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/forums/${forum_id}`,
		});
	}

	/**
	 * Get Followers
	 *
	 * List of a forum's followers. For privacy reason, only the current user will be included in the list (if the user follows the specified forum).
	 *
	 * Required scopes:
	 * + **read**
	 * @param forum_id - Id of forum.
	 */
	async followers(forum_id: number): Promise<ForumsFollowersResponse> {
		return this.http.request({
			method: "GET",
			path: `/forums/${forum_id}/followers`,
		});
	}

	/**
	 * Follow Forum
	 *
	 * Follow a forum.
	 *
	 * Required scopes:
	 * + **post**
	 * @param forum_id - Id of forum.
	 */
	async follow(forum_id: number, body?: ForumsFollowBody): Promise<ForumsFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/forums/${forum_id}/followers`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Unfollow Forum
	 *
	 * Unfollow a forum.
	 *
	 * Required scopes:
	 * + **post**
	 * @param forum_id - Id of forum.
	 */
	async unfollow(forum_id: number): Promise<ForumsUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/forums/${forum_id}/followers`,
		});
	}

	/**
	 * Get Followed Forums
	 *
	 * List of followed forums by current user.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async followed(params?: ForumsFollowedParams): Promise<ForumsFollowedResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/followed",
			query: params,
		});
	}

	/**
	 * Get Feed Options
	 *
	 * Returns available options for the forums feed.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async getFeedOptions(): Promise<ForumsGetFeedOptionsResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/feed/options",
		});
	}

	/**
	 * Edit Feed Options
	 *
	 * Edit feed options.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async editFeedOptions(body?: ForumsEditFeedOptionsBody): Promise<ForumsEditFeedOptionsResponse> {
		return this.http.request({
			method: "PUT",
			path: "/forums/feed/options",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class LinksApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Links Forum
	 *
	 * List of all link forums.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(): Promise<LinksListResponse> {
		return this.http.request({
			method: "GET",
			path: "/link-forums",
		});
	}

	/**
	 * Get Link Forum
	 *
	 * Detail information of a link forum.
	 *
	 * Required scopes:
	 * + **read**
	 * @param link_id - Id of link forum.
	 */
	async get(link_id: number): Promise<LinksGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/link-forums/${link_id}`,
		});
	}
}

class PagesApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Pages
	 *
	 * List of all pages in the system.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: PagesListParams): Promise<PagesListResponse> {
		validateEnum("order", params?.order, ["natural", "list"]);
		return this.http.request({
			method: "GET",
			path: "/pages",
			query: params,
		});
	}

	/**
	 * Get Page
	 *
	 * Detail information of a page.
	 *
	 * Required scopes:
	 * + **read**
	 * @param page_id - Id of page.
	 */
	async get(page_id: number): Promise<PagesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/pages/${page_id}`,
		});
	}
}

class NavigationApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Navigation
	 *
	 * List of navigation elements within the system.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: NavigationListParams): Promise<NavigationListResponse> {
		return this.http.request({
			method: "GET",
			path: "/navigation",
			query: params,
		});
	}
}

class ThreadsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Threads
	 *
	 * List of threads in a forum (with pagination).
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: ThreadsListParams): Promise<ThreadsListResponse> {
		validateEnum("state", params?.state, ["active", "closed"]);
		validateEnum("period", params?.period, ["day", "week", "month", "year"]);
		validateEnum("order", params?.order, [
			"post_date",
			"last_post_date",
			"reply_count",
			"reply_count_asc",
			"first_post_likes",
			"vote_count",
		]);
		validateEnum("direction", params?.direction, ["asc", "desc"]);
		return this.http.request({
			method: "GET",
			path: "/threads",
			query: params,
		});
	}

	/**
	 * Create Thread
	 *
	 * Create a new thread.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async create(body?: ThreadsCreateBody): Promise<ThreadsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/threads",
			body: { reply_group: 2, ...body },
			bodyEncoding: "json",
		});
	}

	/**
	 * Create Contest
	 *
	 * Create a new contest.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async createContest(body: ThreadsCreateContestBody): Promise<ThreadsCreateContestResponse> {
		if (body && "contest_type" in body)
			validateEnum("contest_type", body.contest_type, ["by_finish_date"]);
		if (body && "length_option" in body)
			validateEnum("length_option", body.length_option, ["minutes", "hours", "days"]);
		if (body && "prize_type" in body)
			validateEnum("prize_type", body.prize_type, ["money", "upgrades"]);
		return this.http.request({
			method: "POST",
			path: "/contests",
			body: { contest_type: "by_finish_date", reply_group: 2, ...body },
			bodyEncoding: "json",
		});
	}

	/**
	 * Create Claim
	 *
	 * Create a Claim.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async claim(body?: ThreadsClaimBody): Promise<ThreadsClaimResponse> {
		if (body && "currency" in body)
			validateEnum("currency", body.currency, [
				"rub",
				"uah",
				"kzt",
				"byn",
				"usd",
				"eur",
				"gbp",
				"cny",
				"try",
			]);
		if (body && "transfer_type" in body)
			validateEnum("transfer_type", body.transfer_type, ["guarantor", "safe", "notsafe"]);
		if (body && "pay_claim" in body) validateEnum("pay_claim", body.pay_claim, ["now", "later"]);
		return this.http.request({
			method: "POST",
			path: "/claims",
			body: { reply_group: 2, ...body },
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Thread
	 *
	 * Detail information of a thread.
	 *
	 * Required scopes:
	 * + **read**
	 * @param thread_id - Id of thread.
	 */
	async get(thread_id: number, params?: ThreadsGetParams): Promise<ThreadsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}`,
			query: params,
		});
	}

	/**
	 * Edit thread
	 *
	 * Edit a thread.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async edit(thread_id: number, body?: ThreadsEditBody): Promise<ThreadsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/threads/${thread_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Thread
	 *
	 * Delete a thread.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async delete(thread_id: number, body?: ThreadsDeleteBody): Promise<ThreadsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Move Thread
	 *
	 * Move a thread to another forum.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async move(thread_id: number, body?: ThreadsMoveBody): Promise<ThreadsMoveResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/move`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Bump Thread
	 *
	 * Bump a thread.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async bump(thread_id: number): Promise<ThreadsBumpResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/bump`,
		});
	}

	/**
	 * Hide Thread
	 *
	 * Hide a thread from your feed.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async hide(thread_id: number): Promise<ThreadsHideResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/hide`,
		});
	}

	/**
	 * Bookmark Thread
	 *
	 * Bookmark a thread.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async star(thread_id: number): Promise<ThreadsStarResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/star`,
		});
	}

	/**
	 * Unbookmark Thread
	 *
	 * Unbookmark a thread.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async unstar(thread_id: number): Promise<ThreadsUnstarResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}/star`,
		});
	}

	/**
	 * Get Thread Followers
	 *
	 * List of a thread's followers. For privacy reason, only the current user will be included in the list.
	 *
	 * Required scopes:
	 * + **read**
	 * @param thread_id - Id of thread.
	 */
	async followers(thread_id: number): Promise<ThreadsFollowersResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/followers`,
		});
	}

	/**
	 * Follow Thread
	 *
	 * Follow a thread.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async follow(thread_id: number, body?: ThreadsFollowBody): Promise<ThreadsFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/followers`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Unfollow Thread
	 *
	 * Unfollow a thread.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async unfollow(thread_id: number): Promise<ThreadsUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}/followers`,
		});
	}

	/**
	 * Get Followed Threads
	 *
	 * List of followed threads by current user.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async followed(params?: ThreadsFollowedParams): Promise<ThreadsFollowedResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/followed",
			query: params,
		});
	}

	/**
	 * Get Navigation Elements
	 *
	 * List of navigation elements to reach the specified thread.
	 *
	 * Required scopes:
	 * + **read**
	 * @param thread_id - Id of thread.
	 */
	async navigation(thread_id: number): Promise<ThreadsNavigationResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/navigation`,
		});
	}

	/**
	 * Get Poll
	 *
	 * Detail information of a poll.
	 *
	 * Required scopes:
	 * + **read**
	 * @param thread_id - Id of thread.
	 */
	async pollGet(thread_id: number): Promise<ThreadsPollGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/poll`,
		});
	}

	/**
	 * Vote Poll
	 *
	 * Vote on a thread poll.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async pollVote(thread_id: number, body?: ThreadsPollVoteBody): Promise<ThreadsPollVoteResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/poll/votes`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Unread Threads
	 *
	 * List of unread threads (must be logged in).
	 *
	 * Required scopes:
	 * + **read**
	 */
	async unread(params?: ThreadsUnreadParams): Promise<ThreadsUnreadResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/new",
			query: params,
		});
	}

	/**
	 * Get Recent Threads
	 *
	 * List of recent threads.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async recent(params?: ThreadsRecentParams): Promise<ThreadsRecentResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/recent",
			query: params,
		});
	}

	/**
	 * Finish Contest
	 *
	 * Finishes a contest.
	 *
	 * Required scopes:
	 * + **post**
	 * @param thread_id - Id of thread.
	 */
	async finish(thread_id: number): Promise<ThreadsFinishResponse> {
		return this.http.request({
			method: "POST",
			path: `/contests/${thread_id}/finish`,
		});
	}
}

class PostsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Posts
	 *
	 * List of posts in a thread (with pagination).
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: PostsListParams): Promise<PostsListResponse> {
		validateEnum("order", params?.order, [
			"natural",
			"natural_reverse",
			"post_likes",
			"post_likes_reverse",
		]);
		return this.http.request({
			method: "GET",
			path: "/posts",
			query: params,
		});
	}

	/**
	 * Create Post
	 *
	 * Create a new post.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async create(body?: PostsCreateBody): Promise<PostsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Post
	 *
	 * Detail information of a post.
	 *
	 * Required scopes:
	 * + **read**
	 * @param post_id - Id of post.
	 */
	async get(post_id: number): Promise<PostsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}`,
		});
	}

	/**
	 * Edit Post
	 *
	 * Edit a post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param post_id - Id of post.
	 */
	async edit(post_id: number, body?: PostsEditBody): Promise<PostsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/posts/${post_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Post
	 *
	 * Delete a post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param post_id - Id of post.
	 */
	async delete(post_id: number, body?: PostsDeleteBody): Promise<PostsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/posts/${post_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Post Likes
	 *
	 * List of users who liked a post.
	 *
	 * Required scopes:
	 * + **read**
	 * @param post_id - Id of post.
	 */
	async likes(post_id: number, params?: PostsLikesParams): Promise<PostsLikesResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}/likes`,
			query: params,
		});
	}

	/**
	 * Like Post
	 *
	 * Like a post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param post_id - Id of post.
	 */
	async like(post_id: number): Promise<PostsLikeResponse> {
		return this.http.request({
			method: "POST",
			path: `/posts/${post_id}/likes`,
		});
	}

	/**
	 * Unlike Post
	 *
	 * Unlike a post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param post_id - Id of post.
	 */
	async unlike(post_id: number): Promise<PostsUnlikeResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/posts/${post_id}/likes`,
		});
	}

	/**
	 * Get Post Report Reasons
	 *
	 * Get post report reasons.
	 *
	 * Required scopes:
	 * + **read**
	 * @param post_id - Id of post.
	 */
	async reportReasons(post_id: number): Promise<PostsReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}/report`,
		});
	}

	/**
	 * Report Post
	 *
	 * Report a post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param post_id - Id of post.
	 */
	async report(post_id: number, body?: PostsReportBody): Promise<PostsReportResponse> {
		return this.http.request({
			method: "POST",
			path: `/posts/${post_id}/report`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Post Comments
	 *
	 * List of post comments in a thread.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async commentsGet(params?: PostsCommentsGetParams): Promise<PostsCommentsGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/posts/comments",
			query: params,
		});
	}

	/**
	 * Create Post Comment
	 *
	 * Create a post comment.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async commentsCreate(body?: PostsCommentsCreateBody): Promise<PostsCommentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Edit Post Comment
	 *
	 * Edit a post comment.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async commentsEdit(body?: PostsCommentsEditBody): Promise<PostsCommentsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Post Comment
	 *
	 * Delete a post comment.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async commentsDelete(body?: PostsCommentsDeleteBody): Promise<PostsCommentsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Report Post Comment
	 *
	 * Report a post comment.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async commentsReport(body?: PostsCommentsReportBody): Promise<PostsCommentsReportResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts/comments/report",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class UsersApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Users
	 *
	 * List of users (with pagination).
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: UsersListParams): Promise<UsersListResponse> {
		return this.http.request({
			method: "GET",
			path: "/users",
			query: params,
		});
	}

	/**
	 * Get User Fields
	 *
	 * List of user fields.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async fields(): Promise<UsersFieldsResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/fields",
		});
	}

	/**
	 * Find Users
	 *
	 * List of users filtered by username, email or custom fields.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async find(params?: UsersFindParams): Promise<UsersFindResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/find",
			query: params,
		});
	}

	/**
	 * Get User
	 *
	 * Detail information of a user.
	 *
	 * Required scopes:
	 * + **read**
	 * + **basic**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async get(user_id: UserIDModel, params?: UsersGetParams): Promise<UsersGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}`,
			query: params,
		});
	}

	/**
	 * Edit User
	 *
	 * Edit a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async edit(user_id: UserIDModel, body?: UsersEditBody): Promise<UsersEditResponse> {
		if (body && "gender" in body) validateEnum("gender", body.gender, ["", "male", "female"]);
		if (body && "timezone" in body)
			validateEnum("timezone", body.timezone, [
				"Pacific/Midway",
				"Pacific/Honolulu",
				"Pacific/Marquesas",
				"America/Anchorage",
				"America/Los_Angeles",
				"America/Santa_Isabel",
				"America/Tijuana",
				"America/Denver",
				"America/Chihuahua",
				"America/Phoenix",
				"America/Chicago",
				"America/Belize",
				"America/Mexico_City",
				"Pacific/Easter",
				"America/New_York",
				"America/Havana",
				"America/Bogota",
				"America/Caracas",
				"America/Halifax",
				"America/Goose_Bay",
				"America/Asuncion",
				"America/Santiago",
				"America/Cuiaba",
				"America/La_Paz",
				"America/St_Johns",
				"America/Argentina/Buenos_Aires",
				"America/Argentina/San_Luis",
				"America/Argentina/Mendoza",
				"Atlantic/Stanley",
				"America/Godthab",
				"America/Montevideo",
				"America/Sao_Paulo",
				"America/Miquelon",
				"America/Noronha",
				"Atlantic/Cape_Verde",
				"Atlantic/Azores",
				"Europe/London",
				"Africa/Casablanca",
				"Atlantic/Reykjavik",
				"Europe/Amsterdam",
				"Africa/Algiers",
				"Africa/Windhoek",
				"Africa/Tunis",
				"Europe/Athens",
				"Africa/Johannesburg",
				"Europe/Kaliningrad",
				"Asia/Amman",
				"Asia/Beirut",
				"Africa/Cairo",
				"Asia/Jerusalem",
				"Asia/Gaza",
				"Asia/Damascus",
				"Europe/Moscow",
				"Europe/Minsk",
				"Africa/Nairobi",
				"Asia/Tehran",
				"Asia/Dubai",
				"Asia/Yerevan",
				"Asia/Baku",
				"Indian/Mauritius",
				"Asia/Kabul",
				"Asia/Yekaterinburg",
				"Asia/Tashkent",
				"Asia/Kolkata",
				"Asia/Kathmandu",
				"Asia/Novosibirsk",
				"Asia/Dhaka",
				"Asia/Almaty",
				"Asia/Rangoon",
				"Asia/Krasnoyarsk",
				"Asia/Bangkok",
				"Asia/Irkutsk",
				"Asia/Hong_Kong",
				"Asia/Singapore",
				"Australia/Perth",
				"Asia/Yakutsk",
				"Asia/Tokyo",
				"Asia/Seoul",
				"Australia/Adelaide",
				"Australia/Darwin",
				"Asia/Vladivostok",
				"Asia/Magadan",
				"Australia/Brisbane",
				"Australia/Sydney",
				"Pacific/Noumea",
				"Pacific/Norfolk",
				"Asia/Anadyr",
				"Pacific/Auckland",
				"Pacific/Fiji",
				"Pacific/Chatham",
				"Pacific/Tongatapu",
				"Pacific/Apia",
				"Pacific/Kiritimati",
			]);
		if (body && "allow_view_profile" in body)
			validateEnum("allow_view_profile", body.allow_view_profile, ["none", "members", "followed"]);
		if (body && "allow_post_profile" in body)
			validateEnum("allow_post_profile", body.allow_post_profile, ["none", "members", "followed"]);
		if (body && "allow_send_personal_conversation" in body)
			validateEnum("allow_send_personal_conversation", body.allow_send_personal_conversation, [
				"none",
				"members",
				"followed",
			]);
		if (body && "allow_invite_group" in body)
			validateEnum("allow_invite_group", body.allow_invite_group, ["none", "members", "followed"]);
		if (body && "allow_receive_news_feed" in body)
			validateEnum("allow_receive_news_feed", body.allow_receive_news_feed, [
				"none",
				"members",
				"followed",
			]);
		return this.http.request({
			method: "PUT",
			path: `/users/${user_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get User Claims
	 *
	 * Get user claims.
	 *
	 * Required scopes:
	 * + **read**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async claims(user_id: UserIDModel, params?: UsersClaimsParams): Promise<UsersClaimsResponse> {
		validateEnum("type", params?.type, ["market", "nomarket"]);
		validateEnum("claim_state", params?.claim_state, ["active", "solved", "rejected", "settled"]);
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/claims`,
			query: params,
		});
	}

	/**
	 * Upload Avatar
	 *
	 * Upload avatar for a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async avatarUpload(
		user_id: UserIDModel,
		body?: UsersAvatarUploadBody,
	): Promise<UsersAvatarUploadResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/avatar`,
			body: body,
			bodyEncoding: "multipart",
		});
	}

	/**
	 * Delete Avatar
	 *
	 * Delete avatar for a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async avatarDelete(user_id: UserIDModel): Promise<UsersAvatarDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/avatar`,
		});
	}

	/**
	 * Crop Avatar
	 *
	 * Crop avatar for a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async avatarCrop(
		user_id: UserIDModel,
		body?: UsersAvatarCropBody,
	): Promise<UsersAvatarCropResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/avatar/crop`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Upload Background
	 *
	 * Upload background for a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async backgroundUpload(
		user_id: UserIDModel,
		body?: UsersBackgroundUploadBody,
	): Promise<UsersBackgroundUploadResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/background`,
			body: body,
			bodyEncoding: "multipart",
		});
	}

	/**
	 * Delete Background
	 *
	 * Delete background for a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async backgroundDelete(user_id: UserIDModel): Promise<UsersBackgroundDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/background`,
		});
	}

	/**
	 * Crop Background
	 *
	 * Crop background for a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async backgroundCrop(
		user_id: UserIDModel,
		body: UsersBackgroundCropBody,
	): Promise<UsersBackgroundCropResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/background/crop`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get User Followers
	 *
	 * List of a user's followers.
	 *
	 * Required scopes:
	 * + **read**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async followers(
		user_id: UserIDModel,
		params?: UsersFollowersParams,
	): Promise<UsersFollowersResponse> {
		validateEnum("order", params?.order, ["natural", "follow_date", "follow_date_reverse"]);
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/followers`,
			query: params,
		});
	}

	/**
	 * Follow User
	 *
	 * Follow a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async follow(user_id: UserIDModel): Promise<UsersFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/followers`,
		});
	}

	/**
	 * Unfollow User
	 *
	 * Unfollow a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async unfollow(user_id: UserIDModel): Promise<UsersUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/followers`,
		});
	}

	/**
	 * Get Followed Users By User
	 *
	 * List of users whom are followed by a user.
	 *
	 * Required scopes:
	 * + **read**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async followings(
		user_id: UserIDModel,
		params?: UsersFollowingsParams,
	): Promise<UsersFollowingsResponse> {
		validateEnum("order", params?.order, ["natural", "follow_date", "follow_date_reverse"]);
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/followings`,
			query: params,
		});
	}

	/**
	 * Get User Likes
	 *
	 * Get information about user likes.
	 *
	 * Required scopes:
	 * + **read**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async likes(user_id: UserIDModel, params?: UsersLikesParams): Promise<UsersLikesResponse> {
		validateEnum("like_type", params?.like_type, ["like", "like2"]);
		validateEnum("type", params?.type, ["gotten", "given"]);
		validateEnum("content_type", params?.content_type, [
			"post",
			"post_comment",
			"profile_post",
			"profile_post_comment",
		]);
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/likes`,
			query: { type: "gotten", content_type: "post", ...params },
		});
	}

	/**
	 * Get Ignored Users
	 *
	 * List of ignored users of current user.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async ignored(params?: UsersIgnoredParams): Promise<UsersIgnoredResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/ignored",
			query: params,
		});
	}

	/**
	 * Ignore User
	 *
	 * Ignore a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async ignore(user_id: UserIDModel): Promise<UsersIgnoreResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/ignore`,
		});
	}

	/**
	 * Edit Ignoring Options
	 *
	 * Edit ignoring options.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async ignoreEdit(
		user_id: UserIDModel,
		params?: UsersIgnoreEditParams,
	): Promise<UsersIgnoreEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/users/${user_id}/ignore`,
			query: params,
		});
	}

	/**
	 * Unignore User
	 *
	 * Stop ignoring a user.
	 *
	 * Required scopes:
	 * + **post**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async unignore(user_id: UserIDModel): Promise<UsersUnignoreResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/ignore`,
		});
	}

	/**
	 * Get Contents
	 *
	 * List of contents created by user (with pagination).
	 *
	 * Required scopes:
	 * + **read**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async contents(
		user_id: UserIDModel,
		params?: UsersContentsParams,
	): Promise<UsersContentsResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/timeline`,
			query: params,
		});
	}

	/**
	 * Get Trophies
	 *
	 * List of user trophies.
	 *
	 * Required scopes:
	 * + **read**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async trophies(user_id: UserIDModel): Promise<UsersTrophiesResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/trophies`,
		});
	}

	/**
	 * Get Secret Answer Types
	 *
	 * Get available secret answer types for user account security.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async secretAnswerTypes(): Promise<UsersSecretAnswerTypesResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/secret-answer/types",
		});
	}

	/**
	 * Reset Secret Answer
	 *
	 * Request a reset of the secret answer for the account.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async saReset(): Promise<UsersSaResetResponse> {
		return this.http.request({
			method: "POST",
			path: "/account/secret-answer/reset",
		});
	}

	/**
	 * Cancel Secret Answer Reset
	 *
	 * Cancel a pending secret answer reset request for the account.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async saCancelReset(): Promise<UsersSaCancelResetResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/account/secret-answer/reset",
		});
	}
}

class ProfilePostsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Profile Posts
	 *
	 * List of profile posts (with pagination).
	 *
	 * Required scopes:
	 * + **read**
	 * @param user_id - User ID.
> You can use shortlink `me` to interact with your profile.
	 */
	async list(
		user_id: UserIDModel,
		params?: ProfilePostsListParams,
	): Promise<ProfilePostsListResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/profile-posts`,
			query: params,
		});
	}

	/**
	 * Get Profile Post
	 *
	 * Detail information of a profile post.
	 *
	 * Required scopes:
	 * + **read**
	 * @param profile_post_id - Id of profile post.
	 */
	async get(profile_post_id: number): Promise<ProfilePostsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}`,
		});
	}

	/**
	 * Edit Profile Post
	 *
	 * Edit a profile post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param profile_post_id - Id of profile post.
	 */
	async edit(
		profile_post_id: number,
		body?: ProfilePostsEditBody,
	): Promise<ProfilePostsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/profile-posts/${profile_post_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Profile Post
	 *
	 * Delete a profile post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param profile_post_id - Id of profile post.
	 */
	async delete(
		profile_post_id: number,
		params?: ProfilePostsDeleteParams,
	): Promise<ProfilePostsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}`,
			query: params,
		});
	}

	/**
	 * Get Profile Post Report Reasons
	 *
	 * Get Profile Post Report Reasons.
	 *
	 * Required scopes:
	 * + **read**
	 * @param profile_post_id - Id of profile post.
	 */
	async reportReasons(profile_post_id: number): Promise<ProfilePostsReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/report`,
		});
	}

	/**
	 * Report a Profile Post
	 *
	 * Report a profile post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param profile_post_id - Id of profile post.
	 */
	async report(
		profile_post_id: number,
		body?: ProfilePostsReportBody,
	): Promise<ProfilePostsReportResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/report`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Create Profile Post
	 *
	 * Create a profile post on a user profile.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async create(body?: ProfilePostsCreateBody): Promise<ProfilePostsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/profile-posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Stick Profile Post
	 *
	 * Stick a profile post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param profile_post_id - Id of profile post.
	 */
	async stick(profile_post_id: number): Promise<ProfilePostsStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/stick`,
		});
	}

	/**
	 * Unstick Profile Post
	 *
	 * Unstick a profile post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param profile_post_id - Id of profile post.
	 */
	async unstick(profile_post_id: number): Promise<ProfilePostsUnstickResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}/stick`,
		});
	}

	/**
	 * Get Profile Post Likes
	 *
	 * List of users who liked a profile post.
	 *
	 * Required scopes:
	 * + **read**
	 * @param profile_post_id - Id of profile post.
	 */
	async likes(profile_post_id: number): Promise<ProfilePostsLikesResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	/**
	 * Like Profile Post
	 *
	 * Like a profile post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param profile_post_id - Id of profile post.
	 */
	async like(profile_post_id: number): Promise<ProfilePostsLikeResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	/**
	 * Unlike Profile Post
	 *
	 * Unlike a profile post.
	 *
	 * Required scopes:
	 * + **post**
	 * @param profile_post_id - Id of profile post.
	 */
	async unlike(profile_post_id: number): Promise<ProfilePostsUnlikeResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	/**
	 * Get Profile Post Comments
	 *
	 * List of comments of a profile post.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async commentsList(
		params?: ProfilePostsCommentsListParams,
	): Promise<ProfilePostsCommentsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/profile-posts/comments",
			query: params,
		});
	}

	/**
	 * Create Profile Post Comment
	 *
	 * Create a new profile post comment.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async commentsCreate(
		body?: ProfilePostsCommentsCreateBody,
	): Promise<ProfilePostsCommentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/profile-posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Edit Profile Post Comment
	 *
	 * Edit a profile post comment.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async commentsEdit(
		body?: ProfilePostsCommentsEditBody,
	): Promise<ProfilePostsCommentsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/profile-posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Profile Post Comment
	 *
	 * Delete a profile post comment.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async commentsDelete(
		body?: ProfilePostsCommentsDeleteBody,
	): Promise<ProfilePostsCommentsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/profile-posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Profile Post Comment
	 *
	 * Detail information of a profile post comment.
	 *
	 * Required scopes:
	 * + **read**
	 * @param profile_post_id - Id of profile post.
	 * @param comment_id - Id of profile post comment.
	 */
	async commentsGet(
		profile_post_id: number,
		comment_id: number,
	): Promise<ProfilePostsCommentsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/comments/${comment_id}`,
		});
	}

	/**
	 * Report a Profile Post Comment
	 *
	 * Report a profile post comment.
	 *
	 * Required scopes:
	 * + **post**
	 * @param comment_id - Id of profile post comment.
	 */
	async commentsReport(
		comment_id: number,
		body?: ProfilePostsCommentsReportBody,
	): Promise<ProfilePostsCommentsReportResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/comments/${comment_id}/report`,
			body: body,
			bodyEncoding: "json",
		});
	}
}

class ConversationsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Conversations
	 *
	 * List of conversations (with pagination).
	 *
	 * Required scopes:
	 * + **read**
	 * + **conversate**
	 */
	async list(params?: ConversationsListParams): Promise<ConversationsListResponse> {
		validateEnum("folder", params?.folder, [
			"all",
			"unread",
			"groups",
			"market",
			"market_replacements",
			"staff",
			"giveaways",
			"p2p",
		]);
		return this.http.request({
			method: "GET",
			path: "/conversations",
			query: params,
		});
	}

	/**
	 * Create Conversation
	 *
	 * Create a new conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 */
	async create(body?: ConversationsCreateBody): Promise<ConversationsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations",
			body: { is_group: false, ...body },
			bodyEncoding: "json",
		});
	}

	/**
	 * Edit Conversation
	 *
	 * Edit conversation.
	 *
	 * Required scopes:
	 * + **conversate**
	 */
	async update(body?: ConversationsUpdateBody): Promise<ConversationsUpdateResponse> {
		return this.http.request({
			method: "PUT",
			path: "/conversations",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Leave Conversation
	 *
	 * Leave the conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 */
	async delete(body?: ConversationsDeleteBody): Promise<ConversationsDeleteResponse> {
		if (body && "delete_type" in body)
			validateEnum("delete_type", body.delete_type, ["delete", "delete_ignore"]);
		return this.http.request({
			method: "DELETE",
			path: "/conversations",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Start Conversation
	 *
	 * Start a new conversation with a user.
	 *
	 * Required scopes:
	 * + **conversate**
	 */
	async start(body?: ConversationsStartBody): Promise<ConversationsStartResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/start",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Send Content To Saved Messages
	 *
	 * Send content to Saved Messages.
	 *
	 * Required scopes:
	 * + **conversate**
	 */
	async save(body?: ConversationsSaveBody): Promise<ConversationsSaveResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/save",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Conversation
	 *
	 * Detail information of a conversation.
	 *
	 * Required scopes:
	 * + **read**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async get(conversation_id: number): Promise<ConversationsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/conversations/${conversation_id}`,
		});
	}

	/**
	 * Get Conversation Messages
	 *
	 * List of messages in a conversation (with pagination).
	 *
	 * Required scopes:
	 * + **read**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async messagesList(
		conversation_id: number,
		params?: ConversationsMessagesListParams,
	): Promise<ConversationsMessagesListResponse> {
		validateEnum("order", params?.order, ["natural", "natural_reverse"]);
		return this.http.request({
			method: "GET",
			path: `/conversations/${conversation_id}/messages`,
			query: params,
		});
	}

	/**
	 * Create Conversation Message
	 *
	 * Create a new conversation message.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async messagesCreate(
		conversation_id: number,
		body?: ConversationsMessagesCreateBody,
	): Promise<ConversationsMessagesCreateResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/messages`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Search Conversations Messages
	 *
	 * Search for conversations messages or recipients.
	 *
	 * Required scopes:
	 * + **read**
	 * + **conversate**
	 */
	async search(body?: ConversationsSearchBody): Promise<ConversationsSearchResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/search",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Conversation Message
	 *
	 * Detail information of a message.
	 *
	 * Required scopes:
	 * + **read**
	 * + **conversate**
	 * @param message_id - Id of message.
	 */
	async messagesGet(message_id: number): Promise<ConversationsMessagesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/conversations/messages/${message_id}`,
		});
	}

	/**
	 * Edit Conversation Message
	 *
	 * Edit a message.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 * @param message_id - Id of message.
	 */
	async messagesEdit(
		conversation_id: number,
		message_id: number,
		body?: ConversationsMessagesEditBody,
	): Promise<ConversationsMessagesEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/conversations/${conversation_id}/messages/${message_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Conversation Message
	 *
	 * Deletes a message from a conversation.
	 *
	 * Required scopes:
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 * @param message_id - Id of message.
	 */
	async messagesDelete(
		conversation_id: number,
		message_id: number,
	): Promise<ConversationsMessagesDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/messages/${message_id}`,
		});
	}

	/**
	 * Invite Users to Conversation
	 *
	 * Invite one or more users to an existing conversation.
	 *
	 * Required scopes:
	 * + **conversate**
	 * + **post**
	 * @param conversation_id - Id of conversation.
	 */
	async invite(
		conversation_id: number,
		body?: ConversationsInviteBody,
	): Promise<ConversationsInviteResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/invite`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Kick User from Conversation
	 *
	 * Kicks a user from a conversation.
	 *
	 * Required scopes:
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async kick(
		conversation_id: number,
		body?: ConversationsKickBody,
	): Promise<ConversationsKickResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/kick`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Read a Conversation
	 *
	 * Read a specific conversation.
	 *
	 * Required scopes:
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async read(conversation_id: number): Promise<ConversationsReadResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/read`,
		});
	}

	/**
	 * Read All Conversations
	 *
	 * Mark all conversations as read.
	 *
	 * Required scopes:
	 * + **read**
	 * + **conversate**
	 */
	async readAll(): Promise<ConversationsReadAllResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/read-all",
		});
	}

	/**
	 * Stick Conversation Message
	 *
	 * Stick a message in a conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 * @param message_id - Id of message.
	 */
	async messagesStick(
		conversation_id: number,
		message_id: number,
	): Promise<ConversationsMessagesStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/messages/${message_id}/stick`,
		});
	}

	/**
	 * Unstick Conversation Message
	 *
	 * Unstick a message in a conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 * @param message_id - Id of message.
	 */
	async messagesUnstick(
		conversation_id: number,
		message_id: number,
	): Promise<ConversationsMessagesUnstickResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/messages/${message_id}/stick`,
		});
	}

	/**
	 * Star Conversation
	 *
	 * Star conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async star(conversation_id: number): Promise<ConversationsStarResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/star`,
		});
	}

	/**
	 * Unstar Conversation
	 *
	 * Unstar conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async unstar(conversation_id: number): Promise<ConversationsUnstarResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/star`,
		});
	}

	/**
	 * Enable Conversation Alerts
	 *
	 * Enable alerts for conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async alertsEnable(conversation_id: number): Promise<ConversationsAlertsEnableResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/alerts`,
		});
	}

	/**
	 * Disable Conversation Alerts
	 *
	 * Disable alerts for conversation.
	 *
	 * Required scopes:
	 * + **post**
	 * + **conversate**
	 * @param conversation_id - Id of conversation.
	 */
	async alertsDisable(conversation_id: number): Promise<ConversationsAlertsDisableResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/alerts`,
		});
	}
}

class NotificationsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Notifications
	 *
	 * List of notifications (both read and unread).
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: NotificationsListParams): Promise<NotificationsListResponse> {
		validateEnum("type", params?.type, ["market", "nomarket"]);
		return this.http.request({
			method: "GET",
			path: "/notifications",
			query: params,
		});
	}

	/**
	 * Get Notification
	 *
	 * Get associated content of notification. The response depends on the content type.
	 *
	 * Required scopes:
	 * + **read**
	 * @param notification_id - Id of notification.
	 */
	async get(notification_id: number): Promise<NotificationsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/notifications/${notification_id}/content`,
		});
	}

	/**
	 * Mark Notification Read
	 *
	 * Mark single notification or all existing notifications read.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async read(body?: NotificationsReadBody): Promise<NotificationsReadResponse> {
		return this.http.request({
			method: "POST",
			path: "/notifications/read",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class TagsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Popular Tags
	 *
	 * List of popular tags (no pagination).
	 *
	 * Required scopes:
	 * + **read**
	 */
	async popular(): Promise<TagsPopularResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags",
		});
	}

	/**
	 * Get Tags
	 *
	 * List of tags.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async list(params?: TagsListParams): Promise<TagsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags/list",
			query: params,
		});
	}

	/**
	 * Get Tagged Content
	 *
	 * List of tagged contents.
	 *
	 * Required scopes:
	 * + **read**
	 * @param tag_id - Id of tag.
	 */
	async get(tag_id: number, params?: TagsGetParams): Promise<TagsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/tags/${tag_id}`,
			query: params,
		});
	}

	/**
	 * Get Filtered Content
	 *
	 * Filtered list of tags.
	 *
	 * Required scopes:
	 * + **read**
	 */
	async find(params?: TagsFindParams): Promise<TagsFindResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags/find",
			query: params,
		});
	}
}

class SearchApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Search
	 *
	 * Search for all supported contents.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async all(body?: SearchAllBody): Promise<SearchAllResponse> {
		return this.http.request({
			method: "POST",
			path: "/search",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Search Thread
	 *
	 * Search for threads.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async threads(body?: SearchThreadsBody): Promise<SearchThreadsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/threads",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Search Post
	 *
	 * Search for posts.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async posts(body?: SearchPostsBody): Promise<SearchPostsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Search Users
	 *
	 * Search for users.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async users(body?: SearchUsersBody): Promise<SearchUsersResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/users",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Search Profile Posts
	 *
	 * Search for profile posts.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async profilePosts(body?: SearchProfilePostsBody): Promise<SearchProfilePostsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/profile-posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Search Tagged
	 *
	 * Search for tagged contents.
	 *
	 * Required scopes:
	 * + **post**
	 */
	async tagged(body?: SearchTaggedBody): Promise<SearchTaggedResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/tagged",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Search Results
	 *
	 * List of search results (with pagination).
	 *
	 * Required scopes:
	 * + **get**
	 * @param search_id - Search ID.
	 */
	async results(
		search_id: string | number,
		params?: SearchResultsParams,
	): Promise<SearchResultsResponse> {
		return this.http.request({
			method: "GET",
			path: `/search/${search_id}/results`,
			query: params,
		});
	}
}

class BatchApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Batch
	 *
	 * Execute multiple API requests at once (Separated by comma). Maximum batch jobs is 10.
	 *
	 * Required scopes:
	 * + Same as called API requests.
	 */
	async execute(body?: BatchExecuteBody): Promise<BatchExecuteResponse> {
		return this.http.request({
			method: "POST",
			path: "/batch",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class ChatboxApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Chats
	 *
	 * Get chat rooms.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async index(params?: ChatboxIndexParams): Promise<ChatboxIndexResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox",
			query: params,
		});
	}

	/**
	 * Get Chat Messages
	 *
	 * Get chat messages.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async getMessages(params?: ChatboxGetMessagesParams): Promise<ChatboxGetMessagesResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages",
			query: params,
		});
	}

	/**
	 * Create Chat Message
	 *
	 * Create chat message.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async postMessage(body?: ChatboxPostMessageBody): Promise<ChatboxPostMessageResponse> {
		return this.http.request({
			method: "POST",
			path: "/chatbox/messages",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Edit Chat Message
	 *
	 * Edit chat message.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async editMessage(body?: ChatboxEditMessageBody): Promise<ChatboxEditMessageResponse> {
		return this.http.request({
			method: "PUT",
			path: "/chatbox/messages",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Chat Message
	 *
	 * Delete chat message.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async deleteMessage(body?: ChatboxDeleteMessageBody): Promise<ChatboxDeleteMessageResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/chatbox/messages",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Chat Online
	 *
	 * Get chat Online Users.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async online(params?: ChatboxOnlineParams): Promise<ChatboxOnlineResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages/online",
			query: params,
		});
	}

	/**
	 * Get Chat Message Report Reasons
	 *
	 * Report chat message.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async reportReasons(params?: ChatboxReportReasonsParams): Promise<ChatboxReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages/report",
			query: params,
		});
	}

	/**
	 * Report Chat Message
	 *
	 * Report chat message.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async report(body?: ChatboxReportBody): Promise<ChatboxReportResponse> {
		return this.http.request({
			method: "POST",
			path: "/chatbox/messages/report",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Chat Leaderboard
	 *
	 * Get chat leaderboard.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async getLeaderboard(
		params?: ChatboxGetLeaderboardParams,
	): Promise<ChatboxGetLeaderboardResponse> {
		validateEnum("duration", params?.duration, ["day", "week", "month"]);
		return this.http.request({
			method: "GET",
			path: "/chatbox/messages/leaderboard",
			query: params,
		});
	}

	/**
	 * Get Ignored Chat Users
	 *
	 * Get list of ignored chat users.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async getIgnore(): Promise<ChatboxGetIgnoreResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatbox/ignore",
		});
	}

	/**
	 * Ignore Chat User
	 *
	 * Ignore chat user.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async postIgnore(body?: ChatboxPostIgnoreBody): Promise<ChatboxPostIgnoreResponse> {
		return this.http.request({
			method: "POST",
			path: "/chatbox/ignore",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Unignore Chat User
	 *
	 * Unignore chat user.
	 *
	 * Required scopes:
	 * + **chatbox**
	 */
	async deleteIgnore(body?: ChatboxDeleteIgnoreBody): Promise<ChatboxDeleteIgnoreResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/chatbox/ignore",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class FormsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Forms List
	 *
	 * Get Forms List
	 */
	async list(params?: FormsListParams): Promise<FormsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/forms",
			query: params,
		});
	}

	/**
	 * Create Form
	 *
	 * Create Form.
	 */
	async create(body?: FormsCreateBody): Promise<FormsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/forms/save",
			body: body,
			bodyEncoding: "json",
		});
	}
}

export class ForumClient {
	private readonly http: HttpClient;
	readonly oAuth: OAuthApi;
	readonly assets: AssetsApi;
	readonly categories: CategoriesApi;
	readonly forums: ForumsApi;
	readonly links: LinksApi;
	readonly pages: PagesApi;
	readonly navigation: NavigationApi;
	readonly threads: ThreadsApi;
	readonly posts: PostsApi;
	readonly users: UsersApi;
	readonly profilePosts: ProfilePostsApi;
	readonly conversations: ConversationsApi;
	readonly notifications: NotificationsApi;
	readonly tags: TagsApi;
	readonly search: SearchApi;
	readonly batch: BatchApi;
	readonly chatbox: ChatboxApi;
	readonly forms: FormsApi;

	constructor(configOrToken: string | (Omit<ClientConfig, "baseUrl"> & { baseUrl?: string })) {
		const config = typeof configOrToken === "string" ? { token: configOrToken } : configOrToken;
		this.http = new HttpClient({
			...config,
			baseUrl: config.baseUrl ?? "https://prod-api.lolz.live",
			rateLimit: config.rateLimit ?? { requestsPerMinute: 300 },
			timeout: config.timeout ?? 30_000,
			retry: config.retry ?? {},
		});
		this.oAuth = new OAuthApi(this.http);
		this.assets = new AssetsApi(this.http);
		this.categories = new CategoriesApi(this.http);
		this.forums = new ForumsApi(this.http);
		this.links = new LinksApi(this.http);
		this.pages = new PagesApi(this.http);
		this.navigation = new NavigationApi(this.http);
		this.threads = new ThreadsApi(this.http);
		this.posts = new PostsApi(this.http);
		this.users = new UsersApi(this.http);
		this.profilePosts = new ProfilePostsApi(this.http);
		this.conversations = new ConversationsApi(this.http);
		this.notifications = new NotificationsApi(this.http);
		this.tags = new TagsApi(this.http);
		this.search = new SearchApi(this.http);
		this.batch = new BatchApi(this.http);
		this.chatbox = new ChatboxApi(this.http);
		this.forms = new FormsApi(this.http);
	}

	async close(): Promise<void> {
		await this.http.close();
	}
}

export type * from "./types.js";

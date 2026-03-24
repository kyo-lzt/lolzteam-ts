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

	async list(params?: CategoriesListParams): Promise<CategoriesListResponse> {
		validateEnum("order", params?.order, ["natural", "list"]);
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

class ForumsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: ForumsListParams): Promise<ForumsListResponse> {
		validateEnum("order", params?.order, ["natural", "list"]);
		return this.http.request({
			method: "GET",
			path: "/forums",
			query: params,
		});
	}

	async grouped(): Promise<ForumsGroupedResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/grouped",
		});
	}

	async get(forum_id: number): Promise<ForumsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/forums/${forum_id}`,
		});
	}

	async followers(forum_id: number): Promise<ForumsFollowersResponse> {
		return this.http.request({
			method: "GET",
			path: `/forums/${forum_id}/followers`,
		});
	}

	async follow(forum_id: number, body?: ForumsFollowBody): Promise<ForumsFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/forums/${forum_id}/followers`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async unfollow(forum_id: number): Promise<ForumsUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/forums/${forum_id}/followers`,
		});
	}

	async followed(params?: ForumsFollowedParams): Promise<ForumsFollowedResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/followed",
			query: params,
		});
	}

	async getFeedOptions(): Promise<ForumsGetFeedOptionsResponse> {
		return this.http.request({
			method: "GET",
			path: "/forums/feed/options",
		});
	}

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

	async list(): Promise<LinksListResponse> {
		return this.http.request({
			method: "GET",
			path: "/link-forums",
		});
	}

	async get(link_id: number): Promise<LinksGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/link-forums/${link_id}`,
		});
	}
}

class PagesApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: PagesListParams): Promise<PagesListResponse> {
		validateEnum("order", params?.order, ["natural", "list"]);
		return this.http.request({
			method: "GET",
			path: "/pages",
			query: params,
		});
	}

	async get(page_id: number): Promise<PagesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/pages/${page_id}`,
		});
	}
}

class NavigationApi {
	constructor(private readonly http: HttpClient) {}

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

	async create(body?: ThreadsCreateBody): Promise<ThreadsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/threads",
			body: { reply_group: 2, ...body },
			bodyEncoding: "json",
		});
	}

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

	async get(thread_id: number, params?: ThreadsGetParams): Promise<ThreadsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}`,
			query: params,
		});
	}

	async edit(thread_id: number, body?: ThreadsEditBody): Promise<ThreadsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/threads/${thread_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async delete(thread_id: number, body?: ThreadsDeleteBody): Promise<ThreadsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async move(thread_id: number, body?: ThreadsMoveBody): Promise<ThreadsMoveResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/move`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async bump(thread_id: number): Promise<ThreadsBumpResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/bump`,
		});
	}

	async hide(thread_id: number): Promise<ThreadsHideResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/hide`,
		});
	}

	async star(thread_id: number): Promise<ThreadsStarResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/star`,
		});
	}

	async unstar(thread_id: number): Promise<ThreadsUnstarResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}/star`,
		});
	}

	async followers(thread_id: number): Promise<ThreadsFollowersResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/followers`,
		});
	}

	async follow(thread_id: number, body?: ThreadsFollowBody): Promise<ThreadsFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/followers`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async unfollow(thread_id: number): Promise<ThreadsUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/threads/${thread_id}/followers`,
		});
	}

	async followed(params?: ThreadsFollowedParams): Promise<ThreadsFollowedResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/followed",
			query: params,
		});
	}

	async navigation(thread_id: number): Promise<ThreadsNavigationResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/navigation`,
		});
	}

	async pollGet(thread_id: number): Promise<ThreadsPollGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/threads/${thread_id}/poll`,
		});
	}

	async pollVote(thread_id: number, body?: ThreadsPollVoteBody): Promise<ThreadsPollVoteResponse> {
		return this.http.request({
			method: "POST",
			path: `/threads/${thread_id}/poll/votes`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async unread(params?: ThreadsUnreadParams): Promise<ThreadsUnreadResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/new",
			query: params,
		});
	}

	async recent(params?: ThreadsRecentParams): Promise<ThreadsRecentResponse> {
		return this.http.request({
			method: "GET",
			path: "/threads/recent",
			query: params,
		});
	}

	async finish(thread_id: number): Promise<ThreadsFinishResponse> {
		return this.http.request({
			method: "POST",
			path: `/contests/${thread_id}/finish`,
		});
	}
}

class PostsApi {
	constructor(private readonly http: HttpClient) {}

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

	async create(body?: PostsCreateBody): Promise<PostsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	async get(post_id: number): Promise<PostsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}`,
		});
	}

	async edit(post_id: number, body?: PostsEditBody): Promise<PostsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/posts/${post_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async delete(post_id: number, body?: PostsDeleteBody): Promise<PostsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/posts/${post_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async likes(post_id: number, params?: PostsLikesParams): Promise<PostsLikesResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}/likes`,
			query: params,
		});
	}

	async like(post_id: number): Promise<PostsLikeResponse> {
		return this.http.request({
			method: "POST",
			path: `/posts/${post_id}/likes`,
		});
	}

	async unlike(post_id: number): Promise<PostsUnlikeResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/posts/${post_id}/likes`,
		});
	}

	async reportReasons(post_id: number): Promise<PostsReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: `/posts/${post_id}/report`,
		});
	}

	async report(post_id: number, body?: PostsReportBody): Promise<PostsReportResponse> {
		return this.http.request({
			method: "POST",
			path: `/posts/${post_id}/report`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async commentsGet(params?: PostsCommentsGetParams): Promise<PostsCommentsGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/posts/comments",
			query: params,
		});
	}

	async commentsCreate(body?: PostsCommentsCreateBody): Promise<PostsCommentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	async commentsEdit(body?: PostsCommentsEditBody): Promise<PostsCommentsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

	async commentsDelete(body?: PostsCommentsDeleteBody): Promise<PostsCommentsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/posts/comments",
			body: body,
			bodyEncoding: "json",
		});
	}

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

	async list(params?: UsersListParams): Promise<UsersListResponse> {
		return this.http.request({
			method: "GET",
			path: "/users",
			query: params,
		});
	}

	async fields(): Promise<UsersFieldsResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/fields",
		});
	}

	async find(params?: UsersFindParams): Promise<UsersFindResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/find",
			query: params,
		});
	}

	async get(user_id: UserIDModel, params?: UsersGetParams): Promise<UsersGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}`,
			query: params,
		});
	}

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

	async claims(user_id: UserIDModel, params?: UsersClaimsParams): Promise<UsersClaimsResponse> {
		validateEnum("type", params?.type, ["market", "nomarket"]);
		validateEnum("claim_state", params?.claim_state, ["active", "solved", "rejected", "settled"]);
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/claims`,
			query: params,
		});
	}

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

	async avatarDelete(user_id: UserIDModel): Promise<UsersAvatarDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/avatar`,
		});
	}

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

	async backgroundDelete(user_id: UserIDModel): Promise<UsersBackgroundDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/background`,
		});
	}

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

	async follow(user_id: UserIDModel): Promise<UsersFollowResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/followers`,
		});
	}

	async unfollow(user_id: UserIDModel): Promise<UsersUnfollowResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/followers`,
		});
	}

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

	async ignored(params?: UsersIgnoredParams): Promise<UsersIgnoredResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/ignored",
			query: params,
		});
	}

	async ignore(user_id: UserIDModel): Promise<UsersIgnoreResponse> {
		return this.http.request({
			method: "POST",
			path: `/users/${user_id}/ignore`,
		});
	}

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

	async unignore(user_id: UserIDModel): Promise<UsersUnignoreResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/users/${user_id}/ignore`,
		});
	}

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

	async trophies(user_id: UserIDModel): Promise<UsersTrophiesResponse> {
		return this.http.request({
			method: "GET",
			path: `/users/${user_id}/trophies`,
		});
	}

	async secretAnswerTypes(): Promise<UsersSecretAnswerTypesResponse> {
		return this.http.request({
			method: "GET",
			path: "/users/secret-answer/types",
		});
	}

	async saReset(): Promise<UsersSaResetResponse> {
		return this.http.request({
			method: "POST",
			path: "/account/secret-answer/reset",
		});
	}

	async saCancelReset(): Promise<UsersSaCancelResetResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/account/secret-answer/reset",
		});
	}
}

class ProfilePostsApi {
	constructor(private readonly http: HttpClient) {}

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

	async get(profile_post_id: number): Promise<ProfilePostsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}`,
		});
	}

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

	async reportReasons(profile_post_id: number): Promise<ProfilePostsReportReasonsResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/report`,
		});
	}

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

	async create(body?: ProfilePostsCreateBody): Promise<ProfilePostsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/profile-posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	async stick(profile_post_id: number): Promise<ProfilePostsStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/stick`,
		});
	}

	async unstick(profile_post_id: number): Promise<ProfilePostsUnstickResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}/stick`,
		});
	}

	async likes(profile_post_id: number): Promise<ProfilePostsLikesResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	async like(profile_post_id: number): Promise<ProfilePostsLikeResponse> {
		return this.http.request({
			method: "POST",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	async unlike(profile_post_id: number): Promise<ProfilePostsUnlikeResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/profile-posts/${profile_post_id}/likes`,
		});
	}

	async commentsList(
		params?: ProfilePostsCommentsListParams,
	): Promise<ProfilePostsCommentsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/profile-posts/comments",
			query: params,
		});
	}

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

	async commentsGet(
		profile_post_id: number,
		comment_id: number,
	): Promise<ProfilePostsCommentsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/profile-posts/${profile_post_id}/comments/${comment_id}`,
		});
	}

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

	async create(body?: ConversationsCreateBody): Promise<ConversationsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations",
			body: { is_group: false, ...body },
			bodyEncoding: "json",
		});
	}

	async update(body?: ConversationsUpdateBody): Promise<ConversationsUpdateResponse> {
		return this.http.request({
			method: "PUT",
			path: "/conversations",
			body: body,
			bodyEncoding: "json",
		});
	}

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

	async start(body?: ConversationsStartBody): Promise<ConversationsStartResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/start",
			body: body,
			bodyEncoding: "json",
		});
	}

	async save(body?: ConversationsSaveBody): Promise<ConversationsSaveResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/save",
			body: body,
			bodyEncoding: "json",
		});
	}

	async get(conversation_id: number): Promise<ConversationsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/conversations/${conversation_id}`,
		});
	}

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

	async search(body?: ConversationsSearchBody): Promise<ConversationsSearchResponse> {
		return this.http.request({
			method: "POST",
			path: "/conversations/search",
			body: body,
			bodyEncoding: "json",
		});
	}

	async messagesGet(message_id: number): Promise<ConversationsMessagesGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/conversations/messages/${message_id}`,
		});
	}

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

	async messagesDelete(
		conversation_id: number,
		message_id: number,
	): Promise<ConversationsMessagesDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/conversations/${conversation_id}/messages/${message_id}`,
		});
	}

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

	async messagesStick(
		conversation_id: number,
		message_id: number,
	): Promise<ConversationsMessagesStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/conversations/${conversation_id}/messages/${message_id}/stick`,
		});
	}

	async messagesUnstick(
		conversation_id: number,
		message_id: number,
	): Promise<ConversationsMessagesUnstickResponse> {
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

class NotificationsApi {
	constructor(private readonly http: HttpClient) {}

	async list(params?: NotificationsListParams): Promise<NotificationsListResponse> {
		validateEnum("type", params?.type, ["market", "nomarket"]);
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
			bodyEncoding: "json",
		});
	}
}

class TagsApi {
	constructor(private readonly http: HttpClient) {}

	async popular(): Promise<TagsPopularResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags",
		});
	}

	async list(params?: TagsListParams): Promise<TagsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/tags/list",
			query: params,
		});
	}

	async get(tag_id: number, params?: TagsGetParams): Promise<TagsGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/tags/${tag_id}`,
			query: params,
		});
	}

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

	async all(body?: SearchAllBody): Promise<SearchAllResponse> {
		return this.http.request({
			method: "POST",
			path: "/search",
			body: body,
			bodyEncoding: "json",
		});
	}

	async threads(body?: SearchThreadsBody): Promise<SearchThreadsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/threads",
			body: body,
			bodyEncoding: "json",
		});
	}

	async posts(body?: SearchPostsBody): Promise<SearchPostsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	async users(body?: SearchUsersBody): Promise<SearchUsersResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/users",
			body: body,
			bodyEncoding: "json",
		});
	}

	async profilePosts(body?: SearchProfilePostsBody): Promise<SearchProfilePostsResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/profile-posts",
			body: body,
			bodyEncoding: "json",
		});
	}

	async tagged(body?: SearchTaggedBody): Promise<SearchTaggedResponse> {
		return this.http.request({
			method: "POST",
			path: "/search/tagged",
			body: body,
			bodyEncoding: "json",
		});
	}

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
			bodyEncoding: "json",
		});
	}

	async editMessage(body?: ChatboxEditMessageBody): Promise<ChatboxEditMessageResponse> {
		return this.http.request({
			method: "PUT",
			path: "/chatbox/messages",
			body: body,
			bodyEncoding: "json",
		});
	}

	async deleteMessage(body?: ChatboxDeleteMessageBody): Promise<ChatboxDeleteMessageResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/chatbox/messages",
			body: body,
			bodyEncoding: "json",
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
			bodyEncoding: "json",
		});
	}

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
			bodyEncoding: "json",
		});
	}

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

	async list(params?: FormsListParams): Promise<FormsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/forms",
			query: params,
		});
	}

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

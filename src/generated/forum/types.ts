// Auto-generated. Do not edit manually.

import type { FileInput } from "../../runtime/types.js";

// ─── Component Schemas ────────────────────────────────────────

export type UserIDModel = string | number;

export interface Resp_NotificationModel {
	notification_id: number;
	notification_create_date: number;
	content_type: string;
	content_id: number;
	content_action: string;
	notification_is_unread: boolean;
	creator_user_id: number;
	creator_username: string;
	creator_username_html: string;
	notification_type: string;
	links: {
		content: string;
		creator_avatar: string;
	};
	notification_html: string;
}

export interface Resp_LinkModel {
	link_id: number;
	link_title: string;
	link_description: string;
	links: {
		target: string;
		detail: string;
	};
	permissions: {
		view: boolean;
	};
}

export type RoomIDModel = 1 | 2 | 3 | 4 | 13;

export interface Resp_ChatboxMessageModel {
	can_report: boolean;
	date: number;
	is_deleted: boolean;
	message: string;
	message_id: number;
	messageJson: string;
	messageRaw: string;
	room: {
		can_report: boolean;
		eng: boolean;
		market: boolean;
		room_id: number;
		title: string;
	};
	user: {
		avatar_date: number;
		background_date: number;
		contest_count: number;
		custom_title: string;
		display_banner_id: number;
		display_icon_group_id: number;
		display_style_group_id: number;
		is_admin: boolean;
		is_banned: boolean;
		is_moderator: boolean;
		is_staff: boolean;
		last_activity: number;
		like2_count: number;
		like_count: number;
		message_count: number;
		register_date: number;
		rendered: {
			username: string;
			avatars: {
				l: string;
				m: string;
				s: string;
			};
			link: string;
		};
		short_link: string;
		trophy_points: number;
		uniq_banner: {
			banner_css: string;
			banner_text: string;
			banner_icon: string;
			username_icon: string;
		};
		uniq_username_css: string;
		user_id: number;
		username: string;
	};
}

export interface Resp_UserModel {
	user_id: number;
	username: string;
	username_html: string;
	user_message_count: number;
	user_register_date: number;
	user_like_count: number;
	user_like2_count: number;
	contest_count: number;
	trophy_count: number;
	short_link: string;
	custom_title: string;
	is_banned: number;
	display_banner_id: number;
	display_icon_group_id: number;
	balance: string;
	hold: string;
	currency: string;
	user_email: string;
	user_unread_notification_count: number;
	user_unread_conversation_count: number;
	conv_welcome_message: string;
	user_title: string;
	user_deposit: number;
	user_is_valid: boolean;
	user_is_verified: boolean;
	user_is_followed: boolean;
	user_last_seen_date: number;
	links: {
		permalink: string;
		detail: string;
		avatar: string;
		avatar_big: string;
		avatar_small: string;
		followers: string;
		followings: string;
		ignore: string;
		background_l: string;
		background_m: string;
		status: string;
		timeline: string;
	};
	permissions: {
		edit: boolean;
		follow: boolean;
		ignore: boolean;
		profile_post: boolean;
	};
	user_is_ignored: boolean;
	user_is_visitor: boolean;
	user_group_id: number;
	curator_titles: Array<string>;
	user_groups: Array<{
		user_group_id: number;
		user_group_title: string;
		user_group_title_en: string;
		user_group_banner_css_class: string;
		user_group_banner_text: string;
		user_group_banner_text_en: string;
		display_group_selectable: boolean;
		display_banner_selectable: boolean;
		display_icon_selectable: boolean;
		is_primary_group: boolean;
		user_group_icon_class: string;
	}>;
	fields: Array<{
		id: string;
		title: string;
		description: string;
		position: string;
		is_required: boolean;
		value?: string;
		is_multi_choice: boolean;
		choices: Array<{
			key: string;
			value: string;
		}>;
		values: Array<unknown>;
	}>;
	user_timezone_offset: number;
	user_external_authentications: Array<{
		provider: string;
		provider_key: string;
	}>;
	self_permissions: {
		create_conversation: boolean;
	};
	edit_permissions: {
		password: boolean;
		user_email: boolean;
		username: boolean;
		user_title: boolean;
		short_link: boolean;
		hide_username_logs: boolean;
		primary_group_id: boolean;
		secondary_group_ids: boolean;
		user_dob_day: boolean;
		user_dob_month: boolean;
		user_dob_year: boolean;
		fields: boolean;
	};
	birthday: {
		age: number;
		timeStamp: {
			date: string;
			timezone_type: number;
			timezone: string;
		};
		format: string;
	};
	secret_answer_rendered: string;
	secret_answer_first_letter: string;
	user_following: {
		users: Array<{
			user_id: number;
			username: string;
			username_html: string;
			avatar: string;
		}>;
		count: number;
	};
	user_followers: {
		users: Array<{
			user_id: number;
			username: string;
			username_html: string;
			avatar: string;
		}>;
		count: number;
	};
	banner: string;
}

export interface Resp_ThreadModel {
	thread_id: number;
	forum_id: number;
	thread_title: string;
	thread_view_count: number;
	creator_user_id: number;
	creator_username: string;
	creator_username_html: string;
	thread_create_date: number;
	thread_update_date: number;
	user_is_ignored: boolean;
	thread_post_count: number;
	thread_is_published: boolean;
	thread_is_deleted: boolean;
	thread_is_sticky: boolean;
	thread_is_closed: boolean;
	thread_is_followed: boolean;
	thread_is_starred: boolean;
	first_post: {
		post_id: number;
		thread_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_create_date: number;
		post_body: string;
		post_body_html: string;
		post_body_plain_text: string;
		signature: string;
		signature_html: string;
		signature_plain_text: string;
		post_like_count: number;
		user_is_ignored: boolean;
		post_is_published: boolean;
		post_is_deleted: boolean;
		post_update_date: number;
		post_is_first_post: boolean;
		post_is_liked: boolean;
		links: {
			permalink: string;
			detail: string;
			thread: string;
			poster: string;
			likes: string;
			report: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			reply: boolean;
			like: boolean;
			report: boolean;
		};
		thread_is_deleted: boolean;
	};
	thread_prefixes: Array<{
		prefix_id: number;
		prefix_title: string;
	}>;
	thread_tags: Record<string, string>;
	links: {
		permalink: string;
		detail: string;
		followers: string;
		forum: string;
		posts: string;
		first_poster: string;
		first_poster_avatar: string;
		first_post: string;
		last_post: string;
	};
	permissions: {
		view: boolean;
		delete: boolean;
		follow: boolean;
		post: boolean;
		edit: boolean;
		edit_title: boolean;
		edit_tags: boolean;
		bump: {
			can: boolean;
			available_count: number;
			error: string;
			next_available_time: number;
		};
	};
	node_title: string;
	forum?: Resp_ForumModel;
	restrictions?: {
		reply_delay: number;
		max_reply_count: number;
	};
	contest?: {
		type: string;
		finish_date: number;
		now_count_members: number;
		needed_members: number;
		is_finished: number;
		count_winners: number;
		require_like_count: number;
		require_total_like_count: number;
		prize_type: string;
		prize_type_phrase: string;
		prize_data: number;
		is_money_places: number;
		chance_to_win: number;
		winners?: Array<number>;
		already_participate: boolean;
		permissions: {
			can_finish: boolean;
			can_participate: boolean;
			can_participate_error: string;
			can_view_user_list: boolean;
		};
	};
}

export interface Resp_PostModel {
	post_id: number;
	thread_id: number;
	poster_user_id: number;
	poster_username: string;
	poster_username_html: string;
	post_create_date: number;
	post_body: string;
	post_body_html: string;
	post_body_plain_text: string;
	signature: string;
	signature_html: string;
	signature_plain_text: string;
	post_like_count: number;
	user_is_ignored: boolean;
	post_is_published: boolean;
	post_is_deleted: boolean;
	post_update_date: number;
	post_is_first_post: boolean;
	links: {
		permalink: string;
		detail: string;
		thread: string;
		poster: string;
		likes: string;
		report: string;
		poster_avatar: string;
	};
	permissions: {
		view: boolean;
		edit: boolean;
		delete: boolean;
		reply: boolean;
		like: boolean;
		report: boolean;
	};
	thread_is_deleted: boolean;
}

export interface Resp_PostCommentModel {
	post_comment_id: number;
	post_id: number;
	thread_id: number;
	poster_user_id: number;
	poster_username: string;
	poster_username_html: string;
	post_comment_create_date: number;
	post_comment_body: string;
	post_comment_body_html: string;
	post_comment_body_plain_text: string;
	post_comment_like_count: number;
	user_is_ignored: boolean;
	post_comment_is_published: boolean;
	post_comment_is_deleted: boolean;
	post_comment_update_date: number;
	links: {
		permalink: string;
		detail: string;
		post: string;
		thread: string;
		poster: string;
		likes: string;
		report: string;
		poster_avatar: string;
	};
	permissions: {
		view: boolean;
		edit: boolean;
		delete: boolean;
		reply: boolean;
		like: boolean;
		report: boolean;
	};
}

export interface Resp_ProfilePostModel {
	profile_post_id: number;
	timeline_user_id: number;
	poster_user_id: number;
	poster_username: string;
	poster_username_html: string;
	post_create_date: number;
	post_body: string;
	post_body_html: string;
	post_body_plain_text: string;
	post_like_count: number;
	post_comment_count: number;
	post_comments_is_disabled: number;
	timeline_username: string;
	user_is_ignored: boolean;
	post_is_published: boolean;
	post_is_deleted: boolean;
	post_is_liked: boolean;
	post_is_sticked: boolean;
	links: {
		permalink: string;
		detail: string;
		timeline: string;
		timeline_user: string;
		poster: string;
		likes: string;
		comments: string;
		report: string;
		poster_avatar: string;
	};
	permissions: {
		view: boolean;
		edit: boolean;
		delete: boolean;
		like: boolean;
		comment: boolean;
		report: boolean;
		stick: boolean;
	};
	timeline_user: Resp_UserModel;
}

export interface Resp_ProfilePostCommentModel {
	comment_id: number;
	profile_post_id: number;
	comment_user_id: number;
	comment_username: string;
	comment_username_html: string;
	comment_create_date: number;
	comment_body: string;
	comment_body_html: string;
	comment_body_plain_text: string;
	user_is_ignored: boolean;
	timeline_user_id: number;
	links: {
		detail: string;
		profile_post: string;
		timeline: string;
		timeline_user: string;
		poster: string;
		poster_avatar: string;
	};
	permissions: {
		view: boolean;
		delete: boolean;
	};
}

export interface Resp_ConversationModel {
	conversation_id: number;
	conversation_title: string;
	creator_user_id: number;
	creator_username: string;
	creator_username_html: string;
	conversation_create_date: number;
	conversation_update_date: number;
	conversation_last_read_date: number;
	conversation_online_count: number;
	is_starred: number;
	is_group: number;
	is_unread: number;
	alerts: number;
	permissions: {
		view: boolean;
		reply: boolean;
		invite: boolean;
		manage_invite_links: boolean;
		kick: boolean;
		upload_avatar: boolean;
		editOwnPost: boolean;
		stickyMessages: boolean;
	};
	conversation_message_count: number;
	conversation_is_new: boolean;
	creator_is_ignored: boolean;
	conversation_is_open: boolean;
	conversation_is_deleted: boolean;
	recipient: {
		user_id: number;
		username: string;
		username_html: string;
		last_activity: number;
		is_online: boolean;
		contacts_changed: boolean;
		avatar: string;
	};
	recipients: Array<{
		user_id: number;
		username: string;
		username_html: string;
		last_activity: number;
		is_online: boolean;
		contacts_changed: boolean;
		avatar: string;
	}>;
	links: {
		permalink: string;
		detail: string;
		messages: string;
		avatar: string;
	};
}

export interface Resp_ConversationMessageModel {
	message_id: number;
	conversation_id: number;
	creator_user_id: number;
	creator_username: string;
	creator_username_html: string;
	message_create_date: number;
	message_is_unread: number;
	message_need_translate: boolean;
	message_is_system: boolean;
	message_edit_date: number;
	message_body: string;
	message_body_html: string;
	message_body_plain_text: string;
	user_is_ignored: boolean;
	links: {
		detail: string;
		conversation: string;
		creator: string;
		creator_avatar: string;
	};
	permissions: {
		view: boolean;
		edit: boolean;
		delete: boolean;
		"stick-unstick": boolean;
	};
}

export interface Resp_ForumModel {
	forum_id: number;
	forum_title: string;
	forum_description: string;
	forum_thread_count: number;
	forum_post_count: number;
	parent_node_id: number;
	node_type_id: string;
	icon_content: string;
	active_icon_content: string;
	forum_rules_thread_id: number;
	forum_prefixes: Array<{
		group_title: string;
		group_prefixes: Array<{
			prefix_id: number;
			css_class: string;
			prefix_title: string;
		}>;
	}>;
	thread_default_prefix_id: number;
	thread_prefix_is_required: boolean;
	links: {
		permalink: string;
		detail: string;
		"sub-categories": string;
		"sub-forums": string;
		threads: string;
		followers: string;
	};
	permissions: {
		view: boolean;
		edit: boolean;
		delete: boolean;
		create_thread: boolean;
		tag_thread: boolean;
		follow: boolean;
	};
	forum_is_followed: boolean;
}

export interface Resp_SystemInfo {
	visitor_id: number;
	time: number;
}

// ─── OAuthApi Types ────────────────────────────────────────

export interface OAuthTokenClientCredentials {
	/** Grant type. */
	grant_type: "client_credentials";
	/** Client ID. */
	client_id: string;
	/** Client secret. */
	client_secret: string;
	/** Scope. */
	scope: Array<"basic" | "read" | "post" | "conversate" | "market" | "payment" | "invoice">;
}

export interface OAuthTokenAuthorizationCode {
	/** Grant type. */
	grant_type: "authorization_code";
	/** Authorization code. */
	code: string;
	/** Client ID. */
	client_id: string;
	/** Client secret. */
	client_secret: string;
	/** Redirect URI. */
	redirect_uri: string;
	/** Scope. */
	scope: Array<"basic" | "read" | "post" | "conversate" | "market" | "payment" | "invoice">;
}

export interface OAuthTokenRefreshToken {
	/** Grant type. */
	grant_type: "refresh_token";
	/** Refresh token. */
	refresh_token: string;
	/** Client ID. */
	client_id: string;
	/** Client secret. */
	client_secret: string;
}

export interface OAuthTokenPassword {
	/** Grant type. */
	grant_type: "password";
	/** Account username/email. */
	username: string;
	/** Account password. */
	password: string;
	/** Client ID. */
	client_id: string;
	/** Client secret. */
	client_secret: string;
	/** Scope. */
	scope: Array<"basic" | "read" | "post" | "conversate" | "market" | "payment" | "invoice">;
}

export type OAuthTokenBody =
	| OAuthTokenClientCredentials
	| OAuthTokenAuthorizationCode
	| OAuthTokenRefreshToken
	| OAuthTokenPassword;

export type OAuthTokenResponse = {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token?: string;
	scope?: string;
};

// ─── AssetsApi Types ────────────────────────────────────────

export interface AssetsCssParams {
	/** The names or identifiers of the CSS selectors to retrieve. */
	css?: Array<string>;
}

export type AssetsCssResponse = {
	contents: string;
	system_info: Resp_SystemInfo;
};

// ─── CategoriesApi Types ────────────────────────────────────────

export interface CategoriesListParams {
	/** Id of parent category. If exists, filter categories that are direct children of that category. */
	parent_category_id?: number;
	/** Id of parent forum. If exists, filter categories that are direct children of that forum. */
	parent_forum_id?: number;
	/** Ordering of categories. */
	order?: "natural" | "list";
}

export type CategoriesListResponse = {
	categories: Array<{
		category_id: number;
		category_title: string;
		category_description: string;
		links: {
			permalink: string;
			detail: string;
			"sub-categories": string;
			"sub-forums": string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
		};
	}>;
	categories_total: number;
	system_info: Resp_SystemInfo;
};

export type CategoriesGetResponse = {
	category: {
		category_id: number;
		category_title: string;
		category_description: string;
		links: {
			permalink: string;
			detail: string;
			"sub-categories": string;
			"sub-forums": string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
		};
	};
	system_info: Resp_SystemInfo;
};

// ─── ForumsApi Types ────────────────────────────────────────

export interface ForumsListParams {
	/** Id of parent category. If exists, filter forums that are direct children of that category. */
	parent_category_id?: number;
	/** Id of parent forum. If exists, filter forums that are direct children of that forum. */
	parent_forum_id?: number;
	/** Ordering of forums. */
	order?: "natural" | "list";
}

export type ForumsListResponse = {
	forums: Array<Resp_ForumModel>;
	forums_total: number;
	tabs: Array<{
		link_title: string;
		isDefault: boolean;
		title: string;
		isHidden: boolean;
	}>;
	system_info: Resp_SystemInfo;
};

export type ForumsGroupedResponse = {
	data: Array<Array<Resp_ForumModel>>;
	tabs: Array<{
		node_ids: string;
		title: string;
		link_title: string;
		isExtendedTab: boolean;
		prefixes: Array<unknown>;
		prefixes_not: Array<unknown>;
		order: string;
		direction: string;
		period: string;
		state: string;
		q: string;
		tabLink: string;
	}>;
	system_info: Resp_SystemInfo;
};

export type ForumsGetResponse = {
	forum: Resp_ForumModel;
	system_info: Resp_SystemInfo;
};

export type ForumsFollowersResponse = {
	users: Array<{
		user_id: number;
		username: string;
		follow: {
			post: boolean;
			alert: boolean;
			email: boolean;
		};
	}>;
	system_info: Resp_SystemInfo;
};

export interface ForumsFollowBody {
	/** Whether to receive notification for post. */
	post?: boolean;
	/** Whether to receive notification as alert. */
	alert?: boolean;
	/** Whether to receive notification as email. */
	email?: boolean;
	/** Prefix ids. */
	prefix_ids?: Array<number>;
	/** Minimal contest amount. (Only for 766 forumId) */
	minimal_contest_amount?: number;
}

export type ForumsFollowResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ForumsUnfollowResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ForumsFollowedParams {
	/** If included in the request, only the forum count is returned as **forums_total**. */
	total?: boolean;
}

export type ForumsFollowedResponse = {
	forums: Array<Resp_ForumModel>;
	system_info: Resp_SystemInfo;
};

export type ForumsGetFeedOptionsResponse = {
	forums: Array<Resp_ForumModel>;
	excluded_forums_ids: Array<number>;
	default_excluded_forums_ids: Array<number>;
	keywords: string;
	system_info: Resp_SystemInfo;
};

export interface ForumsEditFeedOptionsBody {
	/** Array of forum ids to exclude from the feed. */
	node_ids?: Array<number>;
	/** List of keywords to exclude specific threads from the feed. */
	keywords?: Array<string>;
}

export type ForumsEditFeedOptionsResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── LinksApi Types ────────────────────────────────────────

export type LinksListResponse = {
	"link-forums": Array<Resp_LinkModel>;
	"link-forums_total": number;
	system_info: Resp_SystemInfo;
};

export type LinksGetResponse = {
	"link-forum": Resp_LinkModel;
	system_info: Resp_SystemInfo;
};

// ─── PagesApi Types ────────────────────────────────────────

export interface PagesListParams {
	/** Id of parent page. If exists, filter pages that are direct children of that page. */
	parent_page_id?: number;
	/** Ordering of pages. */
	order?: "natural" | "list";
}

export type PagesListResponse = {
	pages: Array<{
		page_id: number;
		page_title: string;
		page_description: string;
		links: {
			permalink: string;
			detail: string;
			"sub-pages": string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
		};
	}>;
	pages_total: number;
	system_info: Resp_SystemInfo;
};

export type PagesGetResponse = {
	page: {
		page_id: number;
		page_title: string;
		page_description: string;
		page_view_count: number;
		links: {
			permalink: string;
			detail: string;
			"sub-pages": string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
		};
		page_html: string;
	};
	system_info: Resp_SystemInfo;
};

// ─── NavigationApi Types ────────────────────────────────────────

export interface NavigationListParams {
	/** Id of parent element. If exists, filter elements that are direct children of that element. */
	parent?: number;
}

export type NavigationListResponse = {
	elements: Array<{
		category_id: number;
		category_title: string;
		category_description: string;
		links: {
			permalink: string;
			detail: string;
			"sub-categories": string;
			"sub-forums": string;
			"sub-elements": string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
		};
		navigation_type: string;
		navigation_id: number;
		navigation_parent_id: number;
		has_sub_elements: boolean;
	}>;
	elements_count: number;
	system_info: Resp_SystemInfo;
};

// ─── ThreadsApi Types ────────────────────────────────────────

export interface ThreadsListParams {
	/** Id of the containing forum. */
	forum_id?: number;
	/** Tab to get threads from. */
	tab?: string;
	/** Thread state. Works only if **forum_id** is set. */
	state?: "active" | "closed";
	/** Filter to get only threads created within the selected period. Works only if **forum_id** is set. */
	period?: "day" | "week" | "month" | "year";
	/** Thread title. */
	title?: string;
	/** Search only in titles. */
	title_only?: boolean;
	/** Filter to get only threads created by the specified user. */
	creator_user_id?: number;
	/** Filter to get only sticky or non-sticky threads. By default, all threads will be included and sticky ones will be at the top of the result on the first page. In mixed mode, sticky threads are not counted towards **threads_total** and does not affect pagination. */
	sticky?: boolean;
	/** Filter to get only threads with the specified prefix. */
	"prefix_ids[]"?: Array<number>;
	/** Filter to get only threads without the specified prefix. */
	"prefix_ids_not[]"?: Array<number>;
	/** Filter to get only threads with the specified tag. */
	thread_tag_id?: number;
	/** Page number of threads. */
	page?: number;
	/** Number of threads in a page. */
	limit?: number;
	/** Ordering of threads. */
	order?:
		| "post_date"
		| "last_post_date"
		| "reply_count"
		| "reply_count_asc"
		| "first_post_likes"
		| "vote_count";
	/** Direction of threads ordering. */
	direction?: "asc" | "desc";
	/** Filter threads by creation date. Only works with 'thread_create_date' and 'thread_create_date_reverse' ordering. */
	thread_create_date?: number;
	/** Filter threads by update date. Only works with 'thread_update_date' and 'thread_update_date_reverse' ordering. */
	thread_update_date?: number;
	/** List of fields to include. */
	fields_include?: Array<"*" | "latest_posts">;
}

export type ThreadsListResponse = {
	threads: Array<Resp_ThreadModel>;
	forum: {
		forum_id: number;
		forum_title: string;
		forum_description: string;
		forum_thread_count: number;
		forum_post_count: number;
		forum_prefixes: Array<unknown>;
		thread_default_prefix_id: number;
		thread_prefix_is_required: boolean;
		links: {
			permalink: string;
			detail: string;
			"sub-categories": string;
			"sub-forums": string;
			threads: string;
			followers: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			create_thread: boolean;
			upload_attachment: boolean;
			tag_thread: boolean;
			follow: boolean;
		};
		forum_is_followed: boolean;
	};
	threads_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface ThreadsCreateBody {
	/** Content of the new thread. */
	post_body: string;
	/** Id of the target forum. */
	forum_id: number;
	/** Thread title. Can be skipped if **title_en** set. */
	title?: string;
	/** Thread english title. Can be skipped if **title** set. */
	title_en?: string;
	/** Prefix ids. */
	prefix_id?: Array<number>;
	/** Thread tags. */
	tags?: Array<string>;
	/** Hide contacts. */
	hide_contacts?: boolean;
	/** Allow ask hidden content. */
	allow_ask_hidden_content?: boolean;
	/** Allow to reply only users with chosen or higher group. @default 2 */
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	/** Allow commenting if user can't post in thread. */
	comment_ignore_group?: boolean;
	/** Don't alert followers about thread creation. */
	dont_alert_followers?: boolean;
	/** Date to schedule thread creation (format: `DD-MM-YYYY`). */
	schedule_date?: string;
	/** Time to schedule thread creation (format: `HH:MM`). */
	schedule_time?: string;
	/** Watch thread state. */
	watch_thread_state?: boolean;
	/** Receive forum notifications of new posts in this thread. */
	watch_thread?: boolean;
	/** Receive email notifications of new posts in this thread. */
	watch_thread_email?: boolean;
}

export type ThreadsCreateResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsCreateContestBody {
	/** Content of the new contest. */
	post_body: string;
	/** Thread title. Can be skipped if **title_en** set. */
	title?: string;
	/** Thread english title. Can be skipped if **title** set. */
	title_en?: string;
	/** Contest type. @default "by_finish_date" */
	contest_type?: "by_finish_date";
	/** Giveaway duration value. The maximum duration is 3 days. Required if **contest_type** is **by_finish_date**. */
	length_value?: number;
	/** Giveaway duration type. The maximum duration is 3 days. Required if **contest_type** is **by_finish_date**. */
	length_option?: "minutes" | "hours" | "days";
	/** Prize type. */
	prize_type: "money" | "upgrades";
	/** Winner count (prize count). Optional if **prize_type** is **money**. */
	count_winners?: number;
	/** How much money will each winner receive. Optional if **prize_type** is **money**. */
	prize_data_money?: number;
	/** Enable the distribution of money prizes by places. Optional if **prize_type** is **money**. */
	is_money_places?: boolean;
	/** How much money will receive each place. Required if **is_money_places** is **1**. */
	prize_data_places?: Array<number>;
	/** Which upgrade will each winner receive. Required if **prize_type** is **upgrades**. */
	prize_data_upgrade?: 1 | 6 | 12 | 14 | 17 | 19 | 20 | 21 | 22;
	/** Sympathies for this week. */
	require_like_count: number;
	/** Sympathies for all time. */
	require_total_like_count: number;
	/** Secret answer of your account. */
	secret_answer?: string;
	/** Thread tags. */
	tags?: Array<string>;
	/** Allow to reply only users with chosen or higher group. @default 2 */
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	/** Allow commenting if user can't post in thread. */
	comment_ignore_group?: boolean;
	/** Don't alert followers about thread creation. */
	dont_alert_followers?: boolean;
	/** Hide contacts. */
	hide_contacts?: boolean;
	/** Allow ask hidden content. */
	allow_ask_hidden_content?: boolean;
	/** Date to schedule thread creation (format: `DD-MM-YYYY`). */
	schedule_date?: string;
	/** Time to schedule thread creation (format: `HH:MM`). */
	schedule_time?: string;
	/** Watch thread state. */
	watch_thread_state?: boolean;
	/** Receive forum notifications of new posts in this thread. */
	watch_thread?: boolean;
	/** Receive email notifications of new posts in this thread. */
	watch_thread_email?: boolean;
}

export type ThreadsCreateContestResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsClaimBody {
	/** To whom the complaint is filed. Specify a nickname or a link to the profile. */
	as_responder: string;
	/** Did you buy account on the market? */
	as_is_market_deal: boolean;
	/** Market item id.
Required if **as_is_market_deal** is 1. */
	as_market_item_id?: number;
	/** Contacts and wallets of the responder. Specify the known data about the responder, if any.
Optional if **as_is_market_deal** is 0. */
	as_data?: string;
	/** Indicate the amount by which the responder deceived you. */
	as_amount: number;
	/** Currency of Claim. */
	currency?: "rub" | "uah" | "kzt" | "byn" | "usd" | "eur" | "gbp" | "cny" | "try";
	/** The transaction took place through a guarantor or there was a transfer to the market with a hold?
Required if **as_is_market_deal** is 0. */
	transfer_type: "guarantor" | "safe" | "notsafe";
	/** Pay claim fee now or later. (Only for **transfer_type** = **notsafe**) */
	pay_claim?: "now" | "later";
	/** Funds transfer receipt.
Upload a receipt for the transfer of funds, use the "View receipt" button in your wallet. May be uploaded to [Imgur](https://imgur.com/upload). Write "no" if you have not paid.
Required if **as_is_market_deal** is 0. */
	as_funds_receipt?: string;
	/** Screenshot showing the respondent's Telegram login.
If the correspondence was conducted in Telegram, upload a screenshot that will display the respondent's Telegram login against the background of your dialogue. The screenshot may be uploaded to [Imgur](https://imgur.com/upload). If the correspondence was conducted elsewhere, write "no". */
	as_tg_login_screenshot?: string;
	/** Thread tags. */
	tags?: Array<string>;
	/** Hide contacts. */
	hide_contacts?: boolean;
	/** Allow ask hidden content. */
	allow_ask_hidden_content?: boolean;
	/** Allow to reply only users with chosen or higher group. @default 2 */
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	/** Allow commenting if user can't post in thread. */
	comment_ignore_group?: boolean;
	/** Don't alert followers about thread creation. */
	dont_alert_followers?: boolean;
	/** Date to schedule thread creation (format: `DD-MM-YYYY`). */
	schedule_date?: string;
	/** Time to schedule thread creation (format: `HH:MM`). */
	schedule_time?: string;
	/** Watch thread state. */
	watch_thread_state?: boolean;
	/** Receive forum notifications of new posts in this thread. */
	watch_thread?: boolean;
	/** Receive email notifications of new posts in this thread. */
	watch_thread_email?: boolean;
	/** You should describe what's happened.
- describe the situation in a nutshell. If you wish, you can describe the situation in more detail using the "Spoiler" function.
- attach screenshots of correspondence. You may upload to the site [Imgur](https://imgur.com/upload) - for convenience, use Ctrl + V when uploading screenshots to the album.
- other evidence;
- notify the respondent about the complaint you created, familiarize him with hidden content

Describe the situation in as much detail as possible. */
	post_body: string;
}

export type ThreadsClaimResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsGetParams {
	/** List of fields to include. */
	fields_include?: Array<"*" | "latest_posts">;
}

export type ThreadsGetResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsEditBody {
	/** Thread title. */
	title?: string;
	/** Thread title english. */
	title_en?: string;
	/** Prefix ids. Set "0" to remove all thread prefixes. */
	prefix_id?: Array<number>;
	/** Thread tags. */
	tags?: Array<string>;
	/** Discussion state. */
	discussion_open?: boolean;
	/** Hide contacts. */
	hide_contacts?: boolean;
	/** Allow ask hidden content. */
	allow_ask_hidden_content?: boolean;
	/** Allow to reply only users with chosen or higher group. */
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	/** Allow commenting if user can't post in thread. */
	comment_ignore_group?: boolean;
}

export type ThreadsEditResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsDeleteBody {
	/** Reason of the thread removal. */
	reason?: string;
}

export type ThreadsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ThreadsMoveBody {
	/** Forum id. */
	node_id: string;
	/** Thread title. */
	title?: string;
	/** Thread title english. */
	title_en?: string;
	/** Prefix ids. Set "0" to remove all thread prefixes. */
	prefix_id?: Array<number>;
	/** Apply thread prefix. */
	apply_thread_prefix?: boolean;
	/** Send a notification to users who are followed to target node. */
	send_alert?: boolean;
}

export type ThreadsMoveResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ThreadsBumpResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type ThreadsHideResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type ThreadsStarResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ThreadsUnstarResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ThreadsFollowersResponse = {
	users: Array<{
		user_id: number;
		username: string;
		follow: {
			alert: boolean;
			email: boolean;
		};
	}>;
	system_info: Resp_SystemInfo;
};

export interface ThreadsFollowBody {
	/** Whether to receive notification as email. */
	email?: boolean;
}

export type ThreadsFollowResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ThreadsUnfollowResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ThreadsFollowedParams {
	/** If included in the request, only the thread count is returned as **threads_total**. */
	total?: boolean;
	/** List of fields to include. */
	fields_include?: Array<"*" | "latest_posts">;
}

export type ThreadsFollowedResponse = {
	threads: Array<Resp_ThreadModel>;
	threads_total: number;
	system_info: Resp_SystemInfo;
};

export type ThreadsNavigationResponse = {
	elements: Array<{
		category_id: number;
		category_title: string;
		category_description: string;
		links: {
			permalink: string;
			detail: string;
			"sub-categories": string;
			"sub-forums": string;
			"sub-elements": string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
		};
		navigation_type: string;
		navigation_id: number;
		navigation_depth: number;
		navigation_parent_id: number;
		has_sub_elements: boolean;
	}>;
	elements_count: number;
	system_info: Resp_SystemInfo;
};

export type ThreadsPollGetResponse = {
	poll: {
		poll_id: number;
		poll_question: string;
		poll_vote_count: number;
		poll_max_votes: number;
		poll_is_open: boolean;
		poll_is_voted: boolean;
		responses: Array<{
			response_id: number;
			response_answer: string;
			response_vote_count: number;
		}>;
		permissions: {
			vote: boolean;
			result: boolean;
		};
		links: {
			vote: string;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface ThreadsPollVoteBody {
	/** The id of the response to vote for. Can be skipped if **response_ids** set. */
	response_id?: number;
	/** An array of ids of responses (if the poll allows multiple choices). */
	response_ids?: Array<number>;
}

export type ThreadsPollVoteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ThreadsUnreadParams {
	/** Maximum number of result threads. The limit may get decreased if the value is too large (depending on the system configuration). */
	limit?: number;
	/** Id of the container forum to search for threads. Child forums of the specified forum will be included in the search. */
	forum_id?: number;
	/** Number of thread data to be returned. Default value is 20. */
	data_limit?: number;
}

export type ThreadsUnreadResponse = {
	threads: Array<{
		thread_id: number;
	}>;
	data: Array<Resp_ThreadModel>;
	system_info: Resp_SystemInfo;
};

export interface ThreadsRecentParams {
	/** Maximum number of days to search for threads. */
	days?: number;
	/** Maximum number of result threads. The limit may get decreased if the value is too large. */
	limit?: number;
	/** Id of the container forum to search for threads. Child forums of the specified forum will be included in the search. */
	forum_id?: number;
	/** Number of thread data to be returned. Default value is 20. */
	data_limit?: number;
}

export type ThreadsRecentResponse = {
	threads: Array<{
		thread_id: number;
	}>;
	data: Array<Resp_ThreadModel>;
	system_info: Resp_SystemInfo;
};

export type ThreadsFinishResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── PostsApi Types ────────────────────────────────────────

export interface PostsListParams {
	/** Id of the containing thread. */
	thread_id?: number;
	/** Id of a post, posts that are in the same page with the specified post will be returned. **thread_id** may be skipped. */
	page_of_post_id?: number;
	/** Page number of posts. */
	page?: number;
	/** Number of posts in a page. */
	limit?: number;
	/** Ordering of posts. */
	order?: "natural" | "natural_reverse" | "post_likes" | "post_likes_reverse";
}

export type PostsListResponse = {
	posts: Array<Resp_ThreadModel>;
	thread: Resp_ThreadModel;
	posts_total: number;
	system_info: Resp_SystemInfo;
};

export interface PostsCreateBody {
	/** Content of the new post. */
	post_body: string;
	/** Id of the target thread. **quote_post_id** can be skipped if this parameter is provided. */
	thread_id?: number;
	/** Id of the quote post. **thread_id** can be skipped if this parameter is provided. */
	quote_post_id?: number;
}

export type PostsCreateResponse = {
	post: Resp_PostModel;
	system_info: Resp_SystemInfo;
};

export type PostsGetResponse = {
	post: Resp_PostModel;
	system_info: Resp_SystemInfo;
};

export interface PostsEditBody {
	/** Content of the post. */
	post_body?: string;
}

export type PostsEditResponse = {
	post: Resp_PostModel;
	system_info: Resp_SystemInfo;
};

export interface PostsDeleteBody {
	/** Reason of the post removal. */
	reason?: string;
}

export type PostsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface PostsLikesParams {
	/** Page number of users. */
	page?: number;
	/** Number of users in a page. */
	limit?: number;
}

export type PostsLikesResponse = {
	users: Array<{
		user_id: number;
		username: string;
	}>;
	system_info: Resp_SystemInfo;
};

export type PostsLikeResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type PostsUnlikeResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type PostsReportReasonsResponse = {
	reasons: Array<string>;
	system_info: Resp_SystemInfo;
};

export interface PostsReportBody {
	/** Reason of the report. */
	message: string;
}

export type PostsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface PostsCommentsGetParams {
	/** Id of post. */
	post_id: number;
	/** The time in milliseconds (e.g. 1652177794083) before last comment date. */
	before?: number;
	/** Comment id to get older comments. */
	before_comment?: number;
}

export type PostsCommentsGetResponse = {
	comments: Array<Resp_PostCommentModel>;
	system_info: Resp_SystemInfo;
};

export interface PostsCommentsCreateBody {
	/** Id of post. */
	post_id: number;
	/** Content of the a post comment. */
	comment_body: string;
}

export type PostsCommentsCreateResponse = {
	comment: {
		post_comment_id: number;
		post_id: number;
		thread_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_comment_body: string;
		post_comment_body_html: string;
		post_comment_body_plain_text: string;
		post_comment_like_count: number;
		user_is_ignored: boolean;
		post_comment_is_published: boolean;
		post_comment_is_deleted: boolean;
		post_comment_update_date: number;
		links: {
			permalink: string;
			detail: string;
			post: string;
			thread: string;
			poster: string;
			likes: string;
			report: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			reply: boolean;
			like: boolean;
			report: boolean;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface PostsCommentsEditBody {
	/** Id of post. */
	post_comment_id: number;
	/** Content of the new post comment. */
	comment_body: string;
}

export type PostsCommentsEditResponse = {
	comment: {
		post_comment_id: number;
		post_id: number;
		thread_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_comment_body: string;
		post_comment_body_html: string;
		post_comment_body_plain_text: string;
		post_comment_like_count: number;
		user_is_ignored: boolean;
		post_comment_is_published: boolean;
		post_comment_is_deleted: boolean;
		post_comment_update_date: number;
		links: {
			permalink: string;
			detail: string;
			post: string;
			thread: string;
			poster: string;
			likes: string;
			report: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			reply: boolean;
			like: boolean;
			report: boolean;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface PostsCommentsDeleteBody {
	/** Id of post comment. */
	post_comment_id: number;
	/** Reason of a post comment removal. */
	reason?: string;
}

export type PostsCommentsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface PostsCommentsReportBody {
	/** Id of post comment. */
	post_comment_id: number;
	/** Reason of the report. */
	message: string;
}

export type PostsCommentsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── UsersApi Types ────────────────────────────────────────

export interface UsersListParams {
	/** Page number of users. */
	page?: number;
	/** Number of users in a page. */
	limit?: number;
	/** List of fields to include. */
	fields_include?: Array<"*" | "alerts">;
}

export type UsersListResponse = {
	users: Array<Resp_UserModel>;
	users_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export type UsersFieldsResponse = {
	fields: Array<{
		id: string;
		title: string;
		description: string;
		position: string;
		is_required: boolean;
	}>;
	system_info: Resp_SystemInfo;
};

export interface UsersFindParams {
	/** Username to filter. Usernames start with the query will be returned. */
	username?: string;
	/** Custom fields to filter. Example: **custom_fields[telegram]=telegramLogin**. */
	custom_fields?: Record<string, string>;
	/** List of fields to include. */
	fields_include?: Array<"*" | "alerts">;
}

export type UsersFindResponse = {
	users: Array<Resp_UserModel>;
	system_info: Resp_SystemInfo;
};

export interface UsersGetParams {
	/** List of fields to include. */
	fields_include?: Array<"*" | "alerts">;
}

export type UsersGetResponse = {
	user: Resp_UserModel;
	system_info: Resp_SystemInfo;
};

export interface UsersEditBody {
	/** New username. */
	username?: string;
	/** New custom title of the user. */
	user_title?: string;
	/** Id of the group you want to display. */
	display_group_id?: number;
	/** Id of the icon group you want to display. */
	display_icon_group_id?: number;
	/** Id of the banner you want to display. */
	display_banner_id?: number;
	/** This message is shown when someone wants to write to you. */
	conv_welcome_message?: string;
	/** Your date of birth (day). */
	user_dob_day?: number;
	/** Your date of birth (month). */
	user_dob_month?: number;
	/** Your date of birth (year). */
	user_dob_year?: number;
	/** Secret answer. */
	secret_answer?: string;
	/** Secret answer type. */
	secret_answer_type?: number;
	/** Profile short link. */
	short_link?: string;
	/** User interface language ID. */
	language_id?: 1 | 2;
	/** User gender. */
	gender?: "" | "male" | "female";
	/** User timezone. */
	timezone?:
		| "Pacific/Midway"
		| "Pacific/Honolulu"
		| "Pacific/Marquesas"
		| "America/Anchorage"
		| "America/Los_Angeles"
		| "America/Santa_Isabel"
		| "America/Tijuana"
		| "America/Denver"
		| "America/Chihuahua"
		| "America/Phoenix"
		| "America/Chicago"
		| "America/Belize"
		| "America/Mexico_City"
		| "Pacific/Easter"
		| "America/New_York"
		| "America/Havana"
		| "America/Bogota"
		| "America/Caracas"
		| "America/Halifax"
		| "America/Goose_Bay"
		| "America/Asuncion"
		| "America/Santiago"
		| "America/Cuiaba"
		| "America/La_Paz"
		| "America/St_Johns"
		| "America/Argentina/Buenos_Aires"
		| "America/Argentina/San_Luis"
		| "America/Argentina/Mendoza"
		| "Atlantic/Stanley"
		| "America/Godthab"
		| "America/Montevideo"
		| "America/Sao_Paulo"
		| "America/Miquelon"
		| "America/Noronha"
		| "Atlantic/Cape_Verde"
		| "Atlantic/Azores"
		| "Europe/London"
		| "Africa/Casablanca"
		| "Atlantic/Reykjavik"
		| "Europe/Amsterdam"
		| "Africa/Algiers"
		| "Africa/Windhoek"
		| "Africa/Tunis"
		| "Europe/Athens"
		| "Africa/Johannesburg"
		| "Europe/Kaliningrad"
		| "Asia/Amman"
		| "Asia/Beirut"
		| "Africa/Cairo"
		| "Asia/Jerusalem"
		| "Asia/Gaza"
		| "Asia/Damascus"
		| "Europe/Moscow"
		| "Europe/Minsk"
		| "Africa/Nairobi"
		| "Asia/Tehran"
		| "Asia/Dubai"
		| "Asia/Yerevan"
		| "Asia/Baku"
		| "Indian/Mauritius"
		| "Asia/Kabul"
		| "Asia/Yekaterinburg"
		| "Asia/Tashkent"
		| "Asia/Kolkata"
		| "Asia/Kathmandu"
		| "Asia/Novosibirsk"
		| "Asia/Dhaka"
		| "Asia/Almaty"
		| "Asia/Rangoon"
		| "Asia/Krasnoyarsk"
		| "Asia/Bangkok"
		| "Asia/Irkutsk"
		| "Asia/Hong_Kong"
		| "Asia/Singapore"
		| "Australia/Perth"
		| "Asia/Yakutsk"
		| "Asia/Tokyo"
		| "Asia/Seoul"
		| "Australia/Adelaide"
		| "Australia/Darwin"
		| "Asia/Vladivostok"
		| "Asia/Magadan"
		| "Australia/Brisbane"
		| "Australia/Sydney"
		| "Pacific/Noumea"
		| "Pacific/Norfolk"
		| "Asia/Anadyr"
		| "Pacific/Auckland"
		| "Pacific/Fiji"
		| "Pacific/Chatham"
		| "Pacific/Tongatapu"
		| "Pacific/Apia"
		| "Pacific/Kiritimati";
	/** Whether to receive admin emails. */
	receive_admin_email?: boolean;
	/** Whether user activity is visible. */
	activity_visible?: boolean;
	/** Show date of birth (day and month). */
	show_dob_date?: boolean;
	/** Show year of birth. */
	show_dob_year?: boolean;
	/** Hide username change logs. */
	hide_username_change_logs?: boolean;
	/** Who can view your profile. */
	allow_view_profile?: "none" | "members" | "followed";
	/** Who can post on your profile. */
	allow_post_profile?: "none" | "members" | "followed";
	/** Who can send you personal conversations. */
	allow_send_personal_conversation?: "none" | "members" | "followed";
	/** Who can invite you to groups. */
	allow_invite_group?: "none" | "members" | "followed";
	/** Who can see your news feed. */
	allow_receive_news_feed?: "none" | "members" | "followed";
	/** Alert settings. */
	alert?: Record<string, boolean>;
	/** Custom user profile fields. */
	fields?: {
		location?: string;
		occupation?: string;
		homepage?: string;
		_4?: string;
		lztInnovationLink?: string;
		lztInnovation20Link?: string;
		lztInnovation30Link?: string;
		telegram?: string;
		vk?: string;
		discord?: string;
		steam?: string;
		jabber?: string;
		github?: string;
		matrix?: string;
	};
}

export type UsersEditResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface UsersClaimsParams {
	/** Filter claims by their type. */
	type?: "market" | "nomarket";
	/** Filter claims by their state. */
	claim_state?: "active" | "solved" | "rejected" | "settled";
}

export type UsersClaimsResponse = {
	claims: Array<{
		thread_id: number;
		claim_date: number;
		claim_state: string;
		message_body: string;
		message_body_html: string;
		message_body_plain_text: string;
		amount: number;
		amount_formatted: string;
		author: Resp_UserModel;
	}>;
	stats: {
		market: {
			total: number;
			solved: number;
			settled: number;
			rejected: number;
		};
		noMarket: {
			total: number;
			solved: number;
			settled: number;
			rejected: number;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface UsersAvatarUploadBody {
	/** Binary data of the avatar. */
	avatar: FileInput;
	/** The starting point of the selection by width. Default value - 0 */
	x?: number;
	/** The starting point of the selection by height. Default value - 0 */
	y?: number;
	/** Selection size. */
	crop?: number;
}

export type UsersAvatarUploadResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type UsersAvatarDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface UsersAvatarCropBody {
	/** The starting point of the selection by width. Default value - 0 */
	x?: number;
	/** The starting point of the selection by height. Default value - 0 */
	y?: number;
	/** Selection size. */
	crop?: number;
}

export type UsersAvatarCropResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export interface UsersBackgroundUploadBody {
	/** Binary data of the background. Background image must be 1920x1080 pixels */
	background: FileInput;
	/** The starting point of the selection by width. Default value - 0 */
	x?: number;
	/** The starting point of the selection by height. Default value - 0 */
	y?: number;
	/** Selection size. */
	crop?: number;
}

export type UsersBackgroundUploadResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type UsersBackgroundDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface UsersBackgroundCropBody {
	/** The starting point of the selection by width. Default value - 0 */
	x?: number;
	/** The starting point of the selection by height. Default value - 0 */
	y?: number;
	/** Selection size. */
	crop?: number;
}

export type UsersBackgroundCropResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export interface UsersFollowersParams {
	/** Ordering of followers. */
	order?: "natural" | "follow_date" | "follow_date_reverse";
	/** Page number of followers. */
	page?: number;
	/** Number of followers in a page. */
	limit?: number;
}

export type UsersFollowersResponse = {
	users: Array<{
		content_type: string;
		content_id: number;
		follow_date: number;
		user_id: number;
		username: string;
		username_html: string;
		user_message_count: number;
		user_register_date: number;
		user_like_count: number;
		user_like2_count: number;
		contest_count: number;
		trophy_count: number;
		custom_title: string;
		is_banned: number;
		user_title: string;
		user_is_valid: boolean;
		user_is_verified: boolean;
		user_is_followed: boolean;
		user_last_seen_date: number;
		user_following_count: number;
		user_followers_count: number;
		links: {
			permalink: string;
			detail: string;
			avatar: string;
			avatar_big: string;
			avatar_small: string;
			followers: string;
			followings: string;
			ignore: string;
			timeline: string;
		};
		permissions: {
			edit: boolean;
			follow: boolean;
			ignore: boolean;
			profile_post: boolean;
		};
		user_is_ignored: boolean;
		user_is_visitor: boolean;
		user_group_id: number;
		custom_fields: {
			_4: string;
			lztInnovation20Link: string;
			lztInnovation30Link: string;
			lztInnovationLink: string;
		};
	}>;
	users_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export type UsersFollowResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type UsersUnfollowResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface UsersFollowingsParams {
	/** Ordering of users. */
	order?: "natural" | "follow_date" | "follow_date_reverse";
	/** Page number of users. */
	page?: number;
	/** Number of users in a page. */
	limit?: number;
}

export type UsersFollowingsResponse = {
	users: Array<{
		content_type: string;
		content_id: number;
		follow_date: number;
		user_id: number;
		username: string;
		username_html: string;
		user_message_count: number;
		user_register_date: number;
		user_like_count: number;
		user_like2_count: number;
		contest_count: number;
		trophy_count: number;
		short_link: string;
		custom_title: string;
		is_banned: number;
		user_title: string;
		user_is_valid: boolean;
		user_is_verified: boolean;
		user_is_followed: boolean;
		user_last_seen_date: number;
		user_following_count: number;
		user_followers_count: number;
		links: {
			permalink: string;
			detail: string;
			avatar: string;
			avatar_big: string;
			avatar_small: string;
			followers: string;
			followings: string;
			ignore: string;
			timeline: string;
		};
		permissions: {
			edit: boolean;
			follow: boolean;
			ignore: boolean;
			profile_post: boolean;
		};
		user_is_ignored: boolean;
		user_is_visitor: boolean;
		user_group_id: number;
		custom_fields: {
			_4: string;
			allowSelfUnban: Array<unknown>;
			discord: string;
			github: string;
			jabber: string;
			lztAwardUserTrophy: string;
			lztCuratorNodeTitle: string;
			lztCuratorNodeTitleEn: string;
			lztDeposit: string;
			lztInnovation20Link: string;
			lztInnovation30Link: string;
			lztInnovationLink: string;
			lztLikesIncreasing: string;
			lztLikesZeroing: string;
			lztSympathyIncreasing: string;
			lztSympathyZeroing: string;
			maecenasValue: string;
			scamURL: string;
			steam: string;
			telegram: string;
			vk: string;
		};
	}>;
	users_total: number;
	system_info: Resp_SystemInfo;
};

export interface UsersLikesParams {
	/** Filter by forum section. */
	node_id?: number;
	/** Like type. */
	like_type?: "like" | "like2";
	/** Likes type. @default "gotten" */
	type?: "gotten" | "given";
	/** Page number. */
	page?: number;
	/** Content type. @default "post" */
	content_type?: "post" | "post_comment" | "profile_post" | "profile_post_comment";
	/** Get only likes from specified user. */
	search_user_id?: number;
	/** Show weekly statistics. */
	stats?: boolean;
}

export type UsersLikesResponse = {
	page: number;
	perPage: number;
	contentType: string;
	totalLikes: number;
	likes: {
		"1234567890": {
			like_id: number;
			content_type: string;
			content_id: number;
			like_user_id: number;
			like_date: number;
			content_user_id: number;
			content_state: string;
			user: Resp_UserModel;
			actionUser: Resp_UserModel;
			messageHtml: string;
			post_date: number;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface UsersIgnoredParams {
	/** If included in the request, only the user count is returned as **users_total**. */
	total?: boolean;
}

export type UsersIgnoredResponse = {
	users: Array<{
		can_edit: boolean;
		can_follow: boolean;
		can_ignore: boolean;
		can_post_profile: boolean;
		can_view_profile: boolean;
		can_view_profile_posts: boolean;
		can_warn: boolean;
		contest_count: number;
		conv_welcome_message: string;
		convertedDeposit: number;
		custom_fields: {
			_4: string;
			scamURL: unknown;
			lztLikesZeroing: unknown;
			lztLikesIncreasing: unknown;
			lztSympathyZeroing: unknown;
			lztSympathyIncreasing: unknown;
			telegram: unknown;
			vk: string;
			discord: string;
			steam: string;
			matrix: unknown;
			jabber: string;
			github: string;
		};
		deposit: number;
		homepage: string;
		ignored_info: {
			ignore_content: number;
			ignore_conversations: number;
			restrict_view_profile: number;
		};
		is_admin: boolean;
		is_banned: boolean;
		is_followed: boolean;
		is_ignored: boolean;
		is_moderator: boolean;
		is_staff: boolean;
		last_activity: number;
		like2_count: number;
		like_count: number;
		location: string;
		message_count: number;
		register_date: number;
		rendered: {
			username: string;
			avatars: {
				l: string;
				m: string;
				s: string;
			};
			backgrounds: Array<unknown>;
			link: string;
		};
		short_link: string;
		trophy_points: number;
		user_id: number;
		user_title: string;
		username: string;
		view_url: string;
		warning_points: number;
	}>;
	system_info: Resp_SystemInfo;
};

export type UsersIgnoreResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface UsersIgnoreEditParams {
	/** Ignore user's conversations. */
	ignore_conversations?: boolean;
	/** Ignore user's content. */
	ignore_content?: boolean;
	/** Restrict user from viewing your profile. */
	restrict_view_profile?: boolean;
}

export type UsersIgnoreEditResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type UsersUnignoreResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface UsersContentsParams {
	/** Page number of contents. */
	page?: number;
	/** Number of contents in a page. */
	limit?: number;
}

export type UsersContentsResponse = {
	data: Array<{
		content_type: string;
		content_id: number;
		post_id: number;
		thread_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_create_date: number;
		post_body: string;
		post_body_html: string;
		post_body_plain_text: string;
		signature: string;
		signature_html: string;
		signature_plain_text: string;
		post_like_count: number;
		post_attachment_count: number;
		like_users: Array<{
			user_id: number;
			username: string;
			display_style_group_id: number;
			is_banned: number;
			uniq_username_css: string;
		}>;
		user_is_ignored: boolean;
		post_is_published: boolean;
		post_is_deleted: boolean;
		post_update_date: number;
		post_is_first_post: boolean;
		links: {
			permalink: string;
			detail: string;
			thread: string;
			poster: string;
			likes: string;
			report: string;
			attachments: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			reply: boolean;
			like: boolean;
			report: boolean;
			upload_attachment: boolean;
		};
		thread: Resp_ThreadModel;
	}>;
	data_total: number;
	user: Resp_UserModel;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export type UsersTrophiesResponse = {
	trophies: Array<{
		trophy_id: number;
		title: string;
		description: string;
		trophy_url: string;
	}>;
	system_info: Resp_SystemInfo;
};

export type UsersSecretAnswerTypesResponse = {
	data: Array<{
		sa_id: number;
		renderedPhrase: string;
	}>;
	system_info: Resp_SystemInfo;
};

export type UsersSaResetResponse = {
	success: boolean;
	waiting_time: string;
	system_info: Resp_SystemInfo;
};

export type UsersSaCancelResetResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── ProfilePostsApi Types ────────────────────────────────────────

export interface ProfilePostsListParams {
	/** Filter to get only posts from the specified user. */
	posts_user_id?: number;
	/** Page number of contents. */
	page?: number;
	/** Number of contents in a page. */
	limit?: number;
	/** List of fields to include. */
	fields_include?: Array<"*" | "latest_comments">;
}

export type ProfilePostsListResponse = {
	profile_posts: Array<Resp_ProfilePostModel>;
	totalProfilePosts: number;
	canPostOnProfile: boolean;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export type ProfilePostsGetResponse = {
	profile_post: Resp_ProfilePostModel;
	system_info: Resp_SystemInfo;
};

export interface ProfilePostsEditBody {
	/** New content of the profile post. */
	post_body?: string;
	/** Disable comments. */
	disable_comments?: boolean;
}

export type ProfilePostsEditResponse = {
	profile_post: {
		profile_post_id: number;
		timeline_user_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_create_date: number;
		post_body: string;
		post_like_count: number;
		post_comment_count: number;
		timeline_username: string;
		user_is_ignored: boolean;
		post_is_published: boolean;
		post_is_deleted: boolean;
		links: {
			permalink: string;
			detail: string;
			timeline: string;
			timeline_user: string;
			poster: string;
			likes: string;
			comments: string;
			report: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			like: boolean;
			comment: boolean;
			report: boolean;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface ProfilePostsDeleteParams {
	/** Reason of the profile post removal. */
	reason?: string;
}

export type ProfilePostsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ProfilePostsReportReasonsResponse = {
	reasons: Array<string>;
	system_info: Resp_SystemInfo;
};

export interface ProfilePostsReportBody {
	/** Reason of the report. */
	message: string;
}

export type ProfilePostsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ProfilePostsCreateBody {
	user_id: UserIDModel;
	/** Content of a profile post. */
	post_body: string;
}

export type ProfilePostsCreateResponse = {
	profile_post: {
		profile_post_id: number;
		timeline_user_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_create_date: number;
		post_body: string;
		post_like_count: number;
		post_comment_count: number;
		timeline_username: string;
		user_is_ignored: boolean;
		post_is_published: boolean;
		post_is_deleted: boolean;
		links: {
			permalink: string;
			detail: string;
			timeline: string;
			timeline_user: string;
			poster: string;
			likes: string;
			comments: string;
			report: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			like: boolean;
			comment: boolean;
			report: boolean;
		};
	};
	system_info: Resp_SystemInfo;
};

export type ProfilePostsStickResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ProfilePostsUnstickResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ProfilePostsLikesResponse = {
	users: Array<{
		user_id: number;
		username: string;
	}>;
	system_info: Resp_SystemInfo;
};

export type ProfilePostsLikeResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ProfilePostsUnlikeResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ProfilePostsCommentsListParams {
	/** Id of profile post. */
	profile_post_id: number;
	/** Date to get older comments. Please note that this entry point does not support the page parameter but it still does support **limit**. */
	before?: number;
	/** Number of profile posts in a page. */
	limit?: number;
}

export type ProfilePostsCommentsListResponse = {
	comments: Array<Resp_ProfilePostCommentModel>;
	comments_total: number;
	profile_post: {
		profile_post_id: number;
		timeline_user_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_create_date: number;
		post_body: string;
		post_like_count: number;
		post_comment_count: number;
		timeline_username: string;
		user_is_ignored: boolean;
		post_is_published: boolean;
		post_is_deleted: boolean;
		links: {
			permalink: string;
			detail: string;
			timeline: string;
			timeline_user: string;
			poster: string;
			likes: string;
			comments: string;
			report: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			like: boolean;
			comment: boolean;
			report: boolean;
		};
	};
	timeline_user: Resp_UserModel;
	system_info: Resp_SystemInfo;
};

export interface ProfilePostsCommentsCreateBody {
	/** Id of profile post. */
	profile_post_id: number;
	/** Content of the new profile post comment. */
	comment_body: string;
}

export type ProfilePostsCommentsCreateResponse = {
	comment: {
		comment_id: number;
		profile_post_id: number;
		comment_user_id: number;
		comment_username: string;
		comment_username_html: string;
		comment_create_date: number;
		comment_body: string;
		user_is_ignored: boolean;
		timeline_user_id: number;
		links: {
			detail: string;
			profile_post: string;
			timeline: string;
			timeline_user: string;
			poster: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			delete: boolean;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface ProfilePostsCommentsEditBody {
	/** Id of profile post comment. */
	comment_id: number;
	/** New content for the profile post comment. */
	comment_body: string;
}

export type ProfilePostsCommentsEditResponse = {
	comment: {
		comment_id: number;
		profile_post_id: number;
		comment_user_id: number;
		comment_username: string;
		comment_username_html: string;
		comment_create_date: number;
		comment_body: string;
		user_is_ignored: boolean;
		timeline_user_id: number;
		links: {
			detail: string;
			profile_post: string;
			timeline: string;
			timeline_user: string;
			poster: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			delete: boolean;
		};
	};
	system_info: Resp_SystemInfo;
};

export interface ProfilePostsCommentsDeleteBody {
	/** Id of profile post comment. */
	comment_id: number;
}

export type ProfilePostsCommentsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ProfilePostsCommentsGetResponse = {
	comment: Resp_ProfilePostCommentModel;
	system_info: Resp_SystemInfo;
};

export interface ProfilePostsCommentsReportBody {
	/** Reason of the report. */
	message: string;
}

export type ProfilePostsCommentsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── ConversationsApi Types ────────────────────────────────────────

export interface ConversationsListParams {
	/** Filter conversations by folder. */
	folder?:
		| "all"
		| "unread"
		| "groups"
		| "market"
		| "market_replacements"
		| "staff"
		| "giveaways"
		| "p2p";
	/** Page number of conversations. */
	page?: number;
	/** Number of conversations in a page. */
	limit?: number;
}

export type ConversationsListResponse = {
	conversations: Array<Resp_ConversationModel>;
	can_start: boolean;
	folders: Array<{
		id: string;
		title: string;
		name: string;
	}>;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface ConversationsCreateBody {
	/** Id of recipient. Required if **is_group=false**. */
	recipient_id?: number;
	/** List of recipients username's. Max recipients count is 10. Required if **is_group=true**. */
	recipients?: Array<string>;
	/** Is group. Set **false** if personal conversation, or set **true** if group. @default false */
	is_group?: boolean;
	/** The title of new conversation. Required if **is_group=1**. */
	title?: string;
	/** Open invite. */
	open_invite?: boolean;
	/** Allow edit messages. */
	allow_edit_messages?: boolean;
	/** Allow members to stick messages. */
	allow_sticky_messages?: boolean;
	/** Allow members to delete their own messages. */
	allow_delete_own_messages?: boolean;
	/** First message. Required if **is_group**=false */
	message_body?: string;
}

export type ConversationsCreateResponse = {
	conversation: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsUpdateBody {
	/** Id of conversation. */
	conversation_id: number;
	/** New conversation title. */
	title?: string;
	/** Allow members to invite others. */
	open_invite?: boolean;
	/** Make conversation history visible to new members. */
	history_open?: boolean;
	/** Allow members to edit their own messages. */
	allow_edit_messages?: boolean;
	/** Allow members to stick messages. */
	allow_sticky_messages?: boolean;
	/** Allow members to delete their own messages. */
	allow_delete_own_messages?: boolean;
}

export type ConversationsUpdateResponse = {
	conversation: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsDeleteBody {
	/** Id of conversation. */
	conversation_id: number;
	/** Deletion type. */
	delete_type: "delete" | "delete_ignore";
}

export type ConversationsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ConversationsStartBody {
	user_id: UserIDModel;
}

export type ConversationsStartResponse = {
	conversation: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsSaveBody {
	/** Content url. */
	link: string;
}

export type ConversationsSaveResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ConversationsGetResponse = {
	conversation: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsMessagesListParams {
	/** Page number of messages. */
	page?: number;
	/** Number of messages in a page. */
	limit?: number;
	/** Ordering of messages. */
	order?: "natural" | "natural_reverse";
	/** Date to get older messages. */
	before?: number;
	/** Date to get newer messages. */
	after?: number;
}

export type ConversationsMessagesListResponse = {
	messages: Array<Resp_ConversationMessageModel>;
	messages_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface ConversationsMessagesCreateBody {
	/** ID of the message being replied to. */
	reply_message_id?: number;
	/** Content of the new message. */
	message_body: string;
}

export type ConversationsMessagesCreateResponse = {
	message: Resp_ConversationMessageModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsSearchBody {
	/** Search query string. */
	q?: string;
	/** Id of conversation. */
	conversation_id?: number;
	/** Search for recipients. */
	search_recipients?: boolean;
}

export type ConversationsSearchResponse = {
	conversations: Array<Resp_ConversationModel>;
	recipients: boolean;
	system_info: Resp_SystemInfo;
};

export type ConversationsMessagesGetResponse = {
	message: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsMessagesEditBody {
	/** New content of the message. */
	message_body: string;
}

export type ConversationsMessagesEditResponse = {
	message: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export type ConversationsMessagesDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ConversationsInviteBody {
	/** List of recipients username's. */
	recipients: Array<string>;
}

export type ConversationsInviteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ConversationsKickBody {
	/** Id of user to kick from conversation. */
	user_id: number;
}

export type ConversationsKickResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ConversationsReadResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ConversationsReadAllResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type ConversationsMessagesStickResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ConversationsMessagesUnstickResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export type ConversationsStarResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type ConversationsUnstarResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type ConversationsAlertsEnableResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export type ConversationsAlertsDisableResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

// ─── NotificationsApi Types ────────────────────────────────────────

export interface NotificationsListParams {
	/** Filter notifications by their type. */
	type?: "market" | "nomarket";
	/** Page number of notifications. */
	page?: number;
	/** Number of notifications in a page. */
	limit?: number;
}

export type NotificationsListResponse = {
	notifications: Array<Resp_NotificationModel>;
	notifications_total: number;
	links: {
		read: string;
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export type NotificationsGetResponse = {
	notification_id: number;
	notification: Resp_NotificationModel;
	system_info: Resp_SystemInfo;
};

export interface NotificationsReadBody {
	/** If notification_id is omitted, it's mark all existing notifications as read. */
	notification_id?: number;
}

export type NotificationsReadResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── TagsApi Types ────────────────────────────────────────

export type TagsPopularResponse = {
	tags: Record<string, string>;
	system_info: Resp_SystemInfo;
};

export interface TagsListParams {
	/** Page number of tags list. */
	page?: number;
	/** Number of results in a page. */
	limit?: number;
}

export type TagsListResponse = {
	tags: Record<string, string>;
	tags_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface TagsGetParams {
	/** Page number of tagged contents. */
	page?: number;
	/** Number of tagged contents in a page. */
	limit?: number;
}

export type TagsGetResponse = {
	tag: {
		tag_id: number;
		tag_text: string;
		tag_use_count: number;
		links: {
			permalink: string;
			detail: string;
		};
	};
	tagged: Array<Resp_ThreadModel>;
	tagged_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface TagsFindParams {
	/** tag to filter. Tags start with the query will be returned. */
	tag: string;
}

export type TagsFindResponse = {
	tags: Array<string>;
	ids: Array<number>;
	system_info: Resp_SystemInfo;
};

// ─── SearchApi Types ────────────────────────────────────────

export interface SearchAllBody {
	/** Search query. Can be skipped if **user_id** is set. */
	q?: string;
	/** Tag to search for tagged contents. */
	tag?: string;
	/** Id of the container forum to search for contents. Child forums of the specified forum will be included in the search. */
	forum_id?: number;
	user_id?: UserIDModel;
	/** Page number of results. */
	page?: number;
	/** Number of results in a page. */
	limit?: number;
	/** The time in milliseconds (e.g. 1767214800) before last content date. */
	before?: number;
}

export type SearchAllResponse = {
	data: Array<Resp_ForumModel>;
	data_total: number;
	users: Array<Resp_UserModel>;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchThreadsBody {
	/** Search query. Can be skipped if **user_id** is set. */
	q?: string;
	/** Tag to search for tagged contents. */
	tag?: string;
	/** Id of the container forum to search for contents. Child forums of the specified forum will be included in the search. */
	forum_id?: number;
	user_id?: UserIDModel;
	/** Page number of results. */
	page?: number;
	/** Number of results in a page. */
	limit?: number;
	/** Number of thread data to be returned. */
	data_limit?: number;
	/** The time in milliseconds (e.g. 1767214800) before last content date. */
	before?: number;
}

export type SearchThreadsResponse = {
	data: Array<Resp_ForumModel>;
	data_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchPostsBody {
	/** Search query. Can be skipped if **user_id** is set. */
	q?: string;
	/** Tag to search for tagged contents. */
	tag?: string;
	/** Id of the container forum to search for contents. Child forums of the specified forum will be included in the search. */
	forum_id?: number;
	user_id?: UserIDModel;
	/** Page number of results. */
	page?: number;
	/** Number of results in a page. */
	limit?: number;
	/** Number of post data to be returned. */
	data_limit?: number;
	/** The time in milliseconds (e.g. 1767214800) before last content date. */
	before?: number;
}

export type SearchPostsResponse = {
	data: Array<Resp_PostModel>;
	data_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchUsersBody {
	/** Search query. */
	q?: string;
}

export type SearchUsersResponse = {
	users: Array<Resp_UserModel>;
	system_info: Resp_SystemInfo;
};

export interface SearchProfilePostsBody {
	/** Search query. Can be skipped if **user_id** is set. */
	q?: string;
	/** User ID to filter profile posts. */
	user_id?: number;
	/** Page number of results. */
	page?: number;
	/** Number of results in a page. */
	limit?: number;
	/** The time in milliseconds (e.g. 1767214800) before last content date. */
	before?: number;
}

export type SearchProfilePostsResponse = {
	data: Array<{
		content_type: string;
		content_id: number;
		profile_post_id: number;
		timeline_user_id: number;
		poster_user_id: number;
		poster_username: string;
		poster_username_html: string;
		post_create_date: number;
		post_body: string;
		post_like_count: number;
		post_comment_count: number;
		timeline_username: string;
		user_is_ignored: boolean;
		post_is_published: boolean;
		post_is_deleted: boolean;
		links: {
			permalink: string;
			detail: string;
			timeline: string;
			timeline_user: string;
			poster: string;
			likes: string;
			comments: string;
			report: string;
			poster_avatar: string;
		};
		permissions: {
			view: boolean;
			edit: boolean;
			delete: boolean;
			like: boolean;
			comment: boolean;
			report: boolean;
		};
		timeline_user: Resp_UserModel;
	}>;
	data_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchTaggedBody {
	/** Tag to search for tagged contents. */
	tag?: string;
	/** Array of tags to search for tagged contents. */
	tags?: Array<string>;
	/** Page number of results. */
	page?: number;
	/** Number of results in a page. */
	limit?: number;
}

export type SearchTaggedResponse = {
	data: Array<Resp_ThreadModel>;
	data_total: number;
	search_tags: {
		"160179": string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchResultsParams {
	/** Page number of results. */
	page?: number;
	/** Number of results in a page. */
	limit?: number;
}

export type SearchResultsResponse = {
	data: Array<Resp_ThreadModel>;
	data_total: number;
	search_tags: {
		"160179": string;
	};
	system_info: Resp_SystemInfo;
};

// ─── BatchApi Types ────────────────────────────────────────

export type BatchExecuteBody = Array<{
	id?: string;
	uri: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	params?: Record<string, string>;
}>;

export type BatchExecuteResponse = {
	jobs: {
		job_id: Record<string, unknown>;
	};
};

// ─── ChatboxApi Types ────────────────────────────────────────

export interface ChatboxIndexParams {
	/** Room id. */
	room_id?: RoomIDModel;
}

export type ChatboxIndexResponse = {
	rooms: Array<{
		can_report: boolean;
		eng: boolean;
		market: boolean;
		room_id: number;
		title: string;
	}>;
	ban: unknown;
	ignore: Array<{
		avatar_date: number;
		background_date: number;
		contest_count: number;
		custom_title: string;
		display_banner_id: number;
		display_icon_group_id: number;
		display_style_group_id: number;
		is_admin: boolean;
		is_banned: boolean;
		is_moderator: boolean;
		is_staff: boolean;
		last_activity: number;
		like2_count: number;
		like_count: number;
		message_count: number;
		register_date: number;
		rendered: {
			username: string;
			avatars: {
				l: string;
				m: string;
				s: string;
			};
			link: string;
		};
		short_link: unknown;
		trophy_points: number;
		uniq_banner: unknown;
		uniq_username_css: string;
		user_id: number;
		username: string;
	}>;
	permissions: {
		deleteAnyMessage: boolean;
		editAnyMessage: boolean;
		viewAnyMessage: boolean;
		viewMessages: boolean;
		postMessage: boolean;
		ban: boolean;
	};
	commands: Array<string>;
	roomsOnline: {
		"chat:0": number;
	};
	system_info: Resp_SystemInfo;
};

export interface ChatboxGetMessagesParams {
	/** Room id. */
	room_id: RoomIDModel;
	/** Message id to get older chat messages. */
	before_message_id?: number;
}

export type ChatboxGetMessagesResponse = {
	messages: Array<Resp_ChatboxMessageModel>;
	system_info: Resp_SystemInfo;
};

export interface ChatboxPostMessageBody {
	room_id: RoomIDModel;
	/** ID of the message being replied to. */
	reply_message_id?: number;
	/** Content of the chat message. */
	message: string;
}

export type ChatboxPostMessageResponse = {
	message: Resp_ChatboxMessageModel;
	system_info: Resp_SystemInfo;
};

export interface ChatboxEditMessageBody {
	/** Message id. */
	message_id: number;
	/** New content of the chat message. */
	message: string;
}

export type ChatboxEditMessageResponse = {
	message: Resp_ChatboxMessageModel;
	system_info: Resp_SystemInfo;
};

export interface ChatboxDeleteMessageBody {
	/** Message id. */
	message_id: number;
}

export type ChatboxDeleteMessageResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ChatboxOnlineParams {
	/** Room id. */
	room_id: RoomIDModel;
}

export type ChatboxOnlineResponse = {
	users: Array<{
		avatar_date: number;
		background_date: number;
		contest_count: number;
		custom_title: string;
		display_banner_id: number;
		display_icon_group_id: number;
		display_style_group_id: number;
		is_admin: boolean;
		is_banned: boolean;
		is_moderator: boolean;
		is_staff: boolean;
		last_activity: number;
		like2_count: number;
		like_count: number;
		message_count: number;
		register_date: number;
		rendered: {
			username: string;
			avatars: {
				l: string;
				m: string;
				s: string;
			};
			link: string;
		};
		short_link: string;
		trophy_points: number;
		uniq_banner: {
			banner_css: string;
			banner_text: string;
			banner_icon: string;
			username_icon: string;
		};
		uniq_username_css: string;
		user_id: number;
		username: string;
	}>;
	system_info: Resp_SystemInfo;
};

export interface ChatboxReportReasonsParams {
	/** Message id. */
	message_id: number;
}

export type ChatboxReportReasonsResponse = {
	reasons: Array<string>;
	system_info: Resp_SystemInfo;
};

export interface ChatboxReportBody {
	/** Message id. */
	message_id: number;
	/** Report reason. */
	reason: string;
}

export type ChatboxReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ChatboxGetLeaderboardParams {
	/** Duration. */
	duration?: "day" | "week" | "month";
}

export type ChatboxGetLeaderboardResponse = {
	leaderboard: Array<{
		count: number;
		user_id: number;
		avatar_date: number;
		background_date: number;
		contest_count: number;
		custom_title: string;
		display_banner_id: number;
		display_icon_group_id: number;
		display_style_group_id: number;
		is_banned: boolean;
		last_activity: number;
		like2_count: number;
		like_count: number;
		message_count: number;
		register_date: number;
		rendered: {
			username: string;
			avatars: {
				l: string;
				m: string;
				s: string;
			};
			link: string;
		};
		short_link: unknown;
		trophy_points: number;
		uniq_banner: {
			banner_css: string;
			banner_text: string;
			banner_icon: string;
		};
		uniq_username_css: string;
		username: string;
	}>;
	system_info: Resp_SystemInfo;
};

export type ChatboxGetIgnoreResponse = {
	ignored: Array<{
		avatar_date: number;
		background_date: number;
		contest_count: number;
		custom_title: string;
		display_banner_id: number;
		display_icon_group_id: number;
		display_style_group_id: number;
		is_banned: boolean;
		last_activity: number;
		like2_count: number;
		like_count: number;
		message_count: number;
		register_date: number;
		rendered: {
			username: string;
			avatars: {
				l: string;
				m: string;
				s: string;
			};
			link: string;
		};
		short_link: unknown;
		trophy_points: number;
		uniq_banner: unknown;
		uniq_username_css: string;
		user_id: number;
		username: string;
	}>;
	system_info: Resp_SystemInfo;
};

export interface ChatboxPostIgnoreBody {
	user_id: UserIDModel;
}

export type ChatboxPostIgnoreResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ChatboxDeleteIgnoreBody {
	user_id: UserIDModel;
}

export type ChatboxDeleteIgnoreResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── FormsApi Types ────────────────────────────────────────

export interface FormsListParams {
	/** Page number of forms. */
	page?: number;
}

export type FormsListResponse = {
	forms: Array<{
		form_id: number;
		title: string;
		description: string;
		fields: Array<{
			field_id: number;
			title: string;
			fieldChoices: {
				buy: string;
				sell: string;
			};
			required: number;
			max_length: number;
			default_value: string;
		}>;
	}>;
	formsPerPage: number;
	page: number;
	totalForms: number;
	system_info: Resp_SystemInfo;
};

export interface FormsCreateP2Ptrade {
	/** Form ID @default 1 */
	form_id?: 1;
	fields: {
		"8": number;
		"11": number;
		"14"?: string;
		"15"?:
			| "market"
			| "ru_1"
			| "ru_2"
			| "ru_3"
			| "ru_4"
			| "ru_5"
			| "ru_6"
			| "ru_7"
			| "ru_8"
			| "ru_9"
			| "ru_10"
			| "ru_11"
			| "ua_1"
			| "ua_2"
			| "ua_3"
			| "ua_4"
			| "ua_5"
			| "ua_6"
			| "ua_7"
			| "ua_8"
			| "kz_1"
			| "kz_2"
			| "kz_3"
			| "kz_4"
			| "kz_5"
			| "kz_6"
			| "kz_7"
			| "kz_8"
			| "by_1"
			| "by_2"
			| "by_3"
			| "by_4"
			| "by_5"
			| "by_6"
			| "by_7"
			| "by_8"
			| "by_9"
			| "sbp"
			| "cr_1"
			| "cr_2"
			| "cr_3"
			| "cr_4"
			| "cr_5"
			| "cr_6"
			| "cr_7"
			| "cr_8"
			| "cr_12"
			| "cr_9"
			| "cr_10"
			| "cr_11"
			| "ot_1"
			| "ot_2"
			| "ot_3"
			| "ot_4"
			| "cr_13"
			| "by_10";
		"16"?: "rub" | "dollar" | "euro" | "uah" | "tenge" | "byn";
		"17"?:
			| "market"
			| "ru_1"
			| "ru_2"
			| "ru_3"
			| "ru_4"
			| "ru_5"
			| "ru_6"
			| "ru_7"
			| "ru_8"
			| "ru_9"
			| "ru_10"
			| "ru_11"
			| "ua_1"
			| "ua_2"
			| "ua_3"
			| "ua_4"
			| "ua_5"
			| "ua_6"
			| "ua_7"
			| "ua_8"
			| "kz_1"
			| "kz_2"
			| "kz_3"
			| "kz_4"
			| "kz_5"
			| "kz_6"
			| "kz_7"
			| "kz_8"
			| "by_1"
			| "by_2"
			| "by_3"
			| "by_4"
			| "by_5"
			| "by_6"
			| "by_7"
			| "by_8"
			| "by_9"
			| "sbp"
			| "cr_1"
			| "cr_2"
			| "cr_3"
			| "cr_4"
			| "cr_5"
			| "cr_6"
			| "cr_7"
			| "cr_8"
			| "cr_12"
			| "cr_9"
			| "cr_10"
			| "cr_11"
			| "ot_1"
			| "ot_2"
			| "ot_3"
			| "ot_4"
			| "cr_13"
			| "by_10";
		"18"?: "rub" | "dollar" | "euro" | "uah" | "tenge" | "byn";
	};
}

export interface FormsCreateComplaint {
	/** Form ID @default 3 */
	form_id?: 3;
	fields: {
		"22"?: string;
		"23"?:
			| "cp_re_1"
			| "cp_re_2"
			| "cp_re_3"
			| "cp_re_4"
			| "cp_re_5"
			| "cp_re_6"
			| "cp_re_7"
			| "cp_re_8"
			| "cp_re_9"
			| "cp_re_10"
			| "cp_re_11"
			| "cp_re_12"
			| "cp_re_13"
			| "cp_re_other";
		"24": string;
		"27"?: string;
		"28"?: string;
		"29"?: string;
		"30"?: string;
	};
}

export type FormsCreateBody = FormsCreateP2Ptrade | FormsCreateComplaint;

export type FormsCreateResponse = {
	message: string;
	content: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

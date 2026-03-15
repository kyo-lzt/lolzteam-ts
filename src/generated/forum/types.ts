// Auto-generated. Do not edit manually.

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
	thread_prefixes: Array<unknown>;
	thread_tags: {
		"206": string;
		"97491": string;
		"193431": string;
	};
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
			error: unknown;
			next_available_time: unknown;
		};
	};
	node_title: string;
	restrictions: {
		reply_delay: number;
		max_reply_count: number;
	};
	last_post: {
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
	contest: {
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
		winners: Array<number>;
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

export interface Resp_SystemInfo {
	visitor_id: number;
	time: number;
}

// ─── OAuthApi Types ────────────────────────────────────────

export interface OAuthTokenBody {
	grant_type: "client_credentials" | "authorization_code" | "refresh_token" | "password";
	client_id: string;
	client_secret: string;
	scope?: Array<"basic" | "read" | "post" | "conversate" | "market" | "payment" | "invoice">;
	code?: string;
	redirect_uri?: string;
	refresh_token?: string;
	username?: string;
	password?: string;
}

export type OAuthTokenResponse = {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token?: string;
	scope?: string;
};

// ─── AssetsApi Types ────────────────────────────────────────

export interface AssetsCssParams {
	css?: Array<string>;
}

export type AssetsCssResponse = {
	contents: string;
	system_info: Resp_SystemInfo;
};

// ─── CategoriesApi Types ────────────────────────────────────────

export interface CategoriesListParams {
	parent_category_id?: number;
	parent_forum_id?: number;
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
	parent_category_id?: number;
	parent_forum_id?: number;
	order?: "natural" | "list";
}

export type ForumsListResponse = {
	forums: Array<{
		forum_id: number;
		forum_title: string;
		forum_description: string;
		forum_thread_count: number;
		forum_post_count: number;
		forum_prefixes: Array<{
			group_title: string;
			group_prefixes: Array<{
				prefix_id: number;
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
	}>;
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
	data: {
		"0": {
			"0": {
				forum_id: number;
				forum_title: string;
				forum_description: string;
				forum_thread_count: number;
				forum_post_count: number;
				parent_node_id: number;
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
			};
		};
	};
	tabs: Array<{
		link_title: string;
		isDefault: boolean;
		title: string;
		isHidden: boolean;
	}>;
	system_info: Resp_SystemInfo;
};

export type ForumsGetResponse = {
	forum: {
		forum_id: number;
		forum_title: string;
		forum_description: string;
		forum_thread_count: number;
		forum_post_count: number;
		forum_prefixes: Array<{
			group_title: string;
			group_prefixes: Array<{
				prefix_id: number;
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
			upload_attachment: boolean;
			tag_thread: boolean;
			follow: boolean;
		};
		forum_is_followed: boolean;
	};
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
	post?: boolean;
	alert?: boolean;
	email?: boolean;
	prefix_ids?: Array<number>;
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
	total?: boolean;
}

export type ForumsFollowedResponse = {
	forums: Array<{
		forum_id: number;
		forum_title: string;
		forum_description: string;
		forum_thread_count: number;
		forum_post_count: number;
		forum_prefixes: Array<{
			group_title: string;
			group_prefixes: Array<{
				prefix_id: number;
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
			upload_attachment: boolean;
			tag_thread: boolean;
			follow: boolean;
		};
		forum_is_followed: boolean;
		follow: {
			post: boolean;
			alert: boolean;
			email: boolean;
		};
	}>;
	system_info: Resp_SystemInfo;
};

export type ForumsGetFeedOptionsResponse = {
	forums: Array<{
		forum_id: number;
		forum_title: string;
		forum_description: string;
		parent_node_id: number;
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
		has_children: boolean;
	}>;
	excluded_forums_ids: Array<number>;
	default_excluded_forums_ids: Array<number>;
	keywords: string;
	system_info: Resp_SystemInfo;
};

export interface ForumsEditFeedOptionsBody {
	node_ids?: Array<number>;
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
	parent_page_id?: number;
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
	forum_id?: number;
	tab?: string;
	state?: "active" | "closed";
	period?: "day" | "week" | "month" | "year";
	title?: string;
	title_only?: boolean;
	creator_user_id?: number;
	sticky?: boolean;
	"prefix_ids[]"?: Array<number>;
	"prefix_ids_not[]"?: Array<number>;
	thread_tag_id?: number;
	page?: number;
	limit?: number;
	order?:
		| "post_date"
		| "last_post_date"
		| "reply_count"
		| "reply_count_asc"
		| "first_post_likes"
		| "vote_count";
	direction?: "asc" | "desc";
	thread_create_date?: number;
	thread_update_date?: number;
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
	post_body: string;
	forum_id: number;
	title?: string;
	title_en?: string;
	prefix_id?: Array<number>;
	tags?: Array<string>;
	hide_contacts?: boolean;
	allow_ask_hidden_content?: boolean;
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	comment_ignore_group?: boolean;
	dont_alert_followers?: boolean;
	schedule_date?: string;
	schedule_time?: string;
	watch_thread_state?: boolean;
	watch_thread?: boolean;
	watch_thread_email?: boolean;
}

export type ThreadsCreateResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsCreateContestBody {
	post_body: string;
	title?: string;
	title_en?: string;
	contest_type: "by_finish_date";
	length_value?: number;
	length_option?: "minutes" | "hours" | "days";
	prize_type: "money" | "upgrades";
	count_winners?: number;
	prize_data_money?: number;
	is_money_places?: boolean;
	prize_data_places?: Array<number>;
	prize_data_upgrade?: 1 | 6 | 12 | 14 | 17 | 19 | 20 | 21 | 22;
	require_like_count: number;
	require_total_like_count: number;
	secret_answer?: string;
	tags?: Array<string>;
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	comment_ignore_group?: boolean;
	dont_alert_followers?: boolean;
	hide_contacts?: boolean;
	allow_ask_hidden_content?: boolean;
	schedule_date?: string;
	schedule_time?: string;
	watch_thread_state?: boolean;
	watch_thread?: boolean;
	watch_thread_email?: boolean;
}

export type ThreadsCreateContestResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsClaimBody {
	as_responder: string;
	as_is_market_deal: boolean;
	as_market_item_id?: number;
	as_data?: string;
	as_amount: number;
	currency?: "rub" | "uah" | "kzt" | "byn" | "usd" | "eur" | "gbp" | "cny" | "try";
	transfer_type: "guarantor" | "safe" | "notsafe";
	pay_claim?: "now" | "later";
	as_funds_receipt?: string;
	as_tg_login_screenshot?: string;
	tags?: Array<string>;
	hide_contacts?: boolean;
	allow_ask_hidden_content?: boolean;
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	comment_ignore_group?: boolean;
	dont_alert_followers?: boolean;
	schedule_date?: string;
	schedule_time?: string;
	watch_thread_state?: boolean;
	watch_thread?: boolean;
	watch_thread_email?: boolean;
	post_body: string;
}

export type ThreadsClaimResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsGetParams {
	fields_include?: Array<"*" | "latest_posts">;
}

export type ThreadsGetResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsEditBody {
	title?: string;
	title_en?: string;
	prefix_id?: Array<number>;
	tags?: Array<string>;
	discussion_open?: boolean;
	hide_contacts?: boolean;
	allow_ask_hidden_content?: boolean;
	reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
	comment_ignore_group?: boolean;
}

export type ThreadsEditResponse = {
	thread: Resp_ThreadModel;
	system_info: Resp_SystemInfo;
};

export interface ThreadsDeleteBody {
	reason?: string;
}

export type ThreadsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ThreadsMoveBody {
	node_id: string;
	title?: string;
	title_en?: string;
	prefix_id?: Array<number>;
	apply_thread_prefix?: boolean;
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
	total?: boolean;
	fields_include?: Array<"*" | "latest_posts">;
}

export type ThreadsFollowedResponse = {
	threads: Array<{
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
		thread_is_followed: boolean;
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
		};
		thread_prefixes: Array<unknown>;
		thread_tags: {
			"38": string;
			"523": string;
			"1403": string;
			"1953": string;
			"8176": string;
		};
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
			upload_attachment: boolean;
			edit: boolean;
			edit_title: boolean;
			edit_tags: boolean;
		};
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
		follow: {
			alert: boolean;
			email: boolean;
		};
	}>;
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
	response_id?: number;
	response_ids?: Array<number>;
}

export type ThreadsPollVoteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ThreadsUnreadParams {
	limit?: number;
	forum_id?: number;
	data_limit?: number;
}

export type ThreadsUnreadResponse = {
	threads: Array<Resp_ThreadModel>;
	data: Array<{
		content_type: string;
		content_id: number;
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
		thread_is_followed: boolean;
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
		};
		thread_prefixes: Array<unknown>;
		thread_tags: Array<unknown>;
		links: {
			permalink: string;
			detail: string;
			followers: string;
			forum: string;
			posts: string;
			first_poster: string;
			first_poster_avatar: string;
			first_post: string;
			last_poster: string;
			last_post: string;
		};
		permissions: {
			view: boolean;
			delete: boolean;
			follow: boolean;
			post: boolean;
			upload_attachment: boolean;
			edit: boolean;
		};
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
	}>;
	system_info: Resp_SystemInfo;
};

export interface ThreadsRecentParams {
	days?: number;
	limit?: number;
	forum_id?: number;
	data_limit?: number;
}

export type ThreadsRecentResponse = {
	threads: Array<Resp_ThreadModel>;
	data: Array<{
		content_type: string;
		content_id: number;
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
		thread_is_followed: boolean;
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
			post_attachment_count: number;
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
		};
		thread_prefixes: Array<unknown>;
		thread_tags: Array<unknown>;
		links: {
			permalink: string;
			detail: string;
			followers: string;
			forum: string;
			posts: string;
			first_poster: string;
			first_poster_avatar: string;
			first_post: string;
			last_poster: string;
			last_post: string;
		};
		permissions: {
			view: boolean;
			delete: boolean;
			follow: boolean;
			post: boolean;
			upload_attachment: boolean;
			edit: boolean;
		};
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
	}>;
	system_info: Resp_SystemInfo;
};

export type ThreadsFinishResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── PostsApi Types ────────────────────────────────────────

export interface PostsListParams {
	thread_id?: number;
	page_of_post_id?: number;
	page?: number;
	limit?: number;
	order?: "natural" | "natural_reverse" | "post_likes" | "post_likes_reverse";
}

export type PostsListResponse = {
	posts: Array<Resp_ThreadModel>;
	thread: Resp_ThreadModel;
	posts_total: number;
	system_info: Resp_SystemInfo;
};

export interface PostsCreateBody {
	post_body: string;
	thread_id?: number;
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
	post_body?: string;
}

export type PostsEditResponse = {
	post: Resp_PostModel;
	system_info: Resp_SystemInfo;
};

export interface PostsDeleteBody {
	reason?: string;
}

export type PostsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface PostsLikesParams {
	page?: number;
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
	message: string;
}

export type PostsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface PostsCommentsGetParams {
	post_id: number;
	before?: number;
	before_comment?: number;
}

export type PostsCommentsGetResponse = {
	comments: Array<Resp_PostCommentModel>;
	system_info: Resp_SystemInfo;
};

export interface PostsCommentsCreateBody {
	post_id: number;
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
	post_comment_id: number;
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
	post_comment_id: number;
	reason?: string;
}

export type PostsCommentsDeleteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface PostsCommentsReportBody {
	post_comment_id: number;
	message: string;
}

export type PostsCommentsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── UsersApi Types ────────────────────────────────────────

export interface UsersListParams {
	page?: number;
	limit?: number;
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
	username?: string;
	custom_fields?: Record<string, string>;
	fields_include?: Array<"*" | "alerts">;
}

export type UsersFindResponse = {
	users: Array<Resp_UserModel>;
	system_info: Resp_SystemInfo;
};

export interface UsersGetParams {
	fields_include?: Array<"*" | "alerts">;
}

export type UsersGetResponse = {
	user: Resp_UserModel;
	system_info: Resp_SystemInfo;
};

export interface UsersEditBody {
	username?: string;
	user_title?: string;
	display_group_id?: number;
	display_icon_group_id?: number;
	display_banner_id?: number;
	conv_welcome_message?: string;
	user_dob_day?: number;
	user_dob_month?: number;
	user_dob_year?: number;
	secret_answer?: string;
	secret_answer_type?: number;
	short_link?: string;
	language_id?: 1 | 2;
	gender?: "" | "male" | "female";
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
	receive_admin_email?: boolean;
	activity_visible?: boolean;
	show_dob_date?: boolean;
	show_dob_year?: boolean;
	hide_username_change_logs?: boolean;
	allow_view_profile?: "none" | "members" | "followed";
	allow_post_profile?: "none" | "members" | "followed";
	allow_send_personal_conversation?: "none" | "members" | "followed";
	allow_invite_group?: "none" | "members" | "followed";
	allow_receive_news_feed?: "none" | "members" | "followed";
	alert?: Record<string, boolean>;
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
	type?: "market" | "nomarket";
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
	avatar: Blob;
	x?: number;
	y?: number;
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
	x?: number;
	y?: number;
	crop?: number;
}

export type UsersAvatarCropResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export interface UsersBackgroundUploadBody {
	background: Blob;
	x?: number;
	y?: number;
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
	x?: number;
	y?: number;
	crop?: number;
}

export type UsersBackgroundCropResponse = {
	status: string;
	message: string;
	system_info: Resp_SystemInfo;
};

export interface UsersFollowersParams {
	order?: "natural" | "follow_date" | "follow_date_reverse";
	page?: number;
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
	order?: "natural" | "follow_date" | "follow_date_reverse";
	page?: number;
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
	node_id?: number;
	like_type?: "like" | "like2";
	type?: "gotten" | "given";
	page?: number;
	content_type?: "post" | "post_comment" | "profile_post" | "profile_post_comment";
	search_user_id?: number;
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
	ignore_conversations?: boolean;
	ignore_content?: boolean;
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
	page?: number;
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
		thread: {
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
			thread_is_followed: boolean;
			thread_prefixes: Array<unknown>;
			thread_tags: Array<unknown>;
			links: {
				permalink: string;
				detail: string;
				followers: string;
				forum: string;
				posts: string;
				first_poster: string;
				first_poster_avatar: string;
				first_post: string;
				last_poster: string;
				last_post: string;
			};
			permissions: {
				view: boolean;
				delete: boolean;
				follow: boolean;
				post: boolean;
				upload_attachment: boolean;
			};
		};
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
	posts_user_id?: number;
	page?: number;
	limit?: number;
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
	post_body?: string;
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
	message: string;
}

export type ProfilePostsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ProfilePostsCreateBody {
	user_id: UserIDModel;
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
	profile_post_id: number;
	before?: number;
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
	profile_post_id: number;
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
	comment_id: number;
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
	message: string;
}

export type ProfilePostsCommentsReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── ConversationsApi Types ────────────────────────────────────────

export interface ConversationsListParams {
	folder?:
		| "all"
		| "unread"
		| "groups"
		| "market"
		| "market_replacements"
		| "staff"
		| "giveaways"
		| "p2p";
	page?: number;
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
	recipient_id?: number;
	recipients?: Array<string>;
	is_group?: boolean;
	title?: string;
	open_invite?: boolean;
	allow_edit_messages?: boolean;
	allow_sticky_messages?: boolean;
	allow_delete_own_messages?: boolean;
	message_body?: string;
}

export type ConversationsCreateResponse = {
	conversation: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsUpdateBody {
	conversation_id: number;
	title?: string;
	open_invite?: boolean;
	history_open?: boolean;
	allow_edit_messages?: boolean;
	allow_sticky_messages?: boolean;
	allow_delete_own_messages?: boolean;
}

export type ConversationsUpdateResponse = {
	conversation: Resp_ConversationModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsDeleteBody {
	conversation_id: number;
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
	page?: number;
	limit?: number;
	order?: "natural" | "natural_reverse";
	before?: number;
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
	reply_message_id?: number;
	message_body: string;
}

export type ConversationsMessagesCreateResponse = {
	message: Resp_ConversationMessageModel;
	system_info: Resp_SystemInfo;
};

export interface ConversationsSearchBody {
	q?: string;
	conversation_id?: number;
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
	recipients: Array<string>;
}

export type ConversationsInviteResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ConversationsKickBody {
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
	type?: "market" | "nomarket";
	page?: number;
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
	notification_id?: number;
}

export type NotificationsReadResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

// ─── TagsApi Types ────────────────────────────────────────

export type TagsPopularResponse = {
	tags: {
		"000": string;
	};
	system_info: Resp_SystemInfo;
};

export interface TagsListParams {
	page?: number;
	limit?: number;
}

export type TagsListResponse = {
	tags: {
		"1": string;
		"2": string;
		"3": string;
		"4": string;
		"5": string;
		"6": string;
		"7": string;
		"8": string;
		"9": string;
		"10": string;
		"11": string;
		"12": string;
		"14": string;
		"15": string;
		"16": string;
		"17": string;
		"18": string;
		"19": string;
		"20": string;
	};
	tags_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface TagsGetParams {
	page?: number;
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
	tagged: Array<{
		content_type: string;
		content_id: number;
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
		thread_is_followed: boolean;
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
			post_attachment_count: number;
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
		};
		thread_prefixes: Array<{
			prefix_id: number;
			prefix_title: string;
		}>;
		thread_tags: {
			"1": string;
			"654": string;
		};
		links: {
			permalink: string;
			detail: string;
			followers: string;
			forum: string;
			posts: string;
			first_poster: string;
			first_poster_avatar: string;
			first_post: string;
			last_poster: string;
			last_post: string;
		};
		permissions: {
			view: boolean;
			delete: boolean;
			follow: boolean;
			post: boolean;
			upload_attachment: boolean;
			edit: boolean;
		};
		forum: {
			forum_id: number;
			forum_title: string;
			forum_description: string;
			forum_thread_count: number;
			forum_post_count: number;
			forum_prefixes: Array<{
				group_title: string;
				group_prefixes: Array<{
					prefix_id: number;
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
				upload_attachment: boolean;
				tag_thread: boolean;
				follow: boolean;
			};
			forum_is_followed: boolean;
		};
	}>;
	tagged_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface TagsFindParams {
	tag: string;
}

export type TagsFindResponse = {
	tags: Array<string>;
	ids: Array<number>;
	system_info: Resp_SystemInfo;
};

// ─── SearchApi Types ────────────────────────────────────────

export interface SearchAllBody {
	q?: string;
	tag?: string;
	forum_id?: number;
	user_id?: UserIDModel;
	page?: number;
	limit?: number;
}

export type SearchAllResponse = {
	data: Array<{
		content_type: string;
		content_id: string;
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
		thread_prefixes: Array<unknown>;
		thread_tags: Array<unknown>;
		links: {
			permalink: string;
			detail: string;
			followers: string;
			forum: string;
			posts: string;
			first_poster: string;
			first_poster_avatar: string;
			first_post: string;
			last_poster: string;
			last_post: string;
		};
		permissions: {
			view: boolean;
			delete: boolean;
			follow: boolean;
			post: boolean;
			edit: boolean;
			bump: {
				can: boolean;
				available_count: number;
				error: unknown;
				next_available_time: unknown;
			};
		};
		node_title: string;
		forum: {
			forum_id: number;
			forum_title: string;
			forum_description: string;
			forum_thread_count: number;
			forum_post_count: number;
			parent_node_id: number;
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
				tag_thread: boolean;
				follow: boolean;
			};
			forum_is_followed: boolean;
		};
		last_post: {
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
	}>;
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
	q?: string;
	tag?: string;
	forum_id?: number;
	user_id?: UserIDModel;
	page?: number;
	limit?: number;
	data_limit?: number;
}

export type SearchThreadsResponse = {
	data: Array<{
		content_type: string;
		content_id: number;
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
		thread_is_followed: boolean;
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
			post_attachment_count: number;
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
		};
		thread_prefixes: Array<unknown>;
		thread_tags: Array<unknown>;
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
			upload_attachment: boolean;
			edit: boolean;
		};
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
	}>;
	data_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchPostsBody {
	q?: string;
	tag?: string;
	forum_id?: number;
	user_id?: UserIDModel;
	page?: number;
	limit?: number;
	data_limit?: number;
}

export type SearchPostsResponse = {
	data: Array<{
		content_type: string;
		content_id: number;
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
		thread_is_followed: boolean;
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
			post_attachment_count: number;
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
		};
		thread_prefixes: Array<unknown>;
		thread_tags: Array<unknown>;
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
			upload_attachment: boolean;
			edit: boolean;
		};
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
	}>;
	data_total: number;
	links: {
		pages: number;
		page: number;
		next: string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchUsersBody {
	q?: string;
}

export type SearchUsersResponse = {
	users: Array<Resp_UserModel>;
	system_info: Resp_SystemInfo;
};

export interface SearchProfilePostsBody {
	q?: string;
	user_id?: number;
	page?: number;
	limit?: number;
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
	tag?: string;
	tags?: Array<string>;
	page?: number;
	limit?: number;
}

export type SearchTaggedResponse = {
	data: Array<{
		content_type: string;
		content_id: number;
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
		thread_is_followed: boolean;
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
			post_attachment_count: number;
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
		};
		thread_prefixes: Array<unknown>;
		thread_tags: {
			"160179": string;
		};
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
			upload_attachment: boolean;
			edit: boolean;
			edit_title: boolean;
			edit_tags: boolean;
		};
		forum: {
			forum_id: number;
			forum_title: string;
			forum_description: string;
			forum_thread_count: number;
			forum_post_count: number;
			forum_prefixes: Array<{
				group_title: string;
				group_prefixes: Array<{
					prefix_id: number;
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
				upload_attachment: boolean;
				tag_thread: boolean;
				follow: boolean;
			};
			forum_is_followed: boolean;
		};
	}>;
	data_total: number;
	search_tags: {
		"160179": string;
	};
	system_info: Resp_SystemInfo;
};

export interface SearchResultsParams {
	page?: number;
	limit?: number;
}

export type SearchResultsResponse = {
	data: Array<{
		content_type: string;
		content_id: number;
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
		thread_is_followed: boolean;
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
			post_attachment_count: number;
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
		};
		thread_prefixes: Array<unknown>;
		thread_tags: {
			"160179": string;
		};
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
			upload_attachment: boolean;
			edit: boolean;
			edit_title: boolean;
			edit_tags: boolean;
		};
		forum: {
			forum_id: number;
			forum_title: string;
			forum_description: string;
			forum_thread_count: number;
			forum_post_count: number;
			forum_prefixes: Array<{
				group_title: string;
				group_prefixes: Array<{
					prefix_id: number;
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
				upload_attachment: boolean;
				tag_thread: boolean;
				follow: boolean;
			};
			forum_is_followed: boolean;
		};
	}>;
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
	room_id: RoomIDModel;
	before_message_id?: number;
}

export type ChatboxGetMessagesResponse = {
	messages: Array<Resp_ChatboxMessageModel>;
	system_info: Resp_SystemInfo;
};

export interface ChatboxPostMessageBody {
	room_id: RoomIDModel;
	reply_message_id?: number;
	message: string;
}

export type ChatboxPostMessageResponse = {
	message: Resp_ChatboxMessageModel;
	system_info: Resp_SystemInfo;
};

export interface ChatboxEditMessageBody {
	message_id: number;
	message: string;
}

export type ChatboxEditMessageResponse = {
	message: Resp_ChatboxMessageModel;
	system_info: Resp_SystemInfo;
};

export interface ChatboxDeleteMessageBody {
	message_id: number;
}

export type ChatboxDeleteMessageResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ChatboxOnlineParams {
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
	message_id: number;
}

export type ChatboxReportReasonsResponse = {
	reasons: Array<string>;
	system_info: Resp_SystemInfo;
};

export interface ChatboxReportBody {
	message_id: number;
	reason: string;
}

export type ChatboxReportResponse = {
	status?: string;
	message?: string;
	system_info?: Resp_SystemInfo;
};

export interface ChatboxGetLeaderboardParams {
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

export interface FormsCreateBody {
	form_id: 1 | 3;
	fields:
		| {
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
		  }
		| {
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

export type FormsCreateResponse = {
	message: string;
	content: {
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
		thread_prefixes: Array<unknown>;
		thread_tags: Array<unknown>;
		links: {
			permalink: string;
			detail: string;
			followers: string;
			forum: string;
			posts: string;
			first_poster: string;
			first_poster_avatar: string;
			first_post: string;
		};
		permissions: {
			view: boolean;
			delete: boolean;
			follow: boolean;
			post: boolean;
		};
		node_title: string;
	};
	system_info: Resp_SystemInfo;
};

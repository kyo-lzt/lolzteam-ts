// Auto-generated. Do not edit manually.

import type { ClientConfig } from "../../runtime/types.js";
import { HttpClient } from "../../runtime/http-client.js";
import { OAuthApi } from "./o-auth.js";
import { AssetsApi } from "./assets.js";
import { CategoriesApi } from "./categories.js";
import { ForumsApi } from "./forums.js";
import { LinksApi } from "./links.js";
import { PagesApi } from "./pages.js";
import { NavigationApi } from "./navigation.js";
import { ThreadsApi } from "./threads.js";
import { PostsApi } from "./posts.js";
import { UsersApi } from "./users.js";
import { ProfilePostsApi } from "./profile-posts.js";
import { ConversationsApi } from "./conversations.js";
import { NotificationsApi } from "./notifications.js";
import { TagsApi } from "./tags.js";
import { SearchApi } from "./search.js";
import { BatchApi } from "./batch.js";
import { ChatboxApi } from "./chatbox.js";
import { FormsApi } from "./forms.js";

export class ForumClient {
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

	constructor(config: Omit<ClientConfig, "baseUrl"> & { baseUrl?: string }) {
		const http = new HttpClient({
			...config,
			baseUrl: config.baseUrl ?? "https://prod-api.lolz.live",
			rateLimit: config.rateLimit ?? { requestsPerMinute: 300 },
		});
		this.oAuth = new OAuthApi(http);
		this.assets = new AssetsApi(http);
		this.categories = new CategoriesApi(http);
		this.forums = new ForumsApi(http);
		this.links = new LinksApi(http);
		this.pages = new PagesApi(http);
		this.navigation = new NavigationApi(http);
		this.threads = new ThreadsApi(http);
		this.posts = new PostsApi(http);
		this.users = new UsersApi(http);
		this.profilePosts = new ProfilePostsApi(http);
		this.conversations = new ConversationsApi(http);
		this.notifications = new NotificationsApi(http);
		this.tags = new TagsApi(http);
		this.search = new SearchApi(http);
		this.batch = new BatchApi(http);
		this.chatbox = new ChatboxApi(http);
		this.forms = new FormsApi(http);
	}
}

export type * from "./types.js";

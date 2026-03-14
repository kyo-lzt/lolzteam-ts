// Auto-generated. Do not edit manually.

import type { ClientConfig } from "../../runtime/types.js";
import { HttpClient } from "../../runtime/http-client.js";
import { CategoryApi } from "./category.js";
import { ListApi } from "./list.js";
import { ManagingApi } from "./managing.js";
import { ProfileApi } from "./profile.js";
import { CartApi } from "./cart.js";
import { PurchasingApi } from "./purchasing.js";
import { CustomDiscountsApi } from "./custom-discounts.js";
import { PublishingApi } from "./publishing.js";
import { PaymentsApi } from "./payments.js";
import { AutoPaymentsApi } from "./auto-payments.js";
import { ProxyApi } from "./proxy.js";
import { ImapApi } from "./imap.js";
import { BatchApi } from "./batch.js";

export class MarketClient {
	readonly category: CategoryApi;
	readonly list: ListApi;
	readonly managing: ManagingApi;
	readonly profile: ProfileApi;
	readonly cart: CartApi;
	readonly purchasing: PurchasingApi;
	readonly customDiscounts: CustomDiscountsApi;
	readonly publishing: PublishingApi;
	readonly payments: PaymentsApi;
	readonly autoPayments: AutoPaymentsApi;
	readonly proxy: ProxyApi;
	readonly imap: ImapApi;
	readonly batch: BatchApi;

	constructor(config: Omit<ClientConfig, "baseUrl"> & { baseUrl?: string }) {
		const http = new HttpClient({
			...config,
			baseUrl: config.baseUrl ?? "https://prod-api.lzt.market",
			rateLimit: config.rateLimit ?? { requestsPerMinute: 120 },
		});
		this.category = new CategoryApi(http);
		this.list = new ListApi(http);
		this.managing = new ManagingApi(http);
		this.profile = new ProfileApi(http);
		this.cart = new CartApi(http);
		this.purchasing = new PurchasingApi(http);
		this.customDiscounts = new CustomDiscountsApi(http);
		this.publishing = new PublishingApi(http);
		this.payments = new PaymentsApi(http);
		this.autoPayments = new AutoPaymentsApi(http);
		this.proxy = new ProxyApi(http);
		this.imap = new ImapApi(http);
		this.batch = new BatchApi(http);
	}
}

export type * from "./types.js";

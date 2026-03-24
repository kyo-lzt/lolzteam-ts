// Auto-generated. Do not edit manually.

import { HttpClient } from "../../runtime/http-client.js";
import type { ClientConfig } from "../../runtime/types.js";
import { validateEnum } from "../../runtime/validation.js";
import type {
	AutoPaymentsCreateBody,
	AutoPaymentsCreateResponse,
	AutoPaymentsDeleteBody,
	AutoPaymentsDeleteResponse,
	AutoPaymentsListResponse,
	BatchBatchBody,
	BatchBatchResponse,
	CartAddBody,
	CartAddResponse,
	CartDeleteBody,
	CartDeleteResponse,
	CartGetParams,
	CartGetResponse,
	CategoryAllParams,
	CategoryAllResponse,
	CategoryBattleNetParams,
	CategoryBattleNetResponse,
	CategoryChatGPTParams,
	CategoryChatGPTResponse,
	CategoryDiscordParams,
	CategoryDiscordResponse,
	CategoryEaParams,
	CategoryEaResponse,
	CategoryEpicGamesParams,
	CategoryEpicGamesResponse,
	CategoryEscapeFromTarkovParams,
	CategoryEscapeFromTarkovResponse,
	CategoryFortniteParams,
	CategoryFortniteResponse,
	CategoryGamesResponse,
	CategoryGiftsParams,
	CategoryGiftsResponse,
	CategoryHytaleParams,
	CategoryHytaleResponse,
	CategoryIDModel,
	CategoryInstagramParams,
	CategoryInstagramResponse,
	CategoryListParams,
	CategoryListResponse,
	CategoryMihoyoParams,
	CategoryMihoyoResponse,
	CategoryMinecraftParams,
	CategoryMinecraftResponse,
	CategoryParamsResponse,
	CategoryRiotParams,
	CategoryRiotResponse,
	CategoryRobloxParams,
	CategoryRobloxResponse,
	CategorySocialClubParams,
	CategorySocialClubResponse,
	CategorySteamParams,
	CategorySteamResponse,
	CategorySupercellParams,
	CategorySupercellResponse,
	CategoryTelegramParams,
	CategoryTelegramResponse,
	CategoryTikTokParams,
	CategoryTikTokResponse,
	CategoryUplayParams,
	CategoryUplayResponse,
	CategoryVpnParams,
	CategoryVpnResponse,
	CategoryWarfaceParams,
	CategoryWarfaceResponse,
	CategoryWotBlitzParams,
	CategoryWotBlitzResponse,
	CategoryWotParams,
	CategoryWotResponse,
	CurrencyModel,
	CustomDiscountsCreateBody,
	CustomDiscountsCreateResponse,
	CustomDiscountsDeleteBody,
	CustomDiscountsDeleteResponse,
	CustomDiscountsEditBody,
	CustomDiscountsEditResponse,
	CustomDiscountsGetResponse,
	DatePeriodModel,
	ImapCreateBody,
	ImapCreateResponse,
	ImapDeleteBody,
	ImapDeleteResponse,
	ListDownloadParams,
	ListDownloadResponse,
	ListFavoritesParams,
	ListFavoritesResponse,
	ListOrdersParams,
	ListOrdersResponse,
	ListStatesParams,
	ListStatesResponse,
	ListUserParams,
	ListUserResponse,
	ListViewedParams,
	ListViewedResponse,
	ManagingAIPriceResponse,
	ManagingAutoBumpBody,
	ManagingAutoBumpDisableResponse,
	ManagingAutoBumpResponse,
	ManagingAutoBuyPriceResponse,
	ManagingBulkGetBody,
	ManagingBulkGetResponse,
	ManagingBumpResponse,
	ManagingChangePasswordBody,
	ManagingChangePasswordResponse,
	ManagingCheckGuaranteeResponse,
	ManagingCloseResponse,
	ManagingCreateClaimBody,
	ManagingCreateClaimResponse,
	ManagingDeclineVideoRecordingBody,
	ManagingDeclineVideoRecordingResponse,
	ManagingDeleteBody,
	ManagingDeleteResponse,
	ManagingEditBody,
	ManagingEditResponse,
	ManagingEmailCodeResponse,
	ManagingFavoriteResponse,
	ManagingGetLetters2Params,
	ManagingGetLetters2Response,
	ManagingGetParams,
	ManagingGetResponse,
	ManagingImageParams,
	ManagingImageResponse,
	ManagingNoteBody,
	ManagingNoteResponse,
	ManagingOpenResponse,
	ManagingPublicTagBody,
	ManagingPublicTagResponse,
	ManagingPublicUntagBody,
	ManagingPublicUntagResponse,
	ManagingRefuseGuaranteeResponse,
	ManagingSteamAddMafileResponse,
	ManagingSteamGetMafileResponse,
	ManagingSteamInventoryValueParams,
	ManagingSteamInventoryValueResponse,
	ManagingSteamMafileCodeResponse,
	ManagingSteamPreviewParams,
	ManagingSteamPreviewResponse,
	ManagingSteamRemoveMafileResponse,
	ManagingSteamSDABody,
	ManagingSteamSDAResponse,
	ManagingSteamUpdateValueBody,
	ManagingSteamUpdateValueResponse,
	ManagingSteamValueParams,
	ManagingSteamValueResponse,
	ManagingStickResponse,
	ManagingTagBody,
	ManagingTagResponse,
	ManagingTelegramCodeResponse,
	ManagingTelegramResetAuthResponse,
	ManagingTempEmailPasswordResponse,
	ManagingTransferBody,
	ManagingTransferResponse,
	ManagingUnfavoriteResponse,
	ManagingUnstickResponse,
	ManagingUntagBody,
	ManagingUntagResponse,
	PaymentsBalanceExchangeBody,
	PaymentsBalanceExchangeResponse,
	PaymentsBalanceListResponse,
	PaymentsCancelBody,
	PaymentsCancelResponse,
	PaymentsCurrencyResponse,
	PaymentsFeeParams,
	PaymentsFeeResponse,
	PaymentsHistoryParams,
	PaymentsHistoryResponse,
	PaymentsInvoiceCreateBody,
	PaymentsInvoiceCreateResponse,
	PaymentsInvoiceGetParams,
	PaymentsInvoiceGetResponse,
	PaymentsInvoiceListParams,
	PaymentsInvoiceListResponse,
	PaymentsPayoutBody,
	PaymentsPayoutResponse,
	PaymentsPayoutServicesResponse,
	PaymentsTransferBody,
	PaymentsTransferResponse,
	ProfileClaimsParams,
	ProfileClaimsResponse,
	ProfileEditBody,
	ProfileEditResponse,
	ProfileGetParams,
	ProfileGetResponse,
	ProxyAddBody,
	ProxyAddResponse,
	ProxyDeleteBody,
	ProxyDeleteResponse,
	ProxyGetResponse,
	PublishingAddBody,
	PublishingAddResponse,
	PublishingCheckBody,
	PublishingCheckResponse,
	PublishingExternalBody,
	PublishingExternalResponse,
	PublishingFastSellBody,
	PublishingFastSellResponse,
	PurchasingCheckResponse,
	PurchasingConfirmBody,
	PurchasingConfirmResponse,
	PurchasingDiscountCancelResponse,
	PurchasingDiscountRequestBody,
	PurchasingDiscountRequestResponse,
	PurchasingFastBuyBody,
	PurchasingFastBuyResponse,
	YesNoNoMatterScheme,
} from "./types.js";

class CategoryApi {
	constructor(private readonly http: HttpClient) {}

	async all(params?: CategoryAllParams): Promise<CategoryAllResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		return this.http.request({
			method: "GET",
			path: "/",
			query: params,
			isSearch: true,
		});
	}

	async steam(params?: CategorySteamParams): Promise<CategorySteamResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("rt", params?.rt, ["yes", "no", "nomatter"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		validateEnum("last_trans_date_period", params?.last_trans_date_period, [
			"day",
			"month",
			"year",
		]);
		validateEnum("d2_last_match_date_period", params?.d2_last_match_date_period, [
			"day",
			"month",
			"year",
		]);
		return this.http.request({
			method: "GET",
			path: "/steam",
			query: { rt: "no", ...params },
			isSearch: true,
		});
	}

	async fortnite(params?: CategoryFortniteParams): Promise<CategoryFortniteResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("temp_email", params?.temp_email, ["yes", "no", "nomatter"]);
		validateEnum("change_email", params?.change_email, ["yes", "no", "nomatter"]);
		validateEnum("last_trans_date_period", params?.last_trans_date_period, [
			"day",
			"month",
			"year",
		]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		return this.http.request({
			method: "GET",
			path: "/fortnite",
			query: params,
			isSearch: true,
		});
	}

	async mihoyo(params?: CategoryMihoyoParams): Promise<CategoryMihoyoResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("email", params?.email, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/mihoyo",
			query: params,
			isSearch: true,
		});
	}

	async riot(params?: CategoryRiotParams): Promise<CategoryRiotResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("email", params?.email, ["yes", "no", "nomatter"]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/riot",
			query: params,
			isSearch: true,
		});
	}

	async telegram(params?: CategoryTelegramParams): Promise<CategoryTelegramResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("premium", params?.premium, ["yes", "no", "nomatter"]);
		validateEnum("premium_expiration_period", params?.premium_expiration_period, [
			"day",
			"month",
			"year",
		]);
		validateEnum("birthday_period", params?.birthday_period, ["day", "month", "year"]);
		validateEnum("birthday_after_period", params?.birthday_after_period, ["day", "month", "year"]);
		validateEnum("email", params?.email, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/telegram",
			query: params,
			isSearch: true,
		});
	}

	async supercell(params?: CategorySupercellParams): Promise<CategorySupercellResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		return this.http.request({
			method: "GET",
			path: "/supercell",
			query: params,
			isSearch: true,
		});
	}

	async ea(params?: CategoryEaParams): Promise<CategoryEaResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("subscription", params?.subscription, ["EA Play", "EA Play Pro"]);
		validateEnum("subscription_period", params?.subscription_period, ["day", "month", "year"]);
		return this.http.request({
			method: "GET",
			path: "/ea",
			query: params,
			isSearch: true,
		});
	}

	async wot(params?: CategoryWotParams): Promise<CategoryWotResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		validateEnum("premium", params?.premium, ["yes", "no", "nomatter"]);
		validateEnum("premium_expiration_period", params?.premium_expiration_period, [
			"day",
			"month",
			"year",
		]);
		validateEnum("clan", params?.clan, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/world-of-tanks",
			query: params,
			isSearch: true,
		});
	}

	async wotBlitz(params?: CategoryWotBlitzParams): Promise<CategoryWotBlitzResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		validateEnum("premium", params?.premium, ["yes", "no", "nomatter"]);
		validateEnum("premium_expiration_period", params?.premium_expiration_period, [
			"day",
			"month",
			"year",
		]);
		validateEnum("clan", params?.clan, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/wot-blitz",
			query: params,
			isSearch: true,
		});
	}

	async gifts(params?: CategoryGiftsParams): Promise<CategoryGiftsResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("subscription", params?.subscription, [
			"discord_nitro",
			"discord_nitro_basic",
			"discord_nitro_trial",
			"telegram_premium",
		]);
		validateEnum("subscription_period", params?.subscription_period, ["day", "month", "year"]);
		return this.http.request({
			method: "GET",
			path: "/gifts",
			query: params,
			isSearch: true,
		});
	}

	async epicGames(params?: CategoryEpicGamesParams): Promise<CategoryEpicGamesResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("change_email", params?.change_email, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/epicgames",
			query: params,
			isSearch: true,
		});
	}

	async escapeFromTarkov(
		params?: CategoryEscapeFromTarkovParams,
	): Promise<CategoryEscapeFromTarkovResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("region", params?.region, ["af", "as", "cis", "eu", "me", "oc", "us"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		validateEnum("side", params?.side, ["Bear", "Savage"]);
		return this.http.request({
			method: "GET",
			path: "/escape-from-tarkov",
			query: params,
			isSearch: true,
		});
	}

	async socialClub(params?: CategorySocialClubParams): Promise<CategorySocialClubResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		return this.http.request({
			method: "GET",
			path: "/socialclub",
			query: params,
			isSearch: true,
		});
	}

	async uplay(params?: CategoryUplayParams): Promise<CategoryUplayResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("subscription", params?.subscription, ["basic", "premium", "premiumAnywhere"]);
		validateEnum("subscription_period", params?.subscription_period, ["day", "month", "year"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		return this.http.request({
			method: "GET",
			path: "/uplay",
			query: params,
			isSearch: true,
		});
	}

	async discord(params?: CategoryDiscordParams): Promise<CategoryDiscordResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		validateEnum("nitro_period", params?.nitro_period, ["day", "month", "year"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		return this.http.request({
			method: "GET",
			path: "/discord",
			query: params,
			isSearch: true,
		});
	}

	async tikTok(params?: CategoryTikTokParams): Promise<CategoryTikTokResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		validateEnum("verified", params?.verified, ["yes", "no", "nomatter"]);
		validateEnum("email", params?.email, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/tiktok",
			query: params,
			isSearch: true,
		});
	}

	async instagram(params?: CategoryInstagramParams): Promise<CategoryInstagramResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		validateEnum("cookies", params?.cookies, ["yes", "no", "nomatter"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		return this.http.request({
			method: "GET",
			path: "/instagram",
			query: params,
			isSearch: true,
		});
	}

	async battleNet(params?: CategoryBattleNetParams): Promise<CategoryBattleNetResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/battlenet",
			query: params,
			isSearch: true,
		});
	}

	async chatGPT(params?: CategoryChatGPTParams): Promise<CategoryChatGPTResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("subscription_period", params?.subscription_period, ["day", "month", "year"]);
		validateEnum("autorenewal", params?.autorenewal, ["yes", "no", "nomatter"]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		return this.http.request({
			method: "GET",
			path: "/chatgpt",
			query: params,
			isSearch: true,
		});
	}

	async vpn(params?: CategoryVpnParams): Promise<CategoryVpnResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("subscription_period", params?.subscription_period, ["day", "month", "year"]);
		validateEnum("autorenewal", params?.autorenewal, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/vpn",
			query: params,
			isSearch: true,
		});
	}

	async roblox(params?: CategoryRobloxParams): Promise<CategoryRobloxResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		validateEnum("subscription", params?.subscription, [
			"RobloxPremium1000",
			"RobloxPremium100012Months",
			"RobloxPremium1000OneMonth",
			"RobloxPremium2200",
			"RobloxPremium2200OneMonth",
			"RobloxPremium450",
			"RobloxPremium450OneMonth",
		]);
		validateEnum("subscription_period", params?.subscription_period, ["day", "month", "year"]);
		validateEnum("autorenewal", params?.autorenewal, ["yes", "no", "nomatter"]);
		validateEnum("verified", params?.verified, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/roblox",
			query: params,
			isSearch: true,
		});
	}

	async warface(params?: CategoryWarfaceParams): Promise<CategoryWarfaceResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("tel", params?.tel, ["yes", "no", "nomatter"]);
		return this.http.request({
			method: "GET",
			path: "/warface",
			query: params,
			isSearch: true,
		});
	}

	async minecraft(params?: CategoryMinecraftParams): Promise<CategoryMinecraftResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		validateEnum("subscription", params?.subscription, ["PC Game Pass", "Xbox Game Pass Ultimate"]);
		validateEnum("subscription_period", params?.subscription_period, ["day", "month", "year"]);
		validateEnum("autorenewal", params?.autorenewal, ["yes", "no", "nomatter"]);
		validateEnum("reg_period", params?.reg_period, ["day", "month", "year"]);
		validateEnum("last_login_hypixel_period", params?.last_login_hypixel_period, [
			"day",
			"month",
			"year",
		]);
		return this.http.request({
			method: "GET",
			path: "/minecraft",
			query: params,
			isSearch: true,
		});
	}

	async hytale(params?: CategoryHytaleParams): Promise<CategoryHytaleResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		return this.http.request({
			method: "GET",
			path: "/hytale",
			query: params,
			isSearch: true,
		});
	}

	async list(params?: CategoryListParams): Promise<CategoryListResponse> {
		return this.http.request({
			method: "GET",
			path: "/category",
			query: params,
			isSearch: true,
		});
	}

	async params(
		categoryName:
			| "steam"
			| "fortnite"
			| "mihoyo"
			| "riot"
			| "telegram"
			| "supercell"
			| "ea"
			| "world-of-tanks"
			| "wot-blitz"
			| "epicgames"
			| "gifts"
			| "minecraft"
			| "escape-from-tarkov"
			| "socialclub"
			| "uplay"
			| "discord"
			| "tiktok"
			| "instagram"
			| "chatgpt"
			| "battlenet"
			| "vpn"
			| "roblox"
			| "warface"
			| "hytale",
	): Promise<CategoryParamsResponse> {
		return this.http.request({
			method: "GET",
			path: `/${categoryName}/params`,
			isSearch: true,
		});
	}

	async games(
		categoryName:
			| "steam"
			| "fortnite"
			| "mihoyo"
			| "riot"
			| "telegram"
			| "supercell"
			| "ea"
			| "world-of-tanks"
			| "wot-blitz"
			| "epicgames"
			| "gifts"
			| "minecraft"
			| "escape-from-tarkov"
			| "socialclub"
			| "uplay"
			| "discord"
			| "tiktok"
			| "instagram"
			| "chatgpt"
			| "battlenet"
			| "vpn"
			| "roblox"
			| "warface"
			| "hytale",
	): Promise<CategoryGamesResponse> {
		return this.http.request({
			method: "GET",
			path: `/${categoryName}/games`,
			isSearch: true,
		});
	}
}

class ListApi {
	constructor(private readonly http: HttpClient) {}

	async user(params?: ListUserParams): Promise<ListUserResponse> {
		validateEnum("show", params?.show, [
			"active",
			"paid",
			"deleted",
			"awaiting",
			"closed",
			"discount_request",
			"stickied",
			"pre_active",
		]);
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		return this.http.request({
			method: "GET",
			path: "/user/items",
			query: params,
		});
	}

	async orders(params?: ListOrdersParams): Promise<ListOrdersResponse> {
		validateEnum("show", params?.show, [
			"active",
			"paid",
			"deleted",
			"awaiting",
			"closed",
			"discount_request",
			"stickied",
			"pre_active",
		]);
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		return this.http.request({
			method: "GET",
			path: "/user/orders",
			query: params,
		});
	}

	async states(params?: ListStatesParams): Promise<ListStatesResponse> {
		return this.http.request({
			method: "GET",
			path: "/user/item-states",
			query: params,
		});
	}

	async download(
		type: "items" | "orders",
		params?: ListDownloadParams,
	): Promise<ListDownloadResponse> {
		validateEnum("format", params?.format, [
			"short",
			"custom",
			"mfa_file_steam_id",
			"mfa_file_login",
		]);
		validateEnum("show", params?.show, [
			"active",
			"paid",
			"deleted",
			"awaiting",
			"closed",
			"discount_request",
			"stickied",
			"pre_active",
		]);
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		return this.http.request({
			method: "GET",
			path: `/user/${type}/download`,
			query: params,
		});
	}

	async favorites(params?: ListFavoritesParams): Promise<ListFavoritesResponse> {
		validateEnum("show", params?.show, [
			"active",
			"paid",
			"deleted",
			"awaiting",
			"closed",
			"discount_request",
			"stickied",
			"pre_active",
		]);
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		return this.http.request({
			method: "GET",
			path: "/fave",
			query: params,
		});
	}

	async viewed(params?: ListViewedParams): Promise<ListViewedResponse> {
		validateEnum("show", params?.show, [
			"active",
			"paid",
			"deleted",
			"awaiting",
			"closed",
			"discount_request",
			"stickied",
			"pre_active",
		]);
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		return this.http.request({
			method: "GET",
			path: "/viewed",
			query: params,
		});
	}
}

class ManagingApi {
	constructor(private readonly http: HttpClient) {}

	async get(item_id: number, params?: ManagingGetParams): Promise<ManagingGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}`,
			query: params,
		});
	}

	async delete(item_id: number, body?: ManagingDeleteBody): Promise<ManagingDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async createClaim(body?: ManagingCreateClaimBody): Promise<ManagingCreateClaimResponse> {
		return this.http.request({
			method: "POST",
			path: "/claims",
			body: body,
			bodyEncoding: "json",
		});
	}

	async bulkGet(body: ManagingBulkGetBody): Promise<ManagingBulkGetResponse> {
		return this.http.request({
			method: "POST",
			path: "/bulk/items",
			body: body,
			bodyEncoding: "json",
		});
	}

	async steamInventoryValue(
		item_id: number,
		params?: ManagingSteamInventoryValueParams,
	): Promise<ManagingSteamInventoryValueResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/inventory-value`,
			query: params,
		});
	}

	async steamValue(params?: ManagingSteamValueParams): Promise<ManagingSteamValueResponse> {
		return this.http.request({
			method: "GET",
			path: "/steam-value",
			query: params,
		});
	}

	async steamPreview(
		item_id: number,
		params?: ManagingSteamPreviewParams,
	): Promise<ManagingSteamPreviewResponse> {
		validateEnum("type", params?.type, ["profiles", "games"]);
		return this.http.request({
			method: "GET",
			path: `/${item_id}/steam-preview`,
			query: params,
		});
	}

	async edit(item_id: number, body?: ManagingEditBody): Promise<ManagingEditResponse> {
		if (body && "item_origin" in body)
			validateEnum("item_origin", body.item_origin, [
				"brute",
				"phishing",
				"stealer",
				"personal",
				"resale",
				"autoreg",
				"dummy",
			]);
		if (body && "email_type" in body)
			validateEnum("email_type", body.email_type, ["native", "autoreg"]);
		return this.http.request({
			method: "PUT",
			path: `/${item_id}/edit`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async aIPrice(item_id: number): Promise<ManagingAIPriceResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/ai-price`,
		});
	}

	async autoBuyPrice(item_id: number): Promise<ManagingAutoBuyPriceResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/auto-buy-price`,
		});
	}

	async note(item_id: number, body?: ManagingNoteBody): Promise<ManagingNoteResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/note-save`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async steamUpdateValue(
		item_id: number,
		body?: ManagingSteamUpdateValueBody,
	): Promise<ManagingSteamUpdateValueResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/update-inventory`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async bump(item_id: number): Promise<ManagingBumpResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/bump`,
		});
	}

	async autoBump(item_id: number, body?: ManagingAutoBumpBody): Promise<ManagingAutoBumpResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/auto-bump`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async autoBumpDisable(item_id: number): Promise<ManagingAutoBumpDisableResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/auto-bump`,
		});
	}

	async open(item_id: number): Promise<ManagingOpenResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/open`,
		});
	}

	async close(item_id: number): Promise<ManagingCloseResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/close`,
		});
	}

	async image(item_id: number, params?: ManagingImageParams): Promise<ManagingImageResponse> {
		validateEnum("type", params?.type, [
			"skins",
			"pickaxes",
			"dances",
			"gliders",
			"weapons",
			"agents",
			"buddies",
		]);
		return this.http.request({
			method: "GET",
			path: `/${item_id}/image`,
			query: params,
		});
	}

	async emailCode(item_id: number): Promise<ManagingEmailCodeResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/email-code`,
		});
	}

	async getLetters2(params?: ManagingGetLetters2Params): Promise<ManagingGetLetters2Response> {
		return this.http.request({
			method: "GET",
			path: "/letters2",
			query: params,
		});
	}

	async steamGetMafile(item_id: number): Promise<ManagingSteamGetMafileResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/mafile`,
		});
	}

	async steamAddMafile(item_id: number): Promise<ManagingSteamAddMafileResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/mafile`,
		});
	}

	async steamRemoveMafile(item_id: number): Promise<ManagingSteamRemoveMafileResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/mafile`,
		});
	}

	async steamMafileCode(item_id: number): Promise<ManagingSteamMafileCodeResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/guard-code`,
		});
	}

	async steamSDA(item_id: number, body?: ManagingSteamSDABody): Promise<ManagingSteamSDAResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/confirm-sda`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async telegramCode(item_id: number): Promise<ManagingTelegramCodeResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/telegram-login-code`,
		});
	}

	async telegramResetAuth(item_id: number): Promise<ManagingTelegramResetAuthResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/telegram-reset-authorizations`,
		});
	}

	async refuseGuarantee(item_id: number): Promise<ManagingRefuseGuaranteeResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/refuse-guarantee`,
		});
	}

	async declineVideoRecording(
		item_id: number,
		body?: ManagingDeclineVideoRecordingBody,
	): Promise<ManagingDeclineVideoRecordingResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/decline-video-recording`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async checkGuarantee(item_id: number): Promise<ManagingCheckGuaranteeResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/check-guarantee`,
		});
	}

	async changePassword(
		item_id: number,
		body?: ManagingChangePasswordBody,
	): Promise<ManagingChangePasswordResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/change-password`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async tempEmailPassword(item_id: number): Promise<ManagingTempEmailPasswordResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/temp-email-password`,
		});
	}

	async tag(item_id: number, body?: ManagingTagBody): Promise<ManagingTagResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/tag`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async untag(item_id: number, body?: ManagingUntagBody): Promise<ManagingUntagResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/tag`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async publicTag(
		item_id: number,
		body?: ManagingPublicTagBody,
	): Promise<ManagingPublicTagResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/public-tag`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async publicUntag(
		item_id: number,
		body?: ManagingPublicUntagBody,
	): Promise<ManagingPublicUntagResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/public-tag`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async favorite(item_id: number): Promise<ManagingFavoriteResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/star`,
		});
	}

	async unfavorite(item_id: number): Promise<ManagingUnfavoriteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/star`,
		});
	}

	async stick(item_id: number): Promise<ManagingStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/stick`,
		});
	}

	async unstick(item_id: number): Promise<ManagingUnstickResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/stick`,
		});
	}

	async transfer(item_id: number, body?: ManagingTransferBody): Promise<ManagingTransferResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/change-owner`,
			body: body,
			bodyEncoding: "json",
		});
	}
}

class ProfileApi {
	constructor(private readonly http: HttpClient) {}

	async claims(params?: ProfileClaimsParams): Promise<ProfileClaimsResponse> {
		validateEnum("type", params?.type, ["market", "nomarket"]);
		validateEnum("claim_state", params?.claim_state, ["active", "solved", "rejected", "settled"]);
		return this.http.request({
			method: "GET",
			path: "/claims",
			query: params,
		});
	}

	async get(params?: ProfileGetParams): Promise<ProfileGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/me",
			query: params,
		});
	}

	async edit(body?: ProfileEditBody): Promise<ProfileEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/me",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class CartApi {
	constructor(private readonly http: HttpClient) {}

	async get(params?: CartGetParams): Promise<CartGetResponse> {
		validateEnum("order_by", params?.order_by, [
			"price_to_up",
			"price_to_down",
			"pdate_to_down",
			"pdate_to_up",
			"pdate_to_down_upload",
			"pdate_to_up_upload",
			"edate_to_up",
			"edate_to_down",
			"ddate_to_up",
			"ddate_to_down",
		]);
		validateEnum("currency", params?.currency, [
			"rub",
			"uah",
			"kzt",
			"byn",
			"usd",
			"eur",
			"gbp",
			"cny",
			"try",
			"jpy",
			"brl",
		]);
		validateEnum("not_email_provider[]", params?.["not_email_provider[]"], [
			"other",
			"rambler",
			"outlook",
			"firstmail",
			"notletters",
			"mail_ru",
		]);
		return this.http.request({
			method: "GET",
			path: "/cart",
			query: params,
		});
	}

	async add(body: CartAddBody): Promise<CartAddResponse> {
		return this.http.request({
			method: "POST",
			path: "/cart",
			body: body,
			bodyEncoding: "json",
		});
	}

	async delete(body?: CartDeleteBody): Promise<CartDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/cart",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class PurchasingApi {
	constructor(private readonly http: HttpClient) {}

	async fastBuy(item_id: number, body?: PurchasingFastBuyBody): Promise<PurchasingFastBuyResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/fast-buy`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async check(item_id: number): Promise<PurchasingCheckResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/check-account`,
		});
	}

	async confirm(item_id: number, body?: PurchasingConfirmBody): Promise<PurchasingConfirmResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/confirm-buy`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async discountRequest(
		item_id: number,
		body?: PurchasingDiscountRequestBody,
	): Promise<PurchasingDiscountRequestResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/discount`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async discountCancel(item_id: number): Promise<PurchasingDiscountCancelResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/discount`,
		});
	}
}

class CustomDiscountsApi {
	constructor(private readonly http: HttpClient) {}

	async get(): Promise<CustomDiscountsGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/custom-discounts",
		});
	}

	async create(body?: CustomDiscountsCreateBody): Promise<CustomDiscountsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/custom-discounts",
			body: body,
			bodyEncoding: "json",
		});
	}

	async edit(body?: CustomDiscountsEditBody): Promise<CustomDiscountsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/custom-discounts",
			body: body,
			bodyEncoding: "json",
		});
	}

	async delete(body?: CustomDiscountsDeleteBody): Promise<CustomDiscountsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/custom-discounts",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class PublishingApi {
	constructor(private readonly http: HttpClient) {}

	async fastSell(body?: PublishingFastSellBody): Promise<PublishingFastSellResponse> {
		if (body && "item_origin" in body)
			validateEnum("item_origin", body.item_origin, [
				"brute",
				"phishing",
				"stealer",
				"personal",
				"resale",
				"autoreg",
				"dummy",
				"self_registration",
			]);
		if (body && "email_type" in body)
			validateEnum("email_type", body.email_type, ["native", "autoreg"]);
		return this.http.request({
			method: "POST",
			path: "/item/fast-sell",
			body: body,
			bodyEncoding: "json",
		});
	}

	async add(body?: PublishingAddBody): Promise<PublishingAddResponse> {
		if (body && "item_origin" in body)
			validateEnum("item_origin", body.item_origin, [
				"brute",
				"phishing",
				"stealer",
				"personal",
				"resale",
				"autoreg",
				"dummy",
				"self_registration",
			]);
		if (body && "email_type" in body)
			validateEnum("email_type", body.email_type, ["native", "autoreg"]);
		return this.http.request({
			method: "POST",
			path: "/item/add",
			body: body,
			bodyEncoding: "json",
		});
	}

	async check(item_id: number, body?: PublishingCheckBody): Promise<PublishingCheckResponse> {
		if (body && "email_type" in body)
			validateEnum("email_type", body.email_type, ["native", "autoreg"]);
		return this.http.request({
			method: "POST",
			path: `/${item_id}/goods/check`,
			body: body,
			bodyEncoding: "json",
		});
	}

	async external(
		item_id: number,
		body?: PublishingExternalBody,
	): Promise<PublishingExternalResponse> {
		if (body && "type" in body) validateEnum("type", body.type, ["socialclub"]);
		return this.http.request({
			method: "POST",
			path: `/${item_id}/external-account`,
			body: body,
			bodyEncoding: "json",
		});
	}
}

class PaymentsApi {
	constructor(private readonly http: HttpClient) {}

	async invoiceGet(params?: PaymentsInvoiceGetParams): Promise<PaymentsInvoiceGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/invoice",
			query: params,
		});
	}

	async invoiceCreate(body?: PaymentsInvoiceCreateBody): Promise<PaymentsInvoiceCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/invoice",
			body: { lifetime: 3600, ...body },
			bodyEncoding: "json",
		});
	}

	async invoiceList(params?: PaymentsInvoiceListParams): Promise<PaymentsInvoiceListResponse> {
		validateEnum("status", params?.status, ["paid", "not_paid"]);
		return this.http.request({
			method: "GET",
			path: "/invoice/list",
			query: params,
		});
	}

	async currency(): Promise<PaymentsCurrencyResponse> {
		return this.http.request({
			method: "GET",
			path: "/currency",
		});
	}

	async balanceList(): Promise<PaymentsBalanceListResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/exchange",
		});
	}

	async balanceExchange(
		body?: PaymentsBalanceExchangeBody,
	): Promise<PaymentsBalanceExchangeResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/exchange",
			body: body,
			bodyEncoding: "json",
		});
	}

	async transfer(body?: PaymentsTransferBody): Promise<PaymentsTransferResponse> {
		if (body && "hold_length_option" in body)
			validateEnum("hold_length_option", body.hold_length_option, [
				"hour",
				"day",
				"week",
				"month",
				"year",
			]);
		return this.http.request({
			method: "POST",
			path: "/balance/transfer",
			body: body,
			bodyEncoding: "json",
		});
	}

	async fee(params?: PaymentsFeeParams): Promise<PaymentsFeeResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/transfer/fee",
			query: params,
		});
	}

	async cancel(body?: PaymentsCancelBody): Promise<PaymentsCancelResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/transfer/cancel",
			body: body,
			bodyEncoding: "json",
		});
	}

	async history(params?: PaymentsHistoryParams): Promise<PaymentsHistoryResponse> {
		validateEnum("type", params?.type, [
			"paid_item",
			"sold_item",
			"withdrawal_balance",
			"refilled_balance",
			"internal_purchase",
			"money_transfer",
			"receiving_money",
			"claim_hold",
			"insurance_deposit",
			"paid_mail",
			"contest",
			"invoice",
			"balance_exchange",
		]);
		return this.http.request({
			method: "GET",
			path: "/user/payments",
			query: params,
		});
	}

	async payoutServices(): Promise<PaymentsPayoutServicesResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/payout/services",
		});
	}

	async payout(body?: PaymentsPayoutBody): Promise<PaymentsPayoutResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/payout",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class AutoPaymentsApi {
	constructor(private readonly http: HttpClient) {}

	async list(): Promise<AutoPaymentsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/auto-payments",
		});
	}

	async create(body?: AutoPaymentsCreateBody): Promise<AutoPaymentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/auto-payment",
			body: body,
			bodyEncoding: "json",
		});
	}

	async delete(body?: AutoPaymentsDeleteBody): Promise<AutoPaymentsDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/auto-payment",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class ProxyApi {
	constructor(private readonly http: HttpClient) {}

	async get(): Promise<ProxyGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/proxy",
		});
	}

	async add(body: ProxyAddBody): Promise<ProxyAddResponse> {
		return this.http.request({
			method: "POST",
			path: "/proxy",
			body: body,
			bodyEncoding: "json",
		});
	}

	async delete(body?: ProxyDeleteBody): Promise<ProxyDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/proxy",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class ImapApi {
	constructor(private readonly http: HttpClient) {}

	async create(body?: ImapCreateBody): Promise<ImapCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/imap",
			body: body,
			bodyEncoding: "json",
		});
	}

	async delete(body?: ImapDeleteBody): Promise<ImapDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: "/imap",
			body: body,
			bodyEncoding: "json",
		});
	}
}

class BatchApi {
	constructor(private readonly http: HttpClient) {}

	async batch(body: BatchBatchBody): Promise<BatchBatchResponse> {
		return this.http.request({
			method: "POST",
			path: "/batch",
			body: body,
			bodyEncoding: "json",
		});
	}
}

export class MarketClient {
	private readonly http: HttpClient;
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

	constructor(configOrToken: string | (Omit<ClientConfig, "baseUrl"> & { baseUrl?: string })) {
		const config = typeof configOrToken === "string" ? { token: configOrToken } : configOrToken;
		this.http = new HttpClient({
			...config,
			baseUrl: config.baseUrl ?? "https://prod-api.lzt.market",
			rateLimit: config.rateLimit ?? { requestsPerMinute: 120 },
			searchRateLimit: config.searchRateLimit ?? { requestsPerMinute: 20 },
			timeout: config.timeout ?? 30_000,
		});
		this.category = new CategoryApi(this.http);
		this.list = new ListApi(this.http);
		this.managing = new ManagingApi(this.http);
		this.profile = new ProfileApi(this.http);
		this.cart = new CartApi(this.http);
		this.purchasing = new PurchasingApi(this.http);
		this.customDiscounts = new CustomDiscountsApi(this.http);
		this.publishing = new PublishingApi(this.http);
		this.payments = new PaymentsApi(this.http);
		this.autoPayments = new AutoPaymentsApi(this.http);
		this.proxy = new ProxyApi(this.http);
		this.imap = new ImapApi(this.http);
		this.batch = new BatchApi(this.http);
	}

	async close(): Promise<void> {
		await this.http.close();
	}
}

export type * from "./types.js";

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
	ItemOriginModel,
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

	/**
	 * Get Last Accounts
	 *
	 * Displays a list of latest accounts.
	 */
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

	/**
	 * Steam
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Fortnite
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * miHoYo
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Riot
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Telegram
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Supercell
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * EA (Origin)
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * World of Tanks
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * WoT Blitz
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Gifts
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Epic Games
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Escape from Tarkov
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Social Club
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Uplay
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Discord
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * TikTok
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Instagram
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * BattleNet
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * ChatGPT
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * VPN
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Roblox
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Warface
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Minecraft
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Hytale
	 *
	 * Displays a list of accounts in a specific category according to your parameters.
	 */
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

	/**
	 * Get Categories
	 *
	 * Display category list.
	 */
	async list(params?: CategoryListParams): Promise<CategoryListResponse> {
		return this.http.request({
			method: "GET",
			path: "/category",
			query: params,
			isSearch: true,
		});
	}

	/**
	 * Get Category Search Params
	 *
	 * Displays search parameters for a category.
	 * @param categoryName - Category name.
	 */
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

	/**
	 * Get Category Games
	 *
	 * Displays a list of games in the category.
	 * @param categoryName - Category name.
	 */
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

	/**
	 * Get All User Accounts
	 *
	 * Displays a list of user accounts.
	 */
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

	/**
	 * Get All Purchased Accounts
	 *
	 * Displays a list of purchased accounts.
	 */
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

	/**
	 * Get User Items States
	 *
	 * Returns the states of user items.
	 */
	async states(params?: ListStatesParams): Promise<ListStatesResponse> {
		return this.http.request({
			method: "GET",
			path: "/user/item-states",
			query: params,
		});
	}

	/**
	 * Download Accounts Data
	 *
	 * Download accounts data in the specified format.
	 * @param type - The type of account list to download.
	 */
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

	/**
	 * Get All Favourites Accounts
	 *
	 * Displays a list of favourites accounts.
	 */
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

	/**
	 * Get All Viewed Accounts
	 *
	 * Displays a list of viewed accounts.
	 */
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

	/**
	 * Get Account
	 *
	 * Displays account information.
	 * @param item_id - Item id.
	 */
	async get(item_id: number, params?: ManagingGetParams): Promise<ManagingGetResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}`,
			query: params,
		});
	}

	/**
	 * Delete Account
	 *
	 * Deletes your account from public search. Deletion type is soft. You can restore account after deletion if you want.
	 * @param item_id - Item id.
	 */
	async delete(item_id: number, body?: ManagingDeleteBody): Promise<ManagingDeleteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Create Claim
	 *
	 * Create a claim.
	 */
	async createClaim(body?: ManagingCreateClaimBody): Promise<ManagingCreateClaimResponse> {
		return this.http.request({
			method: "POST",
			path: "/claims",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Bulk Get Accounts
	 *
	 * Bulk get up to 250 accounts.
	 */
	async bulkGet(body: ManagingBulkGetBody): Promise<ManagingBulkGetResponse> {
		return this.http.request({
			method: "POST",
			path: "/bulk/items",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Account Steam Inventory Value
	 *
	 * Gets Account steam inventory value.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Get Steam Inventory Value
	 *
	 * Gets steam inventory value.
	 * > 📘 This method is rate limited. You can send 20 requests per minute (3s delay between requests)
	 */
	async steamValue(params?: ManagingSteamValueParams): Promise<ManagingSteamValueResponse> {
		return this.http.request({
			method: "GET",
			path: "/steam-value",
			query: params,
		});
	}

	/**
	 * Get Steam HTML
	 *
	 * Returns Steam account profile/games preview.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Edit Account
	 *
	 * Edits any details of account.
	 * @param item_id - Item id.
	 */
	async edit(item_id: number, body?: ManagingEditBody): Promise<ManagingEditResponse> {
		if (body && "email_type" in body)
			validateEnum("email_type", body.email_type, ["native", "autoreg"]);
		return this.http.request({
			method: "PUT",
			path: `/${item_id}/edit`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get AI Price
	 *
	 * Get AI-suggested price for the account.
	 * @param item_id - Item id.
	 */
	async aIPrice(item_id: number): Promise<ManagingAIPriceResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/ai-price`,
		});
	}

	/**
	 * Get Auto Buy Price
	 *
	 * Get auto buy price for the account.
	 * @param item_id - Item id.
	 */
	async autoBuyPrice(item_id: number): Promise<ManagingAutoBuyPriceResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/auto-buy-price`,
		});
	}

	/**
	 * Edit Note
	 *
	 * Edits a note for the account.
	 * @param item_id - Item id.
	 */
	async note(item_id: number, body?: ManagingNoteBody): Promise<ManagingNoteResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/note-save`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Update Inventory Value
	 *
	 * Update inventory value.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Bump Account
	 *
	 * Bumps account in the search.
	 * @param item_id - Item id.
	 */
	async bump(item_id: number): Promise<ManagingBumpResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/bump`,
		});
	}

	/**
	 * Auto Bump
	 *
	 * Enables/edits automatic bumping for the specified account.
	 * @param item_id - Item id.
	 */
	async autoBump(item_id: number, body?: ManagingAutoBumpBody): Promise<ManagingAutoBumpResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/auto-bump`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Disable Auto Bump
	 *
	 * Disables automatic bumping for the specified account.
	 * @param item_id - Item id.
	 */
	async autoBumpDisable(item_id: number): Promise<ManagingAutoBumpDisableResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/auto-bump`,
		});
	}

	/**
	 * Open Account
	 *
	 * Opens account.
	 * @param item_id - Item id.
	 */
	async open(item_id: number): Promise<ManagingOpenResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/open`,
		});
	}

	/**
	 * Close Account
	 *
	 * Closes account.
	 * @param item_id - Item id.
	 */
	async close(item_id: number): Promise<ManagingCloseResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/close`,
		});
	}

	/**
	 * Get Account Image
	 *
	 * Get account image.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Get Email Confirmation Code
	 *
	 * Gets confirmation code or link.
	 *
	 * > ❗️ If you receive a "retry_request" error, you should repeat the same request (up to a maximum of 100 times)
	 * @param item_id - Item id.
	 */
	async emailCode(item_id: number): Promise<ManagingEmailCodeResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/email-code`,
		});
	}

	/**
	 * Get Email Letters
	 *
	 * Returns account letters.
	 *
	 * > ❗️ If you receive a "retry_request" error, you should repeat the same request (up to a maximum of 100 times)
	 */
	async getLetters2(params?: ManagingGetLetters2Params): Promise<ManagingGetLetters2Response> {
		return this.http.request({
			method: "GET",
			path: "/letters2",
			query: params,
		});
	}

	/**
	 * Get Mafile
	 *
	 * Returns steam mafile.
	 * > ❗️ This action is cancelling active account guarantee
	 * @param item_id - Item id.
	 */
	async steamGetMafile(item_id: number): Promise<ManagingSteamGetMafileResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/mafile`,
		});
	}

	/**
	 * Add Mafile
	 *
	 * Add a new Steam mafile to the account.
	 * @param item_id - Item id.
	 */
	async steamAddMafile(item_id: number): Promise<ManagingSteamAddMafileResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/mafile`,
		});
	}

	/**
	 * Remove Mafile
	 *
	 * Remove steam mafile.
	 * > ❗️ This will unlink the authenticator from the account and remove mafile from the item
	 * @param item_id - Item id.
	 */
	async steamRemoveMafile(item_id: number): Promise<ManagingSteamRemoveMafileResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/mafile`,
		});
	}

	/**
	 * Get Mafile Confirmation Code
	 *
	 * Gets confirmation code from MaFile (Only for Steam accounts).
	 * @param item_id - Item id.
	 */
	async steamMafileCode(item_id: number): Promise<ManagingSteamMafileCodeResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/guard-code`,
		});
	}

	/**
	 * Confirm SDA
	 *
	 * Confirm steam action.
	 *
	 *  Don't set **id** and **nonce** parameters to get list of available confirmation requests.
	 *
	 * > ❗️ This action is cancelling active account guarantee
	 * @param item_id - Item id.
	 */
	async steamSDA(item_id: number, body?: ManagingSteamSDABody): Promise<ManagingSteamSDAResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/confirm-sda`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Telegram Confirmation Code
	 *
	 * Gets confirmation code from Telegram.
	 * @param item_id - Item id.
	 */
	async telegramCode(item_id: number): Promise<ManagingTelegramCodeResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/telegram-login-code`,
		});
	}

	/**
	 * Telegram Reset Auth
	 *
	 * Resets Telegram authorizations.
	 * @param item_id - Item id.
	 */
	async telegramResetAuth(item_id: number): Promise<ManagingTelegramResetAuthResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/telegram-reset-authorizations`,
		});
	}

	/**
	 * Cancel Guarantee
	 *
	 * Cancel guarantee of account. It can be useful for account reselling.
	 * @param item_id - Item id.
	 */
	async refuseGuarantee(item_id: number): Promise<ManagingRefuseGuaranteeResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/refuse-guarantee`,
		});
	}

	/**
	 * Decline Video Recording Request
	 *
	 * Waiver of the requirement to record a video and any claims regarding this account.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Check Guarantee
	 *
	 * Checks the guarantee and cancels it if there are reasons to cancel it.
	 * @param item_id - Item id.
	 */
	async checkGuarantee(item_id: number): Promise<ManagingCheckGuaranteeResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/check-guarantee`,
		});
	}

	/**
	 * Change Password
	 *
	 * Changes password of account.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Get Temp Email Password
	 *
	 * Gets password from temp email of account. After calling of this method, the guarantee will be cancelled and you cannot automatically resell account.
	 * > ❗️ This action is cancelling active account guarantee
	 * @param item_id - Item id.
	 */
	async tempEmailPassword(item_id: number): Promise<ManagingTempEmailPasswordResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/temp-email-password`,
		});
	}

	/**
	 * Add a Tag
	 *
	 * Adds a tag to the specified account.
	 * @param item_id - Item id.
	 */
	async tag(item_id: number, body?: ManagingTagBody): Promise<ManagingTagResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/tag`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Remove a Tag
	 *
	 * Removes a tag from from the specified account.
	 * @param item_id - Item id.
	 */
	async untag(item_id: number, body?: ManagingUntagBody): Promise<ManagingUntagResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/tag`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Add a Public Tag
	 *
	 * Adds a public tag to the specified account.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Remove a Public Tag
	 *
	 * Removes a public tag from the specified account.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Favorite
	 *
	 * Adds account to favorites.
	 * @param item_id - Item id.
	 */
	async favorite(item_id: number): Promise<ManagingFavoriteResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/star`,
		});
	}

	/**
	 * Unfavorite
	 *
	 * Delete account from favorites.
	 * @param item_id - Item id.
	 */
	async unfavorite(item_id: number): Promise<ManagingUnfavoriteResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/star`,
		});
	}

	/**
	 * Stick Account
	 *
	 * Stick account in the top of search.
	 * @param item_id - Item id.
	 */
	async stick(item_id: number): Promise<ManagingStickResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/stick`,
		});
	}

	/**
	 * Unstick Account
	 *
	 * Unstick account from the top of search.
	 * @param item_id - Item id.
	 */
	async unstick(item_id: number): Promise<ManagingUnstickResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/stick`,
		});
	}

	/**
	 * Change Account Owner
	 *
	 * Transfer account to another user.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Get Claims
	 *
	 * Returns a list of claims filed against you.
	 */
	async claims(params?: ProfileClaimsParams): Promise<ProfileClaimsResponse> {
		validateEnum("type", params?.type, ["market", "nomarket"]);
		validateEnum("claim_state", params?.claim_state, ["active", "solved", "rejected", "settled"]);
		return this.http.request({
			method: "GET",
			path: "/claims",
			query: params,
		});
	}

	/**
	 * Get Profile
	 *
	 * Displays info about your profile.
	 */
	async get(params?: ProfileGetParams): Promise<ProfileGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/me",
			query: params,
		});
	}

	/**
	 * Edit Market Settings
	 *
	 * Change settings about your profile on the market.
	 */
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

	/**
	 * Get Cart Items
	 *
	 * Returns the list of items currently in your cart.
	 */
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

	/**
	 * Add Item to Cart
	 *
	 * Adds item to your cart.
	 */
	async add(body: CartAddBody): Promise<CartAddResponse> {
		return this.http.request({
			method: "POST",
			path: "/cart",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Item From Cart
	 *
	 * Deletes an item from the cart.
	 */
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

	/**
	 * Fast Buy Account
	 *
	 * Check and buy account.
	 *
	 * > ❗️ If you receive a "retry_request" error, you should repeat the same request (up to a maximum of 100 times).
	 * @param item_id - Item id.
	 */
	async fastBuy(item_id: number, body?: PurchasingFastBuyBody): Promise<PurchasingFastBuyResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/fast-buy`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Check Account
	 *
	 * Checking account for validity.
	 *
	 * > ❗️ If you receive a "retry_request" error, you should repeat the same request (up to a maximum of 100 times).
	 * @param item_id - Item id.
	 */
	async check(item_id: number): Promise<PurchasingCheckResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/check-account`,
		});
	}

	/**
	 * Confirm Buy
	 *
	 * Confirm buy.
	 *
	 * > ❗️ This method doesn't check account for validity. If you want to confirm validity before buying, you should use [FastBuy](https://lzt-market.readme.io/reference/purchasingfastbuy) method
	 * @param item_id - Item id.
	 */
	async confirm(item_id: number, body?: PurchasingConfirmBody): Promise<PurchasingConfirmResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/confirm-buy`,
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Discount Request
	 *
	 * Request a discount for the specified item.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Cancel Discount Request
	 *
	 * Cancel a requested discount for the specified item.
	 * @param item_id - Item id.
	 */
	async discountCancel(item_id: number): Promise<PurchasingDiscountCancelResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/discount`,
		});
	}
}

class CustomDiscountsApi {
	constructor(private readonly http: HttpClient) {}

	/**
	 * Get Custom Discounts
	 *
	 * Get a list of custom discounts.
	 */
	async get(): Promise<CustomDiscountsGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/custom-discounts",
		});
	}

	/**
	 * Create Custom Discount
	 *
	 * Creates a new custom discount.
	 */
	async create(body?: CustomDiscountsCreateBody): Promise<CustomDiscountsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/custom-discounts",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Edit Custom Discount
	 *
	 * Edit an existing custom discount.
	 */
	async edit(body?: CustomDiscountsEditBody): Promise<CustomDiscountsEditResponse> {
		return this.http.request({
			method: "PUT",
			path: "/custom-discounts",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Custom Discount
	 *
	 * Delete an existing custom discount.
	 */
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

	/**
	 * Fast Account Upload
	 *
	 * Adds and checks the account for validity.
	 *
	 * > ❗️ If you receive a "retry_request" error, you should repeat the same request (up to a maximum of 100 times).
	 */
	async fastSell(body?: PublishingFastSellBody): Promise<PublishingFastSellResponse> {
		if (body && "email_type" in body)
			validateEnum("email_type", body.email_type, ["native", "autoreg"]);
		return this.http.request({
			method: "POST",
			path: "/item/fast-sell",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Add Account
	 *
	 * Adds account on the market.
	 *
	 * Required email login data categories:
	 * + 9 - Fortnite
	 * + 12 - Epic games
	 * + 18 - Escape from Tarkov
	 */
	async add(body?: PublishingAddBody): Promise<PublishingAddResponse> {
		if (body && "email_type" in body)
			validateEnum("email_type", body.email_type, ["native", "autoreg"]);
		return this.http.request({
			method: "POST",
			path: "/item/add",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Check Account Details
	 *
	 * Check and put up to sale not published account OR update account information existing account.
	 *
	 * > ❗️ If you receive a "retry_request" error, you should repeat the same request (up to a maximum of 100 times).
	 * @param item_id - Item id.
	 */
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

	/**
	 * Add an External Account
	 *
	 * Check and add an external account to your item.
	 *
	 * > ❗️ Please note that if you're linking a Social Club account to Steam, it will update the last activity on your account (This is a limitation of Steam). If Social Club Games does not have a linked account, do not enter any data.
	 * @param item_id - Item id.
	 */
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

	/**
	 * Get Invoice
	 *
	 * Get invoice.
	 *
	 * Required scopes:
	 * + **invoice**
	 */
	async invoiceGet(params?: PaymentsInvoiceGetParams): Promise<PaymentsInvoiceGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/invoice",
			query: params,
		});
	}

	/**
	 * Create Invoice
	 *
	 * Create invoice.
	 *
	 * Required scopes:
	 * + **invoice**
	 */
	async invoiceCreate(body?: PaymentsInvoiceCreateBody): Promise<PaymentsInvoiceCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/invoice",
			body: { lifetime: 3600, ...body },
			bodyEncoding: "json",
		});
	}

	/**
	 * Get Invoice List
	 *
	 * Get invoice list.
	 *
	 * Required scopes:
	 * + **invoice**
	 */
	async invoiceList(params?: PaymentsInvoiceListParams): Promise<PaymentsInvoiceListResponse> {
		validateEnum("status", params?.status, ["paid", "not_paid"]);
		return this.http.request({
			method: "GET",
			path: "/invoice/list",
			query: params,
		});
	}

	/**
	 * Get Currency
	 *
	 * Get currency list.
	 */
	async currency(): Promise<PaymentsCurrencyResponse> {
		return this.http.request({
			method: "GET",
			path: "/currency",
		});
	}

	/**
	 * Get List Of Balances
	 *
	 * Returns list of balances.
	 */
	async balanceList(): Promise<PaymentsBalanceListResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/exchange",
		});
	}

	/**
	 * Exchange Balance
	 *
	 * Transfer funds from one balance to another.
	 */
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

	/**
	 * Transfer Money
	 *
	 * Transfer money to any user.
	 *
	 * Required scopes:
	 * + **payment**
	 */
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

	/**
	 * Check Transfer Fee
	 *
	 * Get transfer limits and get fee amount for transfer.
	 *
	 * Required scopes:
	 * + **payment**
	 */
	async fee(params?: PaymentsFeeParams): Promise<PaymentsFeeResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/transfer/fee",
			query: params,
		});
	}

	/**
	 * Cancel Transfer
	 *
	 * Cancels a transfer with a hold that was sent to your account.
	 *
	 * Required scopes:
	 * + **payment**
	 */
	async cancel(body?: PaymentsCancelBody): Promise<PaymentsCancelResponse> {
		return this.http.request({
			method: "POST",
			path: "/balance/transfer/cancel",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Payments History
	 *
	 * Displays list of your payments.
	 *
	 * Required scopes:
	 * + **payment**
	 */
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

	/**
	 * Get Payout Services
	 *
	 * Get a list of available payout services.
	 */
	async payoutServices(): Promise<PaymentsPayoutServicesResponse> {
		return this.http.request({
			method: "GET",
			path: "/balance/payout/services",
		});
	}

	/**
	 * Create Payout
	 *
	 * Creates a payout request.
	 */
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

	/**
	 * Get Auto Payments
	 *
	 * Get auto payments list.
	 *
	 * Required scopes:
	 * + **payment**
	 */
	async list(): Promise<AutoPaymentsListResponse> {
		return this.http.request({
			method: "GET",
			path: "/auto-payments",
		});
	}

	/**
	 * Create Auto Payment
	 *
	 * Creates auto payment.
	 *
	 * Required scopes:
	 * + **payment**
	 */
	async create(body?: AutoPaymentsCreateBody): Promise<AutoPaymentsCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/auto-payment",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Auto Payment
	 *
	 * Deletes an auto payment.
	 *
	 * Required scopes:
	 * + **payment**
	 */
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

	/**
	 * Get Proxy
	 *
	 * Gets your proxy list.
	 */
	async get(): Promise<ProxyGetResponse> {
		return this.http.request({
			method: "GET",
			path: "/proxy",
		});
	}

	/**
	 * Add Proxy
	 *
	 * Add single proxy or proxy list.
	 *
	 *
	 * To add single proxy use this parameters:
	 *
	 *
	 * + **proxy_ip** (required) - proxy ip or host
	 * + **proxy_port** (required) - proxy port
	 * + **proxy_user** (optional) - proxy username
	 * + **proxy_pass** (optional) - proxy password
	 *
	 * To add proxy list use this parameters:
	 *
	 *
	 * + **proxy_row** (required) - proxy list in String format ip:port:user:pass. Each proxy must be start with new line (use \n separator)
	 */
	async add(body: ProxyAddBody): Promise<ProxyAddResponse> {
		return this.http.request({
			method: "POST",
			path: "/proxy",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete Proxy
	 *
	 * Delete single or all proxies.
	 */
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

	/**
	 * Create IMAP Configuration
	 *
	 * Create an IMAP configuration for a domain.
	 */
	async create(body?: ImapCreateBody): Promise<ImapCreateResponse> {
		return this.http.request({
			method: "POST",
			path: "/imap",
			body: body,
			bodyEncoding: "json",
		});
	}

	/**
	 * Delete IMAP Configuration
	 *
	 * Delete an IMAP configuration for a domain.
	 */
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

	/**
	 * Batch
	 *
	 * Execute multiple API requests at once (separated by comma). Maximum batch jobs is 10.
	 * Following methods are unavailable in Batch:
	 * - GET /{item_id}/image
	 * - /item/fast-sell
	 */
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
			retry: config.retry ?? {},
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

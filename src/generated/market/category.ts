// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { CategoryAllParams, CategoryAllResponse, CategoryBattleNetParams, CategoryBattleNetResponse, CategoryChatGPTParams, CategoryChatGPTResponse, CategoryDiscordParams, CategoryDiscordResponse, CategoryEaParams, CategoryEaResponse, CategoryEpicGamesParams, CategoryEpicGamesResponse, CategoryEscapeFromTarkovParams, CategoryEscapeFromTarkovResponse, CategoryFortniteParams, CategoryFortniteResponse, CategoryGamesResponse, CategoryGiftsParams, CategoryGiftsResponse, CategoryHytaleParams, CategoryHytaleResponse, CategoryInstagramParams, CategoryInstagramResponse, CategoryListParams, CategoryListResponse, CategoryMihoyoParams, CategoryMihoyoResponse, CategoryMinecraftParams, CategoryMinecraftResponse, CategoryParamsResponse, CategoryRiotParams, CategoryRiotResponse, CategoryRobloxParams, CategoryRobloxResponse, CategorySocialClubParams, CategorySocialClubResponse, CategorySteamParams, CategorySteamResponse, CategorySupercellParams, CategorySupercellResponse, CategoryTelegramParams, CategoryTelegramResponse, CategoryTikTokParams, CategoryTikTokResponse, CategoryUplayParams, CategoryUplayResponse, CategoryVpnParams, CategoryVpnResponse, CategoryWarfaceParams, CategoryWarfaceResponse, CategoryWotBlitzParams, CategoryWotBlitzResponse, CategoryWotParams, CategoryWotResponse } from "./types.js";

export class CategoryApi {
	constructor(private readonly http: HttpClient) {}

	async all(params?: CategoryAllParams): Promise<CategoryAllResponse> {
		return this.http.request({
			method: "GET",
			path: "/",
			query: params,
		});
	}

	async steam(params?: CategorySteamParams): Promise<CategorySteamResponse> {
		return this.http.request({
			method: "GET",
			path: "/steam",
			query: params,
		});
	}

	async fortnite(params?: CategoryFortniteParams): Promise<CategoryFortniteResponse> {
		return this.http.request({
			method: "GET",
			path: "/fortnite",
			query: params,
		});
	}

	async mihoyo(params?: CategoryMihoyoParams): Promise<CategoryMihoyoResponse> {
		return this.http.request({
			method: "GET",
			path: "/mihoyo",
			query: params,
		});
	}

	async riot(params?: CategoryRiotParams): Promise<CategoryRiotResponse> {
		return this.http.request({
			method: "GET",
			path: "/riot",
			query: params,
		});
	}

	async telegram(params?: CategoryTelegramParams): Promise<CategoryTelegramResponse> {
		return this.http.request({
			method: "GET",
			path: "/telegram",
			query: params,
		});
	}

	async supercell(params?: CategorySupercellParams): Promise<CategorySupercellResponse> {
		return this.http.request({
			method: "GET",
			path: "/supercell",
			query: params,
		});
	}

	async ea(params?: CategoryEaParams): Promise<CategoryEaResponse> {
		return this.http.request({
			method: "GET",
			path: "/ea",
			query: params,
		});
	}

	async wot(params?: CategoryWotParams): Promise<CategoryWotResponse> {
		return this.http.request({
			method: "GET",
			path: "/world-of-tanks",
			query: params,
		});
	}

	async wotBlitz(params?: CategoryWotBlitzParams): Promise<CategoryWotBlitzResponse> {
		return this.http.request({
			method: "GET",
			path: "/wot-blitz",
			query: params,
		});
	}

	async gifts(params?: CategoryGiftsParams): Promise<CategoryGiftsResponse> {
		return this.http.request({
			method: "GET",
			path: "/gifts",
			query: params,
		});
	}

	async epicGames(params?: CategoryEpicGamesParams): Promise<CategoryEpicGamesResponse> {
		return this.http.request({
			method: "GET",
			path: "/epicgames",
			query: params,
		});
	}

	async escapeFromTarkov(params?: CategoryEscapeFromTarkovParams): Promise<CategoryEscapeFromTarkovResponse> {
		return this.http.request({
			method: "GET",
			path: "/escape-from-tarkov",
			query: params,
		});
	}

	async socialClub(params?: CategorySocialClubParams): Promise<CategorySocialClubResponse> {
		return this.http.request({
			method: "GET",
			path: "/socialclub",
			query: params,
		});
	}

	async uplay(params?: CategoryUplayParams): Promise<CategoryUplayResponse> {
		return this.http.request({
			method: "GET",
			path: "/uplay",
			query: params,
		});
	}

	async discord(params?: CategoryDiscordParams): Promise<CategoryDiscordResponse> {
		return this.http.request({
			method: "GET",
			path: "/discord",
			query: params,
		});
	}

	async tikTok(params?: CategoryTikTokParams): Promise<CategoryTikTokResponse> {
		return this.http.request({
			method: "GET",
			path: "/tiktok",
			query: params,
		});
	}

	async instagram(params?: CategoryInstagramParams): Promise<CategoryInstagramResponse> {
		return this.http.request({
			method: "GET",
			path: "/instagram",
			query: params,
		});
	}

	async battleNet(params?: CategoryBattleNetParams): Promise<CategoryBattleNetResponse> {
		return this.http.request({
			method: "GET",
			path: "/battlenet",
			query: params,
		});
	}

	async chatGPT(params?: CategoryChatGPTParams): Promise<CategoryChatGPTResponse> {
		return this.http.request({
			method: "GET",
			path: "/chatgpt",
			query: params,
		});
	}

	async vpn(params?: CategoryVpnParams): Promise<CategoryVpnResponse> {
		return this.http.request({
			method: "GET",
			path: "/vpn",
			query: params,
		});
	}

	async roblox(params?: CategoryRobloxParams): Promise<CategoryRobloxResponse> {
		return this.http.request({
			method: "GET",
			path: "/roblox",
			query: params,
		});
	}

	async warface(params?: CategoryWarfaceParams): Promise<CategoryWarfaceResponse> {
		return this.http.request({
			method: "GET",
			path: "/warface",
			query: params,
		});
	}

	async minecraft(params?: CategoryMinecraftParams): Promise<CategoryMinecraftResponse> {
		return this.http.request({
			method: "GET",
			path: "/minecraft",
			query: params,
		});
	}

	async hytale(params?: CategoryHytaleParams): Promise<CategoryHytaleResponse> {
		return this.http.request({
			method: "GET",
			path: "/hytale",
			query: params,
		});
	}

	async list(params?: CategoryListParams): Promise<CategoryListResponse> {
		return this.http.request({
			method: "GET",
			path: "/category",
			query: params,
		});
	}

	async params(categoryName: "steam" | "fortnite" | "mihoyo" | "riot" | "telegram" | "supercell" | "ea" | "world-of-tanks" | "wot-blitz" | "epicgames" | "gifts" | "minecraft" | "escape-from-tarkov" | "socialclub" | "uplay" | "discord" | "tiktok" | "instagram" | "chatgpt" | "battlenet" | "vpn" | "roblox" | "warface" | "hytale"): Promise<CategoryParamsResponse> {
		return this.http.request({
			method: "GET",
			path: `/${categoryName}/params`,
		});
	}

	async games(categoryName: "steam" | "fortnite" | "mihoyo" | "riot" | "telegram" | "supercell" | "ea" | "world-of-tanks" | "wot-blitz" | "epicgames" | "gifts" | "minecraft" | "escape-from-tarkov" | "socialclub" | "uplay" | "discord" | "tiktok" | "instagram" | "chatgpt" | "battlenet" | "vpn" | "roblox" | "warface" | "hytale"): Promise<CategoryGamesResponse> {
		return this.http.request({
			method: "GET",
			path: `/${categoryName}/games`,
		});
	}
}

// Auto-generated. Do not edit manually.

import type { HttpClient } from "../../runtime/http-client.js";
import type { ManagingAIPriceResponse, ManagingAutoBumpBody, ManagingAutoBumpDisableResponse, ManagingAutoBumpResponse, ManagingAutoBuyPriceResponse, ManagingBulkGetBody, ManagingBulkGetResponse, ManagingBumpResponse, ManagingChangePasswordBody, ManagingChangePasswordResponse, ManagingCheckGuaranteeResponse, ManagingCloseResponse, ManagingCreateClaimBody, ManagingCreateClaimResponse, ManagingDeclineVideoRecordingBody, ManagingDeclineVideoRecordingResponse, ManagingDeleteBody, ManagingDeleteResponse, ManagingEditBody, ManagingEditResponse, ManagingEmailCodeResponse, ManagingFavoriteResponse, ManagingGetLetters2Params, ManagingGetLetters2Response, ManagingGetParams, ManagingGetResponse, ManagingImageParams, ManagingImageResponse, ManagingNoteBody, ManagingNoteResponse, ManagingOpenResponse, ManagingPublicTagBody, ManagingPublicTagResponse, ManagingPublicUntagBody, ManagingPublicUntagResponse, ManagingRefuseGuaranteeResponse, ManagingSteamAddMafileResponse, ManagingSteamGetMafileResponse, ManagingSteamInventoryValueParams, ManagingSteamInventoryValueResponse, ManagingSteamMafileCodeResponse, ManagingSteamPreviewParams, ManagingSteamPreviewResponse, ManagingSteamRemoveMafileResponse, ManagingSteamSDABody, ManagingSteamSDAResponse, ManagingSteamUpdateValueBody, ManagingSteamUpdateValueResponse, ManagingSteamValueParams, ManagingSteamValueResponse, ManagingStickResponse, ManagingTagBody, ManagingTagResponse, ManagingTelegramCodeResponse, ManagingTelegramResetAuthResponse, ManagingTempEmailPasswordResponse, ManagingTransferBody, ManagingTransferResponse, ManagingUnfavoriteResponse, ManagingUnstickResponse, ManagingUntagBody, ManagingUntagResponse } from "./types.js";

export class ManagingApi {
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
		});
	}

	async createClaim(body?: ManagingCreateClaimBody): Promise<ManagingCreateClaimResponse> {
		return this.http.request({
			method: "POST",
			path: "/claims",
			body: body,
		});
	}

	async bulkGet(body: ManagingBulkGetBody): Promise<ManagingBulkGetResponse> {
		return this.http.request({
			method: "POST",
			path: "/bulk/items",
			body: body,
		});
	}

	async steamInventoryValue(item_id: number, params?: ManagingSteamInventoryValueParams): Promise<ManagingSteamInventoryValueResponse> {
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

	async steamPreview(item_id: number, params?: ManagingSteamPreviewParams): Promise<ManagingSteamPreviewResponse> {
		return this.http.request({
			method: "GET",
			path: `/${item_id}/steam-preview`,
			query: params,
		});
	}

	async edit(item_id: number, body?: ManagingEditBody): Promise<ManagingEditResponse> {
		return this.http.request({
			method: "PUT",
			path: `/${item_id}/edit`,
			body: body,
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
		});
	}

	async steamUpdateValue(item_id: number, body?: ManagingSteamUpdateValueBody): Promise<ManagingSteamUpdateValueResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/update-inventory`,
			body: body,
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

	async declineVideoRecording(item_id: number, body?: ManagingDeclineVideoRecordingBody): Promise<ManagingDeclineVideoRecordingResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/decline-video-recording`,
			body: body,
		});
	}

	async checkGuarantee(item_id: number): Promise<ManagingCheckGuaranteeResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/check-guarantee`,
		});
	}

	async changePassword(item_id: number, body?: ManagingChangePasswordBody): Promise<ManagingChangePasswordResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/change-password`,
			body: body,
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
		});
	}

	async untag(item_id: number, body?: ManagingUntagBody): Promise<ManagingUntagResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/tag`,
			body: body,
		});
	}

	async publicTag(item_id: number, body?: ManagingPublicTagBody): Promise<ManagingPublicTagResponse> {
		return this.http.request({
			method: "POST",
			path: `/${item_id}/public-tag`,
			body: body,
		});
	}

	async publicUntag(item_id: number, body?: ManagingPublicUntagBody): Promise<ManagingPublicUntagResponse> {
		return this.http.request({
			method: "DELETE",
			path: `/${item_id}/public-tag`,
			body: body,
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
		});
	}
}

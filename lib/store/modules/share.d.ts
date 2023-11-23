import { QRCodeResp, ShortLinkRes } from "@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationModel";
import { CreateShortLinkParam, GetUrlQRCodeParam } from "@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ShareModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    createShortLink(params: CreateShortLinkParam): AsyncThunkPromise<ShortLinkRes>;
    getUrlQRCode(params: GetUrlQRCodeParam): AsyncThunkPromise<QRCodeResp>;
}

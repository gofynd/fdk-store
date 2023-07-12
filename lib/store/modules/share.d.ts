import { QRCodeResp, ShortLinkRes } from "fdk-client-javascript/sdk/application/Share/ShareApplicationModel";
import { CreateShortLinkParam, GetUrlQRCodeParam } from "fdk-client-javascript/sdk/application/Share/ShareApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
declare class shareModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    createShortLink(params: CreateShortLinkParam): AsyncThunkPromise<ShortLinkRes>;
    getUrlQRCode(params: GetUrlQRCodeParam): AsyncThunkPromise<QRCodeResp>;
}
export default shareModule;

import { SerializedError } from '@reduxjs/toolkit';
import { QRCodeResp, ShortLinkRes } from '@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationModel';
import { CreateShortLinkParam, GetUrlQRCodeParam } from '@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationValidator';
export declare const createShortLink: import("@reduxjs/toolkit").AsyncThunk<ShortLinkRes, CreateShortLinkParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getUrlQRCode: import("@reduxjs/toolkit").AsyncThunk<QRCodeResp, GetUrlQRCodeParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const shareReducer: import("redux").Reducer<{}, import("redux").AnyAction>;

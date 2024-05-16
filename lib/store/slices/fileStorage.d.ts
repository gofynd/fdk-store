import { CompleteUploadParam, SignUrlsParam, StartUploadParam } from '@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationValidator';
import { CompleteResponse, SignUrlResponse, StartResponse } from '@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationModel';
import { FileStorageSlice } from '../../types/fileStorage';
export declare const startUpload: import("@reduxjs/toolkit").AsyncThunk<StartResponse, StartUploadParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const completeUpload: import("@reduxjs/toolkit").AsyncThunk<CompleteResponse, CompleteUploadParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const signUrls: import("@reduxjs/toolkit").AsyncThunk<SignUrlResponse, SignUrlsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fileStorageReducer: import("redux").Reducer<FileStorageSlice, import("redux").AnyAction>;

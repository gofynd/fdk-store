import { CompleteResponse, SignUrlResponse, StartResponse } from "@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type Startresponse = Partial<StartResponse & CommonAsyncLoadingTypes>;
export type completeResponse = Partial<CompleteResponse & CommonAsyncLoadingTypes>;
export type signUrlResponse = Partial<SignUrlResponse & CommonAsyncLoadingTypes>;
export type FileStorageSlice = {
    startUploadresponce: Startresponse;
    CompleteResponse: completeResponse;
    signUrls: signUrlResponse;
};

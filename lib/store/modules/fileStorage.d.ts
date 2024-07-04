import { CompleteResponse, SignUrlResponse, StartResponse } from "@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationModel";
import { CompleteUploadParam, SignUrlsParam, StartUploadParam } from "@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationValidator";
import { VerifyEmailSuccess } from "@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel";
import { UpdatePasswordParam } from "@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class fileStorageModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    startUpload(params: StartUploadParam): AsyncThunkPromise<StartResponse>;
    completeUpload(params: CompleteUploadParam): AsyncThunkPromise<CompleteResponse>;
    signUrls(params: SignUrlsParam): AsyncThunkPromise<SignUrlResponse>;
    updatePassword(params: UpdatePasswordParam): AsyncThunkPromise<VerifyEmailSuccess>;
}

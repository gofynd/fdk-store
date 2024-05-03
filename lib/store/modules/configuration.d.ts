import { AppCurrencyResponse, AppFeatureResponse, Application, ApplicationInformation, AppStaffResponse, AppTokenResponse, OrderingStore, OrderingStores } from "@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel";
import { GetAppStaffsParam, GetOrderingStoresParam, GetStoreDetailByIdParam } from "@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ConfigurationModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getApplication(): AsyncThunkPromise<Application>;
    getContactInfo(): AsyncThunkPromise<ApplicationInformation>;
    getFeatures(): AsyncThunkPromise<AppFeatureResponse>;
    getIntegrationTokens(): AsyncThunkPromise<AppTokenResponse>;
    getOrderingStores(params: GetOrderingStoresParam): AsyncThunkPromise<OrderingStores>;
    getAppStaffs(params: GetAppStaffsParam): AsyncThunkPromise<AppStaffResponse>;
    getStoreDetailById(params: GetStoreDetailByIdParam): AsyncThunkPromise<OrderingStore>;
    getAppCurrencies(): AsyncThunkPromise<AppCurrencyResponse>;
}

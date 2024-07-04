import { AppCurrencyResponse, AppFeatureResponse, Application, ApplicationInformation, AppStaffResponse, AppTokenResponse, OrderingStore, OrderingStores } from "@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel";
import { GetAppStaffsParam, GetOrderingStoresParam, GetStoreDetailByIdParam } from "@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ConfigurationModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchApplication(): AsyncThunkPromise<Application>;
    fetchContactInfo(): AsyncThunkPromise<ApplicationInformation>;
    fetchAppFeatures(): AsyncThunkPromise<AppFeatureResponse>;
    fetchAppIntegrationTokens(): AsyncThunkPromise<AppTokenResponse>;
    fetchDeploymentStores(params: GetOrderingStoresParam): AsyncThunkPromise<OrderingStores>;
    fetchStaff(params: GetAppStaffsParam): AsyncThunkPromise<AppStaffResponse>;
    fetchStoreById(params: GetStoreDetailByIdParam): AsyncThunkPromise<OrderingStore>;
    fetchAppCurrencies(): AsyncThunkPromise<AppCurrencyResponse>;
}

import { AppCurrencyResponse, AppFeatureResponse, Application, ApplicationInformation, AppStaffResponse, AppTokenResponse, OrderingStore, OrderingStores } from "fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel";
import { GetAppStaffsParam, GetOrderingStoresParam, GetStoreDetailByIdParam } from "fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationValidator";
import { ConfigurationSlice } from "../../types/configuration";
export declare const fetchApplication: import("@reduxjs/toolkit").AsyncThunk<Application, void, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchContactInfo: import("@reduxjs/toolkit").AsyncThunk<ApplicationInformation, void, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAppFeatures: import("@reduxjs/toolkit").AsyncThunk<AppFeatureResponse, void, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAppIntegrationTokens: import("@reduxjs/toolkit").AsyncThunk<AppTokenResponse, void, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchDeploymentStores: import("@reduxjs/toolkit").AsyncThunk<OrderingStores, GetOrderingStoresParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchStaff: import("@reduxjs/toolkit").AsyncThunk<AppStaffResponse, GetAppStaffsParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchStoreById: import("@reduxjs/toolkit").AsyncThunk<OrderingStore, GetStoreDetailByIdParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAppCurrencies: import("@reduxjs/toolkit").AsyncThunk<AppCurrencyResponse, void, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const configurationReducer: import("redux").Reducer<ConfigurationSlice, import("redux").AnyAction>;

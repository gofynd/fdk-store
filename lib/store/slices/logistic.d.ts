import type { SerializedError } from "@reduxjs/toolkit";
import type ApplicationClient from "@gofynd/fdk-client-javascript/sdk/application/ApplicationClient";
import { LogisticSlice } from "../../types/logistic";
import { CountryListResponse, PincodeApiResponse, TATViewResponse } from "@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel";
import { GetPincodeCityParam, GetTatProductParam } from "@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationValidator";
export declare const getAllCountries: import("@reduxjs/toolkit").AsyncThunk<CountryListResponse, void, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getTatProduct: import("@reduxjs/toolkit").AsyncThunk<TATViewResponse, GetTatProductParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getPincodeCity: import("@reduxjs/toolkit").AsyncThunk<PincodeApiResponse, GetPincodeCityParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchPincodeDetails: import("@reduxjs/toolkit").AsyncThunk<PincodeApiResponse, GetPincodeCityParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const logisticsReducer: import("redux").Reducer<LogisticSlice, import("redux").AnyAction>;

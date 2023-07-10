import type { Address, GetAddressesResponse } from 'fdk-client-javascript/sdk/application/Cart/CartApplicationModel';
import type { GetAddressByIdParam, GetAddressesParam } from 'fdk-client-javascript/sdk/application/Cart/CartApplicationValidator';
import { AddressSlice, UpdateAddress } from '../../types/address';
export declare const fetchAddress: import("@reduxjs/toolkit").AsyncThunk<GetAddressesResponse, GetAddressesParam, {
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
export declare const fetchAddressById: import("@reduxjs/toolkit").AsyncThunk<Address, GetAddressByIdParam, {
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
export declare const deleteAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const updateAddress: import("@reduxjs/toolkit").AsyncThunk<any, UpdateAddress, {
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
export declare const addressReducer: import("redux").Reducer<AddressSlice, import("redux").AnyAction>;

import { SerializedError } from '@reduxjs/toolkit';
import { OrderById, OrderList } from '@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel';
import { GetOrderByIdParam, GetOrdersParam } from '@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationValidator';
export declare const getOrders: import("@reduxjs/toolkit").AsyncThunk<OrderList, GetOrdersParam, {
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
export declare const getOrderById: import("@reduxjs/toolkit").AsyncThunk<OrderById, GetOrderByIdParam, {
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
export declare const orderReducer: import("redux").Reducer<{}, import("redux").AnyAction>;

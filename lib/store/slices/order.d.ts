import { SerializedError } from '@reduxjs/toolkit';
import type ApplicationClient from 'fdk-client-javascript/sdk/application/ApplicationClient';
import { OrderById } from 'fdk-client-javascript/sdk/application/Order/OrderApplicationModel';
import { GetOrderByIdParam } from 'fdk-client-javascript/sdk/application/Order/OrderApplicationValidator';
export declare const getOrderById: import("@reduxjs/toolkit").AsyncThunk<OrderById, GetOrderByIdParam, {
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
export declare const orderReducer: import("redux").Reducer<{}, import("redux").AnyAction>;

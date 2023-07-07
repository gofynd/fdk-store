import { SerializedError } from '@reduxjs/toolkit';
import type ApplicationClient from 'fdk-client-javascript/sdk/application/ApplicationClient';
export declare const fetchCollection: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const collectionReducer: import("redux").Reducer<{
    collection: any;
}, import("redux").AnyAction>;
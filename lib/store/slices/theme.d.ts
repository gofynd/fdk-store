import { SerializedError } from '@reduxjs/toolkit';
import type ApplicationClient from 'fdk-client-javascript/sdk/application/ApplicationClient';
import { STORE_KEYS } from '../enums/keys';
export declare const fetchAppliedTheme: import("@reduxjs/toolkit").AsyncThunk<any, void, {
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
export declare const fetchThemeById: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchPage: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
declare const themeSlice: import("@reduxjs/toolkit").Slice<{
    theme: any;
    page: any;
}, {
    updateSectionsForPreview(state: import("immer/dist/internal").WritableDraft<{
        theme: any;
        page: any;
    }>, action: {
        payload: any;
        type: string;
    }): void;
}, STORE_KEYS.THEME>;
export declare const themeReducer: import("redux").Reducer<{
    theme: any;
    page: any;
}, import("redux").AnyAction>;
export declare const updateSectionsForPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "theme/updateSectionsForPreview">;
export default themeSlice;

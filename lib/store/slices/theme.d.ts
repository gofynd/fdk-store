import { SerializedError } from "@reduxjs/toolkit";
import type ApplicationClient from "fdk-client-javascript/sdk/application/ApplicationClient";
import { AvailablePageSchema, ThemesSchema } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel";
import { GetPageParam, GetThemeForPreviewParam } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationValidator";
import { ThemeSlice } from "../../types/theme";
import { STORE_KEYS } from "../enums/keys";
export declare const fetchAppliedTheme: import("@reduxjs/toolkit").AsyncThunk<ThemesSchema, void, {
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
export declare const fetchThemeById: import("@reduxjs/toolkit").AsyncThunk<ThemesSchema, GetThemeForPreviewParam, {
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
export declare const fetchPage: import("@reduxjs/toolkit").AsyncThunk<AvailablePageSchema, GetPageParam, {
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
declare const themeSlice: import("@reduxjs/toolkit").Slice<ThemeSlice, {
    dragSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: {
        type: string;
        payload: {
            index: number;
            newIndex: number;
        };
    }): void;
    addSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: {
        payload: any;
        type: string;
    }): void;
    removeSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: {
        payload: any;
        type: string;
    }): void;
    updateSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: {
        payload: any;
        type: string;
    }): void;
    setTheme(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: {
        type: string;
        payload: ThemesSchema;
    }): void;
}, STORE_KEYS.THEME>;
export declare const themeReducer: import("redux").Reducer<ThemeSlice, import("redux").AnyAction>;
export declare const dragSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    index: number;
    newIndex: number;
}, "theme/dragSection">, addSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "theme/addSection">, removeSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "theme/removeSection">, updateSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "theme/updateSection">, setTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<ThemesSchema, "theme/setTheme">;
export default themeSlice;

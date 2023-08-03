import { SerializedError } from "@reduxjs/toolkit";
import type ApplicationClient from "fdk-client-javascript/sdk/application/ApplicationClient";
import { AvailablePageSchema, ThemesSchema } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel";
import { GetPageParam, GetThemeForPreviewParam } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationValidator";
import { CustomAction } from "../../types";
import { ThemeSlice, UpdateSectionsForPreview } from "../../types/theme";
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
    updateSectionsForPreview(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<UpdateSectionsForPreview>): void;
}, STORE_KEYS.THEME>;
export declare const themeReducer: import("redux").Reducer<ThemeSlice, import("redux").AnyAction>;
export declare const updateSectionsForPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<UpdateSectionsForPreview, "theme/updateSectionsForPreview">;
export default themeSlice;

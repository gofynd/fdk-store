import { AvailablePageSchema, ThemesSchema } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type Theme = Partial<ThemesSchema & CommonAsyncLoadingTypes>;
export type Page = Partial<AvailablePageSchema & CommonAsyncLoadingTypes>;
export type ThemeSlice = {
    theme: Theme;
    sectionKeys: any;
    page: Page;
};
export type UpdateSectionsForPreview = {
    index: number;
    newIndex: number;
};

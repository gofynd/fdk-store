import { AvailablePageSchema, ThemesSchema } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type Theme = Partial<ThemesSchema & CommonAsyncLoadingTypes>;
export type Page = Partial<AvailablePageSchema & CommonAsyncLoadingTypes>;
export type ThemeSlice = {
    theme: Theme;
    sectionKeys: any;
    page: Page;
};
export type DragSectionEvent = {
    index: number;
    newIndex: number;
};
export type AddSectionEvent = {
    name: string;
    counter: number;
};
export type RemoveSection = {
    removedIndex: number;
};
export type UpdateSection = {
    section: object;
    index: number;
};

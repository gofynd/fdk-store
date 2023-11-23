import { AvailablePageSchema, ThemesSchema } from "@gofynd/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel";
import { GetPageParam, GetThemeForPreviewParam } from "@gofynd/fdk-client-javascript/sdk/application/Theme/ThemeApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ThemeModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchAppliedTheme(): AsyncThunkPromise<ThemesSchema>;
    fetchThemeById(params: GetThemeForPreviewParam): AsyncThunkPromise<ThemesSchema>;
    fetchPage(params: GetPageParam): AsyncThunkPromise<AvailablePageSchema>;
    dragSection(params: {
        index: number;
        newIndex: number;
    }): any;
    addSection(params?: any): any;
    removeSection(params?: any): any;
    updateSection(params?: any): any;
    setTheme(params: ThemesSchema): any;
    setGlobalConfig(params: ThemesSchema): any;
}

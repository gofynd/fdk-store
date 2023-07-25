import { AvailablePageSchema, ThemesSchema } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel";
import { GetPageParam, GetThemeForPreviewParam } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
declare class themeModule {
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
}
export default themeModule;

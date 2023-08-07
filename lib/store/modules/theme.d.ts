import { AvailablePageSchema, ThemesSchema } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel";
import { GetPageParam, GetThemeForPreviewParam } from "fdk-client-javascript/sdk/application/Theme/ThemeApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { UpdateSectionsForPreview } from "../../types/theme";
declare class themeModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchAppliedTheme(): AsyncThunkPromise<ThemesSchema>;
    fetchThemeById(params: GetThemeForPreviewParam): AsyncThunkPromise<ThemesSchema>;
    fetchPage(params: GetPageParam): AsyncThunkPromise<AvailablePageSchema>;
    updateSectionsForPreview(params: UpdateSectionsForPreview): any;
}
export default themeModule;

import type { ThunkActionDispatch } from "redux-thunk";
declare class themeModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchAppliedTheme(): any;
    fetchThemeById(params?: any): any;
    fetchPage(params?: any): any;
    updateSectionsForPreview(params?: any): any;
}
export default themeModule;

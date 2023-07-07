import type { ThunkActionDispatch } from "redux-thunk";
declare class categoriesModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchCategories(params?: any): any;
}
export default categoriesModule;

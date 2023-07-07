import type { ThunkActionDispatch } from "redux-thunk";
declare class brandsModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchBrands(params?: any): any;
}
export default brandsModule;

import type { ThunkActionDispatch } from "redux-thunk";
declare class logisticModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchAllCountries(): any;
    getTatProduct(params?: any): any;
    fetchPincodeDetails(params?: any): any;
}
export default logisticModule;

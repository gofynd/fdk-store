import type { ThunkActionDispatch } from "redux-thunk";
declare class addressModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getAddress(params?: any): any;
    getAddressById(params?: any): any;
    updateAddress(params?: any): Promise<any>;
    deleteAddress(params?: any): Promise<any>;
}
export default addressModule;

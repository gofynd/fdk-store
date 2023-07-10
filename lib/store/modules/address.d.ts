import type { GetAddressesResponse } from "fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import type { GetAddressesParam } from "fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
declare class addressModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getAddress(params: GetAddressesParam): AsyncThunkPromise<GetAddressesResponse>;
    getAddressById(params?: any): any;
    updateAddress(params?: any): Promise<any>;
    deleteAddress(params?: any): Promise<any>;
}
export default addressModule;

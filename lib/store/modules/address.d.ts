import type { Address, DeleteAddressResponse, GetAddressesResponse } from "fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import type { GetAddressByIdParam, GetAddressesParam, RemoveAddressParam } from "fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { UpdateAddress } from "../../types/address";
export declare class AddressModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getAddress(params: GetAddressesParam): AsyncThunkPromise<GetAddressesResponse>;
    getAddressById(params: GetAddressByIdParam): AsyncThunkPromise<Address>;
    updateAddress(params: UpdateAddress): AsyncThunkPromise<UpdateAddress>;
    deleteAddress(params: RemoveAddressParam): AsyncThunkPromise<DeleteAddressResponse>;
}

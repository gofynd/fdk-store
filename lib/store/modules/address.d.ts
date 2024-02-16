import type { Address, DeleteAddressResponse, GetAddressesResponse, UpdateAddressResponse } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import type { GetAddressByIdParam, GetAddressesParam, RemoveAddressParam, UpdateAddressParam } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { UpdateAddress } from "../../types/address";
export declare class AddressModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getAddresses(params: GetAddressesParam): AsyncThunkPromise<GetAddressesResponse>;
    getAddressById(params: GetAddressByIdParam): AsyncThunkPromise<Address>;
    addOrUpdateAddress(params: UpdateAddress): AsyncThunkPromise<UpdateAddress>;
    deleteAddress(params: RemoveAddressParam): AsyncThunkPromise<DeleteAddressResponse>;
    removeAddress(params: RemoveAddressParam): AsyncThunkPromise<DeleteAddressResponse>;
    updateAddress(params: UpdateAddressParam): AsyncThunkPromise<UpdateAddressResponse>;
}

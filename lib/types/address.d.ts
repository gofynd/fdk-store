import type { Address } from "fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import type { AddAddressParam, UpdateAddressParam } from "fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import { CommonAsyncLoadingTypes } from ".";
export type AddressItemType = Partial<Address & CommonAsyncLoadingTypes>;
export type AddressSlice = {
    address: any;
    address_item: AddressItemType;
};
export type UpdateAddress = AddAddressParam & UpdateAddressParam;

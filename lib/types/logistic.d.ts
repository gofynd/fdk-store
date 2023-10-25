import type { Address } from "fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { CountryListResponse, TATViewResponse } from "fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type Countries = Partial<CountryListResponse & CommonAsyncLoadingTypes>;
export type ProductTAT = Partial<TATViewResponse & CommonAsyncLoadingTypes>;
export type PincodeDetails = Partial<Address & CommonAsyncLoadingTypes>;
export type LogisticSlice = {
    countries: Countries;
    product_tat: ProductTAT;
    pincode_details: PincodeDetails;
};

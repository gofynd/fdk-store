import { CountryListResponse, PincodeApiResponse, TATViewResponse } from "@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel";
import { GetPincodeCityParam, GetTatProductParam } from "@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class LogisticModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getAllCountries(): AsyncThunkPromise<CountryListResponse>;
    getTatProduct(params: GetTatProductParam): AsyncThunkPromise<TATViewResponse>;
    getPincodeCity(params: GetPincodeCityParam): AsyncThunkPromise<PincodeApiResponse>;
    fetchPincodeDetails(params: GetPincodeCityParam): AsyncThunkPromise<PincodeApiResponse>;
}

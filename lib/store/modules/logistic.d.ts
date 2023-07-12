import { CountryListResponse, PincodeApiResponse, TATViewResponse } from "fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel";
import { GetPincodeCityParam, GetTatProductParam } from "fdk-client-javascript/sdk/application/Logistic/LogisticApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
declare class logisticModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchAllCountries(): AsyncThunkPromise<CountryListResponse>;
    getTatProduct(params: GetTatProductParam): AsyncThunkPromise<TATViewResponse>;
    fetchPincodeDetails(params: GetPincodeCityParam): AsyncThunkPromise<PincodeApiResponse>;
}
export default logisticModule;

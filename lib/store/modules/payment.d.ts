import { ValidateVPAResponse } from "@gofynd/fdk-client-javascript/sdk/application/Payment/PaymentApplicationModel";
import { ValidateVPAParam } from "@gofynd/fdk-client-javascript/sdk/application/Payment/PaymentApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class PaymentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getPaymentModeRoutes(params?: any): any;
    validateVPA(params: ValidateVPAParam): AsyncThunkPromise<ValidateVPAResponse>;
    getAggregatorsConfig(): any;
    verifyCustomerForPayment(params: any): any;
    customerCreditSummary(payload: any): any;
    redirectToAggregator(payload: any): any;
    customerOnboard(payload: any): any;
    getEpaylaterBannerDetails(payload: any): any;
    confirmPayment(payload: any): any;
    confirmPaymentAddress(payload: any): any;
    checkoutPayment(payload: any): any;
}

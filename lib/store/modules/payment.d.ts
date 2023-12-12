import type { ThunkActionDispatch } from "redux-thunk";
export declare class PaymentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getPaymentModeRoutes(params?: any): any;
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

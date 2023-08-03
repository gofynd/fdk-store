import type { ThunkActionDispatch } from "redux-thunk";
declare class paymentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchPaymentOptions(params?: any): any;
    fetchAggregatorsConfig(): any;
    verifyCustomerForPayment(params: any): any;
    customerCreditSummary(payload: any): any;
    redirectToAggregator(payload: any): any;
    customerOnboard(payload: any): any;
    getEpaylaterBannerDetails(payload: any): any;
    confirmPayment(payload: any): any;
    confirmPaymentAddress(payload: any): any;
    checkoutPayment(payload: any): any;
}
export default paymentModule;

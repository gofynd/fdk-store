import { checkoutPayment, confirmPayment, confirmPaymentAddress, customerCreditSummary, customerOnboard, getAggregatorsConfig, getPaymentModeRoutes, getEpaylaterBannerDetails, redirectToAggregator, verifyCustomerForPayment, validateVPA } from "../slices/payment";
export class PaymentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getPaymentModeRoutes(params = {}) {
        return this.dispatch(getPaymentModeRoutes(params));
    }
    validateVPA(params) {
        return this.dispatch(validateVPA(params));
    }
    getAggregatorsConfig() {
        return this.dispatch(getAggregatorsConfig());
    }
    verifyCustomerForPayment(params) {
        return this.dispatch(verifyCustomerForPayment(params));
    }
    customerCreditSummary(payload) {
        return this.dispatch(customerCreditSummary(payload));
    }
    redirectToAggregator(payload) {
        return this.dispatch(redirectToAggregator(payload));
    }
    customerOnboard(payload) {
        return this.dispatch(customerOnboard(payload));
    }
    getEpaylaterBannerDetails(payload) {
        return this.dispatch(getEpaylaterBannerDetails(payload));
    }
    confirmPayment(payload) {
        return this.dispatch(confirmPayment(payload));
    }
    confirmPaymentAddress(payload) {
        return this.dispatch(confirmPaymentAddress(payload));
    }
    checkoutPayment(payload) {
        return this.dispatch(checkoutPayment(payload));
    }
}
//# sourceMappingURL=payment.js.map
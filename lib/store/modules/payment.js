import { checkoutPayment, confirmPayment, confirmPaymentAddress, customerCreditSummary, customerOnboard, fetchAggregatorsConfig, fetchPaymentOptions, getEpaylaterBannerDetails, redirectToAggregator, verifyCustomerForPayment } from "../slices/payment";
export class PaymentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchPaymentOptions(params = {}) {
        return this.dispatch(fetchPaymentOptions(params));
    }
    fetchAggregatorsConfig() {
        return this.dispatch(fetchAggregatorsConfig());
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
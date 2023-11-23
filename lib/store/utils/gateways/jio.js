export default class JioPayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /*
        transaction
    **/
    transaction(obj) {
        const self = this;
        const body = {
            base64_html: obj === null || obj === void 0 ? void 0 : obj.base64_html,
        };
        return new Promise(function (resolve, reject) {
            try {
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
//# sourceMappingURL=jio.js.map
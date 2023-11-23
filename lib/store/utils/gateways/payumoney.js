export default class PayumoneyPayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    transaction() {
        return new Promise(function (resolve, reject) {
            try {
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
//# sourceMappingURL=payumoney.js.map
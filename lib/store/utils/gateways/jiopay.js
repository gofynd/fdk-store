export default class JiopayPayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /*
        transaction
    **/
    transaction(obj) {
        var self = this;
        let body = {
            mid: obj.merchant_id,
            appidtoken: obj.appidtoken,
            appaccesstoken: obj.appaccesstoken,
            intentid: obj.intentid,
        };
        if (obj.themes && Object.keys(obj.themes).length > 0) {
            body = Object.assign(Object.assign({}, body), obj.themes);
        }
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
//# sourceMappingURL=jiopay.js.map
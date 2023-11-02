export default class AjiodhanPayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /*
        transaction
    **/
    transaction(obj) {
        var self = this;
        // const body = {
        //     checksum: obj.checksum,
        //     encdata: obj.encdata,
        //     mcode: obj.mCode
        // };
        return new Promise(function (resolve, reject) {
            try {
                window.location = obj.redirect_url;
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
//# sourceMappingURL=ajiodhan.js.map
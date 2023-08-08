// import { dummyFormSubmit } from './helper';
export default class EpayLaterPayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /*
        transaction
    **/
    transaction(obj) {
        var self = this;
        const body = {
            checksum: obj.checksum,
            encdata: obj.encdata,
            mcode: obj.mCode,
        };
        return new Promise(function (resolve, reject) {
            try {
                // dummyFormSubmit(self.paymentFlow.api_link, body, 'POST');
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
//# sourceMappingURL=epaylater.js.map
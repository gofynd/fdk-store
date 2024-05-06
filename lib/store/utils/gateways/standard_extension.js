import { dummyFormSubmit } from './helper';
export default class StandardExtension {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /*
        transaction
    **/
    transaction(obj) {
        var self = this;
        return new Promise(function (resolve, reject) {
            try {
                dummyFormSubmit(self.paymentFlow.api_link, obj, 'POST');
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
//# sourceMappingURL=standard_extension.js.map
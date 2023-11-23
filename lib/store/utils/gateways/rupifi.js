export default class RupifiPayment {
    constructor(sdk, selectedPayment) {
        this.sdk = sdk;
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    verifyUser(params, phone) {
        const self = this;
        const $SimpleRadio = document.querySelector('#' + self.selectedPayment.id + ' ' + '[data-payment-input]');
        let options = {
            payload: '',
            aggregator: self.selectedPayment.aggregator_name,
            phone_number: phone,
            merchant_params: {
                source: 'web',
            },
            transaction_amount_in_paise: self.selectedPayment.amount,
        };
        return new Promise((resolve, reject) => {
            this.sdk.payment
                .verifyCustomerForPayment({ body: options })
                .then((data) => {
                var _a, _b;
                if (data.success && ((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.approved)) {
                    $SimpleRadio === null || $SimpleRadio === void 0 ? void 0 : $SimpleRadio.removeAttribute('disabled');
                }
            })
                .catch((err) => {
                $SimpleRadio === null || $SimpleRadio === void 0 ? void 0 : $SimpleRadio.setAttribute('disabled', 'true');
                throw { message: err };
            })
                .finally(() => {
                resolve();
            });
        });
    }
    transaction(obj) {
        return new Promise(function (resolve, reject) {
            try {
                let data = Object.assign({}, obj);
                window.location.href = data.drawdownLink;
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
//# sourceMappingURL=rupifi.js.map
export default class RazorpayPayment {
    constructor(selectedPayment, state) {
        this.state = state;
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    createCardPaymentData(obj) {
        if (obj.card_token) {
            return {
                card_token: obj.card_token,
                'card[cvv]': obj.card_security_code,
            };
        }
        else {
            return {
                'card[name]': obj.name_on_card,
                'card[number]': obj.card_number,
                'card[cvv]': obj.card_security_code,
                'card[expiry_month]': obj.card_exp_month,
                'card[expiry_year]': obj.card_exp_year,
            };
        }
    }
    transaction(obj, consent) {
        const self = this;
        return new Promise(function (resolve, reject) {
            var _a, _b, _c, _d;
            let rbiDataSave = (consent === null || consent === void 0 ? void 0 : consent.checkedBoxValue) ? 1 : 0;
            const data = Object.assign({}, obj);
            if ((_b = (_a = consent === null || consent === void 0 ? void 0 : consent.paymentdata) === null || _a === void 0 ? void 0 : _a.option) === null || _b === void 0 ? void 0 : _b.card_number) {
                data.consent_to_save_card = rbiDataSave;
            }
            else {
                data.save = rbiDataSave;
            }
            self.razorpay = new window.Razorpay({
                key: (_d = (_c = self.state.payment.aggregators_config) === null || _c === void 0 ? void 0 : _c.razorpay) === null || _d === void 0 ? void 0 : _d.key,
                image: 'https://rj-cdn.gofynd.com/rpublic/imgs/fynd_logo.png',
                callback_url: data.callback_url,
                redirect: true,
            });
            delete data.callback_url;
            self.razorpay.createPayment(data);
            self.razorpay.on('payment.success', function (o) {
                return resolve(o);
            });
            self.razorpay.on('payment.error', function (o) {
                return reject(o);
            });
        });
    }
    injectScript() {
        let scriptObject = {
            src: "https://checkout.razorpay.com/v1/razorpay.js",
        };
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = scriptObject.src;
            // Resolve promise when script is loaded
            script.onload = () => {
                resolve();
            };
            script.onerror = () => {
                reject(new Error(`Failed to load script: ${script.src}`));
            };
            document.body.appendChild(script);
        });
    }
}
//# sourceMappingURL=razorpay.js.map
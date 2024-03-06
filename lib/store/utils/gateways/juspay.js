import qs from 'qs';
let instance;
export default class JuspayPayment {
    constructor(selectedPayment) {
        instance = this;
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
        if (instance) {
            return instance;
        }
    }
    createCardPaymentData(obj) {
        if (obj.card_token) {
            return {
                card_token: obj.card_token,
                card_security_code: obj.card_security_code,
            };
        }
        else {
            return {
                card_number: obj.card_number,
                card_security_code: obj.card_security_code,
                card_exp_month: obj.card_exp_month,
                card_exp_year: obj.card_exp_year,
                name_on_card: obj.name_on_card,
                nickname: obj.name_on_card,
            };
        }
    }
    createUPIPaymentData(obj) {
        return {
            upi_vpa: obj.vpa,
            payment_method: obj.payment_method,
        };
    }
    transaction(obj, payload) {
        let self = this;
        let data = Object.assign({}, obj, {
            format: 'json',
            redirect_after_payment: 'true',
            save_to_locker: payload === null || payload === void 0 ? void 0 : payload.checkedBoxValue,
        });
        // TODO : handle error scenrios
        // Not using axios as it is always sending withCredentials:true, causing cors error
        return new Promise(function (resolve, reject) {
            if (!(obj === null || obj === void 0 ? void 0 : obj.redirect)) {
                return resolve(obj);
            }
            let httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        let jpData = JSON.parse(httpRequest.responseText);
                        let authentication = jpData.payment && jpData.payment.authentication;
                        if (authentication && authentication.url) {
                            if (authentication.method === 'POST') {
                                // TODO
                                // fHelper.dummyFormSubmit(authentication, self.$html);
                            }
                            else {
                                window.location.href = authentication.url;
                            }
                            return resolve();
                        }
                    }
                    else {
                        let jpData = JSON.parse(httpRequest.responseText);
                        return reject(new Error(jpData.error_message ||
                            'Transaction Initiation Failed'));
                    }
                }
            };
            httpRequest.open('POST', self.paymentFlow.Juspay.api_link);
            httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            httpRequest.send(qs.stringify(data));
        });
    }
}
//# sourceMappingURL=juspay.js.map
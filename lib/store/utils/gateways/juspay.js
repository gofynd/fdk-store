import qs from 'qs';
export default class JuspayPayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
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
    transaction(obj) {
        let self = this;
        let data = Object.assign({}, obj, {
            format: 'json',
            redirect_after_payment: 'true',
        });
        // TODO : handle error scenrios
        // Not using axios as it is always sending withCredentials:true, causing cors error
        return new Promise(function (resolve, reject) {
            let httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function () {
                var _a;
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        let jpData = JSON.parse(httpRequest.responseText);
                        let authentication = (_a = jpData.payment) === null || _a === void 0 ? void 0 : _a.authentication;
                        if (authentication === null || authentication === void 0 ? void 0 : authentication.url) {
                            if (authentication.method === 'POST') {
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
            httpRequest.open('POST', self.paymentFlow.api_link);
            httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            httpRequest.send(qs.stringify(data));
        });
    }
}
//# sourceMappingURL=juspay.js.map
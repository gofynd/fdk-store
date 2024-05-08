var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { dummyFormSubmit } from './helper';
export default class JioPayment {
    constructor(selectedPayment, payment_mode) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
        this.payment_mode = payment_mode;
    }
    createCardPaymentData(obj) {
        if (obj.card_token) {
            return {
                token: obj.card_token,
                cvv: obj.card_security_code,
            };
        }
        else {
            return {
                card: {
                    name: obj.name_on_card,
                    number: obj.card_number,
                    cvv: obj.card_security_code,
                    expiryMonth: obj.card_exp_month,
                    expiryYear: '20' + obj.card_exp_year,
                },
            };
        }
    }
    createUPIPaymentData(obj) {
        return {
            upi: {
                vpa: obj.vpa,
                type: 'COLLECT',
            },
        };
    }
    createNetBankingData(payment) {
        return {
            nb: {
                bankCode: payment.bank_code,
            },
        };
    }
    createWalletData(payment) {
        return {
            wallet: {
                instrumentId: payment.wallet_code,
                token: payment.meta.token,
            },
        };
    }
    /*
        transaction
    **/
    transaction(obj, payload) {
        var _a, _b;
        const self = this;
        try {
            // Checking for seamles Jio One Pay
            const name = self.selectedPayment.mode_name || self.selectedPayment.name;
            if (self.selectedPayment.aggregator_name.toLowerCase() === 'jio' &&
                name.toLowerCase() !== 'jiopp' &&
                name.toLowerCase() !== 'jiopplink') {
                let paymentLink = self.paymentFlow.api_link;
                (_b = (_a = self.paymentFlow.additional_api_links) === null || _a === void 0 ? void 0 : _a.forEach) === null || _b === void 0 ? void 0 : _b.call(_a, (link) => {
                    var _a, _b;
                    if ((_b = (_a = link.payment_modes) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, name)) {
                        paymentLink = link.api_link;
                    }
                });
                // Token to be removed from body and attached to headers
                const { token } = obj, paymentBody = __rest(obj, ["token"]);
                paymentBody.consent = payload === null || payload === void 0 ? void 0 : payload.checkedBoxValue;
                paymentBody.paymentMethod = self.payment_mode;
                return fetch(paymentLink, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        token: token,
                    },
                    body: JSON.stringify(paymentBody),
                })
                    .then((res) => res.json())
                    .then((d) => {
                    window.location.href = d.data.next[0].url;
                })
                    .catch((err) => {
                    console.log(err);
                    return Promise.reject(err.message);
                });
            }
            else {
                const body = {
                    base64_html: obj === null || obj === void 0 ? void 0 : obj.base64_html,
                };
                dummyFormSubmit(self.paymentFlow.api_link, body, 'POST');
                return Promise.resolve();
            }
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
}
//# sourceMappingURL=jio.js.map
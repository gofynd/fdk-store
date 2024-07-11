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
const MESSAGES = {
    unauthorized: 'Oops! Unable to proceed with transaction. Retry later',
    user_not_found: "Oops! your mobile number isn't liked to a Potlee account",
    user_unauthorized: 'Oops! your account has been blocked by Potlee',
    unable_to_process: 'Oops! this transaction exceeds your Potlee credit limit',
    insufficient_credit: 'Oops! this transaction exceeds your Potlee credit limit',
    order_id_already_exists: 'Oops! a transaction with the same order id already exists',
    transaction_amount_zero_error: "Oops! transaction amount can't be 0",
    refund_amount_greater_than_transaction_amount: 'Oops! refund amount is greater than transaction amount',
    invalid_transaction_token: 'Oops! Unable to proceed with transaction. Retry later',
    bad_request: 'Oops! Unable to proceed with transaction. Retry later',
    user_cancelled: 'Transaction has been cancelled',
};
export default class PotleePayment {
    constructor(sdk, selectedPayment) {
        this.sdk = sdk;
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /**
     * This method is caled while paymentOptions list page only.
     * To verify that this user is allowed to do Potlee payment or not.
     */
    verifyUser(params = {}) {
        const self = this;
        const $PotleeRadio = document.querySelector('#' + self.selectedPayment.id + ' ' + '[data-payment-input]');
        const $subTitle = document.querySelector('#' + self.selectedPayment.id + ' ' + '[data-subtitle]');
        return self.fetchAddressForApproval(params)
            .then(function (sc) {
            $PotleeRadio === null || $PotleeRadio === void 0 ? void 0 : $PotleeRadio.removeAttribute('disabled');
            if ($subTitle) {
                $subTitle.innerHTML = `${sc.data.data.message || 'Yay! Grab a new item & Pay Later!'}`;
            }
        })
            .catch(function (err) {
            $PotleeRadio === null || $PotleeRadio === void 0 ? void 0 : $PotleeRadio.setAttribute('disabled', 'true');
            if ($subTitle) {
                $subTitle.innerHTML = `${err || 'Sorry! Please try some other payment method!'}`;
            }
        });
    }
    fetchAddressForApproval(params) {
        const self = this;
        return new Promise((resolve, reject) => {
            let { address_id, billing_address_id, bag_data } = params;
            if (!billing_address_id) {
                billing_address_id = address_id;
            }
            const pArr = address_id === billing_address_id
                ? [this.sdk.cart.getAddressById({ id: address_id })]
                : [
                    this.sdk.cart.getAddressById({ id: address_id }),
                    this.sdk.cart.getAddressById({ id: billing_address_id }),
                ];
            Promise.all(pArr)
                .then((data) => {
                const delivery_address = {
                    line1: data[0].address,
                    line2: data[0].area,
                    city: data[0].city,
                    state: data[0].state,
                    country: data[0].country,
                    pincode: data[0].area_code,
                    type: data[0].address_type,
                };
                let billing_address = delivery_address;
                if (data.length > 1) {
                    billing_address = {
                        line1: data[1].address,
                        line2: data[1].area,
                        city: data[1].city,
                        state: data[1].state,
                        country: data[1].country,
                        pincode: data[1].area_code,
                        type: data[1].address_type,
                    };
                }
                const order_items = bag_data.items.map((it) => {
                    return {
                        sku: it.article.uid,
                        price: it.price.base.effective,
                        quantity: it.quantity,
                    };
                });
                return self
                    .checkPotleeApproval({
                    aggregator: self.selectedPayment.aggregator_name,
                    phone_number: self.paymentFlow.data.gateway.sdk.data
                        .user_phone,
                    merchant_params: {
                        source: 'web',
                    },
                    merchant_profile_id: 1,
                    transaction_amount_in_paise: parseInt(`${self.selectedPayment.amount * 100}`),
                    delivery_address: delivery_address,
                    billing_address: billing_address,
                    order_items: order_items,
                })
                    .then((data) => {
                    resolve(data);
                });
            })
                .catch((err) => {
                return reject(err);
            });
        });
    }
    checkPotleeApproval(data) {
        let { merchant_profile_id } = data, options = __rest(data, ["merchant_profile_id"]);
        options.phone_number =
            this.paymentFlow.data.gateway.sdk.data.user_phone;
        return new Promise((resolve, reject) => {
            this.sdk.payment
                .verifyCustomerForPayment({ body: options })
                .then((data) => {
                var _a, _b;
                if (data.success && ((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.approved)) {
                    return resolve(data);
                }
                return reject(data.message);
            })
                .catch((err) => {
                return reject(err);
            })
                .finally(() => {
                resolve();
            });
        });
    }
    /*
        transaction
    **/
    transaction(obj) {
        const { redirect_url } = obj;
        window.location.href = redirect_url;
    }
    chargeCustomer(tokenData, orderData) {
        const options = {
            transaction_token: tokenData.transaction_token,
            order_id: orderData.order_id,
            aggregator: 'Potlee',
            amount: orderData.amount,
        };
        return new Promise((resolve, reject) => {
            this.sdk.payment
                .verifyAndChargePayment({ body: options })
                .then((data) => {
                if (data.success) {
                    return resolve(data);
                }
                const er = new Error(data.message);
                er.data = data;
                return reject(er);
            })
                .catch((err) => {
                return reject(err);
            })
                .finally(() => {
                resolve();
            });
        });
    }
}
//# sourceMappingURL=potlee.js.map
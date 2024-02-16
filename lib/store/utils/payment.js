var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { removeCookie } from "../../helpers/utils";
import { COOKIE_KEYS } from "../enums/keys";
import { PaymentGatway } from "./gateways";
export function handleConfirmPayment(sdk, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { is_redirection, queryParams } = params, options = __rest(params, ["is_redirection", "queryParams"]);
        let queryOptions = {
            id: queryParams.cart_id,
            addressId: queryParams.address_id,
            aggregatorName: options.aggregator_name,
            paymentIdentifier: options.payment_identifier,
            paymentMode: options.payment_mode,
        };
        const data = yield sdk.cart.validateCouponForPayment(queryOptions);
        const { coupon_validity } = data;
        if (options.disable_coupon_validation ||
            (coupon_validity && coupon_validity.valid)) {
            let { card_reference } = options, body = __rest(options, ["card_reference"]);
            const res = yield sdk.cart.selectPaymentMode({
                body,
                id: body.id,
            });
            return res;
        }
        else {
            throw data;
        }
    });
}
;
export function handleCODOrder(sdk, state, paymentOptions, create_order = createOrder) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderInfo = yield create_order(sdk, paymentOptions);
        if (orderInfo.success) {
            // Reset ordering store in case of successful checkout
            removeCookie(COOKIE_KEYS.ORDERING_STORE);
            //navigate to order status
            const CODParams = {
                success: 'true',
                delivery_address_id: paymentOptions.address_id,
                order_id: orderInfo.order_id,
                uid: paymentOptions.uid,
                billing_address_id: paymentOptions.billing_address_id,
            };
            if (paymentOptions.id) {
                CODParams["cart_id"] = paymentOptions.id;
            }
            const params = new URLSearchParams();
            for (const key in CODParams) {
                if (CODParams.hasOwnProperty(key)) {
                    params.append(key, CODParams[key]);
                }
            }
            const currentURL = orderInfo.callback_url;
            const finalUrl = `${currentURL}?${params.toString()}`;
            window.location.href = finalUrl || "";
        }
        else {
            const params = new URLSearchParams();
            params.append('success', 'false');
            const currentURL = orderInfo.callback_url;
            const finalUrl = `${currentURL}?${params.toString()}`;
            window.location.href = finalUrl || "";
        }
    });
}
export function transactOrder(sdk, state, paymentOptions, payment_config, create_order = createOrder) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        //Figure out current payment gateway
        let currentPaymentGatway = PaymentGatway[paymentOptions.aggregator];
        yield currentPaymentGatway.injectScript(payment_config);
        currentPaymentGatway = new currentPaymentGatway(paymentOptions.payment, state);
        let orderInfo = yield create_order(sdk, paymentOptions);
        if (orderInfo.success) {
            // Reset ordering store in case of successful checkout
            removeCookie(COOKIE_KEYS.ORDERING_STORE);
            //get updated order info
            orderInfo = updateOrderInfo(currentPaymentGatway, orderInfo, paymentOptions);
            let orderInfoPayload = orderInfo.data;
            const isLoggedIn = state.auth.is_logged_in;
            let rbiGuidelineSave = Object.assign(Object.assign({}, (isLoggedIn
                ? {
                    checkedBoxValue: (_a = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _a === void 0 ? void 0 : _a.is_card_secure,
                }
                : { checkedBoxValue: false })), { paymentdata: Object.assign(Object.assign({}, paymentOptions), { option: {
                        card_number: ((_b = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _b === void 0 ? void 0 : _b.card_token)
                            ? ''
                            : (_c = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _c === void 0 ? void 0 : _c.card_number,
                    } }) });
            if (orderInfoPayload === null || orderInfoPayload === void 0 ? void 0 : orderInfoPayload.card_token) {
                orderInfoPayload === null || orderInfoPayload === void 0 ? true : delete orderInfoPayload.card_token;
            }
            const res = yield currentPaymentGatway.transaction(orderInfoPayload, rbiGuidelineSave);
            // if (paymentOptions.aggregator === 'Simpl') {
            //     //navigate to order status
            //     // return this.$router.push({
            //     //     path: '/cart/order-status',
            //     //     query: {
            //     //         delivery_address_id: res.address_id,
            //     //         order_id: res.order_id,
            //     //         uid: res.uid,
            //     //         billing_address_id: res.address_id,
            //     //         success: res.success,
            //     //     },
            //     // });
            // } else if (paymentOptions.aggregator === 'UPI_Razorpay') {
            //     // this.$router.push({
            //     //     name: 'cart-upi',
            //     //     params: {
            //     //         s2sData: res,
            //     //     },
            //     // });
            // }
        }
        else {
            throw orderInfo;
        }
    });
}
export function createOrder(sdk, paymentOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = Object.assign(Object.assign({ address_id: paymentOptions.address_id, billing_address_id: paymentOptions.billing_address_id, aggregator: paymentOptions.aggregator, merchant_code: paymentOptions.merchant_code, payment_mode: paymentOptions.payment_mode, meta: paymentOptions.meta }, (paymentOptions.id ? { id: paymentOptions.id } : {})), (paymentOptions.custom_meta
            ? { custom_meta: paymentOptions.custom_meta }
            : {}));
        if (paymentOptions.payment_identifier) {
            options = Object.assign(Object.assign({}, options), { payment_identifier: paymentOptions.payment_identifier });
        }
        if (paymentOptions.staff) {
            options = Object.assign(Object.assign({}, options), { staff: paymentOptions.staff });
        }
        if (paymentOptions.ordering_store) {
            options = Object.assign(Object.assign({}, options), { ordering_store: paymentOptions.ordering_store });
        }
        return sdk.cart.checkoutCart({
            body: options,
        });
    });
}
export function updateOrderInfo(currentPaymentGatway, orderInfo, paymentOptions) {
    //update orderInfo with card and upi data
    if (paymentOptions.payment_mode === 'UPI') {
        const upiMeta = currentPaymentGatway.createUPIPaymentData({
            vpa: paymentOptions.payment.upi.vpa,
        });
        Object.assign(orderInfo.data, upiMeta);
    }
    else if (paymentOptions.payment_mode === 'CARD' &&
        !paymentOptions.payment.card_token) {
        let infoCard = {
            card_security_code: paymentOptions.payment.cvv,
            card_number: paymentOptions.payment.card_number,
            card_exp_month: paymentOptions.payment.exp_month,
            card_exp_year: paymentOptions.payment.exp_year,
            name_on_card: paymentOptions.payment.name,
        };
        const cardMeta = currentPaymentGatway.createCardPaymentData(infoCard);
        Object.assign(orderInfo.data, cardMeta);
    }
    else if (paymentOptions.payment_mode === 'CARD' &&
        paymentOptions.payment.card_reference) {
        const cardMeta = currentPaymentGatway.createCardPaymentData(paymentOptions.payment);
        Object.assign(orderInfo.data, cardMeta);
    }
    return orderInfo;
}
//# sourceMappingURL=payment.js.map
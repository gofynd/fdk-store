import { isRunningOnClient } from "./utils";
export const FPI_EVENTS = {
    LOG_IN: {
        eventName: 'user.login',
        payloadCreator: (result, param, store) => {
            var _a;
            let user = result.payload.user;
            return {
                user_id: (user === null || user === void 0 ? void 0 : user.user_id) || (user === null || user === void 0 ? void 0 : user._id),
                gender: user === null || user === void 0 ? void 0 : user.gender,
                email: user === null || user === void 0 ? void 0 : user.emails,
                phone_number: (_a = user === null || user === void 0 ? void 0 : user.phone_numbers) === null || _a === void 0 ? void 0 : _a.phone,
            };
        }
    },
    LOG_OUT: {
        eventName: 'user.logout',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b;
            let user = store.auth.user_data.user;
            return {
                user_id: oldStore === null || oldStore === void 0 ? void 0 : oldStore.user_id,
                phone: (_a = oldStore === null || oldStore === void 0 ? void 0 : oldStore.phone_numbers) === null || _a === void 0 ? void 0 : _a.phone,
                email: (_b = oldStore === null || oldStore === void 0 ? void 0 : oldStore.emails) === null || _b === void 0 ? void 0 : _b.email,
            };
        }
    },
    PROFILE_UPDATE: {
        eventName: 'user.update',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            return {
                gender: (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.gender,
                email: (_c = result.payload) === null || _c === void 0 ? void 0 : _c.email,
                phone_number: (_d = result.payload) === null || _d === void 0 ? void 0 : _d.mobile,
                user_id: (_f = (_e = result.payload) === null || _e === void 0 ? void 0 : _e.user) === null || _f === void 0 ? void 0 : _f._id
            };
        }
    },
    PRODUCT_LIST_VIEW: {
        eventName: 'product_list.view',
        payloadCreator: (result, param, store) => {
            var _a, _b;
            return { items: (_b = (_a = result === null || result === void 0 ? void 0 : result.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.items };
        }
    },
    COLLECTION_LIST_VIEW: {
        eventName: 'collection_list.view',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b;
            return {
                name: (_a = result.payload) === null || _a === void 0 ? void 0 : _a.name,
                slug: (_b = result.payload) === null || _b === void 0 ? void 0 : _b.slug
            };
        }
    },
    PRODUCT_LIST_CLICK: {
        eventName: 'product_list.click',
        payloadCreator: (store) => {
            return store;
        }
    },
    PRODUCT_FILTER: {
        eventName: 'product_list.filter',
        payloadCreator: (store) => {
            return store;
        }
    },
    PRODUCT_SORT: {
        eventName: 'product_list.sort',
        payloadCreator: (store) => {
            return store;
        }
    },
    PRODUCT_DETAIL_PAGE_VIEW: {
        eventName: 'product.view',
        payloadCreator: (result, param, store) => {
            return { product: result === null || result === void 0 ? void 0 : result.payload };
        }
    },
    NOTIFY_PRODUCT: {
        eventName: 'notify.product',
        payloadCreator: (store) => {
            return store;
        }
    },
    ADD_TO_COMPARE: {
        eventName: 'compare.add',
        payloadCreator: (store) => {
            return store;
        }
    },
    REMOVE_FROM_COMPARE: {
        eventName: 'compare.remove',
        payloadCreator: (store) => {
            return store;
        }
    },
    ADD_TO_WISHLIST: {
        eventName: 'wishlist.add',
        payloadCreator: (result, param, store, oldStore) => {
            let paylod = store.product.product_details;
            return paylod;
        }
    },
    REMOVE_FROM_WISHLIST: {
        eventName: 'wishlist.remove',
        payloadCreator: (result, param, store, oldStore) => {
            let paylod = store.product.product_details;
            return paylod;
        }
    },
    VIEW_CART: {
        eventName: 'cart.view',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e;
            const allProducts = (_c = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.map((item) => item === null || item === void 0 ? void 0 : item.product)) !== null && _c !== void 0 ? _c : [];
            return {
                cart_id: (_d = result.payload) === null || _d === void 0 ? void 0 : _d.id,
                products: allProducts,
                breakup_values_raw: (_e = result.payload) === null || _e === void 0 ? void 0 : _e.breakup_values
            };
        }
    },
    ADD_TO_CART: {
        eventName: 'cart.newProduct',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            const allProducts = (_d = (_c = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.map((item) => item === null || item === void 0 ? void 0 : item.product)) !== null && _d !== void 0 ? _d : [];
            return {
                cart_id: (_f = (_e = result.payload) === null || _e === void 0 ? void 0 : _e.cart) === null || _f === void 0 ? void 0 : _f.id,
                products: allProducts
            };
        }
    },
    REMOVE_FROM_CART: {
        eventName: 'cart.remove',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            const allProducts = (_d = (_c = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.map((item) => item === null || item === void 0 ? void 0 : item.product)) !== null && _d !== void 0 ? _d : [];
            return {
                cart_id: (_f = (_e = result.payload) === null || _e === void 0 ? void 0 : _e.cart) === null || _f === void 0 ? void 0 : _f.id,
                products: allProducts
            };
        }
    },
    UPDATE_CART: {
        eventName: 'cart.update',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            const allProducts = (_d = (_c = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.map((item) => item === null || item === void 0 ? void 0 : item.product)) !== null && _d !== void 0 ? _d : [];
            return {
                cart_id: (_f = (_e = result.payload) === null || _e === void 0 ? void 0 : _e.cart) === null || _f === void 0 ? void 0 : _f.id,
                products: allProducts,
                operation: "increment_quantity"
            };
        }
    },
    ORDER_CHECKOUT: {
        eventName: 'order.checkout',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const allProducts = (_d = (_c = (_b = (_a = store.cart) === null || _a === void 0 ? void 0 : _a.cart_items) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.map((item) => item === null || item === void 0 ? void 0 : item.product)) !== null && _d !== void 0 ? _d : [];
            return {
                cart_id: (_f = (_e = store.cart) === null || _e === void 0 ? void 0 : _e.cart_items) === null || _f === void 0 ? void 0 : _f.cart_id,
                products: allProducts,
                breakup_values: (_h = (_g = store.cart) === null || _g === void 0 ? void 0 : _g.cart_items) === null || _h === void 0 ? void 0 : _h.breakup_values
            };
        }
    },
    ADD_PAYMENT_INFORMATION: {
        eventName: 'order.payment_information',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return {
                value: (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.breakup_values) === null || _b === void 0 ? void 0 : _b.display.filter((value) => value.display === 'Total')[0].value,
                coupon: {
                    coupon_code: (_e = (_d = (_c = result.payload) === null || _c === void 0 ? void 0 : _c.breakup_values) === null || _d === void 0 ? void 0 : _d.coupon) === null || _e === void 0 ? void 0 : _e.code,
                },
                payment: { payment_type: param === null || param === void 0 ? void 0 : param.payment_mode },
                delivery_charges: (_f = result.payload) === null || _f === void 0 ? void 0 : _f.delivery_charges,
                cart: { cart_id: (_g = result.payload) === null || _g === void 0 ? void 0 : _g.id },
            };
        }
    },
    ADD_ADDRESS_INFORMATION: {
        eventName: 'order.address_information',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return {
                value: (_c = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.breakup_values) === null || _b === void 0 ? void 0 : _b.raw) === null || _c === void 0 ? void 0 : _c.total,
                coupon: {
                    coupon_code: (_f = (_e = (_d = result.payload) === null || _d === void 0 ? void 0 : _d.breakup_values) === null || _e === void 0 ? void 0 : _e.coupon) === null || _f === void 0 ? void 0 : _f.code,
                },
                cart: { cart_id: (_g = result.payload) === null || _g === void 0 ? void 0 : _g.id },
            };
        }
    },
    ORDER_PROCESSED: {
        eventName: 'order.processed',
        payloadCreator: (result, param, store, oldStore) => {
            var _a;
            let res = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.order;
            return res;
        }
    },
    ORDER_TRACKING_VIEW: {
        eventName: 'order_tracking.view',
        payloadCreator: (store) => {
            return store;
        }
    },
    ORDER_INITIALCHECKOUT: {
        eventName: 'order.initialCheckout',
        payloadCreator: (store) => {
            return store;
        }
    },
    REFUND_SUCCESS: {
        eventName: 'refund.success',
        payloadCreator: (store) => {
            return store;
        }
    },
    SEARCH_PRODUCTS: {
        eventName: 'search.products',
        payloadCreator: (store) => {
            return store;
        }
    },
    PINCODE_SERVICEABILITY: {
        eventName: 'pincode.serviceablility',
        payloadCreator: (store) => {
            return store;
        }
    },
    NAVIGATION: {
        eventName: 'root.navigation',
        payloadCreator: (store) => {
            return store;
        }
    }
};
export function emitFPIEvent(event, params, result, oldStore, eventEmitter) {
    var _a, _b, _c, _d;
    if (!(event === null || event === void 0 ? void 0 : event.eventName) || !(event === null || event === void 0 ? void 0 : event.payloadCreator)) {
        return;
    }
    if (isRunningOnClient()) {
        const { eventName, payloadCreator } = event;
        const storeSnapshot = (_d = (_c = (_b = (_a = window.fpi) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b.getState) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : {};
        const eventPayload = typeof payloadCreator === 'function' ? payloadCreator(result, params, storeSnapshot, oldStore) : payloadCreator;
        try {
            if (typeof eventEmitter === 'function') {
                eventEmitter(eventName, eventPayload);
            }
            defaultFPIEmit(eventName, eventPayload);
        }
        catch (error) {
            console.error('Error Occured in Event : ', error);
        }
    }
}
export function defaultFPIEmit(eventName, payload) {
    var _a, _b;
    if (isRunningOnClient()) {
        try {
            (_b = (_a = window.FPI.event) === null || _a === void 0 ? void 0 : _a.emit) === null || _b === void 0 ? void 0 : _b.call(_a, eventName, payload);
        }
        catch (error) {
            console.error('Error Occured in Event : ', error);
        }
    }
}
//# sourceMappingURL=FPI-events.js.map
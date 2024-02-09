import { isRunningOnClient } from "./utils";
export const FPI_EVENTS = {
    LOG_IN: {
        eventName: 'user.login',
        payloadCreator: (store) => {
            return store;
        }
    },
    LOG_OUT: {
        eventName: 'user.logout',
        payloadCreator: (store) => {
            return store;
        }
    },
    PROFILE_UPDATE: {
        eventName: 'user.update',
        payloadCreator: (store) => {
            return store;
        }
    },
    PRODUCT_LIST_VIEW: {
        eventName: 'product_list.view',
        payloadCreator: (store) => {
            return store;
        }
    },
    COLLECTION_LIST_VIEW: {
        eventName: 'collection_list.view',
        payloadCreator: (store) => {
            return store;
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
        payloadCreator: (store) => {
            return store;
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
        payloadCreator: (store) => {
            return store;
        }
    },
    REMOVE_FROM_WISHLIST: {
        eventName: 'wishlist.remove',
        payloadCreator: (store) => {
            return store;
        }
    },
    VIEW_CART: {
        eventName: 'cart.view',
        payloadCreator: (store) => {
            return store;
        }
    },
    ADD_TO_CART: {
        eventName: 'cart.newProduct',
        payloadCreator: (store) => {
            return store;
        }
    },
    REMOVE_FROM_CART: {
        eventName: 'cart.remove',
        payloadCreator: (store) => {
            return store;
        }
    },
    UPDATE_CART: {
        eventName: 'cart.update',
        payloadCreator: (store) => {
            return store;
        }
    },
    ORDER_CHECKOUT: {
        eventName: 'order.checkout',
        payloadCreator: (store) => {
            return store;
        }
    },
    ADD_PAYMENT_INFORMATION: {
        eventName: 'order.payment_information',
        payloadCreator: (store) => {
            return store;
        }
    },
    ADD_ADDRESS_INFORMATION: {
        eventName: 'order.address_information',
        payloadCreator: (store) => {
            return store;
        }
    },
    ORDER_PROCESSED: {
        eventName: 'order.processed',
        payloadCreator: (store) => {
            return store;
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
export function emitFPIEvent(eventName, payloadCreator, eventEmitter) {
    var _a, _b, _c, _d;
    if (isRunningOnClient()) {
        const storeSnapshot = (_d = (_c = (_b = (_a = window.fpi) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b.getState) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : {};
        const eventPayload = typeof payloadCreator === 'function' ? payloadCreator(storeSnapshot) : payloadCreator;
        try {
            eventEmitter(eventName, eventPayload);
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
//# sourceMappingURL=FPI-event.js.map
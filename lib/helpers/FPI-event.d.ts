import type ApplicationStore from "../store";
import { eventEmitterFunction } from "../types";
declare global {
    interface Window {
        FPI: {
            event: {
                emit: (eventName: string, payload: any) => undefined;
            };
        };
        fpi: ApplicationStore;
    }
}
export type EventMap = {
    eventName: string;
    payloadCreator: (state: any) => any;
};
export declare const FPI_EVENTS: {
    LOG_IN: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    LOG_OUT: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    PROFILE_UPDATE: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    PRODUCT_LIST_VIEW: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    COLLECTION_LIST_VIEW: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    PRODUCT_LIST_CLICK: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    PRODUCT_FILTER: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    PRODUCT_SORT: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    PRODUCT_DETAIL_PAGE_VIEW: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    NOTIFY_PRODUCT: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ADD_TO_COMPARE: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    REMOVE_FROM_COMPARE: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ADD_TO_WISHLIST: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    REMOVE_FROM_WISHLIST: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    VIEW_CART: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ADD_TO_CART: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    REMOVE_FROM_CART: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    UPDATE_CART: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ORDER_CHECKOUT: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ADD_PAYMENT_INFORMATION: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ADD_ADDRESS_INFORMATION: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ORDER_PROCESSED: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ORDER_TRACKING_VIEW: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    ORDER_INITIALCHECKOUT: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    REFUND_SUCCESS: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    SEARCH_PRODUCTS: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    PINCODE_SERVICEABILITY: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
    NAVIGATION: {
        eventName: string;
        payloadCreator: (store: any) => any;
    };
};
export declare function emitFPIEvent(eventName: string, payloadCreator: Function | object, eventEmitter: eventEmitterFunction): void;
export declare function defaultFPIEmit(eventName: string, payload: any): void;

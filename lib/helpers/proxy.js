var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { emitFPIEvent, FPI_EVENTS } from "./FPI-events";
import { isRunningOnClient } from "./utils";
const FunctionEventMap = {
    catalog: {
        fetchProductListing: {
            successEvent: FPI_EVENTS.PRODUCT_LIST_VIEW,
        },
        fetchProductListingMeta: {
            successEvent: FPI_EVENTS.PRODUCT_DETAIL_PAGE_VIEW,
        },
        getCollectionDetailBySlug: {
            successEvent: FPI_EVENTS.COLLECTION_LIST_VIEW,
        },
        followById: {
            successEvent: FPI_EVENTS.ADD_TO_WISHLIST,
        },
        unfollowById: {
            successEvent: FPI_EVENTS.REMOVE_FROM_WISHLIST,
        },
        fetchProductBySlug: {
            successEvent: FPI_EVENTS.PRODUCT_DETAIL_PAGE_VIEW,
        }
    },
    auth: {
        loginWithAppleIOS: {
            successEvent: FPI_EVENTS.LOG_IN,
        },
        signInUserWithPassword: {
            successEvent: FPI_EVENTS.LOG_IN,
        },
        sendOtp: {
            successEvent: FPI_EVENTS.LOG_IN,
        },
        facebookLogin: {
            successEvent: FPI_EVENTS.LOG_IN,
        },
        googleLogin: {
            successEvent: FPI_EVENTS.LOG_IN,
        },
        signOutUser: {
            successEvent: FPI_EVENTS.LOG_OUT,
        },
        updateProfile: {
            successEvent: FPI_EVENTS.PROFILE_UPDATE
        }
    },
    address: {
        getAddresses: {
            successEvent: FPI_EVENTS.ORDER_CHECKOUT
        }
    },
    cart: {
        getCartItems: {
            successEvent: FPI_EVENTS.VIEW_CART,
        },
        addCartItem: {
            successEvent: FPI_EVENTS.ADD_TO_CART,
        },
        removeCartItem: {
            successEvent: FPI_EVENTS.REMOVE_FROM_CART,
        },
        updateCartItems: {
            successEvent: FPI_EVENTS.UPDATE_CART,
        },
    },
    payment: {
        confirmPayment: {
            successEvent: FPI_EVENTS.ADD_PAYMENT_INFORMATION
        },
        confirmPaymentAddress: {
            successEvent: FPI_EVENTS.ADD_ADDRESS_INFORMATION,
        }
    },
    order: {
        getOrderById: {
            successEvent: FPI_EVENTS.ORDER_PROCESSED
        }
    }
};
export function createCacheProxy(moduleName, instance, eventEmitter) {
    const proxied = new Proxy(instance, {
        get(target, prop) {
            var _a, _b;
            const targetFunc = target[prop.toString()];
            if (targetFunc && typeof targetFunc === 'function') {
                const mappedEventMeta = (_b = (_a = FunctionEventMap[moduleName]) === null || _a === void 0 ? void 0 : _a[prop.toString()]) !== null && _b !== void 0 ? _b : {};
                const expectedNumberOfArguments = (moduleName === 'custom' && prop.toString() === 'setValue') ? 2 : 1;
                return function proxified(...params) {
                    var _a, _b, _c, _d, _e, _f;
                    return __awaiter(this, void 0, void 0, function* () {
                        const overrideOptions = params.length > expectedNumberOfArguments ? params.pop() : {};
                        const meta = Object.assign(Object.assign({}, mappedEventMeta), overrideOptions);
                        let result;
                        let oldStore;
                        if (isRunningOnClient()) {
                            oldStore = (_d = (_c = (_b = (_a = window.fpi) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b.getState) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : {};
                        }
                        try {
                            const executionPromise = targetFunc.apply(target, params);
                            if (executionPromise instanceof Promise) {
                                result = yield executionPromise;
                            }
                            if (((_e = result === null || result === void 0 ? void 0 : result.meta) === null || _e === void 0 ? void 0 : _e.requestStatus) === 'fulfilled') {
                                emitFPIEvent(meta.successEvent, params, result, oldStore, eventEmitter);
                            }
                            if (((_f = result === null || result === void 0 ? void 0 : result.meta) === null || _f === void 0 ? void 0 : _f.requestStatus) === "rejected") {
                                emitFPIEvent(meta.failEvent, params, result, oldStore, eventEmitter);
                            }
                            return result;
                        }
                        catch (error) {
                            console.error('ProxyObjectError : ' + error.message);
                        }
                    });
                };
            }
        },
    });
    return proxied;
}
//# sourceMappingURL=proxy.js.map
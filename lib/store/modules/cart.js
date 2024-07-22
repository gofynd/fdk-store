var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addItems, addToCartBuyNow, applyCoupon, checkoutCart, fetchBuyNowCartItems, getCartShareLink, getCoupons, getLadderOffers, getPromotionOffers, getShipments, getCart, getItemCount, removeCartItem, removeCoupon, selectAddress, selectPaymentMode, updateCartItems, updateCartMeta, updateCheckoutMode, updateRewardPoints, updateCart, applyRewardPoints, getCartSharedItems, updateCartWithSharedItems } from "../slices/cart";
export class CartModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getCartItems(params) {
        let buyNow = params.buyNow;
        if (buyNow) {
            return this.dispatch(fetchBuyNowCartItems(params));
        }
        else {
            return this.dispatch(getCart(params));
        }
    }
    addCartItem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (params.buyNow) {
                return this.dispatch(addToCartBuyNow(params));
            }
            else {
                return this.dispatch(addItems(params));
            }
        });
    }
    updateCartItems(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateCartItems(params));
        });
    }
    applyRewardPoints(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(applyRewardPoints(params));
        });
    }
    updateCart(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateCart(params));
        });
    }
    selectPaymentMode(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(selectPaymentMode(params));
        });
    }
    checkoutCart(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(checkoutCart(params));
        });
    }
    addItems(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(addItems(params));
        });
    }
    removeCartItem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(removeCartItem(params));
        });
    }
    updateCheckoutMode(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateCheckoutMode(params));
        });
    }
    getItemCount(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getItemCount(params));
        });
    }
    getCoupons(params) {
        return this.dispatch(getCoupons(params));
    }
    applyCoupon(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(applyCoupon(params));
        });
    }
    removeCoupon(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(removeCoupon(params));
        });
    }
    updateRewardPoints(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateRewardPoints(params));
        });
    }
    updateCartMeta(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateCartMeta(params));
        });
    }
    getShipments(params) {
        return this.dispatch(getShipments(params));
    }
    selectAddress(params) {
        return this.dispatch(selectAddress(params));
    }
    getLadderOffers(params) {
        return this.dispatch(getLadderOffers(params));
    }
    getPromotionOffers(params) {
        return this.dispatch(getPromotionOffers(params));
    }
    getCartSharedItems(params) {
        return this.dispatch(getCartSharedItems(params));
    }
    updateCartWithSharedItems(params) {
        return this.dispatch(updateCartWithSharedItems(params));
    }
    getCartShareLink(params) {
        return this.dispatch(getCartShareLink(params));
    }
}
//# sourceMappingURL=cart.js.map
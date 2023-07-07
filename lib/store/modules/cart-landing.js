var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addToCart, addToCartBuyNow, applyCoupon, checkoutCart, fetchBuyNowCartItems, fetchCartItems, fetchCartShareLink, fetchCoupons, fetchLadderOffers, fetchPromotionOffers, fetchShipments, getCartItemsCount, removeCartItem, removeCoupon, selectAddress, selectPaymentMode, updateCartItems, updateCartMeta, updateCheckoutMode, updateRewardPoints } from "../slices/cart-landing";
class CartLandingModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
        // this.updateCartItems = this.updateCartItems.bind(this);
        // this.removeCartItem = this.removeCartItem.bind(this);
    }
    getCartItems(params = {}) {
        let buyNow = params.buyNow;
        if (buyNow) {
            return this.dispatch(fetchBuyNowCartItems(params));
        }
        else {
            this.dispatch(fetchBuyNowCartItems(null));
            return this.dispatch(fetchCartItems(params));
        }
    }
    addCartItem(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (params.buyNow) {
                return this.dispatch(addToCartBuyNow(params));
            }
            else {
                return this.dispatch(addToCart(params));
            }
        });
    }
    updateCartItems(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateCartItems(params));
        });
    }
    selectPaymentMode(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(selectPaymentMode(params));
        });
    }
    checkoutCart(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(checkoutCart(params));
        });
    }
    removeCartItem(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(removeCartItem(params));
        });
    }
    updateCheckoutMode(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(updateCheckoutMode(params));
        });
    }
    getCartItemsCount(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(getCartItemsCount(params));
        });
    }
    fetchCoupons(params = {}) {
        this.dispatch(fetchCoupons(params));
    }
    applyCoupon(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dispatch(applyCoupon(params));
        });
    }
    removeCoupon(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dispatch(removeCoupon(params));
        });
    }
    updateRewardPoints(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dispatch(updateRewardPoints(params));
        });
    }
    updateCartMeta(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dispatch(updateCartMeta(params));
        });
    }
    getShipments(params = {}) {
        return this.dispatch(fetchShipments(params));
    }
    selectAddress(params = {}) {
        try {
            return this.dispatch(selectAddress(params));
        }
        catch (error) {
            return error;
        }
    }
    fetchLadderOffers(params = {}) {
        return this.dispatch(fetchLadderOffers(params));
    }
    fetchPromotionOffers(params = {}) {
        return this.dispatch(fetchPromotionOffers(params));
    }
    fetchCartShareLink(params = {}) {
        return this.dispatch(fetchCartShareLink(params));
    }
}
export default CartLandingModule;
//# sourceMappingURL=cart-landing.js.map
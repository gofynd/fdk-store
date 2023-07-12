import type { ThunkActionDispatch } from "redux-thunk";
export declare class CartModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getCartItems(params?: any): any;
    addCartItem(params?: any): Promise<any>;
    updateCartItems(params?: any): Promise<any>;
    selectPaymentMode(params?: any): Promise<any>;
    checkoutCart(params?: any): Promise<any>;
    removeCartItem(params?: any): Promise<any>;
    updateCheckoutMode(params?: any): Promise<any>;
    getCartItemsCount(params?: any): Promise<any>;
    fetchCoupons(params?: any): void;
    applyCoupon(params?: any): Promise<void>;
    removeCoupon(params?: any): Promise<void>;
    updateRewardPoints(params?: any): Promise<void>;
    updateCartMeta(params?: any): Promise<void>;
    getShipments(params?: any): any;
    selectAddress(params?: any): any;
    fetchLadderOffers(params?: any): any;
    fetchPromotionOffers(params?: any): any;
    fetchCartShareLink(params?: any): any;
}

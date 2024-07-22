import { AddCartDetailResponse, CartCheckoutResponse, CartDetailResponse, CartItemCountResponse, CartMetaResponse, CartShipmentsResponse, GetCouponResponse, GetShareCartLinkResponse, LadderPriceOffers, PromotionOffersResponse, SharedCartResponse, UpdateCartDetailResponse } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { ApplyCouponParam, ApplyRewardPointsParam, CheckoutCartParam, GetCartParam, GetCartSharedItemsParam, GetCartShareLinkParam, GetCouponsParam, GetItemCountParam, GetLadderOffersParam, GetPromotionOffersParam, GetShipmentsParam, RemoveCouponParam, SelectAddressParam, SelectPaymentModeParam, UpdateCartMetaParam, UpdateCartParam, UpdateCartWithSharedItemsParam } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { AddToCartParams, ApplyRewardPointsParams, CheckoutMode, UpdateCartItemsParams, UpdateCheckoutModeParams } from "../../types/cart";
export declare class CartModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getCartItems(params: GetCartParam): AsyncThunkPromise<CartDetailResponse>;
    addCartItem(params: AddToCartParams): AsyncThunkPromise<AddCartDetailResponse>;
    updateCartItems(params: UpdateCartItemsParams): AsyncThunkPromise<UpdateCartDetailResponse>;
    applyRewardPoints(params: ApplyRewardPointsParam): AsyncThunkPromise<CartDetailResponse>;
    updateCart(params: UpdateCartParam): AsyncThunkPromise<UpdateCartDetailResponse>;
    selectPaymentMode(params: SelectPaymentModeParam): AsyncThunkPromise<CartDetailResponse>;
    checkoutCart(params: CheckoutCartParam): AsyncThunkPromise<CartCheckoutResponse>;
    addItems(params: AddToCartParams): AsyncThunkPromise<AddCartDetailResponse>;
    removeCartItem(params: UpdateCartItemsParams): AsyncThunkPromise<UpdateCartDetailResponse>;
    updateCheckoutMode(params: UpdateCheckoutModeParams): AsyncThunkPromise<CheckoutMode>;
    getItemCount(params: GetItemCountParam): AsyncThunkPromise<CartItemCountResponse>;
    getCoupons(params: GetCouponsParam): AsyncThunkPromise<GetCouponResponse>;
    applyCoupon(params: ApplyCouponParam): AsyncThunkPromise<CartDetailResponse>;
    removeCoupon(params: RemoveCouponParam): AsyncThunkPromise<CartDetailResponse>;
    updateRewardPoints(params: ApplyRewardPointsParams): AsyncThunkPromise<CartDetailResponse>;
    updateCartMeta(params: UpdateCartMetaParam): AsyncThunkPromise<CartMetaResponse>;
    getShipments(params: GetShipmentsParam): AsyncThunkPromise<CartShipmentsResponse>;
    selectAddress(params: SelectAddressParam): AsyncThunkPromise<CartDetailResponse>;
    getLadderOffers(params: GetLadderOffersParam): AsyncThunkPromise<LadderPriceOffers>;
    getPromotionOffers(params: GetPromotionOffersParam): AsyncThunkPromise<PromotionOffersResponse>;
    getCartSharedItems(params: GetCartSharedItemsParam): AsyncThunkPromise<SharedCartResponse>;
    updateCartWithSharedItems(params: UpdateCartWithSharedItemsParam): AsyncThunkPromise<SharedCartResponse>;
    getCartShareLink(params: GetCartShareLinkParam): AsyncThunkPromise<GetShareCartLinkResponse>;
}

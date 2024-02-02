import { AddCartDetailResponse, CartCheckoutResponse, CartDetailResponse, CartItemCountResponse, CartMetaResponse, CartShipmentsResponse, GetCouponResponse, GetShareCartLinkResponse, LadderPriceOffers, PromotionOffersResponse, UpdateCartDetailResponse } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { ApplyCouponParam, CheckoutCartParam, GetCartParam, GetCartShareLinkParam, GetCouponsParam, GetItemCountParam, GetLadderOffersParam, GetPromotionOffersParam, GetShipmentsParam, RemoveCouponParam, SelectAddressParam, SelectPaymentModeParam, UpdateCartMetaParam } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { AddToCartParams, ApplyRewardPointsParams, CheckoutMode, UpdateCartItemsParams, UpdateCheckoutModeParams } from "../../types/cart";
export declare class CartModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    getCartItems(params: GetCartParam): AsyncThunkPromise<CartDetailResponse>;
    addCartItem(params: AddToCartParams): AsyncThunkPromise<AddCartDetailResponse>;
    updateCartItems(params: UpdateCartItemsParams): AsyncThunkPromise<UpdateCartDetailResponse>;
    selectPaymentMode(params: SelectPaymentModeParam): AsyncThunkPromise<CartDetailResponse>;
    checkoutCart(params: CheckoutCartParam): AsyncThunkPromise<CartCheckoutResponse>;
    removeCartItem(params: UpdateCartItemsParams): AsyncThunkPromise<UpdateCartDetailResponse>;
    updateCheckoutMode(params: UpdateCheckoutModeParams): AsyncThunkPromise<CheckoutMode>;
    getCartItemsCount(params: GetItemCountParam): AsyncThunkPromise<CartItemCountResponse>;
    fetchCoupons(params: GetCouponsParam): AsyncThunkPromise<GetCouponResponse>;
    applyCoupon(params: ApplyCouponParam): AsyncThunkPromise<CartDetailResponse>;
    removeCoupon(params: RemoveCouponParam): AsyncThunkPromise<CartDetailResponse>;
    updateRewardPoints(params: ApplyRewardPointsParams): AsyncThunkPromise<CartDetailResponse>;
    updateCartMeta(params: UpdateCartMetaParam): AsyncThunkPromise<CartMetaResponse>;
    getShipments(params: GetShipmentsParam): AsyncThunkPromise<CartShipmentsResponse>;
    selectAddress(params: SelectAddressParam): AsyncThunkPromise<CartDetailResponse>;
    fetchLadderOffers(params: GetLadderOffersParam): AsyncThunkPromise<LadderPriceOffers>;
    fetchPromotionOffers(params: GetPromotionOffersParam): AsyncThunkPromise<PromotionOffersResponse>;
    fetchCartShareLink(params: GetCartShareLinkParam): AsyncThunkPromise<GetShareCartLinkResponse>;
}

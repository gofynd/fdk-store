import { SerializedError } from '@reduxjs/toolkit';
import type ApplicationClient from '@gofynd/fdk-client-javascript/sdk/application/ApplicationClient';
import { AddCartDetailResponse, BulkPriceResponse, CartCheckoutResponse, CartDetailResponse, CartItemCountResponse, CartMetaResponse, CartShipmentsResponse, GetCouponResponse, GetShareCartLinkResponse, LadderPriceOffers, PromotionOffersResponse, UpdateCartDetailResponse } from '@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel';
import { ApplyCouponParam, ApplyRewardPointsParam, CheckoutCartParam, GetBulkDiscountOffersParam, GetCartParam, GetCartShareLinkParam, GetCouponsParam, GetItemCountParam, GetLadderOffersParam, GetPromotionOffersParam, GetShipmentsParam, RemoveCouponParam, SelectAddressParam, SelectPaymentModeParam, UpdateCartMetaParam, UpdateCartParam } from '@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator';
import { AddToCartParams, ApplyRewardPointsParams, CartSlice, CheckoutMode, UpdateCartItemsParams, UpdateCheckoutModeParams } from '../../types/cart';
export declare const getCart: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, GetCartParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBuyNowCartItems: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, GetCartParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getShipments: import("@reduxjs/toolkit").AsyncThunk<CartShipmentsResponse, GetShipmentsParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getLadderOffers: import("@reduxjs/toolkit").AsyncThunk<LadderPriceOffers, GetLadderOffersParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getPromotionOffers: import("@reduxjs/toolkit").AsyncThunk<PromotionOffersResponse, GetPromotionOffersParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getCoupons: import("@reduxjs/toolkit").AsyncThunk<GetCouponResponse, GetCouponsParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getCartShareLink: import("@reduxjs/toolkit").AsyncThunk<GetShareCartLinkResponse, GetCartShareLinkParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const selectPaymentMode: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, SelectPaymentModeParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const checkoutCart: import("@reduxjs/toolkit").AsyncThunk<CartCheckoutResponse, CheckoutCartParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addToCartBuyNow: import("@reduxjs/toolkit").AsyncThunk<AddCartDetailResponse, AddToCartParams, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addItems: import("@reduxjs/toolkit").AsyncThunk<AddCartDetailResponse, AddToCartParams, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getItemCount: import("@reduxjs/toolkit").AsyncThunk<CartItemCountResponse, GetItemCountParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateCart: import("@reduxjs/toolkit").AsyncThunk<UpdateCartDetailResponse, UpdateCartParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateCartItems: import("@reduxjs/toolkit").AsyncThunk<UpdateCartDetailResponse, UpdateCartItemsParams, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const removeCartItem: import("@reduxjs/toolkit").AsyncThunk<UpdateCartDetailResponse, UpdateCartParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateCheckoutMode: import("@reduxjs/toolkit").AsyncThunk<CheckoutMode, UpdateCheckoutModeParams, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const applyCoupon: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, ApplyCouponParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const removeCoupon: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, RemoveCouponParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const applyRewardPoints: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, ApplyRewardPointsParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateRewardPoints: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, ApplyRewardPointsParams, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getBulkDiscountOffers: import("@reduxjs/toolkit").AsyncThunk<BulkPriceResponse, GetBulkDiscountOffersParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const selectAddress: import("@reduxjs/toolkit").AsyncThunk<CartDetailResponse, SelectAddressParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateCartMeta: import("@reduxjs/toolkit").AsyncThunk<CartMetaResponse, UpdateCartMetaParam, {
    extra: {
        sdk: ApplicationClient;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const cartReducer: import("redux").Reducer<CartSlice, import("redux").AnyAction>;

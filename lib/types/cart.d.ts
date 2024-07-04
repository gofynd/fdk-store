import type { AddProductCart, BulkPriceResponse, CartDetailResponse, CartItemCountResponse, CartShipmentsResponse, GetShareCartLinkResponse, LadderPriceOffers, PromotionOffersResponse, UpdateProductCart } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { AddItemsParam, ApplyRewardPointsParam, UpdateCartMetaParam } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import { GetCouponResponse } from "@gofynd/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
type Mode = 'self' | 'others';
export type CheckoutMode = {
    mode: Mode;
};
export type CartItems = Partial<CartDetailResponse & CommonAsyncLoadingTypes>;
export type BuyNowCartItems = Partial<CartDetailResponse & CommonAsyncLoadingTypes>;
export type Shipments = Partial<CartShipmentsResponse & CommonAsyncLoadingTypes>;
export type LadderOffers = Partial<LadderPriceOffers & CommonAsyncLoadingTypes>;
export type PromotionOffers = Partial<PromotionOffersResponse & CommonAsyncLoadingTypes>;
export type Coupons = Partial<GetCouponResponse & CommonAsyncLoadingTypes>;
export type CartShareLink = Partial<GetShareCartLinkResponse & CommonAsyncLoadingTypes>;
export type CheckoutModeSlice = Partial<CheckoutMode & CommonAsyncLoadingTypes>;
export type CartItemsCount = Partial<CartItemCountResponse & CommonAsyncLoadingTypes>;
export type BulkPrice = Partial<BulkPriceResponse & CommonAsyncLoadingTypes>;
export type CartSlice = {
    cart_items: CartItems;
    buy_now_cart_items: BuyNowCartItems;
    bulk_price: BulkPrice;
    checkout_mode: CheckoutModeSlice;
    cart_items_count: CartItemsCount;
    shipments: Shipments;
    ladder_offers: LadderOffers;
    promotion_offers: PromotionOffers;
    coupons: Coupons;
    cart_share_link: CartShareLink;
};
export type AddToCartParams = {
    items: AddProductCart[];
} & Omit<AddItemsParam, 'body'>;
export type UpdateCartItemsParams = {
    id?: string;
    items: UpdateProductCart[];
};
export type UpdateCheckoutModeParams = {
    checkout_mode: Mode;
} & Omit<UpdateCartMetaParam, 'body'>;
export type ApplyRewardPointsParams = {
    points: boolean;
} & Omit<ApplyRewardPointsParam, 'body'>;
export {};

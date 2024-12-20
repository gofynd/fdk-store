var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cartItemsCount } from '../../helpers/utils';
import { STORE_KEYS } from '../enums/keys';
const initialState = {
    cart_items: {},
    buy_now_cart_items: {},
    checkout_mode: {
        mode: 'self',
    },
    bulk_price: {},
    cart_items_count: {},
    shipments: {},
    ladder_offers: {},
    promotion_offers: {},
    share_cart_items: {},
    coupons: {},
    cart_share_link: {},
};
export const getCart = createAsyncThunk('cartItems', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getCart(params);
}));
export const fetchBuyNowCartItems = createAsyncThunk('buyNowCartItems', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getCart(params);
}));
export const getShipments = createAsyncThunk('shipments', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getShipments(params);
}));
export const getLadderOffers = createAsyncThunk('getLadderOffers', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getLadderOffers(params);
}));
export const getPromotionOffers = createAsyncThunk('prmotionOffers', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getPromotionOffers(params);
}));
export const getCartSharedItems = createAsyncThunk('getCartSharedItems', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getCartSharedItems(params);
}));
export const updateCartWithSharedItems = createAsyncThunk('updateCartWithSharedItems', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.updateCartWithSharedItems(params);
}));
export const getCoupons = createAsyncThunk('coupons', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getCoupons(params);
}));
export const getCartShareLink = createAsyncThunk('cartShareLink', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getCartShareLink(params);
}));
export const selectPaymentMode = createAsyncThunk('selectPaymentMode', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.selectPaymentMode(params);
}));
export const checkoutCart = createAsyncThunk('checkoutCart', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.checkoutCart(params);
}));
export const addToCartBuyNow = createAsyncThunk('addToCartBuyNow', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    let { items } = params, rest = __rest(params, ["items"]);
    let body = {
        items
    };
    const response = yield sdk.cart.addItems(Object.assign({ body }, rest));
    return response;
}));
export const addItems = createAsyncThunk('addItems', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    let { items } = params, rest = __rest(params, ["items"]);
    let body = {
        items
    };
    const response = yield sdk.cart.addItems(Object.assign({ body }, rest));
    return response;
}));
export const getItemCount = createAsyncThunk('getItemCount', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getItemCount(params);
}));
export const updateCart = createAsyncThunk('updateCart', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.updateCart(params);
}));
export const updateCartItems = createAsyncThunk('updateCartItems', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    let updatedBody = {
        operation: 'update_item',
        items: params.items,
    };
    const option = {
        i: true,
        b: true,
        id: (params.id ? params.id : '')
    };
    const response = yield sdk.cart.updateCart(Object.assign({ body: updatedBody }, option));
    return response;
}));
export const removeCartItem = createAsyncThunk('removeCartItem', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    let updatedBody = {
        operation: 'remove_item',
        items: params.items,
    };
    const option = { i: true, b: true, id: (params.id ? params.id : '') };
    const response = yield sdk.cart.updateCart(Object.assign({ body: updatedBody }, option));
    return response;
}));
export const updateCheckoutMode = createAsyncThunk('updateCheckoutMode', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const { body } = params, rest = __rest(params, ["body"]);
    const { checkout_mode } = body;
    yield sdk.cart.updateCartMeta(Object.assign({ body }, rest));
    return { mode: checkout_mode };
}));
export const applyCoupon = createAsyncThunk('applyCoupon', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.applyCoupon(params);
}));
export const removeCoupon = createAsyncThunk('removeCoupon', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.removeCoupon(params);
}));
export const applyRewardPoints = createAsyncThunk('applyRewardPoints', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.applyRewardPoints(params);
}));
export const updateRewardPoints = createAsyncThunk('updateRewardPoints', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    const { points } = params, rest = __rest(params, ["points"]);
    let body = {
        points: points
    };
    return sdk.cart.applyRewardPoints(Object.assign({ body }, rest));
}));
export const getBulkDiscountOffers = createAsyncThunk('getBulkPrice', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getBulkDiscountOffers(params);
}));
export const selectAddress = createAsyncThunk('selectAddress', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.selectAddress(params);
}));
export const updateCartMeta = createAsyncThunk('updateCartMeta', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.updateCartMeta(params);
}));
const cartSlice = createSlice({
    name: STORE_KEYS.CART,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get cart items
            .addCase(getCart.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(getCart.fulfilled, (state, action) => {
            ;
            state.cart_items = action.payload;
            state.checkout_mode = {
                mode: action.payload.checkout_mode,
            };
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(getCart.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            // get buy now cart items
            .addCase(fetchBuyNowCartItems.pending, (state) => {
            state.buy_now_cart_items.loading = true;
        })
            .addCase(fetchBuyNowCartItems.fulfilled, (state, action) => {
            state.buy_now_cart_items = action.payload;
            state.buy_now_cart_items.error = null;
            state.buy_now_cart_items.loading = false;
        })
            .addCase(fetchBuyNowCartItems.rejected, (state, action) => {
            state.buy_now_cart_items = {};
            state.buy_now_cart_items.error = action.error;
            state.buy_now_cart_items.loading = false;
        })
            // get shipments
            .addCase(getShipments.pending, (state) => {
            state.shipments.loading = true;
        })
            .addCase(getShipments.fulfilled, (state, action) => {
            state.shipments = action.payload;
            state.shipments.error = null;
            state.shipments.loading = false;
        })
            .addCase(getShipments.rejected, (state, action) => {
            state.shipments = {};
            state.shipments.error = action.error;
            state.shipments.loading = false;
        })
            //ladder offers
            .addCase(getLadderOffers.pending, (state) => {
            state.ladder_offers.loading = true;
        })
            .addCase(getLadderOffers.fulfilled, (state, action) => {
            state.ladder_offers = action.payload;
            state.ladder_offers.error = null;
            state.ladder_offers.loading = false;
        })
            .addCase(getLadderOffers.rejected, (state, action) => {
            state.ladder_offers = {};
            state.ladder_offers.error = action.error;
            state.ladder_offers.loading = false;
        })
            //promotion offers
            .addCase(getPromotionOffers.pending, (state) => {
            state.promotion_offers.loading = true;
        })
            .addCase(getPromotionOffers.fulfilled, (state, action) => {
            state.promotion_offers = action.payload;
            state.promotion_offers.error = null;
            state.promotion_offers.loading = false;
        })
            .addCase(getPromotionOffers.rejected, (state, action) => {
            state.promotion_offers = {};
            state.promotion_offers.error = action.error;
            state.promotion_offers.loading = false;
        })
            //bulk price
            .addCase(getBulkDiscountOffers.pending, (state) => {
            state.bulk_price.loading = true;
        })
            .addCase(getBulkDiscountOffers.fulfilled, (state, action) => {
            state.bulk_price = action.payload;
            state.bulk_price.error = null;
            state.bulk_price.loading = false;
        })
            .addCase(getBulkDiscountOffers.rejected, (state, action) => {
            state.bulk_price = {};
            state.bulk_price.error = action.error;
            state.bulk_price.loading = false;
        })
            //coupons
            .addCase(getCoupons.pending, (state) => {
            state.coupons.loading = true;
        })
            .addCase(getCoupons.fulfilled, (state, action) => {
            state.coupons = action.payload;
            state.coupons.error = null;
            state.coupons.loading = false;
        })
            .addCase(getCoupons.rejected, (state, action) => {
            state.coupons = {};
            state.coupons.error = action.error;
            state.coupons.loading = false;
        })
            //cart share link
            .addCase(getCartShareLink.pending, (state) => {
            state.cart_share_link.loading = true;
        })
            .addCase(getCartShareLink.fulfilled, (state, action) => {
            state.cart_share_link = action.payload;
            state.cart_share_link.error = null;
            state.cart_share_link.loading = false;
        })
            .addCase(getCartShareLink.rejected, (state, action) => {
            state.cart_share_link = {};
            state.cart_share_link.error = action.error;
            state.cart_share_link.loading = false;
        })
            //cart share link
            .addCase(addToCartBuyNow.pending, (state) => {
            state.buy_now_cart_items.loading = true;
        })
            .addCase(addToCartBuyNow.fulfilled, (state, action) => {
            state.buy_now_cart_items = action.payload.cart || {};
            state.cart_items_count.user_cart_items_count = cartItemsCount(action.payload.cart || {});
            state.buy_now_cart_items.error = null;
            state.buy_now_cart_items.loading = false;
        })
            .addCase(addToCartBuyNow.rejected, (state, action) => {
            state.buy_now_cart_items = {};
            state.buy_now_cart_items.error = action.error;
            state.buy_now_cart_items.loading = false;
        })
            //cart share link
            .addCase(addItems.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(addItems.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload.cart || {};
            state.checkout_mode = {
                mode: (_a = action.payload.cart) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(addItems.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //cart share link
            .addCase(updateCartItems.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(updateCartItems.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload.cart || {};
            state.checkout_mode = {
                mode: (_a = action.payload.cart) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items_count.user_cart_items_count = cartItemsCount(action.payload.cart || {});
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(updateCartItems.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //updateCart
            .addCase(updateCart.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(updateCart.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload.cart || {};
            state.cart_items_count.user_cart_items_count = cartItemsCount(action.payload.cart || {});
            state.checkout_mode = {
                mode: (_a = action.payload.cart) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(updateCart.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //cart share link
            .addCase(removeCartItem.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(removeCartItem.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload.cart || {};
            state.checkout_mode = {
                mode: (_a = action.payload.cart) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items_count.user_cart_items_count = cartItemsCount(action.payload.cart || {});
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(removeCartItem.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //cart share link
            .addCase(updateCheckoutMode.pending, (state) => {
            state.checkout_mode.loading = true;
        })
            .addCase(updateCheckoutMode.fulfilled, (state, action) => {
            state.cart_items.checkout_mode = action.payload.mode;
            state.checkout_mode = action.payload;
            state.checkout_mode.error = null;
            state.checkout_mode.loading = false;
        })
            .addCase(updateCheckoutMode.rejected, (state, action) => {
            state.checkout_mode = {};
            state.checkout_mode.error = action.error;
            state.checkout_mode.loading = false;
        })
            //cart share link
            .addCase(getItemCount.pending, (state) => {
            state.cart_items_count.loading = true;
        })
            .addCase(getItemCount.fulfilled, (state, action) => {
            state.cart_items_count.user_cart_items_count = action.payload.user_cart_items_count;
            state.cart_items_count.error = null;
            state.cart_items_count.loading = false;
        })
            .addCase(getItemCount.rejected, (state, action) => {
            state.cart_items_count = {
                user_cart_items_count: 0
            };
            state.cart_items_count.error = action.error;
            state.cart_items_count.loading = false;
        })
            //cart share link
            .addCase(applyCoupon.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(applyCoupon.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload;
            state.checkout_mode = {
                mode: (_a = action.payload) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(applyCoupon.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //cart share link
            .addCase(removeCoupon.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(removeCoupon.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload;
            state.checkout_mode = {
                mode: (_a = action.payload) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(removeCoupon.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //cart share link
            .addCase(updateRewardPoints.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(updateRewardPoints.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload;
            state.checkout_mode = {
                mode: (_a = action.payload) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(updateRewardPoints.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //cart share link
            .addCase(applyRewardPoints.pending, (state) => {
            state.cart_items.loading = true;
        })
            .addCase(applyRewardPoints.fulfilled, (state, action) => {
            var _a;
            state.cart_items = action.payload;
            state.checkout_mode = {
                mode: (_a = action.payload) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(applyRewardPoints.rejected, (state, action) => {
            state.cart_items = {};
            state.cart_items.error = action.error;
            state.cart_items.loading = false;
        })
            //getCartSharedItems
            .addCase(getCartSharedItems.pending, (state) => {
            state.share_cart_items.loading = true;
        })
            .addCase(getCartSharedItems.fulfilled, (state, action) => {
            var _a;
            state.share_cart_items = action.payload;
            state.checkout_mode = {
                mode: (_a = action.payload.cart) === null || _a === void 0 ? void 0 : _a.checkout_mode,
            };
            state.share_cart_items.error = null;
            state.share_cart_items.loading = false;
        })
            .addCase(getCartSharedItems.rejected, (state, action) => {
            state.share_cart_items = {};
            state.share_cart_items.error = action.error;
            state.share_cart_items.loading = false;
        });
    },
});
export const cartReducer = cartSlice.reducer;
export const {} = cartSlice.actions;
//# sourceMappingURL=cart.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STORE_KEYS } from '../enums/keys';
const initialState = {
    product_details: {},
    product_variants: {},
    product_meta: {},
    bulk_price: {},
    similar_compare_products: {},
    frequently_compared_products: {},
    product_price_by_slug: {},
    product_seller_by_slug: {},
    follow_by_id: {},
    follower_count_by_id: {},
    followed_listing: {},
    fetch_follow_ids: {},
    unfollow_by_id: {}
};
export const fetchProductDetails = createAsyncThunk('getProductDetails', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductDetailBySlug(params);
}));
export const fetchProductVariants = createAsyncThunk('getProductVariants', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    if (params == null) {
        return {};
    }
    return sdk.catalog.getProductVariantsBySlug(params);
}));
export const fetchProductMeta = createAsyncThunk('getProductMeta', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductSizesBySlug(params);
}));
export const followById = createAsyncThunk('followById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.followById(params);
}));
export const fetchFollowerCountById = createAsyncThunk('fetchFollowerCountById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getFollowerCountById(params);
}));
export const fetchFollowedListing = createAsyncThunk('fetchFollowedListing', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getFollowedListing(params);
}));
export const fetchFollowIds = createAsyncThunk('fetchFollowIds', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getFollowIds(params);
}));
export const unfollowById = createAsyncThunk('unfollowById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.unfollowById(params);
}));
export const fetchBulkPrice = createAsyncThunk('getBulkPrice', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.cart.getBulkDiscountOffers(params);
}));
export const fetchSimilarCompareProduct = createAsyncThunk('getSimilarCompareProduct', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getSimilarComparisonProductBySlug(params);
}));
export const fetchFrequentlyComparedProducts = createAsyncThunk('getFrequentlyComparedProducts', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getComparedFrequentlyProductBySlug(params);
}));
export const fetchProductPriceBySlug = createAsyncThunk('getProductPriceBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductPriceBySlug(params);
}));
export const getProductBundlesBySlug = createAsyncThunk('getProductPriceBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductBundlesBySlug(params);
}));
export const fetchProductSellerBySlug = createAsyncThunk('getProductSellerBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductSellersBySlug(params);
}));
const pdpSlice = createSlice({
    name: STORE_KEYS.PRODUCT_DETAILS,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //product details
            .addCase(fetchProductDetails.pending, (state) => {
            state.product_details.loading = true;
        })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.product_details = action.payload;
            state.product_details.error = null;
            state.product_details.loading = false;
        })
            .addCase(fetchProductDetails.rejected, (state, action) => {
            state.product_details = {};
            state.product_details.error = action.error;
            state.product_details.loading = false;
        })
            // product variants
            .addCase(fetchProductVariants.pending, (state) => {
            state.product_variants.loading = true;
        })
            .addCase(fetchProductVariants.fulfilled, (state, action) => {
            state.product_variants = action.payload;
            state.product_variants.error = null;
            state.product_variants.loading = false;
        })
            .addCase(fetchProductVariants.rejected, (state, action) => {
            state.product_variants = {};
            state.product_variants.error = action.error;
            state.product_variants.loading = false;
        })
            //product meta
            .addCase(fetchProductMeta.pending, (state) => {
            state.product_meta.loading = true;
        })
            .addCase(fetchProductMeta.fulfilled, (state, action) => {
            state.product_meta = action.payload;
            state.product_meta.error = null;
            state.product_meta.loading = false;
        })
            .addCase(fetchProductMeta.rejected, (state, action) => {
            state.product_meta = {};
            state.product_meta.error = action.error;
            state.product_meta.loading = false;
        })
            //followById
            .addCase(followById.pending, (state) => {
            state.follow_by_id.loading = true;
        })
            .addCase(followById.fulfilled, (state, action) => {
            state.follow_by_id = action.payload;
            state.follow_by_id.error = null;
            state.follow_by_id.loading = false;
        })
            .addCase(followById.rejected, (state, action) => {
            state.follow_by_id = {};
            state.follow_by_id.error = action.error;
            state.follow_by_id.loading = false;
        })
            //fetchFollowerCountById
            .addCase(fetchFollowerCountById.pending, (state) => {
            state.follower_count_by_id.loading = true;
        })
            .addCase(fetchFollowerCountById.fulfilled, (state, action) => {
            state.follower_count_by_id = action.payload;
            state.follower_count_by_id.error = null;
            state.follower_count_by_id.loading = false;
        })
            .addCase(fetchFollowerCountById.rejected, (state, action) => {
            state.follower_count_by_id = {};
            state.follower_count_by_id.error = action.error;
            state.follower_count_by_id.loading = false;
        })
            //fetchFollowedListing
            .addCase(fetchFollowedListing.pending, (state) => {
            state.followed_listing.loading = true;
        })
            .addCase(fetchFollowedListing.fulfilled, (state, action) => {
            state.followed_listing = action.payload;
            state.followed_listing.error = null;
            state.followed_listing.loading = false;
        })
            .addCase(fetchFollowedListing.rejected, (state, action) => {
            state.followed_listing = {};
            state.followed_listing.error = action.error;
            state.followed_listing.loading = false;
        })
            //fetchFollowIds
            .addCase(fetchFollowIds.pending, (state) => {
            state.fetch_follow_ids.loading = true;
        })
            .addCase(fetchFollowIds.fulfilled, (state, action) => {
            state.fetch_follow_ids = action.payload;
            state.fetch_follow_ids.error = null;
            state.fetch_follow_ids.loading = false;
        })
            .addCase(fetchFollowIds.rejected, (state, action) => {
            state.fetch_follow_ids = {};
            state.fetch_follow_ids.error = action.error;
            state.fetch_follow_ids.loading = false;
        })
            //unfollowById
            .addCase(unfollowById.pending, (state) => {
            state.unfollow_by_id.loading = true;
        })
            .addCase(unfollowById.fulfilled, (state, action) => {
            state.unfollow_by_id = action.payload;
            state.unfollow_by_id.error = null;
            state.unfollow_by_id.loading = false;
        })
            .addCase(unfollowById.rejected, (state, action) => {
            state.unfollow_by_id = {};
            state.unfollow_by_id.error = action.error;
            state.unfollow_by_id.loading = false;
        })
            //bulk price
            .addCase(fetchBulkPrice.pending, (state) => {
            state.bulk_price.loading = true;
        })
            .addCase(fetchBulkPrice.fulfilled, (state, action) => {
            state.bulk_price = action.payload;
            state.bulk_price.error = null;
            state.bulk_price.loading = false;
        })
            .addCase(fetchBulkPrice.rejected, (state, action) => {
            state.bulk_price = {};
            state.bulk_price.error = action.error;
            state.bulk_price.loading = false;
        })
            //similar_compare_products
            .addCase(fetchSimilarCompareProduct.pending, (state) => {
            state.similar_compare_products.loading = true;
        })
            .addCase(fetchSimilarCompareProduct.fulfilled, (state, action) => {
            state.similar_compare_products = action.payload;
            state.similar_compare_products.error = null;
            state.similar_compare_products.loading = false;
        })
            .addCase(fetchSimilarCompareProduct.rejected, (state, action) => {
            state.similar_compare_products = {};
            state.similar_compare_products.error = action.error;
            state.similar_compare_products.loading = false;
        })
            //frequently_compared_products
            .addCase(fetchFrequentlyComparedProducts.pending, (state) => {
            state.frequently_compared_products.loading = true;
        })
            .addCase(fetchFrequentlyComparedProducts.fulfilled, (state, action) => {
            state.frequently_compared_products = action.payload;
            state.frequently_compared_products.error = null;
            state.frequently_compared_products.loading = false;
        })
            .addCase(fetchFrequentlyComparedProducts.rejected, (state, action) => {
            state.frequently_compared_products = {};
            state.frequently_compared_products.error = action.error;
            state.frequently_compared_products.loading = false;
        })
            //product price by slug
            .addCase(fetchProductPriceBySlug.pending, (state) => {
            state.product_price_by_slug.loading = true;
        })
            .addCase(fetchProductPriceBySlug.fulfilled, (state, action) => {
            state.product_price_by_slug = action.payload;
            state.product_price_by_slug.error = null;
            state.product_price_by_slug.loading = false;
        })
            .addCase(fetchProductPriceBySlug.rejected, (state, action) => {
            state.product_price_by_slug = {};
            state.product_price_by_slug.error = action.error;
            state.product_price_by_slug.loading = false;
        })
            //Product Seller By Slug
            .addCase(fetchProductSellerBySlug.pending, (state) => {
            state.product_seller_by_slug.loading = true;
        })
            .addCase(fetchProductSellerBySlug.fulfilled, (state, action) => {
            let currentItems = state.product_seller_by_slug.items || [];
            let items;
            if (Number(action.payload.page.current) > 1) {
                items = currentItems.concat(action.payload.items || []);
            }
            else {
                items = action.payload.items;
            }
            state.product_seller_by_slug.items = items;
            state.product_seller_by_slug.error = null;
            state.product_seller_by_slug.loading = false;
        })
            .addCase(fetchProductSellerBySlug.rejected, (state, action) => {
            state.product_seller_by_slug = {};
            state.product_seller_by_slug.error = action.error;
            state.product_seller_by_slug.loading = false;
        });
    },
});
export const pdpReducer = pdpSlice.reducer;
//# sourceMappingURL=product.js.map
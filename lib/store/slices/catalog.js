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
import { parseFilters } from '../../helpers/utils';
const initialState = {
    product_details: {},
    product_variants: {},
    product_meta: {},
    similar_compare_products: {},
    frequently_compared_products: {},
    product_price_by_slug: {},
    product_seller_by_slug: {},
    follow_by_id: {},
    follower_count_by_id: {},
    followed_listing: {},
    fetch_follow_ids: {},
    unfollow_by_id: {},
    product_lists: {},
    product_listing_meta: {},
    category_listing_meta: {},
    collection_listing_meta: {},
    brand_listing_meta: {},
    search_results: {},
    product_search_results: {},
    location_details: {},
    stores_details: {},
    instock_locations: {},
};
export const getProductDetailBySlug = createAsyncThunk('getProductDetails', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductDetailBySlug(params);
}));
export const getProductVariantsBySlug = createAsyncThunk('getProductVariants', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    if (params == null) {
        return {};
    }
    return sdk.catalog.getProductVariantsBySlug(params);
}));
export const getStores = createAsyncThunk('getStores', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getStores(params);
}));
export const getInStockLocations = createAsyncThunk('getInStockLocations', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getInStockLocations(params);
}));
export const getLocationDetailsById = createAsyncThunk('getLocationDetailsById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getLocationDetailsById(params);
}));
export const getProductSizesBySlug = createAsyncThunk('getProductMeta', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductSizesBySlug(params);
}));
export const followById = createAsyncThunk('followById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.followById(params);
}));
export const getFollowerCountById = createAsyncThunk('getFollowerCountById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getFollowerCountById(params);
}));
export const getFollowedListing = createAsyncThunk('getFollowedListing', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getFollowedListing(params);
}));
export const getFollowIds = createAsyncThunk('getFollowIds', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getFollowIds(params);
}));
export const unfollowById = createAsyncThunk('unfollowById', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.unfollowById(params);
}));
export const getSimilarComparisonProductBySlug = createAsyncThunk('getSimilarCompareProduct', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getSimilarComparisonProductBySlug(params);
}));
export const getProductComparisonBySlugs = createAsyncThunk('getProductComparisonBySlugs', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductComparisonBySlugs(params);
}));
export const getComparedFrequentlyProductBySlug = createAsyncThunk('getFrequentlyComparedProducts', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getComparedFrequentlyProductBySlug(params);
}));
export const getProductPriceBySlug = createAsyncThunk('getProductPriceBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductPriceBySlug(params);
}));
export const getProductBundlesBySlug = createAsyncThunk('getProductPriceBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductBundlesBySlug(params);
}));
export const getProductSellersBySlug = createAsyncThunk('getProductSellerBySlug', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductSellersBySlug(params);
}));
export const fetchProducts = createAsyncThunk('getProducts', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    let f;
    if (options.f) {
        f = parseFilters(options.f);
    }
    let params = Object.assign(Object.assign(Object.assign({ sortOn: options.sortOn }, (options.q ? { q: options.q } : {})), { pageId: options.pageId ? options.pageId : '*', pageSize: options.pageSize ? options.pageSize : 12 }), (f ? { f } : {}));
    if (options.pageNo) {
        params = Object.assign(Object.assign({}, params), { pageId: '*', pageType: 'number', pageNo: options.pageNo });
    }
    if (options.filters && options.filters === false) {
        params.filters = false;
    }
    const data = yield sdk.catalog.getProducts(params);
    return {
        data,
        options
    };
}));
export const getSearchResults = createAsyncThunk('searchResults', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getSearchResults(params);
}));
export const getProducts = createAsyncThunk('productSearchResults', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProducts(params);
}));
export const getCategoryDetailBySlug = createAsyncThunk('getCategoryDetailBySlug', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCategoryDetailBySlug(options);
}));
export const getBrandDetailBySlug = createAsyncThunk('getBrandDetailBySlug', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getBrandDetailBySlug(options);
}));
export const getCollectionDetailBySlug = createAsyncThunk('getCollectionDetailBySlug', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCollectionDetailBySlug(options);
}));
const pdpSlice = createSlice({
    name: STORE_KEYS.CATALOG,
    initialState,
    reducers: {
        resetProductListingMeta(state) {
            state.product_listing_meta = {
                error: null,
            };
        }
    },
    extraReducers: (builder) => {
        builder
            //product details
            .addCase(getProductDetailBySlug.pending, (state) => {
            state.product_details.loading = true;
        })
            .addCase(getProductDetailBySlug.fulfilled, (state, action) => {
            state.product_details = action.payload;
            state.product_details.error = null;
            state.product_details.loading = false;
        })
            .addCase(getProductDetailBySlug.rejected, (state, action) => {
            state.product_details = {};
            state.product_details.error = action.error;
            state.product_details.loading = false;
        })
            // product variants
            .addCase(getProductVariantsBySlug.pending, (state) => {
            state.product_variants.loading = true;
        })
            .addCase(getProductVariantsBySlug.fulfilled, (state, action) => {
            state.product_variants = action.payload;
            state.product_variants.error = null;
            state.product_variants.loading = false;
        })
            .addCase(getProductVariantsBySlug.rejected, (state, action) => {
            state.product_variants = {};
            state.product_variants.error = action.error;
            state.product_variants.loading = false;
        })
            //product meta
            .addCase(getProductSizesBySlug.pending, (state) => {
            state.product_meta.loading = true;
        })
            .addCase(getProductSizesBySlug.fulfilled, (state, action) => {
            state.product_meta = action.payload;
            state.product_meta.error = null;
            state.product_meta.loading = false;
        })
            .addCase(getProductSizesBySlug.rejected, (state, action) => {
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
            //getFollowerCountById
            .addCase(getFollowerCountById.pending, (state) => {
            state.follower_count_by_id.loading = true;
        })
            .addCase(getFollowerCountById.fulfilled, (state, action) => {
            state.follower_count_by_id = action.payload;
            state.follower_count_by_id.error = null;
            state.follower_count_by_id.loading = false;
        })
            .addCase(getFollowerCountById.rejected, (state, action) => {
            state.follower_count_by_id = {};
            state.follower_count_by_id.error = action.error;
            state.follower_count_by_id.loading = false;
        })
            //getFollowedListing
            .addCase(getFollowedListing.pending, (state) => {
            state.followed_listing.loading = true;
        })
            .addCase(getFollowedListing.fulfilled, (state, action) => {
            state.followed_listing = action.payload;
            state.followed_listing.error = null;
            state.followed_listing.loading = false;
        })
            .addCase(getFollowedListing.rejected, (state, action) => {
            state.followed_listing = {};
            state.followed_listing.error = action.error;
            state.followed_listing.loading = false;
        })
            //getFollowIds
            .addCase(getFollowIds.pending, (state) => {
            state.fetch_follow_ids.loading = true;
        })
            .addCase(getFollowIds.fulfilled, (state, action) => {
            state.fetch_follow_ids = action.payload;
            state.fetch_follow_ids.error = null;
            state.fetch_follow_ids.loading = false;
        })
            .addCase(getFollowIds.rejected, (state, action) => {
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
            //similar_compare_products
            .addCase(getSimilarComparisonProductBySlug.pending, (state) => {
            state.similar_compare_products.loading = true;
        })
            .addCase(getSimilarComparisonProductBySlug.fulfilled, (state, action) => {
            state.similar_compare_products = action.payload;
            state.similar_compare_products.error = null;
            state.similar_compare_products.loading = false;
        })
            .addCase(getSimilarComparisonProductBySlug.rejected, (state, action) => {
            state.similar_compare_products = {};
            state.similar_compare_products.error = action.error;
            state.similar_compare_products.loading = false;
        })
            //getProductComparisonBySlugs
            .addCase(getProductComparisonBySlugs.pending, (state) => {
            state.similar_compare_products.loading = true;
        })
            .addCase(getProductComparisonBySlugs.fulfilled, (state, action) => {
            state.similar_compare_products = action.payload;
            state.similar_compare_products.error = null;
            state.similar_compare_products.loading = false;
        })
            .addCase(getProductComparisonBySlugs.rejected, (state, action) => {
            state.similar_compare_products = {};
            state.similar_compare_products.error = action.error;
            state.similar_compare_products.loading = false;
        })
            //frequently_compared_products
            .addCase(getComparedFrequentlyProductBySlug.pending, (state) => {
            state.frequently_compared_products.loading = true;
        })
            .addCase(getComparedFrequentlyProductBySlug.fulfilled, (state, action) => {
            state.frequently_compared_products = action.payload;
            state.frequently_compared_products.error = null;
            state.frequently_compared_products.loading = false;
        })
            .addCase(getComparedFrequentlyProductBySlug.rejected, (state, action) => {
            state.frequently_compared_products = {};
            state.frequently_compared_products.error = action.error;
            state.frequently_compared_products.loading = false;
        })
            //product price by slug
            .addCase(getProductPriceBySlug.pending, (state) => {
            state.product_price_by_slug.loading = true;
        })
            .addCase(getProductPriceBySlug.fulfilled, (state, action) => {
            state.product_price_by_slug = action.payload;
            state.product_price_by_slug.error = null;
            state.product_price_by_slug.loading = false;
        })
            .addCase(getProductPriceBySlug.rejected, (state, action) => {
            state.product_price_by_slug = {};
            state.product_price_by_slug.error = action.error;
            state.product_price_by_slug.loading = false;
        })
            //Product Seller By Slug
            .addCase(getProductSellersBySlug.pending, (state) => {
            state.product_seller_by_slug.loading = true;
        })
            .addCase(getProductSellersBySlug.fulfilled, (state, action) => {
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
            .addCase(getProductSellersBySlug.rejected, (state, action) => {
            state.product_seller_by_slug = {};
            state.product_seller_by_slug.error = action.error;
            state.product_seller_by_slug.loading = false;
        })
            //get products list
            .addCase(fetchProducts.pending, (state) => {
            state.product_lists = Object.assign({}, state.product_lists);
            state.product_lists.loading = true;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
            const { data, options } = action.payload;
            state.product_lists = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProducts.rejected, (state, action) => {
            state.product_lists = Object.assign({}, state.product_lists);
            state.product_lists.error = action.error;
            state.product_lists.loading = false;
        })
            // getStores variants
            .addCase(getStores.pending, (state) => {
            state.stores_details.loading = true;
        })
            .addCase(getStores.fulfilled, (state, action) => {
            state.stores_details = action.payload;
            state.stores_details.error = null;
            state.stores_details.loading = false;
        })
            .addCase(getStores.rejected, (state, action) => {
            state.stores_details = {};
            state.stores_details.error = action.error;
            state.stores_details.loading = false;
        })
            // getInStockLocations variants
            .addCase(getInStockLocations.pending, (state) => {
            state.instock_locations.loading = true;
        })
            .addCase(getInStockLocations.fulfilled, (state, action) => {
            state.instock_locations = action.payload;
            state.instock_locations.error = null;
            state.instock_locations.loading = false;
        })
            .addCase(getInStockLocations.rejected, (state, action) => {
            state.instock_locations = {};
            state.instock_locations.error = action.error;
            state.instock_locations.loading = false;
        })
            // getInStockLocations variants
            .addCase(getLocationDetailsById.pending, (state) => {
            state.location_details.loading = true;
        })
            .addCase(getLocationDetailsById.fulfilled, (state, action) => {
            state.location_details = action.payload;
            state.location_details.error = null;
            state.location_details.loading = false;
        })
            .addCase(getLocationDetailsById.rejected, (state, action) => {
            state.location_details = {};
            state.location_details.error = action.error;
            state.location_details.loading = false;
        })
            //search results
            .addCase(getSearchResults.pending, (state) => {
            state.search_results.loading = true;
        })
            .addCase(getSearchResults.fulfilled, (state, action) => {
            state.search_results = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getSearchResults.rejected, (state, action) => {
            state.search_results = {};
            state.search_results.error = action.error;
            state.search_results.loading = false;
        })
            //product search results
            .addCase(getProducts.pending, (state) => {
            state.product_search_results.loading = true;
        })
            .addCase(getProducts.fulfilled, (state, action) => {
            state.product_search_results = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getProducts.rejected, (state, action) => {
            state.product_search_results = {};
            state.product_search_results.error = action.error;
            state.product_search_results.loading = false;
        })
            // getCategoryDetailBySlug results
            .addCase(getCategoryDetailBySlug.pending, (state) => {
            state.category_listing_meta.loading = true;
        })
            .addCase(getCategoryDetailBySlug.fulfilled, (state, action) => {
            state.category_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getCategoryDetailBySlug.rejected, (state, action) => {
            state.category_listing_meta = {};
            state.category_listing_meta.error = action.error;
            state.category_listing_meta.loading = false;
        })
            // getBrandDetailBySlug results
            .addCase(getBrandDetailBySlug.pending, (state) => {
            state.brand_listing_meta.loading = true;
        })
            .addCase(getBrandDetailBySlug.fulfilled, (state, action) => {
            state.brand_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getBrandDetailBySlug.rejected, (state, action) => {
            state.brand_listing_meta = {};
            state.brand_listing_meta.error = action.error;
            state.brand_listing_meta.loading = false;
        })
            // getCollectionDetailBySlug results
            .addCase(getCollectionDetailBySlug.pending, (state) => {
            state.collection_listing_meta.loading = true;
        })
            .addCase(getCollectionDetailBySlug.fulfilled, (state, action) => {
            state.collection_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getCollectionDetailBySlug.rejected, (state, action) => {
            state.collection_listing_meta = {};
            state.collection_listing_meta.error = action.error;
            state.collection_listing_meta.loading = false;
        });
    },
});
export const pdpReducer = pdpSlice.reducer;
export const { resetProductListingMeta } = pdpSlice.actions;
//# sourceMappingURL=catalog.js.map
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
            if (action.payload.page > 1) {
                items = currentItems.concat(action.payload.items);
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
//# sourceMappingURL=product-description.js.map
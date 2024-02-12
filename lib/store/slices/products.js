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
import { parseFilters } from '../../helpers/utils';
const initialState = {
    product_lists: {},
    product_listing_meta: {},
    category_listing_meta: {},
    collection_listing_meta: {},
    brand_listing_meta: {},
    search_results: {},
    product_search_results: {}
};
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
export const fetchSuggestions = createAsyncThunk('searchResults', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getSearchResults(params);
}));
export const fetchProductSuggestions = createAsyncThunk('productSearchResults', (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProducts(params);
}));
export const fetchProductListingMeta = createAsyncThunk('fetchProductListingMeta', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getProductDetailBySlug(options);
}));
export const fetchCategoryListingMeta = createAsyncThunk('fetchCategoryListingMeta', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCategoryDetailBySlug(options);
}));
export const fetchBrandListingMeta = createAsyncThunk('fetchBrandListingMeta', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getBrandDetailBySlug(options);
}));
export const fetchCollectionListingMeta = createAsyncThunk('fetchCollectionListingMeta', (options, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    const { sdk } = extra;
    return sdk.catalog.getCollectionDetailBySlug(options);
}));
const plpSlice = createSlice({
    name: 'products',
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
            //search results
            .addCase(fetchSuggestions.pending, (state) => {
            state.search_results.loading = true;
        })
            .addCase(fetchSuggestions.fulfilled, (state, action) => {
            state.search_results = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchSuggestions.rejected, (state, action) => {
            state.search_results = {};
            state.search_results.error = action.error;
            state.search_results.loading = false;
        })
            //product search results
            .addCase(fetchProductSuggestions.pending, (state) => {
            state.product_search_results.loading = true;
        })
            .addCase(fetchProductSuggestions.fulfilled, (state, action) => {
            state.product_search_results = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProductSuggestions.rejected, (state, action) => {
            state.product_search_results = {};
            state.product_search_results.error = action.error;
            state.product_search_results.loading = false;
        })
            // fetchProductListingMeta results
            .addCase(fetchProductListingMeta.pending, (state) => {
            state.product_listing_meta.loading = true;
        })
            .addCase(fetchProductListingMeta.fulfilled, (state, action) => {
            state.product_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProductListingMeta.rejected, (state, action) => {
            state.product_listing_meta = {};
            state.product_listing_meta.error = action.error;
            state.product_listing_meta.loading = false;
        })
            // fetchCategoryListingMeta results
            .addCase(fetchCategoryListingMeta.pending, (state) => {
            state.category_listing_meta.loading = true;
        })
            .addCase(fetchCategoryListingMeta.fulfilled, (state, action) => {
            state.category_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCategoryListingMeta.rejected, (state, action) => {
            state.category_listing_meta = {};
            state.category_listing_meta.error = action.error;
            state.category_listing_meta.loading = false;
        })
            // fetchBrandListingMeta results
            .addCase(fetchBrandListingMeta.pending, (state) => {
            state.brand_listing_meta.loading = true;
        })
            .addCase(fetchBrandListingMeta.fulfilled, (state, action) => {
            state.brand_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchBrandListingMeta.rejected, (state, action) => {
            state.brand_listing_meta = {};
            state.brand_listing_meta.error = action.error;
            state.brand_listing_meta.loading = false;
        })
            // fetchCollectionListingMeta results
            .addCase(fetchCollectionListingMeta.pending, (state) => {
            state.collection_listing_meta.loading = true;
        })
            .addCase(fetchCollectionListingMeta.fulfilled, (state, action) => {
            state.collection_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCollectionListingMeta.rejected, (state, action) => {
            state.collection_listing_meta = {};
            state.collection_listing_meta.error = action.error;
            state.collection_listing_meta.loading = false;
        });
    },
});
export const plpReducer = plpSlice.reducer;
export const { resetProductListingMeta } = plpSlice.actions;
//# sourceMappingURL=products.js.map
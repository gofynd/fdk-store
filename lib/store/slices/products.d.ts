import type { AutoCompleteResponse, BrandDetailResponse, CategoryMetaResponse, CollectionDetailResponse, ProductDetail, ProductListingResponse } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
import type { GetBrandDetailBySlugParam, GetCategoryDetailBySlugParam, GetCollectionDetailBySlugParam, GetProductDetailBySlugParam, GetSearchResultsParam } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator';
import { FetchProductsOptions, FetchProductsResponse, ProductsSlice } from '../../types/products';
export declare const fetchProducts: import("@reduxjs/toolkit").AsyncThunk<FetchProductsResponse, FetchProductsOptions, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchSuggestions: import("@reduxjs/toolkit").AsyncThunk<AutoCompleteResponse, GetSearchResultsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductSuggestions: import("@reduxjs/toolkit").AsyncThunk<ProductListingResponse, FetchProductsOptions, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductListingMeta: import("@reduxjs/toolkit").AsyncThunk<ProductDetail, GetProductDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCategoryListingMeta: import("@reduxjs/toolkit").AsyncThunk<CategoryMetaResponse, GetCategoryDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBrandListingMeta: import("@reduxjs/toolkit").AsyncThunk<BrandDetailResponse, GetBrandDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCollectionListingMeta: import("@reduxjs/toolkit").AsyncThunk<CollectionDetailResponse, GetCollectionDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const plpReducer: import("redux").Reducer<ProductsSlice, import("redux").AnyAction>;
export declare const resetProductListingMeta: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"products/resetProductListingMeta">;

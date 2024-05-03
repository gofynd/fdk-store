import { AnyAction, Reducer, SerializedError } from '@reduxjs/toolkit';
import type { AutoCompleteResponse, BrandDetailResponse, CategoryMetaResponse, CollectionDetailResponse, FollowerCountResponse, FollowIdsResponse, FollowPostResponse, GetFollowListingResponse, ProductBundle, ProductCompareResponse, ProductDetail, ProductFrequentlyComparedSimilarResponse, ProductListingResponse, ProductSizePriceResponseV3, ProductSizes, ProductSizeSellersResponseV3, ProductVariantsResponse } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
import type { FollowByIdParam, GetBrandDetailBySlugParam, GetCategoryDetailBySlugParam, GetCollectionDetailBySlugParam, GetComparedFrequentlyProductBySlugParam, GetFollowedListingParam, GetFollowerCountByIdParam, GetFollowIdsParam, GetProductBundlesBySlugParam, GetProductComparisonBySlugsParam, GetProductDetailBySlugParam, GetProductPriceBySlugParam, GetProductSellersBySlugParam, GetProductSizesBySlugParam, GetProductVariantsBySlugParam, GetSearchResultsParam, GetSimilarComparisonProductBySlugParam, UnfollowByIdParam } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator';
import { ProductSlice } from '../../types/product';
import { FetchProductsOptions, FetchProductsResponse } from '../../types/products';
export declare const getProductDetailBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductDetail, GetProductDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductListingMeta: import("@reduxjs/toolkit").AsyncThunk<ProductDetail, GetProductDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProductVariantsBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductVariantsResponse, GetProductVariantsBySlugParam | null, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProductSizesBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductSizes, GetProductSizesBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const followById: import("@reduxjs/toolkit").AsyncThunk<FollowPostResponse, FollowByIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFollowerCountById: import("@reduxjs/toolkit").AsyncThunk<FollowerCountResponse, GetFollowerCountByIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFollowedListing: import("@reduxjs/toolkit").AsyncThunk<GetFollowListingResponse, GetFollowedListingParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFollowIds: import("@reduxjs/toolkit").AsyncThunk<FollowIdsResponse, GetFollowIdsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const unfollowById: import("@reduxjs/toolkit").AsyncThunk<FollowPostResponse, UnfollowByIdParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getSimilarComparisonProductBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductCompareResponse, GetSimilarComparisonProductBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProductComparisonBySlugs: import("@reduxjs/toolkit").AsyncThunk<ProductCompareResponse, GetProductComparisonBySlugsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getComparedFrequentlyProductBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductFrequentlyComparedSimilarResponse, GetComparedFrequentlyProductBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProductPriceBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductSizePriceResponseV3, GetProductPriceBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProductBundlesBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductBundle, GetProductBundlesBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProductSellersBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductSizeSellersResponseV3, GetProductSellersBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProducts: import("@reduxjs/toolkit").AsyncThunk<FetchProductsResponse, FetchProductsOptions, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getSearchResults: import("@reduxjs/toolkit").AsyncThunk<AutoCompleteResponse, GetSearchResultsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProducts: import("@reduxjs/toolkit").AsyncThunk<ProductListingResponse, FetchProductsOptions, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getCategoryDetailBySlug: import("@reduxjs/toolkit").AsyncThunk<CategoryMetaResponse, GetCategoryDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getBrandDetailBySlug: import("@reduxjs/toolkit").AsyncThunk<BrandDetailResponse, GetBrandDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getCollectionDetailBySlug: import("@reduxjs/toolkit").AsyncThunk<CollectionDetailResponse, GetCollectionDetailBySlugParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const pdpReducer: Reducer<ProductSlice, AnyAction>;
export declare const resetProductListingMeta: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"catalog/resetProductListingMeta">;

import { AnyAction, Reducer, SerializedError } from '@reduxjs/toolkit';
import { BulkPriceResponse } from 'fdk-client-javascript/sdk/application/Cart/CartApplicationModel';
import { GetBulkDiscountOffersParam } from 'fdk-client-javascript/sdk/application/Cart/CartApplicationValidator';
import type { FollowerCountResponse, FollowIdsResponse, FollowPostResponse, GetFollowListingResponse, ProductCompareResponse, ProductDetail, ProductFrequentlyComparedSimilarResponse, ProductSizePriceResponseV3, ProductSizes, ProductSizeSellersResponseV3, ProductVariantsResponse } from 'fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
import type { FollowByIdParam, GetComparedFrequentlyProductBySlugParam, GetFollowedListingParam, GetFollowerCountByIdParam, GetFollowIdsParam, GetProductDetailBySlugParam, GetProductPriceBySlugParam, GetProductSellersBySlugParam, GetProductSizesBySlugParam, GetProductVariantsBySlugParam, GetSimilarComparisonProductBySlugParam, UnfollowByIdParam } from 'fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator';
import { ProductSlice } from '../../types/product';
export declare const fetchProductDetails: import("@reduxjs/toolkit").AsyncThunk<ProductDetail, GetProductDetailBySlugParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductVariants: import("@reduxjs/toolkit").AsyncThunk<ProductVariantsResponse, GetProductVariantsBySlugParam | null, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductMeta: import("@reduxjs/toolkit").AsyncThunk<ProductSizes, GetProductSizesBySlugParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
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
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFollowerCountById: import("@reduxjs/toolkit").AsyncThunk<FollowerCountResponse, GetFollowerCountByIdParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFollowedListing: import("@reduxjs/toolkit").AsyncThunk<GetFollowListingResponse, GetFollowedListingParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFollowIds: import("@reduxjs/toolkit").AsyncThunk<FollowIdsResponse, GetFollowIdsParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
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
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBulkPrice: import("@reduxjs/toolkit").AsyncThunk<BulkPriceResponse, GetBulkDiscountOffersParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchSimilarCompareProduct: import("@reduxjs/toolkit").AsyncThunk<ProductCompareResponse, GetSimilarComparisonProductBySlugParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFrequentlyComparedProducts: import("@reduxjs/toolkit").AsyncThunk<ProductFrequentlyComparedSimilarResponse, GetComparedFrequentlyProductBySlugParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductPriceBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductSizePriceResponseV3, GetProductPriceBySlugParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductSellerBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductSizeSellersResponseV3, GetProductSellersBySlugParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
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

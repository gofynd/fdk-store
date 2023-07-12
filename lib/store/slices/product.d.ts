import { AnyAction, Reducer, SerializedError } from '@reduxjs/toolkit';
import { ProductDetail } from 'fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
export declare const fetchProductDetails: import("@reduxjs/toolkit").AsyncThunk<ProductDetail, any, {
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
export declare const fetchProductVariants: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchProductMeta: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchBulkPrice: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchSimilarCompareProduct: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchFrequentlyComparedProducts: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchProductPriceBySlug: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchProductSellerBySlug: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const pdpReducer: Reducer<{
    product_details: any;
    product_variants: any;
    product_meta: any;
    bulk_price: any;
    similar_compare_products: any;
    frequently_compared_products: any;
    product_price_by_slug: any;
    product_seller_by_slug: any;
}, AnyAction>;

import { GetCollectionListingResponse } from 'fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
import { GetCollectionItemsBySlugParam, GetCollectionsParam } from 'fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator';
import { ProductListingResponse } from 'fdk-client-javascript/sdk/platform/Catalog/CatalogPlatformModel';
import { CollectionsSlice } from '../../types/collection';
export declare const fetchCollection: import("@reduxjs/toolkit").AsyncThunk<GetCollectionListingResponse, GetCollectionsParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCollectionItem: import("@reduxjs/toolkit").AsyncThunk<ProductListingResponse, GetCollectionItemsBySlugParam, {
    extra: {
        sdk: import("fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const collectionReducer: import("redux").Reducer<CollectionsSlice, import("redux").AnyAction>;

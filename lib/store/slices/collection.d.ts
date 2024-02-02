import { GetCollectionListingResponse } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
import { GetCollectionItemsBySlugParam, GetCollectionsParam } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator';
import { ProductListingResponse } from '@gofynd/fdk-client-javascript/sdk/platform/Catalog/CatalogPlatformModel';
import { CollectionsSlice } from '../../types/collection';
export declare const getCollections: import("@reduxjs/toolkit").AsyncThunk<GetCollectionListingResponse, GetCollectionsParam, {
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
export declare const getCollectionItemsBySlug: import("@reduxjs/toolkit").AsyncThunk<ProductListingResponse, GetCollectionItemsBySlugParam, {
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
export declare const collectionReducer: import("redux").Reducer<CollectionsSlice, import("redux").AnyAction>;

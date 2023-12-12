import { SerializedError } from '@reduxjs/toolkit';
import { BrandListingResponse } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
import { GetBrandsParam } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator';
import { BrandsSlice } from '../../types/brands';
export declare const getBrands: import("@reduxjs/toolkit").AsyncThunk<BrandListingResponse, GetBrandsParam, {
    extra: {
        sdk: import("@gofynd/fdk-client-javascript/sdk/application/ApplicationClient");
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const brandsReducer: import("redux").Reducer<BrandsSlice, import("redux").AnyAction>;

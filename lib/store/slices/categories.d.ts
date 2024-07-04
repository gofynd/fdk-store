import { CategoryListingResponse } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel';
import { GetCategoriesParam } from '@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator';
import { CategoriesSlice } from '../../types/categories';
export declare const fetchCategories: import("@reduxjs/toolkit").AsyncThunk<CategoryListingResponse, GetCategoriesParam, {
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
export declare const categoriesReducer: import("redux").Reducer<CategoriesSlice, import("redux").AnyAction>;

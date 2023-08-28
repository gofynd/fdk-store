import { GetCollectionListingResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { ProductListingResponse } from "fdk-client-javascript/sdk/platform/Catalog/CatalogPlatformModel";
import { CommonAsyncLoadingTypes } from ".";
export type Collections = Partial<GetCollectionListingResponse & CommonAsyncLoadingTypes>;
export type Item = Partial<ProductListingResponse & CommonAsyncLoadingTypes>;
export type CollectionsSlice = {
    collection: Collections;
    item: Item;
};

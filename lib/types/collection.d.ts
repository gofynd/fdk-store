import { GetCollectionListingResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type Collections = Partial<GetCollectionListingResponse & CommonAsyncLoadingTypes>;
export type CollectionsSlice = {
    collection: Collections;
};

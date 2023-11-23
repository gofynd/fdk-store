import { BrandListingResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type BrandsType = Partial<BrandListingResponse & CommonAsyncLoadingTypes>;
export type BrandsSlice = {
    brands: BrandsType;
};

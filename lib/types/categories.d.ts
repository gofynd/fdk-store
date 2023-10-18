import { CategoryListingResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type Categories = Partial<CategoryListingResponse & CommonAsyncLoadingTypes>;
export type CategoriesSlice = {
    categories: Categories;
};

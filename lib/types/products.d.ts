import type { AutoCompleteResponse, ProductDetails, ProductListingResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type FetchProductsOptions = {
    f: any;
    q: any;
    pageId: any;
    pageSize: number;
    sortOn: string;
    pageNo: any;
    filters: any;
};
export type FetchProductsResponse = {
    data: ProductListingResponse;
    options: FetchProductsOptions;
};
export type ProductLists = Partial<ProductListingResponse & CommonAsyncLoadingTypes>;
export type ProductDetail = Partial<ProductDetails & CommonAsyncLoadingTypes>;
export type SearchResults = Partial<AutoCompleteResponse & CommonAsyncLoadingTypes>;
export type ProductsSlice = {
    product_lists: ProductLists;
    product_listing_meta: ProductDetail;
    search_results: SearchResults;
    product_search_results: ProductLists;
};

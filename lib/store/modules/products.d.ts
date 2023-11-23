import type { AutoCompleteResponse, BrandDetailResponse, CategoryMetaResponse, CollectionDetailResponse, ProductDetail, ProductListingResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import type { GetBrandDetailBySlugParam, GetCategoryDetailBySlugParam, GetCollectionDetailBySlugParam, GetProductDetailBySlugParam, GetSearchResultsParam } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import type { FetchProductsOptions, FetchProductsResponse } from "../../types/products";
export declare class ProductsModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    /**
     * Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
     */
    fetchProductListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    fetchProductListingMeta(options: GetProductDetailBySlugParam): AsyncThunkPromise<ProductDetail>;
    fetchCategoryListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    fetchCategoryListingMeta(options: GetCategoryDetailBySlugParam): AsyncThunkPromise<CategoryMetaResponse>;
    fetchBrandListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    fetchBrandListingMeta(options: GetBrandDetailBySlugParam): AsyncThunkPromise<BrandDetailResponse>;
    fetchCollectionListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    fetchCollectionListingMeta(options: GetCollectionDetailBySlugParam): AsyncThunkPromise<CollectionDetailResponse>;
    resetProductListingMeta(): AsyncThunkPromise<{}>;
    fetchSuggestions(params: GetSearchResultsParam): AsyncThunkPromise<AutoCompleteResponse>;
    fetchProductSuggestions(params: FetchProductsOptions): AsyncThunkPromise<ProductListingResponse>;
}

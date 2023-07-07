import type { AutoCompleteResponse, BrandDetailResponse, CategoryMetaResponse, CollectionDetailResponse, ProductDetail } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import type { GetBrandDetailBySlugParam, GetCategoryDetailBySlugParam, GetCollectionDetailBySlugParam, GetProductDetailBySlugParam, GetSearchResultsParam } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import type { FetchProductsOptions, FetchProductsResponse } from "../../types/products";
declare class ProductListingModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    /**
     * Fetch products from API
     *
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
    fetchProductSuggestions(params: FetchProductsOptions): any;
}
export default ProductListingModule;

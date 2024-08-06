import type { ApplicationStoreListing, AutoCompleteResponse, BrandDetailResponse, CategoryMetaResponse, CollectionDetailResponse, FollowerCountResponse, FollowIdsResponse, FollowPostResponse, GetFollowListingResponse, ProductBundle, ProductCompareResponse, ProductDetail, ProductFrequentlyComparedSimilarResponse, ProductListingResponse, ProductSizePriceResponseV3, ProductSizes, ProductSizeSellersResponseV3, ProductVariantsResponse, StoreDetails, StoreListingResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { FollowByIdParam, GetBrandDetailBySlugParam, GetCategoryDetailBySlugParam, GetCollectionDetailBySlugParam, GetComparedFrequentlyProductBySlugParam, GetFollowedListingParam, GetFollowerCountByIdParam, GetFollowIdsParam, GetInStockLocationsParam, GetLocationDetailsByIdParam, GetProductBundlesBySlugParam, GetProductComparisonBySlugsParam, GetProductDetailBySlugParam, GetProductPriceBySlugParam, GetProductSellersBySlugParam, GetProductSizesBySlugParam, GetProductVariantsBySlugParam, GetSearchResultsParam, GetSimilarComparisonProductBySlugParam, GetStoresParam, UnfollowByIdParam } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
import { FetchProductsOptions, FetchProductsResponse } from "../../types/product";
export declare class CatalogModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchProductBySlug(params: GetProductDetailBySlugParam): AsyncThunkPromise<ProductDetail>;
    getProductSizesBySlug(params: GetProductSizesBySlugParam): AsyncThunkPromise<ProductSizes>;
    getProductVariantsBySlug(params: GetProductVariantsBySlugParam): AsyncThunkPromise<ProductVariantsResponse>;
    getProductDetailBySlug(params: GetProductDetailBySlugParam): AsyncThunkPromise<ProductDetail>;
    followById(params: FollowByIdParam): AsyncThunkPromise<FollowPostResponse>;
    getFollowerCountById(params: GetFollowerCountByIdParam): AsyncThunkPromise<FollowerCountResponse>;
    getStores(params: GetStoresParam): AsyncThunkPromise<StoreListingResponse>;
    getLocationDetailsById(params: GetLocationDetailsByIdParam): AsyncThunkPromise<StoreDetails>;
    getInStockLocations(params: GetInStockLocationsParam): AsyncThunkPromise<ApplicationStoreListing>;
    getProductBundlesBySlug(params: GetProductBundlesBySlugParam): AsyncThunkPromise<ProductBundle>;
    getFollowedListing(params: GetFollowedListingParam): AsyncThunkPromise<GetFollowListingResponse>;
    getFollowIds(params: GetFollowIdsParam): AsyncThunkPromise<FollowIdsResponse>;
    unfollowById(params: UnfollowByIdParam): AsyncThunkPromise<FollowPostResponse>;
    getSimilarComparisonProductBySlug(params: GetSimilarComparisonProductBySlugParam): AsyncThunkPromise<ProductCompareResponse>;
    getComparedFrequentlyProductBySlug(params: GetComparedFrequentlyProductBySlugParam): AsyncThunkPromise<ProductFrequentlyComparedSimilarResponse>;
    getProductComparisonBySlugs(params: GetProductComparisonBySlugsParam): AsyncThunkPromise<ProductCompareResponse>;
    getProductPriceBySlug(params: GetProductPriceBySlugParam): AsyncThunkPromise<ProductSizePriceResponseV3>;
    getProductSellersBySlug(params: GetProductSellersBySlugParam): AsyncThunkPromise<ProductSizeSellersResponseV3>;
    fetchProductListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    fetchCategoryListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    getCategoryDetailBySlug(options: GetCategoryDetailBySlugParam): AsyncThunkPromise<CategoryMetaResponse>;
    fetchBrandListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    getBrandDetailBySlug(options: GetBrandDetailBySlugParam): AsyncThunkPromise<BrandDetailResponse>;
    fetchCollectionListing(options: FetchProductsOptions): AsyncThunkPromise<FetchProductsResponse>;
    getCollectionDetailBySlug(options: GetCollectionDetailBySlugParam): AsyncThunkPromise<CollectionDetailResponse>;
    resetProductListingMeta(): AsyncThunkPromise<{}>;
    getSearchResults(params: GetSearchResultsParam): AsyncThunkPromise<AutoCompleteResponse>;
    getProducts(params: FetchProductsOptions): AsyncThunkPromise<ProductListingResponse>;
}

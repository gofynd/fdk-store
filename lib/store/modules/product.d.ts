import { BulkPriceResponse } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { GetBulkDiscountOffersParam } from "@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { FollowerCountResponse, FollowIdsResponse, FollowPostResponse, GetFollowListingResponse, ProductBundle, ProductCompareResponse, ProductDetail, ProductFrequentlyComparedSimilarResponse, ProductSizePriceResponseV3, ProductSizes, ProductSizeSellersResponseV3, ProductVariantsResponse } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { FollowByIdParam, GetComparedFrequentlyProductBySlugParam, GetFollowedListingParam, GetFollowerCountByIdParam, GetFollowIdsParam, GetProductBundlesBySlugParam, GetProductDetailBySlugParam, GetProductPriceBySlugParam, GetProductSellersBySlugParam, GetProductSizesBySlugParam, GetProductVariantsBySlugParam, GetSimilarComparisonProductBySlugParam, UnfollowByIdParam } from "@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ProductModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchProductBySlug(params: GetProductDetailBySlugParam): AsyncThunkPromise<ProductDetail>;
    getProductDetailBySlug(params: GetProductDetailBySlugParam): AsyncThunkPromise<ProductDetail>;
    fetchProductVariants(params: GetProductVariantsBySlugParam): AsyncThunkPromise<ProductVariantsResponse>;
    fetchProductMeta(params: GetProductSizesBySlugParam): AsyncThunkPromise<ProductSizes>;
    followById(params: FollowByIdParam): AsyncThunkPromise<FollowPostResponse>;
    fetchFollowerCountById(params: GetFollowerCountByIdParam): AsyncThunkPromise<FollowerCountResponse>;
    getProductBundlesBySlug(params: GetProductBundlesBySlugParam): AsyncThunkPromise<ProductBundle>;
    fetchFollowedListing(params: GetFollowedListingParam): AsyncThunkPromise<GetFollowListingResponse>;
    fetchFollowIds(params: GetFollowIdsParam): AsyncThunkPromise<FollowIdsResponse>;
    unfollowById(params: UnfollowByIdParam): AsyncThunkPromise<FollowPostResponse>;
    fetchBulkPrice(params: GetBulkDiscountOffersParam): AsyncThunkPromise<BulkPriceResponse>;
    fetchSimilarCompareProduct(params: GetSimilarComparisonProductBySlugParam): AsyncThunkPromise<ProductCompareResponse>;
    fetchFrequentlyComparedProducts(params: GetComparedFrequentlyProductBySlugParam): AsyncThunkPromise<ProductFrequentlyComparedSimilarResponse>;
    fetchProductPriceBySlug(params: GetProductPriceBySlugParam): AsyncThunkPromise<ProductSizePriceResponseV3>;
    fetchProductSellerBySlug(params: GetProductSellersBySlugParam): AsyncThunkPromise<ProductSizeSellersResponseV3>;
}

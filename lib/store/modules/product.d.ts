import { BulkPriceResponse } from "fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { GetBulkDiscountOffersParam } from "fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { FollowerCountResponse, FollowIdsResponse, FollowPostResponse, GetFollowListingResponse, ProductCompareResponse, ProductFrequentlyComparedSimilarResponse, ProductSizePriceResponseV3, ProductSizes, ProductSizeSellersResponseV3, ProductVariantResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { FollowByIdParam, GetComparedFrequentlyProductBySlugParam, GetFollowedListingParam, GetFollowerCountByIdParam, GetFollowIdsParam, GetProductDetailBySlugParam, GetProductPriceBySlugParam, GetProductSellersBySlugParam, GetProductSizesBySlugParam, GetSimilarComparisonProductBySlugParam, UnfollowByIdParam } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ProductModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchProductBySlug(params: GetProductDetailBySlugParam): AsyncThunkPromise<ProductVariantResponse>;
    fetchProductMeta(params: GetProductSizesBySlugParam): AsyncThunkPromise<ProductSizes>;
    followById(params: FollowByIdParam): AsyncThunkPromise<FollowPostResponse>;
    fetchFollowerCountById(params: GetFollowerCountByIdParam): AsyncThunkPromise<FollowerCountResponse>;
    fetchFollowedListing(params: GetFollowedListingParam): AsyncThunkPromise<GetFollowListingResponse>;
    fetchFollowIds(params: GetFollowIdsParam): AsyncThunkPromise<FollowIdsResponse>;
    unfollowById(params: UnfollowByIdParam): AsyncThunkPromise<FollowPostResponse>;
    fetchBulkPrice(params: GetBulkDiscountOffersParam): AsyncThunkPromise<BulkPriceResponse>;
    fetchSimilarCompareProduct(params: GetSimilarComparisonProductBySlugParam): AsyncThunkPromise<ProductCompareResponse>;
    fetchFrequentlyComparedProducts(params: GetComparedFrequentlyProductBySlugParam): AsyncThunkPromise<ProductFrequentlyComparedSimilarResponse>;
    fetchProductPriceBySlug(params: GetProductPriceBySlugParam): AsyncThunkPromise<ProductSizePriceResponseV3>;
    fetchProductSellerBySlug(params: GetProductSellersBySlugParam): AsyncThunkPromise<ProductSizeSellersResponseV3>;
}

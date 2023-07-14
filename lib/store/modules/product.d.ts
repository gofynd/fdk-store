import { BulkPriceResponse } from "fdk-client-javascript/sdk/application/Cart/CartApplicationModel";
import { GetBulkDiscountOffersParam } from "fdk-client-javascript/sdk/application/Cart/CartApplicationValidator";
import type { ProductCompareResponse, ProductFrequentlyComparedSimilarResponse, ProductSizePriceResponseV3, ProductSizes, ProductSizeSellersResponseV3, ProductVariantResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import type { GetComparedFrequentlyProductBySlugParam, GetProductDetailBySlugParam, GetProductPriceBySlugParam, GetProductSellersBySlugParam, GetProductSizesBySlugParam, GetSimilarComparisonProductBySlugParam } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ProductModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchProductBySlug(params: GetProductDetailBySlugParam): AsyncThunkPromise<ProductVariantResponse>;
    fetchProductMeta(params: GetProductSizesBySlugParam): AsyncThunkPromise<ProductSizes>;
    fetchBulkPrice(params: GetBulkDiscountOffersParam): AsyncThunkPromise<BulkPriceResponse>;
    fetchSimilarCompareProduct(params: GetSimilarComparisonProductBySlugParam): AsyncThunkPromise<ProductCompareResponse>;
    fetchFrequentlyComparedProducts(params: GetComparedFrequentlyProductBySlugParam): AsyncThunkPromise<ProductFrequentlyComparedSimilarResponse>;
    fetchProductPriceBySlug(params: GetProductPriceBySlugParam): AsyncThunkPromise<ProductSizePriceResponseV3>;
    fetchProductSellerBySlug(params: GetProductSellersBySlugParam): AsyncThunkPromise<ProductSizeSellersResponseV3>;
}

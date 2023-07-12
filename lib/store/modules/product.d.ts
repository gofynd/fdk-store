import type { ProductVariantResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import type { GetProductDetailBySlugParam } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator";
import type { ThunkActionDispatch } from "redux-thunk";
import { AsyncThunkPromise } from "../../types";
export declare class ProductModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    fetchProductBySlug(params: GetProductDetailBySlugParam): AsyncThunkPromise<ProductVariantResponse>;
    fetchProductMeta(params?: any): Promise<any>;
    fetchBulkPrice(params?: any): Promise<any>;
    fetchSimilarCompareProduct(params?: any): Promise<any>;
    fetchFrequentlyComparedProducts(params?: any): Promise<any>;
    fetchProductPriceBySlug(params?: any): Promise<any>;
    fetchProductSellerBySlug(params?: any): Promise<any>;
}

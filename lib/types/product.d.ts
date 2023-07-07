import type { ProductDetail, ProductVariantResponse } from "fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel";
import { CommonAsyncLoadingTypes } from ".";
export type ProductDetails = Partial<ProductDetail & CommonAsyncLoadingTypes>;
export type ProductVariants = Partial<ProductVariantResponse & CommonAsyncLoadingTypes>;
export type ProductSlice = {
    product_details: ProductDetails;
    product_variants: ProductVariants;
    product_meta: any;
    bulk_price: any;
    similar_compare_products: any;
    frequently_compared_products: any;
    product_price_by_slug: any;
    product_seller_by_slug: any;
};

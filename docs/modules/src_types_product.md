[fdk-store](../README.md) / [Modules](../modules.md) / src/types/product

# Module: src/types/product

## Table of contents

### Type Aliases

- [ProductDetails](src_types_product.md#productdetails)
- [ProductSlice](src_types_product.md#productslice)
- [ProductVariants](src_types_product.md#productvariants)

## Type Aliases

### ProductDetails

Ƭ **ProductDetails**: `Partial`<[`ProductDetail`](node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productdetail) & [`CommonAsyncLoadingTypes`](src_types.md#commonasyncloadingtypes)\>

#### Defined in

src/types/product.ts:4

___

### ProductSlice

Ƭ **ProductSlice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bulk_price` | `any` |
| `frequently_compared_products` | `any` |
| `product_details` | [`ProductDetails`](src_types_product.md#productdetails) |
| `product_meta` | `any` |
| `product_price_by_slug` | `any` |
| `product_seller_by_slug` | `any` |
| `product_variants` | [`ProductVariants`](src_types_product.md#productvariants) |
| `similar_compare_products` | `any` |

#### Defined in

src/types/product.ts:7

___

### ProductVariants

Ƭ **ProductVariants**: `Partial`<[`ProductVariantResponse`](node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productvariantresponse) & [`CommonAsyncLoadingTypes`](src_types.md#commonasyncloadingtypes)\>

#### Defined in

src/types/product.ts:5

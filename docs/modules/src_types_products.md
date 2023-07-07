[fdk-store](../README.md) / [Modules](../modules.md) / src/types/products

# Module: src/types/products

## Table of contents

### Type Aliases

- [FetchProductsOptions](src_types_products.md#fetchproductsoptions)
- [FetchProductsResponse](src_types_products.md#fetchproductsresponse)
- [ProductDetail](src_types_products.md#productdetail)
- [ProductLists](src_types_products.md#productlists)
- [ProductsSlice](src_types_products.md#productsslice)
- [SearchResults](src_types_products.md#searchresults)

## Type Aliases

### FetchProductsOptions

Ƭ **FetchProductsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `f` | `any` |
| `filters` | `any` |
| `infiniteLoading` | `any` |
| `isCollection` | `any` |
| `pageId` | `any` |
| `pageNo` | `any` |
| `pageSize` | `number` |
| `q` | `any` |
| `sortOn` | `string` |

#### Defined in

src/types/products.ts:5

___

### FetchProductsResponse

Ƭ **FetchProductsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ProductListingResponse`](node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productlistingresponse) |
| `options` | [`FetchProductsOptions`](src_types_products.md#fetchproductsoptions) |

#### Defined in

src/types/products.ts:17

___

### ProductDetail

Ƭ **ProductDetail**: `Partial`<[`ProductDetails`](node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productdetails) & [`CommonAsyncLoadingTypes`](src_types.md#commonasyncloadingtypes)\>

#### Defined in

src/types/products.ts:23

___

### ProductLists

Ƭ **ProductLists**: `Partial`<[`ProductListingResponse`](node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productlistingresponse) & [`CommonAsyncLoadingTypes`](src_types.md#commonasyncloadingtypes)\>

#### Defined in

src/types/products.ts:22

___

### ProductsSlice

Ƭ **ProductsSlice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `product_listing_meta` | [`ProductDetail`](src_types_products.md#productdetail) |
| `product_lists` | [`ProductLists`](src_types_products.md#productlists) |
| `product_search_results` | [`ProductLists`](src_types_products.md#productlists) |
| `search_results` | [`SearchResults`](src_types_products.md#searchresults) |

#### Defined in

src/types/products.ts:26

___

### SearchResults

Ƭ **SearchResults**: `Partial`<[`AutoCompleteResponse`](node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#autocompleteresponse) & [`CommonAsyncLoadingTypes`](src_types.md#commonasyncloadingtypes)\>

#### Defined in

src/types/products.ts:24

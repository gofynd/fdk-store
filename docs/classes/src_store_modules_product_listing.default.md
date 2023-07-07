[fdk-store](../README.md) / [Modules](../modules.md) / [src/store/modules/product-listing](../modules/src_store_modules_product_listing.md) / default

# Class: default

[src/store/modules/product-listing](../modules/src_store_modules_product_listing.md).default

## Table of contents

### Constructors

- [constructor](src_store_modules_product_listing.default.md#constructor)

### Methods

- [fetchBrandListing](src_store_modules_product_listing.default.md#fetchbrandlisting)
- [fetchBrandListingMeta](src_store_modules_product_listing.default.md#fetchbrandlistingmeta)
- [fetchCategoryListing](src_store_modules_product_listing.default.md#fetchcategorylisting)
- [fetchCategoryListingMeta](src_store_modules_product_listing.default.md#fetchcategorylistingmeta)
- [fetchCollectionListing](src_store_modules_product_listing.default.md#fetchcollectionlisting)
- [fetchCollectionListingMeta](src_store_modules_product_listing.default.md#fetchcollectionlistingmeta)
- [fetchProductListing](src_store_modules_product_listing.default.md#fetchproductlisting)
- [fetchProductListingMeta](src_store_modules_product_listing.default.md#fetchproductlistingmeta)
- [fetchProductSuggestions](src_store_modules_product_listing.default.md#fetchproductsuggestions)
- [fetchSuggestions](src_store_modules_product_listing.default.md#fetchsuggestions)
- [resetProductListingMeta](src_store_modules_product_listing.default.md#resetproductlistingmeta)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkActionDispatch`<`any`\> |

#### Defined in

src/store/modules/product-listing.ts:9

## Methods

### fetchBrandListing

▸ **fetchBrandListing**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/src_types_products.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:30

___

### fetchBrandListingMeta

▸ **fetchBrandListingMeta**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#branddetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetBrandDetailBySlugParam`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationValidator.export_.md#getbranddetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#branddetailresponse)\>

#### Defined in

src/store/modules/product-listing.ts:34

___

### fetchCategoryListing

▸ **fetchCategoryListing**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/src_types_products.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:23

___

### fetchCategoryListingMeta

▸ **fetchCategoryListingMeta**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#categorymetaresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCategoryDetailBySlugParam`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationValidator.export_.md#getcategorydetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#categorymetaresponse)\>

#### Defined in

src/store/modules/product-listing.ts:26

___

### fetchCollectionListing

▸ **fetchCollectionListing**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/src_types_products.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:37

___

### fetchCollectionListingMeta

▸ **fetchCollectionListingMeta**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#collectiondetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCollectionDetailBySlugParam`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationValidator.export_.md#getcollectiondetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#collectiondetailresponse)\>

#### Defined in

src/store/modules/product-listing.ts:40

___

### fetchProductListing

▸ **fetchProductListing**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

Fetch products from API

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/src_types_products.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/src_types_products.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:17

___

### fetchProductListingMeta

▸ **fetchProductListingMeta**(`options`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`ProductDetail`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productdetail)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetProductDetailBySlugParam`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationValidator.export_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`ProductDetail`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productdetail)\>

#### Defined in

src/store/modules/product-listing.ts:20

___

### fetchProductSuggestions

▸ **fetchProductSuggestions**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FetchProductsOptions`](../modules/src_types_products.md#fetchproductsoptions) |

#### Returns

`any`

#### Defined in

src/store/modules/product-listing.ts:51

___

### fetchSuggestions

▸ **fetchSuggestions**(`params`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#autocompleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetSearchResultsParam`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationValidator.export_.md#getsearchresultsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#autocompleteresponse)\>

#### Defined in

src/store/modules/product-listing.ts:47

___

### resetProductListingMeta

▸ **resetProductListingMeta**(): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<{}\>

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<{}\>

#### Defined in

src/store/modules/product-listing.ts:43

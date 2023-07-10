[fdk-store](../README.md) / [Exports](../modules.md) / [product-listing](../modules/product_listing.md) / default

# Class: default

[product-listing](../modules/product_listing.md).default

## Table of contents

### Constructors

- [constructor](product_listing.default.md#constructor)

### Methods

- [fetchBrandListing](product_listing.default.md#fetchbrandlisting)
- [fetchBrandListingMeta](product_listing.default.md#fetchbrandlistingmeta)
- [fetchCategoryListing](product_listing.default.md#fetchcategorylisting)
- [fetchCategoryListingMeta](product_listing.default.md#fetchcategorylistingmeta)
- [fetchCollectionListing](product_listing.default.md#fetchcollectionlisting)
- [fetchCollectionListingMeta](product_listing.default.md#fetchcollectionlistingmeta)
- [fetchProductListing](product_listing.default.md#fetchproductlisting)
- [fetchProductListingMeta](product_listing.default.md#fetchproductlistingmeta)
- [fetchProductSuggestions](product_listing.default.md#fetchproductsuggestions)
- [fetchSuggestions](product_listing.default.md#fetchsuggestions)
- [resetProductListingMeta](product_listing.default.md#resetproductlistingmeta)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/product-listing.ts:9

## Methods

### fetchBrandListing

▸ **fetchBrandListing**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/product_listing._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:30

___

### fetchBrandListingMeta

▸ **fetchBrandListingMeta**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/product_listing._internal_.md#branddetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetBrandDetailBySlugParam`](../modules/product_listing._internal_.md#getbranddetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/product_listing._internal_.md#branddetailresponse)\>

#### Defined in

src/store/modules/product-listing.ts:34

___

### fetchCategoryListing

▸ **fetchCategoryListing**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/product_listing._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:23

___

### fetchCategoryListingMeta

▸ **fetchCategoryListingMeta**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/product_listing._internal_.md#categorymetaresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCategoryDetailBySlugParam`](../modules/product_listing._internal_.md#getcategorydetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/product_listing._internal_.md#categorymetaresponse)\>

#### Defined in

src/store/modules/product-listing.ts:26

___

### fetchCollectionListing

▸ **fetchCollectionListing**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/product_listing._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:37

___

### fetchCollectionListingMeta

▸ **fetchCollectionListingMeta**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/product_listing._internal_.md#collectiondetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCollectionDetailBySlugParam`](../modules/product_listing._internal_.md#getcollectiondetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/product_listing._internal_.md#collectiondetailresponse)\>

#### Defined in

src/store/modules/product-listing.ts:40

___

### fetchProductListing

▸ **fetchProductListing**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

Fetch products from API

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/product_listing._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/product_listing._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/product-listing.ts:17

___

### fetchProductListingMeta

▸ **fetchProductListingMeta**(`options`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`ProductDetail`](../modules/product_listing._internal_.md#productdetail)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetProductDetailBySlugParam`](../modules/product_listing._internal_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`ProductDetail`](../modules/product_listing._internal_.md#productdetail)\>

#### Defined in

src/store/modules/product-listing.ts:20

___

### fetchProductSuggestions

▸ **fetchProductSuggestions**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FetchProductsOptions`](../modules/product_listing._internal_.md#fetchproductsoptions) |

#### Returns

`any`

#### Defined in

src/store/modules/product-listing.ts:51

___

### fetchSuggestions

▸ **fetchSuggestions**(`params`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/product_listing._internal_.md#autocompleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetSearchResultsParam`](../modules/product_listing._internal_.md#getsearchresultsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/product_listing._internal_.md#autocompleteresponse)\>

#### Defined in

src/store/modules/product-listing.ts:47

___

### resetProductListingMeta

▸ **resetProductListingMeta**(): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<{}\>

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<{}\>

#### Defined in

src/store/modules/product-listing.ts:43

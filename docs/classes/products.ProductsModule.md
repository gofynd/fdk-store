[fdk-store](../README.md) / [Exports](../modules.md) / [products](../modules/products.md) / ProductsModule

# Class: ProductsModule

[products](../modules/products.md).ProductsModule

## Table of contents

### Constructors

- [constructor](products.ProductsModule.md#constructor)

### Methods

- [fetchBrandListing](products.ProductsModule.md#fetchbrandlisting)
- [fetchBrandListingMeta](products.ProductsModule.md#fetchbrandlistingmeta)
- [fetchCategoryListing](products.ProductsModule.md#fetchcategorylisting)
- [fetchCategoryListingMeta](products.ProductsModule.md#fetchcategorylistingmeta)
- [fetchCollectionListing](products.ProductsModule.md#fetchcollectionlisting)
- [fetchCollectionListingMeta](products.ProductsModule.md#fetchcollectionlistingmeta)
- [fetchProductListing](products.ProductsModule.md#fetchproductlisting)
- [fetchProductListingMeta](products.ProductsModule.md#fetchproductlistingmeta)
- [fetchProductSuggestions](products.ProductsModule.md#fetchproductsuggestions)
- [fetchSuggestions](products.ProductsModule.md#fetchsuggestions)
- [resetProductListingMeta](products.ProductsModule.md#resetproductlistingmeta)

## Constructors

### constructor

• **new ProductsModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/products.ts:9

## Methods

### fetchBrandListing

▸ **fetchBrandListing**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/products._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:29

___

### fetchBrandListingMeta

▸ **fetchBrandListingMeta**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/products._internal_.md#branddetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetBrandDetailBySlugParam`](../modules/products._internal_.md#getbranddetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/products._internal_.md#branddetailresponse)\>

#### Defined in

src/store/modules/products.ts:33

___

### fetchCategoryListing

▸ **fetchCategoryListing**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/products._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:22

___

### fetchCategoryListingMeta

▸ **fetchCategoryListingMeta**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/products._internal_.md#categorymetaresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCategoryDetailBySlugParam`](../modules/products._internal_.md#getcategorydetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/products._internal_.md#categorymetaresponse)\>

#### Defined in

src/store/modules/products.ts:25

___

### fetchCollectionListing

▸ **fetchCollectionListing**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/products._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:36

___

### fetchCollectionListingMeta

▸ **fetchCollectionListingMeta**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/products._internal_.md#collectiondetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCollectionDetailBySlugParam`](../modules/products._internal_.md#getcollectiondetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/products._internal_.md#collectiondetailresponse)\>

#### Defined in

src/store/modules/products.ts:39

___

### fetchProductListing

▸ **fetchProductListing**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/products._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/products._internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:16

___

### fetchProductListingMeta

▸ **fetchProductListingMeta**(`options`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProductDetail`](../modules/products._internal_.md#productdetail)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetProductDetailBySlugParam`](../modules/products._internal_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProductDetail`](../modules/products._internal_.md#productdetail)\>

#### Defined in

src/store/modules/products.ts:19

___

### fetchProductSuggestions

▸ **fetchProductSuggestions**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProductListingResponse`](../modules/products._internal_.md#productlistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FetchProductsOptions`](../modules/products._internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProductListingResponse`](../modules/products._internal_.md#productlistingresponse)\>

#### Defined in

src/store/modules/products.ts:50

___

### fetchSuggestions

▸ **fetchSuggestions**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/products._internal_.md#autocompleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetSearchResultsParam`](../modules/products._internal_.md#getsearchresultsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/products._internal_.md#autocompleteresponse)\>

#### Defined in

src/store/modules/products.ts:46

___

### resetProductListingMeta

▸ **resetProductListingMeta**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<{}\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<{}\>

#### Defined in

src/store/modules/products.ts:42

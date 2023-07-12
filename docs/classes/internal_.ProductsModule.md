[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ProductsModule

# Class: ProductsModule

[<internal>](../modules/internal_.md).ProductsModule

## Table of contents

### Constructors

- [constructor](internal_.ProductsModule.md#constructor)

### Methods

- [fetchBrandListing](internal_.ProductsModule.md#fetchbrandlisting)
- [fetchBrandListingMeta](internal_.ProductsModule.md#fetchbrandlistingmeta)
- [fetchCategoryListing](internal_.ProductsModule.md#fetchcategorylisting)
- [fetchCategoryListingMeta](internal_.ProductsModule.md#fetchcategorylistingmeta)
- [fetchCollectionListing](internal_.ProductsModule.md#fetchcollectionlisting)
- [fetchCollectionListingMeta](internal_.ProductsModule.md#fetchcollectionlistingmeta)
- [fetchProductListing](internal_.ProductsModule.md#fetchproductlisting)
- [fetchProductListingMeta](internal_.ProductsModule.md#fetchproductlistingmeta)
- [fetchProductSuggestions](internal_.ProductsModule.md#fetchproductsuggestions)
- [fetchSuggestions](internal_.ProductsModule.md#fetchsuggestions)
- [resetProductListingMeta](internal_.ProductsModule.md#resetproductlistingmeta)

## Constructors

### constructor

• **new ProductsModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/products.ts:9

## Methods

### fetchBrandListing

▸ **fetchBrandListing**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:29

___

### fetchBrandListingMeta

▸ **fetchBrandListingMeta**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/internal_.md#branddetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetBrandDetailBySlugParam`](../modules/internal_.md#getbranddetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BrandDetailResponse`](../modules/internal_.md#branddetailresponse)\>

#### Defined in

src/store/modules/products.ts:33

___

### fetchCategoryListing

▸ **fetchCategoryListing**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:22

___

### fetchCategoryListingMeta

▸ **fetchCategoryListingMeta**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/internal_.md#categorymetaresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCategoryDetailBySlugParam`](../modules/internal_.md#getcategorydetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CategoryMetaResponse`](../modules/internal_.md#categorymetaresponse)\>

#### Defined in

src/store/modules/products.ts:25

___

### fetchCollectionListing

▸ **fetchCollectionListing**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:36

___

### fetchCollectionListingMeta

▸ **fetchCollectionListingMeta**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/internal_.md#collectiondetailresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCollectionDetailBySlugParam`](../modules/internal_.md#getcollectiondetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CollectionDetailResponse`](../modules/internal_.md#collectiondetailresponse)\>

#### Defined in

src/store/modules/products.ts:39

___

### fetchProductListing

▸ **fetchProductListing**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../modules/internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`FetchProductsResponse`](../modules/internal_.md#fetchproductsresponse)\>

#### Defined in

src/store/modules/products.ts:16

___

### fetchProductListingMeta

▸ **fetchProductListingMeta**(`options`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProductDetail`](../modules/internal_.md#productdetail)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetProductDetailBySlugParam`](../modules/internal_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProductDetail`](../modules/internal_.md#productdetail)\>

#### Defined in

src/store/modules/products.ts:19

___

### fetchProductSuggestions

▸ **fetchProductSuggestions**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FetchProductsOptions`](../modules/internal_.md#fetchproductsoptions) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProductListingResponse`](../modules/internal_.md#productlistingresponse)\>

#### Defined in

src/store/modules/products.ts:50

___

### fetchSuggestions

▸ **fetchSuggestions**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/internal_.md#autocompleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetSearchResultsParam`](../modules/internal_.md#getsearchresultsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AutoCompleteResponse`](../modules/internal_.md#autocompleteresponse)\>

#### Defined in

src/store/modules/products.ts:46

___

### resetProductListingMeta

▸ **resetProductListingMeta**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<{}\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<{}\>

#### Defined in

src/store/modules/products.ts:42

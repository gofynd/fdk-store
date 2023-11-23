[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [products](../README.md) > ProductsModule

# Class: ProductsModule

## Constructors

### new ProductsModule

> **new ProductsModule**(`dispatch`): [`ProductsModule`](class.ProductsModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`ProductsModule`](class.ProductsModule.md)

#### Defined In

src/store/modules/products.ts:9

## Methods

### fetchBrandListing

> **fetchBrandListing**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../internal_/type-aliases/type-alias.FetchProductsOptions.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Defined In

src/store/modules/products.ts:29

***

### fetchBrandListingMeta

> **fetchBrandListingMeta**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BrandDetailResponse`](../internal_/type-aliases/type-alias.BrandDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetBrandDetailBySlugParam`](../internal_/type-aliases/type-alias.GetBrandDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BrandDetailResponse`](../internal_/type-aliases/type-alias.BrandDetailResponse.md) \>

#### Defined In

src/store/modules/products.ts:33

***

### fetchCategoryListing

> **fetchCategoryListing**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../internal_/type-aliases/type-alias.FetchProductsOptions.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Defined In

src/store/modules/products.ts:22

***

### fetchCategoryListingMeta

> **fetchCategoryListingMeta**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CategoryMetaResponse`](../internal_/type-aliases/type-alias.CategoryMetaResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetCategoryDetailBySlugParam`](../internal_/type-aliases/type-alias.GetCategoryDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CategoryMetaResponse`](../internal_/type-aliases/type-alias.CategoryMetaResponse.md) \>

#### Defined In

src/store/modules/products.ts:25

***

### fetchCollectionListing

> **fetchCollectionListing**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../internal_/type-aliases/type-alias.FetchProductsOptions.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Defined In

src/store/modules/products.ts:36

***

### fetchCollectionListingMeta

> **fetchCollectionListingMeta**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CollectionDetailResponse`](../internal_/type-aliases/type-alias.CollectionDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetCollectionDetailBySlugParam`](../internal_/type-aliases/type-alias.GetCollectionDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CollectionDetailResponse`](../internal_/type-aliases/type-alias.CollectionDetailResponse.md) \>

#### Defined In

src/store/modules/products.ts:39

***

### fetchProductListing

> **fetchProductListing**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../internal_/type-aliases/type-alias.FetchProductsOptions.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Defined In

src/store/modules/products.ts:16

***

### fetchProductListingMeta

> **fetchProductListingMeta**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../../product/internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetProductDetailBySlugParam`](../internal_/type-aliases/type-alias.GetProductDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../../product/internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Defined In

src/store/modules/products.ts:19

***

### fetchProductSuggestions

> **fetchProductSuggestions**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`FetchProductsOptions`](../internal_/type-aliases/type-alias.FetchProductsOptions.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Defined In

src/store/modules/products.ts:50

***

### fetchSuggestions

> **fetchSuggestions**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AutoCompleteResponse`](../internal_/type-aliases/type-alias.AutoCompleteResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetSearchResultsParam`](../internal_/type-aliases/type-alias.GetSearchResultsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AutoCompleteResponse`](../internal_/type-aliases/type-alias.AutoCompleteResponse.md) \>

#### Defined In

src/store/modules/products.ts:46

***

### resetProductListingMeta

> **resetProductListingMeta**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< \{} \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< \{} \>

#### Defined In

src/store/modules/products.ts:42

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

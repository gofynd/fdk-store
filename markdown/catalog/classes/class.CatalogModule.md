[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [catalog](../README.md) > CatalogModule

# Class: CatalogModule

## Constructors

### new CatalogModule

> **new CatalogModule**(`dispatch`): [`CatalogModule`](class.CatalogModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`CatalogModule`](class.CatalogModule.md)

#### Defined In

src/store/modules/catalog.ts:10

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

src/store/modules/catalog.ts:84

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

src/store/modules/catalog.ts:77

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

src/store/modules/catalog.ts:91

***

### fetchProductBySlug

> **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../internal_/type-aliases/type-alias.GetProductDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Defined In

src/store/modules/catalog.ts:15

***

### fetchProductListing

> **fetchProductListing**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`FetchProductsOptions`](../internal_/type-aliases/type-alias.FetchProductsOptions.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FetchProductsResponse`](../internal_/type-aliases/type-alias.FetchProductsResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:70

***

### fetchProductListingMeta

> **fetchProductListingMeta**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetProductDetailBySlugParam`](../internal_/type-aliases/type-alias.GetProductDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Defined In

src/store/modules/catalog.ts:73

***

### followById

> **followById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowPostResponse`](../internal_/type-aliases/type-alias.FollowPostResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`FollowByIdParam`](../internal_/type-aliases/type-alias.FollowByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowPostResponse`](../internal_/type-aliases/type-alias.FollowPostResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:32

***

### getBrandDetailBySlug

> **getBrandDetailBySlug**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BrandDetailResponse`](../internal_/type-aliases/type-alias.BrandDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetBrandDetailBySlugParam`](../internal_/type-aliases/type-alias.GetBrandDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BrandDetailResponse`](../internal_/type-aliases/type-alias.BrandDetailResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:88

***

### getCategoryDetailBySlug

> **getCategoryDetailBySlug**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CategoryMetaResponse`](../internal_/type-aliases/type-alias.CategoryMetaResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetCategoryDetailBySlugParam`](../internal_/type-aliases/type-alias.GetCategoryDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CategoryMetaResponse`](../internal_/type-aliases/type-alias.CategoryMetaResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:80

***

### getCollectionDetailBySlug

> **getCollectionDetailBySlug**(`options`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CollectionDetailResponse`](../internal_/type-aliases/type-alias.CollectionDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`GetCollectionDetailBySlugParam`](../internal_/type-aliases/type-alias.GetCollectionDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CollectionDetailResponse`](../internal_/type-aliases/type-alias.CollectionDetailResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:94

***

### getComparedFrequentlyProductBySlug

> **getComparedFrequentlyProductBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductFrequentlyComparedSimilarResponse`](../internal_/type-aliases/type-alias.ProductFrequentlyComparedSimilarResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetComparedFrequentlyProductBySlugParam`](../internal_/type-aliases/type-alias.GetComparedFrequentlyProductBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductFrequentlyComparedSimilarResponse`](../internal_/type-aliases/type-alias.ProductFrequentlyComparedSimilarResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:55

***

### getFollowIds

> **getFollowIds**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowIdsResponse`](../internal_/type-aliases/type-alias.FollowIdsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFollowIdsParam`](../internal_/type-aliases/type-alias.GetFollowIdsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowIdsResponse`](../internal_/type-aliases/type-alias.FollowIdsResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:44

***

### getFollowedListing

> **getFollowedListing**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFollowListingResponse`](../internal_/type-aliases/type-alias.GetFollowListingResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFollowedListingParam`](../internal_/type-aliases/type-alias.GetFollowedListingParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFollowListingResponse`](../internal_/type-aliases/type-alias.GetFollowListingResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:41

***

### getFollowerCountById

> **getFollowerCountById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowerCountResponse`](../internal_/type-aliases/type-alias.FollowerCountResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFollowerCountByIdParam`](../internal_/type-aliases/type-alias.GetFollowerCountByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowerCountResponse`](../internal_/type-aliases/type-alias.FollowerCountResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:35

***

### getProductBundlesBySlug

> **getProductBundlesBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductBundle`](../internal_/type-aliases/type-alias.ProductBundle.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductBundlesBySlugParam`](../internal_/type-aliases/type-alias.GetProductBundlesBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductBundle`](../internal_/type-aliases/type-alias.ProductBundle.md) \>

#### Defined In

src/store/modules/catalog.ts:38

***

### getProductComparisonBySlugs

> **getProductComparisonBySlugs**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductCompareResponse`](../internal_/type-aliases/type-alias.ProductCompareResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductComparisonBySlugsParam`](../internal_/type-aliases/type-alias.GetProductComparisonBySlugsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductCompareResponse`](../internal_/type-aliases/type-alias.ProductCompareResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:58

***

### getProductDetailBySlug

> **getProductDetailBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../internal_/type-aliases/type-alias.GetProductDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Defined In

src/store/modules/catalog.ts:29

***

### getProductPriceBySlug

> **getProductPriceBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizePriceResponseV3`](../internal_/type-aliases/type-alias.ProductSizePriceResponseV3.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductPriceBySlugParam`](../internal_/type-aliases/type-alias.GetProductPriceBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizePriceResponseV3`](../internal_/type-aliases/type-alias.ProductSizePriceResponseV3.md) \>

#### Defined In

src/store/modules/catalog.ts:62

***

### getProductSellersBySlug

> **getProductSellersBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizeSellersResponseV3`](../internal_/type-aliases/type-alias.ProductSizeSellersResponseV3.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductSellersBySlugParam`](../internal_/type-aliases/type-alias.GetProductSellersBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizeSellersResponseV3`](../internal_/type-aliases/type-alias.ProductSizeSellersResponseV3.md) \>

#### Defined In

src/store/modules/catalog.ts:66

***

### getProductSizesBySlug

> **getProductSizesBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizes`](../internal_/type-aliases/type-alias.ProductSizes.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductSizesBySlugParam`](../internal_/type-aliases/type-alias.GetProductSizesBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizes`](../internal_/type-aliases/type-alias.ProductSizes.md) \>

#### Defined In

src/store/modules/catalog.ts:26

***

### getProducts

> **getProducts**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`FetchProductsOptions`](../internal_/type-aliases/type-alias.FetchProductsOptions.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:105

***

### getSearchResults

> **getSearchResults**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AutoCompleteResponse`](../internal_/type-aliases/type-alias.AutoCompleteResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetSearchResultsParam`](../internal_/type-aliases/type-alias.GetSearchResultsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AutoCompleteResponse`](../internal_/type-aliases/type-alias.AutoCompleteResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:101

***

### getSimilarComparisonProductBySlug

> **getSimilarComparisonProductBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductCompareResponse`](../internal_/type-aliases/type-alias.ProductCompareResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetSimilarComparisonProductBySlugParam`](../internal_/type-aliases/type-alias.GetSimilarComparisonProductBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductCompareResponse`](../internal_/type-aliases/type-alias.ProductCompareResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:51

***

### resetProductListingMeta

> **resetProductListingMeta**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< \{} \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< \{} \>

#### Defined In

src/store/modules/catalog.ts:97

***

### unfollowById

> **unfollowById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowPostResponse`](../internal_/type-aliases/type-alias.FollowPostResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UnfollowByIdParam`](../internal_/type-aliases/type-alias.UnfollowByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowPostResponse`](../internal_/type-aliases/type-alias.FollowPostResponse.md) \>

#### Defined In

src/store/modules/catalog.ts:47

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

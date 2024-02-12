[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [product](../README.md) > ProductModule

# Class: ProductModule

## Constructors

### new ProductModule

> **new ProductModule**(`dispatch`): [`ProductModule`](class.ProductModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`ProductModule`](class.ProductModule.md)

#### Defined In

src/store/modules/product.ts:10

## Methods

### fetchBulkPrice

> **fetchBulkPrice**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BulkPriceResponse`](../internal_/type-aliases/type-alias.BulkPriceResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetBulkDiscountOffersParam`](../internal_/type-aliases/type-alias.GetBulkDiscountOffersParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BulkPriceResponse`](../internal_/type-aliases/type-alias.BulkPriceResponse.md) \>

#### Defined In

src/store/modules/product.ts:53

***

### fetchFollowIds

> **fetchFollowIds**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowIdsResponse`](../internal_/type-aliases/type-alias.FollowIdsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFollowIdsParam`](../internal_/type-aliases/type-alias.GetFollowIdsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowIdsResponse`](../internal_/type-aliases/type-alias.FollowIdsResponse.md) \>

#### Defined In

src/store/modules/product.ts:46

***

### fetchFollowedListing

> **fetchFollowedListing**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFollowListingResponse`](../internal_/type-aliases/type-alias.GetFollowListingResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFollowedListingParam`](../internal_/type-aliases/type-alias.GetFollowedListingParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFollowListingResponse`](../internal_/type-aliases/type-alias.GetFollowListingResponse.md) \>

#### Defined In

src/store/modules/product.ts:43

***

### fetchFollowerCountById

> **fetchFollowerCountById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowerCountResponse`](../internal_/type-aliases/type-alias.FollowerCountResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFollowerCountByIdParam`](../internal_/type-aliases/type-alias.GetFollowerCountByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FollowerCountResponse`](../internal_/type-aliases/type-alias.FollowerCountResponse.md) \>

#### Defined In

src/store/modules/product.ts:37

***

### fetchFrequentlyComparedProducts

> **fetchFrequentlyComparedProducts**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductFrequentlyComparedSimilarResponse`](../internal_/type-aliases/type-alias.ProductFrequentlyComparedSimilarResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetComparedFrequentlyProductBySlugParam`](../internal_/type-aliases/type-alias.GetComparedFrequentlyProductBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductFrequentlyComparedSimilarResponse`](../internal_/type-aliases/type-alias.ProductFrequentlyComparedSimilarResponse.md) \>

#### Defined In

src/store/modules/product.ts:61

***

### fetchProductBySlug

> **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../../products/internal_/type-aliases/type-alias.GetProductDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductDetail`](../internal_/type-aliases/type-alias.ProductDetail.md) \>

#### Defined In

src/store/modules/product.ts:16

***

### fetchProductMeta

> **fetchProductMeta**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizes`](../internal_/type-aliases/type-alias.ProductSizes.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductSizesBySlugParam`](../internal_/type-aliases/type-alias.GetProductSizesBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizes`](../internal_/type-aliases/type-alias.ProductSizes.md) \>

#### Defined In

src/store/modules/product.ts:31

***

### fetchProductPriceBySlug

> **fetchProductPriceBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizePriceResponseV3`](../internal_/type-aliases/type-alias.ProductSizePriceResponseV3.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductPriceBySlugParam`](../internal_/type-aliases/type-alias.GetProductPriceBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizePriceResponseV3`](../internal_/type-aliases/type-alias.ProductSizePriceResponseV3.md) \>

#### Defined In

src/store/modules/product.ts:65

***

### fetchProductSellerBySlug

> **fetchProductSellerBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizeSellersResponseV3`](../internal_/type-aliases/type-alias.ProductSizeSellersResponseV3.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductSellersBySlugParam`](../internal_/type-aliases/type-alias.GetProductSellersBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductSizeSellersResponseV3`](../internal_/type-aliases/type-alias.ProductSizeSellersResponseV3.md) \>

#### Defined In

src/store/modules/product.ts:69

***

### fetchProductVariants

> **fetchProductVariants**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductVariantsResponse`](../internal_/type-aliases/type-alias.ProductVariantsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductVariantsBySlugParam`](../internal_/type-aliases/type-alias.GetProductVariantsBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductVariantsResponse`](../internal_/type-aliases/type-alias.ProductVariantsResponse.md) \>

#### Defined In

src/store/modules/product.ts:27

***

### fetchSimilarCompareProduct

> **fetchSimilarCompareProduct**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductCompareResponse`](../internal_/type-aliases/type-alias.ProductCompareResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetSimilarComparisonProductBySlugParam`](../internal_/type-aliases/type-alias.GetSimilarComparisonProductBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductCompareResponse`](../internal_/type-aliases/type-alias.ProductCompareResponse.md) \>

#### Defined In

src/store/modules/product.ts:57

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

src/store/modules/product.ts:34

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

src/store/modules/product.ts:40

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

src/store/modules/product.ts:49

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

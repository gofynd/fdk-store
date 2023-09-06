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

src/store/modules/product.ts:29

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

src/store/modules/product.ts:37

***

### fetchProductBySlug

> **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductVariantResponse`](../internal_/type-aliases/type-alias.ProductVariantResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../../products/internal_/type-aliases/type-alias.GetProductDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductVariantResponse`](../internal_/type-aliases/type-alias.ProductVariantResponse.md) \>

#### Defined In

src/store/modules/product.ts:15

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

src/store/modules/product.ts:25

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

src/store/modules/product.ts:41

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

src/store/modules/product.ts:45

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

src/store/modules/product.ts:33

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

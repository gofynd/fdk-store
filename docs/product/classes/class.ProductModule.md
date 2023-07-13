[**fdk-store**](../../README.md) ( [Readme](../../README.md) \| [API](../../API.md) )

---

[fdk-store](../../API.md) > [product](../README.md) > ProductModule

# Class: ProductModule

## Constructors

### constructor()

> **new ProductModule**(`dispatch`): [`ProductModule`](class.ProductModule.md)

#### Parameters

| Parameter  | Type                                                                                                     |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`ProductModule`](class.ProductModule.md)

#### Source

src/store/modules/product.ts:8

## Methods

### fetchBulkPrice()

> **fetchBulkPrice**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/product.ts:27

---

### fetchFrequentlyComparedProducts()

> **fetchFrequentlyComparedProducts**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/product.ts:35

---

### fetchProductBySlug()

> **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductVariantResponse`](../internal_/type-aliases/type-alias.ProductVariantResponse.md) \>

#### Parameters

| Parameter | Type                                                                                                             |
| :-------- | :--------------------------------------------------------------------------------------------------------------- |
| `params`  | [`GetProductDetailBySlugParam`](../../products/internal_/type-aliases/type-alias.GetProductDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductVariantResponse`](../internal_/type-aliases/type-alias.ProductVariantResponse.md) \>

#### Source

src/store/modules/product.ts:13

---

### fetchProductMeta()

> **fetchProductMeta**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/product.ts:23

---

### fetchProductPriceBySlug()

> **fetchProductPriceBySlug**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/product.ts:39

---

### fetchProductSellerBySlug()

> **fetchProductSellerBySlug**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/product.ts:43

---

### fetchSimilarCompareProduct()

> **fetchSimilarCompareProduct**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/product.ts:31

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[fdk-store](../README.md) / [Exports](../modules.md) / [product](../modules/product.md) / ProductModule

# Class: ProductModule

[product](../modules/product.md).ProductModule

## Table of contents

### Constructors

- [constructor](product.ProductModule.md#constructor)

### Methods

- [fetchBulkPrice](product.ProductModule.md#fetchbulkprice)
- [fetchFrequentlyComparedProducts](product.ProductModule.md#fetchfrequentlycomparedproducts)
- [fetchProductBySlug](product.ProductModule.md#fetchproductbyslug)
- [fetchProductMeta](product.ProductModule.md#fetchproductmeta)
- [fetchProductPriceBySlug](product.ProductModule.md#fetchproductpricebyslug)
- [fetchProductSellerBySlug](product.ProductModule.md#fetchproductsellerbyslug)
- [fetchSimilarCompareProduct](product.ProductModule.md#fetchsimilarcompareproduct)

## Constructors

### constructor

• **new ProductModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/product.ts:8

## Methods

### fetchBulkPrice

▸ **fetchBulkPrice**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/product.ts:27

___

### fetchFrequentlyComparedProducts

▸ **fetchFrequentlyComparedProducts**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/product.ts:35

___

### fetchProductBySlug

▸ **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/product._internal_.md#productvariantresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../modules/products._internal_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/product._internal_.md#productvariantresponse)\>

#### Defined in

src/store/modules/product.ts:13

___

### fetchProductMeta

▸ **fetchProductMeta**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/product.ts:23

___

### fetchProductPriceBySlug

▸ **fetchProductPriceBySlug**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/product.ts:39

___

### fetchProductSellerBySlug

▸ **fetchProductSellerBySlug**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/product.ts:43

___

### fetchSimilarCompareProduct

▸ **fetchSimilarCompareProduct**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/product.ts:31

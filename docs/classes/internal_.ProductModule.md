[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ProductModule

# Class: ProductModule

[<internal>](../modules/internal_.md).ProductModule

## Table of contents

### Constructors

- [constructor](internal_.ProductModule.md#constructor)

### Methods

- [fetchBulkPrice](internal_.ProductModule.md#fetchbulkprice)
- [fetchFrequentlyComparedProducts](internal_.ProductModule.md#fetchfrequentlycomparedproducts)
- [fetchProductBySlug](internal_.ProductModule.md#fetchproductbyslug)
- [fetchProductMeta](internal_.ProductModule.md#fetchproductmeta)
- [fetchProductPriceBySlug](internal_.ProductModule.md#fetchproductpricebyslug)
- [fetchProductSellerBySlug](internal_.ProductModule.md#fetchproductsellerbyslug)
- [fetchSimilarCompareProduct](internal_.ProductModule.md#fetchsimilarcompareproduct)

## Constructors

### constructor

• **new ProductModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

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

▸ **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/internal_.md#productvariantresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../modules/internal_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/internal_.md#productvariantresponse)\>

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

[fdk-store](../README.md) / [Exports](../modules.md) / [product-description](../modules/product_description.md) / default

# Class: default

[product-description](../modules/product_description.md).default

## Table of contents

### Constructors

- [constructor](product_description.default.md#constructor)

### Methods

- [fetchBulkPrice](product_description.default.md#fetchbulkprice)
- [fetchFrequentlyComparedProducts](product_description.default.md#fetchfrequentlycomparedproducts)
- [fetchProductBySlug](product_description.default.md#fetchproductbyslug)
- [fetchProductMeta](product_description.default.md#fetchproductmeta)
- [fetchProductPriceBySlug](product_description.default.md#fetchproductpricebyslug)
- [fetchProductSellerBySlug](product_description.default.md#fetchproductsellerbyslug)
- [fetchSimilarCompareProduct](product_description.default.md#fetchsimilarcompareproduct)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/product-description.ts:8

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

src/store/modules/product-description.ts:27

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

src/store/modules/product-description.ts:35

___

### fetchProductBySlug

▸ **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/product_description._internal_.md#productvariantresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../modules/product_listing._internal_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/product_description._internal_.md#productvariantresponse)\>

#### Defined in

src/store/modules/product-description.ts:13

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

src/store/modules/product-description.ts:23

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

src/store/modules/product-description.ts:39

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

src/store/modules/product-description.ts:43

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

src/store/modules/product-description.ts:31

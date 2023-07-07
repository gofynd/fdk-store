[fdk-store](../README.md) / [Modules](../modules.md) / [src/store/modules/product-description](../modules/src_store_modules_product_description.md) / default

# Class: default

[src/store/modules/product-description](../modules/src_store_modules_product_description.md).default

## Table of contents

### Constructors

- [constructor](src_store_modules_product_description.default.md#constructor)

### Methods

- [fetchBulkPrice](src_store_modules_product_description.default.md#fetchbulkprice)
- [fetchFrequentlyComparedProducts](src_store_modules_product_description.default.md#fetchfrequentlycomparedproducts)
- [fetchProductBySlug](src_store_modules_product_description.default.md#fetchproductbyslug)
- [fetchProductMeta](src_store_modules_product_description.default.md#fetchproductmeta)
- [fetchProductPriceBySlug](src_store_modules_product_description.default.md#fetchproductpricebyslug)
- [fetchProductSellerBySlug](src_store_modules_product_description.default.md#fetchproductsellerbyslug)
- [fetchSimilarCompareProduct](src_store_modules_product_description.default.md#fetchsimilarcompareproduct)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkActionDispatch`<`any`\> |

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

▸ **fetchProductBySlug**(`params`): [`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productvariantresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetProductDetailBySlugParam`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationValidator.export_.md#getproductdetailbyslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/src_types.md#asyncthunkpromise)<[`ProductVariantResponse`](../modules/node_modules_fdk_client_javascript_sdk_application_Catalog_CatalogApplicationModel.export_.md#productvariantresponse)\>

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

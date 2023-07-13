[fdk-store](../README.md) / [Exports](../modules.md) / [brands](../modules/brands.md) / default

# Class: default

[brands](../modules/brands.md).default

## Table of contents

### Constructors

- [constructor](brands.default.md#constructor)

### Methods

- [fetchBrands](brands.default.md#fetchbrands)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/brands.ts:8

## Methods

### fetchBrands

▸ **fetchBrands**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BrandListingResponse`](../modules/brands._internal_.md#brandlistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetBrandsParam`](../modules/brands._internal_.md#getbrandsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BrandListingResponse`](../modules/brands._internal_.md#brandlistingresponse)\>

#### Defined in

src/store/modules/brands.ts:12

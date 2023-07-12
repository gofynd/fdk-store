[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / brandsModule

# Class: brandsModule

[<internal>](../modules/internal_.md).brandsModule

## Table of contents

### Constructors

- [constructor](internal_.brandsModule.md#constructor)

### Methods

- [fetchBrands](internal_.brandsModule.md#fetchbrands)

## Constructors

### constructor

• **new brandsModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/brands.ts:8

## Methods

### fetchBrands

▸ **fetchBrands**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BrandListingResponse`](../modules/internal_.md#brandlistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetBrandsParam`](../modules/internal_.md#getbrandsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BrandListingResponse`](../modules/internal_.md#brandlistingresponse)\>

#### Defined in

src/store/modules/brands.ts:12

[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / logisticModule

# Class: logisticModule

[<internal>](../modules/internal_.md).logisticModule

## Table of contents

### Constructors

- [constructor](internal_.logisticModule.md#constructor)

### Methods

- [fetchAllCountries](internal_.logisticModule.md#fetchallcountries)
- [fetchPincodeDetails](internal_.logisticModule.md#fetchpincodedetails)
- [getTatProduct](internal_.logisticModule.md#gettatproduct)

## Constructors

### constructor

• **new logisticModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/logistic.ts:9

## Methods

### fetchAllCountries

▸ **fetchAllCountries**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CountryListResponse`](../modules/internal_.md#countrylistresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CountryListResponse`](../modules/internal_.md#countrylistresponse)\>

#### Defined in

src/store/modules/logistic.ts:13

___

### fetchPincodeDetails

▸ **fetchPincodeDetails**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`PincodeApiResponse`](../modules/internal_.md#pincodeapiresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPincodeCityParam`](../modules/internal_.md#getpincodecityparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`PincodeApiResponse`](../modules/internal_.md#pincodeapiresponse)\>

#### Defined in

src/store/modules/logistic.ts:21

___

### getTatProduct

▸ **getTatProduct**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`TATViewResponse`](../modules/internal_.md#tatviewresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTatProductParam`](../modules/internal_.md#gettatproductparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`TATViewResponse`](../modules/internal_.md#tatviewresponse)\>

#### Defined in

src/store/modules/logistic.ts:17

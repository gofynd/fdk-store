[fdk-store](../README.md) / [Exports](../modules.md) / [logistic](../modules/logistic.md) / default

# Class: default

[logistic](../modules/logistic.md).default

## Table of contents

### Constructors

- [constructor](logistic.default.md#constructor)

### Methods

- [fetchAllCountries](logistic.default.md#fetchallcountries)
- [fetchPincodeDetails](logistic.default.md#fetchpincodedetails)
- [getTatProduct](logistic.default.md#gettatproduct)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/logistic.ts:9

## Methods

### fetchAllCountries

▸ **fetchAllCountries**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CountryListResponse`](../modules/logistic._internal_.md#countrylistresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CountryListResponse`](../modules/logistic._internal_.md#countrylistresponse)\>

#### Defined in

src/store/modules/logistic.ts:13

___

### fetchPincodeDetails

▸ **fetchPincodeDetails**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`PincodeApiResponse`](../modules/logistic._internal_.md#pincodeapiresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPincodeCityParam`](../modules/logistic._internal_.md#getpincodecityparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`PincodeApiResponse`](../modules/logistic._internal_.md#pincodeapiresponse)\>

#### Defined in

src/store/modules/logistic.ts:21

___

### getTatProduct

▸ **getTatProduct**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`TATViewResponse`](../modules/logistic._internal_.md#tatviewresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTatProductParam`](../modules/logistic._internal_.md#gettatproductparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`TATViewResponse`](../modules/logistic._internal_.md#tatviewresponse)\>

#### Defined in

src/store/modules/logistic.ts:17

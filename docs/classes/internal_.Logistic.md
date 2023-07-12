[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Logistic

# Class: Logistic

[<internal>](../modules/internal_.md).Logistic

## Table of contents

### Constructors

- [constructor](internal_.Logistic.md#constructor)

### Properties

- [\_conf](internal_.Logistic.md#_conf)
- [\_relativeUrls](internal_.Logistic.md#_relativeurls)
- [\_urls](internal_.Logistic.md#_urls)

### Methods

- [getAllCountries](internal_.Logistic.md#getallcountries)
- [getCountries](internal_.Logistic.md#getcountries)
- [getCountry](internal_.Logistic.md#getcountry)
- [getLocalities](internal_.Logistic.md#getlocalities)
- [getLocality](internal_.Logistic.md#getlocality)
- [getOptimalLocations](internal_.Logistic.md#getoptimallocations)
- [getPincodeCity](internal_.Logistic.md#getpincodecity)
- [getPincodeZones](internal_.Logistic.md#getpincodezones)
- [getTatProduct](internal_.Logistic.md#gettatproduct)
- [updateUrls](internal_.Logistic.md#updateurls)

## Constructors

### constructor

• **new Logistic**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAllCountries` | `string` |
| `getCountries` | `string` |
| `getCountry` | `string` |
| `getLocalities` | `string` |
| `getLocality` | `string` |
| `getOptimalLocations` | `string` |
| `getPincodeCity` | `string` |
| `getPincodeZones` | `string` |
| `getTatProduct` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:16

## Methods

### getAllCountries

▸ **getAllCountries**(`arg?`): `Promise`<[`CountryListResponse`](../modules/internal_.md#countrylistresponse)\>

**`Name`**

getAllCountries
@summary: Get Country List
@description: Get all countries

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`CountryListResponse`](../modules/internal_.md#countrylistresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:25

___

### getCountries

▸ **getCountries**(`arg?`): `Promise`<[`GetCountries`](../modules/internal_.md#getcountries)\>

**`Name`**

getCountries
@summary: Get list of all countries API
@description: Get countries data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`GetCountries`](../modules/internal_.md#getcountries)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:33

___

### getCountry

▸ **getCountry**(`arg?`): `Promise`<[`GetCountry`](../modules/internal_.md#getcountry)\>

**`Name`**

getCountry
@summary: Get single Country API
@description: Get country data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCountryParam`](../modules/internal_.md#getcountryparam) | Arg object. |

#### Returns

`Promise`<[`GetCountry`](../modules/internal_.md#getcountry)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:41

___

### getLocalities

▸ **getLocalities**(`arg?`): `Promise`<[`GetLocalities`](../modules/internal_.md#getlocalities)\>

**`Name`**

getLocalities
@summary: Get Localities API
@description: Get Localities data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetLocalitiesParam`](../modules/internal_.md#getlocalitiesparam) | Arg object. |

#### Returns

`Promise`<[`GetLocalities`](../modules/internal_.md#getlocalities)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:49

___

### getLocality

▸ **getLocality**(`arg?`): `Promise`<[`GetLocality`](../modules/internal_.md#getlocality)\>

**`Name`**

getLocality
@summary: Get Locality API
@description: Get Locality data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetLocalityParam`](../modules/internal_.md#getlocalityparam) | Arg object. |

#### Returns

`Promise`<[`GetLocality`](../modules/internal_.md#getlocality)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:57

___

### getOptimalLocations

▸ **getOptimalLocations**(`arg?`): `Promise`<[`ReAssignStoreResponse`](../modules/internal_.md#reassignstoreresponse)\>

**`Name`**

getOptimalLocations
@summary: GET zone from the Pincode.
@description: This API returns zone from the Pincode View.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOptimalLocationsParam`](../modules/internal_.md#getoptimallocationsparam) | Arg object. |

#### Returns

`Promise`<[`ReAssignStoreResponse`](../modules/internal_.md#reassignstoreresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:66

___

### getPincodeCity

▸ **getPincodeCity**(`arg?`): `Promise`<[`PincodeApiResponse`](../modules/internal_.md#pincodeapiresponse)\>

**`Name`**

getPincodeCity
@summary: Get Pincode API
@description: Get pincode data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPincodeCityParam`](../modules/internal_.md#getpincodecityparam) | Arg object. |

#### Returns

`Promise`<[`PincodeApiResponse`](../modules/internal_.md#pincodeapiresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:74

___

### getPincodeZones

▸ **getPincodeZones**(`arg?`): `Promise`<[`GetZoneFromPincodeViewResponse`](../modules/internal_.md#getzonefrompincodeviewresponse)\>

**`Name`**

getPincodeZones
@summary: GET zone from the Pincode.
@description: This API returns zone from the Pincode View.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPincodeZonesParam`](../modules/internal_.md#getpincodezonesparam) | Arg object. |

#### Returns

`Promise`<[`GetZoneFromPincodeViewResponse`](../modules/internal_.md#getzonefrompincodeviewresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:84

___

### getTatProduct

▸ **getTatProduct**(`arg?`): `Promise`<[`TATViewResponse`](../modules/internal_.md#tatviewresponse)\>

**`Name`**

getTatProduct
@summary: Get TAT API
@description: Get TAT data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetTatProductParam`](../modules/internal_.md#gettatproductparam) | Arg object. |

#### Returns

`Promise`<[`TATViewResponse`](../modules/internal_.md#tatviewresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:92

___

### updateUrls

▸ **updateUrls**(`urls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `any` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationClient.d.ts:17

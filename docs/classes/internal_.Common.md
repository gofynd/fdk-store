[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Common

# Class: Common

[<internal>](../modules/internal_.md).Common

## Table of contents

### Constructors

- [constructor](internal_.Common.md#constructor)

### Properties

- [\_conf](internal_.Common.md#_conf)
- [\_relativeUrls](internal_.Common.md#_relativeurls)
- [\_urls](internal_.Common.md#_urls)

### Methods

- [getLocations](internal_.Common.md#getlocations)
- [searchApplication](internal_.Common.md#searchapplication)
- [updateUrls](internal_.Common.md#updateurls)

## Constructors

### constructor

• **new Common**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Common/CommonApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Common/CommonApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getLocations` | `string` |
| `searchApplication` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Common/CommonApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Common/CommonApplicationClient.d.ts:9

## Methods

### getLocations

▸ **getLocations**(`arg?`): `Promise`<[`Locations`](../modules/internal_.md#locations)\>

**`Name`**

getLocations
@summary: Get countries, states, cities
@description:

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetLocationsParam`](../modules/internal_.md#getlocationsparam) | Arg object. |

#### Returns

`Promise`<[`Locations`](../modules/internal_.md#locations)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Common/CommonApplicationClient.d.ts:18

___

### searchApplication

▸ **searchApplication**(`arg?`): `Promise`<[`ApplicationResponse`](../modules/internal_.md#applicationresponse)\>

**`Name`**

searchApplication
@summary: Search Application
@description: Provide application name or domain url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SearchApplicationParam`](../modules/internal_.md#searchapplicationparam) | Arg object. |

#### Returns

`Promise`<[`ApplicationResponse`](../modules/internal_.md#applicationresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Common/CommonApplicationClient.d.ts:26

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

node_modules/fdk-client-javascript/sdk/application/Common/CommonApplicationClient.d.ts:10

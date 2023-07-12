[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ApplicationClient

# Class: ApplicationClient

[<internal>](../modules/internal_.md).ApplicationClient

Represents the client for the application.

## Table of contents

### Constructors

- [constructor](internal_.ApplicationClient.md#constructor)

### Properties

- [cart](internal_.ApplicationClient.md#cart)
- [catalog](internal_.ApplicationClient.md#catalog)
- [common](internal_.ApplicationClient.md#common)
- [communication](internal_.ApplicationClient.md#communication)
- [config](internal_.ApplicationClient.md#config)
- [configuration](internal_.ApplicationClient.md#configuration)
- [content](internal_.ApplicationClient.md#content)
- [fileStorage](internal_.ApplicationClient.md#filestorage)
- [lead](internal_.ApplicationClient.md#lead)
- [logistic](internal_.ApplicationClient.md#logistic)
- [order](internal_.ApplicationClient.md#order)
- [payment](internal_.ApplicationClient.md#payment)
- [posCart](internal_.ApplicationClient.md#poscart)
- [rewards](internal_.ApplicationClient.md#rewards)
- [share](internal_.ApplicationClient.md#share)
- [theme](internal_.ApplicationClient.md#theme)
- [user](internal_.ApplicationClient.md#user)

### Methods

- [setCookie](internal_.ApplicationClient.md#setcookie)
- [setCurrencyCode](internal_.ApplicationClient.md#setcurrencycode)
- [setExtraHeaders](internal_.ApplicationClient.md#setextraheaders)
- [setLocationDetails](internal_.ApplicationClient.md#setlocationdetails)

## Constructors

### constructor

• **new ApplicationClient**(`config`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ApplicationConfig`](internal_.ApplicationConfig.md) | The application configuration. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:9

## Properties

### cart

• **cart**: [`Cart`](internal_.Cart.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:12

___

### catalog

• **catalog**: [`Catalog`](internal_.Catalog.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:11

___

### common

• **common**: [`Common`](internal_.Common.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:13

___

### communication

• **communication**: [`Communication`](internal_.Communication.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:18

___

### config

• **config**: [`ApplicationConfig`](internal_.ApplicationConfig.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:10

___

### configuration

• **configuration**: [`Configuration`](internal_.Configuration.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:21

___

### content

• **content**: [`Content`](internal_.Content.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:17

___

### fileStorage

• **fileStorage**: [`FileStorage`](internal_.FileStorage.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:20

___

### lead

• **lead**: [`Lead`](internal_.Lead.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:14

___

### logistic

• **logistic**: [`Logistic`](internal_.Logistic.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:26

___

### order

• **order**: [`Order`](internal_.Order.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:23

___

### payment

• **payment**: [`Payment`](internal_.Payment.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:22

___

### posCart

• **posCart**: [`PosCart`](internal_.PosCart.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:25

___

### rewards

• **rewards**: [`Rewards`](internal_.Rewards.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:24

___

### share

• **share**: [`Share`](internal_.Share.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:19

___

### theme

• **theme**: [`Theme`](internal_.Theme.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:15

___

### user

• **user**: [`User`](internal_.User.md)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:16

## Methods

### setCookie

▸ **setCookie**(`cookie`): `void`

Sets the cookie for the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookie` | `string` | The cookie to set, This cookie will be included in the headers of every subsequent request. |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:33

___

### setCurrencyCode

▸ **setCurrencyCode**(`currencyCode`): `void`

Sets the currency code in ApplicationConfig.

**`Throws`**

When the provided currency code is not a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyCode` | `string` | The currency code to set. |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:48

___

### setExtraHeaders

▸ **setExtraHeaders**(`header`): `void`

Sets the extra headers for the application.

**`Throws`**

When the provided header is not an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `header` | `object` | The header object to set. |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:55

___

### setLocationDetails

▸ **setLocationDetails**(`locationDetails`): `void`

Sets the location details for the application.

**`Throws`**

When the location details validation fails.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locationDetails` | [`LocationObject`](../modules/internal_.md#locationobject) | The location details to set. |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/ApplicationClient.d.ts:41

[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Communication

# Class: Communication

[<internal>](../modules/internal_.md).Communication

## Table of contents

### Constructors

- [constructor](internal_.Communication.md#constructor)

### Properties

- [\_conf](internal_.Communication.md#_conf)
- [\_relativeUrls](internal_.Communication.md#_relativeurls)
- [\_urls](internal_.Communication.md#_urls)

### Methods

- [getCommunicationConsent](internal_.Communication.md#getcommunicationconsent)
- [updateUrls](internal_.Communication.md#updateurls)
- [upsertAppPushtoken](internal_.Communication.md#upsertapppushtoken)
- [upsertCommunicationConsent](internal_.Communication.md#upsertcommunicationconsent)

## Constructors

### constructor

• **new Communication**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getCommunicationConsent` | `string` |
| `upsertAppPushtoken` | `string` |
| `upsertCommunicationConsent` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:10

## Methods

### getCommunicationConsent

▸ **getCommunicationConsent**(`arg?`): `Promise`<[`CommunicationConsent`](../modules/internal_.md#communicationconsent)\>

**`Name`**

getCommunicationConsent
@summary: Get communication consent
@description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`CommunicationConsent`](../modules/internal_.md#communicationconsent)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:22

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

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:11

___

### upsertAppPushtoken

▸ **upsertAppPushtoken**(`arg?`): `Promise`<[`PushtokenRes`](../modules/internal_.md#pushtokenres)\>

**`Name`**

upsertAppPushtoken
@summary: Upsert push token of a user
@description: Use this API to update and insert the push token of the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpsertAppPushtokenParam`](../modules/internal_.md#upsertapppushtokenparam) | Arg object. |

#### Returns

`Promise`<[`PushtokenRes`](../modules/internal_.md#pushtokenres)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:31

___

### upsertCommunicationConsent

▸ **upsertCommunicationConsent**(`arg?`): `Promise`<[`CommunicationConsentRes`](../modules/internal_.md#communicationconsentres)\>

**`Name`**

upsertCommunicationConsent
@summary: Upsert communication consent
@description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpsertCommunicationConsentParam`](../modules/internal_.md#upsertcommunicationconsentparam) | Arg object. |

#### Returns

`Promise`<[`CommunicationConsentRes`](../modules/internal_.md#communicationconsentres)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Communication/CommunicationApplicationClient.d.ts:43

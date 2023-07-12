[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Lead

# Class: Lead

[<internal>](../modules/internal_.md).Lead

## Table of contents

### Constructors

- [constructor](internal_.Lead.md#constructor)

### Properties

- [\_conf](internal_.Lead.md#_conf)
- [\_relativeUrls](internal_.Lead.md#_relativeurls)
- [\_urls](internal_.Lead.md#_urls)

### Methods

- [createHistory](internal_.Lead.md#createhistory)
- [createTicket](internal_.Lead.md#createticket)
- [getCustomForm](internal_.Lead.md#getcustomform)
- [getParticipantsInsideVideoRoom](internal_.Lead.md#getparticipantsinsidevideoroom)
- [getTicket](internal_.Lead.md#getticket)
- [getTokenForVideoRoom](internal_.Lead.md#gettokenforvideoroom)
- [submitCustomForm](internal_.Lead.md#submitcustomform)
- [updateUrls](internal_.Lead.md#updateurls)

## Constructors

### constructor

• **new Lead**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createHistory` | `string` |
| `createTicket` | `string` |
| `getCustomForm` | `string` |
| `getParticipantsInsideVideoRoom` | `string` |
| `getTicket` | `string` |
| `getTokenForVideoRoom` | `string` |
| `submitCustomForm` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:14

## Methods

### createHistory

▸ **createHistory**(`arg?`): `Promise`<[`TicketHistory`](../modules/internal_.md#tickethistory)\>

**`Name`**

createHistory
@summary: Create history for specific Ticket
@description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CreateHistoryParam`](../modules/internal_.md#createhistoryparam) | Arg object. |

#### Returns

`Promise`<[`TicketHistory`](../modules/internal_.md#tickethistory)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:23

___

### createTicket

▸ **createTicket**(`arg?`): `Promise`<[`Ticket`](../modules/internal_.md#ticket)\>

**`Name`**

createTicket
@summary: Create Ticket
@description: This is used to Create Ticket.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CreateTicketParam`](../modules/internal_.md#createticketparam) | Arg object. |

#### Returns

`Promise`<[`Ticket`](../modules/internal_.md#ticket)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:31

___

### getCustomForm

▸ **getCustomForm**(`arg?`): `Promise`<[`CustomForm`](../modules/internal_.md#customform)\>

**`Name`**

getCustomForm
@summary: Get specific Custom Form using it's slug
@description: Get specific Custom Form using it's slug, this is used to view the form.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCustomFormParam`](../modules/internal_.md#getcustomformparam) | Arg object. |

#### Returns

`Promise`<[`CustomForm`](../modules/internal_.md#customform)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:39

___

### getParticipantsInsideVideoRoom

▸ **getParticipantsInsideVideoRoom**(`arg?`): `Promise`<[`GetParticipantsInsideVideoRoomResponse`](../modules/internal_.md#getparticipantsinsidevideoroomresponse)\>

**`Name`**

getParticipantsInsideVideoRoom
@summary: Get participants of a specific Video Room using it's unique name
@description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetParticipantsInsideVideoRoomParam`](../modules/internal_.md#getparticipantsinsidevideoroomparam) | Arg object. |

#### Returns

`Promise`<[`GetParticipantsInsideVideoRoomResponse`](../modules/internal_.md#getparticipantsinsidevideoroomresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:51

___

### getTicket

▸ **getTicket**(`arg?`): `Promise`<[`Ticket`](../modules/internal_.md#ticket)\>

**`Name`**

getTicket
@summary: Get Ticket with the specific id
@description: Get Ticket with the specific id, this is used to view the ticket details

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetTicketParam`](../modules/internal_.md#getticketparam) | Arg object. |

#### Returns

`Promise`<[`Ticket`](../modules/internal_.md#ticket)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:59

___

### getTokenForVideoRoom

▸ **getTokenForVideoRoom**(`arg?`): `Promise`<[`GetTokenForVideoRoomResponse`](../modules/internal_.md#gettokenforvideoroomresponse)\>

**`Name`**

getTokenForVideoRoom
@summary: Get Token to join a specific Video Room using it's unqiue name
@description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetTokenForVideoRoomParam`](../modules/internal_.md#gettokenforvideoroomparam) | Arg object. |

#### Returns

`Promise`<[`GetTokenForVideoRoomResponse`](../modules/internal_.md#gettokenforvideoroomresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:68

___

### submitCustomForm

▸ **submitCustomForm**(`arg?`): `Promise`<[`SubmitCustomFormResponse`](../modules/internal_.md#submitcustomformresponse)\>

**`Name`**

submitCustomForm
@summary: Submit Response for a specific Custom Form using it's slug
@description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SubmitCustomFormParam`](../modules/internal_.md#submitcustomformparam) | Arg object. |

#### Returns

`Promise`<[`SubmitCustomFormResponse`](../modules/internal_.md#submitcustomformresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:77

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

node_modules/fdk-client-javascript/sdk/application/Lead/LeadApplicationClient.d.ts:15

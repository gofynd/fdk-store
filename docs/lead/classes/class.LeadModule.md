[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [lead](../README.md) > LeadModule

# Class: LeadModule

## Constructors

### new LeadModule

> **new LeadModule**(`dispatch`): [`LeadModule`](class.LeadModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`LeadModule`](class.LeadModule.md)

#### Defined In

src/store/modules/lead.ts:8

## Methods

### createHistory

> **createHistory**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TicketHistory`](../internal_/type-aliases/type-alias.TicketHistory.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`CreateHistoryParam`](../internal_/type-aliases/type-alias.CreateHistoryParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TicketHistory`](../internal_/type-aliases/type-alias.TicketHistory.md) \>

#### Defined In

src/store/modules/lead.ts:19

***

### createTicket

> **createTicket**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Ticket`](../internal_/type-aliases/type-alias.Ticket.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`CreateTicketParam`](../internal_/type-aliases/type-alias.CreateTicketParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Ticket`](../internal_/type-aliases/type-alias.Ticket.md) \>

#### Defined In

src/store/modules/lead.ts:22

***

### getCustomForm

> **getCustomForm**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomForm`](../internal_/type-aliases/type-alias.CustomForm.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCustomFormParam`](../internal_/type-aliases/type-alias.GetCustomFormParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomForm`](../internal_/type-aliases/type-alias.CustomForm.md) \>

#### Defined In

src/store/modules/lead.ts:10

***

### getTicket

> **getTicket**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Ticket`](../internal_/type-aliases/type-alias.Ticket.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetTicketParam`](../internal_/type-aliases/type-alias.GetTicketParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Ticket`](../internal_/type-aliases/type-alias.Ticket.md) \>

#### Defined In

src/store/modules/lead.ts:16

***

### submitCustomForm

> **submitCustomForm**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SubmitCustomFormResponse`](../internal_/type-aliases/type-alias.SubmitCustomFormResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SubmitCustomFormParam`](../internal_/type-aliases/type-alias.SubmitCustomFormParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SubmitCustomFormResponse`](../internal_/type-aliases/type-alias.SubmitCustomFormResponse.md) \>

#### Defined In

src/store/modules/lead.ts:13

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

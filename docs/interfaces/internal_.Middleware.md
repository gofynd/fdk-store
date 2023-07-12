[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Middleware

# Interface: Middleware<DispatchExt, S, D\>

[<internal>](../modules/internal_.md).Middleware

A middleware is a higher-order function that composes a dispatch function
to return a new dispatch function. It often turns async actions into
actions.

Middleware is composable using function composition. It is useful for
logging actions, performing side effects like routing, or turning an
asynchronous API call into a series of synchronous actions.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `DispatchExt` | {} | Extra Dispatch signature added by this middleware. |
| `S` | `any` | The type of the state supported by this middleware. |
| `D` | extends [`Dispatch`](internal_.Dispatch.md) = [`Dispatch`](internal_.Dispatch.md) | The type of Dispatch of the store where this middleware is installed. |

## Callable

### Middleware

▸ **Middleware**(`api`): (`next`: [`Dispatch`](internal_.Dispatch.md)<[`AnyAction`](internal_.AnyAction.md)\>) => (`action`: `any`) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`MiddlewareAPI`](internal_.MiddlewareAPI.md)<`D`, `S`\> |

#### Returns

`fn`

▸ (`next`): (`action`: `any`) => `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `next` | [`Dispatch`](internal_.Dispatch.md)<[`AnyAction`](internal_.AnyAction.md)\> |

##### Returns

`fn`

▸ (`action`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `any` |

##### Returns

`any`

#### Defined in

node_modules/redux/index.d.ts:562

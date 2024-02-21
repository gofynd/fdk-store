[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [theme](../../README.md) > [<internal>](../README.md) > ThunkDispatch

# Interface: ThunkDispatch`<State, ExtraThunkArg, BasicAction>`

The dispatch method as modified by React-Thunk; overloaded so that you can
dispatch:
  - standard (object) actions: `dispatch()` returns the action itself
  - thunk actions: `dispatch()` returns the thunk's return value

## Type parameters

| Parameter | Description |
| :------ | :------ |
| `State` | The redux state |
| `ExtraThunkArg` | The extra argument passed to the inner function of<br />thunks (if specified when setting up the Thunk middleware) |
| `BasicAction` *extends* [`Action`](interface.Action.md) | The (non-thunk) actions that can be dispatched. |

> **ThunkDispatch**<`ReturnType`>(`thunkAction`): `ReturnType`

Accepts a thunk function, runs it, and returns whatever the thunk itself returns

## Type parameters

| Parameter |
| :------ |
| `ReturnType` |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `thunkAction` | [`ThunkAction`](../type-aliases/type-alias.ThunkAction.md)\< `ReturnType`, `State`, `ExtraThunkArg`, `BasicAction` \> |

## Returns

`ReturnType`

## Defined In

node\_modules/redux-thunk/es/types.d.ts:15

> **ThunkDispatch**<`Action`>(`action`): `Action`

Accepts a standard action object, and returns that action object

## Type parameters

| Parameter |
| :------ |
| `Action` *extends* [`Action`](interface.Action.md)\< `any`, `Action` \> |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `Action` |

## Returns

`Action`

## Defined In

node\_modules/redux-thunk/es/types.d.ts:17

> **ThunkDispatch**<`ReturnType`, `Action`>(`action`): `ReturnType` \| `Action`

A union of the other two overloads for TS inference purposes

## Type parameters

| Parameter |
| :------ |
| `ReturnType` |
| `Action` *extends* [`Action`](interface.Action.md)\< `any`, `Action` \> |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `Action` \| [`ThunkAction`](../type-aliases/type-alias.ThunkAction.md)\< `ReturnType`, `State`, `ExtraThunkArg`, `BasicAction` \> |

## Returns

`ReturnType` \| `Action`

## Defined In

node\_modules/redux-thunk/es/types.d.ts:19

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

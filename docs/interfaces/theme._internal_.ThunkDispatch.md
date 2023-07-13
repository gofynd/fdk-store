[fdk-store](../README.md) / [Exports](../modules.md) / [theme](../modules/theme.md) / [<internal\>](../modules/theme._internal_.md) / ThunkDispatch

# Interface: ThunkDispatch<State, ExtraThunkArg, BasicAction\>

[theme](../modules/theme.md).[<internal>](../modules/theme._internal_.md).ThunkDispatch

The dispatch method as modified by React-Thunk; overloaded so that you can
dispatch:
  - standard (object) actions: `dispatch()` returns the action itself
  - thunk actions: `dispatch()` returns the thunk's return value

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | `State` | The redux state |
| `ExtraThunkArg` | `ExtraThunkArg` | The extra argument passed to the inner function of thunks (if specified when setting up the Thunk middleware) |
| `BasicAction` | extends [`Action`](theme._internal_.Action.md) | The (non-thunk) actions that can be dispatched. |

## Callable

### ThunkDispatch

▸ **ThunkDispatch**<`ReturnType`\>(`thunkAction`): `ReturnType`

Accepts a thunk function, runs it, and returns whatever the thunk itself returns

#### Type parameters

| Name |
| :------ |
| `ReturnType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thunkAction` | [`ThunkAction`](../modules/theme._internal_.md#thunkaction)<`ReturnType`, `State`, `ExtraThunkArg`, `BasicAction`\> |

#### Returns

`ReturnType`

#### Defined in

node_modules/redux-thunk/es/types.d.ts:15

### ThunkDispatch

▸ **ThunkDispatch**<`Action`\>(`action`): `Action`

Accepts a standard action object, and returns that action object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Action` | extends [`Action`](theme._internal_.Action.md)<`any`, `Action`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `Action` |

#### Returns

`Action`

#### Defined in

node_modules/redux-thunk/es/types.d.ts:17

### ThunkDispatch

▸ **ThunkDispatch**<`ReturnType`, `Action`\>(`action`): `ReturnType` \| `Action`

A union of the other two overloads for TS inference purposes

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnType` | `ReturnType` |
| `Action` | extends [`Action`](theme._internal_.Action.md)<`any`, `Action`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `Action` \| [`ThunkAction`](../modules/theme._internal_.md#thunkaction)<`ReturnType`, `State`, `ExtraThunkArg`, `BasicAction`\> |

#### Returns

`ReturnType` \| `Action`

#### Defined in

node_modules/redux-thunk/es/types.d.ts:19

[fdk-store](../README.md) / [Exports](../modules.md) / [theme](theme.md) / <internal\>

# Module: <internal\>

## Table of contents

### Interfaces

- [Action](../interfaces/theme._internal_.Action.md)
- [ThunkDispatch](../interfaces/theme._internal_.ThunkDispatch.md)

### Type Aliases

- [Parameters](theme._internal_.md#parameters)
- [ReturnType](theme._internal_.md#returntype)
- [ThunkAction](theme._internal_.md#thunkaction)
- [ThunkActionDispatch](theme._internal_.md#thunkactiondispatch)

## Type Aliases

### Parameters

Ƭ **Parameters**<`T`\>: `T` extends (...`args`: infer P) => `any` ? `P` : `never`

Obtain the parameters of a function type in a tuple

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1617

___

### ReturnType

Ƭ **ReturnType**<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1627

___

### ThunkAction

Ƭ **ThunkAction**<`ReturnType`, `State`, `ExtraThunkArg`, `BasicAction`\>: (`dispatch`: [`ThunkDispatch`](../interfaces/theme._internal_.ThunkDispatch.md)<`State`, `ExtraThunkArg`, `BasicAction`\>, `getState`: () => `State`, `extraArgument`: `ExtraThunkArg`) => `ReturnType`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ReturnType` | `ReturnType` | The return type of the thunk's inner function |
| `State` | `State` | The redux state |
| `ExtraThunkArg` | `ExtraThunkArg` | Optional extra argument passed to the inner function (if specified when setting up the Thunk middleware) |
| `BasicAction` | extends [`Action`](../interfaces/theme._internal_.Action.md) | The (non-thunk) actions that can be dispatched. |

#### Type declaration

▸ (`dispatch`, `getState`, `extraArgument`): `ReturnType`

A "thunk" action (a callback function that can be dispatched to the Redux
store.)

Also known as the "thunk inner function", when used with the typical pattern
of an action creator function that returns a thunk action.

##### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkDispatch`](../interfaces/theme._internal_.ThunkDispatch.md)<`State`, `ExtraThunkArg`, `BasicAction`\> |
| `getState` | () => `State` |
| `extraArgument` | `ExtraThunkArg` |

##### Returns

`ReturnType`

#### Defined in

node_modules/redux-thunk/es/types.d.ts:34

___

### ThunkActionDispatch

Ƭ **ThunkActionDispatch**<`ActionCreator`\>: (...`args`: [`Parameters`](theme._internal_.md#parameters)<`ActionCreator`\>) => [`ReturnType`](theme._internal_.md#returntype)<[`ReturnType`](theme._internal_.md#returntype)<`ActionCreator`\>\>

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ActionCreator` | extends (...`args`: `any`[]) => [`ThunkAction`](theme._internal_.md#thunkaction)<`any`, `any`, `any`, `any`\> | Thunk action creator to be wrapped |

#### Type declaration

▸ (`...args`): [`ReturnType`](theme._internal_.md#returntype)<[`ReturnType`](theme._internal_.md#returntype)<`ActionCreator`\>\>

A generic type that takes a thunk action creator and returns a function
signature which matches how it would appear after being processed using
bindActionCreators(): a function that takes the arguments of the outer
function, and returns the return type of the inner "thunk" function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Parameters`](theme._internal_.md#parameters)<`ActionCreator`\> |

##### Returns

[`ReturnType`](theme._internal_.md#returntype)<[`ReturnType`](theme._internal_.md#returntype)<`ActionCreator`\>\>

#### Defined in

node_modules/redux-thunk/es/types.d.ts:43

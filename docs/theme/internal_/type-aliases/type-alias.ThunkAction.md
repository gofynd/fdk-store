[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [theme](../../README.md) > [<internal>](../README.md) > ThunkAction

# Type alias: ThunkAction`<ReturnType, State, ExtraThunkArg, BasicAction>`

> **ThunkAction**: \<`ReturnType`, `State`, `ExtraThunkArg`, `BasicAction`\> (`dispatch`, `getState`, `extraArgument`) => `ReturnType`

## Type parameters

| Parameter                                                             | Description                                          |
| :-------------------------------------------------------------------- | :--------------------------------------------------- |
| `ReturnType`                                                          | The return type of the thunk's inner function        |
| `State`                                                               | The redux state                                      |
| `ExtraThunkArg`                                                       | Optional extra argument passed to the inner function |
| <br />(if specified when setting up the Thunk middleware)             |
| `BasicAction` _extends_ [`Action`](../interfaces/interface.Action.md) | The (non-thunk) actions that can be dispatched.      |

A "thunk" action (a callback function that can be dispatched to the Redux
store.)

Also known as the "thunk inner function", when used with the typical pattern
of an action creator function that returns a thunk action.

## Parameters

| Parameter       | Type                                                                                                     |
| :-------------- | :------------------------------------------------------------------------------------------------------- |
| `dispatch`      | [`ThunkDispatch`](../interfaces/interface.ThunkDispatch.md)\< `State`, `ExtraThunkArg`, `BasicAction` \> |
| `getState`      | () => `State`                                                                                            |
| `extraArgument` | `ExtraThunkArg`                                                                                          |

## Returns

`ReturnType`

## Source

node_modules/redux-thunk/es/types.d.ts:34

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

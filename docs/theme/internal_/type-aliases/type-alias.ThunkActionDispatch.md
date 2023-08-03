[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [theme](../../README.md) > [<internal>](../README.md) > ThunkActionDispatch

# Type alias: ThunkActionDispatch`<ActionCreator>`

> **ThunkActionDispatch**: \<`ActionCreator`\> (...`args`) => [`ReturnType`](type-alias.ReturnType.md)\< [`ReturnType`](type-alias.ReturnType.md)\< `ActionCreator` \> \>

## Type parameters

| Parameter                                                                                                           | Description                        |
| :------------------------------------------------------------------------------------------------------------------ | :--------------------------------- |
| `ActionCreator` _extends_ (...`args`) => [`ThunkAction`](type-alias.ThunkAction.md)\< `any`, `any`, `any`, `any` \> | Thunk action creator to be wrapped |

A generic type that takes a thunk action creator and returns a function
signature which matches how it would appear after being processed using
bindActionCreators(): a function that takes the arguments of the outer
function, and returns the return type of the inner "thunk" function.

## Parameters

| Parameter | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| ...`args` | [`Parameters`](type-alias.Parameters.md)\< `ActionCreator` \> |

## Returns

[`ReturnType`](type-alias.ReturnType.md)\< [`ReturnType`](type-alias.ReturnType.md)\< `ActionCreator` \> \>

## Source

node_modules/redux-thunk/es/types.d.ts:43

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

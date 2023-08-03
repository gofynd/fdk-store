[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [theme](../../README.md) > [<internal>](../README.md) > Action

# Interface: Action`<T>`

An _action_ is a plain object that represents an intention to change the
state. Actions are the only way to get data into the store. Any data,
whether from UI events, network callbacks, or other sources such as
WebSockets needs to eventually be dispatched as actions.

Actions must have a `type` field that indicates the type of action being
performed. Types can be defined as constants and imported from another
module. It's better to use strings for `type` than Symbols because strings
are serializable.

Other than `type`, the structure of an action object is really up to you.
If you're interested, check out Flux Standard Action for recommendations on
how actions should be constructed.

## Type parameters

| Parameter | Default | Description                          |
| :-------- | :------ | :----------------------------------- |
| `T`       | `any`   | the type of the action's `type` tag. |

## Properties

### type

> **type**: `T`

#### Source

node_modules/redux/index.d.ts:19

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

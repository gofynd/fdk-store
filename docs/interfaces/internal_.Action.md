[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Action

# Interface: Action<T\>

[<internal>](../modules/internal_.md).Action

An *action* is a plain object that represents an intention to change the
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

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `any` | the type of the action's `type` tag. |

## Hierarchy

- **`Action`**

  ↳ [`AnyAction`](internal_.AnyAction.md)

## Table of contents

### Properties

- [type](internal_.Action.md#type)

## Properties

### type

• **type**: `T`

#### Defined in

node_modules/redux/index.d.ts:19

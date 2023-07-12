[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AnyAction

# Interface: AnyAction

[<internal>](../modules/internal_.md).AnyAction

An Action type which accepts any other properties.
This is mainly for the use of the `Reducer` type.
This is not part of `Action` itself to prevent types that extend `Action` from
having an index signature.

## Hierarchy

- [`Action`](internal_.Action.md)

  ↳ **`AnyAction`**

## Indexable

▪ [extraProps: `string`]: `any`

## Table of contents

### Properties

- [type](internal_.AnyAction.md#type)

## Properties

### type

• **type**: `any`

#### Inherited from

[Action](internal_.Action.md).[type](internal_.Action.md#type)

#### Defined in

node_modules/redux/index.d.ts:19

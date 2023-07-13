[fdk-store](../README.md) / [Exports](../modules.md) / [order](../modules/order.md) / default

# Class: default

[order](../modules/order.md).default

## Table of contents

### Constructors

- [constructor](order.default.md#constructor)

### Methods

- [getOrderById](order.default.md#getorderbyid)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/order.ts:8

## Methods

### getOrderById

▸ **getOrderById**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OrderById`](../modules/order._internal_.md#orderbyid)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetOrderByIdParam`](../modules/order._internal_.md#getorderbyidparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OrderById`](../modules/order._internal_.md#orderbyid)\>

#### Defined in

src/store/modules/order.ts:14

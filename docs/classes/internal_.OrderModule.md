[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OrderModule

# Class: OrderModule

[<internal>](../modules/internal_.md).OrderModule

## Table of contents

### Constructors

- [constructor](internal_.OrderModule.md#constructor)

### Methods

- [getOrderById](internal_.OrderModule.md#getorderbyid)

## Constructors

### constructor

• **new OrderModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/order.ts:8

## Methods

### getOrderById

▸ **getOrderById**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OrderById`](../modules/internal_.md#orderbyid)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetOrderByIdParam`](../modules/internal_.md#getorderbyidparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OrderById`](../modules/internal_.md#orderbyid)\>

#### Defined in

src/store/modules/order.ts:14

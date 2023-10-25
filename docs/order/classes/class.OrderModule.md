[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [order](../README.md) > OrderModule

# Class: OrderModule

## Constructors

### new OrderModule

> **new OrderModule**(`dispatch`): [`OrderModule`](class.OrderModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`OrderModule`](class.OrderModule.md)

#### Defined In

src/store/modules/order.ts:8

## Methods

### getOrderById

> **getOrderById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderById`](../internal_/type-aliases/type-alias.OrderById.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetOrderByIdParam`](../internal_/type-aliases/type-alias.GetOrderByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderById`](../internal_/type-aliases/type-alias.OrderById.md) \>

#### Defined In

src/store/modules/order.ts:14

***

### getOrders

> **getOrders**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderList`](../internal_/type-aliases/type-alias.OrderList.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetOrdersParam`](../internal_/type-aliases/type-alias.GetOrdersParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderList`](../internal_/type-aliases/type-alias.OrderList.md) \>

#### Defined In

src/store/modules/order.ts:17

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

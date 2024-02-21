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

### getCustomerDetailsByShipmentId

> **getCustomerDetailsByShipmentId**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomerDetailsResponse`](../internal_/type-aliases/type-alias.CustomerDetailsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCustomerDetailsByShipmentIdParam`](../internal_/type-aliases/type-alias.GetCustomerDetailsByShipmentIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomerDetailsResponse`](../internal_/type-aliases/type-alias.CustomerDetailsResponse.md) \>

#### Defined In

src/store/modules/order.ts:17

***

### getInvoiceByShipmentId

> **getInvoiceByShipmentId**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ResponseGetInvoiceShipment`](../internal_/type-aliases/type-alias.ResponseGetInvoiceShipment.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetInvoiceByShipmentIdParam`](../internal_/type-aliases/type-alias.GetInvoiceByShipmentIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ResponseGetInvoiceShipment`](../internal_/type-aliases/type-alias.ResponseGetInvoiceShipment.md) \>

#### Defined In

src/store/modules/order.ts:20

***

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

src/store/modules/order.ts:48

***

### getPosOrderById

> **getPosOrderById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderById`](../internal_/type-aliases/type-alias.OrderById.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPosOrderByIdParam`](../internal_/type-aliases/type-alias.GetPosOrderByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderById`](../internal_/type-aliases/type-alias.OrderById.md) \>

#### Defined In

src/store/modules/order.ts:23

***

### getShipmentBagReasons

> **getShipmentBagReasons**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentBagReasons`](../internal_/type-aliases/type-alias.ShipmentBagReasons.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetShipmentBagReasonsParam`](../internal_/type-aliases/type-alias.GetShipmentBagReasonsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentBagReasons`](../internal_/type-aliases/type-alias.ShipmentBagReasons.md) \>

#### Defined In

src/store/modules/order.ts:26

***

### getShipmentById

> **getShipmentById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentById`](../internal_/type-aliases/type-alias.ShipmentById.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetShipmentByIdParam`](../internal_/type-aliases/type-alias.GetShipmentByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentById`](../internal_/type-aliases/type-alias.ShipmentById.md) \>

#### Defined In

src/store/modules/order.ts:29

***

### getShipmentReasons

> **getShipmentReasons**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentReasons`](../internal_/type-aliases/type-alias.ShipmentReasons.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetShipmentReasonsParam`](../internal_/type-aliases/type-alias.GetShipmentReasonsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentReasons`](../internal_/type-aliases/type-alias.ShipmentReasons.md) \>

#### Defined In

src/store/modules/order.ts:32

***

### sendOtpToShipmentCustomer

> **sendOtpToShipmentCustomer**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SendOtpToCustomerResponse`](../internal_/type-aliases/type-alias.SendOtpToCustomerResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SendOtpToShipmentCustomerParam`](../internal_/type-aliases/type-alias.SendOtpToShipmentCustomerParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SendOtpToCustomerResponse`](../internal_/type-aliases/type-alias.SendOtpToCustomerResponse.md) \>

#### Defined In

src/store/modules/order.ts:35

***

### trackShipment

> **trackShipment**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentTrack`](../internal_/type-aliases/type-alias.ShipmentTrack.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`TrackShipmentParam`](../internal_/type-aliases/type-alias.TrackShipmentParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentTrack`](../internal_/type-aliases/type-alias.ShipmentTrack.md) \>

#### Defined In

src/store/modules/order.ts:38

***

### updateShipmentStatus

> **updateShipmentStatus**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentApplicationStatusResponse`](../internal_/type-aliases/type-alias.ShipmentApplicationStatusResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateShipmentStatusParam`](../internal_/type-aliases/type-alias.UpdateShipmentStatusParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShipmentApplicationStatusResponse`](../internal_/type-aliases/type-alias.ShipmentApplicationStatusResponse.md) \>

#### Defined In

src/store/modules/order.ts:41

***

### verifyOtpShipmentCustomer

> **verifyOtpShipmentCustomer**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpResponse`](../internal_/type-aliases/type-alias.VerifyOtpResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`VerifyOtpShipmentCustomerParam`](../internal_/type-aliases/type-alias.VerifyOtpShipmentCustomerParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyOtpResponse`](../internal_/type-aliases/type-alias.VerifyOtpResponse.md) \>

#### Defined In

src/store/modules/order.ts:44

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

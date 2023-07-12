[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Order

# Class: Order

[<internal>](../modules/internal_.md).Order

## Table of contents

### Constructors

- [constructor](internal_.Order.md#constructor)

### Properties

- [\_conf](internal_.Order.md#_conf)
- [\_relativeUrls](internal_.Order.md#_relativeurls)
- [\_urls](internal_.Order.md#_urls)

### Methods

- [getCustomerDetailsByShipmentId](internal_.Order.md#getcustomerdetailsbyshipmentid)
- [getInvoiceByShipmentId](internal_.Order.md#getinvoicebyshipmentid)
- [getOrderById](internal_.Order.md#getorderbyid)
- [getOrders](internal_.Order.md#getorders)
- [getPosOrderById](internal_.Order.md#getposorderbyid)
- [getProducts](internal_.Order.md#getproducts)
- [getShipmentBagReasons](internal_.Order.md#getshipmentbagreasons)
- [getShipmentById](internal_.Order.md#getshipmentbyid)
- [getShipmentReasons](internal_.Order.md#getshipmentreasons)
- [sendOtpToShipmentCustomer](internal_.Order.md#sendotptoshipmentcustomer)
- [trackShipment](internal_.Order.md#trackshipment)
- [updateShipmentStatus](internal_.Order.md#updateshipmentstatus)
- [updateUrls](internal_.Order.md#updateurls)
- [verifyOtpShipmentCustomer](internal_.Order.md#verifyotpshipmentcustomer)

## Constructors

### constructor

• **new Order**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getCustomerDetailsByShipmentId` | `string` |
| `getInvoiceByShipmentId` | `string` |
| `getOrderById` | `string` |
| `getOrders` | `string` |
| `getPosOrderById` | `string` |
| `getProducts` | `string` |
| `getShipmentBagReasons` | `string` |
| `getShipmentById` | `string` |
| `getShipmentReasons` | `string` |
| `sendOtpToShipmentCustomer` | `string` |
| `trackShipment` | `string` |
| `updateShipmentStatus` | `string` |
| `verifyOtpShipmentCustomer` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:20

## Methods

### getCustomerDetailsByShipmentId

▸ **getCustomerDetailsByShipmentId**(`arg?`): `Promise`<[`CustomerDetailsResponse`](../modules/internal_.md#customerdetailsresponse)\>

**`Name`**

getCustomerDetailsByShipmentId
@summary: Get Customer Details by Shipment Id
@description: Use this API to retrieve customer details such as mobileno using Shipment ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCustomerDetailsByShipmentIdParam`](../modules/internal_.md#getcustomerdetailsbyshipmentidparam) | Arg object. |

#### Returns

`Promise`<[`CustomerDetailsResponse`](../modules/internal_.md#customerdetailsresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:32

___

### getInvoiceByShipmentId

▸ **getInvoiceByShipmentId**(`arg?`): `Promise`<[`ResponseGetInvoiceShipment`](../modules/internal_.md#responsegetinvoiceshipment)\>

**`Name`**

getInvoiceByShipmentId
@summary: Get Invoice of a shipment
@description: Use this API to retrieve shipment invoice.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetInvoiceByShipmentIdParam`](../modules/internal_.md#getinvoicebyshipmentidparam) | Arg object. |

#### Returns

`Promise`<[`ResponseGetInvoiceShipment`](../modules/internal_.md#responsegetinvoiceshipment)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:41

___

### getOrderById

▸ **getOrderById**(`arg?`): `Promise`<[`OrderById`](../modules/internal_.md#orderbyid)\>

**`Name`**

getOrderById
@summary: Get details of an order
@description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOrderByIdParam`](../modules/internal_.md#getorderbyidparam) | Arg object. |

#### Returns

`Promise`<[`OrderById`](../modules/internal_.md#orderbyid)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:49

___

### getOrders

▸ **getOrders**(`arg?`): `Promise`<[`OrderList`](../modules/internal_.md#orderlist)\>

**`Name`**

getOrders
@summary: Get all orders
@description: Use this API to retrieve all the orders.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOrdersParam`](../modules/internal_.md#getordersparam) | Arg object. |

#### Returns

`Promise`<[`OrderList`](../modules/internal_.md#orderlist)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:57

___

### getPosOrderById

▸ **getPosOrderById**(`arg?`): `Promise`<[`OrderById`](../modules/internal_.md#orderbyid)\>

**`Name`**

getPosOrderById
@summary: Get POS Order
@description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPosOrderByIdParam`](../modules/internal_.md#getposorderbyidparam) | Arg object. |

#### Returns

`Promise`<[`OrderById`](../modules/internal_.md#orderbyid)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:65

___

### getProducts

▸ **getProducts**(`arg?`): `Promise`<[`ProductListResponse`](../modules/internal_.md#productlistresponse)\>

**`Name`**

getProducts
@summary:
@description:

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductsParam`](../modules/internal_.md#getproductsparam-1) | Arg object. |

#### Returns

`Promise`<[`ProductListResponse`](../modules/internal_.md#productlistresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:73

___

### getShipmentBagReasons

▸ **getShipmentBagReasons**(`arg?`): `Promise`<[`ShipmentBagReasons`](../modules/internal_.md#shipmentbagreasons)\>

**`Name`**

getShipmentBagReasons
@summary: Get reasons behind full or partial cancellation of a shipment
@description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetShipmentBagReasonsParam`](../modules/internal_.md#getshipmentbagreasonsparam) | Arg object. |

#### Returns

`Promise`<[`ShipmentBagReasons`](../modules/internal_.md#shipmentbagreasons)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:81

___

### getShipmentById

▸ **getShipmentById**(`arg?`): `Promise`<[`ShipmentById`](../modules/internal_.md#shipmentbyid)\>

**`Name`**

getShipmentById
@summary: Get details of a shipment
@description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetShipmentByIdParam`](../modules/internal_.md#getshipmentbyidparam) | Arg object. |

#### Returns

`Promise`<[`ShipmentById`](../modules/internal_.md#shipmentbyid)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:89

___

### getShipmentReasons

▸ **getShipmentReasons**(`arg?`): `Promise`<[`ShipmentReasons`](../modules/internal_.md#shipmentreasons)\>

**`Name`**

getShipmentReasons
@summary: Get reasons behind full or partial cancellation of a shipment
@description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetShipmentReasonsParam`](../modules/internal_.md#getshipmentreasonsparam) | Arg object. |

#### Returns

`Promise`<[`ShipmentReasons`](../modules/internal_.md#shipmentreasons)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:97

___

### sendOtpToShipmentCustomer

▸ **sendOtpToShipmentCustomer**(`arg?`): `Promise`<[`SendOtpToCustomerResponse`](../modules/internal_.md#sendotptocustomerresponse)\>

**`Name`**

sendOtpToShipmentCustomer
@summary: Send and Resend Otp code to Order-Shipment customer
@description: Use this API to send OTP to the customer of the mapped Shipment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SendOtpToShipmentCustomerParam`](../modules/internal_.md#sendotptoshipmentcustomerparam) | Arg object. |

#### Returns

`Promise`<[`SendOtpToCustomerResponse`](../modules/internal_.md#sendotptocustomerresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:106

___

### trackShipment

▸ **trackShipment**(`arg?`): `Promise`<[`ShipmentTrack`](../modules/internal_.md#shipmenttrack)\>

**`Name`**

trackShipment
@summary: Track shipment
@description: Track Shipment by shipment id, for application based on application Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`TrackShipmentParam`](../modules/internal_.md#trackshipmentparam) | Arg object. |

#### Returns

`Promise`<[`ShipmentTrack`](../modules/internal_.md#shipmenttrack)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:114

___

### updateShipmentStatus

▸ **updateShipmentStatus**(`arg?`): `Promise`<[`ShipmentApplicationStatusResponse`](../modules/internal_.md#shipmentapplicationstatusresponse)\>

**`Name`**

updateShipmentStatus
@summary: Update the shipment status
@description: Use this API to update the status of a shipment using its shipment ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateShipmentStatusParam`](../modules/internal_.md#updateshipmentstatusparam) | Arg object. |

#### Returns

`Promise`<[`ShipmentApplicationStatusResponse`](../modules/internal_.md#shipmentapplicationstatusresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:124

___

### updateUrls

▸ **updateUrls**(`urls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `any` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:21

___

### verifyOtpShipmentCustomer

▸ **verifyOtpShipmentCustomer**(`arg?`): `Promise`<[`VerifyOtpResponse`](../modules/internal_.md#verifyotpresponse)\>

**`Name`**

verifyOtpShipmentCustomer
@summary: Verify Otp code
@description: Use this API to verify OTP and create a session token with custom payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyOtpShipmentCustomerParam`](../modules/internal_.md#verifyotpshipmentcustomerparam) | Arg object. |

#### Returns

`Promise`<[`VerifyOtpResponse`](../modules/internal_.md#verifyotpresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationClient.d.ts:132

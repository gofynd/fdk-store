[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > ShipmentResponse

# Type alias: ShipmentResponse

> **ShipmentResponse**: `object`

## Type declaration

### `box_type`

> `optional` **box\_type**: `string`

- Box type of the shipment in which the
shipment will be delivered.

***

### `dp_id`

> `optional` **dp\_id**: `string`

- Delivery partner id of the shipment.

***

### `dp_options`

> `optional` **dp\_options**: `any`

- Delivery partner options that are available
to deliver the shipment.

***

### `fulfillment_id`

> `optional` **fulfillment\_id**: `number`

- Fulfilment id of the shipment.

***

### `fulfillment_type`

> `optional` **fulfillment\_type**: `string`

- Fulfilment type of shipment.

***

### `items`

> `optional` **items**: [`CartProductInfo`](type-alias.CartProductInfo.md)[]

- Item details in the shipment.

***

### `order_type`

> `optional` **order\_type**: `string`

- Order type of the shipment like pickAtStore
or HomeDelivery.

***

### `promise`

> `optional` **promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

***

### `shipment_type`

> `optional` **shipment\_type**: `string`

- Shipment type of the shipment returned
in get shipments API like single_shipment or multiple shipment. Single
Shipment means 1 item in 1 shipment and vice versa in the other one.

***

### `shipments`

> `optional` **shipments**: `number`

- Count of shipments that will be shipped.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3038

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3039

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

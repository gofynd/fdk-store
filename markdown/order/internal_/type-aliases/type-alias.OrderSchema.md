[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > OrderSchema

# Type alias: OrderSchema

> **OrderSchema**: `object`

## Type declaration

### `bags_for_reorder`

> `optional` **bags\_for\_reorder**: [`BagsForReorder`](type-alias.BagsForReorder.md)[]

- An array containing details
of bags available for reorder.

***

### `breakup_values`

> `optional` **breakup\_values**: [`BreakupValues`](type-alias.BreakupValues.md)[]

- An array containing the
breakup of various charges and discounts.

***

### `gstin_code`

> `optional` **gstin\_code**: `string`

- The GSTIN code for the shipment.

***

### `meta`

> `optional` **meta**: `any`

- An object containing additional metadata for the order.

***

### `order_created_time`

> `optional` **order\_created\_time**: `string`

- The date and time when the order was created.

***

### `order_created_ts`

> `optional` **order\_created\_ts**: `string`

- The timestamp when the order was created.

***

### `order_id`

> `optional` **order\_id**: `string`

- The unique identifier for the order.

***

### `shipments`

> `optional` **shipments**: [`Shipments`](type-alias.Shipments.md)[]

- An array containing details of
individual shipments within the order.

***

### `total_shipments_in_order`

> `optional` **total\_shipments\_in\_order**: `number`

- The total number of shipments
in the order.

***

### `user_info`

> `optional` **user\_info**: [`UserInfo`](type-alias.UserInfo.md)

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1708

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1709

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

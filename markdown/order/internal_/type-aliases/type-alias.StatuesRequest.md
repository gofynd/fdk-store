[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > StatuesRequest

# Type alias: StatuesRequest

> **StatuesRequest**: `object`

## Type declaration

### `exclude_bags_next_state`

> `optional` **exclude\_bags\_next\_state**: `string`

- State to be change for
Remaining Bag/Products.

***

### `shipments`

> `optional` **shipments**: [`ShipmentsRequest`](type-alias.ShipmentsRequest.md)[]

- A list containing information
about shipments.

***

### `status`

> `optional` **status**: `string`

- The status to which the entity is to be transitioned.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:2187

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:2188

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

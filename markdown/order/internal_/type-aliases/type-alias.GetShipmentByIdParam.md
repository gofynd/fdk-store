[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > GetShipmentByIdParam

# Type alias: GetShipmentByIdParam

> **GetShipmentByIdParam**: `object`

## Type declaration

### `allowInactive`

> `optional` **allowInactive**: `boolean`

- Flag to allow inactive shipments

***

### `shipmentId`

> **shipmentId**: `string`

- ID of the shipment. An order may contain
multiple items and may get divided into one or more shipment, each having
its own ID.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationValidator.d.ts:213

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

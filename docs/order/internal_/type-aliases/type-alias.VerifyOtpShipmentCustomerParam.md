[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > VerifyOtpShipmentCustomerParam

# Type alias: VerifyOtpShipmentCustomerParam

> **VerifyOtpShipmentCustomerParam**: `object`

## Type declaration

### `body`

> **body**: [`VerifyOtp`](type-alias.VerifyOtp.md)

***

### `orderId`

> **orderId**: `string`

- A unique number used for identifying and
tracking your orders.

***

### `shipmentId`

> **shipmentId**: `string`

- ID of the shipment. An order may contain
multiple items and may get divided into one or more shipment, each having
its own ID.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationValidator.d.ts:249

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

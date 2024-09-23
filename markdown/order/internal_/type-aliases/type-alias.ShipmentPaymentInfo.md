[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > ShipmentPaymentInfo

# Type alias: ShipmentPaymentInfo

> **ShipmentPaymentInfo**: `object`

## Type declaration

### `amount`

> `optional` **amount**: `number`

- Amount paid using this payment method.

***

### `display_name`

> `optional` **display\_name**: `string`

- The name of the payment method as it
should be displayed to the user.

***

### `logo`

> `optional` **logo**: `string`

- A URL to an image representing the payment method.

***

### `mode`

> `optional` **mode**: `string`

- Information about the payment source. For eg, NB_ICICI.

***

### `mop`

> `optional` **mop**: `string`

- Stands for "Mode of Payment". This is a short code
(like "COD" for Cash On Delivery) that represents the payment method used.

***

### `payment_mode`

> `optional` **payment\_mode**: `string`

- Information about the payment mode,
indicates whether COD or PREPAID.

***

### `status`

> `optional` **status**: `string`

- Indicates the current status of the payment,
Paid or Unpaid.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:750

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:751

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

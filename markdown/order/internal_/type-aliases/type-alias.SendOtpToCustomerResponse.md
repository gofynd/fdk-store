[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > SendOtpToCustomerResponse

# Type alias: SendOtpToCustomerResponse

> **SendOtpToCustomerResponse**: `object`

## Type declaration

### `message`

> `optional` **message**: `string`

- Message indicating the result of the request.

***

### `request_id`

> `optional` **request\_id**: `string`

- Unique identifier for the request.

***

### `resend_timer`

> `optional` **resend\_timer**: `number`

- Time in seconds before the OTP can be resent.

***

### `success`

> `optional` **success**: `boolean`

- Indicates whether the request was successful.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1901

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1902

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

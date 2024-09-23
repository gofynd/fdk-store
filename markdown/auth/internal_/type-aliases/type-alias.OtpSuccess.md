[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > OtpSuccess

# Type alias: OtpSuccess

> **OtpSuccess**: `object`

## Type declaration

### `country_code`

> `optional` **country\_code**: `string`

- The country specific prefix for the phone number.

***

### `message`

> `optional` **message**: `string`

- Additional information about the operation's result.

***

### `mobile`

> `optional` **mobile**: `string`

- The user's mobile number without the country code.

***

### `register_token`

> `optional` **register\_token**: `string`

- A token used for completing the
registration process.

***

### `request_id`

> `optional` **request\_id**: `string`

- A random uuid string used to track the OTP
send response.

***

### `resend_timer`

> `optional` **resend\_timer**: `number`

- The time in seconds before an OTP can be resent.

***

### `resend_token`

> `optional` **resend\_token**: `string`

- A token used to authorize the resending of an OTP.

***

### `success`

> `optional` **success**: `boolean`

- Whether the OTP send operation was successful.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1312

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1313

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

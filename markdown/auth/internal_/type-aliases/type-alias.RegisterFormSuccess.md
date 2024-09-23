[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > RegisterFormSuccess

# Type alias: RegisterFormSuccess

> **RegisterFormSuccess**: `object`

## Type declaration

### `country_code`

> `optional` **country\_code**: `string`

- The country specific prefix for the phone number.

***

### `email`

> `optional` **email**: `string`

- The email address provided during registration.

***

### `message`

> `optional` **message**: `string`

- A string containing additional information
about the operation's result.

***

### `mobile`

> `optional` **mobile**: `string`

- The user's phone mobile without the country code.

***

### `register_token`

> `optional` **register\_token**: `string`

- A token used for completing the
registration process.

***

### `request_id`

> `optional` **request\_id**: `string`

- A random uuid string used to track the
registration response.

***

### `resend_email_token`

> `optional` **resend\_email\_token**: `string`

- A token used to authorize the
resending of an OTP via email.

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

- A boolean value indicating whether the
registration operation was successful.

***

### `user_exists`

> `optional` **user\_exists**: `boolean`

- Whether the user already exists.

***

### `verify_email_otp`

> `optional` **verify\_email\_otp**: `boolean`

- Whether email OTP verification is required.

***

### `verify_mobile_otp`

> `optional` **verify\_mobile\_otp**: `boolean`

- Whether mobile OTP verification is required.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1218

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1219

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

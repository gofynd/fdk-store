[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > VerifyEmailOtpRequestSchema

# Type alias: VerifyEmailOtpRequestSchema

> **VerifyEmailOtpRequestSchema**: `object`

## Type declaration

### `action`

> `optional` **action**: `string`

- Action to verify the send or resent OTP.

***

### `email`

> `optional` **email**: `string`

- Email of a user to verify OTP.

***

### `otp`

> `optional` **otp**: `string`

- OTP for verification.

***

### `register_token`

> `optional` **register\_token**: `string`

- Unique temporary registration of the user.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:753

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:754

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

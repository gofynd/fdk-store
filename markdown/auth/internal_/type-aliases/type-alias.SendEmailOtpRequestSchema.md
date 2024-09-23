[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > SendEmailOtpRequestSchema

# Type alias: SendEmailOtpRequestSchema

> **SendEmailOtpRequestSchema**: `object`

## Type declaration

### `action`

> `optional` **action**: `string`

- Action to specify if to send or resent the OTP.

***

### `email`

> `optional` **email**: `string`

- Email of a user to send email OTP.

***

### `register_token`

> `optional` **register\_token**: `string`

- Unique temporary registration of the user.

***

### `token`

> `optional` **token**: `string`

- Token to validate the request.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:717

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:718

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > SendMobileForgotOtpRequestSchema

# Type alias: SendMobileForgotOtpRequestSchema

> **SendMobileForgotOtpRequestSchema**: `object`

## Type declaration

### `action`

> `optional` **action**: `string`

- Action to specify if to send or resent the OTP.

***

### `android_hash`

> `optional` **android\_hash**: `string`

- Unique hash value.

***

### `country_code`

> `optional` **country\_code**: `string`

- Country code for the phone number.

***

### `mobile`

> `optional` **mobile**: `string`

- Phone number of user.

***

### `token`

> `optional` **token**: `string`

- Token to validate the request.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:845

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:846

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

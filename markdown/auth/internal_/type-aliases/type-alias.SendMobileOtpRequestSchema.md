[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > SendMobileOtpRequestSchema

# Type alias: SendMobileOtpRequestSchema

> **SendMobileOtpRequestSchema**: `object`

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

### `encrypt_otp`

> `optional` **encrypt\_otp**: `boolean`

- Set to true if you want to encrypt the OTP.

***

### `force`

> `optional` **force**: `string`

- Force verify the OTP.

***

### `mobile`

> `optional` **mobile**: `string`

- Mobile number of user.

***

### `token`

> `optional` **token**: `string`

- Token to validate the request.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:813

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:814

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

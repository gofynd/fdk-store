[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > DeleteMobileNumberParam

# Type alias: DeleteMobileNumberParam

> **DeleteMobileNumberParam**: `object`

## Type declaration

### `active`

> **active**: `boolean`

- This is a boolean value to check if mobile
number is active 1.True - number is active 2. False - number is inactive.

***

### `countryCode`

> **countryCode**: `string`

- Country code of the phone number, e.g. 91.

***

### `phone`

> **phone**: `string`

- Phone number.

***

### `platform`

> `optional` **platform**: `string`

- ID of the application.

***

### `primary`

> **primary**: `boolean`

- This is a boolean value to check if mobile
number is primary number (main number) 1. True - number is primary 2. False
- number is not primary.

***

### `verified`

> **verified**: `boolean`

- This is a boolean value to check if mobile
number is verified 1. True - number is verified 2.False - number is not
verified yet.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationValidator.d.ts:331

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

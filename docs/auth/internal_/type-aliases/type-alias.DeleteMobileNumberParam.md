[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > DeleteMobileNumberParam

# Type alias: DeleteMobileNumberParam

> **DeleteMobileNumberParam**: `object`

## Type declaration

### `active`

> **active**: `boolean`

- This is a boolean value to check if mobile
number is active 1.True - Number is active 2. False - Number is inactive

***

### `countryCode`

> **countryCode**: `string`

- Country code of the phone number, e.g. 91

***

### `phone`

> **phone**: `string`

- Phone number

***

### `platform`

> `optional` **platform**: `string`

- ID of the application

***

### `primary`

> **primary**: `boolean`

- This is a boolean value to check if mobile
number is primary number (main number) 1. True - Number is primary 2. False
- Number is not primary

***

### `verified`

> **verified**: `boolean`

- This is a boolean value to check if mobile
number is verified 1. True - Number is verified 2.False - Number is not verified yet

## Defined In

node\_modules/fdk-client-javascript/sdk/application/User/UserApplicationValidator.d.ts:280

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

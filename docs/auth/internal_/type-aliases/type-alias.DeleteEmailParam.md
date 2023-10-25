[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > DeleteEmailParam

# Type alias: DeleteEmailParam

> **DeleteEmailParam**: `object`

## Type declaration

### `active`

> **active**: `boolean`

- This is a boolean value to check if email ID is
active 1. True - Email ID is active 2.False - Email ID is inactive

***

### `email`

> **email**: `string`

- The email ID to delete

***

### `platform`

> `optional` **platform**: `string`

- ID of the application

***

### `primary`

> **primary**: `boolean`

- This is a boolean value to check if email ID is
primary (main email ID) 1. True - Email ID is primary 2.False - Email ID is
not primary

***

### `verified`

> **verified**: `boolean`

- This is a boolean value to check if email ID
is verified 1. True - Email ID is verified 2.False - Email ID is not verified yet

## Defined In

node\_modules/fdk-client-javascript/sdk/application/User/UserApplicationValidator.d.ts:254

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

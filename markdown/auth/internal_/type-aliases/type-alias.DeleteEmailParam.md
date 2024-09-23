[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > DeleteEmailParam

# Type alias: DeleteEmailParam

> **DeleteEmailParam**: `object`

## Type declaration

### `active`

> **active**: `boolean`

- Boolean value to check if email id is active 1.
True - email id is active 2.False - email id is inactive.

***

### `email`

> **email**: `string`

- The email id to delete.

***

### `platform`

> `optional` **platform**: `string`

- ID of the application.

***

### `primary`

> **primary**: `boolean`

- Boolean value to check if email id is primary
(main email id) 1. True - email id is primary 2.False - email id is not primary.

***

### `verified`

> **verified**: `boolean`

- Boolean value to check if email id is verified
1. True - email id is verified 2.False - email id is not verified yet.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationValidator.d.ts:306

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

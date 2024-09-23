[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > SessionExpiry

# Type alias: SessionExpiry

> **SessionExpiry**: `object`

## Type declaration

### `duration`

> `optional` **duration**: `number`

- Number of days or hours based on type till
which the session can be rolled back.

***

### `is_rolling`

> `optional` **is\_rolling**: `boolean`

- Whether session needs to be rollback or not.

***

### `type`

> `optional` **type**: `string`

- Days or hours the type of time for session rollback.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1806

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1807

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > AppTokenResponse

# Type alias: AppTokenResponse

> **AppTokenResponse**: `object`

## Type declaration

### `__v`

> `optional` **\_\_v**: `number`

- Version key for tracking revisions. Default value is zero.

***

### `_id`

> `optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
of the token.

***

### `application`

> `optional` **application**: `string`

- Alphanumeric ID allotted to the current
application created within the current business account.

***

### `created_at`

> `optional` **created\_at**: `string`

- ISO 8601 timestamp of token creation.

***

### `modified_at`

> `optional` **modified\_at**: `string`

- ISO 8601 timestamp of token updation.

***

### `tokens`

> `optional` **tokens**: [`Tokens`](type-alias.Tokens.md)

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1034

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1035

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

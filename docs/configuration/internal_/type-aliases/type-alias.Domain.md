[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > Domain

# Type alias: Domain

> **Domain**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
of the sales channel domain

***

### `is_predefined`

> `optional` **is\_predefined**: `boolean`

- Domain is hosting domain or not.

***

### `is_primary`

> `optional` **is\_primary**: `boolean`

- Domain is primary or not. Primary domain
is the default/main domain.

***

### `is_shortlink`

> `optional` **is\_shortlink**: `boolean`

- Shortlink is present or not for the domain

***

### `name`

> `optional` **name**: `string`

***

### `verified`

> `optional` **verified**: `boolean`

- Domain is verified or not. TXT and A records
should propagate correctly.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1587

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1588

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

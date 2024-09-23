[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [logistic](../../README.md) > [<internal>](../README.md) > TATArticlesResponse

# Type alias: TATArticlesResponse

> **TATArticlesResponse**: `object`

## Type declaration

### `_manufacturing_time_seconds`

> `optional` **\_manufacturing\_time\_seconds**: `number`

- The manufacturing time
converted into seconds.

***

### `category`

> `optional` **category**: [`TATCategoryRequest`](type-alias.TATCategoryRequest.md)

***

### `error`

> `optional` **error**: [`TATErrorSchemaResponse`](type-alias.TATErrorSchemaResponse.md)

***

### `is_cod_available`

> `optional` **is\_cod\_available**: `boolean`

- Indicates whether Cash on Delivery
(COD) is available for the articles.

***

### `manufacturing_time`

> `optional` **manufacturing\_time**: `number`

- The time required to manufacture
the articles, measured in the unit specified by manufacturing_time_unit.

***

### `manufacturing_time_unit`

> `optional` **manufacturing\_time\_unit**: `string`

- The unit of measurement for
the manufacturing time such as hours or days.

***

### `promise`

> `optional` **promise**: [`TATPromiseResponse`](type-alias.TATPromiseResponse.md)

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:913

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:914

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

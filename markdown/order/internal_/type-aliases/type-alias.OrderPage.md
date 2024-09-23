[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > OrderPage

# Type alias: OrderPage

> **OrderPage**: `object`

## Type declaration

### `current`

> `optional` **current**: `number`

- Specifies the current page number. It helps in
identifying the position within the paginated results.

***

### `has_next`

> `optional` **has\_next**: `boolean`

- Indicates whether there is a next page
available. It is true if a next page exists and false if the current page
is the last one.

***

### `item_total`

> `optional` **item\_total**: `number`

- Total number of items available across all
pages. It provides a count of all the items that match the query criteria,
regardless of pagination.

***

### `size`

> `optional` **size**: `number`

- Represents the number of items on the current
page. It indicates how many items are included in each page of the
paginated response.

***

### `type`

> `optional` **type**: `string`

- Specifies type of pagination. If it is 'cursor'
based or 'number' based.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:636

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:637

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

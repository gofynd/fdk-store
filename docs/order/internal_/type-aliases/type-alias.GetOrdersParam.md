[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > GetOrdersParam

# Type alias: GetOrdersParam

> **GetOrdersParam**: `object`

## Type declaration

### `customMeta`

> `optional` **customMeta**: `string`

- A filter and retrieve data using special
fields included for special use-cases

***

### `fromDate`

> `optional` **fromDate**: `string`

- The date from which the orders should be retrieved.

***

### `pageNo`

> `optional` **pageNo**: `number`

- The page number to navigate through the given
set of results. Default value is 1.

***

### `pageSize`

> `optional` **pageSize**: `number`

- The number of items to retrieve in each page.
Default value is 10.

***

### `status`

> `optional` **status**: `number`

- A filter to retrieve orders by their current
status such as _placed_, _delivered_, etc.

***

### `toDate`

> `optional` **toDate**: `string`

- The date till which the orders should be retrieved.

## Defined In

node\_modules/fdk-client-javascript/sdk/application/Order/OrderApplicationValidator.d.ts:141

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

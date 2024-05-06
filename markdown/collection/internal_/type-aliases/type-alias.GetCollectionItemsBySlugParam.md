[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [collection](../../README.md) > [<internal>](../README.md) > GetCollectionItemsBySlugParam

# Type alias: GetCollectionItemsBySlugParam

> **GetCollectionItemsBySlugParam**: `object`

## Type declaration

### `f`

> `optional` **f**: `string`

- The search filter parameters. Filter parameters will
be passed in f parameter as shown in the example below. Double Pipe (||)
denotes the OR condition, whereas Triple-colon (:::) indicates a new filter
paramater applied as an AND condition.

***

### `filters`

> `optional` **filters**: `boolean`

- This is a boolean value, True for fetching
all filter parameters and False for disabling the filter parameters.

***

### `pageId`

> `optional` **pageId**: `string`

- Page ID to retrieve next set of results.

***

### `pageNo`

> `optional` **pageNo**: `number`

- Page Number to retrieve next set of results.

***

### `pageSize`

> `optional` **pageSize**: `number`

- The number of items to retrieve in each page.

***

### `pageType`

> `optional` **pageType**: `string`

- Page Type to retrieve set of results can be
cursor or number.

***

### `q`

> `optional` **q**: `string`

- The search query for entering partial or full name
of product, brand, category, or collection.

***

### `slug`

> **slug**: `string`

- A short, human-readable, URL-friendly identifier of
a collection. You can get slug value from the endpoint
/service/application/catalog/v1.0/collections/.

***

### `sortOn`

> `optional` **sortOn**: `string`

- The order in which the list of products should
be sorted, e.g. popularity, price, latest and discount, in either ascending
or descending order. See the supported values below.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:380

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

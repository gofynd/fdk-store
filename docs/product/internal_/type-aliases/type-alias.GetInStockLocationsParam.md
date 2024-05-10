[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [product](../../README.md) > [<internal>](../README.md) > GetInStockLocationsParam

# Type alias: GetInStockLocationsParam

> **GetInStockLocationsParam**: `object`

## Type declaration

### `city`

> `optional` **city**: `string`

- Search stores by the city in which they are situated.

***

### `latitude`

> `optional` **latitude**: `number`

- Latitude of the location from where one wants
to retreive the nearest stores, e.g. 72.8691788

***

### `longitude`

> `optional` **longitude**: `number`

- Longitude of the location from where one
wants to retreive the nearest stores, e.g. 19.1174114

***

### `pageNo`

> `optional` **pageNo**: `number`

- The page number to navigate through the given
set of results.

***

### `pageSize`

> `optional` **pageSize**: `number`

- Number of items to retrieve in each page.

***

### `q`

> `optional` **q**: `string`

- Search a store by its name or store_code.

***

### `range`

> `optional` **range**: `number`

- Use this to retrieve stores within a particular
range in meters, e.g. 10000, to indicate a 10km range

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:507

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

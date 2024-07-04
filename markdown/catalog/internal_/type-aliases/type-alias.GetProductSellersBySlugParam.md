[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > GetProductSellersBySlugParam

# Type alias: GetProductSellersBySlugParam

> **GetProductSellersBySlugParam**: `object`

## Type declaration

### `pageNo`

> `optional` **pageNo**: `number`

- The page number to navigate through the given
set of results.

***

### `pageSize`

> `optional` **pageSize**: `number`

- The number of items to retrieve in each page.

***

### `size`

> **size**: `string`

- A string indicating the size of the product, e.g.
S, M, XL. You can get slug value from the endpoint
/service/application/catalog/v1.0/products/sizes

***

### `slug`

> **slug**: `string`

- A short, human-readable, URL-friendly identifier of
a product. You can get slug value from the endpoint
/service/application/catalog/v1.0/products/

***

### `strategy`

> `optional` **strategy**: `string`

- Sort stores on the basis of strategy. eg,
fast-delivery, low-price, optimal.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:594

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

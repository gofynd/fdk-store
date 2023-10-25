[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [product](../../README.md) > [<internal>](../README.md) > GetProductSellersBySlugParam

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

### `pincode`

> `optional` **pincode**: `string`

- The 6-digit PIN Code of the area near which
the selling locations should be searched, e.g. 400059

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

node\_modules/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:602

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

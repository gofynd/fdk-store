[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > GetProductPriceBySlugParam

# Type alias: GetProductPriceBySlugParam

> **GetProductPriceBySlugParam**: `object`

## Type declaration

### `moq`

> `optional` **moq**: `number`

- An Integer indication the Minimum Order Quantity
of a product, e.g. 100.

***

### `pincode`

> `optional` **pincode**: `string`

- The PIN Code of the area near which the
selling locations should be searched, e.g. 400059.

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

### `storeId`

> `optional` **storeId**: `number`

- The ID of the store that is selling the
product, e.g. 1,2,3.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationValidator.d.ts:573

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

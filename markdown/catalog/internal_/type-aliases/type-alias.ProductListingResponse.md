[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > ProductListingResponse

# Type alias: ProductListingResponse

> **ProductListingResponse**: `object`

## Type declaration

### `filters`

> `optional` **filters**: [`ProductFilters`](type-alias.ProductFilters.md)[]

- List of filters available for
refining the product listings.

***

### `items`

> `optional` **items**: [`ProductListingDetail`](type-alias.ProductListingDetail.md)[]

- List of product details included
in the response.

***

### `page`

> **page**: [`Page`](../../../brands/internal_/type-aliases/type-alias.Page.md)

***

### `sort_on`

> `optional` **sort\_on**: [`ProductSortOn`](type-alias.ProductSortOn.md)[]

- List of sorting options available for
the product listings.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2307

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2308

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

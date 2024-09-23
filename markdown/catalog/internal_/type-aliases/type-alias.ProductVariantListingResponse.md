[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > ProductVariantListingResponse

# Type alias: ProductVariantListingResponse

> **ProductVariantListingResponse**: `object`

## Type declaration

### `display_type`

> `optional` **display\_type**: `string`

- The type of display for the product
variant (e.g., image, text, image, color).

***

### `header`

> `optional` **header**: `string`

- Header or title for the product variant section.

***

### `items`

> `optional` **items**: [`ProductVariantItemResponse`](type-alias.ProductVariantItemResponse.md)[]

- List of Upto 5 product
variant items.

***

### `key`

> `optional` **key**: `string`

- Attribute identifier of the variant.

***

### `total`

> `optional` **total**: `number`

- The total number of product variants available.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2016

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2017

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

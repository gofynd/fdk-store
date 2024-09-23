[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > ProductVariantItemResponse

# Type alias: ProductVariantItemResponse

> **ProductVariantItemResponse**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom JSON object for additional data
related to the product.

***

### `_custom_meta`

> `optional` **\_custom\_meta**: [`CustomMetaFields`](type-alias.CustomMetaFields.md)[]

- Custom metadata fields
associated with the product.

***

### `action`

> `optional` **action**: [`ProductListingAction`](../../../brands/internal_/type-aliases/type-alias.ProductListingAction.md)

***

### `color`

> `optional` **color**: `string`

- Color code or representation for the variant.

***

### `color_name`

> `optional` **color\_name**: `string`

- Name of the color for the variant.

***

### `is_available`

> `optional` **is\_available**: `boolean`

- Indicates whether the product variant is
available for purchase.

***

### `medias`

> `optional` **medias**: [`Media`](../../../brands/internal_/type-aliases/type-alias.Media.md)[]

- Media files associated with the product variant.

***

### `name`

> `optional` **name**: `string`

- Name of the product variant.

***

### `slug`

> `optional` **slug**: `string`

- URL-friendly identifier for the product.

***

### `uid`

> `optional` **uid**: `number`

- Unique identifier for the product variant.

***

### `value`

> `optional` **value**: `string`

- Value or label representing the product variant.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1788

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:1789

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > ProductGroupingModel

# Type alias: ProductGroupingModel

> **ProductGroupingModel**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `any`

***

### `choice`

> `optional` **choice**: `any`

- The choice of the product grouping.

***

### `company_id`

> `optional` **company\_id**: `number`

- The ID of the company that owns the product grouping.

***

### `created_by`

> `optional` **created\_by**: [`UserDetail`](type-alias.UserDetail.md)

- User details of the creator of the document

***

### `created_on`

> **created\_on**: `string`

- Timestamp of the creation of the document

***

### `is_active`

> `optional` **is\_active**: `boolean`

- Whether the product grouping is active.

***

### `logo`

> `optional` **logo**: `string`

- The URL for the logo of the product grouping.

***

### `meta`

> `optional` **meta**: `any`

- A dictionary containing metadata information.

***

### `modified_by`

> `optional` **modified\_by**: [`UserDetail`](type-alias.UserDetail.md)

- User details of the last modifier of
the document

***

### `modified_on`

> **modified\_on**: `string`

- Timestamp of the last modification of the document

***

### `name`

> **name**: `any`

- The name of the product grouping.

***

### `page_visibility`

> `optional` **page\_visibility**: `any`[]

- A list of page visibilities of the
product grouping.

***

### `products`

> **products**: [`ProductInGroup`](type-alias.ProductInGroup.md)[]

- A list of products in the grouping.

***

### `same_store_assignment`

> `optional` **same\_store\_assignment**: `boolean`

- Whether the products are
assigned to the same store.

***

### `slug`

> `optional` **slug**: `any`

- The unique identifier for the product grouping.

***

### `verified_by`

> `optional` **verified\_by**: [`UserDetail`](type-alias.UserDetail.md)

- User details of the verifier of the
document, if applicable

***

### `verified_on`

> `optional` **verified\_on**: `string`

- Timestamp of when the document was
verified, if applicable

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2110

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2111

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

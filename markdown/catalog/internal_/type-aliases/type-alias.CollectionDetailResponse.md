[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > CollectionDetailResponse

# Type alias: CollectionDetailResponse

> **CollectionDetailResponse**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom JSON object containing additional
properties specific to the collection.

***

### `_schedule`

> `optional` **\_schedule**: `any`

- Schedule details for the collection,
including timing and duration information.

***

### `allow_facets`

> `optional` **allow\_facets**: `boolean`

- Indicates if facets are allowed for
filtering within the collection.

***

### `allow_sort`

> `optional` **allow\_sort**: `boolean`

- Indicates if sorting is allowed for this collection.

***

### `app_id`

> `optional` **app\_id**: `string`

- Application ID associated with the collection.

***

### `badge`

> `optional` **badge**: `any`

- Badge information associated with the collection.

***

### `banners`

> `optional` **banners**: [`ImageUrls`](../../../brands/internal_/type-aliases/type-alias.ImageUrls.md)

***

### `cron`

> `optional` **cron**: `any`

- Cron schedule details related to the collection,
if applicable.

***

### `description`

> `optional` **description**: `string`

- Detailed description of the collection,.

***

### `is_active`

> `optional` **is\_active**: `boolean`

- Indicates whether the collection is active.

***

### `logo`

> `optional` **logo**: [`Media`](../../../brands/internal_/type-aliases/type-alias.Media.md)

***

### `meta`

> `optional` **meta**: `any`

- Metadata associated with the collection.

***

### `name`

> `optional` **name**: `string`

- The name of the collection.

***

### `priority`

> `optional` **priority**: `number`

- Priority level of the collection for sorting
or display purposes.

***

### `query`

> `optional` **query**: [`CollectionQuery`](type-alias.CollectionQuery.md)[]

- Search or filter query used to
dynamically generate the collection based on specific criteria or conditions.

***

### `slug`

> `optional` **slug**: `string`

- The URL-friendly identifier for the collection.

***

### `sort_on`

> `optional` **sort\_on**: `string`

- Criteria used to sort the items within the
collection, such as price, popularity, or newest first.

***

### `tag`

> `optional` **tag**: `string`[]

- Tags associated with the collection.

***

### `type`

> `optional` **type**: `string`

- Type of collection, specifying the nature or
category of the collection.

***

### `visible_facets_keys`

> `optional` **visible\_facets\_keys**: `string`[]

- Keys of the facets visible for
filtering within the collection.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2813

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2814

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

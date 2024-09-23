[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [collection](../../README.md) > [<internal>](../README.md) > GetCollectionDetailNest

# Type alias: GetCollectionDetailNest

> **GetCollectionDetailNest**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom JSON data associated with the collection.

***

### `_schedule`

> `optional` **\_schedule**: `any`

- The `Schedule` schema defines the timing and
details for recurring or one-time tasks. It includes information on when
the job should start and end, the frequency of the task, and any additional
metadata. This schema helps in scheduling jobs or tasks based on specified
timings and durations.

***

### `action`

> `optional` **action**: [`ProductListingAction`](../../../brands/internal_/type-aliases/type-alias.ProductListingAction.md)

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

- Cron details for scheduling related to the collection.

***

### `description`

> `optional` **description**: `string`

- A detailed description of the collection.

***

### `is_active`

> `optional` **is\_active**: `boolean`

- Indicates whether the collection is currently active.

***

### `logo`

> `optional` **logo**: [`Media`](../../../brands/internal_/type-aliases/type-alias.Media.md)

***

### `meta`

> `optional` **meta**: `any`

- Additional metadata related to the collection.

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

> `optional` **query**: [`CollectionQuery`](../../../catalog/internal_/type-aliases/type-alias.CollectionQuery.md)[]

- A list of queries used to filter the
collection.

***

### `slug`

> `optional` **slug**: `string`

- The URL-friendly identifier for the collection.

***

### `sort_on`

> `optional` **sort\_on**: `string`

- The attribute by which the collection items are sorted.

***

### `tags`

> `optional` **tags**: `string`[]

- Tags associated with the collection.

***

### `type`

> `optional` **type**: `string`

- Type of collections e.g query, items.

***

### `uid`

> `optional` **uid**: `string`

- The unique identifier for the collection.

***

### `visible_facets_keys`

> `optional` **visible\_facets\_keys**: `string`[]

- Keys of the facets visible for
filtering within the collection.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2656

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:2657

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > NavigationSchema

# Type alias: NavigationSchema

> **NavigationSchema**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- Unique identifier of an entry.

***

### `application`

> `optional` **application**: `string`

- Application ID - Identifier for a Sales channel.

***

### `archived`

> `optional` **archived**: `boolean`

- Whether navigation is archived or not.

***

### `created_by`

> `optional` **created\_by**: [`CreatedBySchema`](type-alias.CreatedBySchema.md)

***

### `date_meta`

> `optional` **date\_meta**: [`DateMeta`](type-alias.DateMeta.md)

***

### `name`

> `optional` **name**: `string`

- Name of the navigation link.

***

### `navigation`

> `optional` **navigation**: [`NavigationReference`](type-alias.NavigationReference.md)[]

- List of all navigations
links and relevant details.

***

### `orientation`

> `optional` **orientation**: [`Orientation`](type-alias.Orientation.md)

***

### `platform`

> `optional` **platform**: `string`[]

- Details regarding the platforms for which
this navigation is to applied on.

***

### `slug`

> `optional` **slug**: `string`

- A short, human-readable, URL-friendly identifier.

***

### `version`

> `optional` **version**: `number`

- A hardcoded key for internally managing
navigation versions.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1588

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1589

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

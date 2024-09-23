[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > PageSchema

# Type alias: PageSchema

> **PageSchema**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom JSON object for specific use cases.

***

### `_id`

> `optional` **\_id**: `string`

- Unique identifier of an entry.

***

### `_schedule`

> `optional` **\_schedule**: [`ScheduleSchema`](type-alias.ScheduleSchema.md)

***

### `application`

> `optional` **application**: `string`

- Application ID - Identifier for a Sales channel.

***

### `archived`

> `optional` **archived**: `boolean`

- Flag denoting whether the page is archived or not.

***

### `component_ids`

> `optional` **component\_ids**: `string`[]

- Components can be used to store
multiple components.

***

### `content`

> `optional` **content**: `any`[]

- Contents of a custom page.

***

### `content_path`

> `optional` **content\_path**: `string`

- A CDN URL at which the entire html
content can be fetched from.

***

### `created_by`

> `optional` **created\_by**: [`CreatedBySchema`](type-alias.CreatedBySchema.md)

***

### `date_meta`

> `optional` **date\_meta**: [`DateMeta`](type-alias.DateMeta.md)

***

### `description`

> `optional` **description**: `string`

- Description about the page.

***

### `feature_image`

> `optional` **feature\_image**: [`Asset`](type-alias.Asset.md)

***

### `orientation`

> `optional` **orientation**: `string`

- Orientation for Custom Pages - Landscape
or portrait.

***

### `page_meta`

> `optional` **page\_meta**: `any`[]

- List of Custom JSON object for specific use cases.

***

### `platform`

> `optional` **platform**: `string`

- Platform for Custom Pages - Denotes the device type.

***

### `published`

> `optional` **published**: `boolean`

- Whether page is active or not on website.

***

### `seo`

> `optional` **seo**: [`SEO`](type-alias.SEO.md)

***

### `slug`

> `optional` **slug**: `string`

- A short, human-readable, URL-friendly identifier.

***

### `tags`

> `optional` **tags**: `string`[]

- Tags under a page.

***

### `title`

> `optional` **title**: `string`

- The title of the page.

***

### `type`

> `optional` **type**: `string`

- Type of editor through which the page was created
so appropriate rendering engine is used.

***

### `visibility`

> `optional` **visibility**: `any`

- Visibility of Page.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1639

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1640

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

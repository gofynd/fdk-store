[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > BlogSchema

# Type alias: BlogSchema

> **BlogSchema**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom JSON object for specific use cases.

***

### `_id`

> `optional` **\_id**: `string`

- Unique identifier for an entry.

***

### `application`

> `optional` **application**: `string`

- Application ID - Identifier for a Sales channel.

***

### `archived`

> `optional` **archived**: `boolean`

- Boolean flag denoting whether blog is archived or not.

***

### `author`

> `optional` **author**: [`Author`](type-alias.Author.md)

***

### `content`

> `optional` **content**: [`ResourceContent`](type-alias.ResourceContent.md)[]

- Contents of blog.

***

### `date_meta`

> `optional` **date\_meta**: [`DateMeta`](type-alias.DateMeta.md)

***

### `feature_image`

> `optional` **feature\_image**: [`Asset`](type-alias.Asset.md)

***

### `publish_date`

> `optional` **publish\_date**: `string`

- Timestamp denoting when the blog was published.

***

### `published`

> `optional` **published**: `boolean`

- Boolean flag denoting whether blog is
published or not.

***

### `reading_time`

> `optional` **reading\_time**: `string`

- Estimated time required to read the blog.

***

### `seo`

> `optional` **seo**: [`SEO`](type-alias.SEO.md)

***

### `slug`

> `optional` **slug**: `string`

- A short, human-readable, URL-friendly identifier.

***

### `summary`

> `optional` **summary**: `string`

- A brief description of blog.

***

### `tags`

> `optional` **tags**: `string`[]

- Tags under a blog.

***

### `title`

> `optional` **title**: `string`

- Title of the Blog.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:955

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:956

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

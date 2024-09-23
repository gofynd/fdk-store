[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [theme](../../README.md) > [<internal>](../README.md) > AvailablePageSchema

# Type alias: AvailablePageSchema

> **AvailablePageSchema**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- The unique identifier for the object.

***

### `path`

> `optional` **path**: `string`

- The url path for the page. For example, 'about-us'.

***

### `props`

> `optional` **props**: `any`[]

- An array of properties associated with the
object, where each property is represented as an object.

***

### `sections`

> `optional` **sections**: [`AvailablePageSchemaSections`](type-alias.AvailablePageSchemaSections.md)[]

- An array of sections
that make up the page.

***

### `sections_meta`

> `optional` **sections\_meta**: [`AvailablePageSectionMetaAttributes`](type-alias.AvailablePageSectionMetaAttributes.md)[]

- An array
of metadata attributes for the sections of the page, each represented by an object.

***

### `seo`

> `optional` **seo**: [`AvailablePageSeo`](type-alias.AvailablePageSeo.md)

***

### `text`

> `optional` **text**: `string`

- The textual content associated with the page. For
example, 'about us'.

***

### `theme`

> `optional` **theme**: `string`

- The unique identifier for the theme associated
with the section.

***

### `type`

> `optional` **type**: `string`

- The type of the page, which can be 'system',
'custom', or 'sections'.

***

### `value`

> `optional` **value**: `string`

- The name of the page. For example, 'about-us'.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:568

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:569

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

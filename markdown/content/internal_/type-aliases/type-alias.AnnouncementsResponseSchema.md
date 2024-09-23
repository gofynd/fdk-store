[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > AnnouncementsResponseSchema

# Type alias: AnnouncementsResponseSchema

> **AnnouncementsResponseSchema**: `object`

## Type declaration

### `announcements`

> `optional` **announcements**: `any`

- List all the announcement bar details
and its contents.

***

### `refresh_pages`

> `optional` **refresh\_pages**: `string`[]

- List of page slugs on which
announcement should be fetched as soon as they are loaded.

***

### `refresh_rate`

> `optional` **refresh\_rate**: `number`

- Number of seconds after which api should
hit again to fetch new announcements.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1222

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1223

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

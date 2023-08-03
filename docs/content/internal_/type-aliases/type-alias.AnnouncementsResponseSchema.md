[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > AnnouncementsResponseSchema

# Type alias: AnnouncementsResponseSchema

> **AnnouncementsResponseSchema**: `object`

## Type declaration

### announcements

`optional` **announcements**: `any`

---

### refresh_pages

`optional` **refresh_pages**: `string`[]

- List of page slugs on which
  announcement should be fetched as soon as they are loaded

---

### refresh_rate

`optional` **refresh_rate**: `number`

- Number of seconds after which api should
  hit again to fetch new announcements

## Source

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:832

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:833

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [theme](../../README.md) > [<internal>](../README.md) > AvailablePageSeo

# Type alias: AvailablePageSeo

> **AvailablePageSeo**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- The unique identifier for the object.

***

### `breadcrumb`

> `optional` **breadcrumb**: [`SEObreadcrumb`](type-alias.SEObreadcrumb.md)[]

- An array representing breadcrumb
navigation, where each item provides information about a step in the
navigation path.

***

### `canonical_url`

> `optional` **canonical\_url**: `string`

- The canonical url of the page.

***

### `description`

> `optional` **description**: `string`

- The seo description of the page.

***

### `meta_tags`

> `optional` **meta\_tags**: [`SEOMetaItem`](type-alias.SEOMetaItem.md)[]

- An array of meta tags for the page,
each represented by an object.

***

### `sitemap`

> `optional` **sitemap**: [`SEOSitemap`](type-alias.SEOSitemap.md)

***

### `title`

> `optional` **title**: `string`

- The seo title of the page.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:683

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:684

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

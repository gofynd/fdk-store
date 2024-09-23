[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [share](../../README.md) > [<internal>](../README.md) > ShortLinkReq

# Type alias: ShortLinkReq

> **ShortLinkReq**: `object`

## Type declaration

### `active`

> `optional` **active**: `boolean`

- Status of the shortlink.

***

### `attribution`

> `optional` **attribution**: [`Attribution`](type-alias.Attribution.md)

***

### `campaign`

> `optional` **campaign**: [`CampaignShortLink`](type-alias.CampaignShortLink.md)

***

### `count`

> `optional` **count**: `number`

- Click count of shortlink.

***

### `enable_tracking`

> `optional` **enable\_tracking**: `boolean`

- Flag to enable tracking of a short link.

***

### `expire_at`

> `optional` **expire\_at**: `string`

- Expiry of the shortlink.

***

### `hash`

> `optional` **hash**: `string`

- A string value used for converting long URL to
short URL and vice-versa.

***

### `personalized`

> `optional` **personalized**: `boolean`

- To create personalized short links.

***

### `redirects`

> `optional` **redirects**: [`Redirects`](type-alias.Redirects.md)

***

### `social_media_tags`

> `optional` **social\_media\_tags**: [`SocialMediaTags`](type-alias.SocialMediaTags.md)

***

### `title`

> **title**: `string`

- Give a name to the link.

***

### `url`

> **url**: `string`

- The web address to shorten.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:200

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:201

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

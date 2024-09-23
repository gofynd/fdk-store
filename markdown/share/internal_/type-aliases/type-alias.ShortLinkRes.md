[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [share](../../README.md) > [<internal>](../README.md) > ShortLinkRes

# Type alias: ShortLinkRes

> **ShortLinkRes**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- Key used to uniquely identify document that
contains shortlink details.

***

### `active`

> `optional` **active**: `boolean`

- Status of the shortlink.

***

### `app_redirect`

> `optional` **app\_redirect**: `boolean`

- Application redirection flag of shortlink.

***

### `application`

> `optional` **application**: `string`

- The ID of the sales channel associated
with the shortlink.

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

### `created_at`

> `optional` **created\_at**: `string`

- The timestamp indicating when a record was
initially created.

***

### `created_by`

> `optional` **created\_by**: `string`

- Reference of the creator of the shortlink.

***

### `enable_tracking`

> `optional` **enable\_tracking**: `boolean`

- Flag to enable tracking of a short link.

***

### `expire_at`

> `optional` **expire\_at**: `string`

- Expiry of the shortlink.

***

### `fallback`

> `optional` **fallback**: `string`

- Fallback attributes of shortlink.

***

### `meta`

> `optional` **meta**: `any`

- Additional attributes of shortlink.

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

> `optional` **title**: `string`

- Name reference of the shortlink.

***

### `updated_at`

> `optional` **updated\_at**: `string`

- The timestamp indicating when a record was
last modified or updated.

***

### `url`

> `optional` **url**: [`UrlInfo`](type-alias.UrlInfo.md)

***

### `user_id`

> `optional` **user\_id**: `string`

- Identifier which can uniquely identify the user.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:260

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:261

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

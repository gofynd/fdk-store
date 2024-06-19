[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > Application

# Type alias: Application

> **Application**: `object`

## Type declaration

### `__v`

> `optional` **\_\_v**: `number`

- Version key for tracking revisions. Default value is zero.

***

### `_id`

> `optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
of the sales channel

***

### `app_type`

> `optional` **app\_type**: `string`

- It shows application is live or in development mode.

***

### `auth`

> `optional` **auth**: [`ApplicationAuth`](type-alias.ApplicationAuth.md)

***

### `banner`

> `optional` **banner**: [`SecureUrl`](type-alias.SecureUrl.md)

***

### `cache_ttl`

> `optional` **cache\_ttl**: `number`

- An integer value that specifies the number
of seconds until the key expires

***

### `channel_type`

> `optional` **channel\_type**: `string`

- It indicates different channel types like
store, website-and-mobile-apps. Default value is store

***

### `company_id`

> `optional` **company\_id**: `number`

- Numeric ID allotted to a business account
where the sales channel exists

***

### `cors`

> `optional` **cors**: [`ApplicationCors`](type-alias.ApplicationCors.md)

***

### `created_at`

> `optional` **created\_at**: `string`

- ISO 8601 timestamp of sales channel creation

***

### `description`

> `optional` **description**: `string`

- It contains detailed information about the
sales channel.

***

### `domain`

> `optional` **domain**: [`Domain`](type-alias.Domain.md)

***

### `domains`

> `optional` **domains**: [`Domain`](type-alias.Domain.md)[]

***

### `favicon`

> `optional` **favicon**: [`SecureUrl`](type-alias.SecureUrl.md)

***

### `is_active`

> `optional` **is\_active**: `boolean`

- Indicates sales channel is active or not active

***

### `is_internal`

> `optional` **is\_internal**: `boolean`

- Indicates whether a sales channel is
internal or not

***

### `logo`

> `optional` **logo**: [`SecureUrl`](type-alias.SecureUrl.md)

***

### `meta`

> `optional` **meta**: [`ApplicationMeta`](type-alias.ApplicationMeta.md)[]

***

### `mobile_logo`

> `optional` **mobile\_logo**: [`SecureUrl`](type-alias.SecureUrl.md)

***

### `mode`

> `optional` **mode**: `string`

***

### `modified_at`

> `optional` **modified\_at**: `string`

- ISO 8601 timestamp of sales channel updation

***

### `name`

> `optional` **name**: `string`

- Name of the sales channel, e.g. Zenz Fashion

***

### `owner`

> `optional` **owner**: `string`

- The unique identifier (24-digit Mongo Object ID)
of owner who owns the application

***

### `redirections`

> `optional` **redirections**: [`ApplicationRedirections`](type-alias.ApplicationRedirections.md)[]

***

### `slug`

> `optional` **slug**: `string`

***

### `status`

> `optional` **status**: `string`

***

### `token`

> `optional` **token**: `string`

- Random generated fix length string for sales
channel. It is required and auto-generated.

***

### `tokens`

> `optional` **tokens**: [`TokenSchema`](type-alias.TokenSchema.md)[]

***

### `website`

> `optional` **website**: [`ApplicationWebsite`](type-alias.ApplicationWebsite.md)

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1680

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1681

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

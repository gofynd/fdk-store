[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > Application

# Type alias: Application

> **Application**: `object`

## Type declaration

### \_\_v

`optional` **\_\_v**: `number`

- Version key for tracking revisions. Default value is zero.

---

### \_id

`optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
  of the sales channel

---

### app_type

`optional` **app_type**: `string`

- It shows application is live or in development mode.

---

### auth

`optional` **auth**: [`ApplicationAuth`](type-alias.ApplicationAuth.md)

---

### banner

`optional` **banner**: [`SecureUrl`](type-alias.SecureUrl.md)

---

### cache_ttl

`optional` **cache_ttl**: `number`

- An integer value that specifies the number
  of seconds until the key expires

---

### channel_type

`optional` **channel_type**: `string`

- It indicates different channel types like
  store, website-and-mobile-apps. Default value is store

---

### company_id

`optional` **company_id**: `number`

- Numeric ID allotted to a business account
  where the sales channel exists

---

### cors

`optional` **cors**: [`ApplicationCors`](type-alias.ApplicationCors.md)

---

### created_at

`optional` **created_at**: `string`

- ISO 8601 timestamp of sales channel creation

---

### description

`optional` **description**: `string`

- It contains detailed information about the
  sales channel.

---

### domain

`optional` **domain**: [`Domain`](type-alias.Domain.md)

---

### domains

`optional` **domains**: [`Domain`](type-alias.Domain.md)[]

---

### favicon

`optional` **favicon**: [`SecureUrl`](type-alias.SecureUrl.md)

---

### is_active

`optional` **is_active**: `boolean`

- Indicates sales channel is active or not active

---

### is_internal

`optional` **is_internal**: `boolean`

- Indicates whether a sales channel is
  internal or not

---

### logo

`optional` **logo**: [`SecureUrl`](type-alias.SecureUrl.md)

---

### meta

`optional` **meta**: [`ApplicationMeta`](type-alias.ApplicationMeta.md)[]

---

### mobile_logo

`optional` **mobile_logo**: [`SecureUrl`](type-alias.SecureUrl.md)

---

### name

`optional` **name**: `string`

- Name of the sales channel, e.g. Zenz Fashion

---

### owner

`optional` **owner**: `string`

- The unique identifier (24-digit Mongo Object ID)
  of owner who owns the application

---

### redirections

`optional` **redirections**: [`ApplicationRedirections`](type-alias.ApplicationRedirections.md)[]

---

### token

`optional` **token**: `string`

- Random generated fix length string for sales
  channel. It is required and auto-generated.

---

### updated_at

`optional` **updated_at**: `string`

- ISO 8601 timestamp of sales channel updation

---

### website

`optional` **website**: [`ApplicationWebsite`](type-alias.ApplicationWebsite.md)

## Source

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:801

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:802

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

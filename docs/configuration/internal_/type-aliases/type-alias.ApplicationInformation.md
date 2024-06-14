[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > ApplicationInformation

# Type alias: ApplicationInformation

> **ApplicationInformation**: `object`

## Type declaration

### `__v`

> `optional` **\_\_v**: `number`

- Version key for tracking revisions. Default value is zero.

***

### `_id`

> `optional` **\_id**: `string`

- Unique identifier (24-digit Mongo Object ID) of
the application information

***

### `address`

> `optional` **address**: [`InformationAddress`](type-alias.InformationAddress.md)

***

### `application`

> `optional` **application**: `string`

- Alphanumeric ID allotted to a sales
channel application created within a business account

***

### `business_highlights`

> `optional` **business\_highlights**: [`BusinessHighlights`](type-alias.BusinessHighlights.md)

***

### `copyright_text`

> `optional` **copyright\_text**: `string`

- Copyright statement usually seen at the
site's footer

***

### `created_at`

> `optional` **created\_at**: `string`

- ISO 8601 timestamp of creation of the
application information

***

### `links`

> `optional` **links**: [`Links`](type-alias.Links.md)

***

### `social_links`

> `optional` **social\_links**: [`SocialLinks`](type-alias.SocialLinks.md)

***

### `support`

> `optional` **support**: [`InformationSupport`](type-alias.InformationSupport.md)

***

### `updated_at`

> `optional` **updated\_at**: `string`

- ISO 8601 timestamp of updation of the
application information

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:968

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:969

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

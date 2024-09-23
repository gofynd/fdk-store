[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > AppCurrencyResponse

# Type alias: AppCurrencyResponse

> **AppCurrencyResponse**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- The unique identifier of the application.

***

### `application`

> `optional` **application**: `string`

- Alphanumeric ID allotted to an application
(sales channel website) created within a business account.

***

### `created_at`

> `optional` **created\_at**: `string`

- ISO 8601 timestamp of when the application
was created.

***

### `default_currency`

> `optional` **default\_currency**: [`DefaultCurrency`](type-alias.DefaultCurrency.md)

***

### `modified_at`

> `optional` **modified\_at**: `string`

- ISO 8601 timestamp of when the application
was last modified.

***

### `supported_currency`

> `optional` **supported\_currency**: [`Currency`](type-alias.Currency.md)[]

- A list of currencies supported
by the application.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2403

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2404

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

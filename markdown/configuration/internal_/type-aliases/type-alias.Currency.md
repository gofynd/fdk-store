[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > Currency

# Type alias: Currency

> **Currency**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
of the current sales channel supported currency.

***

### `code`

> `optional` **code**: `string`

- 3-character currency code, e.g. INR, USD, EUR.

***

### `country_code`

> `optional` **country\_code**: `string`

- Country code.

***

### `country_name`

> `optional` **country\_name**: `string`

- Country name.

***

### `created_at`

> `optional` **created\_at**: `string`

- ISO 8601 timestamp of sales channel support
currency creation.

***

### `decimal_digits`

> `optional` **decimal\_digits**: `number`

- Acceptable decimal limits for a given
currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
value of a currency.

***

### `is_active`

> `optional` **is\_active**: `boolean`

- Shows currency is enabled or not in current
sales channel.

***

### `modified_at`

> `optional` **modified\_at**: `string`

- ISO 8601 timestamp of sales channel
support currency updation.

***

### `name`

> `optional` **name**: `string`

- Name of the currency, e.g Indian Rupee.

***

### `symbol`

> `optional` **symbol**: `string`

- Unique symbol for identifying the currency, e.g. ₹.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1598

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1599

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

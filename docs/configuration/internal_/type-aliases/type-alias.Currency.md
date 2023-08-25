[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > Currency

# Type alias: Currency

> **Currency**: `object`

## Type declaration

### \_id

`optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
  of the current sales channel supported currency

---

### code

`optional` **code**: `string`

- 3-character currency code, e.g. INR, USD, EUR.

---

### created_at

`optional` **created_at**: `string`

- ISO 8601 timestamp of sales channel support
  currency creation

---

### decimal_digits

`optional` **decimal_digits**: `number`

- Acceptable decimal limits for a given
  currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
  value of a currency.

---

### is_active

`optional` **is_active**: `boolean`

- Shows currency is enabled or not in current
  sales channel

---

### name

`optional` **name**: `string`

- Name of the currency, e.g Indian Rupee

---

### symbol

`optional` **symbol**: `string`

- Unique symbol for identifying the currency, e.g. ₹

---

### updated_at

`optional` **updated_at**: `string`

- ISO 8601 timestamp of sales channel support
  currency updation

## Source

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1328

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1329

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

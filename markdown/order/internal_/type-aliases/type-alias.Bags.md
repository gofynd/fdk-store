[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > Bags

# Type alias: Bags

> **Bags**: `object`

## Type declaration

### `applied_promos`

> `optional` **applied\_promos**: [`AppliedPromos`](type-alias.AppliedPromos.md)[]

- An array containing
information about applied promotions.

***

### `article`

> `optional` **article**: [`Article`](type-alias.Article.md)

***

### `can_cancel`

> `optional` **can\_cancel**: `boolean`

- Indicates if the item can be canceled.

***

### `can_return`

> `optional` **can\_return**: `boolean`

- Indicates if the item can be returned.

***

### `currency_code`

> `optional` **currency\_code**: `string`

- The code of the currency used.

***

### `currency_symbol`

> `optional` **currency\_symbol**: `string`

- The symbol of the currency used.

***

### `current_status`

> `optional` **current\_status**: [`CurrentStatus`](type-alias.CurrentStatus.md)

***

### `delivery_date`

> `optional` **delivery\_date**: `string`

- The date and time when the item is
expected to be delivered .

***

### `financial_breakup`

> `optional` **financial\_breakup**: [`FinancialBreakup`](type-alias.FinancialBreakup.md)[]

- An array containing
financial details of the item.

***

### `id`

> `optional` **id**: `number`

- The unique identifier for the order item.

***

### `item`

> `optional` **item**: [`Item`](type-alias.Item.md)

***

### `line_number`

> `optional` **line\_number**: `number`

- The line number of the item in the order.

***

### `meta`

> `optional` **meta**: `any`

- An object containing metadata for the item.

***

### `parent_promo_bags`

> `optional` **parent\_promo\_bags**: `any`

- An object containing details of
parent promotional bags.

***

### `prices`

> `optional` **prices**: [`Prices`](type-alias.Prices.md)

***

### `quantity`

> `optional` **quantity**: `number`

- The quantity of the item.

***

### `returnable_date`

> `optional` **returnable\_date**: `string`

- The last date and time by which the
item can be returned.

***

### `seller_identifier`

> `optional` **seller\_identifier**: `string`

- The identifier for the seller.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1340

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1341

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > AppliedPromos

# Type alias: AppliedPromos

> **AppliedPromos**: `object`

## Type declaration

### `amount`

> `optional` **amount**: `number`

- The discount amount provided by the promotion.

***

### `applied_free_articles`

> `optional` **applied\_free\_articles**: [`AppliedFreeArticles`](type-alias.AppliedFreeArticles.md)[]

- An array
containing details of free articles applied under the promotion.

***

### `article_quantity`

> `optional` **article\_quantity**: `number`

- The quantity of articles required to
qualify for the promotion.

***

### `mrp_promotion`

> `optional` **mrp\_promotion**: `boolean`

- Indicates if the promotion is applied to the MRP.

***

### `promo_id`

> `optional` **promo\_id**: `string`

- The unique identifier for the promotion.

***

### `promotion_name`

> `optional` **promotion\_name**: `string`

- The name of the promotion .

***

### `promotion_type`

> `optional` **promotion\_type**: `string`

- The type of promotion.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1154

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:1155

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

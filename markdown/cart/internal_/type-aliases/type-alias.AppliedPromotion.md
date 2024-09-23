[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > AppliedPromotion

# Type alias: AppliedPromotion

> **AppliedPromotion**: `object`

## Type declaration

### `amount`

> `optional` **amount**: `number`

- Per unit discount amount applied with current promotion.

***

### `applied_free_articles`

> `optional` **applied\_free\_articles**: [`AppliedFreeArticles`](type-alias.AppliedFreeArticles.md)[]

- Applied free
article for free gift item promotions.

***

### `article_quantity`

> `optional` **article\_quantity**: `number`

- Quantity of article on which
promotion is applicable.

***

### `buy_rules`

> `optional` **buy\_rules**: [`BuyRules`](type-alias.BuyRules.md)[]

- Buy rules for promotions.

***

### `code`

> `optional` **code**: `string`

- Promotion code.

***

### `discount_rules`

> `optional` **discount\_rules**: [`DiscountRulesApp`](type-alias.DiscountRulesApp.md)[]

- Discount rules for promotions.

***

### `meta`

> `optional` **meta**: `any`

- Meta object for extra data.

***

### `mrp_promotion`

> `optional` **mrp\_promotion**: `boolean`

- If applied promotion is applied on
product MRP or ESP.

***

### `offer_text`

> `optional` **offer\_text**: `string`

- Offer text of current promotion.

***

### `ownership`

> `optional` **ownership**: [`Ownership`](type-alias.Ownership.md)

- Ownership of promotion.

***

### `promo_id`

> `optional` **promo\_id**: `string`

- Promotion id.

***

### `promotion_group`

> `optional` **promotion\_group**: `string`

- Promotion group for the promotion.

***

### `promotion_name`

> `optional` **promotion\_name**: `string`

- Promotion name of current promotion.

***

### `promotion_type`

> `optional` **promotion\_type**: `string`

- Promotion type of current promotion.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1266

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1267

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

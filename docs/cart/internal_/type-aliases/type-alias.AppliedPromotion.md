[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > AppliedPromotion

# Type alias: AppliedPromotion

> **AppliedPromotion**: `object`

## Type declaration

### amount

`optional` **amount**: `number`

- Per unit discount amount applied with current promotion

---

### applied_free_articles

`optional` **applied_free_articles**: [`AppliedFreeArticles`](type-alias.AppliedFreeArticles.md)[]

- Applied free
  article for free gift item promotions

---

### article_quantity

`optional` **article_quantity**: `number`

- Quantity of article on which
  promotion is applicable

---

### buy_rules

`optional` **buy_rules**: [`BuyRules`](type-alias.BuyRules.md)[]

- Buy rules for promotions

---

### discount_rules

`optional` **discount_rules**: [`DiscountRulesApp`](type-alias.DiscountRulesApp.md)[]

- Discount rules for promotions

---

### mrp_promotion

`optional` **mrp_promotion**: `boolean`

- If applied promotion is applied on
  product MRP or ESP

---

### ownership

`optional` **ownership**: [`Ownership`](type-alias.Ownership.md)

- Ownership of promotion

---

### promo_id

`optional` **promo_id**: `string`

- Promotion id

---

### promotion_group

`optional` **promotion_group**: `string`

- Promotion group for the promotion

---

### promotion_name

`optional` **promotion_name**: `string`

- Promotion name of current promotion

---

### promotion_offer_text

`optional` **promotion_offer_text**: `string`

- Offer text of current promotion

---

### promotion_type

`optional` **promotion_type**: `string`

- Promotion type of current promotion

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1010

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1011

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

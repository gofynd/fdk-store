[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > LadderPriceOffer

# Type alias: LadderPriceOffer

> **LadderPriceOffer**: `object`

## Type declaration

### buy_rules

`optional` **buy_rules**: `any`

- Buy rules of promotions

---

### calculate_on

`optional` **calculate_on**: `string`

- If this ladder offer is to be calculated
  on MRP or ESP price

---

### description

`optional` **description**: `string`

- Offer details including T&C

---

### discount_rules

`optional` **discount_rules**: `any`[]

- Discount rules of promotions

---

### free_gift_items

`optional` **free_gift_items**: [`FreeGiftItems`](type-alias.FreeGiftItems.md)[]

- Details of free gift items

---

### id

`optional` **id**: `string`

- Promotion id

---

### offer_prices

`optional` **offer_prices**: [`LadderOfferItem`](type-alias.LadderOfferItem.md)[]

---

### offer_text

`optional` **offer_text**: `string`

- Offer title

---

### promotion_group

`optional` **promotion_group**: `string`

- Group of promotion belongs to

---

### valid_till

`optional` **valid_till**: `string`

- Datetime ISOString for promotion end date

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1575

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1576

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

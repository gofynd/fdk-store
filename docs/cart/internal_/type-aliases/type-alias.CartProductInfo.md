[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartProductInfo

# Type alias: CartProductInfo

> **CartProductInfo**: `object`

## Type declaration

### article

`optional` **article**: [`ProductArticle`](type-alias.ProductArticle.md)

---

### availability

`optional` **availability**: [`ProductAvailability`](type-alias.ProductAvailability.md)

---

### bulk_offer

`optional` **bulk_offer**: `any`

---

### coupon

`optional` **coupon**: [`CouponDetails`](type-alias.CouponDetails.md)

---

### coupon_message

`optional` **coupon_message**: `string`

---

### custom_order

`optional` **custom_order**: `any`

---

### delivery_promise

`optional` **delivery_promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

---

### discount

`optional` **discount**: `string`

---

### identifiers

**identifiers**: [`CartProductIdentifer`](type-alias.CartProductIdentifer.md)

---

### is_set

`optional` **is_set**: `boolean`

---

### key

`optional` **key**: `string`

---

### message

`optional` **message**: `string`

---

### moq

`optional` **moq**: `any`

---

### parent_item_identifiers

`optional` **parent_item_identifiers**: `any`

---

### price

`optional` **price**: [`ProductPriceInfo`](type-alias.ProductPriceInfo.md)

---

### price_per_unit

`optional` **price_per_unit**: [`ProductPriceInfo`](type-alias.ProductPriceInfo.md)

---

### product

`optional` **product**: [`CartProduct`](type-alias.CartProduct.md)

---

### promo_meta

`optional` **promo_meta**: [`PromoMeta`](type-alias.PromoMeta.md)

---

### promotions_applied

`optional` **promotions_applied**: [`AppliedPromotion`](type-alias.AppliedPromotion.md)[]

---

### quantity

`optional` **quantity**: `number`

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1225

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1226

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

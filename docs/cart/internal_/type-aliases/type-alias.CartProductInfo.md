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

- Product bulk offer

---

### coupon

`optional` **coupon**: [`CouponDetails`](type-alias.CouponDetails.md)

---

### coupon_message

`optional` **coupon_message**: `string`

- Coupon applied message along with coupon code

---

### custom_order

`optional` **custom_order**: `any`

---

### delivery_promise

`optional` **delivery_promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

---

### discount

`optional` **discount**: `string`

- Discount for the selected product

---

### identifiers

**identifiers**: [`CartProductIdentifer`](type-alias.CartProductIdentifer.md)

---

### is_set

`optional` **is_set**: `boolean`

---

### key

`optional` **key**: `string`

- Key of product created by combining product unique
  id and size

---

### message

`optional` **message**: `string`

- Product related messages if any error else empty string

---

### moq

`optional` **moq**: `any`

- Maximum & minimum order quantity information

---

### parent_item_identifiers

`optional` **parent_item_identifiers**: `any`

- Contains information about
  parent item in case of parent-child relation

---

### price

`optional` **price**: [`ProductPriceInfo`](type-alias.ProductPriceInfo.md)

- Refers to product's base and converted price

---

### price_per_unit

`optional` **price_per_unit**: [`ProductPriceInfo`](type-alias.ProductPriceInfo.md)

- Refers to product's base and
  converted price per unit

---

### product

`optional` **product**: [`CartProduct`](type-alias.CartProduct.md)

---

### promo_meta

`optional` **promo_meta**: [`PromoMeta`](type-alias.PromoMeta.md)

- Promo meta information

---

### promotions_applied

`optional` **promotions_applied**: [`AppliedPromotion`](type-alias.AppliedPromotion.md)[]

---

### quantity

`optional` **quantity**: `number`

- Quantity of product

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1350

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1351

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartDetailResponse

# Type alias: CartDetailResponse

> **CartDetailResponse**: `object`

## Type declaration

### applied_promo_details

`optional` **applied_promo_details**: [`AppliedPromotion`](type-alias.AppliedPromotion.md)[]

---

### breakup_values

`optional` **breakup_values**: [`CartBreakup`](type-alias.CartBreakup.md)

---

### buy_now

`optional` **buy_now**: `boolean`

---

### checkout_mode

`optional` **checkout_mode**: `string`

---

### comment

`optional` **comment**: `string`

---

### coupon_text

`optional` **coupon_text**: `string`

---

### currency

`optional` **currency**: [`CartCurrency`](type-alias.CartCurrency.md)

---

### delivery_charge_info

`optional` **delivery_charge_info**: `string`

---

### delivery_promise

`optional` **delivery_promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

---

### gstin

`optional` **gstin**: `string`

---

### id

`optional` **id**: `string`

---

### is_valid

`optional` **is_valid**: `boolean`

---

### items

`optional` **items**: [`CartProductInfo`](type-alias.CartProductInfo.md)[]

---

### last_modified

`optional` **last_modified**: `string`

---

### message

`optional` **message**: `string`

---

### pan_config

`optional` **pan_config**: `any`

---

### pan_no

`optional` **pan_no**: `string`

---

### payment_selection_lock

`optional` **payment_selection_lock**: [`PaymentSelectionLock`](type-alias.PaymentSelectionLock.md)

---

### restrict_checkout

`optional` **restrict_checkout**: `boolean`

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1141

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1142

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

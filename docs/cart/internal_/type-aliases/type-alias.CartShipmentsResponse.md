[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartShipmentsResponse

# Type alias: CartShipmentsResponse

> **CartShipmentsResponse**: `object`

## Type declaration

### breakup_values

`optional` **breakup_values**: [`CartBreakup`](type-alias.CartBreakup.md)

---

### buy_now

`optional` **buy_now**: `boolean`

---

### cart_id

`optional` **cart_id**: `number`

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

### error

`optional` **error**: `boolean`

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

### last_modified

`optional` **last_modified**: `string`

---

### message

`optional` **message**: `string`

---

### payment_selection_lock

`optional` **payment_selection_lock**: [`PaymentSelectionLock`](type-alias.PaymentSelectionLock.md)

---

### restrict_checkout

`optional` **restrict_checkout**: `boolean`

---

### shipments

`optional` **shipments**: [`ShipmentResponse`](type-alias.ShipmentResponse.md)[]

---

### uid

`optional` **uid**: `string`

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1249

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1250

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

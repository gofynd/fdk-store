[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartCheckoutDetailRequest

# Type alias: CartCheckoutDetailRequest

> **CartCheckoutDetailRequest**: `object`

## Type declaration

### address_id

`optional` **address_id**: `string`

---

### aggregator

`optional` **aggregator**: `string`

---

### billing_address

`optional` **billing_address**: `any`

---

### billing_address_id

`optional` **billing_address_id**: `string`

---

### callback_url

`optional` **callback_url**: `string`

---

### custom_meta

`optional` **custom_meta**: [`CartCheckoutCustomMeta`](type-alias.CartCheckoutCustomMeta.md)[]

---

### customer_details

`optional` **customer_details**: [`CustomerDetails`](type-alias.CustomerDetails.md)

- Customer details

---

### delivery_address

`optional` **delivery_address**: `any`

---

### extra_meta

`optional` **extra_meta**: `any`

---

### id

`optional` **id**: `string`

---

### merchant_code

`optional` **merchant_code**: `string`

---

### meta

`optional` **meta**: `any`

---

### order_type

`optional` **order_type**: `string`

---

### ordering_store

`optional` **ordering_store**: `number`

---

### payment_auto_confirm

`optional` **payment_auto_confirm**: `boolean`

---

### payment_identifier

`optional` **payment_identifier**: `string`

---

### payment_mode

**payment_mode**: `string`

---

### payment_params

`optional` **payment_params**: `any`

---

### staff

`optional` **staff**: [`StaffCheckout`](type-alias.StaffCheckout.md)

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1138

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1139

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CheckCart

# Type alias: CheckCart

> **CheckCart**: `object`

## Type declaration

### `breakup_values`

> `optional` **breakup\_values**: [`CartBreakup`](type-alias.CartBreakup.md)

***

### `buy_now`

> `optional` **buy\_now**: `boolean`

- Buy now flag of user cart.

***

### `cart_id`

> `optional` **cart\_id**: `number`

- Cart id of the user cart for which the order placed.

***

### `checkout_mode`

> `optional` **checkout\_mode**: `string`

- Checkout mode of user cart.

***

### `cod_available`

> `optional` **cod\_available**: `boolean`

- Whether Cash On Delivery available.

***

### `cod_charges`

> `optional` **cod\_charges**: `number`

- Cash On Delivery charges of the user cart.

***

### `cod_message`

> `optional` **cod\_message**: `string`

- Cash On Delivery message for the order placed.

***

### `comment`

> `optional` **comment**: `string`

- Comment message added in cart after order placed.

***

### `coupon_text`

> `optional` **coupon\_text**: `string`

- Coupon text of the applied coupon on order placed.

***

### `currency`

> `optional` **currency**: [`CartCurrency`](type-alias.CartCurrency.md)

***

### `custom_cart_meta`

> `optional` **custom\_cart\_meta**: `any`

- Meta data for customCart of user.

***

### `delivery_charge_info`

> `optional` **delivery\_charge\_info**: `string`

- Delivery charge in information
message on shipment.

***

### `delivery_charge_order_value`

> `optional` **delivery\_charge\_order\_value**: `number`

- Delivery charge order value.

***

### `delivery_charges`

> `optional` **delivery\_charges**: `number`

- Delivery charges of the order placed
via checkout API.

***

### `delivery_promise`

> `optional` **delivery\_promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

***

### `error_message`

> `optional` **error\_message**: `string`

- Error details if any error occurs which
includes type of error, error code and error message.

***

### `gstin`

> `optional` **gstin**: `string`

- GSTIN number added in cart.

***

### `id`

> `optional` **id**: `string`

- Cart id of the user cart.

***

### `is_valid`

> `optional` **is\_valid**: `boolean`

- Valid flag fotr the checkout response if
order placed was valid.

***

### `items`

> `optional` **items**: [`CartProductInfo`](type-alias.CartProductInfo.md)[]

- Items details in cart after order placed.

***

### `last_modified`

> `optional` **last\_modified**: `string`

- Last modified timestamp of cart.

***

### `message`

> `optional` **message**: `string`

- Message of the cart checkout API response.

***

### `order_id`

> `optional` **order\_id**: `string`

- Order id generated after placing order.

***

### `payment_selection_lock`

> `optional` **payment\_selection\_lock**: [`PaymentSelectionLock`](type-alias.PaymentSelectionLock.md)

***

### `restrict_checkout`

> `optional` **restrict\_checkout**: `boolean`

- Restrict checkout flag to restrict
the checkout process.

***

### `store_code`

> `optional` **store\_code**: `string`

- Store code from which the order placed.

***

### `store_emps`

> `optional` **store\_emps**: `any`[]

- Store employees data.

***

### `success`

> `optional` **success**: `boolean`

- Success flag of checkout cart API response.

***

### `uid`

> `optional` **uid**: `string`

- Cart id of user cart.

***

### `user_type`

> `optional` **user\_type**: `string`

- User type of the cart who places the order.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3337

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3338

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

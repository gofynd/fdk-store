[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartShipmentsResponse

# Type alias: CartShipmentsResponse

> **CartShipmentsResponse**: `object`

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

- Cart id of the user cart.

***

### `checkout_mode`

> `optional` **checkout\_mode**: `string`

- Checkout mode of cart.

***

### `comment`

> `optional` **comment**: `string`

- Comment message added in cart.

***

### `coupon_text`

> `optional` **coupon\_text**: `string`

- Coupon text of coupon applied on cart.

***

### `currency`

> `optional` **currency**: [`CartCurrency`](type-alias.CartCurrency.md)

***

### `custom_cart_meta`

> `optional` **custom\_cart\_meta**: `any`

- Custom meta details added cart
checkout API payload.

***

### `delivery_charge_info`

> `optional` **delivery\_charge\_info**: `string`

- Delivery charge in information
message on shipment.

***

### `delivery_promise`

> `optional` **delivery\_promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

***

### `error`

> `optional` **error**: `boolean`

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

- Cart validity flag determines the if the
response is valid or not.

***

### `last_modified`

> `optional` **last\_modified**: `string`

- Last modified timestamp of cart.

***

### `message`

> `optional` **message**: `string`

- Response message of get shipments API.

***

### `payment_selection_lock`

> `optional` **payment\_selection\_lock**: [`PaymentSelectionLock`](type-alias.PaymentSelectionLock.md)

***

### `restrict_checkout`

> `optional` **restrict\_checkout**: `boolean`

- Restrict checkout flag to restrict
the checkout process.

***

### `shipments`

> `optional` **shipments**: [`ShipmentResponse`](type-alias.ShipmentResponse.md)[]

- List of Shipments which includes
shipment data like shipment items, shipment promise, Shipment type,
shipment order type, shipment dp options etc.

***

### `uid`

> `optional` **uid**: `string`

- Cart id of the user cart.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3084

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3085

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

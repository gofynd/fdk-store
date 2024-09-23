[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > SharedCart

# Type alias: SharedCart

> **SharedCart**: `object`

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

- Cart id of user cart for generating cart sharing token.

***

### `checkout_mode`

> `optional` **checkout\_mode**: `string`

- Checkout mode of address on which
address to be used for which checkout mode of cart.

***

### `comment`

> `optional` **comment**: `string`

- Comment message added in user cart.

***

### `coupon_text`

> `optional` **coupon\_text**: `string`

- Coupon text of the applied coupon on user cart.

***

### `currency`

> `optional` **currency**: [`CartCurrency`](type-alias.CartCurrency.md)

***

### `custom_cart_meta`

> `optional` **custom\_cart\_meta**: `any`

- Custom cart meta of user cart added
via update cart meta API.

***

### `delivery_charge_info`

> `optional` **delivery\_charge\_info**: `string`

- Delivery charge info message of
the user cart.

***

### `delivery_promise`

> `optional` **delivery\_promise**: [`ShipmentPromise`](type-alias.ShipmentPromise.md)

***

### `gstin`

> `optional` **gstin**: `string`

- GSTIN added in user cart.

***

### `id`

> `optional` **id**: `string`

- Cart id of shared cart.

***

### `is_valid`

> `optional` **is\_valid**: `boolean`

- Valid flag for get shared cart detail API.

***

### `items`

> `optional` **items**: [`CartProductInfo`](type-alias.CartProductInfo.md)[]

- Items data list in user cart that
includes item id, item size, store id, available sizes and rest of the item
related data.

***

### `last_modified`

> `optional` **last\_modified**: `string`

- Last modified timestamp of user cart.

***

### `message`

> `optional` **message**: `string`

- Message of the get shared cart API response.

***

### `payment_selection_lock`

> `optional` **payment\_selection\_lock**: [`PaymentSelectionLock`](type-alias.PaymentSelectionLock.md)

***

### `restrict_checkout`

> `optional` **restrict\_checkout**: `boolean`

- Restrict checkout flag to restrict
the checkout process.

***

### `shared_cart_details`

> `optional` **shared\_cart\_details**: [`SharedCartDetails`](type-alias.SharedCartDetails.md)

***

### `uid`

> `optional` **uid**: `string`

- Cart id of the user cart.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3614

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3615

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartDetailResponse

# Type alias: CartDetailResponse

> **CartDetailResponse**: `object`

## Type declaration

### `applied_promo_details`

> `optional` **applied\_promo\_details**: [`AppliedPromotion`](type-alias.AppliedPromotion.md)[]

- List of applied
promotions data to cart which includes promotion id, promotion name, offer
text, description, buy rules, discount rules and promotion type.

***

### `breakup_values`

> `optional` **breakup\_values**: [`CartBreakup`](type-alias.CartBreakup.md)

***

### `buy_now`

> `optional` **buy\_now**: `boolean`

- Buy now flag for the cart which denotes user
is doing fast checkout for the cart using buy now.

***

### `cart_id`

> `optional` **cart\_id**: `number`

- Unique identifier of the user cart.

***

### `checkout_mode`

> `optional` **checkout\_mode**: `string`

- Checkout mode of user cart.

***

### `comment`

> `optional` **comment**: `string`

- Comment message to be added in user cart.

***

### `common_config`

> `optional` **common\_config**: [`CartCommonConfig`](type-alias.CartCommonConfig.md)

***

### `coupon`

> `optional` **coupon**: [`CartDetailCoupon`](type-alias.CartDetailCoupon.md)

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
checkout API payload .

***

### `delivery_charge_info`

> `optional` **delivery\_charge\_info**: `string`

- Delivery charge in information
message on shipment .

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

- Unique identifier of the user cart.

***

### `is_valid`

> `optional` **is\_valid**: `boolean`

- Cart validity flag determines the if the
response is valid or not.

***

### `items`

> `optional` **items**: [`CartProductInfo`](type-alias.CartProductInfo.md)[]

- Items data list in user cart that
includes item id, item size, store id, available sizes and rest of the item
related data.

***

### `last_modified`

> `optional` **last\_modified**: `string`

- Last modified timestamp of cart.

***

### `message`

> `optional` **message**: `string`

- Message of the get cart detail API response.

***

### `notification`

> `optional` **notification**: `any`

- Notification object which denotes
notification data for user cart.

***

### `pan_config`

> `optional` **pan\_config**: `any`

- Pan card config states at what condition
user should enter the pan card.

***

### `pan_no`

> `optional` **pan\_no**: `string`

- Permanent Account Number of the user.

***

### `payment_selection_lock`

> `optional` **payment\_selection\_lock**: [`PaymentSelectionLock`](type-alias.PaymentSelectionLock.md)

***

### `restrict_checkout`

> `optional` **restrict\_checkout**: `boolean`

- Restrict checkout flag to restrict
the checkout process.

***

### `staff_user_id`

> `optional` **staff\_user\_id**: `string`

- Staff employee user id if cart is
created by staff employee for the customer.

***

### `success`

> `optional` **success**: `boolean`

- Success flag of get cart detail API response.

***

### `uid`

> `optional` **uid**: `string`

- Unique identifier of the user cart.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2216

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2217

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

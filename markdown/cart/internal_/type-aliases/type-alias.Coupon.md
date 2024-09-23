[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > Coupon

# Type alias: Coupon

> **Coupon**: `object`

## Type declaration

### `coupon_amount`

> `optional` **coupon\_amount**: `number`

- The amount based on cart value.

***

### `coupon_applicable_message`

> `optional` **coupon\_applicable\_message**: `string`

- Message which is used to
display to the customer if the coupon is applied successfully.

***

### `coupon_code`

> `optional` **coupon\_code**: `string`

- Coupon code of the coupon applied on cart.

***

### `coupon_type`

> `optional` **coupon\_type**: `string`

- Type of the coupon applied to cart.

***

### `coupon_value`

> `optional` **coupon\_value**: `number`

- Coupon value of the coupon applied to cart.

***

### `description`

> `optional` **description**: `string`

- Coupon description of the coupon applied to cart.

***

### `end_date`

> `optional` **end\_date**: `string`

- End date of the coupon on which the coupon expires.

***

### `expires_on`

> `optional` **expires\_on**: `string`

- Message to display to user for expiry of the coupon .

***

### `is_applicable`

> `optional` **is\_applicable**: `boolean`

- Flag to determine where the coupon is
applicable to cart or not.

***

### `is_applied`

> `optional` **is\_applied**: `boolean`

- Flag to determine where the coupon is
applied to cart or not.

***

### `is_bank_offer`

> `optional` **is\_bank\_offer**: `boolean`

- Bank offer flag for the coupon if the
coupon is applicable for only if payment done by bank or mode specified in coupon.

***

### `max_discount_value`

> `optional` **max\_discount\_value**: `number`

- Maximum discount value of the
coupon applied to cart.

***

### `message`

> `optional` **message**: `string`

- Coupon message of the coupon applied to cart.

***

### `minimum_cart_value`

> `optional` **minimum\_cart\_value**: `number`

- Minimum cart value of the coupon
applied to cart.

***

### `offer_text`

> `optional` **offer\_text**: `string`

- Offer text of the coupon which highligts
coupon offer defined while creating coupon .

***

### `start_date`

> `optional` **start\_date**: `string`

- Start date of the coupon when the coupon
will be live for the users to apply on cart.

***

### `sub_title`

> `optional` **sub\_title**: `string`

- Coupon subtitle of the coupon applied to
cart which is used to display.

***

### `title`

> `optional` **title**: `string`

- Coupon Title of the coupon applied denotes name
of the coupon.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2546

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2547

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

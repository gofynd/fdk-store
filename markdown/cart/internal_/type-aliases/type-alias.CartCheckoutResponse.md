[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartCheckoutResponse

# Type alias: CartCheckoutResponse

> **CartCheckoutResponse**: `object`

## Type declaration

### `app_intercept_url`

> `optional` **app\_intercept\_url**: `string`

- App intercept url which is used to
redirect on app after payment in confirmed/failed.

***

### `callback_url`

> `optional` **callback\_url**: `string`

- Callback url to be redirected after
payment received/failed.

***

### `cart`

> `optional` **cart**: [`CheckCart`](type-alias.CheckCart.md)

***

### `data`

> `optional` **data**: `any`

- Data of the user cart checkout includes cart
data, address, user id, order type etc.

***

### `message`

> `optional` **message**: `string`

- Message of the cart checkout v2 API response.

***

### `order_id`

> `optional` **order\_id**: `string`

- Order id generated after placing order.

***

### `payment_confirm_url`

> `optional` **payment\_confirm\_url**: `string`

- Payment confirm url used to
redirect after payment is confirmed.

***

### `success`

> `optional` **success**: `boolean`

- Success flag of cart checkout API response.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3454

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3455

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

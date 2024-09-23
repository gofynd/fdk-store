[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartMetaRequest

# Type alias: CartMetaRequest

> **CartMetaRequest**: `object`

## Type declaration

### `checkout_mode`

> `optional` **checkout\_mode**: `string`

- Checkout mode of user cart.

***

### `comment`

> `optional` **comment**: `string`

- Comment message to be added in user cart.

***

### `custom_cart_meta`

> `optional` **custom\_cart\_meta**: `any`

- Custom cart meta json to be added in
order meta which can be further received in cart API response and order
meta in order detail API or webhook.

***

### `delivery_slots`

> `optional` **delivery\_slots**: `any`

- Delivery slots details includes article
level time slot when the shipment can be delivered.

***

### `gift_details`

> `optional` **gift\_details**: [`ArticleGiftDetail`](type-alias.ArticleGiftDetail.md)

***

### `gstin`

> `optional` **gstin**: `string`

- GSTIN number to be added in user cart.

***

### `pick_up_customer_details`

> `optional` **pick\_up\_customer\_details**: `any`

- Customer contact details for
customer pickup at store.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3510

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3511

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

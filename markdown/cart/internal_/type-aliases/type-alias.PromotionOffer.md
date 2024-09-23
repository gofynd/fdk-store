[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > PromotionOffer

# Type alias: PromotionOffer

> **PromotionOffer**: `object`

## Type declaration

### `buy_rules`

> `optional` **buy\_rules**: `any`

- Buy rules of promotion which is available on product.

***

### `description`

> `optional` **description**: `string`

- Offer details including T&C of the
promotion which is avaiable on product.

***

### `discount_rules`

> `optional` **discount\_rules**: `any`[]

- Discount rules of promotions which is
avaiable on product.

***

### `free_gift_items`

> `optional` **free\_gift\_items**: [`FreeGiftItems`](type-alias.FreeGiftItems.md)[]

- Details of free gift items
which included item id, brand name, item name, item slug, item price and
item image url.

***

### `id`

> `optional` **id**: `string`

- Promotion id of the promotion which is available on product.

***

### `offer_text`

> `optional` **offer\_text**: `string`

- Offer title of the promotion which is
available on product.

***

### `promotion_group`

> `optional` **promotion\_group**: `string`

- Group of the promotion which is
available on product.

***

### `promotion_name`

> `optional` **promotion\_name**: `string`

- Name of the promotion which is
available on product.

***

### `promotion_type`

> `optional` **promotion\_type**: `string`

- Promotion type of the promotion which
is availalbe on product.

***

### `valid_till`

> `optional` **valid\_till**: `string`

- Datetime ISO String for promotion end date
which is available on product.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3748

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3749

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

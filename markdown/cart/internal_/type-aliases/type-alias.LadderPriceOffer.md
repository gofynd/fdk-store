[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > LadderPriceOffer

# Type alias: LadderPriceOffer

> **LadderPriceOffer**: `object`

## Type declaration

### `buy_rules`

> `optional` **buy\_rules**: `any`

- Buy rules of ladder price promotion
applicable on product.

***

### `calculate_on`

> `optional` **calculate\_on**: `string`

- If this ladder offer is to be calculated
on MRP or ESP price.

***

### `description`

> `optional` **description**: `string`

- Offer details including T&C of ladder
price promotion applicable on product.

***

### `discount_rules`

> `optional` **discount\_rules**: `any`[]

- Discount rules of ladder price
promotion applicable on product.

***

### `free_gift_items`

> `optional` **free\_gift\_items**: [`FreeGiftItems`](type-alias.FreeGiftItems.md)[]

- Details of free gift items list.

***

### `id`

> `optional` **id**: `string`

- ID of the promotion.

***

### `offer_prices`

> `optional` **offer\_prices**: [`LadderOfferItem`](type-alias.LadderOfferItem.md)[]

- Offer prices for ladder price
promotion applicable on product.

***

### `offer_text`

> `optional` **offer\_text**: `string`

- Offer title of ladder price promotion
applicable on product.

***

### `promotion_group`

> `optional` **promotion\_group**: `string`

- Group of ladder price promotion
applicable on product.

***

### `valid_till`

> `optional` **valid\_till**: `string`

- Datetime ISO String for promotion end date.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3935

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3936

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

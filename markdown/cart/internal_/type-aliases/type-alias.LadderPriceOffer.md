[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > LadderPriceOffer

# Type alias: LadderPriceOffer

> **LadderPriceOffer**: `object`

## Type declaration

### `buy_rules`

> `optional` **buy\_rules**: `any`

- Buy rules of promotions

***

### `calculate_on`

> `optional` **calculate\_on**: `string`

- If this ladder offer is to be calculated
on MRP or ESP price

***

### `description`

> `optional` **description**: `string`

- Offer details including T&C

***

### `discount_rules`

> `optional` **discount\_rules**: `any`[]

- Discount rules of promotions

***

### `free_gift_items`

> `optional` **free\_gift\_items**: [`FreeGiftItems`](type-alias.FreeGiftItems.md)[]

- Details of free gift items

***

### `id`

> `optional` **id**: `string`

- Promotion id

***

### `offer_prices`

> `optional` **offer\_prices**: [`LadderOfferItem`](type-alias.LadderOfferItem.md)[]

***

### `offer_text`

> `optional` **offer\_text**: `string`

- Offer title

***

### `promotion_group`

> `optional` **promotion\_group**: `string`

- Group of promotion belongs to

***

### `valid_till`

> `optional` **valid\_till**: `string`

- Datetime ISOString for promotion end date

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1593

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1594

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

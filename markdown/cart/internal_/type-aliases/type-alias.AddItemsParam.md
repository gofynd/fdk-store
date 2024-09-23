[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > AddItemsParam

# Type alias: AddItemsParam

> **AddItemsParam**: `object`

## Type declaration

### `areaCode`

> `optional` **areaCode**: `string`

- Customer servicable area_code.

***

### `b`

> `optional` **b**: `boolean`

- Select `true` to retrieve the price breakup of cart items.

***

### `body`

> **body**: [`AddCartRequest`](type-alias.AddCartRequest.md)

***

### `buyNow`

> `optional` **buyNow**: `boolean`

- Select `true` to set/initialize buy now cart.

***

### `i`

> `optional` **i**: `boolean`

- Select `true` to retrieve all the items added in the cart.

***

### `id`

> `optional` **id**: `string`

- The unique identifier of the cart.

***

### `orderType`

> `optional` **orderType**: `string`

- The order type of shipment HomeDelivery - If
the customer wants the order home-delivered PickAtStore - If the customer
wants the handover of an order at the store itself.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:288

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

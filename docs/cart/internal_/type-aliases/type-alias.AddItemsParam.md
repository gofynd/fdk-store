[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > AddItemsParam

# Type alias: AddItemsParam

> **AddItemsParam**: `object`

## Type declaration

### areaCode

`optional` **areaCode**: `string`

- Customer servicable area_code

---

### b

`optional` **b**: `boolean`

- This is a boolean value. Select `true` to retrieve
  the price breakup of cart items.

---

### body

**body**: [`AddCartRequest`](type-alias.AddCartRequest.md)

---

### buyNow

`optional` **buyNow**: `boolean`

- This is a boolen value. Select `true` to
  set/initialize buy now cart

---

### i

`optional` **i**: `boolean`

- This is a boolean value. Select `true` to retrieve
  all the items added in the cart.

---

### id

`optional` **id**: `string`

---

### p

`optional` **p**: `boolean`

- This is a boolean value. Select `true` for getting
  a payment option in response.

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:275

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

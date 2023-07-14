[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > GetCartParam

# Type alias: GetCartParam

> **GetCartParam**: `object`

## Type declaration

### areaCode

`optional` **areaCode**: `string`

- Customer servicable area_code

---

### assignCardId

`optional` **assignCardId**: `number`

- Token of user's debit or credit card

---

### b

`optional` **b**: `boolean`

- This is a boolean value. Select `true` to retrieve
  the price breakup of cart items.

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

- The unique identifier of the cart

---

### p

`optional` **p**: `boolean`

- This is a boolean value. Select `true` for getting
  a payment option in response.

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:375

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

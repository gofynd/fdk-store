[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [product](../../README.md) > [<internal>](../README.md) > OfferItem

# Type alias: OfferItem

> **OfferItem**: `object`

## Type declaration

### auto_applied

`optional` **auto_applied**: `boolean`

- Whether offer discount is auto applied in cart

---

### best

`optional` **best**: `boolean`

- Is true for best offer from all offers present
  for all sellers

---

### margin

`optional` **margin**: `number`

- Percentage value of discount

---

### price

`optional` **price**: [`OfferPrice`](type-alias.OfferPrice.md)

---

### quantity

`optional` **quantity**: `number`

- Quantity on which offer is applicable

---

### total

`optional` **total**: `number`

- Total price of offer quantity with discount

---

### type

`optional` **type**: `string`

- Offer type

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1853

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1854

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
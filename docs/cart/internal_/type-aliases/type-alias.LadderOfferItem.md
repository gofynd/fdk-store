[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > LadderOfferItem

# Type alias: LadderOfferItem

> **LadderOfferItem**: `object`

## Type declaration

### margin

`optional` **margin**: `number`

- Percentage value of discount

---

### max_quantity

`optional` **max_quantity**: `number`

- Minimum quantity upto which offer is
  applicable. If not present that offer is applicable on all quantities

---

### min_quantity

`optional` **min_quantity**: `number`

- Minimum quantity from which offer is applicable

---

### price

`optional` **price**: [`LadderPrice`](type-alias.LadderPrice.md)

---

### type

`optional` **type**: `string`

- Offer type

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1528

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1529

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > ProductAvailability

# Type alias: ProductAvailability

> **ProductAvailability**: `object`

## Type declaration

### available_sizes

`optional` **available_sizes**: [`ProductAvailabilitySize`](type-alias.ProductAvailabilitySize.md)[]

---

### deliverable

`optional` **deliverable**: `boolean`

- Boolean flag to check if product is deliverable

---

### is_valid

`optional` **is_valid**: `boolean`

- Boolean flag to check if required product is
  available and deliverable

---

### other_store_quantity

`optional` **other_store_quantity**: `number`

- Refers to other store quantity

---

### out_of_stock

`optional` **out_of_stock**: `boolean`

- Boolean flag to check if product is out of stock

---

### sizes

`optional` **sizes**: `string`[]

- Refers to list of available product sizes

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2049

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2050

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

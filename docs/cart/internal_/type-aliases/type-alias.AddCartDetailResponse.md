[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > AddCartDetailResponse

# Type alias: AddCartDetailResponse

> **AddCartDetailResponse**: `object`

## Type declaration

### cart

`optional` **cart**: [`CartDetailResponse`](type-alias.CartDetailResponse.md)

---

### message

`optional` **message**: `string`

---

### partial

`optional` **partial**: `boolean`

- When adding multiple items check if all
  added. True if only few are added.

---

### success

`optional` **success**: `boolean`

- True if all items are added successfully.
  False if partially added or not added.

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:848

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:849

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

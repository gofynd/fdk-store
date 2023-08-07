[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > UpdateProductCart

# Type alias: UpdateProductCart

> **UpdateProductCart**: `object`

## Type declaration

### \_custom_json

`optional` **\_custom_json**: `any`

- Custom json to supporting article customization

---

### article_id

`optional` **article_id**: `string`

---

### extra_meta

`optional` **extra_meta**: `any`

- Any extra meta information related to article

---

### identifiers

**identifiers**: [`CartProductIdentifer`](type-alias.CartProductIdentifer.md)

---

### item_id

`optional` **item_id**: `number`

- Item_id of added product

---

### item_index

`optional` **item_index**: `number`

- Index of updated article

---

### item_size

`optional` **item_size**: `string`

- Article size

---

### meta

`optional` **meta**: `any`

---

### parent_item_identifiers

`optional` **parent_item_identifiers**: `any`

- Contains information about
  parent item in case of parent-child relation

---

### quantity

`optional` **quantity**: `number`

- Article updated quantity

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2403

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2404

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

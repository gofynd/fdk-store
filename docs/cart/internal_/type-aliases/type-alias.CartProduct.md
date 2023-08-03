[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartProduct

# Type alias: CartProduct

> **CartProduct**: `object`

## Type declaration

### \_custom_json

`optional` **\_custom_json**: `any`

---

### action

`optional` **action**: [`ProductAction`](type-alias.ProductAction.md)

---

### brand

`optional` **brand**: [`BaseInfo`](type-alias.BaseInfo.md)

- Contains name and identifier of brand

---

### categories

`optional` **categories**: [`CategoryInfo`](type-alias.CategoryInfo.md)[]

- Contains name and identifier of categories

---

### images

`optional` **images**: [`ProductImage`](type-alias.ProductImage.md)[]

---

### item_code

`optional` **item_code**: `string`

---

### name

`optional` **name**: `string`

- Product name

---

### net_quantity

`optional` **net_quantity**: [`NetQuantity`](type-alias.NetQuantity.md)

---

### slug

`optional` **slug**: `string`

- Unique product url name generated via product
  name and other meta data

---

### tags

`optional` **tags**: `string`[]

---

### teaser_tag

`optional` **teaser_tag**: [`Tags`](type-alias.Tags.md)

---

### type

`optional` **type**: `string`

- Product type

---

### uid

`optional` **uid**: `number`

- Product unique identifier

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1306

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1307

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

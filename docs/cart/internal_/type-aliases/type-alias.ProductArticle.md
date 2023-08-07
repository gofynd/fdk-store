[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > ProductArticle

# Type alias: ProductArticle

> **ProductArticle**: `object`

## Type declaration

### \_custom_json

`optional` **\_custom_json**: `any`

- Custom json to supporting article customization

---

### cart_item_meta

`optional` **cart_item_meta**: `any`

---

### extra_meta

`optional` **extra_meta**: `any`

- Any extra meta information related to article

---

### gift_card

`optional` **gift_card**: `any`

---

### identifier

`optional` **identifier**: `any`

---

### is_gift_visible

`optional` **is_gift_visible**: `boolean`

---

### mto_quantity

`optional` **mto_quantity**: `number`

---

### parent_item_identifiers

`optional` **parent_item_identifiers**: `any`

- Contains information about
  parent item in case of parent-child relation

---

### price

`optional` **price**: [`ArticlePriceInfo`](type-alias.ArticlePriceInfo.md)

- Refers to article's base and converted price

---

### product_group_tags

`optional` **product_group_tags**: `string`[]

- Product_group_tags to group
  articles in same group

---

### quantity

`optional` **quantity**: `number`

- Available quantity for the article

---

### seller

`optional` **seller**: [`BaseInfo`](type-alias.BaseInfo.md)

- Contains name and identifier of seller

---

### seller_identifier

`optional` **seller_identifier**: `string`

---

### size

`optional` **size**: `string`

- Article size

---

### store

`optional` **store**: [`StoreInfo`](type-alias.StoreInfo.md)

- Contains name and identifier of store

---

### type

`optional` **type**: `string`

- Type of article

---

### uid

`optional` **uid**: `string`

- Article unique identifier

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1993

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1994

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > ProductDetailFeature

# Type alias: ProductDetailFeature

> **ProductDetailFeature**: `object`

## Type declaration

### request_product

`optional` **request_product**: `boolean`

- Indicates whether customers can
  request for a product. Default value is false.

---

### seller_selection

`optional` **seller_selection**: `boolean`

- Shows whether the customers can
  choose the seller on PDP

---

### similar

`optional` **similar**: `string`[]

- Configuration to show similar products,
  other products from same seller, other products in same category, other
  products in same price range, etc.

---

### update_product_meta

`optional` **update_product_meta**: `boolean`

- Allow user to update product
  meta. Default value is true.

## Source

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2166

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2167

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

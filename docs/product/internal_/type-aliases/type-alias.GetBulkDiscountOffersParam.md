[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [product](../../README.md) > [<internal>](../README.md) > GetBulkDiscountOffersParam

# Type alias: GetBulkDiscountOffersParam

> **GetBulkDiscountOffersParam**: `object`

## Type declaration

### articleId

`optional` **articleId**: `string`

- Article Mongo ID

---

### itemId

`optional` **itemId**: `number`

- The Item ID of the product

---

### slug

`optional` **slug**: `string`

- A short, human-readable, URL-friendly identifier
  of a product. You can get slug value from the endpoint
  /service/application/catalog/v1.0/products/

---

### uid

`optional` **uid**: `number`

- UID of the product

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:355

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

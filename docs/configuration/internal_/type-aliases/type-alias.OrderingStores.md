[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > OrderingStores

# Type alias: OrderingStores

> **OrderingStores**: `object`

## Type declaration

### \_\_v

`optional` **\_\_v**: `number`

- Version key for tracking ordering stores. Default
  value is zero.

---

### \_id

`optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
  of the ordering store

---

### all_stores

`optional` **all_stores**: `boolean`

- Allow all stores of the ordering stores

---

### app

`optional` **app**: `string`

- Alphanumeric ID allotted to an application (sales
  channel website) created within a business account

---

### deployed_stores

`optional` **deployed_stores**: `number`[]

---

### enabled

`optional` **enabled**: `boolean`

- Allow ordering stores for current sales channel

---

### items

`optional` **items**: [`OrderingStore`](type-alias.OrderingStore.md)[]

---

### page

`optional` **page**: [`Page`](type-alias.Page.md)

---

### type

`optional` **type**: `string`

- For hard type delivery, store selection is
  compulsory. For soft type, delivery store selection is optional.

## Source

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1863

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1864

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

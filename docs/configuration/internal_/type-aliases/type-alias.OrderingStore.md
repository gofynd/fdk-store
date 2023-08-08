[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > OrderingStore

# Type alias: OrderingStore

> **OrderingStore**: `object`

## Type declaration

### \_id

`optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
  of the ordering store

---

### address

`optional` **address**: [`OptedStoreAddress`](type-alias.OptedStoreAddress.md)

---

### code

`optional` **code**: `string`

- Code of the ordering store (usually same as Store Code)

---

### display_name

`optional` **display_name**: `string`

- Display name of the ordering store

---

### name

`optional` **name**: `string`

- Store name of the ordering store

---

### pincode

`optional` **pincode**: `number`

- 6-digit PIN Code of the ordering store, e.g. 400001

---

### store_code

`optional` **store_code**: `string`

- Store code of the ordering store, e.g. MUM-102

---

### store_type

`optional` **store_type**: `string`

- Store type of the ordering store, e.g.
  high_street, mall, warehouse

---

### uid

`optional` **uid**: `number`

- Ordering store UID

## Source

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2009

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:2010

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

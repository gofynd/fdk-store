[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > AppStore

# Type alias: AppStore

> **AppStore**: `object`

## Type declaration

### `address`

> `optional` **address**: [`StoreAddressSerializer`](type-alias.StoreAddressSerializer.md)

***

### `company`

> `optional` **company**: [`CompanyStore`](type-alias.CompanyStore.md)

***

### `contact_numbers`

> `optional` **contact\_numbers**: [`SellerPhoneNumber`](type-alias.SellerPhoneNumber.md)[]

- A list of contact numbers
for the store.

***

### `departments`

> `optional` **departments**: [`StoreDepartments`](type-alias.StoreDepartments.md)[]

- A list of departments within the store.

***

### `manager`

> `optional` **manager**: [`StoreManagerSerializer`](type-alias.StoreManagerSerializer.md)

***

### `name`

> `optional` **name**: `string`

- The name of the store.

***

### `store_code`

> `optional` **store\_code**: `string`

- A unique code for identifying the store.

***

### `uid`

> `optional` **uid**: `number`

- The unique identifier for the application store.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:3148

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:3149

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [catalog](../../README.md) > [<internal>](../README.md) > StoreDetails

# Type alias: StoreDetails

> **StoreDetails**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Custom JSON data for the store.

***

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

### `timing`

> `optional` **timing**: [`StoreTiming`](type-alias.StoreTiming.md)[]

- The opening and closing times for the
store throughout the week.

***

### `uid`

> `optional` **uid**: `number`

- The unique identifier for the store.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:3215

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Catalog/CatalogApplicationModel.d.ts:3216

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

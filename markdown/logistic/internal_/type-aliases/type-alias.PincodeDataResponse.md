[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [logistic](../../README.md) > [<internal>](../README.md) > PincodeDataResponse

# Type alias: PincodeDataResponse

> **PincodeDataResponse**: `object`

## Type declaration

### `display_name`

> `optional` **display\_name**: `string`

- User-friendly version of the geographical
data, which may be more descriptive or formatted differently.

***

### `error`

> **error**: [`PincodeErrorSchemaResponse`](type-alias.PincodeErrorSchemaResponse.md)

***

### `lat_long`

> `optional` **lat\_long**: [`PincodeLatLongData`](type-alias.PincodeLatLongData.md)

***

### `meta`

> `optional` **meta**: [`PincodeMetaResponse`](type-alias.PincodeMetaResponse.md)

***

### `meta_code`

> `optional` **meta\_code**: [`CountryMetaResponse`](type-alias.CountryMetaResponse.md)

***

### `name`

> `optional` **name**: `string`

- The actual geographical data, such as country
names (India), state names (Maharashtra), pin codes (400603), city names
(Dubai), or local sectors (Deira).

***

### `parents`

> `optional` **parents**: [`PincodeParentsResponse`](type-alias.PincodeParentsResponse.md)[]

- List of object representing
a collection of geographical locations, each associated with specific
hierarchical data such as cities, states, or countries.

***

### `sub_type`

> `optional` **sub\_type**: `string`

- Indicates the specific type of locality
hierarchy the pincode belongs to (e.g., city, state, country).

***

### `uid`

> `optional` **uid**: `string`

- This field stands for "Unique Identifier," a
unique value assigned to each instance to ensure differentiation and reference.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:730

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:731

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

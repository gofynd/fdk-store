[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [logistic](../../README.md) > [<internal>](../README.md) > CountryEntityResponse

# Type alias: CountryEntityResponse

> **CountryEntityResponse**: `object`

## Type declaration

### `display_name`

> `optional` **display\_name**: `string`

- User-friendly version of the geographical
data, which may be more descriptive or formatted differently.

***

### `is_active`

> `optional` **is\_active**: `boolean`

- Whether the country entity is currently
active or not.

***

### `logistics`

> `optional` **logistics**: [`LogisticsResponse`](type-alias.LogisticsResponse.md)

***

### `meta`

> `optional` **meta**: [`CountryMetaResponse`](type-alias.CountryMetaResponse.md)

***

### `name`

> `optional` **name**: `string`

- Country name.

***

### `parent_id`

> `optional` **parent\_id**: `string`

- Identifier for the parent of the current locality.

***

### `sub_type`

> `optional` **sub\_type**: `string`

- Specific type of locality hierarchy the
pincode belongs to (e.g., city, state, country).

***

### `type`

> `optional` **type**: `string`

- Specifies the type of geographical feature or
data, typically "Point" for coordinates in geographic data systems.

***

### `uid`

> `optional` **uid**: `string`

- Unique identifier for the country.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:1082

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:1083

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

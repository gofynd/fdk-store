[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [logistic](../../README.md) > [<internal>](../README.md) > PincodeApiResponse

# Type alias: PincodeApiResponse

> **PincodeApiResponse**: `object`

## Type declaration

### `data`

> `optional` **data**: [`PincodeDataResponse`](type-alias.PincodeDataResponse.md)[]

- Contains the actual response data
when the request is successful, providing details like pincode information
or related data.

***

### `error`

> **error**: [`PincodeErrorSchemaResponse`](type-alias.PincodeErrorSchemaResponse.md)

***

### `success`

> **success**: `boolean`

- Indicates whether the API request was
successful (true) or failed (false).

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:765

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:766

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

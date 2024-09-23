[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [logistic](../../README.md) > [<internal>](../README.md) > TATLocationDetailsResponse

# Type alias: TATLocationDetailsResponse

> **TATLocationDetailsResponse**: `object`

## Type declaration

### `articles`

> `optional` **articles**: [`TATArticlesResponse`](type-alias.TATArticlesResponse.md)[]

- List of articles included in
the fulfillment request, which provides details about the items to be
processed or shipped.

***

### `from_pincode`

> `optional` **from\_pincode**: `string`

- The postal code of the location from
which the fulfillment originates.

***

### `fulfillment_id`

> `optional` **fulfillment\_id**: `number`

- A unique identifier of the fulfilling location.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:940

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:941

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

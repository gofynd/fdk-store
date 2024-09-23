[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [logistic](../../README.md) > [<internal>](../README.md) > TATViewResponse

# Type alias: TATViewResponse

> **TATViewResponse**: `object`

## Type declaration

### `action`

> `optional` **action**: `string`

- The action performed or requested (e.g.,
forward, return).

***

### `error`

> `optional` **error**: [`TATErrorSchemaResponse`](type-alias.TATErrorSchemaResponse.md)

***

### `identifier`

> `optional` **identifier**: `string`

- A unique identifier for the request or transaction.

***

### `is_cod_available`

> `optional` **is\_cod\_available**: `boolean`

- Whether Cash on Delivery (COD) is
available for the request.

***

### `journey`

> `optional` **journey**: `string`

- Type of journey, either forward or return.

***

### `location_details`

> `optional` **location\_details**: [`TATLocationDetailsResponse`](type-alias.TATLocationDetailsResponse.md)[]

- Location
involved in the request.

***

### `payment_mode`

> `optional` **payment\_mode**: `string`

- The mode of payment used for the transaction.

***

### `request_uuid`

> `optional` **request\_uuid**: `string`

- A unique identifier for the request.

***

### `source`

> `optional` **source**: `string`

- The origin or source of the request.

***

### `stormbreaker_uuid`

> `optional` **stormbreaker\_uuid**: `string`

- A unique identifier related to the
stormbreaker process.

***

### `success`

> `optional` **success**: `boolean`

- Whether the request was successful (true/false).

***

### `to_city`

> `optional` **to\_city**: `string`

- The city corresponding to the destination pincode.

***

### `to_pincode`

> `optional` **to\_pincode**: `string`

- The postal code of the destination location
where the fulfillment or shipment is headed.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:959

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:960

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

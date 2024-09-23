[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [logistic](../../README.md) > [<internal>](../README.md) > TATViewRequest

# Type alias: TATViewRequest

> **TATViewRequest**: `object`

## Type declaration

### `action`

> `optional` **action**: `string`

- The specific operation or request being made,
such as viewing, updating, or managing data.

***

### `identifier`

> `optional` **identifier**: `string`

- A unique ID used to reference or track the
specific request or item within the system.

***

### `journey`

> `optional` **journey**: `string`

- Indicates the direction of the request or
shipment. It can either be "forward" (from the source to the destination)
or "return" (from the destination back to the source).

***

### `location_details`

> `optional` **location\_details**: [`TATLocationDetailsRequest`](type-alias.TATLocationDetailsRequest.md)[]

- Locations
involved in the request, including details about both the source and destination.

***

### `source`

> `optional` **source**: `string`

- The origin or source of the request, indicating
where the data or action is coming from.

***

### `to_pincode`

> `optional` **to\_pincode**: `string`

- The postal code of the destination location
where the fulfillment or shipment is headed.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:829

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Logistic/LogisticApplicationModel.d.ts:830

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

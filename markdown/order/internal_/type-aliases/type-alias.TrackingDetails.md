[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > TrackingDetails

# Type alias: TrackingDetails

> **TrackingDetails**: `object`

## Type declaration

### `created_ts`

> `optional` **created\_ts**: `string`

- Timestamp when this status was created.

***

### `is_current`

> `optional` **is\_current**: `boolean`

- Indicates whether the tracking event is
the current or active status.

***

### `is_passed`

> `optional` **is\_passed**: `boolean`

- Indicates whether the tracking event has
passed or occurred.

***

### `status`

> `optional` **status**: `string`

- The status of the tracking event.

***

### `time`

> `optional` **time**: `string`

- The time associated with the tracking event.

***

### `tracking_details`

> `optional` **tracking\_details**: [`NestedTrackingDetails`](type-alias.NestedTrackingDetails.md)[]

- Nested tracking details.

***

### `value`

> `optional` **value**: `string`

- Current value or state of the process.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:897

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:898

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

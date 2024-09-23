[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [order](../../README.md) > [<internal>](../README.md) > UpdateShipmentStatusRequest

# Type alias: UpdateShipmentStatusRequest

> **UpdateShipmentStatusRequest**: `object`

## Type declaration

### `force_transition`

> `optional` **force\_transition**: `boolean`

- Indicates whether the transition
should be forced.

***

### `lock_after_transition`

> `optional` **lock\_after\_transition**: `boolean`

- Indicates whether the status
should be locked after the transition.

***

### `statuses`

> `optional` **statuses**: [`StatuesRequest`](type-alias.StatuesRequest.md)[]

- An array containing different status details.

***

### `task`

> `optional` **task**: `boolean`

- Indicates whether the task is active or required.

***

### `unlock_before_transition`

> `optional` **unlock\_before\_transition**: `boolean`

- Indicates whether the status
should be unlocked before the transition.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:2213

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Order/OrderApplicationModel.d.ts:2214

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

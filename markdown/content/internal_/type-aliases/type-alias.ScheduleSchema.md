[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > ScheduleSchema

# Type alias: ScheduleSchema

> **ScheduleSchema**: `object`

## Type declaration

### `cron`

> `optional` **cron**: `string`

- String representing the cron expression.

***

### `duration`

> `optional` **duration**: `number`

- Duration of the scheduled entity.

***

### `end`

> `optional` **end**: `string`

- End time of schedule.

***

### `next_schedule`

> `optional` **next\_schedule**: [`NextSchedule`](type-alias.NextSchedule.md)[]

- Details regarding the next
trigger point of schedule.

***

### `start`

> `optional` **start**: `string`

- Start time of schedule.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:835

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:836

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

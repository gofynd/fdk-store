[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > GetAppStaffsParam

# Type alias: GetAppStaffsParam

> **GetAppStaffsParam**: `object`

## Type declaration

### `orderIncent`

> `optional` **orderIncent**: `boolean`

- This is a boolean value. Select `true` to
retrieve the staff members eligible for getting incentives on orders.

***

### `orderingStore`

> `optional` **orderingStore**: `number`

- ID of the ordering store. Helps in
retrieving staff members working at a particular ordering store.

***

### `user`

> `optional` **user**: `string`

- Mongo ID of the staff. Helps in retrieving the
details of a particular staff member.

## Defined In

node\_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationValidator.d.ts:113

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

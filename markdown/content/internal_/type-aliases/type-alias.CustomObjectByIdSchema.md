[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > CustomObjectByIdSchema

# Type alias: CustomObjectByIdSchema

> **CustomObjectByIdSchema**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- Unique identifier of an entry.

***

### `definition`

> `optional` **definition**: [`CustomObjectListItemDefinationSchema`](type-alias.CustomObjectListItemDefinationSchema.md)

***

### `display_name`

> `optional` **display\_name**: `string`

- Unique Display name of a custom object
which is system generated: Concatenation of string definition name and _id.

***

### `fields`

> `optional` **fields**: [`CustomObjectFieldSchema`](type-alias.CustomObjectFieldSchema.md)[]

- List of custom fields
against a Custom Object.

***

### `references`

> `optional` **references**: `any`[]

- List of custom fields ids where the
custom object is added as a field.

***

### `status`

> `optional` **status**: `string`

- String denoting whether custom object is active
or inactive.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1983

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1984

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

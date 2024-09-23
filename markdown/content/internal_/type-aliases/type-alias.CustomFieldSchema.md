[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > CustomFieldSchema

# Type alias: CustomFieldSchema

> **CustomFieldSchema**: `object`

## Type declaration

### `_id`

> `optional` **\_id**: `string`

- Unique identifier of an entry.

***

### `application_id`

> `optional` **application\_id**: `string`

- Application ID - Identifier for a Sales channel.

***

### `company_id`

> `optional` **company\_id**: `string`

- Unique Identifier for a company.

***

### `created_at`

> `optional` **created\_at**: `string`

- Timestamp which represent the time when
data was created.

***

### `created_by`

> `optional` **created\_by**: `string`

- Details of the owner of custom field creator.

***

### `creator`

> `optional` **creator**: `string`

- Denotes where the custom field has been
defined - within a company or within a sales channel.

***

### `definition_id`

> `optional` **definition\_id**: `string`

- Unique identifier for a custom field definition.

***

### `has_invalid_values`

> `optional` **has\_invalid\_values**: `boolean`

- Whether the custom field has invalid values.

***

### `invalid_value_errors`

> `optional` **invalid\_value\_errors**: `any`[]

- Array denoting if there's a
validation failure on a custom field inside a custom object.

***

### `is_deleted`

> `optional` **is\_deleted**: `boolean`

- Whether the custom field definition is deleted.

***

### `key`

> `optional` **key**: `string`

- Unique identifier for a custom field.

***

### `multi_value`

> `optional` **multi\_value**: `boolean`

- Whether custom field can have multiple
values or not.

***

### `namespace`

> `optional` **namespace**: `string`

- Namespace under which custom field is present.

***

### `resource`

> `optional` **resource**: `string`

- Type of an entity under which custom field is defined.

***

### `resource_id`

> `optional` **resource\_id**: `string`

- Unique identifier for the entity under
which custom field is defined.

***

### `type`

> `optional` **type**: `string`

- The type type of custom field.

***

### `updated_at`

> `optional` **updated\_at**: `string`

- Timestamp which represent when was the last
time when data was updated.

***

### `value`

> `optional` **value**: [`CustomFieldValue`](type-alias.CustomFieldValue.md)[]

- Array containing values of custom field.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:2020

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:2021

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

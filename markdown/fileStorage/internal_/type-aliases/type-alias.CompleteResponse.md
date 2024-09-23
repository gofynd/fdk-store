[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [fileStorage](../../README.md) > [<internal>](../README.md) > CompleteResponse

# Type alias: CompleteResponse

> **CompleteResponse**: `object`

## Type declaration

### `_id`

> **\_id**: `string`

- The unique identifier of the uploaded file.

***

### `cdn`

> **cdn**: [`CDN`](type-alias.CDN.md)

***

### `content_type`

> **content\_type**: `string`

- The content type of the file.

***

### `created_by`

> `optional` **created\_by**: [`CreatedBy`](type-alias.CreatedBy.md)

***

### `created_on`

> **created\_on**: `string`

- The timestamp when the file was created.

***

### `file_name`

> **file\_name**: `string`

- The name of the file that was uploaded.

***

### `file_path`

> **file\_path**: `string`

- The path to the file in the storage location.

***

### `modified_on`

> **modified\_on**: `string`

- The timestamp when the file was last modified.

***

### `namespace`

> **namespace**: `string`

- The namespace associated with the file.

***

### `operation`

> **operation**: `string`

- The operation performed on the storage service.

***

### `size`

> **size**: `number`

- The size of the file in bytes.

***

### `success`

> **success**: `boolean`

- The success status of the upload operation.

***

### `tags`

> `optional` **tags**: `string`[]

- Tags associated with the file.

***

### `upload`

> **upload**: [`Upload`](type-alias.Upload.md)

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationModel.d.ts:186

node\_modules/@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationModel.d.ts:187

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

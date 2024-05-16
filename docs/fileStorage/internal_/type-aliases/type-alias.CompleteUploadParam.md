[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [fileStorage](../../README.md) > [<internal>](../README.md) > CompleteUploadParam

# Type alias: CompleteUploadParam

> **CompleteUploadParam**: `object`

## Type declaration

### `body`

> **body**: [`StartResponse`](type-alias.StartResponse.md)

***

### `namespace`

> **namespace**: `string`

- Segregation of different types of
files(products, orders, logistics etc), Required for validating the data of
the file being uploaded, decides where exactly the file will be stored
inside the storage bucket.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationValidator.d.ts:33

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

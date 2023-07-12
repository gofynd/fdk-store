[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FileStorage

# Class: FileStorage

[<internal>](../modules/internal_.md).FileStorage

## Table of contents

### Constructors

- [constructor](internal_.FileStorage.md#constructor)

### Properties

- [\_conf](internal_.FileStorage.md#_conf)
- [\_relativeUrls](internal_.FileStorage.md#_relativeurls)
- [\_urls](internal_.FileStorage.md#_urls)

### Methods

- [completeUpload](internal_.FileStorage.md#completeupload)
- [signUrls](internal_.FileStorage.md#signurls)
- [startUpload](internal_.FileStorage.md#startupload)
- [updateUrls](internal_.FileStorage.md#updateurls)
- [upload](internal_.FileStorage.md#upload)

## Constructors

### constructor

• **new FileStorage**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `completeUpload` | `string` |
| `signUrls` | `string` |
| `startUpload` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:10

## Methods

### completeUpload

▸ **completeUpload**(`arg?`): `Promise`<[`CompleteResponse`](../modules/internal_.md#completeresponse)\>

**`Name`**

completeUpload
@summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
@description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.

The three major steps are:
Start
Upload
Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CompleteUploadParam`](../modules/internal_.md#completeuploadparam) | Arg object. |

#### Returns

`Promise`<[`CompleteResponse`](../modules/internal_.md#completeresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:36

___

### signUrls

▸ **signUrls**(`arg?`): `Promise`<[`SignUrlResponse`](../modules/internal_.md#signurlresponse)\>

**`Name`**

signUrls
@summary: Explain here
@description: Describe here

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SignUrlsParam`](../modules/internal_.md#signurlsparam) | Arg object. |

#### Returns

`Promise`<[`SignUrlResponse`](../modules/internal_.md#signurlresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:44

___

### startUpload

▸ **startUpload**(`arg?`): `Promise`<[`StartResponse`](../modules/internal_.md#startresponse)\>

**`Name`**

startUpload
@summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
@description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.

The three major steps are:
Start
Upload
Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`StartUploadParam`](../modules/internal_.md#startuploadparam) | Arg object. |

#### Returns

`Promise`<[`StartResponse`](../modules/internal_.md#startresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:69

___

### updateUrls

▸ **updateUrls**(`urls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `any` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:11

___

### upload

▸ **upload**(`«destructured»?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `content_type` | `any` |
| › `data` | `any` |
| › `file_name` | `any` |
| › `namespace` | `any` |
| › `size` | `any` |
| › `tags` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/fdk-client-javascript/sdk/application/FileStorage/FileStorageApplicationClient.d.ts:78

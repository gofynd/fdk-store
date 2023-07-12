[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Share

# Class: Share

[<internal>](../modules/internal_.md).Share

## Table of contents

### Constructors

- [constructor](internal_.Share.md#constructor)

### Properties

- [\_conf](internal_.Share.md#_conf)
- [\_relativeUrls](internal_.Share.md#_relativeurls)
- [\_urls](internal_.Share.md#_urls)

### Methods

- [createShortLink](internal_.Share.md#createshortlink)
- [getApplicationQRCode](internal_.Share.md#getapplicationqrcode)
- [getCollectionQRCodeBySlug](internal_.Share.md#getcollectionqrcodebyslug)
- [getOriginalShortLinkByHash](internal_.Share.md#getoriginalshortlinkbyhash)
- [getProductQRCodeBySlug](internal_.Share.md#getproductqrcodebyslug)
- [getShortLinkByHash](internal_.Share.md#getshortlinkbyhash)
- [getUrlQRCode](internal_.Share.md#geturlqrcode)
- [updateUrls](internal_.Share.md#updateurls)

## Constructors

### constructor

• **new Share**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createShortLink` | `string` |
| `getApplicationQRCode` | `string` |
| `getCollectionQRCodeBySlug` | `string` |
| `getOriginalShortLinkByHash` | `string` |
| `getProductQRCodeBySlug` | `string` |
| `getShortLinkByHash` | `string` |
| `getUrlQRCode` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:14

## Methods

### createShortLink

▸ **createShortLink**(`arg?`): `Promise`<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

**`Name`**

createShortLink
@summary: Create a short link
@description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CreateShortLinkParam`](../modules/internal_.md#createshortlinkparam) | Arg object. |

#### Returns

`Promise`<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:23

___

### getApplicationQRCode

▸ **getApplicationQRCode**(`arg?`): `Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

**`Name`**

getApplicationQRCode
@summary: Create QR Code of an app
@description: Use this API to create a QR code of an app for sharing it with users who want to use the app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:31

___

### getCollectionQRCodeBySlug

▸ **getCollectionQRCodeBySlug**(`arg?`): `Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

**`Name`**

getCollectionQRCodeBySlug
@summary: Create QR Code of a collection
@description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCollectionQRCodeBySlugParam`](../modules/internal_.md#getcollectionqrcodebyslugparam) | Arg object. |

#### Returns

`Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:39

___

### getOriginalShortLinkByHash

▸ **getOriginalShortLinkByHash**(`arg?`): `Promise`<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

**`Name`**

getOriginalShortLinkByHash
@summary: Get original link by hash
@description: Use this API to retrieve the original link from a short-link by using a hash value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOriginalShortLinkByHashParam`](../modules/internal_.md#getoriginalshortlinkbyhashparam) | Arg object. |

#### Returns

`Promise`<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:48

___

### getProductQRCodeBySlug

▸ **getProductQRCodeBySlug**(`arg?`): `Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

**`Name`**

getProductQRCodeBySlug
@summary: Create QR Code of a product
@description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetProductQRCodeBySlugParam`](../modules/internal_.md#getproductqrcodebyslugparam) | Arg object. |

#### Returns

`Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:56

___

### getShortLinkByHash

▸ **getShortLinkByHash**(`arg?`): `Promise`<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

**`Name`**

getShortLinkByHash
@summary: Get short link by hash
@description: Use this API to get a short link by using a hash value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetShortLinkByHashParam`](../modules/internal_.md#getshortlinkbyhashparam) | Arg object. |

#### Returns

`Promise`<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:64

___

### getUrlQRCode

▸ **getUrlQRCode**(`arg?`): `Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

**`Name`**

getUrlQRCode
@summary: Create QR Code of a URL
@description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetUrlQRCodeParam`](../modules/internal_.md#geturlqrcodeparam) | Arg object. |

#### Returns

`Promise`<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:72

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

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationClient.d.ts:15

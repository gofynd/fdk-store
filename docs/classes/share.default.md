[fdk-store](../README.md) / [Exports](../modules.md) / [share](../modules/share.md) / default

# Class: default

[share](../modules/share.md).default

## Table of contents

### Constructors

- [constructor](share.default.md#constructor)

### Methods

- [createShortLink](share.default.md#createshortlink)
- [getUrlQRCode](share.default.md#geturlqrcode)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/share.ts:8

## Methods

### createShortLink

▸ **createShortLink**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ShortLinkRes`](../modules/share._internal_.md#shortlinkres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateShortLinkParam`](../modules/share._internal_.md#createshortlinkparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ShortLinkRes`](../modules/share._internal_.md#shortlinkres)\>

#### Defined in

src/store/modules/share.ts:14

___

### getUrlQRCode

▸ **getUrlQRCode**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`QRCodeResp`](../modules/share._internal_.md#qrcoderesp)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetUrlQRCodeParam`](../modules/share._internal_.md#geturlqrcodeparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`QRCodeResp`](../modules/share._internal_.md#qrcoderesp)\>

#### Defined in

src/store/modules/share.ts:18

[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / shareModule

# Class: shareModule

[<internal>](../modules/internal_.md).shareModule

## Table of contents

### Constructors

- [constructor](internal_.shareModule.md#constructor)

### Methods

- [createShortLink](internal_.shareModule.md#createshortlink)
- [getUrlQRCode](internal_.shareModule.md#geturlqrcode)

## Constructors

### constructor

• **new shareModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/share.ts:8

## Methods

### createShortLink

▸ **createShortLink**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateShortLinkParam`](../modules/internal_.md#createshortlinkparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ShortLinkRes`](../modules/internal_.md#shortlinkres)\>

#### Defined in

src/store/modules/share.ts:14

___

### getUrlQRCode

▸ **getUrlQRCode**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetUrlQRCodeParam`](../modules/internal_.md#geturlqrcodeparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`QRCodeResp`](../modules/internal_.md#qrcoderesp)\>

#### Defined in

src/store/modules/share.ts:18

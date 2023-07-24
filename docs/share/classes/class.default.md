[**fdk-store**](../../README.md) ( [Readme](../../README.md) \| [API](../../API.md) )

---

[fdk-store](../../API.md) > [share](../README.md) > default

# Class: default

## Constructors

### constructor()

> **new default**(`dispatch`): [`default`](class.default.md)

#### Parameters

| Parameter  | Type                                                                                                     |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`default`](class.default.md)

#### Source

src/store/modules/share.ts:8

## Methods

### createShortLink()

> **createShortLink**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShortLinkRes`](../internal_/type-aliases/type-alias.ShortLinkRes.md) \>

#### Parameters

| Parameter | Type                                                                                   |
| :-------- | :------------------------------------------------------------------------------------- |
| `params`  | [`CreateShortLinkParam`](../internal_/type-aliases/type-alias.CreateShortLinkParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ShortLinkRes`](../internal_/type-aliases/type-alias.ShortLinkRes.md) \>

#### Source

src/store/modules/share.ts:14

---

### getUrlQRCode()

> **getUrlQRCode**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`QRCodeResp`](../internal_/type-aliases/type-alias.QRCodeResp.md) \>

#### Parameters

| Parameter | Type                                                                             |
| :-------- | :------------------------------------------------------------------------------- |
| `params`  | [`GetUrlQRCodeParam`](../internal_/type-aliases/type-alias.GetUrlQRCodeParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`QRCodeResp`](../internal_/type-aliases/type-alias.QRCodeResp.md) \>

#### Source

src/store/modules/share.ts:18

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
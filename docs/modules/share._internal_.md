[fdk-store](../README.md) / [Exports](../modules.md) / [share](share.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [Attribution](share._internal_.md#attribution)
- [CampaignShortLink](share._internal_.md#campaignshortlink)
- [CreateShortLinkParam](share._internal_.md#createshortlinkparam)
- [GetUrlQRCodeParam](share._internal_.md#geturlqrcodeparam)
- [QRCodeResp](share._internal_.md#qrcoderesp)
- [RedirectDevice](share._internal_.md#redirectdevice)
- [Redirects](share._internal_.md#redirects)
- [ShortLinkReq](share._internal_.md#shortlinkreq)
- [ShortLinkRes](share._internal_.md#shortlinkres)
- [SocialMediaTags](share._internal_.md#socialmediatags)
- [UrlInfo](share._internal_.md#urlinfo)
- [WebRedirect](share._internal_.md#webredirect)

### Functions

- [Attribution](share._internal_.md#attribution-1)
- [CampaignShortLink](share._internal_.md#campaignshortlink-1)
- [QRCodeResp](share._internal_.md#qrcoderesp-1)
- [RedirectDevice](share._internal_.md#redirectdevice-1)
- [Redirects](share._internal_.md#redirects-1)
- [ShortLinkReq](share._internal_.md#shortlinkreq-1)
- [ShortLinkRes](share._internal_.md#shortlinkres-1)
- [SocialMediaTags](share._internal_.md#socialmediatags-1)
- [UrlInfo](share._internal_.md#urlinfo-1)
- [WebRedirect](share._internal_.md#webredirect-1)

## Type Aliases

### Attribution

Ƭ **Attribution**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `campaign_cookie_expiry?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:108

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:109

___

### CampaignShortLink

Ƭ **CampaignShortLink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `medium?` | `string` |
| `source?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:113

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:114

___

### CreateShortLinkParam

Ƭ **CreateShortLinkParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`ShortLinkReq`](share._internal_.md#shortlinkreq) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationValidator.d.ts:50

___

### GetUrlQRCodeParam

Ƭ **GetUrlQRCodeParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | - A link or a web address |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationValidator.d.ts:81

___

### QRCodeResp

Ƭ **QRCodeResp**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link?` | `string` |
| `svg?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:135

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:136

___

### RedirectDevice

Ƭ **RedirectDevice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link?` | `string` |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:141

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:142

___

### Redirects

Ƭ **Redirects**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `android?` | [`RedirectDevice`](share._internal_.md#redirectdevice) |
| `force_web?` | `boolean` |
| `ios?` | [`RedirectDevice`](share._internal_.md#redirectdevice) |
| `web?` | [`WebRedirect`](share._internal_.md#webredirect) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:147

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:148

___

### ShortLinkReq

Ƭ **ShortLinkReq**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `active?` | `boolean` | - |
| `attribution?` | [`Attribution`](share._internal_.md#attribution) | - |
| `campaign?` | [`CampaignShortLink`](share._internal_.md#campaignshortlink) | - |
| `count?` | `number` | - |
| `enable_tracking?` | `boolean` | - |
| `expire_at?` | `string` | - |
| `hash?` | `string` | - |
| `personalized?` | `boolean` | - To create personalized short links. |
| `redirects?` | [`Redirects`](share._internal_.md#redirects) | - |
| `social_media_tags?` | [`SocialMediaTags`](share._internal_.md#socialmediatags) | - |
| `title` | `string` | - Give a name to the link. |
| `url` | `string` | - The web address to shorten. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:161

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:162

___

### ShortLinkRes

Ƭ **ShortLinkRes**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id?` | `string` | - |
| `active?` | `boolean` | - |
| `app_redirect?` | `boolean` | - |
| `application?` | `string` | - |
| `attribution?` | [`Attribution`](share._internal_.md#attribution) | - |
| `campaign?` | [`CampaignShortLink`](share._internal_.md#campaignshortlink) | - |
| `count?` | `number` | - |
| `created_at?` | `string` | - |
| `created_by?` | `string` | - |
| `enable_tracking?` | `boolean` | - |
| `expire_at?` | `string` | - |
| `fallback?` | `string` | - |
| `meta?` | `any` | - |
| `personalized?` | `boolean` | - To create personalized short links |
| `redirects?` | [`Redirects`](share._internal_.md#redirects) | - |
| `social_media_tags?` | [`SocialMediaTags`](share._internal_.md#socialmediatags) | - |
| `title?` | `string` | - |
| `updated_at?` | `string` | - |
| `url?` | [`UrlInfo`](share._internal_.md#urlinfo) | - |
| `user_id?` | `string` | - |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:186

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:187

___

### SocialMediaTags

Ƭ **SocialMediaTags**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `image?` | `string` |
| `title?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:213

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:214

___

### UrlInfo

Ƭ **UrlInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash?` | `string` |
| `original?` | `string` |
| `short?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:220

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:221

___

### WebRedirect

Ƭ **WebRedirect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link?` | `string` |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:227

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:228

## Functions

### Attribution

▸ **Attribution**(): [`Attribution`](share._internal_.md#attribution)

#### Returns

[`Attribution`](share._internal_.md#attribution)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:108

___

### CampaignShortLink

▸ **CampaignShortLink**(): [`CampaignShortLink`](share._internal_.md#campaignshortlink)

#### Returns

[`CampaignShortLink`](share._internal_.md#campaignshortlink)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:113

___

### QRCodeResp

▸ **QRCodeResp**(): [`QRCodeResp`](share._internal_.md#qrcoderesp)

#### Returns

[`QRCodeResp`](share._internal_.md#qrcoderesp)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:135

___

### RedirectDevice

▸ **RedirectDevice**(): [`RedirectDevice`](share._internal_.md#redirectdevice)

#### Returns

[`RedirectDevice`](share._internal_.md#redirectdevice)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:141

___

### Redirects

▸ **Redirects**(): [`Redirects`](share._internal_.md#redirects)

#### Returns

[`Redirects`](share._internal_.md#redirects)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:147

___

### ShortLinkReq

▸ **ShortLinkReq**(): [`ShortLinkReq`](share._internal_.md#shortlinkreq)

#### Returns

[`ShortLinkReq`](share._internal_.md#shortlinkreq)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:161

___

### ShortLinkRes

▸ **ShortLinkRes**(): [`ShortLinkRes`](share._internal_.md#shortlinkres)

#### Returns

[`ShortLinkRes`](share._internal_.md#shortlinkres)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:186

___

### SocialMediaTags

▸ **SocialMediaTags**(): [`SocialMediaTags`](share._internal_.md#socialmediatags)

#### Returns

[`SocialMediaTags`](share._internal_.md#socialmediatags)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:213

___

### UrlInfo

▸ **UrlInfo**(): [`UrlInfo`](share._internal_.md#urlinfo)

#### Returns

[`UrlInfo`](share._internal_.md#urlinfo)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:220

___

### WebRedirect

▸ **WebRedirect**(): [`WebRedirect`](share._internal_.md#webredirect)

#### Returns

[`WebRedirect`](share._internal_.md#webredirect)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Share/ShareApplicationModel.d.ts:227

[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [fileStorage](../README.md) > fileStorageModule

# Class: fileStorageModule

## Constructors

### new fileStorageModule

> **new fileStorageModule**(`dispatch`): [`fileStorageModule`](class.fileStorageModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`fileStorageModule`](class.fileStorageModule.md)

#### Defined In

src/store/modules/fileStorage.ts:11

## Methods

### completeUpload

> **completeUpload**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CompleteResponse`](../internal_/type-aliases/type-alias.CompleteResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`CompleteUploadParam`](../internal_/type-aliases/type-alias.CompleteUploadParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CompleteResponse`](../internal_/type-aliases/type-alias.CompleteResponse.md) \>

#### Defined In

src/store/modules/fileStorage.ts:18

***

### signUrls

> **signUrls**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SignUrlResponse`](../internal_/type-aliases/type-alias.SignUrlResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SignUrlsParam`](../internal_/type-aliases/type-alias.SignUrlsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SignUrlResponse`](../internal_/type-aliases/type-alias.SignUrlResponse.md) \>

#### Defined In

src/store/modules/fileStorage.ts:21

***

### startUpload

> **startUpload**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`StartResponse`](../internal_/type-aliases/type-alias.StartResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`StartUploadParam`](../internal_/type-aliases/type-alias.StartUploadParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`StartResponse`](../internal_/type-aliases/type-alias.StartResponse.md) \>

#### Defined In

src/store/modules/fileStorage.ts:15

***

### updatePassword

> **updatePassword**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyEmailSuccess`](../internal_/type-aliases/type-alias.VerifyEmailSuccess.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdatePasswordParam`](../internal_/type-aliases/type-alias.UpdatePasswordParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`VerifyEmailSuccess`](../internal_/type-aliases/type-alias.VerifyEmailSuccess.md) \>

#### Defined In

src/store/modules/fileStorage.ts:24

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

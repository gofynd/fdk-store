[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [theme](../README.md) > ThemeModule

# Class: ThemeModule

## Constructors

### new ThemeModule

> **new ThemeModule**(`dispatch`): [`ThemeModule`](class.ThemeModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`ThemeModule`](class.ThemeModule.md)

#### Defined In

src/store/modules/theme.ts:18

## Methods

### addSection

> **addSection**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/theme.ts:35

***

### dragSection

> **dragSection**(`params`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `object` |
| `params.index` | `number` |
| `params.newIndex` | `number` |

#### Returns

`any`

#### Defined In

src/store/modules/theme.ts:32

***

### fetchAppliedTheme

> **fetchAppliedTheme**(): [`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Defined In

src/store/modules/theme.ts:20

***

### fetchPage

> **fetchPage**(`params`): [`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AvailablePageSchema`](../internal_/type-aliases/type-alias.AvailablePageSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPageParam`](../internal_/type-aliases/type-alias.GetPageParam.md) |

#### Returns

[`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AvailablePageSchema`](../internal_/type-aliases/type-alias.AvailablePageSchema.md) \>

#### Defined In

src/store/modules/theme.ts:28

***

### fetchThemeById

> **fetchThemeById**(`params`): [`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetThemeForPreviewParam`](../internal_/type-aliases/type-alias.GetThemeForPreviewParam.md) |

#### Returns

[`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Defined In

src/store/modules/theme.ts:24

***

### removeSection

> **removeSection**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/theme.ts:38

***

### setGlobalConfig

> **setGlobalConfig**(`params`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) |

#### Returns

`any`

#### Defined In

src/store/modules/theme.ts:47

***

### setTheme

> **setTheme**(`params`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) |

#### Returns

`any`

#### Defined In

src/store/modules/theme.ts:44

***

### updateSection

> **updateSection**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/theme.ts:41

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

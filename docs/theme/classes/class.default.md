[**fdk-store**](../../README.md) ( [Readme](../../README.md) \| [API](../../API.md) )

---

[fdk-store](../../API.md) > [theme](../README.md) > default

# Class: default

## Constructors

### constructor()

> **new default**(`dispatch`): [`default`](class.default.md)

#### Parameters

| Parameter  | Type                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------- |
| `dispatch` | [`ThunkActionDispatch`](../internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`default`](class.default.md)

#### Source

src/store/modules/theme.ts:9

## Methods

### fetchAppliedTheme()

> **fetchAppliedTheme**(): [`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Source

src/store/modules/theme.ts:13

---

### fetchPage()

> **fetchPage**(`params`): [`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AvailablePageSchema`](../internal_/type-aliases/type-alias.AvailablePageSchema.md) \>

#### Parameters

| Parameter | Type                                                                   |
| :-------- | :--------------------------------------------------------------------- |
| `params`  | [`GetPageParam`](../internal_/type-aliases/type-alias.GetPageParam.md) |

#### Returns

[`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AvailablePageSchema`](../internal_/type-aliases/type-alias.AvailablePageSchema.md) \>

#### Source

src/store/modules/theme.ts:21

---

### fetchThemeById()

> **fetchThemeById**(`params`): [`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Parameters

| Parameter | Type                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------- |
| `params`  | [`GetThemeForPreviewParam`](../internal_/type-aliases/type-alias.GetThemeForPreviewParam.md) |

#### Returns

[`AsyncThunkPromise`](../internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ThemesSchema`](../internal_/type-aliases/type-alias.ThemesSchema.md) \>

#### Source

src/store/modules/theme.ts:17

---

### updateSectionsForPreview()

> **updateSectionsForPreview**(`params`): `any`

#### Parameters

| Parameter | Type                                                                                           |
| :-------- | :--------------------------------------------------------------------------------------------- |
| `params`  | [`UpdateSectionsForPreview`](../internal_/type-aliases/type-alias.UpdateSectionsForPreview.md) |

#### Returns

`any`

#### Source

src/store/modules/theme.ts:25

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

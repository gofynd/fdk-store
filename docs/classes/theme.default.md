[fdk-store](../README.md) / [Exports](../modules.md) / [theme](../modules/theme.md) / default

# Class: default

[theme](../modules/theme.md).default

## Table of contents

### Constructors

- [constructor](theme.default.md#constructor)

### Methods

- [fetchAppliedTheme](theme.default.md#fetchappliedtheme)
- [fetchPage](theme.default.md#fetchpage)
- [fetchThemeById](theme.default.md#fetchthemebyid)
- [updateSectionsForPreview](theme.default.md#updatesectionsforpreview)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/theme.ts:9

## Methods

### fetchAppliedTheme

▸ **fetchAppliedTheme**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/theme._internal_.md#themesschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/theme._internal_.md#themesschema)\>

#### Defined in

src/store/modules/theme.ts:13

___

### fetchPage

▸ **fetchPage**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AvailablePageSchema`](../modules/theme._internal_.md#availablepageschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPageParam`](../modules/theme._internal_.md#getpageparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AvailablePageSchema`](../modules/theme._internal_.md#availablepageschema)\>

#### Defined in

src/store/modules/theme.ts:21

___

### fetchThemeById

▸ **fetchThemeById**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/theme._internal_.md#themesschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetThemeForPreviewParam`](../modules/theme._internal_.md#getthemeforpreviewparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/theme._internal_.md#themesschema)\>

#### Defined in

src/store/modules/theme.ts:17

___

### updateSectionsForPreview

▸ **updateSectionsForPreview**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UpdateSectionsForPreview`](../modules/theme._internal_.md#updatesectionsforpreview) |

#### Returns

`any`

#### Defined in

src/store/modules/theme.ts:25

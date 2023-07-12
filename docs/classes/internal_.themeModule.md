[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / themeModule

# Class: themeModule

[<internal>](../modules/internal_.md).themeModule

## Table of contents

### Constructors

- [constructor](internal_.themeModule.md#constructor)

### Methods

- [fetchAppliedTheme](internal_.themeModule.md#fetchappliedtheme)
- [fetchPage](internal_.themeModule.md#fetchpage)
- [fetchThemeById](internal_.themeModule.md#fetchthemebyid)
- [updateSectionsForPreview](internal_.themeModule.md#updatesectionsforpreview)

## Constructors

### constructor

• **new themeModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/theme.ts:9

## Methods

### fetchAppliedTheme

▸ **fetchAppliedTheme**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

#### Defined in

src/store/modules/theme.ts:13

___

### fetchPage

▸ **fetchPage**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AvailablePageSchema`](../modules/internal_.md#availablepageschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPageParam`](../modules/internal_.md#getpageparam-1) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AvailablePageSchema`](../modules/internal_.md#availablepageschema)\>

#### Defined in

src/store/modules/theme.ts:21

___

### fetchThemeById

▸ **fetchThemeById**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetThemeForPreviewParam`](../modules/internal_.md#getthemeforpreviewparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

#### Defined in

src/store/modules/theme.ts:17

___

### updateSectionsForPreview

▸ **updateSectionsForPreview**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UpdateSectionsForPreview`](../modules/internal_.md#updatesectionsforpreview) |

#### Returns

`any`

#### Defined in

src/store/modules/theme.ts:25

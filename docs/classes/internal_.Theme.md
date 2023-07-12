[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Theme

# Class: Theme

[<internal>](../modules/internal_.md).Theme

## Table of contents

### Constructors

- [constructor](internal_.Theme.md#constructor)

### Properties

- [\_conf](internal_.Theme.md#_conf)
- [\_relativeUrls](internal_.Theme.md#_relativeurls)
- [\_urls](internal_.Theme.md#_urls)

### Methods

- [getAllPages](internal_.Theme.md#getallpages)
- [getAppliedTheme](internal_.Theme.md#getappliedtheme)
- [getAppliedThemeV2](internal_.Theme.md#getappliedthemev2)
- [getPage](internal_.Theme.md#getpage)
- [getThemeForPreview](internal_.Theme.md#getthemeforpreview)
- [getThemeForPreviewV2](internal_.Theme.md#getthemeforpreviewv2)
- [updateUrls](internal_.Theme.md#updateurls)

## Constructors

### constructor

• **new Theme**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAllPages` | `string` |
| `getAppliedTheme` | `string` |
| `getAppliedThemeV2` | `string` |
| `getPage` | `string` |
| `getThemeForPreview` | `string` |
| `getThemeForPreviewV2` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:13

## Methods

### getAllPages

▸ **getAllPages**(`arg?`): `Promise`<[`AllAvailablePageSchema`](../modules/internal_.md#allavailablepageschema)\>

**`Name`**

getAllPages
@summary: Get all pages of a theme
@description: Use this API to retrieve all the available pages of a theme by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAllPagesParam`](../modules/internal_.md#getallpagesparam) | Arg object. |

#### Returns

`Promise`<[`AllAvailablePageSchema`](../modules/internal_.md#allavailablepageschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:22

___

### getAppliedTheme

▸ **getAppliedTheme**(`arg?`): `Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

**`Name`**

getAppliedTheme
@summary: Get the theme currently applied to an application
@description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:30

___

### getAppliedThemeV2

▸ **getAppliedThemeV2**(`arg?`): `Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

**`Name`**

getAppliedThemeV2
@summary: Get the theme currently applied to an application
@description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:38

___

### getPage

▸ **getPage**(`arg?`): `Promise`<[`AvailablePageSchema`](../modules/internal_.md#availablepageschema)\>

**`Name`**

getPage
@summary: Get page of a theme
@description: Use this API to retrieve a page of a theme.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPageParam`](../modules/internal_.md#getpageparam-1) | Arg object. |

#### Returns

`Promise`<[`AvailablePageSchema`](../modules/internal_.md#availablepageschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:46

___

### getThemeForPreview

▸ **getThemeForPreview**(`arg?`): `Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

**`Name`**

getThemeForPreview
@summary: Get a theme for a preview
@description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetThemeForPreviewParam`](../modules/internal_.md#getthemeforpreviewparam) | Arg object. |

#### Returns

`Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:54

___

### getThemeForPreviewV2

▸ **getThemeForPreviewV2**(`arg?`): `Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

**`Name`**

getThemeForPreviewV2
@summary: Get a theme for a preview
@description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetThemeForPreviewV2Param`](../modules/internal_.md#getthemeforpreviewv2param) | Arg object. |

#### Returns

`Promise`<[`ThemesSchema`](../modules/internal_.md#themesschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:62

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

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationClient.d.ts:14

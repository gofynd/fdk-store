[fdk-store](../README.md) / [Exports](../modules.md) / [theme](theme.md) / <internal\>

# Module: <internal\>

## Table of contents

### Interfaces

- [Action](../interfaces/theme._internal_.Action.md)
- [ThunkDispatch](../interfaces/theme._internal_.ThunkDispatch.md)

### Type Aliases

- [AssetsSchema](theme._internal_.md#assetsschema)
- [AsyncThunkPromise](theme._internal_.md#asyncthunkpromise)
- [AvailablePagePredicate](theme._internal_.md#availablepagepredicate)
- [AvailablePageRoutePredicate](theme._internal_.md#availablepageroutepredicate)
- [AvailablePageSchema](theme._internal_.md#availablepageschema)
- [AvailablePageSchemaSections](theme._internal_.md#availablepageschemasections)
- [AvailablePageScreenPredicate](theme._internal_.md#availablepagescreenpredicate)
- [AvailablePageSectionMetaAttributes](theme._internal_.md#availablepagesectionmetaattributes)
- [AvailablePageSeo](theme._internal_.md#availablepageseo)
- [AvailablePageUserPredicate](theme._internal_.md#availablepageuserpredicate)
- [Blocks](theme._internal_.md#blocks)
- [BlocksProps](theme._internal_.md#blocksprops)
- [Bold](theme._internal_.md#bold)
- [Colors](theme._internal_.md#colors)
- [CommonJs](theme._internal_.md#commonjs)
- [Config](theme._internal_.md#config)
- [ConfigPage](theme._internal_.md#configpage)
- [Css](theme._internal_.md#css)
- [Font](theme._internal_.md#font)
- [GetPageParam](theme._internal_.md#getpageparam)
- [GetThemeForPreviewParam](theme._internal_.md#getthemeforpreviewparam)
- [GlobalSchema](theme._internal_.md#globalschema)
- [GlobalSchemaProps](theme._internal_.md#globalschemaprops)
- [Images](theme._internal_.md#images)
- [Information](theme._internal_.md#information)
- [Light](theme._internal_.md#light)
- [ListSchemaItem](theme._internal_.md#listschemaitem)
- [Medium](theme._internal_.md#medium)
- [Parameters](theme._internal_.md#parameters)
- [Preset](theme._internal_.md#preset)
- [Regular](theme._internal_.md#regular)
- [ReturnType](theme._internal_.md#returntype)
- [SemiBold](theme._internal_.md#semibold)
- [Src](theme._internal_.md#src)
- [ThemesSchema](theme._internal_.md#themesschema)
- [ThunkAction](theme._internal_.md#thunkaction)
- [ThunkActionDispatch](theme._internal_.md#thunkactiondispatch)
- [UmdJs](theme._internal_.md#umdjs)
- [UpdateSectionsForPreview](theme._internal_.md#updatesectionsforpreview)
- [Variants](theme._internal_.md#variants)
- [availableSectionSchema](theme._internal_.md#availablesectionschema)

### Functions

- [AssetsSchema](theme._internal_.md#assetsschema-1)
- [AvailablePagePredicate](theme._internal_.md#availablepagepredicate-1)
- [AvailablePageRoutePredicate](theme._internal_.md#availablepageroutepredicate-1)
- [AvailablePageSchema](theme._internal_.md#availablepageschema-1)
- [AvailablePageSchemaSections](theme._internal_.md#availablepageschemasections-1)
- [AvailablePageScreenPredicate](theme._internal_.md#availablepagescreenpredicate-1)
- [AvailablePageSectionMetaAttributes](theme._internal_.md#availablepagesectionmetaattributes-1)
- [AvailablePageSeo](theme._internal_.md#availablepageseo-1)
- [AvailablePageUserPredicate](theme._internal_.md#availablepageuserpredicate-1)
- [Blocks](theme._internal_.md#blocks-1)
- [BlocksProps](theme._internal_.md#blocksprops-1)
- [Bold](theme._internal_.md#bold-1)
- [Colors](theme._internal_.md#colors-1)
- [CommonJs](theme._internal_.md#commonjs-1)
- [Config](theme._internal_.md#config-1)
- [ConfigPage](theme._internal_.md#configpage-1)
- [Css](theme._internal_.md#css-1)
- [Font](theme._internal_.md#font-1)
- [GlobalSchema](theme._internal_.md#globalschema-1)
- [GlobalSchemaProps](theme._internal_.md#globalschemaprops-1)
- [Images](theme._internal_.md#images-1)
- [Information](theme._internal_.md#information-1)
- [Light](theme._internal_.md#light-1)
- [ListSchemaItem](theme._internal_.md#listschemaitem-1)
- [Medium](theme._internal_.md#medium-1)
- [Preset](theme._internal_.md#preset-1)
- [Regular](theme._internal_.md#regular-1)
- [SemiBold](theme._internal_.md#semibold-1)
- [Src](theme._internal_.md#src-1)
- [ThemesSchema](theme._internal_.md#themesschema-1)
- [UmdJs](theme._internal_.md#umdjs-1)
- [Variants](theme._internal_.md#variants-1)
- [availableSectionSchema](theme._internal_.md#availablesectionschema-1)

## Type Aliases

### AssetsSchema

Ƭ **AssetsSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `common_js?` | [`CommonJs`](theme._internal_.md#commonjs) |
| `css?` | [`Css`](theme._internal_.md#css) |
| `umd_js?` | [`UmdJs`](theme._internal_.md#umdjs) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1067

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1068

___

### AsyncThunkPromise

Ƭ **AsyncThunkPromise**<`T`\>: `Promise`<{ `error?`: `unknown` ; `meta?`: `any` ; `payload?`: `T` ; `type`: `string`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

src/types/index.ts:18

___

### AvailablePagePredicate

Ƭ **AvailablePagePredicate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `route?` | [`AvailablePageRoutePredicate`](theme._internal_.md#availablepageroutepredicate) |
| `screen?` | [`AvailablePageScreenPredicate`](theme._internal_.md#availablepagescreenpredicate) |
| `user?` | [`AvailablePageUserPredicate`](theme._internal_.md#availablepageuserpredicate) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1093

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1094

___

### AvailablePageRoutePredicate

Ƭ **AvailablePageRoutePredicate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exact_url?` | `string` |
| `query?` | `any` |
| `selected?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1100

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1101

___

### AvailablePageSchema

Ƭ **AvailablePageSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `path?` | `string` |
| `props?` | `any`[] |
| `sections?` | [`AvailablePageSchemaSections`](theme._internal_.md#availablepageschemasections)[] |
| `sections_meta?` | [`AvailablePageSectionMetaAttributes`](theme._internal_.md#availablepagesectionmetaattributes)[] |
| `seo?` | [`AvailablePageSeo`](theme._internal_.md#availablepageseo) |
| `text?` | `string` |
| `theme?` | `string` |
| `type?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1107

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1108

___

### AvailablePageSchemaSections

Ƭ **AvailablePageSchemaSections**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blocks?` | `any`[] |
| `label?` | `string` |
| `name?` | `string` |
| `predicate?` | [`AvailablePagePredicate`](theme._internal_.md#availablepagepredicate) |
| `preset?` | `any` |
| `props?` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1121

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1122

___

### AvailablePageScreenPredicate

Ƭ **AvailablePageScreenPredicate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `desktop?` | `boolean` |
| `mobile?` | `boolean` |
| `tablet?` | `boolean` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1131

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1132

___

### AvailablePageSectionMetaAttributes

Ƭ **AvailablePageSectionMetaAttributes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1138

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1139

___

### AvailablePageSeo

Ƭ **AvailablePageSeo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `description?` | `string` |
| `title?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1143

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1144

___

### AvailablePageUserPredicate

Ƭ **AvailablePageUserPredicate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `anonymous?` | `boolean` |
| `authenticated?` | `boolean` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1150

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1151

___

### Blocks

Ƭ **Blocks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `props?` | [`BlocksProps`](theme._internal_.md#blocksprops)[] |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1185

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1186

___

### BlocksProps

Ƭ **BlocksProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `string` |
| `label?` | `string` |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1192

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1193

___

### Bold

Ƭ **Bold**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `file?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1212

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1213

___

### Colors

Ƭ **Colors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accent_color?` | `string` |
| `bg_color?` | `string` |
| `button_secondary_color?` | `string` |
| `link_color?` | `string` |
| `primary_color?` | `string` |
| `secondary_color?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1270

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1271

___

### CommonJs

Ƭ **CommonJs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1320

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1321

___

### Config

Ƭ **Config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `current?` | `string` |
| `global_schema?` | [`GlobalSchema`](theme._internal_.md#globalschema) |
| `list?` | [`ListSchemaItem`](theme._internal_.md#listschemaitem)[] |
| `preset?` | [`Preset`](theme._internal_.md#preset) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1330

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1331

___

### ConfigPage

Ƭ **ConfigPage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `page?` | `string` |
| `settings?` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1338

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1339

___

### Css

Ƭ **Css**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link?` | `string` |
| `links?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1384

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1385

___

### Font

Ƭ **Font**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `family?` | `string` |
| `variants?` | [`Variants`](theme._internal_.md#variants) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1612

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1613

___

### GetPageParam

Ƭ **GetPageParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageValue` | `string` | - Value of the page to be retrieved |
| `themeId` | `string` | - ID of the theme to be retrieved |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationValidator.d.ts:44

___

### GetThemeForPreviewParam

Ƭ **GetThemeForPreviewParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `themeId` | `string` | - ID of the theme to be retrieved |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationValidator.d.ts:54

___

### GlobalSchema

Ƭ **GlobalSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `props?` | [`GlobalSchemaProps`](theme._internal_.md#globalschemaprops)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1714

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1715

___

### GlobalSchemaProps

Ƭ **GlobalSchemaProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `category?` | `string` |
| `id?` | `string` |
| `label?` | `string` |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1719

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1720

___

### Images

Ƭ **Images**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `android?` | `string`[] |
| `desktop?` | `string`[] |
| `ios?` | `string`[] |
| `thumbnail?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1776

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1777

___

### Information

Ƭ **Information**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `features?` | `string`[] |
| `images?` | [`Images`](theme._internal_.md#images) |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1796

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1797

___

### Light

Ƭ **Light**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `file?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1804

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1805

___

### ListSchemaItem

Ƭ **ListSchemaItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `global_config?` | `any` |
| `name?` | `string` |
| `page?` | [`ConfigPage`](theme._internal_.md#configpage)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1810

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1811

___

### Medium

Ƭ **Medium**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `file?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1936

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1937

___

### Parameters

Ƭ **Parameters**<`T`\>: `T` extends (...`args`: infer P) => `any` ? `P` : `never`

Obtain the parameters of a function type in a tuple

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1617

___

### Preset

Ƭ **Preset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pages?` | [`AvailablePageSchema`](theme._internal_.md#availablepageschema)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2079

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2080

___

### Regular

Ƭ **Regular**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `file?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2125

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2126

___

### ReturnType

Ƭ **ReturnType**<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1627

___

### SemiBold

Ƭ **SemiBold**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `file?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2258

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2259

___

### Src

Ƭ **Src**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2264

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2265

___

### ThemesSchema

Ƭ **ThemesSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__v?` | `number` |
| `_id?` | `string` |
| `application?` | `string` |
| `applied?` | `boolean` |
| `archived?` | `boolean` |
| `assets?` | [`AssetsSchema`](theme._internal_.md#assetsschema) |
| `available_sections?` | [`availableSectionSchema`](theme._internal_.md#availablesectionschema)[] |
| `colors?` | [`Colors`](theme._internal_.md#colors) |
| `config?` | [`Config`](theme._internal_.md#config) |
| `created_at?` | `string` |
| `customized?` | `boolean` |
| `font?` | [`Font`](theme._internal_.md#font) |
| `information?` | [`Information`](theme._internal_.md#information) |
| `parent_theme?` | `string` |
| `parent_theme_version?` | `string` |
| `published?` | `boolean` |
| `src?` | [`Src`](theme._internal_.md#src) |
| `styles?` | `any` |
| `tags?` | `string`[] |
| `updated_at?` | `string` |
| `version?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2524

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2525

___

### ThunkAction

Ƭ **ThunkAction**<`ReturnType`, `State`, `ExtraThunkArg`, `BasicAction`\>: (`dispatch`: [`ThunkDispatch`](../interfaces/theme._internal_.ThunkDispatch.md)<`State`, `ExtraThunkArg`, `BasicAction`\>, `getState`: () => `State`, `extraArgument`: `ExtraThunkArg`) => `ReturnType`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ReturnType` | `ReturnType` | The return type of the thunk's inner function |
| `State` | `State` | The redux state |
| `ExtraThunkArg` | `ExtraThunkArg` | Optional extra argument passed to the inner function (if specified when setting up the Thunk middleware) |
| `BasicAction` | extends [`Action`](../interfaces/theme._internal_.Action.md) | The (non-thunk) actions that can be dispatched. |

#### Type declaration

▸ (`dispatch`, `getState`, `extraArgument`): `ReturnType`

A "thunk" action (a callback function that can be dispatched to the Redux
store.)

Also known as the "thunk inner function", when used with the typical pattern
of an action creator function that returns a thunk action.

##### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkDispatch`](../interfaces/theme._internal_.ThunkDispatch.md)<`State`, `ExtraThunkArg`, `BasicAction`\> |
| `getState` | () => `State` |
| `extraArgument` | `ExtraThunkArg` |

##### Returns

`ReturnType`

#### Defined in

node_modules/redux-thunk/es/types.d.ts:34

___

### ThunkActionDispatch

Ƭ **ThunkActionDispatch**<`ActionCreator`\>: (...`args`: [`Parameters`](theme._internal_.md#parameters)<`ActionCreator`\>) => [`ReturnType`](theme._internal_.md#returntype)<[`ReturnType`](theme._internal_.md#returntype)<`ActionCreator`\>\>

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ActionCreator` | extends (...`args`: `any`[]) => [`ThunkAction`](theme._internal_.md#thunkaction)<`any`, `any`, `any`, `any`\> | Thunk action creator to be wrapped |

#### Type declaration

▸ (`...args`): [`ReturnType`](theme._internal_.md#returntype)<[`ReturnType`](theme._internal_.md#returntype)<`ActionCreator`\>\>

A generic type that takes a thunk action creator and returns a function
signature which matches how it would appear after being processed using
bindActionCreators(): a function that takes the arguments of the outer
function, and returns the return type of the inner "thunk" function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Parameters`](theme._internal_.md#parameters)<`ActionCreator`\> |

##### Returns

[`ReturnType`](theme._internal_.md#returntype)<[`ReturnType`](theme._internal_.md#returntype)<`ActionCreator`\>\>

#### Defined in

node_modules/redux-thunk/es/types.d.ts:43

___

### UmdJs

Ƭ **UmdJs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link?` | `string` |
| `links?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2574

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2575

___

### UpdateSectionsForPreview

Ƭ **UpdateSectionsForPreview**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `newIndex` | `number` |

#### Defined in

src/types/theme.ts:12

___

### Variants

Ƭ **Variants**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bold?` | [`Bold`](theme._internal_.md#bold) |
| `light?` | [`Light`](theme._internal_.md#light) |
| `medium?` | [`Medium`](theme._internal_.md#medium) |
| `regular?` | [`Regular`](theme._internal_.md#regular) |
| `semi_bold?` | [`SemiBold`](theme._internal_.md#semibold) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2666

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2667

___

### availableSectionSchema

Ƭ **availableSectionSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blocks?` | [`Blocks`](theme._internal_.md#blocks)[] |
| `label?` | `string` |
| `name?` | `string` |
| `props?` | [`BlocksProps`](theme._internal_.md#blocksprops)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1156

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1157

## Functions

### AssetsSchema

▸ **AssetsSchema**(): [`AssetsSchema`](theme._internal_.md#assetsschema)

#### Returns

[`AssetsSchema`](theme._internal_.md#assetsschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1067

___

### AvailablePagePredicate

▸ **AvailablePagePredicate**(): [`AvailablePagePredicate`](theme._internal_.md#availablepagepredicate)

#### Returns

[`AvailablePagePredicate`](theme._internal_.md#availablepagepredicate)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1093

___

### AvailablePageRoutePredicate

▸ **AvailablePageRoutePredicate**(): [`AvailablePageRoutePredicate`](theme._internal_.md#availablepageroutepredicate)

#### Returns

[`AvailablePageRoutePredicate`](theme._internal_.md#availablepageroutepredicate)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1100

___

### AvailablePageSchema

▸ **AvailablePageSchema**(): [`AvailablePageSchema`](theme._internal_.md#availablepageschema)

#### Returns

[`AvailablePageSchema`](theme._internal_.md#availablepageschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1107

___

### AvailablePageSchemaSections

▸ **AvailablePageSchemaSections**(): [`AvailablePageSchemaSections`](theme._internal_.md#availablepageschemasections)

#### Returns

[`AvailablePageSchemaSections`](theme._internal_.md#availablepageschemasections)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1121

___

### AvailablePageScreenPredicate

▸ **AvailablePageScreenPredicate**(): [`AvailablePageScreenPredicate`](theme._internal_.md#availablepagescreenpredicate)

#### Returns

[`AvailablePageScreenPredicate`](theme._internal_.md#availablepagescreenpredicate)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1131

___

### AvailablePageSectionMetaAttributes

▸ **AvailablePageSectionMetaAttributes**(): [`AvailablePageSectionMetaAttributes`](theme._internal_.md#availablepagesectionmetaattributes)

#### Returns

[`AvailablePageSectionMetaAttributes`](theme._internal_.md#availablepagesectionmetaattributes)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1138

___

### AvailablePageSeo

▸ **AvailablePageSeo**(): [`AvailablePageSeo`](theme._internal_.md#availablepageseo)

#### Returns

[`AvailablePageSeo`](theme._internal_.md#availablepageseo)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1143

___

### AvailablePageUserPredicate

▸ **AvailablePageUserPredicate**(): [`AvailablePageUserPredicate`](theme._internal_.md#availablepageuserpredicate)

#### Returns

[`AvailablePageUserPredicate`](theme._internal_.md#availablepageuserpredicate)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1150

___

### Blocks

▸ **Blocks**(): [`Blocks`](theme._internal_.md#blocks)

#### Returns

[`Blocks`](theme._internal_.md#blocks)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1185

___

### BlocksProps

▸ **BlocksProps**(): [`BlocksProps`](theme._internal_.md#blocksprops)

#### Returns

[`BlocksProps`](theme._internal_.md#blocksprops)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1192

___

### Bold

▸ **Bold**(): [`Bold`](theme._internal_.md#bold)

#### Returns

[`Bold`](theme._internal_.md#bold)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1212

___

### Colors

▸ **Colors**(): [`Colors`](theme._internal_.md#colors)

#### Returns

[`Colors`](theme._internal_.md#colors)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1270

___

### CommonJs

▸ **CommonJs**(): [`CommonJs`](theme._internal_.md#commonjs)

#### Returns

[`CommonJs`](theme._internal_.md#commonjs)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1320

___

### Config

▸ **Config**(): [`Config`](theme._internal_.md#config)

#### Returns

[`Config`](theme._internal_.md#config)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1330

___

### ConfigPage

▸ **ConfigPage**(): [`ConfigPage`](theme._internal_.md#configpage)

#### Returns

[`ConfigPage`](theme._internal_.md#configpage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1338

___

### Css

▸ **Css**(): [`Css`](theme._internal_.md#css)

#### Returns

[`Css`](theme._internal_.md#css)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1384

___

### Font

▸ **Font**(): [`Font`](theme._internal_.md#font)

#### Returns

[`Font`](theme._internal_.md#font)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1612

___

### GlobalSchema

▸ **GlobalSchema**(): [`GlobalSchema`](theme._internal_.md#globalschema)

#### Returns

[`GlobalSchema`](theme._internal_.md#globalschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1714

___

### GlobalSchemaProps

▸ **GlobalSchemaProps**(): [`GlobalSchemaProps`](theme._internal_.md#globalschemaprops)

#### Returns

[`GlobalSchemaProps`](theme._internal_.md#globalschemaprops)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1719

___

### Images

▸ **Images**(): [`Images`](theme._internal_.md#images)

#### Returns

[`Images`](theme._internal_.md#images)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1776

___

### Information

▸ **Information**(): [`Information`](theme._internal_.md#information)

#### Returns

[`Information`](theme._internal_.md#information)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1796

___

### Light

▸ **Light**(): [`Light`](theme._internal_.md#light)

#### Returns

[`Light`](theme._internal_.md#light)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1804

___

### ListSchemaItem

▸ **ListSchemaItem**(): [`ListSchemaItem`](theme._internal_.md#listschemaitem)

#### Returns

[`ListSchemaItem`](theme._internal_.md#listschemaitem)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1810

___

### Medium

▸ **Medium**(): [`Medium`](theme._internal_.md#medium)

#### Returns

[`Medium`](theme._internal_.md#medium)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1936

___

### Preset

▸ **Preset**(): [`Preset`](theme._internal_.md#preset)

#### Returns

[`Preset`](theme._internal_.md#preset)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2079

___

### Regular

▸ **Regular**(): [`Regular`](theme._internal_.md#regular)

#### Returns

[`Regular`](theme._internal_.md#regular)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2125

___

### SemiBold

▸ **SemiBold**(): [`SemiBold`](theme._internal_.md#semibold)

#### Returns

[`SemiBold`](theme._internal_.md#semibold)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2258

___

### Src

▸ **Src**(): [`Src`](theme._internal_.md#src)

#### Returns

[`Src`](theme._internal_.md#src)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2264

___

### ThemesSchema

▸ **ThemesSchema**(): [`ThemesSchema`](theme._internal_.md#themesschema)

#### Returns

[`ThemesSchema`](theme._internal_.md#themesschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2524

___

### UmdJs

▸ **UmdJs**(): [`UmdJs`](theme._internal_.md#umdjs)

#### Returns

[`UmdJs`](theme._internal_.md#umdjs)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2574

___

### Variants

▸ **Variants**(): [`Variants`](theme._internal_.md#variants)

#### Returns

[`Variants`](theme._internal_.md#variants)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:2666

___

### availableSectionSchema

▸ **availableSectionSchema**(): [`availableSectionSchema`](theme._internal_.md#availablesectionschema)

#### Returns

[`availableSectionSchema`](theme._internal_.md#availablesectionschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1156

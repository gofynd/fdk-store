[fdk-store](../README.md) / [Modules](../modules.md) / src/types

# Module: src/types

## Table of contents

### Interfaces

- [ExtraArguments](../interfaces/src_types.ExtraArguments.md)

### Type Aliases

- [ActionGenerators](src_types.md#actiongenerators)
- [AsyncThunkCompleted](src_types.md#asyncthunkcompleted)
- [AsyncThunkPromise](src_types.md#asyncthunkpromise)
- [CommonAsyncLoadingTypes](src_types.md#commonasyncloadingtypes)
- [FPIClientOptions](src_types.md#fpiclientoptions)
- [GetPageOptions](src_types.md#getpageoptions)
- [ProductListingOptions](src_types.md#productlistingoptions)

## Type Aliases

### ActionGenerators

Ƭ **ActionGenerators**: { [k in string]: Function }

#### Defined in

[src/types/index.ts:73](https://gitlab.com/fynd/regrowth/fynd-platform/themes/shadowfire/-/blob/ef78e90/src/types/index.ts#L73)

___

### AsyncThunkCompleted

Ƭ **AsyncThunkCompleted**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `unknown` |
| `meta?` | `any` |
| `payload?` | `T` |
| `type` | `string` |

#### Defined in

[src/types/index.ts:25](https://gitlab.com/fynd/regrowth/fynd-platform/themes/shadowfire/-/blob/ef78e90/src/types/index.ts#L25)

___

### AsyncThunkPromise

Ƭ **AsyncThunkPromise**<`T`\>: `Promise`<{ `error?`: `unknown` ; `meta?`: `any` ; `payload?`: `T` ; `type`: `string`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/index.ts:18](https://gitlab.com/fynd/regrowth/fynd-platform/themes/shadowfire/-/blob/ef78e90/src/types/index.ts#L18)

___

### CommonAsyncLoadingTypes

Ƭ **CommonAsyncLoadingTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `unknown` |
| `loading?` | `boolean` |

#### Defined in

[src/types/index.ts:13](https://gitlab.com/fynd/regrowth/fynd-platform/themes/shadowfire/-/blob/ef78e90/src/types/index.ts#L13)

___

### FPIClientOptions

Ƭ **FPIClientOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationID` | `string` |
| `applicationToken` | `string` |
| `domain` | `string` |
| `storeInitialData` | `unknown` |

#### Defined in

[src/types/index.ts:38](https://gitlab.com/fynd/regrowth/fynd-platform/themes/shadowfire/-/blob/ef78e90/src/types/index.ts#L38)

___

### GetPageOptions

Ƭ **GetPageOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pageValue` | `string` |
| `themeId` | `string` |

#### Defined in

[src/types/index.ts:61](https://gitlab.com/fynd/regrowth/fynd-platform/themes/shadowfire/-/blob/ef78e90/src/types/index.ts#L61)

___

### ProductListingOptions

Ƭ **ProductListingOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `f?` | `string` |
| `filters?` | `boolean` |
| `pageId?` | `string` |
| `pageNo?` | `number` |
| `pageSize?` | `number` |
| `pageType?` | `string` |
| `q?` | `string` |
| `sortOn?` | `string` |

#### Defined in

[src/types/index.ts:50](https://gitlab.com/fynd/regrowth/fynd-platform/themes/shadowfire/-/blob/ef78e90/src/types/index.ts#L50)

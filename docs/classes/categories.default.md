[fdk-store](../README.md) / [Exports](../modules.md) / [categories](../modules/categories.md) / default

# Class: default

[categories](../modules/categories.md).default

## Table of contents

### Constructors

- [constructor](categories.default.md#constructor)

### Methods

- [fetchCategories](categories.default.md#fetchcategories)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/categories.ts:8

## Methods

### fetchCategories

▸ **fetchCategories**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CategoryListingResponse`](../modules/categories._internal_.md#categorylistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetCategoriesParam`](../modules/categories._internal_.md#getcategoriesparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`CategoryListingResponse`](../modules/categories._internal_.md#categorylistingresponse)\>

#### Defined in

src/store/modules/categories.ts:14

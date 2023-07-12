[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / categoriesModule

# Class: categoriesModule

[<internal>](../modules/internal_.md).categoriesModule

## Table of contents

### Constructors

- [constructor](internal_.categoriesModule.md#constructor)

### Methods

- [fetchCategories](internal_.categoriesModule.md#fetchcategories)

## Constructors

### constructor

• **new categoriesModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/categories.ts:8

## Methods

### fetchCategories

▸ **fetchCategories**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CategoryListingResponse`](../modules/internal_.md#categorylistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetCategoriesParam`](../modules/internal_.md#getcategoriesparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`CategoryListingResponse`](../modules/internal_.md#categorylistingresponse)\>

#### Defined in

src/store/modules/categories.ts:14

[fdk-store](../README.md) / [Exports](../modules.md) / [collection](../modules/collection.md) / default

# Class: default

[collection](../modules/collection.md).default

## Table of contents

### Constructors

- [constructor](collection.default.md#constructor)

### Methods

- [fetchCollection](collection.default.md#fetchcollection)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/collection.ts:8

## Methods

### fetchCollection

▸ **fetchCollection**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`GetCollectionListingResponse`](../modules/collection._internal_.md#getcollectionlistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetCollectionsParam`](../modules/collection._internal_.md#getcollectionsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`GetCollectionListingResponse`](../modules/collection._internal_.md#getcollectionlistingresponse)\>

#### Defined in

src/store/modules/collection.ts:14

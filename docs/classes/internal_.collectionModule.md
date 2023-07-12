[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / collectionModule

# Class: collectionModule

[<internal>](../modules/internal_.md).collectionModule

## Table of contents

### Constructors

- [constructor](internal_.collectionModule.md#constructor)

### Methods

- [fetchCollection](internal_.collectionModule.md#fetchcollection)

## Constructors

### constructor

• **new collectionModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/collection.ts:8

## Methods

### fetchCollection

▸ **fetchCollection**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`GetCollectionListingResponse`](../modules/internal_.md#getcollectionlistingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetCollectionsParam`](../modules/internal_.md#getcollectionsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`GetCollectionListingResponse`](../modules/internal_.md#getcollectionlistingresponse)\>

#### Defined in

src/store/modules/collection.ts:14

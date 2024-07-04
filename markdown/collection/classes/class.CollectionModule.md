[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [collection](../README.md) > CollectionModule

# Class: CollectionModule

## Constructors

### new CollectionModule

> **new CollectionModule**(`dispatch`): [`CollectionModule`](class.CollectionModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`CollectionModule`](class.CollectionModule.md)

#### Defined In

src/store/modules/collection.ts:8

## Methods

### getCollectionItemsBySlug

> **getCollectionItemsBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../../catalog/internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCollectionItemsBySlugParam`](../internal_/type-aliases/type-alias.GetCollectionItemsBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../../catalog/internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Defined In

src/store/modules/collection.ts:17

***

### getCollections

> **getCollections**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetCollectionListingResponse`](../internal_/type-aliases/type-alias.GetCollectionListingResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCollectionsParam`](../internal_/type-aliases/type-alias.GetCollectionsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetCollectionListingResponse`](../internal_/type-aliases/type-alias.GetCollectionListingResponse.md) \>

#### Defined In

src/store/modules/collection.ts:13

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

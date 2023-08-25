[**fdk-store**](../../README.md) ( [Readme](../../README.md) \| [API](../../API.md) )

---

[fdk-store](../../API.md) > [collection](../README.md) > CollectionModule

# Class: CollectionModule

## Constructors

### constructor()

> **new CollectionModule**(`dispatch`): [`CollectionModule`](class.CollectionModule.md)

#### Parameters

| Parameter  | Type                                                                                                     |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`CollectionModule`](class.CollectionModule.md)

#### Source

src/store/modules/collection.ts:8

## Methods

### fetchCollection()

> **fetchCollection**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetCollectionListingResponse`](../internal_/type-aliases/type-alias.GetCollectionListingResponse.md) \>

#### Parameters

| Parameter | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `params`  | [`GetCollectionsParam`](../internal_/type-aliases/type-alias.GetCollectionsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetCollectionListingResponse`](../internal_/type-aliases/type-alias.GetCollectionListingResponse.md) \>

#### Source

src/store/modules/collection.ts:14

---

### fetchCollectionItem()

> **fetchCollectionItem**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../../products/internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Parameters

| Parameter | Type                                                                                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `params`  | [`GetCollectionDetailBySlugParam`](../../products/internal_/type-aliases/type-alias.GetCollectionDetailBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ProductListingResponse`](../../products/internal_/type-aliases/type-alias.ProductListingResponse.md) \>

#### Source

src/store/modules/collection.ts:18

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

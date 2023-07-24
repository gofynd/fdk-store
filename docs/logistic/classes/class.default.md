[**fdk-store**](../../README.md) ( [Readme](../../README.md) \| [API](../../API.md) )

---

[fdk-store](../../API.md) > [logistic](../README.md) > default

# Class: default

## Constructors

### constructor()

> **new default**(`dispatch`): [`default`](class.default.md)

#### Parameters

| Parameter  | Type                                                                                                     |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`default`](class.default.md)

#### Source

src/store/modules/logistic.ts:9

## Methods

### fetchAllCountries()

> **fetchAllCountries**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CountryListResponse`](../internal_/type-aliases/type-alias.CountryListResponse.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CountryListResponse`](../internal_/type-aliases/type-alias.CountryListResponse.md) \>

#### Source

src/store/modules/logistic.ts:13

---

### fetchPincodeDetails()

> **fetchPincodeDetails**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PincodeApiResponse`](../internal_/type-aliases/type-alias.PincodeApiResponse.md) \>

#### Parameters

| Parameter | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `params`  | [`GetPincodeCityParam`](../internal_/type-aliases/type-alias.GetPincodeCityParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PincodeApiResponse`](../internal_/type-aliases/type-alias.PincodeApiResponse.md) \>

#### Source

src/store/modules/logistic.ts:21

---

### getTatProduct()

> **getTatProduct**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TATViewResponse`](../internal_/type-aliases/type-alias.TATViewResponse.md) \>

#### Parameters

| Parameter | Type                                                                               |
| :-------- | :--------------------------------------------------------------------------------- |
| `params`  | [`GetTatProductParam`](../internal_/type-aliases/type-alias.GetTatProductParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TATViewResponse`](../internal_/type-aliases/type-alias.TATViewResponse.md) \>

#### Source

src/store/modules/logistic.ts:17

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
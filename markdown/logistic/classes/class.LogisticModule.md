[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [logistic](../README.md) > LogisticModule

# Class: LogisticModule

## Constructors

### new LogisticModule

> **new LogisticModule**(`dispatch`): [`LogisticModule`](class.LogisticModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`LogisticModule`](class.LogisticModule.md)

#### Defined In

src/store/modules/logistic.ts:9

## Methods

### fetchPincodeDetails

> **fetchPincodeDetails**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PincodeApiResponse`](../internal_/type-aliases/type-alias.PincodeApiResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPincodeCityParam`](../internal_/type-aliases/type-alias.GetPincodeCityParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PincodeApiResponse`](../internal_/type-aliases/type-alias.PincodeApiResponse.md) \>

#### Defined In

src/store/modules/logistic.ts:24

***

### getAllCountries

> **getAllCountries**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CountryListResponse`](../internal_/type-aliases/type-alias.CountryListResponse.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CountryListResponse`](../internal_/type-aliases/type-alias.CountryListResponse.md) \>

#### Defined In

src/store/modules/logistic.ts:13

***

### getPincodeCity

> **getPincodeCity**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PincodeApiResponse`](../internal_/type-aliases/type-alias.PincodeApiResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPincodeCityParam`](../internal_/type-aliases/type-alias.GetPincodeCityParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PincodeApiResponse`](../internal_/type-aliases/type-alias.PincodeApiResponse.md) \>

#### Defined In

src/store/modules/logistic.ts:20

***

### getTatProduct

> **getTatProduct**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TATViewResponse`](../internal_/type-aliases/type-alias.TATViewResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetTatProductParam`](../internal_/type-aliases/type-alias.GetTatProductParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TATViewResponse`](../internal_/type-aliases/type-alias.TATViewResponse.md) \>

#### Defined In

src/store/modules/logistic.ts:17

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

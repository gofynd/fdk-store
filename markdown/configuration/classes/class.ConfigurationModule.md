[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [configuration](../README.md) > ConfigurationModule

# Class: ConfigurationModule

## Constructors

### new ConfigurationModule

> **new ConfigurationModule**(`dispatch`): [`ConfigurationModule`](class.ConfigurationModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`ConfigurationModule`](class.ConfigurationModule.md)

#### Defined In

src/store/modules/configuration.ts:8

## Methods

### fetchAppCurrencies

> **fetchAppCurrencies**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppCurrencyResponse`](../internal_/type-aliases/type-alias.AppCurrencyResponse.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppCurrencyResponse`](../internal_/type-aliases/type-alias.AppCurrencyResponse.md) \>

#### Defined In

src/store/modules/configuration.ts:40

***

### fetchAppFeatures

> **fetchAppFeatures**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppFeatureResponse`](../internal_/type-aliases/type-alias.AppFeatureResponse.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppFeatureResponse`](../internal_/type-aliases/type-alias.AppFeatureResponse.md) \>

#### Defined In

src/store/modules/configuration.ts:20

***

### fetchAppIntegrationTokens

> **fetchAppIntegrationTokens**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppTokenResponse`](../internal_/type-aliases/type-alias.AppTokenResponse.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppTokenResponse`](../internal_/type-aliases/type-alias.AppTokenResponse.md) \>

#### Defined In

src/store/modules/configuration.ts:24

***

### fetchApplication

> **fetchApplication**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Application`](../internal_/type-aliases/type-alias.Application.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Application`](../internal_/type-aliases/type-alias.Application.md) \>

#### Defined In

src/store/modules/configuration.ts:12

***

### fetchContactInfo

> **fetchContactInfo**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationInformation`](../internal_/type-aliases/type-alias.ApplicationInformation.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationInformation`](../internal_/type-aliases/type-alias.ApplicationInformation.md) \>

#### Defined In

src/store/modules/configuration.ts:16

***

### fetchDeploymentStores

> **fetchDeploymentStores**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderingStores`](../internal_/type-aliases/type-alias.OrderingStores.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetOrderingStoresParam`](../internal_/type-aliases/type-alias.GetOrderingStoresParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderingStores`](../internal_/type-aliases/type-alias.OrderingStores.md) \>

#### Defined In

src/store/modules/configuration.ts:28

***

### fetchStaff

> **fetchStaff**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppStaffResponse`](../internal_/type-aliases/type-alias.AppStaffResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetAppStaffsParam`](../internal_/type-aliases/type-alias.GetAppStaffsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AppStaffResponse`](../internal_/type-aliases/type-alias.AppStaffResponse.md) \>

#### Defined In

src/store/modules/configuration.ts:32

***

### fetchStoreById

> **fetchStoreById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderingStore`](../internal_/type-aliases/type-alias.OrderingStore.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetStoreDetailByIdParam`](../internal_/type-aliases/type-alias.GetStoreDetailByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`OrderingStore`](../internal_/type-aliases/type-alias.OrderingStore.md) \>

#### Defined In

src/store/modules/configuration.ts:36

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

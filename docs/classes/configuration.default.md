[fdk-store](../README.md) / [Exports](../modules.md) / [configuration](../modules/configuration.md) / default

# Class: default

[configuration](../modules/configuration.md).default

## Table of contents

### Constructors

- [constructor](configuration.default.md#constructor)

### Methods

- [fetchAppCurrencies](configuration.default.md#fetchappcurrencies)
- [fetchAppFeatures](configuration.default.md#fetchappfeatures)
- [fetchAppIntegrationTokens](configuration.default.md#fetchappintegrationtokens)
- [fetchApplication](configuration.default.md#fetchapplication)
- [fetchContactInfo](configuration.default.md#fetchcontactinfo)
- [fetchDeploymentStores](configuration.default.md#fetchdeploymentstores)
- [fetchStaff](configuration.default.md#fetchstaff)
- [fetchStoreById](configuration.default.md#fetchstorebyid)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/configuration.ts:8

## Methods

### fetchAppCurrencies

▸ **fetchAppCurrencies**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppCurrencyResponse`](../modules/configuration._internal_.md#appcurrencyresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppCurrencyResponse`](../modules/configuration._internal_.md#appcurrencyresponse)\>

#### Defined in

src/store/modules/configuration.ts:40

___

### fetchAppFeatures

▸ **fetchAppFeatures**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppFeatureResponse`](../modules/configuration._internal_.md#appfeatureresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppFeatureResponse`](../modules/configuration._internal_.md#appfeatureresponse)\>

#### Defined in

src/store/modules/configuration.ts:20

___

### fetchAppIntegrationTokens

▸ **fetchAppIntegrationTokens**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppTokenResponse`](../modules/configuration._internal_.md#apptokenresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppTokenResponse`](../modules/configuration._internal_.md#apptokenresponse)\>

#### Defined in

src/store/modules/configuration.ts:24

___

### fetchApplication

▸ **fetchApplication**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Application`](../modules/configuration._internal_.md#application)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Application`](../modules/configuration._internal_.md#application)\>

#### Defined in

src/store/modules/configuration.ts:12

___

### fetchContactInfo

▸ **fetchContactInfo**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ApplicationInformation`](../modules/configuration._internal_.md#applicationinformation)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ApplicationInformation`](../modules/configuration._internal_.md#applicationinformation)\>

#### Defined in

src/store/modules/configuration.ts:16

___

### fetchDeploymentStores

▸ **fetchDeploymentStores**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OrderingStores`](../modules/configuration._internal_.md#orderingstores)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetOrderingStoresParam`](../modules/configuration._internal_.md#getorderingstoresparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OrderingStores`](../modules/configuration._internal_.md#orderingstores)\>

#### Defined in

src/store/modules/configuration.ts:28

___

### fetchStaff

▸ **fetchStaff**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppStaffResponse`](../modules/configuration._internal_.md#appstaffresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAppStaffsParam`](../modules/configuration._internal_.md#getappstaffsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AppStaffResponse`](../modules/configuration._internal_.md#appstaffresponse)\>

#### Defined in

src/store/modules/configuration.ts:32

___

### fetchStoreById

▸ **fetchStoreById**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OrderingStore`](../modules/configuration._internal_.md#orderingstore)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetStoreDetailByIdParam`](../modules/configuration._internal_.md#getstoredetailbyidparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`OrderingStore`](../modules/configuration._internal_.md#orderingstore)\>

#### Defined in

src/store/modules/configuration.ts:36

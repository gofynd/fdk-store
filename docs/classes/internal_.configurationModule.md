[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / configurationModule

# Class: configurationModule

[<internal>](../modules/internal_.md).configurationModule

## Table of contents

### Constructors

- [constructor](internal_.configurationModule.md#constructor)

### Methods

- [fetchAppCurrencies](internal_.configurationModule.md#fetchappcurrencies)
- [fetchAppFeatures](internal_.configurationModule.md#fetchappfeatures)
- [fetchAppIntegrationTokens](internal_.configurationModule.md#fetchappintegrationtokens)
- [fetchApplication](internal_.configurationModule.md#fetchapplication)
- [fetchContactInfo](internal_.configurationModule.md#fetchcontactinfo)
- [fetchDeploymentStores](internal_.configurationModule.md#fetchdeploymentstores)
- [fetchStaff](internal_.configurationModule.md#fetchstaff)
- [fetchStoreById](internal_.configurationModule.md#fetchstorebyid)

## Constructors

### constructor

• **new configurationModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/configuration.ts:8

## Methods

### fetchAppCurrencies

▸ **fetchAppCurrencies**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppCurrencyResponse`](../modules/internal_.md#appcurrencyresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppCurrencyResponse`](../modules/internal_.md#appcurrencyresponse)\>

#### Defined in

src/store/modules/configuration.ts:40

___

### fetchAppFeatures

▸ **fetchAppFeatures**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppFeatureResponse`](../modules/internal_.md#appfeatureresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppFeatureResponse`](../modules/internal_.md#appfeatureresponse)\>

#### Defined in

src/store/modules/configuration.ts:20

___

### fetchAppIntegrationTokens

▸ **fetchAppIntegrationTokens**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppTokenResponse`](../modules/internal_.md#apptokenresponse)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppTokenResponse`](../modules/internal_.md#apptokenresponse)\>

#### Defined in

src/store/modules/configuration.ts:24

___

### fetchApplication

▸ **fetchApplication**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Application`](../modules/internal_.md#application)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Application`](../modules/internal_.md#application)\>

#### Defined in

src/store/modules/configuration.ts:12

___

### fetchContactInfo

▸ **fetchContactInfo**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ApplicationInformation`](../modules/internal_.md#applicationinformation)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ApplicationInformation`](../modules/internal_.md#applicationinformation)\>

#### Defined in

src/store/modules/configuration.ts:16

___

### fetchDeploymentStores

▸ **fetchDeploymentStores**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OrderingStores`](../modules/internal_.md#orderingstores)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetOrderingStoresParam`](../modules/internal_.md#getorderingstoresparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OrderingStores`](../modules/internal_.md#orderingstores)\>

#### Defined in

src/store/modules/configuration.ts:28

___

### fetchStaff

▸ **fetchStaff**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppStaffResponse`](../modules/internal_.md#appstaffresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAppStaffsParam`](../modules/internal_.md#getappstaffsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AppStaffResponse`](../modules/internal_.md#appstaffresponse)\>

#### Defined in

src/store/modules/configuration.ts:32

___

### fetchStoreById

▸ **fetchStoreById**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OrderingStore`](../modules/internal_.md#orderingstore)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetStoreDetailByIdParam`](../modules/internal_.md#getstoredetailbyidparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`OrderingStore`](../modules/internal_.md#orderingstore)\>

#### Defined in

src/store/modules/configuration.ts:36

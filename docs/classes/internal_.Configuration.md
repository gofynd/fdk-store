[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Configuration

# Class: Configuration

[<internal>](../modules/internal_.md).Configuration

## Table of contents

### Constructors

- [constructor](internal_.Configuration.md#constructor)

### Properties

- [\_conf](internal_.Configuration.md#_conf)
- [\_relativeUrls](internal_.Configuration.md#_relativeurls)
- [\_urls](internal_.Configuration.md#_urls)

### Methods

- [getAppCurrencies](internal_.Configuration.md#getappcurrencies)
- [getAppStaffList](internal_.Configuration.md#getappstafflist)
- [getAppStaffListPaginator](internal_.Configuration.md#getappstafflistpaginator)
- [getAppStaffs](internal_.Configuration.md#getappstaffs)
- [getApplication](internal_.Configuration.md#getapplication)
- [getBasicDetails](internal_.Configuration.md#getbasicdetails)
- [getContactInfo](internal_.Configuration.md#getcontactinfo)
- [getCurrencies](internal_.Configuration.md#getcurrencies)
- [getCurrencyById](internal_.Configuration.md#getcurrencybyid)
- [getFeatures](internal_.Configuration.md#getfeatures)
- [getIntegrationTokens](internal_.Configuration.md#getintegrationtokens)
- [getLanguages](internal_.Configuration.md#getlanguages)
- [getOrderingStoreCookie](internal_.Configuration.md#getorderingstorecookie)
- [getOrderingStores](internal_.Configuration.md#getorderingstores)
- [getOrderingStoresPaginator](internal_.Configuration.md#getorderingstorespaginator)
- [getOwnerInfo](internal_.Configuration.md#getownerinfo)
- [getStoreDetailById](internal_.Configuration.md#getstoredetailbyid)
- [removeOrderingStoreCookie](internal_.Configuration.md#removeorderingstorecookie)
- [updateUrls](internal_.Configuration.md#updateurls)

## Constructors

### constructor

• **new Configuration**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAppCurrencies` | `string` |
| `getAppStaffList` | `string` |
| `getAppStaffs` | `string` |
| `getApplication` | `string` |
| `getBasicDetails` | `string` |
| `getContactInfo` | `string` |
| `getCurrencies` | `string` |
| `getCurrencyById` | `string` |
| `getFeatures` | `string` |
| `getIntegrationTokens` | `string` |
| `getLanguages` | `string` |
| `getOrderingStoreCookie` | `string` |
| `getOrderingStores` | `string` |
| `getOwnerInfo` | `string` |
| `getStoreDetailById` | `string` |
| `removeOrderingStoreCookie` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:23

## Methods

### getAppCurrencies

▸ **getAppCurrencies**(`arg?`): `Promise`<[`AppCurrencyResponse`](../modules/internal_.md#appcurrencyresponse)\>

**`Name`**

getAppCurrencies
@summary: Get currencies enabled in the application
@description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`AppCurrencyResponse`](../modules/internal_.md#appcurrencyresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:33

___

### getAppStaffList

▸ **getAppStaffList**(`arg?`): `Promise`<[`AppStaffListResponse`](../modules/internal_.md#appstafflistresponse)\>

**`Name`**

getAppStaffList
@summary: Get a list of staff.
@description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAppStaffListParam`](../modules/internal_.md#getappstafflistparam) | Arg object. |

#### Returns

`Promise`<[`AppStaffListResponse`](../modules/internal_.md#appstafflistresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:42

___

### getAppStaffListPaginator

▸ **getAppStaffListPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`AppStaffListResponse`](../modules/internal_.md#appstafflistresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.orderIncent?` | `boolean` | This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders. |
| `arg.orderingStore?` | `number` | ID of the ordering store. Helps in retrieving staff members working at a particular ordering store. |
| `arg.pageSize?` | `number` |  |
| `arg.user?` | `string` | Mongo ID of the staff. Helps in retrieving the details of a particular staff member. |
| `arg.userName?` | `string` | User name of the member |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`AppStaffListResponse`](../modules/internal_.md#appstafflistresponse)\>

@summary: Get a list of staff.
@description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:57

___

### getAppStaffs

▸ **getAppStaffs**(`arg?`): `Promise`<[`AppStaffResponse`](../modules/internal_.md#appstaffresponse)\>

**`Name`**

getAppStaffs
@summary: Get a list of staff.
@description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAppStaffsParam`](../modules/internal_.md#getappstaffsparam) | Arg object. |

#### Returns

`Promise`<[`AppStaffResponse`](../modules/internal_.md#appstaffresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:72

___

### getApplication

▸ **getApplication**(`arg?`): `Promise`<[`Application`](../modules/internal_.md#application)\>

**`Name`**

getApplication
@summary: Get current sales channel details
@description: Use this API to get the current sales channel details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`Application`](../modules/internal_.md#application)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:80

___

### getBasicDetails

▸ **getBasicDetails**(`arg?`): `Promise`<[`ApplicationDetail`](../modules/internal_.md#applicationdetail)\>

**`Name`**

getBasicDetails
@summary: Get basic details of the application
@description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`ApplicationDetail`](../modules/internal_.md#applicationdetail)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:89

___

### getContactInfo

▸ **getContactInfo**(`arg?`): `Promise`<[`ApplicationInformation`](../modules/internal_.md#applicationinformation)\>

**`Name`**

getContactInfo
@summary: Get application information
@description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`ApplicationInformation`](../modules/internal_.md#applicationinformation)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:99

___

### getCurrencies

▸ **getCurrencies**(`arg?`): `Promise`<[`CurrenciesResponse`](../modules/internal_.md#currenciesresponse)\>

**`Name`**

getCurrencies
@summary: Get all currencies list
@description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`CurrenciesResponse`](../modules/internal_.md#currenciesresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:108

___

### getCurrencyById

▸ **getCurrencyById**(`arg?`): `Promise`<[`Currency`](../modules/internal_.md#currency)\>

**`Name`**

getCurrencyById
@summary: Get currency by its ID
@description: Use this API to retrieve a currency using its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCurrencyByIdParam`](../modules/internal_.md#getcurrencybyidparam) | Arg object. |

#### Returns

`Promise`<[`Currency`](../modules/internal_.md#currency)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:116

___

### getFeatures

▸ **getFeatures**(`arg?`): `Promise`<[`AppFeatureResponse`](../modules/internal_.md#appfeatureresponse)\>

**`Name`**

getFeatures
@summary: Get features of application
@description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`AppFeatureResponse`](../modules/internal_.md#appfeatureresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:125

___

### getIntegrationTokens

▸ **getIntegrationTokens**(`arg?`): `Promise`<[`AppTokenResponse`](../modules/internal_.md#apptokenresponse)\>

**`Name`**

getIntegrationTokens
@summary: Get integration tokens
@description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`AppTokenResponse`](../modules/internal_.md#apptokenresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:136

___

### getLanguages

▸ **getLanguages**(`arg?`): `Promise`<[`LanguageResponse`](../modules/internal_.md#languageresponse)\>

**`Name`**

getLanguages
@summary: Get list of languages
@description: Use this API to get a list of languages supported in the application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`LanguageResponse`](../modules/internal_.md#languageresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:145

___

### getOrderingStoreCookie

▸ **getOrderingStoreCookie**(`arg?`): `Promise`<[`SuccessMessageResponse`](../modules/internal_.md#successmessageresponse)\>

**`Name`**

getOrderingStoreCookie
@summary: Get an Ordering Store signed cookie on selection of ordering store.
@description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOrderingStoreCookieParam`](../modules/internal_.md#getorderingstorecookieparam) | Arg object. |

#### Returns

`Promise`<[`SuccessMessageResponse`](../modules/internal_.md#successmessageresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:157

___

### getOrderingStores

▸ **getOrderingStores**(`arg?`): `Promise`<[`OrderingStores`](../modules/internal_.md#orderingstores)\>

**`Name`**

getOrderingStores
@summary: Get all deployment stores
@description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOrderingStoresParam`](../modules/internal_.md#getorderingstoresparam) | Arg object. |

#### Returns

`Promise`<[`OrderingStores`](../modules/internal_.md#orderingstores)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:165

___

### getOrderingStoresPaginator

▸ **getOrderingStoresPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`OrderingStores`](../modules/internal_.md#orderingstores)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. Default value is 10. |
| `arg.q?` | `string` | Store code or name of the ordering store. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`OrderingStores`](../modules/internal_.md#orderingstores)\>

@summary: Get all deployment stores
@description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:175

___

### getOwnerInfo

▸ **getOwnerInfo**(`arg?`): `Promise`<[`ApplicationAboutResponse`](../modules/internal_.md#applicationaboutresponse)\>

**`Name`**

getOwnerInfo
@summary: Get sales channel, owner and seller information
@description: Use this API to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`ApplicationAboutResponse`](../modules/internal_.md#applicationaboutresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:188

___

### getStoreDetailById

▸ **getStoreDetailById**(`arg?`): `Promise`<[`OrderingStore`](../modules/internal_.md#orderingstore)\>

**`Name`**

getStoreDetailById
@summary: Get ordering store details
@description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetStoreDetailByIdParam`](../modules/internal_.md#getstoredetailbyidparam) | Arg object. |

#### Returns

`Promise`<[`OrderingStore`](../modules/internal_.md#orderingstore)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:197

___

### removeOrderingStoreCookie

▸ **removeOrderingStoreCookie**(`arg?`): `Promise`<[`SuccessMessageResponse`](../modules/internal_.md#successmessageresponse)\>

**`Name`**

removeOrderingStoreCookie
@summary: Unset the Ordering Store signed cookie.
@description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`SuccessMessageResponse`](../modules/internal_.md#successmessageresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:209

___

### updateUrls

▸ **updateUrls**(`urls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `any` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationClient.d.ts:24

[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Rewards

# Class: Rewards

[<internal>](../modules/internal_.md).Rewards

## Table of contents

### Constructors

- [constructor](internal_.Rewards.md#constructor)

### Properties

- [\_conf](internal_.Rewards.md#_conf)
- [\_relativeUrls](internal_.Rewards.md#_relativeurls)
- [\_urls](internal_.Rewards.md#_urls)

### Methods

- [catalogueOrder](internal_.Rewards.md#catalogueorder)
- [getOfferByName](internal_.Rewards.md#getofferbyname)
- [getOrderDiscount](internal_.Rewards.md#getorderdiscount)
- [getUserPoints](internal_.Rewards.md#getuserpoints)
- [getUserPointsHistory](internal_.Rewards.md#getuserpointshistory)
- [getUserPointsHistoryPaginator](internal_.Rewards.md#getuserpointshistorypaginator)
- [getUserReferralDetails](internal_.Rewards.md#getuserreferraldetails)
- [redeemReferralCode](internal_.Rewards.md#redeemreferralcode)
- [updateUrls](internal_.Rewards.md#updateurls)

## Constructors

### constructor

• **new Rewards**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `catalogueOrder` | `string` |
| `getOfferByName` | `string` |
| `getOrderDiscount` | `string` |
| `getUserPoints` | `string` |
| `getUserPointsHistory` | `string` |
| `getUserReferralDetails` | `string` |
| `redeemReferralCode` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:14

## Methods

### catalogueOrder

▸ **catalogueOrder**(`arg?`): `Promise`<[`CatalogueOrderResponse`](../modules/internal_.md#catalogueorderresponse)\>

**`Name`**

catalogueOrder
@summary: Get all transactions of reward points
@description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CatalogueOrderParam`](../modules/internal_.md#catalogueorderparam) | Arg object. |

#### Returns

`Promise`<[`CatalogueOrderResponse`](../modules/internal_.md#catalogueorderresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:24

___

### getOfferByName

▸ **getOfferByName**(`arg?`): `Promise`<[`Offer`](../modules/internal_.md#offer)\>

**`Name`**

getOfferByName
@summary: Get offer by name
@description: Use this API to get fetch the specific offer details and configuration by the name of the offer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOfferByNameParam`](../modules/internal_.md#getofferbynameparam) | Arg object. |

#### Returns

`Promise`<[`Offer`](../modules/internal_.md#offer)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:32

___

### getOrderDiscount

▸ **getOrderDiscount**(`arg?`): `Promise`<[`OrderDiscountResponse`](../modules/internal_.md#orderdiscountresponse)\>

**`Name`**

getOrderDiscount
@summary: Calculates the discount on order-amount
@description: Use this API to calculate the discount on the order amount, based on all the amount range configured in Order Discount offer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOrderDiscountParam`](../modules/internal_.md#getorderdiscountparam) | Arg object. |

#### Returns

`Promise`<[`OrderDiscountResponse`](../modules/internal_.md#orderdiscountresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:41

___

### getUserPoints

▸ **getUserPoints**(`arg?`): `Promise`<[`PointsResponse`](../modules/internal_.md#pointsresponse)\>

**`Name`**

getUserPoints
@summary: Get total available points of a user
@description: Use this API to retrieve total available points of a user for current application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`PointsResponse`](../modules/internal_.md#pointsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:49

___

### getUserPointsHistory

▸ **getUserPointsHistory**(`arg?`): `Promise`<[`PointsHistoryResponse`](../modules/internal_.md#pointshistoryresponse)\>

**`Name`**

getUserPointsHistory
@summary: Get all transactions of reward points
@description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetUserPointsHistoryParam`](../modules/internal_.md#getuserpointshistoryparam) | Arg object. |

#### Returns

`Promise`<[`PointsHistoryResponse`](../modules/internal_.md#pointshistoryresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:58

___

### getUserPointsHistoryPaginator

▸ **getUserPointsHistoryPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`PointsHistoryResponse`](../modules/internal_.md#pointshistoryresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`PointsHistoryResponse`](../modules/internal_.md#pointshistoryresponse)\>

@summary: Get all transactions of reward points
@description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:66

___

### getUserReferralDetails

▸ **getUserReferralDetails**(`arg?`): `Promise`<[`ReferralDetailsResponse`](../modules/internal_.md#referraldetailsresponse)\>

**`Name`**

getUserReferralDetails
@summary: Get referral details of a user
@description: Use this API to retrieve the referral details like referral code of a user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`ReferralDetailsResponse`](../modules/internal_.md#referraldetailsresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:77

___

### redeemReferralCode

▸ **redeemReferralCode**(`arg?`): `Promise`<[`RedeemReferralCodeResponse`](../modules/internal_.md#redeemreferralcoderesponse)\>

**`Name`**

redeemReferralCode
@summary: Redeems a referral code and credits reward points to referee and the referrer as per the configuration
@description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RedeemReferralCodeParam`](../modules/internal_.md#redeemreferralcodeparam) | Arg object. |

#### Returns

`Promise`<[`RedeemReferralCodeResponse`](../modules/internal_.md#redeemreferralcoderesponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:86

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

node_modules/fdk-client-javascript/sdk/application/Rewards/RewardsApplicationClient.d.ts:15

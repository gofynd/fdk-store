[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Payment

# Class: Payment

[<internal>](../modules/internal_.md).Payment

## Table of contents

### Constructors

- [constructor](internal_.Payment.md#constructor)

### Properties

- [\_conf](internal_.Payment.md#_conf)
- [\_relativeUrls](internal_.Payment.md#_relativeurls)
- [\_urls](internal_.Payment.md#_urls)

### Methods

- [addBeneficiaryDetails](internal_.Payment.md#addbeneficiarydetails)
- [addRefundBankAccountUsingOTP](internal_.Payment.md#addrefundbankaccountusingotp)
- [attachCardToCustomer](internal_.Payment.md#attachcardtocustomer)
- [cancelPaymentLink](internal_.Payment.md#cancelpaymentlink)
- [cardDetails](internal_.Payment.md#carddetails)
- [checkAndUpdatePaymentStatus](internal_.Payment.md#checkandupdatepaymentstatus)
- [checkAndUpdatePaymentStatusPaymentLink](internal_.Payment.md#checkandupdatepaymentstatuspaymentlink)
- [checkCredit](internal_.Payment.md#checkcredit)
- [createOrderHandlerPaymentLink](internal_.Payment.md#createorderhandlerpaymentlink)
- [createPaymentLink](internal_.Payment.md#createpaymentlink)
- [customerCreditSummary](internal_.Payment.md#customercreditsummary)
- [customerOnboard](internal_.Payment.md#customeronboard)
- [deleteUserCard](internal_.Payment.md#deleteusercard)
- [enableOrDisableRefundTransferMode](internal_.Payment.md#enableordisablerefundtransfermode)
- [getActiveCardAggregator](internal_.Payment.md#getactivecardaggregator)
- [getActiveRefundTransferModes](internal_.Payment.md#getactiverefundtransfermodes)
- [getActiveUserCards](internal_.Payment.md#getactiveusercards)
- [getAggregatorsConfig](internal_.Payment.md#getaggregatorsconfig)
- [getEpaylaterBannerDetails](internal_.Payment.md#getepaylaterbannerdetails)
- [getOrderBeneficiariesDetail](internal_.Payment.md#getorderbeneficiariesdetail)
- [getPaymentLink](internal_.Payment.md#getpaymentlink)
- [getPaymentModeRoutes](internal_.Payment.md#getpaymentmoderoutes)
- [getPaymentModeRoutesPaymentLink](internal_.Payment.md#getpaymentmoderoutespaymentlink)
- [getPosPaymentModeRoutes](internal_.Payment.md#getpospaymentmoderoutes)
- [getRupifiBannerDetails](internal_.Payment.md#getrupifibannerdetails)
- [getUserBeneficiariesDetail](internal_.Payment.md#getuserbeneficiariesdetail)
- [initialisePayment](internal_.Payment.md#initialisepayment)
- [initialisePaymentPaymentLink](internal_.Payment.md#initialisepaymentpaymentlink)
- [outstandingOrderDetails](internal_.Payment.md#outstandingorderdetails)
- [paidOrderDetails](internal_.Payment.md#paidorderdetails)
- [pollingPaymentLink](internal_.Payment.md#pollingpaymentlink)
- [redirectToAggregator](internal_.Payment.md#redirecttoaggregator)
- [renderHTML](internal_.Payment.md#renderhtml)
- [resendOrCancelPayment](internal_.Payment.md#resendorcancelpayment)
- [resendPaymentLink](internal_.Payment.md#resendpaymentlink)
- [updateDefaultBeneficiary](internal_.Payment.md#updatedefaultbeneficiary)
- [updateUrls](internal_.Payment.md#updateurls)
- [validateVPA](internal_.Payment.md#validatevpa)
- [verifyAndChargePayment](internal_.Payment.md#verifyandchargepayment)
- [verifyCustomerForPayment](internal_.Payment.md#verifycustomerforpayment)
- [verifyIfscCode](internal_.Payment.md#verifyifsccode)
- [verifyOtpAndAddBeneficiaryForBank](internal_.Payment.md#verifyotpandaddbeneficiaryforbank)
- [verifyOtpAndAddBeneficiaryForWallet](internal_.Payment.md#verifyotpandaddbeneficiaryforwallet)

## Constructors

### constructor

• **new Payment**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addBeneficiaryDetails` | `string` |
| `addRefundBankAccountUsingOTP` | `string` |
| `attachCardToCustomer` | `string` |
| `cancelPaymentLink` | `string` |
| `cardDetails` | `string` |
| `checkAndUpdatePaymentStatus` | `string` |
| `checkAndUpdatePaymentStatusPaymentLink` | `string` |
| `checkCredit` | `string` |
| `createOrderHandlerPaymentLink` | `string` |
| `createPaymentLink` | `string` |
| `customerCreditSummary` | `string` |
| `customerOnboard` | `string` |
| `deleteUserCard` | `string` |
| `enableOrDisableRefundTransferMode` | `string` |
| `getActiveCardAggregator` | `string` |
| `getActiveRefundTransferModes` | `string` |
| `getActiveUserCards` | `string` |
| `getAggregatorsConfig` | `string` |
| `getEpaylaterBannerDetails` | `string` |
| `getOrderBeneficiariesDetail` | `string` |
| `getPaymentLink` | `string` |
| `getPaymentModeRoutes` | `string` |
| `getPaymentModeRoutesPaymentLink` | `string` |
| `getPosPaymentModeRoutes` | `string` |
| `getRupifiBannerDetails` | `string` |
| `getUserBeneficiariesDetail` | `string` |
| `initialisePayment` | `string` |
| `initialisePaymentPaymentLink` | `string` |
| `outstandingOrderDetails` | `string` |
| `paidOrderDetails` | `string` |
| `pollingPaymentLink` | `string` |
| `redirectToAggregator` | `string` |
| `renderHTML` | `string` |
| `resendOrCancelPayment` | `string` |
| `resendPaymentLink` | `string` |
| `updateDefaultBeneficiary` | `string` |
| `validateVPA` | `string` |
| `verifyAndChargePayment` | `string` |
| `verifyCustomerForPayment` | `string` |
| `verifyIfscCode` | `string` |
| `verifyOtpAndAddBeneficiaryForBank` | `string` |
| `verifyOtpAndAddBeneficiaryForWallet` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:49

## Methods

### addBeneficiaryDetails

▸ **addBeneficiaryDetails**(`arg?`): `Promise`<[`RefundAccountResponse`](../modules/internal_.md#refundaccountresponse)\>

**`Name`**

addBeneficiaryDetails
@summary: Save bank details for cancelled/returned order
@description: Use this API to save the bank details for a returned or cancelled order to refund the amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddBeneficiaryDetailsParam`](../modules/internal_.md#addbeneficiarydetailsparam) | Arg object. |

#### Returns

`Promise`<[`RefundAccountResponse`](../modules/internal_.md#refundaccountresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:59

___

### addRefundBankAccountUsingOTP

▸ **addRefundBankAccountUsingOTP**(`arg?`): `Promise`<[`RefundAccountResponse`](../modules/internal_.md#refundaccountresponse)\>

**`Name`**

addRefundBankAccountUsingOTP
@summary: Save bank details for cancelled/returned order
@description: Use this API to save bank details for returned/cancelled order to refund amount in his account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddRefundBankAccountUsingOTPParam`](../modules/internal_.md#addrefundbankaccountusingotpparam) | Arg object. |

#### Returns

`Promise`<[`RefundAccountResponse`](../modules/internal_.md#refundaccountresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:70

___

### attachCardToCustomer

▸ **attachCardToCustomer**(`arg?`): `Promise`<[`AttachCardsResponse`](../modules/internal_.md#attachcardsresponse)\>

**`Name`**

attachCardToCustomer
@summary: Attach a saved card to customer.
@description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AttachCardToCustomerParam`](../modules/internal_.md#attachcardtocustomerparam) | Arg object. |

#### Returns

`Promise`<[`AttachCardsResponse`](../modules/internal_.md#attachcardsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:78

___

### cancelPaymentLink

▸ **cancelPaymentLink**(`arg?`): `Promise`<[`CancelPaymentLinkResponse`](../modules/internal_.md#cancelpaymentlinkresponse)\>

**`Name`**

cancelPaymentLink
@summary: Cancel payment link
@description: Use this API to cancel a payment link for the customer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CancelPaymentLinkParam`](../modules/internal_.md#cancelpaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`CancelPaymentLinkResponse`](../modules/internal_.md#cancelpaymentlinkresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:87

___

### cardDetails

▸ **cardDetails**(`arg?`): `Promise`<[`CardDetailsResponse`](../modules/internal_.md#carddetailsresponse)\>

**`Name`**

cardDetails
@summary: API to get Card info from PG
@description: API to get Card info from PG

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CardDetailsParam`](../modules/internal_.md#carddetailsparam) | Arg object. |

#### Returns

`Promise`<[`CardDetailsResponse`](../modules/internal_.md#carddetailsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:95

___

### checkAndUpdatePaymentStatus

▸ **checkAndUpdatePaymentStatus**(`arg?`): `Promise`<[`PaymentStatusUpdateResponse`](../modules/internal_.md#paymentstatusupdateresponse)\>

**`Name`**

checkAndUpdatePaymentStatus
@summary: Performs continuous polling to check status of payment on the server
@description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CheckAndUpdatePaymentStatusParam`](../modules/internal_.md#checkandupdatepaymentstatusparam) | Arg object. |

#### Returns

`Promise`<[`PaymentStatusUpdateResponse`](../modules/internal_.md#paymentstatusupdateresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:107

___

### checkAndUpdatePaymentStatusPaymentLink

▸ **checkAndUpdatePaymentStatusPaymentLink**(`arg?`): `Promise`<[`PaymentStatusUpdateResponse`](../modules/internal_.md#paymentstatusupdateresponse)\>

**`Name`**

checkAndUpdatePaymentStatusPaymentLink
@summary: Performs continuous polling to check status of payment on the server
@description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CheckAndUpdatePaymentStatusPaymentLinkParam`](../modules/internal_.md#checkandupdatepaymentstatuspaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`PaymentStatusUpdateResponse`](../modules/internal_.md#paymentstatusupdateresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:119

___

### checkCredit

▸ **checkCredit**(`arg?`): `Promise`<[`CheckCreditResponse`](../modules/internal_.md#checkcreditresponse)\>

**`Name`**

checkCredit
@summary: API to fetch the customer credit summary
@description: Use this API to fetch the customer credit summary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CheckCreditParam`](../modules/internal_.md#checkcreditparam) | Arg object. |

#### Returns

`Promise`<[`CheckCreditResponse`](../modules/internal_.md#checkcreditresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:127

___

### createOrderHandlerPaymentLink

▸ **createOrderHandlerPaymentLink**(`arg?`): `Promise`<[`CreateOrderUserResponse`](../modules/internal_.md#createorderuserresponse)\>

**`Name`**

createOrderHandlerPaymentLink
@summary: Create Order user
@description: Use this API to create a order and payment on aggregator side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CreateOrderHandlerPaymentLinkParam`](../modules/internal_.md#createorderhandlerpaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`CreateOrderUserResponse`](../modules/internal_.md#createorderuserresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:138

___

### createPaymentLink

▸ **createPaymentLink**(`arg?`): `Promise`<[`CreatePaymentLinkResponse`](../modules/internal_.md#createpaymentlinkresponse)\>

**`Name`**

createPaymentLink
@summary: Create payment link
@description: Use this API to create a payment link for the customer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CreatePaymentLinkParam`](../modules/internal_.md#createpaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`CreatePaymentLinkResponse`](../modules/internal_.md#createpaymentlinkresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:147

___

### customerCreditSummary

▸ **customerCreditSummary**(`arg?`): `Promise`<[`CustomerCreditSummaryResponse`](../modules/internal_.md#customercreditsummaryresponse)\>

**`Name`**

customerCreditSummary
@summary: API to fetch the customer credit summary
@description: Use this API to fetch the customer credit summary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CustomerCreditSummaryParam`](../modules/internal_.md#customercreditsummaryparam) | Arg object. |

#### Returns

`Promise`<[`CustomerCreditSummaryResponse`](../modules/internal_.md#customercreditsummaryresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:157

___

### customerOnboard

▸ **customerOnboard**(`arg?`): `Promise`<[`CustomerOnboardingResponse`](../modules/internal_.md#customeronboardingresponse)\>

**`Name`**

customerOnboard
@summary: API to fetch the customer credit summary
@description: Use this API to fetch the customer credit summary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CustomerOnboardParam`](../modules/internal_.md#customeronboardparam) | Arg object. |

#### Returns

`Promise`<[`CustomerOnboardingResponse`](../modules/internal_.md#customeronboardingresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:166

___

### deleteUserCard

▸ **deleteUserCard**(`arg?`): `Promise`<[`DeleteCardsResponse`](../modules/internal_.md#deletecardsresponse)\>

**`Name`**

deleteUserCard
@summary: Delete a card
@description: Use this API to delete a card added by a user on the payment gateway and clear the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`DeleteUserCardParam`](../modules/internal_.md#deleteusercardparam) | Arg object. |

#### Returns

`Promise`<[`DeleteCardsResponse`](../modules/internal_.md#deletecardsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:174

___

### enableOrDisableRefundTransferMode

▸ **enableOrDisableRefundTransferMode**(`arg?`): `Promise`<[`UpdateRefundTransferModeResponse`](../modules/internal_.md#updaterefundtransfermoderesponse)\>

**`Name`**

enableOrDisableRefundTransferMode
@summary: Enable/Disable a mode for transferring a refund
@description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`EnableOrDisableRefundTransferModeParam`](../modules/internal_.md#enableordisablerefundtransfermodeparam) | Arg object. |

#### Returns

`Promise`<[`UpdateRefundTransferModeResponse`](../modules/internal_.md#updaterefundtransfermoderesponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:186

___

### getActiveCardAggregator

▸ **getActiveCardAggregator**(`arg?`): `Promise`<[`ActiveCardPaymentGatewayResponse`](../modules/internal_.md#activecardpaymentgatewayresponse)\>

**`Name`**

getActiveCardAggregator
@summary: Fetch active payment gateway for card payments
@description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetActiveCardAggregatorParam`](../modules/internal_.md#getactivecardaggregatorparam) | Arg object. |

#### Returns

`Promise`<[`ActiveCardPaymentGatewayResponse`](../modules/internal_.md#activecardpaymentgatewayresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:196

___

### getActiveRefundTransferModes

▸ **getActiveRefundTransferModes**(`arg?`): `Promise`<[`TransferModeResponse`](../modules/internal_.md#transfermoderesponse)\>

**`Name`**

getActiveRefundTransferModes
@summary: Lists the mode of refund
@description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`TransferModeResponse`](../modules/internal_.md#transfermoderesponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:206

___

### getActiveUserCards

▸ **getActiveUserCards**(`arg?`): `Promise`<[`ListCardsResponse`](../modules/internal_.md#listcardsresponse)\>

**`Name`**

getActiveUserCards
@summary: Fetch the list of cards saved by the user
@description: Use this API to retrieve a list of cards stored by user from an active payment gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetActiveUserCardsParam`](../modules/internal_.md#getactiveusercardsparam) | Arg object. |

#### Returns

`Promise`<[`ListCardsResponse`](../modules/internal_.md#listcardsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:214

___

### getAggregatorsConfig

▸ **getAggregatorsConfig**(`arg?`): `Promise`<[`AggregatorsConfigDetailResponse`](../modules/internal_.md#aggregatorsconfigdetailresponse)\>

**`Name`**

getAggregatorsConfig
@summary: Get payment gateway keys
@description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAggregatorsConfigParam`](../modules/internal_.md#getaggregatorsconfigparam) | Arg object. |

#### Returns

`Promise`<[`AggregatorsConfigDetailResponse`](../modules/internal_.md#aggregatorsconfigdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:224

___

### getEpaylaterBannerDetails

▸ **getEpaylaterBannerDetails**(`arg?`): `Promise`<[`EpaylaterBannerResponse`](../modules/internal_.md#epaylaterbannerresponse)\>

**`Name`**

getEpaylaterBannerDetails
@summary: Get Epaylater Enabled
@description: Get Epaylater Enabled if user is tentatively approved by epaylater

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`EpaylaterBannerResponse`](../modules/internal_.md#epaylaterbannerresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:235

___

### getOrderBeneficiariesDetail

▸ **getOrderBeneficiariesDetail**(`arg?`): `Promise`<[`OrderBeneficiaryResponse`](../modules/internal_.md#orderbeneficiaryresponse)\>

**`Name`**

getOrderBeneficiariesDetail
@summary: Lists the beneficiary of a refund
@description: Use this API to get the details of all active beneficiary added by a user for refund.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetOrderBeneficiariesDetailParam`](../modules/internal_.md#getorderbeneficiariesdetailparam) | Arg object. |

#### Returns

`Promise`<[`OrderBeneficiaryResponse`](../modules/internal_.md#orderbeneficiaryresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:246

___

### getPaymentLink

▸ **getPaymentLink**(`arg?`): `Promise`<[`GetPaymentLinkResponse`](../modules/internal_.md#getpaymentlinkresponse)\>

**`Name`**

getPaymentLink
@summary: Get payment link
@description: Use this API to get a payment link

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPaymentLinkParam`](../modules/internal_.md#getpaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`GetPaymentLinkResponse`](../modules/internal_.md#getpaymentlinkresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:255

___

### getPaymentModeRoutes

▸ **getPaymentModeRoutes**(`arg?`): `Promise`<[`PaymentModeRouteResponse`](../modules/internal_.md#paymentmoderouteresponse)\>

**`Name`**

getPaymentModeRoutes
@summary: Get applicable payment options
@description: Use this API to get all valid payment options for doing a payment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPaymentModeRoutesParam`](../modules/internal_.md#getpaymentmoderoutesparam) | Arg object. |

#### Returns

`Promise`<[`PaymentModeRouteResponse`](../modules/internal_.md#paymentmoderouteresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:264

___

### getPaymentModeRoutesPaymentLink

▸ **getPaymentModeRoutesPaymentLink**(`arg?`): `Promise`<[`PaymentModeRouteResponse`](../modules/internal_.md#paymentmoderouteresponse)\>

**`Name`**

getPaymentModeRoutesPaymentLink
@summary: Get applicable payment options for payment link
@description: Use this API to get all valid payment options for doing a payment through payment link

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPaymentModeRoutesPaymentLinkParam`](../modules/internal_.md#getpaymentmoderoutespaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`PaymentModeRouteResponse`](../modules/internal_.md#paymentmoderouteresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:275

___

### getPosPaymentModeRoutes

▸ **getPosPaymentModeRoutes**(`arg?`): `Promise`<[`PaymentModeRouteResponse`](../modules/internal_.md#paymentmoderouteresponse)\>

**`Name`**

getPosPaymentModeRoutes
@summary: Get applicable payment options for Point-of-Sale (POS)
@description: Use this API to get all valid payment options for doing a payment in POS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPosPaymentModeRoutesParam`](../modules/internal_.md#getpospaymentmoderoutesparam) | Arg object. |

#### Returns

`Promise`<[`PaymentModeRouteResponse`](../modules/internal_.md#paymentmoderouteresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:284

___

### getRupifiBannerDetails

▸ **getRupifiBannerDetails**(`arg?`): `Promise`<[`RupifiBannerResponse`](../modules/internal_.md#rupifibannerresponse)\>

**`Name`**

getRupifiBannerDetails
@summary: Get CreditLine Offer
@description: Get CreditLine Offer if user is tentatively approved by rupifi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`RupifiBannerResponse`](../modules/internal_.md#rupifibannerresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:292

___

### getUserBeneficiariesDetail

▸ **getUserBeneficiariesDetail**(`arg?`): `Promise`<[`OrderBeneficiaryResponse`](../modules/internal_.md#orderbeneficiaryresponse)\>

**`Name`**

getUserBeneficiariesDetail
@summary: Lists the beneficiary of a refund
@description: Use this API to get the details of all active beneficiary added by a user for refund.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetUserBeneficiariesDetailParam`](../modules/internal_.md#getuserbeneficiariesdetailparam) | Arg object. |

#### Returns

`Promise`<[`OrderBeneficiaryResponse`](../modules/internal_.md#orderbeneficiaryresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:303

___

### initialisePayment

▸ **initialisePayment**(`arg?`): `Promise`<[`PaymentInitializationResponse`](../modules/internal_.md#paymentinitializationresponse)\>

**`Name`**

initialisePayment
@summary: Initialize a payment (server-to-server) for UPI and BharatQR
@description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`InitialisePaymentParam`](../modules/internal_.md#initialisepaymentparam) | Arg object. |

#### Returns

`Promise`<[`PaymentInitializationResponse`](../modules/internal_.md#paymentinitializationresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:313

___

### initialisePaymentPaymentLink

▸ **initialisePaymentPaymentLink**(`arg?`): `Promise`<[`PaymentInitializationResponse`](../modules/internal_.md#paymentinitializationresponse)\>

**`Name`**

initialisePaymentPaymentLink
@summary: Initialize a payment (server-to-server) for UPI and BharatQR
@description: Use this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`InitialisePaymentPaymentLinkParam`](../modules/internal_.md#initialisepaymentpaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`PaymentInitializationResponse`](../modules/internal_.md#paymentinitializationresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:325

___

### outstandingOrderDetails

▸ **outstandingOrderDetails**(`arg?`): `Promise`<[`OutstandingOrderDetailsResponse`](../modules/internal_.md#outstandingorderdetailsresponse)\>

**`Name`**

outstandingOrderDetails
@summary: API to fetch the outstanding order details
@description: Use this API to fetch the outstanding order details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`OutstandingOrderDetailsParam`](../modules/internal_.md#outstandingorderdetailsparam) | Arg object. |

#### Returns

`Promise`<[`OutstandingOrderDetailsResponse`](../modules/internal_.md#outstandingorderdetailsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:335

___

### paidOrderDetails

▸ **paidOrderDetails**(`arg?`): `Promise`<[`PaidOrderDetailsResponse`](../modules/internal_.md#paidorderdetailsresponse)\>

**`Name`**

paidOrderDetails
@summary: API to fetch the paid order details
@description: Use this API to fetch the paid order details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`PaidOrderDetailsParam`](../modules/internal_.md#paidorderdetailsparam) | Arg object. |

#### Returns

`Promise`<[`PaidOrderDetailsResponse`](../modules/internal_.md#paidorderdetailsresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:344

___

### pollingPaymentLink

▸ **pollingPaymentLink**(`arg?`): `Promise`<[`PollingPaymentLinkResponse`](../modules/internal_.md#pollingpaymentlinkresponse)\>

**`Name`**

pollingPaymentLink
@summary: Used for polling if payment successful or not
@description: Use this API to poll if payment through payment was successful or not

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`PollingPaymentLinkParam`](../modules/internal_.md#pollingpaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`PollingPaymentLinkResponse`](../modules/internal_.md#pollingpaymentlinkresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:353

___

### redirectToAggregator

▸ **redirectToAggregator**(`arg?`): `Promise`<[`RedirectToAggregatorResponse`](../modules/internal_.md#redirecttoaggregatorresponse)\>

**`Name`**

redirectToAggregator
@summary: API to get the redirect url to redirect the user to aggregator's page
@description: Use this API to get the redirect url to redirect the user to aggregator's page

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RedirectToAggregatorParam`](../modules/internal_.md#redirecttoaggregatorparam) | Arg object. |

#### Returns

`Promise`<[`RedirectToAggregatorResponse`](../modules/internal_.md#redirecttoaggregatorresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:363

___

### renderHTML

▸ **renderHTML**(`arg?`): `Promise`<[`renderHTMLResponse`](../modules/internal_.md#renderhtmlresponse)\>

**`Name`**

renderHTML
@summary: Convert base64 string to HTML form
@description: Use this API to decode base64 html form to plain HTML string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RenderHTMLParam`](../modules/internal_.md#renderhtmlparam) | Arg object. |

#### Returns

`Promise`<[`renderHTMLResponse`](../modules/internal_.md#renderhtmlresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:371

___

### resendOrCancelPayment

▸ **resendOrCancelPayment**(`arg?`): `Promise`<[`ResendOrCancelPaymentResponse`](../modules/internal_.md#resendorcancelpaymentresponse)\>

**`Name`**

resendOrCancelPayment
@summary: API to resend and cancel a payment link which was already generated.
@description: Use this API to perform resend or cancel a payment link based on request payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ResendOrCancelPaymentParam`](../modules/internal_.md#resendorcancelpaymentparam) | Arg object. |

#### Returns

`Promise`<[`ResendOrCancelPaymentResponse`](../modules/internal_.md#resendorcancelpaymentresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:381

___

### resendPaymentLink

▸ **resendPaymentLink**(`arg?`): `Promise`<[`ResendPaymentLinkResponse`](../modules/internal_.md#resendpaymentlinkresponse)\>

**`Name`**

resendPaymentLink
@summary: Resend payment link
@description: Use this API to resend a payment link for the customer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ResendPaymentLinkParam`](../modules/internal_.md#resendpaymentlinkparam) | Arg object. |

#### Returns

`Promise`<[`ResendPaymentLinkResponse`](../modules/internal_.md#resendpaymentlinkresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:390

___

### updateDefaultBeneficiary

▸ **updateDefaultBeneficiary**(`arg?`): `Promise`<[`SetDefaultBeneficiaryResponse`](../modules/internal_.md#setdefaultbeneficiaryresponse)\>

**`Name`**

updateDefaultBeneficiary
@summary: Set a default beneficiary for a refund
@description: Use this API to set a default beneficiary for getting a refund.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateDefaultBeneficiaryParam`](../modules/internal_.md#updatedefaultbeneficiaryparam) | Arg object. |

#### Returns

`Promise`<[`SetDefaultBeneficiaryResponse`](../modules/internal_.md#setdefaultbeneficiaryresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:401

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

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:50

___

### validateVPA

▸ **validateVPA**(`arg?`): `Promise`<[`ValidateVPAResponse`](../modules/internal_.md#validatevparesponse)\>

**`Name`**

validateVPA
@summary: API to Validate UPI ID
@description: API to Validate UPI ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ValidateVPAParam`](../modules/internal_.md#validatevpaparam) | Arg object. |

#### Returns

`Promise`<[`ValidateVPAResponse`](../modules/internal_.md#validatevparesponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:409

___

### verifyAndChargePayment

▸ **verifyAndChargePayment**(`arg?`): `Promise`<[`ChargeCustomerResponse`](../modules/internal_.md#chargecustomerresponse)\>

**`Name`**

verifyAndChargePayment
@summary: Verify and charge payment
@description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyAndChargePaymentParam`](../modules/internal_.md#verifyandchargepaymentparam) | Arg object. |

#### Returns

`Promise`<[`ChargeCustomerResponse`](../modules/internal_.md#chargecustomerresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:418

___

### verifyCustomerForPayment

▸ **verifyCustomerForPayment**(`arg?`): `Promise`<[`ValidateCustomerResponse`](../modules/internal_.md#validatecustomerresponse)\>

**`Name`**

verifyCustomerForPayment
@summary: Validate customer for payment
@description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyCustomerForPaymentParam`](../modules/internal_.md#verifycustomerforpaymentparam) | Arg object. |

#### Returns

`Promise`<[`ValidateCustomerResponse`](../modules/internal_.md#validatecustomerresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:428

___

### verifyIfscCode

▸ **verifyIfscCode**(`arg?`): `Promise`<[`IfscCodeResponse`](../modules/internal_.md#ifsccoderesponse)\>

**`Name`**

verifyIfscCode
@summary: Verify IFSC Code
@description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyIfscCodeParam`](../modules/internal_.md#verifyifsccodeparam) | Arg object. |

#### Returns

`Promise`<[`IfscCodeResponse`](../modules/internal_.md#ifsccoderesponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:436

___

### verifyOtpAndAddBeneficiaryForBank

▸ **verifyOtpAndAddBeneficiaryForBank**(`arg?`): `Promise`<[`AddBeneficiaryViaOtpVerificationResponse`](../modules/internal_.md#addbeneficiaryviaotpverificationresponse)\>

**`Name`**

verifyOtpAndAddBeneficiaryForBank
@summary: Verify the beneficiary details using OTP
@description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyOtpAndAddBeneficiaryForBankParam`](../modules/internal_.md#verifyotpandaddbeneficiaryforbankparam) | Arg object. |

#### Returns

`Promise`<[`AddBeneficiaryViaOtpVerificationResponse`](../modules/internal_.md#addbeneficiaryviaotpverificationresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:448

___

### verifyOtpAndAddBeneficiaryForWallet

▸ **verifyOtpAndAddBeneficiaryForWallet**(`arg?`): `Promise`<[`WalletOtpResponse`](../modules/internal_.md#walletotpresponse)\>

**`Name`**

verifyOtpAndAddBeneficiaryForWallet
@summary: Send OTP on adding a wallet beneficiary
@description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`VerifyOtpAndAddBeneficiaryForWalletParam`](../modules/internal_.md#verifyotpandaddbeneficiaryforwalletparam) | Arg object. |

#### Returns

`Promise`<[`WalletOtpResponse`](../modules/internal_.md#walletotpresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Payment/PaymentApplicationClient.d.ts:458

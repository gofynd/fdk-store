[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / paymentModule

# Class: paymentModule

[<internal>](../modules/internal_.md).paymentModule

## Table of contents

### Constructors

- [constructor](internal_.paymentModule.md#constructor)

### Methods

- [checkoutPayment](internal_.paymentModule.md#checkoutpayment)
- [confirmPayment](internal_.paymentModule.md#confirmpayment)
- [confirmPaymentAddress](internal_.paymentModule.md#confirmpaymentaddress)
- [customerCreditSummary](internal_.paymentModule.md#customercreditsummary)
- [customerOnboard](internal_.paymentModule.md#customeronboard)
- [fetchAggregatorsConfig](internal_.paymentModule.md#fetchaggregatorsconfig)
- [fetchPaymentOptions](internal_.paymentModule.md#fetchpaymentoptions)
- [getEpaylaterBannerDetails](internal_.paymentModule.md#getepaylaterbannerdetails)
- [redirectToAggregator](internal_.paymentModule.md#redirecttoaggregator)
- [verifyCustomerForPayment](internal_.paymentModule.md#verifycustomerforpayment)

## Constructors

### constructor

• **new paymentModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/payment.ts:5

## Methods

### checkoutPayment

▸ **checkoutPayment**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:45

___

### confirmPayment

▸ **confirmPayment**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:37

___

### confirmPaymentAddress

▸ **confirmPaymentAddress**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:41

___

### customerCreditSummary

▸ **customerCreditSummary**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:21

___

### customerOnboard

▸ **customerOnboard**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:29

___

### fetchAggregatorsConfig

▸ **fetchAggregatorsConfig**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:13

___

### fetchPaymentOptions

▸ **fetchPaymentOptions**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:9

___

### getEpaylaterBannerDetails

▸ **getEpaylaterBannerDetails**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:33

___

### redirectToAggregator

▸ **redirectToAggregator**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:25

___

### verifyCustomerForPayment

▸ **verifyCustomerForPayment**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/payment.ts:17

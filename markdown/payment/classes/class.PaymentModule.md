[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [payment](../README.md) > PaymentModule

# Class: PaymentModule

## Constructors

### new PaymentModule

> **new PaymentModule**(`dispatch`): [`PaymentModule`](class.PaymentModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`PaymentModule`](class.PaymentModule.md)

#### Defined In

src/store/modules/payment.ts:8

## Methods

### checkoutPayment

> **checkoutPayment**(`payload`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:51

***

### confirmPayment

> **confirmPayment**(`payload`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:43

***

### confirmPaymentAddress

> **confirmPaymentAddress**(`payload`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:47

***

### customerCreditSummary

> **customerCreditSummary**(`payload`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:27

***

### customerOnboard

> **customerOnboard**(`payload`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:35

***

### getAggregatorsConfig

> **getAggregatorsConfig**(): `any`

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:19

***

### getEpaylaterBannerDetails

> **getEpaylaterBannerDetails**(`payload`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:39

***

### getPaymentModeRoutes

> **getPaymentModeRoutes**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:12

***

### redirectToAggregator

> **redirectToAggregator**(`payload`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:31

***

### validateVPA

> **validateVPA**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ValidateVPAResponse`](../internal_/type-aliases/type-alias.ValidateVPAResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ValidateVPAParam`](../internal_/type-aliases/type-alias.ValidateVPAParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ValidateVPAResponse`](../internal_/type-aliases/type-alias.ValidateVPAResponse.md) \>

#### Defined In

src/store/modules/payment.ts:15

***

### verifyCustomerForPayment

> **verifyCustomerForPayment**(`params`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined In

src/store/modules/payment.ts:23

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

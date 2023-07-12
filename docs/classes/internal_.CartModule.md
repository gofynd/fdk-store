[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CartModule

# Class: CartModule

[<internal>](../modules/internal_.md).CartModule

## Table of contents

### Constructors

- [constructor](internal_.CartModule.md#constructor)

### Methods

- [addCartItem](internal_.CartModule.md#addcartitem)
- [applyCoupon](internal_.CartModule.md#applycoupon)
- [checkoutCart](internal_.CartModule.md#checkoutcart)
- [fetchCartShareLink](internal_.CartModule.md#fetchcartsharelink)
- [fetchCoupons](internal_.CartModule.md#fetchcoupons)
- [fetchLadderOffers](internal_.CartModule.md#fetchladderoffers)
- [fetchPromotionOffers](internal_.CartModule.md#fetchpromotionoffers)
- [getCartItems](internal_.CartModule.md#getcartitems)
- [getCartItemsCount](internal_.CartModule.md#getcartitemscount)
- [getShipments](internal_.CartModule.md#getshipments)
- [removeCartItem](internal_.CartModule.md#removecartitem)
- [removeCoupon](internal_.CartModule.md#removecoupon)
- [selectAddress](internal_.CartModule.md#selectaddress)
- [selectPaymentMode](internal_.CartModule.md#selectpaymentmode)
- [updateCartItems](internal_.CartModule.md#updatecartitems)
- [updateCartMeta](internal_.CartModule.md#updatecartmeta)
- [updateCheckoutMode](internal_.CartModule.md#updatecheckoutmode)
- [updateRewardPoints](internal_.CartModule.md#updaterewardpoints)

## Constructors

### constructor

• **new CartModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/cart.ts:5

## Methods

### addCartItem

▸ **addCartItem**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/cart.ts:20

___

### applyCoupon

▸ **applyCoupon**(`params?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/store/modules/cart.ts:57

___

### checkoutCart

▸ **checkoutCart**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/cart.ts:36

___

### fetchCartShareLink

▸ **fetchCartShareLink**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/cart.ts:93

___

### fetchCoupons

▸ **fetchCoupons**(`params?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`void`

#### Defined in

src/store/modules/cart.ts:53

___

### fetchLadderOffers

▸ **fetchLadderOffers**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/cart.ts:85

___

### fetchPromotionOffers

▸ **fetchPromotionOffers**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/cart.ts:89

___

### getCartItems

▸ **getCartItems**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/cart.ts:10

___

### getCartItemsCount

▸ **getCartItemsCount**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/cart.ts:49

___

### getShipments

▸ **getShipments**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/cart.ts:73

___

### removeCartItem

▸ **removeCartItem**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/cart.ts:40

___

### removeCoupon

▸ **removeCoupon**(`params?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/store/modules/cart.ts:61

___

### selectAddress

▸ **selectAddress**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/cart.ts:77

___

### selectPaymentMode

▸ **selectPaymentMode**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/cart.ts:32

___

### updateCartItems

▸ **updateCartItems**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/cart.ts:28

___

### updateCartMeta

▸ **updateCartMeta**(`params?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/store/modules/cart.ts:69

___

### updateCheckoutMode

▸ **updateCheckoutMode**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/cart.ts:44

___

### updateRewardPoints

▸ **updateRewardPoints**(`params?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/store/modules/cart.ts:65

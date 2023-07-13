[fdk-store](../README.md) / [Exports](../modules.md) / [cart](../modules/cart.md) / CartModule

# Class: CartModule

[cart](../modules/cart.md).CartModule

## Table of contents

### Constructors

- [constructor](cart.CartModule.md#constructor)

### Methods

- [addCartItem](cart.CartModule.md#addcartitem)
- [applyCoupon](cart.CartModule.md#applycoupon)
- [checkoutCart](cart.CartModule.md#checkoutcart)
- [fetchCartShareLink](cart.CartModule.md#fetchcartsharelink)
- [fetchCoupons](cart.CartModule.md#fetchcoupons)
- [fetchLadderOffers](cart.CartModule.md#fetchladderoffers)
- [fetchPromotionOffers](cart.CartModule.md#fetchpromotionoffers)
- [getCartItems](cart.CartModule.md#getcartitems)
- [getCartItemsCount](cart.CartModule.md#getcartitemscount)
- [getShipments](cart.CartModule.md#getshipments)
- [removeCartItem](cart.CartModule.md#removecartitem)
- [removeCoupon](cart.CartModule.md#removecoupon)
- [selectAddress](cart.CartModule.md#selectaddress)
- [selectPaymentMode](cart.CartModule.md#selectpaymentmode)
- [updateCartItems](cart.CartModule.md#updatecartitems)
- [updateCartMeta](cart.CartModule.md#updatecartmeta)
- [updateCheckoutMode](cart.CartModule.md#updatecheckoutmode)
- [updateRewardPoints](cart.CartModule.md#updaterewardpoints)

## Constructors

### constructor

• **new CartModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

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

[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [cart](../README.md) > CartModule

# Class: CartModule

## Constructors

### new CartModule

> **new CartModule**(`dispatch`): [`CartModule`](class.CartModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`CartModule`](class.CartModule.md)

#### Defined In

src/store/modules/cart.ts:9

## Methods

### addCartItem

> **addCartItem**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AddCartDetailResponse`](../internal_/type-aliases/type-alias.AddCartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`AddToCartParams`](../internal_/type-aliases/type-alias.AddToCartParams.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AddCartDetailResponse`](../internal_/type-aliases/type-alias.AddCartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:23

***

### applyCoupon

> **applyCoupon**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ApplyCouponParam`](../internal_/type-aliases/type-alias.ApplyCouponParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:66

***

### applyRewardPoints

> **applyRewardPoints**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ApplyRewardPointsParam`](../internal_/type-aliases/type-alias.ApplyRewardPointsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:34

***

### checkoutCart

> **checkoutCart**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartCheckoutResponse`](../internal_/type-aliases/type-alias.CartCheckoutResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`CheckoutCartParam`](../internal_/type-aliases/type-alias.CheckoutCartParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartCheckoutResponse`](../internal_/type-aliases/type-alias.CartCheckoutResponse.md) \>

#### Defined In

src/store/modules/cart.ts:45

***

### getCartItems

> **getCartItems**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCartParam`](../internal_/type-aliases/type-alias.GetCartParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:14

***

### getCartShareLink

> **getCartShareLink**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetShareCartLinkResponse`](../internal_/type-aliases/type-alias.GetShareCartLinkResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCartShareLinkParam`](../internal_/type-aliases/type-alias.GetCartShareLinkParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetShareCartLinkResponse`](../internal_/type-aliases/type-alias.GetShareCartLinkResponse.md) \>

#### Defined In

src/store/modules/cart.ts:104

***

### getCartSharedItems

> **getCartSharedItems**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SharedCartResponse`](../internal_/type-aliases/type-alias.SharedCartResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCartSharedItemsParam`](../internal_/type-aliases/type-alias.GetCartSharedItemsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SharedCartResponse`](../internal_/type-aliases/type-alias.SharedCartResponse.md) \>

#### Defined In

src/store/modules/cart.ts:98

***

### getCoupons

> **getCoupons**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetCouponResponse`](../internal_/type-aliases/type-alias.GetCouponResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCouponsParam`](../internal_/type-aliases/type-alias.GetCouponsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetCouponResponse`](../internal_/type-aliases/type-alias.GetCouponResponse.md) \>

#### Defined In

src/store/modules/cart.ts:62

***

### getItemCount

> **getItemCount**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartItemCountResponse`](../internal_/type-aliases/type-alias.CartItemCountResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetItemCountParam`](../internal_/type-aliases/type-alias.GetItemCountParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartItemCountResponse`](../internal_/type-aliases/type-alias.CartItemCountResponse.md) \>

#### Defined In

src/store/modules/cart.ts:58

***

### getLadderOffers

> **getLadderOffers**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LadderPriceOffers`](../internal_/type-aliases/type-alias.LadderPriceOffers.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetLadderOffersParam`](../internal_/type-aliases/type-alias.GetLadderOffersParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LadderPriceOffers`](../internal_/type-aliases/type-alias.LadderPriceOffers.md) \>

#### Defined In

src/store/modules/cart.ts:90

***

### getPromotionOffers

> **getPromotionOffers**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PromotionOffersResponse`](../internal_/type-aliases/type-alias.PromotionOffersResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPromotionOffersParam`](../internal_/type-aliases/type-alias.GetPromotionOffersParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PromotionOffersResponse`](../internal_/type-aliases/type-alias.PromotionOffersResponse.md) \>

#### Defined In

src/store/modules/cart.ts:94

***

### getShipments

> **getShipments**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartShipmentsResponse`](../internal_/type-aliases/type-alias.CartShipmentsResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetShipmentsParam`](../internal_/type-aliases/type-alias.GetShipmentsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartShipmentsResponse`](../internal_/type-aliases/type-alias.CartShipmentsResponse.md) \>

#### Defined In

src/store/modules/cart.ts:82

***

### removeCartItem

> **removeCartItem**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UpdateCartDetailResponse`](../internal_/type-aliases/type-alias.UpdateCartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateCartItemsParams`](../internal_/type-aliases/type-alias.UpdateCartItemsParams.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UpdateCartDetailResponse`](../internal_/type-aliases/type-alias.UpdateCartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:49

***

### removeCoupon

> **removeCoupon**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`RemoveCouponParam`](../internal_/type-aliases/type-alias.RemoveCouponParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:70

***

### selectAddress

> **selectAddress**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SelectAddressParam`](../internal_/type-aliases/type-alias.SelectAddressParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:86

***

### selectPaymentMode

> **selectPaymentMode**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`SelectPaymentModeParam`](../internal_/type-aliases/type-alias.SelectPaymentModeParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:41

***

### updateCart

> **updateCart**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UpdateCartDetailResponse`](../internal_/type-aliases/type-alias.UpdateCartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateCartParam`](../internal_/type-aliases/type-alias.UpdateCartParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UpdateCartDetailResponse`](../internal_/type-aliases/type-alias.UpdateCartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:37

***

### updateCartItems

> **updateCartItems**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UpdateCartDetailResponse`](../internal_/type-aliases/type-alias.UpdateCartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateCartItemsParams`](../internal_/type-aliases/type-alias.UpdateCartItemsParams.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`UpdateCartDetailResponse`](../internal_/type-aliases/type-alias.UpdateCartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:31

***

### updateCartMeta

> **updateCartMeta**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartMetaResponse`](../internal_/type-aliases/type-alias.CartMetaResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateCartMetaParam`](../internal_/type-aliases/type-alias.UpdateCartMetaParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartMetaResponse`](../internal_/type-aliases/type-alias.CartMetaResponse.md) \>

#### Defined In

src/store/modules/cart.ts:78

***

### updateCartWithSharedItems

> **updateCartWithSharedItems**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SharedCartResponse`](../internal_/type-aliases/type-alias.SharedCartResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateCartWithSharedItemsParam`](../internal_/type-aliases/type-alias.UpdateCartWithSharedItemsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SharedCartResponse`](../internal_/type-aliases/type-alias.SharedCartResponse.md) \>

#### Defined In

src/store/modules/cart.ts:101

***

### updateCheckoutMode

> **updateCheckoutMode**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CheckoutMode`](../internal_/type-aliases/type-alias.CheckoutMode.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`UpdateCheckoutModeParams`](../internal_/type-aliases/type-alias.UpdateCheckoutModeParams.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CheckoutMode`](../internal_/type-aliases/type-alias.CheckoutMode.md) \>

#### Defined In

src/store/modules/cart.ts:53

***

### updateRewardPoints

> **updateRewardPoints**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`ApplyRewardPointsParams`](../internal_/type-aliases/type-alias.ApplyRewardPointsParams.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CartDetailResponse`](../internal_/type-aliases/type-alias.CartDetailResponse.md) \>

#### Defined In

src/store/modules/cart.ts:74

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

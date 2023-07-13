[**fdk-store**](../../README.md) ( [Readme](../../README.md) \| [API](../../API.md) )

---

[fdk-store](../../API.md) > [cart](../README.md) > CartModule

# Class: CartModule

## Constructors

### constructor()

> **new CartModule**(`dispatch`): [`CartModule`](class.CartModule.md)

#### Parameters

| Parameter  | Type                                                                                                     |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`CartModule`](class.CartModule.md)

#### Source

src/store/modules/cart.ts:5

## Methods

### addCartItem()

> **addCartItem**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/cart.ts:20

---

### applyCoupon()

> **applyCoupon**(`params` = `{}`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `void` \>

#### Source

src/store/modules/cart.ts:57

---

### checkoutCart()

> **checkoutCart**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/cart.ts:36

---

### fetchCartShareLink()

> **fetchCartShareLink**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`any`

#### Source

src/store/modules/cart.ts:93

---

### fetchCoupons()

> **fetchCoupons**(`params` = `{}`): `void`

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`void`

#### Source

src/store/modules/cart.ts:53

---

### fetchLadderOffers()

> **fetchLadderOffers**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`any`

#### Source

src/store/modules/cart.ts:85

---

### fetchPromotionOffers()

> **fetchPromotionOffers**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`any`

#### Source

src/store/modules/cart.ts:89

---

### getCartItems()

> **getCartItems**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`any`

#### Source

src/store/modules/cart.ts:10

---

### getCartItemsCount()

> **getCartItemsCount**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/cart.ts:49

---

### getShipments()

> **getShipments**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`any`

#### Source

src/store/modules/cart.ts:73

---

### removeCartItem()

> **removeCartItem**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/cart.ts:40

---

### removeCoupon()

> **removeCoupon**(`params` = `{}`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `void` \>

#### Source

src/store/modules/cart.ts:61

---

### selectAddress()

> **selectAddress**(`params` = `{}`): `any`

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`any`

#### Source

src/store/modules/cart.ts:77

---

### selectPaymentMode()

> **selectPaymentMode**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/cart.ts:32

---

### updateCartItems()

> **updateCartItems**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/cart.ts:28

---

### updateCartMeta()

> **updateCartMeta**(`params` = `{}`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `void` \>

#### Source

src/store/modules/cart.ts:69

---

### updateCheckoutMode()

> **updateCheckoutMode**(`params` = `{}`): `Promise`\< `any` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `any` \>

#### Source

src/store/modules/cart.ts:44

---

### updateRewardPoints()

> **updateRewardPoints**(`params` = `{}`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `params`  | `any` |

#### Returns

`Promise`\< `void` \>

#### Source

src/store/modules/cart.ts:65

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

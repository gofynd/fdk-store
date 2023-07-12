[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Cart

# Class: Cart

[<internal>](../modules/internal_.md).Cart

## Table of contents

### Constructors

- [constructor](internal_.Cart.md#constructor)

### Properties

- [\_conf](internal_.Cart.md#_conf)
- [\_relativeUrls](internal_.Cart.md#_relativeurls)
- [\_urls](internal_.Cart.md#_urls)

### Methods

- [addAddress](internal_.Cart.md#addaddress)
- [addItems](internal_.Cart.md#additems)
- [applyCoupon](internal_.Cart.md#applycoupon)
- [applyRewardPoints](internal_.Cart.md#applyrewardpoints)
- [checkoutCart](internal_.Cart.md#checkoutcart)
- [checkoutCartV2](internal_.Cart.md#checkoutcartv2)
- [deleteCart](internal_.Cart.md#deletecart)
- [getAddressById](internal_.Cart.md#getaddressbyid)
- [getAddresses](internal_.Cart.md#getaddresses)
- [getBulkDiscountOffers](internal_.Cart.md#getbulkdiscountoffers)
- [getCart](internal_.Cart.md#getcart)
- [getCartLastModified](internal_.Cart.md#getcartlastmodified)
- [getCartShareLink](internal_.Cart.md#getcartsharelink)
- [getCartSharedItems](internal_.Cart.md#getcartshareditems)
- [getCoupons](internal_.Cart.md#getcoupons)
- [getItemCount](internal_.Cart.md#getitemcount)
- [getLadderOffers](internal_.Cart.md#getladderoffers)
- [getPromotionOffers](internal_.Cart.md#getpromotionoffers)
- [getShipments](internal_.Cart.md#getshipments)
- [removeAddress](internal_.Cart.md#removeaddress)
- [removeCoupon](internal_.Cart.md#removecoupon)
- [selectAddress](internal_.Cart.md#selectaddress)
- [selectPaymentMode](internal_.Cart.md#selectpaymentmode)
- [updateAddress](internal_.Cart.md#updateaddress)
- [updateCart](internal_.Cart.md#updatecart)
- [updateCartMeta](internal_.Cart.md#updatecartmeta)
- [updateCartWithSharedItems](internal_.Cart.md#updatecartwithshareditems)
- [updateUrls](internal_.Cart.md#updateurls)
- [validateCouponForPayment](internal_.Cart.md#validatecouponforpayment)

## Constructors

### constructor

• **new Cart**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addAddress` | `string` |
| `addItems` | `string` |
| `applyCoupon` | `string` |
| `applyRewardPoints` | `string` |
| `checkoutCart` | `string` |
| `checkoutCartV2` | `string` |
| `deleteCart` | `string` |
| `getAddressById` | `string` |
| `getAddresses` | `string` |
| `getBulkDiscountOffers` | `string` |
| `getCart` | `string` |
| `getCartLastModified` | `string` |
| `getCartShareLink` | `string` |
| `getCartSharedItems` | `string` |
| `getCoupons` | `string` |
| `getItemCount` | `string` |
| `getLadderOffers` | `string` |
| `getPromotionOffers` | `string` |
| `getShipments` | `string` |
| `removeAddress` | `string` |
| `removeCoupon` | `string` |
| `selectAddress` | `string` |
| `selectPaymentMode` | `string` |
| `updateAddress` | `string` |
| `updateCart` | `string` |
| `updateCartMeta` | `string` |
| `updateCartWithSharedItems` | `string` |
| `validateCouponForPayment` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:35

## Methods

### addAddress

▸ **addAddress**(`arg?`): `Promise`<[`SaveAddressResponse`](../modules/internal_.md#saveaddressresponse)\>

**`Name`**

addAddress
@summary: Add address to an account
@description: Use this API to add an address to an account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddAddressParam`](../modules/internal_.md#addaddressparam) | Arg object. |

#### Returns

`Promise`<[`SaveAddressResponse`](../modules/internal_.md#saveaddressresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:44

___

### addItems

▸ **addItems**(`arg?`): `Promise`<[`AddCartDetailResponse`](../modules/internal_.md#addcartdetailresponse)\>

**`Name`**

addItems
@summary: Add items to cart
@description: Use this API to add items to the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddItemsParam`](../modules/internal_.md#additemsparam) | Arg object. |

#### Returns

`Promise`<[`AddCartDetailResponse`](../modules/internal_.md#addcartdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:52

___

### applyCoupon

▸ **applyCoupon**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

**`Name`**

applyCoupon
@summary: Apply Coupon
@description: Use this API to apply coupons on items in the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ApplyCouponParam`](../modules/internal_.md#applycouponparam) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:60

___

### applyRewardPoints

▸ **applyRewardPoints**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

**`Name`**

applyRewardPoints
@summary: Apply reward points at cart
@description: Use this API to redeem a fixed no. of reward points by applying it to the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ApplyRewardPointsParam`](../modules/internal_.md#applyrewardpointsparam) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:68

___

### checkoutCart

▸ **checkoutCart**(`arg?`): `Promise`<[`CartCheckoutResponse`](../modules/internal_.md#cartcheckoutresponse)\>

**`Name`**

checkoutCart
@summary: Checkout all items in the cart
@description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CheckoutCartParam`](../modules/internal_.md#checkoutcartparam) | Arg object. |

#### Returns

`Promise`<[`CartCheckoutResponse`](../modules/internal_.md#cartcheckoutresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:76

___

### checkoutCartV2

▸ **checkoutCartV2**(`arg?`): `Promise`<[`CartCheckoutResponse`](../modules/internal_.md#cartcheckoutresponse)\>

**`Name`**

checkoutCartV2
@summary: Checkout all items in the cart
@description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CheckoutCartV2Param`](../modules/internal_.md#checkoutcartv2param) | Arg object. |

#### Returns

`Promise`<[`CartCheckoutResponse`](../modules/internal_.md#cartcheckoutresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:84

___

### deleteCart

▸ **deleteCart**(`arg?`): `Promise`<[`DeleteCartDetailResponse`](../modules/internal_.md#deletecartdetailresponse)\>

**`Name`**

deleteCart
@summary: Delete cart once user made successful checkout
@description: Use this API to delete the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`DeleteCartParam`](../modules/internal_.md#deletecartparam) | Arg object. |

#### Returns

`Promise`<[`DeleteCartDetailResponse`](../modules/internal_.md#deletecartdetailresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:93

___

### getAddressById

▸ **getAddressById**(`arg?`): `Promise`<[`Address`](../modules/internal_.md#address)\>

**`Name`**

getAddressById
@summary: Fetch a single address by its ID
@description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAddressByIdParam`](../modules/internal_.md#getaddressbyidparam) | Arg object. |

#### Returns

`Promise`<[`Address`](../modules/internal_.md#address)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:101

___

### getAddresses

▸ **getAddresses**(`arg?`): `Promise`<[`GetAddressesResponse`](../modules/internal_.md#getaddressesresponse)\>

**`Name`**

getAddresses
@summary: Fetch address
@description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAddressesParam`](../modules/internal_.md#getaddressesparam) | Arg object. |

#### Returns

`Promise`<[`GetAddressesResponse`](../modules/internal_.md#getaddressesresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:109

___

### getBulkDiscountOffers

▸ **getBulkDiscountOffers**(`arg?`): `Promise`<[`BulkPriceResponse`](../modules/internal_.md#bulkpriceresponse)\>

**`Name`**

getBulkDiscountOffers
@summary: Get discount offers based on quantity
@description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetBulkDiscountOffersParam`](../modules/internal_.md#getbulkdiscountoffersparam) | Arg object. |

#### Returns

`Promise`<[`BulkPriceResponse`](../modules/internal_.md#bulkpriceresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:117

___

### getCart

▸ **getCart**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

**`Name`**

getCart
@summary: Fetch all items added to the cart
@description: Use this API to get details of all the items added to a cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCartParam`](../modules/internal_.md#getcartparam) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:125

___

### getCartLastModified

▸ **getCartLastModified**(`arg?`): `Promise`<`any`\>

**`Name`**

getCartLastModified
@summary: Fetch last-modified timestamp
@description: Use this API to fetch Last-Modified timestamp in header metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCartLastModifiedParam`](../modules/internal_.md#getcartlastmodifiedparam) | Arg object. |

#### Returns

`Promise`<`any`\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:133

___

### getCartShareLink

▸ **getCartShareLink**(`arg?`): `Promise`<[`GetShareCartLinkResponse`](../modules/internal_.md#getsharecartlinkresponse)\>

**`Name`**

getCartShareLink
@summary: Generate token for sharing the cart
@description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCartShareLinkParam`](../modules/internal_.md#getcartsharelinkparam) | Arg object. |

#### Returns

`Promise`<[`GetShareCartLinkResponse`](../modules/internal_.md#getsharecartlinkresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:142

___

### getCartSharedItems

▸ **getCartSharedItems**(`arg?`): `Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse)\>

**`Name`**

getCartSharedItems
@summary: Get details of a shared cart
@description: Use this API to get the shared cart details as per the token generated using the share-cart API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCartSharedItemsParam`](../modules/internal_.md#getcartshareditemsparam) | Arg object. |

#### Returns

`Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:150

___

### getCoupons

▸ **getCoupons**(`arg?`): `Promise`<[`GetCouponResponse`](../modules/internal_.md#getcouponresponse)\>

**`Name`**

getCoupons
@summary: Fetch Coupon
@description: Use this API to get a list of available coupons along with their details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCouponsParam`](../modules/internal_.md#getcouponsparam) | Arg object. |

#### Returns

`Promise`<[`GetCouponResponse`](../modules/internal_.md#getcouponresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:158

___

### getItemCount

▸ **getItemCount**(`arg?`): `Promise`<[`CartItemCountResponse`](../modules/internal_.md#cartitemcountresponse)\>

**`Name`**

getItemCount
@summary: Count items in the cart
@description: Use this API to get the total number of items present in cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetItemCountParam`](../modules/internal_.md#getitemcountparam) | Arg object. |

#### Returns

`Promise`<[`CartItemCountResponse`](../modules/internal_.md#cartitemcountresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:166

___

### getLadderOffers

▸ **getLadderOffers**(`arg?`): `Promise`<[`LadderPriceOffers`](../modules/internal_.md#ladderpriceoffers)\>

**`Name`**

getLadderOffers
@summary: Fetch ladder price promotion
@description: Use this API to get applicable ladder price promotion for current product

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetLadderOffersParam`](../modules/internal_.md#getladderoffersparam) | Arg object. |

#### Returns

`Promise`<[`LadderPriceOffers`](../modules/internal_.md#ladderpriceoffers)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:174

___

### getPromotionOffers

▸ **getPromotionOffers**(`arg?`): `Promise`<[`PromotionOffersResponse`](../modules/internal_.md#promotionoffersresponse)\>

**`Name`**

getPromotionOffers
@summary: Fetch available promotions
@description: Use this API to get top 5 offers available for current product

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPromotionOffersParam`](../modules/internal_.md#getpromotionoffersparam) | Arg object. |

#### Returns

`Promise`<[`PromotionOffersResponse`](../modules/internal_.md#promotionoffersresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:182

___

### getShipments

▸ **getShipments**(`arg?`): `Promise`<[`CartShipmentsResponse`](../modules/internal_.md#cartshipmentsresponse)\>

**`Name`**

getShipments
@summary: Get delivery date and options before checkout
@description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetShipmentsParam`](../modules/internal_.md#getshipmentsparam) | Arg object. |

#### Returns

`Promise`<[`CartShipmentsResponse`](../modules/internal_.md#cartshipmentsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:190

___

### removeAddress

▸ **removeAddress**(`arg?`): `Promise`<[`DeleteAddressResponse`](../modules/internal_.md#deleteaddressresponse)\>

**`Name`**

removeAddress
@summary: Remove address associated with an account
@description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RemoveAddressParam`](../modules/internal_.md#removeaddressparam) | Arg object. |

#### Returns

`Promise`<[`DeleteAddressResponse`](../modules/internal_.md#deleteaddressresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:198

___

### removeCoupon

▸ **removeCoupon**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

**`Name`**

removeCoupon
@summary: Remove Coupon Applied
@description: Remove Coupon applied on the cart by passing uid in request body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RemoveCouponParam`](../modules/internal_.md#removecouponparam) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:206

___

### selectAddress

▸ **selectAddress**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

**`Name`**

selectAddress
@summary: Select an address from available addresses
@description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SelectAddressParam`](../modules/internal_.md#selectaddressparam) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:214

___

### selectPaymentMode

▸ **selectPaymentMode**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

**`Name`**

selectPaymentMode
@summary: Update cart payment
@description: Use this API to update cart payment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SelectPaymentModeParam`](../modules/internal_.md#selectpaymentmodeparam) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:222

___

### updateAddress

▸ **updateAddress**(`arg?`): `Promise`<[`UpdateAddressResponse`](../modules/internal_.md#updateaddressresponse)\>

**`Name`**

updateAddress
@summary: Update address added to an account
@description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateAddressParam`](../modules/internal_.md#updateaddressparam) | Arg object. |

#### Returns

`Promise`<[`UpdateAddressResponse`](../modules/internal_.md#updateaddressresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:230

___

### updateCart

▸ **updateCart**(`arg?`): `Promise`<[`UpdateCartDetailResponse`](../modules/internal_.md#updatecartdetailresponse)\>

**`Name`**

updateCart
@summary: Update items in the cart
@description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateCartParam`](../modules/internal_.md#updatecartparam) | Arg object. |

#### Returns

`Promise`<[`UpdateCartDetailResponse`](../modules/internal_.md#updatecartdetailresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:239

___

### updateCartMeta

▸ **updateCartMeta**(`arg?`): `Promise`<[`CartMetaResponse`](../modules/internal_.md#cartmetaresponse)\>

**`Name`**

updateCartMeta
@summary: Update the cart meta
@description: Use this API to update cart meta like checkout_mode and gstin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateCartMetaParam`](../modules/internal_.md#updatecartmetaparam) | Arg object. |

#### Returns

`Promise`<[`CartMetaResponse`](../modules/internal_.md#cartmetaresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:247

___

### updateCartWithSharedItems

▸ **updateCartWithSharedItems**(`arg?`): `Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse)\>

**`Name`**

updateCartWithSharedItems
@summary: Merge or replace existing cart
@description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateCartWithSharedItemsParam`](../modules/internal_.md#updatecartwithshareditemsparam) | Arg object. |

#### Returns

`Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:255

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

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:36

___

### validateCouponForPayment

▸ **validateCouponForPayment**(`arg?`): `Promise`<[`PaymentCouponValidate`](../modules/internal_.md#paymentcouponvalidate)\>

**`Name`**

validateCouponForPayment
@summary: Verify the coupon eligibility against the payment mode
@description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ValidateCouponForPaymentParam`](../modules/internal_.md#validatecouponforpaymentparam) | Arg object. |

#### Returns

`Promise`<[`PaymentCouponValidate`](../modules/internal_.md#paymentcouponvalidate)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationClient.d.ts:263

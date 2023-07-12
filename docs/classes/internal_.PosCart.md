[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PosCart

# Class: PosCart

[<internal>](../modules/internal_.md).PosCart

## Table of contents

### Constructors

- [constructor](internal_.PosCart.md#constructor)

### Properties

- [\_conf](internal_.PosCart.md#_conf)
- [\_relativeUrls](internal_.PosCart.md#_relativeurls)
- [\_urls](internal_.PosCart.md#_urls)

### Methods

- [addAddress](internal_.PosCart.md#addaddress)
- [addItems](internal_.PosCart.md#additems)
- [applyCoupon](internal_.PosCart.md#applycoupon)
- [applyRewardPoints](internal_.PosCart.md#applyrewardpoints)
- [checkoutCart](internal_.PosCart.md#checkoutcart)
- [getAddressById](internal_.PosCart.md#getaddressbyid)
- [getAddresses](internal_.PosCart.md#getaddresses)
- [getAvailableDeliveryModes](internal_.PosCart.md#getavailabledeliverymodes)
- [getBulkDiscountOffers](internal_.PosCart.md#getbulkdiscountoffers)
- [getCart](internal_.PosCart.md#getcart)
- [getCartLastModified](internal_.PosCart.md#getcartlastmodified)
- [getCartShareLink](internal_.PosCart.md#getcartsharelink)
- [getCartSharedItems](internal_.PosCart.md#getcartshareditems)
- [getCoupons](internal_.PosCart.md#getcoupons)
- [getItemCount](internal_.PosCart.md#getitemcount)
- [getShipments](internal_.PosCart.md#getshipments)
- [getStoreAddressByUid](internal_.PosCart.md#getstoreaddressbyuid)
- [removeAddress](internal_.PosCart.md#removeaddress)
- [removeCoupon](internal_.PosCart.md#removecoupon)
- [selectAddress](internal_.PosCart.md#selectaddress)
- [selectPaymentMode](internal_.PosCart.md#selectpaymentmode)
- [updateAddress](internal_.PosCart.md#updateaddress)
- [updateCart](internal_.PosCart.md#updatecart)
- [updateCartMeta](internal_.PosCart.md#updatecartmeta)
- [updateCartWithSharedItems](internal_.PosCart.md#updatecartwithshareditems)
- [updateShipments](internal_.PosCart.md#updateshipments)
- [updateUrls](internal_.PosCart.md#updateurls)
- [validateCouponForPayment](internal_.PosCart.md#validatecouponforpayment)

## Constructors

### constructor

• **new PosCart**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:4

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
| `getAddressById` | `string` |
| `getAddresses` | `string` |
| `getAvailableDeliveryModes` | `string` |
| `getBulkDiscountOffers` | `string` |
| `getCart` | `string` |
| `getCartLastModified` | `string` |
| `getCartShareLink` | `string` |
| `getCartSharedItems` | `string` |
| `getCoupons` | `string` |
| `getItemCount` | `string` |
| `getShipments` | `string` |
| `getStoreAddressByUid` | `string` |
| `removeAddress` | `string` |
| `removeCoupon` | `string` |
| `selectAddress` | `string` |
| `selectPaymentMode` | `string` |
| `updateAddress` | `string` |
| `updateCart` | `string` |
| `updateCartMeta` | `string` |
| `updateCartWithSharedItems` | `string` |
| `updateShipments` | `string` |
| `validateCouponForPayment` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:34

## Methods

### addAddress

▸ **addAddress**(`arg?`): `Promise`<[`SaveAddressResponse`](../modules/internal_.md#saveaddressresponse-1)\>

**`Name`**

addAddress
@summary: Add address to an account
@description: Use this API to add an address to an account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddAddressParam`](../modules/internal_.md#addaddressparam-1) | Arg object. |

#### Returns

`Promise`<[`SaveAddressResponse`](../modules/internal_.md#saveaddressresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:43

___

### addItems

▸ **addItems**(`arg?`): `Promise`<[`AddCartDetailResponse`](../modules/internal_.md#addcartdetailresponse-1)\>

**`Name`**

addItems
@summary: Add items to cart
@description: Use this API to add items to the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`AddItemsParam`](../modules/internal_.md#additemsparam-1) | Arg object. |

#### Returns

`Promise`<[`AddCartDetailResponse`](../modules/internal_.md#addcartdetailresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:52

___

### applyCoupon

▸ **applyCoupon**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

**`Name`**

applyCoupon
@summary: Apply Coupon
@description: Use this API to apply coupons on items in the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ApplyCouponParam`](../modules/internal_.md#applycouponparam-1) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:60

___

### applyRewardPoints

▸ **applyRewardPoints**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

**`Name`**

applyRewardPoints
@summary: Apply reward points at cart
@description: Use this API to redeem a fixed no. of reward points by applying it to the cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ApplyRewardPointsParam`](../modules/internal_.md#applyrewardpointsparam-1) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:68

___

### checkoutCart

▸ **checkoutCart**(`arg?`): `Promise`<[`CartCheckoutResponse`](../modules/internal_.md#cartcheckoutresponse-1)\>

**`Name`**

checkoutCart
@summary: Checkout all items in the cart
@description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`CheckoutCartParam`](../modules/internal_.md#checkoutcartparam-1) | Arg object. |

#### Returns

`Promise`<[`CartCheckoutResponse`](../modules/internal_.md#cartcheckoutresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:76

___

### getAddressById

▸ **getAddressById**(`arg?`): `Promise`<[`Address`](../modules/internal_.md#address-1)\>

**`Name`**

getAddressById
@summary: Fetch a single address by its ID
@description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAddressByIdParam`](../modules/internal_.md#getaddressbyidparam-1) | Arg object. |

#### Returns

`Promise`<[`Address`](../modules/internal_.md#address-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:84

___

### getAddresses

▸ **getAddresses**(`arg?`): `Promise`<[`GetAddressesResponse`](../modules/internal_.md#getaddressesresponse-1)\>

**`Name`**

getAddresses
@summary: Fetch address
@description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAddressesParam`](../modules/internal_.md#getaddressesparam-1) | Arg object. |

#### Returns

`Promise`<[`GetAddressesResponse`](../modules/internal_.md#getaddressesresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:92

___

### getAvailableDeliveryModes

▸ **getAvailableDeliveryModes**(`arg?`): `Promise`<[`CartDeliveryModesResponse`](../modules/internal_.md#cartdeliverymodesresponse)\>

**`Name`**

getAvailableDeliveryModes
@summary: Get available delivery modes for cart
@description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetAvailableDeliveryModesParam`](../modules/internal_.md#getavailabledeliverymodesparam) | Arg object. |

#### Returns

`Promise`<[`CartDeliveryModesResponse`](../modules/internal_.md#cartdeliverymodesresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:103

___

### getBulkDiscountOffers

▸ **getBulkDiscountOffers**(`arg?`): `Promise`<[`BulkPriceResponse`](../modules/internal_.md#bulkpriceresponse-1)\>

**`Name`**

getBulkDiscountOffers
@summary: Get discount offers based on quantity
@description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetBulkDiscountOffersParam`](../modules/internal_.md#getbulkdiscountoffersparam-1) | Arg object. |

#### Returns

`Promise`<[`BulkPriceResponse`](../modules/internal_.md#bulkpriceresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:111

___

### getCart

▸ **getCart**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

**`Name`**

getCart
@summary: Fetch all items added to the cart
@description: Use this API to get details of all the items added to a cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCartParam`](../modules/internal_.md#getcartparam-1) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:119

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
| `arg?` | [`GetCartLastModifiedParam`](../modules/internal_.md#getcartlastmodifiedparam-1) | Arg object. |

#### Returns

`Promise`<`any`\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:127

___

### getCartShareLink

▸ **getCartShareLink**(`arg?`): `Promise`<[`GetShareCartLinkResponse`](../modules/internal_.md#getsharecartlinkresponse-1)\>

**`Name`**

getCartShareLink
@summary: Generate token for sharing the cart
@description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCartShareLinkParam`](../modules/internal_.md#getcartsharelinkparam-1) | Arg object. |

#### Returns

`Promise`<[`GetShareCartLinkResponse`](../modules/internal_.md#getsharecartlinkresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:136

___

### getCartSharedItems

▸ **getCartSharedItems**(`arg?`): `Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse-1)\>

**`Name`**

getCartSharedItems
@summary: Get details of a shared cart
@description: Use this API to get the shared cart details as per the token generated using the share-cart API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCartSharedItemsParam`](../modules/internal_.md#getcartshareditemsparam-1) | Arg object. |

#### Returns

`Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:144

___

### getCoupons

▸ **getCoupons**(`arg?`): `Promise`<[`GetCouponResponse`](../modules/internal_.md#getcouponresponse-1)\>

**`Name`**

getCoupons
@summary: Fetch Coupon
@description: Use this API to get a list of available coupons along with their details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetCouponsParam`](../modules/internal_.md#getcouponsparam-1) | Arg object. |

#### Returns

`Promise`<[`GetCouponResponse`](../modules/internal_.md#getcouponresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:152

___

### getItemCount

▸ **getItemCount**(`arg?`): `Promise`<[`CartItemCountResponse`](../modules/internal_.md#cartitemcountresponse-1)\>

**`Name`**

getItemCount
@summary: Count items in the cart
@description: Use this API to get the total number of items present in cart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetItemCountParam`](../modules/internal_.md#getitemcountparam-1) | Arg object. |

#### Returns

`Promise`<[`CartItemCountResponse`](../modules/internal_.md#cartitemcountresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:161

___

### getShipments

▸ **getShipments**(`arg?`): `Promise`<[`CartShipmentsResponse`](../modules/internal_.md#cartshipmentsresponse-1)\>

**`Name`**

getShipments
@summary: Get delivery date and options before checkout
@description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetShipmentsParam`](../modules/internal_.md#getshipmentsparam-1) | Arg object. |

#### Returns

`Promise`<[`CartShipmentsResponse`](../modules/internal_.md#cartshipmentsresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:170

___

### getStoreAddressByUid

▸ **getStoreAddressByUid**(`arg?`): `Promise`<[`StoreDetailsResponse`](../modules/internal_.md#storedetailsresponse)\>

**`Name`**

getStoreAddressByUid
@summary: Get list of stores for give uids
@description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetStoreAddressByUidParam`](../modules/internal_.md#getstoreaddressbyuidparam) | Arg object. |

#### Returns

`Promise`<[`StoreDetailsResponse`](../modules/internal_.md#storedetailsresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:178

___

### removeAddress

▸ **removeAddress**(`arg?`): `Promise`<[`DeleteAddressResponse`](../modules/internal_.md#deleteaddressresponse-1)\>

**`Name`**

removeAddress
@summary: Remove address associated with an account
@description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RemoveAddressParam`](../modules/internal_.md#removeaddressparam-1) | Arg object. |

#### Returns

`Promise`<[`DeleteAddressResponse`](../modules/internal_.md#deleteaddressresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:187

___

### removeCoupon

▸ **removeCoupon**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

**`Name`**

removeCoupon
@summary: Remove Coupon Applied
@description: Remove Coupon applied on the cart by passing uid in request body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`RemoveCouponParam`](../modules/internal_.md#removecouponparam-1) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:195

___

### selectAddress

▸ **selectAddress**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

**`Name`**

selectAddress
@summary: Select an address from available addresses
@description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SelectAddressParam`](../modules/internal_.md#selectaddressparam-1) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:203

___

### selectPaymentMode

▸ **selectPaymentMode**(`arg?`): `Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

**`Name`**

selectPaymentMode
@summary: Update cart payment
@description: Use this API to update cart payment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`SelectPaymentModeParam`](../modules/internal_.md#selectpaymentmodeparam-1) | Arg object. |

#### Returns

`Promise`<[`CartDetailResponse`](../modules/internal_.md#cartdetailresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:211

___

### updateAddress

▸ **updateAddress**(`arg?`): `Promise`<[`UpdateAddressResponse`](../modules/internal_.md#updateaddressresponse-1)\>

**`Name`**

updateAddress
@summary: Update address added to an account
@description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateAddressParam`](../modules/internal_.md#updateaddressparam-1) | Arg object. |

#### Returns

`Promise`<[`UpdateAddressResponse`](../modules/internal_.md#updateaddressresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:220

___

### updateCart

▸ **updateCart**(`arg?`): `Promise`<[`UpdateCartDetailResponse`](../modules/internal_.md#updatecartdetailresponse-1)\>

**`Name`**

updateCart
@summary: Update items in the cart
@description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateCartParam`](../modules/internal_.md#updatecartparam-1) | Arg object. |

#### Returns

`Promise`<[`UpdateCartDetailResponse`](../modules/internal_.md#updatecartdetailresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:229

___

### updateCartMeta

▸ **updateCartMeta**(`arg?`): `Promise`<[`CartMetaResponse`](../modules/internal_.md#cartmetaresponse-1)\>

**`Name`**

updateCartMeta
@summary: Update the cart meta
@description: Use this API to update cart meta like checkout_mode and gstin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateCartMetaParam`](../modules/internal_.md#updatecartmetaparam-1) | Arg object. |

#### Returns

`Promise`<[`CartMetaResponse`](../modules/internal_.md#cartmetaresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:237

___

### updateCartWithSharedItems

▸ **updateCartWithSharedItems**(`arg?`): `Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse-1)\>

**`Name`**

updateCartWithSharedItems
@summary: Merge or replace existing cart
@description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateCartWithSharedItemsParam`](../modules/internal_.md#updatecartwithshareditemsparam-1) | Arg object. |

#### Returns

`Promise`<[`SharedCartResponse`](../modules/internal_.md#sharedcartresponse-1)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:247

___

### updateShipments

▸ **updateShipments**(`arg?`): `Promise`<[`CartShipmentsResponse`](../modules/internal_.md#cartshipmentsresponse-1)\>

**`Name`**

updateShipments
@summary: Update shipment delivery type and quantity before checkout
@description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`UpdateShipmentsParam`](../modules/internal_.md#updateshipmentsparam) | Arg object. |

#### Returns

`Promise`<[`CartShipmentsResponse`](../modules/internal_.md#cartshipmentsresponse-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:256

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

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:35

___

### validateCouponForPayment

▸ **validateCouponForPayment**(`arg?`): `Promise`<[`PaymentCouponValidate`](../modules/internal_.md#paymentcouponvalidate-1)\>

**`Name`**

validateCouponForPayment
@summary: Verify the coupon eligibility against the payment mode
@description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`ValidateCouponForPaymentParam`](../modules/internal_.md#validatecouponforpaymentparam-1) | Arg object. |

#### Returns

`Promise`<[`PaymentCouponValidate`](../modules/internal_.md#paymentcouponvalidate-1)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/PosCart/PosCartApplicationClient.d.ts:266

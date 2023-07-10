[fdk-store](../README.md) / [Exports](../modules.md) / [address](address.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [Address](address._internal_.md#address)
- [GeoLocation](address._internal_.md#geolocation)
- [GetAddressesParam](address._internal_.md#getaddressesparam)
- [GetAddressesResponse](address._internal_.md#getaddressesresponse)

### Functions

- [Address](address._internal_.md#address-1)
- [GeoLocation](address._internal_.md#geolocation-1)
- [GetAddressesResponse](address._internal_.md#getaddressesresponse-1)

## Type Aliases

### Address

Ƭ **Address**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `address?` | `string` |
| `address_type?` | `string` |
| `area?` | `string` |
| `area_code?` | `string` |
| `area_code_slug?` | `string` |
| `checkout_mode?` | `string` |
| `city?` | `string` |
| `country?` | `string` |
| `country_code?` | `string` |
| `country_iso_code?` | `string` |
| `country_phone_code?` | `string` |
| `created_by_user_id?` | `string` |
| `email?` | `string` |
| `geo_location?` | [`GeoLocation`](address._internal_.md#geolocation) |
| `google_map_point?` | `any` |
| `id?` | `string` |
| `is_active?` | `boolean` |
| `is_default_address?` | `boolean` |
| `landmark?` | `string` |
| `meta?` | `any` |
| `name?` | `string` |
| `phone?` | `string` |
| `state?` | `string` |
| `tags?` | `string`[] |
| `user_id?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:960

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:961

___

### GeoLocation

Ƭ **GeoLocation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `latitude?` | `number` |
| `longitude?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1682

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1683

___

### GetAddressesParam

Ƭ **GetAddressesParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buyNow?` | `boolean` |
| `cartId?` | `string` |
| `checkoutMode?` | `string` |
| `isDefault?` | `boolean` |
| `mobileNo?` | `string` |
| `tags?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:347

___

### GetAddressesResponse

Ƭ **GetAddressesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | [`Address`](address._internal_.md#address)[] |
| `pii_masking?` | `boolean` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1688

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1689

## Functions

### Address

▸ **Address**(): [`Address`](address._internal_.md#address)

#### Returns

[`Address`](address._internal_.md#address)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:960

___

### GeoLocation

▸ **GeoLocation**(): [`GeoLocation`](address._internal_.md#geolocation)

#### Returns

[`GeoLocation`](address._internal_.md#geolocation)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1682

___

### GetAddressesResponse

▸ **GetAddressesResponse**(): [`GetAddressesResponse`](address._internal_.md#getaddressesresponse)

#### Returns

[`GetAddressesResponse`](address._internal_.md#getaddressesresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1688

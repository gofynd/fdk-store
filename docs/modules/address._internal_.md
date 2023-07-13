[fdk-store](../README.md) / [Exports](../modules.md) / [address](address.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [AddAddressParam](address._internal_.md#addaddressparam)
- [Address](address._internal_.md#address)
- [DeleteAddressResponse](address._internal_.md#deleteaddressresponse)
- [GeoLocation](address._internal_.md#geolocation)
- [GetAddressByIdParam](address._internal_.md#getaddressbyidparam)
- [GetAddressesParam](address._internal_.md#getaddressesparam)
- [GetAddressesResponse](address._internal_.md#getaddressesresponse)
- [Partial](address._internal_.md#partial)
- [RemoveAddressParam](address._internal_.md#removeaddressparam)
- [UpdateAddressParam](address._internal_.md#updateaddressparam)

### Functions

- [Address](address._internal_.md#address-1)
- [DeleteAddressResponse](address._internal_.md#deleteaddressresponse-1)
- [GeoLocation](address._internal_.md#geolocation-1)
- [GetAddressesResponse](address._internal_.md#getaddressesresponse-1)

## Type Aliases

### AddAddressParam

Ƭ **AddAddressParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`Address`](address._internal_.md#address) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:272

___

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

### DeleteAddressResponse

Ƭ **DeleteAddressResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `string` |
| `is_deleted?` | `boolean` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1560

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1561

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

### GetAddressByIdParam

Ƭ **GetAddressByIdParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buyNow?` | `boolean` |
| `cartId?` | `string` |
| `checkoutMode?` | `string` |
| `id` | `string` |
| `isDefault?` | `boolean` |
| `mobileNo?` | `string` |
| `tags?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:338

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

___

### Partial

Ƭ **Partial**<`T`\>: { [P in keyof T]?: T[P] }

Make all properties in T optional

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1562

___

### RemoveAddressParam

Ƭ **RemoveAddressParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - ID allotted to the selected address |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:500

___

### UpdateAddressParam

Ƭ **UpdateAddressParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`Address`](address._internal_.md#address) | - |
| `id` | `string` | - ID allotted to the selected address |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:522

## Functions

### Address

▸ **Address**(): [`Address`](address._internal_.md#address)

#### Returns

[`Address`](address._internal_.md#address)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:960

___

### DeleteAddressResponse

▸ **DeleteAddressResponse**(): [`DeleteAddressResponse`](address._internal_.md#deleteaddressresponse)

#### Returns

[`DeleteAddressResponse`](address._internal_.md#deleteaddressresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1560

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

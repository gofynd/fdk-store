[fdk-store](../README.md) / [Exports](../modules.md) / [address](../modules/address.md) / default

# Class: default

[address](../modules/address.md).default

## Table of contents

### Constructors

- [constructor](address.default.md#constructor)

### Methods

- [deleteAddress](address.default.md#deleteaddress)
- [getAddress](address.default.md#getaddress)
- [getAddressById](address.default.md#getaddressbyid)
- [updateAddress](address.default.md#updateaddress)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/address.ts:9

## Methods

### deleteAddress

▸ **deleteAddress**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`DeleteAddressResponse`](../modules/address._internal_.md#deleteaddressresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RemoveAddressParam`](../modules/address._internal_.md#removeaddressparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`DeleteAddressResponse`](../modules/address._internal_.md#deleteaddressresponse)\>

#### Defined in

src/store/modules/address.ts:26

___

### getAddress

▸ **getAddress**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`GetAddressesResponse`](../modules/address._internal_.md#getaddressesresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAddressesParam`](../modules/address._internal_.md#getaddressesparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`GetAddressesResponse`](../modules/address._internal_.md#getaddressesresponse)\>

#### Defined in

src/store/modules/address.ts:14

___

### getAddressById

▸ **getAddressById**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Address`](../modules/address._internal_.md#address)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAddressByIdParam`](../modules/address._internal_.md#getaddressbyidparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Address`](../modules/address._internal_.md#address)\>

#### Defined in

src/store/modules/address.ts:18

___

### updateAddress

▸ **updateAddress**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Partial`](../modules/address._internal_.md#partial)<[`AddAddressParam`](../modules/address._internal_.md#addaddressparam) & [`UpdateAddressParam`](../modules/address._internal_.md#updateaddressparam)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Partial`](../modules/address._internal_.md#partial)<[`AddAddressParam`](../modules/address._internal_.md#addaddressparam) & [`UpdateAddressParam`](../modules/address._internal_.md#updateaddressparam)\> |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Partial`](../modules/address._internal_.md#partial)<[`AddAddressParam`](../modules/address._internal_.md#addaddressparam) & [`UpdateAddressParam`](../modules/address._internal_.md#updateaddressparam)\>\>

#### Defined in

src/store/modules/address.ts:22

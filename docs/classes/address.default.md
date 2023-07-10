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

src/store/modules/address.ts:8

## Methods

### deleteAddress

▸ **deleteAddress**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/address.ts:25

___

### getAddress

▸ **getAddress**(`params`): [`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`GetAddressesResponse`](../modules/address._internal_.md#getaddressesresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAddressesParam`](../modules/address._internal_.md#getaddressesparam) |

#### Returns

[`AsyncThunkPromise`](../modules/product_listing._internal_.md#asyncthunkpromise)<[`GetAddressesResponse`](../modules/address._internal_.md#getaddressesresponse)\>

#### Defined in

src/store/modules/address.ts:13

___

### getAddressById

▸ **getAddressById**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/address.ts:17

___

### updateAddress

▸ **updateAddress**(`params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/store/modules/address.ts:21

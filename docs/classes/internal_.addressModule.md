[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / addressModule

# Class: addressModule

[<internal>](../modules/internal_.md).addressModule

## Table of contents

### Constructors

- [constructor](internal_.addressModule.md#constructor)

### Methods

- [deleteAddress](internal_.addressModule.md#deleteaddress)
- [getAddress](internal_.addressModule.md#getaddress)
- [getAddressById](internal_.addressModule.md#getaddressbyid)
- [updateAddress](internal_.addressModule.md#updateaddress)

## Constructors

### constructor

• **new addressModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/address.ts:9

## Methods

### deleteAddress

▸ **deleteAddress**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`DeleteAddressResponse`](../modules/internal_.md#deleteaddressresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RemoveAddressParam`](../modules/internal_.md#removeaddressparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`DeleteAddressResponse`](../modules/internal_.md#deleteaddressresponse)\>

#### Defined in

src/store/modules/address.ts:26

___

### getAddress

▸ **getAddress**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`GetAddressesResponse`](../modules/internal_.md#getaddressesresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAddressesParam`](../modules/internal_.md#getaddressesparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`GetAddressesResponse`](../modules/internal_.md#getaddressesresponse)\>

#### Defined in

src/store/modules/address.ts:14

___

### getAddressById

▸ **getAddressById**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Address`](../modules/internal_.md#address)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAddressByIdParam`](../modules/internal_.md#getaddressbyidparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Address`](../modules/internal_.md#address)\>

#### Defined in

src/store/modules/address.ts:18

___

### updateAddress

▸ **updateAddress**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Partial`](../modules/internal_.md#partial)<[`AddAddressParam`](../modules/internal_.md#addaddressparam) & [`UpdateAddressParam`](../modules/internal_.md#updateaddressparam)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Partial`](../modules/internal_.md#partial)<[`AddAddressParam`](../modules/internal_.md#addaddressparam) & [`UpdateAddressParam`](../modules/internal_.md#updateaddressparam)\> |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Partial`](../modules/internal_.md#partial)<[`AddAddressParam`](../modules/internal_.md#addaddressparam) & [`UpdateAddressParam`](../modules/internal_.md#updateaddressparam)\>\>

#### Defined in

src/store/modules/address.ts:22

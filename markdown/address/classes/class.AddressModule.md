[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [address](../README.md) > AddressModule

# Class: AddressModule

## Constructors

### new AddressModule

> **new AddressModule**(`dispatch`): [`AddressModule`](class.AddressModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`AddressModule`](class.AddressModule.md)

#### Defined In

src/store/modules/address.ts:9

## Methods

### deleteAddress

> **deleteAddress**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DeleteAddressResponse`](../internal_/type-aliases/type-alias.DeleteAddressResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`RemoveAddressParam`](../internal_/type-aliases/type-alias.RemoveAddressParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DeleteAddressResponse`](../internal_/type-aliases/type-alias.DeleteAddressResponse.md) \>

#### Defined In

src/store/modules/address.ts:26

***

### getAddress

> **getAddress**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetAddressesResponse`](../internal_/type-aliases/type-alias.GetAddressesResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetAddressesParam`](../internal_/type-aliases/type-alias.GetAddressesParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetAddressesResponse`](../internal_/type-aliases/type-alias.GetAddressesResponse.md) \>

#### Defined In

src/store/modules/address.ts:14

***

### getAddressById

> **getAddressById**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Address`](../internal_/type-aliases/type-alias.Address.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetAddressByIdParam`](../internal_/type-aliases/type-alias.GetAddressByIdParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Address`](../internal_/type-aliases/type-alias.Address.md) \>

#### Defined In

src/store/modules/address.ts:18

***

### updateAddress

> **updateAddress**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Partial`](../internal_/type-aliases/type-alias.Partial.md)\< [`AddAddressParam`](../internal_/type-aliases/type-alias.AddAddressParam.md) & [`UpdateAddressParam`](../internal_/type-aliases/type-alias.UpdateAddressParam.md) \> \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`Partial`](../internal_/type-aliases/type-alias.Partial.md)\< [`AddAddressParam`](../internal_/type-aliases/type-alias.AddAddressParam.md) & [`UpdateAddressParam`](../internal_/type-aliases/type-alias.UpdateAddressParam.md) \> |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Partial`](../internal_/type-aliases/type-alias.Partial.md)\< [`AddAddressParam`](../internal_/type-aliases/type-alias.AddAddressParam.md) & [`UpdateAddressParam`](../internal_/type-aliases/type-alias.UpdateAddressParam.md) \> \>

#### Defined In

src/store/modules/address.ts:22

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

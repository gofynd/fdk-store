[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Paginator

# Class: Paginator<T\>

[<internal>](../modules/internal_.md).Paginator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

## Table of contents

### Constructors

- [constructor](internal_.Paginator.md#constructor)

### Properties

- [callback](internal_.Paginator.md#callback)
- [isNext](internal_.Paginator.md#isnext)
- [nextId](internal_.Paginator.md#nextid)
- [pageNo](internal_.Paginator.md#pageno)

### Methods

- [hasNext](internal_.Paginator.md#hasnext)
- [next](internal_.Paginator.md#next)
- [setCallback](internal_.Paginator.md#setcallback)
- [setPaginator](internal_.Paginator.md#setpaginator)

## Constructors

### constructor

• **new Paginator**<`T`\>(`pageNo`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pageNo` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:5

## Properties

### callback

• **callback**: () => `Promise`<`T`\>

#### Type declaration

▸ (): `Promise`<`T`\>

##### Returns

`Promise`<`T`\>

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:7

___

### isNext

• **isNext**: `boolean`

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:27

___

### nextId

• **nextId**: `string`

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:28

___

### pageNo

• **pageNo**: `number`

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:6

## Methods

### hasNext

▸ **hasNext**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:14

___

### next

▸ **next**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:30

___

### setCallback

▸ **setCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `Promise`<`T`\> |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:12

___

### setPaginator

▸ **setPaginator**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.hasNext` | `boolean` |
| `arg.nextId` | `string` |
| `arg.pageNo` | `number` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/common/Paginator.d.ts:22

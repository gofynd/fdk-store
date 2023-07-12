[fdk-store](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [address](default.md#address)
- [auth](default.md#auth)
- [brands](default.md#brands)
- [cart](default.md#cart)
- [categories](default.md#categories)
- [collection](default.md#collection)
- [configuration](default.md#configuration)
- [content](default.md#content)
- [getters](default.md#getters)
- [logistic](default.md#logistic)
- [order](default.md#order)
- [payment](default.md#payment)
- [product](default.md#product)
- [products](default.md#products)
- [share](default.md#share)
- [theme](default.md#theme)

### Methods

- [observeStore](default.md#observestore)

## Constructors

### constructor

• **new default**(`sdk`, `initialData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdk` | [`ApplicationClient`](internal_.ApplicationClient.md) |
| `initialData` | `unknown` |

#### Defined in

src/store/index.ts:57

## Properties

### address

• **address**: [`addressModule`](internal_.addressModule.md)

#### Defined in

src/store/index.ts:45

___

### auth

• **auth**: [`authModule`](internal_.authModule.md)

#### Defined in

src/store/index.ts:51

___

### brands

• **brands**: [`brandsModule`](internal_.brandsModule.md)

#### Defined in

src/store/index.ts:44

___

### cart

• **cart**: [`CartModule`](internal_.CartModule.md)

#### Defined in

src/store/index.ts:43

___

### categories

• **categories**: [`categoriesModule`](internal_.categoriesModule.md)

#### Defined in

src/store/index.ts:54

___

### collection

• **collection**: [`collectionModule`](internal_.collectionModule.md)

#### Defined in

src/store/index.ts:53

___

### configuration

• **configuration**: [`configurationModule`](internal_.configurationModule.md)

#### Defined in

src/store/index.ts:48

___

### content

• **content**: [`contentModule`](internal_.contentModule.md)

#### Defined in

src/store/index.ts:46

___

### getters

• **getters**: `any`

#### Defined in

src/store/index.ts:40

___

### logistic

• **logistic**: [`logisticModule`](internal_.logisticModule.md)

#### Defined in

src/store/index.ts:49

___

### order

• **order**: [`OrderModule`](internal_.OrderModule.md)

#### Defined in

src/store/index.ts:55

___

### payment

• **payment**: [`paymentModule`](internal_.paymentModule.md)

#### Defined in

src/store/index.ts:50

___

### product

• **product**: [`ProductModule`](internal_.ProductModule.md)

#### Defined in

src/store/index.ts:42

___

### products

• **products**: [`ProductsModule`](internal_.ProductsModule.md)

#### Defined in

src/store/index.ts:41

___

### share

• **share**: [`shareModule`](internal_.shareModule.md)

#### Defined in

src/store/index.ts:52

___

### theme

• **theme**: [`themeModule`](internal_.themeModule.md)

#### Defined in

src/store/index.ts:47

## Methods

### observeStore

▸ **observeStore**(`getterKey`, `onChange`): [`Unsubscribe`](../interfaces/internal_.Unsubscribe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `getterKey` | `string` |
| `onChange` | `Function` |

#### Returns

[`Unsubscribe`](../interfaces/internal_.Unsubscribe.md)

#### Defined in

src/store/index.ts:204

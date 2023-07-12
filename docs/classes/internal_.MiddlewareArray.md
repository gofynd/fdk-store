[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MiddlewareArray

# Class: MiddlewareArray<Middlewares\>

[<internal>](../modules/internal_.md).MiddlewareArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `Middlewares` | extends [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`\>[] |

## Hierarchy

- `Array`<`Middlewares`[`number`]\>

  ↳ **`MiddlewareArray`**

## Table of contents

### Constructors

- [constructor](internal_.MiddlewareArray.md#constructor)

### Properties

- [length](internal_.MiddlewareArray.md#length)

### Accessors

- [[species]](internal_.MiddlewareArray.md#[species])

### Methods

- [[iterator]](internal_.MiddlewareArray.md#[iterator])
- [[unscopables]](internal_.MiddlewareArray.md#[unscopables])
- [at](internal_.MiddlewareArray.md#at)
- [concat](internal_.MiddlewareArray.md#concat)
- [copyWithin](internal_.MiddlewareArray.md#copywithin)
- [entries](internal_.MiddlewareArray.md#entries)
- [every](internal_.MiddlewareArray.md#every)
- [fill](internal_.MiddlewareArray.md#fill)
- [filter](internal_.MiddlewareArray.md#filter)
- [find](internal_.MiddlewareArray.md#find)
- [findIndex](internal_.MiddlewareArray.md#findindex)
- [flat](internal_.MiddlewareArray.md#flat)
- [flatMap](internal_.MiddlewareArray.md#flatmap)
- [forEach](internal_.MiddlewareArray.md#foreach)
- [includes](internal_.MiddlewareArray.md#includes)
- [indexOf](internal_.MiddlewareArray.md#indexof)
- [join](internal_.MiddlewareArray.md#join)
- [keys](internal_.MiddlewareArray.md#keys)
- [lastIndexOf](internal_.MiddlewareArray.md#lastindexof)
- [map](internal_.MiddlewareArray.md#map)
- [pop](internal_.MiddlewareArray.md#pop)
- [prepend](internal_.MiddlewareArray.md#prepend)
- [push](internal_.MiddlewareArray.md#push)
- [reduce](internal_.MiddlewareArray.md#reduce)
- [reduceRight](internal_.MiddlewareArray.md#reduceright)
- [reverse](internal_.MiddlewareArray.md#reverse)
- [shift](internal_.MiddlewareArray.md#shift)
- [slice](internal_.MiddlewareArray.md#slice)
- [some](internal_.MiddlewareArray.md#some)
- [sort](internal_.MiddlewareArray.md#sort)
- [splice](internal_.MiddlewareArray.md#splice)
- [toLocaleString](internal_.MiddlewareArray.md#tolocalestring)
- [toString](internal_.MiddlewareArray.md#tostring)
- [unshift](internal_.MiddlewareArray.md#unshift)
- [values](internal_.MiddlewareArray.md#values)
- [from](internal_.MiddlewareArray.md#from)
- [isArray](internal_.MiddlewareArray.md#isarray)
- [of](internal_.MiddlewareArray.md#of)

## Constructors

### constructor

• **new MiddlewareArray**<`Middlewares`\>(`...items`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Middlewares` | extends [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `Middlewares` |

#### Overrides

Array&lt;Middlewares[number]\&gt;.constructor

#### Defined in

node_modules/@reduxjs/toolkit/dist/utils.d.ts:11

## Properties

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1304

## Accessors

### [species]

• `Static` `get` **[species]**(): `any`

#### Returns

`any`

#### Overrides

Array.[species]

#### Defined in

node_modules/@reduxjs/toolkit/dist/utils.d.ts:12

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`Middlewares`[`number`]\>

Iterator

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`Middlewares`[`number`]\>

#### Inherited from

Array.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.[unscopables]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### at

▸ **at**(`index`): `undefined` \| `Middlewares`[`number`]

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `Middlewares`[`number`]

#### Inherited from

Array.at

#### Defined in

node_modules/@types/node/globals.d.ts:94

___

### concat

▸ **concat**<`AdditionalMiddlewares`\>(`items`): [`MiddlewareArray`](internal_.MiddlewareArray.md)<[...Middlewares[], ...AdditionalMiddlewares[]]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AdditionalMiddlewares` | extends readonly [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `AdditionalMiddlewares` |

#### Returns

[`MiddlewareArray`](internal_.MiddlewareArray.md)<[...Middlewares[], ...AdditionalMiddlewares[]]\>

#### Overrides

Array.concat

#### Defined in

node_modules/@reduxjs/toolkit/dist/utils.d.ts:13

▸ **concat**<`AdditionalMiddlewares`\>(`...items`): [`MiddlewareArray`](internal_.MiddlewareArray.md)<[...Middlewares[], ...AdditionalMiddlewares[]]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AdditionalMiddlewares` | extends readonly [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `AdditionalMiddlewares` |

#### Returns

[`MiddlewareArray`](internal_.MiddlewareArray.md)<[...Middlewares[], ...AdditionalMiddlewares[]]\>

#### Overrides

Array.concat

#### Defined in

node_modules/@reduxjs/toolkit/dist/utils.d.ts:14

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`MiddlewareArray`](internal_.MiddlewareArray.md)<`Middlewares`\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`MiddlewareArray`](internal_.MiddlewareArray.md)<`Middlewares`\>

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`number`, `Middlewares`[`number`]]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`number`, `Middlewares`[`number`]]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>, `S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1411

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1420

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`MiddlewareArray`](internal_.MiddlewareArray.md)<`Middlewares`\>

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Middlewares`[`number`] | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`MiddlewareArray`](internal_.MiddlewareArray.md)<`Middlewares`\>

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>, `S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1447

▸ **filter**(`predicate`, `thisArg?`): `Middlewares`[`number`][]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Middlewares`[`number`][]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1453

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>, `S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: `Middlewares`[`number`], `index`: `number`, `obj`: `Middlewares`[`number`][]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `Middlewares`[`number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `Middlewares`[`number`], `index`: `number`, `obj`: `Middlewares`[`number`][]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `Middlewares`[`number`]

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Middlewares`[`number`], `index`: `number`, `obj`: `Middlewares`[`number`][]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): [`FlatArray`](../modules/internal_.md#flatarray)<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

[`FlatArray`](../modules/internal_.md#flatarray)<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Middlewares`[`number`] | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Middlewares`[`number`] | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1396

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`number`\>

Returns an iterable of keys in the array

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Middlewares`[`number`] | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1402

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

___

### pop

▸ **pop**(): `undefined` \| `Middlewares`[`number`]

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `Middlewares`[`number`]

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1317

___

### prepend

▸ **prepend**<`AdditionalMiddlewares`\>(`items`): [`MiddlewareArray`](internal_.MiddlewareArray.md)<[...AdditionalMiddlewares[], ...Middlewares[]]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AdditionalMiddlewares` | extends readonly [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `AdditionalMiddlewares` |

#### Returns

[`MiddlewareArray`](internal_.MiddlewareArray.md)<[...AdditionalMiddlewares[], ...Middlewares[]]\>

#### Defined in

node_modules/@reduxjs/toolkit/dist/utils.d.ts:15

▸ **prepend**<`AdditionalMiddlewares`\>(`...items`): [`MiddlewareArray`](internal_.MiddlewareArray.md)<[...AdditionalMiddlewares[], ...Middlewares[]]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AdditionalMiddlewares` | extends readonly [`Middleware`](../interfaces/internal_.Middleware.md)<`any`, `any`, [`Dispatch`](../interfaces/internal_.Dispatch.md)<[`AnyAction`](../interfaces/internal_.AnyAction.md)\>\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `AdditionalMiddlewares` |

#### Returns

[`MiddlewareArray`](internal_.MiddlewareArray.md)<[...AdditionalMiddlewares[], ...Middlewares[]]\>

#### Defined in

node_modules/@reduxjs/toolkit/dist/utils.d.ts:16

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `Middlewares`[`number`][] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1322

___

### reduce

▸ **reduce**(`callbackfn`): `Middlewares`[`number`]

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `Middlewares`[`number`], `currentValue`: `Middlewares`[`number`], `currentIndex`: `number`, `array`: `Middlewares`[`number`][]) => `Middlewares`[`number`] | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`Middlewares`[`number`]

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1459

▸ **reduce**(`callbackfn`, `initialValue`): `Middlewares`[`number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `Middlewares`[`number`], `currentValue`: `Middlewares`[`number`], `currentIndex`: `number`, `array`: `Middlewares`[`number`][]) => `Middlewares`[`number`] |
| `initialValue` | `Middlewares`[`number`] |

#### Returns

`Middlewares`[`number`]

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `Middlewares`[`number`], `currentIndex`: `number`, `array`: `Middlewares`[`number`][]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1466

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `Middlewares`[`number`]

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `Middlewares`[`number`], `currentValue`: `Middlewares`[`number`], `currentIndex`: `number`, `array`: `Middlewares`[`number`][]) => `Middlewares`[`number`] | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`Middlewares`[`number`]

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1472

▸ **reduceRight**(`callbackfn`, `initialValue`): `Middlewares`[`number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `Middlewares`[`number`], `currentValue`: `Middlewares`[`number`], `currentIndex`: `number`, `array`: `Middlewares`[`number`][]) => `Middlewares`[`number`] |
| `initialValue` | `Middlewares`[`number`] |

#### Returns

`Middlewares`[`number`]

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1473

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `Middlewares`[`number`], `currentIndex`: `number`, `array`: `Middlewares`[`number`][]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1479

___

### reverse

▸ **reverse**(): `Middlewares`[`number`][]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`Middlewares`[`number`][]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1344

___

### shift

▸ **shift**(): `undefined` \| `Middlewares`[`number`]

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `Middlewares`[`number`]

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1349

___

### slice

▸ **slice**(`start?`, `end?`): `Middlewares`[`number`][]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`Middlewares`[`number`][]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1359

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Middlewares`[`number`], `index`: `number`, `array`: `Middlewares`[`number`][]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1429

___

### sort

▸ **sort**(`compareFn?`): [`MiddlewareArray`](internal_.MiddlewareArray.md)<`Middlewares`\>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `Middlewares`[`number`], `b`: `Middlewares`[`number`]) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`MiddlewareArray`](internal_.MiddlewareArray.md)<`Middlewares`\>

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1370

___

### splice

▸ **splice**(`start`, `deleteCount?`): `Middlewares`[`number`][]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`Middlewares`[`number`][]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1377

▸ **splice**(`start`, `deleteCount`, `...items`): `Middlewares`[`number`][]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `Middlewares`[`number`][] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`Middlewares`[`number`][]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1385

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1312

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1308

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `Middlewares`[`number`][] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1390

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`Middlewares`[`number`]\>

Returns an iterable of values in the array

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`Middlewares`[`number`]\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`ArrayLike`](../interfaces/internal_.ArrayLike.md)<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`ArrayLike`](../interfaces/internal_.ArrayLike.md)<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | [`Iterable`](../interfaces/internal_.Iterable.md)<`T`\> \| [`ArrayLike`](../interfaces/internal_.ArrayLike.md)<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | [`Iterable`](../interfaces/internal_.Iterable.md)<`T`\> \| [`ArrayLike`](../interfaces/internal_.ArrayLike.md)<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1491

___

### of

▸ `Static` **of**<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86

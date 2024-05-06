[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > AddCartDetailResponse

# Type alias: AddCartDetailResponse

> **AddCartDetailResponse**: `object`

## Type declaration

### `cart`

> `optional` **cart**: [`CartDetailResponse`](type-alias.CartDetailResponse.md)

***

### `message`

> `optional` **message**: `string`

***

### `partial`

> `optional` **partial**: `boolean`

- When adding multiple items check if all
added. True if only few are added.

***

### `success`

> `optional` **success**: `boolean`

- True if all items are added successfully.
False if partially added or not added.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1546

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1547

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

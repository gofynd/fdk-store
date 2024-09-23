[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > ProductAvailability

# Type alias: ProductAvailability

> **ProductAvailability**: `object`

## Type declaration

### `available_sizes`

> `optional` **available\_sizes**: [`ProductAvailabilitySize`](type-alias.ProductAvailabilitySize.md)[]

- Product sizes availability.

***

### `deliverable`

> `optional` **deliverable**: `boolean`

- Deliverable flag denotes if the product
is deliverable or not.

***

### `is_valid`

> `optional` **is\_valid**: `boolean`

- Valid flag for the product if the product
added in cart is valid to place the order.

***

### `other_store_quantity`

> `optional` **other\_store\_quantity**: `number`

- Quantity of the product available
on other store.

***

### `out_of_stock`

> `optional` **out\_of\_stock**: `boolean`

- Denotes if the product is available in stock.

***

### `sizes`

> `optional` **sizes**: `string`[]

- All sizes of the product.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1671

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:1672

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

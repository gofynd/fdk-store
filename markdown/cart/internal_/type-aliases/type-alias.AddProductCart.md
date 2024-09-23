[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > AddProductCart

# Type alias: AddProductCart

> **AddProductCart**: `object`

## Type declaration

### `_custom_json`

> `optional` **\_custom\_json**: `any`

- Field to add custom json at article level
while add items to cart .

***

### `article_assignment`

> `optional` **article\_assignment**: `any`

- Field to determine how article
assignment should happen by article assignment level and strategy.

***

### `article_id`

> `optional` **article\_id**: `string`

- Unique identifier of an article .

***

### `display`

> `optional` **display**: `string`

- Display field at article level .

***

### `extra_meta`

> `optional` **extra\_meta**: `any`

- Extra meta data to be added at article
level while add items to cart.

***

### `item_id`

> `optional` **item\_id**: `number`

- Unique identifier to identify product.

***

### `item_size`

> `optional` **item\_size**: `string`

- Field to determine size of the product.

***

### `meta`

> `optional` **meta**: `any`

- Field to add meta data at article level.

***

### `parent_item_identifiers`

> `optional` **parent\_item\_identifiers**: `any`[]

- Fields to determine parent
product of the product.

***

### `pos`

> `optional` **pos**: `boolean`

- Filed to determine whether user is making request
from pos or not.

***

### `product_group_tags`

> `optional` **product\_group\_tags**: `string`[]

- Field to specify the product
groups of the product that the user is trying to add in cart.

***

### `quantity`

> `optional` **quantity**: `number`

- Field to specify the product quantity that
user wants to buy.

***

### `seller_id`

> `optional` **seller\_id**: `number`

- Unique idetifier of the seller selected by
the user from which user want to buy a product .

***

### `seller_identifier`

> `optional` **seller\_identifier**: `string`

- Add items using seller identifier
for store os.

***

### `store_id`

> `optional` **store\_id**: `number`

- Unique identifier of the store selected by
the user from which user want to buy a product.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2322

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2323

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

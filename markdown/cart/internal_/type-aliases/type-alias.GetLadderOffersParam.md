[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > GetLadderOffersParam

# Type alias: GetLadderOffersParam

> **GetLadderOffersParam**: `object`

## Type declaration

### `pageSize`

> `optional` **pageSize**: `number`

- Number of offers to be fetched to show

***

### `promotionId`

> `optional` **promotionId**: `string`

- Get ladder information of given promotion
id explicitely

***

### `slug`

> **slug**: `string`

- A short, human-readable, URL-friendly identifier of
a product. You can get slug value from the endpoint
/service/application/catalog/v1.0/products/

***

### `storeId`

> `optional` **storeId**: `string`

- Store uid of assigned store on PDP page. If
not passed default first created ladder will be returned

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:466

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

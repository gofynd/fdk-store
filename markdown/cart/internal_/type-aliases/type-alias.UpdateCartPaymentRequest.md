[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > UpdateCartPaymentRequest

# Type alias: UpdateCartPaymentRequest

> **UpdateCartPaymentRequest**: `object`

## Type declaration

### `address_id`

> `optional` **address\_id**: `string`

- Address id of the user address selected to
deliver the shipment.

***

### `aggregator_name`

> `optional` **aggregator\_name**: `string`

- Aggregator name of the payment gateway.

***

### `id`

> `optional` **id**: `string`

- Cart id of the user cart for which the update cart
payment operation performed.

***

### `merchant_code`

> `optional` **merchant\_code**: `string`

- Merchant code of the payment mode
selected to do the payment.

***

### `payment_identifier`

> `optional` **payment\_identifier**: `string`

- Payment identifier of the payment
mode selected to do the payment.

***

### `payment_mode`

> `optional` **payment\_mode**: `string`

- Payment mode of the payment selected to
do the payment.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2961

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:2962

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

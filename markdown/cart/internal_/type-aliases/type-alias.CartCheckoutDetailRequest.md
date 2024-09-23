[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > CartCheckoutDetailRequest

# Type alias: CartCheckoutDetailRequest

> **CartCheckoutDetailRequest**: `object`

## Type declaration

### `address_id`

> `optional` **address\_id**: `string`

- Address id of the user on which the order
to be delivered.

***

### `aggregator`

> `optional` **aggregator**: `string`

- Aggregator name of the payment gateway.

***

### `billing_address`

> `optional` **billing\_address**: `any`

- Billing address json which includes
customer address, customer phone, customer email, customer pincode,
customer landmark and customer name.

***

### `billing_address_id`

> `optional` **billing\_address\_id**: `string`

- Billing address id of the customer
on which the invoice to be generated after the order is placed.

***

### `callback_url`

> `optional` **callback\_url**: `string`

- Callback url to be redirected after
payment received/failed.

***

### `card_id`

> `optional` **card\_id**: `string`

- Saved card id if payment mode is card to do the payment.

***

### `custom_meta`

> `optional` **custom\_meta**: [`CartCheckoutCustomMeta`](type-alias.CartCheckoutCustomMeta.md)[]

- Custom meta data to be
added in order.

***

### `customer_details`

> `optional` **customer\_details**: `any`

- Customer details to be added in order.

***

### `delivery_address`

> `optional` **delivery\_address**: `any`

- Delivery address data which includes
customer address, customer phone, customer email, customer pincode,
customer landmark and customer name.

***

### `extra_meta`

> `optional` **extra\_meta**: `any`

- Extra meta to be added while checkout in order.

***

### `id`

> `optional` **id**: `string`

- Cart id of the user cart.

***

### `iin`

> `optional` **iin**: `string`

- Issuer Identification Number' number of card if
payment mode is card.

***

### `merchant_code`

> `optional` **merchant\_code**: `string`

- Merchant code of the payment mode
selected to do the payment.

***

### `meta`

> `optional` **meta**: `any`

- Meta data to be added in order.

***

### `network`

> `optional` **network**: `string`

- Network of card if payment mode is card to do
the payment.

***

### `order_type`

> `optional` **order\_type**: `string`

- Order type of the order being placed like
pickAtStore or HomeDelivery.

***

### `ordering_store`

> `optional` **ordering\_store**: `number`

- Ordering store id of the store from
which the order is getting placed.

***

### `payment_auto_confirm`

> `optional` **payment\_auto\_confirm**: `boolean`

- Payment auto confirm flag if
payment need not to be collected from user.

***

### `payment_extra_identifiers`

> `optional` **payment\_extra\_identifiers**: `any`

- Payment extra identifier for
the payment mode to do the payment.

***

### `payment_identifier`

> `optional` **payment\_identifier**: `string`

- Payment identifier of the payment
mode selected to do the payment.

***

### `payment_mode`

> **payment\_mode**: `string`

- Payment mode from which the payment to be
done for the order.

***

### `payment_params`

> `optional` **payment\_params**: `any`

- Payment params which includes payment
identifier and merchant code.

***

### `staff`

> `optional` **staff**: [`StaffCheckout`](type-alias.StaffCheckout.md)

***

### `type`

> `optional` **type**: `string`

- Type of cart if payment mode is card to do the payment.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3222

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Cart/CartApplicationModel.d.ts:3223

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

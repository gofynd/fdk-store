[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [cart](../../README.md) > [<internal>](../README.md) > GetShipmentsParam

# Type alias: GetShipmentsParam

> **GetShipmentsParam**: `object`

## Type declaration

### addressId

`optional` **addressId**: `string`

- ID allotted to the selected address

---

### areaCode

`optional` **areaCode**: `string`

- The PIN Code of the destination address, e.g. 400059

---

### buyNow

`optional` **buyNow**: `boolean`

---

### id

`optional` **id**: `string`

- The unique identifier of the cart

---

### orderType

`optional` **orderType**: `string`

- The order type of shipment HomeDelivery - If
  the customer wants the order home-delivered PickAtStore - If the customer
  wants the handover of an order at the store itself. Digital - If the
  customer wants to buy digital voucher ( for jiogames )

---

### p

`optional` **p**: `boolean`

- This is a boolean value. Select `true` for getting
  a payment option in response.

## Source

node_modules/fdk-client-javascript/sdk/application/Cart/CartApplicationValidator.d.ts:417

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

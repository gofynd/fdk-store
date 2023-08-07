[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > AppFeature

# Type alias: AppFeature

> **AppFeature**: `object`

## Type declaration

### \_\_v

`optional` **\_\_v**: `number`

- Version key for tracking revisions. Default value is zero

---

### \_id

`optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
  for the sales channel features

---

### app

`optional` **app**: `string`

- Application ID of the sales channel

---

### cart

`optional` **cart**: [`CartFeature`](type-alias.CartFeature.md)

---

### common

`optional` **common**: [`CommonFeature`](type-alias.CommonFeature.md)

---

### created_at

`optional` **created_at**: `string`

- ISO 8601 timestamp showing the date when
  the features were configured

---

### home_page

`optional` **home_page**: [`HomePageFeature`](type-alias.HomePageFeature.md)

---

### landing_page

`optional` **landing_page**: [`LandingPageFeature`](type-alias.LandingPageFeature.md)

---

### order

`optional` **order**: [`OrderFeature`](type-alias.OrderFeature.md)

---

### pcr

`optional` **pcr**: [`PcrFeature`](type-alias.PcrFeature.md)

---

### product_detail

`optional` **product_detail**: [`ProductDetailFeature`](type-alias.ProductDetailFeature.md)

---

### qr

`optional` **qr**: [`QrFeature`](type-alias.QrFeature.md)

---

### registration_page

`optional` **registration_page**: [`RegistrationPageFeature`](type-alias.RegistrationPageFeature.md)

---

### updated_at

`optional` **updated_at**: `string`

- ISO 8601 timestamp of last known
  modifications to the sales channel feature configuration

## Source

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:847

node_modules/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:848

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

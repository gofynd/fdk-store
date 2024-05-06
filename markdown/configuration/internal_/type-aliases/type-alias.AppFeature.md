[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [configuration](../../README.md) > [<internal>](../README.md) > AppFeature

# Type alias: AppFeature

> **AppFeature**: `object`

## Type declaration

### `__v`

> `optional` **\_\_v**: `number`

- Version key for tracking revisions. Default value is zero

***

### `_id`

> `optional` **\_id**: `string`

- The unique identifier (24-digit Mongo Object ID)
for the sales channel features

***

### `app`

> `optional` **app**: `string`

- Application ID of the sales channel

***

### `cart`

> `optional` **cart**: [`CartFeature`](type-alias.CartFeature.md)

***

### `common`

> `optional` **common**: [`CommonFeature`](type-alias.CommonFeature.md)

***

### `created_at`

> `optional` **created\_at**: `string`

- ISO 8601 timestamp showing the date when
the features were configured

***

### `home_page`

> `optional` **home\_page**: [`HomePageFeature`](type-alias.HomePageFeature.md)

***

### `landing_page`

> `optional` **landing\_page**: [`LandingPageFeature`](type-alias.LandingPageFeature.md)

***

### `modified_at`

> `optional` **modified\_at**: `string`

- ISO 8601 timestamp of last known
modifications to the sales channel feature configuration

***

### `order`

> `optional` **order**: [`OrderFeature`](type-alias.OrderFeature.md)

***

### `pcr`

> `optional` **pcr**: [`PcrFeature`](type-alias.PcrFeature.md)

***

### `product_detail`

> `optional` **product\_detail**: [`ProductDetailFeature`](type-alias.ProductDetailFeature.md)

***

### `qr`

> `optional` **qr**: [`QrFeature`](type-alias.QrFeature.md)

***

### `registration_page`

> `optional` **registration\_page**: [`RegistrationPageFeature`](type-alias.RegistrationPageFeature.md)

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1320

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Configuration/ConfigurationApplicationModel.d.ts:1321

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

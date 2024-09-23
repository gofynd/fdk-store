[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > EditProfileRequestSchema

# Type alias: EditProfileRequestSchema

> **EditProfileRequestSchema**: `object`

## Type declaration

### `android_hash`

> `optional` **android\_hash**: `string`

- Unique hash value.

***

### `country_code`

> `optional` **country\_code**: `string`

- Country code for the phone number.

***

### `dob`

> `optional` **dob**: `string`

- Date of birth of user.

***

### `email`

> `optional` **email**: `string`

- Email id of user.

***

### `encrypt_otp`

> `optional` **encrypt\_otp**: `boolean`

- Set to true if you want to encrypt the OTP.

***

### `first_name`

> `optional` **first\_name**: `string`

- First name of the application user.

***

### `gender`

> `optional` **gender**: `string`

- Gender of user.

***

### `last_name`

> `optional` **last\_name**: `string`

- Last name of the application user.

***

### `mobile`

> `optional` **mobile**: [`EditProfileMobileSchema`](type-alias.EditProfileMobileSchema.md)

***

### `profile_pic_url`

> `optional` **profile\_pic\_url**: `string`

- Profile picture of user.

***

### `register_token`

> `optional` **register\_token**: `string`

- Unique temporary registration of the user.

***

### `sender`

> `optional` **sender**: `string`

- Identity of the sender.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:656

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:657

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

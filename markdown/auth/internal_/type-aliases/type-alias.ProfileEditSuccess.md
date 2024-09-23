[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > ProfileEditSuccess

# Type alias: ProfileEditSuccess

> **ProfileEditSuccess**: `object`

## Type declaration

### `country_code`

> `optional` **country\_code**: `string`

- The country specific prefix for the phone number.

***

### `email`

> `optional` **email**: `string`

- Email id of user.

***

### `message`

> `optional` **message**: `string`

- Information about the operation's result.

***

### `mobile`

> `optional` **mobile**: `string`

- The user's mobile number without the country code.

***

### `register_token`

> `optional` **register\_token**: `string`

- Unique registration token for user.

***

### `request_id`

> `optional` **request\_id**: `string`

- A random uuid string used to track the request.

***

### `resend_email_token`

> `optional` **resend\_email\_token**: `string`

- Unique token to identify the
request for OTP verification in case of unverified email.

***

### `resend_timer`

> `optional` **resend\_timer**: `number`

- Time in seconds before an request can be resent.

***

### `resend_token`

> `optional` **resend\_token**: `string`

- A token used to authorize the resending of request.

***

### `success`

> `optional` **success**: `boolean`

- Whether the operation was successful.

***

### `user`

> `optional` **user**: [`UserSchema`](type-alias.UserSchema.md)

***

### `user_exists`

> `optional` **user\_exists**: `boolean`

- If user is registered or not.

***

### `verify_email_link`

> `optional` **verify\_email\_link**: `boolean`

- Whether to send a link to verify
the registered email id of the user.

***

### `verify_email_otp`

> `optional` **verify\_email\_otp**: `boolean`

- Whether to send a OTP to verify the
registered email id of the user.

***

### `verify_mobile_otp`

> `optional` **verify\_mobile\_otp**: `boolean`

- Whether to send a OTP to verify the
registered phone of the user.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1098

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1099

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

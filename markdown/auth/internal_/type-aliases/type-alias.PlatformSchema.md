[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [auth](../../README.md) > [<internal>](../README.md) > PlatformSchema

# Type alias: PlatformSchema

> **PlatformSchema**: `object`

## Type declaration

### `__v`

> `optional` **\_\_v**: `number`

- Version of the document.

***

### `_id`

> `optional` **\_id**: `string`

- Unique document id of the platform config.

***

### `active`

> `optional` **active**: `boolean`

- Is the application config active or not .

***

### `created_at`

> `optional` **created\_at**: `string`

- When was the application platform config
document was created.

***

### `delete_account_consent`

> `optional` **delete\_account\_consent**: [`DeleteAccountConsent`](type-alias.DeleteAccountConsent.md)

***

### `delete_account_day`

> `optional` **delete\_account\_day**: `number`

- Number of days after which the user
account will be deleted.

***

### `delete_account_reasons`

> `optional` **delete\_account\_reasons**: [`DeleteAccountReasons`](type-alias.DeleteAccountReasons.md)[]

- List of reasons
you can set to ask user when account is being deleted from application.

***

### `desktop_image`

> `optional` **desktop\_image**: `string`

- Image to be shown on registration page
for desktop devices.

***

### `display`

> `optional` **display**: `string`

- The display name of the platform.

***

### `flash_card`

> `optional` **flash\_card**: [`FlashCard`](type-alias.FlashCard.md)

***

### `forgot_password`

> `optional` **forgot\_password**: `boolean`

- Forgot password option to be given or
not to application user.

***

### `login`

> `optional` **login**: [`Login`](type-alias.Login.md)

***

### `look_and_feel`

> `optional` **look\_and\_feel**: [`LookAndFeel`](type-alias.LookAndFeel.md)

***

### `meta`

> `optional` **meta**: [`MetaSchema`](type-alias.MetaSchema.md)

***

### `mobile_image`

> `optional` **mobile\_image**: `string`

- Image to be shown on registration page
for mobile devices.

***

### `name`

> `optional` **name**: `string`

- Name of the application.

***

### `register`

> `optional` **register**: `boolean`

- Whether to show the registration page on
landing page or not.

***

### `register_required_fields`

> `optional` **register\_required\_fields**: [`RegisterRequiredFields`](type-alias.RegisterRequiredFields.md)

***

### `required_fields`

> `optional` **required\_fields**: [`RequiredFields`](type-alias.RequiredFields.md)

***

### `session_config`

> `optional` **session\_config**: [`SessionExpiry`](type-alias.SessionExpiry.md)

***

### `skip_captcha`

> `optional` **skip\_captcha**: `boolean`

- Skip the captcha or not .

***

### `skip_login`

> `optional` **skip\_login**: `boolean`

- Whether to skip the login or not .

***

### `social`

> `optional` **social**: [`Social`](type-alias.Social.md)

***

### `social_tokens`

> `optional` **social\_tokens**: [`SocialTokens`](type-alias.SocialTokens.md)

***

### `subtext`

> `optional` **subtext**: `string`

- Text to be shown at the top of the flash card
like login to fynd, login to tira.

***

### `updated_at`

> `optional` **updated\_at**: `string`

- The date and time when the configuration
was last updated.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1523

node\_modules/@gofynd/fdk-client-javascript/sdk/application/User/UserApplicationModel.d.ts:1524

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

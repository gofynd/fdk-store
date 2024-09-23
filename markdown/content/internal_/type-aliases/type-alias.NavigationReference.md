[**fdk-store**](../../../README.md)
***

[Index](../../../API.md) > [content](../../README.md) > [<internal>](../README.md) > NavigationReference

# Type alias: NavigationReference

> **NavigationReference**: `object`

## Type declaration

### `_locale_language`

> `optional` **\_locale\_language**: [`LocaleLanguage`](type-alias.LocaleLanguage.md)

***

### `acl`

> `optional` **acl**: `string`[]

- Details regarding the authorization level to
access the navigation item.

***

### `action`

> `optional` **action**: [`Action`](type-alias.Action.md)

***

### `active`

> `optional` **active**: `boolean`

- Whether navigation is active or not.

***

### `display`

> `optional` **display**: `string`

- Display name of the navigation link.

***

### `image`

> `optional` **image**: `string`

- URL of an image associated with a navigation link.

***

### `sort_order`

> `optional` **sort\_order**: `number`

- Number denoting the position of navigation link.

***

### `sub_navigation`

> `optional` **sub\_navigation**: [`NavigationReference`](type-alias.NavigationReference.md)[]

- List of sub links and
details under a navigation.

***

### `tags`

> `optional` **tags**: `string`[]

- List of tags under a navigation link.

***

### `type`

> `optional` **type**: `string`

- Type of action to be taken e.g, page.

## Defined In

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1132

node\_modules/@gofynd/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1133

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

[**fdk-store**](../../../README.md) ( [Readme](../../../README.md) \| [API](../../../API.md) )

---

[fdk-store](../../../API.md) > [theme](../../README.md) > [<internal>](../README.md) > ThemesSchema

# Type alias: ThemesSchema

> **ThemesSchema**: `object`

## Type declaration

### \_id

`optional` **\_id**: `string`

- The unique identifier of the theme

---

### application_id

`optional` **application_id**: `string`

- The ID of the application

---

### applied

`optional` **applied**: `boolean`

- Whether the theme has been applied or not

---

### assets

`optional` **assets**: [`Assets`](type-alias.Assets.md)

---

### available_sections

`optional` **available_sections**: [`SectionItem`](type-alias.SectionItem.md)[]

- Available sections information

---

### config

`optional` **config**: [`Config`](type-alias.Config.md)

---

### created_at

`optional` **created_at**: `string`

- The creation timestamp of the theme

---

### font

`optional` **font**: [`Font`](type-alias.Font.md)

---

### is_private

`optional` **is_private**: `boolean`

- Whether the theme is private or not

---

### marketplace_theme_id

`optional` **marketplace_theme_id**: `string`

- The ID of the theme in the marketplace

---

### meta

`optional` **meta**: [`Meta`](type-alias.Meta.md)

---

### name

`optional` **name**: `string`

- The name of the theme

---

### styles

`optional` **styles**: `any`

- The styles associated with the theme

---

### tags

`optional` **tags**: `string`[]

- An array of tags associated with the theme

---

### template_theme_id

`optional` **template_theme_id**: `string`

- The ID of the template theme

---

### updated_at

`optional` **updated_at**: `string`

- The last update timestamp of the theme

---

### version

`optional` **version**: `string`

- The version of the theme

## Source

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1177

node_modules/fdk-client-javascript/sdk/application/Theme/ThemeApplicationModel.d.ts:1178

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

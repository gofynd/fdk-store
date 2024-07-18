[**fdk-store**](../../README.md)
***

[Index](../../API.md) > [content](../README.md) > ContentModule

# Class: ContentModule

## Constructors

### new ContentModule

> **new ContentModule**(`dispatch`): [`ContentModule`](class.ContentModule.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`ContentModule`](class.ContentModule.md)

#### Defined In

src/store/modules/content.ts:61

## Methods

### fetchCustomPageData

> **fetchCustomPageData**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PageSchema`](../internal_/type-aliases/type-alias.PageSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPageParam`](../internal_/type-aliases/type-alias.GetPageParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PageSchema`](../internal_/type-aliases/type-alias.PageSchema.md) \>

#### Defined In

src/store/modules/content.ts:84

***

### getAnnouncements

> **getAnnouncements**(`params` = `...`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AnnouncementsResponseSchema`](../internal_/type-aliases/type-alias.AnnouncementsResponseSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`Options`](../internal_/type-aliases/type-alias.Options.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AnnouncementsResponseSchema`](../internal_/type-aliases/type-alias.AnnouncementsResponseSchema.md) \>

#### Defined In

src/store/modules/content.ts:134

***

### getBlog

> **getBlog**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogSchema`](../internal_/type-aliases/type-alias.BlogSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetBlogParam`](../internal_/type-aliases/type-alias.GetBlogParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogSchema`](../internal_/type-aliases/type-alias.BlogSchema.md) \>

#### Defined In

src/store/modules/content.ts:73

***

### getBlogs

> **getBlogs**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogGetResponse`](../internal_/type-aliases/type-alias.BlogGetResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetBlogsParam`](../internal_/type-aliases/type-alias.GetBlogsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogGetResponse`](../internal_/type-aliases/type-alias.BlogGetResponse.md) \>

#### Defined In

src/store/modules/content.ts:77

***

### getCustomFields

> **getCustomFields**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomFieldsResponseByResourceIdSchema`](../internal_/type-aliases/type-alias.CustomFieldsResponseByResourceIdSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCustomFieldsParam`](../internal_/type-aliases/type-alias.GetCustomFieldsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomFieldsResponseByResourceIdSchema`](../internal_/type-aliases/type-alias.CustomFieldsResponseByResourceIdSchema.md) \>

#### Defined In

src/store/modules/content.ts:100

***

### getCustomObject

> **getCustomObject**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomObjectByIdSchema`](../internal_/type-aliases/type-alias.CustomObjectByIdSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetCustomObjectParam`](../internal_/type-aliases/type-alias.GetCustomObjectParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`CustomObjectByIdSchema`](../internal_/type-aliases/type-alias.CustomObjectByIdSchema.md) \>

#### Defined In

src/store/modules/content.ts:81

***

### getDataLoaders

> **getDataLoaders**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Defined In

src/store/modules/content.ts:144

***

### getFaqCategories

> **getFaqCategories**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqCategoriesSchema`](../internal_/type-aliases/type-alias.GetFaqCategoriesSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqCategoriesSchema`](../internal_/type-aliases/type-alias.GetFaqCategoriesSchema.md) \>

#### Defined In

src/store/modules/content.ts:95

***

### getFaqCategoryBySlug

> **getFaqCategoryBySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqCategoryBySlugSchema`](../internal_/type-aliases/type-alias.GetFaqCategoryBySlugSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFaqCategoryBySlugParam`](../internal_/type-aliases/type-alias.GetFaqCategoryBySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqCategoryBySlugSchema`](../internal_/type-aliases/type-alias.GetFaqCategoryBySlugSchema.md) \>

#### Defined In

src/store/modules/content.ts:105

***

### getFaqs

> **getFaqs**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FaqResponseSchema`](../internal_/type-aliases/type-alias.FaqResponseSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`FaqResponseSchema`](../internal_/type-aliases/type-alias.FaqResponseSchema.md) \>

#### Defined In

src/store/modules/content.ts:110

***

### getFaqsByCategorySlug

> **getFaqsByCategorySlug**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqSchema`](../internal_/type-aliases/type-alias.GetFaqSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFaqsByCategorySlugParam`](../internal_/type-aliases/type-alias.GetFaqsByCategorySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqSchema`](../internal_/type-aliases/type-alias.GetFaqSchema.md) \>

#### Defined In

src/store/modules/content.ts:90

***

### getLandingPage

> **getLandingPage**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LandingPageSchema`](../internal_/type-aliases/type-alias.LandingPageSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LandingPageSchema`](../internal_/type-aliases/type-alias.LandingPageSchema.md) \>

#### Defined In

src/store/modules/content.ts:140

***

### getLegalInformation

> **getLegalInformation**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationLegal`](../internal_/type-aliases/type-alias.ApplicationLegal.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationLegal`](../internal_/type-aliases/type-alias.ApplicationLegal.md) \>

#### Defined In

src/store/modules/content.ts:120

***

### getNavigations

> **getNavigations**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`NavigationGetResponse`](../internal_/type-aliases/type-alias.NavigationGetResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetNavigationsParam`](../internal_/type-aliases/type-alias.GetNavigationsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`NavigationGetResponse`](../internal_/type-aliases/type-alias.NavigationGetResponse.md) \>

#### Defined In

src/store/modules/content.ts:63

***

### getSEOConfiguration

> **getSEOConfiguration**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SeoComponent`](../internal_/type-aliases/type-alias.SeoComponent.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SeoComponent`](../internal_/type-aliases/type-alias.SeoComponent.md) \>

#### Defined In

src/store/modules/content.ts:69

***

### getSlideshows

> **getSlideshows**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SlideshowGetResponse`](../internal_/type-aliases/type-alias.SlideshowGetResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetSlideshowsParam`](../internal_/type-aliases/type-alias.GetSlideshowsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SlideshowGetResponse`](../internal_/type-aliases/type-alias.SlideshowGetResponse.md) \>

#### Defined In

src/store/modules/content.ts:124

***

### getSupportInformation

> **getSupportInformation**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Support`](../internal_/type-aliases/type-alias.Support.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Support`](../internal_/type-aliases/type-alias.Support.md) \>

#### Defined In

src/store/modules/content.ts:130

***

### getTags

> **getTags**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TagsSchema`](../internal_/type-aliases/type-alias.TagsSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TagsSchema`](../internal_/type-aliases/type-alias.TagsSchema.md) \>

#### Defined In

src/store/modules/content.ts:116

***

### setDataLoaders

> **setDataLoaders**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Defined In

src/store/modules/content.ts:148

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

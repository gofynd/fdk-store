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

src/store/modules/content.ts:55

## Methods

### fetchAnnouncement

> **fetchAnnouncement**(`params` = `...`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AnnouncementsResponseSchema`](../internal_/type-aliases/type-alias.AnnouncementsResponseSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`Options`](../internal_/type-aliases/type-alias.Options.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AnnouncementsResponseSchema`](../internal_/type-aliases/type-alias.AnnouncementsResponseSchema.md) \>

#### Defined In

src/store/modules/content.ts:123

***

### fetchAppSeo

> **fetchAppSeo**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SeoComponent`](../internal_/type-aliases/type-alias.SeoComponent.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SeoComponent`](../internal_/type-aliases/type-alias.SeoComponent.md) \>

#### Defined In

src/store/modules/content.ts:66

***

### fetchBlogData

> **fetchBlogData**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogSchema`](../internal_/type-aliases/type-alias.BlogSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetBlogParam`](../internal_/type-aliases/type-alias.GetBlogParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogSchema`](../internal_/type-aliases/type-alias.BlogSchema.md) \>

#### Defined In

src/store/modules/content.ts:70

***

### fetchBlogs

> **fetchBlogs**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogGetResponse`](../internal_/type-aliases/type-alias.BlogGetResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetBlogsParam`](../internal_/type-aliases/type-alias.GetBlogsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogGetResponse`](../internal_/type-aliases/type-alias.BlogGetResponse.md) \>

#### Defined In

src/store/modules/content.ts:74

***

### fetchCustomPageData

> **fetchCustomPageData**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PageSchema`](../internal_/type-aliases/type-alias.PageSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetPageParam`](../internal_/type-aliases/type-alias.GetPageParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PageSchema`](../internal_/type-aliases/type-alias.PageSchema.md) \>

#### Defined In

src/store/modules/content.ts:78

***

### fetchDataLoaders

> **fetchDataLoaders**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Defined In

src/store/modules/content.ts:133

***

### fetchFaqByCategory

> **fetchFaqByCategory**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqSchema`](../internal_/type-aliases/type-alias.GetFaqSchema.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetFaqsByCategorySlugParam`](../internal_/type-aliases/type-alias.GetFaqsByCategorySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqSchema`](../internal_/type-aliases/type-alias.GetFaqSchema.md) \>

#### Defined In

src/store/modules/content.ts:84

***

### fetchLandingPage

> **fetchLandingPage**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LandingPageSchema`](../internal_/type-aliases/type-alias.LandingPageSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LandingPageSchema`](../internal_/type-aliases/type-alias.LandingPageSchema.md) \>

#### Defined In

src/store/modules/content.ts:129

***

### fetchLegalData

> **fetchLegalData**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationLegal`](../internal_/type-aliases/type-alias.ApplicationLegal.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationLegal`](../internal_/type-aliases/type-alias.ApplicationLegal.md) \>

#### Defined In

src/store/modules/content.ts:109

***

### fetchNavigation

> **fetchNavigation**(`params`): `null` \| [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`NavigationGetResponse`](../internal_/type-aliases/type-alias.NavigationGetResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `undefined` \| [`GetNavigationsParam`](../internal_/type-aliases/type-alias.GetNavigationsParam.md) |

#### Returns

`null` \| [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`NavigationGetResponse`](../internal_/type-aliases/type-alias.NavigationGetResponse.md) \>

#### Defined In

src/store/modules/content.ts:57

***

### fetchScreenSaver

> **fetchScreenSaver**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SlideshowGetResponse`](../internal_/type-aliases/type-alias.SlideshowGetResponse.md) \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetSlideshowsParam`](../internal_/type-aliases/type-alias.GetSlideshowsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SlideshowGetResponse`](../internal_/type-aliases/type-alias.SlideshowGetResponse.md) \>

#### Defined In

src/store/modules/content.ts:113

***

### fetchSupportInformation

> **fetchSupportInformation**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Support`](../internal_/type-aliases/type-alias.Support.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Support`](../internal_/type-aliases/type-alias.Support.md) \>

#### Defined In

src/store/modules/content.ts:119

***

### fetchTags

> **fetchTags**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TagsSchema`](../internal_/type-aliases/type-alias.TagsSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TagsSchema`](../internal_/type-aliases/type-alias.TagsSchema.md) \>

#### Defined In

src/store/modules/content.ts:105

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

src/store/modules/content.ts:89

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

src/store/modules/content.ts:94

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

src/store/modules/content.ts:99

***

### setDataLoaders

> **setDataLoaders**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Defined In

src/store/modules/content.ts:137

***
Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

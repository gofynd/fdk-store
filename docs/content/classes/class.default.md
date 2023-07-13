[**fdk-store**](../../README.md) ( [Readme](../../README.md) \| [API](../../API.md) )

---

[fdk-store](../../API.md) > [content](../README.md) > default

# Class: default

## Constructors

### constructor()

> **new default**(`dispatch`): [`default`](class.default.md)

#### Parameters

| Parameter  | Type                                                                                                     |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| `dispatch` | [`ThunkActionDispatch`](../../theme/internal_/type-aliases/type-alias.ThunkActionDispatch.md)\< `any` \> |

#### Returns

[`default`](class.default.md)

#### Source

src/store/modules/content.ts:9

## Methods

### fetchAnnouncement()

> **fetchAnnouncement**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AnnouncementsResponseSchema`](../internal_/type-aliases/type-alias.AnnouncementsResponseSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`AnnouncementsResponseSchema`](../internal_/type-aliases/type-alias.AnnouncementsResponseSchema.md) \>

#### Source

src/store/modules/content.ts:54

---

### fetchAppSeo()

> **fetchAppSeo**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SeoComponent`](../internal_/type-aliases/type-alias.SeoComponent.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SeoComponent`](../internal_/type-aliases/type-alias.SeoComponent.md) \>

#### Source

src/store/modules/content.ts:18

---

### fetchBlogData()

> **fetchBlogData**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogSchema`](../internal_/type-aliases/type-alias.BlogSchema.md) \>

#### Parameters

| Parameter | Type                                                                   |
| :-------- | :--------------------------------------------------------------------- |
| `params`  | [`GetBlogParam`](../internal_/type-aliases/type-alias.GetBlogParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogSchema`](../internal_/type-aliases/type-alias.BlogSchema.md) \>

#### Source

src/store/modules/content.ts:22

---

### fetchBlogs()

> **fetchBlogs**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogGetResponse`](../internal_/type-aliases/type-alias.BlogGetResponse.md) \>

#### Parameters

| Parameter | Type                                                                     |
| :-------- | :----------------------------------------------------------------------- |
| `params`  | [`GetBlogsParam`](../internal_/type-aliases/type-alias.GetBlogsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`BlogGetResponse`](../internal_/type-aliases/type-alias.BlogGetResponse.md) \>

#### Source

src/store/modules/content.ts:26

---

### fetchCustomPageData()

> **fetchCustomPageData**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PageSchema`](../internal_/type-aliases/type-alias.PageSchema.md) \>

#### Parameters

| Parameter | Type                                                                   |
| :-------- | :--------------------------------------------------------------------- |
| `params`  | [`GetPageParam`](../internal_/type-aliases/type-alias.GetPageParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`PageSchema`](../internal_/type-aliases/type-alias.PageSchema.md) \>

#### Source

src/store/modules/content.ts:30

---

### fetchDataLoaders()

> **fetchDataLoaders**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`DataLoadersSchema`](../internal_/type-aliases/type-alias.DataLoadersSchema.md) \>

#### Source

src/store/modules/content.ts:62

---

### fetchFaqByCategory()

> **fetchFaqByCategory**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqSchema`](../internal_/type-aliases/type-alias.GetFaqSchema.md) \>

#### Parameters

| Parameter | Type                                                                                               |
| :-------- | :------------------------------------------------------------------------------------------------- |
| `params`  | [`GetFaqsByCategorySlugParam`](../internal_/type-aliases/type-alias.GetFaqsByCategorySlugParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`GetFaqSchema`](../internal_/type-aliases/type-alias.GetFaqSchema.md) \>

#### Source

src/store/modules/content.ts:34

---

### fetchLandingPage()

> **fetchLandingPage**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LandingPageSchema`](../internal_/type-aliases/type-alias.LandingPageSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`LandingPageSchema`](../internal_/type-aliases/type-alias.LandingPageSchema.md) \>

#### Source

src/store/modules/content.ts:58

---

### fetchLegalData()

> **fetchLegalData**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationLegal`](../internal_/type-aliases/type-alias.ApplicationLegal.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`ApplicationLegal`](../internal_/type-aliases/type-alias.ApplicationLegal.md) \>

#### Source

src/store/modules/content.ts:42

---

### fetchNavigation()

> **fetchNavigation**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`NavigationGetResponse`](../internal_/type-aliases/type-alias.NavigationGetResponse.md) \>

#### Parameters

| Parameter | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `params`  | [`GetNavigationsParam`](../internal_/type-aliases/type-alias.GetNavigationsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`NavigationGetResponse`](../internal_/type-aliases/type-alias.NavigationGetResponse.md) \>

#### Source

src/store/modules/content.ts:14

---

### fetchScreenSaver()

> **fetchScreenSaver**(`params`): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SlideshowGetResponse`](../internal_/type-aliases/type-alias.SlideshowGetResponse.md) \>

#### Parameters

| Parameter | Type                                                                               |
| :-------- | :--------------------------------------------------------------------------------- |
| `params`  | [`GetSlideshowsParam`](../internal_/type-aliases/type-alias.GetSlideshowsParam.md) |

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`SlideshowGetResponse`](../internal_/type-aliases/type-alias.SlideshowGetResponse.md) \>

#### Source

src/store/modules/content.ts:46

---

### fetchSupportInformation()

> **fetchSupportInformation**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Support`](../internal_/type-aliases/type-alias.Support.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`Support`](../internal_/type-aliases/type-alias.Support.md) \>

#### Source

src/store/modules/content.ts:50

---

### fetchTags()

> **fetchTags**(): [`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TagsSchema`](../internal_/type-aliases/type-alias.TagsSchema.md) \>

#### Returns

[`AsyncThunkPromise`](../../theme/internal_/type-aliases/type-alias.AsyncThunkPromise.md)\< [`TagsSchema`](../internal_/type-aliases/type-alias.TagsSchema.md) \>

#### Source

src/store/modules/content.ts:38

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)

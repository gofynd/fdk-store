[fdk-store](../README.md) / [Exports](../modules.md) / [content](../modules/content.md) / default

# Class: default

[content](../modules/content.md).default

## Table of contents

### Constructors

- [constructor](content.default.md#constructor)

### Methods

- [fetchAnnouncement](content.default.md#fetchannouncement)
- [fetchAppSeo](content.default.md#fetchappseo)
- [fetchBlogData](content.default.md#fetchblogdata)
- [fetchBlogs](content.default.md#fetchblogs)
- [fetchCustomPageData](content.default.md#fetchcustompagedata)
- [fetchDataLoaders](content.default.md#fetchdataloaders)
- [fetchFaqByCategory](content.default.md#fetchfaqbycategory)
- [fetchLandingPage](content.default.md#fetchlandingpage)
- [fetchLegalData](content.default.md#fetchlegaldata)
- [fetchNavigation](content.default.md#fetchnavigation)
- [fetchScreenSaver](content.default.md#fetchscreensaver)
- [fetchSupportInformation](content.default.md#fetchsupportinformation)
- [fetchTags](content.default.md#fetchtags)

## Constructors

### constructor

• **new default**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/theme._internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/content.ts:9

## Methods

### fetchAnnouncement

▸ **fetchAnnouncement**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AnnouncementsResponseSchema`](../modules/content._internal_.md#announcementsresponseschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`AnnouncementsResponseSchema`](../modules/content._internal_.md#announcementsresponseschema)\>

#### Defined in

src/store/modules/content.ts:54

___

### fetchAppSeo

▸ **fetchAppSeo**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`SeoComponent`](../modules/content._internal_.md#seocomponent)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`SeoComponent`](../modules/content._internal_.md#seocomponent)\>

#### Defined in

src/store/modules/content.ts:18

___

### fetchBlogData

▸ **fetchBlogData**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BlogSchema`](../modules/content._internal_.md#blogschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetBlogParam`](../modules/content._internal_.md#getblogparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BlogSchema`](../modules/content._internal_.md#blogschema)\>

#### Defined in

src/store/modules/content.ts:22

___

### fetchBlogs

▸ **fetchBlogs**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BlogGetResponse`](../modules/content._internal_.md#bloggetresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetBlogsParam`](../modules/content._internal_.md#getblogsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`BlogGetResponse`](../modules/content._internal_.md#bloggetresponse)\>

#### Defined in

src/store/modules/content.ts:26

___

### fetchCustomPageData

▸ **fetchCustomPageData**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`PageSchema`](../modules/content._internal_.md#pageschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPageParam`](../modules/content._internal_.md#getpageparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`PageSchema`](../modules/content._internal_.md#pageschema)\>

#### Defined in

src/store/modules/content.ts:30

___

### fetchDataLoaders

▸ **fetchDataLoaders**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`DataLoadersSchema`](../modules/content._internal_.md#dataloadersschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`DataLoadersSchema`](../modules/content._internal_.md#dataloadersschema)\>

#### Defined in

src/store/modules/content.ts:62

___

### fetchFaqByCategory

▸ **fetchFaqByCategory**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`GetFaqSchema`](../modules/content._internal_.md#getfaqschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetFaqsByCategorySlugParam`](../modules/content._internal_.md#getfaqsbycategoryslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`GetFaqSchema`](../modules/content._internal_.md#getfaqschema)\>

#### Defined in

src/store/modules/content.ts:34

___

### fetchLandingPage

▸ **fetchLandingPage**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LandingPageSchema`](../modules/content._internal_.md#landingpageschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`LandingPageSchema`](../modules/content._internal_.md#landingpageschema)\>

#### Defined in

src/store/modules/content.ts:58

___

### fetchLegalData

▸ **fetchLegalData**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ApplicationLegal`](../modules/content._internal_.md#applicationlegal)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`ApplicationLegal`](../modules/content._internal_.md#applicationlegal)\>

#### Defined in

src/store/modules/content.ts:42

___

### fetchNavigation

▸ **fetchNavigation**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`NavigationGetResponse`](../modules/content._internal_.md#navigationgetresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetNavigationsParam`](../modules/content._internal_.md#getnavigationsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`NavigationGetResponse`](../modules/content._internal_.md#navigationgetresponse)\>

#### Defined in

src/store/modules/content.ts:14

___

### fetchScreenSaver

▸ **fetchScreenSaver**(`params`): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`SlideshowGetResponse`](../modules/content._internal_.md#slideshowgetresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetSlideshowsParam`](../modules/content._internal_.md#getslideshowsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`SlideshowGetResponse`](../modules/content._internal_.md#slideshowgetresponse)\>

#### Defined in

src/store/modules/content.ts:46

___

### fetchSupportInformation

▸ **fetchSupportInformation**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Support`](../modules/content._internal_.md#support)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`Support`](../modules/content._internal_.md#support)\>

#### Defined in

src/store/modules/content.ts:50

___

### fetchTags

▸ **fetchTags**(): [`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`TagsSchema`](../modules/content._internal_.md#tagsschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/theme._internal_.md#asyncthunkpromise)<[`TagsSchema`](../modules/content._internal_.md#tagsschema)\>

#### Defined in

src/store/modules/content.ts:38

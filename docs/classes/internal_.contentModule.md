[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / contentModule

# Class: contentModule

[<internal>](../modules/internal_.md).contentModule

## Table of contents

### Constructors

- [constructor](internal_.contentModule.md#constructor)

### Methods

- [fetchAnnouncement](internal_.contentModule.md#fetchannouncement)
- [fetchAppSeo](internal_.contentModule.md#fetchappseo)
- [fetchBlogData](internal_.contentModule.md#fetchblogdata)
- [fetchBlogs](internal_.contentModule.md#fetchblogs)
- [fetchCustomPageData](internal_.contentModule.md#fetchcustompagedata)
- [fetchDataLoaders](internal_.contentModule.md#fetchdataloaders)
- [fetchFaqByCategory](internal_.contentModule.md#fetchfaqbycategory)
- [fetchLandingPage](internal_.contentModule.md#fetchlandingpage)
- [fetchLegalData](internal_.contentModule.md#fetchlegaldata)
- [fetchNavigation](internal_.contentModule.md#fetchnavigation)
- [fetchScreenSaver](internal_.contentModule.md#fetchscreensaver)
- [fetchSupportInformation](internal_.contentModule.md#fetchsupportinformation)
- [fetchTags](internal_.contentModule.md#fetchtags)

## Constructors

### constructor

• **new contentModule**(`dispatch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | [`ThunkActionDispatch`](../modules/internal_.md#thunkactiondispatch)<`any`\> |

#### Defined in

src/store/modules/content.ts:9

## Methods

### fetchAnnouncement

▸ **fetchAnnouncement**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AnnouncementsResponseSchema`](../modules/internal_.md#announcementsresponseschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`AnnouncementsResponseSchema`](../modules/internal_.md#announcementsresponseschema)\>

#### Defined in

src/store/modules/content.ts:54

___

### fetchAppSeo

▸ **fetchAppSeo**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`SeoComponent`](../modules/internal_.md#seocomponent)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`SeoComponent`](../modules/internal_.md#seocomponent)\>

#### Defined in

src/store/modules/content.ts:18

___

### fetchBlogData

▸ **fetchBlogData**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BlogSchema`](../modules/internal_.md#blogschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetBlogParam`](../modules/internal_.md#getblogparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BlogSchema`](../modules/internal_.md#blogschema)\>

#### Defined in

src/store/modules/content.ts:22

___

### fetchBlogs

▸ **fetchBlogs**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BlogGetResponse`](../modules/internal_.md#bloggetresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetBlogsParam`](../modules/internal_.md#getblogsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`BlogGetResponse`](../modules/internal_.md#bloggetresponse)\>

#### Defined in

src/store/modules/content.ts:26

___

### fetchCustomPageData

▸ **fetchCustomPageData**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`PageSchema`](../modules/internal_.md#pageschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPageParam`](../modules/internal_.md#getpageparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`PageSchema`](../modules/internal_.md#pageschema)\>

#### Defined in

src/store/modules/content.ts:30

___

### fetchDataLoaders

▸ **fetchDataLoaders**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`DataLoadersSchema`](../modules/internal_.md#dataloadersschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`DataLoadersSchema`](../modules/internal_.md#dataloadersschema)\>

#### Defined in

src/store/modules/content.ts:62

___

### fetchFaqByCategory

▸ **fetchFaqByCategory**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`GetFaqSchema`](../modules/internal_.md#getfaqschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetFaqsByCategorySlugParam`](../modules/internal_.md#getfaqsbycategoryslugparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`GetFaqSchema`](../modules/internal_.md#getfaqschema)\>

#### Defined in

src/store/modules/content.ts:34

___

### fetchLandingPage

▸ **fetchLandingPage**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LandingPageSchema`](../modules/internal_.md#landingpageschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`LandingPageSchema`](../modules/internal_.md#landingpageschema)\>

#### Defined in

src/store/modules/content.ts:58

___

### fetchLegalData

▸ **fetchLegalData**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ApplicationLegal`](../modules/internal_.md#applicationlegal)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`ApplicationLegal`](../modules/internal_.md#applicationlegal)\>

#### Defined in

src/store/modules/content.ts:42

___

### fetchNavigation

▸ **fetchNavigation**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`NavigationGetResponse`](../modules/internal_.md#navigationgetresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetNavigationsParam`](../modules/internal_.md#getnavigationsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`NavigationGetResponse`](../modules/internal_.md#navigationgetresponse)\>

#### Defined in

src/store/modules/content.ts:14

___

### fetchScreenSaver

▸ **fetchScreenSaver**(`params`): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`SlideshowGetResponse`](../modules/internal_.md#slideshowgetresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetSlideshowsParam`](../modules/internal_.md#getslideshowsparam) |

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`SlideshowGetResponse`](../modules/internal_.md#slideshowgetresponse)\>

#### Defined in

src/store/modules/content.ts:46

___

### fetchSupportInformation

▸ **fetchSupportInformation**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Support`](../modules/internal_.md#support)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`Support`](../modules/internal_.md#support)\>

#### Defined in

src/store/modules/content.ts:50

___

### fetchTags

▸ **fetchTags**(): [`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`TagsSchema`](../modules/internal_.md#tagsschema)\>

#### Returns

[`AsyncThunkPromise`](../modules/internal_.md#asyncthunkpromise)<[`TagsSchema`](../modules/internal_.md#tagsschema)\>

#### Defined in

src/store/modules/content.ts:38

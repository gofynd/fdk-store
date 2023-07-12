[fdk-store](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Content

# Class: Content

[<internal>](../modules/internal_.md).Content

## Table of contents

### Constructors

- [constructor](internal_.Content.md#constructor)

### Properties

- [\_conf](internal_.Content.md#_conf)
- [\_relativeUrls](internal_.Content.md#_relativeurls)
- [\_urls](internal_.Content.md#_urls)

### Methods

- [getAnnouncements](internal_.Content.md#getannouncements)
- [getBlog](internal_.Content.md#getblog)
- [getBlogs](internal_.Content.md#getblogs)
- [getBlogsPaginator](internal_.Content.md#getblogspaginator)
- [getDataLoaders](internal_.Content.md#getdataloaders)
- [getFaqBySlug](internal_.Content.md#getfaqbyslug)
- [getFaqCategories](internal_.Content.md#getfaqcategories)
- [getFaqCategoryBySlug](internal_.Content.md#getfaqcategorybyslug)
- [getFaqs](internal_.Content.md#getfaqs)
- [getFaqsByCategorySlug](internal_.Content.md#getfaqsbycategoryslug)
- [getLandingPage](internal_.Content.md#getlandingpage)
- [getLegalInformation](internal_.Content.md#getlegalinformation)
- [getNavigations](internal_.Content.md#getnavigations)
- [getNavigationsPaginator](internal_.Content.md#getnavigationspaginator)
- [getPage](internal_.Content.md#getpage)
- [getPages](internal_.Content.md#getpages)
- [getPagesPaginator](internal_.Content.md#getpagespaginator)
- [getSEOConfiguration](internal_.Content.md#getseoconfiguration)
- [getSlideshow](internal_.Content.md#getslideshow)
- [getSlideshows](internal_.Content.md#getslideshows)
- [getSlideshowsPaginator](internal_.Content.md#getslideshowspaginator)
- [getSupportInformation](internal_.Content.md#getsupportinformation)
- [getTags](internal_.Content.md#gettags)
- [updateUrls](internal_.Content.md#updateurls)

## Constructors

### constructor

• **new Content**(`_conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_conf` | `any` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:3

## Properties

### \_conf

• **\_conf**: `any`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:4

___

### \_relativeUrls

• **\_relativeUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAnnouncements` | `string` |
| `getBlog` | `string` |
| `getBlogs` | `string` |
| `getDataLoaders` | `string` |
| `getFaqBySlug` | `string` |
| `getFaqCategories` | `string` |
| `getFaqCategoryBySlug` | `string` |
| `getFaqs` | `string` |
| `getFaqsByCategorySlug` | `string` |
| `getLandingPage` | `string` |
| `getLegalInformation` | `string` |
| `getNavigations` | `string` |
| `getPage` | `string` |
| `getPages` | `string` |
| `getSEOConfiguration` | `string` |
| `getSlideshow` | `string` |
| `getSlideshows` | `string` |
| `getSupportInformation` | `string` |
| `getTags` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:5

___

### \_urls

• **\_urls**: `Object`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:26

## Methods

### getAnnouncements

▸ **getAnnouncements**(`arg?`): `Promise`<[`AnnouncementsResponseSchema`](../modules/internal_.md#announcementsresponseschema)\>

**`Name`**

getAnnouncements
@summary: Get live announcements
@description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`AnnouncementsResponseSchema`](../modules/internal_.md#announcementsresponseschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:37

___

### getBlog

▸ **getBlog**(`arg?`): `Promise`<[`BlogSchema`](../modules/internal_.md#blogschema)\>

**`Name`**

getBlog
@summary: Get a blog
@description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetBlogParam`](../modules/internal_.md#getblogparam) | Arg object. |

#### Returns

`Promise`<[`BlogSchema`](../modules/internal_.md#blogschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:45

___

### getBlogs

▸ **getBlogs**(`arg?`): `Promise`<[`BlogGetResponse`](../modules/internal_.md#bloggetresponse)\>

**`Name`**

getBlogs
@summary: Get a list of blogs
@description: Use this API to get all the blogs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetBlogsParam`](../modules/internal_.md#getblogsparam) | Arg object. |

#### Returns

`Promise`<[`BlogGetResponse`](../modules/internal_.md#bloggetresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:53

___

### getBlogsPaginator

▸ **getBlogsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`BlogGetResponse`](../modules/internal_.md#bloggetresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`BlogGetResponse`](../modules/internal_.md#bloggetresponse)\>

@summary: Get a list of blogs
@description: Use this API to get all the blogs.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:61

___

### getDataLoaders

▸ **getDataLoaders**(`arg?`): `Promise`<[`DataLoadersSchema`](../modules/internal_.md#dataloadersschema)\>

**`Name`**

getDataLoaders
@summary: Get the data loaders associated with an application
@description: Use this API to get all selected data loaders of the application in the form of tags.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`DataLoadersSchema`](../modules/internal_.md#dataloadersschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:71

___

### getFaqBySlug

▸ **getFaqBySlug**(`arg?`): `Promise`<[`FaqSchema`](../modules/internal_.md#faqschema)\>

**`Name`**

getFaqBySlug
@summary: Get an FAQ
@description: Use this API to get a particular FAQ by its slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetFaqBySlugParam`](../modules/internal_.md#getfaqbyslugparam) | Arg object. |

#### Returns

`Promise`<[`FaqSchema`](../modules/internal_.md#faqschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:79

___

### getFaqCategories

▸ **getFaqCategories**(`arg?`): `Promise`<[`GetFaqCategoriesSchema`](../modules/internal_.md#getfaqcategoriesschema)\>

**`Name`**

getFaqCategories
@summary: Get a list of FAQ categories
@description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`GetFaqCategoriesSchema`](../modules/internal_.md#getfaqcategoriesschema)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:88

___

### getFaqCategoryBySlug

▸ **getFaqCategoryBySlug**(`arg?`): `Promise`<[`GetFaqCategoryBySlugSchema`](../modules/internal_.md#getfaqcategorybyslugschema)\>

**`Name`**

getFaqCategoryBySlug
@summary: Get the FAQ category
@description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetFaqCategoryBySlugParam`](../modules/internal_.md#getfaqcategorybyslugparam) | Arg object. |

#### Returns

`Promise`<[`GetFaqCategoryBySlugSchema`](../modules/internal_.md#getfaqcategorybyslugschema)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:97

___

### getFaqs

▸ **getFaqs**(`arg?`): `Promise`<[`FaqResponseSchema`](../modules/internal_.md#faqresponseschema)\>

**`Name`**

getFaqs
@summary: Get a list of FAQs
@description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`FaqResponseSchema`](../modules/internal_.md#faqresponseschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:105

___

### getFaqsByCategorySlug

▸ **getFaqsByCategorySlug**(`arg?`): `Promise`<[`GetFaqSchema`](../modules/internal_.md#getfaqschema)\>

**`Name`**

getFaqsByCategorySlug
@summary: Get FAQs using the slug of FAQ category
@description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetFaqsByCategorySlugParam`](../modules/internal_.md#getfaqsbycategoryslugparam) | Arg object. |

#### Returns

`Promise`<[`GetFaqSchema`](../modules/internal_.md#getfaqschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:113

___

### getLandingPage

▸ **getLandingPage**(`arg?`): `Promise`<[`LandingPageSchema`](../modules/internal_.md#landingpageschema)\>

**`Name`**

getLandingPage
@summary: Get the landing page
@description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`LandingPageSchema`](../modules/internal_.md#landingpageschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:121

___

### getLegalInformation

▸ **getLegalInformation**(`arg?`): `Promise`<[`ApplicationLegal`](../modules/internal_.md#applicationlegal)\>

**`Name`**

getLegalInformation
@summary: Get legal information
@description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`ApplicationLegal`](../modules/internal_.md#applicationlegal)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:129

___

### getNavigations

▸ **getNavigations**(`arg?`): `Promise`<[`NavigationGetResponse`](../modules/internal_.md#navigationgetresponse)\>

**`Name`**

getNavigations
@summary: Get the navigation
@description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetNavigationsParam`](../modules/internal_.md#getnavigationsparam) | Arg object. |

#### Returns

`Promise`<[`NavigationGetResponse`](../modules/internal_.md#navigationgetresponse)\>

-
  Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:138

___

### getNavigationsPaginator

▸ **getNavigationsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`NavigationGetResponse`](../modules/internal_.md#navigationgetresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`NavigationGetResponse`](../modules/internal_.md#navigationgetresponse)\>

@summary: Get the navigation
@description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:146

___

### getPage

▸ **getPage**(`arg?`): `Promise`<[`PageSchema`](../modules/internal_.md#pageschema)\>

**`Name`**

getPage
@summary: Get a page
@description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPageParam`](../modules/internal_.md#getpageparam) | Arg object. |

#### Returns

`Promise`<[`PageSchema`](../modules/internal_.md#pageschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:156

___

### getPages

▸ **getPages**(`arg?`): `Promise`<[`PageGetResponse`](../modules/internal_.md#pagegetresponse)\>

**`Name`**

getPages
@summary: Get all pages
@description: Use this API to get a list of pages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetPagesParam`](../modules/internal_.md#getpagesparam) | Arg object. |

#### Returns

`Promise`<[`PageGetResponse`](../modules/internal_.md#pagegetresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:164

___

### getPagesPaginator

▸ **getPagesPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`PageGetResponse`](../modules/internal_.md#pagegetresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`PageGetResponse`](../modules/internal_.md#pagegetresponse)\>

@summary: Get all pages
@description: Use this API to get a list of pages.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:172

___

### getSEOConfiguration

▸ **getSEOConfiguration**(`arg?`): `Promise`<[`SeoComponent`](../modules/internal_.md#seocomponent)\>

**`Name`**

getSEOConfiguration
@summary: Get the SEO of an application
@description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`SeoComponent`](../modules/internal_.md#seocomponent)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:182

___

### getSlideshow

▸ **getSlideshow**(`arg?`): `Promise`<[`SlideshowSchema`](../modules/internal_.md#slideshowschema)\>

**`Name`**

getSlideshow
@summary: Get a slideshow
@description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetSlideshowParam`](../modules/internal_.md#getslideshowparam) | Arg object. |

#### Returns

`Promise`<[`SlideshowSchema`](../modules/internal_.md#slideshowschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:190

___

### getSlideshows

▸ **getSlideshows**(`arg?`): `Promise`<[`SlideshowGetResponse`](../modules/internal_.md#slideshowgetresponse)\>

**`Name`**

getSlideshows
@summary: Get the slideshows
@description: Use this API to get a list of slideshows along with their details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | [`GetSlideshowsParam`](../modules/internal_.md#getslideshowsparam) | Arg object. |

#### Returns

`Promise`<[`SlideshowGetResponse`](../modules/internal_.md#slideshowgetresponse)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:198

___

### getSlideshowsPaginator

▸ **getSlideshowsPaginator**(`arg?`): [`Paginator`](internal_.Paginator.md)<[`SlideshowGetResponse`](../modules/internal_.md#slideshowgetresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `Object` | Arg object. |
| `arg.pageSize?` | `number` | The number of items to retrieve in each page. |

#### Returns

[`Paginator`](internal_.Paginator.md)<[`SlideshowGetResponse`](../modules/internal_.md#slideshowgetresponse)\>

@summary: Get the slideshows
@description: Use this API to get a list of slideshows along with their details.

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:206

___

### getSupportInformation

▸ **getSupportInformation**(`arg?`): `Promise`<[`Support`](../modules/internal_.md#support)\>

**`Name`**

getSupportInformation
@summary: Get the support information
@description: Use this API to get contact details for customer support including emails and phone numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`Support`](../modules/internal_.md#support)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:216

___

### getTags

▸ **getTags**(`arg?`): `Promise`<[`TagsSchema`](../modules/internal_.md#tagsschema)\>

**`Name`**

getTags
@summary: Get the tags associated with an application
@description: Use this API to get all the CSS and JS injected in the application in the form of tags.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg?` | `any` | Arg object. |

#### Returns

`Promise`<[`TagsSchema`](../modules/internal_.md#tagsschema)\>

- Success response

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:224

___

### updateUrls

▸ **updateUrls**(`urls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `any` |

#### Returns

`void`

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationClient.d.ts:27

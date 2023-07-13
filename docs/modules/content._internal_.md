[fdk-store](../README.md) / [Exports](../modules.md) / [content](content.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [Action](content._internal_.md#action)
- [ActionPage](content._internal_.md#actionpage)
- [AnnouncementsResponseSchema](content._internal_.md#announcementsresponseschema)
- [ApplicationLegal](content._internal_.md#applicationlegal)
- [ApplicationLegalFAQ](content._internal_.md#applicationlegalfaq)
- [Asset](content._internal_.md#asset)
- [Author](content._internal_.md#author)
- [BlogGetResponse](content._internal_.md#bloggetresponse)
- [BlogSchema](content._internal_.md#blogschema)
- [ConfigurationSchema](content._internal_.md#configurationschema)
- [ContactSchema](content._internal_.md#contactschema)
- [CreatedBySchema](content._internal_.md#createdbyschema)
- [CronSchedule](content._internal_.md#cronschedule)
- [DataLoaderSchema](content._internal_.md#dataloaderschema)
- [DataLoaderSourceSchema](content._internal_.md#dataloadersourceschema)
- [DataLoadersSchema](content._internal_.md#dataloadersschema)
- [DateMeta](content._internal_.md#datemeta)
- [Detail](content._internal_.md#detail)
- [EmailProperties](content._internal_.md#emailproperties)
- [EmailSchema](content._internal_.md#emailschema)
- [FaqSchema](content._internal_.md#faqschema)
- [GetBlogParam](content._internal_.md#getblogparam)
- [GetBlogsParam](content._internal_.md#getblogsparam)
- [GetFaqSchema](content._internal_.md#getfaqschema)
- [GetFaqsByCategorySlugParam](content._internal_.md#getfaqsbycategoryslugparam)
- [GetNavigationsParam](content._internal_.md#getnavigationsparam)
- [GetPageParam](content._internal_.md#getpageparam)
- [GetSlideshowsParam](content._internal_.md#getslideshowsparam)
- [LandingPageSchema](content._internal_.md#landingpageschema)
- [Language](content._internal_.md#language)
- [LocaleLanguage](content._internal_.md#localelanguage)
- [NavigationGetResponse](content._internal_.md#navigationgetresponse)
- [NavigationReference](content._internal_.md#navigationreference)
- [NavigationSchema](content._internal_.md#navigationschema)
- [Orientation](content._internal_.md#orientation)
- [Page](content._internal_.md#page)
- [PageSchema](content._internal_.md#pageschema)
- [PageType](content._internal_.md#pagetype)
- [PhoneProperties](content._internal_.md#phoneproperties)
- [PhoneSchema](content._internal_.md#phoneschema)
- [ResourceContent](content._internal_.md#resourcecontent)
- [SEO](content._internal_.md#seo)
- [SEOImage](content._internal_.md#seoimage)
- [ScheduleSchema](content._internal_.md#scheduleschema)
- [SeoComponent](content._internal_.md#seocomponent)
- [SeoSchema](content._internal_.md#seoschema)
- [SlideshowGetResponse](content._internal_.md#slideshowgetresponse)
- [SlideshowMedia](content._internal_.md#slideshowmedia)
- [SlideshowSchema](content._internal_.md#slideshowschema)
- [Support](content._internal_.md#support)
- [TagSchema](content._internal_.md#tagschema)
- [TagSourceSchema](content._internal_.md#tagsourceschema)
- [TagsSchema](content._internal_.md#tagsschema)

### Functions

- [Action](content._internal_.md#action-1)
- [ActionPage](content._internal_.md#actionpage-1)
- [AnnouncementsResponseSchema](content._internal_.md#announcementsresponseschema-1)
- [ApplicationLegal](content._internal_.md#applicationlegal-1)
- [ApplicationLegalFAQ](content._internal_.md#applicationlegalfaq-1)
- [Asset](content._internal_.md#asset-1)
- [Author](content._internal_.md#author-1)
- [BlogGetResponse](content._internal_.md#bloggetresponse-1)
- [BlogSchema](content._internal_.md#blogschema-1)
- [ConfigurationSchema](content._internal_.md#configurationschema-1)
- [ContactSchema](content._internal_.md#contactschema-1)
- [CreatedBySchema](content._internal_.md#createdbyschema-1)
- [CronSchedule](content._internal_.md#cronschedule-1)
- [DataLoaderSchema](content._internal_.md#dataloaderschema-1)
- [DataLoaderSourceSchema](content._internal_.md#dataloadersourceschema-1)
- [DataLoadersSchema](content._internal_.md#dataloadersschema-1)
- [DateMeta](content._internal_.md#datemeta-1)
- [Detail](content._internal_.md#detail-1)
- [EmailProperties](content._internal_.md#emailproperties-1)
- [EmailSchema](content._internal_.md#emailschema-1)
- [FaqSchema](content._internal_.md#faqschema-1)
- [GetFaqSchema](content._internal_.md#getfaqschema-1)
- [LandingPageSchema](content._internal_.md#landingpageschema-1)
- [Language](content._internal_.md#language-1)
- [LocaleLanguage](content._internal_.md#localelanguage-1)
- [NavigationGetResponse](content._internal_.md#navigationgetresponse-1)
- [NavigationReference](content._internal_.md#navigationreference-1)
- [NavigationSchema](content._internal_.md#navigationschema-1)
- [Orientation](content._internal_.md#orientation-1)
- [Page](content._internal_.md#page-1)
- [PageSchema](content._internal_.md#pageschema-1)
- [PageType](content._internal_.md#pagetype-1)
- [PhoneProperties](content._internal_.md#phoneproperties-1)
- [PhoneSchema](content._internal_.md#phoneschema-1)
- [ResourceContent](content._internal_.md#resourcecontent-1)
- [SEO](content._internal_.md#seo-1)
- [SEOImage](content._internal_.md#seoimage-1)
- [ScheduleSchema](content._internal_.md#scheduleschema-1)
- [SeoComponent](content._internal_.md#seocomponent-1)
- [SeoSchema](content._internal_.md#seoschema-1)
- [SlideshowGetResponse](content._internal_.md#slideshowgetresponse-1)
- [SlideshowMedia](content._internal_.md#slideshowmedia-1)
- [SlideshowSchema](content._internal_.md#slideshowschema-1)
- [Support](content._internal_.md#support-1)
- [TagSchema](content._internal_.md#tagschema-1)
- [TagSourceSchema](content._internal_.md#tagsourceschema-1)
- [TagsSchema](content._internal_.md#tagsschema-1)

## Type Aliases

### Action

Ƭ **Action**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `page?` | [`ActionPage`](content._internal_.md#actionpage) |
| `popup?` | [`ActionPage`](content._internal_.md#actionpage) |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:784

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:785

___

### ActionPage

Ƭ **ActionPage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params?` | `any` |
| `query?` | `any` |
| `type` | [`PageType`](content._internal_.md#pagetype) |
| `url?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:791

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:792

___

### AnnouncementsResponseSchema

Ƭ **AnnouncementsResponseSchema**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `announcements?` | `any` | - |
| `refresh_pages?` | `string`[] | - List of page slugs on which announcement should be fetched as soon as they are loaded |
| `refresh_rate?` | `number` | - Number of seconds after which api should hit again to fetch new announcements |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:832

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:833

___

### ApplicationLegal

Ƭ **ApplicationLegal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `application?` | `string` |
| `created_at?` | `string` |
| `faq?` | [`ApplicationLegalFAQ`](content._internal_.md#applicationlegalfaq)[] |
| `policy?` | `string` |
| `returns?` | `string` |
| `shipping?` | `string` |
| `tnc?` | `string` |
| `updated_at?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:847

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:848

___

### ApplicationLegalFAQ

Ƭ **ApplicationLegalFAQ**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `answer?` | `string` |
| `question?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:860

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:861

___

### Asset

Ƭ **Asset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aspect_ratio?` | `string` |
| `id?` | `string` |
| `secure_url?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:866

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:867

___

### Author

Ƭ **Author**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `designation?` | `string` |
| `id?` | `string` |
| `name?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:873

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:874

___

### BlogGetResponse

Ƭ **BlogGetResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items?` | [`BlogSchema`](content._internal_.md#blogschema)[] |
| `page?` | [`Page`](content._internal_.md#page) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:880

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:881

___

### BlogSchema

Ƭ **BlogSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `_id?` | `string` |
| `_schedule?` | [`CronSchedule`](content._internal_.md#cronschedule) |
| `application?` | `string` |
| `archived?` | `boolean` |
| `author?` | [`Author`](content._internal_.md#author) |
| `content?` | [`ResourceContent`](content._internal_.md#resourcecontent)[] |
| `date_meta?` | [`DateMeta`](content._internal_.md#datemeta) |
| `feature_image?` | [`Asset`](content._internal_.md#asset) |
| `published?` | `boolean` |
| `reading_time?` | `string` |
| `seo?` | [`SEO`](content._internal_.md#seo) |
| `slug?` | `string` |
| `tags?` | `string`[] |
| `title?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:902

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:903

___

### ConfigurationSchema

Ƭ **ConfigurationSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `sleep_time?` | `number` |
| `slide_direction?` | `string` |
| `start_on_launch?` | `boolean` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:954

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:955

___

### ContactSchema

Ƭ **ContactSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email?` | [`EmailSchema`](content._internal_.md#emailschema) |
| `phone?` | [`PhoneSchema`](content._internal_.md#phoneschema) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:962

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:963

___

### CreatedBySchema

Ƭ **CreatedBySchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:992

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:993

___

### CronSchedule

Ƭ **CronSchedule**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cron?` | `string` |
| `duration?` | `number` |
| `end?` | `string` |
| `start?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1035

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1036

___

### DataLoaderSchema

Ƭ **DataLoaderSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__source?` | [`DataLoaderSourceSchema`](content._internal_.md#dataloadersourceschema) |
| `_id?` | `string` |
| `content?` | `string` |
| `name?` | `string` |
| `operation_id?` | `string` |
| `service?` | `string` |
| `type?` | `string` |
| `url?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1092

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1093

___

### DataLoaderSourceSchema

Ƭ **DataLoaderSourceSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `string` |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1104

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1105

___

### DataLoadersSchema

Ƭ **DataLoadersSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items?` | [`DataLoaderSchema`](content._internal_.md#dataloaderschema)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1110

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1111

___

### DateMeta

Ƭ **DateMeta**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created_on?` | `string` |
| `modified_on?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1115

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1116

___

### Detail

Ƭ **Detail**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `image_url?` | `string` |
| `title?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1126

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1127

___

### EmailProperties

Ƭ **EmailProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1141

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1142

___

### EmailSchema

Ƭ **EmailSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | `boolean` |
| `email?` | [`EmailProperties`](content._internal_.md#emailproperties)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1147

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1148

___

### FaqSchema

Ƭ **FaqSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `answer?` | `string` |
| `application?` | `string` |
| `question?` | `string` |
| `slug?` | `string` |
| `tags?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1178

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1179

___

### GetBlogParam

Ƭ **GetBlogParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootId?` | `string` | - ID given to the HTML element |
| `slug` | `string` | - A short, human-readable, URL-friendly identifier of a blog. You can get slug value from the endpoint /service/application/content/v1.0/blogs/. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator.d.ts:116

___

### GetBlogsParam

Ƭ **GetBlogsParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageNo?` | `number` | - The page number to navigate through the given set of results. Default value is 1. |
| `pageSize?` | `number` | - The number of items to retrieve in each page. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator.d.ts:128

___

### GetFaqSchema

Ƭ **GetFaqSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `faqs?` | [`FaqSchema`](content._internal_.md#faqschema)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1209

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1210

___

### GetFaqsByCategorySlugParam

Ƭ **GetFaqsByCategorySlugParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | - A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator.d.ts:155

___

### GetNavigationsParam

Ƭ **GetNavigationsParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageNo?` | `number` | - The page number to navigate through the given set of results. Default value is 1. |
| `pageSize?` | `number` | - The number of items to retrieve in each page. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator.d.ts:163

___

### GetPageParam

Ƭ **GetPageParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootId?` | `string` | - ID given to the HTML element |
| `slug` | `string` | - A short, human-readable, URL-friendly identifier of a page. You can get slug value from the endpoint /service/application/content/v2.0/pages/. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator.d.ts:174

___

### GetSlideshowsParam

Ƭ **GetSlideshowsParam**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageNo?` | `number` | - The page number to navigate through the given set of results. Default value is 1. |
| `pageSize?` | `number` | - The number of items to retrieve in each page. |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationValidator.d.ts:205

___

### LandingPageSchema

Ƭ **LandingPageSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `_id?` | `string` |
| `action?` | [`Action`](content._internal_.md#action) |
| `application?` | `string` |
| `archived?` | `boolean` |
| `created_by?` | [`CreatedBySchema`](content._internal_.md#createdbyschema) |
| `date_meta?` | [`DateMeta`](content._internal_.md#datemeta) |
| `platform?` | `string`[] |
| `slug?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1237

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1238

___

### Language

Ƭ **Language**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1250

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1251

___

### LocaleLanguage

Ƭ **LocaleLanguage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ar?` | [`Language`](content._internal_.md#language) |
| `en_us?` | [`Language`](content._internal_.md#language) |
| `hi?` | [`Language`](content._internal_.md#language) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1255

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1256

___

### NavigationGetResponse

Ƭ **NavigationGetResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items?` | [`NavigationSchema`](content._internal_.md#navigationschema)[] |
| `page?` | [`Page`](content._internal_.md#page) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1276

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1277

___

### NavigationReference

Ƭ **NavigationReference**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_locale_language?` | [`LocaleLanguage`](content._internal_.md#localelanguage) |
| `acl?` | `string`[] |
| `action?` | [`Action`](content._internal_.md#action) |
| `active?` | `boolean` |
| `display?` | `string` |
| `image?` | `string` |
| `sort_order?` | `number` |
| `sub_navigation?` | [`NavigationReference`](content._internal_.md#navigationreference)[] |
| `tags?` | `string`[] |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1282

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1283

___

### NavigationSchema

Ƭ **NavigationSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `application?` | `string` |
| `archived?` | `boolean` |
| `created_by?` | [`CreatedBySchema`](content._internal_.md#createdbyschema) |
| `date_meta?` | [`DateMeta`](content._internal_.md#datemeta) |
| `name?` | `string` |
| `navigation?` | [`NavigationReference`](content._internal_.md#navigationreference)[] |
| `orientation?` | [`Orientation`](content._internal_.md#orientation) |
| `platform?` | `string`[] |
| `slug?` | `string` |
| `version?` | `number` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1305

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1306

___

### Orientation

Ƭ **Orientation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `landscape?` | `string`[] |
| `portrait?` | `string`[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1326

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1327

___

### Page

Ƭ **Page**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `current?` | `number` |
| `has_next?` | `boolean` |
| `has_previous?` | `boolean` |
| `item_total?` | `number` |
| `next_id?` | `string` |
| `size?` | `number` |
| `type` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1332

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1333

___

### PageSchema

Ƭ **PageSchema**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_custom_json?` | `any` | - |
| `_id?` | `string` | - |
| `_schedule?` | [`ScheduleSchema`](content._internal_.md#scheduleschema) | - |
| `application?` | `string` | - |
| `archived?` | `boolean` | - |
| `component_ids?` | `string`[] | - Components can be used to store multiple components |
| `content?` | `any`[] | - |
| `content_path?` | `string` | - |
| `created_by?` | [`CreatedBySchema`](content._internal_.md#createdbyschema) | - |
| `date_meta?` | [`DateMeta`](content._internal_.md#datemeta) | - |
| `description?` | `string` | - |
| `feature_image?` | [`Asset`](content._internal_.md#asset) | - |
| `orientation?` | `string` | - |
| `page_meta?` | `any`[] | - |
| `platform?` | `string` | - |
| `published?` | `boolean` | - |
| `seo?` | [`SEO`](content._internal_.md#seo) | - |
| `slug?` | `string` | - |
| `tags?` | `string`[] | - |
| `title?` | `string` | - |
| `type?` | `string` | - |
| `visibility?` | `any` | - |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1390

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1391

___

### PageType

Ƭ **PageType**: ``"about-us"`` \| ``"addresses"`` \| ``"blog"`` \| ``"brands"`` \| ``"cards"`` \| ``"cart"`` \| ``"categories"`` \| ``"brand"`` \| ``"category"`` \| ``"collection"`` \| ``"collections"`` \| ``"contact-us"`` \| ``"external"`` \| ``"faq"`` \| ``"freshchat"`` \| ``"home"`` \| ``"notification-settings"`` \| ``"orders"`` \| ``"page"`` \| ``"policy"`` \| ``"product"`` \| ``"product-request"`` \| ``"products"`` \| ``"profile"`` \| ``"profile-order-shipment"`` \| ``"profile-basic"`` \| ``"profile-company"`` \| ``"profile-emails"`` \| ``"profile-phones"`` \| ``"rate-us"`` \| ``"refer-earn"`` \| ``"settings"`` \| ``"shared-cart"`` \| ``"tnc"`` \| ``"track-order"`` \| ``"wishlist"`` \| ``"sections"`` \| ``"form"`` \| ``"cart-delivery"`` \| ``"cart-payment"`` \| ``"cart-review"`` \| ``"login"`` \| ``"register"`` \| ``"shipping-policy"`` \| ``"return-policy"`` \| ``"order-status"``

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1627

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1628

___

### PhoneProperties

Ƭ **PhoneProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `key?` | `string` |
| `number?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1456

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1457

___

### PhoneSchema

Ƭ **PhoneSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | `boolean` |
| `phone?` | [`PhoneProperties`](content._internal_.md#phoneproperties)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1463

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1464

___

### ResourceContent

Ƭ **ResourceContent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `value?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1474

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1475

___

### SEO

Ƭ **SEO**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `image?` | [`SEOImage`](content._internal_.md#seoimage) |
| `title?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1495

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1496

___

### SEOImage

Ƭ **SEOImage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1507

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1508

___

### ScheduleSchema

Ƭ **ScheduleSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cron?` | `string` |
| `duration?` | `number` |
| `end?` | `string` |
| `next_schedule?` | `any`[] |
| `start?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1480

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1481

___

### SeoComponent

Ƭ **SeoComponent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `seo?` | [`SeoSchema`](content._internal_.md#seoschema) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1502

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1503

___

### SeoSchema

Ƭ **SeoSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `app?` | `string` |
| `cannonical_enabled?` | `boolean` |
| `created_at?` | `string` |
| `custom_meta_tags?` | `any`[] |
| `details?` | [`Detail`](content._internal_.md#detail) |
| `robots_txt?` | `string` |
| `sitemap_enabled?` | `boolean` |
| `updated_at?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1512

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1513

___

### SlideshowGetResponse

Ƭ **SlideshowGetResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items?` | [`SlideshowSchema`](content._internal_.md#slideshowschema)[] |
| `page?` | [`Page`](content._internal_.md#page) |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1531

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1532

___

### SlideshowMedia

Ƭ **SlideshowMedia**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | [`Action`](content._internal_.md#action) |
| `auto_decide_duration?` | `boolean` |
| `bg_color?` | `string` |
| `duration?` | `number` |
| `type?` | `string` |
| `url?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1537

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1538

___

### SlideshowSchema

Ƭ **SlideshowSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_custom_json?` | `any` |
| `_id?` | `string` |
| `active?` | `boolean` |
| `application?` | `string` |
| `archived?` | `boolean` |
| `configuration?` | [`ConfigurationSchema`](content._internal_.md#configurationschema) |
| `date_meta?` | [`DateMeta`](content._internal_.md#datemeta) |
| `media?` | [`SlideshowMedia`](content._internal_.md#slideshowmedia)[] |
| `platform?` | `string` |
| `slug?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1556

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1557

___

### Support

Ƭ **Support**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `application?` | `string` |
| `config_type?` | `string` |
| `contact?` | [`ContactSchema`](content._internal_.md#contactschema) |
| `created?` | `boolean` |
| `created_at?` | `string` |
| `updated_at?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1570

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1571

___

### TagSchema

Ƭ **TagSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__source?` | [`TagSourceSchema`](content._internal_.md#tagsourceschema) |
| `_id?` | `string` |
| `attributes?` | `any` |
| `content?` | `string` |
| `name?` | `string` |
| `pages?` | `any`[] |
| `position?` | `string` |
| `sub_type?` | `string` |
| `type?` | `string` |
| `url?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1586

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1587

___

### TagSourceSchema

Ƭ **TagSourceSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `string` |
| `type?` | `string` |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1600

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1601

___

### TagsSchema

Ƭ **TagsSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id?` | `string` |
| `application?` | `string` |
| `tags?` | [`TagSchema`](content._internal_.md#tagschema)[] |

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1606

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1607

## Functions

### Action

▸ **Action**(): [`Action`](content._internal_.md#action)

#### Returns

[`Action`](content._internal_.md#action)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:784

___

### ActionPage

▸ **ActionPage**(): [`ActionPage`](content._internal_.md#actionpage)

#### Returns

[`ActionPage`](content._internal_.md#actionpage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:791

___

### AnnouncementsResponseSchema

▸ **AnnouncementsResponseSchema**(): [`AnnouncementsResponseSchema`](content._internal_.md#announcementsresponseschema)

#### Returns

[`AnnouncementsResponseSchema`](content._internal_.md#announcementsresponseschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:832

___

### ApplicationLegal

▸ **ApplicationLegal**(): [`ApplicationLegal`](content._internal_.md#applicationlegal)

#### Returns

[`ApplicationLegal`](content._internal_.md#applicationlegal)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:847

___

### ApplicationLegalFAQ

▸ **ApplicationLegalFAQ**(): [`ApplicationLegalFAQ`](content._internal_.md#applicationlegalfaq)

#### Returns

[`ApplicationLegalFAQ`](content._internal_.md#applicationlegalfaq)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:860

___

### Asset

▸ **Asset**(): [`Asset`](content._internal_.md#asset)

#### Returns

[`Asset`](content._internal_.md#asset)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:866

___

### Author

▸ **Author**(): [`Author`](content._internal_.md#author)

#### Returns

[`Author`](content._internal_.md#author)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:873

___

### BlogGetResponse

▸ **BlogGetResponse**(): [`BlogGetResponse`](content._internal_.md#bloggetresponse)

#### Returns

[`BlogGetResponse`](content._internal_.md#bloggetresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:880

___

### BlogSchema

▸ **BlogSchema**(): [`BlogSchema`](content._internal_.md#blogschema)

#### Returns

[`BlogSchema`](content._internal_.md#blogschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:902

___

### ConfigurationSchema

▸ **ConfigurationSchema**(): [`ConfigurationSchema`](content._internal_.md#configurationschema)

#### Returns

[`ConfigurationSchema`](content._internal_.md#configurationschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:954

___

### ContactSchema

▸ **ContactSchema**(): [`ContactSchema`](content._internal_.md#contactschema)

#### Returns

[`ContactSchema`](content._internal_.md#contactschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:962

___

### CreatedBySchema

▸ **CreatedBySchema**(): [`CreatedBySchema`](content._internal_.md#createdbyschema)

#### Returns

[`CreatedBySchema`](content._internal_.md#createdbyschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:992

___

### CronSchedule

▸ **CronSchedule**(): [`CronSchedule`](content._internal_.md#cronschedule)

#### Returns

[`CronSchedule`](content._internal_.md#cronschedule)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1035

___

### DataLoaderSchema

▸ **DataLoaderSchema**(): [`DataLoaderSchema`](content._internal_.md#dataloaderschema)

#### Returns

[`DataLoaderSchema`](content._internal_.md#dataloaderschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1092

___

### DataLoaderSourceSchema

▸ **DataLoaderSourceSchema**(): [`DataLoaderSourceSchema`](content._internal_.md#dataloadersourceschema)

#### Returns

[`DataLoaderSourceSchema`](content._internal_.md#dataloadersourceschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1104

___

### DataLoadersSchema

▸ **DataLoadersSchema**(): [`DataLoadersSchema`](content._internal_.md#dataloadersschema)

#### Returns

[`DataLoadersSchema`](content._internal_.md#dataloadersschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1110

___

### DateMeta

▸ **DateMeta**(): [`DateMeta`](content._internal_.md#datemeta)

#### Returns

[`DateMeta`](content._internal_.md#datemeta)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1115

___

### Detail

▸ **Detail**(): [`Detail`](content._internal_.md#detail)

#### Returns

[`Detail`](content._internal_.md#detail)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1126

___

### EmailProperties

▸ **EmailProperties**(): [`EmailProperties`](content._internal_.md#emailproperties)

#### Returns

[`EmailProperties`](content._internal_.md#emailproperties)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1141

___

### EmailSchema

▸ **EmailSchema**(): [`EmailSchema`](content._internal_.md#emailschema)

#### Returns

[`EmailSchema`](content._internal_.md#emailschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1147

___

### FaqSchema

▸ **FaqSchema**(): [`FaqSchema`](content._internal_.md#faqschema)

#### Returns

[`FaqSchema`](content._internal_.md#faqschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1178

___

### GetFaqSchema

▸ **GetFaqSchema**(): [`GetFaqSchema`](content._internal_.md#getfaqschema)

#### Returns

[`GetFaqSchema`](content._internal_.md#getfaqschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1209

___

### LandingPageSchema

▸ **LandingPageSchema**(): [`LandingPageSchema`](content._internal_.md#landingpageschema)

#### Returns

[`LandingPageSchema`](content._internal_.md#landingpageschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1237

___

### Language

▸ **Language**(): [`Language`](content._internal_.md#language)

#### Returns

[`Language`](content._internal_.md#language)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1250

___

### LocaleLanguage

▸ **LocaleLanguage**(): [`LocaleLanguage`](content._internal_.md#localelanguage)

#### Returns

[`LocaleLanguage`](content._internal_.md#localelanguage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1255

___

### NavigationGetResponse

▸ **NavigationGetResponse**(): [`NavigationGetResponse`](content._internal_.md#navigationgetresponse)

#### Returns

[`NavigationGetResponse`](content._internal_.md#navigationgetresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1276

___

### NavigationReference

▸ **NavigationReference**(): [`NavigationReference`](content._internal_.md#navigationreference)

#### Returns

[`NavigationReference`](content._internal_.md#navigationreference)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1282

___

### NavigationSchema

▸ **NavigationSchema**(): [`NavigationSchema`](content._internal_.md#navigationschema)

#### Returns

[`NavigationSchema`](content._internal_.md#navigationschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1305

___

### Orientation

▸ **Orientation**(): [`Orientation`](content._internal_.md#orientation)

#### Returns

[`Orientation`](content._internal_.md#orientation)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1326

___

### Page

▸ **Page**(): [`Page`](content._internal_.md#page)

#### Returns

[`Page`](content._internal_.md#page)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1332

___

### PageSchema

▸ **PageSchema**(): [`PageSchema`](content._internal_.md#pageschema)

#### Returns

[`PageSchema`](content._internal_.md#pageschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1390

___

### PageType

▸ **PageType**(): [`PageType`](content._internal_.md#pagetype)

Enum: PageType Used By: Content

#### Returns

[`PageType`](content._internal_.md#pagetype)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1627

___

### PhoneProperties

▸ **PhoneProperties**(): [`PhoneProperties`](content._internal_.md#phoneproperties)

#### Returns

[`PhoneProperties`](content._internal_.md#phoneproperties)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1456

___

### PhoneSchema

▸ **PhoneSchema**(): [`PhoneSchema`](content._internal_.md#phoneschema)

#### Returns

[`PhoneSchema`](content._internal_.md#phoneschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1463

___

### ResourceContent

▸ **ResourceContent**(): [`ResourceContent`](content._internal_.md#resourcecontent)

#### Returns

[`ResourceContent`](content._internal_.md#resourcecontent)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1474

___

### SEO

▸ **SEO**(): [`SEO`](content._internal_.md#seo)

#### Returns

[`SEO`](content._internal_.md#seo)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1495

___

### SEOImage

▸ **SEOImage**(): [`SEOImage`](content._internal_.md#seoimage)

#### Returns

[`SEOImage`](content._internal_.md#seoimage)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1507

___

### ScheduleSchema

▸ **ScheduleSchema**(): [`ScheduleSchema`](content._internal_.md#scheduleschema)

#### Returns

[`ScheduleSchema`](content._internal_.md#scheduleschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1480

___

### SeoComponent

▸ **SeoComponent**(): [`SeoComponent`](content._internal_.md#seocomponent)

#### Returns

[`SeoComponent`](content._internal_.md#seocomponent)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1502

___

### SeoSchema

▸ **SeoSchema**(): [`SeoSchema`](content._internal_.md#seoschema)

#### Returns

[`SeoSchema`](content._internal_.md#seoschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1512

___

### SlideshowGetResponse

▸ **SlideshowGetResponse**(): [`SlideshowGetResponse`](content._internal_.md#slideshowgetresponse)

#### Returns

[`SlideshowGetResponse`](content._internal_.md#slideshowgetresponse)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1531

___

### SlideshowMedia

▸ **SlideshowMedia**(): [`SlideshowMedia`](content._internal_.md#slideshowmedia)

#### Returns

[`SlideshowMedia`](content._internal_.md#slideshowmedia)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1537

___

### SlideshowSchema

▸ **SlideshowSchema**(): [`SlideshowSchema`](content._internal_.md#slideshowschema)

#### Returns

[`SlideshowSchema`](content._internal_.md#slideshowschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1556

___

### Support

▸ **Support**(): [`Support`](content._internal_.md#support)

#### Returns

[`Support`](content._internal_.md#support)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1570

___

### TagSchema

▸ **TagSchema**(): [`TagSchema`](content._internal_.md#tagschema)

#### Returns

[`TagSchema`](content._internal_.md#tagschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1586

___

### TagSourceSchema

▸ **TagSourceSchema**(): [`TagSourceSchema`](content._internal_.md#tagsourceschema)

#### Returns

[`TagSourceSchema`](content._internal_.md#tagsourceschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1600

___

### TagsSchema

▸ **TagsSchema**(): [`TagsSchema`](content._internal_.md#tagsschema)

#### Returns

[`TagsSchema`](content._internal_.md#tagsschema)

#### Defined in

node_modules/fdk-client-javascript/sdk/application/Content/ContentApplicationModel.d.ts:1606

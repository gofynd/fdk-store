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

src/store/modules/content.ts:6

## Methods

### fetchAnnouncement

▸ **fetchAnnouncement**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:51

___

### fetchAppSeo

▸ **fetchAppSeo**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:15

___

### fetchBlogData

▸ **fetchBlogData**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.slug` | `string` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:19

___

### fetchBlogs

▸ **fetchBlogs**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.pageNo` | `number` |
| `params.pageSize` | `number` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:23

___

### fetchCustomPageData

▸ **fetchCustomPageData**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.rootId` | `string` |
| `params.slug` | `string` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:27

___

### fetchDataLoaders

▸ **fetchDataLoaders**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:59

___

### fetchFaqByCategory

▸ **fetchFaqByCategory**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.slug` | `string` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:31

___

### fetchLandingPage

▸ **fetchLandingPage**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:55

___

### fetchLegalData

▸ **fetchLegalData**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:39

___

### fetchNavigation

▸ **fetchNavigation**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:11

___

### fetchScreenSaver

▸ **fetchScreenSaver**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:43

___

### fetchSupportInformation

▸ **fetchSupportInformation**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:47

___

### fetchTags

▸ **fetchTags**(): `any`

#### Returns

`any`

#### Defined in

src/store/modules/content.ts:35

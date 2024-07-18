import { isRunningOnClient } from "./utils";
export const FPI_EVENTS = {
    LOG_IN: {
        eventName: 'user.login',
        payloadCreator: (result, param, store) => {
            var _a;
            let user = result.payload.user;
            return {
                user_id: (user === null || user === void 0 ? void 0 : user.user_id) || (user === null || user === void 0 ? void 0 : user._id),
                gender: user === null || user === void 0 ? void 0 : user.gender,
                email: user === null || user === void 0 ? void 0 : user.emails,
                phone_number: (_a = user === null || user === void 0 ? void 0 : user.phone_numbers) === null || _a === void 0 ? void 0 : _a.phone,
            };
        }
    },
    LOG_OUT: {
        eventName: 'user.logout',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b;
            let user = store.auth.user_data.user;
            return {
                user_id: oldStore === null || oldStore === void 0 ? void 0 : oldStore.user_id,
                phone: (_a = oldStore === null || oldStore === void 0 ? void 0 : oldStore.phone_numbers) === null || _a === void 0 ? void 0 : _a.phone,
                email: (_b = oldStore === null || oldStore === void 0 ? void 0 : oldStore.emails) === null || _b === void 0 ? void 0 : _b.email,
            };
        }
    },
    PROFILE_UPDATE: {
        eventName: 'user.update',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            return {
                gender: (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.gender,
                email: (_c = result.payload) === null || _c === void 0 ? void 0 : _c.email,
                phone_number: (_d = result.payload) === null || _d === void 0 ? void 0 : _d.mobile,
                user_id: (_f = (_e = result.payload) === null || _e === void 0 ? void 0 : _e.user) === null || _f === void 0 ? void 0 : _f._id
            };
        }
    },
    PRODUCT_LIST_VIEW: {
        eventName: 'product_list.view',
        payloadCreator: (result, param, store) => {
            var _a, _b;
            return { items: (_b = (_a = result === null || result === void 0 ? void 0 : result.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.items };
        }
    },
    COLLECTION_LIST_VIEW: {
        eventName: 'collection_list.view',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b;
            return {
                name: (_a = result.payload) === null || _a === void 0 ? void 0 : _a.name,
                slug: (_b = result.payload) === null || _b === void 0 ? void 0 : _b.slug
            };
        }
    },
    PRODUCT_LIST_CLICK: {
        eventName: 'product_list.click',
        payloadCreator: (store) => {
            return store;
        }
    },
    PRODUCT_FILTER: {
        eventName: 'product_list.filter',
        payloadCreator: (store) => {
            return store;
        }
    },
    PRODUCT_SORT: {
        eventName: 'product_list.sort',
        payloadCreator: (store) => {
            return store;
        }
    },
    PRODUCT_DETAIL_PAGE_VIEW: {
        eventName: 'product.view',
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
            return {
                product: {
                    uid: (_a = result === null || result === void 0 ? void 0 : result.payload) === null || _a === void 0 ? void 0 : _a.uid,
                    name: (_b = result === null || result === void 0 ? void 0 : result.payload) === null || _b === void 0 ? void 0 : _b.name,
                    item_code: (_c = result === null || result === void 0 ? void 0 : result.payload) === null || _c === void 0 ? void 0 : _c.item_code,
                    brand: {
                        uid: (_e = (_d = result === null || result === void 0 ? void 0 : result.payload) === null || _d === void 0 ? void 0 : _d.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: (_g = (_f = result === null || result === void 0 ? void 0 : result.payload) === null || _f === void 0 ? void 0 : _f.brand) === null || _g === void 0 ? void 0 : _g.name,
                    },
                    category: {
                        uid: (_k = (_j = (_h = result === null || result === void 0 ? void 0 : result.payload) === null || _h === void 0 ? void 0 : _h.categories) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.uid,
                        name: (_o = (_m = (_l = result === null || result === void 0 ? void 0 : result.payload) === null || _l === void 0 ? void 0 : _l.categories) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.name,
                    },
                    price: (_q = (_p = store.product.product_meta) === null || _p === void 0 ? void 0 : _p.price) === null || _q === void 0 ? void 0 : _q.effective,
                    sizes: (_s = (_r = store.product.product_meta) === null || _r === void 0 ? void 0 : _r.sizes) === null || _s === void 0 ? void 0 : _s.map((s) => ({
                        value: s === null || s === void 0 ? void 0 : s.value,
                        is_available: s === null || s === void 0 ? void 0 : s.is_available,
                        quantity: s === null || s === void 0 ? void 0 : s.quantity,
                    })),
                    l1_category: (_v = (_u = (_t = result === null || result === void 0 ? void 0 : result.payload) === null || _t === void 0 ? void 0 : _t.category_map) === null || _u === void 0 ? void 0 : _u.l1) === null || _v === void 0 ? void 0 : _v.name,
                    l3_category: (_y = (_x = (_w = result === null || result === void 0 ? void 0 : result.payload) === null || _w === void 0 ? void 0 : _w.category_map) === null || _x === void 0 ? void 0 : _x.l3) === null || _y === void 0 ? void 0 : _y.name,
                }
            };
        }
    },
    NOTIFY_PRODUCT: {
        eventName: 'notify.product',
        payloadCreator: (store) => {
            return store;
        }
    },
    ADD_TO_COMPARE: {
        eventName: 'compare.add',
        payloadCreator: (store) => {
            return store;
        }
    },
    REMOVE_FROM_COMPARE: {
        eventName: 'compare.remove',
        payloadCreator: (store) => {
            return store;
        }
    },
    ADD_TO_WISHLIST: {
        eventName: 'wishlist.add',
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const allItems = [
                ...((_d = (_c = (_b = (_a = store.products) === null || _a === void 0 ? void 0 : _a.product_lists) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.items) !== null && _d !== void 0 ? _d : []),
                ...((_g = (_f = (_e = store.collection) === null || _e === void 0 ? void 0 : _e.item) === null || _f === void 0 ? void 0 : _f.items) !== null && _g !== void 0 ? _g : []),
                ...(((_h = store.product) === null || _h === void 0 ? void 0 : _h.product_details) ? [store.product.product_details] : []),
            ];
            const collectionId = ((_j = param[0]) === null || _j === void 0 ? void 0 : _j.collectionId) || "";
            const item = allItems === null || allItems === void 0 ? void 0 : allItems.find((item) => item.uid == collectionId);
            return { item };
        }
    },
    REMOVE_FROM_WISHLIST: {
        eventName: 'wishlist.remove',
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const allItems = [
                ...((_d = (_c = (_b = (_a = store.products) === null || _a === void 0 ? void 0 : _a.product_lists) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.items) !== null && _d !== void 0 ? _d : []),
                ...((_g = (_f = (_e = store.collection) === null || _e === void 0 ? void 0 : _e.item) === null || _f === void 0 ? void 0 : _f.items) !== null && _g !== void 0 ? _g : []),
                ...(((_h = store.product) === null || _h === void 0 ? void 0 : _h.product_details) ? [store.product.product_details] : []),
            ];
            const collectionId = ((_j = param[0]) === null || _j === void 0 ? void 0 : _j.collectionId) || "";
            const item = allItems === null || allItems === void 0 ? void 0 : allItems.find((item) => item.uid == collectionId);
            return { item };
        }
    },
    VIEW_CART: {
        eventName: 'cart.view',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c;
            const items = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.items;
            let allProducts = items === null || items === void 0 ? void 0 : items.map((item) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                const { article, availability, product, price, discount } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: ((_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name) ||
                            ((_g = product === null || product === void 0 ? void 0 : product.attributes) === null || _g === void 0 ? void 0 : _g.brand_name),
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    quantity: {
                        current: item === null || item === void 0 ? void 0 : item.quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: (_h = article === null || article === void 0 ? void 0 : article.store) === null || _h === void 0 ? void 0 : _h.uid,
                    },
                    seller: {
                        uid: (_j = article === null || article === void 0 ? void 0 : article.seller) === null || _j === void 0 ? void 0 : _j.uid,
                    },
                    size: article === null || article === void 0 ? void 0 : article.size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    discount: discount,
                };
            });
            return {
                cart_id: (_b = result.payload) === null || _b === void 0 ? void 0 : _b.id,
                products: allProducts,
                breakup_values_raw: (_c = result.payload) === null || _c === void 0 ? void 0 : _c.breakup_values
            };
        }
    },
    ADD_TO_CART: {
        eventName: 'cart.newProduct',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e;
            const allProducts = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.items;
            let productdata = (_c = param === null || param === void 0 ? void 0 : param.map) === null || _c === void 0 ? void 0 : _c.call(param, (pro) => {
                var _a, _b, _c, _d, _e, _f, _g;
                const item = allProducts === null || allProducts === void 0 ? void 0 : allProducts.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) == pro.items[0].item_id; });
                const { article, availability, product, price, discount, quantity, } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: ((_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name) ||
                            ((_g = product === null || product === void 0 ? void 0 : product.attributes) === null || _g === void 0 ? void 0 : _g.brand_name),
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    quantity: {
                        current: quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: pro === null || pro === void 0 ? void 0 : pro.store_id,
                    },
                    seller: {
                        uid: pro === null || pro === void 0 ? void 0 : pro.seller_id,
                    },
                    size: pro === null || pro === void 0 ? void 0 : pro.item_size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    discount: discount,
                };
            });
            return {
                cart_id: (_e = (_d = result.payload) === null || _d === void 0 ? void 0 : _d.cart) === null || _e === void 0 ? void 0 : _e.id,
                products: productdata
            };
        }
    },
    REMOVE_FROM_CART: {
        eventName: 'cart.remove',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            const allProducts = (_d = (_c = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.map((item) => item === null || item === void 0 ? void 0 : item.product)) !== null && _d !== void 0 ? _d : [];
            return {
                cart_id: (_f = (_e = result.payload) === null || _e === void 0 ? void 0 : _e.cart) === null || _f === void 0 ? void 0 : _f.id,
                products: allProducts
            };
        }
    },
    UPDATE_CART: {
        eventName: 'cart.update',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d;
            const allItems = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.items;
            let data = param === null || param === void 0 ? void 0 : param.map(({ items }) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                if (!allItems)
                    return; // Added check for allItems being undefined or null
                const item = allItems.find((i) => { var _a, _b; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) === ((_b = items[0]) === null || _b === void 0 ? void 0 : _b.item_id); }); // Changed == to === for strict equality check
                if (!item)
                    return; // Added check for item being undefined
                const { article, availability, product, price, price_per_unit, quantity: oldQuantity, } = item;
                const operation = oldQuantity < ((_a = items[0]) === null || _a === void 0 ? void 0 : _a.quantity) ? 'increment_quantity' : 'decrement_quantity';
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_c = (_b = product === null || product === void 0 ? void 0 : product.categories) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.uid,
                        name: (_e = (_d = product === null || product === void 0 ? void 0 : product.categories) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.name,
                    },
                    brand: {
                        uid: (_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.uid,
                        name: ((_g = product === null || product === void 0 ? void 0 : product.brand) === null || _g === void 0 ? void 0 : _g.name) || ((_h = product === null || product === void 0 ? void 0 : product.attributes) === null || _h === void 0 ? void 0 : _h.brand_name),
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    price_per_unit: price_per_unit,
                    quantity: {
                        current: (_j = items[0]) === null || _j === void 0 ? void 0 : _j.quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: (_k = article === null || article === void 0 ? void 0 : article.store) === null || _k === void 0 ? void 0 : _k.uid,
                    },
                    seller: {
                        uid: (_l = article === null || article === void 0 ? void 0 : article.seller) === null || _l === void 0 ? void 0 : _l.uid,
                    },
                    size: (_m = items[0]) === null || _m === void 0 ? void 0 : _m.item_size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                };
            });
            return {
                cart_id: (_d = (_c = result.payload) === null || _c === void 0 ? void 0 : _c.cart) === null || _d === void 0 ? void 0 : _d.id,
                products: data,
                operation: "increment_quantity"
            };
        }
    },
    ORDER_CHECKOUT: {
        eventName: 'order.checkout',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            const allProducts = (_b = (_a = store.cart) === null || _a === void 0 ? void 0 : _a.cart_items) === null || _b === void 0 ? void 0 : _b.items;
            let data = allProducts === null || allProducts === void 0 ? void 0 : allProducts.map((item) => {
                var _a, _b, _c, _d, _e, _f;
                const { article, availability, product, price, quantity } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: (_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name,
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    quantity: {
                        current: quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    size: article === null || article === void 0 ? void 0 : article.size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    discount: product.discount,
                };
            });
            return {
                cart_id: (_d = (_c = store.cart) === null || _c === void 0 ? void 0 : _c.cart_items) === null || _d === void 0 ? void 0 : _d.cart_id,
                products: data,
                breakup_values: (_f = (_e = store.cart) === null || _e === void 0 ? void 0 : _e.cart_items) === null || _f === void 0 ? void 0 : _f.breakup_values
            };
        }
    },
    ADD_PAYMENT_INFORMATION: {
        eventName: 'order.payment_information',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return {
                value: (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.breakup_values) === null || _b === void 0 ? void 0 : _b.display.filter((value) => value.display === 'Total')[0].value,
                coupon: {
                    coupon_code: (_e = (_d = (_c = result.payload) === null || _c === void 0 ? void 0 : _c.breakup_values) === null || _d === void 0 ? void 0 : _d.coupon) === null || _e === void 0 ? void 0 : _e.code,
                },
                payment: { payment_type: param === null || param === void 0 ? void 0 : param.payment_mode },
                delivery_charges: (_f = result.payload) === null || _f === void 0 ? void 0 : _f.delivery_charges,
                cart: { cart_id: (_g = result.payload) === null || _g === void 0 ? void 0 : _g.id },
            };
        }
    },
    ADD_ADDRESS_INFORMATION: {
        eventName: 'order.address_information',
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return {
                value: (_c = (_b = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.breakup_values) === null || _b === void 0 ? void 0 : _b.raw) === null || _c === void 0 ? void 0 : _c.total,
                coupon: {
                    coupon_code: (_f = (_e = (_d = result.payload) === null || _d === void 0 ? void 0 : _d.breakup_values) === null || _e === void 0 ? void 0 : _e.coupon) === null || _f === void 0 ? void 0 : _f.code,
                },
                cart: { cart_id: (_g = result.payload) === null || _g === void 0 ? void 0 : _g.id },
            };
        }
    },
    ORDER_PROCESSED: {
        eventName: 'order.processed',
        payloadCreator: (result, param, store, oldStore) => {
            var _a;
            let orderData = (_a = result.payload) === null || _a === void 0 ? void 0 : _a.order;
            const breakup = {};
            if (orderData.breakup_values) {
                for (let i = 0; i < orderData.breakup_values.length; i++) {
                    breakup[orderData.breakup_values[i].name] =
                        orderData.breakup_values[i].value;
                }
            }
            orderData.breakup_values_raw = breakup;
            const extractItems = (data) => {
                const allItems = [];
                data.forEach((order) => {
                    order.bags.forEach(bag => {
                        const itemWithDetails = Object.assign(Object.assign({}, bag.item), { quantity: bag === null || bag === void 0 ? void 0 : bag.quantity, price: bag === null || bag === void 0 ? void 0 : bag.prices });
                        allItems.push(itemWithDetails);
                    });
                });
                return allItems;
            };
            const items = extractItems(orderData.shipments);
            orderData.items = items;
            return orderData;
        }
    },
    ORDER_TRACKING_VIEW: {
        eventName: 'order_tracking.view',
        payloadCreator: (store) => {
            return store;
        }
    },
    ORDER_INITIALCHECKOUT: {
        eventName: 'order.initialCheckout',
        payloadCreator: (store) => {
            return store;
        }
    },
    REFUND_SUCCESS: {
        eventName: 'refund.success',
        payloadCreator: (store) => {
            return store;
        }
    },
    SEARCH_PRODUCTS: {
        eventName: 'search.products',
        payloadCreator: (store) => {
            return store;
        }
    },
    PINCODE_SERVICEABILITY: {
        eventName: 'pincode.serviceablility',
        payloadCreator: (store) => {
            return store;
        }
    },
    NAVIGATION: {
        eventName: 'root.navigation',
        payloadCreator: (store) => {
            return store;
        }
    }
};
export function emitFPIEvent(event, params, result, oldStore, eventEmitter) {
    var _a, _b, _c, _d;
    if (!(event === null || event === void 0 ? void 0 : event.eventName) || !(event === null || event === void 0 ? void 0 : event.payloadCreator)) {
        return;
    }
    if (isRunningOnClient()) {
        const { eventName, payloadCreator } = event;
        const storeSnapshot = (_d = (_c = (_b = (_a = window.fpi) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b.getState) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : {};
        const eventPayload = typeof payloadCreator === 'function' ? payloadCreator(result, params, storeSnapshot, oldStore) : payloadCreator;
        try {
            if (typeof eventEmitter === 'function') {
                eventEmitter(eventName, eventPayload);
            }
            defaultFPIEmit(eventName, eventPayload);
        }
        catch (error) {
            console.error('Error Occured in Event : ', error);
        }
    }
}
export function defaultFPIEmit(eventName, payload) {
    var _a, _b;
    if (isRunningOnClient()) {
        try {
            (_b = (_a = window.FPI.event) === null || _a === void 0 ? void 0 : _a.emit) === null || _b === void 0 ? void 0 : _b.call(_a, eventName, payload);
        }
        catch (error) {
            console.error('Error Occured in Event : ', error);
        }
    }
}
//# sourceMappingURL=FPI-events.js.map
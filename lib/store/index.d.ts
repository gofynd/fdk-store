import type ApplicationClient from 'fdk-client-javascript/sdk/application/ApplicationClient';
import productsModule from './modules/product-listing';
import productModule from './modules/product-description';
import cartModule from './modules/cart-landing';
import brandsModule from './modules/brands';
import categoriesModule from './modules/categories';
import authModule from './modules/auth';
import paymentModule from './modules/payment';
import addressModule from './modules/address';
import contentModule from './modules/content';
import themeModule from './modules/theme';
import configurationModule from './modules/configuration';
import logisticModule from './modules/logistic';
import shareModule from './modules/share';
import collectionModule from './modules/collection';
import OrderModule from './modules/order';
declare class ApplicationStore {
    private store;
    getters: any;
    products: productsModule;
    product: productModule;
    cart: cartModule;
    brands: brandsModule;
    address: addressModule;
    content: contentModule;
    theme: themeModule;
    configuration: configurationModule;
    logistic: logisticModule;
    payment: paymentModule;
    auth: authModule;
    share: shareModule;
    collection: collectionModule;
    categories: categoriesModule;
    order: OrderModule;
    constructor(sdk: ApplicationClient, initialData: unknown);
    observeStore(getterKey: string, onChange: Function): import("redux").Unsubscribe;
}
export default ApplicationStore;

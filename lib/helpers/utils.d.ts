import type { CartDetailResponse } from 'fdk-client-javascript/sdk/application/Cart/CartApplicationModel';
export declare function parseFilters(obj: any): string;
export declare function createJWTToken(jsonObj: any, secret: any): string;
export declare function isRunningOnClient(): Boolean;
export declare function getCookie(key: string): any | null;
export declare function setCookie(key: string, value: any, exp: number, domain?: string, path?: string): void;
export declare function removeCookie(name: string): void;
export declare function cartItemsCount(cart: CartDetailResponse): number;

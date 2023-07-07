import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import HmacSHA256 from 'crypto-js/hmac-sha256';
export function parseFilters(obj) {
    return Object.entries(obj).reduce((str, [key, value]) => {
        if (key.startsWith('__')) {
            return str;
        }
        if (str.length != 0) {
            str += ':::';
        }
        if (Array.isArray(value)) {
            str += `${key}:${value.join('||')}`;
        }
        else if (value) {
            str += `${key}:${value.toString()}`;
        }
        return str;
    }, '');
}
;
export function createJWTToken(jsonObj, secret) {
    // Defining our token parts
    let header = {
        alg: 'HS256',
        typ: 'JWT',
    };
    function base64url(source) {
        // Encode in classical base64
        let encodedSource = Base64.stringify(source);
        // Remove padding equal characters
        encodedSource = encodedSource.replace(/=+$/, '');
        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');
        return encodedSource;
    }
    let stringifiedHeader = Utf8.parse(JSON.stringify(header));
    let encodedHeader = base64url(stringifiedHeader);
    let stringifiedData = Utf8.parse(JSON.stringify(jsonObj));
    let encodedData = base64url(stringifiedData);
    let signature = encodedHeader + '.' + encodedData;
    signature = HmacSHA256(signature, secret);
    signature = base64url(signature);
    return `${encodedHeader}.${encodedData}.${signature}`;
}
export function isRunningOnClient() {
    if (typeof window !== 'undefined') {
        return globalThis === window;
    }
    return false;
}
export function getCookie(key) {
    if (isRunningOnClient()) {
        const name = key + '=';
        const decoded = decodeURIComponent(document.cookie);
        const cArr = decoded.split('; ');
        let res;
        cArr.forEach((val) => {
            if (val.indexOf(name) === 0)
                res = val.substring(name.length);
        });
        if (!res) {
            return '';
        }
        try {
            return JSON.parse(res);
        }
        catch (e) {
            return res || null;
        }
    }
    else {
        return null;
    }
}
export function setCookie(key, value, exp, domain, path) {
    if (isRunningOnClient()) {
        value = typeof value === 'object' ? JSON.stringify(value) : value;
        let date = new Date();
        date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + date.toUTCString();
        document.cookie = `${key}=${encodeURIComponent(value)}; ${exp !== null && expires}; domain=${domain ? domain : ''}; path=${path ? path : '/'};`;
    }
}
export function removeCookie(name) {
    if (isRunningOnClient()) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}
//# sourceMappingURL=utils.js.map
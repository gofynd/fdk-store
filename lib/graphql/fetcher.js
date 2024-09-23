var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Fetcher {
    constructor(domain, authorizationHeader) {
        this.domain = domain;
        this.authorizationHeader = authorizationHeader;
    }
    fetch(query, variables) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.domain}/service/application/graphql/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.authorizationHeader,
                        'credentials': 'include'
                    },
                    body: JSON.stringify({
                        query,
                        variables,
                    }),
                });
                if (!response.ok) {
                    throw new Error(`GraphQL request failed with status ${response.status}`);
                }
                const result = yield response.json();
                return result;
            }
            catch (error) {
                return {
                    data: null,
                    errors: [
                        {
                            code: 'Error',
                            message: error.message || error,
                        },
                    ],
                };
            }
        });
    }
}
//# sourceMappingURL=fetcher.js.map
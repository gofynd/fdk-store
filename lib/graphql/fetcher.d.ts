export declare class Fetcher {
    private domain;
    private authorizationHeader;
    constructor(domain: string, authorizationHeader: string);
    fetch(query: string, variables: unknown): Promise<any>;
}

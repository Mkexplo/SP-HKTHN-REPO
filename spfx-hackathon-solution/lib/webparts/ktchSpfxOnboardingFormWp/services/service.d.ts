import { HttpClient } from '@microsoft/sp-http';
export default class UserNameValService {
    private readonly _httpClient;
    constructor(httpClient: HttpClient);
    getUSRNVal(query: string, deployment?: string): Promise<string>;
    private _compose_AzureOpenAiApiUrl;
}
//# sourceMappingURL=service.d.ts.map
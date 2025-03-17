import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';
import { IUserNameValResponse } from '../model/IUserNameValResponse';
import UserNameValRequestBuilder from '../model/UserNameValRequestBuilder';
import Constants from '../constant';


export default class UserNameValService {
    private readonly _httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public async getUSRNVal(
          
           query: string,
             deployment = "gpt-4o-mini"
         
        ) : Promise<string> {
        const requestBuilder: UserNameValRequestBuilder= new UserNameValRequestBuilder(query);

     
       
        const requestHeaders: Headers = new Headers();
        requestHeaders.append('Content-type', 'application/json');
        requestHeaders.append('Api-Key', `${Constants.AzureOpenAiApiKey}`);

        const httpClientOptions: IHttpClientOptions = {
            body: requestBuilder.buildAsJson(),
            headers: requestHeaders
        };

        const response: HttpClientResponse =
            await this._httpClient.post(
                this._compose_AzureOpenAiApiUrl(deployment),
                HttpClient.configurations.v1,
                httpClientOptions);

        const userNameValResponse: string = await response.json().then((data)=>{
            return data.choices[0].message.content;
        }); 
        

        

        return userNameValResponse;
    }

    private _compose_AzureOpenAiApiUrl(deployment:string): string {
        return `https://ai-ktchmilanhkthnai368335273046.openai.azure.com/openai/deployments/gpt-4o-mini/chat/completions?api-version=2024-02-15-preview`;
       }
}
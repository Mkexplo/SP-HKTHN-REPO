import { IUserNameValRequest } from "./IUserNameValRequest";
export default class UserNameValRequestBuilder {
    private _userNameValRequest;
    constructor(userVal: any);
    addUserMessage(content: string): void;
    build(): IUserNameValRequest;
    buildAsJson(): string;
}
//# sourceMappingURL=UserNameValRequestBuilder.d.ts.map
export interface IUserNameValRequest {
    messages: IUserNameValMessage[];
    max_tokens: number;
    temperature: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    stop: string | null;
}
export interface IUserNameValMessage {
    role: "user" | "system";
    content: string;
}
//# sourceMappingURL=IUserNameValRequest.d.ts.map
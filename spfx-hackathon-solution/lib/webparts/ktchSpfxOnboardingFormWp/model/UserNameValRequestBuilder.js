//import Constants from '../Constants';
var UserNameValRequestBuilder = /** @class */ (function () {
    function UserNameValRequestBuilder(userVal) {
        this._userNameValRequest = {
            messages: [
                { role: "system", content: "Perform a profanity check on the provided text and explain the meaning of any detected profane words in different languages.Use the provided input variable ".concat(userVal, "\n\n# Steps\n\n1. **Text Analysis**: Identify any words or phrases in ").concat(userVal, " that are considered profane or inappropriate.\n   - Utilize common profanity databases or filters to detect offensive words.\n   - Ignore context unless explicitly instructed otherwise.\n\n2. **Language Insights**:\n   - For each detected word, describe its potential meaning in the context of profanity.\n   - Provide translations and meanings of the word in at least 3 different languages (specify the languages).\n\n3. **Result Summarization**:\n   - Clearly state whether or not profanity is found.\n   - If profanity is detected, summarize the findings, including the word(s), their meanings, and translations.\n\n# Output Format\n\nThe output should be in the following JSON format:json{\"profanity_detected\": true,\"details\": [{\"word\": \"detected_word\",\"meanings: {\"language_1\": \"meaning_in_language_1\",\"language_2\": \"meaning_in_language_2\",\"language_3\": \"meaning_in_language_3\"}}]}If no profanity is detected, the JSON should be:json{\"profanity_detected\": false,\"details\": []}# Example\n\n### Input:\n\n plaintext\n\"You are a fool and a #$%!\"\n \n\n### Output:\n\n json\n{\n  \"profanity_detected\": true,\n  \"details\": [\n    {\n      \"word\": \"fool\",\n      \"meanings\": {\n        \"English\": \"a stupid or silly person\",\n        \"Spanish\": \"tonto - someone who lacks intelligence\",\n        \"French\": \"imb\u00E9cile - a person without good judgment\"\n      }\n    },\n    {\n      \"word\": \"profane_word_placeholder\",\n      \"meanings\": {\n        \"English\": \"Profanity example meaning in English\",\n        \"Spanish\": \"Profanity example meaning in Spanish\",\n        \"German\": \"Profanity example meaning in German\"\n      }\n    }\n  ]\n}\n \n\n# Notes\n\n- If a detected word has no direct equivalent in another language, indicate this in the \"meanings\" section (e.g., \"No direct equivalent in this language\").\n- Handle edge cases where the text contains intentional masking (e.g., \"@#$%\") but identify potential profanity based on context.\"") }
            ],
            max_tokens: 800,
            temperature: 0.7,
            top_p: 0.95,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: null
        };
    }
    UserNameValRequestBuilder.prototype.addUserMessage = function (content) {
        this._userNameValRequest.messages.push({
            role: "user",
            content: content
        });
    };
    UserNameValRequestBuilder.prototype.build = function () {
        return this._userNameValRequest;
    };
    UserNameValRequestBuilder.prototype.buildAsJson = function () {
        return JSON.stringify(this._userNameValRequest);
    };
    return UserNameValRequestBuilder;
}());
export default UserNameValRequestBuilder;
//# sourceMappingURL=UserNameValRequestBuilder.js.map
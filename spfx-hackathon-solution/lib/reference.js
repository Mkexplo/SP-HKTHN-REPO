/*const { AzureOpenAI } = require("openai");
const { DefaultAzureCredential } = require("@azure/identity");
const dotenv = require("dotenv");
  
dotenv.config();
  
async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] || "https://ai-ktchmilanhkthnai368335273046.openai.azure.com/";
  const apiVersion = "2024-05-01-preview";
  const deployment = "gpt-4o-mini"; // This must match your deployment name
  
  // Initialize the DefaultAzureCredential
  const credential = new DefaultAzureCredential();
  
  // Initialize the AzureOpenAI client with Entra ID (Azure AD) authentication
  const client = new AzureOpenAI({ endpoint, credential, apiVersion, deployment });
  
  const result = await client.chat.completions.create({
    messages: [
                  { role: "system", content: "Perform a profanity check on the provided text and explain the meaning of any detected profane words in different languages.\n\nUse the provided input variable `{{emailTextForCheck}}`.\n\n# Steps\n\n1. **Text Analysis**: Identify any words or phrases in `{{emailTextForCheck}}` that are considered profane or inappropriate.\n   - Utilize common profanity databases or filters to detect offensive words.\n   - Ignore context unless explicitly instructed otherwise.\n\n2. **Language Insights**:\n   - For each detected word, describe its potential meaning in the context of profanity.\n   - Provide translations and meanings of the word in at least 3 different languages (specify the languages).\n\n3. **Result Summarization**:\n   - Clearly state whether or not profanity is found.\n   - If profanity is detected, summarize the findings, including the word(s), their meanings, and translations.\n\n# Output Format\n\nThe output should be in the following JSON format:\n\n```json\n{\n  \"profanity_detected\": true,\n  \"details\": [\n    {\n      \"word\": \"detected_word\",\n      \"meanings\": {\n        \"language_1\": \"meaning_in_language_1\",\n        \"language_2\": \"meaning_in_language_2\",\n        \"language_3\": \"meaning_in_language_3\"\n      }\n    }\n  ]\n}\n```\n\nIf no profanity is detected, the JSON should be:\n\n```json\n{\n  \"profanity_detected\": false,\n  \"details\": []\n}\n```\n\n# Example\n\n### Input:\n\n```plaintext\n\"You are a fool and a #$%!\"\n```\n\n### Output:\n\n```json\n{\n  \"profanity_detected\": true,\n  \"details\": [\n    {\n      \"word\": \"fool\",\n      \"meanings\": {\n        \"English\": \"a stupid or silly person\",\n        \"Spanish\": \"tonto - someone who lacks intelligence\",\n        \"French\": \"imbécile - a person without good judgment\"\n      }\n    },\n    {\n      \"word\": \"profane_word_placeholder\",\n      \"meanings\": {\n        \"English\": \"Profanity example meaning in English\",\n        \"Spanish\": \"Profanity example meaning in Spanish\",\n        \"German\": \"Profanity example meaning in German\"\n      }\n    }\n  ]\n}\n```\n\n# Notes\n\n- If a detected word has no direct equivalent in another language, indicate this in the \"meanings\" section (e.g., \"No direct equivalent in this language\").\n- Handle edge cases where the text contains intentional masking (e.g., \"@#$%\") but identify potential profanity based on context." }
    ],
    max_tokens: 800,
    temperature: 0.7,
    top_p: 0.95,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null
  });
  
  console.log(JSON.stringify(result, null, 2));
}
  
main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
  
module.exports = { main };




//response

{
    "profanity_detected":true,
    "details": [
      {
        "word": "haraami",
        "meanings": {
          "English": "bastard - a term referring to a child born out of wedlock, often used as an insult",
          "Hindi": "हरामी - a derogatory term for someone considered morally reprehensible",
          "Urdu": "حرامی - an insulting term typically used to insult someone's character or legitimacy"
        }
      }
    ]
  }




  //https://github.com/pnp/sp-dev-fx-webparts/blob/main/samples/react-azure-openai-connector/src/webparts/ourHotelsFinder/models/CompletionsRequestBuilder.ts

  //https://www.youtube.com/watch?v=76K7ds7P_G4
 

  const str=`Perform a profanity check on the provided text and explain the meaning of any detected profane words in different languages.\n\nUse the provided input variable ${}\n\n# Steps\n\n1. **Text Analysis**: Identify any words or phrases in ${} that are considered profane or inappropriate.\n   - Utilize common profanity databases or filters to detect offensive words.\n   - Ignore context unless explicitly instructed otherwise.\n\n2. **Language Insights**:\n   - For each detected word, describe its potential meaning in the context of profanity.\n   - Provide translations and meanings of the word in at least 3 different languages (specify the languages).\n\n3. **Result Summarization**:\n   - Clearly state whether or not profanity is found.\n   - If profanity is detected, summarize the findings, including the word(s), their meanings, and translations.\n\n# Output Format\n\nThe output should be in the following JSON format:\n\n json\n{\n  \"profanity_detected\": true,\n  \"details\": [\n    {\n      \"word\": \"detected_word\",\n      \"meanings\": {\n        \"language_1\": \"meaning_in_language_1\",\n        \"language_2\": \"meaning_in_language_2\",\n        \"language_3\": \"meaning_in_language_3\"\n      }\n    }\n  ]\n}\n\n\nIf no profanity is detected, the JSON should be:\n\n json\n{\n  \"profanity_detected\": false,\n  \"details\": []\n}\n \n\n# Example\n\n### Input:\n\n plaintext\n\"You are a fool and a #$%!\"\n \n\n### Output:\n\n json\n{\n  \"profanity_detected\": true,\n  \"details\": [\n    {\n      \"word\": \"fool\",\n      \"meanings\": {\n        \"English\": \"a stupid or silly person\",\n        \"Spanish\": \"tonto - someone who lacks intelligence\",\n        \"French\": \"imbécile - a person without good judgment\"\n      }\n    },\n    {\n      \"word\": \"profane_word_placeholder\",\n      \"meanings\": {\n        \"English\": \"Profanity example meaning in English\",\n        \"Spanish\": \"Profanity example meaning in Spanish\",\n        \"German\": \"Profanity example meaning in German\"\n      }\n    }\n  ]\n}\n \n\n# Notes\n\n- If a detected word has no direct equivalent in another language, indicate this in the \"meanings\" section (e.g., \"No direct equivalent in this language\").\n- Handle edge cases where the text contains intentional masking (e.g., \"@#$%\") but identify potential profanity based on context."


  "```json
{
  "profanity_detected": true,
  "details": [
    {
      "word": "mierda",
      "meanings": {
        "Spanish": "excrement, poop - used as a vulgar term for feces",
        "English": "shit - a vulgar term for feces, often used to express disdain or frustration",
        "French": "merde - a vulgar term for feces, often used in similar expressions of frustration"
      }
    }
  ]
}
```"



"To perform a profanity check on the provided input variable "haraami", we first analyze the word for any profane connotations.

1. **Text Analysis**:
   - The word "haraami" is derived from the Arabic word "حرامي" (harami), which translates to "forbidden" or "prohibited". In colloquial usage, especially in some cultures, it can also mean "bastard" or "illegitimate child", which is considered an insult and thus qualifies as profanity.

2. **Language Insights**:
   - **English**: "bastard" - refers to a person born of parents not married to each other; used as an insult.
   - **Arabic**: "حرامي" (haraami) - can mean "thief" or "illegitimate"; often used in a derogatory manner to insult someone's character.
   - **Urdu**: "حرامی" (haraami) - similarly used to indicate an illegitimate child or as an insult towards someone's character.

3. **Result Summarization**:
   - Profanity is detected in the word "haraami". The findings are summarized below.

The output will be structured as follows:

```json
{
  "profanity_detected": true,
  "details": [
    {
      "word": "haraami",
      "meanings": {
        "English": "bastard - an insult referring to an illegitimate child",
        "Arabic": "حرامي - means thief or illegitimate, often used derogatorily",
        "Urdu": "حرامی - refers to an illegitimate child, used as an insult"
      }
    }
  ]
}
```"
 */
//# sourceMappingURL=reference.js.map
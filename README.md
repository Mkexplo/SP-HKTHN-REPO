# Username Profanity check using SPFx and Azure OpenAI service
Profanity check for new employee user name

Summary

When a new employee joins an organization, their username and email ID are typically created by either HR or an IT admin, often based on a combination of their first and last names. However, sometimes this combination may inadvertently result in an offensive, inappropriate, or vulgar word, which the employee will then carry throughout their time in the organization. Since the IT admin or HR personnel in one country may not be aware of the meaning of certain words in another language or culture, leveraging Azure AI services and their large language model (LLM) capabilities can help identify usernames that contain profane or inappropriate terms and suggest alternative, more suitable options.
The employee onboarding form is developed using an SPFx web part, and for each username combination, it sends a request to the Azure AI service endpoint to check for profanity. If the username is flagged as inappropriate, it prompts the HR or IT admin to select an alternative combination.


![image](https://github.com/user-attachments/assets/a17ef065-d293-4d38-9c4b-5892d6b44bf8)


Prerequisites:

Your Azure subscription should have Azure OpenAI service.
     
Create a Hub and a project within Azure AI foundry. Use gpt-4o-mini deployment model. Add instructions and use the code(javascript) generated from "View Code" button for reference


   ![image](https://github.com/user-attachments/assets/af545562-efb8-4707-8ce5-87d84e2650a8)

     
Make use of Azure OpenAI Key and endpoint in your SPFx code.

   ![image](https://github.com/user-attachments/assets/41e6a069-f26f-42ab-85c2-54f7386e104c)

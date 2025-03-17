# SP-HKTHN-REPO
Profanity check for new employee user name

Summary

When a new employee joins an organization, their username and email ID are typically created by either HR or an IT admin, often based on a combination of their first and last names. However, sometimes this combination may inadvertently result in an offensive, inappropriate, or vulgar word, which the employee will then carry throughout their time in the organization. Since the IT admin or HR personnel in one country may not be aware of the meaning of certain words in another language or culture, leveraging Azure AI services and their large language model (LLM) capabilities can help identify usernames that contain profane or inappropriate terms and suggest alternative, more suitable options.
The employee onboarding form is developed using an SPFx web part, and for each username combination, it sends a request to the Azure AI service endpoint to check for profanity. If the username is flagged as inappropriate, it prompts the HR or IT admin to select an alternative combination.


![image](https://github.com/user-attachments/assets/a17ef065-d293-4d38-9c4b-5892d6b44bf8)


import {HttpClient} from '@microsoft/sp-http';

export interface IKtchSpfxOnboardingFormWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  httpClient: HttpClient;
}

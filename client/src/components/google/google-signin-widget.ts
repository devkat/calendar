import {autoinject} from "aurelia-dependency-injection";
import {GoogleConfigModel} from "../../rest/calendar/models/google-config-model";
import {GoogleAuthService} from "../../services/google-auth-service";
import {GoogleService} from "../../services/google-service";

@autoinject()
export class GoogleSigninWidgetCustomElement {

  private config: GoogleConfigModel = undefined;

  constructor(
    private googleService: GoogleService,
    private googleAuthService: GoogleAuthService) {
    this.googleService.getConfig().then(config => {
      this.config = config;
    });
  }

  public signinSuccess(event: Event): void {
    const user: any = gapi.auth2.getAuthInstance().currentUser.get();
    const authResponse: any = user.getAuthResponse();
    this.googleAuthService.setAccessToken(authResponse.access_token);
  }
}

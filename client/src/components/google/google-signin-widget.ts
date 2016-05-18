import {autoinject} from "aurelia-dependency-injection";
import {GoogleService} from "../../services/google-service";
import {GoogleConfigModel} from "../../rest/calendar/models/google-config-model";
import {bindable} from "aurelia-templating";

@autoinject()
export class GoogleSigninWidgetCustomElement {

  private config: GoogleConfigModel = null;

  constructor(private googleService: GoogleService) {
    this.googleService.getConfig().then(config => {
      this.config = config;
    });
  }

  public signinSuccess(event: Event): void {
    const user = gapi.auth2.getAuthInstance().currentUser.get();
    const authResponse = user.getAuthResponse();
    this.googleService.setAccessToken(authResponse.access_token);
  }
}

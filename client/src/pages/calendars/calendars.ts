import {autoinject} from "aurelia-dependency-injection";
import {GoogleService} from "../../services/google-service";
import {GoogleConfigModel} from "../../rest/calendar/models/google-config-model";

@autoinject()
export class Calendars {

  private config: GoogleConfigModel;

  constructor(private googleService: GoogleService) {
  }

  public activate(params: any): Promise<GoogleConfigModel> {
    return this.googleService.getConfig()
      .then(config => {
        this.config = config;
        return config;
      });
  }

}

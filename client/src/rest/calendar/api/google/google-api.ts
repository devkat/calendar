import {autoinject} from "aurelia-dependency-injection";
import {Configuration} from "../../../../config/configuration";
import {RestClient} from "../../rest-client";
import {GoogleConfigModel} from "../../models/google-config-model";
import {RestApi} from "../rest-api";
import {GoogleCalendarModel} from "../../models/google-calendar-model";
import {GoogleAuthService} from "../../../../services/google-auth-service";
import {Headers} from "../headers";

@autoinject()
export class GoogleApi extends RestApi {

  private configEndpoint: string;
  private calendarsEndpoint: string;

  constructor(
    restClient: RestClient,
    private googleAuthService: GoogleAuthService,
    private config: Configuration) {
    super(restClient);
    this.configEndpoint = config.get("rest.endpoints.google.config").asString();
    this.calendarsEndpoint = config.get("rest.endpoints.google.calendars").asString();
  }

  protected headers(): Headers {
    const headers: Headers = super.headers();
    return this.googleAuthService.getAccessToken().caseOf({
      just: token => headers.set("Authorization", "bearer " + token),
      nothing: () => headers,
    });
  }

  public getConfig(): Promise<GoogleConfigModel> {
    return this.get(this.configEndpoint);
  }

  public getCalendars(): Promise<GoogleCalendarModel[]> {
    return this.get(this.calendarsEndpoint);
  }
}

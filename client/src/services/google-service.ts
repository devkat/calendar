import {autoinject} from "aurelia-dependency-injection";
import {Aurelia} from "aurelia-framework";
import {GoogleApi} from "../rest/calendar/api/google/google-api";
import {GoogleConfigModel} from "../rest/calendar/models/google-config-model";

@autoinject
export class GoogleService {

  constructor(
    private app: Aurelia,
    private googleApi: GoogleApi) {
  }

  public getConfig(): Promise<GoogleConfigModel> {
    return this.googleApi.getConfig();
  }
}

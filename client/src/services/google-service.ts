import {autoinject} from "aurelia-dependency-injection";
import {GoogleApi} from "../rest/calendar/api/google/google-api";
import {GoogleConfigModel} from "../rest/calendar/models/google-config-model";
import {GoogleCalendarModel} from "../rest/calendar/models/google-calendar-model";

@autoinject
export class GoogleService {

  constructor(private googleApi: GoogleApi) {
  }

  public getConfig(): Promise<GoogleConfigModel> {
    return this.googleApi.getConfig();
  }

  public getCalendars(): Promise<GoogleCalendarModel[]> {
    return this.googleApi.getCalendars();
  }
}

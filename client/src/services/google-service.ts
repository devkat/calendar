import {autoinject} from "aurelia-dependency-injection";
import {Aurelia} from "aurelia-framework";
import {GoogleApi} from "../rest/calendar/api/google/google-api";
import {GoogleConfigModel} from "../rest/calendar/models/google-config-model";
import {Maybe} from "tsmonad";
import {GoogleCalendarModel} from "../rest/calendar/models/google-calendar-model";

@autoinject
export class GoogleService {

  private _accessToken: Maybe<string> = Maybe.nothing();

  constructor(
    private app: Aurelia,
    private googleApi: GoogleApi) {
  }

  public getConfig(): Promise<GoogleConfigModel> {
    return this.googleApi.getConfig();
  }

  public setAccessToken(accessToken: string) {
    this._accessToken = Maybe.just(accessToken);
  }

  public getAccessToken(): Maybe<string> {
    return this._accessToken
  }

  public getCalendars(): Promise<GoogleCalendarModel[]> {
    return this.googleApi.getCalendars();
  }
}

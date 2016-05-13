import {autoinject} from "aurelia-dependency-injection";
import {Configuration} from "../../../../config/configuration";
import {RestClient} from "../../rest-client";
import {CalendarModel} from "../../models/calendar-model";

@autoinject()
export class CalendarApi {

  private calendarTypesEndpoint: string;
  private calendarsEndpoint: string;

  constructor(
    private rest: RestClient,
    private config: Configuration) {

    this.calendarTypesEndpoint = config.get("rest.endpoints.calendarTypes").asString();
    this.calendarsEndpoint = config.get("rest.endpoints.calendars.calendars").asString();
  }

  public getCalendarTypes(): Promise<string[]> {
    return this.rest.unauthorized().fetch(this.calendarTypesEndpoint, {
      method: "GET",
    }).then(response => { return response.json(); });
  }

  public getCalendars(): Promise<CalendarModel[]> {
    return this.rest.unauthorized().fetch(this.calendarsEndpoint, {
        method: "GET",
      })
      .then(response => { return response.json(); });
  }
}

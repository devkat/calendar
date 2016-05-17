import {autoinject} from "aurelia-dependency-injection";
import {Configuration} from "../../../../config/configuration";
import {RestClient} from "../../rest-client";
import {CalendarModel} from "../../models/calendar-model";

@autoinject()
export class CalendarApi {

  private calendarTypesEndpoint: string;
  private calendarsEndpoint: string;
  private calendarEndpoint: (number) => string;

  constructor(
    private rest: RestClient,
    private config: Configuration) {

    this.calendarTypesEndpoint = config.get("rest.endpoints.calendarTypes").asString();
    this.calendarsEndpoint = config.get("rest.endpoints.calendars.calendars").asString();
    this.calendarEndpoint = (id: number) => config.get("rest.endpoints.calendars.calendar").asString().replace(":id", id.toString());
  }

  public getCalendarTypes(): Promise<string[]> {
    return this.rest.unauthorized().fetch(this.calendarTypesEndpoint, {
      method: "GET",
    }).then(response => { return response.json(); });
  }

  public getCalendars(): Promise<CalendarModel[]> {
    return this.rest.unauthorized().fetch(this.calendarsEndpoint, {
        method: "GET",
      }).then(response => { return response.json(); });
  }

  public getCalendar(id: number): Promise<CalendarModel> {
    return this.rest.unauthorized().fetch(this.calendarEndpoint(id), {
      method: "GET",
    }).then(response => { return response.json(); });
  }

  public postCalendar(cal: CalendarModel): Promise<void> {
    return this.rest.unauthorized().fetch(this.calendarsEndpoint, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cal),
    }).then(response => { });
  }

  public putCalendar(cal: CalendarModel): Promise<void> {
    return this.rest.unauthorized().fetch(this.calendarEndpoint(cal.id), {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cal),
    }).then(response => { });
  }

}

import {autoinject} from "aurelia-dependency-injection";
import {Configuration} from "../../../../config/configuration";
import {RestClient} from "../../rest-client";
import {CalendarModel} from "../../models/calendar-model";
import {RestApi} from "../rest-api";
import {EventModel} from "../../models/event-model";
import Immutable from "immutable";
import {GoogleService} from "../../../../services/google-service";

@autoinject()
export class CalendarApi extends RestApi {

  private calendarTypesEndpoint: string;
  private calendarsEndpoint: string;
  private calendarEndpoint: (number) => string;
  private eventsEndpoint: (number) => string;

  constructor(restClient: RestClient,
              private config: Configuration,
              private googleService: GoogleService) {
    super(restClient);
    this.calendarTypesEndpoint = config.get("rest.endpoints.calendarTypes").asString();
    this.calendarsEndpoint = config.get("rest.endpoints.calendars.calendars").asString();
    this.calendarEndpoint = (id: number) => config.get("rest.endpoints.calendars.calendar").asString().replace(":id", id.toString());
    this.eventsEndpoint = (id: number) => config.get("rest.endpoints.calendars.events").asString().replace(":id", id.toString());
  }

  protected headers(): Immutable.Map<string, string> {
    const headers = super.headers();
    return this.googleService.getAccessToken().caseOf({
      just: token => headers.set("Google-Access-Token", token),
      nothing: () => headers
    });
  }

  public getCalendarTypes(): Promise<string[]> {
    return this.get(this.calendarTypesEndpoint);
  }

  public getCalendars(): Promise<CalendarModel[]> {
    return this.get(this.calendarsEndpoint);
  }

  public getCalendar(id: number): Promise<CalendarModel> {
    return this.get(this.calendarEndpoint(id));
  }

  public postCalendar(cal: CalendarModel): Promise<void> {
    return this.post(this.calendarsEndpoint, cal);
  }

  public putCalendar(cal: CalendarModel): Promise<void> {
    return this.put(this.calendarEndpoint(cal.id), cal);
  }

  public getEvents(calendarId: number): Promise<EventModel[]> {
    return this.get(this.eventsEndpoint(calendarId));
  }

}

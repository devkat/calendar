import {autoinject} from "aurelia-dependency-injection";
import {Aurelia} from "aurelia-framework";
import {CalendarApi} from "../rest/calendar/api/calendar/calendar-api";
import {CalendarModel} from "../rest/calendar/models/calendar-model";

@autoinject
export class CalendarService {

  constructor(
    private app: Aurelia,
    private calendarApi: CalendarApi) {
  }

  public getCalendarTypes(): Promise<string[]> {
    return this.calendarApi.getCalendarTypes();
  }

  public getCalendars(): Promise<CalendarModel[]> {
    return this.calendarApi.getCalendars();
  }

  public getCalendar(id: number): Promise<CalendarModel> {
    return this.calendarApi.getCalendar(id);
  }

  public addCalendar(cal: CalendarModel): Promise<void> {
    return this.calendarApi.postCalendar(cal);
  }

  public updateCalendar(cal: CalendarModel): Promise<void> {
    return this.calendarApi.putCalendar(cal);
  }

}

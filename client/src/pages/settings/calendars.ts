import {autoinject} from "aurelia-dependency-injection";
import {CalendarService} from "../../services/calendar-service";
import {CalendarModel} from "../../rest/calendar/models/calendar-model";
import {Router} from "aurelia-router";

@autoinject()
export class Calendars {

  private calendarTypes: string[];
  private calendars: CalendarModel[];

  constructor(
      private calendarService: CalendarService,
      private router: Router
  ) {
    this.calendarService.getCalendarTypes().then(types => { this.calendarTypes = types; });
    this.calendarService.getCalendars().then(calendars => { this.calendars = calendars; });
  }

  public edit(id: number): void {
    this.router.navigateToRoute("settingsCalendarEdit", { id: id });
  }

  public add(type: string): void {
    this.router.navigateToRoute("settingsCalendarCreate", { type: type });
  }
}

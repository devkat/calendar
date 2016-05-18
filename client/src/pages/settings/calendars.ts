import {autoinject} from "aurelia-dependency-injection";
import {CalendarService} from "../../services/calendar-service";
import {GoogleConfigModel} from "../../rest/calendar/models/google-config-model";
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

  private edit(id: number): void {
    this.router.navigateToRoute('settingsCalendarEdit', { id: id });
  }

  private add(type: string): void {
    this.router.navigateToRoute('settingsCalendarCreate', { type: type });
  }
}

import {GoogleService} from "../../services/google-service";
import {autoinject} from "aurelia-dependency-injection";
import {GoogleCalendarModel} from "../../rest/calendar/models/google-calendar-model";

@autoinject()
export class CalendarFormCustomElement {

  private calendars: GoogleCalendarModel[];

  constructor(private googleService:GoogleService) {
    googleService.getCalendars().then(calendars => { this.calendars = calendars; });
  }
}

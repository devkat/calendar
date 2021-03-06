import {GoogleService} from "../../services/google-service";
import {autoinject} from "aurelia-dependency-injection";
import {bindable} from "aurelia-templating";
import {EventAggregator} from "aurelia-event-aggregator";
import {GoogleCalendarModel} from "../../rest/calendar/models/google-calendar-model";
import {GoogleAuthService} from "../../services/google-auth-service";

@autoinject()
export class GoogleCalendarsMenuCustomElement {

  private calendars: GoogleCalendarModel[];

  @bindable
  private loaded: boolean = false;

  constructor(
    private googleService: GoogleService,
    private googleAuthService: GoogleAuthService,
    private eventAggregator: EventAggregator) {
    this.eventAggregator.subscribe('google-signin', accessToken => {
      this.load();
    });
  }

  public load(): void {
    this.googleService.getCalendars().then(calendars => {
      this.calendars = calendars;
      this.loaded = true;
    });
  }

}

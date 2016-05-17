import {CalendarModel} from "../../rest/calendar/models/calendar-model";
import {autoinject} from "aurelia-dependency-injection";
import {CalendarService} from "../../services/calendar-service";
import {Router} from "aurelia-router";

@autoinject()
export class EditCalendar {

  private model: CalendarModel;

  constructor(
    private calendarService: CalendarService,
    private router: Router
  ) {}

  activate(params) {
    this.calendarService.getCalendar(params.id).then(calendar => {
      this.model = calendar;
    });
  }

  save() {
    this.calendarService.updateCalendar(this.model).then(() => {
      this.router.navigateToRoute('settingsCalendars');
    });
  }

  cancel() {
    this.router.navigateToRoute('settingsCalendars');
  }

}
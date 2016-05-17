import {CalendarModel} from "../../rest/calendar/models/calendar-model";
import {autoinject} from "aurelia-dependency-injection";
import {CalendarService} from "../../services/calendar-service";
import {Router} from "aurelia-router";

@autoinject()
export class CreateCalendar {

  private model: CalendarModel;

  constructor(
    private calendarService: CalendarService,
    private router: Router
  ) {}

  activate(params) {
    this.model = {
      id: null,
      type: params.type,
      name: "",
      url: ""
    } as CalendarModel;
  }

  save() {
    this.calendarService.addCalendar(this.model).then(() => {
      this.router.navigateToRoute('settingsCalendars');
    });
  }

  cancel() {
    this.router.navigateToRoute('settingsCalendars');
  }

}
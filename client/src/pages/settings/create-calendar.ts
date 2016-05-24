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

  public activate(params: any): void {
    this.model = {
      id: undefined,
      type: params.type,
      name: "",
      url: "",
    } as CalendarModel;
  }

  public save(): void {
    this.calendarService.addCalendar(this.model).then(() => {
      this.router.navigateToRoute("settingsCalendars");
    });
  }

  public cancel(): void {
    this.router.navigateToRoute("settingsCalendars");
  }

}

import R from "ramda";
import moment from "moment";
import {CalendarService} from "../../services/calendar-service";
import {autoinject} from "aurelia-dependency-injection";
import {EventModel} from "../../rest/calendar/models/event-model";

@autoinject()
export class CalendarWeekCustomElement {

  private days:number[] = R.range(1, 8);
  private hours:Object[] = R.range(0, 24).map(h => moment().hour(h).minute(0));
  private events: EventModel[];

  constructor(
    private calendarService: CalendarService
  ) {
    calendarService.getEvents(1).then(events => { this.events = events; });
  }

}

import {bindable} from "aurelia-templating";
import {autoinject} from "aurelia-dependency-injection";
import {CalendarModel} from "../../rest/calendar/models/calendar-model";

@autoinject()
export class Calendar {

  @bindable()
  private model: CalendarModel;

  @bindable()
  private active: boolean = false;

  constructor() { }

}

import {bindable} from "aurelia-templating";
import {autoinject} from "aurelia-dependency-injection";
import {CalendarModel} from "../../rest/calendar/models/calendar-model";

@autoinject()
export class CalendarItemCustomElement {

  @bindable()
  public model: CalendarModel;

  @bindable()
  public isActive: boolean = false;

}

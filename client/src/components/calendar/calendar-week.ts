import R from "ramda";
import moment from "moment";

export class CalendarWeekCustomElement {

  private days:number[] = R.range(1, 8);
  private hours:Object[] = R.range(0, 24).map(h => moment().hour(h));

}

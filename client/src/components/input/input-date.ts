import {InputDropdownElement} from "./input-dropdown";
import R from "ramda";
import {bindable} from "aurelia-templating";
import {bindingMode} from "aurelia-binding";
import {Moment} from "moment";
import moment from "moment";

export class InputDateCustomElement {

  @bindable()
  public label: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: string;

  @bindable()
  public name: string;

  @bindable()
  public disabled: boolean;

  public day: number;
  public month: number;
  public year: number;

  public bind(): void {
    if (this.value) {
      this.updateValues();
    }
  }

  public onDateChanged(part: string, event: CustomEvent): void {
    let date: Moment = moment(this.value);
    const value: number = part === "month"
      ? event.detail.value - 1
      : event.detail.value;
    date.set(part, value);
    this.value = date.format("YYYY-MM-DD");
  }

  public valueChanged(): void {
    this.updateValues();
  }

  get days(): InputDropdownElement[] {
    const range: number[] = R.range(1, 32);
    const mapToDropdown: any = R.map((n: number) => {
      return {
        value: n,
        label: (n < 10) ? ("0" + n) : n.toString(),
      };
    });

    return mapToDropdown(range) as InputDropdownElement[];
  }

  get months(): InputDropdownElement[] {
    return [{
      value: 1,
      label: "Januar",
    }, {
      value: 2,
      label: "Februar",
    }, {
      value: 3,
      label: "März",
    }, {
      value: 4,
      label: "April",
    }, {
      value: 5,
      label: "Mai",
    }, {
      value: 6,
      label: "Juni",
    }, {
      value: 7,
      label: "Juli",
    }, {
      value: 8,
      label: "August",
    }, {
      value: 9,
      label: "September",
    }, {
      value: 10,
      label: "Oktober",
    }, {
      value: 11,
      label: "November",
    }, {
      value: 12,
      label: "Dezember",
    }];
  }

  get years(): InputDropdownElement[] {
    const year: number = new Date().getFullYear() + 1;
    const range: number[] = R.range(year - 100, year);
    const mapToDropdown: any = R.map((n: Number) => {
      return {
        value: n,
        label: n.toString(),
      };
    });

    return mapToDropdown(range).reverse() as InputDropdownElement[];
  }

  private updateValues() {
    const split: string[] = this.value.split("-");
    const findDay: any = R.find(R.propEq("value", parseInt(split[2], 10)));
    const findMonth: any = R.find(R.propEq("value", parseInt(split[1], 10)));
    const findYear: any = R.find(R.propEq("value", parseInt(split[0], 10)));

    this.day = R.prop("value", findDay(this.days));
    this.month = R.prop("value", findMonth(this.months));
    this.year = R.prop("value", findYear(this.years));
  }
}

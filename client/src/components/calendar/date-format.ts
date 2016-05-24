import moment from "moment";

export class DateFormatValueConverter {
  public toView(value: any, format: string): string {
    return moment(value).format(format);
  }
}

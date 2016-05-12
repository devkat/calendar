import {bindable} from "aurelia-templating";
import {computedFrom} from "aurelia-binding";
import {bindingMode} from "aurelia-binding";

export class RadioButtonCustomElement {

  @bindable()
  public name: string;

  @bindable()
  public label: string;

  @bindable()
  public model: any;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public checked: any;
  
  @bindable()
  public disabled: boolean;

  @computedFrom("disabled")
  get disabledClass(): string {
    return this.disabled ? "disabled": "";
  }
}

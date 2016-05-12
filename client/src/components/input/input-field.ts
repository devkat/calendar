import {autoinject} from "aurelia-dependency-injection";
import {Dom} from "../../util/dom";
import {bindable} from "aurelia-templating";
import {bindingMode} from "aurelia-binding";

@autoinject()
export class InputFieldCustomElement {

  @bindable()
  public label: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: string;

  @bindable()
  public type: string = "text";

  @bindable()
  public name: string;

  @bindable()
  public disabled: boolean;

  private el: Dom;

  constructor(private dom: Dom, element: Element) {
    this.el = new Dom(element);
  }

  public focus(): void {
    this.el.addClass("focus");
  }

  public blur(): void {
    this.el.removeClass("focus");
  }
}

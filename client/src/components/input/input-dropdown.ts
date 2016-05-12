import {autoinject} from "aurelia-dependency-injection";
import {Dom} from "../../util/dom";
import {bindable} from "aurelia-templating";
import {bindingMode} from "aurelia-binding";
import R from "ramda";

@autoinject()
export class InputDropdownCustomElement {

  @bindable()
  public label: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: string | number;

  @bindable()
  public buttonValue: string;

  @bindable()
  public options: InputDropdownElement[];

  @bindable()
  public name: string;

  @bindable()
  public disabled: boolean;

  private element: Element;
  private el: Dom;
  private menu: Dom;
  private button: Dom;

  constructor(private dom: Dom, element: Element) {
    this.el = new Dom(element);
    this.element = element;
  }

  public bind(): void {
    if (this.value && this.options) {
      this.buttonValue = this.findLabel(this.value);
    }
  }

  public attached(): void {
    this.button = this.el.find(".dropdown-button");
    this.menu = this.el.find(".dropdown-menu");

    if (this.value) {
      this.menu.find(`li[data-value="${this.value}"]`).addClass("selected");
    }
  }

  public select(event: Event, value: string | number): void {
    this.value = value;
    let dom: Dom = new Dom(event.target as Element);
    dom.addClass("selected").siblings().removeClass("selected");
  }

  public toggleMenu(): void {
    if (!this.disabled) {
      if (this.menu.hasClass("open")) {
        this.hideDropdown();
      } else {
        this.showDropdown();
      }
    }
  }

  public valueChanged(): void {
    this.buttonValue = this.findLabel(this.value);

    this.element.dispatchEvent(new CustomEvent(
      "change", {
        bubbles: true,
        detail: {
          value: this.value,
          label: this.buttonValue,
        },
      })
    );
  }

  private showDropdown: () => void = (): void => {
    this.el.addClass("focus");
    this.menu.addClass("open");
    this.button.addClass("focus");
    document.addEventListener("click", this.hideDropdown);
  };

  private hideDropdown: () => void = (): void => {
    this.el.removeClass("focus");
    this.menu.removeClass("open");
    this.button.removeClass("focus");
    document.removeEventListener("click", this.hideDropdown);
  };

  private findLabel(value: string | number): string {
    return R.prop("label", R.find(R.propEq("value", value))(this.options));
  }
}

export interface InputDropdownElement {
  value: string | number;
  label: string;
}

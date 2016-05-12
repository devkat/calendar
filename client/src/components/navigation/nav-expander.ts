import {bindable} from "aurelia-templating";
import {autoinject} from "aurelia-dependency-injection";

@autoinject()
export class NavExpanderCustomElement {

  @bindable()
  public icon: string;

  @bindable()
  public name: string;

  constructor(private element: Element) { }

  public toggleExpander(): void {
    const classList: DOMTokenList = this.element.classList;

    if (classList.contains("collapsed")) {
      classList.add("expanded");
      classList.remove("collapsed");
    } else {
      classList.add("collapsed");
      classList.remove("expanded");
    }

  }
}

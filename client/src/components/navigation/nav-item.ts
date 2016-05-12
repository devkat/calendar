import {bindable} from "aurelia-templating";
import {NavModel} from "aurelia-router";

export class NavItemCustomElement {
  @bindable() public model: NavModel;
}

import {bindable} from "aurelia-templating";
import {NavModel} from "aurelia-router";
import {containerless} from "aurelia-templating";

@containerless
export class NavItemCustomElement {
  @bindable() public model: NavModel;
}

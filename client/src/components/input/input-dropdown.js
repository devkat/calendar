System.register(["aurelia-dependency-injection", "../../util/dom", "aurelia-templating", "aurelia-binding", "ramda"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_dependency_injection_1, dom_1, aurelia_templating_1, aurelia_binding_1, ramda_1;
    var InputDropdownCustomElement;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (dom_1_1) {
                dom_1 = dom_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (ramda_1_1) {
                ramda_1 = ramda_1_1;
            }],
        execute: function() {
            let InputDropdownCustomElement = class InputDropdownCustomElement {
                constructor(dom, element) {
                    this.dom = dom;
                    this.showDropdown = () => {
                        this.el.addClass("focus");
                        this.menu.addClass("open");
                        this.button.addClass("focus");
                        document.addEventListener("click", this.hideDropdown);
                    };
                    this.hideDropdown = () => {
                        this.el.removeClass("focus");
                        this.menu.removeClass("open");
                        this.button.removeClass("focus");
                        document.removeEventListener("click", this.hideDropdown);
                    };
                    this.el = new dom_1.Dom(element);
                    this.element = element;
                }
                bind() {
                    if (this.value && this.options) {
                        this.buttonValue = this.findLabel(this.value);
                    }
                }
                attached() {
                    this.button = this.el.find(".dropdown-button");
                    this.menu = this.el.find(".dropdown-menu");
                    if (this.value) {
                        this.menu.find(`li[data-value="${this.value}"]`).addClass("selected");
                    }
                }
                select(event, value) {
                    this.value = value;
                    let dom = new dom_1.Dom(event.target);
                    dom.addClass("selected").siblings().removeClass("selected");
                }
                toggleMenu() {
                    if (!this.disabled) {
                        if (this.menu.hasClass("open")) {
                            this.hideDropdown();
                        }
                        else {
                            this.showDropdown();
                        }
                    }
                }
                valueChanged() {
                    this.buttonValue = this.findLabel(this.value);
                    this.element.dispatchEvent(new CustomEvent("change", {
                        bubbles: true,
                        detail: {
                            value: this.value,
                            label: this.buttonValue,
                        },
                    }));
                }
                findLabel(value) {
                    return ramda_1.default.prop("label", ramda_1.default.find(ramda_1.default.propEq("value", value))(this.options));
                }
            };
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputDropdownCustomElement.prototype, "label", void 0);
            __decorate([
                aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay }), 
                __metadata('design:type', Object)
            ], InputDropdownCustomElement.prototype, "value", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputDropdownCustomElement.prototype, "buttonValue", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', Array)
            ], InputDropdownCustomElement.prototype, "options", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputDropdownCustomElement.prototype, "name", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', Boolean)
            ], InputDropdownCustomElement.prototype, "disabled", void 0);
            InputDropdownCustomElement = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [dom_1.Dom, Element])
            ], InputDropdownCustomElement);
            exports_1("InputDropdownCustomElement", InputDropdownCustomElement);
        }
    }
});
//# sourceMappingURL=input-dropdown.js.map
System.register(["aurelia-dependency-injection", "../../util/dom", "aurelia-templating", "aurelia-binding"], function(exports_1, context_1) {
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
    var aurelia_dependency_injection_1, dom_1, aurelia_templating_1, aurelia_binding_1;
    var InputFieldCustomElement;
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
            }],
        execute: function() {
            let InputFieldCustomElement = class InputFieldCustomElement {
                constructor(dom, element) {
                    this.dom = dom;
                    this.type = "text";
                    this.el = new dom_1.Dom(element);
                }
                focus() {
                    this.el.addClass("focus");
                }
                blur() {
                    this.el.removeClass("focus");
                }
            };
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputFieldCustomElement.prototype, "label", void 0);
            __decorate([
                aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay }), 
                __metadata('design:type', String)
            ], InputFieldCustomElement.prototype, "value", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputFieldCustomElement.prototype, "type", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputFieldCustomElement.prototype, "name", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', Boolean)
            ], InputFieldCustomElement.prototype, "disabled", void 0);
            InputFieldCustomElement = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [dom_1.Dom, Element])
            ], InputFieldCustomElement);
            exports_1("InputFieldCustomElement", InputFieldCustomElement);
        }
    }
});
//# sourceMappingURL=input-field.js.map
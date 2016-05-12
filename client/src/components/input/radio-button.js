System.register(["aurelia-templating", "aurelia-binding"], function(exports_1, context_1) {
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
    var aurelia_templating_1, aurelia_binding_1, aurelia_binding_2;
    var RadioButtonCustomElement;
    return {
        setters:[
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
                aurelia_binding_2 = aurelia_binding_1_1;
            }],
        execute: function() {
            class RadioButtonCustomElement {
                get disabledClass() {
                    return this.disabled ? "disabled" : "";
                }
            }
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], RadioButtonCustomElement.prototype, "name", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], RadioButtonCustomElement.prototype, "label", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', Object)
            ], RadioButtonCustomElement.prototype, "model", void 0);
            __decorate([
                aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_2.bindingMode.twoWay }), 
                __metadata('design:type', Object)
            ], RadioButtonCustomElement.prototype, "checked", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', Boolean)
            ], RadioButtonCustomElement.prototype, "disabled", void 0);
            __decorate([
                aurelia_binding_1.computedFrom("disabled"), 
                __metadata('design:type', String)
            ], RadioButtonCustomElement.prototype, "disabledClass", null);
            exports_1("RadioButtonCustomElement", RadioButtonCustomElement);
        }
    }
});
//# sourceMappingURL=radio-button.js.map
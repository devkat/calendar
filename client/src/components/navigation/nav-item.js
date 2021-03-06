System.register(["aurelia-templating", "aurelia-router"], function(exports_1, context_1) {
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
    var aurelia_templating_1, aurelia_router_1, aurelia_templating_2;
    var NavItemCustomElement;
    return {
        setters:[
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
                aurelia_templating_2 = aurelia_templating_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            }],
        execute: function() {
            let NavItemCustomElement = class NavItemCustomElement {
            };
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', (typeof (_a = typeof aurelia_router_1.NavModel !== 'undefined' && aurelia_router_1.NavModel) === 'function' && _a) || Object)
            ], NavItemCustomElement.prototype, "model", void 0);
            NavItemCustomElement = __decorate([
                aurelia_templating_2.containerless, 
                __metadata('design:paramtypes', [])
            ], NavItemCustomElement);
            exports_1("NavItemCustomElement", NavItemCustomElement);
        }
    }
    var _a;
});
//# sourceMappingURL=nav-item.js.map
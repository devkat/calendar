System.register(["aurelia-dependency-injection", "aurelia-router", "ramda"], function(exports_1, context_1) {
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
    var aurelia_dependency_injection_1, aurelia_router_1, ramda_1;
    var NavigationCustomElement;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (ramda_1_1) {
                ramda_1 = ramda_1_1;
            }],
        execute: function() {
            let NavigationCustomElement = class NavigationCustomElement {
                constructor(router) {
                    this.router = router;
                    this.initializeNavigation(router.navigation);
                    console.log(router);
                }
                initializeNavigation(models) {
                    const mapName = ramda_1.default.map((model) => {
                        return [model.config.route, model];
                    });
                    this.navigation = ramda_1.default.pipe(mapName, ramda_1.default.fromPairs)(models);
                }
            };
            NavigationCustomElement = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_router_1.Router !== 'undefined' && aurelia_router_1.Router) === 'function' && _a) || Object])
            ], NavigationCustomElement);
            exports_1("NavigationCustomElement", NavigationCustomElement);
        }
    }
    var _a;
});
//# sourceMappingURL=navigation.js.map
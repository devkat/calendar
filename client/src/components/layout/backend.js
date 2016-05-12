System.register(["./../../services/session-service", "aurelia-dependency-injection", "aurelia-router", "../../config/routes"], function(exports_1, context_1) {
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
    var session_service_1, aurelia_dependency_injection_1, aurelia_router_1, routes_1;
    var BackendCustomElement;
    return {
        setters:[
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }],
        execute: function() {
            let BackendCustomElement = class BackendCustomElement {
                constructor(sessionService, router) {
                    this.sessionService = sessionService;
                    this.heading = "Welcome to Aurelia!";
                    this.firstName = "John";
                    this.lastName = "Doe";
                    router.configure(routes_1.routes);
                }
                get fullName() {
                    return `${this.firstName} ${this.lastName}`;
                }
                logout() {
                    this.sessionService.logout();
                }
            };
            BackendCustomElement = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [session_service_1.SessionService, aurelia_router_1.Router])
            ], BackendCustomElement);
            exports_1("BackendCustomElement", BackendCustomElement);
        }
    }
});
//# sourceMappingURL=backend.js.map
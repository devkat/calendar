System.register(["./services/session-service", "aurelia-dependency-injection"], function(exports_1, context_1) {
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
    var session_service_1, aurelia_dependency_injection_1;
    var Welcome;
    return {
        setters:[
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }],
        execute: function() {
            let Welcome = class Welcome {
                constructor(sessionService) {
                    this.sessionService = sessionService;
                    this.heading = "Logged out";
                    this.firstName = "John";
                    this.lastName = "Doe";
                }
                get fullName() {
                    return `${this.firstName} ${this.lastName}`;
                }
                login() {
                    this.sessionService.login(this.firstName, this.lastName);
                }
            };
            Welcome = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [session_service_1.SessionService])
            ], Welcome);
            exports_1("Welcome", Welcome);
        }
    }
});
//# sourceMappingURL=login.js.map
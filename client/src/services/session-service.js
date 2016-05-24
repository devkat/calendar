System.register(["aurelia-dependency-injection", "aurelia-framework", "../rest/calendar/api/auth/auth-api", "../config/configuration"], function(exports_1, context_1) {
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
    var aurelia_dependency_injection_1, aurelia_framework_1, auth_api_1, configuration_1;
    var SessionService;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (auth_api_1_1) {
                auth_api_1 = auth_api_1_1;
            },
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            }],
        execute: function() {
            let SessionService = class SessionService {
                constructor(app, authApi, config) {
                    this.app = app;
                    this.authApi = authApi;
                    this.config = config;
                    this.session = undefined;
                }
                login(username, password) {
                    this.authApi.login(username, password)
                        .then(response => {
                        this.session = response;
                    });
                }
                logout() {
                    this.authApi.logout().then(response => {
                        this.session = undefined;
                    });
                }
                isAuthenticated() {
                    return this.session !== undefined;
                }
            };
            SessionService = __decorate([
                aurelia_dependency_injection_1.autoinject, 
                __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_framework_1.Aurelia !== 'undefined' && aurelia_framework_1.Aurelia) === 'function' && _a) || Object, auth_api_1.AuthApi, configuration_1.Configuration])
            ], SessionService);
            exports_1("SessionService", SessionService);
        }
    }
    var _a;
});
//# sourceMappingURL=session-service.js.map
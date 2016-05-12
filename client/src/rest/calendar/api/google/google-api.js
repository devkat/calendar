System.register(["aurelia-dependency-injection", "../../../../config/configuration", "../../rest-client"], function(exports_1, context_1) {
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
    var aurelia_dependency_injection_1, configuration_1, rest_client_1;
    var GoogleApi;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            },
            function (rest_client_1_1) {
                rest_client_1 = rest_client_1_1;
            }],
        execute: function() {
            let GoogleApi = class GoogleApi {
                constructor(rest, config) {
                    this.rest = rest;
                    this.config = config;
                    this.configEndpoint = config.get("rest.endpoints.google.config").asString();
                }
                getConfig() {
                    return this.rest.unauthorized().fetch(this.configEndpoint, {
                        method: "GET",
                    })
                        .then(response => {
                        return response.json();
                    });
                }
            };
            GoogleApi = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [rest_client_1.RestClient, configuration_1.Configuration])
            ], GoogleApi);
            exports_1("GoogleApi", GoogleApi);
        }
    }
});
//# sourceMappingURL=google-api.js.map
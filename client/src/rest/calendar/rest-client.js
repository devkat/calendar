System.register(["../../config/configuration", "aurelia-fetch-client", "aurelia-dependency-injection"], function(exports_1, context_1) {
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
    var configuration_1, aurelia_fetch_client_1, aurelia_dependency_injection_1;
    var RestClient;
    return {
        setters:[
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }],
        execute: function() {
            let RestClient = class RestClient {
                constructor(http, config) {
                    this.http = http;
                    this.config = config;
                    http.configure(client => {
                        client
                            .useStandardConfiguration()
                            .withBaseUrl(config.get("rest.baseUrl").asString());
                    });
                }
                unauthorized() {
                    return {
                        fetch: (input, init) => {
                            return this.http.fetch(input, init);
                        },
                    };
                }
                authorized(token) {
                    const defaults = {
                        headers: {
                            "Authorization": `token ${token}`,
                        },
                    };
                    return {
                        fetch: (input, init) => {
                            return this.http.fetch(input, Object.assign({}, defaults, init));
                        },
                    };
                }
            };
            RestClient = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient, configuration_1.Configuration])
            ], RestClient);
            exports_1("RestClient", RestClient);
        }
    }
});
//# sourceMappingURL=rest-client.js.map
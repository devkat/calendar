System.register(["aurelia-dependency-injection", "tsmonad", "aurelia-event-aggregator"], function(exports_1, context_1) {
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
    var aurelia_dependency_injection_1, tsmonad_1, aurelia_event_aggregator_1;
    var GoogleAuthService;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (tsmonad_1_1) {
                tsmonad_1 = tsmonad_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            }],
        execute: function() {
            let GoogleAuthService = class GoogleAuthService {
                constructor(eventAggregator) {
                    this.eventAggregator = eventAggregator;
                    this._accessToken = tsmonad_1.Maybe.nothing();
                }
                setAccessToken(accessToken) {
                    this._accessToken = tsmonad_1.Maybe.just(accessToken);
                    console.log("signed in ...");
                    this.eventAggregator.publish('google-signin', accessToken);
                }
                getAccessToken() {
                    return this._accessToken;
                }
                isSignedIn() {
                    return this._accessToken.map((token) => true).valueOr(false);
                }
            };
            GoogleAuthService = __decorate([
                aurelia_dependency_injection_1.autoinject, 
                __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object])
            ], GoogleAuthService);
            exports_1("GoogleAuthService", GoogleAuthService);
        }
    }
    var _a;
});
//# sourceMappingURL=google-auth-service.js.map
System.register(["../../services/google-service", "aurelia-dependency-injection", "aurelia-templating", "aurelia-event-aggregator", "../../services/google-auth-service"], function(exports_1, context_1) {
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
    var google_service_1, aurelia_dependency_injection_1, aurelia_templating_1, aurelia_event_aggregator_1, google_auth_service_1;
    var GoogleCalendarsMenuCustomElement;
    return {
        setters:[
            function (google_service_1_1) {
                google_service_1 = google_service_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            },
            function (google_auth_service_1_1) {
                google_auth_service_1 = google_auth_service_1_1;
            }],
        execute: function() {
            let GoogleCalendarsMenuCustomElement = class GoogleCalendarsMenuCustomElement {
                constructor(googleService, googleAuthService, eventAggregator) {
                    this.googleService = googleService;
                    this.googleAuthService = googleAuthService;
                    this.eventAggregator = eventAggregator;
                    this.loaded = false;
                    this.eventAggregator.subscribe('google-signin', accessToken => {
                        this.load();
                    });
                }
                load() {
                    this.googleService.getCalendars().then(calendars => {
                        this.calendars = calendars;
                        this.loaded = true;
                    });
                }
            };
            __decorate([
                aurelia_templating_1.bindable, 
                __metadata('design:type', Boolean)
            ], GoogleCalendarsMenuCustomElement.prototype, "loaded", void 0);
            GoogleCalendarsMenuCustomElement = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [google_service_1.GoogleService, google_auth_service_1.GoogleAuthService, (typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object])
            ], GoogleCalendarsMenuCustomElement);
            exports_1("GoogleCalendarsMenuCustomElement", GoogleCalendarsMenuCustomElement);
        }
    }
    var _a;
});
//# sourceMappingURL=google-calendars-menu.js.map
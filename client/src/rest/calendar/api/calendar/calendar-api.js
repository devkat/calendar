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
    var CalendarApi;
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
            let CalendarApi = class CalendarApi {
                constructor(rest, config) {
                    this.rest = rest;
                    this.config = config;
                    this.calendarTypesEndpoint = config.get("rest.endpoints.calendarTypes").asString();
                    this.calendarsEndpoint = config.get("rest.endpoints.calendars.calendars").asString();
                    this.calendarEndpoint = (id) => config.get("rest.endpoints.calendars.calendar").asString().replace(":id", id.toString());
                }
                getCalendarTypes() {
                    return this.rest.unauthorized().fetch(this.calendarTypesEndpoint, {
                        method: "GET",
                    }).then(response => { return response.json(); });
                }
                getCalendars() {
                    return this.rest.unauthorized().fetch(this.calendarsEndpoint, {
                        method: "GET",
                    }).then(response => { return response.json(); });
                }
                getCalendar(id) {
                    return this.rest.unauthorized().fetch(this.calendarEndpoint(id), {
                        method: "GET",
                    }).then(response => { return response.json(); });
                }
                postCalendar(cal) {
                    return this.rest.unauthorized().fetch(this.calendarsEndpoint, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(cal),
                    }).then(response => { });
                }
                putCalendar(cal) {
                    return this.rest.unauthorized().fetch(this.calendarEndpoint(cal.id), {
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(cal),
                    }).then(response => { });
                }
            };
            CalendarApi = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [rest_client_1.RestClient, configuration_1.Configuration])
            ], CalendarApi);
            exports_1("CalendarApi", CalendarApi);
        }
    }
});
//# sourceMappingURL=calendar-api.js.map
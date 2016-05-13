System.register(["aurelia-dependency-injection", "aurelia-framework", "../rest/calendar/api/calendar/calendar-api"], function(exports_1, context_1) {
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
    var aurelia_dependency_injection_1, aurelia_framework_1, calendar_api_1;
    var CalendarService;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (calendar_api_1_1) {
                calendar_api_1 = calendar_api_1_1;
            }],
        execute: function() {
            let CalendarService = class CalendarService {
                constructor(app, calendarApi) {
                    this.app = app;
                    this.calendarApi = calendarApi;
                }
                getCalendarTypes() {
                    return this.calendarApi.getCalendarTypes();
                }
                getCalendars() {
                    return this.calendarApi.getCalendars();
                }
            };
            CalendarService = __decorate([
                aurelia_dependency_injection_1.autoinject, 
                __metadata('design:paramtypes', [aurelia_framework_1.Aurelia, calendar_api_1.CalendarApi])
            ], CalendarService);
            exports_1("CalendarService", CalendarService);
        }
    }
});
//# sourceMappingURL=calendar-service.js.map
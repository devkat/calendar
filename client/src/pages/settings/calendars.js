System.register(["aurelia-dependency-injection", "../../services/calendar-service", "aurelia-router"], function(exports_1, context_1) {
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
    var aurelia_dependency_injection_1, calendar_service_1, aurelia_router_1;
    var Calendars;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            }],
        execute: function() {
            let Calendars = class Calendars {
                constructor(calendarService, router) {
                    this.calendarService = calendarService;
                    this.router = router;
                    this.calendarService.getCalendarTypes().then(types => { this.calendarTypes = types; });
                    this.calendarService.getCalendars().then(calendars => { this.calendars = calendars; });
                }
                edit(id) {
                    this.router.navigateToRoute("settingsCalendarEdit", { id: id });
                }
                add(type) {
                    this.router.navigateToRoute("settingsCalendarCreate", { type: type });
                }
            };
            Calendars = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [calendar_service_1.CalendarService, (typeof (_a = typeof aurelia_router_1.Router !== 'undefined' && aurelia_router_1.Router) === 'function' && _a) || Object])
            ], Calendars);
            exports_1("Calendars", Calendars);
        }
    }
    var _a;
});
//# sourceMappingURL=calendars.js.map
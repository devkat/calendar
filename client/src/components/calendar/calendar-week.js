System.register(["ramda", "moment", "../../services/calendar-service", "aurelia-dependency-injection"], function(exports_1, context_1) {
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
    var ramda_1, moment_1, calendar_service_1, aurelia_dependency_injection_1;
    var CalendarWeekCustomElement;
    return {
        setters:[
            function (ramda_1_1) {
                ramda_1 = ramda_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }],
        execute: function() {
            let CalendarWeekCustomElement = class CalendarWeekCustomElement {
                constructor(calendarService) {
                    this.calendarService = calendarService;
                    this.days = ramda_1.default.range(1, 8);
                    this.hours = ramda_1.default.range(0, 24).map(h => moment_1.default().hour(h).minute(0));
                    calendarService.getEvents(1).then(events => { this.events = events; });
                }
            };
            CalendarWeekCustomElement = __decorate([
                aurelia_dependency_injection_1.autoinject(), 
                __metadata('design:paramtypes', [calendar_service_1.CalendarService])
            ], CalendarWeekCustomElement);
            exports_1("CalendarWeekCustomElement", CalendarWeekCustomElement);
        }
    }
});
//# sourceMappingURL=calendar-week.js.map
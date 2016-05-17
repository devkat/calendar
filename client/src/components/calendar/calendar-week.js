System.register(["ramda", "moment"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ramda_1, moment_1;
    var CalendarWeekCustomElement;
    return {
        setters:[
            function (ramda_1_1) {
                ramda_1 = ramda_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }],
        execute: function() {
            class CalendarWeekCustomElement {
                constructor() {
                    this.days = ramda_1.default.range(1, 8);
                    this.hours = ramda_1.default.range(0, 24).map(h => moment_1.default().hour(h));
                }
            }
            exports_1("CalendarWeekCustomElement", CalendarWeekCustomElement);
        }
    }
});
//# sourceMappingURL=calendar-week.js.map
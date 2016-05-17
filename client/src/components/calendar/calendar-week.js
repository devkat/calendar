System.register(["ramda"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ramda_1;
    var CalendarWeekCustomElement;
    return {
        setters:[
            function (ramda_1_1) {
                ramda_1 = ramda_1_1;
            }],
        execute: function() {
            class CalendarWeekCustomElement {
                constructor() {
                    this.days = ramda_1.default.range(1, 8);
                    this.hours = ramda_1.default.range(0, 24);
                }
            }
            exports_1("CalendarWeekCustomElement", CalendarWeekCustomElement);
        }
    }
});
//# sourceMappingURL=calendar-week.js.map
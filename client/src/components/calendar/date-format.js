System.register(["moment"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var moment_1;
    var DateFormatValueConverter;
    return {
        setters:[
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }],
        execute: function() {
            class DateFormatValueConverter {
                toView(value, format) {
                    return moment_1.default(value).format(format);
                }
            }
            exports_1("DateFormatValueConverter", DateFormatValueConverter);
        }
    }
});
//# sourceMappingURL=date-format.js.map
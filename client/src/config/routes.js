System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function routes(config) {
        config.title = "Calendar";
        config.map([
            { route: "", redirect: "dashboard" },
            {
                route: "/dashboard",
                name: "dashboard",
                moduleId: "app/pages/dashboard/dashboard",
                nav: true,
                settings: { name: "Dashboard", icon: "home" },
            },
            {
                route: "/settings/calendars",
                name: "calendars",
                moduleId: "app/pages/settings/calendars",
                nav: true,
                settings: { name: "Calendars", icon: "date-range" },
            },
        ]);
        return config;
    }
    exports_1("routes", routes);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=routes.js.map
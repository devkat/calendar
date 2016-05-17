System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function routes(config) {
        config.title = "Calendar";
        config.map([
            { route: "", redirect: "calendar" },
            {
                route: "/calendar",
                name: "Calendar",
                moduleId: "app/pages/calendar/calendar",
                nav: true,
                settings: { name: "Calendar", icon: "date-range" },
            },
            {
                route: "/settings/calendars",
                name: "settingsCalendars",
                moduleId: "app/pages/settings/calendars",
                nav: true,
                settings: { name: "My Calendars", icon: "settings" },
            },
            {
                route: "/settings/calendars/create/:type",
                name: "settingsCalendarCreate",
                moduleId: "app/pages/settings/create-calendar",
                nav: false,
            },
            {
                route: "/settings/calendars/:id",
                name: "settingsCalendarEdit",
                moduleId: "app/pages/settings/edit-calendar",
                nav: false,
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
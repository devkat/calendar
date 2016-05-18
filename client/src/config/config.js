System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters:[],
        execute: function() {
            exports_1("config", config = {
                "name": "Test application",
                "rest": {
                    "baseUrl": "/api/",
                    "endpoints": {
                        "auth": {
                            "login": "auth/login",
                            "logout": "auth/logout",
                        },
                        "calendarTypes": "calendarTypes",
                        "calendars": {
                            "calendars": "calendars",
                            "calendar": "calendars/:id",
                            "events": "calendars/:id/events",
                        },
                        "google": {
                            "config": "google/config",
                            "calendars": "google/calendars",
                        },
                    },
                },
            });
        }
    }
});
//# sourceMappingURL=config.js.map
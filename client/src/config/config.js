System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters:[],
        execute: function() {
            exports_1("config", config = {
                "name": "Test application",
                "appRoot": {
                    "guest": "app/components/layout/backend",
                    "authenticated": "app/components/layout/backend",
                },
                "rest": {
                    "baseUrl": "/api/",
                    "endpoints": {
                        "auth": {
                            "login": "auth/login",
                            "logout": "auth/logout",
                        },
                        "google": {
                            "config": "google/config",
                        },
                    },
                },
            });
        }
    }
});
//# sourceMappingURL=config.js.map
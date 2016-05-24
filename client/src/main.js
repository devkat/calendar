System.register(["./services/session-service", "i18next-xhr-backend", "font-awesome/css/font-awesome.css!"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var session_service_1, i18next_xhr_backend_1;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin("aurelia-polymer")
            .plugin("aurelia-html-import-template-loader")
            .plugin("aurelia-i18n", (instance) => {
            instance.i18next.use(i18next_xhr_backend_1.default);
            return instance.setup({
                backend: {
                    loadPath: "/locales/{{lng}}/{{ns}}.json",
                },
                lng: "en",
                attributes: ["t", "i18n"],
                fallbackLng: "en",
                debug: false,
            });
        });
        const sessionService = aurelia.container.get(session_service_1.SessionService);
        aurelia.start().then(() => aurelia.setRoot("app/components/layout/backend"));
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (i18next_xhr_backend_1_1) {
                i18next_xhr_backend_1 = i18next_xhr_backend_1_1;
            },
            function (_1) {}],
        execute: function() {
        }
    }
});
//# sourceMappingURL=main.js.map
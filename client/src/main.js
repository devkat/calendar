System.register(["./services/session-service", "font-awesome/css/font-awesome.css!"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var session_service_1;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.use.plugin('aurelia-polymer');
        aurelia.use.plugin('aurelia-html-import-template-loader');
        const sessionService = aurelia.container.get(session_service_1.SessionService);
        aurelia.start().then(() => aurelia.setRoot(sessionService.appRoot()));
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (_1) {}],
        execute: function() {
        }
    }
});
//# sourceMappingURL=main.js.map
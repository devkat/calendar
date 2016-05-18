System.register(["immutable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1;
    var RestApi;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
            class RestApi {
                constructor(restClient) {
                    this.restClient = restClient;
                }
                headers() {
                    return immutable_1.default.Map();
                }
                get(endpoint) {
                    return this.restClient.unauthorized().fetch(endpoint, {
                        method: "GET",
                    }).then(response => { return response.json(); });
                }
                post(endpoint, obj) {
                    return this.restClient.unauthorized().fetch(endpoint, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(obj),
                    }).then(response => { });
                }
                put(endpoint, obj) {
                    return this.restClient.unauthorized().fetch(endpoint, {
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(obj),
                    }).then(response => { });
                }
            }
            exports_1("RestApi", RestApi);
        }
    }
});
//# sourceMappingURL=rest-api.js.map
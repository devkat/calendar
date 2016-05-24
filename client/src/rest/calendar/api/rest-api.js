System.register(["./headers"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var headers_1;
    var RestApi;
    return {
        setters:[
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            class RestApi {
                constructor(restClient) {
                    this.restClient = restClient;
                }
                headers() {
                    return headers_1.Headers.create();
                }
                get(endpoint) {
                    return this.restClient.unauthorized().fetch(endpoint, {
                        method: "GET",
                        headers: this.headers().toObject(),
                    }).then(response => { return response.json(); });
                }
                post(endpoint, obj) {
                    return this.restClient.unauthorized().fetch(endpoint, {
                        method: "POST",
                        headers: this.headers().set("Content-Type", "application/json").toObject(),
                        body: JSON.stringify(obj),
                    }).then(response => { });
                }
                put(endpoint, obj) {
                    return this.restClient.unauthorized().fetch(endpoint, {
                        method: "PUT",
                        headers: this.headers().set("Content-Type", "application/json").toObject(),
                        body: JSON.stringify(obj),
                    }).then(response => { });
                }
            }
            exports_1("RestApi", RestApi);
        }
    }
});
//# sourceMappingURL=rest-api.js.map
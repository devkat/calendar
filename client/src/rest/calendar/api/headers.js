System.register(["immutable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1;
    var Headers;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
            class Headers {
                constructor(map) {
                    this.map = map;
                }
                static create() {
                    return new Headers(immutable_1.default.Map());
                }
                set(name, value) {
                    return new Headers(this.map.set(name, value));
                }
                toObject() {
                    return this.map.toObject();
                }
            }
            exports_1("Headers", Headers);
        }
    }
});
//# sourceMappingURL=headers.js.map
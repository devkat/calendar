System.register(["./config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config_1;
    var Configuration, ConfigurationResult;
    return {
        setters:[
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            class Configuration {
                get(key) {
                    const value = this.resolveRecursive(config_1.config, key.split(".").reverse());
                    return new ConfigurationResult(value);
                }
                resolveRecursive(config, keys) {
                    const current = config[keys.pop()];
                    if (current === undefined) {
                        throw Error("Config key is undefined");
                    }
                    else if (keys.length > 0) {
                        return this.resolveRecursive(current, keys);
                    }
                    else {
                        return current;
                    }
                }
            }
            exports_1("Configuration", Configuration);
            class ConfigurationResult {
                constructor(value) {
                    this.value = value;
                }
                asString() {
                    return this.value.toString();
                }
                asInt() {
                    return parseInt(this.value, 10);
                }
                asFloat() {
                    return parseFloat(this.value);
                }
                asBoolean() {
                    return !!this.value;
                }
            }
            exports_1("ConfigurationResult", ConfigurationResult);
        }
    }
});
//# sourceMappingURL=configuration.js.map
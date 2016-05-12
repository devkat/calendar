System.register(["ramda", "aurelia-templating", "aurelia-binding", "moment"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ramda_1, aurelia_templating_1, aurelia_binding_1, moment_1;
    var InputDateCustomElement;
    return {
        setters:[
            function (ramda_1_1) {
                ramda_1 = ramda_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }],
        execute: function() {
            class InputDateCustomElement {
                bind() {
                    if (this.value) {
                        this.updateValues();
                    }
                }
                onDateChanged(part, event) {
                    let date = moment_1.default(this.value);
                    const value = part === "month"
                        ? event.detail.value - 1
                        : event.detail.value;
                    date.set(part, value);
                    this.value = date.format("YYYY-MM-DD");
                }
                valueChanged() {
                    this.updateValues();
                }
                get days() {
                    const range = ramda_1.default.range(1, 32);
                    const mapToDropdown = ramda_1.default.map((n) => {
                        return {
                            value: n,
                            label: (n < 10) ? ("0" + n) : n.toString(),
                        };
                    });
                    return mapToDropdown(range);
                }
                get months() {
                    return [{
                            value: 1,
                            label: "Januar",
                        }, {
                            value: 2,
                            label: "Februar",
                        }, {
                            value: 3,
                            label: "März",
                        }, {
                            value: 4,
                            label: "April",
                        }, {
                            value: 5,
                            label: "Mai",
                        }, {
                            value: 6,
                            label: "Juni",
                        }, {
                            value: 7,
                            label: "Juli",
                        }, {
                            value: 8,
                            label: "August",
                        }, {
                            value: 9,
                            label: "September",
                        }, {
                            value: 10,
                            label: "Oktober",
                        }, {
                            value: 11,
                            label: "November",
                        }, {
                            value: 12,
                            label: "Dezember",
                        }];
                }
                get years() {
                    const year = new Date().getFullYear() + 1;
                    const range = ramda_1.default.range(year - 100, year);
                    const mapToDropdown = ramda_1.default.map((n) => {
                        return {
                            value: n,
                            label: n.toString(),
                        };
                    });
                    return mapToDropdown(range).reverse();
                }
                updateValues() {
                    const split = this.value.split("-");
                    const findDay = ramda_1.default.find(ramda_1.default.propEq("value", parseInt(split[2], 10)));
                    const findMonth = ramda_1.default.find(ramda_1.default.propEq("value", parseInt(split[1], 10)));
                    const findYear = ramda_1.default.find(ramda_1.default.propEq("value", parseInt(split[0], 10)));
                    this.day = ramda_1.default.prop("value", findDay(this.days));
                    this.month = ramda_1.default.prop("value", findMonth(this.months));
                    this.year = ramda_1.default.prop("value", findYear(this.years));
                }
            }
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputDateCustomElement.prototype, "label", void 0);
            __decorate([
                aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay }), 
                __metadata('design:type', String)
            ], InputDateCustomElement.prototype, "value", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', String)
            ], InputDateCustomElement.prototype, "name", void 0);
            __decorate([
                aurelia_templating_1.bindable(), 
                __metadata('design:type', Boolean)
            ], InputDateCustomElement.prototype, "disabled", void 0);
            exports_1("InputDateCustomElement", InputDateCustomElement);
        }
    }
});
//# sourceMappingURL=input-date.js.map
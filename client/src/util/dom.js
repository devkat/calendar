System.register(["ramda"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ramda_1;
    var Dom;
    return {
        setters:[
            function (ramda_1_1) {
                ramda_1 = ramda_1_1;
            }],
        execute: function() {
            class Dom {
                constructor(selector) {
                    if (typeof selector === "string") {
                        this.elements = Array.from(document.querySelectorAll(selector));
                    }
                    else if (selector instanceof Dom) {
                        this.elements = selector.el;
                    }
                    else if (selector instanceof Element) {
                        this.elements = [selector];
                    }
                    else if (ramda_1.default.isArrayLike(selector)) {
                        this.elements = Array.from(selector);
                    }
                }
                setAttribute(name, value) {
                    const v = Array.isArray(value) ? value : [value];
                    this.elements.forEach((e) => e.setAttribute(name, v.join(" ")));
                    return this;
                }
                getAttribute(name) {
                    return this.elements[0].getAttribute(name);
                }
                siblings(selector) {
                    const children = ramda_1.default.chain((e) => Array.from(e.parentElement.children))(this.elements);
                    const siblings = ramda_1.default.without(this.elements)(children);
                    const filtered = selector
                        ? ramda_1.default.filter((e) => e.matches(selector))(siblings)
                        : siblings;
                    return new Dom(filtered);
                }
                addClass(value) {
                    this.elements.forEach((e) => e.classList.add(value));
                    return this;
                }
                removeClass(value) {
                    this.elements.forEach((e) => e.classList.remove(value));
                    return this;
                }
                hasClass(value) {
                    return this.elements[0].classList.contains(value);
                }
                find(selector) {
                    const el = this.elements[0];
                    const matches = el.querySelectorAll(selector);
                    return new Dom(matches);
                }
                get el() {
                    return this.elements;
                }
            }
            exports_1("Dom", Dom);
        }
    }
});
//# sourceMappingURL=dom.js.map
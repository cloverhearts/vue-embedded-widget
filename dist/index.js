"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamedComponent_1 = __importDefault(require("./Components/NamedComponent"));
exports.default = (function (vue) {
    var list = [];
    return {
        registerComponent: function (component, name) {
            list.push(new NamedComponent_1.default(name || component.name, component));
        },
        printList: function () {
            console.log(list, vue);
        },
        mount: function () {
            list.forEach(function (comp) { return comp.mount(vue); });
        }
    };
});

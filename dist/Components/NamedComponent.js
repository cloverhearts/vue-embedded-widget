"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamedComponent = /** @class */ (function () {
    function NamedComponent(name, component) {
        this._name = name;
        this._component = component;
    }
    Object.defineProperty(NamedComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedComponent.prototype, "component", {
        get: function () {
            return this._component;
        },
        enumerable: true,
        configurable: true
    });
    NamedComponent.prototype._getTypedAttribute = function (ele, key) {
        var value = ele.getAttribute(key) || '';
        var definedMeta = this.component.props[key] || { type: null };
        var attributeType = definedMeta && definedMeta.type ? definedMeta.type.name : 'String';
        try {
            if (attributeType === "String" /* String */) {
                return String(value);
            }
            else if (attributeType === "Number" /* Number */) {
                return Number(value);
            }
            else if (attributeType === "Boolean" /* Boolean */) {
                return eval("" + value.toLowerCase());
            }
            else {
                return eval("" + value);
            }
        }
        catch (_a) {
            return String(value);
        }
    };
    NamedComponent.prototype.mount = function (VueObject, queryString) {
        var _this = this;
        document.querySelectorAll("" + (queryString || this.name)).forEach(function (ele) {
            var props = ele.getAttributeNames().reduce(function (props, key) {
                props[key] = _this._getTypedAttribute(ele, key);
                return props;
            }, {});
            new VueObject({
                render: function (h) { return h(__assign({}, _this.component), { props: props }); }
            }).$mount(ele);
        });
    };
    return NamedComponent;
}());
exports.default = NamedComponent;

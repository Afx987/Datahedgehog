"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_hover.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var DartUnitHoverComputer = /** @class */ (function () {
    function DartUnitHoverComputer(_unit, _offset) {
    }
    DartUnitHoverComputer_1 = DartUnitHoverComputer;
    DartUnitHoverComputer.prototype.DartUnitHoverComputer = function (_unit, _offset) {
        this._unit = _unit;
        this._offset = _offset;
    };
    DartUnitHoverComputer.prototype.compute = function () {
        var node = new bare.createInstance(any, null, this._offset).searchWithin(this._unit);
        if (utils_1.op(utils_1.Op.EQUALS, node, null)) {
            return null;
        }
        if (_common_1.is(node.parent, any) && _common_1.is(node.parent.parent, any) && _common_1.is(node.parent.parent.parent, any)) {
            node = node.parent.parent.parent;
        }
        if (_common_1.is(node.parent, any) && _common_1.is(node.parent.parent, any)) {
            node = node.parent.parent;
        }
        if (_common_1.is(node, any)) {
            var expression = node;
            var hover = new bare.createInstance(any, null, expression.offset, expression.length);
            var element = ElementLocator.locate(expression);
            if (element != null) {
                if (_common_1.is(element, any)) {
                    var accessor = element;
                    if (accessor.isSynthetic) {
                        element = accessor.variable;
                    }
                }
                hover.elementDescription = element.toString();
                hover.elementKind = element.kind.displayName;
                hover.isDeprecated = element.isDeprecated;
                if (_common_1.isNot(element.enclosingElement, any)) {
                    var containingClass = element.getAncestor(function (e) {
                        return _common_1.is(e, any);
                    });
                    if (containingClass != null) {
                        hover.containingClassDescription = containingClass.displayName;
                    }
                    var library = element.library;
                    if (library != null) {
                        hover.containingLibraryName = library.name;
                        hover.containingLibraryPath = library.source.fullName;
                    }
                }
                hover.dartdoc = this._computeDocumentation(element);
            }
            hover.parameter = DartUnitHoverComputer_1._safeToString(expression.bestParameterElement);
            {
                var parent_1 = expression.parent;
                var staticType = null;
                var propagatedType = expression.propagatedType;
                if (_common_1.is(element, any)) {
                    staticType = element.type;
                }
                else if (utils_1.op(utils_1.Op.EQUALS, element, null) || _common_1.is(element, any)) {
                    staticType = expression.staticType;
                }
                if (_common_1.is(parent_1, any) && utils_1.op(utils_1.Op.EQUALS, parent_1.methodName, expression)) {
                    staticType = parent_1.staticInvokeType;
                    propagatedType = parent_1.propagatedInvokeType;
                    if (staticType != null && staticType.isDynamic) {
                        staticType = null;
                    }
                    if (propagatedType != null && propagatedType.isDynamic) {
                        propagatedType = null;
                    }
                }
                hover.staticType = DartUnitHoverComputer_1._safeToString(staticType);
                hover.propagatedType = DartUnitHoverComputer_1._safeToString(propagatedType);
            }
            return hover;
        }
        return null;
    };
    DartUnitHoverComputer.prototype._computeDocumentation = function (element) {
        if (_common_1.is(element, any)) {
            element = element.field;
        }
        if (_common_1.is(element, any)) {
            element = element.enclosingElement;
        }
        if (utils_1.op(utils_1.Op.EQUALS, element, null)) {
            return null;
        }
        if (element.documentationComment != null) {
            return removeDartDocDelimiters(element.documentationComment);
        }
        var overridden = findOverriddenElements(element);
        for (var _i = 0, _a = (function (_) {
            {
                _.addAll(overridden.superElements);
                _.addAll(overridden.interfaceElements);
                return _;
            }
        })(new core.DartList.literal()); _i < _a.length; _i++) {
            var superElement = _a[_i];
            var rawDoc = superElement.documentationComment;
            if (rawDoc != null) {
                var interfaceClass = superElement.enclosingElement;
                return utils_1.op(utils_1.Op.PLUS, removeDartDocDelimiters(rawDoc), "\n\nCopied from ", $, { interfaceClass: interfaceClass, : .displayName }(templateObject_1 || (templateObject_1 = __makeTemplateObject(["."], ["."]))));
            }
        }
        return null;
    };
    DartUnitHoverComputer._safeToString = function (obj) {
        return (function (_6_) { return (!!_6_) ? _6_.toString() : null; })(obj);
    };
    var DartUnitHoverComputer_1;
    __decorate([
        utils_1.defaultConstructor
    ], DartUnitHoverComputer.prototype, "DartUnitHoverComputer", null);
    DartUnitHoverComputer = DartUnitHoverComputer_1 = __decorate([
        utils_1.DartClass
    ], DartUnitHoverComputer);
    return DartUnitHoverComputer;
}());
exports.DartUnitHoverComputer = DartUnitHoverComputer;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
var templateObject_1;
//# sourceMappingURL=computer_hover.js.map
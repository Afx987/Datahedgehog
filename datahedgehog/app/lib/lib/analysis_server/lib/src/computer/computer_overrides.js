"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_overrides.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
exports.findOverriddenElements = function (element) {
    if (_common_1.is((function (t) { return (!!t) ? t.enclosingElement : null; })(element), any)) {
        return new _OverriddenElementsFinder(element).find();
    }
    return new OverriddenElements(element, new core.DartList.literal(), new core.DartList.literal());
};
var DartUnitOverridesComputer = /** @class */ (function () {
    function DartUnitOverridesComputer(_unit) {
    }
    DartUnitOverridesComputer.prototype.DartUnitOverridesComputer = function (_unit) {
        this._overrides = new core.DartList.literal();
        this._unit = _unit;
    };
    DartUnitOverridesComputer.prototype.compute = function () {
        for (var _i = 0, _a = this._unit.declarations; _i < _a.length; _i++) {
            var unitMember = _a[_i];
            if (_common_1.is(unitMember, any)) {
                for (var _b = 0, _c = unitMember.members; _b < _c.length; _b++) {
                    var classMember = _c[_b];
                    if (_common_1.is(classMember, any)) {
                        if (classMember.isStatic) {
                            continue;
                        }
                        this._addOverride(classMember.name);
                    }
                    if (_common_1.is(classMember, any)) {
                        if (classMember.isStatic) {
                            continue;
                        }
                        var fields = classMember.fields.variables;
                        for (var _d = 0, fields_1 = fields; _d < fields_1.length; _d++) {
                            var field = fields_1[_d];
                            this._addOverride(field.name);
                        }
                    }
                }
            }
        }
        return this._overrides;
    };
    DartUnitOverridesComputer.prototype._addOverride = function (node) {
        var element = node.staticElement;
        var overridesResult = new _OverriddenElementsFinder(element).find();
        var superElements = overridesResult.superElements;
        var interfaceElements = overridesResult.interfaceElements;
        if (superElements.isNotEmpty || interfaceElements.isNotEmpty) {
            var superMember = superElements.isNotEmpty ? null /*topLevl*/.newOverriddenMember_fromEngine(superElements.first) : null;
            var interfaceMembers = interfaceElements.map(function (member) {
                return null /*topLevl*/.newOverriddenMember_fromEngine(member);
            }).toList();
            this._overrides.add(new bare.createInstance(any, null, node.offset, node.length, {
                superclassMember: superMember, interfaceMembers: nullIfEmpty(interfaceMembers)
            }));
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], DartUnitOverridesComputer.prototype, "DartUnitOverridesComputer", null);
    DartUnitOverridesComputer = __decorate([
        utils_1.DartClass
    ], DartUnitOverridesComputer);
    return DartUnitOverridesComputer;
}());
exports.DartUnitOverridesComputer = DartUnitOverridesComputer;
var OverriddenElements = /** @class */ (function () {
    function OverriddenElements(element, superElements, interfaceElements) {
    }
    OverriddenElements.prototype.OverriddenElements = function (element, superElements, interfaceElements) {
        this.element = element;
        this.superElements = superElements;
        this.interfaceElements = interfaceElements;
    };
    __decorate([
        utils_1.defaultConstructor
    ], OverriddenElements.prototype, "OverriddenElements", null);
    OverriddenElements = __decorate([
        utils_1.DartClass
    ], OverriddenElements);
    return OverriddenElements;
}());
exports.OverriddenElements = OverriddenElements;
var _OverriddenElementsFinder = /** @class */ (function () {
    function _OverriddenElementsFinder(seed) {
    }
    _OverriddenElementsFinder_1 = _OverriddenElementsFinder;
    Object.defineProperty(_OverriddenElementsFinder, "FIELD_KINDS", {
        get: function () {
            if (this.__$FIELD_KINDS === undefined) {
                this.__$FIELD_KINDS = new core.DartList.literal(ElementKind.FIELD, ElementKind.GETTER, ElementKind.SETTER);
            }
            return this.__$FIELD_KINDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_OverriddenElementsFinder, "GETTER_KINDS", {
        get: function () {
            if (this.__$GETTER_KINDS === undefined) {
                this.__$GETTER_KINDS = new core.DartList.literal(ElementKind.FIELD, ElementKind.GETTER);
            }
            return this.__$GETTER_KINDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_OverriddenElementsFinder, "METHOD_KINDS", {
        get: function () {
            if (this.__$METHOD_KINDS === undefined) {
                this.__$METHOD_KINDS = new core.DartList.literal(ElementKind.METHOD);
            }
            return this.__$METHOD_KINDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_OverriddenElementsFinder, "SETTER_KINDS", {
        get: function () {
            if (this.__$SETTER_KINDS === undefined) {
                this.__$SETTER_KINDS = new core.DartList.literal(ElementKind.FIELD, ElementKind.SETTER);
            }
            return this.__$SETTER_KINDS;
        },
        enumerable: true,
        configurable: true
    });
    _OverriddenElementsFinder.prototype._OverriddenElementsFinder = function (seed) {
        this._superElements = new core.DartList.literal();
        this._interfaceElements = new core.DartList.literal();
        this._visited = new core.DartSet();
        this._seed = seed;
        this._class = seed.enclosingElement;
        if (utils_1.op(utils_1.Op.EQUALS, this._class, null)) {
            var type = seed.runtimeType;
            var name_1 = seed.name;
            throw new core.ArgumentError("The " + type + " named " + name_1 + " does not have an enclosing element");
        }
        this._library = this._class.library;
        this._name = seed.displayName;
        if (_common_1.is(seed, any)) {
            this._kinds = _OverriddenElementsFinder_1.METHOD_KINDS;
        }
        else if (_common_1.is(seed, any)) {
            this._kinds = seed.isGetter ? _OverriddenElementsFinder_1.GETTER_KINDS : _OverriddenElementsFinder_1.SETTER_KINDS;
        }
        else {
            this._kinds = _OverriddenElementsFinder_1.FIELD_KINDS;
        }
    };
    _OverriddenElementsFinder.prototype.find = function () {
        this._visited.clear();
        this._addSuperOverrides(this._class.supertype);
        this._visited.clear();
        this._addInterfaceOverrides(this._class.type, false);
        this._superElements.forEach(this._interfaceElements.remove.bind(this._interfaceElements));
        return new OverriddenElements(this._seed, this._superElements, this._interfaceElements);
    };
    _OverriddenElementsFinder.prototype._addInterfaceOverrides = function (type, checkType) {
        if (utils_1.op(utils_1.Op.EQUALS, type, null)) {
            return;
        }
        if (!this._visited.add(type)) {
            return;
        }
        if (checkType) {
            var element = this._lookupMember(type.element);
            if (element != null && !this._interfaceElements.contains(element)) {
                this._interfaceElements.add(element);
            }
        }
        for (var _i = 0, _a = type.interfaces; _i < _a.length; _i++) {
            var interfaceType = _a[_i];
            this._addInterfaceOverrides(interfaceType, true);
        }
        this._addInterfaceOverrides(type.superclass, checkType);
    };
    _OverriddenElementsFinder.prototype._addSuperOverrides = function (type) {
        if (utils_1.op(utils_1.Op.EQUALS, type, null)) {
            return;
        }
        if (!this._visited.add(type)) {
            return;
        }
        var element = this._lookupMember(type.element);
        if (element != null && !this._superElements.contains(element)) {
            this._superElements.add(element);
        }
        this._addSuperOverrides(type.superclass);
    };
    _OverriddenElementsFinder.prototype._lookupMember = function (classElement) {
        if (utils_1.op(utils_1.Op.EQUALS, classElement, null)) {
            return null;
        }
        var member;
        if (this._kinds.contains(ElementKind.METHOD)) {
            member = classElement.lookUpMethod(this._name, this._library);
            if (member != null) {
                return member;
            }
        }
        if (this._kinds.contains(ElementKind.GETTER)) {
            member = classElement.lookUpGetter(this._name, this._library);
            if (member != null) {
                return member;
            }
        }
        if (this._kinds.contains(ElementKind.SETTER)) {
            member = classElement.lookUpSetter(this._name + '=', this._library);
            if (member != null) {
                return member;
            }
        }
        return null;
    };
    var _OverriddenElementsFinder_1;
    __decorate([
        utils_1.defaultConstructor
    ], _OverriddenElementsFinder.prototype, "_OverriddenElementsFinder", null);
    _OverriddenElementsFinder = _OverriddenElementsFinder_1 = __decorate([
        utils_1.DartClass
    ], _OverriddenElementsFinder);
    return _OverriddenElementsFinder;
}());
exports._OverriddenElementsFinder = _OverriddenElementsFinder;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=computer_overrides.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/search/type_hierarchy.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var TypeHierarchyComputer = /** @class */ (function () {
    function TypeHierarchyComputer(_searchEngine, _pivotElement) {
    }
    TypeHierarchyComputer.prototype.TypeHierarchyComputer = function (_searchEngine, _pivotElement) {
        this._items = new core.DartList.literal();
        this._itemClassElements = new core.DartList.literal();
        this._elementItemMap = new core.DartHashMap();
        this._searchEngine = _searchEngine;
        this._pivotElement = _pivotElement;
        this._pivotLibrary = this._pivotElement.library;
        this._pivotKind = this._pivotElement.kind;
        this._pivotName = this._pivotElement.name;
        var element = this._pivotElement;
        if (_common_1.is(this._pivotElement, any)) {
            this._pivotFieldFinal = this._pivotElement.isFinal;
            element = this._pivotElement.enclosingElement;
        }
        if (_common_1.is(this._pivotElement, any)) {
            element = this._pivotElement.enclosingElement;
        }
        if (_common_1.is(element, any)) {
            this._pivotClass = element;
        }
    };
    TypeHierarchyComputer.prototype.compute = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._pivotClass != null)) return [3 /*break*/, 2];
                        type = this._pivotClass.type;
                        this._createSuperItem(type);
                        return [4 /*yield*/, this._createSubclasses(this._items[0], 0, type)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this._items];
                    case 2: return [2 /*return*/, null];
                }
            });
        }); })());
    };
    TypeHierarchyComputer.prototype.computeSuper = function () {
        if (this._pivotClass != null) {
            var type = this._pivotClass.type;
            this._createSuperItem(type);
            return this._items;
        }
        return null;
    };
    TypeHierarchyComputer.prototype._createSubclasses = function (item, itemId, type) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var subElements, subItemIds, _i, subElements_1, subElement, subItem, id, subMemberElement, subItemId, _a, subItemIds_1, subItemId, subItem, subItemElement, subType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getDirectSubClasses(this._searchEngine, type.element)];
                    case 1:
                        subElements = _b.sent();
                        subItemIds = new core.DartList.literal();
                        for (_i = 0, subElements_1 = subElements; _i < subElements_1.length; _i++) {
                            subElement = subElements_1[_i];
                            subItem = this._elementItemMap.get(subElement);
                            if (subItem != null) {
                                id = this._items.indexOf(subItem);
                                item.subclasses.add(id);
                                continue;
                            }
                            subMemberElement = this._findMemberElement(subElement);
                            subItem = new bare.createInstance(any, null, convertElement(subElement), {
                                memberElement: subMemberElement != null ? convertElement(subMemberElement) : null, superclass: itemId
                            });
                            subItemId = this._items.length;
                            this._elementItemMap.set(subElement, subItem);
                            this._items.add(subItem);
                            this._itemClassElements.add(subElement);
                            item.subclasses.add(subItemId);
                            subItemIds.add(subItemId);
                        }
                        _a = 0, subItemIds_1 = subItemIds;
                        _b.label = 2;
                    case 2:
                        if (!(_a < subItemIds_1.length)) return [3 /*break*/, 5];
                        subItemId = subItemIds_1[_a];
                        subItem = this._items[subItemId];
                        subItemElement = this._itemClassElements[subItemId];
                        subType = subItemElement.type;
                        return [4 /*yield*/, this._createSubclasses(subItem, subItemId, subType)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _a++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        }); })());
    };
    TypeHierarchyComputer.prototype._createSuperItem = function (type) {
        var _this = this;
        var item = this._elementItemMap.get(type.element);
        if (item != null) {
            return this._items.indexOf(item);
        }
        var itemId;
        {
            var displayName = null;
            if (type.typeArguments.isNotEmpty) {
                displayName = type.toString();
            }
            var classElement = type.element;
            var memberElement = this._findMemberElement(classElement);
            item = new bare.createInstance(any, null, convertElement(classElement), {
                displayName: displayName, memberElement: memberElement != null ? convertElement(memberElement) : null
            });
            this._elementItemMap.set(classElement, item);
            itemId = this._items.length;
            this._items.add(item);
            this._itemClassElements.add(classElement);
        }
        {
            var superType = type.superclass;
            if (superType != null) {
                item.superclass = this._createSuperItem(superType);
            }
        }
        type.mixins.forEach(function (type) {
            var id = _this._createSuperItem(type);
            item.mixins.add(id);
        });
        type.interfaces.forEach(function (type) {
            var id = _this._createSuperItem(type);
            item.interfaces.add(id);
        });
        return itemId;
    };
    TypeHierarchyComputer.prototype._findMemberElement = function (clazz) {
        var result;
        if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.METHOD)) {
            result = clazz.getMethod(this._pivotName);
        }
        else if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.GETTER)) {
            result = clazz.getGetter(this._pivotName);
        }
        else if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.SETTER)) {
            result = clazz.getSetter(this._pivotName);
        }
        else if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.FIELD)) {
            result = clazz.getGetter(this._pivotName);
            if (utils_1.op(utils_1.Op.EQUALS, result, null) && !this._pivotFieldFinal) {
                result = clazz.getSetter(this._pivotName);
            }
        }
        if (result != null && result.isAccessibleIn(this._pivotLibrary)) {
            return result;
        }
        for (var _i = 0, _a = clazz.mixins.reversed; _i < _a.length; _i++) {
            var mixin = _a[_i];
            var mixinElement = mixin.element;
            if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.METHOD)) {
                result = mixinElement.lookUpMethod(this._pivotName, this._pivotLibrary);
            }
            else if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.GETTER)) {
                result = mixinElement.lookUpGetter(this._pivotName, this._pivotLibrary);
            }
            else if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.SETTER)) {
                result = mixinElement.lookUpSetter(this._pivotName, this._pivotLibrary);
            }
            else if (utils_1.op(utils_1.Op.EQUALS, this._pivotKind, ElementKind.FIELD)) {
                result = mixinElement.lookUpGetter(this._pivotName, this._pivotLibrary);
                if (utils_1.op(utils_1.Op.EQUALS, result, null) && !this._pivotFieldFinal) {
                    result = mixinElement.lookUpSetter(this._pivotName, this._pivotLibrary);
                }
            }
            if (utils_1.op(utils_1.Op.EQUALS, result, this._pivotElement)) {
                return null;
            }
            if (result != null) {
                return result;
            }
        }
        return null;
    };
    __decorate([
        utils_1.defaultConstructor
    ], TypeHierarchyComputer.prototype, "TypeHierarchyComputer", null);
    TypeHierarchyComputer = __decorate([
        utils_1.DartClass
    ], TypeHierarchyComputer);
    return TypeHierarchyComputer;
}());
exports.TypeHierarchyComputer = TypeHierarchyComputer;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=type_hierarchy.js.map
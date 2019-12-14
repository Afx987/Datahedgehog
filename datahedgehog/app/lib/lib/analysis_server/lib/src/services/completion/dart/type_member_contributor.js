"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/type_member_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var TypeMemberContributor = /** @class */ (function (_super) {
    __extends(TypeMemberContributor, _super);
    function TypeMemberContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    TypeMemberContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var containingLibrary, expression, elem, type, elem, visitor, containingMethodName, containingMethod, id, builder;
            return __generator(this, function (_a) {
                containingLibrary = request.libraryElement;
                if (utils_1.op(utils_1.Op.EQUALS, containingLibrary, null)) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                expression = request.dotTarget;
                if (utils_1.op(utils_1.Op.EQUALS, expression, null) || expression.isSynthetic) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                if (_common_1.is(expression, any)) {
                    elem = expression.bestElement;
                    if (_common_1.is(elem, any)) {
                        return [2 /*return*/, EMPTY_LIST];
                    }
                    if (_common_1.is(elem, any)) {
                        return [2 /*return*/, EMPTY_LIST];
                    }
                }
                type = expression.bestType;
                if (type.isDynamic) {
                    if (_common_1.is(expression, any)) {
                        elem = expression.bestElement;
                        if (_common_1.is(elem, any)) {
                            type = elem.returnType;
                        }
                        else if (_common_1.is(elem, any)) {
                            type = elem.type;
                        }
                        else if (_common_1.is(elem, any)) {
                            type = elem.type;
                        }
                        if ((utils_1.op(utils_1.Op.EQUALS, type, null) || type.isDynamic) && _common_1.is(expression, any)) {
                            visitor = new _LocalBestTypeVisitor(expression.name, request.offset);
                            if (visitor.visit(expression) && visitor.typeFound != null) {
                                type = visitor.typeFound;
                            }
                        }
                    }
                }
                if (_common_1.is(expression, any) && _common_1.is(type, any)) {
                    type = type.superclass;
                    containingMethod = expression.getAncestor(function (p) {
                        return _common_1.is(p, any);
                    });
                    if (containingMethod != null) {
                        id = containingMethod.name;
                        if (id != null) {
                            containingMethodName = id.name;
                        }
                    }
                }
                if (type.isDynamic) {
                    type = request.objectType;
                }
                if (_common_1.is(type, any)) {
                    builder = new _SuggestionBuilder(containingLibrary);
                    builder.buildSuggestions(type, containingMethodName, request.ideOptions);
                    return [2 /*return*/, builder.suggestions.toList()];
                }
                return [2 /*return*/, EMPTY_LIST];
            });
        }); })());
    };
    TypeMemberContributor.prototype.TypeMemberContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], TypeMemberContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], TypeMemberContributor.prototype, "TypeMemberContributor", null);
    TypeMemberContributor = __decorate([
        utils_1.DartClass
    ], TypeMemberContributor);
    return TypeMemberContributor;
}(any));
exports.TypeMemberContributor = TypeMemberContributor;
var _LocalBestTypeVisitor = /** @class */ (function (_super) {
    __extends(_LocalBestTypeVisitor, _super);
    function _LocalBestTypeVisitor(targetName, offset) {
        var _this = this;
        return _this;
    }
    _LocalBestTypeVisitor.prototype._LocalBestTypeVisitor = function (targetName, offset) {
        _super.prototype.DartObject.call(this, offset);
        this.targetName = targetName;
    };
    _LocalBestTypeVisitor.prototype.declaredClass = function (declaration) {
        if (utils_1.op(utils_1.Op.EQUALS, declaration.name.name, this.targetName)) {
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredClassTypeAlias = function (declaration) {
        if (utils_1.op(utils_1.Op.EQUALS, declaration.name.name, this.targetName)) {
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredField = function (fieldDecl, varDecl) {
        if (utils_1.op(utils_1.Op.EQUALS, varDecl.name.name, this.targetName)) {
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredFunction = function (declaration) {
        if (utils_1.op(utils_1.Op.EQUALS, declaration.name.name, this.targetName)) {
            var typeName = declaration.returnType;
            if (typeName != null) {
                this.typeFound = typeName.type;
            }
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredFunctionTypeAlias = function (declaration) {
        if (utils_1.op(utils_1.Op.EQUALS, declaration.name.name, this.targetName)) {
            var typeName = declaration.returnType;
            if (typeName != null) {
                this.typeFound = typeName.type;
            }
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredLabel = function (label, isCaseLabel) {
        if (utils_1.op(utils_1.Op.EQUALS, label.label.name, this.targetName)) {
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredLocalVar = function (name, type) {
        if (utils_1.op(utils_1.Op.EQUALS, name.name, this.targetName)) {
            this.typeFound = name.bestType;
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredMethod = function (declaration) {
        if (utils_1.op(utils_1.Op.EQUALS, declaration.name.name, this.targetName)) {
            var typeName = declaration.returnType;
            if (typeName != null) {
                this.typeFound = typeName.type;
            }
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredParam = function (name, type) {
        if (utils_1.op(utils_1.Op.EQUALS, name.name, this.targetName)) {
            finished();
        }
    };
    _LocalBestTypeVisitor.prototype.declaredTopLevelVar = function (varList, varDecl) {
        if (utils_1.op(utils_1.Op.EQUALS, varDecl.name.name, this.targetName)) {
            finished();
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], _LocalBestTypeVisitor.prototype, "_LocalBestTypeVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredClass", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredClassTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredField", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredFunction", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredFunctionTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredLabel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredLocalVar", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredMethod", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredParam", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalBestTypeVisitor.prototype, "declaredTopLevelVar", null);
    _LocalBestTypeVisitor = __decorate([
        utils_1.DartClass
    ], _LocalBestTypeVisitor);
    return _LocalBestTypeVisitor;
}(any));
exports._LocalBestTypeVisitor = _LocalBestTypeVisitor;
var _SuggestionBuilder = /** @class */ (function () {
    function _SuggestionBuilder(containingLibrary) {
    }
    _SuggestionBuilder_1 = _SuggestionBuilder;
    Object.defineProperty(_SuggestionBuilder, "_COMPLETION_TYPE_NONE", {
        get: function () {
            if (this.__$_COMPLETION_TYPE_NONE === undefined) {
                this.__$_COMPLETION_TYPE_NONE = 0;
            }
            return this.__$_COMPLETION_TYPE_NONE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_SuggestionBuilder, "_COMPLETION_TYPE_GETTER", {
        get: function () {
            if (this.__$_COMPLETION_TYPE_GETTER === undefined) {
                this.__$_COMPLETION_TYPE_GETTER = 1;
            }
            return this.__$_COMPLETION_TYPE_GETTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_SuggestionBuilder, "_COMPLETION_TYPE_SETTER", {
        get: function () {
            if (this.__$_COMPLETION_TYPE_SETTER === undefined) {
                this.__$_COMPLETION_TYPE_SETTER = 2;
            }
            return this.__$_COMPLETION_TYPE_SETTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_SuggestionBuilder, "_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET", {
        get: function () {
            if (this.__$_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET === undefined) {
                this.__$_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET = 3;
            }
            return this.__$_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET;
        },
        enumerable: true,
        configurable: true
    });
    _SuggestionBuilder.prototype._SuggestionBuilder = function (containingLibrary) {
        this._completionTypesGenerated = new core.DartHashMap();
        this._suggestionMap = new core.DartMap.literal([]);
        this.containingLibrary = containingLibrary;
    };
    Object.defineProperty(_SuggestionBuilder.prototype, "suggestions", {
        get: function () {
            return this._suggestionMap.values;
        },
        enumerable: true,
        configurable: true
    });
    _SuggestionBuilder.prototype.buildSuggestions = function (type, containingMethodName, ideOptions) {
        var types = this._getTypeOrdering(type);
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var targetType = types_1[_i];
            for (var _a = 0, _b = targetType.methods; _a < _b.length; _a++) {
                var method = _b[_a];
                if (!method.isStatic) {
                    this._addSuggestion(method, ideOptions, {
                        relevance: utils_1.op(utils_1.Op.EQUALS, method.name, containingMethodName) ? DART_RELEVANCE_HIGH : DART_RELEVANCE_DEFAULT
                    });
                }
            }
            for (var _c = 0, _d = targetType.accessors; _c < _d.length; _c++) {
                var propertyAccessor = _d[_c];
                if (!propertyAccessor.isStatic) {
                    if (propertyAccessor.isSynthetic) {
                        if (propertyAccessor.isGetter) {
                            this._addSuggestion(propertyAccessor.variable, ideOptions);
                        }
                    }
                    else {
                        this._addSuggestion(propertyAccessor, ideOptions);
                    }
                }
            }
        }
    };
    _SuggestionBuilder.prototype._addSuggestion = function (element, options, _namedArguments) {
        var relevance = Object.assign({
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments).relevance;
        if (element.isPrivate) {
            if (element.library != this.containingLibrary) {
                return;
            }
        }
        var identifier = element.displayName;
        if (relevance == DART_RELEVANCE_DEFAULT && identifier != null) {
            if (new core.DartString(identifier).startsWith('$')) {
                relevance = DART_RELEVANCE_LOW;
            }
        }
        var alreadyGenerated = this._completionTypesGenerated.putIfAbsent(identifier, function () {
            return _SuggestionBuilder_1._COMPLETION_TYPE_NONE;
        });
        if (_common_1.is(element, any)) {
            if (alreadyGenerated != _SuggestionBuilder_1._COMPLETION_TYPE_NONE) {
                return;
            }
            this._completionTypesGenerated.set(identifier, _SuggestionBuilder_1._COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET);
        }
        else if (_common_1.is(element, any)) {
            if (element.isGetter) {
                if ((alreadyGenerated & _SuggestionBuilder_1._COMPLETION_TYPE_GETTER) != 0) {
                    return;
                }
                this._completionTypesGenerated.set(identifier, _SuggestionBuilder_1._COMPLETION_TYPE_GETTER);
            }
            else {
                if ((alreadyGenerated & _SuggestionBuilder_1._COMPLETION_TYPE_SETTER) != 0) {
                    return;
                }
                this._completionTypesGenerated.set(identifier, _SuggestionBuilder_1._COMPLETION_TYPE_SETTER);
            }
        }
        else if (_common_1.is(element, any)) {
            if (alreadyGenerated == _SuggestionBuilder_1._COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET) {
                return;
            }
            this._completionTypesGenerated.set(identifier, _SuggestionBuilder_1._COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET);
        }
        else {
            /* TODO (AssertStatementImpl) : assert (false); */ ;
            return;
        }
        var suggestion = createSuggestion(element, options, {
            relevance: relevance
        });
        if (suggestion != null) {
            this._suggestionMap.set(suggestion.completion, suggestion);
        }
    };
    _SuggestionBuilder.prototype._getTypeOrdering = function (type) {
        var result = new core.DartList.literal();
        var classesSeen = new core.DartHashSet();
        var typesToVisit = new core.DartList.literal(type);
        while (typesToVisit.isNotEmpty) {
            var nextType = typesToVisit.removeLast();
            if (!classesSeen.add(nextType.element)) {
                continue;
            }
            result.add(nextType);
            typesToVisit.addAll(nextType.interfaces);
            if (nextType.superclass != null) {
                typesToVisit.add(nextType.superclass);
            }
            typesToVisit.addAll(nextType.mixins);
        }
        return result;
    };
    var _SuggestionBuilder_1;
    __decorate([
        utils_1.defaultConstructor
    ], _SuggestionBuilder.prototype, "_SuggestionBuilder", null);
    _SuggestionBuilder = _SuggestionBuilder_1 = __decorate([
        utils_1.DartClass
    ], _SuggestionBuilder);
    return _SuggestionBuilder;
}());
exports._SuggestionBuilder = _SuggestionBuilder;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=type_member_contributor.js.map
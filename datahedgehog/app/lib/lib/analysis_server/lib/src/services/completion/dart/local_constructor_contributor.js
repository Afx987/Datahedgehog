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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_constructor_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common");
var LocalConstructorContributor = /** @class */ (function (_super) {
    __extends(LocalConstructorContributor, _super);
    function LocalConstructorContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    LocalConstructorContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var optype, suggestions;
            return __generator(this, function (_a) {
                optype = request.opType;
                suggestions = new core.DartList.literal();
                if (!optype.isPrefixed) {
                    if (optype.includeConstructorSuggestions) {
                        new _Visitor(request, suggestions, optype).visit(request.target.containingNode);
                    }
                }
                return [2 /*return*/, suggestions];
            });
        }); })());
    };
    LocalConstructorContributor.prototype.LocalConstructorContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalConstructorContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], LocalConstructorContributor.prototype, "LocalConstructorContributor", null);
    LocalConstructorContributor = __decorate([
        utils_1.DartClass
    ], LocalConstructorContributor);
    return LocalConstructorContributor;
}(any));
exports.LocalConstructorContributor = LocalConstructorContributor;
var _Visitor = /** @class */ (function (_super) {
    __extends(_Visitor, _super);
    function _Visitor(request, suggestions, optype) {
        var _this = this;
        return _this;
    }
    _Visitor.prototype._Visitor = function (request, suggestions, optype) {
        this.request = request;
        _super.prototype.DartObject.call(this, request.offset);
        this.suggestions = suggestions;
        this.optype = optype;
    };
    _Visitor.prototype.declaredClass = function (declaration) {
        var found = false;
        for (var _i = 0, _a = declaration.members; _i < _a.length; _i++) {
            var member = _a[_i];
            if (_common_1.is(member, any)) {
                found = true;
                this._addSuggestion(declaration, member);
            }
        }
        if (!found) {
            this._addSuggestion(declaration, null);
        }
    };
    _Visitor.prototype.declaredClassTypeAlias = function (declaration) {
    };
    _Visitor.prototype.declaredField = function (fieldDecl, varDecl) {
    };
    _Visitor.prototype.declaredFunction = function (declaration) {
    };
    _Visitor.prototype.declaredFunctionTypeAlias = function (declaration) {
    };
    _Visitor.prototype.declaredLabel = function (label, isCaseLabel) {
    };
    _Visitor.prototype.declaredLocalVar = function (name, type) {
    };
    _Visitor.prototype.declaredMethod = function (declaration) {
    };
    _Visitor.prototype.declaredParam = function (name, type) {
    };
    _Visitor.prototype.declaredTopLevelVar = function (varList, varDecl) {
    };
    _Visitor.prototype._addSuggestion = function (classDecl, constructorDecl) {
        var completion = classDecl.name.name;
        var elemId;
        var classElement = resolutionMap.elementDeclaredByClassDeclaration(classDecl);
        var relevance = this.optype.constructorSuggestionsFilter((function (t) { return (!!t) ? t.type : null; })(classElement), DART_RELEVANCE_DEFAULT);
        if (relevance == null) {
            return;
        }
        if (constructorDecl != null) {
            elemId = constructorDecl.name;
            var elem = constructorDecl.element;
            if (elemId != null) {
                var name_1 = elemId.name;
                if (name_1 != null && new core.DartString(name_1).length > 0) {
                    completion = completion + "." + name_1;
                }
            }
            if (elem != null) {
                var suggestion = createSuggestion(elem, this.request.ideOptions, {
                    completion: completion, relevance: relevance
                });
                if (suggestion != null) {
                    this.suggestions.add(suggestion);
                }
            }
        }
        else {
            var element = createLocalElement(this.request.source, lib3.ElementKind.CONSTRUCTOR, elemId, {
                parameters: '()'
            });
            element.returnType = classDecl.name.name;
            var suggestion = new bare.createInstance(any, null, CompletionSuggestionKind.INVOCATION, relevance, completion, new core.DartString(completion).length, 0, false, false, {
                declaringType: classDecl.name.name, element: element, parameterNames: new core.DartList.literal(), parameterTypes: new core.DartList.literal(), requiredParameterCount: 0, hasNamedParameters: false
            });
            this.suggestions.add(suggestion);
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], _Visitor.prototype, "_Visitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredClass", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredClassTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredField", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredFunction", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredFunctionTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredLabel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredLocalVar", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredMethod", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredParam", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _Visitor.prototype, "declaredTopLevelVar", null);
    _Visitor = __decorate([
        utils_1.DartClass
    ], _Visitor);
    return _Visitor;
}(any));
exports._Visitor = _Visitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=local_constructor_contributor.js.map
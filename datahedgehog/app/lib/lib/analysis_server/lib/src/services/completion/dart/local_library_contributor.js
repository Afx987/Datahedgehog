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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_library_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var LibraryElementSuggestionBuilder = /** @class */ (function (_super) {
    __extends(LibraryElementSuggestionBuilder, _super);
    function LibraryElementSuggestionBuilder(request, optype, prefix) {
        var _this = this;
        return _this;
    }
    LibraryElementSuggestionBuilder.prototype.LibraryElementSuggestionBuilder = function (request, optype, prefix) {
        this.request = request;
        this.optype = optype;
        this.prefix = prefix;
        this.kind = this.request.target.isFunctionalArgument() ? CompletionSuggestionKind.IDENTIFIER : this.optype.suggestKind;
    };
    Object.defineProperty(LibraryElementSuggestionBuilder.prototype, "containingLibrary", {
        get: function () {
            return this.request.libraryElement;
        },
        enumerable: true,
        configurable: true
    });
    LibraryElementSuggestionBuilder.prototype.visitClassElement = function (element) {
        if (this.optype.includeTypeNameSuggestions) {
            var relevance = this.optype.typeNameSuggestionsFilter(element.type, DART_RELEVANCE_DEFAULT);
            if (relevance != null) {
                addSuggestion(element, this.request.ideOptions, {
                    prefix: this.prefix, relevance: relevance
                });
            }
        }
        if (this.optype.includeConstructorSuggestions) {
            var relevance = this.optype.constructorSuggestionsFilter(element.type, DART_RELEVANCE_DEFAULT);
            if (relevance != null) {
                this._addConstructorSuggestions(element, relevance);
            }
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitCompilationUnitElement = function (element) {
        element.visitChildren(this);
    };
    LibraryElementSuggestionBuilder.prototype.visitElement = function (element) {
    };
    LibraryElementSuggestionBuilder.prototype.visitFunctionElement = function (element) {
        if (element.isOperator) {
            return;
        }
        if (_common_1.isNot(element.enclosingElement, any)) {
            return;
        }
        var relevance = utils_1.op(utils_1.Op.EQUALS, element.library, this.containingLibrary) ? DART_RELEVANCE_LOCAL_FUNCTION : DART_RELEVANCE_DEFAULT;
        var returnType = element.returnType;
        if (returnType != null && returnType.isVoid) {
            if (this.optype.includeVoidReturnSuggestions) {
                addSuggestion(element, this.request.ideOptions, {
                    prefix: this.prefix, relevance: relevance
                });
            }
        }
        else {
            if (this.optype.includeReturnValueSuggestions) {
                addSuggestion(element, this.request.ideOptions, {
                    prefix: this.prefix, relevance: relevance
                });
            }
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitFunctionTypeAliasElement = function (element) {
        if (this.optype.includeTypeNameSuggestions) {
            var relevance = utils_1.op(utils_1.Op.EQUALS, element.library, this.containingLibrary) ? DART_RELEVANCE_LOCAL_FUNCTION : DART_RELEVANCE_DEFAULT;
            addSuggestion(element, this.request.ideOptions, {
                prefix: this.prefix, relevance: relevance
            });
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitLibraryElement = function (element) {
        element.visitChildren(this);
    };
    LibraryElementSuggestionBuilder.prototype.visitPropertyAccessorElement = function (element) {
        if (this.optype.includeReturnValueSuggestions) {
            var relevance = void 0;
            if (utils_1.op(utils_1.Op.EQUALS, element.library, this.containingLibrary)) {
                if (_common_1.is(element.enclosingElement, any)) {
                    relevance = DART_RELEVANCE_LOCAL_FIELD;
                }
                else {
                    relevance = DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE;
                }
            }
            else {
                relevance = DART_RELEVANCE_DEFAULT;
            }
            addSuggestion(element, this.request.ideOptions, {
                prefix: this.prefix, relevance: relevance
            });
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitTopLevelVariableElement = function (element) {
        if (this.optype.includeReturnValueSuggestions) {
            var relevance = utils_1.op(utils_1.Op.EQUALS, element.library, this.containingLibrary) ? DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE : DART_RELEVANCE_DEFAULT;
            addSuggestion(element, this.request.ideOptions, {
                prefix: this.prefix, relevance: relevance
            });
        }
    };
    LibraryElementSuggestionBuilder.prototype._addConstructorSuggestions = function (classElem, relevance) {
        var className = classElem.name;
        for (var _i = 0, _a = classElem.constructors; _i < _a.length; _i++) {
            var constructor = _a[_i];
            if (!constructor.isPrivate) {
                var suggestion = createSuggestion(constructor, this.request.ideOptions, {
                    relevance: relevance
                });
                if (suggestion != null) {
                    var name_1 = suggestion.completion;
                    name_1 = new core.DartString(name_1).length > 0 ? className + "." + name_1 : className;
                    if (this.prefix != null && new core.DartString(this.prefix).length > 0) {
                        name_1 = this.prefix + "." + name_1;
                    }
                    suggestion.completion = name_1;
                    suggestion.selectionOffset = suggestion.completion.length;
                    suggestions.add(suggestion);
                }
            }
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], LibraryElementSuggestionBuilder.prototype, "LibraryElementSuggestionBuilder", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "containingLibrary", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitClassElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitCompilationUnitElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitFunctionElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitFunctionTypeAliasElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitLibraryElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitPropertyAccessorElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LibraryElementSuggestionBuilder.prototype, "visitTopLevelVariableElement", null);
    LibraryElementSuggestionBuilder = __decorate([
        utils_1.DartClass,
        utils_1.With(any)
    ], LibraryElementSuggestionBuilder);
    return LibraryElementSuggestionBuilder;
}(any));
exports.LibraryElementSuggestionBuilder = LibraryElementSuggestionBuilder;
var LocalLibraryContributor = /** @class */ (function (_super) {
    __extends(LocalLibraryContributor, _super);
    function LocalLibraryContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    LocalLibraryContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var libraryUnits, optype, visitor, _i, libraryUnits_1, unit;
            return __generator(this, function (_a) {
                if (!request.includeIdentifiers) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                libraryUnits = request.result.unit.element.library.units;
                if (libraryUnits == null) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                optype = request.opType;
                visitor = new LibraryElementSuggestionBuilder(request, optype);
                for (_i = 0, libraryUnits_1 = libraryUnits; _i < libraryUnits_1.length; _i++) {
                    unit = libraryUnits_1[_i];
                    if (unit != null && unit.source != request.source) {
                        unit.accept(visitor);
                    }
                }
                return [2 /*return*/, visitor.suggestions];
            });
        }); })());
    };
    LocalLibraryContributor.prototype.LocalLibraryContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalLibraryContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], LocalLibraryContributor.prototype, "LocalLibraryContributor", null);
    LocalLibraryContributor = __decorate([
        utils_1.DartClass
    ], LocalLibraryContributor);
    return LocalLibraryContributor;
}(any));
exports.LocalLibraryContributor = LocalLibraryContributor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=local_library_contributor.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/suggestion_builder.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var lib3 = require("@dart2ts.packages/path/lib/path");
var lib4 = require("@dart2ts.packages/analysis_server/lib/src/protocol_server");
exports.createSuggestion = function (element, options, _namedArguments) {
    var _a = Object.assign({
        "kind": CompletionSuggestionKind.INVOCATION,
        "relevance": DART_RELEVANCE_DEFAULT
    }, _namedArguments), completion = _a.completion, kind = _a.kind, relevance = _a.relevance, importForSource = _a.importForSource;
    if (utils_1.op(utils_1.Op.EQUALS, element, null)) {
        return null;
    }
    if (_common_1.is(element, any) && element.isOperator) {
        return null;
    }
    if (completion == null) {
        completion = element.displayName;
    }
    var isDeprecated = element.isDeprecated;
    var suggestion = new bare.createInstance(any, null, kind, isDeprecated ? DART_RELEVANCE_LOW : relevance, completion, new core.DartString(completion).length, 0, isDeprecated, false);
    var doc = removeDartDocDelimiters(element.documentationComment);
    suggestion.docComplete = doc;
    suggestion.docSummary = getDartDocSummary(doc);
    suggestion.element = null /*topLevl*/.convertElement(element);
    var enclosingElement = element.enclosingElement;
    if (_common_1.is(enclosingElement, any)) {
        suggestion.declaringType = enclosingElement.displayName;
    }
    suggestion.returnType = getReturnTypeString(element);
    if (_common_1.is(element, any) && _common_1.isNot(element, any)) {
        suggestion.parameterNames = element.parameters.map(function (parameter) {
            return parameter.name;
        }).toList();
        suggestion.parameterTypes = element.parameters.map(function (parameter) {
            var paramType = parameter.type;
            return paramType != null ? paramType.displayName : 'var';
        }).toList();
        var requiredParameters = element.parameters.where(function (param) {
            return utils_1.op(utils_1.Op.EQUALS, param.parameterKind, ParameterKind.REQUIRED);
        });
        suggestion.requiredParameterCount = requiredParameters.length;
        var namedParameters = element.parameters.where(function (param) {
            return utils_1.op(utils_1.Op.EQUALS, param.parameterKind, ParameterKind.NAMED);
        });
        suggestion.hasNamedParameters = namedParameters.isNotEmpty;
        addDefaultArgDetails(suggestion, element, requiredParameters, namedParameters, options);
    }
    if (importForSource != null) {
        var srcPath = lib3.dirname(importForSource.fullName);
        var libElem = element.library;
        if (libElem != null) {
            var libSource = libElem.source;
            if (libSource != null) {
                var uriKind = libSource.uriKind;
                if (utils_1.op(utils_1.Op.EQUALS, uriKind, UriKind.DART_URI)) {
                    suggestion.importUri = libSource.uri.toString();
                }
                else if (utils_1.op(utils_1.Op.EQUALS, uriKind, UriKind.PACKAGE_URI)) {
                    suggestion.importUri = libSource.uri.toString();
                }
                else if (utils_1.op(utils_1.Op.EQUALS, uriKind, UriKind.FILE_URI) && utils_1.op(utils_1.Op.EQUALS, element.source.uriKind, UriKind.FILE_URI)) {
                    try {
                        suggestion.importUri = lib3.relative(libSource.fullName, {
                            from: srcPath
                        });
                    }
                    catch (__error__) {
                        {
                            var _ = __error__;
                        }
                    }
                }
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, suggestion.importUri, null)) {
            return null;
        }
    }
    return suggestion;
};
var ElementSuggestionBuilder = /** @class */ (function () {
    function ElementSuggestionBuilder() {
    }
    Object.defineProperty(ElementSuggestionBuilder.prototype, "containingLibrary", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementSuggestionBuilder.prototype, "kind", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ElementSuggestionBuilder.prototype.addSuggestion = function (element, ideOptions, _namedArguments) {
        var _a = Object.assign({
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments), prefix = _a.prefix, relevance = _a.relevance;
        if (element.isPrivate) {
            if (element.library != this.containingLibrary) {
                return;
            }
        }
        var completion = element.displayName;
        if (prefix != null && new core.DartString(prefix).length > 0) {
            if (completion == null || new core.DartString(completion).length <= 0) {
                completion = prefix;
            }
            else {
                completion = prefix + "." + completion;
            }
        }
        if (completion == null || new core.DartString(completion).length <= 0) {
            return;
        }
        var suggestion = exports.createSuggestion(element, ideOptions, {
            completion: completion, kind: this.kind, relevance: relevance
        });
        if (suggestion != null) {
            if (element.isSynthetic && _common_1.is(element, any)) {
                var cacheKey = void 0;
                if (element.isGetter) {
                    cacheKey = element.name;
                }
                if (element.isSetter) {
                    cacheKey = element.name;
                    cacheKey = new core.DartString(cacheKey).substring(0, new core.DartString(cacheKey).length - 1);
                }
                if (cacheKey != null) {
                    var existingSuggestion = this._syntheticMap.get(cacheKey);
                    if (existingSuggestion != null) {
                        var getter = element.isGetter ? suggestion : existingSuggestion;
                        var elemKind = _common_1.is(element.enclosingElement, any) ? lib4.ElementKind.FIELD : lib4.ElementKind.TOP_LEVEL_VARIABLE;
                        existingSuggestion.element = new bare.createInstance(any, null, elemKind, existingSuggestion.element.name, existingSuggestion.element.flags, {
                            location: getter.element.location, typeParameters: getter.element.typeParameters, parameters: null, returnType: getter.returnType
                        });
                        return;
                    }
                    this._syntheticMap.set(cacheKey, suggestion);
                }
            }
            if (this._completions.add(suggestion.completion)) {
                this.suggestions.add(suggestion);
            }
        }
    };
    ElementSuggestionBuilder.prototype.ElementSuggestionBuilder = function () {
        this.suggestions = new core.DartList.literal();
        this._completions = new core.DartSet();
        this._syntheticMap = new core.DartMap.literal([]);
    };
    __decorate([
        utils_1.AbstractProperty
    ], ElementSuggestionBuilder.prototype, "containingLibrary", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementSuggestionBuilder.prototype, "kind", null);
    __decorate([
        utils_1.defaultConstructor
    ], ElementSuggestionBuilder.prototype, "ElementSuggestionBuilder", null);
    ElementSuggestionBuilder = __decorate([
        utils_1.DartClass
    ], ElementSuggestionBuilder);
    return ElementSuggestionBuilder;
}());
exports.ElementSuggestionBuilder = ElementSuggestionBuilder;
var LibraryElementSuggestionBuilder = /** @class */ (function (_super) {
    __extends(LibraryElementSuggestionBuilder, _super);
    function LibraryElementSuggestionBuilder(containingLibrary, kind, typesOnly, instCreation, options) {
        var _this = this;
        return _this;
    }
    LibraryElementSuggestionBuilder.prototype.addSuggestion = function (element, ideOptions, _namedArguments) {
        var _a = Object.assign({
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments), prefix = _a.prefix, relevance = _a.relevance;
        throw 'from mixin';
    };
    LibraryElementSuggestionBuilder.prototype.LibraryElementSuggestionBuilder = function (containingLibrary, kind, typesOnly, instCreation, options) {
        this.containingLibrary = containingLibrary;
        this.kind = kind;
        this.typesOnly = typesOnly;
        this.instCreation = instCreation;
        this.options = options;
    };
    LibraryElementSuggestionBuilder.prototype.visitClassElement = function (element) {
        if (this.instCreation) {
            element.visitChildren(this);
        }
        else {
            this.addSuggestion(element, this.options);
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitCompilationUnitElement = function (element) {
        element.visitChildren(this);
        var containingLibrary = element.library;
        if (containingLibrary != null) {
            for (var _i = 0, _a = containingLibrary.exportedLibraries; _i < _a.length; _i++) {
                var lib = _a[_i];
                lib.visitChildren(this);
            }
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitConstructorElement = function (element) {
        if (this.instCreation) {
            var classElem = element.enclosingElement;
            if (classElem != null) {
                var prefix = classElem.name;
                if (prefix != null && new core.DartString(prefix).length > 0) {
                    this.addSuggestion(element, this.options, {
                        prefix: prefix
                    });
                }
            }
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitElement = function (element) {
    };
    LibraryElementSuggestionBuilder.prototype.visitFunctionElement = function (element) {
        if (!this.typesOnly) {
            var relevance = utils_1.op(utils_1.Op.EQUALS, element.library, this.containingLibrary) ? DART_RELEVANCE_LOCAL_FUNCTION : DART_RELEVANCE_DEFAULT;
            this.addSuggestion(element, this.options, {
                relevance: relevance
            });
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitFunctionTypeAliasElement = function (element) {
        if (!this.instCreation) {
            this.addSuggestion(element, this.options);
        }
    };
    LibraryElementSuggestionBuilder.prototype.visitTopLevelVariableElement = function (element) {
        if (!this.typesOnly) {
            var relevance = utils_1.op(utils_1.Op.EQUALS, element.library, this.containingLibrary) ? DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE : DART_RELEVANCE_DEFAULT;
            this.addSuggestion(element, this.options, {
                relevance: relevance
            });
        }
    };
    __decorate([
        utils_1.Abstract
    ], LibraryElementSuggestionBuilder.prototype, "addSuggestion", null);
    __decorate([
        utils_1.defaultConstructor
    ], LibraryElementSuggestionBuilder.prototype, "LibraryElementSuggestionBuilder", null);
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
    ], LibraryElementSuggestionBuilder.prototype, "visitConstructorElement", null);
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
    ], LibraryElementSuggestionBuilder.prototype, "visitTopLevelVariableElement", null);
    LibraryElementSuggestionBuilder = __decorate([
        utils_1.DartClass,
        utils_1.With(ElementSuggestionBuilder)
    ], LibraryElementSuggestionBuilder);
    return LibraryElementSuggestionBuilder;
}(any));
exports.LibraryElementSuggestionBuilder = LibraryElementSuggestionBuilder;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "DYNAMIC", {
        get: function () {
            if (this.__$DYNAMIC === undefined) {
                this.__$DYNAMIC = 'dynamic';
            }
            return this.__$DYNAMIC;
        },
        set: function (__$value) {
            this.__$DYNAMIC = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=suggestion_builder.js.map
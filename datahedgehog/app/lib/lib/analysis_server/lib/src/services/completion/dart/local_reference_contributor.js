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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_reference_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common");
var LocalReferenceContributor = /** @class */ (function (_super) {
    __extends(LocalReferenceContributor, _super);
    function LocalReferenceContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    LocalReferenceContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var optype, node, suggestLocalFields, visitor;
            return __generator(this, function (_a) {
                optype = request.opType;
                node = request.target.containingNode;
                suggestLocalFields = _common_1.is(node, any) && node.initializers.contains(request.target.entity);
                if (!optype.isPrefixed) {
                    if (optype.includeReturnValueSuggestions || optype.includeTypeNameSuggestions || optype.includeVoidReturnSuggestions || suggestLocalFields) {
                        while (_common_1.is(node, any)) {
                            node = node.parent;
                        }
                        if (_common_1.is(node, any)) {
                            node = node.parent;
                        }
                        visitor = new _LocalVisitor(request, request.offset, optype, {
                            suggestLocalFields: suggestLocalFields
                        });
                        visitor.visit(node);
                        return [2 /*return*/, visitor.suggestions];
                    }
                }
                return [2 /*return*/, EMPTY_LIST];
            });
        }); })());
    };
    LocalReferenceContributor.prototype.LocalReferenceContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalReferenceContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], LocalReferenceContributor.prototype, "LocalReferenceContributor", null);
    LocalReferenceContributor = __decorate([
        utils_1.DartClass
    ], LocalReferenceContributor);
    return LocalReferenceContributor;
}(any));
exports.LocalReferenceContributor = LocalReferenceContributor;
var _LocalVisitor = /** @class */ (function (_super) {
    __extends(_LocalVisitor, _super);
    function _LocalVisitor(request, offset, optype, _namedArguments) {
        var _this = this;
        return _this;
    }
    _LocalVisitor_1 = _LocalVisitor;
    _LocalVisitor.prototype._LocalVisitor = function (request, offset, optype, _namedArguments) {
        var suggestLocalFields = Object.assign({}, _namedArguments).suggestLocalFields;
        this.suggestionMap = new core.DartMap.literal([]);
        this.privateMemberRelevance = DART_RELEVANCE_DEFAULT;
        _super.prototype.DartObject.call(this, offset);
        this.request = request;
        this.optype = optype;
        this.suggestLocalFields = suggestLocalFields;
        this.targetIsFunctionalArgument = this.request.target.isFunctionalArgument();
        var data = this.request.result != null ? this.request.result.content : this.request.sourceContents;
        var offset = this.request.offset;
        if (data != null && 0 < offset && offset <= data.length) {
            var isIdentifierChar = function (index) {
                var code = data.codeUnitAt(index);
                return isLetterOrDigit(code) || code == CHAR_UNDERSCORE;
            };
            if (isIdentifierChar(offset - 1)) {
                while (offset > 0 && isIdentifierChar(offset - 1)) {
                    --offset;
                }
                if (utils_1.op(utils_1.Op.EQUALS, data.codeUnitAt(offset), CHAR_UNDERSCORE)) {
                    this.privateMemberRelevance = null;
                }
            }
        }
    };
    Object.defineProperty(_LocalVisitor.prototype, "suggestions", {
        get: function () {
            return this.suggestionMap.values.toList();
        },
        enumerable: true,
        configurable: true
    });
    _LocalVisitor.prototype.declaredClass = function (declaration) {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment, declaration.name, NO_RETURN_TYPE, lib3.ElementKind.CLASS, {
                isAbstract: declaration.isAbstract, isDeprecated: isDeprecated(declaration)
            });
        }
    };
    _LocalVisitor.prototype.declaredClassTypeAlias = function (declaration) {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment, declaration.name, NO_RETURN_TYPE, lib3.ElementKind.CLASS_TYPE_ALIAS, {
                isAbstract: true, isDeprecated: isDeprecated(declaration)
            });
        }
    };
    _LocalVisitor.prototype.declaredEnum = function (declaration) {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment, declaration.name, NO_RETURN_TYPE, lib3.ElementKind.ENUM, {
                isDeprecated: isDeprecated(declaration)
            });
            for (var _i = 0, _a = declaration.constants; _i < _a.length; _i++) {
                var enumConstant = _a[_i];
                if (!enumConstant.isSynthetic) {
                    this._addLocalSuggestion_includeReturnValueSuggestions_enumConstant(enumConstant, declaration, {
                        isDeprecated: isDeprecated(declaration)
                    });
                }
            }
        }
    };
    _LocalVisitor.prototype.declaredField = function (fieldDecl, varDecl) {
        if ((this.optype.includeReturnValueSuggestions && (!this.optype.inStaticMethodBody || fieldDecl.isStatic)) || this.suggestLocalFields) {
            var deprecated = isDeprecated(fieldDecl) || isDeprecated(varDecl);
            var typeName = fieldDecl.fields.type;
            this._addLocalSuggestion_includeReturnValueSuggestions(fieldDecl.documentationComment, varDecl.name, typeName, lib3.ElementKind.FIELD, {
                isDeprecated: deprecated, relevance: DART_RELEVANCE_LOCAL_FIELD, classDecl: fieldDecl.parent
            });
        }
    };
    _LocalVisitor.prototype.declaredFunction = function (declaration) {
        if (this.optype.includeReturnValueSuggestions || this.optype.includeVoidReturnSuggestions) {
            var typeName = declaration.returnType;
            var elemKind = void 0;
            var relevance = DART_RELEVANCE_DEFAULT;
            if (declaration.isGetter) {
                elemKind = lib3.ElementKind.GETTER;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }
            else if (declaration.isSetter) {
                if (!this.optype.includeVoidReturnSuggestions) {
                    return;
                }
                elemKind = lib3.ElementKind.SETTER;
                typeName = NO_RETURN_TYPE;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }
            else {
                if (!this.optype.includeVoidReturnSuggestions && this._isVoid(typeName)) {
                    return;
                }
                elemKind = lib3.ElementKind.FUNCTION;
                relevance = DART_RELEVANCE_LOCAL_FUNCTION;
            }
            this._addLocalSuggestion_includeReturnValueSuggestions(declaration.documentationComment, declaration.name, typeName, elemKind, {
                isDeprecated: isDeprecated(declaration), param: declaration.functionExpression.parameters, relevance: relevance
            });
        }
    };
    _LocalVisitor.prototype.declaredFunctionTypeAlias = function (declaration) {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment, declaration.name, declaration.returnType, lib3.ElementKind.FUNCTION_TYPE_ALIAS, {
                isAbstract: true, isDeprecated: isDeprecated(declaration)
            });
        }
    };
    _LocalVisitor.prototype.declaredLabel = function (label, isCaseLabel) {
    };
    _LocalVisitor.prototype.declaredLocalVar = function (id, typeName) {
        if (this.optype.includeReturnValueSuggestions) {
            this._addLocalSuggestion_includeReturnValueSuggestions(null, id, typeName, lib3.ElementKind.LOCAL_VARIABLE, {
                relevance: DART_RELEVANCE_LOCAL_VARIABLE
            });
        }
    };
    _LocalVisitor.prototype.declaredMethod = function (declaration) {
        if ((this.optype.includeReturnValueSuggestions || this.optype.includeVoidReturnSuggestions) && (!this.optype.inStaticMethodBody || declaration.isStatic)) {
            var elemKind = void 0;
            var param = void 0;
            var typeName = declaration.returnType;
            var relevance = DART_RELEVANCE_DEFAULT;
            if (declaration.isGetter) {
                elemKind = lib3.ElementKind.GETTER;
                param = null;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }
            else if (declaration.isSetter) {
                if (!this.optype.includeVoidReturnSuggestions) {
                    return;
                }
                elemKind = lib3.ElementKind.SETTER;
                typeName = NO_RETURN_TYPE;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }
            else {
                if (!this.optype.includeVoidReturnSuggestions && this._isVoid(typeName)) {
                    return;
                }
                elemKind = lib3.ElementKind.METHOD;
                param = declaration.parameters;
                relevance = DART_RELEVANCE_LOCAL_METHOD;
            }
            this._addLocalSuggestion_includeReturnValueSuggestions(declaration.documentationComment, declaration.name, typeName, elemKind, {
                isAbstract: declaration.isAbstract, isDeprecated: isDeprecated(declaration), classDecl: declaration.parent, param: param, relevance: relevance
            });
        }
    };
    _LocalVisitor.prototype.declaredParam = function (id, typeName) {
        if (this.optype.includeReturnValueSuggestions) {
            this._addLocalSuggestion_includeReturnValueSuggestions(null, id, typeName, lib3.ElementKind.PARAMETER, {
                relevance: DART_RELEVANCE_PARAMETER
            });
        }
    };
    _LocalVisitor.prototype.declaredTopLevelVar = function (varList, varDecl) {
        if (this.optype.includeReturnValueSuggestions) {
            this._addLocalSuggestion_includeReturnValueSuggestions(varDecl.documentationComment, varDecl.name, varList.type, lib3.ElementKind.TOP_LEVEL_VARIABLE, {
                isDeprecated: isDeprecated(varList) || isDeprecated(varDecl), relevance: DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE
            });
        }
    };
    _LocalVisitor.prototype._addLocalSuggestion = function (documentationComment, id, typeName, elemKind, _namedArguments) {
        var _a = Object.assign({
            "isAbstract": false,
            "isDeprecated": false,
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments), isAbstract = _a.isAbstract, isDeprecated = _a.isDeprecated, classDecl = _a.classDecl, param = _a.param, relevance = _a.relevance;
        var kind = this.targetIsFunctionalArgument ? CompletionSuggestionKind.IDENTIFIER : this.optype.suggestKind;
        var suggestion = createLocalSuggestion(id, isDeprecated, relevance, typeName, {
            classDecl: classDecl, kind: kind
        });
        if (suggestion != null) {
            _LocalVisitor_1._setDocumentation(suggestion, documentationComment);
            if (this.privateMemberRelevance != null && suggestion.completion.startsWith('_')) {
                suggestion.relevance = this.privateMemberRelevance;
            }
            this.suggestionMap.putIfAbsent(suggestion.completion, function () {
                return suggestion;
            });
            suggestion.element = createLocalElement(this.request.source, elemKind, id, {
                isAbstract: isAbstract, isDeprecated: isDeprecated, parameters: (function (_33_) { return (!!_33_) ? _33_.toSource() : null; })(param), returnType: typeName
            });
            if ((utils_1.op(utils_1.Op.EQUALS, elemKind, lib3.ElementKind.METHOD) || utils_1.op(utils_1.Op.EQUALS, elemKind, lib3.ElementKind.FUNCTION)) && param != null) {
                this._addParameterInfo(suggestion, param);
            }
        }
    };
    _LocalVisitor.prototype._addLocalSuggestion_enumConstant = function (constantDeclaration, enumDeclaration, _namedArguments) {
        var _a = Object.assign({
            "isAbstract": false,
            "isDeprecated": false,
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments), isAbstract = _a.isAbstract, isDeprecated = _a.isDeprecated, relevance = _a.relevance;
        var completion = enumDeclaration.name.name + "." + constantDeclaration.name.name;
        var suggestion = new bare.createInstance(any, null, CompletionSuggestionKind.INVOCATION, isDeprecated ? DART_RELEVANCE_LOW : relevance, completion, new core.DartString(completion).length, 0, isDeprecated, false, {
            returnType: enumDeclaration.name.name
        });
        this.suggestionMap.putIfAbsent(suggestion.completion, function () {
            return suggestion;
        });
        var flags = lib3.Element.makeFlags({
            isAbstract: isAbstract, isDeprecated: isDeprecated, isPrivate: Identifier.isPrivateName(constantDeclaration.name.name)
        });
        suggestion.element = new bare.createInstance(any, null, lib3.ElementKind.ENUM_CONSTANT, constantDeclaration.name.name, flags, {
            location: new bare.createInstance(any, null, this.request.source.fullName, constantDeclaration.name.offset, constantDeclaration.name.length, 0, 0)
        });
    };
    _LocalVisitor.prototype._addLocalSuggestion_includeReturnValueSuggestions = function (documentationComment, id, typeName, elemKind, _namedArguments) {
        var _a = Object.assign({
            "isAbstract": false,
            "isDeprecated": false,
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments), isAbstract = _a.isAbstract, isDeprecated = _a.isDeprecated, classDecl = _a.classDecl, param = _a.param, relevance = _a.relevance;
        relevance = this.optype.returnValueSuggestionsFilter(this._staticTypeOfIdentifier(id), relevance);
        if (relevance != null) {
            this._addLocalSuggestion(documentationComment, id, typeName, elemKind, {
                isAbstract: isAbstract, isDeprecated: isDeprecated, classDecl: classDecl, param: param, relevance: relevance
            });
        }
    };
    _LocalVisitor.prototype._addLocalSuggestion_includeReturnValueSuggestions_enumConstant = function (constantDeclaration, enumDeclaration, _namedArguments) {
        var _a = Object.assign({
            "isAbstract": false,
            "isDeprecated": false,
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments), isAbstract = _a.isAbstract, isDeprecated = _a.isDeprecated, relevance = _a.relevance;
        var classElement = resolutionMap.elementDeclaredByEnumDeclaration(enumDeclaration);
        relevance = this.optype.returnValueSuggestionsFilter((function (t) { return (!!t) ? t.type : null; })(classElement), relevance);
        if (relevance != null) {
            this._addLocalSuggestion_enumConstant(constantDeclaration, enumDeclaration, {
                isAbstract: isAbstract, isDeprecated: isDeprecated, relevance: relevance
            });
        }
    };
    _LocalVisitor.prototype._addLocalSuggestion_includeTypeNameSuggestions = function (documentationComment, id, typeName, elemKind, _namedArguments) {
        var _a = Object.assign({
            "isAbstract": false,
            "isDeprecated": false,
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments), isAbstract = _a.isAbstract, isDeprecated = _a.isDeprecated, classDecl = _a.classDecl, param = _a.param, relevance = _a.relevance;
        relevance = this.optype.typeNameSuggestionsFilter(this._staticTypeOfIdentifier(id), relevance);
        if (relevance != null) {
            this._addLocalSuggestion(documentationComment, id, typeName, elemKind, {
                isAbstract: isAbstract, isDeprecated: isDeprecated, classDecl: classDecl, param: param, relevance: relevance
            });
        }
    };
    _LocalVisitor.prototype._addParameterInfo = function (suggestion, parameters) {
        var paramList = parameters.parameters;
        suggestion.parameterNames = paramList.map(function (param) {
            return param.identifier.name;
        }).toList();
        suggestion.parameterTypes = paramList.map(function (param) {
            var type = null;
            if (_common_1.is(param, any)) {
                var child = param.parameter;
                if (_common_1.is(child, any)) {
                    type = child.type;
                }
                else if (_common_1.is(child, any)) {
                    type = child.type;
                }
            }
            if (_common_1.is(param, any)) {
                type = param.type;
            }
            else if (_common_1.is(param, any)) {
                type = param.type;
            }
            if (utils_1.op(utils_1.Op.EQUALS, type, null)) {
                return 'dynamic';
            }
            if (_common_1.is(type, any)) {
                var typeId = type.name;
                if (utils_1.op(utils_1.Op.EQUALS, typeId, null)) {
                    return 'dynamic';
                }
                return typeId.name;
            }
            return 'dynamic';
        }).toList();
        var requiredParameters = paramList.where(function (param) {
            return utils_1.op(utils_1.Op.EQUALS, param.kind, ParameterKind.REQUIRED);
        }).map(function (p) {
            return p.element;
        });
        suggestion.requiredParameterCount = requiredParameters.length;
        var namedParameters = paramList.where(function (param) {
            return utils_1.op(utils_1.Op.EQUALS, param.kind, ParameterKind.NAMED);
        }).map(function (p) {
            return p.element;
        });
        suggestion.hasNamedParameters = namedParameters.isNotEmpty;
        addDefaultArgDetails(suggestion, null, requiredParameters, namedParameters, this.request.ideOptions);
    };
    _LocalVisitor.prototype._isVoid = function (returnType) {
        if (_common_1.is(returnType, any)) {
            var id = returnType.name;
            if (id != null && utils_1.op(utils_1.Op.EQUALS, id.name, 'void')) {
                return true;
            }
        }
        return false;
    };
    _LocalVisitor.prototype._staticTypeOfIdentifier = function (id) {
        if (_common_1.is(id.staticElement, any)) {
            return id.staticElement.type;
        }
        else {
            return id.staticType;
        }
    };
    _LocalVisitor._setDocumentation = function (suggestion, documentationComment) {
        if (documentationComment != null) {
            var text = documentationComment.tokens.map(function (t) {
                return t.toString();
            }).join('\n').replaceAll(');
            n;
            ',';
            n;
            ');;
            var doc = removeDartDocDelimiters(text);
            suggestion.docComplete = doc;
            suggestion.docSummary = getDartDocSummary(doc);
        }
    };
    var _LocalVisitor_1;
    __decorate([
        utils_1.defaultConstructor
    ], _LocalVisitor.prototype, "_LocalVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredClass", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredClassTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredEnum", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredField", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredFunction", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredFunctionTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredLabel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredLocalVar", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredMethod", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredParam", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalVisitor.prototype, "declaredTopLevelVar", null);
    _LocalVisitor = _LocalVisitor_1 = __decorate([
        utils_1.DartClass
    ], _LocalVisitor);
    return _LocalVisitor;
}(any));
exports._LocalVisitor = _LocalVisitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=local_reference_contributor.js.map
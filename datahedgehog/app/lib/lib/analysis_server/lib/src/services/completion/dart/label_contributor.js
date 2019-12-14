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
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common");
var LabelContributor = /** @class */ (function (_super) {
    __extends(LabelContributor, _super);
    function LabelContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    LabelContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var optype, suggestions;
            return __generator(this, function (_a) {
                optype = request.opType;
                suggestions = new core.DartList.literal();
                if (!optype.isPrefixed) {
                    if (optype.includeStatementLabelSuggestions || optype.includeCaseLabelSuggestions) {
                        new _LabelVisitor(request, optype.includeStatementLabelSuggestions, optype.includeCaseLabelSuggestions, suggestions).visit(request.target.containingNode);
                    }
                }
                return [2 /*return*/, suggestions];
            });
        }); })());
    };
    LabelContributor.prototype.LabelContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LabelContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], LabelContributor.prototype, "LabelContributor", null);
    LabelContributor = __decorate([
        utils_1.DartClass
    ], LabelContributor);
    return LabelContributor;
}(any));
exports.LabelContributor = LabelContributor;
var _LabelVisitor = /** @class */ (function (_super) {
    __extends(_LabelVisitor, _super);
    function _LabelVisitor(request, includeStatementLabels, includeCaseLabels, suggestions) {
        var _this = this;
        return _this;
    }
    _LabelVisitor.prototype._LabelVisitor = function (request, includeStatementLabels, includeCaseLabels, suggestions) {
        this.request = request;
        _super.prototype.DartObject.call(this, request.offset);
        this.includeStatementLabels = includeStatementLabels;
        this.includeCaseLabels = includeCaseLabels;
        this.suggestions = suggestions;
    };
    _LabelVisitor.prototype.declaredClass = function (declaration) {
    };
    _LabelVisitor.prototype.declaredClassTypeAlias = function (declaration) {
    };
    _LabelVisitor.prototype.declaredField = function (fieldDecl, varDecl) {
    };
    _LabelVisitor.prototype.declaredFunction = function (declaration) {
    };
    _LabelVisitor.prototype.declaredFunctionTypeAlias = function (declaration) {
    };
    _LabelVisitor.prototype.declaredLabel = function (label, isCaseLabel) {
        if (isCaseLabel ? this.includeCaseLabels : this.includeStatementLabels) {
            var suggestion = this._addSuggestion(label.label);
            if (suggestion != null) {
                suggestion.element = createLocalElement(this.request.source, lib3.ElementKind.LABEL, label.label, {
                    returnType: NO_RETURN_TYPE
                });
            }
        }
    };
    _LabelVisitor.prototype.declaredLocalVar = function (name, type) {
    };
    _LabelVisitor.prototype.declaredMethod = function (declaration) {
    };
    _LabelVisitor.prototype.declaredParam = function (name, type) {
    };
    _LabelVisitor.prototype.declaredTopLevelVar = function (varList, varDecl) {
    };
    _LabelVisitor.prototype.visitFunctionExpression = function (node) {
        finished();
    };
    _LabelVisitor.prototype.visitMethodDeclaration = function (node) {
        finished();
    };
    _LabelVisitor.prototype._addSuggestion = function (id) {
        if (id != null) {
            var completion = id.name;
            if (completion != null && new core.DartString(completion).length > 0 && completion != '_') {
                var suggestion = new bare.createInstance(any, null, CompletionSuggestionKind.IDENTIFIER, DART_RELEVANCE_DEFAULT, completion, new core.DartString(completion).length, 0, false, false);
                this.suggestions.add(suggestion);
                return suggestion;
            }
        }
        return null;
    };
    __decorate([
        utils_1.defaultConstructor
    ], _LabelVisitor.prototype, "_LabelVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredClass", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredClassTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredField", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredFunction", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredFunctionTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredLabel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredLocalVar", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredMethod", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredParam", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "declaredTopLevelVar", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "visitFunctionExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LabelVisitor.prototype, "visitMethodDeclaration", null);
    _LabelVisitor = __decorate([
        utils_1.DartClass
    ], _LabelVisitor);
    return _LabelVisitor;
}(any));
exports._LabelVisitor = _LabelVisitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=label_contributor.js.map
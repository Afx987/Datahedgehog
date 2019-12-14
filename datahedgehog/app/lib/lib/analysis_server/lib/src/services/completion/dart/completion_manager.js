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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/completion_manager.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var DartCompletionManager = /** @class */ (function () {
    function DartCompletionManager() {
    }
    DartCompletionManager_1 = DartCompletionManager;
    Object.defineProperty(DartCompletionManager, "contributionSorter", {
        get: function () {
            if (this.__$contributionSorter === undefined) {
                this.__$contributionSorter = new bare.createInstance(any, null);
            }
            return this.__$contributionSorter;
        },
        set: function (__$value) {
            this.__$contributionSorter = __$value;
        },
        enumerable: true,
        configurable: true
    });
    DartCompletionManager.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var performance, dartRequest, range, suggestionMap, _i, _a, contributor, contributorTag, contributorSuggestions, _loop_1, _b, contributorSuggestions_1, newSuggestion, suggestions, SORT_TAG;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        request.checkAborted();
                        if (!AnalysisEngine.isDartFileName(request.source.shortName)) {
                            return [2 /*return*/, EMPTY_LIST];
                        }
                        performance = request.performance;
                        return [4 /*yield*/, DartCompletionRequestImpl.from(request)];
                    case 1:
                        dartRequest = _c.sent();
                        if (dartRequest.target.isCommentText) {
                            return [2 /*return*/, EMPTY_LIST];
                        }
                        range = new ReplacementRange.compute(dartRequest.offset, dartRequest.target);
                        (function (_) {
                            {
                                _.replacementOffset = range.offset;
                                _.replacementLength = range.length;
                                return _;
                            }
                        })(request);
                        suggestionMap = new core.DartMap.literal([]);
                        _i = 0, _a = dartCompletionPlugin.contributors;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        contributor = _a[_i];
                        contributorTag = "DartCompletionManager - " + contributor.runtimeType;
                        performance.logStartTime(contributorTag);
                        return [4 /*yield*/, contributor.computeSuggestions(dartRequest)];
                    case 3:
                        contributorSuggestions = _c.sent();
                        performance.logElapseTime(contributorTag);
                        request.checkAborted();
                        _loop_1 = function (newSuggestion) {
                            var oldSuggestion = suggestionMap.putIfAbsent(newSuggestion.completion, function () {
                                return newSuggestion;
                            });
                            if (newSuggestion != oldSuggestion && utils_1.op(utils_1.Op.GT, newSuggestion.relevance, oldSuggestion.relevance)) {
                                suggestionMap.set(newSuggestion.completion, newSuggestion);
                            }
                        };
                        for (_b = 0, contributorSuggestions_1 = contributorSuggestions; _b < contributorSuggestions_1.length; _b++) {
                            newSuggestion = contributorSuggestions_1[_b];
                            _loop_1(newSuggestion);
                        }
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        suggestions = suggestionMap.values.toList();
                        SORT_TAG = 'DartCompletionManager - sort';
                        performance.logStartTime(SORT_TAG);
                        return [4 /*yield*/, DartCompletionManager_1.contributionSorter.sort(dartRequest, suggestions)];
                    case 6:
                        _c.sent();
                        performance.logElapseTime(SORT_TAG);
                        request.checkAborted();
                        return [2 /*return*/, suggestions];
                }
            });
        }); })());
    };
    DartCompletionManager.prototype.DartCompletionManager = function () {
    };
    var DartCompletionManager_1;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionManager.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartCompletionManager.prototype, "DartCompletionManager", null);
    DartCompletionManager = DartCompletionManager_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DartCompletionManager);
    return DartCompletionManager;
}());
exports.DartCompletionManager = DartCompletionManager;
var DartCompletionRequestImpl = /** @class */ (function () {
    function DartCompletionRequestImpl() {
    }
    DartCompletionRequestImpl_1 = DartCompletionRequestImpl;
    DartCompletionRequestImpl.prototype._ = function (result, resourceProvider, coreLib, librarySource, source, offset, unit, _originalRequest, performance, ideOptions) {
        this.result = result;
        this.resourceProvider = resourceProvider;
        this.coreLib = coreLib;
        this.librarySource = librarySource;
        this.source = source;
        this.offset = offset;
        this._originalRequest = _originalRequest;
        this.performance = performance;
        this.ideOptions = ideOptions;
        this._updateTargets(unit);
    };
    Object.defineProperty(DartCompletionRequestImpl.prototype, "includeIdentifiers", {
        get: function () {
            return this.opType.includeIdentifiers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequestImpl.prototype, "libraryElement", {
        get: function () {
            var unit = this.target.unit;
            if (unit != null) {
                var elem = unit.element;
                if (elem != null) {
                    return elem.library;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequestImpl.prototype, "objectType", {
        get: function () {
            if (utils_1.op(utils_1.Op.EQUALS, this._objectType, null)) {
                this._objectType = this.coreLib.getType('Object').type;
            }
            return this._objectType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequestImpl.prototype, "opType", {
        get: function () {
            if (utils_1.op(utils_1.Op.EQUALS, this._opType, null)) {
                this._opType = new bare.createInstance(any, null, this.target, this.offset);
            }
            return this._opType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequestImpl.prototype, "sourceContents", {
        get: function () {
            return this.result.content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequestImpl.prototype, "sourceFactory", {
        get: function () {
            return this.result.sourceFactory;
        },
        enumerable: true,
        configurable: true
    });
    DartCompletionRequestImpl.prototype.checkAborted = function () {
        this._originalRequest.checkAborted();
    };
    DartCompletionRequestImpl.prototype._updateTargets = function (unit) {
        this._opType = null;
        this.dotTarget = null;
        this.target = new bare.createInstance(any, null, unit, this.offset);
        var node = this.target.containingNode;
        if (_common_1.is(node, any)) {
            if (core.identical(node.methodName, this.target.entity)) {
                this.dotTarget = node.realTarget;
            }
            else if (node.isCascaded && utils_1.op(utils_1.Op.EQUALS, utils_1.op(utils_1.Op.PLUS, node.operator.offset, 1), this.target.offset)) {
                this.dotTarget = node.realTarget;
            }
        }
        if (_common_1.is(node, any)) {
            if (core.identical(node.propertyName, this.target.entity)) {
                this.dotTarget = node.realTarget;
            }
            else if (node.isCascaded && utils_1.op(utils_1.Op.EQUALS, utils_1.op(utils_1.Op.PLUS, node.operator.offset, 1), this.target.offset)) {
                this.dotTarget = node.realTarget;
            }
        }
        if (_common_1.is(node, any)) {
            if (core.identical(node.identifier, this.target.entity)) {
                this.dotTarget = node.prefix;
            }
        }
    };
    DartCompletionRequestImpl.from = function (request, _namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var resultDescriptor, performance, BUILD_REQUEST_TAG, libSource, unit, coreLib, dartRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultDescriptor = Object.assign({}, _namedArguments).resultDescriptor;
                        request.checkAborted();
                        performance = request.performance;
                        BUILD_REQUEST_TAG = 'build DartCompletionRequest';
                        performance.logStartTime(BUILD_REQUEST_TAG);
                        unit = request.result.unit;
                        libSource = resolutionMap.elementDeclaredByCompilationUnit(unit).source;
                        return [4 /*yield*/, request.result.driver.getLibraryByUri('dart:core')];
                    case 1:
                        coreLib = _a.sent();
                        dartRequest = new DartCompletionRequestImpl_1._(request.result, request.resourceProvider, coreLib, libSource, request.source, request.offset, unit, request, performance, request.ideOptions);
                        performance.logElapseTime(BUILD_REQUEST_TAG);
                        return [2 /*return*/, dartRequest];
                }
            });
        }); })());
    };
    var DartCompletionRequestImpl_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "result", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "ideOptions", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "coreLib", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "source", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "offset", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "dotTarget", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "librarySource", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "resourceProvider", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "target", void 0);
    __decorate([
        utils_1.namedConstructor
    ], DartCompletionRequestImpl.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "includeIdentifiers", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "libraryElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "objectType", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "sourceContents", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionRequestImpl.prototype, "sourceFactory", null);
    DartCompletionRequestImpl = DartCompletionRequestImpl_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DartCompletionRequestImpl);
    return DartCompletionRequestImpl;
}());
exports.DartCompletionRequestImpl = DartCompletionRequestImpl;
var ReplacementRange = /** @class */ (function () {
    function ReplacementRange(offset, length) {
    }
    ReplacementRange_1 = ReplacementRange;
    ReplacementRange.prototype.ReplacementRange = function (offset, length) {
        this.offset = offset;
        this.length = length;
    };
    ReplacementRange.$compute = function (requestOffset, target) {
        var isKeywordOrIdentifier = function (token) {
            return token.type.isKeyword || utils_1.op(utils_1.Op.EQUALS, token.type, TokenType.IDENTIFIER);
        };
        var entity = target.entity;
        var token = _common_1.is(entity, any) ? entity.beginToken : entity;
        if (token != null && requestOffset < token.offset) {
            token = token.previous;
        }
        if (token != null) {
            if (requestOffset == token.offset && !isKeywordOrIdentifier(token)) {
                token = token.previous;
            }
            if (token != null && isKeywordOrIdentifier(token)) {
                if (utils_1.op(utils_1.Op.LEQ, token.offset, requestOffset) && requestOffset <= token.end) {
                    return new ReplacementRange_1(token.offset, token.length);
                }
            }
            if (_common_1.is(token, any)) {
                var uri = astFactory.simpleStringLiteral(token, token.lexeme);
                var keyword = (function (t) { return (!!t) ? t.keyword : null; })(token.previous);
                if (utils_1.op(utils_1.Op.EQUALS, keyword, Keyword.IMPORT) || utils_1.op(utils_1.Op.EQUALS, keyword, Keyword.EXPORT) || utils_1.op(utils_1.Op.EQUALS, keyword, Keyword.PART)) {
                    var start = uri.contentsOffset;
                    var end = uri.contentsEnd;
                    if (start <= requestOffset && requestOffset <= end) {
                        return new ReplacementRange_1(start, utils_1.op(utils_1.Op.MINUS, end, start));
                    }
                }
            }
        }
        return new ReplacementRange_1(requestOffset, 0);
    };
    var ReplacementRange_1;
    __decorate([
        utils_1.defaultConstructor
    ], ReplacementRange.prototype, "ReplacementRange", null);
    __decorate([
        utils_1.namedFactory
    ], ReplacementRange, "$compute", null);
    ReplacementRange = ReplacementRange_1 = __decorate([
        utils_1.DartClass
    ], ReplacementRange);
    return ReplacementRange;
}());
exports.ReplacementRange = ReplacementRange;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion_manager.js.map
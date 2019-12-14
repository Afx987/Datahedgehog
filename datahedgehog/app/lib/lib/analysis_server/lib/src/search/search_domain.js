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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/search/search_domain.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/analysis_server/lib/src/protocol_server");
var SearchDomainHandler = /** @class */ (function () {
    function SearchDomainHandler(server) {
    }
    SearchDomainHandler_1 = SearchDomainHandler;
    SearchDomainHandler.prototype.SearchDomainHandler = function (server) {
        this._nextSearchId = 0;
        this.server = server;
        this.index = server.index;
        this.searchEngine = server.searchEngine;
    };
    SearchDomainHandler.prototype.findElementReferences = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, element, searchId, result, computer, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, "fromRequest", request);
                        file = params.file;
                        if (!!this.server.options.enableNewAnalysisDriver) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.server.onAnalysisComplete];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.server.getElementAtOffset(file, params.offset)];
                    case 3:
                        element = _a.sent();
                        if (_common_1.is(element, any)) {
                            element = element.prefix;
                        }
                        if (_common_1.is(element, any)) {
                            element = element.field;
                        }
                        if (_common_1.is(element, any)) {
                            element = element.variable;
                        }
                        searchId = new core.DartInt((this._nextSearchId++)).toString();
                        result = new bare.createInstance(any, null);
                        if (element != null) {
                            result.id = searchId;
                            result.element = null /*topLevl*/.convertElement(element);
                        }
                        this._sendSearchResult(request, result);
                        if (!(element != null)) return [3 /*break*/, 5];
                        computer = new bare.createInstance(any, null, this.searchEngine);
                        return [4 /*yield*/, computer.compute(element, params.includePotential)];
                    case 4:
                        results = _a.sent();
                        this._sendSearchNotification(searchId, true, results);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); })());
    };
    SearchDomainHandler.prototype.findMemberDeclarations = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, searchId, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, "fromRequest", request);
                        return [4 /*yield*/, this.server.onAnalysisComplete];
                    case 1:
                        _a.sent();
                        searchId = new core.DartInt((this._nextSearchId++)).toString();
                        this._sendSearchResult(request, new bare.createInstance(any, null, searchId));
                        return [4 /*yield*/, this.searchEngine.searchMemberDeclarations(params.name)];
                    case 2:
                        matches = _a.sent();
                        matches = SearchMatch.withNotNullElement(matches);
                        this._sendSearchNotification(searchId, true, matches.map(SearchDomainHandler_1.toResult.bind(this)));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    SearchDomainHandler.prototype.findMemberReferences = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, searchId, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, "fromRequest", request);
                        return [4 /*yield*/, this.server.onAnalysisComplete];
                    case 1:
                        _a.sent();
                        searchId = new core.DartInt((this._nextSearchId++)).toString();
                        this._sendSearchResult(request, new bare.createInstance(any, null, searchId));
                        return [4 /*yield*/, this.searchEngine.searchMemberReferences(params.name)];
                    case 2:
                        matches = _a.sent();
                        matches = SearchMatch.withNotNullElement(matches);
                        this._sendSearchNotification(searchId, true, matches.map(SearchDomainHandler_1.toResult.bind(this)));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    SearchDomainHandler.prototype.findTopLevelDeclarations = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, exception, searchId, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, "fromRequest", request);
                        try {
                            new core.DartRegExp(params.pattern);
                        }
                        catch (__error__) {
                            if (_common_1.is(__error__, core.FormatException)) {
                                exception = __error__;
                                this.server.sendResponse(new bare.createInstance(any, "invalidParameter", request, 'pattern', exception.message));
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.server.onAnalysisComplete];
                    case 1:
                        _a.sent();
                        searchId = new core.DartInt((this._nextSearchId++)).toString();
                        this._sendSearchResult(request, new bare.createInstance(any, null, searchId));
                        return [4 /*yield*/, this.searchEngine.searchTopLevelDeclarations(params.pattern)];
                    case 2:
                        matches = _a.sent();
                        matches = SearchMatch.withNotNullElement(matches);
                        this._sendSearchNotification(searchId, true, matches.map(SearchDomainHandler_1.toResult.bind(this)));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    SearchDomainHandler.prototype.getTypeHierarchy = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, element, computer_1, items_1, response_1, computer, items, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, "fromRequest", request);
                        file = params.file;
                        if (!!this.server.options.enableNewAnalysisDriver) return [3 /*break*/, 4];
                        if (!utils_1.op(utils_1.Op.EQUALS, params.superOnly, true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.server.onFileAnalysisComplete(file)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.server.onAnalysisComplete];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.server.getElementAtOffset(file, params.offset)];
                    case 5:
                        element = _a.sent();
                        if (utils_1.op(utils_1.Op.EQUALS, element, null)) {
                            this._sendTypeHierarchyNull(request);
                            return [2 /*return*/];
                        }
                        if (utils_1.op(utils_1.Op.EQUALS, params.superOnly, true)) {
                            computer_1 = new bare.createInstance(any, null, this.searchEngine, element);
                            items_1 = computer_1.computeSuper();
                            response_1 = new bare.createInstance(any, null, {
                                hierarchyItems: items_1
                            }).toResponse(request.id);
                            this.server.sendResponse(response_1);
                            return [2 /*return*/];
                        }
                        computer = new bare.createInstance(any, null, this.searchEngine, element);
                        return [4 /*yield*/, computer.compute()];
                    case 6:
                        items = _a.sent();
                        response = new bare.createInstance(any, null, {
                            hierarchyItems: items
                        }).toResponse(request.id);
                        this.server.sendResponse(response);
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    SearchDomainHandler.prototype.handleRequest = function (request) {
        try {
            var requestName = request.method;
            if (requestName == SEARCH_FIND_ELEMENT_REFERENCES) {
                this.findElementReferences(request);
                return lib3.Response.DELAYED_RESPONSE;
            }
            else if (requestName == SEARCH_FIND_MEMBER_DECLARATIONS) {
                this.findMemberDeclarations(request);
                return lib3.Response.DELAYED_RESPONSE;
            }
            else if (requestName == SEARCH_FIND_MEMBER_REFERENCES) {
                this.findMemberReferences(request);
                return lib3.Response.DELAYED_RESPONSE;
            }
            else if (requestName == SEARCH_FIND_TOP_LEVEL_DECLARATIONS) {
                this.findTopLevelDeclarations(request);
                return lib3.Response.DELAYED_RESPONSE;
            }
            else if (requestName == SEARCH_GET_TYPE_HIERARCHY) {
                this.getTypeHierarchy(request);
                return lib3.Response.DELAYED_RESPONSE;
            }
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
                var exception = __error__;
                return exception.response;
            }
        }
        return null;
    };
    SearchDomainHandler.prototype._sendSearchNotification = function (searchId, isLast, results) {
        this.server.sendNotification(new bare.createInstance(any, null, searchId, results.toList(), isLast).toNotification());
    };
    SearchDomainHandler.prototype._sendSearchResult = function (request, result) {
        var response = result.toResponse(request.id);
        this.server.sendResponse(response);
    };
    SearchDomainHandler.prototype._sendTypeHierarchyNull = function (request) {
        var response = new bare.createInstance(any, null).toResponse(request.id);
        this.server.sendResponse(response);
    };
    SearchDomainHandler.toResult = function (match) {
        return null /*topLevl*/.newSearchResult_fromMatch(match);
    };
    var SearchDomainHandler_1;
    __decorate([
        utils_1.defaultConstructor
    ], SearchDomainHandler.prototype, "SearchDomainHandler", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchDomainHandler.prototype, "handleRequest", null);
    SearchDomainHandler = SearchDomainHandler_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchDomainHandler);
    return SearchDomainHandler;
}());
exports.SearchDomainHandler = SearchDomainHandler;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=search_domain.js.map
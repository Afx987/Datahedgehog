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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_completion.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var CompletionDomainHandler = /** @class */ (function (_super) {
    __extends(CompletionDomainHandler, _super);
    function CompletionDomainHandler(server) {
        var _this = this;
        return _this;
    }
    CompletionDomainHandler_1 = CompletionDomainHandler;
    Object.defineProperty(CompletionDomainHandler, "performanceListMaxLength", {
        get: function () {
            if (this.__$performanceListMaxLength === undefined) {
                this.__$performanceListMaxLength = 50;
            }
            return this.__$performanceListMaxLength;
        },
        enumerable: true,
        configurable: true
    });
    CompletionDomainHandler.prototype.CompletionDomainHandler = function (server) {
        this._nextCompletionId = 0;
        this.performanceList = new core.DartList();
        _super.prototype.DartObject.call(this, server);
    };
    CompletionDomainHandler.prototype.computeSuggestions = function (request, params) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var pluginFutures, requestParams, file, offset, driver, newContributors, suggestions, COMPUTE_SUGGESTIONS_TAG, _i, newContributors_1, contributor, contributorTag, _a, _b, __error__1, responses, _c, responses_1, response, result;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        file = params.file;
                        offset = params.offset;
                        driver = server.getAnalysisDriver(file);
                        if (driver != null) {
                            requestParams = new bare.createInstance(any, null, file, offset);
                            pluginFutures = server.pluginManager.broadcastRequest(requestParams, {
                                contextRoot: driver.contextRoot
                            });
                        }
                        newContributors = server.serverPlugin.completionContributors;
                        suggestions = new core.DartList.literal();
                        COMPUTE_SUGGESTIONS_TAG = 'computeSuggestions';
                        this.performance.logStartTime(COMPUTE_SUGGESTIONS_TAG);
                        _i = 0, newContributors_1 = newContributors;
                        _d.label = 1;
                    case 1:
                        if (!(_i < newContributors_1.length)) return [3 /*break*/, 7];
                        contributor = newContributors_1[_i];
                        contributorTag = "computeSuggestions - " + contributor.runtimeType;
                        this.performance.logStartTime(contributorTag);
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        _b = (_a = suggestions).addAll;
                        return [4 /*yield*/, contributor.computeSuggestions(request)];
                    case 3:
                        _b.apply(_a, [_d.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        __error__1 = _d.sent();
                        if (_common_1.is(__error__1, any)) {
                            suggestions.clear();
                            return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        this.performance.logElapseTime(contributorTag);
                        _d.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        this.performance.logElapseTime(COMPUTE_SUGGESTIONS_TAG);
                        if (!(pluginFutures != null)) return [3 /*break*/, 9];
                        return [4 /*yield*/, waitForResponses(pluginFutures, {
                                requestParameters: requestParams
                            })];
                    case 8:
                        responses = _d.sent();
                        for (_c = 0, responses_1 = responses; _c < responses_1.length; _c++) {
                            response = responses_1[_c];
                            result = new bare.createInstance(any, "fromResponse", response);
                            suggestions.addAll(result.results);
                        }
                        _d.label = 9;
                    case 9: return [2 /*return*/, new CompletionResult(request.replacementOffset, request.replacementLength, suggestions)];
                }
            });
        }); })());
    };
    CompletionDomainHandler.prototype.handleRequest = function (request) {
        var _this = this;
        return async.runZoned(function () {
            var requestName = request.method;
            if (requestName == COMPLETION_GET_SUGGESTIONS) {
                _this.processRequest(request);
                return Response.DELAYED_RESPONSE;
            }
            return null;
        }, {
            onError: function (exception, stackTrace) {
                server.sendServerErrorNotification("Failed to handle completion domain request: " + request.toJson(), exception, stackTrace);
            }
        });
    };
    CompletionDomainHandler.prototype.ifMatchesRequestClear = function (completionRequest) {
        if (utils_1.op(utils_1.Op.EQUALS, this._currentRequest, completionRequest)) {
            this._currentRequest = null;
        }
    };
    CompletionDomainHandler.prototype.processRequest = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, completionId_1, source, completionRequest, completionId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.performance = new bare.createInstance(any, null);
                        params = new bare.createInstance(any, null, request);
                        return [4 /*yield*/, server.getAnalysisResult(params.file)];
                    case 1:
                        result = _a.sent();
                        if (!(utils_1.op(utils_1.Op.EQUALS, result, null) || !result.exists)) return [3 /*break*/, 4];
                        if (!(server.onNoAnalysisCompletion != null)) return [3 /*break*/, 3];
                        completionId_1 = new core.DartInt((this._nextCompletionId++)).toString();
                        return [4 /*yield*/, server.onNoAnalysisCompletion(request, this, params, this.performance, completionId_1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        server.sendResponse(new bare.createInstance(any, null, request));
                        return [2 /*return*/];
                    case 4:
                        if (utils_1.op(utils_1.Op.LT, params.offset, 0) || utils_1.op(utils_1.Op.GT, params.offset, result.content.length)) {
                            server.sendResponse(new bare.createInstance(any, null, request, 'params.offset', 'Expected offset between 0 and source length inclusive,' + (" but found " + params.offset)));
                            return [2 /*return*/];
                        }
                        source = server.resourceProvider.getFile(result.path).createSource(result.uri);
                        this.recordRequest(this.performance, source, result.content, params.offset);
                        completionRequest = new bare.createInstance(any, null, result, server.resourceProvider, source, params.offset, this.performance, server.ideOptions);
                        completionId = new core.DartInt((this._nextCompletionId++)).toString();
                        this.setNewRequest(completionRequest);
                        server.sendResponse(new bare.createInstance(any, null, completionId).toResponse(request.id));
                        this.computeSuggestions(completionRequest, params).then(function (result) {
                            var SEND_NOTIFICATION_TAG = 'send notification';
                            _this.performance.logStartTime(SEND_NOTIFICATION_TAG);
                            _this.sendCompletionNotification(completionId, result.replacementOffset, result.replacementLength, result.suggestions);
                            _this.performance.logElapseTime(SEND_NOTIFICATION_TAG);
                            _this.performance.notificationCount = 1;
                            _this.performance.logFirstNotificationComplete('notification 1 complete');
                            _this.performance.suggestionCountFirst = result.suggestions.length;
                            _this.performance.suggestionCountLast = result.suggestions.length;
                            _this.performance.complete();
                        }).whenComplete(function () {
                            _this.ifMatchesRequestClear(completionRequest);
                        });
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    CompletionDomainHandler.prototype.recordRequest = function (performance, source, content, offset) {
        performance.source = source;
        if (CompletionDomainHandler_1.performanceListMaxLength == 0 || utils_1.op(utils_1.Op.EQUALS, source, null)) {
            return;
        }
        performance.setContentsAndOffset(content, offset);
        while (this.performanceList.length >= CompletionDomainHandler_1.performanceListMaxLength) {
            this.performanceList.removeAt(0);
        }
        this.performanceList.add(performance);
    };
    CompletionDomainHandler.prototype.sendCompletionNotification = function (completionId, replacementOffset, replacementLength, results) {
        server.sendNotification(new bare.createInstance(any, null, completionId, replacementOffset, replacementLength, results, true).toNotification());
    };
    CompletionDomainHandler.prototype.setNewRequest = function (completionRequest) {
        this._abortCurrentRequest();
        this._currentRequest = completionRequest;
    };
    CompletionDomainHandler.prototype._abortCurrentRequest = function () {
        if (this._currentRequest != null) {
            this._currentRequest.abort();
            this._currentRequest = null;
        }
    };
    var CompletionDomainHandler_1;
    __decorate([
        utils_1.defaultConstructor
    ], CompletionDomainHandler.prototype, "CompletionDomainHandler", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionDomainHandler.prototype, "handleRequest", null);
    CompletionDomainHandler = CompletionDomainHandler_1 = __decorate([
        utils_1.DartClass
    ], CompletionDomainHandler);
    return CompletionDomainHandler;
}(any));
exports.CompletionDomainHandler = CompletionDomainHandler;
var CompletionResult = /** @class */ (function () {
    function CompletionResult(replacementOffset, replacementLength, suggestions) {
    }
    CompletionResult.prototype.CompletionResult = function (replacementOffset, replacementLength, suggestions) {
        this.replacementOffset = replacementOffset;
        this.replacementLength = replacementLength;
        this.suggestions = suggestions;
    };
    __decorate([
        utils_1.defaultConstructor
    ], CompletionResult.prototype, "CompletionResult", null);
    CompletionResult = __decorate([
        utils_1.DartClass
    ], CompletionResult);
    return CompletionResult;
}());
exports.CompletionResult = CompletionResult;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=domain_completion.js.map
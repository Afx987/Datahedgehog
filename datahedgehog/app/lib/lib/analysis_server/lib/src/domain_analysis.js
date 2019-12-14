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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_analysis.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/analyzer/lib/error/error");
var AnalysisDomainHandler = /** @class */ (function () {
    function AnalysisDomainHandler(server) {
    }
    AnalysisDomainHandler.prototype.AnalysisDomainHandler = function (server) {
        this.server = server;
        this._callAnalysisDomainReceivers();
    };
    AnalysisDomainHandler.prototype.getErrors = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var file, send, result, completionFuture;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = new bare.createInstance(any, null, request).file;
                        send = function (analysisOptions, lineInfo, errors) {
                            if (utils_1.op(utils_1.Op.EQUALS, lineInfo, null)) {
                                _this.server.sendResponse(new bare.createInstance(any, null, request));
                            }
                            else {
                                var protocolErrors = doAnalysisError_listFromEngine(analysisOptions, lineInfo, errors);
                                _this.server.sendResponse(new bare.createInstance(any, null, protocolErrors).toResponse(request.id));
                            }
                        };
                        if (!this.server.options.enableNewAnalysisDriver) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.server.getAnalysisResult(file)];
                    case 1:
                        result = _a.sent();
                        if (!(this.server.onResultErrorSupplementor != null)) return [3 /*break*/, 4];
                        if (!(result != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.server.onResultErrorSupplementor(file, result.errors)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.server.onNoAnalysisResult(file, send);
                        return [2 /*return*/];
                    case 4:
                        send((function (t) { return (!!t) ? t.analysisOptions : null; })((function (t) { return (!!t) ? t.driver : null; })(result)), (function (t) { return (!!t) ? t.lineInfo : null; })(result), (function (t) { return (!!t) ? t.errors : null; })(result));
                        return [2 /*return*/];
                    case 5:
                        completionFuture = this.server.onFileAnalysisComplete(file);
                        if (utils_1.op(utils_1.Op.EQUALS, completionFuture, null)) {
                            this.server.sendResponse(new bare.createInstance(any, null, request));
                        }
                        completionFuture.then(function (reason) { return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, errorInfo, context;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = reason;
                                        switch (_a) {
                                            case AnalysisDoneReason.COMPLETE: return [3 /*break*/, 1];
                                            case AnalysisDoneReason.CONTEXT_REMOVED: return [3 /*break*/, 2];
                                        }
                                        return [3 /*break*/, 4];
                                    case 1:
                                        errorInfo = this.server.getErrors(file);
                                        if (utils_1.op(utils_1.Op.EQUALS, errorInfo, null)) {
                                            this.server.sendResponse(new bare.createInstance(any, null, request));
                                        }
                                        else {
                                            context = this.server.getAnalysisContext(file);
                                            send(context.analysisOptions, errorInfo.lineInfo, errorInfo.errors);
                                        }
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.getErrors(request)];
                                    case 3:
                                        _b.sent();
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })()); });
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisDomainHandler.prototype.getHover = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, unit, result, hovers, hoverInformation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        if (!this.server.options.enableNewAnalysisDriver) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.server.getAnalysisResult(params.file)];
                    case 1:
                        result = _a.sent();
                        unit = (function (t) { return (!!t) ? t.unit : null; })(result);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.server.getResolvedCompilationUnit(params.file)];
                    case 3:
                        unit = _a.sent();
                        _a.label = 4;
                    case 4:
                        hovers = new core.DartList.literal();
                        if (unit != null) {
                            hoverInformation = new bare.createInstance(any, null, unit, params.offset).compute();
                            if (hoverInformation != null) {
                                hovers.add(hoverInformation);
                            }
                        }
                        this.server.sendResponse(new bare.createInstance(any, null, hovers).toResponse(request.id));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisDomainHandler.prototype.getLibraryDependencies = function (request) {
        var _this = this;
        this.server.onAnalysisComplete.then(function (_) {
            var collector = new bare.createInstance(any, null, _this.server.analysisContexts);
            var libraries = collector.collectLibraryDependencies();
            var packageMap = collector.calculatePackageMap(_this.server.folderMap);
            _this.server.sendResponse(new bare.createInstance(any, null, libraries.toList({
                growable: false
            }), packageMap).toResponse(request.id));
        }).catchError(function (error, st) {
            _this.server.sendResponse(new bare.createInstance(any, null, request, error, st));
        });
        return Response.DELAYED_RESPONSE;
    };
    AnalysisDomainHandler.prototype.getNavigation = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, driver, result, unit, collector, analysisFuture;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        file = params.file;
                        if (!this.server.options.enableNewAnalysisDriver) return [3 /*break*/, 4];
                        driver = this.server.getAnalysisDriver(file);
                        if (!utils_1.op(utils_1.Op.EQUALS, driver, null)) return [3 /*break*/, 1];
                        this.server.sendResponse(new bare.createInstance(any, null, request));
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.server.getAnalysisResult(file)];
                    case 2:
                        result = _a.sent();
                        unit = (function (t) { return (!!t) ? t.unit : null; })(result);
                        if (utils_1.op(utils_1.Op.EQUALS, unit, null) || !result.exists) {
                            this.server.sendResponse(new bare.createInstance(any, null, request));
                        }
                        else {
                            collector = new bare.createInstance(any, null);
                            computeDartNavigation(collector, unit, params.offset, params.length);
                            collector.createRegions();
                            this.server.sendResponse(new bare.createInstance(any, null, collector.files, collector.targets, collector.regions).toResponse(request.id));
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        analysisFuture = this.server.onFileAnalysisComplete(file);
                        if (utils_1.op(utils_1.Op.EQUALS, analysisFuture, null)) {
                            this.server.sendResponse(new bare.createInstance(any, null, request));
                            return [2 /*return*/];
                        }
                        analysisFuture.then(function (reason) { return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, unit, unitElement, collector;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = reason;
                                        switch (_a) {
                                            case AnalysisDoneReason.COMPLETE: return [3 /*break*/, 1];
                                            case AnalysisDoneReason.CONTEXT_REMOVED: return [3 /*break*/, 3];
                                        }
                                        return [3 /*break*/, 5];
                                    case 1: return [4 /*yield*/, this.server.getResolvedCompilationUnit(file)];
                                    case 2:
                                        unit = _b.sent();
                                        if (utils_1.op(utils_1.Op.EQUALS, unit, null)) {
                                            this.server.sendResponse(new bare.createInstance(any, null, request));
                                        }
                                        else {
                                            unitElement = unit.element;
                                            collector = computeNavigation(this.server, unitElement.context, unitElement.source, params.offset, params.length);
                                            this.server.sendResponse(new bare.createInstance(any, null, collector.files, collector.targets, collector.regions).toResponse(request.id));
                                        }
                                        return [3 /*break*/, 5];
                                    case 3: return [4 /*yield*/, this.getNavigation(request)];
                                    case 4:
                                        _b.sent();
                                        return [3 /*break*/, 5];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })()); });
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisDomainHandler.prototype.getReachableSources = function (request) {
        var params = new bare.createInstance(any, null, request);
        var pair = this.server.getContextSourcePair(params.file);
        if (utils_1.op(utils_1.Op.EQUALS, pair.context, null) || utils_1.op(utils_1.Op.EQUALS, pair.source, null)) {
            return new bare.createInstance(any, null, request);
        }
        var sources = new bare.createInstance(any, null, pair.source, pair.context).collectSources();
        return new bare.createInstance(any, null, sources).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype.handleRequest = function (request) {
        try {
            var requestName = request.method;
            if (requestName == ANALYSIS_GET_ERRORS) {
                this.getErrors(request);
                return Response.DELAYED_RESPONSE;
            }
            else if (requestName == ANALYSIS_GET_HOVER) {
                this.getHover(request);
                return Response.DELAYED_RESPONSE;
            }
            else if (requestName == ANALYSIS_GET_LIBRARY_DEPENDENCIES) {
                return this.getLibraryDependencies(request);
            }
            else if (requestName == ANALYSIS_GET_NAVIGATION) {
                this.getNavigation(request);
                return Response.DELAYED_RESPONSE;
            }
            else if (requestName == ANALYSIS_GET_REACHABLE_SOURCES) {
                return this.getReachableSources(request);
            }
            else if (requestName == ANALYSIS_REANALYZE) {
                return this.reanalyze(request);
            }
            else if (requestName == ANALYSIS_SET_ANALYSIS_ROOTS) {
                return this.setAnalysisRoots(request);
            }
            else if (requestName == ANALYSIS_SET_GENERAL_SUBSCRIPTIONS) {
                return this.setGeneralSubscriptions(request);
            }
            else if (requestName == ANALYSIS_SET_PRIORITY_FILES) {
                return this.setPriorityFiles(request);
            }
            else if (requestName == ANALYSIS_SET_SUBSCRIPTIONS) {
                return this.setSubscriptions(request);
            }
            else if (requestName == ANALYSIS_UPDATE_CONTENT) {
                return this.updateContent(request);
            }
            else if (requestName == ANALYSIS_UPDATE_OPTIONS) {
                return this.updateOptions(request);
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
    AnalysisDomainHandler.prototype.reanalyze = function (request) {
        var params = new bare.createInstance(any, null, request);
        var roots = params.roots;
        if (roots == null || roots.isNotEmpty) {
            var includedPaths = this.server.contextManager.includedPaths;
            var rootResources = null;
            if (roots != null) {
                rootResources = new core.DartList.literal();
                for (var _i = 0, roots_1 = roots; _i < roots_1.length; _i++) {
                    var rootPath = roots_1[_i];
                    if (!includedPaths.contains(rootPath)) {
                        return new bare.createInstance(any, null, request, rootPath);
                    }
                    rootResources.add(this.server.resourceProvider.getResource(rootPath));
                }
            }
            this.server.reanalyze(rootResources);
        }
        var converter = new bare.createInstance(any, null);
        this.server.pluginManager.broadcastRequest(converter.convertAnalysisReanalyzeParams(params));
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype.setAnalysisRoots = function (request) {
        var params = new bare.createInstance(any, null, request);
        var includedPathList = params.included;
        var excludedPathList = params.excluded;
        for (var _i = 0, includedPathList_1 = includedPathList; _i < includedPathList_1.length; _i++) {
            var path = includedPathList_1[_i];
            if (!this.server.isValidFilePath(path)) {
                return new bare.createInstance(any, null, request, path);
            }
        }
        for (var _a = 0, excludedPathList_1 = excludedPathList; _a < excludedPathList_1.length; _a++) {
            var path = excludedPathList_1[_a];
            if (!this.server.isValidFilePath(path)) {
                return new bare.createInstance(any, null, request, path);
            }
        }
        this.server.setAnalysisRoots(request.id, includedPathList, excludedPathList, (params.packageRoots || new core.DartMap.literal([])));
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype.setGeneralSubscriptions = function (request) {
        var params = new bare.createInstance(any, null, request);
        this.server.setGeneralAnalysisSubscriptions(params.subscriptions);
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype.setPriorityFiles = function (request) {
        var params = new bare.createInstance(any, null, request);
        this.server.setPriorityFiles(request.id, params.files);
        var converter = new bare.createInstance(any, null);
        this.server.pluginManager.setAnalysisSetPriorityFilesParams(converter.convertAnalysisSetPriorityFilesParams(params));
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype.setSubscriptions = function (request) {
        var params = new bare.createInstance(any, null, request);
        var subMap = mapMap(params.subscriptions, {
            valueCallback: function (subscriptions) {
                return subscriptions.toSet();
            }
        });
        this.server.setAnalysisSubscriptions(subMap);
        var converter = new bare.createInstance(any, null);
        this.server.pluginManager.setAnalysisSetSubscriptionsParams(converter.convertAnalysisSetSubscriptionsParams(params));
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype.updateContent = function (request) {
        var params = new bare.createInstance(any, null, request);
        this.server.updateContent(request.id, params.files);
        var converter = new bare.createInstance(any, null);
        this.server.pluginManager.setAnalysisUpdateContentParams(converter.convertAnalysisUpdateContentParams(params));
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype.updateOptions = function (request) {
        var params = new bare.createInstance(any, null, request);
        var newOptions = params.options;
        var updaters = new core.DartList();
        if (newOptions.generateDart2jsHints != null) {
            updaters.add(function (options) {
                options.dart2jsHint = newOptions.generateDart2jsHints;
            });
        }
        if (newOptions.generateHints != null) {
            updaters.add(function (options) {
                options.hint = newOptions.generateHints;
            });
        }
        if (newOptions.generateLints != null) {
            updaters.add(function (options) {
                options.lint = newOptions.generateLints;
            });
        }
        if (newOptions.enableSuperMixins != null) {
            updaters.add(function (options) {
                options.enableSuperMixins = newOptions.enableSuperMixins;
            });
        }
        this.server.updateOptions(updaters);
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    AnalysisDomainHandler.prototype._callAnalysisDomainReceivers = function () {
        var analysisDomain = new AnalysisDomainImpl(this.server);
        for (var ; function of() { }; this.server.serverPlugin.setAnalysisDomainFunctions) {
            try {
            }
            catch (__error__) {
                {
                    var stackTrace = new core.DartStackTrace.fromError(__error__);
                    var exception = __error__;
                    lib3.AnalysisEngine.instance.logger.logError("Exception from analysis domain receiver: " + function () { }.runtimeType, new bare.createInstance(any, null, exception, stackTrace));
                }
            }
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisDomainHandler.prototype, "AnalysisDomainHandler", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisDomainHandler.prototype, "handleRequest", null);
    AnalysisDomainHandler = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisDomainHandler);
    return AnalysisDomainHandler;
}());
exports.AnalysisDomainHandler = AnalysisDomainHandler;
var AnalysisDomainImpl = /** @class */ (function () {
    function AnalysisDomainImpl(server) {
    }
    AnalysisDomainImpl.prototype.AnalysisDomainImpl = function (server) {
        var _this = this;
        this.controllers = new core.DartMap.literal([]);
        this.server = server;
        this.server.onContextsChanged.listen(function (event) {
            event.added.forEach(_this._subscribeForContext.bind(_this));
        });
    };
    AnalysisDomainImpl.prototype.onResultChanged = function (descriptor) {
        var stream = this.controllers.putIfAbsent(descriptor, function () {
            return new async.DartStreamController.broadcast();
        }).stream;
        this.server.analysisContexts.forEach(this._subscribeForContext.bind(this));
        return stream;
    };
    AnalysisDomainImpl.prototype.scheduleNotification = function (context, source, service) {
        var file = source.fullName;
        if (this.server.hasAnalysisSubscription(service, file)) {
            if (utils_1.op(utils_1.Op.EQUALS, service, AnalysisService.NAVIGATION)) {
                this.server.scheduleOperation(new bare.createInstance(any, null, context, source));
            }
            if (utils_1.op(utils_1.Op.EQUALS, service, AnalysisService.OCCURRENCES)) {
                this.server.scheduleOperation(new bare.createInstance(any, null, context, source));
            }
        }
    };
    AnalysisDomainImpl.prototype._subscribeForContext = function (context) {
        var _this = this;
        for (var _i = 0, _a = this.controllers.keys; _i < _a.length; _i++) {
            var descriptor = _a[_i];
            context.onResultChanged(descriptor).listen(function (result) {
                var controller = _this.controllers.get(result.descriptor);
                if (controller != null) {
                    controller.add(result);
                }
            });
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisDomainImpl.prototype, "AnalysisDomainImpl", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisDomainImpl.prototype, "onResultChanged", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisDomainImpl.prototype, "scheduleNotification", null);
    AnalysisDomainImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisDomainImpl);
    return AnalysisDomainImpl;
}());
exports.AnalysisDomainImpl = AnalysisDomainImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=domain_analysis.js.map
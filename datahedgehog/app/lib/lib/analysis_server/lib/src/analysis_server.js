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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/analysis_server.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var io = require("@dart2ts/dart/io");
var lib6 = require("@dart2ts.packages/analysis_server/lib/src/protocol_server");
var math = require("@dart2ts/dart/math");
var AnalysisDoneReason = /** @class */ (function () {
    function AnalysisDoneReason() {
    }
    AnalysisDoneReason_1 = AnalysisDoneReason;
    Object.defineProperty(AnalysisDoneReason, "COMPLETE", {
        get: function () {
            if (this.__$COMPLETE === undefined) {
                this.__$COMPLETE = new AnalysisDoneReason_1._('COMPLETE');
            }
            return this.__$COMPLETE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisDoneReason, "CONTEXT_REMOVED", {
        get: function () {
            if (this.__$CONTEXT_REMOVED === undefined) {
                this.__$CONTEXT_REMOVED = new AnalysisDoneReason_1._('CONTEXT_REMOVED');
            }
            return this.__$CONTEXT_REMOVED;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisDoneReason.prototype._ = function (text) {
        this.text = text;
    };
    var AnalysisDoneReason_1;
    __decorate([
        utils_1.namedConstructor
    ], AnalysisDoneReason.prototype, "_", null);
    AnalysisDoneReason = AnalysisDoneReason_1 = __decorate([
        utils_1.DartClass
    ], AnalysisDoneReason);
    return AnalysisDoneReason;
}());
exports.AnalysisDoneReason = AnalysisDoneReason;
var AnalysisServer = /** @class */ (function () {
    function AnalysisServer(channel, resourceProvider, packageMapProvider, index, serverPlugin, options, sdkManager, instrumentationService, _namedArguments) {
    }
    AnalysisServer_1 = AnalysisServer;
    Object.defineProperty(AnalysisServer, "VERSION", {
        get: function () {
            if (this.__$VERSION === undefined) {
                this.__$VERSION = '1.18.0';
            }
            return this.__$VERSION;
        },
        set: function (__$value) {
            this.__$VERSION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer, "performOperationDelayFrequency", {
        get: function () {
            if (this.__$performOperationDelayFrequency === undefined) {
                this.__$performOperationDelayFrequency = 25;
            }
            return this.__$performOperationDelayFrequency;
        },
        set: function (__$value) {
            this.__$performOperationDelayFrequency = __$value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisServer.prototype.AnalysisServer = function (channel, resourceProvider, packageMapProvider, index, serverPlugin, options, sdkManager, instrumentationService, _namedArguments) {
        var _this = this;
        var _a = Object.assign({
            "fileResolverProvider": null,
            "packageResolverProvider": null,
            "useSingleContextManager": false,
            "rethrowExceptions": true
        }, _namedArguments), diagnosticServer = _a.diagnosticServer, fileResolverProvider = _a.fileResolverProvider, packageResolverProvider = _a.packageResolverProvider, useSingleContextManager = _a.useSingleContextManager, rethrowExceptions = _a.rethrowExceptions;
        this._analyzedFilesGlobs = null;
        this.statusAnalyzing = false;
        this.performOperationPending = false;
        this.serverServices = new core.DartHashSet();
        this.generalAnalysisServices = new core.DartHashSet();
        this.analysisServices = new core.DartHashMap();
        this.contextAnalysisDoneCompleters = new core.DartHashMap();
        this.performanceDuringStartup = new ServerPerformance();
        this._nextPerformOperationDelayTime = new core.DartDateTime.now().millisecondsSinceEpoch + 1000;
        this.fileContentOverlay = new bare.createInstance(any, null);
        this.overlayState = new bare.createInstance(any, null);
        this.defaultContextOptions = new bare.createInstance(any, null);
        this._onContextsChangedController = new async.DartStreamController.broadcast();
        this.priorityFiles = new core.DartSet();
        this.notificationManager = new bare.createInstance(any, null, channel, resourceProvider);
        this.channel = channel;
        this.resourceProvider = resourceProvider;
        this.index = index;
        this.serverPlugin = serverPlugin;
        this.options = options;
        this.sdkManager = sdkManager;
        this.instrumentationService = instrumentationService;
        this.diagnosticServer = diagnosticServer;
        this.rethrowExceptions = rethrowExceptions;
        this._performance = this.performanceDuringStartup;
        this.pluginManager = new bare.createInstance(any, null, this.resourceProvider, this._getByteStorePath(), this.sdkManager.defaultSdkDirectory, this.notificationManager, this.instrumentationService);
        var pluginWatcher = new bare.createInstance(any, null, this.resourceProvider, this.pluginManager);
        this.defaultContextOptions.incremental = true;
        this.defaultContextOptions.incrementalApi = this.options.enableIncrementalResolutionApi;
        this.defaultContextOptions.incrementalValidation = this.options.enableIncrementalResolutionValidation;
        this.defaultContextOptions.generateImplicitErrors = false;
        this.operationQueue = new bare.createInstance(any, null);
        {
            var name_1 = this.options.newAnalysisDriverLog;
            var sink = new bare.createInstance(any, null);
            if (name_1 != null) {
                if (name_1 == 'stdout') {
                    sink = io.properties.stdout;
                }
                else if (new core.DartString(name_1).startsWith('file:')) {
                    var path = new core.DartString(name_1).substring(new core.DartString('file:').length);
                    sink = new io.File(path).openWrite({
                        mode: io.FileMode.APPEND
                    });
                }
            }
            this._analysisPerformanceLogger = new bare.createInstance(any, null, sink);
        }
        this.byteStore = this._createByteStore();
        this.analysisDriverScheduler = new bare.createInstance(any, null, this._analysisPerformanceLogger, {
            driverWatcher: pluginWatcher
        });
        this.analysisDriverScheduler.status.listen(this.sendStatusNotificationNew.bind(this));
        this.analysisDriverScheduler.start();
        if (useSingleContextManager) {
            this.contextManager = new bare.createInstance(any, null, this.resourceProvider, this.sdkManager, packageResolverProvider, this.analyzedFilesGlobs, this.defaultContextOptions);
        }
        else {
            this.contextManager = new bare.createInstance(any, null, this.resourceProvider, this.sdkManager, packageResolverProvider, packageMapProvider, this.analyzedFilesGlobs, this.instrumentationService, this.defaultContextOptions, this.options.enableNewAnalysisDriver);
        }
        this.fileResolverProvider = fileResolverProvider;
        this.packageResolverProvider = packageResolverProvider;
        var contextManagerCallbacks = new ServerContextManagerCallbacks(this, this.resourceProvider);
        this.contextManager.callbacks = contextManagerCallbacks;
        AnalysisEngine.instance.logger = new bare.createInstance(any, null, this);
        this._onAnalysisStartedController = new async.DartStreamController.broadcast();
        this._onFileAnalyzedController = new async.DartStreamController.broadcast();
        this._onFileAddedController = new async.DartStreamController.broadcast();
        this._onFileChangedController = new async.DartStreamController.broadcast();
        this._onPriorityChangeController = new async.DartStreamController.broadcast();
        this.running = true;
        this.onAnalysisStarted.first.then(function (_) {
            _this.onAnalysisComplete.then(function (_) {
                _this.performanceAfterStartup = new ServerPerformance();
                _this._performance = _this.performanceAfterStartup;
            });
        });
        this._setupIndexInvalidation();
        if (this.options.enableNewAnalysisDriver) {
            this.searchEngine = new bare.createInstance(any, null, this.driverMap.values);
        }
        else if (this.index != null) {
            this.searchEngine = new bare.createInstance(any, null, this.index, this.getAstProvider.bind(this));
        }
        var notification = new bare.createInstance(any, null, AnalysisServer_1.VERSION, io.properties.pid, {
            sessionId: this.instrumentationService.sessionId
        }).toNotification();
        this.channel.sendNotification(notification);
        this.channel.listen(this.handleRequest.bind(this), {
            onDone: this.done.bind(this), onError: this.error.bind(this)
        });
        this.handlers = this.serverPlugin.createDomains(this);
        this.ideOptions = new bare.createInstance(any, null, this.options);
    };
    Object.defineProperty(AnalysisServer.prototype, "analysisContexts", {
        get: function () {
            return this.contextManager.analysisContexts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "analyzedFilesGlobs", {
        get: function () {
            if (this._analyzedFilesGlobs == null) {
                this._analyzedFilesGlobs = new core.DartList.literal();
                var patterns = this.serverPlugin.analyzedFilePatterns;
                for (var _i = 0, patterns_1 = patterns; _i < patterns_1.length; _i++) {
                    var pattern = patterns_1[_i];
                    try {
                        this._analyzedFilesGlobs.add(new bare.createInstance(any, null, this.resourceProvider.pathContext.separator, pattern));
                    }
                    catch (__error__) {
                        {
                            var stackTrace = new core.DartStackTrace.fromError(__error__);
                            var exception = __error__;
                            AnalysisEngine.instance.logger.logError("Invalid glob pattern: \"" + pattern + "\"", new bare.createInstance(any, null, exception, stackTrace));
                        }
                    }
                }
            }
            return this._analyzedFilesGlobs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "driverMap", {
        get: function () {
            return this.contextManager.driverMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "folderMap", {
        get: function () {
            return this.contextManager.folderMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "onAnalysisComplete", {
        get: function () {
            if (this.isAnalysisComplete()) {
                return new async.Future.value();
            }
            if (utils_1.op(utils_1.Op.EQUALS, this._onAnalysisCompleteCompleter, null)) {
                this._onAnalysisCompleteCompleter = new async.DartCompleter();
            }
            return this._onAnalysisCompleteCompleter.future;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "onAnalysisStarted", {
        get: function () {
            return this._onAnalysisStartedController.stream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "onContextsChanged", {
        get: function () {
            return this._onContextsChangedController.stream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "onFileAdded", {
        get: function () {
            return this._onFileAddedController.stream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "onFileAnalyzed", {
        get: function () {
            return this._onFileAnalyzedController.stream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "onFileChanged", {
        get: function () {
            return this._onFileChangedController.stream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "onPriorityChange", {
        get: function () {
            return this._onPriorityChangeController.stream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisServer.prototype, "test_onOperationPerformed", {
        get: function () {
            if (utils_1.op(utils_1.Op.EQUALS, this._test_onOperationPerformedCompleter, null)) {
                this._test_onOperationPerformedCompleter = new async.DartCompleter();
            }
            return this._test_onOperationPerformedCompleter.future;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisServer.prototype.addOperation = function (operation) {
        this.operationQueue.add(operation);
    };
    AnalysisServer.prototype.done = function () {
        (function (_1_) { return (!!_1_) ? _1_.stop() : null; })(this.index);
        this.running = false;
    };
    AnalysisServer.prototype.error = function (argument) {
        this.running = false;
    };
    AnalysisServer.prototype.fileAnalyzed = function (notice) {
        if (this.contextManager.isInAnalysisRoot(notice.source.fullName)) {
            this._onFileAnalyzedController.add(notice);
        }
    };
    AnalysisServer.prototype.findSdk = function () {
        var sdk = this.sdkManager.anySdk;
        if (sdk != null) {
            return sdk;
        }
        return null;
    };
    AnalysisServer.prototype.getAnalysisContext = function (path) {
        return this.getContextSourcePair(path).context;
    };
    AnalysisServer.prototype.getAnalysisContextForSource = function (source) {
        for (var _i = 0, _a = this.analysisContexts; _i < _a.length; _i++) {
            var context = _a[_i];
            var kind = context.getKindOf(source);
            if (kind != SourceKind.UNKNOWN) {
                return context;
            }
        }
        return null;
    };
    AnalysisServer.prototype.getAnalysisDriver = function (path) {
        var drivers = this.driverMap.values;
        if (drivers.isNotEmpty) {
            var driver = drivers.firstWhere(function (driver) {
                return driver.contextRoot.containsFile(path);
            }, {
                orElse: function () {
                    return null;
                }
            });
            driver = (driver) || (drivers.firstWhere(function (driver) {
                return driver.knownFiles.contains(path);
            }, {
                orElse: function () {
                    return null;
                }
            }));
            driver = (driver) || (drivers.first);
            return driver;
        }
        return null;
    };
    AnalysisServer.prototype.getAnalysisResult = function (path) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var driver, __error__1, e;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!AnalysisEngine.isDartFileName(path)) {
                            return [2 /*return*/, null];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        driver = this.getAnalysisDriver(path);
                        return [4 /*yield*/, (function (_2_) { return (!!_2_) ? _2_.getResult(path) : null; })(driver)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        __error__1 = _a.sent();
                        {
                            e = __error__1;
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisServer.prototype.getAstProvider = function (path) {
        if (this.options.enableNewAnalysisDriver) {
            var analysisDriver = this.getAnalysisDriver(path);
            return new bare.createInstance(any, null, analysisDriver);
        }
        else {
            var analysisContext = this.getAnalysisContext(path);
            return new bare.createInstance(any, null, analysisContext);
        }
    };
    AnalysisServer.prototype.getCompilationUnitElement = function (file) {
        var pair = this.getContextSourcePair(file);
        if (utils_1.op(utils_1.Op.EQUALS, pair, null)) {
            return null;
        }
        var context = pair.context;
        var unitSource = pair.source;
        if (utils_1.op(utils_1.Op.EQUALS, context, null) || utils_1.op(utils_1.Op.EQUALS, unitSource, null)) {
            return null;
        }
        var librarySources = context.getLibrariesContaining(unitSource);
        if (!librarySources.isNotEmpty) {
            return null;
        }
        var librarySource = librarySources.first;
        return context.getCompilationUnitElement(unitSource, librarySource);
    };
    AnalysisServer.prototype.getContainingContext = function (path) {
        return this.contextManager.getContextFor(path);
    };
    AnalysisServer.prototype.getContainingDriver = function (path) {
        return this.contextManager.getDriverFor(path);
    };
    AnalysisServer.prototype.getContextSourcePair = function (path) {
        {
            var sdk = this.findSdk();
            if (sdk != null) {
                var uri = this.resourceProvider.pathContext.toUri(path);
                var sdkSource = sdk.fromFileUri(uri);
                if (sdkSource != null) {
                    return new ContextSourcePair(sdk.context, sdkSource);
                }
            }
        }
        var resource = this.resourceProvider.getResource(path);
        if (_common_1.isNot(resource, any)) {
            return new ContextSourcePair(null, null);
        }
        var file = resource;
        {
            var containingContext = this.getContainingContext(path);
            if (containingContext != null) {
                var source = ContextManagerImpl.createSourceInContext(containingContext, file);
                return new ContextSourcePair(containingContext, source);
            }
        }
        for (var _i = 0, _a = this.analysisContexts; _i < _a.length; _i++) {
            var context = _a[_i];
            var source = ContextManagerImpl.createSourceInContext(context, file);
            var kind = context.getKindOf(source);
            if (kind != SourceKind.UNKNOWN) {
                return new ContextSourcePair(context, source);
            }
        }
        for (var _b = 0, _c = this.analysisContexts; _b < _c.length; _b++) {
            var context = _c[_b];
            var sources = context.getSourcesWithFullName(path);
            if (sources.isNotEmpty) {
                var source = sources.first;
                return new ContextSourcePair(context, source);
            }
        }
        var fileSource = file.createSource();
        return new ContextSourcePair(null, fileSource);
    };
    AnalysisServer.prototype.getElementAtOffset = function (file, offset) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getNodeAtOffset(file, offset)];
                    case 1:
                        node = _a.sent();
                        return [2 /*return*/, this.getElementOfNode(node)];
                }
            });
        }); })());
    };
    AnalysisServer.prototype.getElementOfNode = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, node, null)) {
            return null;
        }
        if (_common_1.is(node, any) && _common_1.is(node.parent, any)) {
            node = node.parent;
        }
        if (_common_1.is(node, any)) {
            node = node.parent;
        }
        if (_common_1.is(node, any) && _common_1.is(node.parent, any)) {
            return null;
        }
        var element = ElementLocator.locate(node);
        if (_common_1.is(node, any) && _common_1.is(element, any)) {
            element = getImportElement(node);
        }
        return element;
    };
    AnalysisServer.prototype.getErrors = function (file) {
        var contextSource = this.getContextSourcePair(file);
        var context = contextSource.context;
        var source = contextSource.source;
        if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
            return null;
        }
        if (!context.exists(source)) {
            return null;
        }
        return context.getErrors(source);
    };
    AnalysisServer.prototype.getNodeAtOffset = function (file, offset) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var unit, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.options.enableNewAnalysisDriver) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getAnalysisResult(file)];
                    case 1:
                        result = _a.sent();
                        unit = (function (t) { return (!!t) ? t.unit : null; })(result);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getResolvedCompilationUnit(file)];
                    case 3:
                        unit = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (unit != null) {
                            return [2 /*return*/, new bare.createInstance(any, null, offset).searchWithin(unit)];
                        }
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    AnalysisServer.prototype.getResolvedCompilationUnit = function (path) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var result, contextSource, context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.options.enableNewAnalysisDriver) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getAnalysisResult(path)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (function (t) { return (!!t) ? t.unit : null; })(result)];
                    case 2:
                        contextSource = this.getContextSourcePair(path);
                        context = contextSource.context;
                        if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, runWithActiveContext(context, function () {
                                var unitSource = contextSource.source;
                                var librarySources = context.getLibrariesContaining(unitSource);
                                for (var _i = 0, librarySources_1 = librarySources; _i < librarySources_1.length; _i++) {
                                    var librarySource = librarySources_1[_i];
                                    return context.resolveCompilationUnit2(unitSource, librarySource);
                                }
                                return null;
                            })];
                }
            });
        }); })());
    };
    AnalysisServer.prototype.handleRequest = function (request) {
        var _this = this;
        this._performance.logRequest(request);
        async.runZoned(function () {
            ServerPerformanceStatistics.serverRequests.makeCurrentWhile(function () {
                var count = _this.handlers.length;
                for (var i = 0; i < count; i++) {
                    try {
                        var response = _this.handlers[i].handleRequest(request);
                        if (utils_1.op(utils_1.Op.EQUALS, response, Response.DELAYED_RESPONSE)) {
                            return;
                        }
                        if (response != null) {
                            _this.channel.sendResponse(response);
                            return;
                        }
                    }
                    catch (__error__) {
                        if (_common_1.is(__error__, any)) {
                            var exception = __error__;
                            _this.channel.sendResponse(exception.response);
                            return;
                        }
                        {
                            var stackTrace = new core.DartStackTrace.fromError(__error__);
                            var exception = __error__;
                            var error = new bare.createInstance(any, null, RequestErrorCode.SERVER_ERROR, exception.toString());
                            if (stackTrace != null) {
                                error.stackTrace = stackTrace.toString();
                            }
                            var response = new bare.createInstance(any, null, request.id, {
                                error: error
                            });
                            _this.channel.sendResponse(response);
                            return;
                        }
                    }
                }
                _this.channel.sendResponse(new bare.createInstance(any, null, request));
            });
        }, {
            onError: function (exception, stackTrace) {
                _this.sendServerErrorNotification("Failed to handle request: " + request.toJson(), exception, stackTrace, {
                    fatal: true
                });
            }
        });
    };
    AnalysisServer.prototype.hasAnalysisSubscription = function (service, file) {
        var files = this.analysisServices.get(service);
        return files != null && files.contains(file);
    };
    AnalysisServer.prototype.isAnalysisComplete = function () {
        return this.operationQueue.isEmpty && !this.analysisDriverScheduler.isAnalyzing;
    };
    AnalysisServer.prototype.isValidFilePath = function (path) {
        return this.resourceProvider.absolutePathContext.isValid(path);
    };
    AnalysisServer.prototype.onFileAnalysisComplete = function (file) {
        var context = this.getAnalysisContext(file);
        if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
            return null;
        }
        if (this.isAnalysisComplete()) {
            return new async.Future.value(AnalysisDoneReason.COMPLETE);
        }
        this.schedulePerformAnalysisOperation(context);
        var completer = this.contextAnalysisDoneCompleters.get(context);
        if (utils_1.op(utils_1.Op.EQUALS, completer, null)) {
            completer = new async.DartCompleter();
            this.contextAnalysisDoneCompleters.set(context, completer);
        }
        return completer.future;
    };
    AnalysisServer.prototype.performOperation = function () {
        /* TODO (AssertStatementImpl) : assert (performOperationPending); */ ;
        PerformanceTag.UNKNOWN.makeCurrent();
        this.performOperationPending = false;
        if (!this.running) {
            this.operationQueue.clear();
            return;
        }
        var operation = this.operationQueue.take();
        if (utils_1.op(utils_1.Op.EQUALS, operation, null)) {
            ServerPerformanceStatistics.idle.makeCurrent();
            return;
        }
        this.sendStatusNotification(operation);
        try {
            operation.perform(this);
        }
        catch (__error__) {
            {
                var stackTrace = new core.DartStackTrace.fromError(__error__);
                var exception = __error__;
                this.sendServerErrorNotification("Failed to perform operation: " + operation, exception, stackTrace, {
                    fatal: true
                });
                if (this.rethrowExceptions) {
                    throw new bare.createInstance(any, null, 'Unexpected exception during analysis', new bare.createInstance(any, null, exception, stackTrace));
                }
                this.shutdown();
            }
        }
        finally {
            if (this._test_onOperationPerformedCompleter != null) {
                this._test_onOperationPerformedCompleter.complete(operation);
                this._test_onOperationPerformedCompleter = null;
            }
            if (!this.operationQueue.isEmpty) {
                ServerPerformanceStatistics.intertask.makeCurrent();
                this._schedulePerformOperation();
            }
            else {
                if (this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES)) {
                    sendAnalysisNotificationAnalyzedFiles(this);
                }
                this.sendStatusNotification(null);
                this._scheduleAnalysisImplementedNotification();
                if (this._onAnalysisCompleteCompleter != null) {
                    this._onAnalysisCompleteCompleter.complete();
                    this._onAnalysisCompleteCompleter = null;
                }
                ServerPerformanceStatistics.idle.makeCurrent();
            }
        }
    };
    AnalysisServer.prototype.reanalyze = function (roots) {
        if (roots == null) {
            this.operationQueue.clear();
        }
        else {
            for (var _i = 0, _a = this._getContexts(roots); _i < _a.length; _i++) {
                var context = _a[_i];
                this.operationQueue.contextRemoved(context);
            }
        }
        this.contextManager.refresh(roots);
    };
    AnalysisServer.prototype.scheduleCacheConsistencyValidation = function (context) {
        var _this = this;
        if (_common_1.is(context, any)) {
            var validator_1 = context.cacheConsistencyValidator;
            var sources_1 = validator_1.getSourcesToComputeModificationTimes();
            new async.Future(function () { return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
                var modificationTimes, cacheInconsistencyFixed, __error__2, stackTrace, exception;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.resourceProvider.getModificationTimes(sources_1)];
                        case 1:
                            modificationTimes = _a.sent();
                            cacheInconsistencyFixed = validator_1.sourceModificationTimesComputed(sources_1, modificationTimes);
                            if (cacheInconsistencyFixed) {
                                this.scheduleOperation(new bare.createInstance(any, null, context, false));
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            __error__2 = _a.sent();
                            {
                                stackTrace = new core.DartStackTrace.fromError(__error__2);
                                exception = __error__2;
                                this.sendServerErrorNotification('Failed to check cache consistency', exception, stackTrace);
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); })()); });
        }
    };
    AnalysisServer.prototype.scheduleOperation = function (operation) {
        this.addOperation(operation);
        this._schedulePerformOperation();
    };
    AnalysisServer.prototype.schedulePerformAnalysisOperation = function (context) {
        this._onAnalysisStartedController.add(true);
        this.scheduleOperation(new bare.createInstance(any, null, context, false));
    };
    AnalysisServer.prototype.sendContextAnalysisDoneNotifications = function (context, reason) {
        var completer = this.contextAnalysisDoneCompleters.remove(context);
        if (completer != null) {
            completer.complete(reason);
        }
    };
    AnalysisServer.prototype.sendNotification = function (notification) {
        this.channel.sendNotification(notification);
    };
    AnalysisServer.prototype.sendResponse = function (response) {
        this.channel.sendResponse(response);
    };
    AnalysisServer.prototype.sendServerErrorNotification = function (message, exception, stackTrace, _namedArguments) {
        var fatal = Object.assign({
            "fatal": false
        }, _namedArguments).fatal;
        var buffer = new core.DartStringBuffer();
        if (exception != null) {
            buffer.write(exception);
        }
        else {
            buffer.write('null exception');
        }
        if (stackTrace != null) {
            buffer.writeln();
            buffer.write(stackTrace);
        }
        else if (_common_1.isNot(exception, any)) {
            try {
                throw 'ignored';
            }
            catch (__error__) {
                {
                    var stackTrace_1 = new core.DartStackTrace.fromError(__error__);
                    var ignored = __error__;
                    buffer.writeln();
                    buffer.write(stackTrace_1);
                }
            }
        }
        this.channel.sendNotification(new bare.createInstance(any, null, fatal, message, buffer.toString()).toNotification());
    };
    AnalysisServer.prototype.sendStatusNotification = function (operation) {
        if (!this.serverServices.contains(ServerService.STATUS)) {
            return;
        }
        var isAnalyzing = operation != null;
        if (this.statusAnalyzing == isAnalyzing) {
            return;
        }
        this.statusAnalyzing = isAnalyzing;
        var analysis = new bare.createInstance(any, null, isAnalyzing);
        this.channel.sendNotification(new bare.createInstance(any, null, {
            analysis: analysis
        }).toNotification());
    };
    AnalysisServer.prototype.sendStatusNotificationNew = function (status) {
        if (status.isAnalyzing) {
            this._onAnalysisStartedController.add(true);
        }
        if (this._onAnalysisCompleteCompleter != null && !status.isAnalyzing) {
            this._onAnalysisCompleteCompleter.complete();
            this._onAnalysisCompleteCompleter = null;
        }
        if (!status.isAnalyzing) {
            if (this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES)) {
                sendAnalysisNotificationAnalyzedFiles(this);
            }
        }
        if (!this.serverServices.contains(ServerService.STATUS)) {
            return;
        }
        if (this.statusAnalyzing == status.isAnalyzing) {
            return;
        }
        this.statusAnalyzing = status.isAnalyzing;
        var analysis = new bare.createInstance(any, null, status.isAnalyzing);
        this.channel.sendNotification(new bare.createInstance(any, null, {
            analysis: analysis
        }).toNotification());
    };
    AnalysisServer.prototype.setAnalysisRoots = function (requestId, includedPaths, excludedPaths, packageRoots) {
        if (this.notificationManager != null) {
            this.notificationManager.setAnalysisRoots(includedPaths, excludedPaths);
        }
        try {
            this.contextManager.setRoots(includedPaths, excludedPaths, packageRoots);
        }
        catch (__error__) {
            if (_common_1.is(__error__, core.UnimplementedError)) {
                var e = __error__;
                throw new bare.createInstance(any, null, new bare.createInstance(any, null, requestId, e.message));
            }
        }
    };
    AnalysisServer.prototype.setAnalysisSubscriptions = function (subscriptions) {
        var _this = this;
        if (this.notificationManager != null) {
            this.notificationManager.setSubscriptions(subscriptions);
        }
        if (this.options.enableNewAnalysisDriver) {
            this.analysisServices = subscriptions;
            var allNewFiles = subscriptions.values.expand(function (files) {
                return files;
            }).toSet();
            for (var _i = 0, allNewFiles_1 = allNewFiles; _i < allNewFiles_1.length; _i++) {
                var file = allNewFiles_1[_i];
                if (AnalysisEngine.isDartFileName(file)) {
                    this.getAnalysisResult(file);
                }
            }
            return;
        }
        subscriptions.forEach(function (service, newFiles) {
            var oldFiles = _this.analysisServices.get(service);
            var todoFiles = oldFiles != null ? newFiles.difference(oldFiles) : newFiles;
            for (var _i = 0, todoFiles_1 = todoFiles; _i < todoFiles_1.length; _i++) {
                var file = todoFiles_1[_i];
                if (_this.contextManager.isIgnored(file)) {
                    continue;
                }
                var contextSource = _this.getContextSourcePair(file);
                var context = contextSource.context;
                if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
                    continue;
                }
                var source = contextSource.source;
                if (AnalysisEngine.isDartFileName(file)) {
                    context.ensureResolvedDartUnits(source);
                }
                switch (service) {
                    case AnalysisService.NAVIGATION:
                        sendAnalysisNotificationNavigation(_this, context, source);
                        continue;
                    case AnalysisService.OCCURRENCES:
                        sendAnalysisNotificationOccurrences(_this, context, source);
                        continue;
                }
                if (AnalysisEngine.isDartFileName(file)) {
                    var dartUnit = _this._getResolvedCompilationUnitToResendNotification(context, source);
                    if (dartUnit != null) {
                        switch (service) {
                            case AnalysisService.HIGHLIGHTS:
                                sendAnalysisNotificationHighlights(_this, file, dartUnit);
                                break;
                            case AnalysisService.OUTLINE:
                                var context_1 = resolutionMap.elementDeclaredByCompilationUnit(dartUnit).context;
                                var lineInfo = context_1.getLineInfo(source);
                                var kind = context_1.getKindOf(source);
                                sendAnalysisNotificationOutline(_this, file, lineInfo, kind, dartUnit);
                                break;
                            case AnalysisService.OVERRIDES:
                                sendAnalysisNotificationOverrides(_this, file, dartUnit);
                                break;
                        }
                    }
                }
            }
        });
        this.analysisServices = subscriptions;
        if (this.analysisServices.containsKey(AnalysisService.IMPLEMENTED) && this.isAnalysisComplete()) {
            this._scheduleAnalysisImplementedNotification();
        }
    };
    AnalysisServer.prototype.setGeneralAnalysisSubscriptions = function (subscriptions) {
        var newServices = subscriptions.toSet();
        if (newServices.contains(GeneralAnalysisService.ANALYZED_FILES) && !this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES) && this.isAnalysisComplete()) {
            sendAnalysisNotificationAnalyzedFiles(this);
        }
        else if (!newServices.contains(GeneralAnalysisService.ANALYZED_FILES) && this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES)) {
            this.prevAnalyzedFiles = null;
        }
        this.generalAnalysisServices = newServices;
    };
    AnalysisServer.prototype.setPriorityFiles = function (requestId, files) {
        var _this = this;
        if (this.options.enableNewAnalysisDriver) {
            this.priorityFiles.clear();
            this.priorityFiles.addAll(files);
            this.driverMap.values.forEach(function (driver) {
                driver.priorityFiles = files;
            });
            return;
        }
        var sourceMap = new core.DartHashMap();
        var unanalyzed = new core.DartList();
        var firstSource = null;
        files.forEach(function (file) {
            if (_this.contextManager.isIgnored(file)) {
                unanalyzed.add(file);
                return;
            }
            var contextSource = _this.getContextSourcePair(file);
            var preferredContext = contextSource.context;
            var source = contextSource.source;
            if (utils_1.op(utils_1.Op.EQUALS, preferredContext, null)) {
                var resource = _this.resourceProvider.getResource(file);
                if (_common_1.is(resource, any) && resource.exists) {
                    for (var _i = 0, _a = _this.analysisContexts; _i < _a.length; _i++) {
                        var context = _a[_i];
                        var uri = context.sourceFactory.restoreUri(source);
                        if (uri.scheme != 'file') {
                            preferredContext = context;
                            source = ContextManagerImpl.createSourceInContext(context, resource);
                            break;
                        }
                    }
                }
            }
            var contextFound = false;
            if (preferredContext != null) {
                sourceMap.putIfAbsent(preferredContext, function () {
                    return new core.DartList.literal();
                }).add(source);
                contextFound = true;
            }
            for (var _b = 0, _c = _this.analysisContexts; _b < _c.length; _b++) {
                var context = _c[_b];
                if (context != preferredContext && context.getKindOf(source) != SourceKind.UNKNOWN) {
                    sourceMap.putIfAbsent(context, function () {
                        return new core.DartList.literal();
                    }).add(source);
                    contextFound = true;
                }
            }
            if (utils_1.op(utils_1.Op.EQUALS, firstSource, null)) {
                firstSource = source;
            }
            if (!contextFound) {
                unanalyzed.add(file);
            }
        });
        if (unanalyzed.isNotEmpty) {
            var buffer = new core.DartStringBuffer();
            buffer.writeAll(unanalyzed, ', ');
            throw new bare.createInstance(any, null, new bare.createInstance(any, null, requestId, buffer.toString()));
        }
        sourceMap.forEach(function (context, sourceList) {
            context.analysisPriorityOrder = sourceList;
            _this.schedulePerformAnalysisOperation(context);
        });
        this.operationQueue.reschedule();
        this._onPriorityChangeController.add(new PriorityChangeEvent(firstSource));
    };
    AnalysisServer.prototype.shouldSendErrorsNotificationFor = function (file) {
        return this.contextManager.isInAnalysisRoot(file);
    };
    AnalysisServer.prototype.shutdown = function () {
        var _this = this;
        this.running = false;
        if (this.index != null) {
            this.index.stop();
        }
        new async.Future(function () {
            _this.instrumentationService.shutdown();
            _this.channel.close();
        });
    };
    AnalysisServer.prototype.test_flushAstStructures = function (file) {
        if (AnalysisEngine.isDartFileName(file)) {
            var contextSource = this.getContextSourcePair(file);
            var context = contextSource.context;
            var source = contextSource.source;
            context.test_flushAstStructures(source);
        }
    };
    AnalysisServer.prototype.test_performAllAnalysisOperations = function () {
        while (true) {
            var operation = this.operationQueue.takeIf(function (operation) {
                return _common_1.is(operation, any);
            });
            if (utils_1.op(utils_1.Op.EQUALS, operation, null)) {
                break;
            }
            operation.perform(this);
        }
    };
    AnalysisServer.prototype.updateContent = function (id, changes) {
        var _this = this;
        if (this.options.enableNewAnalysisDriver) {
            changes.forEach(function (file, change) {
                var oldContents = utils_1.op(utils_1.Op.INDEX, _this.fileContentOverlay, file);
                var newContents;
                if (_common_1.is(change, any)) {
                    newContents = change.content;
                }
                else if (_common_1.is(change, any)) {
                    if (oldContents == null) {
                        throw new bare.createInstance(any, null, new bare.createInstance(any, null, id, {
                            error: new bare.createInstance(any, null, RequestErrorCode.INVALID_OVERLAY_CHANGE, 'Invalid overlay change')
                        }));
                    }
                    try {
                        newContents = SourceEdit.applySequence(oldContents, change.edits);
                    }
                    catch (__error__) {
                        if (_common_1.is(__error__, core.RangeError)) {
                            throw new bare.createInstance(any, null, new bare.createInstance(any, null, id, {
                                error: new bare.createInstance(any, null, RequestErrorCode.INVALID_OVERLAY_CHANGE, 'Invalid overlay change')
                            }));
                        }
                    }
                }
                else if (_common_1.is(change, any)) {
                    newContents = null;
                }
                else {
                    throw new bare.createInstance(any, null, 'Illegal change type');
                }
                utils_1.op(utils_1.Op.INDEX_ASSIGN, _this.fileContentOverlay, file, newContents);
                _this.driverMap.values.forEach(function (driver) {
                    driver.changeFile(file);
                });
                _this._onFileChangedController.add(file);
                (function (_3_) { return (!!_3_) ? _3_.addFile(file) : null; })(_this.contextManager.getDriverFor(file));
            });
            return;
        }
        changes.forEach(function (file, change) {
            var contextSource = _this.getContextSourcePair(file);
            var source = contextSource.source;
            _this.operationQueue.sourceAboutToChange(source);
            var oldContents = _this.overlayState.getContents(source);
            var newContents;
            if (_common_1.is(change, any)) {
                newContents = change.content;
            }
            else if (_common_1.is(change, any)) {
                if (oldContents == null) {
                    throw new bare.createInstance(any, null, new bare.createInstance(any, null, id, {
                        error: new bare.createInstance(any, null, RequestErrorCode.INVALID_OVERLAY_CHANGE, 'Invalid overlay change')
                    }));
                }
                try {
                    newContents = SourceEdit.applySequence(oldContents, change.edits);
                }
                catch (__error__) {
                    if (_common_1.is(__error__, core.RangeError)) {
                        throw new bare.createInstance(any, null, new bare.createInstance(any, null, id, {
                            error: new bare.createInstance(any, null, RequestErrorCode.INVALID_OVERLAY_CHANGE, 'Invalid overlay change')
                        }));
                    }
                }
            }
            else if (_common_1.is(change, any)) {
                newContents = null;
            }
            else {
                throw new bare.createInstance(any, null, 'Illegal change type');
            }
            var containingContext = _this.getContainingContext(file);
            var wasMissing = utils_1.op(utils_1.Op.EQUALS, (function (_4_) { return (!!_4_) ? _4_.getModificationStamp(source) : null; })(containingContext), -1);
            _this.overlayState.setContents(source, newContents);
            if (newContents == null && !source.exists()) {
                for (var _i = 0, _a = _this.analysisContexts; _i < _a.length; _i++) {
                    var context = _a[_i];
                    var sources = context.getSourcesWithFullName(file);
                    var changeSet = new bare.createInstance(any, null);
                    sources.forEach(changeSet.removedSource);
                    context.applyChanges(changeSet);
                    _this.schedulePerformAnalysisOperation(context);
                }
                return;
            }
            var anyContextUpdated = false;
            var _loop_1 = function (context) {
                var sources = context.getSourcesWithFullName(file);
                sources.forEach(function (source) {
                    anyContextUpdated = true;
                    if (utils_1.op(utils_1.Op.EQUALS, context, containingContext) && wasMissing) {
                        context.applyChanges((function (_) {
                            {
                                addedSource(source);
                                return _;
                            }
                        })(new bare.createInstance(any, null)));
                        _this.schedulePerformAnalysisOperation(context);
                    }
                    if (context.handleContentsChanged(source, oldContents, newContents, true)) {
                        _this.schedulePerformAnalysisOperation(context);
                    }
                    else {
                        if (AnalysisEngine.isDartFileName(file)) {
                            var dartUnits = context.ensureResolvedDartUnits(source);
                            if (dartUnits != null) {
                                var errorInfo = context.getErrors(source);
                                for (var _i = 0, dartUnits_1 = dartUnits; _i < dartUnits_1.length; _i++) {
                                    var dartUnit = dartUnits_1[_i];
                                    scheduleNotificationOperations(_this, source, file, errorInfo.lineInfo, context, null, dartUnit, errorInfo.errors);
                                    scheduleIndexOperation(_this, file, dartUnit);
                                }
                            }
                            else {
                                _this.schedulePerformAnalysisOperation(context);
                            }
                        }
                    }
                });
            };
            for (var _b = 0, _c = _this.analysisContexts; _b < _c.length; _b++) {
                var context = _c[_b];
                _loop_1(context);
            }
            if (!anyContextUpdated) {
                var context = contextSource.context;
                if (context != null && source != null) {
                    var changeSet = new bare.createInstance(any, null);
                    changeSet.addedSource(source);
                    context.applyChanges(changeSet);
                    _this.schedulePerformAnalysisOperation(context);
                }
            }
        });
    };
    AnalysisServer.prototype.updateOptions = function (optionUpdaters) {
        var _this = this;
        if (this.options.enableNewAnalysisDriver) {
            return;
        }
        var _loop_2 = function (context) {
            var options = new bare.createInstance(any, null, context.analysisOptions);
            optionUpdaters.forEach(function (optionUpdater) {
                optionUpdater(options);
            });
            context.analysisOptions = options;
        };
        for (var _i = 0, _a = this.analysisContexts; _i < _a.length; _i++) {
            var context = _a[_i];
            _loop_2(context);
        }
        optionUpdaters.forEach(function (optionUpdater) {
            optionUpdater(_this.defaultContextOptions);
        });
    };
    AnalysisServer.prototype._computingPackageMap = function (computing) {
        if (this.serverServices.contains(ServerService.STATUS)) {
            var pubStatus = new bare.createInstance(any, null, computing);
            var params = new bare.createInstance(any, null, {
                pub: pubStatus
            });
            this.sendNotification(params.toNotification());
        }
    };
    AnalysisServer.prototype._createByteStore = function () {
        var M = 1024 * 1024;
        var G = 1024 * 1024 * 1024;
        if (_common_1.is(this.resourceProvider, any)) {
            var stateLocation = this.resourceProvider.getStateLocation('.analysis-driver');
            if (stateLocation != null) {
                return new bare.createInstance(any, null, new bare.createInstance(any, null, stateLocation.path, G), 64 * M);
            }
        }
        return new bare.createInstance(any, null, new bare.createInstance(any, null), 64 * M);
    };
    AnalysisServer.prototype._getByteStorePath = function () {
        if (_common_1.is(this.resourceProvider, any)) {
            var stateLocation = this.resourceProvider.getStateLocation('.analysis-driver');
            if (stateLocation != null) {
                return stateLocation.path;
            }
        }
        return null;
    };
    AnalysisServer.prototype._getContexts = function (resources) {
        var _this = this;
        var contexts = new core.DartHashSet();
        resources.forEach(function (resource) {
            if (_common_1.is(resource, any)) {
                contexts.addAll(_this.contextManager.contextsInAnalysisRoot(resource));
            }
        });
        return contexts;
    };
    AnalysisServer.prototype._getResolvedCompilationUnitToResendNotification = function (context, source) {
        var librarySources = context.getLibrariesContaining(source);
        if (librarySources.isEmpty) {
            return null;
        }
        var librarySource = librarySources[0];
        if (utils_1.op(utils_1.Op.EQUALS, context.getResult(librarySource, LIBRARY_ELEMENT6), null)) {
            return null;
        }
        return runWithActiveContext(context, function () {
            return context.resolveCompilationUnit2(source, librarySource);
        });
    };
    AnalysisServer.prototype._hasAnalysisServiceSubscription = function (service, file) {
        return ((function (_5_) { return (!!_5_) ? _5_.contains(file) : null; })(this.analysisServices.get(service)) || false);
    };
    AnalysisServer.prototype._scheduleAnalysisImplementedNotification = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var files;
            return __generator(this, function (_a) {
                files = this.analysisServices.get(AnalysisService.IMPLEMENTED);
                if (files != null) {
                    scheduleImplementedNotification(this, files);
                }
                return [2 /*return*/];
            });
        }); })());
    };
    AnalysisServer.prototype._schedulePerformOperation = function () {
        if (this.performOperationPending) {
            return;
        }
        var now = new core.DartDateTime.now().millisecondsSinceEpoch;
        if (now > this._nextPerformOperationDelayTime && AnalysisServer_1.performOperationDelayFrequency > 0) {
            this._nextPerformOperationDelayTime = now + AnalysisServer_1.performOperationDelayFrequency;
            new async.Future.delayed(new core.DartDuration({
                milliseconds: 1
            }), this.performOperation.bind(this));
        }
        else {
            new async.Future(this.performOperation.bind(this));
        }
        this.performOperationPending = true;
    };
    AnalysisServer.prototype._setupIndexInvalidation = function () {
        var _this = this;
        if (utils_1.op(utils_1.Op.EQUALS, this.index, null)) {
            return;
        }
        this.onContextsChanged.listen(function (event) {
            for (var _i = 0, _a = event.added; _i < _a.length; _i++) {
                var context = _a[_i];
                context.onResultChanged(RESOLVED_UNIT3).listen(function (event) {
                    if (event.wasComputed) {
                        var value = event.value;
                        if (_common_1.is(value, any)) {
                            _this.index.indexDeclarations(value);
                        }
                    }
                });
                context.onResultChanged(RESOLVED_UNIT).listen(function (event) {
                    if (event.wasInvalidated) {
                        var target = event.target;
                        _this.index.removeUnit(event.context, target.library, target.unit);
                    }
                });
            }
            for (var _b = 0, _c = event.removed; _b < _c.length; _b++) {
                var context = _c[_b];
                _this.index.removeContext(context);
            }
        });
    };
    var AnalysisServer_1;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisServer.prototype, "AnalysisServer", null);
    AnalysisServer = AnalysisServer_1 = __decorate([
        utils_1.DartClass
    ], AnalysisServer);
    return AnalysisServer;
}());
exports.AnalysisServer = AnalysisServer;
var AnalysisServerOptions = /** @class */ (function () {
    function AnalysisServerOptions() {
    }
    AnalysisServerOptions.prototype.AnalysisServerOptions = function () {
        this.enableIncrementalResolutionApi = false;
        this.enableIncrementalResolutionValidation = false;
        this.enableNewAnalysisDriver = false;
        this.useAnalysisHighlight2 = false;
        this.fileReadMode = 'as-is';
        this.enableVerboseFlutterCompletions = false;
    };
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisServerOptions.prototype, "AnalysisServerOptions", null);
    AnalysisServerOptions = __decorate([
        utils_1.DartClass
    ], AnalysisServerOptions);
    return AnalysisServerOptions;
}());
exports.AnalysisServerOptions = AnalysisServerOptions;
var ContextSourcePair = /** @class */ (function () {
    function ContextSourcePair(context, source) {
    }
    ContextSourcePair.prototype.ContextSourcePair = function (context, source) {
        this.context = context;
        this.source = source;
    };
    __decorate([
        utils_1.defaultConstructor
    ], ContextSourcePair.prototype, "ContextSourcePair", null);
    ContextSourcePair = __decorate([
        utils_1.DartClass
    ], ContextSourcePair);
    return ContextSourcePair;
}());
exports.ContextSourcePair = ContextSourcePair;
var PriorityChangeEvent = /** @class */ (function () {
    function PriorityChangeEvent(firstSource) {
    }
    PriorityChangeEvent.prototype.PriorityChangeEvent = function (firstSource) {
        this.firstSource = firstSource;
    };
    __decorate([
        utils_1.defaultConstructor
    ], PriorityChangeEvent.prototype, "PriorityChangeEvent", null);
    PriorityChangeEvent = __decorate([
        utils_1.DartClass
    ], PriorityChangeEvent);
    return PriorityChangeEvent;
}());
exports.PriorityChangeEvent = PriorityChangeEvent;
var ServerContextManagerCallbacks = /** @class */ (function (_super) {
    __extends(ServerContextManagerCallbacks, _super);
    function ServerContextManagerCallbacks(analysisServer, resourceProvider) {
        var _this = this;
        return _this;
    }
    ServerContextManagerCallbacks.prototype.ServerContextManagerCallbacks = function (analysisServer, resourceProvider) {
        this.analysisServer = analysisServer;
        this.resourceProvider = resourceProvider;
    };
    ServerContextManagerCallbacks.prototype.addAnalysisDriver = function (folder, contextRoot, options) {
        var _this = this;
        var builder = this.createContextBuilder(folder, options);
        var analysisDriver = builder.buildDriver(contextRoot);
        analysisDriver.results.listen(function (result) {
            var notificationManager = _this.analysisServer.notificationManager;
            var path = result.path;
            if (_this.analysisServer.shouldSendErrorsNotificationFor(path)) {
                if (notificationManager != null) {
                    notificationManager.recordAnalysisErrors(NotificationManager.serverId, path, null /*topLevl*/.doAnalysisError_listFromEngine(result.driver.analysisOptions, result.lineInfo, result.errors));
                }
                else {
                    new_sendErrorNotification(_this.analysisServer, result);
                }
            }
            var unit = result.unit;
            if (unit != null) {
                if (notificationManager != null) {
                    if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.HIGHLIGHTS, path)) {
                        _this._runDelayed(function () {
                            notificationManager.recordHighlightRegions(NotificationManager.serverId, path, _this._computeHighlightRegions(unit));
                        });
                    }
                    if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.NAVIGATION, path)) {
                        _this._runDelayed(function () {
                            notificationManager.recordNavigationParams(NotificationManager.serverId, path, _this._computeNavigationParams(path, unit));
                        });
                    }
                    if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OCCURRENCES, path)) {
                        _this._runDelayed(function () {
                            notificationManager.recordOccurrences(NotificationManager.serverId, path, _this._computeOccurrences(unit));
                        });
                    }
                }
                else {
                    if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.HIGHLIGHTS, path)) {
                        _this._runDelayed(function () {
                            sendAnalysisNotificationHighlights(_this.analysisServer, path, unit);
                        });
                    }
                    if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.NAVIGATION, path)) {
                        _this._runDelayed(function () {
                            new_sendDartNotificationNavigation(_this.analysisServer, result);
                        });
                    }
                    if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OCCURRENCES, path)) {
                        _this._runDelayed(function () {
                            new_sendDartNotificationOccurrences(_this.analysisServer, result);
                        });
                    }
                }
                if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OUTLINE, path)) {
                    _this._runDelayed(function () {
                        var sourceKind = unit.directives.any(function (d) {
                            return _common_1.is(d, any);
                        }) ? SourceKind.PART : SourceKind.LIBRARY;
                        sendAnalysisNotificationOutline(_this.analysisServer, path, result.lineInfo, sourceKind, unit);
                    });
                }
                if (_this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OVERRIDES, path)) {
                    _this._runDelayed(function () {
                        sendAnalysisNotificationOverrides(_this.analysisServer, path, unit);
                    });
                }
            }
        });
        analysisDriver.exceptions.listen(function (result) {
            var message = "Analysis failed: " + result.path;
            if (result.contextKey != null) {
                message += " context: " + result.contextKey;
            }
            AnalysisEngine.instance.logger.logError(message, result.exception);
        });
        this.analysisServer.driverMap.set(folder, analysisDriver);
        return analysisDriver;
    };
    ServerContextManagerCallbacks.prototype.addContext = function (folder, options) {
        var builder = this.createContextBuilder(folder, options);
        var context = builder.buildContext(folder.path);
        this.analysisServer.folderMap.set(folder, context);
        this.analysisServer._onContextsChangedController.add(new bare.createInstance(any, null, {
            added: new core.DartList.literal(context)
        }));
        this.analysisServer.schedulePerformAnalysisOperation(context);
        return context;
    };
    ServerContextManagerCallbacks.prototype.applyChangesToContext = function (contextFolder, changeSet) {
        var _this = this;
        if (this.analysisServer.options.enableNewAnalysisDriver) {
            var analysisDriver_1 = this.analysisServer.driverMap.get(contextFolder);
            if (analysisDriver_1 != null) {
                changeSet.addedSources.forEach(function (source) {
                    analysisDriver_1.addFile(source.fullName);
                    _this.analysisServer._onFileAddedController.add(source.fullName);
                });
                changeSet.changedSources.forEach(function (source) {
                    analysisDriver_1.changeFile(source.fullName);
                    _this.analysisServer._onFileChangedController.add(source.fullName);
                });
                changeSet.removedSources.forEach(function (source) {
                    analysisDriver_1.removeFile(source.fullName);
                });
            }
        }
        else {
            var context = this.analysisServer.folderMap.get(contextFolder);
            if (context != null) {
                context.applyChanges(changeSet);
                this.analysisServer.schedulePerformAnalysisOperation(context);
                var flushedFiles = new core.DartList();
                for (var _i = 0, _a = changeSet.removedSources; _i < _a.length; _i++) {
                    var source = _a[_i];
                    flushedFiles.add(source.fullName);
                }
                sendAnalysisNotificationFlushResults(this.analysisServer, flushedFiles);
            }
        }
    };
    ServerContextManagerCallbacks.prototype.applyFileRemoved = function (driver, file) {
        driver.removeFile(file);
        sendAnalysisNotificationFlushResults(this.analysisServer, new core.DartList.literal(file));
    };
    ServerContextManagerCallbacks.prototype.broadcastWatchEvent = function (event) {
        this.analysisServer.pluginManager.broadcastWatchEvent(event);
    };
    ServerContextManagerCallbacks.prototype.computingPackageMap = function (computing) {
        return this.analysisServer._computingPackageMap(computing);
    };
    ServerContextManagerCallbacks.prototype.createContextBuilder = function (folder, options) {
        var defaultPackageFilePath = null;
        var defaultPackagesDirectoryPath = null;
        var path = utils_1.op(utils_1.Op.INDEX, this.analysisServer.contextManager.normalizedPackageRoots, folder.path);
        if (path != null) {
            var resource = this.resourceProvider.getResource(path);
            if (resource.exists) {
                if (_common_1.is(resource, any)) {
                    defaultPackageFilePath = path;
                }
                else {
                    defaultPackagesDirectoryPath = path;
                }
            }
        }
        var builderOptions = new bare.createInstance(any, null);
        builderOptions.defaultOptions = options;
        builderOptions.defaultPackageFilePath = defaultPackageFilePath;
        builderOptions.defaultPackagesDirectoryPath = defaultPackagesDirectoryPath;
        var builder = new bare.createInstance(any, null, this.resourceProvider, this.analysisServer.sdkManager, this.analysisServer.overlayState, {
            options: builderOptions
        });
        builder.fileResolverProvider = this.analysisServer.fileResolverProvider;
        builder.packageResolverProvider = this.analysisServer.packageResolverProvider;
        builder.analysisDriverScheduler = this.analysisServer.analysisDriverScheduler;
        builder.performanceLog = this.analysisServer._analysisPerformanceLogger;
        builder.byteStore = this.analysisServer.byteStore;
        builder.fileContentOverlay = this.analysisServer.fileContentOverlay;
        return builder;
    };
    ServerContextManagerCallbacks.prototype.moveContext = function (from, to) {
    };
    ServerContextManagerCallbacks.prototype.removeContext = function (folder, flushedFiles) {
        if (this.analysisServer.options.enableNewAnalysisDriver) {
            sendAnalysisNotificationFlushResults(this.analysisServer, flushedFiles);
            var driver = this.analysisServer.driverMap.remove(folder);
            driver.dispose();
        }
        else {
            var context = this.analysisServer.folderMap.remove(folder);
            sendAnalysisNotificationFlushResults(this.analysisServer, flushedFiles);
            this.analysisServer.operationQueue.contextRemoved(context);
            this.analysisServer._onContextsChangedController.add(new bare.createInstance(any, null, {
                removed: new core.DartList.literal(context)
            }));
            this.analysisServer.sendContextAnalysisDoneNotifications(context, AnalysisDoneReason.CONTEXT_REMOVED);
            context.dispose();
        }
    };
    ServerContextManagerCallbacks.prototype.updateContextPackageUriResolver = function (context) {
        this.analysisServer._onContextsChangedController.add(new bare.createInstance(any, null, {
            changed: new core.DartList.literal(context)
        }));
        this.analysisServer.schedulePerformAnalysisOperation(context);
    };
    ServerContextManagerCallbacks.prototype._computeHighlightRegions = function (unit) {
        if (this.analysisServer.options.useAnalysisHighlight2) {
            return new bare.createInstance(any, null, unit).compute();
        }
        else {
            return new bare.createInstance(any, null, unit).compute();
        }
    };
    ServerContextManagerCallbacks.prototype._computeLibraryName = function (unit) {
        for (var _i = 0, _a = unit.directives; _i < _a.length; _i++) {
            var directive = _a[_i];
            if (_common_1.is(directive, any) && directive.name != null) {
                return directive.name.name;
            }
        }
        for (var _b = 0, _c = unit.directives; _b < _c.length; _b++) {
            var directive = _c[_b];
            if (_common_1.is(directive, any) && directive.libraryName != null) {
                return directive.libraryName.name;
            }
        }
        return null;
    };
    ServerContextManagerCallbacks.prototype._computeNavigationParams = function (path, unit) {
        var collector = new bare.createInstance(any, null);
        computeDartNavigation(collector, unit, null, null);
        collector.createRegions();
        return new bare.createInstance(any, null, path, collector.regions, collector.targets, collector.files);
    };
    ServerContextManagerCallbacks.prototype._computeOccurrences = function (unit) {
        var collector = new bare.createInstance(any, null);
        addDartOccurrences(collector, unit);
        return collector.allOccurrences;
    };
    ServerContextManagerCallbacks.prototype._computeOutlineParams = function (path, unit, lineInfo) {
        var sourceKind = unit.directives.any(function (d) {
            return _common_1.is(d, any);
        }) ? SourceKind.PART : SourceKind.LIBRARY;
        var fileKind = lib6.FileKind.LIBRARY;
        if (utils_1.op(utils_1.Op.EQUALS, sourceKind, SourceKind.LIBRARY)) {
            fileKind = lib6.FileKind.LIBRARY;
        }
        else if (utils_1.op(utils_1.Op.EQUALS, sourceKind, SourceKind.PART)) {
            fileKind = lib6.FileKind.PART;
        }
        var libraryName = this._computeLibraryName(unit);
        var computer = new bare.createInstance(any, null, path, lineInfo, unit);
        var outline = computer.compute();
        return new bare.createInstance(any, null, path, fileKind, outline, {
            libraryName: libraryName
        });
    };
    ServerContextManagerCallbacks.prototype._runDelayed = function (f) {
        new async.Future(f);
    };
    __decorate([
        utils_1.defaultConstructor
    ], ServerContextManagerCallbacks.prototype, "ServerContextManagerCallbacks", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "addAnalysisDriver", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "addContext", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "applyChangesToContext", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "applyFileRemoved", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "broadcastWatchEvent", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "computingPackageMap", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "createContextBuilder", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "moveContext", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "removeContext", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerContextManagerCallbacks.prototype, "updateContextPackageUriResolver", null);
    ServerContextManagerCallbacks = __decorate([
        utils_1.DartClass
    ], ServerContextManagerCallbacks);
    return ServerContextManagerCallbacks;
}(any));
exports.ServerContextManagerCallbacks = ServerContextManagerCallbacks;
var ServerPerformance = /** @class */ (function () {
    function ServerPerformance() {
    }
    ServerPerformance.prototype.logRequest = function (request) {
        ++this.requestCount;
        if (request.clientRequestTime != null) {
            var latency = new core.DartDateTime.now().millisecondsSinceEpoch - request.clientRequestTime;
            this.requestLatency += latency;
            this.maxLatency = math.max(this.maxLatency, latency);
            if (latency > 150) {
                ++this.slowRequestCount;
            }
        }
    };
    ServerPerformance.prototype.ServerPerformance = function () {
        this.startTime = new core.DartDateTime.now().millisecondsSinceEpoch;
        this.requestCount = 0;
        this.requestLatency = 0;
        this.maxLatency = 0;
        this.slowRequestCount = 0;
    };
    __decorate([
        utils_1.defaultConstructor
    ], ServerPerformance.prototype, "ServerPerformance", null);
    ServerPerformance = __decorate([
        utils_1.DartClass
    ], ServerPerformance);
    return ServerPerformance;
}());
exports.ServerPerformance = ServerPerformance;
var ServerPerformanceStatistics = /** @class */ (function () {
    function ServerPerformanceStatistics() {
    }
    Object.defineProperty(ServerPerformanceStatistics, "executionNotifications", {
        get: function () {
            if (this.__$executionNotifications === undefined) {
                this.__$executionNotifications = new bare.createInstance(any, null, 'executionNotifications');
            }
            return this.__$executionNotifications;
        },
        set: function (__$value) {
            this.__$executionNotifications = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "indexOperation", {
        get: function () {
            if (this.__$indexOperation === undefined) {
                this.__$indexOperation = new bare.createInstance(any, null, 'indexOperation');
            }
            return this.__$indexOperation;
        },
        set: function (__$value) {
            this.__$indexOperation = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "intertask", {
        get: function () {
            if (this.__$intertask === undefined) {
                this.__$intertask = new bare.createInstance(any, null, 'intertask');
            }
            return this.__$intertask;
        },
        set: function (__$value) {
            this.__$intertask = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "idle", {
        get: function () {
            if (this.__$idle === undefined) {
                this.__$idle = new bare.createInstance(any, null, 'idle');
            }
            return this.__$idle;
        },
        set: function (__$value) {
            this.__$idle = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "notices", {
        get: function () {
            if (this.__$notices === undefined) {
                this.__$notices = new bare.createInstance(any, null, 'notices');
            }
            return this.__$notices;
        },
        set: function (__$value) {
            this.__$notices = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "pub", {
        get: function () {
            if (this.__$pub === undefined) {
                this.__$pub = new bare.createInstance(any, null, 'pub');
            }
            return this.__$pub;
        },
        set: function (__$value) {
            this.__$pub = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "serverChannel", {
        get: function () {
            if (this.__$serverChannel === undefined) {
                this.__$serverChannel = new bare.createInstance(any, null, 'serverChannel');
            }
            return this.__$serverChannel;
        },
        set: function (__$value) {
            this.__$serverChannel = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "serverRequests", {
        get: function () {
            if (this.__$serverRequests === undefined) {
                this.__$serverRequests = new bare.createInstance(any, null, 'serverRequests');
            }
            return this.__$serverRequests;
        },
        set: function (__$value) {
            this.__$serverRequests = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPerformanceStatistics, "splitStore", {
        get: function () {
            if (this.__$splitStore === undefined) {
                this.__$splitStore = new bare.createInstance(any, null, 'splitStore');
            }
            return this.__$splitStore;
        },
        set: function (__$value) {
            this.__$splitStore = __$value;
        },
        enumerable: true,
        configurable: true
    });
    ServerPerformanceStatistics.prototype.ServerPerformanceStatistics = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], ServerPerformanceStatistics.prototype, "ServerPerformanceStatistics", null);
    ServerPerformanceStatistics = __decorate([
        utils_1.DartClass
    ], ServerPerformanceStatistics);
    return ServerPerformanceStatistics;
}());
exports.ServerPerformanceStatistics = ServerPerformanceStatistics;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=analysis_server.js.map
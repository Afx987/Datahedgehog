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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/plugin_manager.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var io = require("@dart2ts/dart/io");
var lib4 = require("@dart2ts/dart/uri");
var lib6 = require("@dart2ts.packages/watcher/lib/watcher");
var PluginInfo = /** @class */ (function () {
    function PluginInfo(notificationManager, instrumentationService) {
    }
    PluginInfo.prototype.PluginInfo = function (notificationManager, instrumentationService) {
        this.contextRoots = new core.DartHashSet();
        this.notificationManager = notificationManager;
        this.instrumentationService = instrumentationService;
    };
    Object.defineProperty(PluginInfo.prototype, "data", {
        get: function () {
            return new bare.createInstance(any, null, this.pluginId, (function (t) { return (!!t) ? t.name : null; })(this.currentSession), (function (t) { return (!!t) ? t.version : null; })(this.currentSession));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginInfo.prototype, "pluginId", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    PluginInfo.prototype.addContextRoot = function (contextRoot) {
        if (this.contextRoots.add(contextRoot)) {
            this._updatePluginRoots();
        }
    };
    PluginInfo.prototype.isAnalyzing = function (filePath) {
        for (var _i = 0, _a = this.contextRoots; _i < _a.length; _i++) {
            var contextRoot = _a[_i];
            if (contextRoot.containsFile(filePath)) {
                return true;
            }
        }
        return false;
    };
    PluginInfo.prototype.removeContextRoot = function (contextRoot) {
        if (this.contextRoots.remove(contextRoot)) {
            this._updatePluginRoots();
        }
    };
    PluginInfo.prototype.sendRequest = function (params) {
        (function (_26_) { return (!!_26_) ? _26_.sendRequest(params) : null; })(this.currentSession);
    };
    PluginInfo.prototype.start = function (byteStorePath, sdkPath) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var isRunning;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.currentSession != null) {
                            throw new core.StateError('Cannot start a plugin that is already running.');
                        }
                        this.currentSession = new PluginSession(this);
                        return [4 /*yield*/, this.currentSession.start(byteStorePath, sdkPath)];
                    case 1:
                        isRunning = _a.sent();
                        if (!isRunning) {
                            this.currentSession = null;
                        }
                        return [2 /*return*/, this.currentSession];
                }
            });
        }); })());
    };
    PluginInfo.prototype.stop = function () {
        if (utils_1.op(utils_1.Op.EQUALS, this.currentSession, null)) {
            throw new core.StateError('Cannot stop a plugin that is not running.');
        }
        var doneFuture = this.currentSession.stop();
        this.currentSession = null;
        return doneFuture;
    };
    PluginInfo.prototype._createChannel = function () { throw 'abstract'; };
    PluginInfo.prototype._updatePluginRoots = function () {
        if (this.currentSession != null) {
            var params = new bare.createInstance(any, null, this.contextRoots.map(function (contextRoot) {
                return new bare.createInstance(any, null, contextRoot.root, contextRoot.exclude);
            }).toList());
            this.currentSession.sendRequest(params);
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], PluginInfo.prototype, "PluginInfo", null);
    __decorate([
        utils_1.AbstractProperty
    ], PluginInfo.prototype, "pluginId", null);
    __decorate([
        utils_1.Abstract
    ], PluginInfo.prototype, "_createChannel", null);
    PluginInfo = __decorate([
        utils_1.DartClass
    ], PluginInfo);
    return PluginInfo;
}());
exports.PluginInfo = PluginInfo;
var PluginManager = /** @class */ (function () {
    function PluginManager(resourceProvider, byteStorePath, sdkPath, notificationManager, instrumentationService) {
    }
    PluginManager_1 = PluginManager;
    Object.defineProperty(PluginManager, "pluginResponseTimes", {
        get: function () {
            if (this.__$pluginResponseTimes === undefined) {
                this.__$pluginResponseTimes = new core.DartMap.literal([]);
            }
            return this.__$pluginResponseTimes;
        },
        set: function (__$value) {
            this.__$pluginResponseTimes = __$value;
        },
        enumerable: true,
        configurable: true
    });
    PluginManager.prototype.PluginManager = function (resourceProvider, byteStorePath, sdkPath, notificationManager, instrumentationService) {
        this._pluginMap = new core.DartMap.literal([]);
        this._overlayState = new core.DartMap.literal([]);
        this.resourceProvider = resourceProvider;
        this.byteStorePath = byteStorePath;
        this.sdkPath = sdkPath;
        this.notificationManager = notificationManager;
        this.instrumentationService = instrumentationService;
        this._whitelistGlobs = new core.DartList.literal(new bare.createInstance(any, null, this.resourceProvider.pathContext.separator, '**/analyze_angular/tools/analysis_plugin'));
    };
    PluginManager.prototype.addPluginToContextRoot = function (contextRoot, path) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var plugin, isNew, pluginPaths, session;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._isWhitelisted(path)) {
                            return [2 /*return*/];
                        }
                        plugin = this._pluginMap.get(path);
                        isNew = utils_1.op(utils_1.Op.EQUALS, plugin, null);
                        if (!isNew) return [3 /*break*/, 2];
                        pluginPaths = this._pathsFor(path);
                        if (pluginPaths == null) {
                            return [2 /*return*/];
                        }
                        plugin = new DiscoveredPluginInfo(path, pluginPaths[0], pluginPaths[1], this.notificationManager, this.instrumentationService);
                        this._pluginMap.set(path, plugin);
                        if (!(pluginPaths[0] != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, plugin.start(this.byteStorePath, this.sdkPath)];
                    case 1:
                        session = _a.sent();
                        (function (_27_) { return (!!_27_) ? _27_.then(function (_) {
                            _this._pluginMap.remove(path);
                        }) : null; })((function (t) { return (!!t) ? t.onDone : null; })(session));
                        _a.label = 2;
                    case 2:
                        plugin.addContextRoot(contextRoot);
                        if (isNew) {
                            if (this._analysisSetSubscriptionsParams != null) {
                                plugin.sendRequest(this._analysisSetSubscriptionsParams);
                            }
                            if (this._overlayState.isNotEmpty) {
                                plugin.sendRequest(new bare.createInstance(any, null, this._overlayState));
                            }
                            if (this._analysisSetPriorityFilesParams != null) {
                                plugin.sendRequest(this._analysisSetPriorityFilesParams);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    PluginManager.prototype.broadcastRequest = function (params, _namedArguments) {
        var contextRoot = Object.assign({}, _namedArguments).contextRoot;
        var plugins = this.pluginsForContextRoot(contextRoot);
        var responseMap = new core.DartMap.literal([]);
        for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
            var plugin = plugins_1[_i];
            responseMap.set(plugin, (function (_28_) { return (!!_28_) ? _28_.sendRequest(params) : null; })(plugin.currentSession));
        }
        return responseMap;
    };
    PluginManager.prototype.broadcastWatchEvent = function (watchEvent) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var filePath, matches, event, responses, _i, _a, plugin, session, params;
            var _this = this;
            return __generator(this, function (_b) {
                filePath = watchEvent.path;
                matches = function (pattern) {
                    return new bare.createInstance(any, null, _this.resourceProvider.pathContext.separator, pattern).matches(filePath);
                };
                event = null;
                responses = new core.DartList.literal();
                for (_i = 0, _a = this._pluginMap.values; _i < _a.length; _i++) {
                    plugin = _a[_i];
                    session = plugin.currentSession;
                    if (session != null && plugin.isAnalyzing(filePath) && session.interestingFiles.any(matches)) {
                        event = (event) || (this._convertWatchEvent(watchEvent));
                        params = new bare.createInstance(any, null, new core.DartList.literal(event));
                        responses.add(session.sendRequest(params));
                    }
                }
                return [2 /*return*/, responses];
            });
        }); })());
    };
    PluginManager.prototype.pluginsForContextRoot = function (contextRoot) {
        if (utils_1.op(utils_1.Op.EQUALS, contextRoot, null)) {
            return this._pluginMap.values.toList();
        }
        var plugins = new core.DartList.literal();
        for (var _i = 0, _a = this._pluginMap.values; _i < _a.length; _i++) {
            var plugin = _a[_i];
            if (plugin.contextRoots.contains(contextRoot)) {
                plugins.add(plugin);
            }
        }
        return plugins;
    };
    PluginManager.prototype.removedContextRoot = function (contextRoot) {
        var plugins = this._pluginMap.values.toList();
        for (var _i = 0, plugins_2 = plugins; _i < plugins_2.length; _i++) {
            var plugin = plugins_2[_i];
            plugin.removeContextRoot(contextRoot);
            if (_common_1.is(plugin, DiscoveredPluginInfo) && plugin.contextRoots.isEmpty) {
                this._pluginMap.remove(plugin.path);
                plugin.stop();
            }
        }
    };
    PluginManager.prototype.setAnalysisSetPriorityFilesParams = function (params) {
        for (var _i = 0, _a = this._pluginMap.values; _i < _a.length; _i++) {
            var plugin = _a[_i];
            plugin.sendRequest(params);
        }
        this._analysisSetPriorityFilesParams = params;
    };
    PluginManager.prototype.setAnalysisSetSubscriptionsParams = function (params) {
        for (var _i = 0, _a = this._pluginMap.values; _i < _a.length; _i++) {
            var plugin = _a[_i];
            plugin.sendRequest(params);
        }
        this._analysisSetSubscriptionsParams = params;
    };
    PluginManager.prototype.setAnalysisUpdateContentParams = function (params) {
        for (var _i = 0, _a = this._pluginMap.values; _i < _a.length; _i++) {
            var plugin = _a[_i];
            plugin.sendRequest(params);
        }
        var files = params.files;
        for (var _b = 0, _c = files.keys; _b < _c.length; _b++) {
            var file = _c[_b];
            var overlay = files.get(file);
            if (_common_1.is(overlay, any)) {
                this._overlayState.remove(file);
            }
            else if (_common_1.is(overlay, any)) {
                this._overlayState.set(file, overlay);
            }
            else if (_common_1.is(overlay, any)) {
                var previousOverlay = this._overlayState.get(file);
                var newContent = SourceEdit.applySequence(previousOverlay.content, overlay.edits);
                this._overlayState.set(file, new bare.createInstance(any, null, newContent));
            }
            else {
                throw new core.ArgumentError("Invalid class of overlay: " + overlay.runtimeType);
            }
        }
    };
    PluginManager.prototype.stopAll = function () {
        return async.Future.wait(this._pluginMap.values.map(function (info) {
            return info.stop();
        }));
    };
    PluginManager.prototype.whitelistEverything = function () {
        this._whitelistGlobs = new core.DartList.literal(new bare.createInstance(any, null, this.resourceProvider.pathContext.separator, '**/*'));
    };
    PluginManager.prototype._convertChangeType = function (type) {
        switch (type) {
            case lib6.ChangeType.ADD:
                return WatchEventType.ADD;
            case lib6.ChangeType.MODIFY:
                return WatchEventType.MODIFY;
            case lib6.ChangeType.REMOVE:
                return WatchEventType.REMOVE;
            default:
                throw new core.StateError("Unknown change type: " + type);
        }
    };
    PluginManager.prototype._convertWatchEvent = function (watchEvent) {
        return new bare.createInstance(any, null, this._convertChangeType(watchEvent.type), watchEvent.path);
    };
    PluginManager.prototype._isWhitelisted = function (path) {
        for (var _i = 0, _a = this._whitelistGlobs; _i < _a.length; _i++) {
            var glob = _a[_i];
            if (glob.matches(path)) {
                return true;
            }
        }
        return false;
    };
    PluginManager.prototype._pathsFor = function (pluginPath) {
        var _this = this;
        var needToCopy = function (folder) {
            var pubspecFile = folder.getChildAssumingFile('pubspec.yaml');
            if (!pubspecFile.exists) {
                return false;
            }
            return utils_1.op(utils_1.Op.EQUALS, BazelWorkspace.find(_this.resourceProvider, folder.path), null) && utils_1.op(utils_1.Op.EQUALS, GnWorkspace.find(_this.resourceProvider, folder.path), null);
        };
        var computePaths = function (pluginFolder, _namedArguments) {
            var runPub = Object.assign({
                "runPub": false
            }, _namedArguments).runPub;
            var pluginFile = pluginFolder.getChildAssumingFolder('bin').getChildAssumingFile('plugin.dart');
            if (!pluginFile.exists) {
                return null;
            }
            var packagesFile = pluginFolder.getChildAssumingFile('.packages');
            if (!packagesFile.exists) {
                if (runPub) {
                    if (!packagesFile.exists) {
                        packagesFile = null;
                    }
                }
                else {
                    packagesFile = null;
                }
            }
            return new core.DartList.literal(pluginFile.path, (function (t) { return (!!t) ? t.path : null; })(packagesFile));
        };
        var pluginFolder = this.resourceProvider.getFolder(pluginPath);
        if (!needToCopy(pluginFolder)) {
            return computePaths(pluginFolder);
        }
        var stateFolder = this.resourceProvider.getStateLocation('.plugin_manager');
        var stateName = this._uniqueDirectoryName(pluginPath);
        var parentFolder = stateFolder.getChildAssumingFolder(stateName);
        if (parentFolder.exists) {
            var executionFolder_1 = parentFolder.getChildAssumingFolder(pluginFolder.shortName);
            return computePaths(executionFolder_1);
        }
        var executionFolder = pluginFolder.copyTo(parentFolder);
        return computePaths(executionFolder, {
            runPub: true
        });
    };
    PluginManager.prototype._uniqueDirectoryName = function (path) {
        var bytes = md5.convert(new core.DartString(path).codeUnits).bytes;
        return hex.encode(bytes);
    };
    PluginManager.recordResponseTime = function (plugin, method, time) {
        PluginManager_1.pluginResponseTimes.putIfAbsent(plugin, function () {
            return new core.DartMap.literal([]);
        }).putIfAbsent(method, function () {
            return new core.DartList.literal();
        }).add(time);
    };
    var PluginManager_1;
    __decorate([
        utils_1.defaultConstructor
    ], PluginManager.prototype, "PluginManager", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'asset:meta/lib/meta.dart', type: 'visibleForTesting', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PluginManager.prototype, "pluginsForContextRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'asset:meta/lib/meta.dart', type: 'visibleForTesting', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PluginManager.prototype, "whitelistEverything", null);
    PluginManager = PluginManager_1 = __decorate([
        utils_1.DartClass
    ], PluginManager);
    return PluginManager;
}());
exports.PluginManager = PluginManager;
var PluginSession = /** @class */ (function () {
    function PluginSession(info) {
    }
    PluginSession_1 = PluginSession;
    Object.defineProperty(PluginSession, "MAXIMUM_RESPONSE_TIME", {
        get: function () {
            if (this.__$MAXIMUM_RESPONSE_TIME === undefined) {
                this.__$MAXIMUM_RESPONSE_TIME = new core.DartDuration({
                    minutes: 2
                });
            }
            return this.__$MAXIMUM_RESPONSE_TIME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginSession, "WAIT_FOR_SHUTDOWN_DURATION", {
        get: function () {
            if (this.__$WAIT_FOR_SHUTDOWN_DURATION === undefined) {
                this.__$WAIT_FOR_SHUTDOWN_DURATION = new core.DartDuration({
                    seconds: 10
                });
            }
            return this.__$WAIT_FOR_SHUTDOWN_DURATION;
        },
        enumerable: true,
        configurable: true
    });
    PluginSession.prototype.PluginSession = function (info) {
        this.pluginStoppedCompleter = new async.DartCompleter();
        this.requestId = 0;
        this.pendingRequests = new core.DartMap.literal([]);
        this.isCompatible = true;
        this.info = info;
    };
    Object.defineProperty(PluginSession.prototype, "nextRequestId", {
        get: function () {
            return new core.DartInt((this.requestId++)).toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginSession.prototype, "onDone", {
        get: function () {
            return this.pluginStoppedCompleter.future;
        },
        enumerable: true,
        configurable: true
    });
    PluginSession.prototype.handleNotification = function (notification) {
        if (utils_1.op(utils_1.Op.EQUALS, notification.event, PLUGIN_NOTIFICATION_ERROR)) {
            var params = new bare.createInstance(any, null, notification);
            if (params.isFatal) {
                this.info.stop();
                this.stop();
            }
        }
        this.info.notificationManager.handlePluginNotification(this.info.pluginId, notification);
    };
    PluginSession.prototype.handleOnDone = function () {
        this.channel.close();
        this.channel = null;
        this.pluginStoppedCompleter.complete(null);
    };
    PluginSession.prototype.handleOnError = function (errorPair) {
    };
    PluginSession.prototype.handleResponse = function (response) {
        var requestData = this.pendingRequests.remove(response.id);
        var responseTime = new core.DartDateTime.now().millisecondsSinceEpoch;
        var duration = responseTime - requestData.requestTime;
        PluginManager.recordResponseTime(this.info, requestData.method, duration);
        var completer = requestData.completer;
        if (completer != null) {
            completer.complete(response);
        }
    };
    PluginSession.prototype.isNonResponsive = function () {
        var cutOffTime = new core.DartDateTime.now().millisecondsSinceEpoch - PluginSession_1.MAXIMUM_RESPONSE_TIME.inMilliseconds;
        for (var _i = 0, _a = this.pendingRequests.values; _i < _a.length; _i++) {
            var requestData = _a[_i];
            if (requestData.requestTime < cutOffTime) {
                return true;
            }
        }
        return false;
    };
    PluginSession.prototype.sendRequest = function (parameters) {
        if (utils_1.op(utils_1.Op.EQUALS, this.channel, null)) {
            throw new core.StateError('Cannot send a request to a plugin that has stopped.');
        }
        var id = this.nextRequestId;
        var completer = new async.DartCompleter();
        var requestTime = new core.DartDateTime.now().millisecondsSinceEpoch;
        var request = parameters.toRequest(id);
        this.pendingRequests.set(id, new _PendingRequest(request.method, requestTime, completer));
        this.channel.sendRequest(request);
        return completer.future;
    };
    PluginSession.prototype.start = function (byteStorePath, sdkPath) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.channel != null) {
                            throw new core.StateError('Cannot start a plugin that is already running.');
                        }
                        if (byteStorePath == null || new core.DartString(byteStorePath).isEmpty) {
                            throw new core.StateError('Missing byte store path');
                        }
                        if (!this.isCompatible) {
                            return [2 /*return*/, false];
                        }
                        this.channel = this.info._createChannel();
                        return [4 /*yield*/, this.channel.listen(this.handleResponse.bind(this), this.handleNotification.bind(this), {
                                onDone: this.handleOnDone.bind(this), onError: this.handleOnError.bind(this)
                            })];
                    case 1:
                        _a.sent();
                        if (utils_1.op(utils_1.Op.EQUALS, this.channel, null)) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.sendRequest(new bare.createInstance(any, null, (byteStorePath || ''), sdkPath, '1.0.0-alpha.0'))];
                    case 2:
                        response = _a.sent();
                        result = new bare.createInstance(any, null, response);
                        this.isCompatible = result.isCompatible;
                        this.contactInfo = result.contactInfo;
                        this.interestingFiles = result.interestingFiles;
                        this.name = result.name;
                        this.version = result.version;
                        if (!this.isCompatible) {
                            this.sendRequest(new bare.createInstance(any, null));
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        }); })());
    };
    PluginSession.prototype.stop = function () {
        var _this = this;
        if (utils_1.op(utils_1.Op.EQUALS, this.channel, null)) {
            throw new core.StateError('Cannot stop a plugin that is not running.');
        }
        this.sendRequest(new bare.createInstance(any, null));
        new async.Future.delayed(PluginSession_1.WAIT_FOR_SHUTDOWN_DURATION, function () {
            if (_this.channel != null) {
                _this.channel.kill();
                _this.channel = null;
            }
        });
        return this.pluginStoppedCompleter.future;
    };
    var PluginSession_1;
    __decorate([
        utils_1.defaultConstructor
    ], PluginSession.prototype, "PluginSession", null);
    PluginSession = PluginSession_1 = __decorate([
        utils_1.DartClass,
        utils_1.DartClassAnnotation({
            library: 'asset:meta/lib/meta.dart', type: 'visibleForTesting', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PluginSession);
    return PluginSession;
}());
exports.PluginSession = PluginSession;
var _PendingRequest = /** @class */ (function () {
    function _PendingRequest(method, requestTime, completer) {
    }
    _PendingRequest.prototype._PendingRequest = function (method, requestTime, completer) {
        this.method = method;
        this.requestTime = requestTime;
        this.completer = completer;
    };
    __decorate([
        utils_1.defaultConstructor
    ], _PendingRequest.prototype, "_PendingRequest", null);
    _PendingRequest = __decorate([
        utils_1.DartClass
    ], _PendingRequest);
    return _PendingRequest;
}());
exports._PendingRequest = _PendingRequest;
var BuiltInPluginInfo = /** @class */ (function (_super) {
    __extends(BuiltInPluginInfo, _super);
    function BuiltInPluginInfo(entryPoint, pluginId, notificationManager, instrumentationService) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    BuiltInPluginInfo.prototype.BuiltInPluginInfo = function (entryPoint, pluginId, notificationManager, instrumentationService) {
        _super.prototype.PluginInfo.call(this, notificationManager, instrumentationService);
        this.entryPoint = entryPoint;
        this.pluginId = pluginId;
    };
    BuiltInPluginInfo.prototype._createChannel = function () {
        return new bare.createInstance(any, null, this.entryPoint, this.pluginId, this.instrumentationService);
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], BuiltInPluginInfo.prototype, "pluginId", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], BuiltInPluginInfo.prototype, "BuiltInPluginInfo", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], BuiltInPluginInfo.prototype, "_createChannel", null);
    BuiltInPluginInfo = __decorate([
        utils_1.DartClass
    ], BuiltInPluginInfo);
    return BuiltInPluginInfo;
}(PluginInfo));
exports.BuiltInPluginInfo = BuiltInPluginInfo;
var DiscoveredPluginInfo = /** @class */ (function (_super) {
    __extends(DiscoveredPluginInfo, _super);
    function DiscoveredPluginInfo(path, executionPath, packagesPath, notificationManager, instrumentationService) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    DiscoveredPluginInfo.prototype.DiscoveredPluginInfo = function (path, executionPath, packagesPath, notificationManager, instrumentationService) {
        _super.prototype.PluginInfo.call(this, notificationManager, instrumentationService);
        this.path = path;
        this.executionPath = executionPath;
        this.packagesPath = packagesPath;
    };
    Object.defineProperty(DiscoveredPluginInfo.prototype, "pluginId", {
        get: function () {
            return this.path;
        },
        enumerable: true,
        configurable: true
    });
    DiscoveredPluginInfo.prototype._createChannel = function () {
        return new bare.createInstance(any, null, new lib4.Uri.file(this.executionPath, {
            windows: io.Platform.isWindows
        }), new lib4.Uri.file(this.packagesPath, {
            windows: io.Platform.isWindows
        }), this.instrumentationService);
    };
    __decorate([
        utils_1.defaultConstructor
    ], DiscoveredPluginInfo.prototype, "DiscoveredPluginInfo", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiscoveredPluginInfo.prototype, "pluginId", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiscoveredPluginInfo.prototype, "_createChannel", null);
    DiscoveredPluginInfo = __decorate([
        utils_1.DartClass
    ], DiscoveredPluginInfo);
    return DiscoveredPluginInfo;
}(PluginInfo));
exports.DiscoveredPluginInfo = DiscoveredPluginInfo;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=plugin_manager.js.map
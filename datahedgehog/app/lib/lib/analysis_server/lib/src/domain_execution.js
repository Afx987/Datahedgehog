"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_execution.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var ExecutionDomainHandler = /** @class */ (function () {
    function ExecutionDomainHandler(server) {
    }
    ExecutionDomainHandler_1 = ExecutionDomainHandler;
    ExecutionDomainHandler.prototype.ExecutionDomainHandler = function (server) {
        this.nextContextId = 0;
        this.contextMap = new core.DartHashMap();
        this.server = server;
    };
    ExecutionDomainHandler.prototype.createContext = function (request) {
        var file = new bare.createInstance(any, null, request).contextRoot;
        var contextId = new core.DartInt((this.nextContextId++)).toString();
        this.contextMap.set(contextId, file);
        return new bare.createInstance(any, null, contextId).toResponse(request.id);
    };
    ExecutionDomainHandler.prototype.deleteContext = function (request) {
        var contextId = new bare.createInstance(any, null, request).id;
        this.contextMap.remove(contextId);
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    ExecutionDomainHandler.prototype.handleRequest = function (request) {
        try {
            var requestName = request.method;
            if (requestName == EXECUTION_CREATE_CONTEXT) {
                return this.createContext(request);
            }
            else if (requestName == EXECUTION_DELETE_CONTEXT) {
                return this.deleteContext(request);
            }
            else if (requestName == EXECUTION_MAP_URI) {
                return this.mapUri(request);
            }
            else if (requestName == EXECUTION_SET_SUBSCRIPTIONS) {
                return this.setSubscriptions(request);
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
    ExecutionDomainHandler.prototype.mapUri = function (request) {
        var params = new bare.createInstance(any, null, request);
        var contextId = params.id;
        var path = this.contextMap.get(contextId);
        if (path == null) {
            return new bare.createInstance(any, null, request, 'id', "There is no execution context with an id of " + contextId);
        }
        var sourceFactory;
        var driver;
        if (this.server.options.enableNewAnalysisDriver) {
            driver = this.server.getAnalysisDriver(path);
            if (utils_1.op(utils_1.Op.EQUALS, driver, null)) {
                return new bare.createInstance(any, null, request, contextId);
            }
            sourceFactory = driver.sourceFactory;
        }
        else {
            var context = this.server.getContainingContext(path);
            if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
                return new bare.createInstance(any, null, request, contextId);
            }
            sourceFactory = context.sourceFactory;
        }
        var file = params.file;
        var uri = params.uri;
        if (file != null) {
            if (uri != null) {
                return new bare.createInstance(any, null, request, 'file', 'Either file or uri must be provided, but not both');
            }
            var resource = this.server.resourceProvider.getResource(file);
            if (!resource.exists) {
                return new bare.createInstance(any, null, request, 'file', 'Must exist');
            }
            else if (_common_1.isNot(resource, any)) {
                return new bare.createInstance(any, null, request, 'file', 'Must not refer to a directory');
            }
            var source = void 0;
            if (this.server.options.enableNewAnalysisDriver) {
                source = driver.fsState.getFileForPath(file).source;
            }
            else {
                var contextSource = this.server.getContextSourcePair(file);
                source = contextSource.source;
            }
            if (source.uriKind != UriKind.FILE_URI) {
                uri = source.uri.toString();
            }
            else {
                uri = sourceFactory.restoreUri(source).toString();
            }
            return new bare.createInstance(any, null, {
                uri: uri
            }).toResponse(request.id);
        }
        else if (uri != null) {
            var source = sourceFactory.forUri(uri);
            if (utils_1.op(utils_1.Op.EQUALS, source, null)) {
                return new bare.createInstance(any, null, request, 'uri', 'Invalid URI');
            }
            file = source.fullName;
            return new bare.createInstance(any, null, {
                file: file
            }).toResponse(request.id);
        }
        return new bare.createInstance(any, null, request, 'file', 'Either file or uri must be provided');
    };
    ExecutionDomainHandler.prototype.setSubscriptions = function (request) {
        if (this.server.options.enableNewAnalysisDriver) {
            return new bare.createInstance(any, null).toResponse(request.id);
        }
        else {
            var subscriptions = new bare.createInstance(any, null, request).subscriptions;
            if (subscriptions.contains(ExecutionService.LAUNCH_DATA)) {
                if (utils_1.op(utils_1.Op.EQUALS, this.onFileAnalyzed, null)) {
                    this.onFileAnalyzed = this.server.onFileAnalyzed.listen(this._fileAnalyzed.bind(this));
                    this._reportCurrentFileStatus();
                }
            }
            else {
                if (this.onFileAnalyzed != null) {
                    this.onFileAnalyzed.cancel();
                    this.onFileAnalyzed = null;
                }
            }
            return new bare.createInstance(any, null).toResponse(request.id);
        }
    };
    ExecutionDomainHandler.prototype._fileAnalyzed = function (notice) {
        var _this = this;
        ServerPerformanceStatistics.executionNotifications.makeCurrentWhile(function () {
            var source = notice.source;
            var filePath = source.fullName;
            var isDartFile = notice.resolvedDartUnit != null;
            if (!isDartFile) {
                return;
            }
            var context = _this.server.getContainingContext(filePath);
            if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
                return;
            }
            if (isDartFile) {
                var kind = ExecutableKind.NOT_EXECUTABLE;
                if (context.isClientLibrary(source)) {
                    kind = ExecutableKind.CLIENT;
                    if (context.isServerLibrary(source)) {
                        kind = ExecutableKind.EITHER;
                    }
                }
                else if (context.isServerLibrary(source)) {
                    kind = ExecutableKind.SERVER;
                }
                _this.server.sendNotification(new bare.createInstance(any, null, filePath, {
                    kind: kind
                }).toNotification());
            }
        });
    };
    ExecutionDomainHandler.prototype._isInAnalysisRoot = function (filePath) {
        return this.server.contextManager.isInAnalysisRoot(filePath);
    };
    ExecutionDomainHandler.prototype._reportCurrentFileStatus = function () {
        for (var _i = 0, _a = this.server.analysisContexts; _i < _a.length; _i++) {
            var context = _a[_i];
            var librarySources = context.librarySources;
            var clientSources = context.launchableClientLibrarySources;
            var serverSources = context.launchableServerLibrarySources;
            for (var _b = 0, clientSources_1 = clientSources; _b < clientSources_1.length; _b++) {
                var source = clientSources_1[_b];
                if (serverSources.remove(source)) {
                    this._sendKindNotification(source.fullName, ExecutableKind.EITHER);
                }
                else {
                    this._sendKindNotification(source.fullName, ExecutableKind.CLIENT);
                }
                librarySources.remove(source);
            }
            for (var _c = 0, serverSources_1 = serverSources; _c < serverSources_1.length; _c++) {
                var source = serverSources_1[_c];
                this._sendKindNotification(source.fullName, ExecutableKind.SERVER);
                librarySources.remove(source);
            }
            for (var _d = 0, librarySources_1 = librarySources; _d < librarySources_1.length; _d++) {
                var source = librarySources_1[_d];
                this._sendKindNotification(source.fullName, ExecutableKind.NOT_EXECUTABLE);
            }
            for (var _e = 0, _f = context.htmlSources; _e < _f.length; _e++) {
                var source = _f[_e];
                var filePath = source.fullName;
                if (this._isInAnalysisRoot(filePath)) {
                    var libraries = context.getLibrariesReferencedFromHtml(source);
                    this.server.sendNotification(new bare.createInstance(any, null, filePath, {
                        referencedFiles: ExecutionDomainHandler_1._getFullNames(libraries)
                    }).toNotification());
                }
            }
        }
    };
    ExecutionDomainHandler.prototype._sendKindNotification = function (filePath, kind) {
        if (this._isInAnalysisRoot(filePath)) {
            this.server.sendNotification(new bare.createInstance(any, null, filePath, {
                kind: kind
            }).toNotification());
        }
    };
    ExecutionDomainHandler._getFullNames = function (sources) {
        return sources.map(function (source) {
            return source.fullName;
        }).toList();
    };
    var ExecutionDomainHandler_1;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionDomainHandler.prototype, "ExecutionDomainHandler", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDomainHandler.prototype, "handleRequest", null);
    ExecutionDomainHandler = ExecutionDomainHandler_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionDomainHandler);
    return ExecutionDomainHandler;
}());
exports.ExecutionDomainHandler = ExecutionDomainHandler;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=domain_execution.js.map
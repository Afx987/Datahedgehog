"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var SocketServer = /** @class */ (function () {
    function SocketServer(analysisServerOptions, sdkManager, defaultSdk, instrumentationService, diagnosticServer, serverPlugin, fileResolverProvider, packageResolverProvider, useSingleContextManager) {
    }
    SocketServer.prototype.SocketServer = function (analysisServerOptions, sdkManager, defaultSdk, instrumentationService, diagnosticServer, serverPlugin, fileResolverProvider, packageResolverProvider, useSingleContextManager) {
        this.analysisServerOptions = analysisServerOptions;
        this.sdkManager = sdkManager;
        this.defaultSdk = defaultSdk;
        this.instrumentationService = instrumentationService;
        this.diagnosticServer = diagnosticServer;
        this.serverPlugin = serverPlugin;
        this.fileResolverProvider = fileResolverProvider;
        this.packageResolverProvider = packageResolverProvider;
        this.useSingleContextManager = useSingleContextManager;
    };
    SocketServer.prototype.createAnalysisServer = function (serverChannel) {
        if (this.analysisServer != null) {
            var error_1 = new bare.createInstance(any, null, RequestErrorCode.SERVER_ALREADY_STARTED, "Server already started");
            serverChannel.sendResponse(new bare.createInstance(any, null, '', {
                error: error_1
            }));
            serverChannel.listen(function (request) {
                serverChannel.sendResponse(new bare.createInstance(any, null, request.id, {
                    error: error_1
                }));
            });
            return;
        }
        var resourceProvider;
        if (utils_1.op(utils_1.Op.EQUALS, this.analysisServerOptions.fileReadMode, 'as-is')) {
            resourceProvider = PhysicalResourceProvider.INSTANCE;
        }
        else if (utils_1.op(utils_1.Op.EQUALS, this.analysisServerOptions.fileReadMode, 'normalize-eol-always')) {
            resourceProvider = new bare.createInstance(any, null, PhysicalResourceProvider.NORMALIZE_EOL_ALWAYS);
        }
        else {
            throw new core.Exception("File read mode was set to the unknown mode: " + this.analysisServerOptions + ".fileReadMode");
        }
        this.analysisServer = new bare.createInstance(any, null, serverChannel, resourceProvider, new bare.createInstance(any, null, resourceProvider, this.defaultSdk), createMemoryIndex(), this.serverPlugin, this.analysisServerOptions, this.sdkManager, this.instrumentationService, {
            diagnosticServer: this.diagnosticServer, fileResolverProvider: this.fileResolverProvider, packageResolverProvider: this.packageResolverProvider, useSingleContextManager: this.useSingleContextManager, rethrowExceptions: false
        });
        this.analysisServer.userDefinedPlugins = this.userDefinedPlugins;
    };
    __decorate([
        utils_1.defaultConstructor
    ], SocketServer.prototype, "SocketServer", null);
    SocketServer = __decorate([
        utils_1.DartClass
    ], SocketServer);
    return SocketServer;
}());
exports.SocketServer = SocketServer;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=socket_server.js.map
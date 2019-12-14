"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_server.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var ServerDomainHandler = /** @class */ (function () {
    function ServerDomainHandler(server) {
    }
    ServerDomainHandler.prototype.ServerDomainHandler = function (server) {
        this.server = server;
    };
    ServerDomainHandler.prototype.getVersion = function (request) {
        return new bare.createInstance(any, null, AnalysisServer.VERSION).toResponse(request.id);
    };
    ServerDomainHandler.prototype.handleRequest = function (request) {
        try {
            var requestName = request.method;
            if (requestName == SERVER_GET_VERSION) {
                return this.getVersion(request);
            }
            else if (requestName == SERVER_SET_SUBSCRIPTIONS) {
                return this.setSubscriptions(request);
            }
            else if (requestName == SERVER_SHUTDOWN) {
                return this.shutdown(request);
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
    ServerDomainHandler.prototype.setSubscriptions = function (request) {
        this.server.serverServices = new bare.createInstance(any, null, request).subscriptions.toSet();
        return new bare.createInstance(any, null).toResponse(request.id);
    };
    ServerDomainHandler.prototype.shutdown = function (request) {
        this.server.shutdown();
        var response = new bare.createInstance(any, null).toResponse(request.id);
        return response;
    };
    __decorate([
        utils_1.defaultConstructor
    ], ServerDomainHandler.prototype, "ServerDomainHandler", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerDomainHandler.prototype, "handleRequest", null);
    ServerDomainHandler = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerDomainHandler);
    return ServerDomainHandler;
}());
exports.ServerDomainHandler = ServerDomainHandler;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=domain_server.js.map
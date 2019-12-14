"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var io = require("@dart2ts/dart/io");
var StdioAnalysisServer = /** @class */ (function () {
    function StdioAnalysisServer(socketServer) {
    }
    StdioAnalysisServer.prototype.StdioAnalysisServer = function (socketServer) {
        this.socketServer = socketServer;
    };
    StdioAnalysisServer.prototype.serveStdio = function () {
        var serverChannel = new bare.createInstance(any, null, io.properties.stdin, io.properties.stdout, this.socketServer.instrumentationService);
        this.socketServer.createAnalysisServer(serverChannel);
        return serverChannel.closed;
    };
    __decorate([
        utils_1.defaultConstructor
    ], StdioAnalysisServer.prototype, "StdioAnalysisServer", null);
    StdioAnalysisServer = __decorate([
        utils_1.DartClass
    ], StdioAnalysisServer);
    return StdioAnalysisServer;
}());
exports.StdioAnalysisServer = StdioAnalysisServer;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=stdio_server.js.map
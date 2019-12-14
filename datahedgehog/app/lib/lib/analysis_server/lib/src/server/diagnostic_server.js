"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var DiagnosticServer = /** @class */ (function () {
    function DiagnosticServer() {
    }
    DiagnosticServer.prototype.getServerPort = function () { throw 'abstract'; };
    DiagnosticServer.prototype.DiagnosticServer = function () {
    };
    __decorate([
        utils_1.Abstract
    ], DiagnosticServer.prototype, "getServerPort", null);
    __decorate([
        utils_1.defaultConstructor
    ], DiagnosticServer.prototype, "DiagnosticServer", null);
    DiagnosticServer = __decorate([
        utils_1.DartClass
    ], DiagnosticServer);
    return DiagnosticServer;
}());
exports.DiagnosticServer = DiagnosticServer;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=diagnostic_server.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var lib3 = require("@dart2ts.packages/logging/lib/logging");
var AnalysisLogger = /** @class */ (function () {
    function AnalysisLogger(server) {
    }
    AnalysisLogger.prototype.AnalysisLogger = function (server) {
        this.baseLogger = new bare.createInstance(any, null, 'analysis.server');
        this.server = server;
        /* TODO (AssertStatementImpl) : assert (server != null); */ ;
        lib3.Logger.root.onRecord.listen(function (record) {
            AnalysisEngine.instance.instrumentationService.logLogEntry(record.level.name, record.time, record.message, record.error, record.stackTrace);
        });
    };
    AnalysisLogger.prototype.logError = function (message, exception) {
        if (utils_1.op(utils_1.Op.EQUALS, exception, null)) {
            this.baseLogger.severe(message);
        }
        else {
            this.baseLogger.severe(message, exception.exception, exception.stackTrace);
        }
        this.server.sendServerErrorNotification(message, exception, null);
    };
    AnalysisLogger.prototype.logInformation = function (message, exception) {
        if (utils_1.op(utils_1.Op.EQUALS, exception, null)) {
            this.baseLogger.info(message);
        }
        else {
            this.baseLogger.info(message, exception.exception, exception.stackTrace);
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisLogger.prototype, "AnalysisLogger", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisLogger.prototype, "logError", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisLogger.prototype, "logInformation", null);
    AnalysisLogger = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisLogger);
    return AnalysisLogger;
}());
exports.AnalysisLogger = AnalysisLogger;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=analysis_logger.js.map
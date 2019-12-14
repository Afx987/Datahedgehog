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
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/operation.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var Operation = /** @class */ (function () {
    function Operation() {
    }
    Operation.prototype.perform = function (driver) { throw 'abstract'; };
    Operation.prototype.Operation = function () {
    };
    __decorate([
        utils_1.Abstract
    ], Operation.prototype, "perform", null);
    __decorate([
        utils_1.defaultConstructor
    ], Operation.prototype, "Operation", null);
    Operation = __decorate([
        utils_1.DartClass
    ], Operation);
    return Operation;
}());
exports.Operation = Operation;
var RequestOperation = /** @class */ (function (_super) {
    __extends(RequestOperation, _super);
    function RequestOperation(converter, json) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    RequestOperation.prototype.RequestOperation = function (converter, json) {
        this.converter = converter;
        this.json = json;
    };
    RequestOperation.prototype.perform = function (driver) {
        var _this = this;
        var stopwatch = new core.DartStopwatch();
        var originalId = this.json.get('id');
        var method = this.json.get('method');
        this.json.set('clientRequestTime', new core.DartDateTime.now().millisecondsSinceEpoch);
        driver.logger.log(Level.FINE, "Sending request: " + method + "\n  " + this.json);
        stopwatch.start();
        var recordResult = function (success, result) {
            var elapsed = stopwatch.elapsed;
            driver.results.record(method, elapsed, {
                success: success
            });
            driver.logger.log(Level.FINE, "Response received: " + method + " : " + elapsed + "\n  " + result);
        };
        driver.send(method, this.converter.asMap(this.json.get('params'))).then(function (result) {
            recordResult(true, result);
            _this.processResult(originalId, result, stopwatch);
        }).catchError(function (exception) {
            recordResult(false, exception);
            _this.converter.processErrorResponse(originalId, exception);
        });
        return null;
    };
    RequestOperation.prototype.processResult = function (id, result, stopwatch) {
        this.converter.processResponseResult(id, result);
    };
    __decorate([
        utils_1.defaultConstructor
    ], RequestOperation.prototype, "RequestOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestOperation.prototype, "perform", null);
    RequestOperation = __decorate([
        utils_1.DartClass
    ], RequestOperation);
    return RequestOperation;
}(Operation));
exports.RequestOperation = RequestOperation;
var ResponseOperation = /** @class */ (function (_super) {
    __extends(ResponseOperation, _super);
    function ResponseOperation(converter, requestJson, responseJson) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ResponseOperation_1 = ResponseOperation;
    Object.defineProperty(ResponseOperation, "responseTimeout", {
        get: function () {
            if (this.__$responseTimeout === undefined) {
                this.__$responseTimeout = new core.DartDuration({
                    seconds: 60
                });
            }
            return this.__$responseTimeout;
        },
        set: function (__$value) {
            this.__$responseTimeout = __$value;
        },
        enumerable: true,
        configurable: true
    });
    ResponseOperation.prototype.ResponseOperation = function (converter, requestJson, responseJson) {
        this.completer = new async.DartCompleter();
        this.converter = converter;
        this.requestJson = requestJson;
        this.responseJson = responseJson;
        this.completer.future.then(this._processResult.bind(this)).timeout(ResponseOperation_1.responseTimeout);
    };
    ResponseOperation.prototype.perform = function (driver) {
        this.driver = driver;
        return this.converter.processExpectedResponse(this.responseJson.get('id'), this.completer);
    };
    ResponseOperation.prototype._equal = function (expectedResult, actualResult) {
        var _this = this;
        if (_common_1.is(expectedResult, core.DartMap() && _common_1.is(actualResult, core.DartMap()), {
            if: function (expectedResult) { }, : .length == actualResult.length
        })) {
            return expectedResult.keys.every(function (key) {
                return key == 'fileStamp' || _this._equal(expectedResult.get(key), actualResult.get(key));
            });
        }
    };
    ResponseOperation.prototype.if = function (is) { };
    var ResponseOperation_1;
    __decorate([
        utils_1.defaultConstructor
    ], ResponseOperation.prototype, "ResponseOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ResponseOperation.prototype, "perform", null);
    ResponseOperation = ResponseOperation_1 = __decorate([
        utils_1.DartClass
    ], ResponseOperation);
    return ResponseOperation;
}(Operation));
exports.ResponseOperation = ResponseOperation;
(expectedResult, core.DartList() && _common_1.is(actualResult, core.DartList()));
{
    if (expectedResult.length == actualResult.length) {
        for (var i = 0; i < expectedResult.length; ++i) {
            if (!this._equal(expectedResult[i], actualResult[i])) {
                return false;
            }
        }
        return true;
    }
}
return utils_1.op(utils_1.Op.EQUALS, expectedResult, actualResult);
_processResult(actualResult, any);
void {
    let: let, expectedResult: expectedResult,
    : ._equal(expectedResult, actualResult)
};
{
    var expectedError = this.responseJson.get('error');
    var format = function (value) {
        var text = "\n" + value;
        if (new core.DartString(text).endsWith('\n')) {
            text = new core.DartString(text).substring(0, new core.DartString(text).length - 1);
        }
        return new core.DartString(text).replaceAll('\n', '\n  ');
    };
    var message = "Request:" + format(this.requestJson) + "\n" + ("expected result:" + format(expectedResult) + "\n") + ("expected error:" + format(expectedError) + "\n") + ("but received:" + format(actualResult));
    this.driver.results.recordUnexpectedResults(this.requestJson.get('method'));
    this.converter.logOverlayContent();
    if (utils_1.op(utils_1.Op.EQUALS, expectedError, null)) {
        this.converter.logger.log(Level.SEVERE, message);
    }
    else {
        throw message;
    }
}
var StartServerOperation = /** @class */ (function (_super) {
    __extends(StartServerOperation, _super);
    function StartServerOperation() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    StartServerOperation.prototype.perform = function (driver) {
        return driver.startServer();
    };
    StartServerOperation.prototype.StartServerOperation = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], StartServerOperation.prototype, "perform", null);
    __decorate([
        utils_1.defaultConstructor
    ], StartServerOperation.prototype, "StartServerOperation", null);
    StartServerOperation = __decorate([
        utils_1.DartClass
    ], StartServerOperation);
    return StartServerOperation;
}(Operation));
exports.StartServerOperation = StartServerOperation;
var WaitForAnalysisCompleteOperation = /** @class */ (function (_super) {
    __extends(WaitForAnalysisCompleteOperation, _super);
    function WaitForAnalysisCompleteOperation() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    WaitForAnalysisCompleteOperation.prototype.perform = function (driver) {
        var start = new core.DartDateTime.now();
        driver.logger.log(Level.FINE, 'waiting for analysis to complete');
        var subscription;
        var timer;
        var completer = new async.DartCompleter();
        var isAnalyzing = false;
        subscription = driver.onServerStatus.listen(function (params) {
            if (params.analysis != null) {
                if (params.analysis.isAnalyzing) {
                    isAnalyzing = true;
                }
                else {
                    subscription.cancel();
                    timer.cancel();
                    var end = new core.DartDateTime.now();
                    var delta = end.difference(start);
                    driver.logger.log(Level.FINE, "analysis complete after " + delta);
                    completer.complete();
                    driver.results.record('analysis complete', delta, {
                        notification: true
                    });
                }
            }
        });
        timer = new async.DartTimer.periodic(new core.DartDuration({
            milliseconds: 20
        }), function (_) {
            if (!isAnalyzing) {
                subscription.cancel();
                timer.cancel();
                driver.logger.log(Level.INFO, 'analysis never started');
                completer.complete();
                return;
            }
            var currentTime = driver.server.currentElapseTime;
            var lastTime = driver.server.lastCommunicationTime;
            if (currentTime - lastTime > 60) {
                subscription.cancel();
                timer.cancel();
                var message = 'gave up waiting for analysis to complete';
                driver.logger.log(Level.WARNING, message);
                completer.completeError(message);
            }
        });
        return completer.future;
    };
    WaitForAnalysisCompleteOperation.prototype.WaitForAnalysisCompleteOperation = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WaitForAnalysisCompleteOperation.prototype, "perform", null);
    __decorate([
        utils_1.defaultConstructor
    ], WaitForAnalysisCompleteOperation.prototype, "WaitForAnalysisCompleteOperation", null);
    WaitForAnalysisCompleteOperation = __decorate([
        utils_1.DartClass
    ], WaitForAnalysisCompleteOperation);
    return WaitForAnalysisCompleteOperation;
}(Operation));
exports.WaitForAnalysisCompleteOperation = WaitForAnalysisCompleteOperation;
var CompletionRequestOperation = /** @class */ (function (_super) {
    __extends(CompletionRequestOperation, _super);
    function CompletionRequestOperation(converter, json) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    CompletionRequestOperation.prototype.CompletionRequestOperation = function (converter, json) {
        this.firstNotification = true;
        _super.prototype.RequestOperation.call(this, converter, json);
    };
    CompletionRequestOperation.prototype.perform = function (driver) {
        this.driver = driver;
        this.subscription = driver.onCompletionResults.listen(this.processNotification.bind(this));
        return _super.prototype.perform.call(this, driver);
    };
    CompletionRequestOperation.prototype.processNotification = function (event) {
        if (utils_1.op(utils_1.Op.EQUALS, event.id, this.notificationId)) {
            var elapsed = this.stopwatch.elapsed;
            if (this.firstNotification) {
                this.firstNotification = false;
                this.driver.results.record('completion notification first', elapsed, {
                    notification: true
                });
            }
            if (event.isLast) {
                this.subscription.cancel();
                this.driver.results.record('completion notification last', elapsed, {
                    notification: true
                });
            }
        }
    };
    CompletionRequestOperation.prototype.processResult = function (id, result, stopwatch) {
        this.notificationId = result.get('id');
        this.stopwatch = stopwatch;
        _super.prototype.processResult.call(this, id, result, stopwatch);
    };
    __decorate([
        utils_1.defaultConstructor
    ], CompletionRequestOperation.prototype, "CompletionRequestOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestOperation.prototype, "perform", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestOperation.prototype, "processResult", null);
    CompletionRequestOperation = __decorate([
        utils_1.DartClass
    ], CompletionRequestOperation);
    return CompletionRequestOperation;
}(RequestOperation));
exports.CompletionRequestOperation = CompletionRequestOperation;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=operation.js.map
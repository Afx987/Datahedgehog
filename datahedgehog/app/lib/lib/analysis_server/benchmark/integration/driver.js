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
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("./../../test/integration/support/integration_test_methods");
var lib4 = require("./../../test/integration/support/integration_tests");
var math = require("@dart2ts/dart/math");
exports._printColumn = function (sb, text, keyLen, _namedArguments) {
    var rightJustified = Object.assign({
        "rightJustified": false
    }, _namedArguments).rightJustified;
    if (!rightJustified) {
        sb.write(text);
        sb.write(',');
    }
    for (var i = new core.DartString(text).length; i < keyLen; ++i) {
        sb.writeCharCode(properties.SPACE);
    }
    if (rightJustified) {
        sb.write(text);
        sb.write(',');
    }
    sb.writeCharCode(properties.SPACE);
};
var Driver = /** @class */ (function (_super) {
    __extends(Driver, _super);
    function Driver(_namedArguments) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    Driver_1 = Driver;
    Object.defineProperty(Driver, "SHUTDOWN_TIMEOUT", {
        get: function () {
            if (this.__$SHUTDOWN_TIMEOUT === undefined) {
                this.__$SHUTDOWN_TIMEOUT = new core.DartDuration({
                    seconds: 5
                });
            }
            return this.__$SHUTDOWN_TIMEOUT;
        },
        enumerable: true,
        configurable: true
    });
    Driver.prototype.Driver = function (_namedArguments) {
        var diagnosticPort = Object.assign({}, _namedArguments).diagnosticPort;
        this.logger = new bare.createInstance(any, null, 'Driver');
        this.running = false;
        this.results = new Results();
        this._runCompleter = new async.DartCompleter();
        this.diagnosticPort = diagnosticPort;
    };
    Object.defineProperty(Driver.prototype, "runComplete", {
        get: function () {
            return this._runCompleter.future;
        },
        enumerable: true,
        configurable: true
    });
    Driver.prototype.perform = function (op) {
        return op.perform(this);
    };
    Driver.prototype.send = function (method, params) {
        return this.server.send(method, params);
    };
    Driver.prototype.startServer = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var serverConnected;
            var _this = this;
            return __generator(this, function (_a) {
                this.logger.log(Level.FINE, 'starting server');
                this.initializeInttestMixin();
                this.server = new lib4.Server();
                serverConnected = new async.DartCompleter();
                this.onServerConnected.listen(function (_) {
                    _this.logger.log(Level.FINE, 'connected to server');
                    serverConnected.complete();
                });
                this.running = true;
                return [2 /*return*/, this.server.start({
                        diagnosticPort: this.diagnosticPort
                    }).then(function (params) {
                        _this.server.listenToOutput(_this.dispatchNotification.bind(_this));
                        _this.server.exitCode.then(function (_) {
                            _this.logger.log(Level.FINE, 'server stopped');
                            _this.running = false;
                            _this._resultsReady();
                        });
                        return serverConnected.future;
                    })];
            });
        }); })());
    };
    Driver.prototype.stopServer = function (timeout) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeout = timeout || Driver_1.SHUTDOWN_TIMEOUT;
                        if (!this.running) return [3 /*break*/, 2];
                        this.logger.log(Level.FINE, 'requesting server shutdown');
                        this.sendServerShutdown();
                        return [4 /*yield*/, this.server.exitCode.timeout(timeout, {
                                onTimeout: function () {
                                    return _this.server.kill('server failed to exit');
                                }
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this._resultsReady();
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    Driver.prototype._resultsReady = function () {
        if (!this._runCompleter.isCompleted) {
            this._runCompleter.complete(this.results);
        }
    };
    var Driver_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Driver.prototype, "server", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], Driver.prototype, "Driver", null);
    Driver = Driver_1 = __decorate([
        utils_1.DartClass
    ], Driver);
    return Driver;
}(lib3.IntegrationTestMixin));
exports.Driver = Driver;
var Measurement = /** @class */ (function () {
    function Measurement(tag, notification) {
    }
    Measurement.prototype.Measurement = function (tag, notification) {
        this.elapsedTimes = new core.DartList();
        this.errorCount = 0;
        this.unexpectedResultCount = 0;
        this.tag = tag;
        this.notification = notification;
    };
    Object.defineProperty(Measurement.prototype, "count", {
        get: function () {
            return this.elapsedTimes.length;
        },
        enumerable: true,
        configurable: true
    });
    Measurement.prototype.printSummary = function (keyLen) {
        var count = 0;
        var maxTime = this.elapsedTimes[0];
        var minTime = this.elapsedTimes[0];
        var totalTimeMicros = 0;
        for (var _i = 0, _a = this.elapsedTimes; _i < _a.length; _i++) {
            var elapsed = _a[_i];
            ++count;
            var timeMicros = elapsed.inMicroseconds;
            maxTime = maxTime.compareTo(elapsed) > 0 ? maxTime : elapsed;
            minTime = minTime.compareTo(elapsed) < 0 ? minTime : elapsed;
            totalTimeMicros += timeMicros;
        }
        var meanTime = new core.DartDouble((totalTimeMicros / count)).round();
        var sorted = (function (_) {
            {
                _.sort();
                return _;
            }
        })(this.elapsedTimes.toList());
        var time90th = sorted[new core.DartDouble((sorted.length * 0.9)).round() - 1];
        var time99th = sorted[new core.DartDouble((sorted.length * 0.99)).round() - 1];
        var differenceFromMeanSquared = 0;
        for (var _b = 0, _c = this.elapsedTimes; _b < _c.length; _b++) {
            var elapsed = _c[_b];
            var timeMicros = elapsed.inMicroseconds;
            var differenceFromMean = timeMicros - meanTime;
            differenceFromMeanSquared += differenceFromMean * differenceFromMean;
        }
        var variance = differenceFromMeanSquared / count;
        var standardDeviation = new core.DartDouble(math.sqrt(variance)).round();
        var sb = new core.DartStringBuffer();
        exports._printColumn(sb, this.tag, keyLen);
        exports._printColumn(sb, new core.DartInt(count).toString(), 6, {
            rightJustified: true
        });
        exports._printColumn(sb, new core.DartInt(this.errorCount).toString(), 6, {
            rightJustified: true
        });
        exports._printColumn(sb, new core.DartInt(this.unexpectedResultCount).toString(), 6, {
            rightJustified: true
        });
        this._printDuration(sb, new core.DartDuration({
            microseconds: meanTime
        }));
        this._printDuration(sb, time90th);
        this._printDuration(sb, time99th);
        this._printDuration(sb, new core.DartDuration({
            microseconds: standardDeviation
        }));
        this._printDuration(sb, minTime);
        this._printDuration(sb, maxTime);
        this._printDuration(sb, new core.DartDuration({
            microseconds: totalTimeMicros
        }));
        core.print(sb.toString());
    };
    Measurement.prototype.record = function (success, elapsed) {
        if (!success) {
            ++this.errorCount;
        }
        this.elapsedTimes.add(elapsed);
    };
    Measurement.prototype.recordUnexpectedResults = function () {
        ++this.unexpectedResultCount;
    };
    Measurement.prototype._printDuration = function (sb, duration) {
        exports._printColumn(sb, new core.DartInt(duration.inMilliseconds).toString(), 15, {
            rightJustified: true
        });
    };
    __decorate([
        utils_1.defaultConstructor
    ], Measurement.prototype, "Measurement", null);
    Measurement = __decorate([
        utils_1.DartClass
    ], Measurement);
    return Measurement;
}());
exports.Measurement = Measurement;
var Results = /** @class */ (function () {
    function Results() {
    }
    Results_1 = Results;
    Results.prototype.printResults = function () {
        core.print('');
        core.print('==================================================================');
        core.print('');
        var keys = (function (_) {
            {
                _.sort();
                return _;
            }
        })(this.measurements.keys.toList());
        var keyLen = keys.fold(0, function (len, key) {
            return math.max(len, new core.DartString(key).length);
        });
        this._printGroupHeader('Request/Response', keyLen);
        var totalCount = 0;
        var totalErrorCount = 0;
        var totalUnexpectedResultCount = 0;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var tag = keys_1[_i];
            var m = this.measurements.get(tag);
            if (!m.notification) {
                m.printSummary(keyLen);
                totalCount += m.count;
                totalErrorCount += m.errorCount;
                totalUnexpectedResultCount += m.unexpectedResultCount;
            }
        }
        this._printTotals(keyLen, totalCount, totalErrorCount, totalUnexpectedResultCount);
        core.print('');
        this._printGroupHeader('Notifications', keyLen);
        for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
            var tag = keys_2[_a];
            var m = this.measurements.get(tag);
            if (m.notification) {
                m.printSummary(keyLen);
            }
        }
        core.print(', n(1), uxr = UneXpected, Results_1, or, responses, received, from, the, server, n, that);
        do
            not;
        while (match);
        the;
        recorded;
        response;
        for (that; request.
        ; )
            ;
        n(2);
        all;
        times in milliseconds;
        ');;
    };
    Results.prototype.record = function (tag, elapsed, _namedArguments) {
        var _a = Object.assign({
            "notification": false,
            "success": true
        }, _namedArguments), notification = _a.notification, success = _a.success;
        var measurement = this.measurements.get(tag);
        if (utils_1.op(utils_1.Op.EQUALS, measurement, null)) {
            measurement = new Measurement(tag, notification);
            this.measurements.set(tag, measurement);
        }
        measurement.record(success, elapsed);
    };
    Results.prototype.recordUnexpectedResults = function (tag) {
        this.measurements.get(tag).recordUnexpectedResults();
    };
    Results.prototype._printGroupHeader = function (groupName, keyLen) {
        var sb = new core.DartStringBuffer();
        exports._printColumn(sb, groupName, keyLen);
        exports._printColumn(sb, 'count', 6, {
            rightJustified: true
        });
        exports._printColumn(sb, 'error', 6, {
            rightJustified: true
        });
        exports._printColumn(sb, 'uxr(1)', 6, {
            rightJustified: true
        });
        sb.write('  ');
        exports._printColumn(sb, 'mean(2)', 15);
        exports._printColumn(sb, '90th', 15);
        exports._printColumn(sb, '99th', 15);
        exports._printColumn(sb, 'std-dev', 15);
        exports._printColumn(sb, 'minimum', 15);
        exports._printColumn(sb, 'maximum', 15);
        exports._printColumn(sb, 'total', 15);
        core.print(sb.toString());
    };
    Results.prototype._printTotals = function (keyLen, totalCount, totalErrorCount, totalUnexpectedResultCount) {
        var sb = new core.DartStringBuffer();
        exports._printColumn(sb, 'Totals', keyLen);
        exports._printColumn(sb, new core.DartInt(totalCount).toString(), 6, {
            rightJustified: true
        });
        exports._printColumn(sb, new core.DartInt(totalErrorCount).toString(), 6, {
            rightJustified: true
        });
        exports._printColumn(sb, new core.DartInt(totalUnexpectedResultCount).toString(), 6, {
            rightJustified: true
        });
        core.print(sb.toString());
    };
    Results.prototype.Results = function () {
        this.measurements = new core.DartMap();
    };
    var Results_1;
    __decorate([
        utils_1.defaultConstructor
    ], Results.prototype, "Results", null);
    Results = Results_1 = __decorate([
        utils_1.DartClass
    ], Results);
    return Results;
}());
exports.Results = Results;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "SPACE", {
        get: function () {
            if (this.__$SPACE === undefined) {
                this.__$SPACE = new core.DartString(' ').codeUnitAt(0);
            }
            return this.__$SPACE;
        },
        set: function (__$value) {
            this.__$SPACE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=driver.js.map
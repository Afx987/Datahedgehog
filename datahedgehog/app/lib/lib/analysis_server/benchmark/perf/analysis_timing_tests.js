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
var io = require("@dart2ts/dart/io");
var lib4 = require("./performance_tests");
exports.main = function (arguments) {
    var parser = exports._createArgParser();
    var args = parser.parse(arguments);
    if (utils_1.op(utils_1.Op.EQUALS, utils_1.op(utils_1.Op.INDEX, args, properties.SOURCE_OPTION), null)) {
        core.print('path to source directory must be specified');
        io.exit(1);
    }
    properties.source = utils_1.op(utils_1.Op.INDEX, args, properties.SOURCE_OPTION);
    properties.priorityFile = utils_1.op(utils_1.Op.INDEX, args, properties.PRIORITY_FILE_OPTION);
    var names = utils_1.op(utils_1.Op.INDEX, args, properties.METRIC_NAME_OPTION);
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        properties.metricNames.add(name_1);
    }
    var test;
    if (properties.metricNames.isEmpty) {
        test = new AnalysisTimingTest();
    }
    else {
        test = new SubscriptionTimingTest();
    }
    async.Future.wait(new core.DartList.literal(test.test_timing()));
};
exports._createArgParser = function () {
    return (function (_) {
        {
            addOption(properties.METRIC_NAME_OPTION, {
                help: 'metric name (defaults to `analysis`)', allowMultiple: true
            });
            addOption(properties.SOURCE_OPTION, {
                help: 'full path to source directory for analysis'
            });
            addOption(properties.PRIORITY_FILE_OPTION, {
                help: '(optional) full path to a priority file'
            });
            return _;
        }
    })(new bare.createInstance(any, null));
};
var AnalysisTimingTest = /** @class */ (function (_super) {
    __extends(AnalysisTimingTest, _super);
    function AnalysisTimingTest() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    AnalysisTimingTest.prototype.test_timing = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init(properties.source)];
                    case 1:
                        _a.sent();
                        this.setAnalysisRoot();
                        this.stopwatch.start();
                        return [4 /*yield*/, this.analysisFinished];
                    case 2:
                        _a.sent();
                        core.print("analysis completed in " + this.stopwatch.elapsed);
                        return [4 /*yield*/, this.shutdown()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisTimingTest.prototype.AnalysisTimingTest = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisTimingTest.prototype, "AnalysisTimingTest", null);
    AnalysisTimingTest = __decorate([
        utils_1.DartClass
    ], AnalysisTimingTest);
    return AnalysisTimingTest;
}(lib4.AbstractTimingTest));
exports.AnalysisTimingTest = AnalysisTimingTest;
var Metric = /** @class */ (function () {
    function Metric(name, service, eventStream) {
    }
    Metric.prototype.Metric = function (name, service, eventStream) {
        this.timings = new core.DartList.literal();
        this.name = name;
        this.service = service;
        this.eventStream = eventStream;
    };
    Metric.prototype.toString = function () {
        return this.name + ": " + this.service + ", " + this.eventStream.runtimeType + ", " + this.timings;
    };
    __decorate([
        utils_1.defaultConstructor
    ], Metric.prototype, "Metric", null);
    Metric = __decorate([
        utils_1.DartClass
    ], Metric);
    return Metric;
}());
exports.Metric = Metric;
var SubscriptionTimingTest = /** @class */ (function (_super) {
    __extends(SubscriptionTimingTest, _super);
    function SubscriptionTimingTest() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    Object.defineProperty(SubscriptionTimingTest.prototype, "metrics", {
        get: function () {
            return this._metrics = (this._metrics) || (properties.metricNames.map(this.getMetric.bind(this)).toList());
        },
        enumerable: true,
        configurable: true
    });
    SubscriptionTimingTest.prototype.getMetric = function (name) {
        switch (name) {
            case 'folding':
                return new Metric(name, AnalysisService.FOLDING, this.onAnalysisFolding);
            case 'highlighting':
                return new Metric(name, AnalysisService.HIGHLIGHTS, this.onAnalysisHighlights);
            case 'implemented':
                return new Metric(name, AnalysisService.IMPLEMENTED, this.onAnalysisImplemented);
            case 'navigation':
                return new Metric(name, AnalysisService.NAVIGATION, this.onAnalysisNavigation);
            case 'outline':
                return new Metric(name, AnalysisService.OUTLINE, this.onAnalysisOutline);
            case 'occurences':
                return new Metric(name, AnalysisService.OCCURRENCES, this.onAnalysisOccurrences);
            case 'overrides':
                return new Metric(name, AnalysisService.OVERRIDES, this.onAnalysisOverrides);
        }
        core.print("no metric found for " + name);
        io.exit(1);
        return null;
    };
    SubscriptionTimingTest.prototype.test_timing = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var subscriptions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expect(this.metrics, isNotEmpty);
                        expect(properties.priorityFile, isNotNull, {
                            reason: 'A priority file must be specified for ' + (this.metrics.first.name + " testing.")
                        });
                        return [4 /*yield*/, this.init(properties.source)];
                    case 1:
                        _a.sent();
                        this.stopwatch.start();
                        this.metrics.forEach(function (m) {
                            return m.eventStream.listen(function (_) {
                                m.timings.add(new core.DartDuration({
                                    milliseconds: _this.stopwatch.elapsed.inMilliseconds
                                }));
                            });
                        });
                        subscriptions = new core.DartMap.literal([]);
                        this.metrics.forEach(function (m) {
                            return subscriptions.set(m.service, new core.DartList.literal(properties.priorityFile));
                        });
                        this.sendAnalysisSetSubscriptions(subscriptions);
                        this.setAnalysisRoot();
                        this.sendAnalysisSetPriorityFiles(new core.DartList.literal(properties.priorityFile));
                        return [4 /*yield*/, this.analysisFinished];
                    case 2:
                        _a.sent();
                        core.print("analysis completed in " + this.stopwatch.elapsed);
                        this.metrics.forEach(function (m) {
                            return core.print(m.name + " timings: " + m.timings);
                        });
                        return [4 /*yield*/, this.shutdown()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    SubscriptionTimingTest.prototype.SubscriptionTimingTest = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], SubscriptionTimingTest.prototype, "SubscriptionTimingTest", null);
    SubscriptionTimingTest = __decorate([
        utils_1.DartClass
    ], SubscriptionTimingTest);
    return SubscriptionTimingTest;
}(lib4.AbstractTimingTest));
exports.SubscriptionTimingTest = SubscriptionTimingTest;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "DEFAULT_METRIC", {
        get: function () {
            if (this.__$DEFAULT_METRIC === undefined) {
                this.__$DEFAULT_METRIC = 'analysis';
            }
            return this.__$DEFAULT_METRIC;
        },
        set: function (__$value) {
            this.__$DEFAULT_METRIC = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "METRIC_NAME_OPTION", {
        get: function () {
            if (this.__$METRIC_NAME_OPTION === undefined) {
                this.__$METRIC_NAME_OPTION = 'metric';
            }
            return this.__$METRIC_NAME_OPTION;
        },
        set: function (__$value) {
            this.__$METRIC_NAME_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "PRIORITY_FILE_OPTION", {
        get: function () {
            if (this.__$PRIORITY_FILE_OPTION === undefined) {
                this.__$PRIORITY_FILE_OPTION = 'priority';
            }
            return this.__$PRIORITY_FILE_OPTION;
        },
        set: function (__$value) {
            this.__$PRIORITY_FILE_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "SOURCE_OPTION", {
        get: function () {
            if (this.__$SOURCE_OPTION === undefined) {
                this.__$SOURCE_OPTION = 'source';
            }
            return this.__$SOURCE_OPTION;
        },
        set: function (__$value) {
            this.__$SOURCE_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "metricNames", {
        get: function () {
            if (this.__$metricNames === undefined) {
                this.__$metricNames = new core.DartList.literal();
            }
            return this.__$metricNames;
        },
        set: function (__$value) {
            this.__$metricNames = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "priorityFile", {
        get: function () {
            return this.__$priorityFile;
        },
        set: function (__$value) {
            this.__$priorityFile = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "source", {
        get: function () {
            return this.__$source;
        },
        set: function (__$value) {
            this.__$source = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=analysis_timing_tests.js.map
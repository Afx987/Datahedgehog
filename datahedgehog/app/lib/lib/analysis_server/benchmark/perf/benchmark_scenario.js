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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/benchmark_scenario.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var math = require("@dart2ts/dart/math");
var lib4 = require("./performance_tests");
var lib5 = require("./../../test/integration/support/integration_tests");
var io = require("@dart2ts/dart/io");
exports.printBenchmarkResults = function (id, description, times) {
    var minTime = times.fold(1 << 20, math.min);
    var now = new core.DartDateTime.now().toUtc().toIso8601String();
    core.print(now + " ========== " + id);
    core.print("times: " + times);
    core.print("min_time: " + minTime);
    core.print(new core.DartString(description).trim());
    core.print('--------------------');
    core.print('');
    core.print('');
};
var BenchmarkScenario = /** @class */ (function (_super) {
    __extends(BenchmarkScenario, _super);
    function BenchmarkScenario() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    BenchmarkScenario_1 = BenchmarkScenario;
    BenchmarkScenario.prototype.waitAnalyze_change_analyze = function (_namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, roots, file, fileChange, numOfRepeats, times, i, stopwatch;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Object.assign({}, _namedArguments), roots = _a.roots, file = _a.file, fileChange = _a.fileChange, numOfRepeats = _a.numOfRepeats;
                        lib5.outOfTestExpect(roots, isNotNull, {
                            reason: 'roots'
                        });
                        lib5.outOfTestExpect(file, isNotNull, {
                            reason: 'file'
                        });
                        lib5.outOfTestExpect(fileChange, isNotNull, {
                            reason: 'fileChange'
                        });
                        lib5.outOfTestExpect(numOfRepeats, isNotNull, {
                            reason: 'numOfRepeats'
                        });
                        return [4 /*yield*/, _super.prototype.setUp.call(this)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.subscribeToStatusNotifications()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.sendAnalysisSetAnalysisRoots(roots, new core.DartList.literal())];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.analysisFinished];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.sendAnalysisSetPriorityFiles(new core.DartList.literal(file))];
                    case 5:
                        _b.sent();
                        times = new core.DartList.literal();
                        i = 0;
                        _b.label = 6;
                    case 6:
                        if (!(i < numOfRepeats)) return [3 /*break*/, 12];
                        stopwatch = (function (_) {
                            {
                                _.start();
                                return _;
                            }
                        })(new core.DartStopwatch());
                        return [4 /*yield*/, this._applyFileChange(file, fileChange)];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, this.analysisFinished];
                    case 8:
                        _b.sent();
                        times.add(stopwatch.elapsed.inMilliseconds);
                        return [4 /*yield*/, this.sendAnalysisUpdateContent(new core.DartMap.literal([
                                [file, new bare.createInstance(any, null)]
                            ]))];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, this.analysisFinished];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11:
                        i++;
                        return [3 /*break*/, 6];
                    case 12: return [4 /*yield*/, this.shutdown()];
                    case 13:
                        _b.sent();
                        return [2 /*return*/, times];
                }
            });
        }); })());
    };
    BenchmarkScenario.prototype.waitAnalyze_change_getCompletion = function (_namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, roots, file, fileChange, completeAfterStr, numOfRepeats, times, i, updatedContent, completionOffset, completionDuration;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Object.assign({}, _namedArguments), roots = _a.roots, file = _a.file, fileChange = _a.fileChange, completeAfterStr = _a.completeAfterStr, numOfRepeats = _a.numOfRepeats;
                        lib5.outOfTestExpect(roots, isNotNull, {
                            reason: 'roots'
                        });
                        lib5.outOfTestExpect(file, isNotNull, {
                            reason: 'file'
                        });
                        lib5.outOfTestExpect(fileChange, isNotNull, {
                            reason: 'fileChange'
                        });
                        lib5.outOfTestExpect(completeAfterStr, isNotNull, {
                            reason: 'completeAfterStr'
                        });
                        lib5.outOfTestExpect(numOfRepeats, isNotNull, {
                            reason: 'numOfRepeats'
                        });
                        return [4 /*yield*/, _super.prototype.setUp.call(this)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.subscribeToStatusNotifications()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.sendAnalysisSetAnalysisRoots(roots, new core.DartList.literal())];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.analysisFinished];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.sendAnalysisSetPriorityFiles(new core.DartList.literal(file))];
                    case 5:
                        _b.sent();
                        times = new core.DartList.literal();
                        i = 0;
                        _b.label = 6;
                    case 6:
                        if (!(i < numOfRepeats)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this._applyFileChange(file, fileChange)];
                    case 7:
                        updatedContent = _b.sent();
                        completionOffset = BenchmarkScenario_1._indexOfEnd(file, updatedContent, completeAfterStr);
                        return [4 /*yield*/, this._measureCompletionTime(file, completionOffset)];
                    case 8:
                        completionDuration = _b.sent();
                        times.add(completionDuration.inMilliseconds);
                        return [4 /*yield*/, this.sendAnalysisUpdateContent(new core.DartMap.literal([
                                [file, new bare.createInstance(any, null)]
                            ]))];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, this.analysisFinished];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11:
                        i++;
                        return [3 /*break*/, 6];
                    case 12: return [4 /*yield*/, this.shutdown()];
                    case 13:
                        _b.sent();
                        return [2 /*return*/, times];
                }
            });
        }); })());
    };
    BenchmarkScenario.prototype.waitAnalyze_change_getRefactoring = function (_namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, roots, file, fileChange, refactoringAtStr, refactoringKind, refactoringOptions, numOfRepeats, times, i, updatedContent, refactoringOffset, refactoringDuration;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Object.assign({}, _namedArguments), roots = _a.roots, file = _a.file, fileChange = _a.fileChange, refactoringAtStr = _a.refactoringAtStr, refactoringKind = _a.refactoringKind, refactoringOptions = _a.refactoringOptions, numOfRepeats = _a.numOfRepeats;
                        lib5.outOfTestExpect(roots, isNotNull, {
                            reason: 'roots'
                        });
                        lib5.outOfTestExpect(file, isNotNull, {
                            reason: 'file'
                        });
                        lib5.outOfTestExpect(fileChange, isNotNull, {
                            reason: 'fileChange'
                        });
                        lib5.outOfTestExpect(refactoringAtStr, isNotNull, {
                            reason: 'refactoringAtStr'
                        });
                        lib5.outOfTestExpect(refactoringKind, isNotNull, {
                            reason: 'refactoringKind'
                        });
                        lib5.outOfTestExpect(refactoringOptions, isNotNull, {
                            reason: 'refactoringOptions'
                        });
                        lib5.outOfTestExpect(numOfRepeats, isNotNull, {
                            reason: 'numOfRepeats'
                        });
                        return [4 /*yield*/, _super.prototype.setUp.call(this)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.subscribeToStatusNotifications()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.sendAnalysisSetAnalysisRoots(roots, new core.DartList.literal())];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.analysisFinished];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.sendAnalysisSetPriorityFiles(new core.DartList.literal(file))];
                    case 5:
                        _b.sent();
                        times = new core.DartList.literal();
                        i = 0;
                        _b.label = 6;
                    case 6:
                        if (!(i < numOfRepeats)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this._applyFileChange(file, fileChange)];
                    case 7:
                        updatedContent = _b.sent();
                        refactoringOffset = BenchmarkScenario_1._indexOf(file, updatedContent, refactoringAtStr);
                        return [4 /*yield*/, this._measureRefactoringTime(file, refactoringOffset, refactoringKind, refactoringOptions)];
                    case 8:
                        refactoringDuration = _b.sent();
                        times.add(refactoringDuration.inMilliseconds);
                        return [4 /*yield*/, this.sendAnalysisUpdateContent(new core.DartMap.literal([
                                [file, new bare.createInstance(any, null)]
                            ]))];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, this.analysisFinished];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11:
                        i++;
                        return [3 /*break*/, 6];
                    case 12: return [4 /*yield*/, this.shutdown()];
                    case 13:
                        _b.sent();
                        return [2 /*return*/, times];
                }
            });
        }); })());
    };
    BenchmarkScenario.prototype._applyFileChange = function (file, desc) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var originalContent, updatedContent, offset, offset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originalContent = BenchmarkScenario_1._getFileContent(file);
                        if (desc.afterStr != null) {
                            offset = BenchmarkScenario_1._indexOfEnd(file, originalContent, desc.afterStr);
                            offset -= desc.afterStrBack;
                            updatedContent = new core.DartString(originalContent).substring(0, offset) + desc.insertStr + new core.DartString(originalContent).substring(offset);
                        }
                        else if (desc.replaceWhat != null) {
                            offset = BenchmarkScenario_1._indexOf(file, originalContent, desc.replaceWhat);
                            updatedContent = new core.DartString(originalContent).substring(0, offset) + desc.replaceWith + new core.DartString(originalContent).substring(offset + new core.DartString(desc.replaceWhat).length);
                        }
                        return [4 /*yield*/, this.sendAnalysisUpdateContent(new core.DartMap.literal([
                                [file, new bare.createInstance(any, null, updatedContent)]
                            ]))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, updatedContent];
                }
            });
        }); })());
    };
    BenchmarkScenario.prototype._measureCompletionTime = function (file, offset) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var stopwatch, completer, completionSubscription;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stopwatch = new core.DartStopwatch();
                        stopwatch.start();
                        completer = new async.DartCompleter();
                        completionSubscription = this.onCompletionResults.listen(function (_) {
                            completer.complete(stopwatch.elapsed);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 4, 5]);
                        return [4 /*yield*/, this.sendCompletionGetSuggestions(file, offset)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, completer.future];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        completionSubscription.cancel();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); })());
    };
    BenchmarkScenario.prototype._measureRefactoringTime = function (file, offset, refactoringKind, refactoringOptions) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var stopwatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stopwatch = new core.DartStopwatch();
                        stopwatch.start();
                        return [4 /*yield*/, this.sendEditGetRefactoring(refactoringKind, file, offset, 0, false, {
                                options: refactoringOptions
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, stopwatch.elapsed];
                }
            });
        }); })());
    };
    BenchmarkScenario.start_waitInitialAnalysis_shutdown = function (_namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, roots, numOfRepeats, times, i, instance, stopwatch;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Object.assign({}, _namedArguments), roots = _a.roots, numOfRepeats = _a.numOfRepeats;
                        lib5.outOfTestExpect(roots, isNotNull, {
                            reason: 'roots'
                        });
                        lib5.outOfTestExpect(numOfRepeats, isNotNull, {
                            reason: 'numOfRepeats'
                        });
                        times = new core.DartList.literal();
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < numOfRepeats)) return [3 /*break*/, 8];
                        instance = new BenchmarkScenario_1();
                        return [4 /*yield*/, instance.setUp()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, instance.subscribeToStatusNotifications()];
                    case 3:
                        _b.sent();
                        stopwatch = (function (_) {
                            {
                                _.start();
                                return _;
                            }
                        })(new core.DartStopwatch());
                        return [4 /*yield*/, instance.sendAnalysisSetAnalysisRoots(roots, new core.DartList.literal())];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, instance.analysisFinished];
                    case 5:
                        _b.sent();
                        times.add(stopwatch.elapsed.inMilliseconds);
                        return [4 /*yield*/, instance.shutdown()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/, times];
                }
            });
        }); })());
    };
    BenchmarkScenario._getFileContent = function (path) {
        var file = new io.File(path);
        lib5.outOfTestExpect(file.existsSync(), isTrue, {
            reason: "File " + path + " does not exist."
        });
        return file.readAsStringSync();
    };
    BenchmarkScenario._indexOf = function (file, where, what) {
        var index = new core.DartString(where).indexOf(what);
        lib5.outOfTestExpect(index, _common_1.isNot(-1), {
            reason: "Cannot find |" + what + "| in " + file + "."
        });
        return index;
    };
    BenchmarkScenario._indexOfEnd = function (file, where, what) {
        return BenchmarkScenario_1._indexOf(file, where, what) + new core.DartString(what).length;
    };
    BenchmarkScenario.prototype.BenchmarkScenario = function () {
    };
    var BenchmarkScenario_1;
    __decorate([
        utils_1.defaultConstructor
    ], BenchmarkScenario.prototype, "BenchmarkScenario", null);
    BenchmarkScenario = BenchmarkScenario_1 = __decorate([
        utils_1.DartClass
    ], BenchmarkScenario);
    return BenchmarkScenario;
}(lib4.AbstractTimingTest));
exports.BenchmarkScenario = BenchmarkScenario;
var FileChange = /** @class */ (function () {
    function FileChange(_namedArguments) {
    }
    FileChange.prototype.FileChange = function (_namedArguments) {
        var _a = Object.assign({
            "afterStrBack": 0
        }, _namedArguments), afterStr = _a.afterStr, afterStrBack = _a.afterStrBack, insertStr = _a.insertStr, replaceWhat = _a.replaceWhat, replaceWith = _a.replaceWith;
        this.afterStr = afterStr;
        this.afterStrBack = afterStrBack;
        this.insertStr = insertStr;
        this.replaceWhat = replaceWhat;
        this.replaceWith = replaceWith;
        if (this.afterStr != null) {
            lib5.outOfTestExpect(this.insertStr, isNotNull, {
                reason: 'insertStr'
            });
        }
        else if (this.replaceWhat != null) {
            lib5.outOfTestExpect(this.replaceWith, isNotNull, {
                reason: 'replaceWith'
            });
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], FileChange.prototype, "FileChange", null);
    FileChange = __decorate([
        utils_1.DartClass
    ], FileChange);
    return FileChange;
}());
exports.FileChange = FileChange;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=benchmark_scenario.js.map
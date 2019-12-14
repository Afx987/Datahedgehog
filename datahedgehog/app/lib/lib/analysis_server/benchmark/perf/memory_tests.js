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
var math = require("@dart2ts/dart/math");
var lib4 = require("./../../test/integration/support/integration_tests");
var io = require("@dart2ts/dart/io");
var convert = require("@dart2ts/dart/convert");
exports.printMemoryResults = function (id, description, sizes) {
    var minMemory = sizes.fold(sizes.first, math.min);
    var maxMemory = sizes.fold(sizes.first, math.max);
    var now = new core.DartDateTime.now().toUtc().toIso8601String();
    core.print(now + " ========== " + id);
    core.print("memory: " + sizes);
    core.print("min_memory: " + minMemory);
    core.print("max_memory: " + maxMemory);
    core.print(new core.DartString(description).trim());
    core.print('--------------------');
    core.print('');
    core.print('');
};
var AnalysisServerMemoryUsageTest = /** @class */ (function (_super) {
    __extends(AnalysisServerMemoryUsageTest, _super);
    function AnalysisServerMemoryUsageTest() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    AnalysisServerMemoryUsageTest_1 = AnalysisServerMemoryUsageTest;
    Object.defineProperty(AnalysisServerMemoryUsageTest, "vmServicePort", {
        get: function () {
            if (this.__$vmServicePort === undefined) {
                this.__$vmServicePort = 12345;
            }
            return this.__$vmServicePort;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisServerMemoryUsageTest.prototype.getMemoryUsage = function () {
        var result = this._run('curl', new core.DartList.literal("localhost:" + AnalysisServerMemoryUsageTest_1.vmServicePort + "/_getAllocationProfile?isolateId=isolates/root&gc=full"));
        var json = convert.properties.JSON.decode(result.stdout);
        var heaps = utils_1.op(utils_1.Op.INDEX, json.get('result'), 'heaps');
        var newSpace = utils_1.op(utils_1.Op.INDEX, heaps.get('new'), 'used');
        var oldSpace = utils_1.op(utils_1.Op.INDEX, heaps.get('old'), 'used');
        return newSpace + oldSpace;
    };
    AnalysisServerMemoryUsageTest.prototype.setAnalysisRoot = function () {
        return this.sendAnalysisSetAnalysisRoots(new core.DartList.literal(this.sourceDirectory.path), new core.DartList.literal());
    };
    AnalysisServerMemoryUsageTest.prototype.setUp = function () {
        var _this = this;
        this.onAnalysisErrors.listen(function (params) {
            utils_1.op(utils_1.Op.INDEX_ASSIGN, _this.currentAnalysisErrors, params.file, params.errors);
        });
        this.onServerError.listen(function (params) {
            fail(params.message + "\n" + params.stackTrace);
        });
        var serverConnected = new async.DartCompleter();
        this.onServerConnected.listen(function (_) {
            lib4.outOfTestExpect(serverConnected.isCompleted, isFalse);
            serverConnected.complete();
        });
        return this.startServer({
            servicesPort: AnalysisServerMemoryUsageTest_1.vmServicePort
        }).then(function (_) {
            _this.server.listenToOutput(_this.dispatchNotification.bind(_this));
            _this.server.exitCode.then(function (_) {
                _this.skipShutdown = true;
            });
            return serverConnected.future;
        });
    };
    AnalysisServerMemoryUsageTest.prototype.shutdown = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shutdownIfNeeded()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); })());
    };
    AnalysisServerMemoryUsageTest.prototype.subscribeToStatusNotifications = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendServerSetSubscriptions(new core.DartList.literal(ServerService.STATUS))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisServerMemoryUsageTest.prototype._run = function (executable, arguments) {
        return io.Process.runSync(executable, arguments, {
            stderrEncoding: convert.properties.UTF8, stdoutEncoding: convert.properties.UTF8
        });
    };
    AnalysisServerMemoryUsageTest.start_waitInitialAnalysis_shutdown = function (_namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, roots, numOfRepeats, sizes, i, test;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Object.assign({}, _namedArguments), roots = _a.roots, numOfRepeats = _a.numOfRepeats;
                        lib4.outOfTestExpect(roots, isNotNull, {
                            reason: 'roots'
                        });
                        lib4.outOfTestExpect(numOfRepeats, isNotNull, {
                            reason: 'numOfRepeats'
                        });
                        sizes = new core.DartList.literal();
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < numOfRepeats)) return [3 /*break*/, 8];
                        test = new AnalysisServerMemoryUsageTest_1();
                        return [4 /*yield*/, test.setUp()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, test.subscribeToStatusNotifications()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, test.sendAnalysisSetAnalysisRoots(roots, new core.DartList.literal())];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, test.analysisFinished];
                    case 5:
                        _b.sent();
                        sizes.add(test.getMemoryUsage());
                        return [4 /*yield*/, test.shutdown()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/, sizes];
                }
            });
        }); })());
    };
    AnalysisServerMemoryUsageTest.prototype.AnalysisServerMemoryUsageTest = function () {
    };
    var AnalysisServerMemoryUsageTest_1;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisServerMemoryUsageTest.prototype, "setUp", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisServerMemoryUsageTest.prototype, "AnalysisServerMemoryUsageTest", null);
    AnalysisServerMemoryUsageTest = AnalysisServerMemoryUsageTest_1 = __decorate([
        utils_1.DartClass
    ], AnalysisServerMemoryUsageTest);
    return AnalysisServerMemoryUsageTest;
}(lib4.AbstractAnalysisServerIntegrationTest));
exports.AnalysisServerMemoryUsageTest = AnalysisServerMemoryUsageTest;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=memory_tests.js.map
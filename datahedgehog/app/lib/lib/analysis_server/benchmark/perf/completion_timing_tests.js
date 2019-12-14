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
    properties.offset = core.DartInt.parse(utils_1.op(utils_1.Op.INDEX, args, properties.COMPLETION_OFFSET));
    async.Future.wait(new core.DartList.literal(new CompletionTimingTest().test_timing()));
};
exports._createArgParser = function () {
    return (function (_) {
        {
            addOption(properties.SOURCE_OPTION, {
                help: 'full path to source directory for analysis'
            });
            addOption(properties.PRIORITY_FILE_OPTION, {
                help: 'full path to a priority file'
            });
            addOption(properties.COMPLETION_OFFSET, {
                help: 'offset in file for code completions'
            });
            return _;
        }
    })(new bare.createInstance(any, null));
};
var CompletionTimingTest = /** @class */ (function (_super) {
    __extends(CompletionTimingTest, _super);
    function CompletionTimingTest() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    CompletionTimingTest.prototype.test_timing = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expect(properties.priorityFile, isNotNull, {
                            reason: 'A priority file must be specified for completion testing.'
                        });
                        expect(properties.offset, isNotNull, {
                            reason: 'An offset must be specified for completion testing.'
                        });
                        return [4 /*yield*/, this.init(properties.source)];
                    case 1:
                        _a.sent();
                        this.stopwatch.start();
                        this.onCompletionResults.listen(function (_) {
                            _this.timings.add(new core.DartDuration({
                                milliseconds: _this.stopwatch.elapsed.inMilliseconds
                            }));
                        });
                        this.setAnalysisRoot();
                        this.sendAnalysisSetPriorityFiles(new core.DartList.literal(properties.priorityFile));
                        this.sendCompletionGetSuggestions(properties.priorityFile, properties.offset);
                        return [4 /*yield*/, this.analysisFinished];
                    case 2:
                        _a.sent();
                        core.print("analysis completed in " + this.stopwatch.elapsed);
                        core.print("completion received at : " + this.timings);
                        return [4 /*yield*/, this.shutdown()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    CompletionTimingTest.prototype.CompletionTimingTest = function () {
        this.timings = new core.DartList.literal();
    };
    __decorate([
        utils_1.defaultConstructor
    ], CompletionTimingTest.prototype, "CompletionTimingTest", null);
    CompletionTimingTest = __decorate([
        utils_1.DartClass
    ], CompletionTimingTest);
    return CompletionTimingTest;
}(lib4.AbstractTimingTest));
exports.CompletionTimingTest = CompletionTimingTest;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "COMPLETION_OFFSET", {
        get: function () {
            if (this.__$COMPLETION_OFFSET === undefined) {
                this.__$COMPLETION_OFFSET = 'offset';
            }
            return this.__$COMPLETION_OFFSET;
        },
        set: function (__$value) {
            this.__$COMPLETION_OFFSET = __$value;
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
    Object.defineProperty(properties, "offset", {
        get: function () {
            return this.__$offset;
        },
        set: function (__$value) {
            this.__$offset = __$value;
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
//# sourceMappingURL=completion_timing_tests.js.map
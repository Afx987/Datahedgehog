"use strict";
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
var lib3 = require("./benchmark_scenario");
var lib4 = require("./memory_tests");
exports.main = function (args) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var length, id, _i, _a, id_1, benchmark, benchmark;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                length = args.length;
                if (length < 1) {
                    core.print('Usage: dart benchmark_local.dart path_to_flutter_checkout' + ' [benchmark_id]');
                    return [2 /*return*/];
                }
                properties.paths = new PathHolder({
                    flutterPath: args[0]
                });
                id = args.length >= 2 ? args[1] : null;
                if (!(id == null)) return [3 /*break*/, 5];
                _i = 0, _a = properties.benchmarks.keys;
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                id_1 = _a[_i];
                benchmark = properties.benchmarks.get(id_1);
                return [4 /*yield*/, benchmark(id_1)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 6];
            case 5:
                benchmark = properties.benchmarks.get(id);
                if (benchmark != null) {
                    benchmark(id);
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); })()); };
exports.run_flutter_change_1 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Open \'packages/flutter\'.;
        return [2 /*return*/];
    });
}); })); };
n2.Change;
a;
method;
body in lib / src / painting / colors.dart;
n3.Measure;
the;
time;
to;
finish;
analysis.
;
n4.Rollback;
changes;
to;
the;
file;
and;
wait;
for (analysis.
; ; )
    ;
n5.Go;
to(2).
;
n;
';;
var times = yield new lib3.BenchmarkScenario().waitAnalyze_change_analyze({
    roots: new core.DartList.literal(properties.paths.packageFlutter), file: properties.paths.packageFlutter + "/lib/src/painting/colors.dart", fileChange: new lib3.FileChange({
        afterStr: 'final double h = hue % 360;', insertStr: 'print(12345);'
    }), numOfRepeats: 10
});
lib3.printBenchmarkResults(id, description, times);
();
;
exports.run_flutter_change_2 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Open \'packages/flutter\'.;
        return [2 /*return*/];
    });
}); })); };
n2.Change;
the;
name;
of;
a;
method in lib / src / painting / colors.dart;
n3.Measure;
the;
time;
to;
finish;
analysis.
;
n4.Rollback;
changes;
to;
the;
file;
and;
wait;
for (analysis.
; ; )
    ;
n5.Go;
to(2).
;
n;
';;
var times = yield new lib3.BenchmarkScenario().waitAnalyze_change_analyze({
    roots: new core.DartList.literal(properties.paths.packageFlutter), file: properties.paths.packageFlutter + "/lib/src/painting/colors.dart", fileChange: new lib3.FileChange({
        afterStr: 'withValue(dou', afterStrBack: 4, insertStr: 'NewName'
    }), numOfRepeats: 5
});
lib3.printBenchmarkResults(id, description, times);
();
;
exports.run_flutter_completion_1 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Open \'packages/flutter\'.;
        return [2 /*return*/];
    });
}); })); };
n2.Change;
a;
method;
body in packages / flutter / lib / src / material / button.dart;
n3.Request;
code;
completion in this;
method;
and;
measure;
time;
to;
get;
results.
;
n4.Rollback;
changes;
to;
the;
file;
and;
wait;
for (analysis.
; ; )
    ;
n5.Go;
to(2).
;
n;
';;
var completionMarker = 'print(12345);';
var times = yield new lib3.BenchmarkScenario().waitAnalyze_change_getCompletion({
    roots: new core.DartList.literal(properties.paths.packageFlutter), file: properties.paths.packageFlutter + "/lib/src/material/button.dart", fileChange: new lib3.FileChange({
        afterStr: 'Widget build(BuildContext context) {', insertStr: completionMarker
    }), completeAfterStr: completionMarker, numOfRepeats: 10
});
lib3.printBenchmarkResults(id, description, times);
();
;
exports.run_flutter_completion_2 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Open \'packages/flutter\'.;
        return [2 /*return*/];
    });
}); })); };
n2.Change;
the;
name;
of;
a;
method in lib / src / rendering / layer.dart;
n3.Request;
code;
completion in this;
method;
and;
measure;
time;
to;
get;
results.
;
n4.Rollback;
changes;
to;
the;
file;
and;
wait;
for (analysis.
; ; )
    ;
n5.Go;
to(2).
;
n;
';;
var times = yield new lib3.BenchmarkScenario().waitAnalyze_change_getCompletion({
    roots: new core.DartList.literal(properties.paths.packageFlutter), file: properties.paths.packageFlutter + "/lib/src/rendering/layer.dart", fileChange: new lib3.FileChange({
        replaceWhat: 'void removeAllChildren() {', replaceWith: 'void removeAllChildren2() {print(12345);parent.'
    }), completeAfterStr: 'print(12345);parent.', numOfRepeats: 5
});
lib3.printBenchmarkResults(id, description, times);
();
;
exports.run_flutter_initialAnalysis_1 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Start server, set \'hello_world\' analysis root.;
        return [2 /*return*/];
    });
}); })); };
n2.Measure;
the;
time;
to;
finish;
initial;
analysis.
;
n3.Shutdown;
the;
server.
;
n4.Go;
to(1).
;
n;
';;
var times = yield lib3.BenchmarkScenario.start_waitInitialAnalysis_shutdown({
    roots: new core.DartList.literal(properties.paths.exampleHelloWorld), numOfRepeats: 5
});
lib3.printBenchmarkResults(id, description, times);
();
;
exports.run_flutter_initialAnalysis_2 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Start server, set \'hello_world\' and \'flutter_gallery\' analysis roots.;
        return [2 /*return*/];
    });
}); })); };
n2.Measure;
the;
time;
to;
finish;
initial;
analysis.
;
n3.Shutdown;
the;
server.
;
n4.Go;
to(1).
;
n;
';;
var times = yield lib3.BenchmarkScenario.start_waitInitialAnalysis_shutdown({
    roots: new core.DartList.literal(properties.paths.exampleHelloWorld, properties.paths.exampleGallery), numOfRepeats: 5
});
lib3.printBenchmarkResults(id, description, times);
();
;
exports.run_flutter_memory_initialAnalysis_1 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Start server, set \'packages/flutter\' as the analysis root.;
        return [2 /*return*/];
    });
}); })); };
n2.Measure;
the;
memory;
usage;
after;
finishing;
initial;
analysis.
;
n3.Shutdown;
the;
server.
;
n4.Go;
to(1).
;
n;
';;
var sizes = yield lib4.AnalysisServerMemoryUsageTest.start_waitInitialAnalysis_shutdown({
    roots: new core.DartList.literal(properties.paths.packageFlutter), numOfRepeats: 3
});
lib4.printMemoryResults(id, description, sizes);
();
;
exports.run_flutter_memory_initialAnalysis_2 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Start server, set \'packages/flutter\' and \'packages/flutter_markdown\' analysis roots.;
        return [2 /*return*/];
    });
}); })); };
n2.Measure;
the;
memory;
usage;
after;
finishing;
initial;
analysis.
;
n3.Shutdown;
the;
server.
;
n4.Go;
to(1).
;
n;
';;
var sizes = yield lib4.AnalysisServerMemoryUsageTest.start_waitInitialAnalysis_shutdown({
    roots: new core.DartList.literal(properties.paths.packageFlutter, properties.paths.packageMarkdown), numOfRepeats: 3
});
lib4.printMemoryResults(id, description, sizes);
();
;
exports.run_flutter_refactoring_1 = function (id) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var description;
    return __generator(this, function (_a) {
        description = '1. Open \'packages/flutter\'.;
        return [2 /*return*/];
    });
}); })); };
n2.Change;
the;
name;
of;
a;
method in lib / src / rendering / layer.dart;
n3.Request;
rename;
refactoring;
for ("getSourcesWithFullName"; and; measure)
    time;
to;
get;
results.
;
n4.Rollback;
changes;
to;
the;
file;
and;
wait;
for (analysis.
; ; )
    ;
n5.Go;
to(2).
;
n;
';;
var times = yield new lib3.BenchmarkScenario().waitAnalyze_change_getRefactoring({
    roots: new core.DartList.literal(properties.paths.packageFlutter), file: properties.paths.packageFlutter + "/lib/src/rendering/layer.dart", fileChange: new lib3.FileChange({
        replaceWhat: 'void removeAllChildren() {', replaceWith: 'void removeAllChildren2() {'
    }), refactoringAtStr: 'addToScene(ui.SceneBuilder builder', refactoringKind: RefactoringKind.RENAME, refactoringOptions: new bare.createInstance(any, null, 'addToScene2'), numOfRepeats: 5
});
lib3.printBenchmarkResults(id, description, times);
();
;
var PathHolder = /** @class */ (function () {
    function PathHolder(_namedArguments) {
    }
    PathHolder.prototype.PathHolder = function (_namedArguments) {
        var flutterPath = Object.assign({}, _namedArguments).flutterPath;
        this.exampleHelloWorld = flutterPath + "/examples/hello_world";
        this.exampleGallery = flutterPath + "/examples/flutter_gallery";
        this.exampleStocks = flutterPath + "/examples/stocks";
        this.packageFlutter = flutterPath + "/packages/flutter";
        this.packageMarkdown = flutterPath + "/packages/flutter_markdown";
        this.packageSprites = flutterPath + "/packages/flutter_sprites";
    };
    __decorate([
        utils_1.defaultConstructor
    ], PathHolder.prototype, "PathHolder", null);
    PathHolder = __decorate([
        utils_1.DartClass
    ], PathHolder);
    return PathHolder;
}());
exports.PathHolder = PathHolder;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "benchmarks", {
        get: function () {
            if (this.__$benchmarks === undefined) {
                this.__$benchmarks = new core.DartMap.literal([
                    ['flutter-initialAnalysis-1', exports.run_flutter_initialAnalysis_1],
                    ['flutter-initialAnalysis-2', exports.run_flutter_initialAnalysis_2],
                    ['flutter-change-1', exports.run_flutter_change_1],
                    ['flutter-change-2', exports.run_flutter_change_2],
                    ['flutter-completion-1', exports.run_flutter_completion_1],
                    ['flutter-completion-2', exports.run_flutter_completion_2],
                    ['flutter-refactoring-1', exports.run_flutter_refactoring_1],
                    ['flutter-memory-initialAnalysis-1', exports.run_flutter_memory_initialAnalysis_1],
                    ['flutter-memory-initialAnalysis-2', exports.run_flutter_memory_initialAnalysis_2]
                ]);
            }
            return this.__$benchmarks;
        },
        set: function (__$value) {
            this.__$benchmarks = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "paths", {
        get: function () {
            return this.__$paths;
        },
        set: function (__$value) {
            this.__$paths = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=benchmark_flutter.js.map
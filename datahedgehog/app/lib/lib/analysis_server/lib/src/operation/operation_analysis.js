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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/operation/operation_analysis.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/analysis_server/lib/src/protocol_server");
exports.runWithActiveContext = function (context, f) {
    if (_common_1.is(context, any) && !context.isActive) {
        context.isActive = true;
        try {
            return f();
        }
        finally {
            context.isActive = false;
        }
    }
    else {
        return f();
    }
};
exports.scheduleImplementedNotification = function (server, files) { return new async.Future.fromPromise((function () { return __awaiter(void 0, void 0, void 0, function () {
    var searchEngine, _i, files_1, file, unitElement, computer, params, __error__1, stackTrace, exception;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchEngine = server.searchEngine;
                if (utils_1.op(utils_1.Op.EQUALS, searchEngine, null)) {
                    return [2 /*return*/];
                }
                _i = 0, files_1 = files;
                _a.label = 1;
            case 1:
                if (!(_i < files_1.length)) return [3 /*break*/, 6];
                file = files_1[_i];
                unitElement = server.getCompilationUnitElement(file);
                if (!(unitElement != null)) return [3 /*break*/, 5];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                computer = new bare.createInstance(any, null, searchEngine, unitElement);
                return [4 /*yield*/, computer.compute()];
            case 3:
                _a.sent();
                params = new bare.createInstance(any, null, file, computer.classes, computer.members);
                server.sendNotification(params.toNotification());
                return [3 /*break*/, 5];
            case 4:
                __error__1 = _a.sent();
                {
                    stackTrace = new core.DartStackTrace.fromError(__error__1);
                    exception = __error__1;
                    server.sendServerErrorNotification('Failed to send analysis.implemented notification.', exception, stackTrace);
                }
                return [3 /*break*/, 5];
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); })()); };
exports.scheduleIndexOperation = function (server, file, dartUnit) {
    if (server.index != null) {
        var context = resolutionMap.elementDeclaredByCompilationUnit(dartUnit).context;
        server.addOperation(new _DartIndexOperation(context, file, dartUnit));
    }
};
exports.scheduleNotificationOperations = function (server, source, file, lineInfo, context, parsedDartUnit, resolvedDartUnit, errors) {
    var containingContext = server.getContainingContext(file);
    if (containingContext != null && context != containingContext) {
        return;
    }
    var dartUnit = (resolvedDartUnit || parsedDartUnit);
    if (resolvedDartUnit != null) {
        if (server.hasAnalysisSubscription(lib3.AnalysisService.HIGHLIGHTS, file)) {
            server.scheduleOperation(new _DartHighlightsOperation(context, file, resolvedDartUnit));
        }
        if (server.hasAnalysisSubscription(lib3.AnalysisService.NAVIGATION, file)) {
            server.scheduleOperation(new NavigationOperation(context, source));
        }
        if (server.hasAnalysisSubscription(lib3.AnalysisService.OCCURRENCES, file)) {
            server.scheduleOperation(new OccurrencesOperation(context, source));
        }
        if (server.hasAnalysisSubscription(lib3.AnalysisService.OVERRIDES, file)) {
            server.scheduleOperation(new _DartOverridesOperation(context, file, resolvedDartUnit));
        }
    }
    if (dartUnit != null) {
        if (server.hasAnalysisSubscription(lib3.AnalysisService.OUTLINE, file)) {
            var sourceKind = context.getKindOf(source);
            server.scheduleOperation(new _DartOutlineOperation(context, file, lineInfo, sourceKind, dartUnit));
        }
    }
    if (server.shouldSendErrorsNotificationFor(file)) {
        server.scheduleOperation(new _NotificationErrorsOperation(context, file, lineInfo, errors));
    }
};
exports.sendAnalysisNotificationAnalyzedFiles = function (server) {
    exports._sendNotification(server, function () {
        var analyzedFiles;
        if (server.options.enableNewAnalysisDriver) {
            analyzedFiles = server.driverMap.values.map(function (driver) {
                return driver.knownFiles;
            }).expand(function (files) {
                return files;
            }).toSet();
        }
        else {
            var collector = new bare.createInstance(any, null, server.analysisContexts.toList());
            analyzedFiles = collector.collectLibraryDependencies();
        }
        var prevAnalyzedFiles = server.prevAnalyzedFiles;
        if (prevAnalyzedFiles != null && prevAnalyzedFiles.length == analyzedFiles.length && prevAnalyzedFiles.difference(analyzedFiles).isEmpty) {
            return;
        }
        server.prevAnalyzedFiles = analyzedFiles;
        var params = new bare.createInstance(any, null, analyzedFiles.toList());
        server.sendNotification(params.toNotification());
    });
};
exports.sendAnalysisNotificationErrors = function (server, context, file, lineInfo, errors) {
    exports._sendNotification(server, function () {
        if (errors == null) {
            errors = new core.DartList.literal();
        }
        var analysisOptions = context.analysisOptions;
        var serverErrors = null /*topLevl*/.doAnalysisError_listFromEngine(analysisOptions, lineInfo, errors);
        var params = new bare.createInstance(any, null, file, serverErrors);
        server.sendNotification(params.toNotification());
    });
};
exports.sendAnalysisNotificationFlushResults = function (server, files) {
    exports._sendNotification(server, function () {
        if (files != null && files.isNotEmpty) {
            var params = new bare.createInstance(any, null, files);
            server.sendNotification(params.toNotification());
        }
    });
};
exports.sendAnalysisNotificationHighlights = function (server, file, dartUnit) {
    exports._sendNotification(server, function () {
        var regions;
        if (server.options.useAnalysisHighlight2) {
            regions = new bare.createInstance(any, null, dartUnit).compute();
        }
        else {
            regions = new bare.createInstance(any, null, dartUnit).compute();
        }
        var params = new bare.createInstance(any, null, file, regions);
        server.sendNotification(params.toNotification());
    });
};
exports.sendAnalysisNotificationNavigation = function (server, context, source) {
    exports._sendNotification(server, function () {
        var collector = computeNavigation(server, context, source, null, null);
        var file = source.fullName;
        var params = new bare.createInstance(any, null, file, collector.regions, collector.targets, collector.files);
        server.sendNotification(params.toNotification());
    });
};
exports.sendAnalysisNotificationOccurrences = function (server, context, source) {
    exports._sendNotification(server, function () {
        var collector = computeOccurrences(server, context, source);
        var file = source.fullName;
        var params = new bare.createInstance(any, null, file, collector.allOccurrences);
        server.sendNotification(params.toNotification());
    });
};
exports.sendAnalysisNotificationOutline = function (server, file, lineInfo, sourceKind, dartUnit) {
    exports._sendNotification(server, function () {
        var fileKind = lib3.FileKind.LIBRARY;
        if (utils_1.op(utils_1.Op.EQUALS, sourceKind, SourceKind.LIBRARY)) {
            fileKind = lib3.FileKind.LIBRARY;
        }
        else if (utils_1.op(utils_1.Op.EQUALS, sourceKind, SourceKind.PART)) {
            fileKind = lib3.FileKind.PART;
        }
        var libraryName = exports._computeLibraryName(dartUnit);
        var computer = new bare.createInstance(any, null, file, lineInfo, dartUnit);
        var outline = computer.compute();
        var params = new bare.createInstance(any, null, file, fileKind, outline, {
            libraryName: libraryName
        });
        server.sendNotification(params.toNotification());
    });
};
exports.sendAnalysisNotificationOverrides = function (server, file, dartUnit) {
    exports._sendNotification(server, function () {
        var overrides = new bare.createInstance(any, null, dartUnit).compute();
        var params = new bare.createInstance(any, null, file, overrides);
        server.sendNotification(params.toNotification());
    });
};
exports._computeLibraryName = function (unit) {
    for (var _i = 0, _a = unit.directives; _i < _a.length; _i++) {
        var directive = _a[_i];
        if (_common_1.is(directive, any) && directive.name != null) {
            return directive.name.name;
        }
    }
    for (var _b = 0, _c = unit.directives; _b < _c.length; _b++) {
        var directive = _c[_b];
        if (_common_1.is(directive, any) && directive.libraryName != null) {
            return directive.libraryName.name;
        }
    }
    return null;
};
exports._sendNotification = function (server, f) {
    ServerPerformanceStatistics.notices.makeCurrentWhile(function () {
        try {
            f();
        }
        catch (__error__) {
            {
                var stackTrace = new core.DartStackTrace.fromError(__error__);
                var exception = __error__;
                server.sendServerErrorNotification('Failed to send notification', exception, stackTrace);
            }
        }
    });
};
var PerformAnalysisOperation = /** @class */ (function (_super) {
    __extends(PerformAnalysisOperation, _super);
    function PerformAnalysisOperation(context, isContinue) {
        var _this = this;
        return _this;
    }
    PerformAnalysisOperation_1 = PerformAnalysisOperation;
    PerformAnalysisOperation.prototype.PerformAnalysisOperation = function (context, isContinue) {
        _super.prototype.DartObject.call(this, context);
        this.isContinue = isContinue;
    };
    Object.defineProperty(PerformAnalysisOperation.prototype, "priority", {
        get: function () {
            if (this._isPriorityContext) {
                if (this.isContinue) {
                    return ServerOperationPriority.PRIORITY_ANALYSIS_CONTINUE;
                }
                else {
                    return ServerOperationPriority.PRIORITY_ANALYSIS;
                }
            }
            else {
                if (this.isContinue) {
                    return ServerOperationPriority.ANALYSIS_CONTINUE;
                }
                else {
                    return ServerOperationPriority.ANALYSIS;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerformAnalysisOperation.prototype, "_isPriorityContext", {
        get: function () {
            return _common_1.is(context, any) && context.prioritySources.isNotEmpty;
        },
        enumerable: true,
        configurable: true
    });
    PerformAnalysisOperation.prototype.perform = function (server) {
        var _this = this;
        if (!this.isContinue) {
            this._setContextActive(true);
        }
        var result = context.performAnalysisTask();
        var notices = result.changeNotices;
        if (notices == null) {
            server.scheduleCacheConsistencyValidation(context);
            this._setContextActive(false);
            server.sendContextAnalysisDoneNotifications(context, AnalysisDoneReason.COMPLETE);
            return;
        }
        ServerPerformanceStatistics.notices.makeCurrentWhile(function () {
            _this._sendNotices(server, notices);
            _this._updateIndex(server, notices);
        });
        server.addOperation(new PerformAnalysisOperation_1(context, true));
    };
    PerformAnalysisOperation.prototype._sendNotices = function (server, notices) {
        for (var i = 0; i < notices.length; i++) {
            var notice = notices[i];
            var source = notice.source;
            var file = source.fullName;
            var parsedDartUnit = notice.parsedDartUnit;
            var resolvedDartUnit = notice.resolvedDartUnit;
            exports.scheduleNotificationOperations(server, source, file, notice.lineInfo, context, parsedDartUnit, resolvedDartUnit, notice.errors);
            server.fileAnalyzed(notice);
        }
    };
    PerformAnalysisOperation.prototype._setContextActive = function (active) {
        var context = this.context;
        if (_common_1.is(context, any)) {
            context.isActive = active;
        }
    };
    PerformAnalysisOperation.prototype._updateIndex = function (server, notices) {
        if (utils_1.op(utils_1.Op.EQUALS, server.index, null)) {
            return;
        }
        for (var _i = 0, notices_1 = notices; _i < notices_1.length; _i++) {
            var notice = notices_1[_i];
            var file = notice.source.fullName;
            try {
                var dartUnit = notice.resolvedDartUnit;
                if (dartUnit != null) {
                    exports.scheduleIndexOperation(server, file, dartUnit);
                }
            }
            catch (__error__) {
                {
                    var stackTrace = new core.DartStackTrace.fromError(__error__);
                    var exception = __error__;
                    server.sendServerErrorNotification("Failed to index Dart file: " + file, exception, stackTrace);
                }
            }
        }
    };
    var PerformAnalysisOperation_1;
    __decorate([
        utils_1.defaultConstructor
    ], PerformAnalysisOperation.prototype, "PerformAnalysisOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PerformAnalysisOperation.prototype, "priority", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PerformAnalysisOperation.prototype, "perform", null);
    PerformAnalysisOperation = PerformAnalysisOperation_1 = __decorate([
        utils_1.DartClass
    ], PerformAnalysisOperation);
    return PerformAnalysisOperation;
}(any));
exports.PerformAnalysisOperation = PerformAnalysisOperation;
var _NotificationOperation = /** @class */ (function (_super) {
    __extends(_NotificationOperation, _super);
    function _NotificationOperation(context, source) {
        var _this = this;
        return _this;
    }
    _NotificationOperation.prototype._NotificationOperation = function (context, source) {
        _super.prototype.DartObject.call(this, context);
        this.source = source;
    };
    Object.defineProperty(_NotificationOperation.prototype, "priority", {
        get: function () {
            return ServerOperationPriority.ANALYSIS_NOTIFICATION;
        },
        enumerable: true,
        configurable: true
    });
    _NotificationOperation.prototype.shouldBeDiscardedOnSourceChange = function (source) {
        return utils_1.op(utils_1.Op.EQUALS, source, this.source);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _NotificationOperation.prototype, "_NotificationOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _NotificationOperation.prototype, "priority", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _NotificationOperation.prototype, "shouldBeDiscardedOnSourceChange", null);
    _NotificationOperation = __decorate([
        utils_1.DartClass
    ], _NotificationOperation);
    return _NotificationOperation;
}(any));
exports._NotificationOperation = _NotificationOperation;
var _SingleFileOperation = /** @class */ (function (_super) {
    __extends(_SingleFileOperation, _super);
    function _SingleFileOperation(context, file) {
        var _this = this;
        return _this;
    }
    _SingleFileOperation.prototype._SingleFileOperation = function (context, file) {
        _super.prototype.DartObject.call(this, context);
        this.file = file;
    };
    _SingleFileOperation.prototype.shouldBeDiscardedOnSourceChange = function (source) {
        return utils_1.op(utils_1.Op.EQUALS, source.fullName, this.file);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _SingleFileOperation.prototype, "_SingleFileOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _SingleFileOperation.prototype, "shouldBeDiscardedOnSourceChange", null);
    _SingleFileOperation = __decorate([
        utils_1.DartClass
    ], _SingleFileOperation);
    return _SingleFileOperation;
}(any));
exports._SingleFileOperation = _SingleFileOperation;
var NavigationOperation = /** @class */ (function (_super) {
    __extends(NavigationOperation, _super);
    function NavigationOperation(context, source) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    NavigationOperation_1 = NavigationOperation;
    NavigationOperation.prototype.NavigationOperation = function (context, source) {
        _super.prototype._NotificationOperation.call(this, context, source);
    };
    NavigationOperation.prototype.merge = function (other) {
        return _common_1.is(other, NavigationOperation_1) && utils_1.op(utils_1.Op.EQUALS, other.context, context) && utils_1.op(utils_1.Op.EQUALS, other.source, this.source);
    };
    NavigationOperation.prototype.perform = function (server) {
        exports.sendAnalysisNotificationNavigation(server, context, this.source);
    };
    var NavigationOperation_1;
    __decorate([
        utils_1.defaultConstructor
    ], NavigationOperation.prototype, "NavigationOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NavigationOperation.prototype, "merge", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NavigationOperation.prototype, "perform", null);
    NavigationOperation = NavigationOperation_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], NavigationOperation);
    return NavigationOperation;
}(_NotificationOperation));
exports.NavigationOperation = NavigationOperation;
var OccurrencesOperation = /** @class */ (function (_super) {
    __extends(OccurrencesOperation, _super);
    function OccurrencesOperation(context, source) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    OccurrencesOperation_1 = OccurrencesOperation;
    OccurrencesOperation.prototype.OccurrencesOperation = function (context, source) {
        _super.prototype._NotificationOperation.call(this, context, source);
    };
    OccurrencesOperation.prototype.merge = function (other) {
        return _common_1.is(other, OccurrencesOperation_1) && utils_1.op(utils_1.Op.EQUALS, other.context, context) && utils_1.op(utils_1.Op.EQUALS, other.source, this.source);
    };
    OccurrencesOperation.prototype.perform = function (server) {
        exports.sendAnalysisNotificationOccurrences(server, context, this.source);
    };
    var OccurrencesOperation_1;
    __decorate([
        utils_1.defaultConstructor
    ], OccurrencesOperation.prototype, "OccurrencesOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OccurrencesOperation.prototype, "merge", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OccurrencesOperation.prototype, "perform", null);
    OccurrencesOperation = OccurrencesOperation_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], OccurrencesOperation);
    return OccurrencesOperation;
}(_NotificationOperation));
exports.OccurrencesOperation = OccurrencesOperation;
var _DartIndexOperation = /** @class */ (function (_super) {
    __extends(_DartIndexOperation, _super);
    function _DartIndexOperation(context, file, unit) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _DartIndexOperation.prototype._DartIndexOperation = function (context, file, unit) {
        _super.prototype._SingleFileOperation.call(this, context, file);
        this.unit = unit;
    };
    Object.defineProperty(_DartIndexOperation.prototype, "priority", {
        get: function () {
            return ServerOperationPriority.ANALYSIS_INDEX;
        },
        enumerable: true,
        configurable: true
    });
    _DartIndexOperation.prototype.perform = function (server) {
        var _this = this;
        ServerPerformanceStatistics.indexOperation.makeCurrentWhile(function () {
            try {
                (function (_25_) { return (!!_25_) ? _25_.indexUnit(_this.unit) : null; })(server.index);
            }
            catch (__error__) {
                {
                    var stackTrace = new core.DartStackTrace.fromError(__error__);
                    var exception = __error__;
                    server.sendServerErrorNotification("Failed to index: " + _this.file, exception, stackTrace);
                }
            }
        });
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DartIndexOperation.prototype, "_DartIndexOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartIndexOperation.prototype, "priority", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartIndexOperation.prototype, "perform", null);
    _DartIndexOperation = __decorate([
        utils_1.DartClass
    ], _DartIndexOperation);
    return _DartIndexOperation;
}(_SingleFileOperation));
exports._DartIndexOperation = _DartIndexOperation;
var _DartNotificationOperation = /** @class */ (function (_super) {
    __extends(_DartNotificationOperation, _super);
    function _DartNotificationOperation(context, file, unit) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _DartNotificationOperation.prototype._DartNotificationOperation = function (context, file, unit) {
        _super.prototype._SingleFileOperation.call(this, context, file);
        this.unit = unit;
    };
    Object.defineProperty(_DartNotificationOperation.prototype, "priority", {
        get: function () {
            return ServerOperationPriority.ANALYSIS_NOTIFICATION;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        utils_1.defaultConstructor
    ], _DartNotificationOperation.prototype, "_DartNotificationOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNotificationOperation.prototype, "priority", null);
    _DartNotificationOperation = __decorate([
        utils_1.DartClass
    ], _DartNotificationOperation);
    return _DartNotificationOperation;
}(_SingleFileOperation));
exports._DartNotificationOperation = _DartNotificationOperation;
var _NotificationErrorsOperation = /** @class */ (function (_super) {
    __extends(_NotificationErrorsOperation, _super);
    function _NotificationErrorsOperation(context, file, lineInfo, errors) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _NotificationErrorsOperation.prototype._NotificationErrorsOperation = function (context, file, lineInfo, errors) {
        _super.prototype._SingleFileOperation.call(this, context, file);
        this.lineInfo = lineInfo;
        this.errors = errors;
    };
    Object.defineProperty(_NotificationErrorsOperation.prototype, "priority", {
        get: function () {
            return ServerOperationPriority.ANALYSIS_NOTIFICATION;
        },
        enumerable: true,
        configurable: true
    });
    _NotificationErrorsOperation.prototype.perform = function (server) {
        exports.sendAnalysisNotificationErrors(server, context, this.file, this.lineInfo, this.errors);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _NotificationErrorsOperation.prototype, "_NotificationErrorsOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _NotificationErrorsOperation.prototype, "priority", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _NotificationErrorsOperation.prototype, "perform", null);
    _NotificationErrorsOperation = __decorate([
        utils_1.DartClass
    ], _NotificationErrorsOperation);
    return _NotificationErrorsOperation;
}(_SingleFileOperation));
exports._NotificationErrorsOperation = _NotificationErrorsOperation;
var _DartHighlightsOperation = /** @class */ (function (_super) {
    __extends(_DartHighlightsOperation, _super);
    function _DartHighlightsOperation(context, file, unit) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _DartHighlightsOperation.prototype._DartHighlightsOperation = function (context, file, unit) {
        _super.prototype._DartNotificationOperation.call(this, context, file, unit);
    };
    _DartHighlightsOperation.prototype.perform = function (server) {
        exports.sendAnalysisNotificationHighlights(server, this.file, this.unit);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DartHighlightsOperation.prototype, "_DartHighlightsOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartHighlightsOperation.prototype, "perform", null);
    _DartHighlightsOperation = __decorate([
        utils_1.DartClass
    ], _DartHighlightsOperation);
    return _DartHighlightsOperation;
}(_DartNotificationOperation));
exports._DartHighlightsOperation = _DartHighlightsOperation;
var _DartOutlineOperation = /** @class */ (function (_super) {
    __extends(_DartOutlineOperation, _super);
    function _DartOutlineOperation(context, file, lineInfo, sourceKind, unit) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _DartOutlineOperation.prototype._DartOutlineOperation = function (context, file, lineInfo, sourceKind, unit) {
        _super.prototype._DartNotificationOperation.call(this, context, file, unit);
        this.lineInfo = lineInfo;
        this.sourceKind = sourceKind;
    };
    _DartOutlineOperation.prototype.perform = function (server) {
        exports.sendAnalysisNotificationOutline(server, this.file, this.lineInfo, this.sourceKind, this.unit);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DartOutlineOperation.prototype, "_DartOutlineOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartOutlineOperation.prototype, "perform", null);
    _DartOutlineOperation = __decorate([
        utils_1.DartClass
    ], _DartOutlineOperation);
    return _DartOutlineOperation;
}(_DartNotificationOperation));
exports._DartOutlineOperation = _DartOutlineOperation;
var _DartOverridesOperation = /** @class */ (function (_super) {
    __extends(_DartOverridesOperation, _super);
    function _DartOverridesOperation(context, file, unit) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _DartOverridesOperation.prototype._DartOverridesOperation = function (context, file, unit) {
        _super.prototype._DartNotificationOperation.call(this, context, file, unit);
    };
    _DartOverridesOperation.prototype.perform = function (server) {
        exports.sendAnalysisNotificationOverrides(server, this.file, this.unit);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DartOverridesOperation.prototype, "_DartOverridesOperation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartOverridesOperation.prototype, "perform", null);
    _DartOverridesOperation = __decorate([
        utils_1.DartClass
    ], _DartOverridesOperation);
    return _DartOverridesOperation;
}(_DartNotificationOperation));
exports._DartOverridesOperation = _DartOverridesOperation;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=operation_analysis.js.map
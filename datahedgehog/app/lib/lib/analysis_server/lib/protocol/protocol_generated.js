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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/protocol/protocol_generated.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var convert = require("@dart2ts/dart/convert");
var ContextData = /** @class */ (function () {
    function ContextData(name, explicitFileCount, implicitFileCount, workItemQueueLength, cacheEntryExceptions) {
    }
    ContextData_1 = ContextData;
    Object.defineProperty(ContextData.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextData.prototype, "explicitFileCount", {
        get: function () {
            return this._explicitFileCount;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._explicitFileCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextData.prototype, "implicitFileCount", {
        get: function () {
            return this._implicitFileCount;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._implicitFileCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextData.prototype, "workItemQueueLength", {
        get: function () {
            return this._workItemQueueLength;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._workItemQueueLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextData.prototype, "cacheEntryExceptions", {
        get: function () {
            return this._cacheEntryExceptions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._cacheEntryExceptions = value;
        },
        enumerable: true,
        configurable: true
    });
    ContextData.prototype.ContextData = function (name, explicitFileCount, implicitFileCount, workItemQueueLength, cacheEntryExceptions) {
        this.name = name;
        this.explicitFileCount = explicitFileCount;
        this.implicitFileCount = implicitFileCount;
        this.workItemQueueLength = workItemQueueLength;
        this.cacheEntryExceptions = cacheEntryExceptions;
    };
    ContextData.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var name_1;
            if (json.containsKey("name")) {
                name_1 = jsonDecoder.decodeString(jsonPath + ".name", json.get("name"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "name");
            }
            var explicitFileCount = void 0;
            if (json.containsKey("explicitFileCount")) {
                explicitFileCount = jsonDecoder.decodeInt(jsonPath + ".explicitFileCount", json.get("explicitFileCount"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "explicitFileCount");
            }
            var implicitFileCount = void 0;
            if (json.containsKey("implicitFileCount")) {
                implicitFileCount = jsonDecoder.decodeInt(jsonPath + ".implicitFileCount", json.get("implicitFileCount"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "implicitFileCount");
            }
            var workItemQueueLength = void 0;
            if (json.containsKey("workItemQueueLength")) {
                workItemQueueLength = jsonDecoder.decodeInt(jsonPath + ".workItemQueueLength", json.get("workItemQueueLength"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "workItemQueueLength");
            }
            var cacheEntryExceptions = void 0;
            if (json.containsKey("cacheEntryExceptions")) {
                cacheEntryExceptions = jsonDecoder.decodeList(jsonPath + ".cacheEntryExceptions", json.get("cacheEntryExceptions"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "cacheEntryExceptions");
            }
            return new ContextData_1(name_1, explicitFileCount, implicitFileCount, workItemQueueLength, cacheEntryExceptions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "ContextData", json);
        }
    };
    ContextData.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("name", this.name);
        result.set("explicitFileCount", this.explicitFileCount);
        result.set("implicitFileCount", this.implicitFileCount);
        result.set("workItemQueueLength", this.workItemQueueLength);
        result.set("cacheEntryExceptions", this.cacheEntryExceptions);
        return result;
    };
    ContextData.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ContextData.prototype[_a = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ContextData_1)) {
            return this.name == other.name && this.explicitFileCount == other.explicitFileCount && this.implicitFileCount == other.implicitFileCount && this.workItemQueueLength == other.workItemQueueLength && listEqual(this.cacheEntryExceptions, other.cacheEntryExceptions, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(ContextData.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.name).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.explicitFileCount).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.implicitFileCount).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.workItemQueueLength).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.cacheEntryExceptions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ContextData_1, _a;
    __decorate([
        utils_1.defaultConstructor
    ], ContextData.prototype, "ContextData", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextData.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextData.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextData.prototype, _a, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextData.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ContextData, "$fromJson", null);
    ContextData = ContextData_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ContextData);
    return ContextData;
}());
exports.ContextData = ContextData;
var AnalysisErrorFixes = /** @class */ (function () {
    function AnalysisErrorFixes(error, _namedArguments) {
    }
    AnalysisErrorFixes_1 = AnalysisErrorFixes;
    Object.defineProperty(AnalysisErrorFixes.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._error = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisErrorFixes.prototype, "fixes", {
        get: function () {
            return this._fixes;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._fixes = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisErrorFixes.prototype.AnalysisErrorFixes = function (error, _namedArguments) {
        var fixes = Object.assign({}, _namedArguments).fixes;
        this.error = error;
        if (fixes == null) {
            this.fixes = new core.DartList.literal();
        }
        else {
            this.fixes = fixes;
        }
    };
    AnalysisErrorFixes.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var error = void 0;
            if (json.containsKey("error")) {
                error = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".error", json.get("error"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "error");
            }
            var fixes = void 0;
            if (json.containsKey("fixes")) {
                fixes = jsonDecoder.decodeList(jsonPath + ".fixes", json.get("fixes"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "fixes");
            }
            return new AnalysisErrorFixes_1(error, {
                fixes: fixes
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "AnalysisErrorFixes", json);
        }
    };
    AnalysisErrorFixes.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("error", this.error.toJson());
        result.set("fixes", this.fixes.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisErrorFixes.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisErrorFixes.prototype[_b = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisErrorFixes_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.error, other.error) && listEqual(this.fixes, other.fixes, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisErrorFixes.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.error.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.fixes.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisErrorFixes_1, _b;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisErrorFixes.prototype, "AnalysisErrorFixes", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorFixes.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorFixes.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorFixes.prototype, _b, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorFixes.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisErrorFixes, "$fromJson", null);
    AnalysisErrorFixes = AnalysisErrorFixes_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisErrorFixes);
    return AnalysisErrorFixes;
}());
exports.AnalysisErrorFixes = AnalysisErrorFixes;
var AnalysisErrorsParams = /** @class */ (function () {
    function AnalysisErrorsParams(file, errors) {
    }
    AnalysisErrorsParams_1 = AnalysisErrorsParams;
    Object.defineProperty(AnalysisErrorsParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisErrorsParams.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._errors = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisErrorsParams.prototype.AnalysisErrorsParams = function (file, errors) {
        this.file = file;
        this.errors = errors;
    };
    AnalysisErrorsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var errors = void 0;
            if (json.containsKey("errors")) {
                errors = jsonDecoder.decodeList(jsonPath + ".errors", json.get("errors"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "errors");
            }
            return new AnalysisErrorsParams_1(file, errors);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.errors params", json);
        }
    };
    AnalysisErrorsParams.$fromNotification = function (notification) {
        return new AnalysisErrorsParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisErrorsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("errors", this.errors.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisErrorsParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.errors", this.toJson());
    };
    AnalysisErrorsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisErrorsParams.prototype[_c = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisErrorsParams_1)) {
            return this.file == other.file && listEqual(this.errors, other.errors, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisErrorsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.errors.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisErrorsParams_1, _c;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisErrorsParams.prototype, "AnalysisErrorsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorsParams.prototype, _c, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisErrorsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisErrorsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisErrorsParams, "$fromNotification", null);
    AnalysisErrorsParams = AnalysisErrorsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisErrorsParams);
    return AnalysisErrorsParams;
}());
exports.AnalysisErrorsParams = AnalysisErrorsParams;
var AnalysisFlushResultsParams = /** @class */ (function () {
    function AnalysisFlushResultsParams(files) {
    }
    AnalysisFlushResultsParams_1 = AnalysisFlushResultsParams;
    Object.defineProperty(AnalysisFlushResultsParams.prototype, "files", {
        get: function () {
            return this._files;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._files = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisFlushResultsParams.prototype.AnalysisFlushResultsParams = function (files) {
        this.files = files;
    };
    AnalysisFlushResultsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var files = void 0;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files", json.get("files"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "files");
            }
            return new AnalysisFlushResultsParams_1(files);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.flushResults params", json);
        }
    };
    AnalysisFlushResultsParams.$fromNotification = function (notification) {
        return new AnalysisFlushResultsParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisFlushResultsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("files", this.files);
        return result;
    };
    AnalysisFlushResultsParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.flushResults", this.toJson());
    };
    AnalysisFlushResultsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisFlushResultsParams.prototype[_d = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisFlushResultsParams_1)) {
            return listEqual(this.files, other.files, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisFlushResultsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.files.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisFlushResultsParams_1, _d;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisFlushResultsParams.prototype, "AnalysisFlushResultsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFlushResultsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFlushResultsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFlushResultsParams.prototype, _d, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFlushResultsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisFlushResultsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisFlushResultsParams, "$fromNotification", null);
    AnalysisFlushResultsParams = AnalysisFlushResultsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisFlushResultsParams);
    return AnalysisFlushResultsParams;
}());
exports.AnalysisFlushResultsParams = AnalysisFlushResultsParams;
var AnalysisFoldingParams = /** @class */ (function () {
    function AnalysisFoldingParams(file, regions) {
    }
    AnalysisFoldingParams_1 = AnalysisFoldingParams;
    Object.defineProperty(AnalysisFoldingParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisFoldingParams.prototype, "regions", {
        get: function () {
            return this._regions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._regions = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisFoldingParams.prototype.AnalysisFoldingParams = function (file, regions) {
        this.file = file;
        this.regions = regions;
    };
    AnalysisFoldingParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var regions = void 0;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions", json.get("regions"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "regions");
            }
            return new AnalysisFoldingParams_1(file, regions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.folding params", json);
        }
    };
    AnalysisFoldingParams.$fromNotification = function (notification) {
        return new AnalysisFoldingParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisFoldingParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("regions", this.regions.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisFoldingParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.folding", this.toJson());
    };
    AnalysisFoldingParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisFoldingParams.prototype[_e = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisFoldingParams_1)) {
            return this.file == other.file && listEqual(this.regions, other.regions, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisFoldingParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.regions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisFoldingParams_1, _e;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisFoldingParams.prototype, "AnalysisFoldingParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFoldingParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFoldingParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFoldingParams.prototype, _e, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisFoldingParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisFoldingParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisFoldingParams, "$fromNotification", null);
    AnalysisFoldingParams = AnalysisFoldingParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisFoldingParams);
    return AnalysisFoldingParams;
}());
exports.AnalysisFoldingParams = AnalysisFoldingParams;
var AnalysisGetErrorsParams = /** @class */ (function () {
    function AnalysisGetErrorsParams(file) {
    }
    AnalysisGetErrorsParams_1 = AnalysisGetErrorsParams;
    Object.defineProperty(AnalysisGetErrorsParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetErrorsParams.prototype.AnalysisGetErrorsParams = function (file) {
        this.file = file;
    };
    AnalysisGetErrorsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            return new AnalysisGetErrorsParams_1(file);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getErrors params", json);
        }
    };
    AnalysisGetErrorsParams.$fromRequest = function (request) {
        return new AnalysisGetErrorsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisGetErrorsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        return result;
    };
    AnalysisGetErrorsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.getErrors", this.toJson());
    };
    AnalysisGetErrorsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetErrorsParams.prototype[_f = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetErrorsParams_1)) {
            return this.file == other.file;
        }
        return false;
    };
    Object.defineProperty(AnalysisGetErrorsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetErrorsParams_1, _f;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetErrorsParams.prototype, "AnalysisGetErrorsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsParams.prototype, _f, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetErrorsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetErrorsParams, "$fromRequest", null);
    AnalysisGetErrorsParams = AnalysisGetErrorsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetErrorsParams);
    return AnalysisGetErrorsParams;
}());
exports.AnalysisGetErrorsParams = AnalysisGetErrorsParams;
var AnalysisGetErrorsResult = /** @class */ (function () {
    function AnalysisGetErrorsResult(errors) {
    }
    AnalysisGetErrorsResult_1 = AnalysisGetErrorsResult;
    Object.defineProperty(AnalysisGetErrorsResult.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._errors = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetErrorsResult.prototype.AnalysisGetErrorsResult = function (errors) {
        this.errors = errors;
    };
    AnalysisGetErrorsResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var errors = void 0;
            if (json.containsKey("errors")) {
                errors = jsonDecoder.decodeList(jsonPath + ".errors", json.get("errors"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "errors");
            }
            return new AnalysisGetErrorsResult_1(errors);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getErrors result", json);
        }
    };
    AnalysisGetErrorsResult.$fromResponse = function (response) {
        return new AnalysisGetErrorsResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    AnalysisGetErrorsResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("errors", this.errors.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisGetErrorsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    AnalysisGetErrorsResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetErrorsResult.prototype[_g = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetErrorsResult_1)) {
            return listEqual(this.errors, other.errors, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisGetErrorsResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.errors.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetErrorsResult_1, _g;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetErrorsResult.prototype, "AnalysisGetErrorsResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsResult.prototype, _g, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetErrorsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetErrorsResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetErrorsResult, "$fromResponse", null);
    AnalysisGetErrorsResult = AnalysisGetErrorsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetErrorsResult);
    return AnalysisGetErrorsResult;
}());
exports.AnalysisGetErrorsResult = AnalysisGetErrorsResult;
var AnalysisGetHoverParams = /** @class */ (function () {
    function AnalysisGetHoverParams(file, offset) {
    }
    AnalysisGetHoverParams_1 = AnalysisGetHoverParams;
    Object.defineProperty(AnalysisGetHoverParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisGetHoverParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetHoverParams.prototype.AnalysisGetHoverParams = function (file, offset) {
        this.file = file;
        this.offset = offset;
    };
    AnalysisGetHoverParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            return new AnalysisGetHoverParams_1(file, offset);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getHover params", json);
        }
    };
    AnalysisGetHoverParams.$fromRequest = function (request) {
        return new AnalysisGetHoverParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisGetHoverParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        return result;
    };
    AnalysisGetHoverParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.getHover", this.toJson());
    };
    AnalysisGetHoverParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetHoverParams.prototype[_h = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetHoverParams_1)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    };
    Object.defineProperty(AnalysisGetHoverParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetHoverParams_1, _h;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetHoverParams.prototype, "AnalysisGetHoverParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverParams.prototype, _h, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetHoverParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetHoverParams, "$fromRequest", null);
    AnalysisGetHoverParams = AnalysisGetHoverParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetHoverParams);
    return AnalysisGetHoverParams;
}());
exports.AnalysisGetHoverParams = AnalysisGetHoverParams;
var AnalysisGetHoverResult = /** @class */ (function () {
    function AnalysisGetHoverResult(hovers) {
    }
    AnalysisGetHoverResult_1 = AnalysisGetHoverResult;
    Object.defineProperty(AnalysisGetHoverResult.prototype, "hovers", {
        get: function () {
            return this._hovers;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._hovers = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetHoverResult.prototype.AnalysisGetHoverResult = function (hovers) {
        this.hovers = hovers;
    };
    AnalysisGetHoverResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var hovers = void 0;
            if (json.containsKey("hovers")) {
                hovers = jsonDecoder.decodeList(jsonPath + ".hovers", json.get("hovers"), function (jsonPath, json) {
                    return new HoverInformation.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "hovers");
            }
            return new AnalysisGetHoverResult_1(hovers);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getHover result", json);
        }
    };
    AnalysisGetHoverResult.$fromResponse = function (response) {
        return new AnalysisGetHoverResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    AnalysisGetHoverResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("hovers", this.hovers.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisGetHoverResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    AnalysisGetHoverResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetHoverResult.prototype[_j = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetHoverResult_1)) {
            return listEqual(this.hovers, other.hovers, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisGetHoverResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.hovers.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetHoverResult_1, _j;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetHoverResult.prototype, "AnalysisGetHoverResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverResult.prototype, _j, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetHoverResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetHoverResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetHoverResult, "$fromResponse", null);
    AnalysisGetHoverResult = AnalysisGetHoverResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetHoverResult);
    return AnalysisGetHoverResult;
}());
exports.AnalysisGetHoverResult = AnalysisGetHoverResult;
var AnalysisGetLibraryDependenciesParams = /** @class */ (function () {
    function AnalysisGetLibraryDependenciesParams() {
    }
    AnalysisGetLibraryDependenciesParams_1 = AnalysisGetLibraryDependenciesParams;
    AnalysisGetLibraryDependenciesParams.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    AnalysisGetLibraryDependenciesParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.getLibraryDependencies", null);
    };
    AnalysisGetLibraryDependenciesParams.prototype[_k = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetLibraryDependenciesParams_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisGetLibraryDependenciesParams.prototype, "hashCode", {
        get: function () {
            return 246577680;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetLibraryDependenciesParams.prototype.AnalysisGetLibraryDependenciesParams = function () {
    };
    var AnalysisGetLibraryDependenciesParams_1, _k;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesParams.prototype, _k, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetLibraryDependenciesParams.prototype, "AnalysisGetLibraryDependenciesParams", null);
    AnalysisGetLibraryDependenciesParams = AnalysisGetLibraryDependenciesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetLibraryDependenciesParams);
    return AnalysisGetLibraryDependenciesParams;
}());
exports.AnalysisGetLibraryDependenciesParams = AnalysisGetLibraryDependenciesParams;
var AnalysisGetLibraryDependenciesResult = /** @class */ (function () {
    function AnalysisGetLibraryDependenciesResult(libraries, packageMap) {
    }
    AnalysisGetLibraryDependenciesResult_1 = AnalysisGetLibraryDependenciesResult;
    Object.defineProperty(AnalysisGetLibraryDependenciesResult.prototype, "libraries", {
        get: function () {
            return this._libraries;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._libraries = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisGetLibraryDependenciesResult.prototype, "packageMap", {
        get: function () {
            return this._packageMap;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._packageMap = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetLibraryDependenciesResult.prototype.AnalysisGetLibraryDependenciesResult = function (libraries, packageMap) {
        this.libraries = libraries;
        this.packageMap = packageMap;
    };
    AnalysisGetLibraryDependenciesResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var libraries = void 0;
            if (json.containsKey("libraries")) {
                libraries = jsonDecoder.decodeList(jsonPath + ".libraries", json.get("libraries"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "libraries");
            }
            var packageMap = void 0;
            if (json.containsKey("packageMap")) {
                packageMap = jsonDecoder.decodeMap(jsonPath + ".packageMap", json.get("packageMap"), {
                    valueDecoder: function (jsonPath, json) {
                        return jsonDecoder.decodeMap(jsonPath, json, {
                            valueDecoder: function (jsonPath, json) {
                                return jsonDecoder.decodeList(jsonPath, json, jsonDecoder.decodeString);
                            }
                        });
                    }
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "packageMap");
            }
            return new AnalysisGetLibraryDependenciesResult_1(libraries, packageMap);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getLibraryDependencies result", json);
        }
    };
    AnalysisGetLibraryDependenciesResult.$fromResponse = function (response) {
        return new AnalysisGetLibraryDependenciesResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    AnalysisGetLibraryDependenciesResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("libraries", this.libraries);
        result.set("packageMap", this.packageMap);
        return result;
    };
    AnalysisGetLibraryDependenciesResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    AnalysisGetLibraryDependenciesResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetLibraryDependenciesResult.prototype[_l = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetLibraryDependenciesResult_1)) {
            return listEqual(this.libraries, other.libraries, function (a, b) {
                return a == b;
            }) && mapEqual(this.packageMap, other.packageMap, function (a, b) {
                return mapEqual(a, b, function (a, b) {
                    return listEqual(a, b, function (a, b) {
                        return a == b;
                    });
                });
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisGetLibraryDependenciesResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.libraries.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.packageMap.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetLibraryDependenciesResult_1, _l;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetLibraryDependenciesResult.prototype, "AnalysisGetLibraryDependenciesResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesResult.prototype, _l, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetLibraryDependenciesResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetLibraryDependenciesResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetLibraryDependenciesResult, "$fromResponse", null);
    AnalysisGetLibraryDependenciesResult = AnalysisGetLibraryDependenciesResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetLibraryDependenciesResult);
    return AnalysisGetLibraryDependenciesResult;
}());
exports.AnalysisGetLibraryDependenciesResult = AnalysisGetLibraryDependenciesResult;
var AnalysisGetNavigationParams = /** @class */ (function () {
    function AnalysisGetNavigationParams(file, offset, length) {
    }
    AnalysisGetNavigationParams_1 = AnalysisGetNavigationParams;
    Object.defineProperty(AnalysisGetNavigationParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisGetNavigationParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisGetNavigationParams.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetNavigationParams.prototype.AnalysisGetNavigationParams = function (file, offset, length) {
        this.file = file;
        this.offset = offset;
        this.length = length;
    };
    AnalysisGetNavigationParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_1;
            if (json.containsKey("length")) {
                length_1 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            return new AnalysisGetNavigationParams_1(file, offset, length_1);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getNavigation params", json);
        }
    };
    AnalysisGetNavigationParams.$fromRequest = function (request) {
        return new AnalysisGetNavigationParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisGetNavigationParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        result.set("length", this.length);
        return result;
    };
    AnalysisGetNavigationParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.getNavigation", this.toJson());
    };
    AnalysisGetNavigationParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetNavigationParams.prototype[_m = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetNavigationParams_1)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length;
        }
        return false;
    };
    Object.defineProperty(AnalysisGetNavigationParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetNavigationParams_1, _m;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetNavigationParams.prototype, "AnalysisGetNavigationParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationParams.prototype, _m, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetNavigationParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetNavigationParams, "$fromRequest", null);
    AnalysisGetNavigationParams = AnalysisGetNavigationParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetNavigationParams);
    return AnalysisGetNavigationParams;
}());
exports.AnalysisGetNavigationParams = AnalysisGetNavigationParams;
var AnalysisGetNavigationResult = /** @class */ (function () {
    function AnalysisGetNavigationResult(files, targets, regions) {
    }
    AnalysisGetNavigationResult_1 = AnalysisGetNavigationResult;
    Object.defineProperty(AnalysisGetNavigationResult.prototype, "files", {
        get: function () {
            return this._files;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._files = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisGetNavigationResult.prototype, "targets", {
        get: function () {
            return this._targets;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._targets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisGetNavigationResult.prototype, "regions", {
        get: function () {
            return this._regions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._regions = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetNavigationResult.prototype.AnalysisGetNavigationResult = function (files, targets, regions) {
        this.files = files;
        this.targets = targets;
        this.regions = regions;
    };
    AnalysisGetNavigationResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var files = void 0;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files", json.get("files"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "files");
            }
            var targets = void 0;
            if (json.containsKey("targets")) {
                targets = jsonDecoder.decodeList(jsonPath + ".targets", json.get("targets"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "targets");
            }
            var regions = void 0;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions", json.get("regions"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "regions");
            }
            return new AnalysisGetNavigationResult_1(files, targets, regions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getNavigation result", json);
        }
    };
    AnalysisGetNavigationResult.$fromResponse = function (response) {
        return new AnalysisGetNavigationResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    AnalysisGetNavigationResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("files", this.files);
        result.set("targets", this.targets.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("regions", this.regions.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisGetNavigationResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    AnalysisGetNavigationResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetNavigationResult.prototype[_o = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetNavigationResult_1)) {
            return listEqual(this.files, other.files, function (a, b) {
                return a == b;
            }) && listEqual(this.targets, other.targets, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && listEqual(this.regions, other.regions, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisGetNavigationResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.files.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.targets.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.regions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetNavigationResult_1, _o;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetNavigationResult.prototype, "AnalysisGetNavigationResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationResult.prototype, _o, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetNavigationResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetNavigationResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetNavigationResult, "$fromResponse", null);
    AnalysisGetNavigationResult = AnalysisGetNavigationResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetNavigationResult);
    return AnalysisGetNavigationResult;
}());
exports.AnalysisGetNavigationResult = AnalysisGetNavigationResult;
var AnalysisGetReachableSourcesParams = /** @class */ (function () {
    function AnalysisGetReachableSourcesParams(file) {
    }
    AnalysisGetReachableSourcesParams_1 = AnalysisGetReachableSourcesParams;
    Object.defineProperty(AnalysisGetReachableSourcesParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetReachableSourcesParams.prototype.AnalysisGetReachableSourcesParams = function (file) {
        this.file = file;
    };
    AnalysisGetReachableSourcesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            return new AnalysisGetReachableSourcesParams_1(file);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getReachableSources params", json);
        }
    };
    AnalysisGetReachableSourcesParams.$fromRequest = function (request) {
        return new AnalysisGetReachableSourcesParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisGetReachableSourcesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        return result;
    };
    AnalysisGetReachableSourcesParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.getReachableSources", this.toJson());
    };
    AnalysisGetReachableSourcesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetReachableSourcesParams.prototype[_p = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetReachableSourcesParams_1)) {
            return this.file == other.file;
        }
        return false;
    };
    Object.defineProperty(AnalysisGetReachableSourcesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetReachableSourcesParams_1, _p;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetReachableSourcesParams.prototype, "AnalysisGetReachableSourcesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesParams.prototype, _p, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetReachableSourcesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetReachableSourcesParams, "$fromRequest", null);
    AnalysisGetReachableSourcesParams = AnalysisGetReachableSourcesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetReachableSourcesParams);
    return AnalysisGetReachableSourcesParams;
}());
exports.AnalysisGetReachableSourcesParams = AnalysisGetReachableSourcesParams;
var AnalysisGetReachableSourcesResult = /** @class */ (function () {
    function AnalysisGetReachableSourcesResult(sources) {
    }
    AnalysisGetReachableSourcesResult_1 = AnalysisGetReachableSourcesResult;
    Object.defineProperty(AnalysisGetReachableSourcesResult.prototype, "sources", {
        get: function () {
            return this._sources;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._sources = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisGetReachableSourcesResult.prototype.AnalysisGetReachableSourcesResult = function (sources) {
        this.sources = sources;
    };
    AnalysisGetReachableSourcesResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var sources = void 0;
            if (json.containsKey("sources")) {
                sources = jsonDecoder.decodeMap(jsonPath + ".sources", json.get("sources"), {
                    valueDecoder: function (jsonPath, json) {
                        return jsonDecoder.decodeList(jsonPath, json, jsonDecoder.decodeString);
                    }
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "sources");
            }
            return new AnalysisGetReachableSourcesResult_1(sources);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.getReachableSources result", json);
        }
    };
    AnalysisGetReachableSourcesResult.$fromResponse = function (response) {
        return new AnalysisGetReachableSourcesResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    AnalysisGetReachableSourcesResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("sources", this.sources);
        return result;
    };
    AnalysisGetReachableSourcesResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    AnalysisGetReachableSourcesResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisGetReachableSourcesResult.prototype[_q = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisGetReachableSourcesResult_1)) {
            return mapEqual(this.sources, other.sources, function (a, b) {
                return listEqual(a, b, function (a, b) {
                    return a == b;
                });
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisGetReachableSourcesResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.sources.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisGetReachableSourcesResult_1, _q;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisGetReachableSourcesResult.prototype, "AnalysisGetReachableSourcesResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesResult.prototype, _q, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisGetReachableSourcesResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetReachableSourcesResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisGetReachableSourcesResult, "$fromResponse", null);
    AnalysisGetReachableSourcesResult = AnalysisGetReachableSourcesResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisGetReachableSourcesResult);
    return AnalysisGetReachableSourcesResult;
}());
exports.AnalysisGetReachableSourcesResult = AnalysisGetReachableSourcesResult;
var AnalysisHighlightsParams = /** @class */ (function () {
    function AnalysisHighlightsParams(file, regions) {
    }
    AnalysisHighlightsParams_1 = AnalysisHighlightsParams;
    Object.defineProperty(AnalysisHighlightsParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisHighlightsParams.prototype, "regions", {
        get: function () {
            return this._regions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._regions = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisHighlightsParams.prototype.AnalysisHighlightsParams = function (file, regions) {
        this.file = file;
        this.regions = regions;
    };
    AnalysisHighlightsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var regions = void 0;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions", json.get("regions"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "regions");
            }
            return new AnalysisHighlightsParams_1(file, regions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.highlights params", json);
        }
    };
    AnalysisHighlightsParams.$fromNotification = function (notification) {
        return new AnalysisHighlightsParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisHighlightsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("regions", this.regions.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisHighlightsParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.highlights", this.toJson());
    };
    AnalysisHighlightsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisHighlightsParams.prototype[_r = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisHighlightsParams_1)) {
            return this.file == other.file && listEqual(this.regions, other.regions, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisHighlightsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.regions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisHighlightsParams_1, _r;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisHighlightsParams.prototype, "AnalysisHighlightsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisHighlightsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisHighlightsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisHighlightsParams.prototype, _r, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisHighlightsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisHighlightsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisHighlightsParams, "$fromNotification", null);
    AnalysisHighlightsParams = AnalysisHighlightsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisHighlightsParams);
    return AnalysisHighlightsParams;
}());
exports.AnalysisHighlightsParams = AnalysisHighlightsParams;
var AnalysisImplementedParams = /** @class */ (function () {
    function AnalysisImplementedParams(file, classes, members) {
    }
    AnalysisImplementedParams_1 = AnalysisImplementedParams;
    Object.defineProperty(AnalysisImplementedParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisImplementedParams.prototype, "classes", {
        get: function () {
            return this._classes;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._classes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisImplementedParams.prototype, "members", {
        get: function () {
            return this._members;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._members = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisImplementedParams.prototype.AnalysisImplementedParams = function (file, classes, members) {
        this.file = file;
        this.classes = classes;
        this.members = members;
    };
    AnalysisImplementedParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var classes = void 0;
            if (json.containsKey("classes")) {
                classes = jsonDecoder.decodeList(jsonPath + ".classes", json.get("classes"), function (jsonPath, json) {
                    return new ImplementedClass.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "classes");
            }
            var members = void 0;
            if (json.containsKey("members")) {
                members = jsonDecoder.decodeList(jsonPath + ".members", json.get("members"), function (jsonPath, json) {
                    return new ImplementedMember.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "members");
            }
            return new AnalysisImplementedParams_1(file, classes, members);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.implemented params", json);
        }
    };
    AnalysisImplementedParams.$fromNotification = function (notification) {
        return new AnalysisImplementedParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisImplementedParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("classes", this.classes.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("members", this.members.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisImplementedParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.implemented", this.toJson());
    };
    AnalysisImplementedParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisImplementedParams.prototype[_s = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisImplementedParams_1)) {
            return this.file == other.file && listEqual(this.classes, other.classes, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && listEqual(this.members, other.members, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisImplementedParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.classes.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.members.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisImplementedParams_1, _s;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisImplementedParams.prototype, "AnalysisImplementedParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisImplementedParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisImplementedParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisImplementedParams.prototype, _s, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisImplementedParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisImplementedParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisImplementedParams, "$fromNotification", null);
    AnalysisImplementedParams = AnalysisImplementedParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisImplementedParams);
    return AnalysisImplementedParams;
}());
exports.AnalysisImplementedParams = AnalysisImplementedParams;
var AnalysisInvalidateParams = /** @class */ (function () {
    function AnalysisInvalidateParams(file, offset, length, delta) {
    }
    AnalysisInvalidateParams_1 = AnalysisInvalidateParams;
    Object.defineProperty(AnalysisInvalidateParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisInvalidateParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisInvalidateParams.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisInvalidateParams.prototype, "delta", {
        get: function () {
            return this._delta;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._delta = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisInvalidateParams.prototype.AnalysisInvalidateParams = function (file, offset, length, delta) {
        this.file = file;
        this.offset = offset;
        this.length = length;
        this.delta = delta;
    };
    AnalysisInvalidateParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_2;
            if (json.containsKey("length")) {
                length_2 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            var delta = void 0;
            if (json.containsKey("delta")) {
                delta = jsonDecoder.decodeInt(jsonPath + ".delta", json.get("delta"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "delta");
            }
            return new AnalysisInvalidateParams_1(file, offset, length_2, delta);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.invalidate params", json);
        }
    };
    AnalysisInvalidateParams.$fromNotification = function (notification) {
        return new AnalysisInvalidateParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisInvalidateParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        result.set("length", this.length);
        result.set("delta", this.delta);
        return result;
    };
    AnalysisInvalidateParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.invalidate", this.toJson());
    };
    AnalysisInvalidateParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisInvalidateParams.prototype[_t = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisInvalidateParams_1)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length && this.delta == other.delta;
        }
        return false;
    };
    Object.defineProperty(AnalysisInvalidateParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.delta).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisInvalidateParams_1, _t;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisInvalidateParams.prototype, "AnalysisInvalidateParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisInvalidateParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisInvalidateParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisInvalidateParams.prototype, _t, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisInvalidateParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisInvalidateParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisInvalidateParams, "$fromNotification", null);
    AnalysisInvalidateParams = AnalysisInvalidateParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisInvalidateParams);
    return AnalysisInvalidateParams;
}());
exports.AnalysisInvalidateParams = AnalysisInvalidateParams;
var AnalysisNavigationParams = /** @class */ (function () {
    function AnalysisNavigationParams(file, regions, targets, files) {
    }
    AnalysisNavigationParams_1 = AnalysisNavigationParams;
    Object.defineProperty(AnalysisNavigationParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisNavigationParams.prototype, "regions", {
        get: function () {
            return this._regions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._regions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisNavigationParams.prototype, "targets", {
        get: function () {
            return this._targets;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._targets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisNavigationParams.prototype, "files", {
        get: function () {
            return this._files;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._files = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisNavigationParams.prototype.AnalysisNavigationParams = function (file, regions, targets, files) {
        this.file = file;
        this.regions = regions;
        this.targets = targets;
        this.files = files;
    };
    AnalysisNavigationParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var regions = void 0;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions", json.get("regions"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "regions");
            }
            var targets = void 0;
            if (json.containsKey("targets")) {
                targets = jsonDecoder.decodeList(jsonPath + ".targets", json.get("targets"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "targets");
            }
            var files = void 0;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files", json.get("files"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "files");
            }
            return new AnalysisNavigationParams_1(file, regions, targets, files);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.navigation params", json);
        }
    };
    AnalysisNavigationParams.$fromNotification = function (notification) {
        return new AnalysisNavigationParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisNavigationParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("regions", this.regions.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("targets", this.targets.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("files", this.files);
        return result;
    };
    AnalysisNavigationParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.navigation", this.toJson());
    };
    AnalysisNavigationParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisNavigationParams.prototype[_u = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisNavigationParams_1)) {
            return this.file == other.file && listEqual(this.regions, other.regions, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && listEqual(this.targets, other.targets, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && listEqual(this.files, other.files, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisNavigationParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.regions.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.targets.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.files.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisNavigationParams_1, _u;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisNavigationParams.prototype, "AnalysisNavigationParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisNavigationParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisNavigationParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisNavigationParams.prototype, _u, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisNavigationParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisNavigationParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisNavigationParams, "$fromNotification", null);
    AnalysisNavigationParams = AnalysisNavigationParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisNavigationParams);
    return AnalysisNavigationParams;
}());
exports.AnalysisNavigationParams = AnalysisNavigationParams;
var AnalysisOccurrencesParams = /** @class */ (function () {
    function AnalysisOccurrencesParams(file, occurrences) {
    }
    AnalysisOccurrencesParams_1 = AnalysisOccurrencesParams;
    Object.defineProperty(AnalysisOccurrencesParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOccurrencesParams.prototype, "occurrences", {
        get: function () {
            return this._occurrences;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._occurrences = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisOccurrencesParams.prototype.AnalysisOccurrencesParams = function (file, occurrences) {
        this.file = file;
        this.occurrences = occurrences;
    };
    AnalysisOccurrencesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var occurrences = void 0;
            if (json.containsKey("occurrences")) {
                occurrences = jsonDecoder.decodeList(jsonPath + ".occurrences", json.get("occurrences"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "occurrences");
            }
            return new AnalysisOccurrencesParams_1(file, occurrences);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.occurrences params", json);
        }
    };
    AnalysisOccurrencesParams.$fromNotification = function (notification) {
        return new AnalysisOccurrencesParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisOccurrencesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("occurrences", this.occurrences.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisOccurrencesParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.occurrences", this.toJson());
    };
    AnalysisOccurrencesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisOccurrencesParams.prototype[_v = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisOccurrencesParams_1)) {
            return this.file == other.file && listEqual(this.occurrences, other.occurrences, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisOccurrencesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.occurrences.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisOccurrencesParams_1, _v;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisOccurrencesParams.prototype, "AnalysisOccurrencesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOccurrencesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOccurrencesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOccurrencesParams.prototype, _v, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOccurrencesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisOccurrencesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisOccurrencesParams, "$fromNotification", null);
    AnalysisOccurrencesParams = AnalysisOccurrencesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisOccurrencesParams);
    return AnalysisOccurrencesParams;
}());
exports.AnalysisOccurrencesParams = AnalysisOccurrencesParams;
var AnalysisOptions = /** @class */ (function () {
    function AnalysisOptions(_namedArguments) {
    }
    AnalysisOptions_1 = AnalysisOptions;
    Object.defineProperty(AnalysisOptions.prototype, "enableAsync", {
        get: function () {
            return this._enableAsync;
        },
        set: function (value) {
            this._enableAsync = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOptions.prototype, "enableDeferredLoading", {
        get: function () {
            return this._enableDeferredLoading;
        },
        set: function (value) {
            this._enableDeferredLoading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOptions.prototype, "enableEnums", {
        get: function () {
            return this._enableEnums;
        },
        set: function (value) {
            this._enableEnums = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOptions.prototype, "enableNullAwareOperators", {
        get: function () {
            return this._enableNullAwareOperators;
        },
        set: function (value) {
            this._enableNullAwareOperators = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOptions.prototype, "enableSuperMixins", {
        get: function () {
            return this._enableSuperMixins;
        },
        set: function (value) {
            this._enableSuperMixins = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOptions.prototype, "generateDart2jsHints", {
        get: function () {
            return this._generateDart2jsHints;
        },
        set: function (value) {
            this._generateDart2jsHints = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOptions.prototype, "generateHints", {
        get: function () {
            return this._generateHints;
        },
        set: function (value) {
            this._generateHints = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOptions.prototype, "generateLints", {
        get: function () {
            return this._generateLints;
        },
        set: function (value) {
            this._generateLints = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisOptions.prototype.AnalysisOptions = function (_namedArguments) {
        var _x = Object.assign({}, _namedArguments), enableAsync = _x.enableAsync, enableDeferredLoading = _x.enableDeferredLoading, enableEnums = _x.enableEnums, enableNullAwareOperators = _x.enableNullAwareOperators, enableSuperMixins = _x.enableSuperMixins, generateDart2jsHints = _x.generateDart2jsHints, generateHints = _x.generateHints, generateLints = _x.generateLints;
        this.enableAsync = enableAsync;
        this.enableDeferredLoading = enableDeferredLoading;
        this.enableEnums = enableEnums;
        this.enableNullAwareOperators = enableNullAwareOperators;
        this.enableSuperMixins = enableSuperMixins;
        this.generateDart2jsHints = generateDart2jsHints;
        this.generateHints = generateHints;
        this.generateLints = generateLints;
    };
    AnalysisOptions.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var enableAsync = void 0;
            if (json.containsKey("enableAsync")) {
                enableAsync = jsonDecoder.decodeBool(jsonPath + ".enableAsync", json.get("enableAsync"));
            }
            var enableDeferredLoading = void 0;
            if (json.containsKey("enableDeferredLoading")) {
                enableDeferredLoading = jsonDecoder.decodeBool(jsonPath + ".enableDeferredLoading", json.get("enableDeferredLoading"));
            }
            var enableEnums = void 0;
            if (json.containsKey("enableEnums")) {
                enableEnums = jsonDecoder.decodeBool(jsonPath + ".enableEnums", json.get("enableEnums"));
            }
            var enableNullAwareOperators = void 0;
            if (json.containsKey("enableNullAwareOperators")) {
                enableNullAwareOperators = jsonDecoder.decodeBool(jsonPath + ".enableNullAwareOperators", json.get("enableNullAwareOperators"));
            }
            var enableSuperMixins = void 0;
            if (json.containsKey("enableSuperMixins")) {
                enableSuperMixins = jsonDecoder.decodeBool(jsonPath + ".enableSuperMixins", json.get("enableSuperMixins"));
            }
            var generateDart2jsHints = void 0;
            if (json.containsKey("generateDart2jsHints")) {
                generateDart2jsHints = jsonDecoder.decodeBool(jsonPath + ".generateDart2jsHints", json.get("generateDart2jsHints"));
            }
            var generateHints = void 0;
            if (json.containsKey("generateHints")) {
                generateHints = jsonDecoder.decodeBool(jsonPath + ".generateHints", json.get("generateHints"));
            }
            var generateLints = void 0;
            if (json.containsKey("generateLints")) {
                generateLints = jsonDecoder.decodeBool(jsonPath + ".generateLints", json.get("generateLints"));
            }
            return new AnalysisOptions_1({
                enableAsync: enableAsync, enableDeferredLoading: enableDeferredLoading, enableEnums: enableEnums, enableNullAwareOperators: enableNullAwareOperators, enableSuperMixins: enableSuperMixins, generateDart2jsHints: generateDart2jsHints, generateHints: generateHints, generateLints: generateLints
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "AnalysisOptions", json);
        }
    };
    AnalysisOptions.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.enableAsync != null) {
            result.set("enableAsync", this.enableAsync);
        }
        if (this.enableDeferredLoading != null) {
            result.set("enableDeferredLoading", this.enableDeferredLoading);
        }
        if (this.enableEnums != null) {
            result.set("enableEnums", this.enableEnums);
        }
        if (this.enableNullAwareOperators != null) {
            result.set("enableNullAwareOperators", this.enableNullAwareOperators);
        }
        if (this.enableSuperMixins != null) {
            result.set("enableSuperMixins", this.enableSuperMixins);
        }
        if (this.generateDart2jsHints != null) {
            result.set("generateDart2jsHints", this.generateDart2jsHints);
        }
        if (this.generateHints != null) {
            result.set("generateHints", this.generateHints);
        }
        if (this.generateLints != null) {
            result.set("generateLints", this.generateLints);
        }
        return result;
    };
    AnalysisOptions.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisOptions.prototype[_w = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisOptions_1)) {
            return this.enableAsync == other.enableAsync && this.enableDeferredLoading == other.enableDeferredLoading && this.enableEnums == other.enableEnums && this.enableNullAwareOperators == other.enableNullAwareOperators && this.enableSuperMixins == other.enableSuperMixins && this.generateDart2jsHints == other.generateDart2jsHints && this.generateHints == other.generateHints && this.generateLints == other.generateLints;
        }
        return false;
    };
    Object.defineProperty(AnalysisOptions.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.enableAsync.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.enableDeferredLoading.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.enableEnums.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.enableNullAwareOperators.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.enableSuperMixins.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.generateDart2jsHints.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.generateHints.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.generateLints.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisOptions_1, _w;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisOptions.prototype, "AnalysisOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOptions.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOptions.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOptions.prototype, _w, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisOptions, "$fromJson", null);
    AnalysisOptions = AnalysisOptions_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisOptions);
    return AnalysisOptions;
}());
exports.AnalysisOptions = AnalysisOptions;
var AnalysisOutlineParams = /** @class */ (function () {
    function AnalysisOutlineParams(file, kind, outline, _namedArguments) {
    }
    AnalysisOutlineParams_1 = AnalysisOutlineParams;
    Object.defineProperty(AnalysisOutlineParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOutlineParams.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._kind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOutlineParams.prototype, "libraryName", {
        get: function () {
            return this._libraryName;
        },
        set: function (value) {
            this._libraryName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOutlineParams.prototype, "outline", {
        get: function () {
            return this._outline;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._outline = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisOutlineParams.prototype.AnalysisOutlineParams = function (file, kind, outline, _namedArguments) {
        var libraryName = Object.assign({}, _namedArguments).libraryName;
        this.file = file;
        this.kind = kind;
        this.libraryName = libraryName;
        this.outline = outline;
    };
    AnalysisOutlineParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var kind = void 0;
            if (json.containsKey("kind")) {
                kind = new FileKind.fromJson(jsonDecoder, jsonPath + ".kind", json.get("kind"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "kind");
            }
            var libraryName = void 0;
            if (json.containsKey("libraryName")) {
                libraryName = jsonDecoder.decodeString(jsonPath + ".libraryName", json.get("libraryName"));
            }
            var outline = void 0;
            if (json.containsKey("outline")) {
                outline = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".outline", json.get("outline"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "outline");
            }
            return new AnalysisOutlineParams_1(file, kind, outline, {
                libraryName: libraryName
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.outline params", json);
        }
    };
    AnalysisOutlineParams.$fromNotification = function (notification) {
        return new AnalysisOutlineParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisOutlineParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("kind", this.kind.toJson());
        if (this.libraryName != null) {
            result.set("libraryName", this.libraryName);
        }
        result.set("outline", this.outline.toJson());
        return result;
    };
    AnalysisOutlineParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.outline", this.toJson());
    };
    AnalysisOutlineParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisOutlineParams.prototype[_x = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisOutlineParams_1)) {
            return this.file == other.file && utils_1.op(utils_1.Op.EQUALS, this.kind, other.kind) && this.libraryName == other.libraryName && utils_1.op(utils_1.Op.EQUALS, this.outline, other.outline);
        }
        return false;
    };
    Object.defineProperty(AnalysisOutlineParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.kind.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.libraryName).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.outline.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisOutlineParams_1, _x;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisOutlineParams.prototype, "AnalysisOutlineParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOutlineParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOutlineParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOutlineParams.prototype, _x, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOutlineParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisOutlineParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisOutlineParams, "$fromNotification", null);
    AnalysisOutlineParams = AnalysisOutlineParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisOutlineParams);
    return AnalysisOutlineParams;
}());
exports.AnalysisOutlineParams = AnalysisOutlineParams;
var AnalysisOverridesParams = /** @class */ (function () {
    function AnalysisOverridesParams(file, overrides) {
    }
    AnalysisOverridesParams_1 = AnalysisOverridesParams;
    Object.defineProperty(AnalysisOverridesParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisOverridesParams.prototype, "overrides", {
        get: function () {
            return this._overrides;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._overrides = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisOverridesParams.prototype.AnalysisOverridesParams = function (file, overrides) {
        this.file = file;
        this.overrides = overrides;
    };
    AnalysisOverridesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var overrides = void 0;
            if (json.containsKey("overrides")) {
                overrides = jsonDecoder.decodeList(jsonPath + ".overrides", json.get("overrides"), function (jsonPath, json) {
                    return new Override.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "overrides");
            }
            return new AnalysisOverridesParams_1(file, overrides);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.overrides params", json);
        }
    };
    AnalysisOverridesParams.$fromNotification = function (notification) {
        return new AnalysisOverridesParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisOverridesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("overrides", this.overrides.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisOverridesParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.overrides", this.toJson());
    };
    AnalysisOverridesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisOverridesParams.prototype[_y = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisOverridesParams_1)) {
            return this.file == other.file && listEqual(this.overrides, other.overrides, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisOverridesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.overrides.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisOverridesParams_1, _y;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisOverridesParams.prototype, "AnalysisOverridesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOverridesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOverridesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOverridesParams.prototype, _y, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisOverridesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisOverridesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisOverridesParams, "$fromNotification", null);
    AnalysisOverridesParams = AnalysisOverridesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisOverridesParams);
    return AnalysisOverridesParams;
}());
exports.AnalysisOverridesParams = AnalysisOverridesParams;
var AnalysisReanalyzeParams = /** @class */ (function () {
    function AnalysisReanalyzeParams(_namedArguments) {
    }
    AnalysisReanalyzeParams_1 = AnalysisReanalyzeParams;
    Object.defineProperty(AnalysisReanalyzeParams.prototype, "roots", {
        get: function () {
            return this._roots;
        },
        set: function (value) {
            this._roots = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisReanalyzeParams.prototype.AnalysisReanalyzeParams = function (_namedArguments) {
        var roots = Object.assign({}, _namedArguments).roots;
        this.roots = roots;
    };
    AnalysisReanalyzeParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var roots = void 0;
            if (json.containsKey("roots")) {
                roots = jsonDecoder.decodeList(jsonPath + ".roots", json.get("roots"), jsonDecoder.decodeString);
            }
            return new AnalysisReanalyzeParams_1({
                roots: roots
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.reanalyze params", json);
        }
    };
    AnalysisReanalyzeParams.$fromRequest = function (request) {
        return new AnalysisReanalyzeParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisReanalyzeParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.roots != null) {
            result.set("roots", this.roots);
        }
        return result;
    };
    AnalysisReanalyzeParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.reanalyze", this.toJson());
    };
    AnalysisReanalyzeParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisReanalyzeParams.prototype[_z = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisReanalyzeParams_1)) {
            return listEqual(this.roots, other.roots, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisReanalyzeParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.roots.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisReanalyzeParams_1, _z;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisReanalyzeParams.prototype, "AnalysisReanalyzeParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeParams.prototype, _z, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisReanalyzeParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisReanalyzeParams, "$fromRequest", null);
    AnalysisReanalyzeParams = AnalysisReanalyzeParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisReanalyzeParams);
    return AnalysisReanalyzeParams;
}());
exports.AnalysisReanalyzeParams = AnalysisReanalyzeParams;
var AnalysisReanalyzeResult = /** @class */ (function () {
    function AnalysisReanalyzeResult() {
    }
    AnalysisReanalyzeResult_1 = AnalysisReanalyzeResult;
    AnalysisReanalyzeResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    AnalysisReanalyzeResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    AnalysisReanalyzeResult.prototype[_0 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisReanalyzeResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisReanalyzeResult.prototype, "hashCode", {
        get: function () {
            return 846803925;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisReanalyzeResult.prototype.AnalysisReanalyzeResult = function () {
    };
    var AnalysisReanalyzeResult_1, _0;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeResult.prototype, _0, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisReanalyzeResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisReanalyzeResult.prototype, "AnalysisReanalyzeResult", null);
    AnalysisReanalyzeResult = AnalysisReanalyzeResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisReanalyzeResult);
    return AnalysisReanalyzeResult;
}());
exports.AnalysisReanalyzeResult = AnalysisReanalyzeResult;
var AnalysisService = /** @class */ (function () {
    function AnalysisService(name) {
    }
    AnalysisService_1 = AnalysisService;
    Object.defineProperty(AnalysisService, "FOLDING", {
        get: function () {
            if (this.__$FOLDING === undefined) {
                this.__$FOLDING = new AnalysisService_1._("FOLDING");
            }
            return this.__$FOLDING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "HIGHLIGHTS", {
        get: function () {
            if (this.__$HIGHLIGHTS === undefined) {
                this.__$HIGHLIGHTS = new AnalysisService_1._("HIGHLIGHTS");
            }
            return this.__$HIGHLIGHTS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "IMPLEMENTED", {
        get: function () {
            if (this.__$IMPLEMENTED === undefined) {
                this.__$IMPLEMENTED = new AnalysisService_1._("IMPLEMENTED");
            }
            return this.__$IMPLEMENTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "INVALIDATE", {
        get: function () {
            if (this.__$INVALIDATE === undefined) {
                this.__$INVALIDATE = new AnalysisService_1._("INVALIDATE");
            }
            return this.__$INVALIDATE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "NAVIGATION", {
        get: function () {
            if (this.__$NAVIGATION === undefined) {
                this.__$NAVIGATION = new AnalysisService_1._("NAVIGATION");
            }
            return this.__$NAVIGATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "OCCURRENCES", {
        get: function () {
            if (this.__$OCCURRENCES === undefined) {
                this.__$OCCURRENCES = new AnalysisService_1._("OCCURRENCES");
            }
            return this.__$OCCURRENCES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "OUTLINE", {
        get: function () {
            if (this.__$OUTLINE === undefined) {
                this.__$OUTLINE = new AnalysisService_1._("OUTLINE");
            }
            return this.__$OUTLINE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "OVERRIDES", {
        get: function () {
            if (this.__$OVERRIDES === undefined) {
                this.__$OVERRIDES = new AnalysisService_1._("OVERRIDES");
            }
            return this.__$OVERRIDES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisService, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(AnalysisService_1.FOLDING, AnalysisService_1.HIGHLIGHTS, AnalysisService_1.IMPLEMENTED, AnalysisService_1.INVALIDATE, AnalysisService_1.NAVIGATION, AnalysisService_1.OCCURRENCES, AnalysisService_1.OUTLINE, AnalysisService_1.OVERRIDES);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisService.prototype._ = function (name) {
        this.name = name;
    };
    AnalysisService.$AnalysisService = function (name) {
        switch (name) {
            case "FOLDING":
                return AnalysisService_1.FOLDING;
            case "HIGHLIGHTS":
                return AnalysisService_1.HIGHLIGHTS;
            case "IMPLEMENTED":
                return AnalysisService_1.IMPLEMENTED;
            case "INVALIDATE":
                return AnalysisService_1.INVALIDATE;
            case "NAVIGATION":
                return AnalysisService_1.NAVIGATION;
            case "OCCURRENCES":
                return AnalysisService_1.OCCURRENCES;
            case "OUTLINE":
                return AnalysisService_1.OUTLINE;
            case "OVERRIDES":
                return AnalysisService_1.OVERRIDES;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    AnalysisService.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new AnalysisService_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "AnalysisService", json);
    };
    AnalysisService.prototype.toString = function () {
        return "AnalysisService." + this.name;
    };
    AnalysisService.prototype.toJson = function () {
        return this.name;
    };
    var AnalysisService_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisService.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], AnalysisService.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisService.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], AnalysisService, "$AnalysisService", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisService, "$fromJson", null);
    AnalysisService = AnalysisService_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisService);
    return AnalysisService;
}());
exports.AnalysisService = AnalysisService;
var AnalysisSetAnalysisRootsParams = /** @class */ (function () {
    function AnalysisSetAnalysisRootsParams(included, excluded, _namedArguments) {
    }
    AnalysisSetAnalysisRootsParams_1 = AnalysisSetAnalysisRootsParams;
    Object.defineProperty(AnalysisSetAnalysisRootsParams.prototype, "included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._included = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisSetAnalysisRootsParams.prototype, "excluded", {
        get: function () {
            return this._excluded;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._excluded = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisSetAnalysisRootsParams.prototype, "packageRoots", {
        get: function () {
            return this._packageRoots;
        },
        set: function (value) {
            this._packageRoots = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetAnalysisRootsParams.prototype.AnalysisSetAnalysisRootsParams = function (included, excluded, _namedArguments) {
        var packageRoots = Object.assign({}, _namedArguments).packageRoots;
        this.included = included;
        this.excluded = excluded;
        this.packageRoots = packageRoots;
    };
    AnalysisSetAnalysisRootsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var included = void 0;
            if (json.containsKey("included")) {
                included = jsonDecoder.decodeList(jsonPath + ".included", json.get("included"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "included");
            }
            var excluded = void 0;
            if (json.containsKey("excluded")) {
                excluded = jsonDecoder.decodeList(jsonPath + ".excluded", json.get("excluded"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "excluded");
            }
            var packageRoots = void 0;
            if (json.containsKey("packageRoots")) {
                packageRoots = jsonDecoder.decodeMap(jsonPath + ".packageRoots", json.get("packageRoots"), {
                    valueDecoder: jsonDecoder.decodeString
                });
            }
            return new AnalysisSetAnalysisRootsParams_1(included, excluded, {
                packageRoots: packageRoots
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.setAnalysisRoots params", json);
        }
    };
    AnalysisSetAnalysisRootsParams.$fromRequest = function (request) {
        return new AnalysisSetAnalysisRootsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisSetAnalysisRootsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("included", this.included);
        result.set("excluded", this.excluded);
        if (this.packageRoots != null) {
            result.set("packageRoots", this.packageRoots);
        }
        return result;
    };
    AnalysisSetAnalysisRootsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.setAnalysisRoots", this.toJson());
    };
    AnalysisSetAnalysisRootsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisSetAnalysisRootsParams.prototype[_1 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetAnalysisRootsParams_1)) {
            return listEqual(this.included, other.included, function (a, b) {
                return a == b;
            }) && listEqual(this.excluded, other.excluded, function (a, b) {
                return a == b;
            }) && mapEqual(this.packageRoots, other.packageRoots, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisSetAnalysisRootsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.included.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.excluded.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.packageRoots.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisSetAnalysisRootsParams_1, _1;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetAnalysisRootsParams.prototype, "AnalysisSetAnalysisRootsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsParams.prototype, _1, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetAnalysisRootsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetAnalysisRootsParams, "$fromRequest", null);
    AnalysisSetAnalysisRootsParams = AnalysisSetAnalysisRootsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetAnalysisRootsParams);
    return AnalysisSetAnalysisRootsParams;
}());
exports.AnalysisSetAnalysisRootsParams = AnalysisSetAnalysisRootsParams;
var AnalysisSetAnalysisRootsResult = /** @class */ (function () {
    function AnalysisSetAnalysisRootsResult() {
    }
    AnalysisSetAnalysisRootsResult_1 = AnalysisSetAnalysisRootsResult;
    AnalysisSetAnalysisRootsResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    AnalysisSetAnalysisRootsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    AnalysisSetAnalysisRootsResult.prototype[_2 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetAnalysisRootsResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisSetAnalysisRootsResult.prototype, "hashCode", {
        get: function () {
            return 866004753;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetAnalysisRootsResult.prototype.AnalysisSetAnalysisRootsResult = function () {
    };
    var AnalysisSetAnalysisRootsResult_1, _2;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsResult.prototype, _2, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetAnalysisRootsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetAnalysisRootsResult.prototype, "AnalysisSetAnalysisRootsResult", null);
    AnalysisSetAnalysisRootsResult = AnalysisSetAnalysisRootsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetAnalysisRootsResult);
    return AnalysisSetAnalysisRootsResult;
}());
exports.AnalysisSetAnalysisRootsResult = AnalysisSetAnalysisRootsResult;
var AnalysisSetGeneralSubscriptionsParams = /** @class */ (function () {
    function AnalysisSetGeneralSubscriptionsParams(subscriptions) {
    }
    AnalysisSetGeneralSubscriptionsParams_1 = AnalysisSetGeneralSubscriptionsParams;
    Object.defineProperty(AnalysisSetGeneralSubscriptionsParams.prototype, "subscriptions", {
        get: function () {
            return this._subscriptions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._subscriptions = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetGeneralSubscriptionsParams.prototype.AnalysisSetGeneralSubscriptionsParams = function (subscriptions) {
        this.subscriptions = subscriptions;
    };
    AnalysisSetGeneralSubscriptionsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var subscriptions = void 0;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeList(jsonPath + ".subscriptions", json.get("subscriptions"), function (jsonPath, json) {
                    return new GeneralAnalysisService.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "subscriptions");
            }
            return new AnalysisSetGeneralSubscriptionsParams_1(subscriptions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.setGeneralSubscriptions params", json);
        }
    };
    AnalysisSetGeneralSubscriptionsParams.$fromRequest = function (request) {
        return new AnalysisSetGeneralSubscriptionsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisSetGeneralSubscriptionsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("subscriptions", this.subscriptions.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    AnalysisSetGeneralSubscriptionsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.setGeneralSubscriptions", this.toJson());
    };
    AnalysisSetGeneralSubscriptionsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisSetGeneralSubscriptionsParams.prototype[_3 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetGeneralSubscriptionsParams_1)) {
            return listEqual(this.subscriptions, other.subscriptions, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisSetGeneralSubscriptionsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.subscriptions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisSetGeneralSubscriptionsParams_1, _3;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetGeneralSubscriptionsParams.prototype, "AnalysisSetGeneralSubscriptionsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsParams.prototype, _3, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetGeneralSubscriptionsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetGeneralSubscriptionsParams, "$fromRequest", null);
    AnalysisSetGeneralSubscriptionsParams = AnalysisSetGeneralSubscriptionsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetGeneralSubscriptionsParams);
    return AnalysisSetGeneralSubscriptionsParams;
}());
exports.AnalysisSetGeneralSubscriptionsParams = AnalysisSetGeneralSubscriptionsParams;
var AnalysisSetGeneralSubscriptionsResult = /** @class */ (function () {
    function AnalysisSetGeneralSubscriptionsResult() {
    }
    AnalysisSetGeneralSubscriptionsResult_1 = AnalysisSetGeneralSubscriptionsResult;
    AnalysisSetGeneralSubscriptionsResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    AnalysisSetGeneralSubscriptionsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    AnalysisSetGeneralSubscriptionsResult.prototype[_4 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetGeneralSubscriptionsResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisSetGeneralSubscriptionsResult.prototype, "hashCode", {
        get: function () {
            return 386759562;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetGeneralSubscriptionsResult.prototype.AnalysisSetGeneralSubscriptionsResult = function () {
    };
    var AnalysisSetGeneralSubscriptionsResult_1, _4;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsResult.prototype, _4, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetGeneralSubscriptionsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetGeneralSubscriptionsResult.prototype, "AnalysisSetGeneralSubscriptionsResult", null);
    AnalysisSetGeneralSubscriptionsResult = AnalysisSetGeneralSubscriptionsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetGeneralSubscriptionsResult);
    return AnalysisSetGeneralSubscriptionsResult;
}());
exports.AnalysisSetGeneralSubscriptionsResult = AnalysisSetGeneralSubscriptionsResult;
var AnalysisSetPriorityFilesParams = /** @class */ (function () {
    function AnalysisSetPriorityFilesParams(files) {
    }
    AnalysisSetPriorityFilesParams_1 = AnalysisSetPriorityFilesParams;
    Object.defineProperty(AnalysisSetPriorityFilesParams.prototype, "files", {
        get: function () {
            return this._files;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._files = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetPriorityFilesParams.prototype.AnalysisSetPriorityFilesParams = function (files) {
        this.files = files;
    };
    AnalysisSetPriorityFilesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var files = void 0;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files", json.get("files"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "files");
            }
            return new AnalysisSetPriorityFilesParams_1(files);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.setPriorityFiles params", json);
        }
    };
    AnalysisSetPriorityFilesParams.$fromRequest = function (request) {
        return new AnalysisSetPriorityFilesParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisSetPriorityFilesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("files", this.files);
        return result;
    };
    AnalysisSetPriorityFilesParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.setPriorityFiles", this.toJson());
    };
    AnalysisSetPriorityFilesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisSetPriorityFilesParams.prototype[_5 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetPriorityFilesParams_1)) {
            return listEqual(this.files, other.files, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisSetPriorityFilesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.files.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisSetPriorityFilesParams_1, _5;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetPriorityFilesParams.prototype, "AnalysisSetPriorityFilesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesParams.prototype, _5, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetPriorityFilesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetPriorityFilesParams, "$fromRequest", null);
    AnalysisSetPriorityFilesParams = AnalysisSetPriorityFilesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetPriorityFilesParams);
    return AnalysisSetPriorityFilesParams;
}());
exports.AnalysisSetPriorityFilesParams = AnalysisSetPriorityFilesParams;
var AnalysisSetPriorityFilesResult = /** @class */ (function () {
    function AnalysisSetPriorityFilesResult() {
    }
    AnalysisSetPriorityFilesResult_1 = AnalysisSetPriorityFilesResult;
    AnalysisSetPriorityFilesResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    AnalysisSetPriorityFilesResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    AnalysisSetPriorityFilesResult.prototype[_6 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetPriorityFilesResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisSetPriorityFilesResult.prototype, "hashCode", {
        get: function () {
            return 330050055;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetPriorityFilesResult.prototype.AnalysisSetPriorityFilesResult = function () {
    };
    var AnalysisSetPriorityFilesResult_1, _6;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesResult.prototype, _6, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetPriorityFilesResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetPriorityFilesResult.prototype, "AnalysisSetPriorityFilesResult", null);
    AnalysisSetPriorityFilesResult = AnalysisSetPriorityFilesResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetPriorityFilesResult);
    return AnalysisSetPriorityFilesResult;
}());
exports.AnalysisSetPriorityFilesResult = AnalysisSetPriorityFilesResult;
var AnalysisSetSubscriptionsParams = /** @class */ (function () {
    function AnalysisSetSubscriptionsParams(subscriptions) {
    }
    AnalysisSetSubscriptionsParams_1 = AnalysisSetSubscriptionsParams;
    Object.defineProperty(AnalysisSetSubscriptionsParams.prototype, "subscriptions", {
        get: function () {
            return this._subscriptions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._subscriptions = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetSubscriptionsParams.prototype.AnalysisSetSubscriptionsParams = function (subscriptions) {
        this.subscriptions = subscriptions;
    };
    AnalysisSetSubscriptionsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var subscriptions = void 0;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeMap(jsonPath + ".subscriptions", json.get("subscriptions"), {
                    keyDecoder: function (jsonPath, json) {
                        return new AnalysisService.fromJson(jsonDecoder, jsonPath, json);
                    }, valueDecoder: function (jsonPath, json) {
                        return jsonDecoder.decodeList(jsonPath, json, jsonDecoder.decodeString);
                    }
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "subscriptions");
            }
            return new AnalysisSetSubscriptionsParams_1(subscriptions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.setSubscriptions params", json);
        }
    };
    AnalysisSetSubscriptionsParams.$fromRequest = function (request) {
        return new AnalysisSetSubscriptionsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisSetSubscriptionsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("subscriptions", mapMap(this.subscriptions, {
            keyCallback: function (value) {
                return value.toJson();
            }
        }));
        return result;
    };
    AnalysisSetSubscriptionsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.setSubscriptions", this.toJson());
    };
    AnalysisSetSubscriptionsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisSetSubscriptionsParams.prototype[_7 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetSubscriptionsParams_1)) {
            return mapEqual(this.subscriptions, other.subscriptions, function (a, b) {
                return listEqual(a, b, function (a, b) {
                    return a == b;
                });
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisSetSubscriptionsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.subscriptions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisSetSubscriptionsParams_1, _7;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetSubscriptionsParams.prototype, "AnalysisSetSubscriptionsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsParams.prototype, _7, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetSubscriptionsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisSetSubscriptionsParams, "$fromRequest", null);
    AnalysisSetSubscriptionsParams = AnalysisSetSubscriptionsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetSubscriptionsParams);
    return AnalysisSetSubscriptionsParams;
}());
exports.AnalysisSetSubscriptionsParams = AnalysisSetSubscriptionsParams;
var AnalysisSetSubscriptionsResult = /** @class */ (function () {
    function AnalysisSetSubscriptionsResult() {
    }
    AnalysisSetSubscriptionsResult_1 = AnalysisSetSubscriptionsResult;
    AnalysisSetSubscriptionsResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    AnalysisSetSubscriptionsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    AnalysisSetSubscriptionsResult.prototype[_8 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisSetSubscriptionsResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisSetSubscriptionsResult.prototype, "hashCode", {
        get: function () {
            return 218088493;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisSetSubscriptionsResult.prototype.AnalysisSetSubscriptionsResult = function () {
    };
    var AnalysisSetSubscriptionsResult_1, _8;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsResult.prototype, _8, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisSetSubscriptionsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisSetSubscriptionsResult.prototype, "AnalysisSetSubscriptionsResult", null);
    AnalysisSetSubscriptionsResult = AnalysisSetSubscriptionsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisSetSubscriptionsResult);
    return AnalysisSetSubscriptionsResult;
}());
exports.AnalysisSetSubscriptionsResult = AnalysisSetSubscriptionsResult;
var AnalysisStatus = /** @class */ (function () {
    function AnalysisStatus(isAnalyzing, _namedArguments) {
    }
    AnalysisStatus_1 = AnalysisStatus;
    Object.defineProperty(AnalysisStatus.prototype, "isAnalyzing", {
        get: function () {
            return this._isAnalyzing;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._isAnalyzing = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalysisStatus.prototype, "analysisTarget", {
        get: function () {
            return this._analysisTarget;
        },
        set: function (value) {
            this._analysisTarget = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisStatus.prototype.AnalysisStatus = function (isAnalyzing, _namedArguments) {
        var analysisTarget = Object.assign({}, _namedArguments).analysisTarget;
        this.isAnalyzing = isAnalyzing;
        this.analysisTarget = analysisTarget;
    };
    AnalysisStatus.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var isAnalyzing = void 0;
            if (json.containsKey("isAnalyzing")) {
                isAnalyzing = jsonDecoder.decodeBool(jsonPath + ".isAnalyzing", json.get("isAnalyzing"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "isAnalyzing");
            }
            var analysisTarget = void 0;
            if (json.containsKey("analysisTarget")) {
                analysisTarget = jsonDecoder.decodeString(jsonPath + ".analysisTarget", json.get("analysisTarget"));
            }
            return new AnalysisStatus_1(isAnalyzing, {
                analysisTarget: analysisTarget
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "AnalysisStatus", json);
        }
    };
    AnalysisStatus.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("isAnalyzing", this.isAnalyzing);
        if (this.analysisTarget != null) {
            result.set("analysisTarget", this.analysisTarget);
        }
        return result;
    };
    AnalysisStatus.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisStatus.prototype[_9 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisStatus_1)) {
            return this.isAnalyzing == other.isAnalyzing && this.analysisTarget == other.analysisTarget;
        }
        return false;
    };
    Object.defineProperty(AnalysisStatus.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.isAnalyzing.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.analysisTarget).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisStatus_1, _9;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisStatus.prototype, "AnalysisStatus", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisStatus.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisStatus.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisStatus.prototype, _9, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisStatus.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisStatus, "$fromJson", null);
    AnalysisStatus = AnalysisStatus_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisStatus);
    return AnalysisStatus;
}());
exports.AnalysisStatus = AnalysisStatus;
var AnalysisUpdateContentParams = /** @class */ (function () {
    function AnalysisUpdateContentParams(files) {
    }
    AnalysisUpdateContentParams_1 = AnalysisUpdateContentParams;
    Object.defineProperty(AnalysisUpdateContentParams.prototype, "files", {
        get: function () {
            return this._files;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._files = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisUpdateContentParams.prototype.AnalysisUpdateContentParams = function (files) {
        this.files = files;
    };
    AnalysisUpdateContentParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var files = void 0;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeMap(jsonPath + ".files", json.get("files"), {
                    valueDecoder: function (jsonPath, json) {
                        return jsonDecoder.decodeUnion(jsonPath, json, "type", new core.DartMap.literal([
                            ["add", function (jsonPath, json) {
                                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                                }],
                            ["change", function (jsonPath, json) {
                                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                                }],
                            ["remove", function (jsonPath, json) {
                                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                                }]
                        ]));
                    }
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "files");
            }
            return new AnalysisUpdateContentParams_1(files);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.updateContent params", json);
        }
    };
    AnalysisUpdateContentParams.$fromRequest = function (request) {
        return new AnalysisUpdateContentParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisUpdateContentParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("files", mapMap(this.files, {
            valueCallback: function (value) {
                return value.toJson();
            }
        }));
        return result;
    };
    AnalysisUpdateContentParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.updateContent", this.toJson());
    };
    AnalysisUpdateContentParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisUpdateContentParams.prototype[_10 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisUpdateContentParams_1)) {
            return mapEqual(this.files, other.files, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisUpdateContentParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.files.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisUpdateContentParams_1, _10;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisUpdateContentParams.prototype, "AnalysisUpdateContentParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentParams.prototype, _10, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisUpdateContentParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisUpdateContentParams, "$fromRequest", null);
    AnalysisUpdateContentParams = AnalysisUpdateContentParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisUpdateContentParams);
    return AnalysisUpdateContentParams;
}());
exports.AnalysisUpdateContentParams = AnalysisUpdateContentParams;
var AnalysisUpdateContentResult = /** @class */ (function () {
    function AnalysisUpdateContentResult() {
    }
    AnalysisUpdateContentResult_1 = AnalysisUpdateContentResult;
    AnalysisUpdateContentResult.prototype.AnalysisUpdateContentResult = function () {
    };
    AnalysisUpdateContentResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            return new AnalysisUpdateContentResult_1();
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.updateContent result", json);
        }
    };
    AnalysisUpdateContentResult.$fromResponse = function (response) {
        return new AnalysisUpdateContentResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    AnalysisUpdateContentResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        return result;
    };
    AnalysisUpdateContentResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    AnalysisUpdateContentResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisUpdateContentResult.prototype[_11 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisUpdateContentResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisUpdateContentResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisUpdateContentResult_1, _11;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisUpdateContentResult.prototype, "AnalysisUpdateContentResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentResult.prototype, _11, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateContentResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisUpdateContentResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisUpdateContentResult, "$fromResponse", null);
    AnalysisUpdateContentResult = AnalysisUpdateContentResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisUpdateContentResult);
    return AnalysisUpdateContentResult;
}());
exports.AnalysisUpdateContentResult = AnalysisUpdateContentResult;
var AnalysisUpdateOptionsParams = /** @class */ (function () {
    function AnalysisUpdateOptionsParams(options) {
    }
    AnalysisUpdateOptionsParams_1 = AnalysisUpdateOptionsParams;
    Object.defineProperty(AnalysisUpdateOptionsParams.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._options = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisUpdateOptionsParams.prototype.AnalysisUpdateOptionsParams = function (options) {
        this.options = options;
    };
    AnalysisUpdateOptionsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var options = void 0;
            if (json.containsKey("options")) {
                options = new AnalysisOptions.fromJson(jsonDecoder, jsonPath + ".options", json.get("options"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "options");
            }
            return new AnalysisUpdateOptionsParams_1(options);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.updateOptions params", json);
        }
    };
    AnalysisUpdateOptionsParams.$fromRequest = function (request) {
        return new AnalysisUpdateOptionsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    AnalysisUpdateOptionsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("options", this.options.toJson());
        return result;
    };
    AnalysisUpdateOptionsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "analysis.updateOptions", this.toJson());
    };
    AnalysisUpdateOptionsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisUpdateOptionsParams.prototype[_12 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisUpdateOptionsParams_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.options, other.options);
        }
        return false;
    };
    Object.defineProperty(AnalysisUpdateOptionsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.options.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisUpdateOptionsParams_1, _12;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisUpdateOptionsParams.prototype, "AnalysisUpdateOptionsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsParams.prototype, _12, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisUpdateOptionsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisUpdateOptionsParams, "$fromRequest", null);
    AnalysisUpdateOptionsParams = AnalysisUpdateOptionsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisUpdateOptionsParams);
    return AnalysisUpdateOptionsParams;
}());
exports.AnalysisUpdateOptionsParams = AnalysisUpdateOptionsParams;
var AnalysisUpdateOptionsResult = /** @class */ (function () {
    function AnalysisUpdateOptionsResult() {
    }
    AnalysisUpdateOptionsResult_1 = AnalysisUpdateOptionsResult;
    AnalysisUpdateOptionsResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    AnalysisUpdateOptionsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    AnalysisUpdateOptionsResult.prototype[_13 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisUpdateOptionsResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AnalysisUpdateOptionsResult.prototype, "hashCode", {
        get: function () {
            return 179689467;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisUpdateOptionsResult.prototype.AnalysisUpdateOptionsResult = function () {
    };
    var AnalysisUpdateOptionsResult_1, _13;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsResult.prototype, _13, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisUpdateOptionsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisUpdateOptionsResult.prototype, "AnalysisUpdateOptionsResult", null);
    AnalysisUpdateOptionsResult = AnalysisUpdateOptionsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisUpdateOptionsResult);
    return AnalysisUpdateOptionsResult;
}());
exports.AnalysisUpdateOptionsResult = AnalysisUpdateOptionsResult;
var CompletionGetSuggestionsParams = /** @class */ (function () {
    function CompletionGetSuggestionsParams(file, offset) {
    }
    CompletionGetSuggestionsParams_1 = CompletionGetSuggestionsParams;
    Object.defineProperty(CompletionGetSuggestionsParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionGetSuggestionsParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    CompletionGetSuggestionsParams.prototype.CompletionGetSuggestionsParams = function (file, offset) {
        this.file = file;
        this.offset = offset;
    };
    CompletionGetSuggestionsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            return new CompletionGetSuggestionsParams_1(file, offset);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "completion.getSuggestions params", json);
        }
    };
    CompletionGetSuggestionsParams.$fromRequest = function (request) {
        return new CompletionGetSuggestionsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    CompletionGetSuggestionsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        return result;
    };
    CompletionGetSuggestionsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "completion.getSuggestions", this.toJson());
    };
    CompletionGetSuggestionsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    CompletionGetSuggestionsParams.prototype[_14 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, CompletionGetSuggestionsParams_1)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    };
    Object.defineProperty(CompletionGetSuggestionsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var CompletionGetSuggestionsParams_1, _14;
    __decorate([
        utils_1.defaultConstructor
    ], CompletionGetSuggestionsParams.prototype, "CompletionGetSuggestionsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsParams.prototype, _14, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], CompletionGetSuggestionsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], CompletionGetSuggestionsParams, "$fromRequest", null);
    CompletionGetSuggestionsParams = CompletionGetSuggestionsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], CompletionGetSuggestionsParams);
    return CompletionGetSuggestionsParams;
}());
exports.CompletionGetSuggestionsParams = CompletionGetSuggestionsParams;
var CompletionGetSuggestionsResult = /** @class */ (function () {
    function CompletionGetSuggestionsResult(id) {
    }
    CompletionGetSuggestionsResult_1 = CompletionGetSuggestionsResult;
    Object.defineProperty(CompletionGetSuggestionsResult.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    CompletionGetSuggestionsResult.prototype.CompletionGetSuggestionsResult = function (id) {
        this.id = id;
    };
    CompletionGetSuggestionsResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            return new CompletionGetSuggestionsResult_1(id);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "completion.getSuggestions result", json);
        }
    };
    CompletionGetSuggestionsResult.$fromResponse = function (response) {
        return new CompletionGetSuggestionsResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    CompletionGetSuggestionsResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        return result;
    };
    CompletionGetSuggestionsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    CompletionGetSuggestionsResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    CompletionGetSuggestionsResult.prototype[_15 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, CompletionGetSuggestionsResult_1)) {
            return this.id == other.id;
        }
        return false;
    };
    Object.defineProperty(CompletionGetSuggestionsResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var CompletionGetSuggestionsResult_1, _15;
    __decorate([
        utils_1.defaultConstructor
    ], CompletionGetSuggestionsResult.prototype, "CompletionGetSuggestionsResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsResult.prototype, _15, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionGetSuggestionsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], CompletionGetSuggestionsResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], CompletionGetSuggestionsResult, "$fromResponse", null);
    CompletionGetSuggestionsResult = CompletionGetSuggestionsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], CompletionGetSuggestionsResult);
    return CompletionGetSuggestionsResult;
}());
exports.CompletionGetSuggestionsResult = CompletionGetSuggestionsResult;
var CompletionResultsParams = /** @class */ (function () {
    function CompletionResultsParams(id, replacementOffset, replacementLength, results, isLast) {
    }
    CompletionResultsParams_1 = CompletionResultsParams;
    Object.defineProperty(CompletionResultsParams.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionResultsParams.prototype, "replacementOffset", {
        get: function () {
            return this._replacementOffset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._replacementOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionResultsParams.prototype, "replacementLength", {
        get: function () {
            return this._replacementLength;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._replacementLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionResultsParams.prototype, "results", {
        get: function () {
            return this._results;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._results = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionResultsParams.prototype, "isLast", {
        get: function () {
            return this._isLast;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._isLast = value;
        },
        enumerable: true,
        configurable: true
    });
    CompletionResultsParams.prototype.CompletionResultsParams = function (id, replacementOffset, replacementLength, results, isLast) {
        this.id = id;
        this.replacementOffset = replacementOffset;
        this.replacementLength = replacementLength;
        this.results = results;
        this.isLast = isLast;
    };
    CompletionResultsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            var replacementOffset = void 0;
            if (json.containsKey("replacementOffset")) {
                replacementOffset = jsonDecoder.decodeInt(jsonPath + ".replacementOffset", json.get("replacementOffset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "replacementOffset");
            }
            var replacementLength = void 0;
            if (json.containsKey("replacementLength")) {
                replacementLength = jsonDecoder.decodeInt(jsonPath + ".replacementLength", json.get("replacementLength"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "replacementLength");
            }
            var results = void 0;
            if (json.containsKey("results")) {
                results = jsonDecoder.decodeList(jsonPath + ".results", json.get("results"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "results");
            }
            var isLast = void 0;
            if (json.containsKey("isLast")) {
                isLast = jsonDecoder.decodeBool(jsonPath + ".isLast", json.get("isLast"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "isLast");
            }
            return new CompletionResultsParams_1(id, replacementOffset, replacementLength, results, isLast);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "completion.results params", json);
        }
    };
    CompletionResultsParams.$fromNotification = function (notification) {
        return new CompletionResultsParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    CompletionResultsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        result.set("replacementOffset", this.replacementOffset);
        result.set("replacementLength", this.replacementLength);
        result.set("results", this.results.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("isLast", this.isLast);
        return result;
    };
    CompletionResultsParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "completion.results", this.toJson());
    };
    CompletionResultsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    CompletionResultsParams.prototype[_16 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, CompletionResultsParams_1)) {
            return this.id == other.id && this.replacementOffset == other.replacementOffset && this.replacementLength == other.replacementLength && listEqual(this.results, other.results, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && this.isLast == other.isLast;
        }
        return false;
    };
    Object.defineProperty(CompletionResultsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.replacementOffset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.replacementLength).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.results.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.isLast.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var CompletionResultsParams_1, _16;
    __decorate([
        utils_1.defaultConstructor
    ], CompletionResultsParams.prototype, "CompletionResultsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionResultsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionResultsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionResultsParams.prototype, _16, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionResultsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], CompletionResultsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], CompletionResultsParams, "$fromNotification", null);
    CompletionResultsParams = CompletionResultsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], CompletionResultsParams);
    return CompletionResultsParams;
}());
exports.CompletionResultsParams = CompletionResultsParams;
var AnalysisAnalyzedFilesParams = /** @class */ (function () {
    function AnalysisAnalyzedFilesParams(directories) {
    }
    AnalysisAnalyzedFilesParams_1 = AnalysisAnalyzedFilesParams;
    Object.defineProperty(AnalysisAnalyzedFilesParams.prototype, "directories", {
        get: function () {
            return this._directories;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._directories = value;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisAnalyzedFilesParams.prototype.AnalysisAnalyzedFilesParams = function (directories) {
        this.directories = directories;
    };
    AnalysisAnalyzedFilesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var directories = void 0;
            if (json.containsKey("directories")) {
                directories = jsonDecoder.decodeList(jsonPath + ".directories", json.get("directories"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "directories");
            }
            return new AnalysisAnalyzedFilesParams_1(directories);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "analysis.analyzedFiles params", json);
        }
    };
    AnalysisAnalyzedFilesParams.$fromNotification = function (notification) {
        return new AnalysisAnalyzedFilesParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    AnalysisAnalyzedFilesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("directories", this.directories);
        return result;
    };
    AnalysisAnalyzedFilesParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "analysis.analyzedFiles", this.toJson());
    };
    AnalysisAnalyzedFilesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    AnalysisAnalyzedFilesParams.prototype[_17 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, AnalysisAnalyzedFilesParams_1)) {
            return listEqual(this.directories, other.directories, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(AnalysisAnalyzedFilesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.directories.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var AnalysisAnalyzedFilesParams_1, _17;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisAnalyzedFilesParams.prototype, "AnalysisAnalyzedFilesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisAnalyzedFilesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisAnalyzedFilesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisAnalyzedFilesParams.prototype, _17, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AnalysisAnalyzedFilesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisAnalyzedFilesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], AnalysisAnalyzedFilesParams, "$fromNotification", null);
    AnalysisAnalyzedFilesParams = AnalysisAnalyzedFilesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AnalysisAnalyzedFilesParams);
    return AnalysisAnalyzedFilesParams;
}());
exports.AnalysisAnalyzedFilesParams = AnalysisAnalyzedFilesParams;
var ServerStatusParams = /** @class */ (function () {
    function ServerStatusParams(_namedArguments) {
    }
    ServerStatusParams_1 = ServerStatusParams;
    Object.defineProperty(ServerStatusParams.prototype, "analysis", {
        get: function () {
            return this._analysis;
        },
        set: function (value) {
            this._analysis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerStatusParams.prototype, "pub", {
        get: function () {
            return this._pub;
        },
        set: function (value) {
            this._pub = value;
        },
        enumerable: true,
        configurable: true
    });
    ServerStatusParams.prototype.ServerStatusParams = function (_namedArguments) {
        var _19 = Object.assign({}, _namedArguments), analysis = _19.analysis, pub = _19.pub;
        this.analysis = analysis;
        this.pub = pub;
    };
    ServerStatusParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var analysis = void 0;
            if (json.containsKey("analysis")) {
                analysis = new AnalysisStatus.fromJson(jsonDecoder, jsonPath + ".analysis", json.get("analysis"));
            }
            var pub = void 0;
            if (json.containsKey("pub")) {
                pub = new PubStatus.fromJson(jsonDecoder, jsonPath + ".pub", json.get("pub"));
            }
            return new ServerStatusParams_1({
                analysis: analysis, pub: pub
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "server.status params", json);
        }
    };
    ServerStatusParams.$fromNotification = function (notification) {
        return new ServerStatusParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    ServerStatusParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.analysis != null) {
            result.set("analysis", this.analysis.toJson());
        }
        if (this.pub != null) {
            result.set("pub", this.pub.toJson());
        }
        return result;
    };
    ServerStatusParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "server.status", this.toJson());
    };
    ServerStatusParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ServerStatusParams.prototype[_18 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerStatusParams_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.analysis, other.analysis) && utils_1.op(utils_1.Op.EQUALS, this.pub, other.pub);
        }
        return false;
    };
    Object.defineProperty(ServerStatusParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.analysis.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.pub.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ServerStatusParams_1, _18;
    __decorate([
        utils_1.defaultConstructor
    ], ServerStatusParams.prototype, "ServerStatusParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerStatusParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerStatusParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerStatusParams.prototype, _18, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerStatusParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ServerStatusParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ServerStatusParams, "$fromNotification", null);
    ServerStatusParams = ServerStatusParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerStatusParams);
    return ServerStatusParams;
}());
exports.ServerStatusParams = ServerStatusParams;
var ServerShutdownResult = /** @class */ (function () {
    function ServerShutdownResult() {
    }
    ServerShutdownResult_1 = ServerShutdownResult;
    ServerShutdownResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    ServerShutdownResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    ServerShutdownResult.prototype[_19 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerShutdownResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ServerShutdownResult.prototype, "hashCode", {
        get: function () {
            return 193626532;
        },
        enumerable: true,
        configurable: true
    });
    ServerShutdownResult.prototype.ServerShutdownResult = function () {
    };
    var ServerShutdownResult_1, _19;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownResult.prototype, _19, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ServerShutdownResult.prototype, "ServerShutdownResult", null);
    ServerShutdownResult = ServerShutdownResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerShutdownResult);
    return ServerShutdownResult;
}());
exports.ServerShutdownResult = ServerShutdownResult;
var ServerShutdownParams = /** @class */ (function () {
    function ServerShutdownParams() {
    }
    ServerShutdownParams_1 = ServerShutdownParams;
    ServerShutdownParams.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    ServerShutdownParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "server.shutdown", null);
    };
    ServerShutdownParams.prototype[_20 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerShutdownParams_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ServerShutdownParams.prototype, "hashCode", {
        get: function () {
            return 366630911;
        },
        enumerable: true,
        configurable: true
    });
    ServerShutdownParams.prototype.ServerShutdownParams = function () {
    };
    var ServerShutdownParams_1, _20;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownParams.prototype, _20, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerShutdownParams.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ServerShutdownParams.prototype, "ServerShutdownParams", null);
    ServerShutdownParams = ServerShutdownParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerShutdownParams);
    return ServerShutdownParams;
}());
exports.ServerShutdownParams = ServerShutdownParams;
var ServerSetSubscriptionsResult = /** @class */ (function () {
    function ServerSetSubscriptionsResult() {
    }
    ServerSetSubscriptionsResult_1 = ServerSetSubscriptionsResult;
    ServerSetSubscriptionsResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    ServerSetSubscriptionsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    ServerSetSubscriptionsResult.prototype[_21 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerSetSubscriptionsResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ServerSetSubscriptionsResult.prototype, "hashCode", {
        get: function () {
            return 748820900;
        },
        enumerable: true,
        configurable: true
    });
    ServerSetSubscriptionsResult.prototype.ServerSetSubscriptionsResult = function () {
    };
    var ServerSetSubscriptionsResult_1, _21;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsResult.prototype, _21, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ServerSetSubscriptionsResult.prototype, "ServerSetSubscriptionsResult", null);
    ServerSetSubscriptionsResult = ServerSetSubscriptionsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerSetSubscriptionsResult);
    return ServerSetSubscriptionsResult;
}());
exports.ServerSetSubscriptionsResult = ServerSetSubscriptionsResult;
var DiagnosticGetDiagnosticsParams = /** @class */ (function () {
    function DiagnosticGetDiagnosticsParams() {
    }
    DiagnosticGetDiagnosticsParams_1 = DiagnosticGetDiagnosticsParams;
    DiagnosticGetDiagnosticsParams.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    DiagnosticGetDiagnosticsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "diagnostic.getDiagnostics", null);
    };
    DiagnosticGetDiagnosticsParams.prototype[_22 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, DiagnosticGetDiagnosticsParams_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(DiagnosticGetDiagnosticsParams.prototype, "hashCode", {
        get: function () {
            return 587526202;
        },
        enumerable: true,
        configurable: true
    });
    DiagnosticGetDiagnosticsParams.prototype.DiagnosticGetDiagnosticsParams = function () {
    };
    var DiagnosticGetDiagnosticsParams_1, _22;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsParams.prototype, _22, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], DiagnosticGetDiagnosticsParams.prototype, "DiagnosticGetDiagnosticsParams", null);
    DiagnosticGetDiagnosticsParams = DiagnosticGetDiagnosticsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DiagnosticGetDiagnosticsParams);
    return DiagnosticGetDiagnosticsParams;
}());
exports.DiagnosticGetDiagnosticsParams = DiagnosticGetDiagnosticsParams;
var DiagnosticGetDiagnosticsResult = /** @class */ (function () {
    function DiagnosticGetDiagnosticsResult(contexts) {
    }
    DiagnosticGetDiagnosticsResult_1 = DiagnosticGetDiagnosticsResult;
    Object.defineProperty(DiagnosticGetDiagnosticsResult.prototype, "contexts", {
        get: function () {
            return this._contexts;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._contexts = value;
        },
        enumerable: true,
        configurable: true
    });
    DiagnosticGetDiagnosticsResult.prototype.DiagnosticGetDiagnosticsResult = function (contexts) {
        this.contexts = contexts;
    };
    DiagnosticGetDiagnosticsResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var contexts = void 0;
            if (json.containsKey("contexts")) {
                contexts = jsonDecoder.decodeList(jsonPath + ".contexts", json.get("contexts"), function (jsonPath, json) {
                    return new ContextData.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "contexts");
            }
            return new DiagnosticGetDiagnosticsResult_1(contexts);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "diagnostic.getDiagnostics result", json);
        }
    };
    DiagnosticGetDiagnosticsResult.$fromResponse = function (response) {
        return new DiagnosticGetDiagnosticsResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    DiagnosticGetDiagnosticsResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("contexts", this.contexts.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    DiagnosticGetDiagnosticsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    DiagnosticGetDiagnosticsResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    DiagnosticGetDiagnosticsResult.prototype[_23 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, DiagnosticGetDiagnosticsResult_1)) {
            return listEqual(this.contexts, other.contexts, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(DiagnosticGetDiagnosticsResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.contexts.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var DiagnosticGetDiagnosticsResult_1, _23;
    __decorate([
        utils_1.defaultConstructor
    ], DiagnosticGetDiagnosticsResult.prototype, "DiagnosticGetDiagnosticsResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsResult.prototype, _23, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetDiagnosticsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], DiagnosticGetDiagnosticsResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], DiagnosticGetDiagnosticsResult, "$fromResponse", null);
    DiagnosticGetDiagnosticsResult = DiagnosticGetDiagnosticsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DiagnosticGetDiagnosticsResult);
    return DiagnosticGetDiagnosticsResult;
}());
exports.DiagnosticGetDiagnosticsResult = DiagnosticGetDiagnosticsResult;
var DiagnosticGetServerPortParams = /** @class */ (function () {
    function DiagnosticGetServerPortParams() {
    }
    DiagnosticGetServerPortParams_1 = DiagnosticGetServerPortParams;
    DiagnosticGetServerPortParams.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    DiagnosticGetServerPortParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "diagnostic.getServerPort", null);
    };
    DiagnosticGetServerPortParams.prototype[_24 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, DiagnosticGetServerPortParams_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(DiagnosticGetServerPortParams.prototype, "hashCode", {
        get: function () {
            return 367508704;
        },
        enumerable: true,
        configurable: true
    });
    DiagnosticGetServerPortParams.prototype.DiagnosticGetServerPortParams = function () {
    };
    var DiagnosticGetServerPortParams_1, _24;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortParams.prototype, _24, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortParams.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], DiagnosticGetServerPortParams.prototype, "DiagnosticGetServerPortParams", null);
    DiagnosticGetServerPortParams = DiagnosticGetServerPortParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DiagnosticGetServerPortParams);
    return DiagnosticGetServerPortParams;
}());
exports.DiagnosticGetServerPortParams = DiagnosticGetServerPortParams;
var DiagnosticGetServerPortResult = /** @class */ (function () {
    function DiagnosticGetServerPortResult(port) {
    }
    DiagnosticGetServerPortResult_1 = DiagnosticGetServerPortResult;
    Object.defineProperty(DiagnosticGetServerPortResult.prototype, "port", {
        get: function () {
            return this._port;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._port = value;
        },
        enumerable: true,
        configurable: true
    });
    DiagnosticGetServerPortResult.prototype.DiagnosticGetServerPortResult = function (port) {
        this.port = port;
    };
    DiagnosticGetServerPortResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var port = void 0;
            if (json.containsKey("port")) {
                port = jsonDecoder.decodeInt(jsonPath + ".port", json.get("port"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "port");
            }
            return new DiagnosticGetServerPortResult_1(port);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "diagnostic.getServerPort result", json);
        }
    };
    DiagnosticGetServerPortResult.$fromResponse = function (response) {
        return new DiagnosticGetServerPortResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    DiagnosticGetServerPortResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("port", this.port);
        return result;
    };
    DiagnosticGetServerPortResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    DiagnosticGetServerPortResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    DiagnosticGetServerPortResult.prototype[_25 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, DiagnosticGetServerPortResult_1)) {
            return this.port == other.port;
        }
        return false;
    };
    Object.defineProperty(DiagnosticGetServerPortResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.port).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var DiagnosticGetServerPortResult_1, _25;
    __decorate([
        utils_1.defaultConstructor
    ], DiagnosticGetServerPortResult.prototype, "DiagnosticGetServerPortResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortResult.prototype, _25, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DiagnosticGetServerPortResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], DiagnosticGetServerPortResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], DiagnosticGetServerPortResult, "$fromResponse", null);
    DiagnosticGetServerPortResult = DiagnosticGetServerPortResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DiagnosticGetServerPortResult);
    return DiagnosticGetServerPortResult;
}());
exports.DiagnosticGetServerPortResult = DiagnosticGetServerPortResult;
var EditFormatParams = /** @class */ (function () {
    function EditFormatParams(file, selectionOffset, selectionLength, _namedArguments) {
    }
    EditFormatParams_1 = EditFormatParams;
    Object.defineProperty(EditFormatParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditFormatParams.prototype, "selectionOffset", {
        get: function () {
            return this._selectionOffset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._selectionOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditFormatParams.prototype, "selectionLength", {
        get: function () {
            return this._selectionLength;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._selectionLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditFormatParams.prototype, "lineLength", {
        get: function () {
            return this._lineLength;
        },
        set: function (value) {
            this._lineLength = value;
        },
        enumerable: true,
        configurable: true
    });
    EditFormatParams.prototype.EditFormatParams = function (file, selectionOffset, selectionLength, _namedArguments) {
        var lineLength = Object.assign({}, _namedArguments).lineLength;
        this.file = file;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
        this.lineLength = lineLength;
    };
    EditFormatParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var selectionOffset = void 0;
            if (json.containsKey("selectionOffset")) {
                selectionOffset = jsonDecoder.decodeInt(jsonPath + ".selectionOffset", json.get("selectionOffset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "selectionOffset");
            }
            var selectionLength = void 0;
            if (json.containsKey("selectionLength")) {
                selectionLength = jsonDecoder.decodeInt(jsonPath + ".selectionLength", json.get("selectionLength"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "selectionLength");
            }
            var lineLength = void 0;
            if (json.containsKey("lineLength")) {
                lineLength = jsonDecoder.decodeInt(jsonPath + ".lineLength", json.get("lineLength"));
            }
            return new EditFormatParams_1(file, selectionOffset, selectionLength, {
                lineLength: lineLength
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.format params", json);
        }
    };
    EditFormatParams.$fromRequest = function (request) {
        return new EditFormatParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    EditFormatParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("selectionOffset", this.selectionOffset);
        result.set("selectionLength", this.selectionLength);
        if (this.lineLength != null) {
            result.set("lineLength", this.lineLength);
        }
        return result;
    };
    EditFormatParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.format", this.toJson());
    };
    EditFormatParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditFormatParams.prototype[_26 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditFormatParams_1)) {
            return this.file == other.file && this.selectionOffset == other.selectionOffset && this.selectionLength == other.selectionLength && this.lineLength == other.lineLength;
        }
        return false;
    };
    Object.defineProperty(EditFormatParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.selectionOffset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.selectionLength).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.lineLength).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditFormatParams_1, _26;
    __decorate([
        utils_1.defaultConstructor
    ], EditFormatParams.prototype, "EditFormatParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatParams.prototype, _26, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditFormatParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditFormatParams, "$fromRequest", null);
    EditFormatParams = EditFormatParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditFormatParams);
    return EditFormatParams;
}());
exports.EditFormatParams = EditFormatParams;
var EditFormatResult = /** @class */ (function () {
    function EditFormatResult(edits, selectionOffset, selectionLength) {
    }
    EditFormatResult_1 = EditFormatResult;
    Object.defineProperty(EditFormatResult.prototype, "edits", {
        get: function () {
            return this._edits;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._edits = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditFormatResult.prototype, "selectionOffset", {
        get: function () {
            return this._selectionOffset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._selectionOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditFormatResult.prototype, "selectionLength", {
        get: function () {
            return this._selectionLength;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._selectionLength = value;
        },
        enumerable: true,
        configurable: true
    });
    EditFormatResult.prototype.EditFormatResult = function (edits, selectionOffset, selectionLength) {
        this.edits = edits;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
    };
    EditFormatResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var edits = void 0;
            if (json.containsKey("edits")) {
                edits = jsonDecoder.decodeList(jsonPath + ".edits", json.get("edits"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "edits");
            }
            var selectionOffset = void 0;
            if (json.containsKey("selectionOffset")) {
                selectionOffset = jsonDecoder.decodeInt(jsonPath + ".selectionOffset", json.get("selectionOffset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "selectionOffset");
            }
            var selectionLength = void 0;
            if (json.containsKey("selectionLength")) {
                selectionLength = jsonDecoder.decodeInt(jsonPath + ".selectionLength", json.get("selectionLength"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "selectionLength");
            }
            return new EditFormatResult_1(edits, selectionOffset, selectionLength);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.format result", json);
        }
    };
    EditFormatResult.$fromResponse = function (response) {
        return new EditFormatResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditFormatResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("edits", this.edits.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("selectionOffset", this.selectionOffset);
        result.set("selectionLength", this.selectionLength);
        return result;
    };
    EditFormatResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditFormatResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditFormatResult.prototype[_27 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditFormatResult_1)) {
            return listEqual(this.edits, other.edits, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && this.selectionOffset == other.selectionOffset && this.selectionLength == other.selectionLength;
        }
        return false;
    };
    Object.defineProperty(EditFormatResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.edits.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.selectionOffset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.selectionLength).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditFormatResult_1, _27;
    __decorate([
        utils_1.defaultConstructor
    ], EditFormatResult.prototype, "EditFormatResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatResult.prototype, _27, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditFormatResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditFormatResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditFormatResult, "$fromResponse", null);
    EditFormatResult = EditFormatResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditFormatResult);
    return EditFormatResult;
}());
exports.EditFormatResult = EditFormatResult;
var EditGetAssistsParams = /** @class */ (function () {
    function EditGetAssistsParams(file, offset, length) {
    }
    EditGetAssistsParams_1 = EditGetAssistsParams;
    Object.defineProperty(EditGetAssistsParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetAssistsParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetAssistsParams.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetAssistsParams.prototype.EditGetAssistsParams = function (file, offset, length) {
        this.file = file;
        this.offset = offset;
        this.length = length;
    };
    EditGetAssistsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_3;
            if (json.containsKey("length")) {
                length_3 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            return new EditGetAssistsParams_1(file, offset, length_3);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getAssists params", json);
        }
    };
    EditGetAssistsParams.$fromRequest = function (request) {
        return new EditGetAssistsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    EditGetAssistsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        result.set("length", this.length);
        return result;
    };
    EditGetAssistsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.getAssists", this.toJson());
    };
    EditGetAssistsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetAssistsParams.prototype[_28 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetAssistsParams_1)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length;
        }
        return false;
    };
    Object.defineProperty(EditGetAssistsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetAssistsParams_1, _28;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetAssistsParams.prototype, "EditGetAssistsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsParams.prototype, _28, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAssistsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAssistsParams, "$fromRequest", null);
    EditGetAssistsParams = EditGetAssistsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetAssistsParams);
    return EditGetAssistsParams;
}());
exports.EditGetAssistsParams = EditGetAssistsParams;
var EditGetAssistsResult = /** @class */ (function () {
    function EditGetAssistsResult(assists) {
    }
    EditGetAssistsResult_1 = EditGetAssistsResult;
    Object.defineProperty(EditGetAssistsResult.prototype, "assists", {
        get: function () {
            return this._assists;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._assists = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetAssistsResult.prototype.EditGetAssistsResult = function (assists) {
        this.assists = assists;
    };
    EditGetAssistsResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var assists = void 0;
            if (json.containsKey("assists")) {
                assists = jsonDecoder.decodeList(jsonPath + ".assists", json.get("assists"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "assists");
            }
            return new EditGetAssistsResult_1(assists);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getAssists result", json);
        }
    };
    EditGetAssistsResult.$fromResponse = function (response) {
        return new EditGetAssistsResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditGetAssistsResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("assists", this.assists.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    EditGetAssistsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditGetAssistsResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetAssistsResult.prototype[_29 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetAssistsResult_1)) {
            return listEqual(this.assists, other.assists, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(EditGetAssistsResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.assists.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetAssistsResult_1, _29;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetAssistsResult.prototype, "EditGetAssistsResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsResult.prototype, _29, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAssistsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAssistsResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAssistsResult, "$fromResponse", null);
    EditGetAssistsResult = EditGetAssistsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetAssistsResult);
    return EditGetAssistsResult;
}());
exports.EditGetAssistsResult = EditGetAssistsResult;
var EditGetAvailableRefactoringsParams = /** @class */ (function () {
    function EditGetAvailableRefactoringsParams(file, offset, length) {
    }
    EditGetAvailableRefactoringsParams_1 = EditGetAvailableRefactoringsParams;
    Object.defineProperty(EditGetAvailableRefactoringsParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetAvailableRefactoringsParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetAvailableRefactoringsParams.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetAvailableRefactoringsParams.prototype.EditGetAvailableRefactoringsParams = function (file, offset, length) {
        this.file = file;
        this.offset = offset;
        this.length = length;
    };
    EditGetAvailableRefactoringsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_4;
            if (json.containsKey("length")) {
                length_4 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            return new EditGetAvailableRefactoringsParams_1(file, offset, length_4);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getAvailableRefactorings params", json);
        }
    };
    EditGetAvailableRefactoringsParams.$fromRequest = function (request) {
        return new EditGetAvailableRefactoringsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    EditGetAvailableRefactoringsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        result.set("length", this.length);
        return result;
    };
    EditGetAvailableRefactoringsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.getAvailableRefactorings", this.toJson());
    };
    EditGetAvailableRefactoringsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetAvailableRefactoringsParams.prototype[_30 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetAvailableRefactoringsParams_1)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length;
        }
        return false;
    };
    Object.defineProperty(EditGetAvailableRefactoringsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetAvailableRefactoringsParams_1, _30;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetAvailableRefactoringsParams.prototype, "EditGetAvailableRefactoringsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsParams.prototype, _30, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAvailableRefactoringsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAvailableRefactoringsParams, "$fromRequest", null);
    EditGetAvailableRefactoringsParams = EditGetAvailableRefactoringsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetAvailableRefactoringsParams);
    return EditGetAvailableRefactoringsParams;
}());
exports.EditGetAvailableRefactoringsParams = EditGetAvailableRefactoringsParams;
var EditGetAvailableRefactoringsResult = /** @class */ (function () {
    function EditGetAvailableRefactoringsResult(kinds) {
    }
    EditGetAvailableRefactoringsResult_1 = EditGetAvailableRefactoringsResult;
    Object.defineProperty(EditGetAvailableRefactoringsResult.prototype, "kinds", {
        get: function () {
            return this._kinds;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._kinds = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetAvailableRefactoringsResult.prototype.EditGetAvailableRefactoringsResult = function (kinds) {
        this.kinds = kinds;
    };
    EditGetAvailableRefactoringsResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var kinds = void 0;
            if (json.containsKey("kinds")) {
                kinds = jsonDecoder.decodeList(jsonPath + ".kinds", json.get("kinds"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "kinds");
            }
            return new EditGetAvailableRefactoringsResult_1(kinds);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getAvailableRefactorings result", json);
        }
    };
    EditGetAvailableRefactoringsResult.$fromResponse = function (response) {
        return new EditGetAvailableRefactoringsResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditGetAvailableRefactoringsResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("kinds", this.kinds.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    EditGetAvailableRefactoringsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditGetAvailableRefactoringsResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetAvailableRefactoringsResult.prototype[_31 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetAvailableRefactoringsResult_1)) {
            return listEqual(this.kinds, other.kinds, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(EditGetAvailableRefactoringsResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.kinds.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetAvailableRefactoringsResult_1, _31;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetAvailableRefactoringsResult.prototype, "EditGetAvailableRefactoringsResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsResult.prototype, _31, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetAvailableRefactoringsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAvailableRefactoringsResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetAvailableRefactoringsResult, "$fromResponse", null);
    EditGetAvailableRefactoringsResult = EditGetAvailableRefactoringsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetAvailableRefactoringsResult);
    return EditGetAvailableRefactoringsResult;
}());
exports.EditGetAvailableRefactoringsResult = EditGetAvailableRefactoringsResult;
var EditGetFixesParams = /** @class */ (function () {
    function EditGetFixesParams(file, offset) {
    }
    EditGetFixesParams_1 = EditGetFixesParams;
    Object.defineProperty(EditGetFixesParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetFixesParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetFixesParams.prototype.EditGetFixesParams = function (file, offset) {
        this.file = file;
        this.offset = offset;
    };
    EditGetFixesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            return new EditGetFixesParams_1(file, offset);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getFixes params", json);
        }
    };
    EditGetFixesParams.$fromRequest = function (request) {
        return new EditGetFixesParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    EditGetFixesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        return result;
    };
    EditGetFixesParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.getFixes", this.toJson());
    };
    EditGetFixesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetFixesParams.prototype[_32 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetFixesParams_1)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    };
    Object.defineProperty(EditGetFixesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetFixesParams_1, _32;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetFixesParams.prototype, "EditGetFixesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesParams.prototype, _32, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetFixesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetFixesParams, "$fromRequest", null);
    EditGetFixesParams = EditGetFixesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetFixesParams);
    return EditGetFixesParams;
}());
exports.EditGetFixesParams = EditGetFixesParams;
var EditGetFixesResult = /** @class */ (function () {
    function EditGetFixesResult(fixes) {
    }
    EditGetFixesResult_1 = EditGetFixesResult;
    Object.defineProperty(EditGetFixesResult.prototype, "fixes", {
        get: function () {
            return this._fixes;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._fixes = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetFixesResult.prototype.EditGetFixesResult = function (fixes) {
        this.fixes = fixes;
    };
    EditGetFixesResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var fixes = void 0;
            if (json.containsKey("fixes")) {
                fixes = jsonDecoder.decodeList(jsonPath + ".fixes", json.get("fixes"), function (jsonPath, json) {
                    return new AnalysisErrorFixes.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "fixes");
            }
            return new EditGetFixesResult_1(fixes);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getFixes result", json);
        }
    };
    EditGetFixesResult.$fromResponse = function (response) {
        return new EditGetFixesResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditGetFixesResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("fixes", this.fixes.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    EditGetFixesResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditGetFixesResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetFixesResult.prototype[_33 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetFixesResult_1)) {
            return listEqual(this.fixes, other.fixes, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(EditGetFixesResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.fixes.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetFixesResult_1, _33;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetFixesResult.prototype, "EditGetFixesResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesResult.prototype, _33, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetFixesResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetFixesResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetFixesResult, "$fromResponse", null);
    EditGetFixesResult = EditGetFixesResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetFixesResult);
    return EditGetFixesResult;
}());
exports.EditGetFixesResult = EditGetFixesResult;
var EditGetRefactoringParams = /** @class */ (function () {
    function EditGetRefactoringParams(kind, file, offset, length, validateOnly, _namedArguments) {
    }
    EditGetRefactoringParams_1 = EditGetRefactoringParams;
    Object.defineProperty(EditGetRefactoringParams.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._kind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringParams.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringParams.prototype, "validateOnly", {
        get: function () {
            return this._validateOnly;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._validateOnly = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringParams.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetRefactoringParams.prototype.EditGetRefactoringParams = function (kind, file, offset, length, validateOnly, _namedArguments) {
        var options = Object.assign({}, _namedArguments).options;
        this.kind = kind;
        this.file = file;
        this.offset = offset;
        this.length = length;
        this.validateOnly = validateOnly;
        this.options = options;
    };
    EditGetRefactoringParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var kind = void 0;
            if (json.containsKey("kind")) {
                kind = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".kind", json.get("kind"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "kind");
            }
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_5;
            if (json.containsKey("length")) {
                length_5 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            var validateOnly = void 0;
            if (json.containsKey("validateOnly")) {
                validateOnly = jsonDecoder.decodeBool(jsonPath + ".validateOnly", json.get("validateOnly"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "validateOnly");
            }
            var options = void 0;
            if (json.containsKey("options")) {
                options = new RefactoringOptions.fromJson(jsonDecoder, jsonPath + ".options", json.get("options"), kind);
            }
            return new EditGetRefactoringParams_1(kind, file, offset, length_5, validateOnly, {
                options: options
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getRefactoring params", json);
        }
    };
    EditGetRefactoringParams.$fromRequest = function (request) {
        var params = new EditGetRefactoringParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
        utils_1.op(utils_1.Op.INDEX_ASSIGN, REQUEST_ID_REFACTORING_KINDS, request.id, params.kind);
        return params;
    };
    EditGetRefactoringParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("kind", this.kind.toJson());
        result.set("file", this.file);
        result.set("offset", this.offset);
        result.set("length", this.length);
        result.set("validateOnly", this.validateOnly);
        if (this.options != null) {
            result.set("options", this.options.toJson());
        }
        return result;
    };
    EditGetRefactoringParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.getRefactoring", this.toJson());
    };
    EditGetRefactoringParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetRefactoringParams.prototype[_34 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetRefactoringParams_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.kind, other.kind) && this.file == other.file && this.offset == other.offset && this.length == other.length && this.validateOnly == other.validateOnly && utils_1.op(utils_1.Op.EQUALS, this.options, other.options);
        }
        return false;
    };
    Object.defineProperty(EditGetRefactoringParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.kind.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.validateOnly.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.options.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetRefactoringParams_1, _34;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetRefactoringParams.prototype, "EditGetRefactoringParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringParams.prototype, _34, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetRefactoringParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetRefactoringParams, "$fromRequest", null);
    EditGetRefactoringParams = EditGetRefactoringParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetRefactoringParams);
    return EditGetRefactoringParams;
}());
exports.EditGetRefactoringParams = EditGetRefactoringParams;
var EditGetRefactoringResult = /** @class */ (function () {
    function EditGetRefactoringResult(initialProblems, optionsProblems, finalProblems, _namedArguments) {
    }
    EditGetRefactoringResult_1 = EditGetRefactoringResult;
    Object.defineProperty(EditGetRefactoringResult.prototype, "initialProblems", {
        get: function () {
            return this._initialProblems;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._initialProblems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringResult.prototype, "optionsProblems", {
        get: function () {
            return this._optionsProblems;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._optionsProblems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringResult.prototype, "finalProblems", {
        get: function () {
            return this._finalProblems;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._finalProblems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringResult.prototype, "feedback", {
        get: function () {
            return this._feedback;
        },
        set: function (value) {
            this._feedback = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringResult.prototype, "change", {
        get: function () {
            return this._change;
        },
        set: function (value) {
            this._change = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetRefactoringResult.prototype, "potentialEdits", {
        get: function () {
            return this._potentialEdits;
        },
        set: function (value) {
            this._potentialEdits = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetRefactoringResult.prototype.EditGetRefactoringResult = function (initialProblems, optionsProblems, finalProblems, _namedArguments) {
        var _36 = Object.assign({}, _namedArguments), feedback = _36.feedback, change = _36.change, potentialEdits = _36.potentialEdits;
        this.initialProblems = initialProblems;
        this.optionsProblems = optionsProblems;
        this.finalProblems = finalProblems;
        this.feedback = feedback;
        this.change = change;
        this.potentialEdits = potentialEdits;
    };
    EditGetRefactoringResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var initialProblems = void 0;
            if (json.containsKey("initialProblems")) {
                initialProblems = jsonDecoder.decodeList(jsonPath + ".initialProblems", json.get("initialProblems"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "initialProblems");
            }
            var optionsProblems = void 0;
            if (json.containsKey("optionsProblems")) {
                optionsProblems = jsonDecoder.decodeList(jsonPath + ".optionsProblems", json.get("optionsProblems"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "optionsProblems");
            }
            var finalProblems = void 0;
            if (json.containsKey("finalProblems")) {
                finalProblems = jsonDecoder.decodeList(jsonPath + ".finalProblems", json.get("finalProblems"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "finalProblems");
            }
            var feedback = void 0;
            if (json.containsKey("feedback")) {
                feedback = new RefactoringFeedback.fromJson(jsonDecoder, jsonPath + ".feedback", json.get("feedback"), json);
            }
            var change = void 0;
            if (json.containsKey("change")) {
                change = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".change", json.get("change"));
            }
            var potentialEdits = void 0;
            if (json.containsKey("potentialEdits")) {
                potentialEdits = jsonDecoder.decodeList(jsonPath + ".potentialEdits", json.get("potentialEdits"), jsonDecoder.decodeString);
            }
            return new EditGetRefactoringResult_1(initialProblems, optionsProblems, finalProblems, {
                feedback: feedback, change: change, potentialEdits: potentialEdits
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getRefactoring result", json);
        }
    };
    EditGetRefactoringResult.$fromResponse = function (response) {
        return new EditGetRefactoringResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditGetRefactoringResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("initialProblems", this.initialProblems.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("optionsProblems", this.optionsProblems.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("finalProblems", this.finalProblems.map(function (value) {
            return value.toJson();
        }).toList());
        if (this.feedback != null) {
            result.set("feedback", this.feedback.toJson());
        }
        if (this.change != null) {
            result.set("change", this.change.toJson());
        }
        if (this.potentialEdits != null) {
            result.set("potentialEdits", this.potentialEdits);
        }
        return result;
    };
    EditGetRefactoringResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditGetRefactoringResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetRefactoringResult.prototype[_35 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetRefactoringResult_1)) {
            return listEqual(this.initialProblems, other.initialProblems, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && listEqual(this.optionsProblems, other.optionsProblems, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && listEqual(this.finalProblems, other.finalProblems, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && utils_1.op(utils_1.Op.EQUALS, this.feedback, other.feedback) && utils_1.op(utils_1.Op.EQUALS, this.change, other.change) && listEqual(this.potentialEdits, other.potentialEdits, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(EditGetRefactoringResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.initialProblems.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.optionsProblems.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.finalProblems.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.feedback.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.change.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.potentialEdits.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetRefactoringResult_1, _35;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetRefactoringResult.prototype, "EditGetRefactoringResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringResult.prototype, _35, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetRefactoringResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetRefactoringResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetRefactoringResult, "$fromResponse", null);
    EditGetRefactoringResult = EditGetRefactoringResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetRefactoringResult);
    return EditGetRefactoringResult;
}());
exports.EditGetRefactoringResult = EditGetRefactoringResult;
var EditGetStatementCompletionParams = /** @class */ (function () {
    function EditGetStatementCompletionParams(file, offset) {
    }
    EditGetStatementCompletionParams_1 = EditGetStatementCompletionParams;
    Object.defineProperty(EditGetStatementCompletionParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetStatementCompletionParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetStatementCompletionParams.prototype.EditGetStatementCompletionParams = function (file, offset) {
        this.file = file;
        this.offset = offset;
    };
    EditGetStatementCompletionParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            return new EditGetStatementCompletionParams_1(file, offset);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getStatementCompletion params", json);
        }
    };
    EditGetStatementCompletionParams.$fromRequest = function (request) {
        return new EditGetStatementCompletionParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    EditGetStatementCompletionParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        return result;
    };
    EditGetStatementCompletionParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.getStatementCompletion", this.toJson());
    };
    EditGetStatementCompletionParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetStatementCompletionParams.prototype[_36 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetStatementCompletionParams_1)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    };
    Object.defineProperty(EditGetStatementCompletionParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetStatementCompletionParams_1, _36;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetStatementCompletionParams.prototype, "EditGetStatementCompletionParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionParams.prototype, _36, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetStatementCompletionParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetStatementCompletionParams, "$fromRequest", null);
    EditGetStatementCompletionParams = EditGetStatementCompletionParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetStatementCompletionParams);
    return EditGetStatementCompletionParams;
}());
exports.EditGetStatementCompletionParams = EditGetStatementCompletionParams;
var EditGetStatementCompletionResult = /** @class */ (function () {
    function EditGetStatementCompletionResult(change, whitespaceOnly) {
    }
    EditGetStatementCompletionResult_1 = EditGetStatementCompletionResult;
    Object.defineProperty(EditGetStatementCompletionResult.prototype, "change", {
        get: function () {
            return this._change;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._change = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditGetStatementCompletionResult.prototype, "whitespaceOnly", {
        get: function () {
            return this._whitespaceOnly;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._whitespaceOnly = value;
        },
        enumerable: true,
        configurable: true
    });
    EditGetStatementCompletionResult.prototype.EditGetStatementCompletionResult = function (change, whitespaceOnly) {
        this.change = change;
        this.whitespaceOnly = whitespaceOnly;
    };
    EditGetStatementCompletionResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var change = void 0;
            if (json.containsKey("change")) {
                change = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".change", json.get("change"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "change");
            }
            var whitespaceOnly = void 0;
            if (json.containsKey("whitespaceOnly")) {
                whitespaceOnly = jsonDecoder.decodeBool(jsonPath + ".whitespaceOnly", json.get("whitespaceOnly"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "whitespaceOnly");
            }
            return new EditGetStatementCompletionResult_1(change, whitespaceOnly);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.getStatementCompletion result", json);
        }
    };
    EditGetStatementCompletionResult.$fromResponse = function (response) {
        return new EditGetStatementCompletionResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditGetStatementCompletionResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("change", this.change.toJson());
        result.set("whitespaceOnly", this.whitespaceOnly);
        return result;
    };
    EditGetStatementCompletionResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditGetStatementCompletionResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditGetStatementCompletionResult.prototype[_37 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditGetStatementCompletionResult_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.change, other.change) && this.whitespaceOnly == other.whitespaceOnly;
        }
        return false;
    };
    Object.defineProperty(EditGetStatementCompletionResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.change.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.whitespaceOnly.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditGetStatementCompletionResult_1, _37;
    __decorate([
        utils_1.defaultConstructor
    ], EditGetStatementCompletionResult.prototype, "EditGetStatementCompletionResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionResult.prototype, _37, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditGetStatementCompletionResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetStatementCompletionResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditGetStatementCompletionResult, "$fromResponse", null);
    EditGetStatementCompletionResult = EditGetStatementCompletionResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditGetStatementCompletionResult);
    return EditGetStatementCompletionResult;
}());
exports.EditGetStatementCompletionResult = EditGetStatementCompletionResult;
var EditOrganizeDirectivesParams = /** @class */ (function () {
    function EditOrganizeDirectivesParams(file) {
    }
    EditOrganizeDirectivesParams_1 = EditOrganizeDirectivesParams;
    Object.defineProperty(EditOrganizeDirectivesParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    EditOrganizeDirectivesParams.prototype.EditOrganizeDirectivesParams = function (file) {
        this.file = file;
    };
    EditOrganizeDirectivesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            return new EditOrganizeDirectivesParams_1(file);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.organizeDirectives params", json);
        }
    };
    EditOrganizeDirectivesParams.$fromRequest = function (request) {
        return new EditOrganizeDirectivesParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    EditOrganizeDirectivesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        return result;
    };
    EditOrganizeDirectivesParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.organizeDirectives", this.toJson());
    };
    EditOrganizeDirectivesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditOrganizeDirectivesParams.prototype[_38 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditOrganizeDirectivesParams_1)) {
            return this.file == other.file;
        }
        return false;
    };
    Object.defineProperty(EditOrganizeDirectivesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditOrganizeDirectivesParams_1, _38;
    __decorate([
        utils_1.defaultConstructor
    ], EditOrganizeDirectivesParams.prototype, "EditOrganizeDirectivesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesParams.prototype, _38, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditOrganizeDirectivesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditOrganizeDirectivesParams, "$fromRequest", null);
    EditOrganizeDirectivesParams = EditOrganizeDirectivesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditOrganizeDirectivesParams);
    return EditOrganizeDirectivesParams;
}());
exports.EditOrganizeDirectivesParams = EditOrganizeDirectivesParams;
var EditOrganizeDirectivesResult = /** @class */ (function () {
    function EditOrganizeDirectivesResult(edit) {
    }
    EditOrganizeDirectivesResult_1 = EditOrganizeDirectivesResult;
    Object.defineProperty(EditOrganizeDirectivesResult.prototype, "edit", {
        get: function () {
            return this._edit;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._edit = value;
        },
        enumerable: true,
        configurable: true
    });
    EditOrganizeDirectivesResult.prototype.EditOrganizeDirectivesResult = function (edit) {
        this.edit = edit;
    };
    EditOrganizeDirectivesResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var edit = void 0;
            if (json.containsKey("edit")) {
                edit = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".edit", json.get("edit"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "edit");
            }
            return new EditOrganizeDirectivesResult_1(edit);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.organizeDirectives result", json);
        }
    };
    EditOrganizeDirectivesResult.$fromResponse = function (response) {
        return new EditOrganizeDirectivesResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditOrganizeDirectivesResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("edit", this.edit.toJson());
        return result;
    };
    EditOrganizeDirectivesResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditOrganizeDirectivesResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditOrganizeDirectivesResult.prototype[_39 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditOrganizeDirectivesResult_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.edit, other.edit);
        }
        return false;
    };
    Object.defineProperty(EditOrganizeDirectivesResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.edit.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditOrganizeDirectivesResult_1, _39;
    __decorate([
        utils_1.defaultConstructor
    ], EditOrganizeDirectivesResult.prototype, "EditOrganizeDirectivesResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesResult.prototype, _39, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditOrganizeDirectivesResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditOrganizeDirectivesResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditOrganizeDirectivesResult, "$fromResponse", null);
    EditOrganizeDirectivesResult = EditOrganizeDirectivesResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditOrganizeDirectivesResult);
    return EditOrganizeDirectivesResult;
}());
exports.EditOrganizeDirectivesResult = EditOrganizeDirectivesResult;
var EditSortMembersParams = /** @class */ (function () {
    function EditSortMembersParams(file) {
    }
    EditSortMembersParams_1 = EditSortMembersParams;
    Object.defineProperty(EditSortMembersParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    EditSortMembersParams.prototype.EditSortMembersParams = function (file) {
        this.file = file;
    };
    EditSortMembersParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            return new EditSortMembersParams_1(file);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.sortMembers params", json);
        }
    };
    EditSortMembersParams.$fromRequest = function (request) {
        return new EditSortMembersParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    EditSortMembersParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        return result;
    };
    EditSortMembersParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "edit.sortMembers", this.toJson());
    };
    EditSortMembersParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditSortMembersParams.prototype[_40 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditSortMembersParams_1)) {
            return this.file == other.file;
        }
        return false;
    };
    Object.defineProperty(EditSortMembersParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditSortMembersParams_1, _40;
    __decorate([
        utils_1.defaultConstructor
    ], EditSortMembersParams.prototype, "EditSortMembersParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersParams.prototype, _40, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditSortMembersParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditSortMembersParams, "$fromRequest", null);
    EditSortMembersParams = EditSortMembersParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditSortMembersParams);
    return EditSortMembersParams;
}());
exports.EditSortMembersParams = EditSortMembersParams;
var EditSortMembersResult = /** @class */ (function () {
    function EditSortMembersResult(edit) {
    }
    EditSortMembersResult_1 = EditSortMembersResult;
    Object.defineProperty(EditSortMembersResult.prototype, "edit", {
        get: function () {
            return this._edit;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._edit = value;
        },
        enumerable: true,
        configurable: true
    });
    EditSortMembersResult.prototype.EditSortMembersResult = function (edit) {
        this.edit = edit;
    };
    EditSortMembersResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var edit = void 0;
            if (json.containsKey("edit")) {
                edit = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".edit", json.get("edit"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "edit");
            }
            return new EditSortMembersResult_1(edit);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "edit.sortMembers result", json);
        }
    };
    EditSortMembersResult.$fromResponse = function (response) {
        return new EditSortMembersResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    EditSortMembersResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("edit", this.edit.toJson());
        return result;
    };
    EditSortMembersResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    EditSortMembersResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    EditSortMembersResult.prototype[_41 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, EditSortMembersResult_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.edit, other.edit);
        }
        return false;
    };
    Object.defineProperty(EditSortMembersResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.edit.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var EditSortMembersResult_1, _41;
    __decorate([
        utils_1.defaultConstructor
    ], EditSortMembersResult.prototype, "EditSortMembersResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersResult.prototype, _41, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditSortMembersResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], EditSortMembersResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], EditSortMembersResult, "$fromResponse", null);
    EditSortMembersResult = EditSortMembersResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], EditSortMembersResult);
    return EditSortMembersResult;
}());
exports.EditSortMembersResult = EditSortMembersResult;
var ExecutableFile = /** @class */ (function () {
    function ExecutableFile(file, kind) {
    }
    ExecutableFile_1 = ExecutableFile;
    Object.defineProperty(ExecutableFile.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableFile.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._kind = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutableFile.prototype.ExecutableFile = function (file, kind) {
        this.file = file;
        this.kind = kind;
    };
    ExecutableFile.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var kind = void 0;
            if (json.containsKey("kind")) {
                kind = new ExecutableKind.fromJson(jsonDecoder, jsonPath + ".kind", json.get("kind"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "kind");
            }
            return new ExecutableFile_1(file, kind);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "ExecutableFile", json);
        }
    };
    ExecutableFile.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("kind", this.kind.toJson());
        return result;
    };
    ExecutableFile.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutableFile.prototype[_42 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutableFile_1)) {
            return this.file == other.file && utils_1.op(utils_1.Op.EQUALS, this.kind, other.kind);
        }
        return false;
    };
    Object.defineProperty(ExecutableFile.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.kind.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutableFile_1, _42;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutableFile.prototype, "ExecutableFile", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutableFile.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutableFile.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutableFile.prototype, _42, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutableFile.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutableFile, "$fromJson", null);
    ExecutableFile = ExecutableFile_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutableFile);
    return ExecutableFile;
}());
exports.ExecutableFile = ExecutableFile;
var ExecutableKind = /** @class */ (function () {
    function ExecutableKind(name) {
    }
    ExecutableKind_1 = ExecutableKind;
    Object.defineProperty(ExecutableKind, "CLIENT", {
        get: function () {
            if (this.__$CLIENT === undefined) {
                this.__$CLIENT = new ExecutableKind_1._("CLIENT");
            }
            return this.__$CLIENT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableKind, "EITHER", {
        get: function () {
            if (this.__$EITHER === undefined) {
                this.__$EITHER = new ExecutableKind_1._("EITHER");
            }
            return this.__$EITHER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableKind, "NOT_EXECUTABLE", {
        get: function () {
            if (this.__$NOT_EXECUTABLE === undefined) {
                this.__$NOT_EXECUTABLE = new ExecutableKind_1._("NOT_EXECUTABLE");
            }
            return this.__$NOT_EXECUTABLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableKind, "SERVER", {
        get: function () {
            if (this.__$SERVER === undefined) {
                this.__$SERVER = new ExecutableKind_1._("SERVER");
            }
            return this.__$SERVER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableKind, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(ExecutableKind_1.CLIENT, ExecutableKind_1.EITHER, ExecutableKind_1.NOT_EXECUTABLE, ExecutableKind_1.SERVER);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    ExecutableKind.prototype._ = function (name) {
        this.name = name;
    };
    ExecutableKind.$ExecutableKind = function (name) {
        switch (name) {
            case "CLIENT":
                return ExecutableKind_1.CLIENT;
            case "EITHER":
                return ExecutableKind_1.EITHER;
            case "NOT_EXECUTABLE":
                return ExecutableKind_1.NOT_EXECUTABLE;
            case "SERVER":
                return ExecutableKind_1.SERVER;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    ExecutableKind.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new ExecutableKind_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "ExecutableKind", json);
    };
    ExecutableKind.prototype.toString = function () {
        return "ExecutableKind." + this.name;
    };
    ExecutableKind.prototype.toJson = function () {
        return this.name;
    };
    var ExecutableKind_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutableKind.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], ExecutableKind.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutableKind.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], ExecutableKind, "$ExecutableKind", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutableKind, "$fromJson", null);
    ExecutableKind = ExecutableKind_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutableKind);
    return ExecutableKind;
}());
exports.ExecutableKind = ExecutableKind;
var ExecutionCreateContextParams = /** @class */ (function () {
    function ExecutionCreateContextParams(contextRoot) {
    }
    ExecutionCreateContextParams_1 = ExecutionCreateContextParams;
    Object.defineProperty(ExecutionCreateContextParams.prototype, "contextRoot", {
        get: function () {
            return this._contextRoot;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._contextRoot = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionCreateContextParams.prototype.ExecutionCreateContextParams = function (contextRoot) {
        this.contextRoot = contextRoot;
    };
    ExecutionCreateContextParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var contextRoot = void 0;
            if (json.containsKey("contextRoot")) {
                contextRoot = jsonDecoder.decodeString(jsonPath + ".contextRoot", json.get("contextRoot"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "contextRoot");
            }
            return new ExecutionCreateContextParams_1(contextRoot);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "execution.createContext params", json);
        }
    };
    ExecutionCreateContextParams.$fromRequest = function (request) {
        return new ExecutionCreateContextParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    ExecutionCreateContextParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("contextRoot", this.contextRoot);
        return result;
    };
    ExecutionCreateContextParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "execution.createContext", this.toJson());
    };
    ExecutionCreateContextParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutionCreateContextParams.prototype[_43 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionCreateContextParams_1)) {
            return this.contextRoot == other.contextRoot;
        }
        return false;
    };
    Object.defineProperty(ExecutionCreateContextParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.contextRoot).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutionCreateContextParams_1, _43;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionCreateContextParams.prototype, "ExecutionCreateContextParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextParams.prototype, _43, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionCreateContextParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionCreateContextParams, "$fromRequest", null);
    ExecutionCreateContextParams = ExecutionCreateContextParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionCreateContextParams);
    return ExecutionCreateContextParams;
}());
exports.ExecutionCreateContextParams = ExecutionCreateContextParams;
var ExecutionCreateContextResult = /** @class */ (function () {
    function ExecutionCreateContextResult(id) {
    }
    ExecutionCreateContextResult_1 = ExecutionCreateContextResult;
    Object.defineProperty(ExecutionCreateContextResult.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionCreateContextResult.prototype.ExecutionCreateContextResult = function (id) {
        this.id = id;
    };
    ExecutionCreateContextResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            return new ExecutionCreateContextResult_1(id);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "execution.createContext result", json);
        }
    };
    ExecutionCreateContextResult.$fromResponse = function (response) {
        return new ExecutionCreateContextResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    ExecutionCreateContextResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        return result;
    };
    ExecutionCreateContextResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    ExecutionCreateContextResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutionCreateContextResult.prototype[_44 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionCreateContextResult_1)) {
            return this.id == other.id;
        }
        return false;
    };
    Object.defineProperty(ExecutionCreateContextResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutionCreateContextResult_1, _44;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionCreateContextResult.prototype, "ExecutionCreateContextResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextResult.prototype, _44, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionCreateContextResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionCreateContextResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionCreateContextResult, "$fromResponse", null);
    ExecutionCreateContextResult = ExecutionCreateContextResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionCreateContextResult);
    return ExecutionCreateContextResult;
}());
exports.ExecutionCreateContextResult = ExecutionCreateContextResult;
var ExecutionDeleteContextParams = /** @class */ (function () {
    function ExecutionDeleteContextParams(id) {
    }
    ExecutionDeleteContextParams_1 = ExecutionDeleteContextParams;
    Object.defineProperty(ExecutionDeleteContextParams.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionDeleteContextParams.prototype.ExecutionDeleteContextParams = function (id) {
        this.id = id;
    };
    ExecutionDeleteContextParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            return new ExecutionDeleteContextParams_1(id);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "execution.deleteContext params", json);
        }
    };
    ExecutionDeleteContextParams.$fromRequest = function (request) {
        return new ExecutionDeleteContextParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    ExecutionDeleteContextParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        return result;
    };
    ExecutionDeleteContextParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "execution.deleteContext", this.toJson());
    };
    ExecutionDeleteContextParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutionDeleteContextParams.prototype[_45 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionDeleteContextParams_1)) {
            return this.id == other.id;
        }
        return false;
    };
    Object.defineProperty(ExecutionDeleteContextParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutionDeleteContextParams_1, _45;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionDeleteContextParams.prototype, "ExecutionDeleteContextParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextParams.prototype, _45, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionDeleteContextParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionDeleteContextParams, "$fromRequest", null);
    ExecutionDeleteContextParams = ExecutionDeleteContextParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionDeleteContextParams);
    return ExecutionDeleteContextParams;
}());
exports.ExecutionDeleteContextParams = ExecutionDeleteContextParams;
var ExecutionDeleteContextResult = /** @class */ (function () {
    function ExecutionDeleteContextResult() {
    }
    ExecutionDeleteContextResult_1 = ExecutionDeleteContextResult;
    ExecutionDeleteContextResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    ExecutionDeleteContextResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    ExecutionDeleteContextResult.prototype[_46 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionDeleteContextResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ExecutionDeleteContextResult.prototype, "hashCode", {
        get: function () {
            return 479954425;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionDeleteContextResult.prototype.ExecutionDeleteContextResult = function () {
    };
    var ExecutionDeleteContextResult_1, _46;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextResult.prototype, _46, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionDeleteContextResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionDeleteContextResult.prototype, "ExecutionDeleteContextResult", null);
    ExecutionDeleteContextResult = ExecutionDeleteContextResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionDeleteContextResult);
    return ExecutionDeleteContextResult;
}());
exports.ExecutionDeleteContextResult = ExecutionDeleteContextResult;
var ExecutionLaunchDataParams = /** @class */ (function () {
    function ExecutionLaunchDataParams(file, _namedArguments) {
    }
    ExecutionLaunchDataParams_1 = ExecutionLaunchDataParams;
    Object.defineProperty(ExecutionLaunchDataParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionLaunchDataParams.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionLaunchDataParams.prototype, "referencedFiles", {
        get: function () {
            return this._referencedFiles;
        },
        set: function (value) {
            this._referencedFiles = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionLaunchDataParams.prototype.ExecutionLaunchDataParams = function (file, _namedArguments) {
        var _48 = Object.assign({}, _namedArguments), kind = _48.kind, referencedFiles = _48.referencedFiles;
        this.file = file;
        this.kind = kind;
        this.referencedFiles = referencedFiles;
    };
    ExecutionLaunchDataParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var kind = void 0;
            if (json.containsKey("kind")) {
                kind = new ExecutableKind.fromJson(jsonDecoder, jsonPath + ".kind", json.get("kind"));
            }
            var referencedFiles = void 0;
            if (json.containsKey("referencedFiles")) {
                referencedFiles = jsonDecoder.decodeList(jsonPath + ".referencedFiles", json.get("referencedFiles"), jsonDecoder.decodeString);
            }
            return new ExecutionLaunchDataParams_1(file, {
                kind: kind, referencedFiles: referencedFiles
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "execution.launchData params", json);
        }
    };
    ExecutionLaunchDataParams.$fromNotification = function (notification) {
        return new ExecutionLaunchDataParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    ExecutionLaunchDataParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        if (this.kind != null) {
            result.set("kind", this.kind.toJson());
        }
        if (this.referencedFiles != null) {
            result.set("referencedFiles", this.referencedFiles);
        }
        return result;
    };
    ExecutionLaunchDataParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "execution.launchData", this.toJson());
    };
    ExecutionLaunchDataParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutionLaunchDataParams.prototype[_47 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionLaunchDataParams_1)) {
            return this.file == other.file && utils_1.op(utils_1.Op.EQUALS, this.kind, other.kind) && listEqual(this.referencedFiles, other.referencedFiles, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(ExecutionLaunchDataParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.kind.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.referencedFiles.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutionLaunchDataParams_1, _47;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionLaunchDataParams.prototype, "ExecutionLaunchDataParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionLaunchDataParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionLaunchDataParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionLaunchDataParams.prototype, _47, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionLaunchDataParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionLaunchDataParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionLaunchDataParams, "$fromNotification", null);
    ExecutionLaunchDataParams = ExecutionLaunchDataParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionLaunchDataParams);
    return ExecutionLaunchDataParams;
}());
exports.ExecutionLaunchDataParams = ExecutionLaunchDataParams;
var ExecutionMapUriParams = /** @class */ (function () {
    function ExecutionMapUriParams(id, _namedArguments) {
    }
    ExecutionMapUriParams_1 = ExecutionMapUriParams;
    Object.defineProperty(ExecutionMapUriParams.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionMapUriParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionMapUriParams.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        set: function (value) {
            this._uri = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionMapUriParams.prototype.ExecutionMapUriParams = function (id, _namedArguments) {
        var _49 = Object.assign({}, _namedArguments), file = _49.file, uri = _49.uri;
        this.id = id;
        this.file = file;
        this.uri = uri;
    };
    ExecutionMapUriParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            var uri = void 0;
            if (json.containsKey("uri")) {
                uri = jsonDecoder.decodeString(jsonPath + ".uri", json.get("uri"));
            }
            return new ExecutionMapUriParams_1(id, {
                file: file, uri: uri
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "execution.mapUri params", json);
        }
    };
    ExecutionMapUriParams.$fromRequest = function (request) {
        return new ExecutionMapUriParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    ExecutionMapUriParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        if (this.file != null) {
            result.set("file", this.file);
        }
        if (this.uri != null) {
            result.set("uri", this.uri);
        }
        return result;
    };
    ExecutionMapUriParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "execution.mapUri", this.toJson());
    };
    ExecutionMapUriParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutionMapUriParams.prototype[_48 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionMapUriParams_1)) {
            return this.id == other.id && this.file == other.file && this.uri == other.uri;
        }
        return false;
    };
    Object.defineProperty(ExecutionMapUriParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.uri).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutionMapUriParams_1, _48;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionMapUriParams.prototype, "ExecutionMapUriParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriParams.prototype, _48, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionMapUriParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionMapUriParams, "$fromRequest", null);
    ExecutionMapUriParams = ExecutionMapUriParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionMapUriParams);
    return ExecutionMapUriParams;
}());
exports.ExecutionMapUriParams = ExecutionMapUriParams;
var ExecutionMapUriResult = /** @class */ (function () {
    function ExecutionMapUriResult(_namedArguments) {
    }
    ExecutionMapUriResult_1 = ExecutionMapUriResult;
    Object.defineProperty(ExecutionMapUriResult.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionMapUriResult.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        set: function (value) {
            this._uri = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionMapUriResult.prototype.ExecutionMapUriResult = function (_namedArguments) {
        var _50 = Object.assign({}, _namedArguments), file = _50.file, uri = _50.uri;
        this.file = file;
        this.uri = uri;
    };
    ExecutionMapUriResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            var uri = void 0;
            if (json.containsKey("uri")) {
                uri = jsonDecoder.decodeString(jsonPath + ".uri", json.get("uri"));
            }
            return new ExecutionMapUriResult_1({
                file: file, uri: uri
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "execution.mapUri result", json);
        }
    };
    ExecutionMapUriResult.$fromResponse = function (response) {
        return new ExecutionMapUriResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    ExecutionMapUriResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.file != null) {
            result.set("file", this.file);
        }
        if (this.uri != null) {
            result.set("uri", this.uri);
        }
        return result;
    };
    ExecutionMapUriResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    ExecutionMapUriResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutionMapUriResult.prototype[_49 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionMapUriResult_1)) {
            return this.file == other.file && this.uri == other.uri;
        }
        return false;
    };
    Object.defineProperty(ExecutionMapUriResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.uri).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutionMapUriResult_1, _49;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionMapUriResult.prototype, "ExecutionMapUriResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriResult.prototype, _49, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionMapUriResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionMapUriResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionMapUriResult, "$fromResponse", null);
    ExecutionMapUriResult = ExecutionMapUriResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionMapUriResult);
    return ExecutionMapUriResult;
}());
exports.ExecutionMapUriResult = ExecutionMapUriResult;
var ExecutionService = /** @class */ (function () {
    function ExecutionService(name) {
    }
    ExecutionService_1 = ExecutionService;
    Object.defineProperty(ExecutionService, "LAUNCH_DATA", {
        get: function () {
            if (this.__$LAUNCH_DATA === undefined) {
                this.__$LAUNCH_DATA = new ExecutionService_1._("LAUNCH_DATA");
            }
            return this.__$LAUNCH_DATA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutionService, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(ExecutionService_1.LAUNCH_DATA);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionService.prototype._ = function (name) {
        this.name = name;
    };
    ExecutionService.$ExecutionService = function (name) {
        switch (name) {
            case "LAUNCH_DATA":
                return ExecutionService_1.LAUNCH_DATA;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    ExecutionService.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new ExecutionService_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "ExecutionService", json);
    };
    ExecutionService.prototype.toString = function () {
        return "ExecutionService." + this.name;
    };
    ExecutionService.prototype.toJson = function () {
        return this.name;
    };
    var ExecutionService_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionService.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], ExecutionService.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionService.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], ExecutionService, "$ExecutionService", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionService, "$fromJson", null);
    ExecutionService = ExecutionService_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionService);
    return ExecutionService;
}());
exports.ExecutionService = ExecutionService;
var ExecutionSetSubscriptionsParams = /** @class */ (function () {
    function ExecutionSetSubscriptionsParams(subscriptions) {
    }
    ExecutionSetSubscriptionsParams_1 = ExecutionSetSubscriptionsParams;
    Object.defineProperty(ExecutionSetSubscriptionsParams.prototype, "subscriptions", {
        get: function () {
            return this._subscriptions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._subscriptions = value;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionSetSubscriptionsParams.prototype.ExecutionSetSubscriptionsParams = function (subscriptions) {
        this.subscriptions = subscriptions;
    };
    ExecutionSetSubscriptionsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var subscriptions = void 0;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeList(jsonPath + ".subscriptions", json.get("subscriptions"), function (jsonPath, json) {
                    return new ExecutionService.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "subscriptions");
            }
            return new ExecutionSetSubscriptionsParams_1(subscriptions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "execution.setSubscriptions params", json);
        }
    };
    ExecutionSetSubscriptionsParams.$fromRequest = function (request) {
        return new ExecutionSetSubscriptionsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    ExecutionSetSubscriptionsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("subscriptions", this.subscriptions.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    ExecutionSetSubscriptionsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "execution.setSubscriptions", this.toJson());
    };
    ExecutionSetSubscriptionsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExecutionSetSubscriptionsParams.prototype[_50 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionSetSubscriptionsParams_1)) {
            return listEqual(this.subscriptions, other.subscriptions, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(ExecutionSetSubscriptionsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.subscriptions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExecutionSetSubscriptionsParams_1, _50;
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionSetSubscriptionsParams.prototype, "ExecutionSetSubscriptionsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsParams.prototype, _50, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionSetSubscriptionsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExecutionSetSubscriptionsParams, "$fromRequest", null);
    ExecutionSetSubscriptionsParams = ExecutionSetSubscriptionsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionSetSubscriptionsParams);
    return ExecutionSetSubscriptionsParams;
}());
exports.ExecutionSetSubscriptionsParams = ExecutionSetSubscriptionsParams;
var ExecutionSetSubscriptionsResult = /** @class */ (function () {
    function ExecutionSetSubscriptionsResult() {
    }
    ExecutionSetSubscriptionsResult_1 = ExecutionSetSubscriptionsResult;
    ExecutionSetSubscriptionsResult.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    ExecutionSetSubscriptionsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: null
        });
    };
    ExecutionSetSubscriptionsResult.prototype[_51 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExecutionSetSubscriptionsResult_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ExecutionSetSubscriptionsResult.prototype, "hashCode", {
        get: function () {
            return 287678780;
        },
        enumerable: true,
        configurable: true
    });
    ExecutionSetSubscriptionsResult.prototype.ExecutionSetSubscriptionsResult = function () {
    };
    var ExecutionSetSubscriptionsResult_1, _51;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsResult.prototype, _51, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExecutionSetSubscriptionsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ExecutionSetSubscriptionsResult.prototype, "ExecutionSetSubscriptionsResult", null);
    ExecutionSetSubscriptionsResult = ExecutionSetSubscriptionsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ExecutionSetSubscriptionsResult);
    return ExecutionSetSubscriptionsResult;
}());
exports.ExecutionSetSubscriptionsResult = ExecutionSetSubscriptionsResult;
var ServerSetSubscriptionsParams = /** @class */ (function () {
    function ServerSetSubscriptionsParams(subscriptions) {
    }
    ServerSetSubscriptionsParams_1 = ServerSetSubscriptionsParams;
    Object.defineProperty(ServerSetSubscriptionsParams.prototype, "subscriptions", {
        get: function () {
            return this._subscriptions;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._subscriptions = value;
        },
        enumerable: true,
        configurable: true
    });
    ServerSetSubscriptionsParams.prototype.ServerSetSubscriptionsParams = function (subscriptions) {
        this.subscriptions = subscriptions;
    };
    ServerSetSubscriptionsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var subscriptions = void 0;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeList(jsonPath + ".subscriptions", json.get("subscriptions"), function (jsonPath, json) {
                    return new ServerService.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "subscriptions");
            }
            return new ServerSetSubscriptionsParams_1(subscriptions);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "server.setSubscriptions params", json);
        }
    };
    ServerSetSubscriptionsParams.$fromRequest = function (request) {
        return new ServerSetSubscriptionsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    ServerSetSubscriptionsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("subscriptions", this.subscriptions.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    ServerSetSubscriptionsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "server.setSubscriptions", this.toJson());
    };
    ServerSetSubscriptionsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ServerSetSubscriptionsParams.prototype[_52 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerSetSubscriptionsParams_1)) {
            return listEqual(this.subscriptions, other.subscriptions, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(ServerSetSubscriptionsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.subscriptions.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ServerSetSubscriptionsParams_1, _52;
    __decorate([
        utils_1.defaultConstructor
    ], ServerSetSubscriptionsParams.prototype, "ServerSetSubscriptionsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsParams.prototype, _52, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerSetSubscriptionsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ServerSetSubscriptionsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ServerSetSubscriptionsParams, "$fromRequest", null);
    ServerSetSubscriptionsParams = ServerSetSubscriptionsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerSetSubscriptionsParams);
    return ServerSetSubscriptionsParams;
}());
exports.ServerSetSubscriptionsParams = ServerSetSubscriptionsParams;
var ServerService = /** @class */ (function () {
    function ServerService(name) {
    }
    ServerService_1 = ServerService;
    Object.defineProperty(ServerService, "STATUS", {
        get: function () {
            if (this.__$STATUS === undefined) {
                this.__$STATUS = new ServerService_1._("STATUS");
            }
            return this.__$STATUS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerService, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(ServerService_1.STATUS);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    ServerService.prototype._ = function (name) {
        this.name = name;
    };
    ServerService.$ServerService = function (name) {
        switch (name) {
            case "STATUS":
                return ServerService_1.STATUS;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    ServerService.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new ServerService_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "ServerService", json);
    };
    ServerService.prototype.toString = function () {
        return "ServerService." + this.name;
    };
    ServerService.prototype.toJson = function () {
        return this.name;
    };
    var ServerService_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerService.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], ServerService.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerService.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], ServerService, "$ServerService", null);
    __decorate([
        utils_1.namedFactory
    ], ServerService, "$fromJson", null);
    ServerService = ServerService_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerService);
    return ServerService;
}());
exports.ServerService = ServerService;
var ServerGetVersionResult = /** @class */ (function () {
    function ServerGetVersionResult(version) {
    }
    ServerGetVersionResult_1 = ServerGetVersionResult;
    Object.defineProperty(ServerGetVersionResult.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._version = value;
        },
        enumerable: true,
        configurable: true
    });
    ServerGetVersionResult.prototype.ServerGetVersionResult = function (version) {
        this.version = version;
    };
    ServerGetVersionResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var version = void 0;
            if (json.containsKey("version")) {
                version = jsonDecoder.decodeString(jsonPath + ".version", json.get("version"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "version");
            }
            return new ServerGetVersionResult_1(version);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "server.getVersion result", json);
        }
    };
    ServerGetVersionResult.$fromResponse = function (response) {
        return new ServerGetVersionResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    ServerGetVersionResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("version", this.version);
        return result;
    };
    ServerGetVersionResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    ServerGetVersionResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ServerGetVersionResult.prototype[_53 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerGetVersionResult_1)) {
            return this.version == other.version;
        }
        return false;
    };
    Object.defineProperty(ServerGetVersionResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.version).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ServerGetVersionResult_1, _53;
    __decorate([
        utils_1.defaultConstructor
    ], ServerGetVersionResult.prototype, "ServerGetVersionResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionResult.prototype, _53, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ServerGetVersionResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ServerGetVersionResult, "$fromResponse", null);
    ServerGetVersionResult = ServerGetVersionResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerGetVersionResult);
    return ServerGetVersionResult;
}());
exports.ServerGetVersionResult = ServerGetVersionResult;
var ServerGetVersionParams = /** @class */ (function () {
    function ServerGetVersionParams() {
    }
    ServerGetVersionParams_1 = ServerGetVersionParams;
    ServerGetVersionParams.prototype.toJson = function () {
        return new core.DartMap.literal([]);
    };
    ServerGetVersionParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "server.getVersion", null);
    };
    ServerGetVersionParams.prototype[_54 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerGetVersionParams_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ServerGetVersionParams.prototype, "hashCode", {
        get: function () {
            return 55877452;
        },
        enumerable: true,
        configurable: true
    });
    ServerGetVersionParams.prototype.ServerGetVersionParams = function () {
    };
    var ServerGetVersionParams_1, _54;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionParams.prototype, _54, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerGetVersionParams.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ServerGetVersionParams.prototype, "ServerGetVersionParams", null);
    ServerGetVersionParams = ServerGetVersionParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerGetVersionParams);
    return ServerGetVersionParams;
}());
exports.ServerGetVersionParams = ServerGetVersionParams;
var FileKind = /** @class */ (function () {
    function FileKind(name) {
    }
    FileKind_1 = FileKind;
    Object.defineProperty(FileKind, "LIBRARY", {
        get: function () {
            if (this.__$LIBRARY === undefined) {
                this.__$LIBRARY = new FileKind_1._("LIBRARY");
            }
            return this.__$LIBRARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileKind, "PART", {
        get: function () {
            if (this.__$PART === undefined) {
                this.__$PART = new FileKind_1._("PART");
            }
            return this.__$PART;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileKind, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(FileKind_1.LIBRARY, FileKind_1.PART);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    FileKind.prototype._ = function (name) {
        this.name = name;
    };
    FileKind.$FileKind = function (name) {
        switch (name) {
            case "LIBRARY":
                return FileKind_1.LIBRARY;
            case "PART":
                return FileKind_1.PART;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    FileKind.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new FileKind_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "FileKind", json);
    };
    FileKind.prototype.toString = function () {
        return "FileKind." + this.name;
    };
    FileKind.prototype.toJson = function () {
        return this.name;
    };
    var FileKind_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], FileKind.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], FileKind.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], FileKind.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], FileKind, "$FileKind", null);
    __decorate([
        utils_1.namedFactory
    ], FileKind, "$fromJson", null);
    FileKind = FileKind_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], FileKind);
    return FileKind;
}());
exports.FileKind = FileKind;
var TypeHierarchyItem = /** @class */ (function () {
    function TypeHierarchyItem(classElement, _namedArguments) {
    }
    TypeHierarchyItem_1 = TypeHierarchyItem;
    Object.defineProperty(TypeHierarchyItem.prototype, "classElement", {
        get: function () {
            return this._classElement;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._classElement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeHierarchyItem.prototype, "displayName", {
        get: function () {
            return this._displayName;
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeHierarchyItem.prototype, "memberElement", {
        get: function () {
            return this._memberElement;
        },
        set: function (value) {
            this._memberElement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeHierarchyItem.prototype, "superclass", {
        get: function () {
            return this._superclass;
        },
        set: function (value) {
            this._superclass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeHierarchyItem.prototype, "interfaces", {
        get: function () {
            return this._interfaces;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._interfaces = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeHierarchyItem.prototype, "mixins", {
        get: function () {
            return this._mixins;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._mixins = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeHierarchyItem.prototype, "subclasses", {
        get: function () {
            return this._subclasses;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._subclasses = value;
        },
        enumerable: true,
        configurable: true
    });
    TypeHierarchyItem.prototype.TypeHierarchyItem = function (classElement, _namedArguments) {
        var _56 = Object.assign({}, _namedArguments), displayName = _56.displayName, memberElement = _56.memberElement, superclass = _56.superclass, interfaces = _56.interfaces, mixins = _56.mixins, subclasses = _56.subclasses;
        this.classElement = classElement;
        this.displayName = displayName;
        this.memberElement = memberElement;
        this.superclass = superclass;
        if (interfaces == null) {
            this.interfaces = new core.DartList.literal();
        }
        else {
            this.interfaces = interfaces;
        }
        if (mixins == null) {
            this.mixins = new core.DartList.literal();
        }
        else {
            this.mixins = mixins;
        }
        if (subclasses == null) {
            this.subclasses = new core.DartList.literal();
        }
        else {
            this.subclasses = subclasses;
        }
    };
    TypeHierarchyItem.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var classElement = void 0;
            if (json.containsKey("classElement")) {
                classElement = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".classElement", json.get("classElement"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "classElement");
            }
            var displayName = void 0;
            if (json.containsKey("displayName")) {
                displayName = jsonDecoder.decodeString(jsonPath + ".displayName", json.get("displayName"));
            }
            var memberElement = void 0;
            if (json.containsKey("memberElement")) {
                memberElement = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".memberElement", json.get("memberElement"));
            }
            var superclass = void 0;
            if (json.containsKey("superclass")) {
                superclass = jsonDecoder.decodeInt(jsonPath + ".superclass", json.get("superclass"));
            }
            var interfaces = void 0;
            if (json.containsKey("interfaces")) {
                interfaces = jsonDecoder.decodeList(jsonPath + ".interfaces", json.get("interfaces"), jsonDecoder.decodeInt);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "interfaces");
            }
            var mixins = void 0;
            if (json.containsKey("mixins")) {
                mixins = jsonDecoder.decodeList(jsonPath + ".mixins", json.get("mixins"), jsonDecoder.decodeInt);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "mixins");
            }
            var subclasses = void 0;
            if (json.containsKey("subclasses")) {
                subclasses = jsonDecoder.decodeList(jsonPath + ".subclasses", json.get("subclasses"), jsonDecoder.decodeInt);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "subclasses");
            }
            return new TypeHierarchyItem_1(classElement, {
                displayName: displayName, memberElement: memberElement, superclass: superclass, interfaces: interfaces, mixins: mixins, subclasses: subclasses
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "TypeHierarchyItem", json);
        }
    };
    TypeHierarchyItem.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("classElement", this.classElement.toJson());
        if (this.displayName != null) {
            result.set("displayName", this.displayName);
        }
        if (this.memberElement != null) {
            result.set("memberElement", this.memberElement.toJson());
        }
        if (this.superclass != null) {
            result.set("superclass", this.superclass);
        }
        result.set("interfaces", this.interfaces);
        result.set("mixins", this.mixins);
        result.set("subclasses", this.subclasses);
        return result;
    };
    TypeHierarchyItem.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    TypeHierarchyItem.prototype[_55 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, TypeHierarchyItem_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.classElement, other.classElement) && this.displayName == other.displayName && utils_1.op(utils_1.Op.EQUALS, this.memberElement, other.memberElement) && this.superclass == other.superclass && listEqual(this.interfaces, other.interfaces, function (a, b) {
                return a == b;
            }) && listEqual(this.mixins, other.mixins, function (a, b) {
                return a == b;
            }) && listEqual(this.subclasses, other.subclasses, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(TypeHierarchyItem.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.classElement.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.displayName).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.memberElement.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.superclass).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.interfaces.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.mixins.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.subclasses.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var TypeHierarchyItem_1, _55;
    __decorate([
        utils_1.defaultConstructor
    ], TypeHierarchyItem.prototype, "TypeHierarchyItem", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], TypeHierarchyItem.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], TypeHierarchyItem.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], TypeHierarchyItem.prototype, _55, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], TypeHierarchyItem.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], TypeHierarchyItem, "$fromJson", null);
    TypeHierarchyItem = TypeHierarchyItem_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], TypeHierarchyItem);
    return TypeHierarchyItem;
}());
exports.TypeHierarchyItem = TypeHierarchyItem;
var HoverInformation = /** @class */ (function () {
    function HoverInformation(offset, length, _namedArguments) {
    }
    HoverInformation_1 = HoverInformation;
    Object.defineProperty(HoverInformation.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "containingLibraryPath", {
        get: function () {
            return this._containingLibraryPath;
        },
        set: function (value) {
            this._containingLibraryPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "containingLibraryName", {
        get: function () {
            return this._containingLibraryName;
        },
        set: function (value) {
            this._containingLibraryName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "containingClassDescription", {
        get: function () {
            return this._containingClassDescription;
        },
        set: function (value) {
            this._containingClassDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "dartdoc", {
        get: function () {
            return this._dartdoc;
        },
        set: function (value) {
            this._dartdoc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "elementDescription", {
        get: function () {
            return this._elementDescription;
        },
        set: function (value) {
            this._elementDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "elementKind", {
        get: function () {
            return this._elementKind;
        },
        set: function (value) {
            this._elementKind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "isDeprecated", {
        get: function () {
            return this._isDeprecated;
        },
        set: function (value) {
            this._isDeprecated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "parameter", {
        get: function () {
            return this._parameter;
        },
        set: function (value) {
            this._parameter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "propagatedType", {
        get: function () {
            return this._propagatedType;
        },
        set: function (value) {
            this._propagatedType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoverInformation.prototype, "staticType", {
        get: function () {
            return this._staticType;
        },
        set: function (value) {
            this._staticType = value;
        },
        enumerable: true,
        configurable: true
    });
    HoverInformation.prototype.HoverInformation = function (offset, length, _namedArguments) {
        var _57 = Object.assign({}, _namedArguments), containingLibraryPath = _57.containingLibraryPath, containingLibraryName = _57.containingLibraryName, containingClassDescription = _57.containingClassDescription, dartdoc = _57.dartdoc, elementDescription = _57.elementDescription, elementKind = _57.elementKind, isDeprecated = _57.isDeprecated, parameter = _57.parameter, propagatedType = _57.propagatedType, staticType = _57.staticType;
        this.offset = offset;
        this.length = length;
        this.containingLibraryPath = containingLibraryPath;
        this.containingLibraryName = containingLibraryName;
        this.containingClassDescription = containingClassDescription;
        this.dartdoc = dartdoc;
        this.elementDescription = elementDescription;
        this.elementKind = elementKind;
        this.isDeprecated = isDeprecated;
        this.parameter = parameter;
        this.propagatedType = propagatedType;
        this.staticType = staticType;
    };
    HoverInformation.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_6;
            if (json.containsKey("length")) {
                length_6 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            var containingLibraryPath = void 0;
            if (json.containsKey("containingLibraryPath")) {
                containingLibraryPath = jsonDecoder.decodeString(jsonPath + ".containingLibraryPath", json.get("containingLibraryPath"));
            }
            var containingLibraryName = void 0;
            if (json.containsKey("containingLibraryName")) {
                containingLibraryName = jsonDecoder.decodeString(jsonPath + ".containingLibraryName", json.get("containingLibraryName"));
            }
            var containingClassDescription = void 0;
            if (json.containsKey("containingClassDescription")) {
                containingClassDescription = jsonDecoder.decodeString(jsonPath + ".containingClassDescription", json.get("containingClassDescription"));
            }
            var dartdoc = void 0;
            if (json.containsKey("dartdoc")) {
                dartdoc = jsonDecoder.decodeString(jsonPath + ".dartdoc", json.get("dartdoc"));
            }
            var elementDescription = void 0;
            if (json.containsKey("elementDescription")) {
                elementDescription = jsonDecoder.decodeString(jsonPath + ".elementDescription", json.get("elementDescription"));
            }
            var elementKind = void 0;
            if (json.containsKey("elementKind")) {
                elementKind = jsonDecoder.decodeString(jsonPath + ".elementKind", json.get("elementKind"));
            }
            var isDeprecated = void 0;
            if (json.containsKey("isDeprecated")) {
                isDeprecated = jsonDecoder.decodeBool(jsonPath + ".isDeprecated", json.get("isDeprecated"));
            }
            var parameter = void 0;
            if (json.containsKey("parameter")) {
                parameter = jsonDecoder.decodeString(jsonPath + ".parameter", json.get("parameter"));
            }
            var propagatedType = void 0;
            if (json.containsKey("propagatedType")) {
                propagatedType = jsonDecoder.decodeString(jsonPath + ".propagatedType", json.get("propagatedType"));
            }
            var staticType = void 0;
            if (json.containsKey("staticType")) {
                staticType = jsonDecoder.decodeString(jsonPath + ".staticType", json.get("staticType"));
            }
            return new HoverInformation_1(offset, length_6, {
                containingLibraryPath: containingLibraryPath, containingLibraryName: containingLibraryName, containingClassDescription: containingClassDescription, dartdoc: dartdoc, elementDescription: elementDescription, elementKind: elementKind, isDeprecated: isDeprecated, parameter: parameter, propagatedType: propagatedType, staticType: staticType
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "HoverInformation", json);
        }
    };
    HoverInformation.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("offset", this.offset);
        result.set("length", this.length);
        if (this.containingLibraryPath != null) {
            result.set("containingLibraryPath", this.containingLibraryPath);
        }
        if (this.containingLibraryName != null) {
            result.set("containingLibraryName", this.containingLibraryName);
        }
        if (this.containingClassDescription != null) {
            result.set("containingClassDescription", this.containingClassDescription);
        }
        if (this.dartdoc != null) {
            result.set("dartdoc", this.dartdoc);
        }
        if (this.elementDescription != null) {
            result.set("elementDescription", this.elementDescription);
        }
        if (this.elementKind != null) {
            result.set("elementKind", this.elementKind);
        }
        if (this.isDeprecated != null) {
            result.set("isDeprecated", this.isDeprecated);
        }
        if (this.parameter != null) {
            result.set("parameter", this.parameter);
        }
        if (this.propagatedType != null) {
            result.set("propagatedType", this.propagatedType);
        }
        if (this.staticType != null) {
            result.set("staticType", this.staticType);
        }
        return result;
    };
    HoverInformation.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    HoverInformation.prototype[_56 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, HoverInformation_1)) {
            return this.offset == other.offset && this.length == other.length && this.containingLibraryPath == other.containingLibraryPath && this.containingLibraryName == other.containingLibraryName && this.containingClassDescription == other.containingClassDescription && this.dartdoc == other.dartdoc && this.elementDescription == other.elementDescription && this.elementKind == other.elementKind && this.isDeprecated == other.isDeprecated && this.parameter == other.parameter && this.propagatedType == other.propagatedType && this.staticType == other.staticType;
        }
        return false;
    };
    Object.defineProperty(HoverInformation.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.containingLibraryPath).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.containingLibraryName).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.containingClassDescription).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.dartdoc).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.elementDescription).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.elementKind).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.isDeprecated.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.parameter).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.propagatedType).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.staticType).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var HoverInformation_1, _56;
    __decorate([
        utils_1.defaultConstructor
    ], HoverInformation.prototype, "HoverInformation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], HoverInformation.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], HoverInformation.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], HoverInformation.prototype, _56, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], HoverInformation.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], HoverInformation, "$fromJson", null);
    HoverInformation = HoverInformation_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], HoverInformation);
    return HoverInformation;
}());
exports.HoverInformation = HoverInformation;
var ImplementedClass = /** @class */ (function () {
    function ImplementedClass(offset, length) {
    }
    ImplementedClass_1 = ImplementedClass;
    Object.defineProperty(ImplementedClass.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImplementedClass.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    ImplementedClass.prototype.ImplementedClass = function (offset, length) {
        this.offset = offset;
        this.length = length;
    };
    ImplementedClass.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_7;
            if (json.containsKey("length")) {
                length_7 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            return new ImplementedClass_1(offset, length_7);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "ImplementedClass", json);
        }
    };
    ImplementedClass.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("offset", this.offset);
        result.set("length", this.length);
        return result;
    };
    ImplementedClass.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ImplementedClass.prototype[_57 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ImplementedClass_1)) {
            return this.offset == other.offset && this.length == other.length;
        }
        return false;
    };
    Object.defineProperty(ImplementedClass.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ImplementedClass_1, _57;
    __decorate([
        utils_1.defaultConstructor
    ], ImplementedClass.prototype, "ImplementedClass", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedClass.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedClass.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedClass.prototype, _57, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedClass.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ImplementedClass, "$fromJson", null);
    ImplementedClass = ImplementedClass_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ImplementedClass);
    return ImplementedClass;
}());
exports.ImplementedClass = ImplementedClass;
var ImplementedMember = /** @class */ (function () {
    function ImplementedMember(offset, length) {
    }
    ImplementedMember_1 = ImplementedMember;
    Object.defineProperty(ImplementedMember.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImplementedMember.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    ImplementedMember.prototype.ImplementedMember = function (offset, length) {
        this.offset = offset;
        this.length = length;
    };
    ImplementedMember.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_8;
            if (json.containsKey("length")) {
                length_8 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            return new ImplementedMember_1(offset, length_8);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "ImplementedMember", json);
        }
    };
    ImplementedMember.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("offset", this.offset);
        result.set("length", this.length);
        return result;
    };
    ImplementedMember.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ImplementedMember.prototype[_58 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ImplementedMember_1)) {
            return this.offset == other.offset && this.length == other.length;
        }
        return false;
    };
    Object.defineProperty(ImplementedMember.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ImplementedMember_1, _58;
    __decorate([
        utils_1.defaultConstructor
    ], ImplementedMember.prototype, "ImplementedMember", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedMember.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedMember.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedMember.prototype, _58, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ImplementedMember.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ImplementedMember, "$fromJson", null);
    ImplementedMember = ImplementedMember_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ImplementedMember);
    return ImplementedMember;
}());
exports.ImplementedMember = ImplementedMember;
var ServerErrorParams = /** @class */ (function () {
    function ServerErrorParams(isFatal, message, stackTrace) {
    }
    ServerErrorParams_1 = ServerErrorParams;
    Object.defineProperty(ServerErrorParams.prototype, "isFatal", {
        get: function () {
            return this._isFatal;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._isFatal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerErrorParams.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerErrorParams.prototype, "stackTrace", {
        get: function () {
            return this._stackTrace;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._stackTrace = value;
        },
        enumerable: true,
        configurable: true
    });
    ServerErrorParams.prototype.ServerErrorParams = function (isFatal, message, stackTrace) {
        this.isFatal = isFatal;
        this.message = message;
        this.stackTrace = stackTrace;
    };
    ServerErrorParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var isFatal = void 0;
            if (json.containsKey("isFatal")) {
                isFatal = jsonDecoder.decodeBool(jsonPath + ".isFatal", json.get("isFatal"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "isFatal");
            }
            var message = void 0;
            if (json.containsKey("message")) {
                message = jsonDecoder.decodeString(jsonPath + ".message", json.get("message"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "message");
            }
            var stackTrace = void 0;
            if (json.containsKey("stackTrace")) {
                stackTrace = jsonDecoder.decodeString(jsonPath + ".stackTrace", json.get("stackTrace"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "stackTrace");
            }
            return new ServerErrorParams_1(isFatal, message, stackTrace);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "server.error params", json);
        }
    };
    ServerErrorParams.$fromNotification = function (notification) {
        return new ServerErrorParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    ServerErrorParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("isFatal", this.isFatal);
        result.set("message", this.message);
        result.set("stackTrace", this.stackTrace);
        return result;
    };
    ServerErrorParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "server.error", this.toJson());
    };
    ServerErrorParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ServerErrorParams.prototype[_59 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerErrorParams_1)) {
            return this.isFatal == other.isFatal && this.message == other.message && this.stackTrace == other.stackTrace;
        }
        return false;
    };
    Object.defineProperty(ServerErrorParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.isFatal.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.message).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.stackTrace).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ServerErrorParams_1, _59;
    __decorate([
        utils_1.defaultConstructor
    ], ServerErrorParams.prototype, "ServerErrorParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerErrorParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerErrorParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerErrorParams.prototype, _59, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerErrorParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ServerErrorParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ServerErrorParams, "$fromNotification", null);
    ServerErrorParams = ServerErrorParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerErrorParams);
    return ServerErrorParams;
}());
exports.ServerErrorParams = ServerErrorParams;
var ServerConnectedParams = /** @class */ (function () {
    function ServerConnectedParams(version, pid, _namedArguments) {
    }
    ServerConnectedParams_1 = ServerConnectedParams;
    Object.defineProperty(ServerConnectedParams.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._version = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerConnectedParams.prototype, "pid", {
        get: function () {
            return this._pid;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._pid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerConnectedParams.prototype, "sessionId", {
        get: function () {
            return this._sessionId;
        },
        set: function (value) {
            this._sessionId = value;
        },
        enumerable: true,
        configurable: true
    });
    ServerConnectedParams.prototype.ServerConnectedParams = function (version, pid, _namedArguments) {
        var sessionId = Object.assign({}, _namedArguments).sessionId;
        this.version = version;
        this.pid = pid;
        this.sessionId = sessionId;
    };
    ServerConnectedParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var version = void 0;
            if (json.containsKey("version")) {
                version = jsonDecoder.decodeString(jsonPath + ".version", json.get("version"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "version");
            }
            var pid = void 0;
            if (json.containsKey("pid")) {
                pid = jsonDecoder.decodeInt(jsonPath + ".pid", json.get("pid"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "pid");
            }
            var sessionId = void 0;
            if (json.containsKey("sessionId")) {
                sessionId = jsonDecoder.decodeString(jsonPath + ".sessionId", json.get("sessionId"));
            }
            return new ServerConnectedParams_1(version, pid, {
                sessionId: sessionId
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "server.connected params", json);
        }
    };
    ServerConnectedParams.$fromNotification = function (notification) {
        return new ServerConnectedParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    ServerConnectedParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("version", this.version);
        result.set("pid", this.pid);
        if (this.sessionId != null) {
            result.set("sessionId", this.sessionId);
        }
        return result;
    };
    ServerConnectedParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "server.connected", this.toJson());
    };
    ServerConnectedParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ServerConnectedParams.prototype[_60 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ServerConnectedParams_1)) {
            return this.version == other.version && this.pid == other.pid && this.sessionId == other.sessionId;
        }
        return false;
    };
    Object.defineProperty(ServerConnectedParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.version).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.pid).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.sessionId).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ServerConnectedParams_1, _60;
    __decorate([
        utils_1.defaultConstructor
    ], ServerConnectedParams.prototype, "ServerConnectedParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerConnectedParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerConnectedParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerConnectedParams.prototype, _60, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerConnectedParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ServerConnectedParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ServerConnectedParams, "$fromNotification", null);
    ServerConnectedParams = ServerConnectedParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerConnectedParams);
    return ServerConnectedParams;
}());
exports.ServerConnectedParams = ServerConnectedParams;
var SearchResultsParams = /** @class */ (function () {
    function SearchResultsParams(id, results, isLast) {
    }
    SearchResultsParams_1 = SearchResultsParams;
    Object.defineProperty(SearchResultsParams.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsParams.prototype, "results", {
        get: function () {
            return this._results;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._results = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsParams.prototype, "isLast", {
        get: function () {
            return this._isLast;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._isLast = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchResultsParams.prototype.SearchResultsParams = function (id, results, isLast) {
        this.id = id;
        this.results = results;
        this.isLast = isLast;
    };
    SearchResultsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            var results = void 0;
            if (json.containsKey("results")) {
                results = jsonDecoder.decodeList(jsonPath + ".results", json.get("results"), function (jsonPath, json) {
                    return new SearchResult.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "results");
            }
            var isLast = void 0;
            if (json.containsKey("isLast")) {
                isLast = jsonDecoder.decodeBool(jsonPath + ".isLast", json.get("isLast"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "isLast");
            }
            return new SearchResultsParams_1(id, results, isLast);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.results params", json);
        }
    };
    SearchResultsParams.$fromNotification = function (notification) {
        return new SearchResultsParams_1.fromJson(new bare.createInstance(any, null, null), "params", notification.params);
    };
    SearchResultsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        result.set("results", this.results.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("isLast", this.isLast);
        return result;
    };
    SearchResultsParams.prototype.toNotification = function () {
        return new bare.createInstance(any, null, "search.results", this.toJson());
    };
    SearchResultsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchResultsParams.prototype[_61 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchResultsParams_1)) {
            return this.id == other.id && listEqual(this.results, other.results, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && this.isLast == other.isLast;
        }
        return false;
    };
    Object.defineProperty(SearchResultsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.results.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.isLast.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchResultsParams_1, _61;
    __decorate([
        utils_1.defaultConstructor
    ], SearchResultsParams.prototype, "SearchResultsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResultsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResultsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResultsParams.prototype, _61, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResultsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchResultsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchResultsParams, "$fromNotification", null);
    SearchResultsParams = SearchResultsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchResultsParams);
    return SearchResultsParams;
}());
exports.SearchResultsParams = SearchResultsParams;
var SearchResultKind = /** @class */ (function () {
    function SearchResultKind(name) {
    }
    SearchResultKind_1 = SearchResultKind;
    Object.defineProperty(SearchResultKind, "DECLARATION", {
        get: function () {
            if (this.__$DECLARATION === undefined) {
                this.__$DECLARATION = new SearchResultKind_1._("DECLARATION");
            }
            return this.__$DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultKind, "INVOCATION", {
        get: function () {
            if (this.__$INVOCATION === undefined) {
                this.__$INVOCATION = new SearchResultKind_1._("INVOCATION");
            }
            return this.__$INVOCATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultKind, "READ", {
        get: function () {
            if (this.__$READ === undefined) {
                this.__$READ = new SearchResultKind_1._("READ");
            }
            return this.__$READ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultKind, "READ_WRITE", {
        get: function () {
            if (this.__$READ_WRITE === undefined) {
                this.__$READ_WRITE = new SearchResultKind_1._("READ_WRITE");
            }
            return this.__$READ_WRITE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultKind, "REFERENCE", {
        get: function () {
            if (this.__$REFERENCE === undefined) {
                this.__$REFERENCE = new SearchResultKind_1._("REFERENCE");
            }
            return this.__$REFERENCE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultKind, "UNKNOWN", {
        get: function () {
            if (this.__$UNKNOWN === undefined) {
                this.__$UNKNOWN = new SearchResultKind_1._("UNKNOWN");
            }
            return this.__$UNKNOWN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultKind, "WRITE", {
        get: function () {
            if (this.__$WRITE === undefined) {
                this.__$WRITE = new SearchResultKind_1._("WRITE");
            }
            return this.__$WRITE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultKind, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(SearchResultKind_1.DECLARATION, SearchResultKind_1.INVOCATION, SearchResultKind_1.READ, SearchResultKind_1.READ_WRITE, SearchResultKind_1.REFERENCE, SearchResultKind_1.UNKNOWN, SearchResultKind_1.WRITE);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    SearchResultKind.prototype._ = function (name) {
        this.name = name;
    };
    SearchResultKind.$SearchResultKind = function (name) {
        switch (name) {
            case "DECLARATION":
                return SearchResultKind_1.DECLARATION;
            case "INVOCATION":
                return SearchResultKind_1.INVOCATION;
            case "READ":
                return SearchResultKind_1.READ;
            case "READ_WRITE":
                return SearchResultKind_1.READ_WRITE;
            case "REFERENCE":
                return SearchResultKind_1.REFERENCE;
            case "UNKNOWN":
                return SearchResultKind_1.UNKNOWN;
            case "WRITE":
                return SearchResultKind_1.WRITE;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    SearchResultKind.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new SearchResultKind_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "SearchResultKind", json);
    };
    SearchResultKind.prototype.toString = function () {
        return "SearchResultKind." + this.name;
    };
    SearchResultKind.prototype.toJson = function () {
        return this.name;
    };
    var SearchResultKind_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResultKind.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], SearchResultKind.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResultKind.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], SearchResultKind, "$SearchResultKind", null);
    __decorate([
        utils_1.namedFactory
    ], SearchResultKind, "$fromJson", null);
    SearchResultKind = SearchResultKind_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchResultKind);
    return SearchResultKind;
}());
exports.SearchResultKind = SearchResultKind;
var SearchResult = /** @class */ (function () {
    function SearchResult(location, kind, isPotential, path) {
    }
    SearchResult_1 = SearchResult;
    Object.defineProperty(SearchResult.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResult.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._kind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResult.prototype, "isPotential", {
        get: function () {
            return this._isPotential;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._isPotential = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResult.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._path = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchResult.prototype.SearchResult = function (location, kind, isPotential, path) {
        this.location = location;
        this.kind = kind;
        this.isPotential = isPotential;
        this.path = path;
    };
    SearchResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var location_1;
            if (json.containsKey("location")) {
                location_1 = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".location", json.get("location"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "location");
            }
            var kind = void 0;
            if (json.containsKey("kind")) {
                kind = new SearchResultKind.fromJson(jsonDecoder, jsonPath + ".kind", json.get("kind"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "kind");
            }
            var isPotential = void 0;
            if (json.containsKey("isPotential")) {
                isPotential = jsonDecoder.decodeBool(jsonPath + ".isPotential", json.get("isPotential"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "isPotential");
            }
            var path = void 0;
            if (json.containsKey("path")) {
                path = jsonDecoder.decodeList(jsonPath + ".path", json.get("path"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "path");
            }
            return new SearchResult_1(location_1, kind, isPotential, path);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "SearchResult", json);
        }
    };
    SearchResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("location", this.location.toJson());
        result.set("kind", this.kind.toJson());
        result.set("isPotential", this.isPotential);
        result.set("path", this.path.map(function (value) {
            return value.toJson();
        }).toList());
        return result;
    };
    SearchResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchResult.prototype[_62 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchResult_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.location, other.location) && utils_1.op(utils_1.Op.EQUALS, this.kind, other.kind) && this.isPotential == other.isPotential && listEqual(this.path, other.path, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(SearchResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.location.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.kind.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.isPotential.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.path.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchResult_1, _62;
    __decorate([
        utils_1.defaultConstructor
    ], SearchResult.prototype, "SearchResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResult.prototype, _62, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchResult, "$fromJson", null);
    SearchResult = SearchResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchResult);
    return SearchResult;
}());
exports.SearchResult = SearchResult;
var SearchGetTypeHierarchyResult = /** @class */ (function () {
    function SearchGetTypeHierarchyResult(_namedArguments) {
    }
    SearchGetTypeHierarchyResult_1 = SearchGetTypeHierarchyResult;
    Object.defineProperty(SearchGetTypeHierarchyResult.prototype, "hierarchyItems", {
        get: function () {
            return this._hierarchyItems;
        },
        set: function (value) {
            this._hierarchyItems = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchGetTypeHierarchyResult.prototype.SearchGetTypeHierarchyResult = function (_namedArguments) {
        var hierarchyItems = Object.assign({}, _namedArguments).hierarchyItems;
        this.hierarchyItems = hierarchyItems;
    };
    SearchGetTypeHierarchyResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var hierarchyItems = void 0;
            if (json.containsKey("hierarchyItems")) {
                hierarchyItems = jsonDecoder.decodeList(jsonPath + ".hierarchyItems", json.get("hierarchyItems"), function (jsonPath, json) {
                    return new TypeHierarchyItem.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            return new SearchGetTypeHierarchyResult_1({
                hierarchyItems: hierarchyItems
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.getTypeHierarchy result", json);
        }
    };
    SearchGetTypeHierarchyResult.$fromResponse = function (response) {
        return new SearchGetTypeHierarchyResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    SearchGetTypeHierarchyResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.hierarchyItems != null) {
            result.set("hierarchyItems", this.hierarchyItems.map(function (value) {
                return value.toJson();
            }).toList());
        }
        return result;
    };
    SearchGetTypeHierarchyResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    SearchGetTypeHierarchyResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchGetTypeHierarchyResult.prototype[_63 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchGetTypeHierarchyResult_1)) {
            return listEqual(this.hierarchyItems, other.hierarchyItems, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(SearchGetTypeHierarchyResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.hierarchyItems.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchGetTypeHierarchyResult_1, _63;
    __decorate([
        utils_1.defaultConstructor
    ], SearchGetTypeHierarchyResult.prototype, "SearchGetTypeHierarchyResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyResult.prototype, _63, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchGetTypeHierarchyResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchGetTypeHierarchyResult, "$fromResponse", null);
    SearchGetTypeHierarchyResult = SearchGetTypeHierarchyResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchGetTypeHierarchyResult);
    return SearchGetTypeHierarchyResult;
}());
exports.SearchGetTypeHierarchyResult = SearchGetTypeHierarchyResult;
var OverriddenMember = /** @class */ (function () {
    function OverriddenMember(element, className) {
    }
    OverriddenMember_1 = OverriddenMember;
    Object.defineProperty(OverriddenMember.prototype, "element", {
        get: function () {
            return this._element;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._element = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverriddenMember.prototype, "className", {
        get: function () {
            return this._className;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._className = value;
        },
        enumerable: true,
        configurable: true
    });
    OverriddenMember.prototype.OverriddenMember = function (element, className) {
        this.element = element;
        this.className = className;
    };
    OverriddenMember.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var element = void 0;
            if (json.containsKey("element")) {
                element = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".element", json.get("element"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "element");
            }
            var className = void 0;
            if (json.containsKey("className")) {
                className = jsonDecoder.decodeString(jsonPath + ".className", json.get("className"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "className");
            }
            return new OverriddenMember_1(element, className);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "OverriddenMember", json);
        }
    };
    OverriddenMember.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("element", this.element.toJson());
        result.set("className", this.className);
        return result;
    };
    OverriddenMember.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    OverriddenMember.prototype[_64 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, OverriddenMember_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.element, other.element) && this.className == other.className;
        }
        return false;
    };
    Object.defineProperty(OverriddenMember.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.element.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.className).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var OverriddenMember_1, _64;
    __decorate([
        utils_1.defaultConstructor
    ], OverriddenMember.prototype, "OverriddenMember", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OverriddenMember.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OverriddenMember.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OverriddenMember.prototype, _64, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OverriddenMember.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], OverriddenMember, "$fromJson", null);
    OverriddenMember = OverriddenMember_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], OverriddenMember);
    return OverriddenMember;
}());
exports.OverriddenMember = OverriddenMember;
var Override = /** @class */ (function () {
    function Override(offset, length, _namedArguments) {
    }
    Override_1 = Override;
    Object.defineProperty(Override.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Override.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Override.prototype, "superclassMember", {
        get: function () {
            return this._superclassMember;
        },
        set: function (value) {
            this._superclassMember = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Override.prototype, "interfaceMembers", {
        get: function () {
            return this._interfaceMembers;
        },
        set: function (value) {
            this._interfaceMembers = value;
        },
        enumerable: true,
        configurable: true
    });
    Override.prototype.Override = function (offset, length, _namedArguments) {
        var _66 = Object.assign({}, _namedArguments), superclassMember = _66.superclassMember, interfaceMembers = _66.interfaceMembers;
        this.offset = offset;
        this.length = length;
        this.superclassMember = superclassMember;
        this.interfaceMembers = interfaceMembers;
    };
    Override.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_9;
            if (json.containsKey("length")) {
                length_9 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            var superclassMember = void 0;
            if (json.containsKey("superclassMember")) {
                superclassMember = new OverriddenMember.fromJson(jsonDecoder, jsonPath + ".superclassMember", json.get("superclassMember"));
            }
            var interfaceMembers = void 0;
            if (json.containsKey("interfaceMembers")) {
                interfaceMembers = jsonDecoder.decodeList(jsonPath + ".interfaceMembers", json.get("interfaceMembers"), function (jsonPath, json) {
                    return new OverriddenMember.fromJson(jsonDecoder, jsonPath, json);
                });
            }
            return new Override_1(offset, length_9, {
                superclassMember: superclassMember, interfaceMembers: interfaceMembers
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "Override", json);
        }
    };
    Override.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("offset", this.offset);
        result.set("length", this.length);
        if (this.superclassMember != null) {
            result.set("superclassMember", this.superclassMember.toJson());
        }
        if (this.interfaceMembers != null) {
            result.set("interfaceMembers", this.interfaceMembers.map(function (value) {
                return value.toJson();
            }).toList());
        }
        return result;
    };
    Override.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    Override.prototype[_65 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, Override_1)) {
            return this.offset == other.offset && this.length == other.length && utils_1.op(utils_1.Op.EQUALS, this.superclassMember, other.superclassMember) && listEqual(this.interfaceMembers, other.interfaceMembers, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            });
        }
        return false;
    };
    Object.defineProperty(Override.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.superclassMember.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.interfaceMembers.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var Override_1, _65;
    __decorate([
        utils_1.defaultConstructor
    ], Override.prototype, "Override", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Override.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Override.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Override.prototype, _65, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Override.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], Override, "$fromJson", null);
    Override = Override_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], Override);
    return Override;
}());
exports.Override = Override;
var PubStatus = /** @class */ (function () {
    function PubStatus(isListingPackageDirs) {
    }
    PubStatus_1 = PubStatus;
    Object.defineProperty(PubStatus.prototype, "isListingPackageDirs", {
        get: function () {
            return this._isListingPackageDirs;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._isListingPackageDirs = value;
        },
        enumerable: true,
        configurable: true
    });
    PubStatus.prototype.PubStatus = function (isListingPackageDirs) {
        this.isListingPackageDirs = isListingPackageDirs;
    };
    PubStatus.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var isListingPackageDirs = void 0;
            if (json.containsKey("isListingPackageDirs")) {
                isListingPackageDirs = jsonDecoder.decodeBool(jsonPath + ".isListingPackageDirs", json.get("isListingPackageDirs"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "isListingPackageDirs");
            }
            return new PubStatus_1(isListingPackageDirs);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "PubStatus", json);
        }
    };
    PubStatus.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("isListingPackageDirs", this.isListingPackageDirs);
        return result;
    };
    PubStatus.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    PubStatus.prototype[_66 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, PubStatus_1)) {
            return this.isListingPackageDirs == other.isListingPackageDirs;
        }
        return false;
    };
    Object.defineProperty(PubStatus.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.isListingPackageDirs.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var PubStatus_1, _66;
    __decorate([
        utils_1.defaultConstructor
    ], PubStatus.prototype, "PubStatus", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PubStatus.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PubStatus.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PubStatus.prototype, _66, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PubStatus.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], PubStatus, "$fromJson", null);
    PubStatus = PubStatus_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], PubStatus);
    return PubStatus;
}());
exports.PubStatus = PubStatus;
var RefactoringFeedback = /** @class */ (function () {
    function RefactoringFeedback() {
    }
    RefactoringFeedback_1 = RefactoringFeedback;
    RefactoringFeedback.prototype.RefactoringFeedback = function () {
    };
    RefactoringFeedback.$fromJson = function (jsonDecoder, jsonPath, json, responseJson) {
        return refactoringFeedbackFromJson(jsonDecoder, jsonPath, json, responseJson);
    };
    RefactoringFeedback.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        return result;
    };
    RefactoringFeedback.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    RefactoringFeedback.prototype[_67 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, RefactoringFeedback_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(RefactoringFeedback.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var RefactoringFeedback_1, _67;
    __decorate([
        utils_1.defaultConstructor
    ], RefactoringFeedback.prototype, "RefactoringFeedback", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringFeedback.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringFeedback.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringFeedback.prototype, _67, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], RefactoringFeedback, "$fromJson", null);
    RefactoringFeedback = RefactoringFeedback_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], RefactoringFeedback);
    return RefactoringFeedback;
}());
exports.RefactoringFeedback = RefactoringFeedback;
var RefactoringOptions = /** @class */ (function () {
    function RefactoringOptions() {
    }
    RefactoringOptions_1 = RefactoringOptions;
    RefactoringOptions.prototype.RefactoringOptions = function () {
    };
    RefactoringOptions.$fromJson = function (jsonDecoder, jsonPath, json, kind) {
        return refactoringOptionsFromJson(jsonDecoder, jsonPath, json, kind);
    };
    RefactoringOptions.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        return result;
    };
    RefactoringOptions.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    RefactoringOptions.prototype[_68 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, RefactoringOptions_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(RefactoringOptions.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var RefactoringOptions_1, _68;
    __decorate([
        utils_1.defaultConstructor
    ], RefactoringOptions.prototype, "RefactoringOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringOptions.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringOptions.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringOptions.prototype, _68, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RefactoringOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], RefactoringOptions, "$fromJson", null);
    RefactoringOptions = RefactoringOptions_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], RefactoringOptions);
    return RefactoringOptions;
}());
exports.RefactoringOptions = RefactoringOptions;
var SearchGetTypeHierarchyParams = /** @class */ (function () {
    function SearchGetTypeHierarchyParams(file, offset, _namedArguments) {
    }
    SearchGetTypeHierarchyParams_1 = SearchGetTypeHierarchyParams;
    Object.defineProperty(SearchGetTypeHierarchyParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchGetTypeHierarchyParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchGetTypeHierarchyParams.prototype, "superOnly", {
        get: function () {
            return this._superOnly;
        },
        set: function (value) {
            this._superOnly = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchGetTypeHierarchyParams.prototype.SearchGetTypeHierarchyParams = function (file, offset, _namedArguments) {
        var superOnly = Object.assign({}, _namedArguments).superOnly;
        this.file = file;
        this.offset = offset;
        this.superOnly = superOnly;
    };
    SearchGetTypeHierarchyParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var superOnly = void 0;
            if (json.containsKey("superOnly")) {
                superOnly = jsonDecoder.decodeBool(jsonPath + ".superOnly", json.get("superOnly"));
            }
            return new SearchGetTypeHierarchyParams_1(file, offset, {
                superOnly: superOnly
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.getTypeHierarchy params", json);
        }
    };
    SearchGetTypeHierarchyParams.$fromRequest = function (request) {
        return new SearchGetTypeHierarchyParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    SearchGetTypeHierarchyParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        if (this.superOnly != null) {
            result.set("superOnly", this.superOnly);
        }
        return result;
    };
    SearchGetTypeHierarchyParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "search.getTypeHierarchy", this.toJson());
    };
    SearchGetTypeHierarchyParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchGetTypeHierarchyParams.prototype[_69 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchGetTypeHierarchyParams_1)) {
            return this.file == other.file && this.offset == other.offset && this.superOnly == other.superOnly;
        }
        return false;
    };
    Object.defineProperty(SearchGetTypeHierarchyParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.superOnly.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchGetTypeHierarchyParams_1, _69;
    __decorate([
        utils_1.defaultConstructor
    ], SearchGetTypeHierarchyParams.prototype, "SearchGetTypeHierarchyParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyParams.prototype, _69, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchGetTypeHierarchyParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchGetTypeHierarchyParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchGetTypeHierarchyParams, "$fromRequest", null);
    SearchGetTypeHierarchyParams = SearchGetTypeHierarchyParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchGetTypeHierarchyParams);
    return SearchGetTypeHierarchyParams;
}());
exports.SearchGetTypeHierarchyParams = SearchGetTypeHierarchyParams;
var SearchFindTopLevelDeclarationsResult = /** @class */ (function () {
    function SearchFindTopLevelDeclarationsResult(id) {
    }
    SearchFindTopLevelDeclarationsResult_1 = SearchFindTopLevelDeclarationsResult;
    Object.defineProperty(SearchFindTopLevelDeclarationsResult.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindTopLevelDeclarationsResult.prototype.SearchFindTopLevelDeclarationsResult = function (id) {
        this.id = id;
    };
    SearchFindTopLevelDeclarationsResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            return new SearchFindTopLevelDeclarationsResult_1(id);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findTopLevelDeclarations result", json);
        }
    };
    SearchFindTopLevelDeclarationsResult.$fromResponse = function (response) {
        return new SearchFindTopLevelDeclarationsResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    SearchFindTopLevelDeclarationsResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        return result;
    };
    SearchFindTopLevelDeclarationsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    SearchFindTopLevelDeclarationsResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindTopLevelDeclarationsResult.prototype[_70 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindTopLevelDeclarationsResult_1)) {
            return this.id == other.id;
        }
        return false;
    };
    Object.defineProperty(SearchFindTopLevelDeclarationsResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindTopLevelDeclarationsResult_1, _70;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindTopLevelDeclarationsResult.prototype, "SearchFindTopLevelDeclarationsResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsResult.prototype, _70, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindTopLevelDeclarationsResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindTopLevelDeclarationsResult, "$fromResponse", null);
    SearchFindTopLevelDeclarationsResult = SearchFindTopLevelDeclarationsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindTopLevelDeclarationsResult);
    return SearchFindTopLevelDeclarationsResult;
}());
exports.SearchFindTopLevelDeclarationsResult = SearchFindTopLevelDeclarationsResult;
var RequestError = /** @class */ (function () {
    function RequestError(code, message, _namedArguments) {
    }
    RequestError_1 = RequestError;
    Object.defineProperty(RequestError.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestError.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestError.prototype, "stackTrace", {
        get: function () {
            return this._stackTrace;
        },
        set: function (value) {
            this._stackTrace = value;
        },
        enumerable: true,
        configurable: true
    });
    RequestError.prototype.RequestError = function (code, message, _namedArguments) {
        var stackTrace = Object.assign({}, _namedArguments).stackTrace;
        this.code = code;
        this.message = message;
        this.stackTrace = stackTrace;
    };
    RequestError.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var code = void 0;
            if (json.containsKey("code")) {
                code = new RequestErrorCode.fromJson(jsonDecoder, jsonPath + ".code", json.get("code"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "code");
            }
            var message = void 0;
            if (json.containsKey("message")) {
                message = jsonDecoder.decodeString(jsonPath + ".message", json.get("message"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "message");
            }
            var stackTrace = void 0;
            if (json.containsKey("stackTrace")) {
                stackTrace = jsonDecoder.decodeString(jsonPath + ".stackTrace", json.get("stackTrace"));
            }
            return new RequestError_1(code, message, {
                stackTrace: stackTrace
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "RequestError", json);
        }
    };
    RequestError.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("code", this.code.toJson());
        result.set("message", this.message);
        if (this.stackTrace != null) {
            result.set("stackTrace", this.stackTrace);
        }
        return result;
    };
    RequestError.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    RequestError.prototype[_71 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, RequestError_1)) {
            return utils_1.op(utils_1.Op.EQUALS, this.code, other.code) && this.message == other.message && this.stackTrace == other.stackTrace;
        }
        return false;
    };
    Object.defineProperty(RequestError.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.code.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.message).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.stackTrace).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var RequestError_1, _71;
    __decorate([
        utils_1.defaultConstructor
    ], RequestError.prototype, "RequestError", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestError.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestError.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestError.prototype, _71, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestError.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], RequestError, "$fromJson", null);
    RequestError = RequestError_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], RequestError);
    return RequestError;
}());
exports.RequestError = RequestError;
var RequestErrorCode = /** @class */ (function () {
    function RequestErrorCode(name) {
    }
    RequestErrorCode_1 = RequestErrorCode;
    Object.defineProperty(RequestErrorCode, "CONTENT_MODIFIED", {
        get: function () {
            if (this.__$CONTENT_MODIFIED === undefined) {
                this.__$CONTENT_MODIFIED = new RequestErrorCode_1._("CONTENT_MODIFIED");
            }
            return this.__$CONTENT_MODIFIED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "DEBUG_PORT_COULD_NOT_BE_OPENED", {
        get: function () {
            if (this.__$DEBUG_PORT_COULD_NOT_BE_OPENED === undefined) {
                this.__$DEBUG_PORT_COULD_NOT_BE_OPENED = new RequestErrorCode_1._("DEBUG_PORT_COULD_NOT_BE_OPENED");
            }
            return this.__$DEBUG_PORT_COULD_NOT_BE_OPENED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "FILE_NOT_ANALYZED", {
        get: function () {
            if (this.__$FILE_NOT_ANALYZED === undefined) {
                this.__$FILE_NOT_ANALYZED = new RequestErrorCode_1._("FILE_NOT_ANALYZED");
            }
            return this.__$FILE_NOT_ANALYZED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "FORMAT_INVALID_FILE", {
        get: function () {
            if (this.__$FORMAT_INVALID_FILE === undefined) {
                this.__$FORMAT_INVALID_FILE = new RequestErrorCode_1._("FORMAT_INVALID_FILE");
            }
            return this.__$FORMAT_INVALID_FILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "FORMAT_WITH_ERRORS", {
        get: function () {
            if (this.__$FORMAT_WITH_ERRORS === undefined) {
                this.__$FORMAT_WITH_ERRORS = new RequestErrorCode_1._("FORMAT_WITH_ERRORS");
            }
            return this.__$FORMAT_WITH_ERRORS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "GET_ERRORS_INVALID_FILE", {
        get: function () {
            if (this.__$GET_ERRORS_INVALID_FILE === undefined) {
                this.__$GET_ERRORS_INVALID_FILE = new RequestErrorCode_1._("GET_ERRORS_INVALID_FILE");
            }
            return this.__$GET_ERRORS_INVALID_FILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "GET_NAVIGATION_INVALID_FILE", {
        get: function () {
            if (this.__$GET_NAVIGATION_INVALID_FILE === undefined) {
                this.__$GET_NAVIGATION_INVALID_FILE = new RequestErrorCode_1._("GET_NAVIGATION_INVALID_FILE");
            }
            return this.__$GET_NAVIGATION_INVALID_FILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "GET_REACHABLE_SOURCES_INVALID_FILE", {
        get: function () {
            if (this.__$GET_REACHABLE_SOURCES_INVALID_FILE === undefined) {
                this.__$GET_REACHABLE_SOURCES_INVALID_FILE = new RequestErrorCode_1._("GET_REACHABLE_SOURCES_INVALID_FILE");
            }
            return this.__$GET_REACHABLE_SOURCES_INVALID_FILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "INVALID_ANALYSIS_ROOT", {
        get: function () {
            if (this.__$INVALID_ANALYSIS_ROOT === undefined) {
                this.__$INVALID_ANALYSIS_ROOT = new RequestErrorCode_1._("INVALID_ANALYSIS_ROOT");
            }
            return this.__$INVALID_ANALYSIS_ROOT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "INVALID_EXECUTION_CONTEXT", {
        get: function () {
            if (this.__$INVALID_EXECUTION_CONTEXT === undefined) {
                this.__$INVALID_EXECUTION_CONTEXT = new RequestErrorCode_1._("INVALID_EXECUTION_CONTEXT");
            }
            return this.__$INVALID_EXECUTION_CONTEXT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "INVALID_FILE_PATH_FORMAT", {
        get: function () {
            if (this.__$INVALID_FILE_PATH_FORMAT === undefined) {
                this.__$INVALID_FILE_PATH_FORMAT = new RequestErrorCode_1._("INVALID_FILE_PATH_FORMAT");
            }
            return this.__$INVALID_FILE_PATH_FORMAT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "INVALID_OVERLAY_CHANGE", {
        get: function () {
            if (this.__$INVALID_OVERLAY_CHANGE === undefined) {
                this.__$INVALID_OVERLAY_CHANGE = new RequestErrorCode_1._("INVALID_OVERLAY_CHANGE");
            }
            return this.__$INVALID_OVERLAY_CHANGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "INVALID_PARAMETER", {
        get: function () {
            if (this.__$INVALID_PARAMETER === undefined) {
                this.__$INVALID_PARAMETER = new RequestErrorCode_1._("INVALID_PARAMETER");
            }
            return this.__$INVALID_PARAMETER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "INVALID_REQUEST", {
        get: function () {
            if (this.__$INVALID_REQUEST === undefined) {
                this.__$INVALID_REQUEST = new RequestErrorCode_1._("INVALID_REQUEST");
            }
            return this.__$INVALID_REQUEST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "ORGANIZE_DIRECTIVES_ERROR", {
        get: function () {
            if (this.__$ORGANIZE_DIRECTIVES_ERROR === undefined) {
                this.__$ORGANIZE_DIRECTIVES_ERROR = new RequestErrorCode_1._("ORGANIZE_DIRECTIVES_ERROR");
            }
            return this.__$ORGANIZE_DIRECTIVES_ERROR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "REFACTORING_REQUEST_CANCELLED", {
        get: function () {
            if (this.__$REFACTORING_REQUEST_CANCELLED === undefined) {
                this.__$REFACTORING_REQUEST_CANCELLED = new RequestErrorCode_1._("REFACTORING_REQUEST_CANCELLED");
            }
            return this.__$REFACTORING_REQUEST_CANCELLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "SERVER_ALREADY_STARTED", {
        get: function () {
            if (this.__$SERVER_ALREADY_STARTED === undefined) {
                this.__$SERVER_ALREADY_STARTED = new RequestErrorCode_1._("SERVER_ALREADY_STARTED");
            }
            return this.__$SERVER_ALREADY_STARTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "SERVER_ERROR", {
        get: function () {
            if (this.__$SERVER_ERROR === undefined) {
                this.__$SERVER_ERROR = new RequestErrorCode_1._("SERVER_ERROR");
            }
            return this.__$SERVER_ERROR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "SORT_MEMBERS_INVALID_FILE", {
        get: function () {
            if (this.__$SORT_MEMBERS_INVALID_FILE === undefined) {
                this.__$SORT_MEMBERS_INVALID_FILE = new RequestErrorCode_1._("SORT_MEMBERS_INVALID_FILE");
            }
            return this.__$SORT_MEMBERS_INVALID_FILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "SORT_MEMBERS_PARSE_ERRORS", {
        get: function () {
            if (this.__$SORT_MEMBERS_PARSE_ERRORS === undefined) {
                this.__$SORT_MEMBERS_PARSE_ERRORS = new RequestErrorCode_1._("SORT_MEMBERS_PARSE_ERRORS");
            }
            return this.__$SORT_MEMBERS_PARSE_ERRORS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "UNANALYZED_PRIORITY_FILES", {
        get: function () {
            if (this.__$UNANALYZED_PRIORITY_FILES === undefined) {
                this.__$UNANALYZED_PRIORITY_FILES = new RequestErrorCode_1._("UNANALYZED_PRIORITY_FILES");
            }
            return this.__$UNANALYZED_PRIORITY_FILES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "UNKNOWN_REQUEST", {
        get: function () {
            if (this.__$UNKNOWN_REQUEST === undefined) {
                this.__$UNKNOWN_REQUEST = new RequestErrorCode_1._("UNKNOWN_REQUEST");
            }
            return this.__$UNKNOWN_REQUEST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "UNKNOWN_SOURCE", {
        get: function () {
            if (this.__$UNKNOWN_SOURCE === undefined) {
                this.__$UNKNOWN_SOURCE = new RequestErrorCode_1._("UNKNOWN_SOURCE");
            }
            return this.__$UNKNOWN_SOURCE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "UNSUPPORTED_FEATURE", {
        get: function () {
            if (this.__$UNSUPPORTED_FEATURE === undefined) {
                this.__$UNSUPPORTED_FEATURE = new RequestErrorCode_1._("UNSUPPORTED_FEATURE");
            }
            return this.__$UNSUPPORTED_FEATURE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestErrorCode, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(RequestErrorCode_1.CONTENT_MODIFIED, RequestErrorCode_1.DEBUG_PORT_COULD_NOT_BE_OPENED, RequestErrorCode_1.FILE_NOT_ANALYZED, RequestErrorCode_1.FORMAT_INVALID_FILE, RequestErrorCode_1.FORMAT_WITH_ERRORS, RequestErrorCode_1.GET_ERRORS_INVALID_FILE, RequestErrorCode_1.GET_NAVIGATION_INVALID_FILE, RequestErrorCode_1.GET_REACHABLE_SOURCES_INVALID_FILE, RequestErrorCode_1.INVALID_ANALYSIS_ROOT, RequestErrorCode_1.INVALID_EXECUTION_CONTEXT, RequestErrorCode_1.INVALID_FILE_PATH_FORMAT, RequestErrorCode_1.INVALID_OVERLAY_CHANGE, RequestErrorCode_1.INVALID_PARAMETER, RequestErrorCode_1.INVALID_REQUEST, RequestErrorCode_1.ORGANIZE_DIRECTIVES_ERROR, RequestErrorCode_1.REFACTORING_REQUEST_CANCELLED, RequestErrorCode_1.SERVER_ALREADY_STARTED, RequestErrorCode_1.SERVER_ERROR, RequestErrorCode_1.SORT_MEMBERS_INVALID_FILE, RequestErrorCode_1.SORT_MEMBERS_PARSE_ERRORS, RequestErrorCode_1.UNANALYZED_PRIORITY_FILES, RequestErrorCode_1.UNKNOWN_REQUEST, RequestErrorCode_1.UNKNOWN_SOURCE, RequestErrorCode_1.UNSUPPORTED_FEATURE);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    RequestErrorCode.prototype._ = function (name) {
        this.name = name;
    };
    RequestErrorCode.$RequestErrorCode = function (name) {
        switch (name) {
            case "CONTENT_MODIFIED":
                return RequestErrorCode_1.CONTENT_MODIFIED;
            case "DEBUG_PORT_COULD_NOT_BE_OPENED":
                return RequestErrorCode_1.DEBUG_PORT_COULD_NOT_BE_OPENED;
            case "FILE_NOT_ANALYZED":
                return RequestErrorCode_1.FILE_NOT_ANALYZED;
            case "FORMAT_INVALID_FILE":
                return RequestErrorCode_1.FORMAT_INVALID_FILE;
            case "FORMAT_WITH_ERRORS":
                return RequestErrorCode_1.FORMAT_WITH_ERRORS;
            case "GET_ERRORS_INVALID_FILE":
                return RequestErrorCode_1.GET_ERRORS_INVALID_FILE;
            case "GET_NAVIGATION_INVALID_FILE":
                return RequestErrorCode_1.GET_NAVIGATION_INVALID_FILE;
            case "GET_REACHABLE_SOURCES_INVALID_FILE":
                return RequestErrorCode_1.GET_REACHABLE_SOURCES_INVALID_FILE;
            case "INVALID_ANALYSIS_ROOT":
                return RequestErrorCode_1.INVALID_ANALYSIS_ROOT;
            case "INVALID_EXECUTION_CONTEXT":
                return RequestErrorCode_1.INVALID_EXECUTION_CONTEXT;
            case "INVALID_FILE_PATH_FORMAT":
                return RequestErrorCode_1.INVALID_FILE_PATH_FORMAT;
            case "INVALID_OVERLAY_CHANGE":
                return RequestErrorCode_1.INVALID_OVERLAY_CHANGE;
            case "INVALID_PARAMETER":
                return RequestErrorCode_1.INVALID_PARAMETER;
            case "INVALID_REQUEST":
                return RequestErrorCode_1.INVALID_REQUEST;
            case "ORGANIZE_DIRECTIVES_ERROR":
                return RequestErrorCode_1.ORGANIZE_DIRECTIVES_ERROR;
            case "REFACTORING_REQUEST_CANCELLED":
                return RequestErrorCode_1.REFACTORING_REQUEST_CANCELLED;
            case "SERVER_ALREADY_STARTED":
                return RequestErrorCode_1.SERVER_ALREADY_STARTED;
            case "SERVER_ERROR":
                return RequestErrorCode_1.SERVER_ERROR;
            case "SORT_MEMBERS_INVALID_FILE":
                return RequestErrorCode_1.SORT_MEMBERS_INVALID_FILE;
            case "SORT_MEMBERS_PARSE_ERRORS":
                return RequestErrorCode_1.SORT_MEMBERS_PARSE_ERRORS;
            case "UNANALYZED_PRIORITY_FILES":
                return RequestErrorCode_1.UNANALYZED_PRIORITY_FILES;
            case "UNKNOWN_REQUEST":
                return RequestErrorCode_1.UNKNOWN_REQUEST;
            case "UNKNOWN_SOURCE":
                return RequestErrorCode_1.UNKNOWN_SOURCE;
            case "UNSUPPORTED_FEATURE":
                return RequestErrorCode_1.UNSUPPORTED_FEATURE;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    RequestErrorCode.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new RequestErrorCode_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "RequestErrorCode", json);
    };
    RequestErrorCode.prototype.toString = function () {
        return "RequestErrorCode." + this.name;
    };
    RequestErrorCode.prototype.toJson = function () {
        return this.name;
    };
    var RequestErrorCode_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestErrorCode.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], RequestErrorCode.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestErrorCode.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], RequestErrorCode, "$RequestErrorCode", null);
    __decorate([
        utils_1.namedFactory
    ], RequestErrorCode, "$fromJson", null);
    RequestErrorCode = RequestErrorCode_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], RequestErrorCode);
    return RequestErrorCode;
}());
exports.RequestErrorCode = RequestErrorCode;
var SearchFindElementReferencesParams = /** @class */ (function () {
    function SearchFindElementReferencesParams(file, offset, includePotential) {
    }
    SearchFindElementReferencesParams_1 = SearchFindElementReferencesParams;
    Object.defineProperty(SearchFindElementReferencesParams.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFindElementReferencesParams.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFindElementReferencesParams.prototype, "includePotential", {
        get: function () {
            return this._includePotential;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._includePotential = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindElementReferencesParams.prototype.SearchFindElementReferencesParams = function (file, offset, includePotential) {
        this.file = file;
        this.offset = offset;
        this.includePotential = includePotential;
    };
    SearchFindElementReferencesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var file = void 0;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file", json.get("file"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "file");
            }
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var includePotential = void 0;
            if (json.containsKey("includePotential")) {
                includePotential = jsonDecoder.decodeBool(jsonPath + ".includePotential", json.get("includePotential"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "includePotential");
            }
            return new SearchFindElementReferencesParams_1(file, offset, includePotential);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findElementReferences params", json);
        }
    };
    SearchFindElementReferencesParams.$fromRequest = function (request) {
        return new SearchFindElementReferencesParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    SearchFindElementReferencesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("file", this.file);
        result.set("offset", this.offset);
        result.set("includePotential", this.includePotential);
        return result;
    };
    SearchFindElementReferencesParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "search.findElementReferences", this.toJson());
    };
    SearchFindElementReferencesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindElementReferencesParams.prototype[_72 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindElementReferencesParams_1)) {
            return this.file == other.file && this.offset == other.offset && this.includePotential == other.includePotential;
        }
        return false;
    };
    Object.defineProperty(SearchFindElementReferencesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.file).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.includePotential.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindElementReferencesParams_1, _72;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindElementReferencesParams.prototype, "SearchFindElementReferencesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesParams.prototype, _72, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindElementReferencesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindElementReferencesParams, "$fromRequest", null);
    SearchFindElementReferencesParams = SearchFindElementReferencesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindElementReferencesParams);
    return SearchFindElementReferencesParams;
}());
exports.SearchFindElementReferencesParams = SearchFindElementReferencesParams;
var SearchFindElementReferencesResult = /** @class */ (function () {
    function SearchFindElementReferencesResult(_namedArguments) {
    }
    SearchFindElementReferencesResult_1 = SearchFindElementReferencesResult;
    Object.defineProperty(SearchFindElementReferencesResult.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFindElementReferencesResult.prototype, "element", {
        get: function () {
            return this._element;
        },
        set: function (value) {
            this._element = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindElementReferencesResult.prototype.SearchFindElementReferencesResult = function (_namedArguments) {
        var _74 = Object.assign({}, _namedArguments), id = _74.id, element = _74.element;
        this.id = id;
        this.element = element;
    };
    SearchFindElementReferencesResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            var element = void 0;
            if (json.containsKey("element")) {
                element = new bare.createInstance(any, null, jsonDecoder, jsonPath + ".element", json.get("element"));
            }
            return new SearchFindElementReferencesResult_1({
                id: id, element: element
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findElementReferences result", json);
        }
    };
    SearchFindElementReferencesResult.$fromResponse = function (response) {
        return new SearchFindElementReferencesResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    SearchFindElementReferencesResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.id != null) {
            result.set("id", this.id);
        }
        if (this.element != null) {
            result.set("element", this.element.toJson());
        }
        return result;
    };
    SearchFindElementReferencesResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    SearchFindElementReferencesResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindElementReferencesResult.prototype[_73 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindElementReferencesResult_1)) {
            return this.id == other.id && utils_1.op(utils_1.Op.EQUALS, this.element, other.element);
        }
        return false;
    };
    Object.defineProperty(SearchFindElementReferencesResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.element.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindElementReferencesResult_1, _73;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindElementReferencesResult.prototype, "SearchFindElementReferencesResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesResult.prototype, _73, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindElementReferencesResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindElementReferencesResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindElementReferencesResult, "$fromResponse", null);
    SearchFindElementReferencesResult = SearchFindElementReferencesResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindElementReferencesResult);
    return SearchFindElementReferencesResult;
}());
exports.SearchFindElementReferencesResult = SearchFindElementReferencesResult;
var SearchFindMemberDeclarationsParams = /** @class */ (function () {
    function SearchFindMemberDeclarationsParams(name) {
    }
    SearchFindMemberDeclarationsParams_1 = SearchFindMemberDeclarationsParams;
    Object.defineProperty(SearchFindMemberDeclarationsParams.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindMemberDeclarationsParams.prototype.SearchFindMemberDeclarationsParams = function (name) {
        this.name = name;
    };
    SearchFindMemberDeclarationsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var name_2;
            if (json.containsKey("name")) {
                name_2 = jsonDecoder.decodeString(jsonPath + ".name", json.get("name"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "name");
            }
            return new SearchFindMemberDeclarationsParams_1(name_2);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findMemberDeclarations params", json);
        }
    };
    SearchFindMemberDeclarationsParams.$fromRequest = function (request) {
        return new SearchFindMemberDeclarationsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    SearchFindMemberDeclarationsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("name", this.name);
        return result;
    };
    SearchFindMemberDeclarationsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "search.findMemberDeclarations", this.toJson());
    };
    SearchFindMemberDeclarationsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindMemberDeclarationsParams.prototype[_74 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindMemberDeclarationsParams_1)) {
            return this.name == other.name;
        }
        return false;
    };
    Object.defineProperty(SearchFindMemberDeclarationsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.name).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindMemberDeclarationsParams_1, _74;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindMemberDeclarationsParams.prototype, "SearchFindMemberDeclarationsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsParams.prototype, _74, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberDeclarationsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberDeclarationsParams, "$fromRequest", null);
    SearchFindMemberDeclarationsParams = SearchFindMemberDeclarationsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindMemberDeclarationsParams);
    return SearchFindMemberDeclarationsParams;
}());
exports.SearchFindMemberDeclarationsParams = SearchFindMemberDeclarationsParams;
var SearchFindMemberDeclarationsResult = /** @class */ (function () {
    function SearchFindMemberDeclarationsResult(id) {
    }
    SearchFindMemberDeclarationsResult_1 = SearchFindMemberDeclarationsResult;
    Object.defineProperty(SearchFindMemberDeclarationsResult.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindMemberDeclarationsResult.prototype.SearchFindMemberDeclarationsResult = function (id) {
        this.id = id;
    };
    SearchFindMemberDeclarationsResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            return new SearchFindMemberDeclarationsResult_1(id);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findMemberDeclarations result", json);
        }
    };
    SearchFindMemberDeclarationsResult.$fromResponse = function (response) {
        return new SearchFindMemberDeclarationsResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    SearchFindMemberDeclarationsResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        return result;
    };
    SearchFindMemberDeclarationsResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    SearchFindMemberDeclarationsResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindMemberDeclarationsResult.prototype[_75 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindMemberDeclarationsResult_1)) {
            return this.id == other.id;
        }
        return false;
    };
    Object.defineProperty(SearchFindMemberDeclarationsResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindMemberDeclarationsResult_1, _75;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindMemberDeclarationsResult.prototype, "SearchFindMemberDeclarationsResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsResult.prototype, _75, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberDeclarationsResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberDeclarationsResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberDeclarationsResult, "$fromResponse", null);
    SearchFindMemberDeclarationsResult = SearchFindMemberDeclarationsResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindMemberDeclarationsResult);
    return SearchFindMemberDeclarationsResult;
}());
exports.SearchFindMemberDeclarationsResult = SearchFindMemberDeclarationsResult;
var SearchFindMemberReferencesParams = /** @class */ (function () {
    function SearchFindMemberReferencesParams(name) {
    }
    SearchFindMemberReferencesParams_1 = SearchFindMemberReferencesParams;
    Object.defineProperty(SearchFindMemberReferencesParams.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindMemberReferencesParams.prototype.SearchFindMemberReferencesParams = function (name) {
        this.name = name;
    };
    SearchFindMemberReferencesParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var name_3;
            if (json.containsKey("name")) {
                name_3 = jsonDecoder.decodeString(jsonPath + ".name", json.get("name"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "name");
            }
            return new SearchFindMemberReferencesParams_1(name_3);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findMemberReferences params", json);
        }
    };
    SearchFindMemberReferencesParams.$fromRequest = function (request) {
        return new SearchFindMemberReferencesParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    SearchFindMemberReferencesParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("name", this.name);
        return result;
    };
    SearchFindMemberReferencesParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "search.findMemberReferences", this.toJson());
    };
    SearchFindMemberReferencesParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindMemberReferencesParams.prototype[_76 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindMemberReferencesParams_1)) {
            return this.name == other.name;
        }
        return false;
    };
    Object.defineProperty(SearchFindMemberReferencesParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.name).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindMemberReferencesParams_1, _76;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindMemberReferencesParams.prototype, "SearchFindMemberReferencesParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesParams.prototype, _76, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberReferencesParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberReferencesParams, "$fromRequest", null);
    SearchFindMemberReferencesParams = SearchFindMemberReferencesParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindMemberReferencesParams);
    return SearchFindMemberReferencesParams;
}());
exports.SearchFindMemberReferencesParams = SearchFindMemberReferencesParams;
var SearchFindMemberReferencesResult = /** @class */ (function () {
    function SearchFindMemberReferencesResult(id) {
    }
    SearchFindMemberReferencesResult_1 = SearchFindMemberReferencesResult;
    Object.defineProperty(SearchFindMemberReferencesResult.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindMemberReferencesResult.prototype.SearchFindMemberReferencesResult = function (id) {
        this.id = id;
    };
    SearchFindMemberReferencesResult.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var id = void 0;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id", json.get("id"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "id");
            }
            return new SearchFindMemberReferencesResult_1(id);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findMemberReferences result", json);
        }
    };
    SearchFindMemberReferencesResult.$fromResponse = function (response) {
        return new SearchFindMemberReferencesResult_1.fromJson(new bare.createInstance(any, null, REQUEST_ID_REFACTORING_KINDS.remove(response.id)), "result", response.result);
    };
    SearchFindMemberReferencesResult.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("id", this.id);
        return result;
    };
    SearchFindMemberReferencesResult.prototype.toResponse = function (id) {
        return new bare.createInstance(any, null, id, {
            result: this.toJson()
        });
    };
    SearchFindMemberReferencesResult.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindMemberReferencesResult.prototype[_77 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindMemberReferencesResult_1)) {
            return this.id == other.id;
        }
        return false;
    };
    Object.defineProperty(SearchFindMemberReferencesResult.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.id).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindMemberReferencesResult_1, _77;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindMemberReferencesResult.prototype, "SearchFindMemberReferencesResult", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesResult.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesResult.prototype, "toResponse", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesResult.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesResult.prototype, _77, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindMemberReferencesResult.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberReferencesResult, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindMemberReferencesResult, "$fromResponse", null);
    SearchFindMemberReferencesResult = SearchFindMemberReferencesResult_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindMemberReferencesResult);
    return SearchFindMemberReferencesResult;
}());
exports.SearchFindMemberReferencesResult = SearchFindMemberReferencesResult;
var SearchFindTopLevelDeclarationsParams = /** @class */ (function () {
    function SearchFindTopLevelDeclarationsParams(pattern) {
    }
    SearchFindTopLevelDeclarationsParams_1 = SearchFindTopLevelDeclarationsParams;
    Object.defineProperty(SearchFindTopLevelDeclarationsParams.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._pattern = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFindTopLevelDeclarationsParams.prototype.SearchFindTopLevelDeclarationsParams = function (pattern) {
        this.pattern = pattern;
    };
    SearchFindTopLevelDeclarationsParams.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var pattern = void 0;
            if (json.containsKey("pattern")) {
                pattern = jsonDecoder.decodeString(jsonPath + ".pattern", json.get("pattern"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "pattern");
            }
            return new SearchFindTopLevelDeclarationsParams_1(pattern);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "search.findTopLevelDeclarations params", json);
        }
    };
    SearchFindTopLevelDeclarationsParams.$fromRequest = function (request) {
        return new SearchFindTopLevelDeclarationsParams_1.fromJson(new bare.createInstance(any, null, request), "params", request.params);
    };
    SearchFindTopLevelDeclarationsParams.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("pattern", this.pattern);
        return result;
    };
    SearchFindTopLevelDeclarationsParams.prototype.toRequest = function (id) {
        return new bare.createInstance(any, null, id, "search.findTopLevelDeclarations", this.toJson());
    };
    SearchFindTopLevelDeclarationsParams.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    SearchFindTopLevelDeclarationsParams.prototype[_78 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, SearchFindTopLevelDeclarationsParams_1)) {
            return this.pattern == other.pattern;
        }
        return false;
    };
    Object.defineProperty(SearchFindTopLevelDeclarationsParams.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.pattern).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var SearchFindTopLevelDeclarationsParams_1, _78;
    __decorate([
        utils_1.defaultConstructor
    ], SearchFindTopLevelDeclarationsParams.prototype, "SearchFindTopLevelDeclarationsParams", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsParams.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsParams.prototype, "toRequest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsParams.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsParams.prototype, _78, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SearchFindTopLevelDeclarationsParams.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindTopLevelDeclarationsParams, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], SearchFindTopLevelDeclarationsParams, "$fromRequest", null);
    SearchFindTopLevelDeclarationsParams = SearchFindTopLevelDeclarationsParams_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SearchFindTopLevelDeclarationsParams);
    return SearchFindTopLevelDeclarationsParams;
}());
exports.SearchFindTopLevelDeclarationsParams = SearchFindTopLevelDeclarationsParams;
var GeneralAnalysisService = /** @class */ (function () {
    function GeneralAnalysisService(name) {
    }
    GeneralAnalysisService_1 = GeneralAnalysisService;
    Object.defineProperty(GeneralAnalysisService, "ANALYZED_FILES", {
        get: function () {
            if (this.__$ANALYZED_FILES === undefined) {
                this.__$ANALYZED_FILES = new GeneralAnalysisService_1._("ANALYZED_FILES");
            }
            return this.__$ANALYZED_FILES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeneralAnalysisService, "VALUES", {
        get: function () {
            if (this.__$VALUES === undefined) {
                this.__$VALUES = new core.DartList.literal(GeneralAnalysisService_1.ANALYZED_FILES);
            }
            return this.__$VALUES;
        },
        enumerable: true,
        configurable: true
    });
    GeneralAnalysisService.prototype._ = function (name) {
        this.name = name;
    };
    GeneralAnalysisService.$GeneralAnalysisService = function (name) {
        switch (name) {
            case "ANALYZED_FILES":
                return GeneralAnalysisService_1.ANALYZED_FILES;
        }
        throw new core.Exception("Illegal enum value: " + name);
    };
    GeneralAnalysisService.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (_common_1.is(json, "string")) {
            try {
                return new GeneralAnalysisService_1(json);
            }
            catch (__error__) {
                {
                    var _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath, "GeneralAnalysisService", json);
    };
    GeneralAnalysisService.prototype.toString = function () {
        return "GeneralAnalysisService." + this.name;
    };
    GeneralAnalysisService.prototype.toJson = function () {
        return this.name;
    };
    var GeneralAnalysisService_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], GeneralAnalysisService.prototype, "name", void 0);
    __decorate([
        utils_1.namedConstructor
    ], GeneralAnalysisService.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], GeneralAnalysisService.prototype, "toString", null);
    __decorate([
        utils_1.defaultFactory
    ], GeneralAnalysisService, "$GeneralAnalysisService", null);
    __decorate([
        utils_1.namedFactory
    ], GeneralAnalysisService, "$fromJson", null);
    GeneralAnalysisService = GeneralAnalysisService_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], GeneralAnalysisService);
    return GeneralAnalysisService;
}());
exports.GeneralAnalysisService = GeneralAnalysisService;
var RenameFeedback = /** @class */ (function (_super) {
    __extends(RenameFeedback, _super);
    function RenameFeedback(offset, length, elementKindName, oldName) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    RenameFeedback_1 = RenameFeedback;
    Object.defineProperty(RenameFeedback.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenameFeedback.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenameFeedback.prototype, "elementKindName", {
        get: function () {
            return this._elementKindName;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._elementKindName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenameFeedback.prototype, "oldName", {
        get: function () {
            return this._oldName;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._oldName = value;
        },
        enumerable: true,
        configurable: true
    });
    RenameFeedback.prototype.RenameFeedback = function (offset, length, elementKindName, oldName) {
        this.offset = offset;
        this.length = length;
        this.elementKindName = elementKindName;
        this.oldName = oldName;
    };
    RenameFeedback.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_10;
            if (json.containsKey("length")) {
                length_10 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            var elementKindName = void 0;
            if (json.containsKey("elementKindName")) {
                elementKindName = jsonDecoder.decodeString(jsonPath + ".elementKindName", json.get("elementKindName"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "elementKindName");
            }
            var oldName = void 0;
            if (json.containsKey("oldName")) {
                oldName = jsonDecoder.decodeString(jsonPath + ".oldName", json.get("oldName"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "oldName");
            }
            return new RenameFeedback_1(offset, length_10, elementKindName, oldName);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "rename feedback", json);
        }
    };
    RenameFeedback.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("offset", this.offset);
        result.set("length", this.length);
        result.set("elementKindName", this.elementKindName);
        result.set("oldName", this.oldName);
        return result;
    };
    RenameFeedback.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    RenameFeedback.prototype[_79 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, RenameFeedback_1)) {
            return this.offset == other.offset && this.length == other.length && this.elementKindName == other.elementKindName && this.oldName == other.oldName;
        }
        return false;
    };
    Object.defineProperty(RenameFeedback.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.elementKindName).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.oldName).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var RenameFeedback_1, _79;
    __decorate([
        utils_1.defaultConstructor
    ], RenameFeedback.prototype, "RenameFeedback", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameFeedback.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameFeedback.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameFeedback.prototype, _79, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], RenameFeedback, "$fromJson", null);
    RenameFeedback = RenameFeedback_1 = __decorate([
        utils_1.DartClass
    ], RenameFeedback);
    return RenameFeedback;
}(RefactoringFeedback));
exports.RenameFeedback = RenameFeedback;
var MoveFileOptions = /** @class */ (function (_super) {
    __extends(MoveFileOptions, _super);
    function MoveFileOptions(newFile) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    MoveFileOptions_1 = MoveFileOptions;
    Object.defineProperty(MoveFileOptions.prototype, "newFile", {
        get: function () {
            return this._newFile;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._newFile = value;
        },
        enumerable: true,
        configurable: true
    });
    MoveFileOptions.prototype.MoveFileOptions = function (newFile) {
        this.newFile = newFile;
    };
    MoveFileOptions.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var newFile = void 0;
            if (json.containsKey("newFile")) {
                newFile = jsonDecoder.decodeString(jsonPath + ".newFile", json.get("newFile"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "newFile");
            }
            return new MoveFileOptions_1(newFile);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "moveFile options", json);
        }
    };
    MoveFileOptions.$fromRefactoringParams = function (refactoringParams, request) {
        return new MoveFileOptions_1.fromJson(new bare.createInstance(any, null, request), "options", refactoringParams.options);
    };
    MoveFileOptions.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("newFile", this.newFile);
        return result;
    };
    MoveFileOptions.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    MoveFileOptions.prototype[_80 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, MoveFileOptions_1)) {
            return this.newFile == other.newFile;
        }
        return false;
    };
    Object.defineProperty(MoveFileOptions.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.newFile).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var MoveFileOptions_1, _80;
    __decorate([
        utils_1.defaultConstructor
    ], MoveFileOptions.prototype, "MoveFileOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MoveFileOptions.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MoveFileOptions.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MoveFileOptions.prototype, _80, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MoveFileOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], MoveFileOptions, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], MoveFileOptions, "$fromRefactoringParams", null);
    MoveFileOptions = MoveFileOptions_1 = __decorate([
        utils_1.DartClass
    ], MoveFileOptions);
    return MoveFileOptions;
}(RefactoringOptions));
exports.MoveFileOptions = MoveFileOptions;
var MoveFileFeedback = /** @class */ (function (_super) {
    __extends(MoveFileFeedback, _super);
    function MoveFileFeedback() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    MoveFileFeedback_1 = MoveFileFeedback;
    MoveFileFeedback.prototype[_81 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, MoveFileFeedback_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(MoveFileFeedback.prototype, "hashCode", {
        get: function () {
            return 438975893;
        },
        enumerable: true,
        configurable: true
    });
    MoveFileFeedback.prototype.MoveFileFeedback = function () {
    };
    var MoveFileFeedback_1, _81;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MoveFileFeedback.prototype, _81, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MoveFileFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], MoveFileFeedback.prototype, "MoveFileFeedback", null);
    MoveFileFeedback = MoveFileFeedback_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], MoveFileFeedback);
    return MoveFileFeedback;
}(RefactoringFeedback));
exports.MoveFileFeedback = MoveFileFeedback;
var InlineMethodOptions = /** @class */ (function (_super) {
    __extends(InlineMethodOptions, _super);
    function InlineMethodOptions(deleteSource, inlineAll) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    InlineMethodOptions_1 = InlineMethodOptions;
    Object.defineProperty(InlineMethodOptions.prototype, "deleteSource", {
        get: function () {
            return this._deleteSource;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._deleteSource = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineMethodOptions.prototype, "inlineAll", {
        get: function () {
            return this._inlineAll;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._inlineAll = value;
        },
        enumerable: true,
        configurable: true
    });
    InlineMethodOptions.prototype.InlineMethodOptions = function (deleteSource, inlineAll) {
        this.deleteSource = deleteSource;
        this.inlineAll = inlineAll;
    };
    InlineMethodOptions.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var deleteSource = void 0;
            if (json.containsKey("deleteSource")) {
                deleteSource = jsonDecoder.decodeBool(jsonPath + ".deleteSource", json.get("deleteSource"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "deleteSource");
            }
            var inlineAll = void 0;
            if (json.containsKey("inlineAll")) {
                inlineAll = jsonDecoder.decodeBool(jsonPath + ".inlineAll", json.get("inlineAll"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "inlineAll");
            }
            return new InlineMethodOptions_1(deleteSource, inlineAll);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "inlineMethod options", json);
        }
    };
    InlineMethodOptions.$fromRefactoringParams = function (refactoringParams, request) {
        return new InlineMethodOptions_1.fromJson(new bare.createInstance(any, null, request), "options", refactoringParams.options);
    };
    InlineMethodOptions.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("deleteSource", this.deleteSource);
        result.set("inlineAll", this.inlineAll);
        return result;
    };
    InlineMethodOptions.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    InlineMethodOptions.prototype[_82 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, InlineMethodOptions_1)) {
            return this.deleteSource == other.deleteSource && this.inlineAll == other.inlineAll;
        }
        return false;
    };
    Object.defineProperty(InlineMethodOptions.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.deleteSource.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.inlineAll.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var InlineMethodOptions_1, _82;
    __decorate([
        utils_1.defaultConstructor
    ], InlineMethodOptions.prototype, "InlineMethodOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodOptions.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodOptions.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodOptions.prototype, _82, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], InlineMethodOptions, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], InlineMethodOptions, "$fromRefactoringParams", null);
    InlineMethodOptions = InlineMethodOptions_1 = __decorate([
        utils_1.DartClass
    ], InlineMethodOptions);
    return InlineMethodOptions;
}(RefactoringOptions));
exports.InlineMethodOptions = InlineMethodOptions;
var InlineMethodFeedback = /** @class */ (function (_super) {
    __extends(InlineMethodFeedback, _super);
    function InlineMethodFeedback(methodName, isDeclaration, _namedArguments) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    InlineMethodFeedback_1 = InlineMethodFeedback;
    Object.defineProperty(InlineMethodFeedback.prototype, "className", {
        get: function () {
            return this._className;
        },
        set: function (value) {
            this._className = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineMethodFeedback.prototype, "methodName", {
        get: function () {
            return this._methodName;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._methodName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineMethodFeedback.prototype, "isDeclaration", {
        get: function () {
            return this._isDeclaration;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._isDeclaration = value;
        },
        enumerable: true,
        configurable: true
    });
    InlineMethodFeedback.prototype.InlineMethodFeedback = function (methodName, isDeclaration, _namedArguments) {
        var className = Object.assign({}, _namedArguments).className;
        this.className = className;
        this.methodName = methodName;
        this.isDeclaration = isDeclaration;
    };
    InlineMethodFeedback.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var className = void 0;
            if (json.containsKey("className")) {
                className = jsonDecoder.decodeString(jsonPath + ".className", json.get("className"));
            }
            var methodName = void 0;
            if (json.containsKey("methodName")) {
                methodName = jsonDecoder.decodeString(jsonPath + ".methodName", json.get("methodName"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "methodName");
            }
            var isDeclaration = void 0;
            if (json.containsKey("isDeclaration")) {
                isDeclaration = jsonDecoder.decodeBool(jsonPath + ".isDeclaration", json.get("isDeclaration"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "isDeclaration");
            }
            return new InlineMethodFeedback_1(methodName, isDeclaration, {
                className: className
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "inlineMethod feedback", json);
        }
    };
    InlineMethodFeedback.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.className != null) {
            result.set("className", this.className);
        }
        result.set("methodName", this.methodName);
        result.set("isDeclaration", this.isDeclaration);
        return result;
    };
    InlineMethodFeedback.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    InlineMethodFeedback.prototype[_83 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, InlineMethodFeedback_1)) {
            return this.className == other.className && this.methodName == other.methodName && this.isDeclaration == other.isDeclaration;
        }
        return false;
    };
    Object.defineProperty(InlineMethodFeedback.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.className).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.methodName).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.isDeclaration.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var InlineMethodFeedback_1, _83;
    __decorate([
        utils_1.defaultConstructor
    ], InlineMethodFeedback.prototype, "InlineMethodFeedback", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodFeedback.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodFeedback.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodFeedback.prototype, _83, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineMethodFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], InlineMethodFeedback, "$fromJson", null);
    InlineMethodFeedback = InlineMethodFeedback_1 = __decorate([
        utils_1.DartClass
    ], InlineMethodFeedback);
    return InlineMethodFeedback;
}(RefactoringFeedback));
exports.InlineMethodFeedback = InlineMethodFeedback;
var InlineLocalVariableOptions = /** @class */ (function (_super) {
    __extends(InlineLocalVariableOptions, _super);
    function InlineLocalVariableOptions() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    InlineLocalVariableOptions_1 = InlineLocalVariableOptions;
    InlineLocalVariableOptions.prototype[_84 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, InlineLocalVariableOptions_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(InlineLocalVariableOptions.prototype, "hashCode", {
        get: function () {
            return 540364977;
        },
        enumerable: true,
        configurable: true
    });
    InlineLocalVariableOptions.prototype.InlineLocalVariableOptions = function () {
    };
    var InlineLocalVariableOptions_1, _84;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineLocalVariableOptions.prototype, _84, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineLocalVariableOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], InlineLocalVariableOptions.prototype, "InlineLocalVariableOptions", null);
    InlineLocalVariableOptions = InlineLocalVariableOptions_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], InlineLocalVariableOptions);
    return InlineLocalVariableOptions;
}(RefactoringOptions));
exports.InlineLocalVariableOptions = InlineLocalVariableOptions;
var InlineLocalVariableFeedback = /** @class */ (function (_super) {
    __extends(InlineLocalVariableFeedback, _super);
    function InlineLocalVariableFeedback(name, occurrences) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    InlineLocalVariableFeedback_1 = InlineLocalVariableFeedback;
    Object.defineProperty(InlineLocalVariableFeedback.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineLocalVariableFeedback.prototype, "occurrences", {
        get: function () {
            return this._occurrences;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._occurrences = value;
        },
        enumerable: true,
        configurable: true
    });
    InlineLocalVariableFeedback.prototype.InlineLocalVariableFeedback = function (name, occurrences) {
        this.name = name;
        this.occurrences = occurrences;
    };
    InlineLocalVariableFeedback.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var name_4;
            if (json.containsKey("name")) {
                name_4 = jsonDecoder.decodeString(jsonPath + ".name", json.get("name"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "name");
            }
            var occurrences = void 0;
            if (json.containsKey("occurrences")) {
                occurrences = jsonDecoder.decodeInt(jsonPath + ".occurrences", json.get("occurrences"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "occurrences");
            }
            return new InlineLocalVariableFeedback_1(name_4, occurrences);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "inlineLocalVariable feedback", json);
        }
    };
    InlineLocalVariableFeedback.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("name", this.name);
        result.set("occurrences", this.occurrences);
        return result;
    };
    InlineLocalVariableFeedback.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    InlineLocalVariableFeedback.prototype[_85 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, InlineLocalVariableFeedback_1)) {
            return this.name == other.name && this.occurrences == other.occurrences;
        }
        return false;
    };
    Object.defineProperty(InlineLocalVariableFeedback.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.name).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.occurrences).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var InlineLocalVariableFeedback_1, _85;
    __decorate([
        utils_1.defaultConstructor
    ], InlineLocalVariableFeedback.prototype, "InlineLocalVariableFeedback", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineLocalVariableFeedback.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineLocalVariableFeedback.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineLocalVariableFeedback.prototype, _85, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InlineLocalVariableFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], InlineLocalVariableFeedback, "$fromJson", null);
    InlineLocalVariableFeedback = InlineLocalVariableFeedback_1 = __decorate([
        utils_1.DartClass
    ], InlineLocalVariableFeedback);
    return InlineLocalVariableFeedback;
}(RefactoringFeedback));
exports.InlineLocalVariableFeedback = InlineLocalVariableFeedback;
var ExtractMethodOptions = /** @class */ (function (_super) {
    __extends(ExtractMethodOptions, _super);
    function ExtractMethodOptions(returnType, createGetter, name, parameters, extractAll) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ExtractMethodOptions_1 = ExtractMethodOptions;
    Object.defineProperty(ExtractMethodOptions.prototype, "returnType", {
        get: function () {
            return this._returnType;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._returnType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodOptions.prototype, "createGetter", {
        get: function () {
            return this._createGetter;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._createGetter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodOptions.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodOptions.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._parameters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodOptions.prototype, "extractAll", {
        get: function () {
            return this._extractAll;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._extractAll = value;
        },
        enumerable: true,
        configurable: true
    });
    ExtractMethodOptions.prototype.ExtractMethodOptions = function (returnType, createGetter, name, parameters, extractAll) {
        this.returnType = returnType;
        this.createGetter = createGetter;
        this.name = name;
        this.parameters = parameters;
        this.extractAll = extractAll;
    };
    ExtractMethodOptions.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var returnType = void 0;
            if (json.containsKey("returnType")) {
                returnType = jsonDecoder.decodeString(jsonPath + ".returnType", json.get("returnType"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "returnType");
            }
            var createGetter = void 0;
            if (json.containsKey("createGetter")) {
                createGetter = jsonDecoder.decodeBool(jsonPath + ".createGetter", json.get("createGetter"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "createGetter");
            }
            var name_5;
            if (json.containsKey("name")) {
                name_5 = jsonDecoder.decodeString(jsonPath + ".name", json.get("name"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "name");
            }
            var parameters = void 0;
            if (json.containsKey("parameters")) {
                parameters = jsonDecoder.decodeList(jsonPath + ".parameters", json.get("parameters"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "parameters");
            }
            var extractAll = void 0;
            if (json.containsKey("extractAll")) {
                extractAll = jsonDecoder.decodeBool(jsonPath + ".extractAll", json.get("extractAll"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "extractAll");
            }
            return new ExtractMethodOptions_1(returnType, createGetter, name_5, parameters, extractAll);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "extractMethod options", json);
        }
    };
    ExtractMethodOptions.$fromRefactoringParams = function (refactoringParams, request) {
        return new ExtractMethodOptions_1.fromJson(new bare.createInstance(any, null, request), "options", refactoringParams.options);
    };
    ExtractMethodOptions.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("returnType", this.returnType);
        result.set("createGetter", this.createGetter);
        result.set("name", this.name);
        result.set("parameters", this.parameters.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("extractAll", this.extractAll);
        return result;
    };
    ExtractMethodOptions.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExtractMethodOptions.prototype[_86 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExtractMethodOptions_1)) {
            return this.returnType == other.returnType && this.createGetter == other.createGetter && this.name == other.name && listEqual(this.parameters, other.parameters, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && this.extractAll == other.extractAll;
        }
        return false;
    };
    Object.defineProperty(ExtractMethodOptions.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.returnType).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.createGetter.hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.name).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.parameters.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.extractAll.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExtractMethodOptions_1, _86;
    __decorate([
        utils_1.defaultConstructor
    ], ExtractMethodOptions.prototype, "ExtractMethodOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodOptions.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodOptions.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodOptions.prototype, _86, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExtractMethodOptions, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExtractMethodOptions, "$fromRefactoringParams", null);
    ExtractMethodOptions = ExtractMethodOptions_1 = __decorate([
        utils_1.DartClass
    ], ExtractMethodOptions);
    return ExtractMethodOptions;
}(RefactoringOptions));
exports.ExtractMethodOptions = ExtractMethodOptions;
var ExtractMethodFeedback = /** @class */ (function (_super) {
    __extends(ExtractMethodFeedback, _super);
    function ExtractMethodFeedback(offset, length, returnType, names, canCreateGetter, parameters, offsets, lengths) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ExtractMethodFeedback_1 = ExtractMethodFeedback;
    Object.defineProperty(ExtractMethodFeedback.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodFeedback.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodFeedback.prototype, "returnType", {
        get: function () {
            return this._returnType;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._returnType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodFeedback.prototype, "names", {
        get: function () {
            return this._names;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._names = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodFeedback.prototype, "canCreateGetter", {
        get: function () {
            return this._canCreateGetter;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._canCreateGetter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodFeedback.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._parameters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodFeedback.prototype, "offsets", {
        get: function () {
            return this._offsets;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offsets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractMethodFeedback.prototype, "lengths", {
        get: function () {
            return this._lengths;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._lengths = value;
        },
        enumerable: true,
        configurable: true
    });
    ExtractMethodFeedback.prototype.ExtractMethodFeedback = function (offset, length, returnType, names, canCreateGetter, parameters, offsets, lengths) {
        this.offset = offset;
        this.length = length;
        this.returnType = returnType;
        this.names = names;
        this.canCreateGetter = canCreateGetter;
        this.parameters = parameters;
        this.offsets = offsets;
        this.lengths = lengths;
    };
    ExtractMethodFeedback.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var offset = void 0;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset", json.get("offset"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offset");
            }
            var length_11;
            if (json.containsKey("length")) {
                length_11 = jsonDecoder.decodeInt(jsonPath + ".length", json.get("length"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "length");
            }
            var returnType = void 0;
            if (json.containsKey("returnType")) {
                returnType = jsonDecoder.decodeString(jsonPath + ".returnType", json.get("returnType"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "returnType");
            }
            var names = void 0;
            if (json.containsKey("names")) {
                names = jsonDecoder.decodeList(jsonPath + ".names", json.get("names"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "names");
            }
            var canCreateGetter = void 0;
            if (json.containsKey("canCreateGetter")) {
                canCreateGetter = jsonDecoder.decodeBool(jsonPath + ".canCreateGetter", json.get("canCreateGetter"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "canCreateGetter");
            }
            var parameters = void 0;
            if (json.containsKey("parameters")) {
                parameters = jsonDecoder.decodeList(jsonPath + ".parameters", json.get("parameters"), function (jsonPath, json) {
                    return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
                });
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "parameters");
            }
            var offsets = void 0;
            if (json.containsKey("offsets")) {
                offsets = jsonDecoder.decodeList(jsonPath + ".offsets", json.get("offsets"), jsonDecoder.decodeInt);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offsets");
            }
            var lengths = void 0;
            if (json.containsKey("lengths")) {
                lengths = jsonDecoder.decodeList(jsonPath + ".lengths", json.get("lengths"), jsonDecoder.decodeInt);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "lengths");
            }
            return new ExtractMethodFeedback_1(offset, length_11, returnType, names, canCreateGetter, parameters, offsets, lengths);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "extractMethod feedback", json);
        }
    };
    ExtractMethodFeedback.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("offset", this.offset);
        result.set("length", this.length);
        result.set("returnType", this.returnType);
        result.set("names", this.names);
        result.set("canCreateGetter", this.canCreateGetter);
        result.set("parameters", this.parameters.map(function (value) {
            return value.toJson();
        }).toList());
        result.set("offsets", this.offsets);
        result.set("lengths", this.lengths);
        return result;
    };
    ExtractMethodFeedback.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExtractMethodFeedback.prototype[_87 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExtractMethodFeedback_1)) {
            return this.offset == other.offset && this.length == other.length && this.returnType == other.returnType && listEqual(this.names, other.names, function (a, b) {
                return a == b;
            }) && this.canCreateGetter == other.canCreateGetter && listEqual(this.parameters, other.parameters, function (a, b) {
                return utils_1.op(utils_1.Op.EQUALS, a, b);
            }) && listEqual(this.offsets, other.offsets, function (a, b) {
                return a == b;
            }) && listEqual(this.lengths, other.lengths, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(ExtractMethodFeedback.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.offset).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartInt(this.length).hashCode);
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.returnType).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.names.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.canCreateGetter.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.parameters.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.offsets.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.lengths.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExtractMethodFeedback_1, _87;
    __decorate([
        utils_1.defaultConstructor
    ], ExtractMethodFeedback.prototype, "ExtractMethodFeedback", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodFeedback.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodFeedback.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodFeedback.prototype, _87, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractMethodFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExtractMethodFeedback, "$fromJson", null);
    ExtractMethodFeedback = ExtractMethodFeedback_1 = __decorate([
        utils_1.DartClass
    ], ExtractMethodFeedback);
    return ExtractMethodFeedback;
}(RefactoringFeedback));
exports.ExtractMethodFeedback = ExtractMethodFeedback;
var ExtractLocalVariableOptions = /** @class */ (function (_super) {
    __extends(ExtractLocalVariableOptions, _super);
    function ExtractLocalVariableOptions(name, extractAll) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ExtractLocalVariableOptions_1 = ExtractLocalVariableOptions;
    Object.defineProperty(ExtractLocalVariableOptions.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractLocalVariableOptions.prototype, "extractAll", {
        get: function () {
            return this._extractAll;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._extractAll = value;
        },
        enumerable: true,
        configurable: true
    });
    ExtractLocalVariableOptions.prototype.ExtractLocalVariableOptions = function (name, extractAll) {
        this.name = name;
        this.extractAll = extractAll;
    };
    ExtractLocalVariableOptions.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var name_6;
            if (json.containsKey("name")) {
                name_6 = jsonDecoder.decodeString(jsonPath + ".name", json.get("name"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "name");
            }
            var extractAll = void 0;
            if (json.containsKey("extractAll")) {
                extractAll = jsonDecoder.decodeBool(jsonPath + ".extractAll", json.get("extractAll"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "extractAll");
            }
            return new ExtractLocalVariableOptions_1(name_6, extractAll);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "extractLocalVariable options", json);
        }
    };
    ExtractLocalVariableOptions.$fromRefactoringParams = function (refactoringParams, request) {
        return new ExtractLocalVariableOptions_1.fromJson(new bare.createInstance(any, null, request), "options", refactoringParams.options);
    };
    ExtractLocalVariableOptions.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("name", this.name);
        result.set("extractAll", this.extractAll);
        return result;
    };
    ExtractLocalVariableOptions.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExtractLocalVariableOptions.prototype[_88 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExtractLocalVariableOptions_1)) {
            return this.name == other.name && this.extractAll == other.extractAll;
        }
        return false;
    };
    Object.defineProperty(ExtractLocalVariableOptions.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.name).hashCode);
            hash = JenkinsSmiHash.combine(hash, this.extractAll.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExtractLocalVariableOptions_1, _88;
    __decorate([
        utils_1.defaultConstructor
    ], ExtractLocalVariableOptions.prototype, "ExtractLocalVariableOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableOptions.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableOptions.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableOptions.prototype, _88, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExtractLocalVariableOptions, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], ExtractLocalVariableOptions, "$fromRefactoringParams", null);
    ExtractLocalVariableOptions = ExtractLocalVariableOptions_1 = __decorate([
        utils_1.DartClass
    ], ExtractLocalVariableOptions);
    return ExtractLocalVariableOptions;
}(RefactoringOptions));
exports.ExtractLocalVariableOptions = ExtractLocalVariableOptions;
var ExtractLocalVariableFeedback = /** @class */ (function (_super) {
    __extends(ExtractLocalVariableFeedback, _super);
    function ExtractLocalVariableFeedback(names, offsets, lengths, _namedArguments) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ExtractLocalVariableFeedback_1 = ExtractLocalVariableFeedback;
    Object.defineProperty(ExtractLocalVariableFeedback.prototype, "coveringExpressionOffsets", {
        get: function () {
            return this._coveringExpressionOffsets;
        },
        set: function (value) {
            this._coveringExpressionOffsets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractLocalVariableFeedback.prototype, "coveringExpressionLengths", {
        get: function () {
            return this._coveringExpressionLengths;
        },
        set: function (value) {
            this._coveringExpressionLengths = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractLocalVariableFeedback.prototype, "names", {
        get: function () {
            return this._names;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._names = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractLocalVariableFeedback.prototype, "offsets", {
        get: function () {
            return this._offsets;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._offsets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtractLocalVariableFeedback.prototype, "lengths", {
        get: function () {
            return this._lengths;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._lengths = value;
        },
        enumerable: true,
        configurable: true
    });
    ExtractLocalVariableFeedback.prototype.ExtractLocalVariableFeedback = function (names, offsets, lengths, _namedArguments) {
        var _90 = Object.assign({}, _namedArguments), coveringExpressionOffsets = _90.coveringExpressionOffsets, coveringExpressionLengths = _90.coveringExpressionLengths;
        this.coveringExpressionOffsets = coveringExpressionOffsets;
        this.coveringExpressionLengths = coveringExpressionLengths;
        this.names = names;
        this.offsets = offsets;
        this.lengths = lengths;
    };
    ExtractLocalVariableFeedback.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var coveringExpressionOffsets = void 0;
            if (json.containsKey("coveringExpressionOffsets")) {
                coveringExpressionOffsets = jsonDecoder.decodeList(jsonPath + ".coveringExpressionOffsets", json.get("coveringExpressionOffsets"), jsonDecoder.decodeInt);
            }
            var coveringExpressionLengths = void 0;
            if (json.containsKey("coveringExpressionLengths")) {
                coveringExpressionLengths = jsonDecoder.decodeList(jsonPath + ".coveringExpressionLengths", json.get("coveringExpressionLengths"), jsonDecoder.decodeInt);
            }
            var names = void 0;
            if (json.containsKey("names")) {
                names = jsonDecoder.decodeList(jsonPath + ".names", json.get("names"), jsonDecoder.decodeString);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "names");
            }
            var offsets = void 0;
            if (json.containsKey("offsets")) {
                offsets = jsonDecoder.decodeList(jsonPath + ".offsets", json.get("offsets"), jsonDecoder.decodeInt);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "offsets");
            }
            var lengths = void 0;
            if (json.containsKey("lengths")) {
                lengths = jsonDecoder.decodeList(jsonPath + ".lengths", json.get("lengths"), jsonDecoder.decodeInt);
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "lengths");
            }
            return new ExtractLocalVariableFeedback_1(names, offsets, lengths, {
                coveringExpressionOffsets: coveringExpressionOffsets, coveringExpressionLengths: coveringExpressionLengths
            });
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "extractLocalVariable feedback", json);
        }
    };
    ExtractLocalVariableFeedback.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        if (this.coveringExpressionOffsets != null) {
            result.set("coveringExpressionOffsets", this.coveringExpressionOffsets);
        }
        if (this.coveringExpressionLengths != null) {
            result.set("coveringExpressionLengths", this.coveringExpressionLengths);
        }
        result.set("names", this.names);
        result.set("offsets", this.offsets);
        result.set("lengths", this.lengths);
        return result;
    };
    ExtractLocalVariableFeedback.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    ExtractLocalVariableFeedback.prototype[_89 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ExtractLocalVariableFeedback_1)) {
            return listEqual(this.coveringExpressionOffsets, other.coveringExpressionOffsets, function (a, b) {
                return a == b;
            }) && listEqual(this.coveringExpressionLengths, other.coveringExpressionLengths, function (a, b) {
                return a == b;
            }) && listEqual(this.names, other.names, function (a, b) {
                return a == b;
            }) && listEqual(this.offsets, other.offsets, function (a, b) {
                return a == b;
            }) && listEqual(this.lengths, other.lengths, function (a, b) {
                return a == b;
            });
        }
        return false;
    };
    Object.defineProperty(ExtractLocalVariableFeedback.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, this.coveringExpressionOffsets.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.coveringExpressionLengths.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.names.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.offsets.hashCode);
            hash = JenkinsSmiHash.combine(hash, this.lengths.hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var ExtractLocalVariableFeedback_1, _89;
    __decorate([
        utils_1.defaultConstructor
    ], ExtractLocalVariableFeedback.prototype, "ExtractLocalVariableFeedback", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableFeedback.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableFeedback.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableFeedback.prototype, _89, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ExtractLocalVariableFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], ExtractLocalVariableFeedback, "$fromJson", null);
    ExtractLocalVariableFeedback = ExtractLocalVariableFeedback_1 = __decorate([
        utils_1.DartClass
    ], ExtractLocalVariableFeedback);
    return ExtractLocalVariableFeedback;
}(RefactoringFeedback));
exports.ExtractLocalVariableFeedback = ExtractLocalVariableFeedback;
var ConvertMethodToGetterOptions = /** @class */ (function (_super) {
    __extends(ConvertMethodToGetterOptions, _super);
    function ConvertMethodToGetterOptions() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ConvertMethodToGetterOptions_1 = ConvertMethodToGetterOptions;
    ConvertMethodToGetterOptions.prototype[_90 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ConvertMethodToGetterOptions_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ConvertMethodToGetterOptions.prototype, "hashCode", {
        get: function () {
            return 27952290;
        },
        enumerable: true,
        configurable: true
    });
    ConvertMethodToGetterOptions.prototype.ConvertMethodToGetterOptions = function () {
    };
    var ConvertMethodToGetterOptions_1, _90;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertMethodToGetterOptions.prototype, _90, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertMethodToGetterOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ConvertMethodToGetterOptions.prototype, "ConvertMethodToGetterOptions", null);
    ConvertMethodToGetterOptions = ConvertMethodToGetterOptions_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ConvertMethodToGetterOptions);
    return ConvertMethodToGetterOptions;
}(RefactoringOptions));
exports.ConvertMethodToGetterOptions = ConvertMethodToGetterOptions;
var ConvertMethodToGetterFeedback = /** @class */ (function (_super) {
    __extends(ConvertMethodToGetterFeedback, _super);
    function ConvertMethodToGetterFeedback() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ConvertMethodToGetterFeedback_1 = ConvertMethodToGetterFeedback;
    ConvertMethodToGetterFeedback.prototype[_91 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ConvertMethodToGetterFeedback_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ConvertMethodToGetterFeedback.prototype, "hashCode", {
        get: function () {
            return 165291526;
        },
        enumerable: true,
        configurable: true
    });
    ConvertMethodToGetterFeedback.prototype.ConvertMethodToGetterFeedback = function () {
    };
    var ConvertMethodToGetterFeedback_1, _91;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertMethodToGetterFeedback.prototype, _91, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertMethodToGetterFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ConvertMethodToGetterFeedback.prototype, "ConvertMethodToGetterFeedback", null);
    ConvertMethodToGetterFeedback = ConvertMethodToGetterFeedback_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ConvertMethodToGetterFeedback);
    return ConvertMethodToGetterFeedback;
}(RefactoringFeedback));
exports.ConvertMethodToGetterFeedback = ConvertMethodToGetterFeedback;
var ConvertGetterToMethodOptions = /** @class */ (function (_super) {
    __extends(ConvertGetterToMethodOptions, _super);
    function ConvertGetterToMethodOptions() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ConvertGetterToMethodOptions_1 = ConvertGetterToMethodOptions;
    ConvertGetterToMethodOptions.prototype[_92 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ConvertGetterToMethodOptions_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ConvertGetterToMethodOptions.prototype, "hashCode", {
        get: function () {
            return 488848400;
        },
        enumerable: true,
        configurable: true
    });
    ConvertGetterToMethodOptions.prototype.ConvertGetterToMethodOptions = function () {
    };
    var ConvertGetterToMethodOptions_1, _92;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertGetterToMethodOptions.prototype, _92, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertGetterToMethodOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ConvertGetterToMethodOptions.prototype, "ConvertGetterToMethodOptions", null);
    ConvertGetterToMethodOptions = ConvertGetterToMethodOptions_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ConvertGetterToMethodOptions);
    return ConvertGetterToMethodOptions;
}(RefactoringOptions));
exports.ConvertGetterToMethodOptions = ConvertGetterToMethodOptions;
var ConvertGetterToMethodFeedback = /** @class */ (function (_super) {
    __extends(ConvertGetterToMethodFeedback, _super);
    function ConvertGetterToMethodFeedback() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ConvertGetterToMethodFeedback_1 = ConvertGetterToMethodFeedback;
    ConvertGetterToMethodFeedback.prototype[_93 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, ConvertGetterToMethodFeedback_1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ConvertGetterToMethodFeedback.prototype, "hashCode", {
        get: function () {
            return 616032599;
        },
        enumerable: true,
        configurable: true
    });
    ConvertGetterToMethodFeedback.prototype.ConvertGetterToMethodFeedback = function () {
    };
    var ConvertGetterToMethodFeedback_1, _93;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertGetterToMethodFeedback.prototype, _93, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ConvertGetterToMethodFeedback.prototype, "hashCode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ConvertGetterToMethodFeedback.prototype, "ConvertGetterToMethodFeedback", null);
    ConvertGetterToMethodFeedback = ConvertGetterToMethodFeedback_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ConvertGetterToMethodFeedback);
    return ConvertGetterToMethodFeedback;
}(RefactoringFeedback));
exports.ConvertGetterToMethodFeedback = ConvertGetterToMethodFeedback;
var RenameOptions = /** @class */ (function (_super) {
    __extends(RenameOptions, _super);
    function RenameOptions(newName) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    RenameOptions_1 = RenameOptions;
    Object.defineProperty(RenameOptions.prototype, "newName", {
        get: function () {
            return this._newName;
        },
        set: function (value) {
            /* TODO (AssertStatementImpl) : assert (value != null); */ ;
            this._newName = value;
        },
        enumerable: true,
        configurable: true
    });
    RenameOptions.prototype.RenameOptions = function (newName) {
        this.newName = newName;
    };
    RenameOptions.$fromJson = function (jsonDecoder, jsonPath, json) {
        if (utils_1.op(utils_1.Op.EQUALS, json, null)) {
            json = new core.DartMap.literal([]);
        }
        if (_common_1.is(json, core.DartMap())) {
            var newName = void 0;
            if (json.containsKey("newName")) {
                newName = jsonDecoder.decodeString(jsonPath + ".newName", json.get("newName"));
            }
            else {
                throw jsonDecoder.mismatch(jsonPath, "newName");
            }
            return new RenameOptions_1(newName);
        }
        else {
            throw jsonDecoder.mismatch(jsonPath, "rename options", json);
        }
    };
    RenameOptions.$fromRefactoringParams = function (refactoringParams, request) {
        return new RenameOptions_1.fromJson(new bare.createInstance(any, null, request), "options", refactoringParams.options);
    };
    RenameOptions.prototype.toJson = function () {
        var result = new core.DartMap.literal([]);
        result.set("newName", this.newName);
        return result;
    };
    RenameOptions.prototype.toString = function () {
        return convert.properties.JSON.encode(this.toJson());
    };
    RenameOptions.prototype[_94 = utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.is(other, RenameOptions_1)) {
            return this.newName == other.newName;
        }
        return false;
    };
    Object.defineProperty(RenameOptions.prototype, "hashCode", {
        get: function () {
            var hash = 0;
            hash = JenkinsSmiHash.combine(hash, new core.DartString(this.newName).hashCode);
            return JenkinsSmiHash.finish(hash);
        },
        enumerable: true,
        configurable: true
    });
    var RenameOptions_1, _94;
    __decorate([
        utils_1.defaultConstructor
    ], RenameOptions.prototype, "RenameOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameOptions.prototype, "toJson", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameOptions.prototype, "toString", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameOptions.prototype, _94, null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RenameOptions.prototype, "hashCode", null);
    __decorate([
        utils_1.namedFactory
    ], RenameOptions, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], RenameOptions, "$fromRefactoringParams", null);
    RenameOptions = RenameOptions_1 = __decorate([
        utils_1.DartClass
    ], RenameOptions);
    return RenameOptions;
}(RefactoringOptions));
exports.RenameOptions = RenameOptions;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=protocol_generated.js.map
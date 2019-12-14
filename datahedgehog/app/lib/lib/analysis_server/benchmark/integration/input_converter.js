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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/input_converter.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var convert = require("@dart2ts/dart/convert");
var lib4 = require("@dart2ts.packages/path/lib/path");
var lib5 = require("./operation");
var io = require("@dart2ts/dart/io");
var lib7 = require("./instrumentation_input_converter");
var lib8 = require("./log_file_input_converter");
var CommonInputConverter = /** @class */ (function (_super) {
    __extends(CommonInputConverter, _super);
    function CommonInputConverter(tmpSrcDirPath, srcPathMap) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    CommonInputConverter_1 = CommonInputConverter;
    Object.defineProperty(CommonInputConverter, "ERROR_PREFIX", {
        get: function () {
            if (this.__$ERROR_PREFIX === undefined) {
                this.__$ERROR_PREFIX = 'Server responded with an error: ';
            }
            return this.__$ERROR_PREFIX;
        },
        set: function (__$value) {
            this.__$ERROR_PREFIX = __$value;
        },
        enumerable: true,
        configurable: true
    });
    CommonInputConverter.prototype.CommonInputConverter = function (tmpSrcDirPath, srcPathMap) {
        this.logger = new bare.createInstance(any, null, 'InstrumentationInputConverter');
        this.eventsSeen = new core.DartSet();
        this.requestMap = new core.DartMap.literal([]);
        this.responseCompleters = new core.DartMap.literal([]);
        this.responseMap = new core.DartMap.literal([]);
        this.overlays = new core.DartMap.literal([]);
        this.rootPrefix = lib4.rootPrefix(lib4.properties.current);
        this.tmpSrcDirPath = tmpSrcDirPath;
        this.srcPathMap = srcPathMap;
    };
    CommonInputConverter.prototype.asMap = function (value) {
        return value;
    };
    CommonInputConverter.prototype.convertNotification = function (json) {
        var event = json.get('event');
        if (event == SERVER_STATUS) {
            var params = this.asMap(json.get('params'));
            if (params != null) {
                var analysis = this.asMap(params.get('analysis'));
                if (analysis != null && utils_1.op(utils_1.Op.EQUALS, analysis.get('isAnalyzing'), false)) {
                    return new lib5.WaitForAnalysisCompleteOperation();
                }
            }
        }
        if (event == SERVER_CONNECTED) {
            return new lib5.StartServerOperation();
        }
        if (this.eventsSeen.add(event)) {
            this.logger.log(Level.INFO, "Ignored notification: " + event + "\n  " + json);
        }
        return null;
    };
    CommonInputConverter.prototype.convertRequest = function (origJson) {
        var _this = this;
        var json = this.asMap(this.translateSrcPaths(origJson));
        this.requestMap.set(json.get('id'), json);
        var method = json.get('method');
        if (method == ANALYSIS_UPDATE_CONTENT) {
            var request = new bare.createInstance(any, null, json);
            var params = new bare.createInstance(any, null, request);
            params.files.forEach(function (filePath, change) {
                if (_common_1.is(change, any)) {
                    var content = change.content;
                    if (content == null) {
                        throw "expected new overlay content\n" + json;
                    }
                    _this.overlays.set(filePath, content);
                }
                else if (_common_1.is(change, any)) {
                    var content = _this.overlays.get(filePath);
                    if (content == null) {
                        throw "expected cached overlay content\n" + json;
                    }
                    _this.overlays.set(filePath, SourceEdit.applySequence(content, change.edits));
                }
                else if (_common_1.is(change, any)) {
                    var content = _this.overlays.remove(filePath);
                    if (content == null) {
                        throw "expected cached overlay content\n" + json;
                    }
                    if (!lib4.isWithin(_this.tmpSrcDirPath, filePath)) {
                        throw "found path referencing source outside temp space\n" + filePath + "\n" + json;
                    }
                    new io.File(filePath).writeAsStringSync(content);
                }
                else {
                    throw "unknown overlay change " + change + "\n" + json;
                }
            });
            return new lib5.RequestOperation(this, json);
        }
        if (method == COMPLETION_GET_SUGGESTIONS) {
            return new lib5.CompletionRequestOperation(this, json);
        }
        if (method == ANALYSIS_GET_HOVER || method == ANALYSIS_SET_ANALYSIS_ROOTS || method == ANALYSIS_SET_PRIORITY_FILES || method == ANALYSIS_SET_SUBSCRIPTIONS || method == ANALYSIS_UPDATE_OPTIONS || method == EDIT_GET_ASSISTS || method == EDIT_GET_AVAILABLE_REFACTORINGS || method == EDIT_GET_FIXES || method == EDIT_GET_REFACTORING || method == EDIT_SORT_MEMBERS || method == EXECUTION_CREATE_CONTEXT || method == EXECUTION_DELETE_CONTEXT || method == EXECUTION_MAP_URI || method == EXECUTION_SET_SUBSCRIPTIONS || method == SEARCH_FIND_ELEMENT_REFERENCES || method == SEARCH_FIND_MEMBER_DECLARATIONS || method == SERVER_GET_VERSION || method == SERVER_SET_SUBSCRIPTIONS) {
            return new lib5.RequestOperation(this, json);
        }
        throw "unknown request: " + method + "\n  " + json;
    };
    CommonInputConverter.prototype.convertResponse = function (json) {
        return new lib5.ResponseOperation(this, this.asMap(this.requestMap.remove(json.get('id'))), this.asMap(this.translateSrcPaths(json)));
    };
    CommonInputConverter.prototype.logOverlayContent = function () {
        this.logger.log(Level.WARNING, this.overlays.length + " overlays");
        var allPaths = (function (_) {
            {
                _.sort();
                return _;
            }
        })(this.overlays.keys.toList());
        for (var _i = 0, allPaths_1 = allPaths; _i < allPaths_1.length; _i++) {
            var filePath = allPaths_1[_i];
            this.logger.log(Level.WARNING, "overlay " + filePath + "\n" + this.overlays.get(filePath));
        }
    };
    CommonInputConverter.prototype.processErrorResponse = function (id, exception) {
        var result = exception;
        if (_common_1.is(exception, core.UnimplementedError)) {
            if (new core.DartString(exception.message).startsWith(CommonInputConverter_1.ERROR_PREFIX)) {
                result = convert.properties.JSON.decode(new core.DartString(exception.message).substring(CommonInputConverter_1.ERROR_PREFIX.length));
            }
        }
        this.processResponseResult(id, result);
    };
    CommonInputConverter.prototype.processExpectedResponse = function (id, completer) {
        if (this.responseMap.containsKey(id)) {
            this.logger.log(Level.INFO, "processing cached response " + id);
            completer.complete(this.responseMap.remove(id));
            return null;
        }
        else {
            this.logger.log(Level.INFO, "waiting for response " + id);
            this.responseCompleters.set(id, completer);
            return completer.future;
        }
    };
    CommonInputConverter.prototype.processResponseResult = function (id, result) {
        var completer = this.responseCompleters.get(id);
        if (completer != null) {
            this.logger.log(Level.INFO, "processing response " + id);
            completer.complete(result);
        }
        else {
            this.logger.log(Level.INFO, "caching response " + id);
            this.responseMap.set(id, result);
        }
    };
    CommonInputConverter.prototype.translateSrcPaths = function (json) {
        var _this = this;
        if (_common_1.is(json, "string")) {
            return this.srcPathMap.translate(json);
        }
        if (_common_1.is(json, core.DartList())) {
            var result = new core.DartList.literal();
            for (var i = 0; i < json.length; ++i) {
                result.add(this.translateSrcPaths(json[i]));
            }
            return result;
        }
        if (_common_1.is(json, core.DartMap())) {
            var result_1 = new core.DartMap();
            json.forEach(function (origKey, value) {
                result_1.set(_this.translateSrcPaths(origKey), _this.translateSrcPaths(value));
            });
            return result_1;
        }
        return json;
    };
    var CommonInputConverter_1;
    __decorate([
        utils_1.defaultConstructor
    ], CommonInputConverter.prototype, "CommonInputConverter", null);
    CommonInputConverter = CommonInputConverter_1 = __decorate([
        utils_1.DartClass
    ], CommonInputConverter);
    return CommonInputConverter;
}(convert.Converter));
exports.CommonInputConverter = CommonInputConverter;
var InputConverter = /** @class */ (function (_super) {
    __extends(InputConverter, _super);
    function InputConverter(tmpSrcDirPath, srcPathMap) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    InputConverter.prototype.InputConverter = function (tmpSrcDirPath, srcPathMap) {
        this.logger = new bare.createInstance(any, null, 'InputConverter');
        this.headerLineCount = 0;
        this.active = true;
        this.tmpSrcDirPath = tmpSrcDirPath;
        this.srcPathMap = srcPathMap;
    };
    InputConverter.prototype.convert = function (line) {
        if (!this.active) {
            return null;
        }
        if (this.converter != null) {
            try {
                return this.converter.convert(line);
            }
            catch (__error__) {
                {
                    var e = __error__;
                    this.active = false;
                    /* TODO (RethrowExpressionImpl): rethrow */ ;
                }
            }
        }
        if (this.headerLineCount == 20) {
            throw 'Failed to determine input file format';
        }
        if (lib7.InstrumentationInputConverter.isFormat(line)) {
            this.converter = new lib7.InstrumentationInputConverter(this.tmpSrcDirPath, this.srcPathMap);
        }
        else if (lib8.LogFileInputConverter.isFormat(line)) {
            this.converter = new lib8.LogFileInputConverter(this.tmpSrcDirPath, this.srcPathMap);
        }
        if (this.converter != null) {
            return this.converter.convert(line);
        }
        this.logger.log(Level.INFO, "skipped input line: " + line);
        return null;
    };
    InputConverter.prototype.startChunkedConversion = function (outSink) {
        return new _InputSink(this, outSink);
    };
    __decorate([
        utils_1.defaultConstructor
    ], InputConverter.prototype, "InputConverter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InputConverter.prototype, "convert", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InputConverter.prototype, "startChunkedConversion", null);
    InputConverter = __decorate([
        utils_1.DartClass
    ], InputConverter);
    return InputConverter;
}(convert.Converter));
exports.InputConverter = InputConverter;
var PathMap = /** @class */ (function () {
    function PathMap() {
    }
    PathMap.prototype.add = function (oldSrcPrefix, newSrcPrefix) {
        this.entries.add(new PathMapEntry(oldSrcPrefix, newSrcPrefix));
    };
    PathMap.prototype.translate = function (original) {
        var result = original;
        for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            result = entry.translate(result);
        }
        return result;
    };
    PathMap.prototype.PathMap = function () {
        this.entries = new core.DartList.literal();
    };
    __decorate([
        utils_1.defaultConstructor
    ], PathMap.prototype, "PathMap", null);
    PathMap = __decorate([
        utils_1.DartClass
    ], PathMap);
    return PathMap;
}());
exports.PathMap = PathMap;
var PathMapEntry = /** @class */ (function () {
    function PathMapEntry(oldSrcPrefix, newSrcPrefix) {
    }
    PathMapEntry.prototype.PathMapEntry = function (oldSrcPrefix, newSrcPrefix) {
        this.oldSrcPrefix = oldSrcPrefix;
        this.newSrcPrefix = newSrcPrefix;
    };
    PathMapEntry.prototype.translate = function (original) {
        return new core.DartString(original).startsWith(this.oldSrcPrefix) ? "" + this.newSrcPrefix + new core.DartString(original).substring(new core.DartString(this.oldSrcPrefix).length) : original;
    };
    __decorate([
        utils_1.defaultConstructor
    ], PathMapEntry.prototype, "PathMapEntry", null);
    PathMapEntry = __decorate([
        utils_1.DartClass
    ], PathMapEntry);
    return PathMapEntry;
}());
exports.PathMapEntry = PathMapEntry;
var _InputSink = /** @class */ (function (_super) {
    __extends(_InputSink, _super);
    function _InputSink(converter, outSink) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _InputSink.prototype._InputSink = function (converter, outSink) {
        this.converter = converter;
        this.outSink = outSink;
    };
    _InputSink.prototype.add = function (line) {
        var op = this.converter.convert(line);
        if (op != null) {
            this.outSink.add(op);
        }
    };
    _InputSink.prototype.close = function () {
        this.outSink.close();
    };
    __decorate([
        utils_1.defaultConstructor
    ], _InputSink.prototype, "_InputSink", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _InputSink.prototype, "add", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _InputSink.prototype, "close", null);
    _InputSink = __decorate([
        utils_1.DartClass
    ], _InputSink);
    return _InputSink;
}(convert.ChunkedConversionSink));
exports._InputSink = _InputSink;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=input_converter.js.map
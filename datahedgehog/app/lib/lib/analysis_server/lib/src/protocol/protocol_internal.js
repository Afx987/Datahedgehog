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
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var convert = require("@dart2ts/dart/convert");
exports.addAllEditsForSource = function (sourceFileEdit, edits) {
    edits.forEach(sourceFileEdit.add);
};
exports.addEditForSource = function (sourceFileEdit, sourceEdit) {
    var edits = sourceFileEdit.edits;
    var index = 0;
    while (index < edits.length && utils_1.op(utils_1.Op.GT, edits[index].offset, sourceEdit.offset)) {
        index++;
    }
    edits.insert(index, sourceEdit);
};
exports.addEditToSourceChange = function (change, file, fileStamp, edit) {
    var fileEdit = change.getFileEdit(file);
    if (utils_1.op(utils_1.Op.EQUALS, fileEdit, null)) {
        fileEdit = new bare.createInstance(any, null, file, fileStamp);
        change.addFileEdit(fileEdit);
    }
    fileEdit.add(edit);
};
exports.applyEdit = function (code, edit) {
    if (utils_1.op(utils_1.Op.LT, edit.length, 0)) {
        throw new core.RangeError('length is negative');
    }
    return new core.DartString(code).replaceRange(edit.offset, edit.end, edit.replacement);
};
exports.applySequenceOfEdits = function (code, edits) {
    edits.forEach(function (edit) {
        code = edit.apply(code);
    });
    return code;
};
exports.getChangeFileEdit = function (change, file) {
    for (var _i = 0, _a = change.edits; _i < _a.length; _i++) {
        var fileEdit = _a[_i];
        if (utils_1.op(utils_1.Op.EQUALS, fileEdit.file, file)) {
            return fileEdit;
        }
    }
    return null;
};
exports.listEqual = function (listA, listB, itemEqual) {
    if (listA == null) {
        return listB == null;
    }
    if (listB == null) {
        return false;
    }
    if (listA.length != listB.length) {
        return false;
    }
    for (var i = 0; i < listA.length; i++) {
        if (!itemEqual(listA[i], listB[i])) {
            return false;
        }
    }
    return true;
};
exports.mapEqual = function (mapA, mapB, valueEqual) {
    if (mapA == null) {
        return mapB == null;
    }
    if (mapB == null) {
        return false;
    }
    if (mapA.length != mapB.length) {
        return false;
    }
    for (var _i = 0, _a = mapA.keys; _i < _a.length; _i++) {
        var key = _a[_i];
        if (!mapB.containsKey(key)) {
            return false;
        }
        if (!valueEqual(mapA.get(key), mapB.get(key))) {
            return false;
        }
    }
    return true;
};
exports.mapMap = function (map, _namedArguments) {
    var _a = Object.assign({}, _namedArguments), keyCallback = _a.keyCallback, valueCallback = _a.valueCallback;
    var result = new core.DartHashMap();
    map.forEach(function (key, value) {
        var resultKey;
        var resultValue;
        if (keyCallback != null) {
            resultKey = keyCallback(key);
        }
        else {
            resultKey = key;
        }
        if (valueCallback != null) {
            resultValue = valueCallback(value);
        }
        else {
            resultValue = value;
        }
        utils_1.op(utils_1.Op.INDEX_ASSIGN, result, resultKey, resultValue);
    });
    return result;
};
exports.maxRefactoringProblemSeverity = function (a, b) {
    if (utils_1.op(utils_1.Op.EQUALS, b, null)) {
        return a;
    }
    if (utils_1.op(utils_1.Op.EQUALS, a, null)) {
        return b;
    }
    else if (utils_1.op(utils_1.Op.EQUALS, a, RefactoringProblemSeverity.INFO)) {
        return b;
    }
    else if (utils_1.op(utils_1.Op.EQUALS, a, RefactoringProblemSeverity.WARNING)) {
        if (utils_1.op(utils_1.Op.EQUALS, b, RefactoringProblemSeverity.ERROR) || utils_1.op(utils_1.Op.EQUALS, b, RefactoringProblemSeverity.FATAL)) {
            return b;
        }
    }
    else if (utils_1.op(utils_1.Op.EQUALS, a, RefactoringProblemSeverity.ERROR)) {
        if (utils_1.op(utils_1.Op.EQUALS, b, RefactoringProblemSeverity.FATAL)) {
            return b;
        }
    }
    return a;
};
exports.refactoringFeedbackFromJson = function (jsonDecoder, jsonPath, json, feedbackJson) {
    var kind = jsonDecoder.refactoringKind;
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.EXTRACT_LOCAL_VARIABLE)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.EXTRACT_METHOD)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.INLINE_LOCAL_VARIABLE)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.INLINE_METHOD)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.RENAME)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    return null;
};
exports.refactoringOptionsFromJson = function (jsonDecoder, jsonPath, json, kind) {
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.EXTRACT_LOCAL_VARIABLE)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.EXTRACT_METHOD)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.INLINE_METHOD)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.MOVE_FILE)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.RENAME)) {
        return new bare.createInstance(any, null, jsonDecoder, jsonPath, json);
    }
    return null;
};
var HasToJson = /** @class */ (function () {
    function HasToJson() {
    }
    HasToJson.prototype.toJson = function () { throw 'abstract'; };
    HasToJson.prototype.HasToJson = function () {
    };
    __decorate([
        utils_1.Abstract
    ], HasToJson.prototype, "toJson", null);
    __decorate([
        utils_1.defaultConstructor
    ], HasToJson.prototype, "HasToJson", null);
    HasToJson = __decorate([
        utils_1.DartClass
    ], HasToJson);
    return HasToJson;
}());
exports.HasToJson = HasToJson;
var RequestDecoder = /** @class */ (function (_super) {
    __extends(RequestDecoder, _super);
    function RequestDecoder(_request) {
        var _this = this;
        return _this;
    }
    RequestDecoder.prototype.RequestDecoder = function (_request) {
        this._request = _request;
    };
    Object.defineProperty(RequestDecoder.prototype, "refactoringKind", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    RequestDecoder.prototype.mismatch = function (jsonPath, expected, actual) {
        var buffer = new core.DartStringBuffer();
        buffer.write('Expected to be ');
        buffer.write(expected);
        if (actual != null) {
            buffer.write('; found "');
            buffer.write(convert.properties.JSON.encode(actual));
            buffer.write('"');
        }
        return new bare.createInstance(any, null, new bare.createInstance(any, null, this._request, jsonPath, buffer.toString()));
    };
    RequestDecoder.prototype.missingKey = function (jsonPath, key) {
        return new bare.createInstance(any, null, new bare.createInstance(any, null, this._request, jsonPath, "Expected to contain key " + convert.properties.JSON.encode(key)));
    };
    __decorate([
        utils_1.defaultConstructor
    ], RequestDecoder.prototype, "RequestDecoder", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestDecoder.prototype, "mismatch", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], RequestDecoder.prototype, "missingKey", null);
    RequestDecoder = __decorate([
        utils_1.DartClass
    ], RequestDecoder);
    return RequestDecoder;
}(any));
exports.RequestDecoder = RequestDecoder;
var RequestParams = /** @class */ (function () {
    function RequestParams() {
    }
    RequestParams.prototype.toRequest = function (id) { throw 'abstract'; };
    RequestParams.prototype.RequestParams = function () {
    };
    __decorate([
        utils_1.Abstract
    ], RequestParams.prototype, "toRequest", null);
    __decorate([
        utils_1.defaultConstructor
    ], RequestParams.prototype, "RequestParams", null);
    RequestParams = __decorate([
        utils_1.DartClass,
        utils_1.Implements(HasToJson)
    ], RequestParams);
    return RequestParams;
}());
exports.RequestParams = RequestParams;
var ResponseDecoder = /** @class */ (function (_super) {
    __extends(ResponseDecoder, _super);
    function ResponseDecoder(refactoringKind) {
        var _this = this;
        return _this;
    }
    ResponseDecoder.prototype.ResponseDecoder = function (refactoringKind) {
        this.refactoringKind = refactoringKind;
    };
    ResponseDecoder.prototype.mismatch = function (jsonPath, expected, actual) {
        var buffer = new core.DartStringBuffer();
        buffer.write('Expected ');
        buffer.write(expected);
        if (actual != null) {
            buffer.write(' found "');
            buffer.write(convert.properties.JSON.encode(actual));
            buffer.write('"');
        }
        buffer.write(' at ');
        buffer.write(jsonPath);
        return new core.Exception(buffer.toString());
    };
    ResponseDecoder.prototype.missingKey = function (jsonPath, key) {
        return new core.Exception("Missing key " + key + " at " + jsonPath);
    };
    __decorate([
        utils_1.defaultConstructor
    ], ResponseDecoder.prototype, "ResponseDecoder", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ResponseDecoder.prototype, "mismatch", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ResponseDecoder.prototype, "missingKey", null);
    ResponseDecoder = __decorate([
        utils_1.DartClass
    ], ResponseDecoder);
    return ResponseDecoder;
}(any));
exports.ResponseDecoder = ResponseDecoder;
var ResponseResult = /** @class */ (function () {
    function ResponseResult() {
    }
    ResponseResult.prototype.toResponse = function (id) { throw 'abstract'; };
    ResponseResult.prototype.ResponseResult = function () {
    };
    __decorate([
        utils_1.Abstract
    ], ResponseResult.prototype, "toResponse", null);
    __decorate([
        utils_1.defaultConstructor
    ], ResponseResult.prototype, "ResponseResult", null);
    ResponseResult = __decorate([
        utils_1.DartClass,
        utils_1.Implements(HasToJson)
    ], ResponseResult);
    return ResponseResult;
}());
exports.ResponseResult = ResponseResult;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "REQUEST_ID_REFACTORING_KINDS", {
        get: function () {
            if (this.__$REQUEST_ID_REFACTORING_KINDS === undefined) {
                this.__$REQUEST_ID_REFACTORING_KINDS = new core.DartHashMap();
            }
            return this.__$REQUEST_ID_REFACTORING_KINDS;
        },
        set: function (__$value) {
            this.__$REQUEST_ID_REFACTORING_KINDS = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=protocol_internal.js.map
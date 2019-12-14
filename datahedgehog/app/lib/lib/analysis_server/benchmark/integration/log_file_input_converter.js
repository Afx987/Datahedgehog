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
var lib3 = require("./input_converter");
var convert = require("@dart2ts/dart/convert");
var LogFileInputConverter = /** @class */ (function (_super) {
    __extends(LogFileInputConverter, _super);
    function LogFileInputConverter(tmpSrcDirPath, srcPathMap) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    LogFileInputConverter_1 = LogFileInputConverter;
    LogFileInputConverter.prototype.LogFileInputConverter = function (tmpSrcDirPath, srcPathMap) {
        _super.prototype.CommonInputConverter.call(this, tmpSrcDirPath, srcPathMap);
    };
    LogFileInputConverter.prototype.convert = function (line) {
        try {
            var timeStampString = LogFileInputConverter_1._parseTimeStamp(line);
            var data = new core.DartString(line).substring(new core.DartString(timeStampString).length);
            if (new core.DartString(data).startsWith(properties.RECEIVED_FRAGMENT)) {
                var json = this.asMap(convert.properties.JSON.decode(new core.DartString(data).substring(4)));
                if (json.containsKey('event')) {
                    return this.convertNotification(json);
                }
                else {
                    return this.convertResponse(json);
                }
            }
            else if (new core.DartString(data).startsWith(properties.SENT_FRAGMENT)) {
                var json = this.asMap(convert.properties.JSON.decode(new core.DartString(data).substring(4)));
                if (json.containsKey('method')) {
                    return this.convertRequest(json);
                }
                return null;
            }
            this.logger.log(Level.INFO, "unknown input line: " + line);
            return null;
        }
        catch (__error__) {
            {
                var s = new core.DartStackTrace.fromError(__error__);
                var e = __error__;
                throw new bare.createInstance(any, null, "Failed to parse line\n  " + line, new bare.createInstance(any, null, e, s));
            }
        }
    };
    LogFileInputConverter.isFormat = function (line) {
        var timeStampString = LogFileInputConverter_1._parseTimeStamp(line);
        var start = new core.DartString(timeStampString).length;
        var end = start + properties.CONNECTED_MSG_FRAGMENT.length;
        return (10 < start && end < new core.DartString(line).length) && new core.DartString(line).substring(start, end) == properties.CONNECTED_MSG_FRAGMENT;
    };
    LogFileInputConverter._parseTimeStamp = function (line) {
        var index = 0;
        while (index < new core.DartString(line).length) {
            var code = new core.DartString(line).codeUnitAt(index);
            if (code < properties.ZERO || properties.NINE < code) {
                return new core.DartString(line).substring(0, index);
            }
            ++index;
        }
        return line;
    };
    var LogFileInputConverter_1;
    __decorate([
        utils_1.defaultConstructor
    ], LogFileInputConverter.prototype, "LogFileInputConverter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LogFileInputConverter.prototype, "convert", null);
    LogFileInputConverter = LogFileInputConverter_1 = __decorate([
        utils_1.DartClass
    ], LogFileInputConverter);
    return LogFileInputConverter;
}(lib3.CommonInputConverter));
exports.LogFileInputConverter = LogFileInputConverter;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "CONNECTED_MSG_FRAGMENT", {
        get: function () {
            if (this.__$CONNECTED_MSG_FRAGMENT === undefined) {
                this.__$CONNECTED_MSG_FRAGMENT = ' <= {"event":"server.connected"';
            }
            return this.__$CONNECTED_MSG_FRAGMENT;
        },
        set: function (__$value) {
            this.__$CONNECTED_MSG_FRAGMENT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "RECEIVED_FRAGMENT", {
        get: function () {
            if (this.__$RECEIVED_FRAGMENT === undefined) {
                this.__$RECEIVED_FRAGMENT = ' <= {';
            }
            return this.__$RECEIVED_FRAGMENT;
        },
        set: function (__$value) {
            this.__$RECEIVED_FRAGMENT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "SENT_FRAGMENT", {
        get: function () {
            if (this.__$SENT_FRAGMENT === undefined) {
                this.__$SENT_FRAGMENT = ' => {';
            }
            return this.__$SENT_FRAGMENT;
        },
        set: function (__$value) {
            this.__$SENT_FRAGMENT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "NINE", {
        get: function () {
            if (this.__$NINE === undefined) {
                this.__$NINE = new core.DartString('9').codeUnitAt(0);
            }
            return this.__$NINE;
        },
        set: function (__$value) {
            this.__$NINE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "ZERO", {
        get: function () {
            if (this.__$ZERO === undefined) {
                this.__$ZERO = new core.DartString('0').codeUnitAt(0);
            }
            return this.__$ZERO;
        },
        set: function (__$value) {
            this.__$ZERO = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=log_file_input_converter.js.map
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
var InstrumentationInputConverter = /** @class */ (function (_super) {
    __extends(InstrumentationInputConverter, _super);
    function InstrumentationInputConverter(tmpSrcDirPath, srcPathMap) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    InstrumentationInputConverter_1 = InstrumentationInputConverter;
    InstrumentationInputConverter.prototype.InstrumentationInputConverter = function (tmpSrcDirPath, srcPathMap) {
        this.codesSeen = new core.DartSet();
        this.readBuffer = null;
        _super.prototype.CommonInputConverter.call(this, tmpSrcDirPath, srcPathMap);
    };
    InstrumentationInputConverter.prototype.convert = function (line) {
        var fields;
        try {
            fields = InstrumentationInputConverter_1._parseFields(line);
            if (fields.length < 2) {
                if (this.readBuffer != null) {
                    this.readBuffer.writeln(fields.length == 1 ? fields[0] : '');
                    return null;
                }
                throw "Failed to process line:\n" + line;
            }
            if (this.readBuffer != null) {
                this.readBuffer = null;
            }
        }
        catch (__error__) {
            {
                var s = new core.DartStackTrace.fromError(__error__);
                var e = __error__;
                throw new bare.createInstance(any, null, "Failed to parse line\n" + line, new bare.createInstance(any, null, e, s));
            }
        }
        var opCode = fields[1];
        if (opCode == InstrumentationService.TAG_NOTIFICATION) {
            return this.convertNotification(this.decodeJson(line, fields[2]));
        }
        else if (opCode == 'Read') {
            this.readBuffer = new core.DartStringBuffer(fields.length > 4 ? fields[4] : '');
            return null;
        }
        else if (opCode == InstrumentationService.TAG_REQUEST) {
            return this.convertRequest(this.decodeJson(line, fields[2]));
        }
        else if (opCode == InstrumentationService.TAG_RESPONSE) {
            return this.convertResponse(this.decodeJson(line, fields[2]));
        }
        else if (opCode == InstrumentationService.TAG_ANALYSIS_TASK) {
            return null;
        }
        else if (opCode == InstrumentationService.TAG_LOG_ENTRY) {
            return null;
        }
        else if (opCode == InstrumentationService.TAG_PERFORMANCE) {
            return null;
        }
        else if (opCode == InstrumentationService.TAG_SUBPROCESS_START) {
            return null;
        }
        else if (opCode == InstrumentationService.TAG_SUBPROCESS_RESULT) {
            return null;
        }
        else if (opCode == InstrumentationService.TAG_VERSION) {
            return null;
        }
        else if (opCode == InstrumentationService.TAG_WATCH_EVENT) {
            return null;
        }
        if (this.codesSeen.add(opCode)) {
            this.logger.log(Level.WARNING, "Ignored instrumentation op code: " + opCode + "\n  " + line);
        }
        return null;
    };
    InstrumentationInputConverter.prototype.decodeJson = function (line, text) {
        try {
            return this.asMap(convert.properties.JSON.decode(text));
        }
        catch (__error__) {
            {
                var s = new core.DartStackTrace.fromError(__error__);
                var e = __error__;
                throw new bare.createInstance(any, null, "Failed to decode JSON: " + text + "\n" + line, new bare.createInstance(any, null, e, s));
            }
        }
    };
    InstrumentationInputConverter.isFormat = function (line) {
        var fields = InstrumentationInputConverter_1._parseFields(line);
        if (fields.length < 2)
            return false;
        var timeStamp = core.DartInt.parse(fields[0], {
            onError: function (_) {
                return -1;
            }
        });
        var opCode = fields[1];
        return timeStamp > 0 && opCode == 'Ver';
    };
    InstrumentationInputConverter._parseFields = function (line) {
        var fields = new core.DartList();
        var index = 0;
        var sb = new core.DartStringBuffer();
        while (index < new core.DartString(line).length) {
            var code = new core.DartString(line).codeUnitAt(index);
            if (code == properties.COLON) {
                var next = index + 1;
                if (next < new core.DartString(line).length && new core.DartString(line).codeUnitAt(next) == properties.COLON) {
                    sb.write(':');
                    ++index;
                }
                else {
                    fields.add(sb.toString());
                    sb.clear();
                }
            }
            else {
                sb.writeCharCode(code);
            }
            ++index;
        }
        if (sb.isNotEmpty) {
            fields.add(sb.toString());
        }
        return fields;
    };
    var InstrumentationInputConverter_1;
    __decorate([
        utils_1.defaultConstructor
    ], InstrumentationInputConverter.prototype, "InstrumentationInputConverter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InstrumentationInputConverter.prototype, "convert", null);
    InstrumentationInputConverter = InstrumentationInputConverter_1 = __decorate([
        utils_1.DartClass
    ], InstrumentationInputConverter);
    return InstrumentationInputConverter;
}(lib3.CommonInputConverter));
exports.InstrumentationInputConverter = InstrumentationInputConverter;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "COLON", {
        get: function () {
            if (this.__$COLON === undefined) {
                this.__$COLON = new core.DartString(':').codeUnitAt(0);
            }
            return this.__$COLON;
        },
        set: function (__$value) {
            this.__$COLON = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=instrumentation_input_converter.js.map
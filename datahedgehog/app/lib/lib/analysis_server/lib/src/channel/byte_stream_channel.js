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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/channel/byte_stream_channel.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var convert = require("@dart2ts/dart/convert");
var ByteStreamClientChannel = /** @class */ (function () {
    function ByteStreamClientChannel(input, output) {
    }
    ByteStreamClientChannel.prototype.ByteStreamClientChannel = function (input, output) {
        this.input = input;
        this.output = output;
        var jsonStream = this.input.transform(new convert.Utf8Decoder()).transform(new convert.LineSplitter()).transform(new bare.createInstance(any, null)).where(function (json) {
            return _common_1.is(json, core.DartMap());
        }).asBroadcastStream();
        this.responseStream = jsonStream.where(function (json) {
            return utils_1.op(utils_1.Op.EQUALS, utils_1.op(utils_1.Op.INDEX, json, Notification.EVENT), null);
        }).transform(new bare.createInstance(any, null)).asBroadcastStream();
        this.notificationStream = jsonStream.where(function (json) {
            return utils_1.op(utils_1.Op.INDEX, json, Notification.EVENT) != null;
        }).transform(new bare.createInstance(any, null)).asBroadcastStream();
    };
    ByteStreamClientChannel.prototype.close = function () {
        return this.output.close();
    };
    ByteStreamClientChannel.prototype.sendRequest = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.id;
                        this.output.write(convert.properties.JSON.encode(request.toJson()) + '\n');
                        return [4 /*yield*/, this.responseStream.firstWhere(function (response) {
                                return utils_1.op(utils_1.Op.EQUALS, response.id, id);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); })());
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamClientChannel.prototype, "responseStream", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamClientChannel.prototype, "notificationStream", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], ByteStreamClientChannel.prototype, "ByteStreamClientChannel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamClientChannel.prototype, "close", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamClientChannel.prototype, "sendRequest", null);
    ByteStreamClientChannel = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ByteStreamClientChannel);
    return ByteStreamClientChannel;
}());
exports.ByteStreamClientChannel = ByteStreamClientChannel;
var ByteStreamServerChannel = /** @class */ (function () {
    function ByteStreamServerChannel(_input, _output, _instrumentationService) {
    }
    ByteStreamServerChannel.prototype.ByteStreamServerChannel = function (_input, _output, _instrumentationService) {
        this._closed = new async.DartCompleter();
        this._closeRequested = false;
        this._input = _input;
        this._output = _output;
        this._instrumentationService = _instrumentationService;
    };
    Object.defineProperty(ByteStreamServerChannel.prototype, "closed", {
        get: function () {
            return this._closed.future;
        },
        enumerable: true,
        configurable: true
    });
    ByteStreamServerChannel.prototype.close = function () {
        if (!this._closeRequested) {
            this._closeRequested = true;
            /* TODO (AssertStatementImpl) : assert (!_closed.isCompleted); */ ;
            this._closed.complete();
        }
    };
    ByteStreamServerChannel.prototype.listen = function (onRequest, _namedArguments) {
        var _this = this;
        var _a = Object.assign({}, _namedArguments), onError = _a.onError, onDone = _a.onDone;
        this._input.transform(new convert.Utf8Decoder()).transform(new convert.LineSplitter()).listen(function (data) {
            return _this._readRequest(data, onRequest);
        }, {
            onError: onError, onDone: function () {
                _this.close();
                onDone();
            }
        });
    };
    ByteStreamServerChannel.prototype.sendNotification = function (notification) {
        var _this = this;
        if (this._closeRequested) {
            return;
        }
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(function () {
            var jsonEncoding = convert.properties.JSON.encode(notification.toJson());
            _this._outputLine(jsonEncoding);
            _this._instrumentationService.logNotification(jsonEncoding);
        });
    };
    ByteStreamServerChannel.prototype.sendResponse = function (response) {
        var _this = this;
        if (this._closeRequested) {
            return;
        }
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(function () {
            var jsonEncoding = convert.properties.JSON.encode(response.toJson());
            _this._outputLine(jsonEncoding);
            _this._instrumentationService.logResponse(jsonEncoding);
        });
    };
    ByteStreamServerChannel.prototype._outputLine = function (s) {
        this._output.writeln(s);
    };
    ByteStreamServerChannel.prototype._readRequest = function (data, onRequest) {
        var _this = this;
        if (this._closed.isCompleted) {
            return;
        }
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(function () {
            _this._instrumentationService.logRequest(data);
            var request = new bare.createInstance(any, null, data);
            if (utils_1.op(utils_1.Op.EQUALS, request, null)) {
                _this.sendResponse(new bare.createInstance(any, null));
                return;
            }
            onRequest(request);
        });
    };
    __decorate([
        utils_1.defaultConstructor
    ], ByteStreamServerChannel.prototype, "ByteStreamServerChannel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamServerChannel.prototype, "close", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamServerChannel.prototype, "listen", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamServerChannel.prototype, "sendNotification", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ByteStreamServerChannel.prototype, "sendResponse", null);
    ByteStreamServerChannel = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ByteStreamServerChannel);
    return ByteStreamServerChannel;
}());
exports.ByteStreamServerChannel = ByteStreamServerChannel;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=byte_stream_channel.js.map
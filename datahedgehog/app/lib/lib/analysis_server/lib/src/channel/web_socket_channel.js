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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/channel/web_socket_channel.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var io = require("@dart2ts/dart/io");
var convert = require("@dart2ts/dart/convert");
var WebSocketClientChannel = /** @class */ (function () {
    function WebSocketClientChannel(socket) {
    }
    WebSocketClientChannel.prototype.WebSocketClientChannel = function (socket) {
        this.socket = socket;
        var jsonStream = this.socket.where(function (data) {
            return _common_1.is(data, "string");
        }).transform(new bare.createInstance(any, null)).where(function (json) {
            return _common_1.is(json, core.DartMap());
        }).asBroadcastStream();
        this.responseStream = jsonStream.where(function (json) {
            return utils_1.op(utils_1.Op.EQUALS, utils_1.op(utils_1.Op.INDEX, json, Notification.EVENT), null);
        }).transform(new bare.createInstance(any, null)).asBroadcastStream();
        this.notificationStream = jsonStream.where(function (json) {
            return utils_1.op(utils_1.Op.INDEX, json, Notification.EVENT) != null;
        }).transform(new bare.createInstance(any, null)).asBroadcastStream();
    };
    WebSocketClientChannel.prototype.close = function () {
        return this.socket.close();
    };
    WebSocketClientChannel.prototype.sendRequest = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.id;
                        this.socket.add(convert.properties.JSON.encode(request.toJson()));
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
    ], WebSocketClientChannel.prototype, "responseStream", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WebSocketClientChannel.prototype, "notificationStream", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], WebSocketClientChannel.prototype, "WebSocketClientChannel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WebSocketClientChannel.prototype, "close", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WebSocketClientChannel.prototype, "sendRequest", null);
    WebSocketClientChannel = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], WebSocketClientChannel);
    return WebSocketClientChannel;
}());
exports.WebSocketClientChannel = WebSocketClientChannel;
var WebSocketServerChannel = /** @class */ (function () {
    function WebSocketServerChannel(socket, instrumentationService) {
    }
    WebSocketServerChannel.prototype.WebSocketServerChannel = function (socket, instrumentationService) {
        this.socket = socket;
        this.instrumentationService = instrumentationService;
    };
    WebSocketServerChannel.prototype.close = function () {
        this.socket.close(io.WebSocketStatus.NORMAL_CLOSURE);
    };
    WebSocketServerChannel.prototype.listen = function (onRequest, _namedArguments) {
        var _this = this;
        var _a = Object.assign({}, _namedArguments), onError = _a.onError, onDone = _a.onDone;
        this.socket.listen(function (data) {
            return _this.readRequest(data, onRequest);
        }, {
            onError: onError, onDone: onDone
        });
    };
    WebSocketServerChannel.prototype.readRequest = function (data, onRequest) {
        var _this = this;
        if (_common_1.is(data, "string")) {
            this.instrumentationService.logRequest(data);
            ServerPerformanceStatistics.serverChannel.makeCurrentWhile(function () {
                var request = new bare.createInstance(any, null, data);
                if (utils_1.op(utils_1.Op.EQUALS, request, null)) {
                    _this.sendResponse(new bare.createInstance(any, null));
                    return;
                }
                onRequest(request);
            });
        }
        else if (_common_1.is(data, core.DartList())) {
            this.sendResponse(new bare.createInstance(any, null));
        }
        else {
            this.sendResponse(new bare.createInstance(any, null));
        }
    };
    WebSocketServerChannel.prototype.sendNotification = function (notification) {
        var _this = this;
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(function () {
            var jsonEncoding = convert.properties.JSON.encode(notification.toJson());
            _this.socket.add(jsonEncoding);
            _this.instrumentationService.logNotification(jsonEncoding);
        });
    };
    WebSocketServerChannel.prototype.sendResponse = function (response) {
        var _this = this;
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(function () {
            var jsonEncoding = convert.properties.JSON.encode(response.toJson());
            _this.socket.add(jsonEncoding);
            _this.instrumentationService.logResponse(jsonEncoding);
        });
    };
    __decorate([
        utils_1.defaultConstructor
    ], WebSocketServerChannel.prototype, "WebSocketServerChannel", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WebSocketServerChannel.prototype, "close", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WebSocketServerChannel.prototype, "listen", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WebSocketServerChannel.prototype, "sendNotification", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WebSocketServerChannel.prototype, "sendResponse", null);
    WebSocketServerChannel = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], WebSocketServerChannel);
    return WebSocketServerChannel;
}());
exports.WebSocketServerChannel = WebSocketServerChannel;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=web_socket_channel.js.map
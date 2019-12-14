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
var io = require("@dart2ts/dart/io");
var HttpAnalysisServer = /** @class */ (function () {
    function HttpAnalysisServer(socketServer) {
    }
    HttpAnalysisServer_1 = HttpAnalysisServer;
    Object.defineProperty(HttpAnalysisServer, "MAX_PRINT_BUFFER_LENGTH", {
        get: function () {
            if (this.__$MAX_PRINT_BUFFER_LENGTH === undefined) {
                this.__$MAX_PRINT_BUFFER_LENGTH = 1000;
            }
            return this.__$MAX_PRINT_BUFFER_LENGTH;
        },
        enumerable: true,
        configurable: true
    });
    HttpAnalysisServer.prototype.HttpAnalysisServer = function (socketServer) {
        this._printBuffer = new core.DartList.literal();
        this.socketServer = socketServer;
    };
    Object.defineProperty(HttpAnalysisServer.prototype, "boundPort", {
        get: function () {
            var _this = this;
            return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = (function (t) { return (!!t) ? t.port : null; });
                            return [4 /*yield*/, this._server];
                        case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent())])];
                    }
                });
            }); })());
        },
        enumerable: true,
        configurable: true
    });
    HttpAnalysisServer.prototype.close = function () {
        this._server.then(function (server) {
            server.close();
        });
    };
    HttpAnalysisServer.prototype.recordPrint = function (line) {
        this._printBuffer.add(line);
        if (this._printBuffer.length > HttpAnalysisServer_1.MAX_PRINT_BUFFER_LENGTH) {
            this._printBuffer.removeRange(0, this._printBuffer.length - HttpAnalysisServer_1.MAX_PRINT_BUFFER_LENGTH);
        }
    };
    HttpAnalysisServer.prototype.serveHttp = function (initialPort) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var server, __error__1, ignore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._server != null) {
                            return [2 /*return*/, this.boundPort];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this._server = io.HttpServer.bind(io.InternetAddress.LOOPBACK_IP_V4, (initialPort || 0));
                        return [4 /*yield*/, this._server];
                    case 2:
                        server = _a.sent();
                        this._handleServer(server);
                        return [2 /*return*/, server.port];
                    case 3:
                        __error__1 = _a.sent();
                        {
                            ignore = __error__1;
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); })());
    };
    HttpAnalysisServer.prototype._handleGetRequest = function (request) {
        if (utils_1.op(utils_1.Op.EQUALS, this.getHandler, null)) {
            if (this.socketServer.analysisServer.options.enableNewAnalysisDriver) {
                this.getHandler = new bare.createInstance(any, null, this.socketServer, this._printBuffer);
            }
            else {
                this.getHandler = new bare.createInstance(any, null, this.socketServer, this._printBuffer);
            }
        }
        this.getHandler.handleGetRequest(request);
    };
    HttpAnalysisServer.prototype._handleServer = function (httpServer) {
        var _this = this;
        httpServer.listen(function (request) {
            var updateValues = utils_1.op(utils_1.Op.INDEX, request.headers, io.HttpHeaders.UPGRADE);
            if (updateValues != null && updateValues.indexOf('websocket') >= 0) {
                io.WebSocketTransformer.upgrade(request).then(function (websocket) {
                    _this._handleWebSocket(websocket);
                });
            }
            else if (request.method == 'GET') {
                _this._handleGetRequest(request);
            }
            else {
                _this._returnUnknownRequest(request);
            }
        });
    };
    HttpAnalysisServer.prototype._handleWebSocket = function (socket) {
        this.socketServer.createAnalysisServer(new bare.createInstance(any, null, socket, this.socketServer.instrumentationService));
    };
    HttpAnalysisServer.prototype._returnUnknownRequest = function (request) {
        var response = request.response;
        response.statusCode = io.HttpStatus.NOT_FOUND;
        response.headers.contentType = new io.ContentType("text", "plain", {
            charset: "utf-8"
        });
        response.write('Not found');
        response.close();
    };
    var HttpAnalysisServer_1;
    __decorate([
        utils_1.defaultConstructor
    ], HttpAnalysisServer.prototype, "HttpAnalysisServer", null);
    HttpAnalysisServer = HttpAnalysisServer_1 = __decorate([
        utils_1.DartClass
    ], HttpAnalysisServer);
    return HttpAnalysisServer;
}());
exports.HttpAnalysisServer = HttpAnalysisServer;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=http_server.js.map
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
var convert = require("@dart2ts/dart/convert");
var AnalysisManager = /** @class */ (function () {
    function AnalysisManager() {
    }
    AnalysisManager_1 = AnalysisManager;
    Object.defineProperty(AnalysisManager, "PORT", {
        get: function () {
            if (this.__$PORT === undefined) {
                this.__$PORT = 3333;
            }
            return this.__$PORT;
        },
        enumerable: true,
        configurable: true
    });
    AnalysisManager.prototype.stop = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!utils_1.op(utils_1.Op.EQUALS, this.process, null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.channel.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2: return [4 /*yield*/, this.channel.sendRequest(new bare.createInstance(any, null).toRequest('0')).timeout(new core.DartDuration({
                            seconds: 2
                        }), {
                            onTimeout: function () {
                                core.print('Expected shutdown response');
                            }
                        }).then(function (response) {
                            return _this.channel.close().then(function (_) {
                                return _this.process.exitCode;
                            });
                        }).timeout(new core.DartDuration({
                            seconds: 2
                        }), {
                            onTimeout: function () {
                                core.print('Expected server to shutdown');
                                _this.process.kill();
                            }
                        })];
                    case 3:
                        result = _a.sent();
                        if (result != null && result != 0) {
                            io.properties.exitCode = result;
                        }
                        return [2 /*return*/, true];
                }
            });
        }); })());
    };
    AnalysisManager.prototype._launchServer = function (pathToServer) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var serverArgs, process, __error__1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        serverArgs = new core.DartList.literal(pathToServer, '--port', new core.DartInt(AnalysisManager_1.PORT).toString());
                        return [4 /*yield*/, io.Process.start(io.Platform.executable, serverArgs)];
                    case 1:
                        process = _a.sent();
                        return [2 /*return*/, this._listenForPort(process)];
                    case 2:
                        __error__1 = _a.sent();
                        {
                            error = __error__1;
                            io.properties.exitCode = 1;
                            throw "Failed to launch analysis server: " + error;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisManager.prototype._listenForPort = function (process) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var out, pattern, line, port, url, __error__2, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.process = process;
                        out = process.stdout.transform(convert.properties.UTF8.decoder).asBroadcastStream();
                        out.listen(function (line) {
                            return core.print(line);
                        });
                        process.stderr.pipe(io.properties.stderr);
                        pattern = 'Listening on port ';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, out.firstWhere(function (line) {
                                return new core.DartString(line).startsWith(pattern);
                            }).timeout(new core.DartDuration({
                                seconds: 10
                            }))];
                    case 2:
                        line = _a.sent();
                        port = new core.DartString(new core.DartString(line).substring(new core.DartString(pattern).length)).trim();
                        url = "ws://" + io.InternetAddress.LOOPBACK_IP_V4.address + ":" + port + "/";
                        return [2 /*return*/, this._openConnection(url)];
                    case 3:
                        __error__2 = _a.sent();
                        {
                            error = __error__2;
                            io.properties.exitCode = 1;
                            process.kill();
                            throw 'Expected port from analysis server';
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); })());
    };
    AnalysisManager.prototype._openConnection = function (serverUrl) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var onError, socket, __error__3, error;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onError = function (error) {
                            io.properties.exitCode = 1;
                            if (_this.process != null) {
                                _this.process.kill();
                            }
                            throw "Failed to connect to analysis server at " + serverUrl + "\n  " + error;
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, io.WebSocket.connect(serverUrl).catchError(onError)];
                    case 2:
                        socket = _a.sent();
                        this.channel = new bare.createInstance(any, null, socket);
                        return [2 /*return*/, this];
                    case 3:
                        __error__3 = _a.sent();
                        {
                            error = __error__3;
                            onError(error);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, null];
                }
            });
        }); })());
    };
    AnalysisManager.connect = function (serverUrl) {
        return new AnalysisManager_1()._openConnection(serverUrl);
    };
    AnalysisManager.start = function (serverPath) {
        return new AnalysisManager_1()._launchServer(serverPath);
    };
    AnalysisManager.prototype.AnalysisManager = function () {
    };
    var AnalysisManager_1;
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisManager.prototype, "AnalysisManager", null);
    AnalysisManager = AnalysisManager_1 = __decorate([
        utils_1.DartClass
    ], AnalysisManager);
    return AnalysisManager;
}());
exports.AnalysisManager = AnalysisManager;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=analysis_manager.js.map
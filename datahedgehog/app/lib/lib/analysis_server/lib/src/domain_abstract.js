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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_abstract.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var math = require("@dart2ts/dart/math");
var convert = require("@dart2ts/dart/convert");
var AbstractRequestHandler = /** @class */ (function () {
    function AbstractRequestHandler(server) {
    }
    AbstractRequestHandler.prototype.AbstractRequestHandler = function (server) {
        this.server = server;
    };
    AbstractRequestHandler.prototype.waitForResponses = function (futures, _namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, requestParameters, timeout, endTime, responses, _i, _b, pluginInfo, future, startTime, response, __error__1, stackTrace, exception;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Object.assign({
                            "timeout": 500
                        }, _namedArguments), requestParameters = _a.requestParameters, timeout = _a.timeout;
                        endTime = new core.DartDateTime.now().millisecondsSinceEpoch + timeout;
                        responses = new core.DartList.literal();
                        _i = 0, _b = futures.keys;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 6];
                        pluginInfo = _b[_i];
                        future = futures.get(pluginInfo);
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        startTime = new core.DartDateTime.now().millisecondsSinceEpoch;
                        return [4 /*yield*/, future.timeout(new core.DartDuration({
                                milliseconds: math.max(endTime - startTime, 0)
                            }))];
                    case 3:
                        response = _c.sent();
                        if (response.error != null) {
                            this.server.instrumentationService.logPluginError(pluginInfo.data, response.error.code.name, response.error.message, response.error.stackTrace);
                        }
                        else {
                            responses.add(response);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        __error__1 = _c.sent();
                        if (_common_1.is(__error__1, async.TimeoutException)) {
                            this.server.instrumentationService.logPluginTimeout(pluginInfo.data, new convert.JsonEncoder().convert(((function (_17_) { return (!!_17_) ? _17_.toJson() : null; })((function (_18_) { return (!!_18_) ? _18_.toRequest('-') : null; })(requestParameters)) || new core.DartMap.literal([]))));
                        }
                        {
                            stackTrace = new core.DartStackTrace.fromError(__error__1);
                            exception = __error__1;
                            this.server.instrumentationService.logPluginException(pluginInfo.data, exception, stackTrace);
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, responses];
                }
            });
        }); })());
    };
    __decorate([
        utils_1.defaultConstructor
    ], AbstractRequestHandler.prototype, "AbstractRequestHandler", null);
    AbstractRequestHandler = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AbstractRequestHandler);
    return AbstractRequestHandler;
}());
exports.AbstractRequestHandler = AbstractRequestHandler;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=domain_abstract.js.map
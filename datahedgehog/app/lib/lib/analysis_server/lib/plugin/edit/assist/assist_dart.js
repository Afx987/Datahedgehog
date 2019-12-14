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
var async = require("@dart2ts/dart/async");
var DartAssistContext = /** @class */ (function () {
    function DartAssistContext() {
    }
    Object.defineProperty(DartAssistContext.prototype, "analysisDriver", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistContext.prototype, "astProvider", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistContext.prototype, "selectionLength", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistContext.prototype, "selectionOffset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistContext.prototype, "source", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistContext.prototype, "unit", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    DartAssistContext.prototype.DartAssistContext = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], DartAssistContext.prototype, "analysisDriver", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartAssistContext.prototype, "astProvider", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartAssistContext.prototype, "selectionLength", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartAssistContext.prototype, "selectionOffset", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartAssistContext.prototype, "source", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartAssistContext.prototype, "unit", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartAssistContext.prototype, "DartAssistContext", null);
    DartAssistContext = __decorate([
        utils_1.DartClass
    ], DartAssistContext);
    return DartAssistContext;
}());
exports.DartAssistContext = DartAssistContext;
var DartAssistContributor = /** @class */ (function () {
    function DartAssistContributor() {
    }
    DartAssistContributor.prototype.computeAssists = function (context) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var driver, source, unit, dartContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        driver = context.analysisDriver;
                        source = context.source;
                        if (!AnalysisEngine.isDartFileName(source.fullName)) {
                            return [2 /*return*/, Assist.EMPTY_LIST];
                        }
                        return [4 /*yield*/, driver.getResult(source.fullName)];
                    case 1:
                        unit = (_a.sent()).unit;
                        if (utils_1.op(utils_1.Op.EQUALS, unit, null)) {
                            return [2 /*return*/, Assist.EMPTY_LIST];
                        }
                        dartContext = new _DartAssistContextImpl(new bare.createInstance(any, null, driver), context, unit);
                        return [2 /*return*/, this.internalComputeAssists(dartContext)];
                }
            });
        }); })());
    };
    DartAssistContributor.prototype.internalComputeAssists = function (context) { throw 'abstract'; };
    DartAssistContributor.prototype.DartAssistContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartAssistContributor.prototype, "computeAssists", null);
    __decorate([
        utils_1.Abstract
    ], DartAssistContributor.prototype, "internalComputeAssists", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartAssistContributor.prototype, "DartAssistContributor", null);
    DartAssistContributor = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DartAssistContributor);
    return DartAssistContributor;
}());
exports.DartAssistContributor = DartAssistContributor;
var _DartAssistContextImpl = /** @class */ (function () {
    function _DartAssistContextImpl(astProvider, _context, unit) {
    }
    _DartAssistContextImpl.prototype._DartAssistContextImpl = function (astProvider, _context, unit) {
        this.astProvider = astProvider;
        this._context = _context;
        this.unit = unit;
    };
    Object.defineProperty(_DartAssistContextImpl.prototype, "analysisDriver", {
        get: function () {
            return this._context.analysisDriver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DartAssistContextImpl.prototype, "selectionLength", {
        get: function () {
            return this._context.selectionLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DartAssistContextImpl.prototype, "selectionOffset", {
        get: function () {
            return this._context.selectionOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DartAssistContextImpl.prototype, "source", {
        get: function () {
            return this._context.source;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextImpl.prototype, "astProvider", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextImpl.prototype, "unit", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], _DartAssistContextImpl.prototype, "_DartAssistContextImpl", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextImpl.prototype, "analysisDriver", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextImpl.prototype, "selectionLength", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextImpl.prototype, "selectionOffset", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextImpl.prototype, "source", null);
    _DartAssistContextImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(DartAssistContext)
    ], _DartAssistContextImpl);
    return _DartAssistContextImpl;
}());
exports._DartAssistContextImpl = _DartAssistContextImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=assist_dart.js.map
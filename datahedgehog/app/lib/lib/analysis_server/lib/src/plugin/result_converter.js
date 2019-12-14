"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var ResultConverter = /** @class */ (function () {
    function ResultConverter() {
    }
    ResultConverter_1 = ResultConverter;
    Object.defineProperty(ResultConverter, "decoder", {
        get: function () {
            if (this.__$decoder === undefined) {
                this.__$decoder = new bare.createInstance(any, null, null);
            }
            return this.__$decoder;
        },
        set: function (__$value) {
            this.__$decoder = __$value;
        },
        enumerable: true,
        configurable: true
    });
    ResultConverter.prototype.convertAnalysisErrorFixes = function (fixes) {
        var _this = this;
        var changes = fixes.fixes.map(function (change) {
            return _this.convertPrioritizedSourceChange(change);
        }).toList();
        return new bare.createInstance(any, null, fixes.error, {
            fixes: changes
        });
    };
    ResultConverter.prototype.convertAnalysisNavigationParams = function (params) {
        return new bare.createInstance(any, "fromJson", ResultConverter_1.decoder, '', params.toJson());
    };
    ResultConverter.prototype.convertEditGetRefactoringResult = function (kind, result) {
        return new bare.createInstance(any, "fromJson", new bare.createInstance(any, null, kind), '', result.toJson());
    };
    ResultConverter.prototype.convertPrioritizedSourceChange = function (change) {
        return change.change;
    };
    ResultConverter.prototype.ResultConverter = function () {
    };
    var ResultConverter_1;
    __decorate([
        utils_1.defaultConstructor
    ], ResultConverter.prototype, "ResultConverter", null);
    ResultConverter = ResultConverter_1 = __decorate([
        utils_1.DartClass
    ], ResultConverter);
    return ResultConverter;
}());
exports.ResultConverter = ResultConverter;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=result_converter.js.map
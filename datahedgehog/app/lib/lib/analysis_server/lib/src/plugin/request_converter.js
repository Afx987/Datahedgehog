"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var RequestConverter = /** @class */ (function () {
    function RequestConverter() {
    }
    RequestConverter.prototype.convertAnalysisReanalyzeParams = function (params) {
        return new bare.createInstance(any, null, {
            roots: params.roots
        });
    };
    RequestConverter.prototype.convertAnalysisService = function (service) {
        return new bare.createInstance(any, null, service.name);
    };
    RequestConverter.prototype.convertAnalysisSetPriorityFilesParams = function (params) {
        return new bare.createInstance(any, null, params.files);
    };
    RequestConverter.prototype.convertAnalysisSetSubscriptionsParams = function (params) {
        var serverSubscriptions = params.subscriptions;
        var pluginSubscriptions = new core.DartMap.literal([]);
        for (var _i = 0, _a = serverSubscriptions.keys; _i < _a.length; _i++) {
            var service = _a[_i];
            try {
                pluginSubscriptions.set(this.convertAnalysisService(service), serverSubscriptions.get(service));
            }
            catch (__error__) {
                {
                    var exception = __error__;
                }
            }
        }
        return new bare.createInstance(any, null, pluginSubscriptions);
    };
    RequestConverter.prototype.convertAnalysisUpdateContentParams = function (params) {
        return new bare.createInstance(any, null, params.files);
    };
    RequestConverter.prototype.RequestConverter = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], RequestConverter.prototype, "RequestConverter", null);
    RequestConverter = __decorate([
        utils_1.DartClass
    ], RequestConverter);
    return RequestConverter;
}());
exports.RequestConverter = RequestConverter;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=request_converter.js.map
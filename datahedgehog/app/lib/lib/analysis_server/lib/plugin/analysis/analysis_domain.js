"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var AnalysisDomain = /** @class */ (function () {
    function AnalysisDomain() {
    }
    AnalysisDomain.prototype.onResultChanged = function (result) { throw 'abstract'; };
    AnalysisDomain.prototype.scheduleNotification = function (context, source, service) { throw 'abstract'; };
    AnalysisDomain.prototype.AnalysisDomain = function () {
    };
    __decorate([
        utils_1.Abstract
    ], AnalysisDomain.prototype, "onResultChanged", null);
    __decorate([
        utils_1.Abstract
    ], AnalysisDomain.prototype, "scheduleNotification", null);
    __decorate([
        utils_1.defaultConstructor
    ], AnalysisDomain.prototype, "AnalysisDomain", null);
    AnalysisDomain = __decorate([
        utils_1.DartClass
    ], AnalysisDomain);
    return AnalysisDomain;
}());
exports.AnalysisDomain = AnalysisDomain;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID", {
        get: function () {
            if (this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID === undefined) {
                this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER, ServerPlugin.SET_ANALISYS_DOMAIN_EXTENSION_POINT);
            }
            return this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID;
        },
        set: function (__$value) {
            this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=analysis_domain.js.map
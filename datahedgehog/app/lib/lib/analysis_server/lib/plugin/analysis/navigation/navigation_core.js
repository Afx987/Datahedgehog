"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var NavigationCollector = /** @class */ (function () {
    function NavigationCollector() {
    }
    NavigationCollector.prototype.addRegion = function (offset, length, targetKind, targetLocation) { throw 'abstract'; };
    NavigationCollector.prototype.NavigationCollector = function () {
    };
    __decorate([
        utils_1.Abstract
    ], NavigationCollector.prototype, "addRegion", null);
    __decorate([
        utils_1.defaultConstructor
    ], NavigationCollector.prototype, "NavigationCollector", null);
    NavigationCollector = __decorate([
        utils_1.DartClass
    ], NavigationCollector);
    return NavigationCollector;
}());
exports.NavigationCollector = NavigationCollector;
var NavigationContributor = /** @class */ (function () {
    function NavigationContributor() {
    }
    NavigationContributor.prototype.computeNavigation = function (collector, context, source, offset, length) { throw 'abstract'; };
    NavigationContributor.prototype.NavigationContributor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], NavigationContributor.prototype, "computeNavigation", null);
    __decorate([
        utils_1.defaultConstructor
    ], NavigationContributor.prototype, "NavigationContributor", null);
    NavigationContributor = __decorate([
        utils_1.DartClass
    ], NavigationContributor);
    return NavigationContributor;
}());
exports.NavigationContributor = NavigationContributor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=navigation_core.js.map
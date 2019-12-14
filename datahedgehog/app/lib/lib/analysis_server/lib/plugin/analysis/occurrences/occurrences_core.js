"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var OccurrencesCollector = /** @class */ (function () {
    function OccurrencesCollector() {
    }
    OccurrencesCollector.prototype.addOccurrences = function (occurrences) { throw 'abstract'; };
    OccurrencesCollector.prototype.OccurrencesCollector = function () {
    };
    __decorate([
        utils_1.Abstract
    ], OccurrencesCollector.prototype, "addOccurrences", null);
    __decorate([
        utils_1.defaultConstructor
    ], OccurrencesCollector.prototype, "OccurrencesCollector", null);
    OccurrencesCollector = __decorate([
        utils_1.DartClass
    ], OccurrencesCollector);
    return OccurrencesCollector;
}());
exports.OccurrencesCollector = OccurrencesCollector;
var OccurrencesContributor = /** @class */ (function () {
    function OccurrencesContributor() {
    }
    OccurrencesContributor.prototype.computeOccurrences = function (collector, context, source) { throw 'abstract'; };
    OccurrencesContributor.prototype.OccurrencesContributor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], OccurrencesContributor.prototype, "computeOccurrences", null);
    __decorate([
        utils_1.defaultConstructor
    ], OccurrencesContributor.prototype, "OccurrencesContributor", null);
    OccurrencesContributor = __decorate([
        utils_1.DartClass
    ], OccurrencesContributor);
    return OccurrencesContributor;
}());
exports.OccurrencesContributor = OccurrencesContributor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=occurrences_core.js.map
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
exports.computeOccurrences = function (server, context, source) {
    var collector = new OccurrencesCollectorImpl();
    var contributors = server.serverPlugin.occurrencesContributors;
    for (var _i = 0, contributors_1 = contributors; _i < contributors_1.length; _i++) {
        var contributor = contributors_1[_i];
        try {
            contributor.computeOccurrences(collector, context, source);
        }
        catch (__error__) {
            {
                var stackTrace = new core.DartStackTrace.fromError(__error__);
                var exception = __error__;
                AnalysisEngine.instance.logger.logError("Exception from occurrences contributor: " + contributor.runtimeType, new bare.createInstance(any, null, exception, stackTrace));
            }
        }
    }
    return collector;
};
var OccurrencesCollectorImpl = /** @class */ (function () {
    function OccurrencesCollectorImpl() {
    }
    OccurrencesCollectorImpl_1 = OccurrencesCollectorImpl;
    Object.defineProperty(OccurrencesCollectorImpl.prototype, "allOccurrences", {
        get: function () {
            return this.elementOccurrences.values.toList();
        },
        enumerable: true,
        configurable: true
    });
    OccurrencesCollectorImpl.prototype.addOccurrences = function (current) {
        var element = current.element;
        var existing = this.elementOccurrences.get(element);
        if (existing != null) {
            var offsets = OccurrencesCollectorImpl_1._merge(existing.offsets, current.offsets);
            current = new bare.createInstance(any, null, element, offsets, existing.length);
        }
        this.elementOccurrences.set(element, current);
    };
    OccurrencesCollectorImpl._merge = function (a, b) {
        return (function (_) {
            {
                _.addAll(a);
                _.addAll(b);
                return _;
            }
        })(new core.DartList.literal());
    };
    OccurrencesCollectorImpl.prototype.OccurrencesCollectorImpl = function () {
        this.elementOccurrences = new core.DartMap.literal([]);
    };
    var OccurrencesCollectorImpl_1;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OccurrencesCollectorImpl.prototype, "addOccurrences", null);
    __decorate([
        utils_1.defaultConstructor
    ], OccurrencesCollectorImpl.prototype, "OccurrencesCollectorImpl", null);
    OccurrencesCollectorImpl = OccurrencesCollectorImpl_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], OccurrencesCollectorImpl);
    return OccurrencesCollectorImpl;
}());
exports.OccurrencesCollectorImpl = OccurrencesCollectorImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=occurrences.js.map
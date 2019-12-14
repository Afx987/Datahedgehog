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
exports.computeNavigation = function (server, context, source, offset, length) {
    var collector = new NavigationCollectorImpl();
    var contributors = server.serverPlugin.navigationContributors;
    for (var _i = 0, contributors_1 = contributors; _i < contributors_1.length; _i++) {
        var contributor = contributors_1[_i];
        try {
            contributor.computeNavigation(collector, context, source, offset, length);
        }
        catch (__error__) {
            {
                var stackTrace = new core.DartStackTrace.fromError(__error__);
                var exception = __error__;
                AnalysisEngine.instance.logger.logError("Exception from navigation contributor: " + contributor.runtimeType, new bare.createInstance(any, null, exception, stackTrace));
            }
        }
    }
    collector.createRegions();
    return collector;
};
var NavigationCollectorImpl = /** @class */ (function () {
    function NavigationCollectorImpl() {
    }
    NavigationCollectorImpl.prototype.addRegion = function (offset, length, targetKind, targetLocation) {
        var range = new bare.createInstance(any, null, offset, length);
        var targets = this.regionMap.get(range);
        if (targets == null) {
            targets = new core.DartList.literal();
            this.regionMap.set(range, targets);
        }
        var targetIndex = this._addTarget(targetKind, targetLocation);
        targets.add(targetIndex);
    };
    NavigationCollectorImpl.prototype.createRegions = function () {
        var _this = this;
        this.regionMap.forEach(function (range, targets) {
            var region = new bare.createInstance(any, null, range.offset, range.length, targets);
            _this.regions.add(region);
        });
        this.regions.sort(function (a, b) {
            return utils_1.op(utils_1.Op.MINUS, a.offset, b.offset);
        });
    };
    NavigationCollectorImpl.prototype._addFile = function (file) {
        var index = this.fileMap.get(file);
        if (index == null) {
            index = this.files.length;
            this.files.add(file);
            this.fileMap.set(file, index);
        }
        return index;
    };
    NavigationCollectorImpl.prototype._addTarget = function (kind, location) {
        var pair = new bare.createInstance(any, null, kind, location);
        var index = this.targetMap.get(pair);
        if (index == null) {
            var file = location.file;
            var fileIndex = this._addFile(file);
            index = this.targets.length;
            var target = new bare.createInstance(any, null, kind, fileIndex, location.offset, location.length, location.startLine, location.startColumn);
            this.targets.add(target);
            this.targetMap.set(pair, index);
        }
        return index;
    };
    NavigationCollectorImpl.prototype.NavigationCollectorImpl = function () {
        this.regions = new core.DartList.literal();
        this.regionMap = new core.DartHashMap();
        this.targets = new core.DartList.literal();
        this.targetMap = new core.DartHashMap();
        this.files = new core.DartList.literal();
        this.fileMap = new core.DartHashMap();
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NavigationCollectorImpl.prototype, "addRegion", null);
    __decorate([
        utils_1.defaultConstructor
    ], NavigationCollectorImpl.prototype, "NavigationCollectorImpl", null);
    NavigationCollectorImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], NavigationCollectorImpl);
    return NavigationCollectorImpl;
}());
exports.NavigationCollectorImpl = NavigationCollectorImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=navigation.js.map
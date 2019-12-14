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
var ResultCollector = /** @class */ (function () {
    function ResultCollector(serverId, _namedArguments) {
    }
    ResultCollector.prototype.ResultCollector = function (serverId, _namedArguments) {
        var predicate = Object.assign({}, _namedArguments).predicate;
        this.resultMap = new core.DartMap.literal([]);
        this._shouldCollect = predicate;
        this.serverId = serverId;
    };
    ResultCollector.prototype.clearResultsForFile = function (filePath) {
        (function (_29_) { return (!!_29_) ? _29_.clear() : null; })(this.resultMap.get(filePath));
    };
    ResultCollector.prototype.clearResultsFromPlugin = function (pluginId) {
        for (var _i = 0, _a = this.resultMap.values; _i < _a.length; _i++) {
            var partialResults = _a[_i];
            partialResults.remove(pluginId);
        }
    };
    ResultCollector.prototype.getResults = function (filePath) {
        var partialResultMap = this.resultMap.get(filePath);
        if (partialResultMap == null) {
            return new core.DartList.literal();
        }
        var values = partialResultMap.values.toList();
        var serverContributions = partialResultMap.get(this.serverId);
        if (serverContributions != null && values.remove(serverContributions)) {
            values.insert(0, serverContributions);
        }
        return values;
    };
    ResultCollector.prototype.isCollectingFor = function (filePath) {
        if (this._shouldCollect != null) {
            return this._shouldCollect(filePath);
        }
        return this.resultMap.containsKey(filePath);
    };
    ResultCollector.prototype.putResults = function (filePath, pluginId, partialResults) {
        var fileResults = this.resultMap.get(filePath);
        if (fileResults == null) {
            if (this._shouldCollect != null && this._shouldCollect(filePath)) {
                this.resultMap.set(filePath, new core.DartMap.literal([
                    [pluginId, partialResults]
                ]));
            }
        }
        else {
            fileResults.set(pluginId, partialResults);
        }
    };
    ResultCollector.prototype.startCollectingFor = function (filePath) {
        this.resultMap.putIfAbsent(filePath, function () {
            return new core.DartMap.literal([]);
        });
    };
    ResultCollector.prototype.stopCollectingFor = function (filePath) {
        this.resultMap.remove(filePath);
    };
    __decorate([
        utils_1.defaultConstructor
    ], ResultCollector.prototype, "ResultCollector", null);
    ResultCollector = __decorate([
        utils_1.DartClass
    ], ResultCollector);
    return ResultCollector;
}());
exports.ResultCollector = ResultCollector;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=result_collector.js.map
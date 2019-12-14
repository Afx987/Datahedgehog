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
var lib3 = require("@dart2ts.packages/analyzer_plugin/lib/protocol/protocol");
var lib4 = require("@dart2ts.packages/analysis_server/lib/protocol/protocol_generated");
var NotificationManager = /** @class */ (function () {
    function NotificationManager(channel, provider) {
    }
    NotificationManager_1 = NotificationManager;
    Object.defineProperty(NotificationManager, "serverId", {
        get: function () {
            if (this.__$serverId === undefined) {
                this.__$serverId = 'server';
            }
            return this.__$serverId;
        },
        enumerable: true,
        configurable: true
    });
    NotificationManager.prototype.NotificationManager = function (channel, provider) {
        this.includedPaths = new core.DartList.literal();
        this.excludedPaths = new core.DartList.literal();
        this.currentSubscriptions = new core.DartMap.literal([]);
        this.converter = new bare.createInstance(any, null);
        this.merger = new bare.createInstance(any, null);
        this.channel = channel;
        this.provider = provider;
        this.errors = new bare.createInstance(any, null, NotificationManager_1.serverId, {
            predicate: this._isIncluded.bind(this)
        });
        this.folding = new bare.createInstance(any, null, NotificationManager_1.serverId);
        this.highlights = new bare.createInstance(any, null, NotificationManager_1.serverId);
        this.navigation = new bare.createInstance(any, null, NotificationManager_1.serverId);
        this.occurrences = new bare.createInstance(any, null, NotificationManager_1.serverId);
        this.outlines = new bare.createInstance(any, null, NotificationManager_1.serverId);
    };
    NotificationManager.prototype.handlePluginNotification = function (pluginId, notification) {
        var event = notification.event;
        switch (event) {
            case lib3.ANALYSIS_NOTIFICATION_ERRORS:
                var params = new bare.createInstance(any, "fromNotification", notification);
                this.recordAnalysisErrors(pluginId, params.file, params.errors);
                break;
            case lib3.ANALYSIS_NOTIFICATION_FOLDING:
                var params = new bare.createInstance(any, "fromNotification", notification);
                this.recordFoldingRegions(pluginId, params.file, params.regions);
                break;
            case lib3.ANALYSIS_NOTIFICATION_HIGHLIGHTS:
                var params = new bare.createInstance(any, "fromNotification", notification);
                this.recordHighlightRegions(pluginId, params.file, params.regions);
                break;
            case lib3.ANALYSIS_NOTIFICATION_NAVIGATION:
                var params = new bare.createInstance(any, "fromNotification", notification);
                this.recordNavigationParams(pluginId, params.file, this.converter.convertAnalysisNavigationParams(params));
                break;
            case lib3.ANALYSIS_NOTIFICATION_OCCURRENCES:
                var params = new bare.createInstance(any, "fromNotification", notification);
                this.recordOccurrences(pluginId, params.file, params.occurrences);
                break;
            case lib3.ANALYSIS_NOTIFICATION_OUTLINE:
                var params = new bare.createInstance(any, "fromNotification", notification);
                this.recordOutlines(pluginId, params.file, params.outline);
                break;
            case lib3.PLUGIN_NOTIFICATION_ERROR:
                var params = new bare.createInstance(any, "fromNotification", notification);
                this.channel.sendNotification(new bare.createInstance(any, null, params.isFatal, params.message, params.stackTrace).toNotification());
                break;
        }
    };
    NotificationManager.prototype.recordAnalysisErrors = function (pluginId, filePath, errorData) {
        if (this.errors.isCollectingFor(filePath)) {
            this.errors.putResults(filePath, pluginId, errorData);
            var unmergedErrors = this.errors.getResults(filePath);
            var mergedErrors = this.merger.mergeAnalysisErrors(unmergedErrors);
            this.channel.sendNotification(new bare.createInstance(any, null, filePath, mergedErrors).toNotification());
        }
    };
    NotificationManager.prototype.recordFoldingRegions = function (pluginId, filePath, foldingData) {
        if (this.folding.isCollectingFor(filePath)) {
            this.folding.putResults(filePath, pluginId, foldingData);
            var unmergedFolding = this.folding.getResults(filePath);
            var mergedFolding = this.merger.mergeFoldingRegions(unmergedFolding);
            this.channel.sendNotification(new bare.createInstance(any, null, filePath, mergedFolding).toNotification());
        }
    };
    NotificationManager.prototype.recordHighlightRegions = function (pluginId, filePath, highlightData) {
        if (this.highlights.isCollectingFor(filePath)) {
            this.highlights.putResults(filePath, pluginId, highlightData);
            var unmergedHighlights = this.highlights.getResults(filePath);
            var mergedHighlights = this.merger.mergeHighlightRegions(unmergedHighlights);
            this.channel.sendNotification(new bare.createInstance(any, null, filePath, mergedHighlights).toNotification());
        }
    };
    NotificationManager.prototype.recordNavigationParams = function (pluginId, filePath, navigationData) {
        if (this.navigation.isCollectingFor(filePath)) {
            this.navigation.putResults(filePath, pluginId, navigationData);
            var unmergedNavigations = this.navigation.getResults(filePath);
            var mergedNavigations = this.merger.mergeNavigation(unmergedNavigations);
            this.channel.sendNotification(mergedNavigations.toNotification());
        }
    };
    NotificationManager.prototype.recordOccurrences = function (pluginId, filePath, occurrencesData) {
        if (this.occurrences.isCollectingFor(filePath)) {
            this.occurrences.putResults(filePath, pluginId, occurrencesData);
            var unmergedOccurrences = this.occurrences.getResults(filePath);
            var mergedOccurrences = this.merger.mergeOccurrences(unmergedOccurrences);
            this.channel.sendNotification(new bare.createInstance(any, null, filePath, mergedOccurrences).toNotification());
        }
    };
    NotificationManager.prototype.recordOutlines = function (pluginId, filePath, outlineData) {
        if (this.outlines.isCollectingFor(filePath)) {
            this.outlines.putResults(filePath, pluginId, outlineData);
            var unmergedOutlines = this.outlines.getResults(filePath);
            var mergedOutlines = this.merger.mergeOutline(unmergedOutlines);
            this.channel.sendNotification(new bare.createInstance(any, null, filePath, lib4.FileKind.LIBRARY, mergedOutlines[0]).toNotification());
        }
    };
    NotificationManager.prototype.setAnalysisRoots = function (included, excluded) {
        this.includedPaths = included;
        this.excludedPaths = excluded;
    };
    NotificationManager.prototype.setSubscriptions = function (newSubscriptions) {
        var _this = this;
        var collectorFor = function (service) {
            switch (service) {
                case lib4.AnalysisService.FOLDING:
                    return _this.folding;
                case lib4.AnalysisService.HIGHLIGHTS:
                    return _this.highlights;
                case lib4.AnalysisService.NAVIGATION:
                    return _this.navigation;
                case lib4.AnalysisService.OCCURRENCES:
                    return _this.occurrences;
                case lib4.AnalysisService.OUTLINE:
                    return _this.outlines;
            }
            return null;
        };
        var services = new core.DartHashSet();
        services.addAll(this.currentSubscriptions.keys);
        services.addAll(newSubscriptions.keys);
        services.forEach(function (service) {
            var collector = collectorFor(service);
            if (collector != null) {
                var currentPaths_1 = _this.currentSubscriptions.get(service);
                var newPaths_1 = newSubscriptions.get(service);
                if (utils_1.op(utils_1.Op.EQUALS, currentPaths_1, null)) {
                    if (utils_1.op(utils_1.Op.EQUALS, newPaths_1, null)) {
                        return;
                    }
                    newPaths_1.forEach(function (filePath) {
                        collector.startCollectingFor(filePath);
                    });
                }
                else if (utils_1.op(utils_1.Op.EQUALS, newPaths_1, null)) {
                    currentPaths_1.forEach(function (filePath) {
                        collector.stopCollectingFor(filePath);
                    });
                }
                else {
                    newPaths_1.forEach(function (filePath) {
                        if (!currentPaths_1.contains(filePath)) {
                            collector.startCollectingFor(filePath);
                        }
                    });
                    currentPaths_1.forEach(function (filePath) {
                        if (!newPaths_1.contains(filePath)) {
                            collector.stopCollectingFor(filePath);
                        }
                    });
                }
            }
        });
        this.currentSubscriptions = newSubscriptions;
    };
    NotificationManager.prototype._isIncluded = function (path) {
        var _this = this;
        var isIncluded = function () {
            for (var _i = 0, _a = _this.includedPaths; _i < _a.length; _i++) {
                var includedPath = _a[_i];
                if (_this.provider.pathContext.isWithin(includedPath, path) || _this.provider.pathContext.equals(includedPath, path)) {
                    return true;
                }
            }
            return false;
        };
        var isExcluded = function () {
            for (var _i = 0, _a = _this.excludedPaths; _i < _a.length; _i++) {
                var excludedPath = _a[_i];
                if (_this.provider.pathContext.isWithin(excludedPath, path)) {
                    return true;
                }
            }
            return false;
        };
        return isIncluded() && !isExcluded();
    };
    var NotificationManager_1;
    __decorate([
        utils_1.defaultConstructor
    ], NotificationManager.prototype, "NotificationManager", null);
    NotificationManager = NotificationManager_1 = __decorate([
        utils_1.DartClass
    ], NotificationManager);
    return NotificationManager;
}());
exports.NotificationManager = NotificationManager;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=notification_manager.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/single_context_manager.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var math = require("@dart2ts/dart/math");
var SingleContextManager = /** @class */ (function () {
    function SingleContextManager(resourceProvider, sdkManager, packageResolverProvider, analyzedFilesGlobs, defaultContextOptions) {
    }
    SingleContextManager_1 = SingleContextManager;
    SingleContextManager.prototype.SingleContextManager = function (resourceProvider, sdkManager, packageResolverProvider, analyzedFilesGlobs, defaultContextOptions) {
        this.includedPaths = new core.DartList.literal();
        this.excludedPaths = new core.DartList.literal();
        this.packageRoots = new core.DartMap.literal([]);
        this.normalizedPackageRoots = new core.DartMap.literal([]);
        this.watchSubscriptions = new core.DartMap();
        this.resourceProvider = resourceProvider;
        this.sdkManager = sdkManager;
        this.packageResolverProvider = packageResolverProvider;
        this.analyzedFilesGlobs = analyzedFilesGlobs;
        this.defaultContextOptions = defaultContextOptions;
        this.pathContext = this.resourceProvider.pathContext;
    };
    Object.defineProperty(SingleContextManager.prototype, "analysisContexts", {
        get: function () {
            return utils_1.op(utils_1.Op.EQUALS, this.context, null) ? new core.DartList.literal() : new core.DartList.literal(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleContextManager.prototype, "driverMap", {
        get: function () {
            return new core.DartMap.literal([
                [this.contextFolder, this.analysisDriver]
            ]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleContextManager.prototype, "folderMap", {
        get: function () {
            return new core.DartMap.literal([
                [this.contextFolder, this.context]
            ]);
        },
        enumerable: true,
        configurable: true
    });
    SingleContextManager.prototype.contextsInAnalysisRoot = function (analysisRoot) {
        if (utils_1.op(utils_1.Op.EQUALS, this.context, null) || !this.includedPaths.contains(analysisRoot.path)) {
            return new core.DartList.literal();
        }
        return new core.DartList.literal(this.context);
    };
    SingleContextManager.prototype.getContextFolderFor = function (path) {
        if (this.isInAnalysisRoot(path)) {
            return this.contextFolder;
        }
        return null;
    };
    SingleContextManager.prototype.getContextFor = function (path) {
        if (utils_1.op(utils_1.Op.EQUALS, this.context, null)) {
            return null;
        }
        else if (this._isContainedIn(this.includedPaths, path)) {
            return this.context;
        }
        return null;
    };
    SingleContextManager.prototype.getDriverFor = function (path) {
        throw new core.UnimplementedError('Unexpected invocation of getDriverFor in SingleContextManager');
    };
    SingleContextManager.prototype.getDriversInAnalysisRoot = function (analysisRoot) {
        throw new core.UnimplementedError('Unexpected invocation of getDriversInAnalysisRoot in SingleContextManager');
    };
    SingleContextManager.prototype.isIgnored = function (path) {
        return !this._isContainedIn(this.includedPaths, path) || this._isExcludedPath(path);
    };
    SingleContextManager.prototype.isInAnalysisRoot = function (path) {
        return this._isContainedIn(this.includedPaths, path) && !this._isContainedIn(this.excludedPaths, path);
    };
    SingleContextManager.prototype.refresh = function (roots) {
        if (this.context != null) {
            this.callbacks.removeContext(this.contextFolder, null);
            this.context.dispose();
            this.context = null;
            this.contextFolder = null;
            this._cancelCurrentWatchSubscriptions();
            this.setRoots(this.includedPaths, this.excludedPaths, this.packageRoots);
        }
    };
    SingleContextManager.prototype.setRoots = function (includedPaths, excludedPaths, packageRoots) {
        includedPaths = this._nonOverlappingPaths(includedPaths);
        excludedPaths = this._nonOverlappingPaths(excludedPaths);
        this.packageRoots = packageRoots;
        this._updateNormalizedPackageRoots();
        {
            var contextPath = this._commonPrefix(includedPaths);
            var contextFolder = this.resourceProvider.getFolder(contextPath);
            if (contextFolder != this.contextFolder) {
                if (this.context != null) {
                    this.callbacks.moveContext(this.contextFolder, contextFolder);
                }
                this.contextFolder = contextFolder;
            }
        }
        {
            var newSubscriptions = new core.DartMap();
            for (var _i = 0, includedPaths_1 = includedPaths; _i < includedPaths_1.length; _i++) {
                var includedPath = includedPaths_1[_i];
                var resource = this.resourceProvider.getResource(includedPath);
                if (_common_1.is(resource, any)) {
                    var subscription = this.watchSubscriptions.remove(includedPath);
                    if (utils_1.op(utils_1.Op.EQUALS, subscription, null)) {
                        subscription = resource.changes.listen(this._handleWatchEvent.bind(this));
                    }
                    newSubscriptions.set(includedPath, subscription);
                }
                this._cancelCurrentWatchSubscriptions();
                this.watchSubscriptions = newSubscriptions;
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, this.context, null)) {
            this.context = this.callbacks.addContext(this.contextFolder, this.defaultContextOptions);
            var changeSet = this._buildChangeSet({
                added: this._includedFiles(includedPaths, excludedPaths)
            });
            this.callbacks.applyChangesToContext(this.contextFolder, changeSet);
        }
        else {
            var oldFiles = this._includedFiles(this.includedPaths, this.excludedPaths);
            var newFiles = this._includedFiles(includedPaths, excludedPaths);
            var changeSet = this._buildChangeSet({
                added: SingleContextManager_1._diff(newFiles, oldFiles), removed: SingleContextManager_1._diff(oldFiles, newFiles)
            });
            this.callbacks.applyChangesToContext(this.contextFolder, changeSet);
        }
        this.includedPaths = includedPaths;
        this.excludedPaths = excludedPaths;
    };
    SingleContextManager.prototype._addFilesInResource = function (addedFiles, resource, excludedPaths) {
        if (this._isImplicitlyExcludedResource(resource)) {
            return;
        }
        var path = resource.path;
        if (this._isEqualOrWithinAny(excludedPaths, path)) {
            return;
        }
        if (_common_1.is(resource, any)) {
            if (this._matchesAnyAnalyzedFilesGlob(path) && resource.exists) {
                addedFiles.add(resource);
            }
        }
        else if (_common_1.is(resource, any)) {
            for (var _i = 0, _a = SingleContextManager_1._getChildrenSafe(resource); _i < _a.length; _i++) {
                var child = _a[_i];
                this._addFilesInResource(addedFiles, child, excludedPaths);
            }
        }
    };
    SingleContextManager.prototype._buildChangeSet = function (_namedArguments) {
        var _a = Object.assign({}, _namedArguments), added = _a.added, removed = _a.removed;
        var changeSet = new bare.createInstance(any, null);
        if (added != null) {
            for (var _i = 0, added_1 = added; _i < added_1.length; _i++) {
                var file = added_1[_i];
                var source = SingleContextManager_1.createSourceInContext(this.context, file);
                changeSet.addedSource(source);
            }
        }
        if (removed != null) {
            for (var _b = 0, removed_1 = removed; _b < removed_1.length; _b++) {
                var file = removed_1[_b];
                var source = SingleContextManager_1.createSourceInContext(this.context, file);
                changeSet.removedSource(source);
            }
        }
        return changeSet;
    };
    SingleContextManager.prototype._cancelCurrentWatchSubscriptions = function () {
        for (var _i = 0, _a = this.watchSubscriptions.values; _i < _a.length; _i++) {
            var subscription = _a[_i];
            subscription.cancel();
        }
        this.watchSubscriptions.clear();
    };
    SingleContextManager.prototype._commonPrefix = function (paths) {
        if (paths.isEmpty) {
            return '';
        }
        var left = this.pathContext.split(paths[0]);
        var count = left.length;
        for (var i = 1; i < paths.length; i++) {
            var right = this.pathContext.split(paths[i]);
            count = SingleContextManager_1._commonComponents(left, count, right);
        }
        return this.pathContext.joinAll(left.sublist(0, count));
    };
    SingleContextManager.prototype._existingResources = function (pathList) {
        var resources = new core.DartList.literal();
        for (var _i = 0, pathList_1 = pathList; _i < pathList_1.length; _i++) {
            var path = pathList_1[_i];
            var resource = this.resourceProvider.getResource(path);
            if (_common_1.is(resource, any)) {
                resources.add(resource);
            }
            else if (!resource.exists) {
            }
            else if (_common_1.is(resource, any)) {
                resources.add(resource);
            }
            else {
                throw new core.UnimplementedError(path + " is not a folder. " + 'Only support for file and folder analysis is implemented.');
            }
        }
        return resources;
    };
    SingleContextManager.prototype._handleWatchEvent = function (event) {
        var path = event.path;
        if (this._isExcludedPath(path)) {
            return;
        }
        if (!this._isContainedIn(this.includedPaths, path)) {
            return;
        }
        switch (event.type) {
            case ChangeType.ADD:
                var resource = this.resourceProvider.getResource(path);
                if (_common_1.is(resource, any)) {
                    if (this._matchesAnyAnalyzedFilesGlob(path)) {
                        this.callbacks.applyChangesToContext(this.contextFolder, this._buildChangeSet({
                            added: new core.DartList.literal(resource)
                        }));
                    }
                }
                break;
            case ChangeType.REMOVE:
                var sources = this.context.getSourcesWithFullName(path);
                if (!sources.isEmpty) {
                    var changeSet = new bare.createInstance(any, null);
                    sources.forEach(changeSet.removedSource);
                    this.callbacks.applyChangesToContext(this.contextFolder, changeSet);
                }
                break;
            case ChangeType.MODIFY:
                var sources = this.context.getSourcesWithFullName(path);
                if (!sources.isEmpty) {
                    var changeSet = new bare.createInstance(any, null);
                    sources.forEach(changeSet.changedSource);
                    this.callbacks.applyChangesToContext(this.contextFolder, changeSet);
                }
                break;
        }
    };
    SingleContextManager.prototype._includedFiles = function (includedPaths, excludedPaths) {
        var includedResources = this._existingResources(includedPaths);
        var includedFiles = new core.DartList.literal();
        for (var _i = 0, includedResources_1 = includedResources; _i < includedResources_1.length; _i++) {
            var resource = includedResources_1[_i];
            this._addFilesInResource(includedFiles, resource, excludedPaths);
        }
        return includedFiles;
    };
    SingleContextManager.prototype._isContainedIn = function (pathList, path) {
        for (var _i = 0, pathList_2 = pathList; _i < pathList_2.length; _i++) {
            var pathInList = pathList_2[_i];
            if (this._isEqualOrWithin(pathInList, path)) {
                return true;
            }
        }
        return false;
    };
    SingleContextManager.prototype._isEqualOrWithin = function (parent, child) {
        return child == parent || this.pathContext.isWithin(parent, child);
    };
    SingleContextManager.prototype._isEqualOrWithinAny = function (parents, child) {
        for (var _i = 0, parents_1 = parents; _i < parents_1.length; _i++) {
            var parent_1 = parents_1[_i];
            if (this._isEqualOrWithin(parent_1, child)) {
                return true;
            }
        }
        return false;
    };
    SingleContextManager.prototype._isExcludedPath = function (path) {
        var parts = this.resourceProvider.pathContext.split(path);
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (new core.DartString(part).startsWith('.')) {
                return true;
            }
        }
        if (this._isEqualOrWithinAny(this.excludedPaths, path)) {
            return true;
        }
        return false;
    };
    SingleContextManager.prototype._isImplicitlyExcludedResource = function (resource) {
        var shortName = resource.shortName;
        if (new core.DartString(shortName).startsWith('.')) {
            return true;
        }
        return false;
    };
    SingleContextManager.prototype._matchesAnyAnalyzedFilesGlob = function (path) {
        for (var _i = 0, _a = this.analyzedFilesGlobs; _i < _a.length; _i++) {
            var glob = _a[_i];
            if (glob.matches(path)) {
                return true;
            }
        }
        return false;
    };
    SingleContextManager.prototype._nonOverlappingPaths = function (pathList) {
        var sortedPaths = new core.DartList.from(pathList);
        sortedPaths.sort(function (a, b) {
            return new core.DartString(a).length - new core.DartString(b).length;
        });
        var pathCount = sortedPaths.length;
        for (var i = pathCount - 1; i > 0; i--) {
            var path = sortedPaths[i];
            for (var j = 0; j < i; j++) {
                if (this._isEqualOrWithin(path, sortedPaths[j])) {
                    sortedPaths.removeAt(i);
                    break;
                }
            }
        }
        return sortedPaths;
    };
    SingleContextManager.prototype._updateNormalizedPackageRoots = function () {
        var _this = this;
        this.normalizedPackageRoots = new core.DartMap.literal([]);
        this.packageRoots.forEach(function (sourcePath, targetPath) {
            var resource = _this.resourceProvider.getResource(sourcePath);
            if (_common_1.is(resource, any)) {
                _this.normalizedPackageRoots.set(resource.path, targetPath);
            }
        });
    };
    SingleContextManager.createSourceInContext = function (context, file) {
        var source = file.createSource();
        if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
            return source;
        }
        var uri = context.sourceFactory.restoreUri(source);
        return file.createSource(uri);
    };
    SingleContextManager._commonComponents = function (left, count, right) {
        var max = math.min(count, right.length);
        for (var i = 0; i < max; i++) {
            if (left[i] != right[i]) {
                return i;
            }
        }
        return max;
    };
    SingleContextManager._diff = function (left, right) {
        var diff = new core.DartList.from(left);
        for (var _i = 0, right_1 = right; _i < right_1.length; _i++) {
            var file = right_1[_i];
            diff.remove(file);
        }
        return diff;
    };
    SingleContextManager._getChildrenSafe = function (folder) {
        try {
            return folder.getChildren();
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
                return new core.DartList.literal();
            }
        }
    };
    var SingleContextManager_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "callbacks", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], SingleContextManager.prototype, "SingleContextManager", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "analysisContexts", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "driverMap", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "folderMap", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "contextsInAnalysisRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "getContextFolderFor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "getContextFor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "getDriverFor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "getDriversInAnalysisRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "isIgnored", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "isInAnalysisRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "refresh", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], SingleContextManager.prototype, "setRoots", null);
    SingleContextManager = SingleContextManager_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], SingleContextManager);
    return SingleContextManager;
}());
exports.SingleContextManager = SingleContextManager;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=single_context_manager.js.map
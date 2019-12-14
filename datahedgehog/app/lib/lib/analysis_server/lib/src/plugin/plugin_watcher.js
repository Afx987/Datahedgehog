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
var PluginWatcher = /** @class */ (function () {
    function PluginWatcher(resourceProvider, manager) {
    }
    PluginWatcher.prototype.PluginWatcher = function (resourceProvider, manager) {
        this._driverInfo = new core.DartMap.literal([]);
        this._locator = new bare.createInstance(any, null, resourceProvider);
        this.resourceProvider = resourceProvider;
        this.manager = manager;
    };
    PluginWatcher.prototype.addedDriver = function (driver, contextRoot) {
        var _this = this;
        this._driverInfo.set(driver, new _DriverInfo(contextRoot, new core.DartList.literal(contextRoot.root, this._getSdkPath(driver))));
        driver.fsState.knownFilesSetChanges.listen(function (change) {
            var addedPluginPaths = _this._checkPluginsFor(driver, change);
            for (var _i = 0, addedPluginPaths_1 = addedPluginPaths; _i < addedPluginPaths_1.length; _i++) {
                var pluginPath = addedPluginPaths_1[_i];
                _this.manager.addPluginToContextRoot(contextRoot, pluginPath);
            }
        });
    };
    PluginWatcher.prototype.removedDriver = function (driver) {
        var info = this._driverInfo.get(driver);
        if (utils_1.op(utils_1.Op.EQUALS, info, null)) {
            throw new core.StateError('Cannot remove a driver that was not added');
        }
        this.manager.removedContextRoot(info.contextRoot);
        this._driverInfo.remove(driver);
    };
    PluginWatcher.prototype._checkPluginsFor = function (driver, change) {
        var _this = this;
        var info = this._driverInfo.get(driver);
        if (utils_1.op(utils_1.Op.EQUALS, info, null)) {
            return new core.DartList.literal();
        }
        var packageRoots = info.packageRoots;
        var fileSystemState = driver.fsState;
        var context = this.resourceProvider.absolutePathContext;
        var isInRoot = function (path) {
            for (var _i = 0, packageRoots_1 = packageRoots; _i < packageRoots_1.length; _i++) {
                var root = packageRoots_1[_i];
                if (context.isWithin(root, path)) {
                    return true;
                }
            }
            return false;
        };
        var getPackageRoot = function (path, uri) {
            var segments = uri.pathSegments.toList();
            segments[0] = 'lib';
            var suffix = _this.resourceProvider.pathContext.joinAll(segments);
            return new core.DartString(path).substring(0, new core.DartString(path).length - new core.DartString(suffix).length - 1);
        };
        var addedPluginPaths = new core.DartList.literal();
        for (var _i = 0, _a = change.added; _i < _a.length; _i++) {
            var path = _a[_i];
            var state = fileSystemState.getFileForPath(path);
            if (!isInRoot(path)) {
                var uri = state.uri;
                if (PackageMapUriResolver.isPackageUri(uri)) {
                    var packageRoot = getPackageRoot(path, uri);
                    packageRoots.add(packageRoot);
                    var pluginPath = this._locator.findPlugin(packageRoot);
                    if (pluginPath != null) {
                        addedPluginPaths.add(pluginPath);
                    }
                }
            }
        }
        return addedPluginPaths;
    };
    PluginWatcher.prototype._getSdkPath = function (driver) {
        var context = this.resourceProvider.absolutePathContext;
        var sdkRoot = driver.sourceFactory.forUri('dart:core').fullName;
        while (context.basename(sdkRoot) != 'lib') {
            var parent_1 = context.dirname(sdkRoot);
            if (parent_1 == sdkRoot) {
                break;
            }
            sdkRoot = parent_1;
        }
        return sdkRoot;
    };
    __decorate([
        utils_1.defaultConstructor
    ], PluginWatcher.prototype, "PluginWatcher", null);
    PluginWatcher = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], PluginWatcher);
    return PluginWatcher;
}());
exports.PluginWatcher = PluginWatcher;
var _DriverInfo = /** @class */ (function () {
    function _DriverInfo(contextRoot, packageRoots) {
    }
    _DriverInfo.prototype._DriverInfo = function (contextRoot, packageRoots) {
        this.contextRoot = contextRoot;
        this.packageRoots = packageRoots;
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DriverInfo.prototype, "_DriverInfo", null);
    _DriverInfo = __decorate([
        utils_1.DartClass
    ], _DriverInfo);
    return _DriverInfo;
}());
exports._DriverInfo = _DriverInfo;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=plugin_watcher.js.map
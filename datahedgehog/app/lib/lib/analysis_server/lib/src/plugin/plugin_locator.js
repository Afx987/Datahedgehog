"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/plugin_locator.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var PluginLocator = /** @class */ (function () {
    function PluginLocator(resourceProvider) {
    }
    PluginLocator_1 = PluginLocator;
    Object.defineProperty(PluginLocator, "analysisPluginKey", {
        get: function () {
            if (this.__$analysisPluginKey === undefined) {
                this.__$analysisPluginKey = 'analysis_plugin';
            }
            return this.__$analysisPluginKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginLocator, "defaultPluginFolderName", {
        get: function () {
            if (this.__$defaultPluginFolderName === undefined) {
                this.__$defaultPluginFolderName = 'analysis_plugin';
            }
            return this.__$defaultPluginFolderName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginLocator, "pubspecFileName", {
        get: function () {
            if (this.__$pubspecFileName === undefined) {
                this.__$pubspecFileName = 'pubspec.yaml';
            }
            return this.__$pubspecFileName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginLocator, "toolsFolderName", {
        get: function () {
            if (this.__$toolsFolderName === undefined) {
                this.__$toolsFolderName = 'tools';
            }
            return this.__$toolsFolderName;
        },
        enumerable: true,
        configurable: true
    });
    PluginLocator.prototype.PluginLocator = function (resourceProvider) {
        this.pluginMap = new core.DartMap.literal([]);
        this.resourceProvider = resourceProvider;
    };
    PluginLocator.prototype.findPlugin = function (packageRoot) {
        var _this = this;
        return this.pluginMap.putIfAbsent(packageRoot, function () {
            return _this._findPlugin(packageRoot);
        });
    };
    PluginLocator.prototype._findPlugin = function (packageRoot) {
        var packageFolder = this.resourceProvider.getFolder(packageRoot);
        var pubspecFile = packageFolder.getChildAssumingFile(PluginLocator_1.pubspecFileName);
        if (pubspecFile.exists) {
            try {
                var document_1 = loadYamlDocument(pubspecFile.readAsStringSync(), {
                    sourceUrl: pubspecFile.toUri()
                });
                var contents = document_1.contents;
                if (_common_1.is(contents, any)) {
                    var pluginPath = utils_1.op(utils_1.Op.INDEX, contents, PluginLocator_1.analysisPluginKey);
                    if (pluginPath != null) {
                        var pluginFolder_1 = packageFolder.getChildAssumingFolder(pluginPath);
                        if (pluginFolder_1.exists) {
                            return pluginFolder_1.path;
                        }
                    }
                }
            }
            catch (__error__) {
                {
                    var exception = __error__;
                }
            }
        }
        var pluginFolder = packageFolder.getChildAssumingFolder(PluginLocator_1.toolsFolderName).getChildAssumingFolder(PluginLocator_1.defaultPluginFolderName);
        if (pluginFolder.exists) {
            return pluginFolder.path;
        }
        return null;
    };
    var PluginLocator_1;
    __decorate([
        utils_1.defaultConstructor
    ], PluginLocator.prototype, "PluginLocator", null);
    PluginLocator = PluginLocator_1 = __decorate([
        utils_1.DartClass
    ], PluginLocator);
    return PluginLocator;
}());
exports.PluginLocator = PluginLocator;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=plugin_locator.js.map
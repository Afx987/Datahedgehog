"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/context_manager.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var convert = require("@dart2ts/dart/convert");
var lib6 = require("@dart2ts/dart/uri");
var ContextInfo = /** @class */ (function () {
    function ContextInfo(contextManager, parent, folder, packagespecFile, packageRoot, disposition) {
    }
    ContextInfo.prototype.ContextInfo = function (contextManager, parent, folder, packagespecFile, packageRoot, disposition) {
        this.children = new core.DartList.literal();
        this._dependencies = new core.DartSet();
        this.sources = new core.DartHashMap();
        this.folder = folder;
        this.pathFilter = new bare.createInstance(any, null, folder.path, null, contextManager.resourceProvider.pathContext);
        this.parent = parent;
        this.packageRoot = packageRoot;
        this.disposition = disposition;
        this.packageDescriptionPath = packagespecFile.path;
        this.parent.children.add(this);
    };
    ContextInfo.prototype._root = function () {
        this.children = new core.DartList.literal();
        this._dependencies = new core.DartSet();
        this.sources = new core.DartHashMap();
        this.folder = null;
        this.pathFilter = null;
        this.packageRoot = null;
        this.disposition = null;
    };
    Object.defineProperty(ContextInfo.prototype, "descendants", {
        get: function () {
            var _this = this;
            return core.iter(function () { return (function () {
                var _i, _a, child;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _i = 0, _a = this.children;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            child = _a[_i];
                            return [4 /*yield*/, child];
                        case 2:
                            _b.sent();
                            return [5 /*yield**/, __values(child.descendants)];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/];
                    }
                });
            }).call(_this); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextInfo.prototype, "isTopLevel", {
        get: function () {
            return utils_1.op(utils_1.Op.EQUALS, this.parent.parent, null);
        },
        enumerable: true,
        configurable: true
    });
    ContextInfo.prototype.excludes = function (path) {
        return this.children.any(function (child) {
            return child.folder.contains(path);
        });
    };
    ContextInfo.prototype.excludesResource = function (resource) {
        return this.excludes(resource.path);
    };
    ContextInfo.prototype.findChildInfoFor = function (path) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var info = _a[_i];
            if (info.folder.isOrContains(path)) {
                return info;
            }
        }
        return null;
    };
    ContextInfo.prototype.hasDependency = function (path) {
        return this._dependencies.contains(path);
    };
    ContextInfo.prototype.ignored = function (path) {
        return this.pathFilter.ignored(path);
    };
    ContextInfo.prototype.isPathToPackageDescription = function (path) {
        return path == this.packageDescriptionPath;
    };
    ContextInfo.prototype.setDependencies = function (newDependencies) {
        this._dependencies = newDependencies.toSet();
    };
    ContextInfo.prototype._managesOrHasChildThatManages = function (path) {
        if (utils_1.op(utils_1.Op.EQUALS, this.parent, null)) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child._managesOrHasChildThatManages(path)) {
                    return true;
                }
            }
            return false;
        }
        else {
            if (!this.folder.isOrContains(path)) {
                return false;
            }
            for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
                var child = _c[_b];
                if (child._managesOrHasChildThatManages(path)) {
                    return true;
                }
            }
            return !this.pathFilter.ignored(path);
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], ContextInfo.prototype, "ContextInfo", null);
    __decorate([
        utils_1.namedConstructor
    ], ContextInfo.prototype, "_root", null);
    ContextInfo = __decorate([
        utils_1.DartClass
    ], ContextInfo);
    return ContextInfo;
}());
exports.ContextInfo = ContextInfo;
var ContextManager = /** @class */ (function () {
    function ContextManager() {
    }
    Object.defineProperty(ContextManager.prototype, "analysisContexts", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManager.prototype, "callbacks", {
        get: function () { throw 'abstract'; },
        set: function (value) { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManager.prototype, "driverMap", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManager.prototype, "excludedPaths", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManager.prototype, "folderMap", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManager.prototype, "includedPaths", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ContextManager.prototype.contextsInAnalysisRoot = function (analysisRoot) { throw 'abstract'; };
    ContextManager.prototype.getContextFolderFor = function (path) { throw 'abstract'; };
    ContextManager.prototype.getContextFor = function (path) { throw 'abstract'; };
    ContextManager.prototype.getDriverFor = function (path) { throw 'abstract'; };
    ContextManager.prototype.getDriversInAnalysisRoot = function (analysisRoot) { throw 'abstract'; };
    ContextManager.prototype.isIgnored = function (path) { throw 'abstract'; };
    ContextManager.prototype.isInAnalysisRoot = function (path) { throw 'abstract'; };
    ContextManager.prototype.refresh = function (roots) { throw 'abstract'; };
    ContextManager.prototype.setRoots = function (includedPaths, excludedPaths, packageRoots) { throw 'abstract'; };
    ContextManager.prototype.ContextManager = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ContextManager.prototype, "analysisContexts", null);
    __decorate([
        utils_1.AbstractProperty
    ], ContextManager.prototype, "callbacks", null);
    __decorate([
        utils_1.AbstractProperty
    ], ContextManager.prototype, "driverMap", null);
    __decorate([
        utils_1.AbstractProperty
    ], ContextManager.prototype, "excludedPaths", null);
    __decorate([
        utils_1.AbstractProperty
    ], ContextManager.prototype, "folderMap", null);
    __decorate([
        utils_1.AbstractProperty
    ], ContextManager.prototype, "includedPaths", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "contextsInAnalysisRoot", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "getContextFolderFor", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "getContextFor", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "getDriverFor", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "getDriversInAnalysisRoot", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "isIgnored", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "isInAnalysisRoot", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "refresh", null);
    __decorate([
        utils_1.Abstract
    ], ContextManager.prototype, "setRoots", null);
    __decorate([
        utils_1.defaultConstructor
    ], ContextManager.prototype, "ContextManager", null);
    ContextManager = __decorate([
        utils_1.DartClass
    ], ContextManager);
    return ContextManager;
}());
exports.ContextManager = ContextManager;
var ContextManagerCallbacks = /** @class */ (function () {
    function ContextManagerCallbacks() {
    }
    ContextManagerCallbacks.prototype.addAnalysisDriver = function (folder, contextRoot, options) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.addContext = function (folder, options) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.applyChangesToContext = function (contextFolder, changeSet) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.applyFileRemoved = function (driver, file) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.broadcastWatchEvent = function (event) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.computingPackageMap = function (computing) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.createContextBuilder = function (folder, options) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.moveContext = function (from, to) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.removeContext = function (folder, flushedFiles) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.updateContextPackageUriResolver = function (context) { throw 'abstract'; };
    ContextManagerCallbacks.prototype.ContextManagerCallbacks = function () {
    };
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "addAnalysisDriver", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "addContext", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "applyChangesToContext", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "applyFileRemoved", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "broadcastWatchEvent", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "computingPackageMap", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "createContextBuilder", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "moveContext", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "removeContext", null);
    __decorate([
        utils_1.Abstract
    ], ContextManagerCallbacks.prototype, "updateContextPackageUriResolver", null);
    __decorate([
        utils_1.defaultConstructor
    ], ContextManagerCallbacks.prototype, "ContextManagerCallbacks", null);
    ContextManagerCallbacks = __decorate([
        utils_1.DartClass
    ], ContextManagerCallbacks);
    return ContextManagerCallbacks;
}());
exports.ContextManagerCallbacks = ContextManagerCallbacks;
var ContextManagerImpl = /** @class */ (function () {
    function ContextManagerImpl(resourceProvider, sdkManager, packageResolverProvider, _packageMapProvider, analyzedFilesGlobs, _instrumentationService, defaultContextOptions, enableNewAnalysisDriver) {
    }
    ContextManagerImpl_1 = ContextManagerImpl;
    Object.defineProperty(ContextManagerImpl, "DOC_DIR_NAME", {
        get: function () {
            if (this.__$DOC_DIR_NAME === undefined) {
                this.__$DOC_DIR_NAME = 'doc';
            }
            return this.__$DOC_DIR_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManagerImpl, "LIB_DIR_NAME", {
        get: function () {
            if (this.__$LIB_DIR_NAME === undefined) {
                this.__$LIB_DIR_NAME = 'lib';
            }
            return this.__$LIB_DIR_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManagerImpl, "PACKAGES_NAME", {
        get: function () {
            if (this.__$PACKAGES_NAME === undefined) {
                this.__$PACKAGES_NAME = 'packages';
            }
            return this.__$PACKAGES_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManagerImpl, "PUBSPEC_NAME", {
        get: function () {
            if (this.__$PUBSPEC_NAME === undefined) {
                this.__$PUBSPEC_NAME = 'pubspec.yaml';
            }
            return this.__$PUBSPEC_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManagerImpl, "PACKAGE_SPEC_NAME", {
        get: function () {
            if (this.__$PACKAGE_SPEC_NAME === undefined) {
                this.__$PACKAGE_SPEC_NAME = '.packages';
            }
            return this.__$PACKAGE_SPEC_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManagerImpl, "_EMBEDDED_LIB_MAP_KEY", {
        get: function () {
            if (this.__$_EMBEDDED_LIB_MAP_KEY === undefined) {
                this.__$_EMBEDDED_LIB_MAP_KEY = 'embedded_libs';
            }
            return this.__$_EMBEDDED_LIB_MAP_KEY;
        },
        enumerable: true,
        configurable: true
    });
    ContextManagerImpl.prototype.ContextManagerImpl = function (resourceProvider, sdkManager, packageResolverProvider, _packageMapProvider, analyzedFilesGlobs, _instrumentationService, defaultContextOptions, enableNewAnalysisDriver) {
        this.excludedPaths = new core.DartList.literal();
        this.includedPaths = new core.DartList.literal();
        this.packageRoots = new core.DartMap.literal([]);
        this.normalizedPackageRoots = new core.DartMap.literal([]);
        this.rootInfo = new ContextInfo._root();
        this.driverMap = new core.DartHashMap();
        this._folderMap = new core.DartHashMap();
        this.changeSubscriptions = new core.DartMap.literal([]);
        this.resourceProvider = resourceProvider;
        this.sdkManager = sdkManager;
        this.packageResolverProvider = packageResolverProvider;
        this._packageMapProvider = _packageMapProvider;
        this.analyzedFilesGlobs = analyzedFilesGlobs;
        this._instrumentationService = _instrumentationService;
        this.defaultContextOptions = defaultContextOptions;
        this.enableNewAnalysisDriver = enableNewAnalysisDriver;
        this.absolutePathContext = this.resourceProvider.absolutePathContext;
        this.pathContext = this.resourceProvider.pathContext;
    };
    Object.defineProperty(ContextManagerImpl.prototype, "analysisContexts", {
        get: function () {
            return this.folderMap.values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextManagerImpl.prototype, "folderMap", {
        get: function () {
            if (this.enableNewAnalysisDriver) {
                throw new core.StateError('Should not be used with the new analysis driver');
            }
            else {
                return this._folderMap;
            }
        },
        enumerable: true,
        configurable: true
    });
    ContextManagerImpl.prototype.contextsInAnalysisRoot = function (analysisRoot) {
        var contexts = new core.DartList.literal();
        var innermostContainingInfo = this._getInnermostContextInfoFor(analysisRoot.path);
        var addContextAndDescendants = function (info) {
            contexts.add(info.context);
            info.children.forEach(addContextAndDescendants);
        };
        if (innermostContainingInfo != null) {
            if (utils_1.op(utils_1.Op.EQUALS, analysisRoot, innermostContainingInfo.folder)) {
                addContextAndDescendants(innermostContainingInfo);
            }
            else {
                for (var _i = 0, _a = innermostContainingInfo.children; _i < _a.length; _i++) {
                    var info = _a[_i];
                    if (analysisRoot.isOrContains(info.folder.path)) {
                        addContextAndDescendants(info);
                    }
                }
            }
        }
        return contexts;
    };
    ContextManagerImpl.prototype.definesEmbeddedLibs = function (map) {
        return map.get(ContextManagerImpl_1._EMBEDDED_LIB_MAP_KEY) != null;
    };
    ContextManagerImpl.prototype.getContextFolderFor = function (path) {
        return (function (t) { return (!!t) ? t.folder : null; })(this._getInnermostContextInfoFor(path));
    };
    ContextManagerImpl.prototype.getContextFor = function (path) {
        return (function (t) { return (!!t) ? t.context : null; })(this._getInnermostContextInfoFor(path));
    };
    ContextManagerImpl.prototype.getContextInfoFor = function (folder) {
        var info = this._getInnermostContextInfoFor(folder.path);
        if (info != null && utils_1.op(utils_1.Op.EQUALS, folder, info.folder)) {
            return info;
        }
        return null;
    };
    ContextManagerImpl.prototype.getDriverFor = function (path) {
        return (function (t) { return (!!t) ? t.analysisDriver : null; })(this._getInnermostContextInfoFor(path));
    };
    ContextManagerImpl.prototype.getDriversInAnalysisRoot = function (analysisRoot) {
        var drivers = new core.DartList.literal();
        var addContextAndDescendants = function (info) {
            drivers.add(info.analysisDriver);
            info.children.forEach(addContextAndDescendants);
        };
        var innermostContainingInfo = this._getInnermostContextInfoFor(analysisRoot.path);
        if (innermostContainingInfo != null) {
            if (utils_1.op(utils_1.Op.EQUALS, analysisRoot, innermostContainingInfo.folder)) {
                addContextAndDescendants(innermostContainingInfo);
            }
            else {
                for (var _i = 0, _a = innermostContainingInfo.children; _i < _a.length; _i++) {
                    var info = _a[_i];
                    if (analysisRoot.isOrContains(info.folder.path)) {
                        addContextAndDescendants(info);
                    }
                }
            }
        }
        return drivers;
    };
    ContextManagerImpl.prototype.isIgnored = function (path) {
        var info = this.rootInfo;
        do {
            info = info.findChildInfoFor(path);
            if (utils_1.op(utils_1.Op.EQUALS, info, null)) {
                return false;
            }
            if (info.ignored(path)) {
                return true;
            }
        } while (true);
    };
    ContextManagerImpl.prototype.isInAnalysisRoot = function (path) {
        if (this._isExcluded(path)) {
            return false;
        }
        for (var _i = 0, _a = this.rootInfo.children; _i < _a.length; _i++) {
            var info = _a[_i];
            if (info.folder.contains(path)) {
                return true;
            }
        }
        return false;
    };
    ContextManagerImpl.prototype.processOptionsForContext = function (info, options, _namedArguments) {
        var optionsRemoved = Object.assign({
            "optionsRemoved": false
        }, _namedArguments).optionsRemoved;
        if (options == null && !optionsRemoved) {
            return;
        }
        var analysisOptions;
        if (optionsRemoved) {
            analysisOptions = new bare.createInstance(any, null, this.defaultContextOptions);
            options = this._toStringMap(this._getEmbeddedOptions(info));
        }
        else {
            analysisOptions = new bare.createInstance(any, null, info.context.analysisOptions);
            var embeddedOptions = this._getEmbeddedOptions(info);
            if (embeddedOptions != null) {
                options = this._toStringMap(new bare.createInstance(any, null).merge(embeddedOptions, options));
            }
        }
        if (options != null) {
            applyToAnalysisOptions(analysisOptions, options);
        }
        info.context.analysisOptions = analysisOptions;
        if (options == null) {
            return;
        }
        var analyzer = options.get(AnalyzerOptions.analyzer);
        if (_common_1.is(analyzer, core.DartMap())) {
            var exclude = analyzer.get(AnalyzerOptions.exclude);
            if (_common_1.is(exclude, any)) {
                var excludeList = toStringList(exclude);
                if (excludeList != null) {
                    this.setIgnorePatternsForContext(info, excludeList);
                }
            }
        }
    };
    ContextManagerImpl.prototype.processOptionsForDriver = function (info, analysisOptions, options) {
        if (options == null) {
            return;
        }
        var embeddedOptions = this._getEmbeddedOptions(info);
        if (embeddedOptions != null) {
            options = this._toStringMap(new bare.createInstance(any, null).merge(embeddedOptions, options));
        }
        applyToAnalysisOptions(analysisOptions, options);
        var analyzer = options.get(AnalyzerOptions.analyzer);
        if (_common_1.is(analyzer, core.DartMap())) {
            var exclude = analyzer.get(AnalyzerOptions.exclude);
            var excludeList = toStringList(exclude);
            if (excludeList != null) {
                this.setIgnorePatternsForContext(info, excludeList);
            }
        }
    };
    ContextManagerImpl.prototype.readOptions = function (folder, packages) {
        try {
            var packageMap = new bare.createInstance(any, null, this.resourceProvider, null, null).convertPackagesToMap(packages);
            var resolvers = new core.DartList.literal(new bare.createInstance(any, null, this.resourceProvider), new bare.createInstance(any, null, this.resourceProvider, packageMap));
            var sourceFactory = new bare.createInstance(any, null, resolvers, packages, this.resourceProvider);
            return new bare.createInstance(any, null, sourceFactory).getOptions(folder, {
                crawlUp: true
            });
        }
        catch (__error__) {
            {
                var _ = __error__;
            }
        }
        return null;
    };
    ContextManagerImpl.prototype.refresh = function (roots) {
        var _this = this;
        var contextInfos = this.rootInfo.descendants.toList();
        if (roots == null) {
            contextInfos.forEach(this._destroyContext.bind(this));
        }
        else {
            roots.forEach(function (resource) {
                contextInfos.forEach(function (contextInfo) {
                    if (_common_1.is(resource, any) && resource.isOrContains(contextInfo.folder.path)) {
                        _this._destroyContext(contextInfo);
                    }
                });
            });
        }
        this.setRoots(this.includedPaths, this.excludedPaths, this.packageRoots);
    };
    ContextManagerImpl.prototype.setIgnorePatternsForContext = function (info, ignorePatterns) {
        info.pathFilter.setIgnorePatterns(ignorePatterns);
    };
    ContextManagerImpl.prototype.setRoots = function (includedPaths, excludedPaths, packageRoots) {
        var _this = this;
        this.packageRoots = packageRoots;
        this.normalizedPackageRoots = new core.DartMap.literal([]);
        packageRoots.forEach(function (sourcePath, targetPath) {
            var resource = _this.resourceProvider.getResource(sourcePath);
            if (_common_1.is(resource, any)) {
                _this.normalizedPackageRoots.set(resource.path, targetPath);
            }
        });
        var contextInfos = this.rootInfo.descendants.toList();
        var includedFolders = new core.DartList.literal();
        {
            var uniqueIncludedPaths = new core.DartLinkedHashSet.from(includedPaths);
            var sortedIncludedPaths = uniqueIncludedPaths.toList();
            sortedIncludedPaths.sort(function (a, b) {
                return new core.DartString(a).length - new core.DartString(b).length;
            });
            for (var _i = 0, sortedIncludedPaths_1 = sortedIncludedPaths; _i < sortedIncludedPaths_1.length; _i++) {
                var path = sortedIncludedPaths_1[_i];
                var resource = this.resourceProvider.getResource(path);
                if (_common_1.is(resource, any)) {
                    includedFolders.add(resource);
                }
                else if (!resource.exists) {
                }
                else {
                    throw new core.UnimplementedError(path + " is not a folder. " + 'Only support for folder analysis is implemented currently.');
                }
            }
        }
        this.includedPaths = includedPaths;
        var oldExcludedPaths = this.excludedPaths;
        this.excludedPaths = excludedPaths;
        var _loop_1 = function (contextInfo) {
            var isIncluded = includedFolders.any(function (folder) {
                return folder.isOrContains(contextInfo.folder.path);
            });
            if (!isIncluded) {
                this_1._destroyContext(contextInfo);
            }
        };
        var this_1 = this;
        for (var _a = 0, contextInfos_1 = contextInfos; _a < contextInfos_1.length; _a++) {
            var contextInfo = contextInfos_1[_a];
            _loop_1(contextInfo);
        }
        for (var _b = 0, _c = this.rootInfo.descendants; _b < _c.length; _b++) {
            var info = _c[_b];
            var newPackageRoot = this.normalizedPackageRoots.get(info.folder.path);
            if (info.packageRoot != newPackageRoot) {
                info.packageRoot = newPackageRoot;
                this._recomputeFolderDisposition(info);
            }
        }
        for (var _d = 0, includedFolders_1 = includedFolders; _d < includedFolders_1.length; _d++) {
            var includedFolder = includedFolders_1[_d];
            var includedPath = includedFolder.path;
            var isManaged = this.rootInfo._managesOrHasChildThatManages(includedPath);
            if (!isManaged) {
                var parent_1 = this._getParentForNewContext(includedPath);
                this.changeSubscriptions.set(includedFolder, includedFolder.changes.listen(this._handleWatchEvent.bind(this)));
                this._createContexts(parent_1, includedFolder, excludedPaths, false);
            }
        }
        var _loop_2 = function (info) {
            var excludedSources = new core.DartHashMap();
            info.sources.forEach(function (path, source) {
                if (_this._isExcludedBy(excludedPaths, path) && !_this._isExcludedBy(oldExcludedPaths, path)) {
                    utils_1.op(utils_1.Op.INDEX_ASSIGN, excludedSources, path, source);
                }
            });
            var changeSet = new bare.createInstance(any, null);
            excludedSources.forEach(function (path, source) {
                info.sources.remove(path);
                changeSet.removedSource(source);
            });
            this_2.callbacks.applyChangesToContext(info.folder, changeSet);
        };
        var this_2 = this;
        for (var _e = 0, _f = this.rootInfo.descendants; _e < _f.length; _e++) {
            var info = _f[_e];
            _loop_2(info);
        }
        for (var _g = 0, _h = this.rootInfo.descendants; _g < _h.length; _g++) {
            var info = _h[_g];
            var changeSet = new bare.createInstance(any, null);
            this._addPreviouslyExcludedSources(info, changeSet, info.folder, oldExcludedPaths);
            this.callbacks.applyChangesToContext(info.folder, changeSet);
        }
    };
    ContextManagerImpl.prototype._addPreviouslyExcludedSources = function (info, changeSet, folder, oldExcludedPaths) {
        if (info.excludesResource(folder)) {
            return;
        }
        var children;
        try {
            children = folder.getChildren();
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
                return;
            }
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            var path = child.path;
            if (info.ignored(path)) {
                continue;
            }
            if (_common_1.is(child, any)) {
                if (!this._shouldFileBeAnalyzed(child)) {
                    continue;
                }
                var wasExcluded = this._isExcludedBy(oldExcludedPaths, path) && !this._isExcludedBy(this.excludedPaths, path);
                if (!wasExcluded) {
                    continue;
                }
                var source = ContextManagerImpl_1.createSourceInContext(info.context, child);
                changeSet.addedSource(source);
                info.sources.set(path, source);
            }
            else if (_common_1.is(child, any)) {
                if (utils_1.op(utils_1.Op.EQUALS, child.shortName, ContextManagerImpl_1.PACKAGES_NAME)) {
                    continue;
                }
                this._addPreviouslyExcludedSources(info, changeSet, child, oldExcludedPaths);
            }
        }
    };
    ContextManagerImpl.prototype._addSourceFiles = function (changeSet, folder, info) {
        if (info.excludesResource(folder) || folder.shortName.startsWith('.') || this._isInTopLevelDocDir(info.folder.path, folder.path)) {
            return;
        }
        var children = null;
        try {
            children = folder.getChildren();
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
                return;
            }
        }
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var child = children_2[_i];
            var path = child.path;
            if (this._isExcluded(path) || info.excludes(path) || info.ignored(path)) {
                continue;
            }
            if (_common_1.is(child, any)) {
                if (this._shouldFileBeAnalyzed(child)) {
                    var source = ContextManagerImpl_1.createSourceInContext(info.context, child);
                    changeSet.addedSource(source);
                    info.sources.set(path, source);
                }
            }
            else if (_common_1.is(child, any)) {
                var shortName = child.shortName;
                if (shortName == ContextManagerImpl_1.PACKAGES_NAME) {
                    continue;
                }
                this._addSourceFiles(changeSet, child, info);
            }
        }
    };
    ContextManagerImpl.prototype._checkForAnalysisOptionsUpdate = function (path, info, changeType) {
        if (AnalysisEngine.isAnalysisOptionsFileName(path, this.pathContext)) {
            if (this.enableNewAnalysisDriver) {
                var driver = info.analysisDriver;
                var contextRoot = info.folder.path;
                var builder = this.callbacks.createContextBuilder(info.folder, this.defaultContextOptions);
                var options = builder.getAnalysisOptions(contextRoot);
                var factory = builder.createSourceFactory(contextRoot, options);
                driver.configure({
                    analysisOptions: options, sourceFactory: factory
                });
            }
            else {
                var analysisContext = info.context;
                if (_common_1.is(analysisContext, any)) {
                    var options = this.readOptions(info.folder, info.disposition.packages);
                    this.processOptionsForContext(info, options, {
                        optionsRemoved: utils_1.op(utils_1.Op.EQUALS, changeType, ChangeType.REMOVE)
                    });
                    analysisContext.sourceFactory = this._createSourceFactory(analysisContext, analysisContext.analysisOptions, info.folder);
                    this.callbacks.applyChangesToContext(info.folder, new bare.createInstance(any, null));
                }
            }
        }
    };
    ContextManagerImpl.prototype._checkForPackagespecUpdate = function (path, info, folder) {
        if (utils_1.op(utils_1.Op.EQUALS, this.absolutePathContext.basename(path), ContextManagerImpl_1.PACKAGE_SPEC_NAME)) {
            var contextRoot = info.folder.path;
            var builder = this.callbacks.createContextBuilder(info.folder, this.defaultContextOptions);
            var options = builder.getAnalysisOptions(contextRoot);
            var factory = builder.createSourceFactory(contextRoot, options);
            if (this.enableNewAnalysisDriver) {
                var driver = info.analysisDriver;
                driver.configure({
                    analysisOptions: options, sourceFactory: factory
                });
            }
            else {
                info.context.analysisOptions = options;
                info.context.sourceFactory = factory;
            }
        }
    };
    ContextManagerImpl.prototype._computeFlushedFiles = function (info) {
        if (this.enableNewAnalysisDriver) {
            var flushedFiles = info.analysisDriver.addedFiles.toSet();
            for (var _i = 0, _a = this.rootInfo.descendants; _i < _a.length; _i++) {
                var contextInfo = _a[_i];
                var other = contextInfo.analysisDriver;
                if (other != info.analysisDriver) {
                    flushedFiles.removeAll(other.addedFiles);
                }
            }
            return flushedFiles.toList({
                growable: false
            });
        }
        else {
            var context = info.context;
            var flushedFiles = new core.DartHashSet();
            for (var _b = 0, _c = context.sources; _b < _c.length; _b++) {
                var source = _c[_b];
                flushedFiles.add(source.fullName);
            }
            for (var _d = 0, _e = this.rootInfo.descendants; _d < _e.length; _d++) {
                var contextInfo = _e[_d];
                var contextN = contextInfo.context;
                if (context != contextN) {
                    for (var _f = 0, _g = contextN.sources; _f < _g.length; _f++) {
                        var source = _g[_f];
                        flushedFiles.remove(source.fullName);
                    }
                }
            }
            return flushedFiles.toList({
                growable: false
            });
        }
    };
    ContextManagerImpl.prototype._computeFolderDisposition = function (folder, addDependency, packagespecFile) {
        var _this = this;
        var packageRoot = this.normalizedPackageRoots.get(folder.path);
        if (packageRoot != null) {
            var packagesDirOrFile = new bare.createInstance(any, null, packageRoot);
            var packageMap = new core.DartMap();
            if (packagesDirOrFile.isDirectory()) {
                for (var _i = 0, _a = packagesDirOrFile.listFiles(); _i < _a.length; _i++) {
                    var file = _a[_i];
                    var path = void 0;
                    try {
                        path = file.getCanonicalPath();
                    }
                    catch (__error__) {
                        {
                            var s = new core.DartStackTrace.fromError(__error__);
                            var e = __error__;
                            this._instrumentationService.logException(e, s);
                            continue;
                        }
                    }
                    var res = this.resourceProvider.getResource(path);
                    if (_common_1.is(res, any)) {
                        packageMap.set(file.getName(), new core.DartList.literal(res));
                    }
                }
                return new PackageMapDisposition(packageMap, {
                    packageRoot: packageRoot
                });
            }
            else if (packagesDirOrFile.isFile()) {
                var packageSpecFile = this.resourceProvider.getFile(packageRoot);
                var packages = this._readPackagespec(packageSpecFile);
                if (packages != null) {
                    return new PackagesFileDisposition(packages);
                }
            }
            return new NoPackageFolderDisposition({
                packageRoot: packageRoot
            });
        }
        else {
            var packageMapInfo_1;
            this.callbacks.computingPackageMap(true);
            try {
                if (utils_1.op(utils_1.Op.EQUALS, this.absolutePathContext.basename(packagespecFile.path), ContextManagerImpl_1.PACKAGE_SPEC_NAME)) {
                    var packages = this._readPackagespec(packagespecFile);
                    return new PackagesFileDisposition(packages);
                }
                if (this.packageResolverProvider != null) {
                    var resolver = this.packageResolverProvider(folder);
                    if (resolver != null) {
                        return new CustomPackageResolverDisposition(resolver);
                    }
                }
                ServerPerformanceStatistics.pub.makeCurrentWhile(function () {
                    packageMapInfo_1 = _this._packageMapProvider.computePackageMap(folder);
                });
            }
            finally {
                this.callbacks.computingPackageMap(false);
            }
            for (var _b = 0, _c = packageMapInfo_1.dependencies; _b < _c.length; _b++) {
                var dependencyPath = _c[_b];
                addDependency(dependencyPath);
            }
            if (utils_1.op(utils_1.Op.EQUALS, packageMapInfo_1.packageMap, null)) {
                return new NoPackageFolderDisposition();
            }
            return new PackageMapDisposition(packageMapInfo_1.packageMap);
        }
    };
    ContextManagerImpl.prototype._createContext = function (parent, folder, excludedPaths, packagesFile) {
        var _this = this;
        var dependencies = new core.DartList.literal();
        var disposition = this._computeFolderDisposition(folder, dependencies.add.bind(dependencies), packagesFile);
        var info = new ContextInfo(this, parent, folder, packagesFile, this.normalizedPackageRoots.get(folder.path), disposition);
        var optionMap = this.readOptions(info.folder, disposition.packages);
        var options = new bare.createInstance(any, null, this.defaultContextOptions);
        applyToAnalysisOptions(options, optionMap);
        info.setDependencies(dependencies);
        if (this.enableNewAnalysisDriver) {
            var includedPath_1 = folder.path;
            var containedExcludedPaths = excludedPaths.where(function (excludedPath) {
                return _this.pathContext.isWithin(includedPath_1, excludedPath);
            }).toList();
            this.processOptionsForDriver(info, options, optionMap);
            info.analysisDriver = this.callbacks.addAnalysisDriver(folder, new bare.createInstance(any, null, folder.path, containedExcludedPaths), options);
        }
        else {
            info.context = this.callbacks.addContext(folder, options);
            this._folderMap.set(folder, info.context);
            info.context.name = folder.path;
            this.processOptionsForContext(info, optionMap);
        }
        return info;
    };
    ContextManagerImpl.prototype._createContexts = function (parent, folder, excludedPaths, withPackageSpecOnly) {
        if (this._isExcluded(folder.path) || folder.shortName.startsWith('.') || utils_1.op(utils_1.Op.EQUALS, folder.shortName, 'packages')) {
            return;
        }
        var packageSpec = this._findPackageSpecFile(folder);
        var createContext = packageSpec.exists || !withPackageSpecOnly;
        if (withPackageSpecOnly && packageSpec.exists && parent != null && parent.ignored(packageSpec.path)) {
            createContext = false;
        }
        if (createContext) {
            parent = this._createContext(parent, folder, excludedPaths, packageSpec);
        }
        try {
            for (var _i = 0, _a = folder.getChildren(); _i < _a.length; _i++) {
                var child = _a[_i];
                if (_common_1.is(child, any)) {
                    if (!parent.ignored(child.path)) {
                        this._createContexts(parent, child, excludedPaths, true);
                    }
                }
            }
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
            }
        }
        if (createContext) {
            var changeSet = new bare.createInstance(any, null);
            this._addSourceFiles(changeSet, folder, parent);
            this.callbacks.applyChangesToContext(folder, changeSet);
        }
    };
    ContextManagerImpl.prototype._createSourceFactory = function (context, options, folder) {
        var builder = this.callbacks.createContextBuilder(folder, options);
        return builder.createSourceFactory(folder.path, options);
    };
    ContextManagerImpl.prototype._destroyContext = function (info) {
        (function (_8_) { return (!!_8_) ? _8_.cancel() : null; })(this.changeSubscriptions.remove(info.folder));
        this.callbacks.removeContext(info.folder, this._computeFlushedFiles(info));
        var wasRemoved = info.parent.children.remove(info);
        /* TODO (AssertStatementImpl) : assert (wasRemoved); */ ;
    };
    ContextManagerImpl.prototype._extractContext = function (oldInfo, packagespecFile) {
        var newFolder = packagespecFile.parent;
        var newInfo = this._createContext(oldInfo, newFolder, this.excludedPaths, packagespecFile);
        var extractedSources = new core.DartHashMap();
        oldInfo.sources.forEach(function (path, source) {
            if (newFolder.contains(path)) {
                utils_1.op(utils_1.Op.INDEX_ASSIGN, extractedSources, path, source);
            }
        });
        {
            var changeSet_1 = new bare.createInstance(any, null);
            extractedSources.forEach(function (path, source) {
                newInfo.sources.set(path, source);
                changeSet_1.addedSource(source);
            });
            this.callbacks.applyChangesToContext(newFolder, changeSet_1);
        }
        {
            var changeSet_2 = new bare.createInstance(any, null);
            extractedSources.forEach(function (path, source) {
                oldInfo.sources.remove(path);
                changeSet_2.removedSource(source);
            });
            this.callbacks.applyChangesToContext(oldInfo.folder, changeSet_2);
        }
    };
    ContextManagerImpl.prototype._findPackageSpecFile = function (folder) {
        var packageSpec;
        packageSpec = folder.getChild(ContextManagerImpl_1.PACKAGE_SPEC_NAME);
        if (utils_1.op(utils_1.Op.EQUALS, packageSpec, null) || !packageSpec.exists) {
            packageSpec = folder.getChild(ContextManagerImpl_1.PUBSPEC_NAME);
        }
        return packageSpec;
    };
    ContextManagerImpl.prototype._getEmbeddedOptions = function (info) {
        var embeddedOptions = null;
        var locator = info.disposition.getEmbedderLocator(this.resourceProvider);
        var maps = locator.embedderYamls.values;
        if (maps.length == 1) {
            embeddedOptions = maps.first;
        }
        return embeddedOptions;
    };
    ContextManagerImpl.prototype._getInnermostContextInfoFor = function (path) {
        var info = this.rootInfo.findChildInfoFor(path);
        if (utils_1.op(utils_1.Op.EQUALS, info, null)) {
            return null;
        }
        while (true) {
            var childInfo = info.findChildInfoFor(path);
            if (utils_1.op(utils_1.Op.EQUALS, childInfo, null)) {
                return info;
            }
            info = childInfo;
        }
    };
    ContextManagerImpl.prototype._getParentForNewContext = function (path) {
        var parent = this._getInnermostContextInfoFor(path);
        if (parent != null) {
            return parent;
        }
        return this.rootInfo;
    };
    ContextManagerImpl.prototype._handleWatchEvent = function (event) {
        this.callbacks.broadcastWatchEvent(event);
        var path = event.path;
        var type = event.type;
        var info = this._getInnermostContextInfoFor(path);
        if (utils_1.op(utils_1.Op.EQUALS, info, null)) {
            return;
        }
        this._instrumentationService.logWatchEvent(info.folder.path, path, type.toString());
        if (info.hasDependency(path)) {
            this._recomputeFolderDisposition(info);
        }
        if (this._isExcluded(path) || this._isContainedInDotFolder(info.folder.path, path) || this._isInPackagesDir(info.folder.path, path) || this._isInTopLevelDocDir(info.folder.path, path)) {
            return;
        }
        if (info.excludes(path)) {
            return;
        }
        if (info.ignored(path)) {
            return;
        }
        switch (type) {
            case ChangeType.ADD:
                var resource = this.resourceProvider.getResource(path);
                var directoryPath = this.absolutePathContext.dirname(path);
                if (info.isTopLevel) {
                    if (info.folder.path != directoryPath) {
                        if (this._isPubspec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath, ContextManagerImpl_1.PACKAGE_SPEC_NAME)).exists) {
                                this._extractContext(info, resource);
                                return;
                            }
                        }
                        if (this._isPackagespec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath, ContextManagerImpl_1.PUBSPEC_NAME)).exists) {
                                this._extractContext(info, resource);
                                return;
                            }
                        }
                    }
                }
                if (_common_1.is(resource, any)) {
                    var file = resource;
                    if (this._shouldFileBeAnalyzed(file)) {
                        if (this.enableNewAnalysisDriver) {
                            info.analysisDriver.addFile(path);
                        }
                        else {
                            var changeSet = new bare.createInstance(any, null);
                            var source = ContextManagerImpl_1.createSourceInContext(info.context, file);
                            changeSet.addedSource(source);
                            this.callbacks.applyChangesToContext(info.folder, changeSet);
                            info.sources.set(path, source);
                        }
                    }
                }
                break;
            case ChangeType.REMOVE:
                if (!info.isTopLevel) {
                    var directoryPath_1 = this.absolutePathContext.dirname(path);
                    if (utils_1.op(utils_1.Op.EQUALS, info.folder.path, directoryPath_1)) {
                        if (this._isPubspec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath_1, ContextManagerImpl_1.PACKAGE_SPEC_NAME)).exists) {
                                this._mergeContext(info);
                                return;
                            }
                        }
                        if (this._isPackagespec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath_1, ContextManagerImpl_1.PUBSPEC_NAME)).exists) {
                                this._mergeContext(info);
                                return;
                            }
                        }
                    }
                }
                if (this.enableNewAnalysisDriver) {
                    this.callbacks.applyFileRemoved(info.analysisDriver, path);
                }
                else {
                    var sources = info.context.getSourcesWithFullName(path);
                    if (!sources.isEmpty) {
                        var changeSet_3 = new bare.createInstance(any, null);
                        sources.forEach(function (source) {
                            changeSet_3.removedSource(source);
                        });
                        this.callbacks.applyChangesToContext(info.folder, changeSet_3);
                        info.sources.remove(path);
                    }
                }
                break;
            case ChangeType.MODIFY:
                if (this.enableNewAnalysisDriver) {
                    for (var _i = 0, _a = this.driverMap.values; _i < _a.length; _i++) {
                        var driver = _a[_i];
                        driver.changeFile(path);
                    }
                }
                else {
                    var sources = info.context.getSourcesWithFullName(path);
                    if (!sources.isEmpty) {
                        var changeSet_4 = new bare.createInstance(any, null);
                        sources.forEach(function (source) {
                            changeSet_4.changedSource(source);
                        });
                        this.callbacks.applyChangesToContext(info.folder, changeSet_4);
                    }
                }
                break;
        }
        this._checkForPackagespecUpdate(path, info, info.folder);
        this._checkForAnalysisOptionsUpdate(path, info, type);
    };
    ContextManagerImpl.prototype._isContainedInDotFolder = function (root, path) {
        var pathDir = this.absolutePathContext.dirname(path);
        var suffixPath = this.absolutePathContext.suffix(root, pathDir);
        if (suffixPath == null) {
            return false;
        }
        for (var _i = 0, _a = this.absolutePathContext.split(suffixPath); _i < _a.length; _i++) {
            var pathComponent = _a[_i];
            if (new core.DartString(pathComponent).startsWith('.') && pathComponent != '.' && pathComponent != '..') {
                return true;
            }
        }
        return false;
    };
    ContextManagerImpl.prototype._isExcluded = function (path) {
        return this._isExcludedBy(this.excludedPaths, path);
    };
    ContextManagerImpl.prototype._isExcludedBy = function (excludedPaths, path) {
        var _this = this;
        return excludedPaths.any(function (excludedPath) {
            if (_this.absolutePathContext.isWithin(excludedPath, path)) {
                return true;
            }
            return path == excludedPath;
        });
    };
    ContextManagerImpl.prototype._isInPackagesDir = function (root, path) {
        var suffixPath = this.absolutePathContext.suffix(root, path);
        if (suffixPath == null) {
            return false;
        }
        var pathParts = this.absolutePathContext.split(suffixPath);
        return pathParts.contains(ContextManagerImpl_1.PACKAGES_NAME);
    };
    ContextManagerImpl.prototype._isInTopLevelDocDir = function (root, path) {
        var suffixPath = this.absolutePathContext.suffix(root, path);
        if (suffixPath == null) {
            return false;
        }
        return suffixPath == ContextManagerImpl_1.DOC_DIR_NAME || new core.DartString(suffixPath).startsWith(ContextManagerImpl_1.DOC_DIR_NAME + this.absolutePathContext.separator);
    };
    ContextManagerImpl.prototype._isPackagespec = function (path) {
        return utils_1.op(utils_1.Op.EQUALS, this.absolutePathContext.basename(path), ContextManagerImpl_1.PACKAGE_SPEC_NAME);
    };
    ContextManagerImpl.prototype._isPubspec = function (path) {
        return utils_1.op(utils_1.Op.EQUALS, this.absolutePathContext.basename(path), ContextManagerImpl_1.PUBSPEC_NAME);
    };
    ContextManagerImpl.prototype._mergeContext = function (info) {
        this._destroyContext(info);
        var parentInfo = info.parent;
        if (parentInfo != null) {
            parentInfo.children.remove(info);
            var changeSet_5 = new bare.createInstance(any, null);
            info.sources.forEach(function (path, source) {
                parentInfo.sources.set(path, source);
                changeSet_5.addedSource(source);
            });
            this.callbacks.applyChangesToContext(parentInfo.folder, changeSet_5);
        }
    };
    ContextManagerImpl.prototype._readPackagespec = function (specFile) {
        try {
            var contents = specFile.readAsStringSync();
            var map = null /*topLevl*/.parse(convert.properties.UTF8.encode(contents), new lib6.Uri.file(specFile.path));
            return new bare.createInstance(any, null, map);
        }
        catch (__error__) {
            {
                var _ = __error__;
                return null;
            }
        }
    };
    ContextManagerImpl.prototype._recomputeFolderDisposition = function (info) {
        var dependencies = new core.DartList.literal();
        info.setDependencies(dependencies);
        this._updateContextPackageUriResolver(info.folder);
    };
    ContextManagerImpl.prototype._shouldFileBeAnalyzed = function (file) {
        for (var _i = 0, _a = this.analyzedFilesGlobs; _i < _a.length; _i++) {
            var glob = _a[_i];
            if (glob.matches(file.path)) {
                return file.exists;
            }
        }
        return false;
    };
    ContextManagerImpl.prototype._toStringMap = function (object) {
        if (_common_1.is(object, core.DartMap())) {
            var stringMap = new core.DartHashMap();
            for (var _i = 0, _a = object.keys; _i < _a.length; _i++) {
                var key = _a[_i];
                if (_common_1.is(key, "string")) {
                    utils_1.op(utils_1.Op.INDEX_ASSIGN, stringMap, key, object.get(key));
                }
                else {
                    return null;
                }
            }
            return stringMap;
        }
        return null;
    };
    ContextManagerImpl.prototype._updateContextPackageUriResolver = function (contextFolder) {
        if (this.enableNewAnalysisDriver) {
            var info = this.getContextInfoFor(contextFolder);
            var driver = info.analysisDriver;
            var sourceFactory = this._createSourceFactory(null, driver.analysisOptions, contextFolder);
            driver.configure({
                sourceFactory: sourceFactory
            });
        }
        else {
            var context = this.folderMap.get(contextFolder);
            context.sourceFactory = this._createSourceFactory(context, context.analysisOptions, contextFolder);
            this.callbacks.updateContextPackageUriResolver(context);
        }
    };
    ContextManagerImpl.createSourceInContext = function (context, file) {
        var source = file.createSource();
        if (utils_1.op(utils_1.Op.EQUALS, context, null)) {
            return source;
        }
        var uri = context.sourceFactory.restoreUri(source);
        return file.createSource(uri);
    };
    var ContextManagerImpl_1;
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "callbacks", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "driverMap", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], ContextManagerImpl.prototype, "ContextManagerImpl", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "analysisContexts", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "contextsInAnalysisRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "getContextFor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "getDriverFor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "getDriversInAnalysisRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "isIgnored", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "isInAnalysisRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "refresh", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ContextManagerImpl.prototype, "setRoots", null);
    ContextManagerImpl = ContextManagerImpl_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ContextManager)
    ], ContextManagerImpl);
    return ContextManagerImpl;
}());
exports.ContextManagerImpl = ContextManagerImpl;
var ContextsChangedEvent = /** @class */ (function () {
    function ContextsChangedEvent(_namedArguments) {
    }
    ContextsChangedEvent.prototype.ContextsChangedEvent = function (_namedArguments) {
        var _a = Object.assign({
            "added": AnalysisContext.EMPTY_LIST,
            "changed": AnalysisContext.EMPTY_LIST,
            "removed": AnalysisContext.EMPTY_LIST
        }, _namedArguments), added = _a.added, changed = _a.changed, removed = _a.removed;
        this.added = added;
        this.changed = changed;
        this.removed = removed;
    };
    __decorate([
        utils_1.defaultConstructor
    ], ContextsChangedEvent.prototype, "ContextsChangedEvent", null);
    ContextsChangedEvent = __decorate([
        utils_1.DartClass
    ], ContextsChangedEvent);
    return ContextsChangedEvent;
}());
exports.ContextsChangedEvent = ContextsChangedEvent;
var FolderDisposition = /** @class */ (function () {
    function FolderDisposition() {
    }
    Object.defineProperty(FolderDisposition.prototype, "packageRoot", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderDisposition.prototype, "packages", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    FolderDisposition.prototype.createPackageUriResolvers = function (resourceProvider) { throw 'abstract'; };
    FolderDisposition.prototype.getEmbedderLocator = function (resourceProvider) { throw 'abstract'; };
    FolderDisposition.prototype.getSdkExtensionFinder = function (resourceProvider) { throw 'abstract'; };
    FolderDisposition.prototype.FolderDisposition = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], FolderDisposition.prototype, "packageRoot", null);
    __decorate([
        utils_1.AbstractProperty
    ], FolderDisposition.prototype, "packages", null);
    __decorate([
        utils_1.Abstract
    ], FolderDisposition.prototype, "createPackageUriResolvers", null);
    __decorate([
        utils_1.Abstract
    ], FolderDisposition.prototype, "getEmbedderLocator", null);
    __decorate([
        utils_1.Abstract
    ], FolderDisposition.prototype, "getSdkExtensionFinder", null);
    __decorate([
        utils_1.defaultConstructor
    ], FolderDisposition.prototype, "FolderDisposition", null);
    FolderDisposition = __decorate([
        utils_1.DartClass
    ], FolderDisposition);
    return FolderDisposition;
}());
exports.FolderDisposition = FolderDisposition;
var CustomPackageResolverDisposition = /** @class */ (function (_super) {
    __extends(CustomPackageResolverDisposition, _super);
    function CustomPackageResolverDisposition(resolver) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    CustomPackageResolverDisposition.prototype.CustomPackageResolverDisposition = function (resolver) {
        this.resolver = resolver;
    };
    Object.defineProperty(CustomPackageResolverDisposition.prototype, "packageRoot", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPackageResolverDisposition.prototype, "packages", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    CustomPackageResolverDisposition.prototype.createPackageUriResolvers = function (resourceProvider) {
        return new core.DartList.literal(this.resolver);
    };
    CustomPackageResolverDisposition.prototype.getEmbedderLocator = function (resourceProvider) {
        return new bare.createInstance(any, null, null);
    };
    CustomPackageResolverDisposition.prototype.getSdkExtensionFinder = function (resourceProvider) {
        return new bare.createInstance(any, null, null);
    };
    __decorate([
        utils_1.defaultConstructor
    ], CustomPackageResolverDisposition.prototype, "CustomPackageResolverDisposition", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CustomPackageResolverDisposition.prototype, "packageRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CustomPackageResolverDisposition.prototype, "packages", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CustomPackageResolverDisposition.prototype, "createPackageUriResolvers", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CustomPackageResolverDisposition.prototype, "getEmbedderLocator", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CustomPackageResolverDisposition.prototype, "getSdkExtensionFinder", null);
    CustomPackageResolverDisposition = __decorate([
        utils_1.DartClass
    ], CustomPackageResolverDisposition);
    return CustomPackageResolverDisposition;
}(FolderDisposition));
exports.CustomPackageResolverDisposition = CustomPackageResolverDisposition;
var NoPackageFolderDisposition = /** @class */ (function (_super) {
    __extends(NoPackageFolderDisposition, _super);
    function NoPackageFolderDisposition(_namedArguments) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    NoPackageFolderDisposition.prototype.NoPackageFolderDisposition = function (_namedArguments) {
        var packageRoot = Object.assign({}, _namedArguments).packageRoot;
        this.packageRoot = packageRoot;
    };
    Object.defineProperty(NoPackageFolderDisposition.prototype, "packages", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    NoPackageFolderDisposition.prototype.createPackageUriResolvers = function (resourceProvider) {
        return new core.DartList.literal();
    };
    NoPackageFolderDisposition.prototype.getEmbedderLocator = function (resourceProvider) {
        return new bare.createInstance(any, null, null);
    };
    NoPackageFolderDisposition.prototype.getSdkExtensionFinder = function (resourceProvider) {
        return new bare.createInstance(any, null, null);
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NoPackageFolderDisposition.prototype, "packageRoot", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], NoPackageFolderDisposition.prototype, "NoPackageFolderDisposition", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NoPackageFolderDisposition.prototype, "packages", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NoPackageFolderDisposition.prototype, "createPackageUriResolvers", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NoPackageFolderDisposition.prototype, "getEmbedderLocator", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NoPackageFolderDisposition.prototype, "getSdkExtensionFinder", null);
    NoPackageFolderDisposition = __decorate([
        utils_1.DartClass
    ], NoPackageFolderDisposition);
    return NoPackageFolderDisposition;
}(FolderDisposition));
exports.NoPackageFolderDisposition = NoPackageFolderDisposition;
var PackageMapDisposition = /** @class */ (function (_super) {
    __extends(PackageMapDisposition, _super);
    function PackageMapDisposition(packageMap, _namedArguments) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    PackageMapDisposition.prototype.PackageMapDisposition = function (packageMap, _namedArguments) {
        var packageRoot = Object.assign({}, _namedArguments).packageRoot;
        this.packageMap = packageMap;
        this.packageRoot = packageRoot;
    };
    Object.defineProperty(PackageMapDisposition.prototype, "packages", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    PackageMapDisposition.prototype.createPackageUriResolvers = function (resourceProvider) {
        return new core.DartList.literal(new bare.createInstance(any, null, this.packageMap), new bare.createInstance(any, null, resourceProvider, this.packageMap));
    };
    PackageMapDisposition.prototype.getEmbedderLocator = function (resourceProvider) {
        if (utils_1.op(utils_1.Op.EQUALS, this._embedderLocator, null)) {
            this._embedderLocator = new bare.createInstance(any, null, this.packageMap);
        }
        return this._embedderLocator;
    };
    PackageMapDisposition.prototype.getSdkExtensionFinder = function (resourceProvider) {
        return this._sdkExtensionFinder = (this._sdkExtensionFinder) || (new bare.createInstance(any, null, this.packageMap));
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackageMapDisposition.prototype, "packageRoot", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], PackageMapDisposition.prototype, "PackageMapDisposition", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackageMapDisposition.prototype, "packages", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackageMapDisposition.prototype, "createPackageUriResolvers", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackageMapDisposition.prototype, "getEmbedderLocator", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackageMapDisposition.prototype, "getSdkExtensionFinder", null);
    PackageMapDisposition = __decorate([
        utils_1.DartClass
    ], PackageMapDisposition);
    return PackageMapDisposition;
}(FolderDisposition));
exports.PackageMapDisposition = PackageMapDisposition;
var PackagesFileDisposition = /** @class */ (function (_super) {
    __extends(PackagesFileDisposition, _super);
    function PackagesFileDisposition(packages) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    PackagesFileDisposition.prototype.PackagesFileDisposition = function (packages) {
        this.packages = packages;
    };
    Object.defineProperty(PackagesFileDisposition.prototype, "packageRoot", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    PackagesFileDisposition.prototype.buildPackageMap = function (resourceProvider) {
        var _this = this;
        if (this.packageMap == null) {
            this.packageMap = new core.DartMap.literal([]);
            if (this.packages != null) {
                this.packages.asMap().forEach(function (name, uri) {
                    if (uri.scheme == 'file' || uri.scheme == '') {
                        var path = resourceProvider.pathContext.fromUri(uri);
                        _this.packageMap.set(name, new core.DartList.literal(resourceProvider.getFolder(path)));
                    }
                });
            }
        }
        return this.packageMap;
    };
    PackagesFileDisposition.prototype.createPackageUriResolvers = function (resourceProvider) {
        if (this.packages != null) {
            var packageMap = this.buildPackageMap(resourceProvider);
            return new core.DartList.literal(new bare.createInstance(any, null, packageMap));
        }
        else {
            return new core.DartList.literal();
        }
    };
    PackagesFileDisposition.prototype.getEmbedderLocator = function (resourceProvider) {
        if (utils_1.op(utils_1.Op.EQUALS, this._embedderLocator, null)) {
            this._embedderLocator = new bare.createInstance(any, null, this.buildPackageMap(resourceProvider));
        }
        return this._embedderLocator;
    };
    PackagesFileDisposition.prototype.getSdkExtensionFinder = function (resourceProvider) {
        return this._sdkExtensionFinder = (this._sdkExtensionFinder) || (new bare.createInstance(any, null, this.buildPackageMap(resourceProvider)));
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackagesFileDisposition.prototype, "packages", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], PackagesFileDisposition.prototype, "PackagesFileDisposition", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackagesFileDisposition.prototype, "packageRoot", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackagesFileDisposition.prototype, "createPackageUriResolvers", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackagesFileDisposition.prototype, "getEmbedderLocator", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], PackagesFileDisposition.prototype, "getSdkExtensionFinder", null);
    PackagesFileDisposition = __decorate([
        utils_1.DartClass
    ], PackagesFileDisposition);
    return PackagesFileDisposition;
}(FolderDisposition));
exports.PackagesFileDisposition = PackagesFileDisposition;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=context_manager.js.map
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
var ServerPlugin = /** @class */ (function () {
    function ServerPlugin() {
    }
    ServerPlugin_1 = ServerPlugin;
    Object.defineProperty(ServerPlugin, "ANALYZED_FILE_PATTERNS_EXTENSION_POINT", {
        get: function () {
            if (this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT === undefined) {
                this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT = 'analyzedFilePatterns';
            }
            return this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "ASSIST_CONTRIBUTOR_EXTENSION_POINT", {
        get: function () {
            if (this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT === undefined) {
                this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT = 'assistContributor';
            }
            return this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "COMPLETION_CONTRIBUTOR_EXTENSION_POINT", {
        get: function () {
            if (this.__$COMPLETION_CONTRIBUTOR_EXTENSION_POINT === undefined) {
                this.__$COMPLETION_CONTRIBUTOR_EXTENSION_POINT = 'completionContributor';
            }
            return this.__$COMPLETION_CONTRIBUTOR_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "DOMAIN_EXTENSION_POINT", {
        get: function () {
            if (this.__$DOMAIN_EXTENSION_POINT === undefined) {
                this.__$DOMAIN_EXTENSION_POINT = 'domain';
            }
            return this.__$DOMAIN_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "FIX_CONTRIBUTOR_EXTENSION_POINT", {
        get: function () {
            if (this.__$FIX_CONTRIBUTOR_EXTENSION_POINT === undefined) {
                this.__$FIX_CONTRIBUTOR_EXTENSION_POINT = 'fixContributor';
            }
            return this.__$FIX_CONTRIBUTOR_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "INDEX_CONTRIBUTOR_EXTENSION_POINT", {
        get: function () {
            if (this.__$INDEX_CONTRIBUTOR_EXTENSION_POINT === undefined) {
                this.__$INDEX_CONTRIBUTOR_EXTENSION_POINT = 'indexContributor';
            }
            return this.__$INDEX_CONTRIBUTOR_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "NAVIGATION_CONTRIBUTOR_EXTENSION_POINT", {
        get: function () {
            if (this.__$NAVIGATION_CONTRIBUTOR_EXTENSION_POINT === undefined) {
                this.__$NAVIGATION_CONTRIBUTOR_EXTENSION_POINT = 'navigationContributor';
            }
            return this.__$NAVIGATION_CONTRIBUTOR_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT", {
        get: function () {
            if (this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT === undefined) {
                this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT = 'occurrencesContributor';
            }
            return this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "SET_ANALISYS_DOMAIN_EXTENSION_POINT", {
        get: function () {
            if (this.__$SET_ANALISYS_DOMAIN_EXTENSION_POINT === undefined) {
                this.__$SET_ANALISYS_DOMAIN_EXTENSION_POINT = 'setAnalysisDomain';
            }
            return this.__$SET_ANALISYS_DOMAIN_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin, "UNIQUE_IDENTIFIER", {
        get: function () {
            if (this.__$UNIQUE_IDENTIFIER === undefined) {
                this.__$UNIQUE_IDENTIFIER = 'analysis_server.core';
            }
            return this.__$UNIQUE_IDENTIFIER;
        },
        enumerable: true,
        configurable: true
    });
    ServerPlugin.prototype.ServerPlugin = function () {
    };
    Object.defineProperty(ServerPlugin.prototype, "analyzedFilePatterns", {
        get: function () {
            var patterns = new core.DartList.literal();
            for (var _i = 0, _a = this.analyzedFilePatternsExtensionPoint.extensions; _i < _a.length; _i++) {
                var extension = _a[_i];
                patterns.addAll(extension);
            }
            return patterns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin.prototype, "assistContributors", {
        get: function () {
            return this.assistContributorExtensionPoint.extensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin.prototype, "completionContributors", {
        get: function () {
            return this.completionContributorExtensionPoint.extensions.map(function (factory) {
                return factory();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin.prototype, "fixContributors", {
        get: function () {
            return this.fixContributorExtensionPoint.extensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin.prototype, "navigationContributors", {
        get: function () {
            return this.navigationContributorExtensionPoint.extensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin.prototype, "occurrencesContributors", {
        get: function () {
            return this.occurrencesContributorExtensionPoint.extensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin.prototype, "setAnalysisDomainFunctions", {
        get: function () {
            return this.setAnalysisDomainExtensionPoint.extensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlugin.prototype, "uniqueIdentifier", {
        get: function () {
            return ServerPlugin_1.UNIQUE_IDENTIFIER;
        },
        enumerable: true,
        configurable: true
    });
    ServerPlugin.prototype.createDomains = function (server) {
        if (utils_1.op(utils_1.Op.EQUALS, this.domainExtensionPoint, null)) {
            return new core.DartList.literal();
        }
        return this.domainExtensionPoint.extensions.map(function (factory) {
            return factory(server);
        }).toList();
    };
    ServerPlugin.prototype.registerExtensionPoints = function (registerExtensionPoint) {
        this.analyzedFilePatternsExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.ANALYZED_FILE_PATTERNS_EXTENSION_POINT, null);
        registerExtensionPoint(this.analyzedFilePatternsExtensionPoint);
        this.assistContributorExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.ASSIST_CONTRIBUTOR_EXTENSION_POINT, null);
        registerExtensionPoint(this.assistContributorExtensionPoint);
        this.completionContributorExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.COMPLETION_CONTRIBUTOR_EXTENSION_POINT, null);
        registerExtensionPoint(this.completionContributorExtensionPoint);
        this.domainExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.DOMAIN_EXTENSION_POINT, null);
        registerExtensionPoint(this.domainExtensionPoint);
        this.fixContributorExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.FIX_CONTRIBUTOR_EXTENSION_POINT, null);
        registerExtensionPoint(this.fixContributorExtensionPoint);
        this.navigationContributorExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.NAVIGATION_CONTRIBUTOR_EXTENSION_POINT, null);
        registerExtensionPoint(this.navigationContributorExtensionPoint);
        this.occurrencesContributorExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT, null);
        registerExtensionPoint(this.occurrencesContributorExtensionPoint);
        this.setAnalysisDomainExtensionPoint = new bare.createInstance(any, null, this, ServerPlugin_1.SET_ANALISYS_DOMAIN_EXTENSION_POINT, null);
        registerExtensionPoint(this.setAnalysisDomainExtensionPoint);
    };
    ServerPlugin.prototype.registerExtensions = function (registerExtension) {
        var patterns = new core.DartList.literal("**/*." + AnalysisEngine.SUFFIX_DART, "**/*." + AnalysisEngine.SUFFIX_HTML, "**/*." + AnalysisEngine.SUFFIX_HTM, "**/" + AnalysisEngine.ANALYSIS_OPTIONS_FILE, "**/" + AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        registerExtension(ANALYZED_FILE_PATTERNS_EXTENSION_POINT_ID, patterns);
        registerExtension(ASSIST_CONTRIBUTOR_EXTENSION_POINT_ID, new bare.createInstance(any, null));
        registerExtension(NAVIGATION_CONTRIBUTOR_EXTENSION_POINT_ID, new bare.createInstance(any, null));
        registerExtension(OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID, new bare.createInstance(any, null));
        var domainId = Plugin.join(ServerPlugin_1.UNIQUE_IDENTIFIER, ServerPlugin_1.DOMAIN_EXTENSION_POINT);
        registerExtension(domainId, function (server) {
            return new bare.createInstance(any, null, server);
        });
        registerExtension(domainId, function (server) {
            return new bare.createInstance(any, null, server);
        });
        registerExtension(domainId, function (server) {
            return new bare.createInstance(any, null, server);
        });
        registerExtension(domainId, function (server) {
            return new bare.createInstance(any, null, server);
        });
        registerExtension(domainId, function (server) {
            return new bare.createInstance(any, null, server);
        });
        registerExtension(domainId, function (server) {
            return new bare.createInstance(any, null, server);
        });
        registerExtension(domainId, function (server) {
            return new bare.createInstance(any, null, server);
        });
        registerExtension(FIX_CONTRIBUTOR_EXTENSION_POINT_ID, new bare.createInstance(any, null));
    };
    var ServerPlugin_1;
    __decorate([
        utils_1.defaultConstructor
    ], ServerPlugin.prototype, "ServerPlugin", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerPlugin.prototype, "uniqueIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerPlugin.prototype, "registerExtensionPoints", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerPlugin.prototype, "registerExtensions", null);
    ServerPlugin = ServerPlugin_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], ServerPlugin);
    return ServerPlugin;
}());
exports.ServerPlugin = ServerPlugin;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=server_plugin.js.map
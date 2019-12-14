"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var DartCompletionPlugin = /** @class */ (function () {
    function DartCompletionPlugin() {
    }
    DartCompletionPlugin_1 = DartCompletionPlugin;
    Object.defineProperty(DartCompletionPlugin, "CONTRIBUTOR_EXTENSION_POINT", {
        get: function () {
            if (this.__$CONTRIBUTOR_EXTENSION_POINT === undefined) {
                this.__$CONTRIBUTOR_EXTENSION_POINT = 'contributor';
            }
            return this.__$CONTRIBUTOR_EXTENSION_POINT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionPlugin, "UNIQUE_IDENTIFIER", {
        get: function () {
            if (this.__$UNIQUE_IDENTIFIER === undefined) {
                this.__$UNIQUE_IDENTIFIER = 'dart.completion';
            }
            return this.__$UNIQUE_IDENTIFIER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionPlugin.prototype, "contributors", {
        get: function () {
            return this._contributorExtensionPoint.extensions.map(function (factory) {
                return factory();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionPlugin.prototype, "uniqueIdentifier", {
        get: function () {
            return DartCompletionPlugin_1.UNIQUE_IDENTIFIER;
        },
        enumerable: true,
        configurable: true
    });
    DartCompletionPlugin.prototype.registerExtensionPoints = function (registerExtensionPoint) {
        this._contributorExtensionPoint = new bare.createInstance(any, null, this, DartCompletionPlugin_1.CONTRIBUTOR_EXTENSION_POINT, null);
        registerExtensionPoint(this._contributorExtensionPoint);
    };
    DartCompletionPlugin.prototype.registerExtensions = function (registerExtension) {
        registerExtension(COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID, function () {
            return new bare.createInstance(any, null);
        });
    };
    DartCompletionPlugin.prototype.DartCompletionPlugin = function () {
    };
    var DartCompletionPlugin_1;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionPlugin.prototype, "uniqueIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionPlugin.prototype, "registerExtensionPoints", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartCompletionPlugin.prototype, "registerExtensions", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartCompletionPlugin.prototype, "DartCompletionPlugin", null);
    DartCompletionPlugin = DartCompletionPlugin_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DartCompletionPlugin);
    return DartCompletionPlugin;
}());
exports.DartCompletionPlugin = DartCompletionPlugin;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "dartCompletionPlugin", {
        get: function () {
            if (this.__$dartCompletionPlugin === undefined) {
                this.__$dartCompletionPlugin = new DartCompletionPlugin();
            }
            return this.__$dartCompletionPlugin;
        },
        set: function (__$value) {
            this.__$dartCompletionPlugin = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion_plugin.js.map
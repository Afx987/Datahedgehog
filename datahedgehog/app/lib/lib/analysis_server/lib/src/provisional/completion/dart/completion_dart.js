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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var DartCompletionContributor = /** @class */ (function () {
    function DartCompletionContributor() {
    }
    DartCompletionContributor.prototype.computeSuggestions = function (request) { throw 'abstract'; };
    DartCompletionContributor.prototype.DartCompletionContributor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], DartCompletionContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartCompletionContributor.prototype, "DartCompletionContributor", null);
    DartCompletionContributor = __decorate([
        utils_1.DartClass
    ], DartCompletionContributor);
    return DartCompletionContributor;
}());
exports.DartCompletionContributor = DartCompletionContributor;
var DartCompletionRequest = /** @class */ (function (_super) {
    __extends(DartCompletionRequest, _super);
    function DartCompletionRequest() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    Object.defineProperty(DartCompletionRequest.prototype, "coreLib", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "dotTarget", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "includeIdentifiers", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "libraryElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "librarySource", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "objectType", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "opType", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "sourceFactory", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartCompletionRequest.prototype, "target", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    DartCompletionRequest.prototype.DartCompletionRequest = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "coreLib", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "dotTarget", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "includeIdentifiers", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "libraryElement", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "librarySource", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "objectType", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "opType", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "sourceFactory", null);
    __decorate([
        utils_1.AbstractProperty
    ], DartCompletionRequest.prototype, "target", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartCompletionRequest.prototype, "DartCompletionRequest", null);
    DartCompletionRequest = __decorate([
        utils_1.DartClass
    ], DartCompletionRequest);
    return DartCompletionRequest;
}(any));
exports.DartCompletionRequest = DartCompletionRequest;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "DART_RELEVANCE_COMMON_USAGE", {
        get: function () {
            if (this.__$DART_RELEVANCE_COMMON_USAGE === undefined) {
                this.__$DART_RELEVANCE_COMMON_USAGE = 1200;
            }
            return this.__$DART_RELEVANCE_COMMON_USAGE;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_COMMON_USAGE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_DEFAULT", {
        get: function () {
            if (this.__$DART_RELEVANCE_DEFAULT === undefined) {
                this.__$DART_RELEVANCE_DEFAULT = 1000;
            }
            return this.__$DART_RELEVANCE_DEFAULT;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_DEFAULT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_HIGH", {
        get: function () {
            if (this.__$DART_RELEVANCE_HIGH === undefined) {
                this.__$DART_RELEVANCE_HIGH = 2000;
            }
            return this.__$DART_RELEVANCE_HIGH;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_HIGH = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_INCREMENT", {
        get: function () {
            if (this.__$DART_RELEVANCE_INCREMENT === undefined) {
                this.__$DART_RELEVANCE_INCREMENT = 100;
            }
            return this.__$DART_RELEVANCE_INCREMENT;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_INCREMENT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_INHERITED_ACCESSOR", {
        get: function () {
            if (this.__$DART_RELEVANCE_INHERITED_ACCESSOR === undefined) {
                this.__$DART_RELEVANCE_INHERITED_ACCESSOR = 1057;
            }
            return this.__$DART_RELEVANCE_INHERITED_ACCESSOR;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_INHERITED_ACCESSOR = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_INHERITED_FIELD", {
        get: function () {
            if (this.__$DART_RELEVANCE_INHERITED_FIELD === undefined) {
                this.__$DART_RELEVANCE_INHERITED_FIELD = 1058;
            }
            return this.__$DART_RELEVANCE_INHERITED_FIELD;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_INHERITED_FIELD = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_INHERITED_METHOD", {
        get: function () {
            if (this.__$DART_RELEVANCE_INHERITED_METHOD === undefined) {
                this.__$DART_RELEVANCE_INHERITED_METHOD = 1057;
            }
            return this.__$DART_RELEVANCE_INHERITED_METHOD;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_INHERITED_METHOD = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_KEYWORD", {
        get: function () {
            if (this.__$DART_RELEVANCE_KEYWORD === undefined) {
                this.__$DART_RELEVANCE_KEYWORD = 1055;
            }
            return this.__$DART_RELEVANCE_KEYWORD;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_KEYWORD = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_LOCAL_ACCESSOR", {
        get: function () {
            if (this.__$DART_RELEVANCE_LOCAL_ACCESSOR === undefined) {
                this.__$DART_RELEVANCE_LOCAL_ACCESSOR = 1057;
            }
            return this.__$DART_RELEVANCE_LOCAL_ACCESSOR;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_LOCAL_ACCESSOR = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_LOCAL_FIELD", {
        get: function () {
            if (this.__$DART_RELEVANCE_LOCAL_FIELD === undefined) {
                this.__$DART_RELEVANCE_LOCAL_FIELD = 1058;
            }
            return this.__$DART_RELEVANCE_LOCAL_FIELD;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_LOCAL_FIELD = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_LOCAL_FUNCTION", {
        get: function () {
            if (this.__$DART_RELEVANCE_LOCAL_FUNCTION === undefined) {
                this.__$DART_RELEVANCE_LOCAL_FUNCTION = 1056;
            }
            return this.__$DART_RELEVANCE_LOCAL_FUNCTION;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_LOCAL_FUNCTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_LOCAL_METHOD", {
        get: function () {
            if (this.__$DART_RELEVANCE_LOCAL_METHOD === undefined) {
                this.__$DART_RELEVANCE_LOCAL_METHOD = 1057;
            }
            return this.__$DART_RELEVANCE_LOCAL_METHOD;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_LOCAL_METHOD = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE", {
        get: function () {
            if (this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE === undefined) {
                this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE = 1056;
            }
            return this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_LOCAL_VARIABLE", {
        get: function () {
            if (this.__$DART_RELEVANCE_LOCAL_VARIABLE === undefined) {
                this.__$DART_RELEVANCE_LOCAL_VARIABLE = 1059;
            }
            return this.__$DART_RELEVANCE_LOCAL_VARIABLE;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_LOCAL_VARIABLE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_LOW", {
        get: function () {
            if (this.__$DART_RELEVANCE_LOW === undefined) {
                this.__$DART_RELEVANCE_LOW = 500;
            }
            return this.__$DART_RELEVANCE_LOW;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_LOW = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_NAMED_PARAMETER", {
        get: function () {
            if (this.__$DART_RELEVANCE_NAMED_PARAMETER === undefined) {
                this.__$DART_RELEVANCE_NAMED_PARAMETER = 1060;
            }
            return this.__$DART_RELEVANCE_NAMED_PARAMETER;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_NAMED_PARAMETER = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DART_RELEVANCE_PARAMETER", {
        get: function () {
            if (this.__$DART_RELEVANCE_PARAMETER === undefined) {
                this.__$DART_RELEVANCE_PARAMETER = 1059;
            }
            return this.__$DART_RELEVANCE_PARAMETER;
        },
        set: function (__$value) {
            this.__$DART_RELEVANCE_PARAMETER = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion_dart.js.map
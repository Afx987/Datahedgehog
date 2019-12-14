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
var Fix = /** @class */ (function () {
    function Fix(kind, change) {
    }
    Object.defineProperty(Fix, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fix, "SORT_BY_RELEVANCE", {
        get: function () {
            if (this.__$SORT_BY_RELEVANCE === undefined) {
                this.__$SORT_BY_RELEVANCE = function (firstFix, secondFix) {
                    return firstFix.kind.relevance - secondFix.kind.relevance;
                };
            }
            return this.__$SORT_BY_RELEVANCE;
        },
        set: function (__$value) {
            this.__$SORT_BY_RELEVANCE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Fix.prototype.Fix = function (kind, change) {
        this.kind = kind;
        this.change = change;
    };
    Fix.prototype.toString = function () {
        return "Fix(kind=" + this.kind + ", change=" + this.change + ")";
    };
    __decorate([
        utils_1.defaultConstructor
    ], Fix.prototype, "Fix", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Fix.prototype, "toString", null);
    Fix = __decorate([
        utils_1.DartClass
    ], Fix);
    return Fix;
}());
exports.Fix = Fix;
var FixContext = /** @class */ (function () {
    function FixContext() {
    }
    Object.defineProperty(FixContext.prototype, "analysisDriver", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixContext.prototype, "error", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixContext.prototype, "resourceProvider", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    FixContext.prototype.FixContext = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], FixContext.prototype, "analysisDriver", null);
    __decorate([
        utils_1.AbstractProperty
    ], FixContext.prototype, "error", null);
    __decorate([
        utils_1.AbstractProperty
    ], FixContext.prototype, "resourceProvider", null);
    __decorate([
        utils_1.defaultConstructor
    ], FixContext.prototype, "FixContext", null);
    FixContext = __decorate([
        utils_1.DartClass
    ], FixContext);
    return FixContext;
}());
exports.FixContext = FixContext;
var FixContributor = /** @class */ (function () {
    function FixContributor() {
    }
    FixContributor.prototype.computeFixes = function (context) { throw 'abstract'; };
    FixContributor.prototype.FixContributor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], FixContributor.prototype, "computeFixes", null);
    __decorate([
        utils_1.defaultConstructor
    ], FixContributor.prototype, "FixContributor", null);
    FixContributor = __decorate([
        utils_1.DartClass
    ], FixContributor);
    return FixContributor;
}());
exports.FixContributor = FixContributor;
var FixKind = /** @class */ (function () {
    function FixKind(name, relevance, message) {
    }
    FixKind.prototype.FixKind = function (name, relevance, message) {
        this.name = name;
        this.relevance = relevance;
        this.message = message;
    };
    FixKind.prototype.toString = function () {
        return this.name;
    };
    __decorate([
        utils_1.defaultConstructor
    ], FixKind.prototype, "FixKind", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], FixKind.prototype, "toString", null);
    FixKind = __decorate([
        utils_1.DartClass
    ], FixKind);
    return FixKind;
}());
exports.FixKind = FixKind;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=fix_core.js.map
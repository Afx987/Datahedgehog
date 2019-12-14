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
var Assist = /** @class */ (function () {
    function Assist(kind, change) {
    }
    Object.defineProperty(Assist, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Assist, "SORT_BY_RELEVANCE", {
        get: function () {
            if (this.__$SORT_BY_RELEVANCE === undefined) {
                this.__$SORT_BY_RELEVANCE = function (firstAssist, secondAssist) {
                    return firstAssist.kind.relevance - secondAssist.kind.relevance;
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
    Assist.prototype.Assist = function (kind, change) {
        this.kind = kind;
        this.change = change;
    };
    Assist.prototype.toString = function () {
        return "Assist(kind=" + this.kind + ", change=" + this.change + ")";
    };
    __decorate([
        utils_1.defaultConstructor
    ], Assist.prototype, "Assist", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Assist.prototype, "toString", null);
    Assist = __decorate([
        utils_1.DartClass
    ], Assist);
    return Assist;
}());
exports.Assist = Assist;
var AssistContext = /** @class */ (function () {
    function AssistContext() {
    }
    Object.defineProperty(AssistContext.prototype, "analysisDriver", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssistContext.prototype, "selectionLength", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssistContext.prototype, "selectionOffset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssistContext.prototype, "source", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    AssistContext.prototype.AssistContext = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], AssistContext.prototype, "analysisDriver", null);
    __decorate([
        utils_1.AbstractProperty
    ], AssistContext.prototype, "selectionLength", null);
    __decorate([
        utils_1.AbstractProperty
    ], AssistContext.prototype, "selectionOffset", null);
    __decorate([
        utils_1.AbstractProperty
    ], AssistContext.prototype, "source", null);
    __decorate([
        utils_1.defaultConstructor
    ], AssistContext.prototype, "AssistContext", null);
    AssistContext = __decorate([
        utils_1.DartClass
    ], AssistContext);
    return AssistContext;
}());
exports.AssistContext = AssistContext;
var AssistContributor = /** @class */ (function () {
    function AssistContributor() {
    }
    AssistContributor.prototype.computeAssists = function (context) { throw 'abstract'; };
    AssistContributor.prototype.AssistContributor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], AssistContributor.prototype, "computeAssists", null);
    __decorate([
        utils_1.defaultConstructor
    ], AssistContributor.prototype, "AssistContributor", null);
    AssistContributor = __decorate([
        utils_1.DartClass
    ], AssistContributor);
    return AssistContributor;
}());
exports.AssistContributor = AssistContributor;
var AssistKind = /** @class */ (function () {
    function AssistKind(name, relevance, message) {
    }
    AssistKind.prototype.AssistKind = function (name, relevance, message) {
        this.name = name;
        this.relevance = relevance;
        this.message = message;
    };
    AssistKind.prototype.toString = function () {
        return this.name;
    };
    __decorate([
        utils_1.defaultConstructor
    ], AssistKind.prototype, "AssistKind", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AssistKind.prototype, "toString", null);
    AssistKind = __decorate([
        utils_1.DartClass
    ], AssistKind);
    return AssistKind;
}());
exports.AssistKind = AssistKind;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=assist_core.js.map
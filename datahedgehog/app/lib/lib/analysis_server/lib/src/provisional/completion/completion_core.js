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
var AbortCompletion = /** @class */ (function () {
    function AbortCompletion() {
    }
    AbortCompletion.prototype.AbortCompletion = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], AbortCompletion.prototype, "AbortCompletion", null);
    AbortCompletion = __decorate([
        utils_1.DartClass
    ], AbortCompletion);
    return AbortCompletion;
}());
exports.AbortCompletion = AbortCompletion;
var CompletionContributor = /** @class */ (function () {
    function CompletionContributor() {
    }
    CompletionContributor.prototype.computeSuggestions = function (request) { throw 'abstract'; };
    CompletionContributor.prototype.CompletionContributor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], CompletionContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], CompletionContributor.prototype, "CompletionContributor", null);
    CompletionContributor = __decorate([
        utils_1.DartClass
    ], CompletionContributor);
    return CompletionContributor;
}());
exports.CompletionContributor = CompletionContributor;
var CompletionRequest = /** @class */ (function () {
    function CompletionRequest() {
    }
    Object.defineProperty(CompletionRequest.prototype, "ideOptions", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionRequest.prototype, "offset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionRequest.prototype, "resourceProvider", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionRequest.prototype, "result", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionRequest.prototype, "source", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionRequest.prototype, "sourceContents", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    CompletionRequest.prototype.checkAborted = function () { throw 'abstract'; };
    CompletionRequest.prototype.CompletionRequest = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], CompletionRequest.prototype, "ideOptions", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompletionRequest.prototype, "offset", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompletionRequest.prototype, "resourceProvider", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompletionRequest.prototype, "result", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompletionRequest.prototype, "source", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompletionRequest.prototype, "sourceContents", null);
    __decorate([
        utils_1.Abstract
    ], CompletionRequest.prototype, "checkAborted", null);
    __decorate([
        utils_1.defaultConstructor
    ], CompletionRequest.prototype, "CompletionRequest", null);
    CompletionRequest = __decorate([
        utils_1.DartClass
    ], CompletionRequest);
    return CompletionRequest;
}());
exports.CompletionRequest = CompletionRequest;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        set: function (__$value) {
            this.__$EMPTY_LIST = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion_core.js.map
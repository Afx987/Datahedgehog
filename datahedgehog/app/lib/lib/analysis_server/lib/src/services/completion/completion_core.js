"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var CompletionRequestImpl = /** @class */ (function () {
    function CompletionRequestImpl(result, resourceProvider, source, offset, performance, ideOptions) {
    }
    CompletionRequestImpl.prototype.CompletionRequestImpl = function (result, resourceProvider, source, offset, performance, ideOptions) {
        this._aborted = false;
        this.source = source;
        this.offset = offset;
        this.replacementOffset = offset;
        this.replacementLength = 0;
        this.result = result;
        this.resourceProvider = resourceProvider;
        this.performance = performance;
        this.ideOptions = ideOptions;
    };
    Object.defineProperty(CompletionRequestImpl.prototype, "sourceContents", {
        get: function () {
            return this.result.content;
        },
        enumerable: true,
        configurable: true
    });
    CompletionRequestImpl.prototype.abort = function () {
        this._aborted = true;
    };
    CompletionRequestImpl.prototype.checkAborted = function () {
        if (this._aborted) {
            throw new bare.createInstance(any, null);
        }
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestImpl.prototype, "result", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestImpl.prototype, "source", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestImpl.prototype, "offset", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestImpl.prototype, "ideOptions", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestImpl.prototype, "resourceProvider", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], CompletionRequestImpl.prototype, "CompletionRequestImpl", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestImpl.prototype, "sourceContents", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], CompletionRequestImpl.prototype, "checkAborted", null);
    CompletionRequestImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], CompletionRequestImpl);
    return CompletionRequestImpl;
}());
exports.CompletionRequestImpl = CompletionRequestImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion_core.js.map
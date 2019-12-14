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
var ServerOperation = /** @class */ (function () {
    function ServerOperation(context) {
    }
    ServerOperation.prototype.ServerOperation = function (context) {
        this.context = context;
    };
    Object.defineProperty(ServerOperation.prototype, "priority", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ServerOperation.prototype.perform = function (server) { throw 'abstract'; };
    __decorate([
        utils_1.defaultConstructor
    ], ServerOperation.prototype, "ServerOperation", null);
    __decorate([
        utils_1.AbstractProperty
    ], ServerOperation.prototype, "priority", null);
    __decorate([
        utils_1.Abstract
    ], ServerOperation.prototype, "perform", null);
    ServerOperation = __decorate([
        utils_1.DartClass
    ], ServerOperation);
    return ServerOperation;
}());
exports.ServerOperation = ServerOperation;
var ServerOperationPriority = /** @class */ (function () {
    function ServerOperationPriority() {
    }
    ServerOperationPriority_1 = ServerOperationPriority;
    Object.defineProperty(ServerOperationPriority, "COUNT", {
        get: function () {
            if (this.__$COUNT === undefined) {
                this.__$COUNT = 6;
            }
            return this.__$COUNT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerOperationPriority, "ANALYSIS_NOTIFICATION", {
        get: function () {
            if (this.__$ANALYSIS_NOTIFICATION === undefined) {
                this.__$ANALYSIS_NOTIFICATION = new ServerOperationPriority_1._(0, "ANALYSIS_NOTIFICATION");
            }
            return this.__$ANALYSIS_NOTIFICATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerOperationPriority, "ANALYSIS_INDEX", {
        get: function () {
            if (this.__$ANALYSIS_INDEX === undefined) {
                this.__$ANALYSIS_INDEX = new ServerOperationPriority_1._(1, "ANALYSIS_INDEX");
            }
            return this.__$ANALYSIS_INDEX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerOperationPriority, "PRIORITY_ANALYSIS_CONTINUE", {
        get: function () {
            if (this.__$PRIORITY_ANALYSIS_CONTINUE === undefined) {
                this.__$PRIORITY_ANALYSIS_CONTINUE = new ServerOperationPriority_1._(2, "PRIORITY_ANALYSIS_CONTINUE");
            }
            return this.__$PRIORITY_ANALYSIS_CONTINUE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerOperationPriority, "PRIORITY_ANALYSIS", {
        get: function () {
            if (this.__$PRIORITY_ANALYSIS === undefined) {
                this.__$PRIORITY_ANALYSIS = new ServerOperationPriority_1._(3, "PRIORITY_ANALYSIS");
            }
            return this.__$PRIORITY_ANALYSIS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerOperationPriority, "ANALYSIS_CONTINUE", {
        get: function () {
            if (this.__$ANALYSIS_CONTINUE === undefined) {
                this.__$ANALYSIS_CONTINUE = new ServerOperationPriority_1._(4, "ANALYSIS_CONTINUE");
            }
            return this.__$ANALYSIS_CONTINUE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerOperationPriority, "ANALYSIS", {
        get: function () {
            if (this.__$ANALYSIS === undefined) {
                this.__$ANALYSIS = new ServerOperationPriority_1._(5, "ANALYSIS");
            }
            return this.__$ANALYSIS;
        },
        enumerable: true,
        configurable: true
    });
    ServerOperationPriority.prototype._ = function (ordinal, name) {
        this.ordinal = ordinal;
        this.name = name;
    };
    ServerOperationPriority.prototype.toString = function () {
        return this.name;
    };
    var ServerOperationPriority_1;
    __decorate([
        utils_1.namedConstructor
    ], ServerOperationPriority.prototype, "_", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ServerOperationPriority.prototype, "toString", null);
    ServerOperationPriority = ServerOperationPriority_1 = __decorate([
        utils_1.DartClass
    ], ServerOperationPriority);
    return ServerOperationPriority;
}());
exports.ServerOperationPriority = ServerOperationPriority;
var MergeableOperation = /** @class */ (function (_super) {
    __extends(MergeableOperation, _super);
    function MergeableOperation(context) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    MergeableOperation.prototype.MergeableOperation = function (context) {
        _super.prototype.ServerOperation.call(this, context);
    };
    MergeableOperation.prototype.merge = function (other) { throw 'abstract'; };
    __decorate([
        utils_1.defaultConstructor
    ], MergeableOperation.prototype, "MergeableOperation", null);
    __decorate([
        utils_1.Abstract
    ], MergeableOperation.prototype, "merge", null);
    MergeableOperation = __decorate([
        utils_1.DartClass
    ], MergeableOperation);
    return MergeableOperation;
}(ServerOperation));
exports.MergeableOperation = MergeableOperation;
var SourceSensitiveOperation = /** @class */ (function (_super) {
    __extends(SourceSensitiveOperation, _super);
    function SourceSensitiveOperation(context) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    SourceSensitiveOperation.prototype.SourceSensitiveOperation = function (context) {
        _super.prototype.ServerOperation.call(this, context);
    };
    SourceSensitiveOperation.prototype.shouldBeDiscardedOnSourceChange = function (source) { throw 'abstract'; };
    __decorate([
        utils_1.defaultConstructor
    ], SourceSensitiveOperation.prototype, "SourceSensitiveOperation", null);
    __decorate([
        utils_1.Abstract
    ], SourceSensitiveOperation.prototype, "shouldBeDiscardedOnSourceChange", null);
    SourceSensitiveOperation = __decorate([
        utils_1.DartClass
    ], SourceSensitiveOperation);
    return SourceSensitiveOperation;
}(ServerOperation));
exports.SourceSensitiveOperation = SourceSensitiveOperation;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=operation.js.map
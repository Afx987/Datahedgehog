"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/operation/operation_queue.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var collection = require("@dart2ts/dart/core");
var ServerOperationQueue = /** @class */ (function () {
    function ServerOperationQueue() {
    }
    ServerOperationQueue.prototype.ServerOperationQueue = function () {
        this._queues = new core.DartList.literal();
        for (var i = 0; i < ServerOperationPriority.COUNT; i++) {
            var queue = new collection.DoubleLinkedQueue();
            this._queues.add(queue);
        }
    };
    Object.defineProperty(ServerOperationQueue.prototype, "isEmpty", {
        get: function () {
            return this._queues.every(function (queue) {
                return queue.isEmpty;
            });
        },
        enumerable: true,
        configurable: true
    });
    ServerOperationQueue.prototype.add = function (operation) {
        var queueIndex = operation.priority.ordinal;
        var queue = this._queues[queueIndex];
        for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
            var existingOperation = queue_1[_i];
            if (_common_1.is(existingOperation, any) && existingOperation.merge(operation)) {
                return;
            }
        }
        queue.addLast(operation);
    };
    ServerOperationQueue.prototype.clear = function () {
        for (var _i = 0, _a = this._queues; _i < _a.length; _i++) {
            var queue = _a[_i];
            queue.clear();
        }
    };
    ServerOperationQueue.prototype.contextRemoved = function (context) {
        for (var _i = 0, _a = this._queues; _i < _a.length; _i++) {
            var queue = _a[_i];
            queue.removeWhere(function (operation) {
                return utils_1.op(utils_1.Op.EQUALS, operation.context, context);
            });
        }
    };
    ServerOperationQueue.prototype.peek = function () {
        for (var _i = 0, _a = this._queues; _i < _a.length; _i++) {
            var queue = _a[_i];
            if (!queue.isEmpty) {
                return queue.first;
            }
        }
        return null;
    };
    ServerOperationQueue.prototype.reschedule = function () {
        var operations = new core.DartList.literal();
        for (var _i = 0, _a = this._queues; _i < _a.length; _i++) {
            var queue = _a[_i];
            operations.addAll(queue);
            queue.clear();
        }
        operations.forEach(this.add.bind(this));
    };
    ServerOperationQueue.prototype.sourceAboutToChange = function (source) {
        for (var _i = 0, _a = this._queues; _i < _a.length; _i++) {
            var queue = _a[_i];
            queue.removeWhere(function (operation) {
                if (_common_1.is(operation, any)) {
                    return operation.shouldBeDiscardedOnSourceChange(source);
                }
                return false;
            });
        }
    };
    ServerOperationQueue.prototype.take = function () {
        for (var _i = 0, _a = this._queues; _i < _a.length; _i++) {
            var queue = _a[_i];
            if (!queue.isEmpty) {
                return queue.removeFirst();
            }
        }
        return null;
    };
    ServerOperationQueue.prototype.takeIf = function (test) {
        for (var _i = 0, _a = this._queues; _i < _a.length; _i++) {
            var queue = _a[_i];
            for (var _b = 0, queue_2 = queue; _b < queue_2.length; _b++) {
                var operation = queue_2[_b];
                if (test(operation)) {
                    queue.remove(operation);
                    return operation;
                }
            }
        }
        return null;
    };
    __decorate([
        utils_1.defaultConstructor
    ], ServerOperationQueue.prototype, "ServerOperationQueue", null);
    ServerOperationQueue = __decorate([
        utils_1.DartClass
    ], ServerOperationQueue);
    return ServerOperationQueue;
}());
exports.ServerOperationQueue = ServerOperationQueue;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=operation_queue.js.map
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
var CompletionPerformance = /** @class */ (function () {
    function CompletionPerformance() {
    }
    CompletionPerformance_1 = CompletionPerformance;
    CompletionPerformance.prototype.CompletionPerformance = function () {
        this.start = new core.DartDateTime.now();
        this._startTimes = new core.DartMap();
        this._stopwatch = new core.DartStopwatch();
        this.operations = new core.DartList.literal();
        this.snippet = '';
        this.notificationCount = -1;
        this.suggestionCountFirst = -1;
        this.suggestionCountLast = -1;
        this._stopwatch.start();
    };
    Object.defineProperty(CompletionPerformance.prototype, "elapsedInMilliseconds", {
        get: function () {
            return this.operations.length > 0 ? this.operations.last.elapsed.inMilliseconds : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionPerformance.prototype, "firstNotificationInMilliseconds", {
        get: function () {
            return this._firstNotification != null ? this._firstNotification.inMilliseconds : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionPerformance.prototype, "startTimeAndMs", {
        get: function () {
            return this.start.millisecondsSinceEpoch + " - " + this.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletionPerformance.prototype, "suggestionCount", {
        get: function () {
            if (this.notificationCount < 1)
                return '';
            if (this.notificationCount == 1)
                return "" + this.suggestionCountFirst;
            return this.suggestionCountFirst + ",  " + this.suggestionCountLast;
        },
        enumerable: true,
        configurable: true
    });
    CompletionPerformance.prototype.complete = function (tag) {
        tag = tag || null;
        this._stopwatch.stop();
        this._logDuration((tag || 'total time'), this._stopwatch.elapsed);
    };
    CompletionPerformance.prototype.logElapseTime = function (tag) {
        var end = this._stopwatch.elapsed;
        var start = this._startTimes.get(tag);
        if (utils_1.op(utils_1.Op.EQUALS, start, null)) {
            this._logDuration(tag, null);
            return null;
        }
        this._logDuration(tag, utils_1.op(utils_1.Op.MINUS, end, start));
    };
    CompletionPerformance.prototype.logFirstNotificationComplete = function (tag) {
        this._firstNotification = this._stopwatch.elapsed;
        this._logDuration(tag, this._firstNotification);
    };
    CompletionPerformance.prototype.logStartTime = function (tag) {
        this._startTimes.set(tag, this._stopwatch.elapsed);
    };
    CompletionPerformance.prototype.setContentsAndOffset = function (contents, offset) {
        this.snippet = CompletionPerformance_1._computeSnippet(contents, offset);
    };
    CompletionPerformance.prototype._logDuration = function (tag, elapsed) {
        this.operations.add(new OperationPerformance(tag, elapsed));
    };
    CompletionPerformance._computeSnippet = function (contents, offset) {
        if (contents == null || offset == null || offset < 0 || new core.DartString(contents).length < offset) {
            return '???';
        }
        var start = offset;
        while (start > 0) {
            var ch = contents[start - 1];
            if (ch == ')
                ' || ch == ';
            n;
            ') {;
            break;
        }
        --start;
    };
    var CompletionPerformance_1;
    __decorate([
        utils_1.defaultConstructor
    ], CompletionPerformance.prototype, "CompletionPerformance", null);
    CompletionPerformance = CompletionPerformance_1 = __decorate([
        utils_1.DartClass
    ], CompletionPerformance);
    return CompletionPerformance;
}());
exports.CompletionPerformance = CompletionPerformance;
var end = offset;
while (end < new core.DartString(contents).length) {
    var ch = contents[end];
    if (ch == ')
        ' || ch == ';
    n;
    ') {;
    break;
}
++end;
var prefix = new core.DartString(contents).substring(start, offset);
var suffix = new core.DartString(contents).substring(offset, end);
return prefix + "^" + suffix;
var OperationPerformance = /** @class */ (function () {
    function OperationPerformance(name, elapsed) {
    }
    OperationPerformance.prototype.OperationPerformance = function (name, elapsed) {
        this.name = name;
        this.elapsed = elapsed;
    };
    __decorate([
        utils_1.defaultConstructor
    ], OperationPerformance.prototype, "OperationPerformance", null);
    OperationPerformance = __decorate([
        utils_1.DartClass
    ], OperationPerformance);
    return OperationPerformance;
}());
exports.OperationPerformance = OperationPerformance;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion_performance.js.map
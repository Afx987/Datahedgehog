"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/collections.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
exports.concat = function (iterables) {
    return iterables.expand(function (x) {
        return x;
    });
};
exports.concatToList = function (iterables) {
    return exports.concat(iterables).toList();
};
exports.nullIfEmpty = function (list) {
    if (list == null) {
        return null;
    }
    if (list.isEmpty) {
        return null;
    }
    return list;
};
var Pair = /** @class */ (function () {
    function Pair(first, last) {
    }
    Pair_1 = Pair;
    Pair.prototype.Pair = function (first, last) {
        this.first = first;
        this.last = last;
    };
    Object.defineProperty(Pair.prototype, "hashCode", {
        get: function () {
            return this.first.hashCode ^ this.last.hashCode;
        },
        enumerable: true,
        configurable: true
    });
    Pair.prototype[utils_1.OperatorMethods.EQUALS] = function (other) {
        if (_common_1.isNot(other, Pair_1()))
            return false;
        return utils_1.op(utils_1.Op.EQUALS, other.first, this.first) && utils_1.op(utils_1.Op.EQUALS, other.last, this.last);
    };
    Pair.prototype.toString = function () {
        return "(" + this.first + ", " + this.last + ")";
    };
    var Pair_1;
    __decorate([
        utils_1.defaultConstructor
    ], Pair.prototype, "Pair", null);
    Pair = Pair_1 = __decorate([
        utils_1.DartClass
    ], Pair);
    return Pair;
}());
exports.Pair = Pair;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=collections.js.map
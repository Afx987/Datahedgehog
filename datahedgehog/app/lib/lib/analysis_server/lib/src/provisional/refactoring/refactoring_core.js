"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var Refactoring = /** @class */ (function () {
    function Refactoring() {
    }
    Object.defineProperty(Refactoring.prototype, "potentialEditIds", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Refactoring.prototype, "refactoringName", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Refactoring.prototype.checkAllConditions = function () { throw 'abstract'; };
    Refactoring.prototype.checkFinalConditions = function () { throw 'abstract'; };
    Refactoring.prototype.checkInitialConditions = function () { throw 'abstract'; };
    Refactoring.prototype.createChange = function () { throw 'abstract'; };
    Refactoring.prototype.requiresPreview = function () { throw 'abstract'; };
    Refactoring.prototype.Refactoring = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], Refactoring.prototype, "potentialEditIds", null);
    __decorate([
        utils_1.AbstractProperty
    ], Refactoring.prototype, "refactoringName", null);
    __decorate([
        utils_1.Abstract
    ], Refactoring.prototype, "checkAllConditions", null);
    __decorate([
        utils_1.Abstract
    ], Refactoring.prototype, "checkFinalConditions", null);
    __decorate([
        utils_1.Abstract
    ], Refactoring.prototype, "checkInitialConditions", null);
    __decorate([
        utils_1.Abstract
    ], Refactoring.prototype, "createChange", null);
    __decorate([
        utils_1.Abstract
    ], Refactoring.prototype, "requiresPreview", null);
    __decorate([
        utils_1.defaultConstructor
    ], Refactoring.prototype, "Refactoring", null);
    Refactoring = __decorate([
        utils_1.DartClass
    ], Refactoring);
    return Refactoring;
}());
exports.Refactoring = Refactoring;
var RefactoringContributor = /** @class */ (function () {
    function RefactoringContributor() {
    }
    RefactoringContributor.prototype.createRefactoring = function (context, kind, source, offset, length) { throw 'abstract'; };
    RefactoringContributor.prototype.getAvailableRefactorings = function (context, source, offset, length) { throw 'abstract'; };
    RefactoringContributor.prototype.RefactoringContributor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], RefactoringContributor.prototype, "createRefactoring", null);
    __decorate([
        utils_1.Abstract
    ], RefactoringContributor.prototype, "getAvailableRefactorings", null);
    __decorate([
        utils_1.defaultConstructor
    ], RefactoringContributor.prototype, "RefactoringContributor", null);
    RefactoringContributor = __decorate([
        utils_1.DartClass
    ], RefactoringContributor);
    return RefactoringContributor;
}());
exports.RefactoringContributor = RefactoringContributor;
var RefactoringKind = /** @class */ (function () {
    function RefactoringKind(name, requiresOptions) {
    }
    RefactoringKind.$RefactoringKind = function (name, requiresOptions) {
        return null;
    };
    Object.defineProperty(RefactoringKind.prototype, "requiresOptions", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        utils_1.AbstractProperty
    ], RefactoringKind.prototype, "requiresOptions", null);
    __decorate([
        utils_1.defaultFactory
    ], RefactoringKind, "$RefactoringKind", null);
    RefactoringKind = __decorate([
        utils_1.DartClass
    ], RefactoringKind);
    return RefactoringKind;
}());
exports.RefactoringKind = RefactoringKind;
var RefactoringStatus = /** @class */ (function () {
    function RefactoringStatus() {
    }
    RefactoringStatus.prototype.RefactoringStatus = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], RefactoringStatus.prototype, "RefactoringStatus", null);
    RefactoringStatus = __decorate([
        utils_1.DartClass
    ], RefactoringStatus);
    return RefactoringStatus;
}());
exports.RefactoringStatus = RefactoringStatus;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=refactoring_core.js.map
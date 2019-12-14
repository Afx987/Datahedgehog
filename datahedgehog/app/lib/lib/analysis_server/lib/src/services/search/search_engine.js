"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var MatchKind = /** @class */ (function () {
    function MatchKind(name) {
    }
    MatchKind_1 = MatchKind;
    Object.defineProperty(MatchKind, "DECLARATION", {
        get: function () {
            if (this.__$DECLARATION === undefined) {
                this.__$DECLARATION = new MatchKind_1('DECLARATION');
            }
            return this.__$DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchKind, "READ", {
        get: function () {
            if (this.__$READ === undefined) {
                this.__$READ = new MatchKind_1('READ');
            }
            return this.__$READ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchKind, "READ_WRITE", {
        get: function () {
            if (this.__$READ_WRITE === undefined) {
                this.__$READ_WRITE = new MatchKind_1('READ_WRITE');
            }
            return this.__$READ_WRITE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchKind, "WRITE", {
        get: function () {
            if (this.__$WRITE === undefined) {
                this.__$WRITE = new MatchKind_1('WRITE');
            }
            return this.__$WRITE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchKind, "INVOCATION", {
        get: function () {
            if (this.__$INVOCATION === undefined) {
                this.__$INVOCATION = new MatchKind_1('INVOCATION');
            }
            return this.__$INVOCATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchKind, "REFERENCE", {
        get: function () {
            if (this.__$REFERENCE === undefined) {
                this.__$REFERENCE = new MatchKind_1('REFERENCE');
            }
            return this.__$REFERENCE;
        },
        enumerable: true,
        configurable: true
    });
    MatchKind.prototype.MatchKind = function (name) {
        this.name = name;
    };
    MatchKind.prototype.toString = function () {
        return this.name;
    };
    var MatchKind_1;
    __decorate([
        utils_1.defaultConstructor
    ], MatchKind.prototype, "MatchKind", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MatchKind.prototype, "toString", null);
    MatchKind = MatchKind_1 = __decorate([
        utils_1.DartClass
    ], MatchKind);
    return MatchKind;
}());
exports.MatchKind = MatchKind;
var SearchEngine = /** @class */ (function () {
    function SearchEngine() {
    }
    SearchEngine.prototype.searchAllSubtypes = function (type) { throw 'abstract'; };
    SearchEngine.prototype.searchMemberDeclarations = function (name) { throw 'abstract'; };
    SearchEngine.prototype.searchMemberReferences = function (name) { throw 'abstract'; };
    SearchEngine.prototype.searchReferences = function (element) { throw 'abstract'; };
    SearchEngine.prototype.searchSubtypes = function (type) { throw 'abstract'; };
    SearchEngine.prototype.searchTopLevelDeclarations = function (pattern) { throw 'abstract'; };
    SearchEngine.prototype.SearchEngine = function () {
    };
    __decorate([
        utils_1.Abstract
    ], SearchEngine.prototype, "searchAllSubtypes", null);
    __decorate([
        utils_1.Abstract
    ], SearchEngine.prototype, "searchMemberDeclarations", null);
    __decorate([
        utils_1.Abstract
    ], SearchEngine.prototype, "searchMemberReferences", null);
    __decorate([
        utils_1.Abstract
    ], SearchEngine.prototype, "searchReferences", null);
    __decorate([
        utils_1.Abstract
    ], SearchEngine.prototype, "searchSubtypes", null);
    __decorate([
        utils_1.Abstract
    ], SearchEngine.prototype, "searchTopLevelDeclarations", null);
    __decorate([
        utils_1.defaultConstructor
    ], SearchEngine.prototype, "SearchEngine", null);
    SearchEngine = __decorate([
        utils_1.DartClass
    ], SearchEngine);
    return SearchEngine;
}());
exports.SearchEngine = SearchEngine;
var SearchMatch = /** @class */ (function () {
    function SearchMatch() {
    }
    Object.defineProperty(SearchMatch.prototype, "element", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "file", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "isQualified", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "isResolved", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "kind", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "libraryElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "librarySource", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "sourceRange", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMatch.prototype, "unitSource", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    SearchMatch.withNotNullElement = function (matches) {
        return matches.where(function (match) {
            return match.element != null;
        }).toList();
    };
    SearchMatch.prototype.SearchMatch = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "element", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "file", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "isQualified", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "isResolved", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "kind", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "libraryElement", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "librarySource", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "sourceRange", null);
    __decorate([
        utils_1.AbstractProperty
    ], SearchMatch.prototype, "unitSource", null);
    __decorate([
        utils_1.defaultConstructor
    ], SearchMatch.prototype, "SearchMatch", null);
    SearchMatch = __decorate([
        utils_1.DartClass
    ], SearchMatch);
    return SearchMatch;
}());
exports.SearchMatch = SearchMatch;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=search_engine.js.map
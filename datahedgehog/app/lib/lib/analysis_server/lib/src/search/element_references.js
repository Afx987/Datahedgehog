"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/search/element_references.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var ElementReferencesComputer = /** @class */ (function () {
    function ElementReferencesComputer(searchEngine) {
    }
    ElementReferencesComputer_1 = ElementReferencesComputer;
    ElementReferencesComputer.prototype.ElementReferencesComputer = function (searchEngine) {
        this.searchEngine = searchEngine;
    };
    ElementReferencesComputer.prototype.compute = function (element, withPotential) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var results, _a, _b, name_1, matches;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        results = new core.DartList.literal();
                        _b = (_a = results).addAll;
                        return [4 /*yield*/, this._findElementsReferences(element)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        if (!(withPotential && ElementReferencesComputer_1._isMemberElement(element))) return [3 /*break*/, 3];
                        name_1 = element.displayName;
                        return [4 /*yield*/, this.searchEngine.searchMemberReferences(name_1)];
                    case 2:
                        matches = _c.sent();
                        matches = SearchMatch.withNotNullElement(matches);
                        results.addAll(matches.where(function (match) {
                            return !match.isResolved;
                        }).map(ElementReferencesComputer_1.toResult.bind(this)));
                        _c.label = 3;
                    case 3: return [2 /*return*/, results];
                }
            });
        }); })());
    };
    ElementReferencesComputer.prototype._findElementsReferences = function (element) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var allResults, refElements, _i, refElements_1, refElement, elementResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allResults = new core.DartList.literal();
                        return [4 /*yield*/, this._getRefElements(element)];
                    case 1:
                        refElements = _a.sent();
                        _i = 0, refElements_1 = refElements;
                        _a.label = 2;
                    case 2:
                        if (!(_i < refElements_1.length)) return [3 /*break*/, 5];
                        refElement = refElements_1[_i];
                        return [4 /*yield*/, this._findSingleElementReferences(refElement)];
                    case 3:
                        elementResults = _a.sent();
                        allResults.addAll(elementResults);
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, allResults];
                }
            });
        }); })());
    };
    ElementReferencesComputer.prototype._findSingleElementReferences = function (element) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchEngine.searchReferences(element)];
                    case 1:
                        matches = _a.sent();
                        matches = SearchMatch.withNotNullElement(matches);
                        return [2 /*return*/, matches.map(ElementReferencesComputer_1.toResult.bind(this)).toList()];
                }
            });
        }); })());
    };
    ElementReferencesComputer.prototype._getRefElements = function (element) {
        if (_common_1.is(element, any)) {
            return getHierarchyMembers(this.searchEngine, element);
        }
        return new async.Future.value(new core.DartList.literal(element));
    };
    ElementReferencesComputer.toResult = function (match) {
        return newSearchResult_fromMatch(match);
    };
    ElementReferencesComputer._isMemberElement = function (element) {
        if (_common_1.is(element, any)) {
            return false;
        }
        return _common_1.is(element.enclosingElement, any);
    };
    var ElementReferencesComputer_1;
    __decorate([
        utils_1.defaultConstructor
    ], ElementReferencesComputer.prototype, "ElementReferencesComputer", null);
    ElementReferencesComputer = ElementReferencesComputer_1 = __decorate([
        utils_1.DartClass
    ], ElementReferencesComputer);
    return ElementReferencesComputer;
}());
exports.ElementReferencesComputer = ElementReferencesComputer;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=element_references.js.map
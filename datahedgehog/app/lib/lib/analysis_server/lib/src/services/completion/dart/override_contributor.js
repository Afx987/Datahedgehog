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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/override_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var OverrideContributor = /** @class */ (function () {
    function OverrideContributor() {
    }
    OverrideContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var targetId, classDecl, classElem, manager, map, memberNames, suggestions, _i, memberNames_1, memberName, element, suggestion;
            return __generator(this, function (_a) {
                targetId = this._getTargetId(request.target);
                if (utils_1.op(utils_1.Op.EQUALS, targetId, null)) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                classDecl = targetId.getAncestor(function (p) {
                    return _common_1.is(p, any);
                });
                if (utils_1.op(utils_1.Op.EQUALS, classDecl, null)) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                classElem = classDecl.element;
                manager = new bare.createInstance(any, null, classElem.library);
                map = manager.getMembersInheritedFromInterfaces(classElem);
                memberNames = this._computeMemberNames(map, classElem);
                suggestions = new core.DartList.literal();
                for (_i = 0, memberNames_1 = memberNames; _i < memberNames_1.length; _i++) {
                    memberName = memberNames_1[_i];
                    element = map.get(memberName);
                    if (element.returnType != null) {
                        suggestion = this._buildSuggestion(request, targetId, element);
                        if (suggestion != null) {
                            suggestions.add(suggestion);
                        }
                    }
                }
                return [2 /*return*/, suggestions];
            });
        }); })());
    };
    OverrideContributor.prototype._buildRepacementText = function (source, targetId, unit, element) {
        return '';
    };
    OverrideContributor.prototype._buildSuggestion = function (request, targetId, element) {
        var completion = this._buildRepacementText(request.source, targetId, request.target.unit, element);
        if (completion == null || new core.DartString(completion).length == 0) {
            return null;
        }
        var suggestion = new bare.createInstance(any, null, CompletionSuggestionKind.IDENTIFIER, DART_RELEVANCE_HIGH, completion, targetId.offset, 0, element.isDeprecated, false);
        suggestion.element = null /*topLevl*/.convertElement(element);
        return suggestion;
    };
    OverrideContributor.prototype._computeMemberNames = function (map, element) {
        var memberNames = new core.DartList.literal();
        for (var _i = 0, _a = map.keys; _i < _a.length; _i++) {
            var memberName = _a[_i];
            if (!this._hasMember(element, memberName)) {
                memberNames.add(memberName);
            }
        }
        return memberNames;
    };
    OverrideContributor.prototype._getTargetId = function (target) {
        var node = target.containingNode;
        if (_common_1.is(node, any)) {
            var entity = target.entity;
            if (_common_1.is(entity, any)) {
                var variables = entity.fields.variables;
                if (utils_1.op(utils_1.Op.EQUALS, variables.length, 1)) {
                    var targetId = utils_1.op(utils_1.Op.INDEX, variables, 0).name;
                    if (targetId.name.isEmpty) {
                        return targetId;
                    }
                }
            }
        }
        return null;
    };
    OverrideContributor.prototype._hasMember = function (classElement, memberName) {
        return classElement.getField(memberName) != null || classElement.getGetter(memberName) != null || classElement.getMethod(memberName) != null || classElement.getSetter(memberName) != null;
    };
    OverrideContributor.prototype.OverrideContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], OverrideContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], OverrideContributor.prototype, "OverrideContributor", null);
    OverrideContributor = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], OverrideContributor);
    return OverrideContributor;
}());
exports.OverrideContributor = OverrideContributor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=override_contributor.js.map
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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/static_member_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var StaticMemberContributor = /** @class */ (function (_super) {
    __extends(StaticMemberContributor, _super);
    function StaticMemberContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    StaticMemberContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var targetId, elem, containingLibrary, builder;
            return __generator(this, function (_a) {
                targetId = request.dotTarget;
                if (_common_1.is(targetId, any) && !request.target.isCascade) {
                    elem = targetId.bestElement;
                    if (_common_1.is(elem, any)) {
                        containingLibrary = request.libraryElement;
                        if (utils_1.op(utils_1.Op.EQUALS, containingLibrary, null)) {
                            return [2 /*return*/, EMPTY_LIST];
                        }
                        builder = new _SuggestionBuilder(containingLibrary, request.ideOptions);
                        elem.accept(builder);
                        return [2 /*return*/, builder.suggestions];
                    }
                }
                return [2 /*return*/, EMPTY_LIST];
            });
        }); })());
    };
    StaticMemberContributor.prototype.StaticMemberContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], StaticMemberContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], StaticMemberContributor.prototype, "StaticMemberContributor", null);
    StaticMemberContributor = __decorate([
        utils_1.DartClass
    ], StaticMemberContributor);
    return StaticMemberContributor;
}(any));
exports.StaticMemberContributor = StaticMemberContributor;
var _SuggestionBuilder = /** @class */ (function (_super) {
    __extends(_SuggestionBuilder, _super);
    function _SuggestionBuilder(containingLibrary, options) {
        var _this = this;
        return _this;
    }
    _SuggestionBuilder.prototype._SuggestionBuilder = function (containingLibrary, options) {
        this.suggestions = new core.DartList.literal();
        this.containingLibrary = containingLibrary;
        this.options = options;
    };
    _SuggestionBuilder.prototype.visitClassElement = function (element) {
        element.visitChildren(this);
    };
    _SuggestionBuilder.prototype.visitElement = function (element) {
    };
    _SuggestionBuilder.prototype.visitFieldElement = function (element) {
        if (element.isStatic) {
            this._addSuggestion(element);
        }
    };
    _SuggestionBuilder.prototype.visitMethodElement = function (element) {
        if (element.isStatic && !element.isOperator) {
            this._addSuggestion(element);
        }
    };
    _SuggestionBuilder.prototype.visitPropertyAccessorElement = function (element) {
        if (element.isStatic) {
            this._addSuggestion(element);
        }
    };
    _SuggestionBuilder.prototype._addSuggestion = function (element) {
        if (element.isPrivate) {
            if (element.library != this.containingLibrary) {
                return;
            }
        }
        if (element.isSynthetic) {
            if ((_common_1.is(element, any)) || _common_1.is(element, any) && !this._isSpecialEnumField(element)) {
                return;
            }
        }
        var completion = element.displayName;
        if (completion == null || new core.DartString(completion).length <= 0) {
            return;
        }
        var suggestion = createSuggestion(element, this.options, {
            completion: completion
        });
        if (suggestion != null) {
            this.suggestions.add(suggestion);
        }
    };
    _SuggestionBuilder.prototype._isSpecialEnumField = function (element) {
        var parent = element.enclosingElement;
        if (_common_1.is(parent, any) && parent.isEnum) {
            if (utils_1.op(utils_1.Op.EQUALS, element.name, 'values')) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        utils_1.defaultConstructor
    ], _SuggestionBuilder.prototype, "_SuggestionBuilder", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _SuggestionBuilder.prototype, "visitClassElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _SuggestionBuilder.prototype, "visitElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _SuggestionBuilder.prototype, "visitFieldElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _SuggestionBuilder.prototype, "visitMethodElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _SuggestionBuilder.prototype, "visitPropertyAccessorElement", null);
    _SuggestionBuilder = __decorate([
        utils_1.DartClass
    ], _SuggestionBuilder);
    return _SuggestionBuilder;
}(any));
exports._SuggestionBuilder = _SuggestionBuilder;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=static_member_contributor.js.map
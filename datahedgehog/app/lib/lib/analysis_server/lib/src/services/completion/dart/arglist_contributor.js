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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/arglist_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
exports._argCount = function (request) {
    var node = request.target.containingNode;
    if (_common_1.is(node, any)) {
        if (utils_1.op(utils_1.Op.EQUALS, request.target.entity, node.rightParenthesis)) {
            if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.lexeme : null; })(node.rightParenthesis.previous), ',')) {
                return utils_1.op(utils_1.Op.PLUS, node.arguments.length, 1);
            }
        }
        return node.arguments.length;
    }
    return 0;
};
exports._getTargetId = function (node) {
    if (_common_1.is(node, any)) {
        return exports._getTargetId(node.parent);
    }
    if (_common_1.is(node, any)) {
        var parent_1 = node.parent;
        if (_common_1.is(parent_1, any)) {
            return parent_1.methodName;
        }
        if (_common_1.is(parent_1, any)) {
            var constructorName = parent_1.constructorName;
            if (constructorName != null) {
                if (constructorName.name != null) {
                    return constructorName.name;
                }
                var typeName = constructorName.type.name;
                if (_common_1.is(typeName, any)) {
                    return typeName;
                }
                if (_common_1.is(typeName, any)) {
                    return typeName.identifier;
                }
            }
        }
        if (_common_1.is(parent_1, any)) {
            return (parent_1.constructorName || parent_1.name);
        }
    }
    return null;
};
exports._isAppendingToArgList = function (request) {
    var node = request.target.containingNode;
    if (_common_1.is(node, any)) {
        var entity = request.target.entity;
        if (utils_1.op(utils_1.Op.EQUALS, entity, node.rightParenthesis)) {
            return true;
        }
        if (utils_1.op(utils_1.Op.GT, node.arguments.length, 0) && utils_1.op(utils_1.Op.EQUALS, node.arguments.last, entity)) {
            return _common_1.is(entity, any);
        }
    }
    return false;
};
exports._isEditingNamedArgLabel = function (request) {
    var node = request.target.containingNode;
    if (_common_1.is(node, any)) {
        var entity = request.target.entity;
        if (_common_1.is(entity, any)) {
            var offset = request.offset;
            if (utils_1.op(utils_1.Op.LT, entity.offset, offset) && offset < entity.end) {
                return true;
            }
        }
    }
    return false;
};
exports._isInNamedExpression = function (request) {
    var entity = request.target.entity;
    if (_common_1.is(entity, any)) {
        var name_1 = entity.name;
        return utils_1.op(utils_1.Op.LT, name_1.offset, request.offset) && utils_1.op(utils_1.Op.LT, request.offset, name_1.end);
    }
    return false;
};
exports._isInsertingToArgListWithNoSynthetic = function (request) {
    var node = request.target.containingNode;
    if (_common_1.is(node, any)) {
        var entity = request.target.entity;
        return _common_1.is(entity, any);
    }
    return false;
};
exports._isInsertingToArgListWithSynthetic = function (request) {
    var node = request.target.containingNode;
    if (_common_1.is(node, any)) {
        var entity = request.target.entity;
        if (_common_1.is(entity, any)) {
            var argIndex = request.target.argIndex;
            if (utils_1.op(utils_1.Op.EQUALS, node.arguments.length, argIndex + 1) || _common_1.is(node.arguments.getRange(argIndex + 1, argIndex + 2).first, any)) {
                return true;
            }
        }
    }
    return false;
};
exports._namedArgs = function (request) {
    var node = request.target.containingNode;
    var namedArgs = new core.DartList();
    if (_common_1.is(node, any)) {
        for (var _i = 0, _a = node.arguments; _i < _a.length; _i++) {
            var arg = _a[_i];
            if (_common_1.is(arg, any)) {
                namedArgs.add(arg.name.label.name);
            }
        }
    }
    return namedArgs;
};
var ArgListContributor = /** @class */ (function (_super) {
    __extends(ArgListContributor, _super);
    function ArgListContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ArgListContributor_1 = ArgListContributor;
    ArgListContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var targetId, elem;
            return __generator(this, function (_a) {
                this.request = request;
                this.suggestions = new core.DartList.literal();
                targetId = exports._getTargetId(request.target.containingNode);
                if (utils_1.op(utils_1.Op.EQUALS, targetId, null)) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                elem = targetId.bestElement;
                if (utils_1.op(utils_1.Op.EQUALS, elem, null)) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                if (_common_1.is(elem, any)) {
                    this._addSuggestions((function (t) { return (!!t) ? t.parameters : null; })(elem.unnamedConstructor));
                    return [2 /*return*/, this.suggestions];
                }
                if (_common_1.is(elem, any)) {
                    this._addSuggestions(elem.parameters);
                    return [2 /*return*/, this.suggestions];
                }
                if (_common_1.is(elem, any)) {
                    this._addSuggestions(elem.parameters);
                    return [2 /*return*/, this.suggestions];
                }
                if (_common_1.is(elem, any)) {
                    this._addSuggestions(elem.parameters);
                    return [2 /*return*/, this.suggestions];
                }
                return [2 /*return*/, EMPTY_LIST];
            });
        }); })());
    };
    ArgListContributor.prototype._addDefaultParamSuggestions = function (parameters, appendComma) {
        appendComma = appendComma || false;
        var appendColon = !exports._isInNamedExpression(this.request);
        var namedArgs = exports._namedArgs(this.request);
        for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
            var parameter = parameters_1[_i];
            if (utils_1.op(utils_1.Op.EQUALS, parameter.parameterKind, ParameterKind.NAMED)) {
                this._addNamedParameterSuggestion(namedArgs, parameter, appendColon, appendComma);
            }
        }
    };
    ArgListContributor.prototype._addNamedParameterSuggestion = function (namedArgs, parameter, appendColon, appendComma) {
        var name = parameter.name;
        var type = (function (t) { return (!!t) ? t.displayName : null; })(parameter.type);
        if (name != null && new core.DartString(name).length > 0 && !namedArgs.contains(name)) {
            var completion = name;
            if (appendColon) {
                completion += ': ';
            }
            var selectionOffset = new core.DartString(completion).length;
            var element = parameter.enclosingElement;
            if (_common_1.is(element, any)) {
                if (isFlutterWidget(element.enclosingElement) && utils_1.op(utils_1.Op.EQUALS, parameter.name, 'children')) {
                    var value = getDefaultStringParameterValue(parameter);
                    if (value != null) {
                        completion += value;
                        selectionOffset = new core.DartString(completion).length - 1;
                    }
                }
            }
            if (appendComma) {
                completion += ',';
            }
            var suggestion = new bare.createInstance(any, null, CompletionSuggestionKind.NAMED_ARGUMENT, DART_RELEVANCE_NAMED_PARAMETER, completion, selectionOffset, 0, false, false, {
                parameterName: name, parameterType: type
            });
            if (_common_1.is(parameter, any)) {
                ArgListContributor_1._setDocumentation(suggestion, (function (t) { return (!!t) ? t.documentationComment : null; })(parameter.field));
                suggestion.element = convertElement(parameter);
            }
            this.suggestions.add(suggestion);
        }
    };
    ArgListContributor.prototype._addSuggestions = function (parameters) {
        if (parameters == null || parameters.length == 0) {
            return;
        }
        var requiredParam = parameters.where(function (p) {
            return utils_1.op(utils_1.Op.EQUALS, p.parameterKind, ParameterKind.REQUIRED);
        });
        var requiredCount = requiredParam.length;
        if (exports._isEditingNamedArgLabel(this.request) || exports._isAppendingToArgList(this.request)) {
            if (requiredCount == 0 || requiredCount < exports._argCount(this.request)) {
                var addTrailingComma = !this._isFollowedByAComma(this.request) && this._isInFlutterCreation(this.request);
                this._addDefaultParamSuggestions(parameters, addTrailingComma);
            }
        }
        else if (exports._isInsertingToArgListWithNoSynthetic(this.request)) {
            this._addDefaultParamSuggestions(parameters, true);
        }
        else if (exports._isInsertingToArgListWithSynthetic(this.request)) {
            this._addDefaultParamSuggestions(parameters, !this._isFollowedByAComma(this.request));
        }
    };
    ArgListContributor.prototype._isFollowedByAComma = function (request) {
        var containingNode = request.target.containingNode;
        var entity = request.target.entity;
        var token = _common_1.is(entity, any) ? entity.endToken : _common_1.is(entity, any) ? entity : null;
        return (token != (function (t) { return (!!t) ? t.endToken : null; })(containingNode)) && utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.type : null; })((function (t) { return (!!t) ? t.next : null; })(token)), TokenType.COMMA);
    };
    ArgListContributor.prototype._isInFlutterCreation = function (request) {
        var containingNode = (function (t) { return (!!t) ? t.containingNode : null; })((function (t) { return (!!t) ? t.target : null; })(request));
        var newExpr = containingNode != null ? identifyNewExpression(containingNode.parent) : null;
        return newExpr != null && isFlutterInstanceCreationExpression(newExpr);
    };
    ArgListContributor._setDocumentation = function (suggestion, comment) {
        if (comment != null) {
            var doc = removeDartDocDelimiters(comment);
            suggestion.docComplete = doc;
            suggestion.docSummary = getDartDocSummary(doc);
        }
    };
    ArgListContributor.prototype.ArgListContributor = function () {
    };
    var ArgListContributor_1;
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ArgListContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], ArgListContributor.prototype, "ArgListContributor", null);
    ArgListContributor = ArgListContributor_1 = __decorate([
        utils_1.DartClass
    ], ArgListContributor);
    return ArgListContributor;
}(any));
exports.ArgListContributor = ArgListContributor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=arglist_contributor.js.map
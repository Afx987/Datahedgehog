"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/provisional/completion/dart/completion_target.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
exports._computeArgIndex = function (containingNode, entity) {
    var argList = containingNode;
    if (_common_1.is(argList, any)) {
        entity = argList;
        argList = argList.parent;
    }
    if (_common_1.is(argList, any)) {
        var args = argList.arguments;
        for (var index = 0; index < args.length; ++index) {
            if (utils_1.op(utils_1.Op.EQUALS, entity, utils_1.op(utils_1.Op.INDEX, args, index))) {
                return index;
            }
        }
        if (args.isEmpty) {
            return 0;
        }
        if (utils_1.op(utils_1.Op.EQUALS, entity, argList.rightParenthesis)) {
            if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.lexeme : null; })(argList.rightParenthesis.previous), ',')) {
                return args.length;
            }
            return utils_1.op(utils_1.Op.MINUS, args.length, 1);
        }
    }
    return null;
};
var CompletionTarget = /** @class */ (function () {
    function CompletionTarget() {
    }
    CompletionTarget_1 = CompletionTarget;
    CompletionTarget.$forOffset = function (compilationUnit, offset, _namedArguments) {
        var entryPoint = Object.assign({}, _namedArguments).entryPoint;
        entryPoint = (entryPoint) || (compilationUnit);
        var containingNode = entryPoint;
        outerLoop: while (true) {
            if (_common_1.is(containingNode, any)) {
                var comment = containingNode;
                for (var _i = 0, _a = comment.references; _i < _a.length; _i++) {
                    var commentReference = _a[_i];
                    if (utils_1.op(utils_1.Op.LEQ, commentReference.offset, offset) && offset <= commentReference.end) {
                        containingNode = commentReference;
                        continue;
                    }
                }
            }
            for (var _b = 0, _c = containingNode.childEntities; _b < _c.length; _b++) {
                var entity = _c[_b];
                if (_common_1.is(entity, any)) {
                    if (CompletionTarget_1._isCandidateToken(entity, offset)) {
                        var commentToken = CompletionTarget_1._getContainingCommentToken(entity, offset);
                        if (commentToken != null) {
                            return new CompletionTarget_1._(compilationUnit, offset, containingNode, commentToken, true);
                        }
                        return new CompletionTarget_1._(compilationUnit, offset, containingNode, entity, false);
                    }
                    else {
                        continue;
                    }
                }
                else if (_common_1.is(entity, any)) {
                    if (!CompletionTarget_1._isCandidateToken(entity.endToken, offset)) {
                        continue;
                    }
                    if (CompletionTarget_1._isCandidateNode(entity, offset)) {
                        var commentToken = CompletionTarget_1._getContainingCommentToken(entity.beginToken, offset);
                        if (commentToken != null) {
                            var docComment = CompletionTarget_1._getContainingDocComment(containingNode, commentToken);
                            if (docComment != null) {
                                return new CompletionTarget_1._(compilationUnit, offset, docComment, commentToken, false);
                            }
                            else {
                                return new CompletionTarget_1._(compilationUnit, offset, compilationUnit, commentToken, true);
                            }
                        }
                        return new CompletionTarget_1._(compilationUnit, offset, containingNode, entity, false);
                    }
                    containingNode = entity;
                    continue;
                }
                else {
                    /* TODO (AssertStatementImpl) : assert (false); */ ;
                }
            }
            /* TODO (AssertStatementImpl) : assert (identical(containingNode, entryPoint)); */ ;
            return new CompletionTarget_1._(compilationUnit, offset, entryPoint, null, false);
        }
        ;
    };
    CompletionTarget.prototype._ = function (unit, offset, containingNode, entity, isCommentText) {
        this.containingNode = containingNode;
        this.entity = entity;
        this.argIndex = exports._computeArgIndex(containingNode, entity);
        this.unit = unit;
        this.offset = offset;
        this.isCommentText = isCommentText;
    };
    Object.defineProperty(CompletionTarget.prototype, "isCascade", {
        get: function () {
            var node = this.containingNode;
            if (_common_1.is(node, any)) {
                return node.isCascaded && this.offset > utils_1.op(utils_1.Op.PLUS, node.operator.offset, 1);
            }
            if (_common_1.is(node, any)) {
                return node.isCascaded && this.offset > utils_1.op(utils_1.Op.PLUS, node.operator.offset, 1);
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CompletionTarget.prototype.isFunctionalArgument = function () {
        if (!this.maybeFunctionalArgument()) {
            return false;
        }
        var parent = this.containingNode.parent;
        if (_common_1.is(parent, any)) {
            parent = parent.parent;
        }
        if (_common_1.is(parent, any)) {
            var instType = parent.bestType;
            if (instType != null) {
                var intTypeElem = instType.element;
                if (_common_1.is(intTypeElem, any)) {
                    var constructorName = parent.constructorName.name;
                    var constructor = constructorName != null ? intTypeElem.getNamedConstructor(constructorName.name) : intTypeElem.unnamedConstructor;
                    return constructor != null && CompletionTarget_1._isFunctionalParameter(constructor.parameters, this.argIndex, this.containingNode);
                }
            }
        }
        else if (_common_1.is(parent, any)) {
            var methodName = parent.methodName;
            if (methodName != null) {
                var methodElem = methodName.bestElement;
                if (_common_1.is(methodElem, any)) {
                    return CompletionTarget_1._isFunctionalParameter(methodElem.parameters, this.argIndex, this.containingNode);
                }
                else if (_common_1.is(methodElem, any)) {
                    return CompletionTarget_1._isFunctionalParameter(methodElem.parameters, this.argIndex, this.containingNode);
                }
            }
        }
        return false;
    };
    CompletionTarget.prototype.maybeFunctionalArgument = function () {
        if (this.argIndex != null) {
            if (_common_1.is(this.containingNode, any)) {
                return true;
            }
            if (_common_1.is(this.containingNode, any)) {
                if (_common_1.is(this.containingNode.parent, any)) {
                    return true;
                }
            }
        }
        return false;
    };
    CompletionTarget._getContainingCommentToken = function (token, offset) {
        if (utils_1.op(utils_1.Op.EQUALS, token, null)) {
            return null;
        }
        if (offset >= token.offset) {
            return null;
        }
        token = token.precedingComments;
        while (token != null) {
            if (offset <= token.offset) {
                return null;
            }
            if (offset <= token.end) {
                if (utils_1.op(utils_1.Op.EQUALS, token.type, TokenType.SINGLE_LINE_COMMENT) || offset < token.end) {
                    return token;
                }
            }
            token = token.next;
        }
        return null;
    };
    CompletionTarget._getContainingDocComment = function (node, token) {
        if (_common_1.is(node, any)) {
            var docComment = node.documentationComment;
            if (docComment != null && docComment.tokens.contains(token)) {
                return docComment;
            }
        }
        return null;
    };
    CompletionTarget._isCandidateNode = function (node, offset) {
        var beginToken = node.beginToken;
        if (beginToken.type.isKeyword || utils_1.op(utils_1.Op.EQUALS, beginToken.type, TokenType.IDENTIFIER)) {
            return CompletionTarget_1._isCandidateToken(beginToken, offset);
        }
        return offset <= node.offset;
    };
    CompletionTarget._isCandidateToken = function (token, offset) {
        if (offset < token.end) {
            return true;
        }
        else if (offset == token.end) {
            return token.type.isKeyword || utils_1.op(utils_1.Op.EQUALS, token.type, TokenType.IDENTIFIER) || utils_1.op(utils_1.Op.EQUALS, token.length, 0);
        }
        else if (!token.isSynthetic) {
            return false;
        }
        var previous = token.previous;
        if (offset < previous.end) {
            return true;
        }
        else if (offset == previous.end) {
            return token.type.isKeyword || utils_1.op(utils_1.Op.EQUALS, previous.type, TokenType.IDENTIFIER);
        }
        else {
            return false;
        }
    };
    CompletionTarget._isFunctionalParameter = function (parameters, paramIndex, containingNode) {
        var paramType;
        if (paramIndex < parameters.length) {
            var param = parameters[paramIndex];
            if (utils_1.op(utils_1.Op.EQUALS, param.parameterKind, ParameterKind.NAMED)) {
                if (_common_1.is(containingNode, any)) {
                    var name_1 = (function (t) { return (!!t) ? t.name : null; })((function (t) { return (!!t) ? t.label : null; })(containingNode.name));
                    param = parameters.firstWhere(function (param) {
                        return utils_1.op(utils_1.Op.EQUALS, param.parameterKind, ParameterKind.NAMED) && utils_1.op(utils_1.Op.EQUALS, param.name, name_1);
                    }, {
                        orElse: function () {
                            return null;
                        }
                    });
                    paramType = (function (t) { return (!!t) ? t.type : null; })(param);
                }
            }
            else {
                paramType = param.type;
            }
        }
        return _common_1.is(paramType, any) || _common_1.is(paramType, any);
    };
    var CompletionTarget_1;
    __decorate([
        utils_1.namedConstructor
    ], CompletionTarget.prototype, "_", null);
    __decorate([
        utils_1.namedFactory
    ], CompletionTarget, "$forOffset", null);
    CompletionTarget = CompletionTarget_1 = __decorate([
        utils_1.DartClass
    ], CompletionTarget);
    return CompletionTarget;
}());
exports.CompletionTarget = CompletionTarget;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion_target.js.map
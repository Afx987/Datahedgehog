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
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/optype.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var OpType = /** @class */ (function () {
    function OpType() {
    }
    OpType_1 = OpType;
    OpType.$forCompletion = function (target, offset) {
        var optype = new OpType_1._();
        target.containingNode.accept(new _OpTypeAstVisitor(optype, target.entity, offset));
        var mthDecl = target.containingNode.getAncestor(function (p) {
            return _common_1.is(p, any);
        });
        optype.inStaticMethodBody = _common_1.is(mthDecl, any) && mthDecl.isStatic;
        return optype;
    };
    OpType.prototype._ = function () {
        this.includeConstructorSuggestions = false;
        this.constructorSuggestionsFilter = function (_, relevance) {
            return relevance;
        };
        this.includeTypeNameSuggestions = false;
        this.typeNameSuggestionsFilter = function (_, relevance) {
            return relevance;
        };
        this.includeVoidReturnSuggestions = false;
        this.includeReturnValueSuggestions = false;
        this.returnValueSuggestionsFilter = function (_, relevance) {
            return relevance;
        };
        this.includeNamedArgumentSuggestions = false;
        this.includeStatementLabelSuggestions = false;
        this.includeCaseLabelSuggestions = false;
        this.includeVarNameSuggestions = false;
        this.inStaticMethodBody = false;
        this.isPrefixed = false;
        this.suggestKind = CompletionSuggestionKind.INVOCATION;
    };
    Object.defineProperty(OpType.prototype, "includeIdentifiers", {
        get: function () {
            return !this.isPrefixed && (this.includeReturnValueSuggestions || this.includeTypeNameSuggestions || this.includeVoidReturnSuggestions || this.includeConstructorSuggestions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpType.prototype, "includeOnlyNamedArgumentSuggestions", {
        get: function () {
            return this.includeNamedArgumentSuggestions && !this.includeTypeNameSuggestions && !this.includeReturnValueSuggestions && !this.includeVoidReturnSuggestions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpType.prototype, "includeOnlyTypeNameSuggestions", {
        get: function () {
            return this.includeTypeNameSuggestions && !this.includeNamedArgumentSuggestions && !this.includeReturnValueSuggestions && !this.includeVoidReturnSuggestions;
        },
        enumerable: true,
        configurable: true
    });
    OpType.getPreviousStatement = function (node, entity) {
        if (utils_1.op(utils_1.Op.EQUALS, entity, node.rightBracket)) {
            return node.statements.isNotEmpty ? node.statements.last : null;
        }
        if (_common_1.is(entity, any)) {
            var index = node.statements.indexOf(entity);
            if (index > 0) {
                return utils_1.op(utils_1.Op.INDEX, node.statements, index - 1);
            }
            return null;
        }
        return null;
    };
    var OpType_1;
    __decorate([
        utils_1.namedConstructor
    ], OpType.prototype, "_", null);
    __decorate([
        utils_1.namedFactory
    ], OpType, "$forCompletion", null);
    OpType = OpType_1 = __decorate([
        utils_1.DartClass
    ], OpType);
    return OpType;
}());
exports.OpType = OpType;
var _OpTypeAstVisitor = /** @class */ (function (_super) {
    __extends(_OpTypeAstVisitor, _super);
    function _OpTypeAstVisitor(optype, entity, offset) {
        var _this = this;
        return _this;
    }
    _OpTypeAstVisitor.prototype._OpTypeAstVisitor = function (optype, entity, offset) {
        this.optype = optype;
        this.entity = entity;
        this.offset = offset;
    };
    _OpTypeAstVisitor.prototype.visitAnnotation = function (node) {
        if (core.identical(this.entity, node.name)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeReturnValueSuggestions = true;
        }
        else if (core.identical(this.entity, node.constructorName)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeReturnValueSuggestions = true;
            this.optype.isPrefixed = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitArgumentList = function (node) {
        var parent = node.parent;
        var parameters;
        if (_common_1.is(parent, any)) {
            var constructor = void 0;
            var name_1 = (function (t) { return (!!t) ? t.name : null; })(parent.constructorName);
            if (name_1 != null) {
                constructor = name_1.bestElement;
            }
            else {
                var classElem = (function (t) { return (!!t) ? t.bestElement : null; })((function (t) { return (!!t) ? t.name : null; })((function (t) { return (!!t) ? t.type : null; })(parent.constructorName)));
                if (_common_1.is(classElem, any)) {
                    constructor = classElem.unnamedConstructor;
                }
            }
            if (_common_1.is(constructor, any)) {
                parameters = constructor.parameters;
            }
            else if (utils_1.op(utils_1.Op.EQUALS, constructor, null)) {
                this.optype.includeNamedArgumentSuggestions = true;
            }
        }
        else if (_common_1.is(parent, any)) {
            let;
            parent.function;
            if (_common_1.is(function () { }, any)) {
                var elem = function () { }.bestElement;
                if (_common_1.is(elem, any)) {
                    parameters = elem.parameters;
                }
                else if (utils_1.op(utils_1.Op.EQUALS, elem, null)) {
                    this.optype.includeNamedArgumentSuggestions = true;
                }
            }
        }
        if (parameters != null) {
            var index = void 0;
            if (node.arguments.isEmpty) {
                index = 0;
            }
            else if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.rightParenthesis)) {
                if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.lexeme : null; })(node.rightParenthesis.previous), ',')) {
                    index = node.arguments.length;
                }
                else {
                    index = utils_1.op(utils_1.Op.MINUS, node.arguments.length, 1);
                }
            }
            else {
                index = node.arguments.indexOf(this.entity);
            }
            if (0 <= index && index < parameters.length) {
                var param = parameters[index];
                if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.parameterKind : null; })(param), ParameterKind.NAMED)) {
                    this.optype.includeNamedArgumentSuggestions = true;
                    return;
                }
            }
        }
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitAsExpression = function (node) {
        if (core.identical(this.entity, node.type)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.typeNameSuggestionsFilter = function (dartType, relevance) {
                var staticType = node.expression.staticType;
                if (staticType != null && (staticType.isDynamic || (dartType.isSubtypeOf(staticType) && dartType != staticType))) {
                    return relevance;
                }
                else {
                    return null;
                }
            };
        }
    };
    _OpTypeAstVisitor.prototype.visitAssertStatement = function (node) {
        if (core.identical(this.entity, node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitAssignmentExpression = function (node) {
        if (core.identical(this.entity, node.rightHandSide)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitAwaitExpression = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitBinaryExpression = function (node) {
        if (core.identical(this.entity, node.rightOperand)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitBlock = function (node) {
        var prevStmt = OpType.getPreviousStatement(node, this.entity);
        if (_common_1.is(prevStmt, any)) {
            if (prevStmt.catchClauses.isEmpty && utils_1.op(utils_1.Op.EQUALS, prevStmt.finallyBlock, null)) {
                return;
            }
        }
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
        this.optype.includeVoidReturnSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitBreakStatement = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, node.label, null) || core.identical(this.entity, node.label)) {
            this.optype.includeStatementLabelSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitCascadeExpression = function (node) {
        if (node.cascadeSections.contains(this.entity)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitCatchClause = function (node) {
        if (core.identical(this.entity, node.exceptionType)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitClassDeclaration = function (node) {
        if (node.members.contains(this.entity) || core.identical(this.entity, node.rightBracket)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitClassMember = function (node) {
    };
    _OpTypeAstVisitor.prototype.visitCommentReference = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
        this.optype.includeVoidReturnSuggestions = true;
        this.optype.suggestKind = CompletionSuggestionKind.IDENTIFIER;
    };
    _OpTypeAstVisitor.prototype.visitCompilationUnit = function (node) {
        if (_common_1.isNot(this.entity, any)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitConditionalExpression = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitConstructorName = function (node) {
        if (core.identical(this.entity, node.name)) {
            var type = node.type;
            if (type != null) {
                var prefix = type.name;
                if (prefix != null) {
                    this.optype.includeConstructorSuggestions = true;
                    this.optype.isPrefixed = true;
                }
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitContinueStatement = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, node.label, null) || core.identical(this.entity, node.label)) {
            this.optype.includeStatementLabelSuggestions = true;
            this.optype.includeCaseLabelSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitDefaultFormalParameter = function (node) {
        if (core.identical(this.entity, node.defaultValue)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitDoStatement = function (node) {
        if (core.identical(this.entity, node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitEmptyStatement = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
        this.optype.includeVoidReturnSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitExpression = function (node) {
        /* TODO (AssertStatementImpl) : assert (false); */ ;
    };
    _OpTypeAstVisitor.prototype.visitExpressionFunctionBody = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitExpressionStatement = function (node) {
        if (_common_1.is(this.entity, any)) {
            var token = this.entity;
            if (utils_1.op(utils_1.Op.EQUALS, token.lexeme, '[]') && this.offset == utils_1.op(utils_1.Op.PLUS, token.offset, 1)) {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
            }
            if ((token.isSynthetic || utils_1.op(utils_1.Op.EQUALS, token.lexeme, ';')) && _common_1.is(node.expression, any)) {
                this.optype.includeVarNameSuggestions = true;
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitExtendsClause = function (node) {
        if (core.identical(this.entity, node.superclass)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitFieldFormalParameter = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.identifier)) {
            this.optype.isPrefixed = true;
        }
        else {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitForEachStatement = function (node) {
        if (core.identical(this.entity, node.identifier)) {
            this.optype.includeTypeNameSuggestions = true;
        }
        if (core.identical(this.entity, node.loopVariable)) {
            this.optype.includeTypeNameSuggestions = true;
        }
        if (core.identical(this.entity, node.inKeyword) && this.offset <= node.inKeyword.offset) {
            if (utils_1.op(utils_1.Op.EQUALS, node.identifier, null) && utils_1.op(utils_1.Op.EQUALS, node.loopVariable, null)) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
        if (core.identical(this.entity, node.iterable)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitFormalParameterList = function (node) {
        var entity = this.entity;
        if (_common_1.is(entity, any) && entity.previous != null) {
            var type = entity.previous.type;
            if (utils_1.op(utils_1.Op.EQUALS, type, TokenType.OPEN_PAREN) || utils_1.op(utils_1.Op.EQUALS, type, TokenType.COMMA)) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
        if (_common_1.is(entity, any)) {
            entity = entity.parameter;
        }
        if (_common_1.is(entity, any)) {
            if (this.offset < entity.thisKeyword.offset) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
        if (_common_1.is(entity, any)) {
            if (utils_1.op(utils_1.Op.EQUALS, entity.type, null)) {
                this.optype.includeTypeNameSuggestions = true;
            }
            if (entity.type != null && utils_1.op(utils_1.Op.LEQ, entity.type.offset, this.offset) && this.offset <= entity.type.end) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitForStatement = function (node) {
        var entity = this.entity;
        if (this._isEntityPrevTokenSynthetic()) {
        }
        else if (_common_1.is(entity, any) && entity.isSynthetic && utils_1.op(utils_1.Op.EQUALS, node.leftSeparator, entity)) {
            this.optype.includeVarNameSuggestions = true;
        }
        else {
            if (utils_1.op(utils_1.Op.EQUALS, entity, node.initialization) || utils_1.op(utils_1.Op.EQUALS, entity, node.variables)) {
                this.optype.includeTypeNameSuggestions = true;
            }
            if (utils_1.op(utils_1.Op.EQUALS, entity, node.condition)) {
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeReturnValueSuggestions = true;
            }
            if (node.updaters.contains(entity)) {
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeVoidReturnSuggestions = true;
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitFunctionDeclaration = function (node) {
        if (core.identical(this.entity, node.returnType) || core.identical(this.entity, node.name) && utils_1.op(utils_1.Op.EQUALS, node.returnType, null)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitFunctionExpression = function (node) {
    };
    _OpTypeAstVisitor.prototype.visitFunctionExpressionInvocation = function (node) {
    };
    _OpTypeAstVisitor.prototype.visitFunctionTypeAlias = function (node) {
        if (core.identical(this.entity, node.returnType) || core.identical(this.entity, node.name) && utils_1.op(utils_1.Op.EQUALS, node.returnType, null)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitIfStatement = function (node) {
        if (this._isEntityPrevTokenSynthetic()) {
        }
        else if (core.identical(this.entity, node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
        else if (core.identical(this.entity, node.thenStatement) || core.identical(this.entity, node.elseStatement)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeVoidReturnSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitImplementsClause = function (node) {
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitIndexExpression = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitInstanceCreationExpression = function (node) {
        if (core.identical(this.entity, node.constructorName)) {
            this.optype.includeConstructorSuggestions = true;
            this.optype.constructorSuggestionsFilter = function (dartType, relevance) {
                var localTypeAssertion = null;
                if (_common_1.is(node.parent, any)) {
                    var varDeclaration = node.parent;
                    localTypeAssertion = (function (t) { return (!!t) ? t.type : null; })(resolutionMap.elementDeclaredByVariableDeclaration(varDeclaration));
                }
                else if (_common_1.is(node.parent, any)) {
                    var assignmentExpression = node.parent;
                    localTypeAssertion = assignmentExpression.leftHandSide.staticType;
                }
                if (utils_1.op(utils_1.Op.EQUALS, localTypeAssertion, null) || utils_1.op(utils_1.Op.EQUALS, dartType, null) || localTypeAssertion.isDynamic) {
                    return relevance;
                }
                else if (utils_1.op(utils_1.Op.EQUALS, localTypeAssertion, dartType)) {
                    return relevance + DART_RELEVANCE_INCREMENT;
                }
                else if (dartType.isSubtypeOf(localTypeAssertion)) {
                    return relevance;
                }
                else {
                    return null;
                }
            };
        }
    };
    _OpTypeAstVisitor.prototype.visitInterpolationExpression = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = node.leftBracket != null && utils_1.op(utils_1.Op.GT, node.leftBracket.length, 1);
        }
    };
    _OpTypeAstVisitor.prototype.visitIsExpression = function (node) {
        if (core.identical(this.entity, node.type)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.typeNameSuggestionsFilter = function (dartType, relevance) {
                var staticType = node.expression.staticType;
                if (staticType != null && (staticType.isDynamic || (dartType.isSubtypeOf(staticType) && dartType != staticType))) {
                    return relevance;
                }
                else {
                    return null;
                }
            };
        }
    };
    _OpTypeAstVisitor.prototype.visitLibraryIdentifier = function (node) {
    };
    _OpTypeAstVisitor.prototype.visitMapLiteralEntry = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitMethodDeclaration = function (node) {
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitMethodInvocation = function (node) {
        var isThis = _common_1.is(node.target, any);
        if (core.identical(this.entity, node.operator) && this.offset > node.operator.offset) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
        else if (core.identical(this.entity, node.methodName)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitNamedExpression = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.returnValueSuggestionsFilter = function (dartType, relevance) {
                var type = (function (t) { return (!!t) ? t.type : null; })(resolutionMap.elementForNamedExpression(node));
                var isEnum = type != null && _common_1.is(type.element, any) && type.element.isEnum;
                if (isEnum) {
                    if (utils_1.op(utils_1.Op.EQUALS, type, dartType)) {
                        return relevance + DART_RELEVANCE_INCREMENT;
                    }
                    else {
                        return null;
                    }
                }
                if (type != null && dartType != null && !type.isDynamic && dartType.isSubtypeOf(type)) {
                    return relevance + DART_RELEVANCE_INCREMENT;
                }
                else {
                    return relevance;
                }
            };
            this.optype.includeTypeNameSuggestions = true;
            var grandparent = node.parent.parent;
            if (_common_1.is(grandparent, any)) {
                var element = grandparent.staticElement;
                var parameters = element.parameters;
                var parameterElement = parameters.firstWhere(function (e) {
                    if (_common_1.is(e, any)) {
                        return utils_1.op(utils_1.Op.EQUALS, e.field.name, node.name.label.name);
                    }
                    return utils_1.op(utils_1.Op.EQUALS, e.parameterKind, ParameterKind.NAMED) && utils_1.op(utils_1.Op.EQUALS, e.name, node.name.label.name);
                }, {
                    orElse: function () {
                        return null;
                    }
                });
                if (_common_1.is((function (t) { return (!!t) ? t.type : null; })(parameterElement), any)) {
                    this.optype.includeVoidReturnSuggestions = true;
                }
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitNode = function (node) {
    };
    _OpTypeAstVisitor.prototype.visitNormalFormalParameter = function (node) {
        if (node.identifier != this.entity) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitParenthesizedExpression = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitPostfixExpression = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitPrefixedIdentifier = function (node) {
        if (core.identical(this.entity, node.identifier) || (node.identifier != null && node.identifier.isSynthetic && core.identical(this.entity, node.identifier.beginToken.previous))) {
            this.optype.isPrefixed = true;
            if (_common_1.is(node.parent, any) && _common_1.is(node.parent.parent, any)) {
                this.optype.includeConstructorSuggestions = true;
            }
            else {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeVoidReturnSuggestions = _common_1.is(node.parent, any);
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitPrefixExpression = function (node) {
        if (core.identical(this.entity, node.operand)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitPropertyAccess = function (node) {
        var isThis = _common_1.is(node.target, any);
        if (_common_1.is(node.realTarget, any) && node.realTarget.isSynthetic) {
            return;
        }
        if (core.identical(this.entity, node.operator) && this.offset > node.operator.offset) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
        else if (core.identical(this.entity, node.propertyName)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis && (_common_1.isNot(node.parent, any));
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitReturnStatement = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitSimpleIdentifier = function (node) {
        /* TODO (AssertStatementImpl) : assert (false); */ ;
    };
    _OpTypeAstVisitor.prototype.visitStringLiteral = function (node) {
    };
    _OpTypeAstVisitor.prototype.visitSwitchCase = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
        else if (node.statements.contains(this.entity)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeVoidReturnSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitSwitchStatement = function (node) {
        if (core.identical(this.entity, node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
        if (core.identical(this.entity, node.rightBracket)) {
            if (node.members.isNotEmpty) {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeVoidReturnSuggestions = true;
            }
        }
        if (_common_1.is(this.entity, any) && this.entity != node.members.first) {
            var member = this.entity;
            if (this.offset <= member.offset) {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeVoidReturnSuggestions = true;
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitThrowExpression = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitTopLevelVariableDeclaration = function (node) {
        if (_common_1.is(this.entity, any)) {
            var token = this.entity;
            if (token.isSynthetic || utils_1.op(utils_1.Op.EQUALS, token.lexeme, ';')) {
                this.optype.includeVarNameSuggestions = true;
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitTypeArgumentList = function (node) {
        var arguments = node.arguments;
        for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
            var type = arguments_1[_i];
            if (core.identical(this.entity, type)) {
                this.optype.includeTypeNameSuggestions = true;
                break;
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitTypedLiteral = function (node) {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitTypeName = function (node) {
        /* TODO (AssertStatementImpl) : assert (identical(entity, node.typeArguments)); */ ;
    };
    _OpTypeAstVisitor.prototype.visitTypeParameter = function (node) {
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype.visitVariableDeclaration = function (node) {
        if (core.identical(this.entity, node.initializer)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitVariableDeclarationList = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, node.keyword, null) || node.keyword.lexeme != 'var') {
            if (utils_1.op(utils_1.Op.EQUALS, node.type, null) || core.identical(this.entity, node.type)) {
                this.optype.includeTypeNameSuggestions = true;
            }
            else if (node.type != null && _common_1.is(this.entity, any)) {
                this.optype.includeVarNameSuggestions = true;
            }
        }
    };
    _OpTypeAstVisitor.prototype.visitVariableDeclarationStatement = function (node) {
    };
    _OpTypeAstVisitor.prototype.visitWhileStatement = function (node) {
        if (core.identical(this.entity, node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    };
    _OpTypeAstVisitor.prototype.visitWithClause = function (node) {
        this.optype.includeTypeNameSuggestions = true;
    };
    _OpTypeAstVisitor.prototype._isEntityPrevTokenSynthetic = function () {
        var entity = this.entity;
        if ((_common_1.is(entity, any) && (function (t) { return (!!t) ? t.isSynthetic : null; })(entity.beginToken.previous) || false)) {
            return true;
        }
        return false;
    };
    __decorate([
        utils_1.defaultConstructor
    ], _OpTypeAstVisitor.prototype, "_OpTypeAstVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitAnnotation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitArgumentList", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitAsExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitAssertStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitAwaitExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitBinaryExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitBlock", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitBreakStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitCascadeExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitCatchClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitClassDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitClassMember", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitCommentReference", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitConditionalExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitConstructorName", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitContinueStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitDefaultFormalParameter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitDoStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitEmptyStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitExpressionFunctionBody", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitExpressionStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitExtendsClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitFieldFormalParameter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitForEachStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitFormalParameterList", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitForStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitFunctionDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitFunctionExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitFunctionExpressionInvocation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitFunctionTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitIfStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitImplementsClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitIndexExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitInstanceCreationExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitInterpolationExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitIsExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitMapLiteralEntry", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitMethodDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitMethodInvocation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitNamedExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitNode", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitNormalFormalParameter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitPostfixExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitPrefixedIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitPrefixExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitPropertyAccess", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitReturnStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitSimpleIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitStringLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitSwitchCase", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitSwitchStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitThrowExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitTopLevelVariableDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitTypeArgumentList", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitTypedLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitTypeName", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitTypeParameter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitVariableDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitVariableDeclarationList", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitVariableDeclarationStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitWhileStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OpTypeAstVisitor.prototype, "visitWithClause", null);
    _OpTypeAstVisitor = __decorate([
        utils_1.DartClass
    ], _OpTypeAstVisitor);
    return _OpTypeAstVisitor;
}(any));
exports._OpTypeAstVisitor = _OpTypeAstVisitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=optype.js.map
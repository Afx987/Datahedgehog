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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/keyword_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var KeywordContributor = /** @class */ (function (_super) {
    __extends(KeywordContributor, _super);
    function KeywordContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    KeywordContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var suggestions;
            return __generator(this, function (_a) {
                suggestions = new core.DartList.literal();
                request.target.containingNode.accept(new _KeywordVisitor(request, suggestions));
                return [2 /*return*/, suggestions];
            });
        }); })());
    };
    KeywordContributor.prototype.KeywordContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], KeywordContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], KeywordContributor.prototype, "KeywordContributor", null);
    KeywordContributor = __decorate([
        utils_1.DartClass
    ], KeywordContributor);
    return KeywordContributor;
}(any));
exports.KeywordContributor = KeywordContributor;
var _KeywordVisitor = /** @class */ (function (_super) {
    __extends(_KeywordVisitor, _super);
    function _KeywordVisitor(request, suggestions) {
        var _this = this;
        return _this;
    }
    _KeywordVisitor_1 = _KeywordVisitor;
    _KeywordVisitor.prototype._KeywordVisitor = function (request, suggestions) {
        this.request = request;
        this.entity = request.target.entity;
        this.suggestions = suggestions;
    };
    _KeywordVisitor.prototype.visitArgumentList = function (node) {
        if (_common_1.is(this.request, any)) {
            var opType = this.request.opType;
            if (opType.includeOnlyNamedArgumentSuggestions) {
                return;
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.rightParenthesis)) {
            this._addExpressionKeywords(node);
            var previous = this.entity.previous;
            if (previous.isSynthetic) {
                previous = previous.previous;
            }
            if (utils_1.op(utils_1.Op.EQUALS, previous.lexeme, ')')) {
                this._addSuggestion(Keyword.ASYNC);
                this._addSuggestion2(properties.ASYNC_STAR);
                this._addSuggestion2(properties.SYNC_STAR);
            }
        }
        if (_common_1.is(this.entity, any) && node.arguments.contains(this.entity)) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitAsExpression = function (node) {
        if (core.identical(this.entity, node.asOperator) && _common_1.is(node.expression, any)) {
            this._addSuggestion(Keyword.ASYNC, DART_RELEVANCE_HIGH);
            this._addSuggestion2(properties.ASYNC_STAR, {
                relevance: DART_RELEVANCE_HIGH
            });
            this._addSuggestion2(properties.SYNC_STAR, {
                relevance: DART_RELEVANCE_HIGH
            });
        }
    };
    _KeywordVisitor.prototype.visitBlock = function (node) {
        var prevStmt = OpType.getPreviousStatement(node, this.entity);
        if (_common_1.is(prevStmt, any)) {
            if (utils_1.op(utils_1.Op.EQUALS, prevStmt.finallyBlock, null)) {
                this._addSuggestion(Keyword.ON);
                this._addSuggestion(Keyword.CATCH);
                this._addSuggestion(Keyword.FINALLY);
                if (prevStmt.catchClauses.isEmpty) {
                    return;
                }
            }
        }
        if (_common_1.is(this.entity, any)) {
            var expression = this.entity.expression;
            if (_common_1.is(expression, any)) {
                var token = expression.token;
                var previous = token.previous;
                if (previous.isSynthetic) {
                    previous = previous.previous;
                }
                var next = token.next;
                if (next.isSynthetic) {
                    next = next.next;
                }
                if (utils_1.op(utils_1.Op.EQUALS, previous.type, TokenType.CLOSE_PAREN) && utils_1.op(utils_1.Op.EQUALS, next.type, TokenType.OPEN_CURLY_BRACKET)) {
                    this._addSuggestion(Keyword.ASYNC);
                    this._addSuggestion2(properties.ASYNC_STAR);
                    this._addSuggestion2(properties.SYNC_STAR);
                }
            }
        }
        this._addStatementKeywords(node);
        if (this._inCatchClause(node)) {
            this._addSuggestion(Keyword.RETHROW, utils_1.op(utils_1.Op.MINUS, DART_RELEVANCE_KEYWORD, 1));
        }
    };
    _KeywordVisitor.prototype.visitClassDeclaration = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.name)) {
            return;
        }
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.rightBracket)) {
            this._addClassBodyKeywords();
        }
        else if (_common_1.is(this.entity, any)) {
            this._addClassBodyKeywords();
            var index = node.members.indexOf(this.entity);
            var previous = index > 0 ? utils_1.op(utils_1.Op.INDEX, node.members, index - 1) : null;
            if (_common_1.is(previous, any) && _common_1.is(previous.body, any)) {
                this._addSuggestion(Keyword.ASYNC);
                this._addSuggestion2(properties.ASYNC_STAR);
                this._addSuggestion2(properties.SYNC_STAR);
            }
        }
        else {
            this._addClassDeclarationKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitCompilationUnit = function (node) {
        var previousMember = null;
        for (var _i = 0, _a = node.childEntities; _i < _a.length; _i++) {
            var member = _a[_i];
            if (utils_1.op(utils_1.Op.EQUALS, this.entity, member)) {
                break;
            }
            previousMember = member;
        }
        if (_common_1.is(previousMember, any)) {
            if (utils_1.op(utils_1.Op.EQUALS, previousMember.leftBracket, null) || previousMember.leftBracket.isSynthetic) {
                this._addClassDeclarationKeywords(previousMember);
                return;
            }
        }
        if (_common_1.is(previousMember, any)) {
            if (utils_1.op(utils_1.Op.EQUALS, previousMember.semicolon, null) || previousMember.semicolon.isSynthetic) {
                this._addImportDirectiveKeywords(previousMember);
                return;
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, previousMember, null) || _common_1.is(previousMember, any)) {
            if (utils_1.op(utils_1.Op.EQUALS, previousMember, null) && !node.directives.any(function (d) {
                return _common_1.is(d, any);
            })) {
                this._addSuggestions(new core.DartList.literal(Keyword.LIBRARY), DART_RELEVANCE_HIGH);
            }
            this._addSuggestion2(properties.IMPORT_STATEMENT, {
                offset: 8, relevance: DART_RELEVANCE_HIGH
            });
            this._addSuggestion2(properties.EXPORT_STATEMENT, {
                offset: 8, relevance: DART_RELEVANCE_HIGH
            });
            this._addSuggestion2(properties.PART_STATEMENT, {
                offset: 6, relevance: DART_RELEVANCE_HIGH
            });
        }
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, null) || _common_1.is(this.entity, any)) {
            if (_common_1.is(previousMember, any) && _common_1.is(previousMember.functionExpression, any) && _common_1.is(previousMember.functionExpression.body, any)) {
                this._addSuggestion(Keyword.ASYNC, DART_RELEVANCE_HIGH);
                this._addSuggestion2(properties.ASYNC_STAR, {
                    relevance: DART_RELEVANCE_HIGH
                });
                this._addSuggestion2(properties.SYNC_STAR, {
                    relevance: DART_RELEVANCE_HIGH
                });
            }
            this._addCompilationUnitKeywords();
        }
    };
    _KeywordVisitor.prototype.visitConstructorDeclaration = function (node) {
        if (node.initializers.isNotEmpty && utils_1.op(utils_1.Op.EQUALS, node.initializers.last, this.entity)) {
            this._addSuggestion(Keyword.SUPER);
        }
    };
    _KeywordVisitor.prototype.visitDefaultFormalParameter = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.defaultValue)) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitExpression = function (node) {
        this._addExpressionKeywords(node);
    };
    _KeywordVisitor.prototype.visitExpressionFunctionBody = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.expression)) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitForEachStatement = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.inKeyword)) {
            var previous = node.inKeyword.previous;
            if (_common_1.is(previous, any) && utils_1.op(utils_1.Op.EQUALS, previous.lexeme, 'in')) {
                previous = previous.previous;
            }
            if (previous != null && utils_1.op(utils_1.Op.EQUALS, previous.type, TokenType.EQ)) {
                this._addSuggestions(new core.DartList.literal(Keyword.CONST, Keyword.FALSE, Keyword.NEW, Keyword.NULL, Keyword.TRUE));
            }
            else {
                this._addSuggestion(Keyword.IN, DART_RELEVANCE_HIGH);
            }
        }
    };
    _KeywordVisitor.prototype.visitFormalParameterList = function (node) {
        var constructorDeclaration = node.getAncestor(function (p) {
            return _common_1.is(p, any);
        });
        if (constructorDeclaration != null) {
            this._addSuggestions(new core.DartList.literal(Keyword.THIS));
        }
    };
    _KeywordVisitor.prototype.visitForStatement = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, node.initialization, this.entity) && _common_1.is(this.entity, any)) {
            if (_KeywordVisitor_1._isNextTokenSynthetic(this.entity, TokenType.SEMICOLON)) {
                this._addSuggestion(Keyword.VAR, DART_RELEVANCE_HIGH);
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, node.condition, this.entity) && _common_1.is(this.entity, any) && node.variables != null) {
            if (_KeywordVisitor_1._isPreviousTokenSynthetic(this.entity, TokenType.SEMICOLON)) {
                this._addSuggestion(Keyword.IN, DART_RELEVANCE_HIGH);
            }
        }
    };
    _KeywordVisitor.prototype.visitFunctionExpression = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.body)) {
            var body = node.body;
            if (!body.isAsynchronous) {
                this._addSuggestion(Keyword.ASYNC, DART_RELEVANCE_HIGH);
                if (_common_1.isNot(body, any)) {
                    this._addSuggestion2(properties.ASYNC_STAR, {
                        relevance: DART_RELEVANCE_HIGH
                    });
                    this._addSuggestion2(properties.SYNC_STAR, {
                        relevance: DART_RELEVANCE_HIGH
                    });
                }
            }
            if (_common_1.is(node.body, any) && _common_1.is(node.parent, any) && _common_1.is(node.parent.parent, any)) {
                this._addCompilationUnitKeywords();
            }
        }
    };
    _KeywordVisitor.prototype.visitIfStatement = function (node) {
        if (_KeywordVisitor_1._isPreviousTokenSynthetic(this.entity, TokenType.CLOSE_PAREN)) {
            this._addSuggestion(Keyword.IS, DART_RELEVANCE_HIGH);
        }
        else if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.thenStatement) || utils_1.op(utils_1.Op.EQUALS, this.entity, node.elseStatement)) {
            this._addStatementKeywords(node);
        }
        else if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.condition)) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitImportDirective = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.asKeyword)) {
            if (utils_1.op(utils_1.Op.EQUALS, node.deferredKeyword, null)) {
                this._addSuggestion(Keyword.DEFERRED, DART_RELEVANCE_HIGH);
            }
        }
        if ((utils_1.op(utils_1.Op.EQUALS, this.entity, node.semicolon) && node.uri != null && utils_1.op(utils_1.Op.PLUS, node.uri.offset, 1) != this.request.offset) || node.combinators.contains(this.entity)) {
            this._addImportDirectiveKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitInstanceCreationExpression = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.constructorName)) {
        }
        else {
            _super.prototype.visitInstanceCreationExpression.call(this, node);
        }
    };
    _KeywordVisitor.prototype.visitIsExpression = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.isOperator)) {
            this._addSuggestion(Keyword.IS, DART_RELEVANCE_HIGH);
        }
        else {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitLibraryIdentifier = function (node) {
    };
    _KeywordVisitor.prototype.visitMethodDeclaration = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.body)) {
            if (_common_1.is(node.body, any)) {
                this._addClassBodyKeywords();
                this._addSuggestion(Keyword.ASYNC);
                this._addSuggestion2(properties.ASYNC_STAR);
                this._addSuggestion2(properties.SYNC_STAR);
            }
            else {
                this._addSuggestion(Keyword.ASYNC, DART_RELEVANCE_HIGH);
                if (_common_1.isNot(node.body, any)) {
                    this._addSuggestion2(properties.ASYNC_STAR, {
                        relevance: DART_RELEVANCE_HIGH
                    });
                    this._addSuggestion2(properties.SYNC_STAR, {
                        relevance: DART_RELEVANCE_HIGH
                    });
                }
            }
        }
    };
    _KeywordVisitor.prototype.visitMethodInvocation = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.methodName)) {
        }
        else {
            _super.prototype.visitMethodInvocation.call(this, node);
        }
    };
    _KeywordVisitor.prototype.visitNamedExpression = function (node) {
        if (_common_1.is(this.entity, any) && utils_1.op(utils_1.Op.EQUALS, this.entity, node.expression)) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitNode = function (node) {
    };
    _KeywordVisitor.prototype.visitPrefixedIdentifier = function (node) {
        if (this.entity != node.identifier) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitPropertyAccess = function (node) {
        if (this.entity != node.propertyName) {
            _super.prototype.visitPropertyAccess.call(this, node);
        }
    };
    _KeywordVisitor.prototype.visitReturnStatement = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.expression)) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype.visitStringLiteral = function (node) {
    };
    _KeywordVisitor.prototype.visitSwitchStatement = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.expression)) {
            this._addExpressionKeywords(node);
        }
        else if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.rightBracket)) {
            if (node.members.isEmpty) {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE, Keyword.DEFAULT), DART_RELEVANCE_HIGH);
            }
            else {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE, Keyword.DEFAULT));
                this._addStatementKeywords(node);
            }
        }
        if (node.members.contains(this.entity)) {
            if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.members.first)) {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE, Keyword.DEFAULT), DART_RELEVANCE_HIGH);
            }
            else {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE, Keyword.DEFAULT));
                this._addStatementKeywords(node);
            }
        }
    };
    _KeywordVisitor.prototype.visitTryStatement = function (node) {
        var obj = this.entity;
        if (_common_1.is(obj, any) || (_common_1.is(obj, any) && utils_1.op(utils_1.Op.EQUALS, obj.value(), Keyword.FINALLY))) {
            this._addSuggestion(Keyword.ON);
            this._addSuggestion(Keyword.CATCH);
            return null;
        }
        return visitStatement(node);
    };
    _KeywordVisitor.prototype.visitVariableDeclaration = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.initializer)) {
            this._addExpressionKeywords(node);
        }
    };
    _KeywordVisitor.prototype._addClassBodyKeywords = function () {
        this._addSuggestions(new core.DartList.literal(Keyword.CONST, Keyword.DYNAMIC, Keyword.FACTORY, Keyword.FINAL, Keyword.GET, Keyword.OPERATOR, Keyword.SET, Keyword.STATIC, Keyword.VAR, Keyword.VOID));
    };
    _KeywordVisitor.prototype._addClassDeclarationKeywords = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, node.extendsClause, null)) {
            this._addSuggestion(Keyword.EXTENDS, DART_RELEVANCE_HIGH);
        }
        else if (utils_1.op(utils_1.Op.EQUALS, node.withClause, null)) {
            this._addSuggestion(Keyword.WITH, DART_RELEVANCE_HIGH);
        }
        if (utils_1.op(utils_1.Op.EQUALS, node.implementsClause, null)) {
            this._addSuggestion(Keyword.IMPLEMENTS, DART_RELEVANCE_HIGH);
        }
    };
    _KeywordVisitor.prototype._addCompilationUnitKeywords = function () {
        this._addSuggestions(new core.DartList.literal(Keyword.ABSTRACT, Keyword.CLASS, Keyword.CONST, Keyword.DYNAMIC, Keyword.FINAL, Keyword.TYPEDEF, Keyword.VAR, Keyword.VOID), DART_RELEVANCE_HIGH);
    };
    _KeywordVisitor.prototype._addExpressionKeywords = function (node) {
        this._addSuggestions(new core.DartList.literal(Keyword.CONST, Keyword.FALSE, Keyword.NEW, Keyword.NULL, Keyword.TRUE));
        if (this._inClassMemberBody(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.SUPER, Keyword.THIS));
        }
        if (this._inAsyncMethodOrFunction(node)) {
            this._addSuggestion(Keyword.AWAIT);
        }
    };
    _KeywordVisitor.prototype._addImportDirectiveKeywords = function (node) {
        var hasDeferredKeyword = node.deferredKeyword != null;
        var hasAsKeyword = node.asKeyword != null;
        if (!hasAsKeyword) {
            this._addSuggestion(Keyword.AS, DART_RELEVANCE_HIGH);
        }
        if (!hasDeferredKeyword) {
            if (!hasAsKeyword) {
                this._addSuggestion2(properties.DEFERRED_AS, {
                    relevance: DART_RELEVANCE_HIGH
                });
            }
            else if (utils_1.op(utils_1.Op.EQUALS, this.entity, node.asKeyword)) {
                this._addSuggestion(Keyword.DEFERRED, DART_RELEVANCE_HIGH);
            }
        }
        if (!hasDeferredKeyword || hasAsKeyword) {
            if (node.combinators.isEmpty) {
                this._addSuggestion(Keyword.SHOW, DART_RELEVANCE_HIGH);
                this._addSuggestion(Keyword.HIDE, DART_RELEVANCE_HIGH);
            }
        }
    };
    _KeywordVisitor.prototype._addStatementKeywords = function (node) {
        if (this._inClassMemberBody(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.SUPER, Keyword.THIS));
        }
        if (this._inAsyncMethodOrFunction(node)) {
            this._addSuggestion(Keyword.AWAIT);
        }
        else if (this._inAsyncStarOrSyncStarMethodOrFunction(node)) {
            this._addSuggestion(Keyword.AWAIT);
            this._addSuggestion(Keyword.YIELD);
            this._addSuggestion2(properties.YIELD_STAR);
        }
        if (this._inLoop(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.BREAK, Keyword.CONTINUE));
        }
        if (this._inSwitch(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.BREAK));
        }
        if (this._isEntityAfterIfWithoutElse(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.ELSE));
        }
        this._addSuggestions(new core.DartList.literal(Keyword.ASSERT, Keyword.CONST, Keyword.DO, Keyword.FINAL, Keyword.FOR, Keyword.IF, Keyword.NEW, Keyword.RETURN, Keyword.SWITCH, Keyword.THROW, Keyword.TRY, Keyword.VAR, Keyword.VOID, Keyword.WHILE));
    };
    _KeywordVisitor.prototype._addSuggestion = function (keyword, relevance) {
        relevance = relevance || DART_RELEVANCE_KEYWORD;
        this._addSuggestion2(keyword.lexeme, {
            relevance: relevance
        });
    };
    _KeywordVisitor.prototype._addSuggestion2 = function (completion, _namedArguments) {
        var _a = Object.assign({
            "relevance": DART_RELEVANCE_KEYWORD
        }, _namedArguments), offset = _a.offset, relevance = _a.relevance;
        if (offset == null) {
            offset = new core.DartString(completion).length;
        }
        this.suggestions.add(new bare.createInstance(any, null, CompletionSuggestionKind.KEYWORD, relevance, completion, offset, 0, false, false));
    };
    _KeywordVisitor.prototype._addSuggestions = function (keywords, relevance) {
        var _this = this;
        relevance = relevance || DART_RELEVANCE_KEYWORD;
        keywords.forEach(function (keyword) {
            _this._addSuggestion(keyword, relevance);
        });
    };
    _KeywordVisitor.prototype._inAsyncMethodOrFunction = function (node) {
        var body = node.getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        return body != null && body.isAsynchronous && utils_1.op(utils_1.Op.EQUALS, body.star, null);
    };
    _KeywordVisitor.prototype._inAsyncStarOrSyncStarMethodOrFunction = function (node) {
        var body = node.getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        return body != null && body.keyword != null && body.star != null;
    };
    _KeywordVisitor.prototype._inCatchClause = function (node) {
        return node.getAncestor(function (p) {
            return _common_1.is(p, any);
        }) != null;
    };
    _KeywordVisitor.prototype._inClassMemberBody = function (node) {
        while (true) {
            var body = node.getAncestor(function (n) {
                return _common_1.is(n, any);
            });
            if (utils_1.op(utils_1.Op.EQUALS, body, null)) {
                return false;
            }
            var parent_1 = body.parent;
            if (_common_1.is(parent_1, any) || _common_1.is(parent_1, any)) {
                return true;
            }
            node = parent_1;
        }
    };
    _KeywordVisitor.prototype._inDoLoop = function (node) {
        return node.getAncestor(function (p) {
            return _common_1.is(p, any);
        }) != null;
    };
    _KeywordVisitor.prototype._inForLoop = function (node) {
        return node.getAncestor(function (p) {
            return _common_1.is(p, any) || _common_1.is(p, any);
        }) != null;
    };
    _KeywordVisitor.prototype._inLoop = function (node) {
        return this._inDoLoop(node) || this._inForLoop(node) || this._inWhileLoop(node);
    };
    _KeywordVisitor.prototype._inSwitch = function (node) {
        return node.getAncestor(function (p) {
            return _common_1.is(p, any);
        }) != null;
    };
    _KeywordVisitor.prototype._inWhileLoop = function (node) {
        return node.getAncestor(function (p) {
            return _common_1.is(p, any);
        }) != null;
    };
    _KeywordVisitor.prototype._isEntityAfterIfWithoutElse = function (node) {
        var block = (function (_32_) { return (!!_32_) ? _32_.getAncestor(function (n) {
            return _common_1.is(n, any);
        }) : null; })(node);
        if (utils_1.op(utils_1.Op.EQUALS, block, null)) {
            return false;
        }
        var entity = this.entity;
        if (_common_1.is(entity, any)) {
            var entityIndex = block.statements.indexOf(entity);
            if (entityIndex > 0) {
                var prevStatement = utils_1.op(utils_1.Op.INDEX, block.statements, entityIndex - 1);
                return _common_1.is(prevStatement, any) && utils_1.op(utils_1.Op.EQUALS, prevStatement.elseStatement, null);
            }
        }
        if (_common_1.is(entity, any)) {
            for (var _i = 0, _a = block.statements; _i < _a.length; _i++) {
                var statement = _a[_i];
                if (utils_1.op(utils_1.Op.EQUALS, statement.endToken.next, entity)) {
                    return _common_1.is(statement, any) && utils_1.op(utils_1.Op.EQUALS, statement.elseStatement, null);
                }
            }
        }
        return false;
    };
    _KeywordVisitor._isNextTokenSynthetic = function (entity, type) {
        if (_common_1.is(entity, any)) {
            var token = entity.beginToken;
            var nextToken = token.next;
            return nextToken.isSynthetic && utils_1.op(utils_1.Op.EQUALS, nextToken.type, type);
        }
        return false;
    };
    _KeywordVisitor._isPreviousTokenSynthetic = function (entity, type) {
        if (_common_1.is(entity, any)) {
            var token = entity.beginToken;
            var previousToken = token.previous;
            return previousToken.isSynthetic && utils_1.op(utils_1.Op.EQUALS, previousToken.type, type);
        }
        return false;
    };
    var _KeywordVisitor_1;
    __decorate([
        utils_1.defaultConstructor
    ], _KeywordVisitor.prototype, "_KeywordVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitArgumentList", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitAsExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitBlock", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitClassDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitCompilationUnit", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitConstructorDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitDefaultFormalParameter", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitExpressionFunctionBody", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitForEachStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitFormalParameterList", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitForStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitFunctionExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitIfStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitImportDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitInstanceCreationExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitIsExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitLibraryIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitMethodDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitMethodInvocation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitNamedExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitNode", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitPrefixedIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitPropertyAccess", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitReturnStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitStringLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitSwitchStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitTryStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _KeywordVisitor.prototype, "visitVariableDeclaration", null);
    _KeywordVisitor = _KeywordVisitor_1 = __decorate([
        utils_1.DartClass
    ], _KeywordVisitor);
    return _KeywordVisitor;
}(any));
exports._KeywordVisitor = _KeywordVisitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "ASYNC_STAR", {
        get: function () {
            if (this.__$ASYNC_STAR === undefined) {
                this.__$ASYNC_STAR = 'async*';
            }
            return this.__$ASYNC_STAR;
        },
        set: function (__$value) {
            this.__$ASYNC_STAR = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "DEFERRED_AS", {
        get: function () {
            if (this.__$DEFERRED_AS === undefined) {
                this.__$DEFERRED_AS = 'deferred as';
            }
            return this.__$DEFERRED_AS;
        },
        set: function (__$value) {
            this.__$DEFERRED_AS = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "EXPORT_STATEMENT", {
        get: function () {
            if (this.__$EXPORT_STATEMENT === undefined) {
                this.__$EXPORT_STATEMENT = "export '';";
            }
            return this.__$EXPORT_STATEMENT;
        },
        set: function (__$value) {
            this.__$EXPORT_STATEMENT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "IMPORT_STATEMENT", {
        get: function () {
            if (this.__$IMPORT_STATEMENT === undefined) {
                this.__$IMPORT_STATEMENT = "import '';";
            }
            return this.__$IMPORT_STATEMENT;
        },
        set: function (__$value) {
            this.__$IMPORT_STATEMENT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "PART_STATEMENT", {
        get: function () {
            if (this.__$PART_STATEMENT === undefined) {
                this.__$PART_STATEMENT = "part '';";
            }
            return this.__$PART_STATEMENT;
        },
        set: function (__$value) {
            this.__$PART_STATEMENT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "SYNC_STAR", {
        get: function () {
            if (this.__$SYNC_STAR === undefined) {
                this.__$SYNC_STAR = 'sync*';
            }
            return this.__$SYNC_STAR;
        },
        set: function (__$value) {
            this.__$SYNC_STAR = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "YIELD_STAR", {
        get: function () {
            if (this.__$YIELD_STAR === undefined) {
                this.__$YIELD_STAR = 'yield*';
            }
            return this.__$YIELD_STAR;
        },
        set: function (__$value) {
            this.__$YIELD_STAR = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=keyword_contributor.js.map
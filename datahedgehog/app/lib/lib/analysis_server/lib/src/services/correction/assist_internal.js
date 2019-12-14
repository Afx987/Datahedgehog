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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/assist_internal.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/path/lib/path");
var collection = require("@dart2ts/dart/core");
var AssistProcessor = /** @class */ (function () {
    function AssistProcessor(dartContext) {
    }
    AssistProcessor_1 = AssistProcessor;
    AssistProcessor.prototype.AssistProcessor = function (dartContext) {
        this.assists = new core.DartList.literal();
        this.linkedPositionGroups = new core.DartMap.literal([]);
        this.exitPosition = null;
        this.change = new bare.createInstance(any, null, '<message>');
        this.driver = dartContext.analysisDriver;
        this.source = dartContext.source;
        this.file = dartContext.source.fullName;
        this.fileStamp = this._modificationStamp(this.file);
        this.unit = dartContext.unit;
        this.unitElement = dartContext.unit.element;
        this.unitLibraryElement = resolutionMap.elementDeclaredByCompilationUnit(dartContext.unit).library;
        this.unitLibraryFile = this.unitLibraryElement.source.fullName;
        this.unitLibraryFolder = lib3.dirname(this.unitLibraryFile);
        this.selectionOffset = dartContext.selectionOffset;
        this.selectionLength = dartContext.selectionLength;
        this.selectionEnd = this.selectionOffset + this.selectionLength;
    };
    Object.defineProperty(AssistProcessor.prototype, "eol", {
        get: function () {
            return this.utils.endOfLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssistProcessor.prototype, "typeProvider", {
        get: function () {
            if (utils_1.op(utils_1.Op.EQUALS, this._typeProvider, null)) {
                this._typeProvider = this.unitElement.context.typeProvider;
            }
            return this._typeProvider;
        },
        enumerable: true,
        configurable: true
    });
    AssistProcessor.prototype.compute = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var e;
            return __generator(this, function (_a) {
                if (this._modificationStamp(this.file) != this.fileStamp) {
                    return [2 /*return*/, new core.DartList.literal()];
                }
                try {
                    this.utils = new bare.createInstance(any, null, this.unit);
                }
                catch (__error__) {
                    {
                        e = __error__;
                        throw new bare.createInstance(any, null, {
                            exception: e
                        });
                    }
                }
                this.node = new bare.createInstance(any, null, this.selectionOffset, this.selectionEnd).searchWithin(this.unit);
                if (utils_1.op(utils_1.Op.EQUALS, this.node, null)) {
                    return [2 /*return*/, this.assists];
                }
                this._addProposal_addTypeAnnotation_DeclaredIdentifier();
                this._addProposal_addTypeAnnotation_SimpleFormalParameter();
                this._addProposal_addTypeAnnotation_VariableDeclaration();
                this._addProposal_assignToLocalVariable();
                this._addProposal_convertIntoFinalField();
                this._addProposal_convertIntoGetter();
                this._addProposal_convertDocumentationIntoBlock();
                this._addProposal_convertDocumentationIntoLine();
                this._addProposal_convertToBlockFunctionBody();
                this._addProposal_convertToExpressionFunctionBody();
                this._addProposal_convertFlutterChild();
                this._addProposal_convertToForIndexLoop();
                this._addProposal_convertToIsNot_onIs();
                this._addProposal_convertToIsNot_onNot();
                this._addProposal_convertToIsNotEmpty();
                this._addProposal_convertToFieldParameter();
                this._addProposal_convertToNormalParameter();
                this._addProposal_encapsulateField();
                this._addProposal_exchangeOperands();
                this._addProposal_importAddShow();
                this._addProposal_introduceLocalTestedType();
                this._addProposal_invertIf();
                this._addProposal_joinIfStatementInner();
                this._addProposal_joinIfStatementOuter();
                this._addProposal_joinVariableDeclaration_onAssignment();
                this._addProposal_joinVariableDeclaration_onDeclaration();
                this._addProposal_moveFlutterWidgetDown();
                this._addProposal_moveFlutterWidgetUp();
                this._addProposal_removeTypeAnnotation();
                this._addProposal_reparentFlutterList();
                this._addProposal_reparentFlutterWidget();
                this._addProposal_replaceConditionalWithIfElse();
                this._addProposal_replaceIfElseWithConditional();
                this._addProposal_splitAndCondition();
                this._addProposal_splitVariableDeclaration();
                this._addProposal_surroundWith();
                return [2 /*return*/, this.assists];
            });
        }); })());
    };
    AssistProcessor.prototype.getEnclosingFunctionBody = function () {
        {
            let;
            this.node.getAncestor(function (node) {
                return _common_1.is(node, any);
            });
            if (function () { } != null) {
                return function () { }.body;
            }
        }
        {
            let;
            this.node.getAncestor(function (node) {
                return _common_1.is(node, any);
            });
            if (function () { } != null) {
                return function () { }.functionExpression.body;
            }
        }
        {
            var constructor = this.node.getAncestor(function (node) {
                return _common_1.is(node, any);
            });
            if (constructor != null) {
                return constructor.body;
            }
        }
        {
            var method = this.node.getAncestor(function (node) {
                return _common_1.is(node, any);
            });
            if (method != null) {
                return method.body;
            }
        }
        return null;
    };
    AssistProcessor.prototype._addAssist = function (kind, args, _namedArguments) {
        var _this = this;
        var assistFile = Object.assign({}, _namedArguments).assistFile;
        if (assistFile == null) {
            assistFile = this.file;
        }
        if (this.change.edits.isEmpty) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this.change.message = formatList(kind.message, args);
        this.linkedPositionGroups.values.forEach(function (group) {
            return _this.change.addLinkedEditGroup(group);
        });
        this.change.selection = this.exitPosition;
        var assist = new bare.createInstance(any, null, kind, this.change);
        this.assists.add(assist);
        this.change = new bare.createInstance(any, null, '<message>');
        this.linkedPositionGroups.clear();
        this.exitPosition = null;
    };
    AssistProcessor.prototype._addIndentEdit = function (range, oldIndent, newIndent) {
        var edit = this.utils.createIndentEdit(range, oldIndent, newIndent);
        doSourceChange_addElementEdit(this.change, this.unitElement, edit);
    };
    AssistProcessor.prototype._addInsertEdit = function (offset, text) {
        var edit = new bare.createInstance(any, null, offset, 0, text);
        doSourceChange_addElementEdit(this.change, this.unitElement, edit);
    };
    AssistProcessor.prototype._addProposal_addTypeAnnotation_DeclaredIdentifier = function () {
        var declaredIdentifier = this.node.getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, declaredIdentifier, null)) {
            var forEach = this.node.getAncestor(function (n) {
                return _common_1.is(n, any);
            });
            var offset = this.node.offset;
            if (forEach != null && forEach.iterable != null && offset < forEach.iterable.offset) {
                declaredIdentifier = forEach.loopVariable;
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, declaredIdentifier, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (declaredIdentifier.type != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var typeSource;
        var type = declaredIdentifier.identifier.bestType;
        if (_common_1.is(type, any) || _common_1.is(type, any)) {
            this._configureTargetLocation(this.node);
            var librariesToImport = new core.DartSet();
            typeSource = this.utils.getTypeSource(type, librariesToImport);
            addLibraryImports(this.change, this.unitLibraryElement, librariesToImport);
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (typeSource == null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var keyword = declaredIdentifier.keyword;
        if (utils_1.op(utils_1.Op.EQUALS, keyword.keyword, Keyword.VAR)) {
            this._addReplaceEdit(range.token(keyword), typeSource);
        }
        else {
            this._addInsertEdit(declaredIdentifier.identifier.offset, typeSource + " ");
        }
        this._addAssist(DartAssistKind.ADD_TYPE_ANNOTATION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_addTypeAnnotation_SimpleFormalParameter = function () {
        var node = this.node;
        if (_common_1.isNot(node, any) || _common_1.isNot(node.parent, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var name = node;
        var parameter = node.parent;
        if (parameter.type != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var type = parameter.element.type;
        if (_common_1.isNot(type, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var typeSource;
        {
            this._configureTargetLocation(node);
            var librariesToImport = new core.DartSet();
            typeSource = this.utils.getTypeSource(type, librariesToImport);
            addLibraryImports(this.change, this.unitLibraryElement, librariesToImport);
        }
        if (typeSource == null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._addInsertEdit(name.offset, typeSource + " ");
        this._addAssist(DartAssistKind.ADD_TYPE_ANNOTATION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_addTypeAnnotation_VariableDeclaration = function () {
        var node = this.node;
        var declarationList = node.getAncestor(function (node) {
            return _common_1.is(node, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, declarationList, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (declarationList.type != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var variables = declarationList.variables;
        if (variables.length != 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var variable = variables[0];
        if (this.selectionOffset > variable.name.end) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var initializer = variable.initializer;
        if (utils_1.op(utils_1.Op.EQUALS, initializer, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var type = initializer.bestType;
        var typeSource;
        if (_common_1.is(type, any) && !type.isDartCoreNull || _common_1.is(type, any)) {
            this._configureTargetLocation(node);
            var librariesToImport = new core.DartSet();
            typeSource = this.utils.getTypeSource(type, librariesToImport);
            addLibraryImports(this.change, this.unitLibraryElement, librariesToImport);
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (typeSource == null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var keyword = declarationList.keyword;
        if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.keyword : null; })(keyword), Keyword.VAR)) {
            this._addReplaceEdit(range.token(keyword), typeSource);
        }
        else {
            this._addInsertEdit(variable.offset, typeSource + " ");
        }
        this._addAssist(DartAssistKind.ADD_TYPE_ANNOTATION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_assignToLocalVariable = function () {
        var expressionStatement;
        for (var node = this.node; node != null; node = node.parent) {
            if (_common_1.is(node, any)) {
                expressionStatement = node;
                break;
            }
            if (_common_1.is(node, any) || _common_1.is(node, any) || _common_1.is(node, any) || _common_1.is(node, any)) {
                AssistProcessor_1._coverageMarker();
                return;
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, expressionStatement, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var expression = expressionStatement.expression;
        var offset = expression.offset;
        var type = expression.bestType;
        if (type.isVoid) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var builder = new bare.createInstance(any, null, this.file, offset);
        builder.append('var ');
        var excluded = new core.DartSet();
        {
            var scopedNameFinder = new bare.createInstance(any, null, offset);
            expression.accept(scopedNameFinder);
            excluded.addAll(scopedNameFinder.locals.keys.toSet());
        }
        {
            var suggestions = getVariableNameSuggestionsForExpression(type, expression, excluded);
            builder.startPosition('NAME');
            for (var i = 0; i < suggestions.length; i++) {
                var name_1 = suggestions[i];
                if (i == 0) {
                    builder.append(name_1);
                }
                builder.addSuggestion(LinkedEditSuggestionKind.VARIABLE, name_1);
            }
            builder.endPosition();
        }
        builder.append(' = ');
        this._insertBuilder(builder);
        this._addAssist(DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertDocumentationIntoBlock = function () {
        var comment = this.node.getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        if (comment != null && comment.isDocumentation) {
            var prefix = this.utils.getNodePrefix(comment);
            var sb = new bare.createInstance(any, null, this.file, comment.offset);
            sb.append('/**');
            sb.append(this.eol);
            for (var _i = 0, _a = comment.tokens; _i < _a.length; _i++) {
                var token = _a[_i];
                if (_common_1.is(token, any) && utils_1.op(utils_1.Op.EQUALS, token.type, TokenType.SINGLE_LINE_COMMENT)) {
                    sb.append(prefix);
                    sb.append(' *');
                    sb.append(token.lexeme.substring(new core.DartString('///').length));
                    sb.append(this.eol);
                }
                else {
                    return;
                }
            }
            sb.append(prefix);
            sb.append(' */');
            this._insertBuilder(sb, comment.length);
        }
        this._addAssist(DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertDocumentationIntoLine = function () {
        var comment = this.node.getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        if (comment != null && comment.isDocumentation) {
            if (utils_1.op(utils_1.Op.EQUALS, comment.tokens.length, 1)) {
                var token = comment.tokens.first;
                if (utils_1.op(utils_1.Op.EQUALS, token.type, TokenType.MULTI_LINE_COMMENT)) {
                    var text = token.lexeme;
                    var lines = new core.DartString(text).split('\n');
                    var prefix = this.utils.getNodePrefix(comment);
                    var sb = new bare.createInstance(any, null, this.file, comment.offset);
                    var firstLine = true;
                    var linePrefix = '';
                    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                        var line = lines_1[_i];
                        if (firstLine) {
                            firstLine = false;
                            var expectedPrefix = '/**';
                            if (!new core.DartString(line).startsWith(expectedPrefix)) {
                                return;
                            }
                            line = new core.DartString(new core.DartString(line).substring(new core.DartString(expectedPrefix).length)).trim();
                            if (new core.DartString(line).isNotEmpty) {
                                sb.append('/// ');
                                sb.append(line);
                                linePrefix = this.eol + prefix;
                            }
                        }
                        else {
                            if (new core.DartString(line).startsWith(prefix + ' */')) {
                                break;
                            }
                            var expectedPrefix = prefix + ' * ';
                            if (!new core.DartString(line).startsWith(expectedPrefix)) {
                                return;
                            }
                            line = new core.DartString(new core.DartString(line).substring(new core.DartString(expectedPrefix).length)).trim();
                            sb.append(linePrefix);
                            sb.append('/// ');
                            sb.append(line);
                            linePrefix = this.eol + prefix;
                        }
                    }
                    this._insertBuilder(sb, comment.length);
                }
            }
        }
        this._addAssist(DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertFlutterChild = function () {
        var namedExp;
        if (_common_1.is(this.node, any) && _common_1.is(this.node.parent, any) && _common_1.is(this.node.parent.parent, any)) {
            namedExp = this.node.parent.parent;
            if (this.node.name != 'child' || utils_1.op(utils_1.Op.EQUALS, namedExp.expression, null)) {
                return;
            }
            if (_common_1.isNot((function (t) { return (!!t) ? t.parent : null; })(namedExp.parent), any)) {
                return;
            }
            var newExpr = namedExp.parent.parent;
            if (utils_1.op(utils_1.Op.EQUALS, newExpr, null) || !isFlutterInstanceCreationExpression(newExpr)) {
                return;
            }
        }
        else {
            var newExpr = identifyNewExpression(this.node);
            if (utils_1.op(utils_1.Op.EQUALS, newExpr, null) || !isFlutterInstanceCreationExpression(newExpr)) {
                AssistProcessor_1._coverageMarker();
                return;
            }
            namedExp = findChildArgument(newExpr);
            if (utils_1.op(utils_1.Op.EQUALS, namedExp, null) || utils_1.op(utils_1.Op.EQUALS, namedExp.expression, null)) {
                AssistProcessor_1._coverageMarker();
                return;
            }
        }
        var childArg = getChildWidget(namedExp, false);
        if (utils_1.op(utils_1.Op.EQUALS, childArg, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        convertFlutterChildToChildren(childArg, namedExp, this.eol, this.utils.getNodeText, this.utils.getLinePrefix, this.utils.getIndent, this.utils.getText, this._addInsertEdit.bind(this), this._addRemoveEdit.bind(this), this._addReplaceEdit.bind(this), range.node);
        this._addAssist(DartAssistKind.CONVERT_FLUTTER_CHILD, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertIntoFinalField = function () {
        var getter;
        for (var n = this.node; n != null; n = n.parent) {
            if (_common_1.is(n, any)) {
                getter = n;
                break;
            }
            if (_common_1.is(n, any) || _common_1.is(n, any) || _common_1.is(n, any)) {
                continue;
            }
            break;
        }
        if (utils_1.op(utils_1.Op.EQUALS, getter, null) || !getter.isGetter) {
            return;
        }
        {
            var element = getter.element;
            if (utils_1.op(utils_1.Op.EQUALS, element, null)) {
                return;
            }
            var enclosing = element.enclosingElement;
            if (_common_1.is(enclosing, any)) {
                if (enclosing.getSetter(element.name) != null) {
                    return;
                }
            }
        }
        var expression;
        {
            var body = getter.body;
            if (_common_1.is(body, any)) {
                expression = body.expression;
            }
            else if (_common_1.is(body, any)) {
                var statements = body.block.statements;
                if (statements.length == 1) {
                    var statement = statements.first;
                    if (_common_1.is(statement, any)) {
                        expression = statement.expression;
                    }
                }
            }
        }
        if (expression != null) {
            var beginNodeToReplace = getter.name;
            var code = 'final';
            if (getter.returnType != null) {
                beginNodeToReplace = getter.returnType;
                code += ' ' + this._getNodeText(getter.returnType);
            }
            code += ' ' + this._getNodeText(getter.name);
            if (_common_1.isNot(expression, any)) {
                code += ' = ' + this._getNodeText(expression);
            }
            code += ';';
            this._addReplaceEdit(range.startEnd(beginNodeToReplace, getter), code);
            this._addAssist(DartAssistKind.CONVERT_INTO_FINAL_FIELD, new core.DartList.literal());
        }
    };
    AssistProcessor.prototype._addProposal_convertIntoGetter = function () {
        var fieldDeclaration;
        for (var n = this.node; n != null; n = n.parent) {
            if (_common_1.is(n, any)) {
                fieldDeclaration = n;
                break;
            }
            if (_common_1.is(n, any) || _common_1.is(n, any) || _common_1.is(n, any) || _common_1.is(n, any) || _common_1.is(n, any)) {
                continue;
            }
            break;
        }
        if (utils_1.op(utils_1.Op.EQUALS, fieldDeclaration, null)) {
            return;
        }
        var fieldList = fieldDeclaration.fields;
        if (!fieldList.isFinal || fieldList.variables.length != 1) {
            return;
        }
        var field = fieldList.variables.first;
        var initializer = field.initializer;
        if (utils_1.op(utils_1.Op.EQUALS, initializer, null)) {
            return;
        }
        var code = '';
        if (fieldList.type != null) {
            code += this._getNodeText(fieldList.type) + ' ';
        }
        code += 'get';
        code += ' ' + this._getNodeText(field.name);
        code += ' => ' + this._getNodeText(initializer);
        code += ';';
        this._addReplaceEdit(range.startEnd(fieldList.keyword, fieldDeclaration), code);
        this._addAssist(DartAssistKind.CONVERT_INTO_GETTER, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertToBlockFunctionBody = function () {
        var body = this.getEnclosingFunctionBody();
        if (_common_1.isNot(body, any) || body.isGenerator) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var returnValue = body.expression;
        var returnValueType = returnValue.staticType;
        var returnValueCode = this._getNodeText(returnValue);
        var prefix = this.utils.getNodePrefix(body.parent);
        var indent = this.utils.getIndent(1);
        var sb = new bare.createInstance(any, null, this.file, body.offset);
        if (body.isAsynchronous) {
            sb.append('async ');
        }
        sb.append("{" + this.eol + prefix + indent);
        if (!returnValueType.isVoid) {
            sb.append('return ');
        }
        sb.append(returnValueCode);
        sb.append(';');
        sb.setExitOffset();
        sb.append("" + this.eol + prefix + "}");
        this._insertBuilder(sb, body.length);
        this._addAssist(DartAssistKind.CONVERT_INTO_BLOCK_BODY, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertToExpressionFunctionBody = function () {
        var body = this.getEnclosingFunctionBody();
        if (_common_1.isNot(body, any) || body.isGenerator) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var statements = body.block.statements;
        if (statements.length != 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var onlyStatement = statements.first;
        var returnExpression;
        if (_common_1.is(onlyStatement, any)) {
            returnExpression = onlyStatement.expression;
        }
        else if (_common_1.is(onlyStatement, any)) {
            returnExpression = onlyStatement.expression;
        }
        if (utils_1.op(utils_1.Op.EQUALS, returnExpression, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var sb = new bare.createInstance(any, null, this.file, body.offset);
        if (body.isAsynchronous) {
            sb.append('async ');
        }
        sb.append('=> ');
        sb.append(this._getNodeText(returnExpression));
        if (_common_1.isNot(body.parent, any) || _common_1.is(body.parent.parent, any)) {
            sb.append(';');
        }
        this._insertBuilder(sb, body.length);
        this._addAssist(DartAssistKind.CONVERT_INTO_EXPRESSION_BODY, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertToFieldParameter = function () {
        if (utils_1.op(utils_1.Op.EQUALS, this.node, null)) {
            return;
        }
        var constructor = this.node.getAncestor(function (node) {
            return _common_1.is(node, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, constructor, null)) {
            return;
        }
        var parameterList = constructor.parameters;
        var initializers = constructor.initializers;
        var parameter;
        if (_common_1.is(this.node.parent, any) && _common_1.is(this.node.parent.parent, any) && _common_1.is(this.node.parent.parent.parent, any)) {
            parameter = this.node.parent;
        }
        if (_common_1.is(this.node, any) && _common_1.is(this.node.parent, any)) {
            var name_2 = this.node.name;
            var initializer = this.node.parent;
            if (utils_1.op(utils_1.Op.EQUALS, initializer.expression, this.node)) {
                for (var _i = 0, _a = parameterList.parameters; _i < _a.length; _i++) {
                    var formalParameter = _a[_i];
                    if (_common_1.is(formalParameter, any) && utils_1.op(utils_1.Op.EQUALS, formalParameter.identifier.name, name_2)) {
                        parameter = formalParameter;
                    }
                }
            }
        }
        if (parameter != null) {
            var parameterName = parameter.identifier.name;
            var parameterElement_1 = parameter.element;
            {
                var numOfReferences_1 = 0;
                var visitor = new _SimpleIdentifierRecursiveAstVisitor(function (node) {
                    if (utils_1.op(utils_1.Op.EQUALS, node.staticElement, parameterElement_1)) {
                        numOfReferences_1++;
                    }
                });
                for (var _b = 0, initializers_1 = initializers; _b < initializers_1.length; _b++) {
                    var initializer = initializers_1[_b];
                    initializer.accept(visitor);
                }
                if (numOfReferences_1 != 1) {
                    return;
                }
            }
            var parameterInitializer = void 0;
            for (var _c = 0, initializers_2 = initializers; _c < initializers_2.length; _c++) {
                var initializer = initializers_2[_c];
                if (_common_1.is(initializer, any)) {
                    var expression = initializer.expression;
                    if (_common_1.is(expression, any) && utils_1.op(utils_1.Op.EQUALS, expression.name, parameterName)) {
                        parameterInitializer = initializer;
                    }
                }
            }
            if (utils_1.op(utils_1.Op.EQUALS, parameterInitializer, null)) {
                return;
            }
            var fieldName = parameterInitializer.fieldName.name;
            this._addReplaceEdit(range.node(parameter), "this." + fieldName);
            var initializerIndex = initializers.indexOf(parameterInitializer);
            if (initializers.length == 1) {
                this._addRemoveEdit(range.endEnd(parameterList, parameterInitializer));
            }
            else {
                if (initializerIndex == 0) {
                    var next = initializers[initializerIndex + 1];
                    this._addRemoveEdit(range.startStart(parameterInitializer, next));
                }
                else {
                    var prev = initializers[initializerIndex - 1];
                    this._addRemoveEdit(range.endEnd(prev, parameterInitializer));
                }
            }
            this._addAssist(DartAssistKind.CONVERT_TO_FIELD_PARAMETER, new core.DartList.literal());
        }
    };
    AssistProcessor.prototype._addProposal_convertToForIndexLoop = function () {
        var forEachStatement = this.node.getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, forEachStatement, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (this.selectionOffset < forEachStatement.offset || utils_1.op(utils_1.Op.LT, forEachStatement.rightParenthesis.end, this.selectionOffset)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var loopVariable = forEachStatement.loopVariable;
        if (utils_1.op(utils_1.Op.EQUALS, loopVariable, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var listName;
        var iterable = forEachStatement.iterable;
        if (_common_1.is(iterable, any) && _common_1.is(iterable.staticElement, any)) {
            listName = iterable.name;
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        {
            var iterableType = iterable.bestType;
            var listType = this.typeProvider.listType;
            if (_common_1.isNot(iterableType, any) || iterableType.element != listType.element) {
                AssistProcessor_1._coverageMarker();
                return;
            }
        }
        if (_common_1.isNot(forEachStatement.body, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var body = forEachStatement.body;
        var indexName;
        {
            var conflicts = this.utils.findPossibleLocalVariableConflicts(forEachStatement.offset);
            if (!conflicts.contains('i')) {
                indexName = 'i';
            }
            else if (!conflicts.contains('j')) {
                indexName = 'j';
            }
            else if (!conflicts.contains('k')) {
                indexName = 'k';
            }
            else {
                AssistProcessor_1._coverageMarker();
                return;
            }
        }
        var prefix = this.utils.getNodePrefix(forEachStatement);
        var indent = this.utils.getIndent(1);
        var firstBlockLine = this.utils.getLineContentEnd(body.leftBracket.end);
        this._addReplaceEdit(range.startEnd(forEachStatement, forEachStatement.rightParenthesis), "for (int " + indexName + " = 0; " + indexName + " < " + listName + ".length; " + indexName + "++)");
        this._addInsertEdit(firstBlockLine, "" + prefix + indent + loopVariable + " = " + listName + "[" + indexName + "];" + this.eol);
        this._addAssist(DartAssistKind.CONVERT_INTO_FOR_INDEX, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertToIsNot_onIs = function () {
        var node = this.node;
        while (node != null && _common_1.isNot(node, any)) {
            node = node.parent;
        }
        if (_common_1.isNot(node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var isExpression = node;
        if (isExpression.notOperator != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var parent = isExpression.parent;
        if (_common_1.isNot(parent, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var parExpression = parent;
        var parent2 = parent.parent;
        if (_common_1.isNot(parent2, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var prefExpression = parent2;
        if (prefExpression.operator.type != TokenType.BANG) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (utils_1.op(utils_1.Op.GEQ, getExpressionParentPrecedence(prefExpression), TokenClass.RELATIONAL_OPERATOR.precedence)) {
            this._addRemoveEdit(range.token(prefExpression.operator));
        }
        else {
            this._addRemoveEdit(range.startEnd(prefExpression, parExpression.leftParenthesis));
            this._addRemoveEdit(range.startEnd(parExpression.rightParenthesis, prefExpression));
        }
        this._addInsertEdit(isExpression.isOperator.end, '!');
        this._addAssist(DartAssistKind.CONVERT_INTO_IS_NOT, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertToIsNot_onNot = function () {
        if (_common_1.is(this.node, any) && _common_1.is(this.node.parent, any)) {
            this.node = this.node.parent;
        }
        if (_common_1.isNot(this.node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var prefExpression = this.node;
        if (prefExpression.operator.type != TokenType.BANG) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var operand = prefExpression.operand;
        if (_common_1.isNot(operand, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var parExpression = operand;
        operand = parExpression.expression;
        if (_common_1.isNot(operand, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var isExpression = operand;
        if (isExpression.notOperator != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (utils_1.op(utils_1.Op.GEQ, getExpressionParentPrecedence(prefExpression), TokenClass.RELATIONAL_OPERATOR.precedence)) {
            this._addRemoveEdit(range.token(prefExpression.operator));
        }
        else {
            this._addRemoveEdit(range.startEnd(prefExpression, parExpression.leftParenthesis));
            this._addRemoveEdit(range.startEnd(parExpression.rightParenthesis, prefExpression));
        }
        this._addInsertEdit(isExpression.isOperator.end, '!');
        this._addAssist(DartAssistKind.CONVERT_INTO_IS_NOT, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertToIsNotEmpty = function () {
        var isEmptyAccess = null;
        var isEmptyIdentifier = null;
        if (_common_1.is(this.node, any)) {
            var identifier = this.node;
            var parent_1 = identifier.parent;
            if (_common_1.is(parent_1, any)) {
                isEmptyIdentifier = parent_1.propertyName;
                isEmptyAccess = parent_1;
            }
            if (_common_1.is(parent_1, any)) {
                isEmptyIdentifier = parent_1.identifier;
                isEmptyAccess = parent_1;
            }
        }
        if (utils_1.op(utils_1.Op.EQUALS, isEmptyIdentifier, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var propertyElement = isEmptyIdentifier.bestElement;
        if (utils_1.op(utils_1.Op.EQUALS, propertyElement, null) || 'isEmpty' != propertyElement.name) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var propertyTarget = propertyElement.enclosingElement;
        if (utils_1.op(utils_1.Op.EQUALS, propertyTarget, null) || getChildren(propertyTarget, 'isNotEmpty').isEmpty) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (_common_1.isNot(isEmptyAccess.parent, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var prefixExpression = isEmptyAccess.parent;
        if (prefixExpression.operator.type != TokenType.BANG) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._addRemoveEdit(range.startStart(prefixExpression, prefixExpression.operand));
        this._addReplaceEdit(range.node(isEmptyIdentifier), 'isNotEmpty');
        this._addAssist(DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_convertToNormalParameter = function () {
        if (_common_1.is(this.node, any) && _common_1.is(this.node.parent, any) && _common_1.is(this.node.parent.parent, any) && _common_1.is(this.node.parent.parent.parent, any)) {
            var constructor = this.node.parent.parent.parent;
            var parameterList = this.node.parent.parent;
            var parameter = this.node.parent;
            var parameterElement = parameter.element;
            var name_3 = this.node.name;
            var type = parameterElement.type;
            var librariesToImport = new core.DartSet();
            var typeCode = this.utils.getTypeSource(type, librariesToImport);
            if (type.isDynamic) {
                this._addReplaceEdit(range.node(parameter), name_3);
            }
            else {
                this._addReplaceEdit(range.node(parameter), typeCode + " " + name_3);
            }
            var initializers = constructor.initializers;
            if (initializers.isEmpty) {
                this._addInsertEdit(parameterList.end, " : " + name_3 + " = " + name_3);
            }
            else {
                this._addInsertEdit(initializers.last.end, ", " + name_3 + " = " + name_3);
            }
            this._addAssist(DartAssistKind.CONVERT_TO_NORMAL_PARAMETER, new core.DartList.literal());
        }
    };
    AssistProcessor.prototype._addProposal_encapsulateField = function () {
        var fieldDeclaration = this.node.getAncestor(function (x) {
            return _common_1.is(x, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, fieldDeclaration, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (fieldDeclaration.isStatic) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var variableList = fieldDeclaration.fields;
        if (utils_1.op(utils_1.Op.EQUALS, variableList.keyword, null) && utils_1.op(utils_1.Op.EQUALS, variableList.type, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (variableList.isFinal) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var fields = variableList.variables;
        if (fields.length != 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var field = fields.first;
        var nameNode = field.name;
        var fieldElement = nameNode.staticElement;
        var name = nameNode.name;
        if (Identifier.isPrivateName(name)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (nameNode != this.node) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._addReplaceEdit(range.node(nameNode), "_" + name);
        var classDeclaration = fieldDeclaration.parent;
        for (var _i = 0, _a = classDeclaration.members; _i < _a.length; _i++) {
            var member = _a[_i];
            if (_common_1.is(member, any)) {
                for (var _b = 0, _c = member.parameters.parameters; _b < _c.length; _b++) {
                    var parameter = _c[_b];
                    var parameterElement = parameter.element;
                    if (_common_1.is(parameterElement, any) && utils_1.op(utils_1.Op.EQUALS, parameterElement.field, fieldElement)) {
                        this._addReplaceEdit(range.node(parameter.identifier), "_" + name);
                    }
                }
            }
        }
        var eol2 = this.eol + this.eol;
        var typeNameCode = variableList.type != null ? this._getNodeText(variableList.type) + ' ' : '';
        var getterCode = eol2 + "  " + typeNameCode + "get " + name + " => _" + name + ";";
        var setterCode = "" + eol2 + ("  void set " + name + "(" + typeNameCode + name + ") {" + this.eol) + ("    _" + name + " = " + name + ";" + this.eol) + '  }';
        this._addInsertEdit(fieldDeclaration.end, getterCode + setterCode);
        this._addAssist(DartAssistKind.ENCAPSULATE_FIELD, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_exchangeOperands = function () {
        if (_common_1.isNot(this.node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var binaryExpression = this.node;
        if (!AssistProcessor_1._isOperatorSelected(binaryExpression, this.selectionOffset, this.selectionLength)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        {
            var leftOperand = binaryExpression.leftOperand;
            var rightOperand = binaryExpression.rightOperand;
            while (_common_1.is(binaryExpression.parent, any)) {
                var newBinaryExpression = binaryExpression.parent;
                if (newBinaryExpression.operator.type != binaryExpression.operator.type) {
                    AssistProcessor_1._coverageMarker();
                    break;
                }
                binaryExpression = newBinaryExpression;
            }
            var leftRange = range.startEnd(binaryExpression, leftOperand);
            var rightRange = range.startEnd(rightOperand, binaryExpression);
            this._addReplaceEdit(leftRange, this._getRangeText(rightRange));
            this._addReplaceEdit(rightRange, this._getRangeText(leftRange));
            {
                var operator = binaryExpression.operator;
                var newOperator = null;
                var operatorType = operator.type;
                if (utils_1.op(utils_1.Op.EQUALS, operatorType, TokenType.LT)) {
                    newOperator = '>';
                }
                else if (utils_1.op(utils_1.Op.EQUALS, operatorType, TokenType.LT_EQ)) {
                    newOperator = '>=';
                }
                else if (utils_1.op(utils_1.Op.EQUALS, operatorType, TokenType.GT)) {
                    newOperator = '<';
                }
                else if (utils_1.op(utils_1.Op.EQUALS, operatorType, TokenType.GT_EQ)) {
                    newOperator = '<=';
                }
                if (newOperator != null) {
                    this._addReplaceEdit(range.token(operator), newOperator);
                }
            }
        }
        this._addAssist(DartAssistKind.EXCHANGE_OPERANDS, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_importAddShow = function () {
        var importDirective = this.node.getAncestor(function (node) {
            return _common_1.is(node, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, importDirective, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (importDirective.combinators.isNotEmpty) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var importElement = importDirective.element;
        if (utils_1.op(utils_1.Op.EQUALS, importElement, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var namespace = getImportNamespace(importElement);
        var referencedNames = new collection.SplayTreeSet();
        var visitor = new _SimpleIdentifierRecursiveAstVisitor(function (node) {
            var element = node.staticElement;
            if (element != null && utils_1.op(utils_1.Op.EQUALS, namespace.get(node.name), element)) {
                referencedNames.add(element.displayName);
            }
        });
        this.unit.accept(visitor);
        if (referencedNames.isEmpty) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var showCombinator = " show " + referencedNames.join(', ');
        this._addInsertEdit(utils_1.op(utils_1.Op.MINUS, importDirective.end, 1), showCombinator);
        this._addAssist(DartAssistKind.IMPORT_ADD_SHOW, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_introduceLocalTestedType = function () {
        var node = this.node;
        if (_common_1.is(node, any)) {
            node = node.condition;
        }
        else if (_common_1.is(node, any)) {
            node = node.condition;
        }
        if (_common_1.isNot(node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var isExpression = node;
        var castType = isExpression.type.type;
        var castTypeCode = this._getNodeText(isExpression.type);
        var indent = this.utils.getIndent(1);
        var prefix;
        var targetBlock;
        {
            var statement = node.getAncestor(function (n) {
                return _common_1.is(n, any);
            });
            if (_common_1.is(statement, any) && _common_1.is(statement.thenStatement, any)) {
                targetBlock = statement.thenStatement;
            }
            else if (_common_1.is(statement, any) && _common_1.is(statement.body, any)) {
                targetBlock = statement.body;
            }
            else {
                AssistProcessor_1._coverageMarker();
                return;
            }
            prefix = this.utils.getNodePrefix(statement);
        }
        var offset;
        var statementPrefix;
        if (utils_1.op(utils_1.Op.EQUALS, isExpression.notOperator, null)) {
            offset = targetBlock.leftBracket.end;
            statementPrefix = indent;
        }
        else {
            offset = targetBlock.rightBracket.end;
            statementPrefix = '';
        }
        var builder = new bare.createInstance(any, null, this.file, offset);
        builder.append(this.eol + prefix + statementPrefix);
        builder.append(castTypeCode);
        var excluded = new core.DartSet();
        {
            var scopedNameFinder = new bare.createInstance(any, null, offset);
            isExpression.accept(scopedNameFinder);
            excluded.addAll(scopedNameFinder.locals.keys.toSet());
        }
        {
            var suggestions = getVariableNameSuggestionsForExpression(castType, null, excluded);
            builder.append(' ');
            builder.startPosition('NAME');
            for (var i = 0; i < suggestions.length; i++) {
                var name_4 = suggestions[i];
                if (i == 0) {
                    builder.append(name_4);
                }
                builder.addSuggestion(LinkedEditSuggestionKind.VARIABLE, name_4);
            }
            builder.endPosition();
        }
        builder.append(' = ');
        builder.append(this._getNodeText(isExpression.expression));
        builder.append(';');
        builder.setExitOffset();
        this._insertBuilder(builder);
        this._addAssist(DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_invertIf = function () {
        if (_common_1.isNot(this.node, any)) {
            return;
        }
        var ifStatement = this.node;
        var condition = ifStatement.condition;
        var thenStatement = ifStatement.thenStatement;
        var elseStatement = ifStatement.elseStatement;
        if (utils_1.op(utils_1.Op.EQUALS, thenStatement, null) || utils_1.op(utils_1.Op.EQUALS, elseStatement, null)) {
            return;
        }
        var invertedCondition = this.utils.invertCondition(condition);
        var thenSource = this._getNodeText(thenStatement);
        var elseSource = this._getNodeText(elseStatement);
        this._addReplaceEdit(range.node(condition), invertedCondition);
        this._addReplaceEdit(range.node(thenStatement), elseSource);
        this._addReplaceEdit(range.node(elseStatement), thenSource);
        this._addAssist(DartAssistKind.INVERT_IF_STATEMENT, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_joinIfStatementInner = function () {
        var node = this.node;
        while (_common_1.is(node, any)) {
            node = node.parent;
        }
        if (_common_1.isNot(node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var targetIfStatement = node;
        if (targetIfStatement.elseStatement != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var targetThenStatement = targetIfStatement.thenStatement;
        var innerStatement = getSingleStatement(targetThenStatement);
        if (_common_1.isNot(innerStatement, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var innerIfStatement = innerStatement;
        if (innerIfStatement.elseStatement != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var prefix = this.utils.getNodePrefix(targetIfStatement);
        var condition;
        {
            var targetCondition = targetIfStatement.condition;
            var innerCondition = innerIfStatement.condition;
            var targetConditionSource = this._getNodeText(targetCondition);
            var innerConditionSource = this._getNodeText(innerCondition);
            if (AssistProcessor_1._shouldWrapParenthesisBeforeAnd(targetCondition)) {
                targetConditionSource = "(" + targetConditionSource + ")";
            }
            if (AssistProcessor_1._shouldWrapParenthesisBeforeAnd(innerCondition)) {
                innerConditionSource = "(" + innerConditionSource + ")";
            }
            condition = targetConditionSource + " && " + innerConditionSource;
        }
        {
            var innerThenStatement = innerIfStatement.thenStatement;
            var innerThenStatements = getStatements(innerThenStatement);
            var lineRanges = this.utils.getLinesRangeStatements(innerThenStatements);
            var oldSource = this.utils.getRangeText(lineRanges);
            var newSource = this.utils.indentSourceLeftRight(oldSource, false);
            this._addReplaceEdit(range.node(targetIfStatement), "if (" + condition + ") {" + this.eol + newSource + prefix + "}");
        }
        this._addAssist(DartAssistKind.JOIN_IF_WITH_INNER, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_joinIfStatementOuter = function () {
        var node = this.node;
        while (_common_1.is(node, any)) {
            node = node.parent;
        }
        if (_common_1.isNot(node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var targetIfStatement = node;
        if (targetIfStatement.elseStatement != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var parent = targetIfStatement.parent;
        if (_common_1.is(parent, any)) {
            if (parent.statements.length != 1) {
                AssistProcessor_1._coverageMarker();
                return;
            }
            parent = parent.parent;
        }
        if (_common_1.isNot(parent, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var outerIfStatement = parent;
        if (outerIfStatement.elseStatement != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var prefix = this.utils.getNodePrefix(outerIfStatement);
        var condition;
        {
            var targetCondition = targetIfStatement.condition;
            var outerCondition = outerIfStatement.condition;
            var targetConditionSource = this._getNodeText(targetCondition);
            var outerConditionSource = this._getNodeText(outerCondition);
            if (AssistProcessor_1._shouldWrapParenthesisBeforeAnd(targetCondition)) {
                targetConditionSource = "(" + targetConditionSource + ")";
            }
            if (AssistProcessor_1._shouldWrapParenthesisBeforeAnd(outerCondition)) {
                outerConditionSource = "(" + outerConditionSource + ")";
            }
            condition = outerConditionSource + " && " + targetConditionSource;
        }
        {
            var targetThenStatement = targetIfStatement.thenStatement;
            var targetThenStatements = getStatements(targetThenStatement);
            var lineRanges = this.utils.getLinesRangeStatements(targetThenStatements);
            var oldSource = this.utils.getRangeText(lineRanges);
            var newSource = this.utils.indentSourceLeftRight(oldSource, false);
            this._addReplaceEdit(range.node(outerIfStatement), "if (" + condition + ") {" + this.eol + newSource + prefix + "}");
        }
        this._addAssist(DartAssistKind.JOIN_IF_WITH_OUTER, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_joinVariableDeclaration_onAssignment = function () {
        if (_common_1.is(this.node, any) && _common_1.is(this.node.parent, any) && utils_1.op(utils_1.Op.EQUALS, this.node.parent.leftHandSide, this.node) && _common_1.is(this.node.parent.parent, any)) {
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var assignExpression = this.node.parent;
        if (assignExpression.operator.type != TokenType.EQ) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var element = this.node.staticElement;
        if (utils_1.op(utils_1.Op.EQUALS, element, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var declOffset = element.nameOffset;
        var declNode = new bare.createInstance(any, null, declOffset).searchWithin(this.unit);
        if (declNode != null && _common_1.is(declNode.parent, any) && utils_1.op(utils_1.Op.EQUALS, declNode.parent.name, declNode) && _common_1.is(declNode.parent.parent, any) && _common_1.is(declNode.parent.parent.parent, any)) {
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var decl = declNode.parent;
        var declStatement = decl.parent.parent;
        if (decl.initializer != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (declStatement.variables.variables.length != 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var assignStatement = this.node.parent.parent;
        if (_common_1.is(assignStatement.parent, any) && utils_1.op(utils_1.Op.EQUALS, assignStatement.parent, declStatement.parent)) {
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var block = assignStatement.parent;
        var statements = block.statements;
        if (statements.indexOf(assignStatement) == statements.indexOf(declStatement) + 1) {
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._addReplaceEdit(range.endStart(declNode, assignExpression.operator), ' ');
        this._addAssist(DartAssistKind.JOIN_VARIABLE_DECLARATION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_joinVariableDeclaration_onDeclaration = function () {
        var declList = this.node.getAncestor(function (node) {
            return _common_1.is(node, any);
        });
        if (declList != null && utils_1.op(utils_1.Op.EQUALS, declList.variables.length, 1)) {
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var decl = utils_1.op(utils_1.Op.INDEX, declList.variables, 0);
        if (decl.initializer != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (_common_1.is(declList.parent, any) && _common_1.is(declList.parent.parent, any)) {
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var declStatement = declList.parent;
        var block = declStatement.parent;
        var statements = block.statements;
        var assignExpression;
        {
            var declIndex = statements.indexOf(declStatement);
            if (declIndex < statements.length - 1) {
            }
            else {
                AssistProcessor_1._coverageMarker();
                return;
            }
            var assignStatement = statements[declIndex + 1];
            if (_common_1.is(assignStatement, any)) {
            }
            else {
                AssistProcessor_1._coverageMarker();
                return;
            }
            var expressionStatement = assignStatement;
            if (_common_1.is(expressionStatement.expression, any)) {
            }
            else {
                AssistProcessor_1._coverageMarker();
                return;
            }
            assignExpression = expressionStatement.expression;
        }
        if (assignExpression.operator.type != TokenType.EQ) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._addReplaceEdit(range.endStart(decl.name, assignExpression.operator), ' ');
        this._addAssist(DartAssistKind.JOIN_VARIABLE_DECLARATION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_moveFlutterWidgetDown = function () {
        var exprGoingDown = identifyNewExpression(this.node);
        if (utils_1.op(utils_1.Op.EQUALS, exprGoingDown, null) || !isFlutterInstanceCreationExpression(exprGoingDown)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var exprGoingUp = findChildWidget(exprGoingDown);
        if (utils_1.op(utils_1.Op.EQUALS, exprGoingUp, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var stableChild = findChildArgument(exprGoingUp);
        if (utils_1.op(utils_1.Op.EQUALS, stableChild, null) || utils_1.op(utils_1.Op.EQUALS, stableChild.expression, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var exprGoingDownSrc = this.utils.getNodeText(exprGoingDown);
        var dnNewlineIdx = new core.DartString(exprGoingDownSrc).lastIndexOf(this.eol);
        if (dnNewlineIdx < 0 || dnNewlineIdx == new core.DartString(exprGoingDownSrc).length - 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var exprGoingUpSrc = this.utils.getNodeText(exprGoingUp);
        var upNewlineIdx = new core.DartString(exprGoingUpSrc).lastIndexOf(this.eol);
        if (upNewlineIdx < 0 || upNewlineIdx == new core.DartString(exprGoingUpSrc).length - 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._swapFlutterWidgets(exprGoingDown, exprGoingUp, stableChild, DartAssistKind.MOVE_FLUTTER_WIDGET_DOWN);
    };
    AssistProcessor.prototype._addProposal_moveFlutterWidgetUp = function () {
        var exprGoingUp = identifyNewExpression(this.node);
        if (utils_1.op(utils_1.Op.EQUALS, exprGoingUp, null) || !isFlutterInstanceCreationExpression(exprGoingUp)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var expr = (function (t) { return (!!t) ? t.parent : null; })((function (t) { return (!!t) ? t.parent : null; })(exprGoingUp.parent));
        if (utils_1.op(utils_1.Op.EQUALS, expr, null) || _common_1.isNot(expr, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var exprGoingDown = expr;
        var stableChild = findChildArgument(exprGoingUp);
        if (utils_1.op(utils_1.Op.EQUALS, stableChild, null) || utils_1.op(utils_1.Op.EQUALS, stableChild.expression, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var exprGoingUpSrc = this.utils.getNodeText(exprGoingUp);
        var upNewlineIdx = new core.DartString(exprGoingUpSrc).lastIndexOf(this.eol);
        if (upNewlineIdx < 0 || upNewlineIdx == new core.DartString(exprGoingUpSrc).length - 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var exprGoingDownSrc = this.utils.getNodeText(exprGoingDown);
        var dnNewlineIdx = new core.DartString(exprGoingDownSrc).lastIndexOf(this.eol);
        if (dnNewlineIdx < 0 || dnNewlineIdx == new core.DartString(exprGoingDownSrc).length - 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._swapFlutterWidgets(exprGoingDown, exprGoingUp, stableChild, DartAssistKind.MOVE_FLUTTER_WIDGET_UP);
    };
    AssistProcessor.prototype._addProposal_removeTypeAnnotation = function () {
        var declarationList = this.node.getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, declarationList, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var typeNode = declarationList.type;
        if (utils_1.op(utils_1.Op.EQUALS, typeNode, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (utils_1.op(utils_1.Op.EQUALS, declarationList.variables.length, 1) && utils_1.op(utils_1.Op.INDEX, declarationList.variables, 0).name.isSynthetic) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var firstVariable = utils_1.op(utils_1.Op.INDEX, declarationList.variables, 0);
        if (this.selectionOffset > firstVariable.name.end) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var keyword = declarationList.keyword;
        var typeRange = range.startStart(typeNode, firstVariable);
        if (keyword != null && keyword.lexeme != 'var') {
            this._addReplaceEdit(typeRange, '');
        }
        else {
            this._addReplaceEdit(typeRange, 'var ');
        }
        this._addAssist(DartAssistKind.REMOVE_TYPE_ANNOTATION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_reparentFlutterList = function () {
        if (_common_1.isNot(this.node, any)) {
            return;
        }
        if (this.node.elements.any(function (exp) {
            return !(_common_1.is(exp, any) && isFlutterInstanceCreationExpression(exp));
        })) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var literalSrc = this.utils.getNodeText(this.node);
        var sb = new bare.createInstance(any, null, this.file, this.node.offset);
        var newlineIdx = new core.DartString(literalSrc).lastIndexOf(this.eol);
        if (newlineIdx < 0 || newlineIdx == new core.DartString(literalSrc).length - 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var indentOld = this.utils.getLinePrefix(utils_1.op(utils_1.Op.PLUS, utils_1.op(utils_1.Op.PLUS, this.node.offset, 1), newlineIdx));
        var indentArg = "" + indentOld + this.utils.getIndent(1);
        var indentList = "" + indentOld + this.utils.getIndent(2);
        sb.append('[');
        sb.append(this.eol);
        sb.append(indentArg);
        sb.append('new ');
        sb.startPosition('WIDGET');
        sb.append('widget');
        sb.endPosition();
        sb.append('(');
        sb.append(this.eol);
        sb.append(indentList);
        sb.append('children: ');
        sb.append(new core.DartString(literalSrc).replaceAll(new core.DartRegExp("^" + indentOld, {
            multiLine: true
        }), "" + indentList));
        sb.append(',');
        sb.append(this.eol);
        sb.append(indentArg);
        sb.append('),');
        sb.append(this.eol);
        sb.append(indentOld);
        sb.append(']');
        this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
        this._insertBuilder(sb, new core.DartString(literalSrc).length);
        this._addAssist(DartAssistKind.REPARENT_FLUTTER_LIST, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_reparentFlutterWidget = function () {
        var newExpr = identifyNewExpression(this.node);
        if (utils_1.op(utils_1.Op.EQUALS, newExpr, null) || !isFlutterInstanceCreationExpression(newExpr)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var newExprSrc = this.utils.getNodeText(newExpr);
        var sb = new bare.createInstance(any, null, this.file, newExpr.offset);
        sb.append('new ');
        sb.startPosition('WIDGET');
        sb.append('widget');
        sb.endPosition();
        sb.append('(');
        if (new core.DartString(newExprSrc).contains(this.eol)) {
            var newlineIdx = new core.DartString(newExprSrc).lastIndexOf(this.eol);
            var eolLen = new core.DartString(this.eol).length;
            if (newlineIdx == new core.DartString(newExprSrc).length - eolLen) {
                newlineIdx -= eolLen;
            }
            var indentOld = this.utils.getLinePrefix(utils_1.op(utils_1.Op.PLUS, utils_1.op(utils_1.Op.PLUS, newExpr.offset, eolLen), newlineIdx));
            var indentNew = "" + indentOld + this.utils.getIndent(1);
            sb.append(this.eol);
            sb.append(indentNew);
            newExprSrc = new core.DartString(newExprSrc).replaceAll(new core.DartRegExp("^" + indentOld, {
                multiLine: true
            }), "" + indentNew);
            newExprSrc += "," + this.eol + indentOld;
        }
        sb.startPosition('CHILD');
        sb.append('child');
        sb.endPosition();
        sb.append(': ');
        sb.append(newExprSrc);
        sb.append(')');
        this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
        this._insertBuilder(sb, newExpr.length);
        this._addAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_replaceConditionalWithIfElse = function () {
        var conditional = null;
        var statement = this.node.getAncestor(function (node) {
            return _common_1.is(node, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, statement, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var inVariable = false;
        if (_common_1.is(statement, any)) {
            var variableStatement = statement;
            for (var _i = 0, _a = variableStatement.variables.variables; _i < _a.length; _i++) {
                var variable = _a[_i];
                if (_common_1.is(variable.initializer, any)) {
                    conditional = variable.initializer;
                    inVariable = true;
                    break;
                }
            }
        }
        var inAssignment = false;
        if (_common_1.is(statement, any)) {
            var exprStmt = statement;
            if (_common_1.is(exprStmt.expression, any)) {
                var assignment = exprStmt.expression;
                if (utils_1.op(utils_1.Op.EQUALS, assignment.operator.type, TokenType.EQ) && _common_1.is(assignment.rightHandSide, any)) {
                    conditional = assignment.rightHandSide;
                    inAssignment = true;
                }
            }
        }
        var inReturn = false;
        if (_common_1.is(statement, any)) {
            var returnStatement = statement;
            if (_common_1.is(returnStatement.expression, any)) {
                conditional = returnStatement.expression;
                inReturn = true;
            }
        }
        var indent = this.utils.getIndent(1);
        var prefix = this.utils.getNodePrefix(statement);
        if (inVariable) {
            var variable = conditional.parent;
            this._addRemoveEdit(range.endEnd(variable.name, conditional));
            var conditionSrc = this._getNodeText(conditional.condition);
            var thenSrc = this._getNodeText(conditional.thenExpression);
            var elseSrc = this._getNodeText(conditional.elseExpression);
            var name_5 = variable.name.name;
            var src = this.eol;
            src += prefix + ("if (" + conditionSrc + ") {") + this.eol;
            src += prefix + indent + (name_5 + " = " + thenSrc + ";") + this.eol;
            src += prefix + '} else {' + this.eol;
            src += prefix + indent + (name_5 + " = " + elseSrc + ";") + this.eol;
            src += prefix + '}';
            this._addReplaceEdit(range.endLength(statement, 0), src);
        }
        if (inAssignment) {
            var assignment = conditional.parent;
            var leftSide = assignment.leftHandSide;
            var conditionSrc = this._getNodeText(conditional.condition);
            var thenSrc = this._getNodeText(conditional.thenExpression);
            var elseSrc = this._getNodeText(conditional.elseExpression);
            var name_6 = this._getNodeText(leftSide);
            var src = '';
            src += "if (" + conditionSrc + ") {" + this.eol;
            src += prefix + indent + (name_6 + " = " + thenSrc + ";") + this.eol;
            src += prefix + '} else {' + this.eol;
            src += prefix + indent + (name_6 + " = " + elseSrc + ";") + this.eol;
            src += prefix + '}';
            this._addReplaceEdit(range.node(statement), src);
        }
        if (inReturn) {
            var conditionSrc = this._getNodeText(conditional.condition);
            var thenSrc = this._getNodeText(conditional.thenExpression);
            var elseSrc = this._getNodeText(conditional.elseExpression);
            var src = '';
            src += "if (" + conditionSrc + ") {" + this.eol;
            src += prefix + indent + ("return " + thenSrc + ";") + this.eol;
            src += prefix + '} else {' + this.eol;
            src += prefix + indent + ("return " + elseSrc + ";") + this.eol;
            src += prefix + '}';
            this._addReplaceEdit(range.node(statement), src);
        }
        this._addAssist(DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_replaceIfElseWithConditional = function () {
        if (_common_1.isNot(this.node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var ifStatement = this.node;
        var thenStatement = getSingleStatement(ifStatement.thenStatement);
        var elseStatement = getSingleStatement(ifStatement.elseStatement);
        if (utils_1.op(utils_1.Op.EQUALS, thenStatement, null) || utils_1.op(utils_1.Op.EQUALS, elseStatement, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (_common_1.is(thenStatement, any) && _common_1.is(elseStatement, any)) {
            var conditionSrc = this._getNodeText(ifStatement.condition);
            var theSrc = this._getNodeText(thenStatement.expression);
            var elseSrc = this._getNodeText(elseStatement.expression);
            this._addReplaceEdit(range.node(ifStatement), "return " + conditionSrc + " ? " + theSrc + " : " + elseSrc + ";");
        }
        if (_common_1.is(thenStatement, any) && _common_1.is(elseStatement, any)) {
            var thenExpression = thenStatement.expression;
            var elseExpression = elseStatement.expression;
            if (_common_1.is(thenExpression, any) && _common_1.is(elseExpression, any)) {
                var thenAssignment = thenExpression;
                var elseAssignment = elseExpression;
                var thenTarget = this._getNodeText(thenAssignment.leftHandSide);
                var elseTarget = this._getNodeText(elseAssignment.leftHandSide);
                if (utils_1.op(utils_1.Op.EQUALS, thenAssignment.operator.type, TokenType.EQ) && utils_1.op(utils_1.Op.EQUALS, elseAssignment.operator.type, TokenType.EQ) && thenTarget == elseTarget) {
                    var conditionSrc = this._getNodeText(ifStatement.condition);
                    var theSrc = this._getNodeText(thenAssignment.rightHandSide);
                    var elseSrc = this._getNodeText(elseAssignment.rightHandSide);
                    this._addReplaceEdit(range.node(ifStatement), thenTarget + " = " + conditionSrc + " ? " + theSrc + " : " + elseSrc + ";");
                }
            }
        }
        this._addAssist(DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_splitAndCondition = function () {
        if (_common_1.isNot(this.node, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var binaryExpression = this.node;
        if (!AssistProcessor_1._isOperatorSelected(binaryExpression, this.selectionOffset, this.selectionLength)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        if (binaryExpression.operator.type != TokenType.AMPERSAND_AMPERSAND) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var statement = this.node.getAncestor(function (node) {
            return _common_1.is(node, any);
        });
        if (_common_1.isNot(statement, any)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var ifStatement = statement;
        if (ifStatement.elseStatement != null) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var condition = binaryExpression;
        while (_common_1.is(condition.parent, any) && utils_1.op(utils_1.Op.EQUALS, condition.parent.operator.type, TokenType.AMPERSAND_AMPERSAND)) {
            condition = condition.parent;
        }
        if (ifStatement.condition != condition) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var prefix = this.utils.getNodePrefix(ifStatement);
        var indent = this.utils.getIndent(1);
        var rightConditionSource;
        {
            var rightConditionRange = range.startEnd(binaryExpression.rightOperand, condition);
            rightConditionSource = this._getRangeText(rightConditionRange);
        }
        this._addRemoveEdit(range.endEnd(binaryExpression.leftOperand, condition));
        var thenStatement = ifStatement.thenStatement;
        if (_common_1.is(thenStatement, any)) {
            var thenBlock = thenStatement;
            var thenBlockRange = range.node(thenBlock);
            {
                var source = "" + this.eol + prefix + indent + "if (" + rightConditionSource + ") {";
                var thenBlockInsideOffset = utils_1.op(utils_1.Op.PLUS, thenBlockRange.offset, 1);
                this._addInsertEdit(thenBlockInsideOffset, source);
            }
            {
                var thenBlockEnd = thenBlockRange.end;
                var source = indent + "}";
                source += "" + this.eol + prefix;
                this._addInsertEdit(thenBlockEnd - 1, source);
            }
        }
        else {
            var source = "" + this.eol + prefix + indent + "if (" + rightConditionSource + ")";
            this._addInsertEdit(utils_1.op(utils_1.Op.PLUS, ifStatement.rightParenthesis.offset, 1), source);
        }
        {
            var thenStatements = getStatements(thenStatement);
            var linesRange = this.utils.getLinesRangeStatements(thenStatements);
            var thenIndentOld = "" + prefix + indent;
            var thenIndentNew = "" + thenIndentOld + indent;
            this._addIndentEdit(linesRange, thenIndentOld, thenIndentNew);
        }
        this._addAssist(DartAssistKind.SPLIT_AND_CONDITION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_splitVariableDeclaration = function () {
        var statement = this.node.getAncestor(function (node) {
            return _common_1.is(node, any);
        });
        if (statement != null && _common_1.is(statement.parent, any)) {
        }
        else {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var variables = statement.variables.variables;
        if (variables.length != 1) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        var variable = variables[0];
        var initializer = variable.initializer;
        if (utils_1.op(utils_1.Op.EQUALS, initializer, null)) {
            AssistProcessor_1._coverageMarker();
            return;
        }
        this._addRemoveEdit(range.endStart(variable.name, statement.semicolon));
        var indent = this.utils.getNodePrefix(statement);
        var name = variable.name.name;
        var initSrc = this._getNodeText(initializer);
        var assignRange = range.endLength(statement, 0);
        this._addReplaceEdit(assignRange, this.eol + indent + name + ' = ' + initSrc + ';');
        this._addAssist(DartAssistKind.SPLIT_VARIABLE_DECLARATION, new core.DartList.literal());
    };
    AssistProcessor.prototype._addProposal_surroundWith = function () {
        var selectedStatements;
        {
            var selection = new bare.createInstance(any, null, this.selectionOffset, this.selectionLength);
            var selectionAnalyzer = new bare.createInstance(any, null, this.unit, selection);
            this.unit.accept(selectionAnalyzer);
            var selectedNodes = selectionAnalyzer.selectedNodes;
            selectedStatements = new core.DartList.literal();
            for (var _i = 0, selectedNodes_1 = selectedNodes; _i < selectedNodes_1.length; _i++) {
                var selectedNode = selectedNodes_1[_i];
                if (_common_1.is(selectedNode, any)) {
                    selectedStatements.add(selectedNode);
                }
            }
            if (selectedStatements.isEmpty || selectedStatements.length != selectedNodes.length) {
                return;
            }
        }
        var firstStatement = selectedStatements[0];
        var lastStatement = selectedStatements[selectedStatements.length - 1];
        var statementsRange = this.utils.getLinesRangeStatements(selectedStatements);
        var indentOld = this.utils.getNodePrefix(firstStatement);
        var indentNew = "" + indentOld + this.utils.getIndent(1);
        var indentedCode = this.utils.replaceSourceRangeIndent(statementsRange, indentOld, indentNew);
        {
            this._addInsertEdit(statementsRange.offset, indentOld + "{" + this.eol);
            this._addIndentEdit(statementsRange, indentOld, indentNew);
            this._addInsertEdit(statementsRange.end, indentOld + "}" + this.eol);
            this.exitPosition = this._newPosition(lastStatement.end);
            this._addAssist(DartAssistKind.SURROUND_WITH_BLOCK, new core.DartList.literal());
        }
        {
            var offset = statementsRange.offset;
            var sb = new bare.createInstance(any, null, this.file, offset);
            sb.append(indentOld);
            sb.append('if (');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb, statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_IF, new core.DartList.literal());
        }
        {
            var offset = statementsRange.offset;
            var sb = new bare.createInstance(any, null, this.file, offset);
            sb.append(indentOld);
            sb.append('while (');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb, statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_WHILE, new core.DartList.literal());
        }
        {
            var offset = statementsRange.offset;
            var sb = new bare.createInstance(any, null, this.file, offset);
            sb.append(indentOld);
            sb.append('for (var ');
            {
                sb.startPosition('NAME');
                sb.append('item');
                sb.endPosition();
            }
            sb.append(' in ');
            {
                sb.startPosition('ITERABLE');
                sb.append('iterable');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb, statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_FOR_IN, new core.DartList.literal());
        }
        {
            var offset = statementsRange.offset;
            var sb = new bare.createInstance(any, null, this.file, offset);
            sb.append(indentOld);
            sb.append('for (var ');
            {
                sb.startPosition('VAR');
                sb.append('v');
                sb.endPosition();
            }
            sb.append(' = ');
            {
                sb.startPosition('INIT');
                sb.append('init');
                sb.endPosition();
            }
            sb.append('; ');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append('; ');
            {
                sb.startPosition('INCREMENT');
                sb.append('increment');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb, statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_FOR, new core.DartList.literal());
        }
        {
            var offset = statementsRange.offset;
            var sb = new bare.createInstance(any, null, this.file, offset);
            sb.append(indentOld);
            sb.append('do {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('} while (');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append(');');
            this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb, statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_DO_WHILE, new core.DartList.literal());
        }
        {
            var offset = statementsRange.offset;
            var sb = new bare.createInstance(any, null, this.file, offset);
            sb.append(indentOld);
            sb.append('try {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('} on ');
            {
                sb.startPosition('EXCEPTION_TYPE');
                sb.append('Exception');
                sb.endPosition();
            }
            sb.append(' catch (');
            {
                sb.startPosition('EXCEPTION_VAR');
                sb.append('e');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentNew);
            {
                sb.startPosition('CATCH');
                sb.append('// TODO');
                sb.endPosition();
                sb.setExitOffset();
            }
            sb.append(this.eol);
            sb.append(indentOld);
            sb.append('}');
            sb.append(this.eol);
            this._insertBuilder(sb, statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_TRY_CATCH, new core.DartList.literal());
        }
        {
            var offset = statementsRange.offset;
            var sb = new bare.createInstance(any, null, this.file, offset);
            sb.append(indentOld);
            sb.append('try {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('} finally {');
            sb.append(this.eol);
            sb.append(indentNew);
            {
                sb.startPosition('FINALLY');
                sb.append('// TODO');
                sb.endPosition();
                sb.setExitOffset();
            }
            sb.setExitOffset();
            sb.append(this.eol);
            sb.append(indentOld);
            sb.append('}');
            sb.append(this.eol);
            this._insertBuilder(sb, statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_TRY_FINALLY, new core.DartList.literal());
        }
    };
    AssistProcessor.prototype._addRemoveEdit = function (range) {
        this._addReplaceEdit(range, '');
    };
    AssistProcessor.prototype._addReplaceEdit = function (range, text) {
        var edit = new bare.createInstance(any, null, range.offset, range.length, text);
        doSourceChange_addElementEdit(this.change, this.unitElement, edit);
    };
    AssistProcessor.prototype._configureTargetLocation = function (target) {
        this.utils.targetClassElement = null;
        if (_common_1.is(target, any)) {
            var targetClassDeclaration = target.getAncestor(function (node) {
                return _common_1.is(node, any);
            });
            if (targetClassDeclaration != null) {
                this.utils.targetClassElement = targetClassDeclaration.element;
            }
        }
    };
    AssistProcessor.prototype._getLinkedPosition = function (groupId) {
        var group = this.linkedPositionGroups.get(groupId);
        if (utils_1.op(utils_1.Op.EQUALS, group, null)) {
            group = new bare.createInstance(any, null);
            this.linkedPositionGroups.set(groupId, group);
        }
        return group;
    };
    AssistProcessor.prototype._getNodeText = function (node) {
        return this.utils.getNodeText(node);
    };
    AssistProcessor.prototype._getRangeText = function (range) {
        return this.utils.getRangeText(range);
    };
    AssistProcessor.prototype._insertBuilder = function (builder, length) {
        var _this = this;
        length = length || 0;
        {
            var range = new bare.createInstance(any, null, builder.offset, length);
            var text = builder.toString();
            this._addReplaceEdit(range, text);
        }
        builder.linkedPositionGroups.forEach(function (id, group) {
            var fixGroup = _this._getLinkedPosition(id);
            group.positions.forEach(function (position) {
                fixGroup.addPosition(position, group.length);
            });
            group.suggestions.forEach(function (suggestion) {
                fixGroup.addSuggestion(suggestion);
            });
        });
        {
            var exitOffset = builder.exitOffset;
            if (exitOffset != null) {
                this.exitPosition = this._newPosition(exitOffset);
            }
        }
    };
    AssistProcessor.prototype._modificationStamp = function (filePath) {
        return this.driver.fsState.getFileForPath(filePath).exists ? 0 : -1;
    };
    AssistProcessor.prototype._newPosition = function (offset) {
        return new bare.createInstance(any, null, this.file, offset);
    };
    AssistProcessor.prototype._swapFlutterWidgets = function (exprGoingDown, exprGoingUp, stableChild, assistKind) {
        var _this = this;
        var currentSource = this.unitElement.context.getContents(this.source).data;
        var lineInfo = new bare.createInstance(any, null, currentSource);
        var currLn = lineInfo.getLocation(exprGoingUp.offset).lineNumber;
        var lnOffset = lineInfo.getOffsetOfLine(currLn);
        var sb = new bare.createInstance(any, null, this.file, exprGoingDown.offset);
        var argSrc = this.utils.getText(exprGoingUp.offset, lnOffset - exprGoingUp.offset);
        sb.append(argSrc);
        var getSrc = function (expr) {
            var startLn = lineInfo.getLocation(expr.offset).lineNumber;
            var startOffset = lineInfo.getOffsetOfLine(startLn - 1);
            var endLn = utils_1.op(utils_1.Op.PLUS, lineInfo.getLocation(utils_1.op(utils_1.Op.PLUS, expr.offset, expr.length)).lineNumber, 1);
            var curOffset = lineInfo.getOffsetOfLine(endLn - 1);
            return _this.utils.getText(startOffset, curOffset - startOffset);
        };
        var outerIndent = this.utils.getNodePrefix(exprGoingDown.parent);
        var innerIndent = this.utils.getNodePrefix(exprGoingUp.parent);
        exprGoingUp.argumentList.arguments.forEach(function (arg) {
            if (_common_1.is(arg, any) && utils_1.op(utils_1.Op.EQUALS, arg.name.label.name, 'child')) {
                if (stableChild != arg) {
                    AssistProcessor_1._coverageMarker();
                    return;
                }
                currLn = lineInfo.getLocation(stableChild.offset).lineNumber;
                lnOffset = lineInfo.getOffsetOfLine(currLn - 1);
                argSrc = _this.utils.getText(lnOffset, utils_1.op(utils_1.Op.MINUS, stableChild.expression.offset, lnOffset));
                argSrc = new core.DartString(argSrc).replaceAll(new core.DartRegExp("^" + innerIndent, {
                    multiLine: true
                }), "" + outerIndent);
                sb.append(argSrc);
                var nextLn = lineInfo.getLocation(exprGoingDown.offset).lineNumber;
                lnOffset = lineInfo.getOffsetOfLine(nextLn);
                argSrc = _this.utils.getText(exprGoingDown.offset, lnOffset - exprGoingDown.offset);
                sb.append(argSrc);
                exprGoingDown.argumentList.arguments.forEach(function (val) {
                    if (_common_1.is(val, any) && utils_1.op(utils_1.Op.EQUALS, val.name.label.name, 'child')) {
                        sb.append(_this.utils.getNodePrefix(arg.name));
                        argSrc = _this.utils.getNodeText(stableChild);
                        sb.append(argSrc);
                        if (utils_1.op(utils_1.Op.EQUALS, assistKind, DartAssistKind.MOVE_FLUTTER_WIDGET_UP)) {
                            sb.append("," + _this.eol);
                        }
                    }
                    else {
                        argSrc = getSrc(val);
                        argSrc = new core.DartString(argSrc).replaceAll(new core.DartRegExp("^" + outerIndent, {
                            multiLine: true
                        }), "" + innerIndent);
                        sb.append(argSrc);
                    }
                });
                if (utils_1.op(utils_1.Op.EQUALS, assistKind, DartAssistKind.MOVE_FLUTTER_WIDGET_DOWN)) {
                    sb.append("," + _this.eol);
                }
                sb.append(innerIndent);
                sb.append(")," + _this.eol);
            }
            else {
                argSrc = getSrc(arg);
                argSrc = new core.DartString(argSrc).replaceAll(new core.DartRegExp("^" + innerIndent, {
                    multiLine: true
                }), "" + outerIndent);
                sb.append(argSrc);
            }
        });
        sb.append(outerIndent);
        sb.append(')');
        this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, sb.offset, sb.length));
        this._insertBuilder(sb, exprGoingDown.length);
        this._addAssist(assistKind, new core.DartList.literal());
    };
    AssistProcessor._coverageMarker = function () {
    };
    AssistProcessor._isOperatorSelected = function (binaryExpression, offset, length) {
        var left = binaryExpression.leftOperand;
        var right = binaryExpression.rightOperand;
        if (offset >= left.endToken.end && offset + length <= right.offset) {
            AssistProcessor_1._coverageMarker();
            return true;
        }
        if (offset == left.offset && offset + length == right.endToken.end) {
            if (_common_1.is(left, any) || _common_1.is(right, any)) {
                AssistProcessor_1._coverageMarker();
                return false;
            }
            AssistProcessor_1._coverageMarker();
            return true;
        }
        AssistProcessor_1._coverageMarker();
        return false;
    };
    AssistProcessor._shouldWrapParenthesisBeforeAnd = function (expr) {
        if (_common_1.is(expr, any)) {
            var binary = expr;
            var precedence = binary.operator.type.precedence;
            return precedence < TokenClass.LOGICAL_AND_OPERATOR.precedence;
        }
        return false;
    };
    var AssistProcessor_1;
    __decorate([
        utils_1.defaultConstructor
    ], AssistProcessor.prototype, "AssistProcessor", null);
    AssistProcessor = AssistProcessor_1 = __decorate([
        utils_1.DartClass
    ], AssistProcessor);
    return AssistProcessor;
}());
exports.AssistProcessor = AssistProcessor;
var DefaultAssistContributor = /** @class */ (function (_super) {
    __extends(DefaultAssistContributor, _super);
    function DefaultAssistContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    DefaultAssistContributor.prototype.internalComputeAssists = function (context) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var processor;
            return __generator(this, function (_a) {
                try {
                    processor = new AssistProcessor(context);
                    return [2 /*return*/, processor.compute()];
                }
                catch (__error__) {
                    if (_common_1.is(__error__, any)) {
                        return [2 /*return*/, Assist.EMPTY_LIST];
                    }
                }
                return [2 /*return*/];
            });
        }); })());
    };
    DefaultAssistContributor.prototype.DefaultAssistContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DefaultAssistContributor.prototype, "internalComputeAssists", null);
    __decorate([
        utils_1.defaultConstructor
    ], DefaultAssistContributor.prototype, "DefaultAssistContributor", null);
    DefaultAssistContributor = __decorate([
        utils_1.DartClass
    ], DefaultAssistContributor);
    return DefaultAssistContributor;
}(any));
exports.DefaultAssistContributor = DefaultAssistContributor;
var _SimpleIdentifierRecursiveAstVisitor = /** @class */ (function (_super) {
    __extends(_SimpleIdentifierRecursiveAstVisitor, _super);
    function _SimpleIdentifierRecursiveAstVisitor(visitor) {
        var _this = this;
        return _this;
    }
    _SimpleIdentifierRecursiveAstVisitor.prototype._SimpleIdentifierRecursiveAstVisitor = function (visitor) {
        this.visitor = visitor;
    };
    _SimpleIdentifierRecursiveAstVisitor.prototype.visitSimpleIdentifier = function (node) {
        this.visitor(node);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _SimpleIdentifierRecursiveAstVisitor.prototype, "_SimpleIdentifierRecursiveAstVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _SimpleIdentifierRecursiveAstVisitor.prototype, "visitSimpleIdentifier", null);
    _SimpleIdentifierRecursiveAstVisitor = __decorate([
        utils_1.DartClass
    ], _SimpleIdentifierRecursiveAstVisitor);
    return _SimpleIdentifierRecursiveAstVisitor;
}(any));
exports._SimpleIdentifierRecursiveAstVisitor = _SimpleIdentifierRecursiveAstVisitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=assist_internal.js.map
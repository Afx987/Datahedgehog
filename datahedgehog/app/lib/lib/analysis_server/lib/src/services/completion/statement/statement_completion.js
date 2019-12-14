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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/statement/statement_completion.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var math = require("@dart2ts/dart/math");
var DartStatementCompletion = /** @class */ (function () {
    function DartStatementCompletion() {
    }
    Object.defineProperty(DartStatementCompletion, "NO_COMPLETION", {
        get: function () {
            if (this.__$NO_COMPLETION === undefined) {
                this.__$NO_COMPLETION = new StatementCompletionKind('No_COMPLETION', 'No completion available');
            }
            return this.__$NO_COMPLETION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "SIMPLE_ENTER", {
        get: function () {
            if (this.__$SIMPLE_ENTER === undefined) {
                this.__$SIMPLE_ENTER = new StatementCompletionKind('SIMPLE_ENTER', "Insert a newline at the end of the current line");
            }
            return this.__$SIMPLE_ENTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "SIMPLE_SEMICOLON", {
        get: function () {
            if (this.__$SIMPLE_SEMICOLON === undefined) {
                this.__$SIMPLE_SEMICOLON = new StatementCompletionKind('SIMPLE_SEMICOLON', "Add a semicolon and newline");
            }
            return this.__$SIMPLE_SEMICOLON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_CLASS_DECLARATION", {
        get: function () {
            if (this.__$COMPLETE_CLASS_DECLARATION === undefined) {
                this.__$COMPLETE_CLASS_DECLARATION = new StatementCompletionKind('COMPLETE_CLASS_DECLARATION', "Complete class declaration");
            }
            return this.__$COMPLETE_CLASS_DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_CONTROL_FLOW_BLOCK", {
        get: function () {
            if (this.__$COMPLETE_CONTROL_FLOW_BLOCK === undefined) {
                this.__$COMPLETE_CONTROL_FLOW_BLOCK = new StatementCompletionKind('COMPLETE_CONTROL_FLOW_BLOCK', "Complete control flow block");
            }
            return this.__$COMPLETE_CONTROL_FLOW_BLOCK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_DO_STMT", {
        get: function () {
            if (this.__$COMPLETE_DO_STMT === undefined) {
                this.__$COMPLETE_DO_STMT = new StatementCompletionKind('COMPLETE_DO_STMT', "Complete do-statement");
            }
            return this.__$COMPLETE_DO_STMT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_IF_STMT", {
        get: function () {
            if (this.__$COMPLETE_IF_STMT === undefined) {
                this.__$COMPLETE_IF_STMT = new StatementCompletionKind('COMPLETE_IF_STMT', "Complete if-statement");
            }
            return this.__$COMPLETE_IF_STMT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_FOR_STMT", {
        get: function () {
            if (this.__$COMPLETE_FOR_STMT === undefined) {
                this.__$COMPLETE_FOR_STMT = new StatementCompletionKind('COMPLETE_FOR_STMT', "Complete for-statement");
            }
            return this.__$COMPLETE_FOR_STMT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_FOR_EACH_STMT", {
        get: function () {
            if (this.__$COMPLETE_FOR_EACH_STMT === undefined) {
                this.__$COMPLETE_FOR_EACH_STMT = new StatementCompletionKind('COMPLETE_FOR_EACH_STMT', "Complete for-each-statement");
            }
            return this.__$COMPLETE_FOR_EACH_STMT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_FUNCTION_DECLARATION", {
        get: function () {
            if (this.__$COMPLETE_FUNCTION_DECLARATION === undefined) {
                this.__$COMPLETE_FUNCTION_DECLARATION = new StatementCompletionKind('COMPLETE_FUNCTION_DECLARATION', "Complete function declaration");
            }
            return this.__$COMPLETE_FUNCTION_DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_SWITCH_STMT", {
        get: function () {
            if (this.__$COMPLETE_SWITCH_STMT === undefined) {
                this.__$COMPLETE_SWITCH_STMT = new StatementCompletionKind('COMPLETE_SWITCH_STMT', "Complete switch-statement");
            }
            return this.__$COMPLETE_SWITCH_STMT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_TRY_STMT", {
        get: function () {
            if (this.__$COMPLETE_TRY_STMT === undefined) {
                this.__$COMPLETE_TRY_STMT = new StatementCompletionKind('COMPLETE_TRY_STMT', "Complete try-statement");
            }
            return this.__$COMPLETE_TRY_STMT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_VARIABLE_DECLARATION", {
        get: function () {
            if (this.__$COMPLETE_VARIABLE_DECLARATION === undefined) {
                this.__$COMPLETE_VARIABLE_DECLARATION = new StatementCompletionKind('COMPLETE_VARIABLE_DECLARATION', "Complete variable declaration");
            }
            return this.__$COMPLETE_VARIABLE_DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartStatementCompletion, "COMPLETE_WHILE_STMT", {
        get: function () {
            if (this.__$COMPLETE_WHILE_STMT === undefined) {
                this.__$COMPLETE_WHILE_STMT = new StatementCompletionKind('COMPLETE_WHILE_STMT', "Complete while-statement");
            }
            return this.__$COMPLETE_WHILE_STMT;
        },
        enumerable: true,
        configurable: true
    });
    DartStatementCompletion.prototype.DartStatementCompletion = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], DartStatementCompletion.prototype, "DartStatementCompletion", null);
    DartStatementCompletion = __decorate([
        utils_1.DartClass
    ], DartStatementCompletion);
    return DartStatementCompletion;
}());
exports.DartStatementCompletion = DartStatementCompletion;
var StatementCompletion = /** @class */ (function () {
    function StatementCompletion(kind, change) {
    }
    StatementCompletion.prototype.StatementCompletion = function (kind, change) {
        this.kind = kind;
        this.change = change;
    };
    __decorate([
        utils_1.defaultConstructor
    ], StatementCompletion.prototype, "StatementCompletion", null);
    StatementCompletion = __decorate([
        utils_1.DartClass
    ], StatementCompletion);
    return StatementCompletion;
}());
exports.StatementCompletion = StatementCompletion;
var StatementCompletionContext = /** @class */ (function () {
    function StatementCompletionContext(file, lineInfo, selectionOffset, unit, unitElement, errors) {
    }
    StatementCompletionContext.prototype.StatementCompletionContext = function (file, lineInfo, selectionOffset, unit, unitElement, errors) {
        this.file = file;
        this.lineInfo = lineInfo;
        this.selectionOffset = selectionOffset;
        this.unit = unit;
        this.unitElement = unitElement;
        this.errors = errors;
        if (utils_1.op(utils_1.Op.EQUALS, this.unitElement.context, null)) {
            throw new core.DartError();
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], StatementCompletionContext.prototype, "StatementCompletionContext", null);
    StatementCompletionContext = __decorate([
        utils_1.DartClass
    ], StatementCompletionContext);
    return StatementCompletionContext;
}());
exports.StatementCompletionContext = StatementCompletionContext;
var StatementCompletionKind = /** @class */ (function () {
    function StatementCompletionKind(name, message) {
    }
    StatementCompletionKind.prototype.StatementCompletionKind = function (name, message) {
        this.name = name;
        this.message = message;
    };
    StatementCompletionKind.prototype.toString = function () {
        return this.name;
    };
    __decorate([
        utils_1.defaultConstructor
    ], StatementCompletionKind.prototype, "StatementCompletionKind", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], StatementCompletionKind.prototype, "toString", null);
    StatementCompletionKind = __decorate([
        utils_1.DartClass
    ], StatementCompletionKind);
    return StatementCompletionKind;
}());
exports.StatementCompletionKind = StatementCompletionKind;
var StatementCompletionProcessor = /** @class */ (function () {
    function StatementCompletionProcessor(statementContext) {
    }
    StatementCompletionProcessor_1 = StatementCompletionProcessor;
    Object.defineProperty(StatementCompletionProcessor, "NO_COMPLETION", {
        get: function () {
            if (this.__$NO_COMPLETION === undefined) {
                this.__$NO_COMPLETION = new StatementCompletion(DartStatementCompletion.NO_COMPLETION, new bare.createInstance(any, null, "", {
                    edits: new core.DartList.literal()
                }));
            }
            return this.__$NO_COMPLETION;
        },
        set: function (__$value) {
            this.__$NO_COMPLETION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    StatementCompletionProcessor.prototype.StatementCompletionProcessor = function (statementContext) {
        this.change = new bare.createInstance(any, null, 'statement-completion');
        this.errors = new core.DartList.literal();
        this.linkedPositionGroups = new core.DartMap.literal([]);
        this.exitPosition = null;
        this.analysisContext = statementContext.unitElement.context;
        this.utils = new bare.createInstance(any, null, statementContext.unit);
        this.statementContext = statementContext;
        this.fileStamp = this.analysisContext.getModificationStamp(this.source);
    };
    Object.defineProperty(StatementCompletionProcessor.prototype, "eol", {
        get: function () {
            return this.utils.endOfLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementCompletionProcessor.prototype, "file", {
        get: function () {
            return this.statementContext.file;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementCompletionProcessor.prototype, "lineInfo", {
        get: function () {
            return this.statementContext.lineInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementCompletionProcessor.prototype, "requestLine", {
        get: function () {
            return this.lineInfo.getLocation(this.selectionOffset).lineNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementCompletionProcessor.prototype, "selectionOffset", {
        get: function () {
            return this.statementContext.selectionOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementCompletionProcessor.prototype, "source", {
        get: function () {
            return this.statementContext.unitElement.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementCompletionProcessor.prototype, "unit", {
        get: function () {
            return this.statementContext.unit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementCompletionProcessor.prototype, "unitElement", {
        get: function () {
            return this.statementContext.unitElement;
        },
        enumerable: true,
        configurable: true
    });
    StatementCompletionProcessor.prototype.compute = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var blockNode, _i, _a, error;
            var _this = this;
            return __generator(this, function (_b) {
                if (this.analysisContext.getModificationStamp(this.source) != this.fileStamp) {
                    return [2 /*return*/, StatementCompletionProcessor_1.NO_COMPLETION];
                }
                this.node = this._selectedNode();
                if (utils_1.op(utils_1.Op.EQUALS, this.node, null)) {
                    return [2 /*return*/, StatementCompletionProcessor_1.NO_COMPLETION];
                }
                this.node = this.node.getAncestor(function (n) {
                    return _common_1.is(n, any) || _this._isNonStatementDeclaration(n);
                });
                if (utils_1.op(utils_1.Op.EQUALS, this.node, null)) {
                    return [2 /*return*/, this._complete_simpleEnter() ? this.completion : StatementCompletionProcessor_1.NO_COMPLETION];
                }
                if (_common_1.is(this.node, any)) {
                    blockNode = this.node;
                    if (blockNode.statements.isNotEmpty) {
                        this.node = blockNode.statements.last;
                    }
                }
                if (this._isEmptyStatement(this.node)) {
                    this.node = this.node.parent;
                }
                for (_i = 0, _a = this.statementContext.errors; _i < _a.length; _i++) {
                    error = _a[_i];
                    if (utils_1.op(utils_1.Op.GEQ, error.offset, this.node.offset) && utils_1.op(utils_1.Op.LEQ, error.offset, utils_1.op(utils_1.Op.PLUS, this.node.offset, this.node.length))) {
                        if (_common_1.isNot(error.errorCode, any)) {
                            this.errors.add(error);
                        }
                    }
                }
                this._checkExpressions();
                if (_common_1.is(this.node, any)) {
                    if (this.errors.isEmpty) {
                        if (this._complete_ifStatement() || this._complete_forStatement() || this._complete_forEachStatement() || this._complete_whileStatement() || this._complete_controlFlowBlock()) {
                            return [2 /*return*/, this.completion];
                        }
                    }
                    else {
                        if (this._complete_ifStatement() || this._complete_doStatement() || this._complete_forStatement() || this._complete_forEachStatement() || this._complete_functionDeclarationStatement() || this._complete_switchStatement() || this._complete_tryStatement() || this._complete_whileStatement() || this._complete_controlFlowBlock() || this._complete_simpleSemicolon() || this._complete_methodCall()) {
                            return [2 /*return*/, this.completion];
                        }
                    }
                }
                else if (_common_1.is(this.node, any)) {
                    if (this.errors.isNotEmpty) {
                        if (this._complete_classDeclaration() || this._complete_functionDeclaration() || this._complete_variableDeclaration()) {
                            return [2 /*return*/, this.completion];
                        }
                    }
                }
                if (this._complete_simpleEnter()) {
                    return [2 /*return*/, this.completion];
                }
                return [2 /*return*/, StatementCompletionProcessor_1.NO_COMPLETION];
            });
        }); })());
    };
    StatementCompletionProcessor.prototype._addInsertEdit = function (offset, text) {
        var edit = new bare.createInstance(any, null, offset, 0, text);
        doSourceChange_addElementEdit(this.change, this.unitElement, edit);
    };
    StatementCompletionProcessor.prototype._addReplaceEdit = function (range, text) {
        var edit = new bare.createInstance(any, null, range.offset, range.length, text);
        doSourceChange_addElementEdit(this.change, this.unitElement, edit);
    };
    StatementCompletionProcessor.prototype._appendEmptyBraces = function (sb, needsExitMark) {
        needsExitMark = needsExitMark || false;
        sb.append('{');
        sb.append(this.eol);
        var indent = this.utils.getLinePrefix(this.selectionOffset);
        sb.append(indent);
        sb.append(this.utils.getIndent(1));
        if (needsExitMark && utils_1.op(utils_1.Op.EQUALS, sb.exitOffset, null)) {
            sb.setExitOffset();
        }
        sb.append(this.eol);
        sb.append(indent);
        sb.append('}');
    };
    StatementCompletionProcessor.prototype._appendNewlinePlusIndent = function () {
        return this._appendNewlinePlusIndentAt(this.selectionOffset);
    };
    StatementCompletionProcessor.prototype._appendNewlinePlusIndentAt = function (offset) {
        var indent = this.utils.getLinePrefix(offset);
        var loc = this.utils.getLineNext(offset);
        this._addInsertEdit(loc, indent + this.eol);
        return loc + new core.DartString(indent).length;
    };
    StatementCompletionProcessor.prototype._baseNodeText = function (astNode) {
        var text = this.utils.getNodeText(astNode);
        if (new core.DartString(text).endsWith(this.eol)) {
            text = new core.DartString(text).substring(0, new core.DartString(text).length - new core.DartString(this.eol).length);
        }
        return text;
    };
    StatementCompletionProcessor.prototype._checkExpressions = function () {
        var _this = this;
        var errorMatching = function (errorCode, _namedArguments) {
            var partialMatch = Object.assign({
                "partialMatch": null
            }, _namedArguments).partialMatch;
            var error = _this._findError(errorCode, {
                partialMatch: partialMatch
            });
            if (utils_1.op(utils_1.Op.EQUALS, error, null)) {
                return null;
            }
            var expr = _this._selectedNode();
            return (utils_1.op(utils_1.Op.EQUALS, expr.getAncestor(function (n) {
                return _common_1.is(n, any);
            }), null)) ? expr : null;
        };
        var expr = errorMatching(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
        if (expr != null) {
            var source = this.utils.getNodeText(expr);
            var content = source;
            var char = new core.DartString(content).codeUnitAt(0);
            if (char == new core.DartString('r').codeUnitAt(0)) {
                content = new core.DartString(source).substring(1);
                char = new core.DartString(content).codeUnitAt(0);
            }
            var delimiter = void 0;
            var loc = void 0;
            if (new core.DartString(content).length >= 3 && char == new core.DartString(content).codeUnitAt(1) && char == new core.DartString(content).codeUnitAt(2)) {
                delimiter = new core.DartString(content).substring(0, 3);
                var newlineLoc = new core.DartString(source).indexOf(this.eol, this.selectionOffset - expr.offset);
                if (newlineLoc < 0) {
                    newlineLoc = new core.DartString(source).length;
                }
                loc = newlineLoc + expr.offset;
            }
            else {
                delimiter = new core.DartString(content).substring(0, 1);
                loc = utils_1.op(utils_1.Op.PLUS, expr.offset, new core.DartString(source).length);
            }
            this._removeError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
            this._addInsertEdit(loc, delimiter);
        }
        expr = errorMatching(ParserErrorCode.EXPECTED_TOKEN, {
            partialMatch: "']'"
        });
        if (expr != null) {
            expr = expr.getAncestor(function (n) {
                return _common_1.is(n, any);
            });
            if (expr != null) {
                var lit = expr;
                if (lit.rightBracket.isSynthetic) {
                    var src = this.utils.getNodeText(expr).trim();
                    var loc = utils_1.op(utils_1.Op.PLUS, expr.offset, new core.DartString(src).length);
                    if (new core.DartString(src).contains(this.eol)) {
                        var indent = this.utils.getNodePrefix(this.node);
                        this._addInsertEdit(loc, ',' + this.eol + indent + ']');
                    }
                    else {
                        this._addInsertEdit(loc, ']');
                    }
                    this._removeError(ParserErrorCode.EXPECTED_TOKEN, {
                        partialMatch: "']'"
                    });
                    var ms = this._findError(ParserErrorCode.EXPECTED_TOKEN, {
                        partialMatch: "';'"
                    });
                    if (ms != null) {
                        ms.offset = loc - 1;
                    }
                }
            }
        }
    };
    StatementCompletionProcessor.prototype._complete_classDeclaration = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var decl = this.node;
        if (decl.leftBracket.isSynthetic && this.errors.length == 1) {
            var sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.MINUS, decl.end, 1));
            sb.append(' ');
            this._appendEmptyBraces(sb, true);
            this._insertBuilder(sb);
            this._setCompletion(DartStatementCompletion.COMPLETE_CLASS_DECLARATION);
            return true;
        }
        return false;
    };
    StatementCompletionProcessor.prototype._complete_controlFlowBlock = function () {
        var expr = (_common_1.is(this.node, any)) ? this.node.expression : (_common_1.is(this.node, any) ? this.node.expression : null);
        if (!(_common_1.is(this.node, any) || _common_1.is(expr, any))) {
            return false;
        }
        if (_common_1.isNot(this.node.parent, any)) {
            return false;
        }
        var outer = this.node.parent.parent;
        if (!(_common_1.is(outer, any) || _common_1.is(outer, any) || _common_1.is(outer, any) || _common_1.is(outer, any) || _common_1.is(outer, any))) {
            return false;
        }
        var previousInsertions = this._lengthOfInsertions();
        var delta = 0;
        if (this.errors.isNotEmpty) {
            var error = this._findError(ParserErrorCode.EXPECTED_TOKEN, {
                partialMatch: "';'"
            });
            if (error != null) {
                var insertOffset = void 0;
                if (utils_1.op(utils_1.Op.EQUALS, expr, null) || expr.isSynthetic) {
                    if (_common_1.is(this.node, any)) {
                        insertOffset = this.node.returnKeyword.end;
                    }
                    else if (_common_1.is(this.node, any)) {
                        insertOffset = this.node.expression.throwKeyword.end;
                    }
                    else {
                        insertOffset = this.node.end;
                    }
                }
                else {
                    insertOffset = expr.end;
                }
                this._addInsertEdit(insertOffset, ';');
                delta = 1;
            }
        }
        var offset = this._appendNewlinePlusIndentAt(this.node.parent.end);
        this.exitPosition = new bare.createInstance(any, null, this.file, offset + delta + previousInsertions);
        this._setCompletion(DartStatementCompletion.COMPLETE_CONTROL_FLOW_BLOCK);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_doStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var statement = this.node;
        var sb = this._sourceBuilderAfterKeyword(statement.doKeyword);
        var hasWhileKeyword = utils_1.op(utils_1.Op.EQUALS, statement.whileKeyword.lexeme, "while");
        var exitDelta = 0;
        if (!this._statementHasValidBody(statement.doKeyword, statement.body)) {
            var text = this.utils.getNodeText(statement.body);
            var delta = 0;
            if (new core.DartString(text).startsWith(';')) {
                delta = 1;
                this._addReplaceEdit(range.startLength(statement.body, delta), '');
                if (hasWhileKeyword) {
                    text = this.utils.getNodeText(statement);
                    if (new core.DartString(text).indexOf(new core.DartRegExp('do\s*;\s*while')) == 0) {
                        var end = new core.DartString(text).indexOf('while');
                        var start = new core.DartString(text).indexOf(';') + 1;
                        delta += end - start - 1;
                        this._addReplaceEdit(new bare.createInstance(any, null, start + statement.offset, end - start), ' ');
                    }
                }
                sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, sb.offset, delta));
                sb.append(' ');
            }
            this._appendEmptyBraces(sb, !(hasWhileKeyword && this._isSyntheticExpression(statement.condition)));
            if (delta != 0) {
                exitDelta = utils_1.op(utils_1.Op.MINUS, sb.length, delta);
            }
        }
        else if (this._isEmptyBlock(statement.body)) {
            sb = new bare.createInstance(any, null, sb.file, statement.body.end);
        }
        var sb2;
        if (hasWhileKeyword) {
            var stmt = new _KeywordConditionBlockStructure(statement.whileKeyword, statement.leftParenthesis, statement.condition, statement.rightParenthesis, null);
            sb2 = this._complete_keywordCondition(stmt);
            if (utils_1.op(utils_1.Op.EQUALS, sb2, null)) {
                return false;
            }
            if (utils_1.op(utils_1.Op.EQUALS, sb2.length, 0)) {
                if (this.exitPosition != null) {
                    if (statement.semicolon.isSynthetic) {
                        this._insertBuilder(sb);
                        sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, this.exitPosition.offset, 1));
                        sb.append(';');
                    }
                }
            }
            else {
                if (utils_1.op(utils_1.Op.EQUALS, sb.exitOffset, null) && (function (t) { return (!!t) ? t.exitOffset : null; })(sb2) != null) {
                    this._insertBuilder(sb);
                    sb = sb2;
                    sb.append(';');
                }
                else {
                    sb.append(sb2.toString());
                }
            }
        }
        else {
            sb.append(" while (");
            sb.setExitOffset();
            sb.append(");");
        }
        this._insertBuilder(sb);
        if (exitDelta != 0) {
            this.exitPosition = new bare.createInstance(any, null, this.exitPosition.file, utils_1.op(utils_1.Op.PLUS, this.exitPosition.offset, exitDelta));
        }
        this._setCompletion(DartStatementCompletion.COMPLETE_DO_STMT);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_forEachStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var forNode = this.node;
        if (forNode.inKeyword.isSynthetic) {
            return false;
        }
        var sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, forNode.rightParenthesis.offset, 1));
        var name = forNode.identifier;
        name = (name) || (forNode.loopVariable);
        var src = this.utils.getNodeText(forNode);
        if (utils_1.op(utils_1.Op.EQUALS, name, null)) {
            this.exitPosition = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, forNode.leftParenthesis.offset, 1));
            src = new core.DartString(src).substring(utils_1.op(utils_1.Op.MINUS, forNode.leftParenthesis.offset, forNode.offset));
            if (new core.DartString(src).startsWith(new core.DartRegExp('\(\s*in\s*\)'))) {
                this._addReplaceEdit(range.startOffsetEndOffset(utils_1.op(utils_1.Op.PLUS, forNode.leftParenthesis.offset, 1), forNode.rightParenthesis.offset), ' in ');
            }
            else if (new core.DartString(src).startsWith(new core.DartRegExp('\(\s*in'))) {
                this._addReplaceEdit(range.startOffsetEndOffset(utils_1.op(utils_1.Op.PLUS, forNode.leftParenthesis.offset, 1), forNode.inKeyword.offset), ' ');
            }
        }
        else if (this._isSyntheticExpression(forNode.iterable)) {
            this.exitPosition = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, forNode.rightParenthesis.offset, 1));
            src = new core.DartString(src).substring(utils_1.op(utils_1.Op.MINUS, forNode.inKeyword.offset, forNode.offset));
            if (new core.DartString(src).startsWith(new core.DartRegExp('in\s*\)'))) {
                this._addReplaceEdit(range.startOffsetEndOffset(utils_1.op(utils_1.Op.PLUS, forNode.inKeyword.offset, forNode.inKeyword.length), forNode.rightParenthesis.offset), ' ');
            }
        }
        if (!this._statementHasValidBody(forNode.forKeyword, forNode.body)) {
            sb.append(' ');
            this._appendEmptyBraces(sb, utils_1.op(utils_1.Op.EQUALS, this.exitPosition, null));
        }
        this._insertBuilder(sb);
        this._setCompletion(DartStatementCompletion.COMPLETE_FOR_EACH_STMT);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_forStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var forNode = this.node;
        var sb;
        var replacementLength = 0;
        if (forNode.leftParenthesis.isSynthetic) {
            if (!forNode.rightParenthesis.isSynthetic) {
                return false;
            }
            sb = this._sourceBuilderAfterKeyword(forNode.forKeyword);
            sb.append('(');
            sb.setExitOffset();
            sb.append(')');
        }
        else {
            if (!forNode.rightSeparator.isSynthetic) {
                sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, forNode.rightParenthesis.offset, 1));
            }
            else if (!forNode.leftSeparator.isSynthetic) {
                if (this._isSyntheticExpression(forNode.condition)) {
                    var text = this.utils.getNodeText(forNode).substring(utils_1.op(utils_1.Op.MINUS, forNode.leftSeparator.offset, forNode.offset));
                    var match = new core.DartRegExp(';\s*(/\*.*\*/\s*)?\)[ \t]*').matchAsPrefix(text);
                    if (match != null) {
                        replacementLength = match.end - match.start;
                        sb = new bare.createInstance(any, null, this.file, forNode.leftSeparator.offset);
                        sb.append("; " + (match.group(1) == null ? '' : match.group(1)) + "; )");
                        var suffix = new core.DartString(text).substring(match.end);
                        if (new core.DartString(new core.DartString(suffix).trim()).isNotEmpty) {
                            sb.append(' ');
                            sb.append(new core.DartString(suffix).trim());
                            replacementLength += new core.DartString(suffix).length;
                            if (new core.DartString(suffix).endsWith(this.eol)) {
                                replacementLength -= new core.DartString(this.eol).length;
                            }
                        }
                        this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, forNode.leftSeparator.offset, 2));
                    }
                    else {
                        return false;
                    }
                }
                else {
                    sb = new bare.createInstance(any, null, this.file, forNode.rightParenthesis.offset);
                    replacementLength = 1;
                    sb.append('; )');
                    this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, forNode.rightSeparator.offset, 2));
                }
            }
            else if (this._isSyntheticExpression(forNode.initialization)) {
                this.exitPosition = this._newPosition(forNode.rightParenthesis.offset);
                sb = new bare.createInstance(any, null, this.file, forNode.rightParenthesis.offset);
            }
            else {
                var start = utils_1.op(utils_1.Op.PLUS, forNode.condition.offset, forNode.condition.length);
                var text = this.utils.getNodeText(forNode).substring(start - forNode.offset);
                if (new core.DartString(text).startsWith(new core.DartRegExp('\s*\)'))) {
                    var end = new core.DartString(text).indexOf(')');
                    sb = new bare.createInstance(any, null, this.file, start);
                    this._addReplaceEdit(new bare.createInstance(any, null, start, end), '; ; ');
                    this.exitPosition = new bare.createInstance(any, null, this.file, start - (end - new core.DartString('; ').length));
                }
                else {
                    this.exitPosition = this._newPosition(forNode.rightParenthesis.offset);
                    sb = new bare.createInstance(any, null, this.file, forNode.rightParenthesis.offset);
                }
            }
        }
        if (!this._statementHasValidBody(forNode.forKeyword, forNode.body)) {
            sb.append(' ');
            this._appendEmptyBraces(sb, true);
        }
        else if (_common_1.is(forNode.body, any)) {
            var body = forNode.body;
            if (utils_1.op(utils_1.Op.LEQ, body.rightBracket.end, this.selectionOffset)) {
                this.errors = new core.DartList.literal();
                return false;
            }
        }
        this._insertBuilder(sb, replacementLength);
        this._setCompletion(DartStatementCompletion.COMPLETE_FOR_STMT);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_functionDeclaration = function () {
        var _this = this;
        if (_common_1.isNot(this.node, any) && _common_1.isNot(this.node, any)) {
            return false;
        }
        var needsParen = false;
        var computeExitPos = function (parameters) {
            if (needsParen = parameters.rightParenthesis.isSynthetic) {
                var error = _this._findError(ParserErrorCode.MISSING_CLOSING_PARENTHESIS);
                if (error != null) {
                    return utils_1.op(utils_1.Op.MINUS, error.offset, 1);
                }
            }
            return utils_1.op(utils_1.Op.MINUS, _this.node.end, 1);
        };
        var paramListEnd;
        if (_common_1.is(this.node, any)) {
            var func = this.node;
            paramListEnd = computeExitPos(func.functionExpression.parameters);
        }
        else {
            var meth = this.node;
            paramListEnd = computeExitPos(meth.parameters);
        }
        var sb = new bare.createInstance(any, null, this.file, paramListEnd);
        if (needsParen) {
            sb.append(')');
        }
        sb.append(' ');
        this._appendEmptyBraces(sb, true);
        this._insertBuilder(sb);
        this._setCompletion(DartStatementCompletion.COMPLETE_FUNCTION_DECLARATION);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_functionDeclarationStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var error = this._findError(ParserErrorCode.EXPECTED_TOKEN, {
            partialMatch: "';'"
        });
        if (error != null) {
            var stmt = this.node;
            var src = this.utils.getNodeText(stmt);
            var insertOffset = utils_1.op(utils_1.Op.MINUS, stmt.functionDeclaration.end, 1);
            if (_common_1.is(stmt.functionDeclaration.functionExpression.body, any)) {
                var fnb = stmt.functionDeclaration.functionExpression.body;
                var fnbOffset = fnb.functionDefinition.offset;
                var fnSrc = new core.DartString(src).substring(fnbOffset - stmt.offset);
                if (!new core.DartString(fnSrc).startsWith('=>')) {
                    return false;
                }
                var delta = 0;
                if (fnb.expression.isSynthetic) {
                    if (!new core.DartString(fnSrc).startsWith('=> ')) {
                        this._addInsertEdit(insertOffset, ' ');
                        delta = 1;
                    }
                    this._addInsertEdit(insertOffset, ';');
                    this._appendNewlinePlusIndentAt(insertOffset);
                }
                else {
                    delta = 1;
                    this._addInsertEdit(insertOffset, ';');
                    insertOffset = this._appendNewlinePlusIndent();
                }
                this._setCompletionAt(DartStatementCompletion.SIMPLE_SEMICOLON, insertOffset + delta);
                return true;
            }
        }
        return false;
    };
    StatementCompletionProcessor.prototype._complete_ifOrWhileStatement = function (statement, kind) {
        if (this._statementHasValidBody(statement.keyword, statement.block)) {
            return false;
        }
        var sb = this._complete_keywordCondition(statement);
        if (utils_1.op(utils_1.Op.EQUALS, sb, null)) {
            return false;
        }
        var overshoot = this._lengthOfDeletions();
        sb.append(' ');
        this._appendEmptyBraces(sb, utils_1.op(utils_1.Op.EQUALS, this.exitPosition, null));
        this._insertBuilder(sb);
        if (overshoot != 0) {
            this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.MINUS, this.exitPosition.offset, overshoot));
        }
        this._setCompletion(kind);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_ifStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var ifNode = this.node;
        if (ifNode.elseKeyword != null) {
            if (this.selectionOffset >= ifNode.elseKeyword.end && _common_1.is(ifNode.elseStatement, any)) {
                var sb = new bare.createInstance(any, null, this.file, this.selectionOffset);
                var src = this.utils.getNodeText(ifNode);
                if (!new core.DartString(new core.DartString(src).substring(utils_1.op(utils_1.Op.MINUS, ifNode.elseKeyword.end, this.node.offset))).startsWith(new core.DartRegExp('[ \t]'))) {
                    sb.append(' ');
                }
                this._appendEmptyBraces(sb, true);
                this._insertBuilder(sb);
                this._setCompletion(DartStatementCompletion.COMPLETE_IF_STMT);
                return true;
            }
            return false;
        }
        var stmt = new _KeywordConditionBlockStructure(ifNode.ifKeyword, ifNode.leftParenthesis, ifNode.condition, ifNode.rightParenthesis, ifNode.thenStatement);
        return this._complete_ifOrWhileStatement(stmt, DartStatementCompletion.COMPLETE_IF_STMT);
    };
    StatementCompletionProcessor.prototype._complete_keywordCondition = function (statement) {
        var sb;
        if (statement.leftParenthesis.isSynthetic) {
            if (!statement.rightParenthesis.isSynthetic) {
                return null;
            }
            sb = this._sourceBuilderAfterKeyword(statement.keyword);
            sb.append('(');
            sb.setExitOffset();
            sb.append(')');
        }
        else {
            if (this._isSyntheticExpression(statement.condition)) {
                this.exitPosition = this._newPosition(utils_1.op(utils_1.Op.PLUS, statement.leftParenthesis.offset, 1));
                sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, statement.rightParenthesis.offset, 1));
            }
            else {
                var afterParen = utils_1.op(utils_1.Op.PLUS, statement.rightParenthesis.offset, 1);
                if (this.utils.getNodeText(this.node).substring(afterParen - this.node.offset).startsWith(new core.DartRegExp('[ \t]'))) {
                    this._addReplaceEdit(new bare.createInstance(any, null, afterParen, 1), '');
                    sb = new bare.createInstance(any, null, this.file, afterParen + 1);
                }
                else {
                    sb = new bare.createInstance(any, null, this.file, afterParen);
                }
            }
        }
        return sb;
    };
    StatementCompletionProcessor.prototype._complete_methodCall = function () {
        var _this = this;
        var parenError = this._findError(ParserErrorCode.EXPECTED_TOKEN, {
            partialMatch: "')'"
        });
        if (utils_1.op(utils_1.Op.EQUALS, parenError, null)) {
            return false;
        }
        var argList = this._selectedNode({
            at: this.selectionOffset
        }).getAncestor(function (n) {
            return _common_1.is(n, any);
        });
        if (utils_1.op(utils_1.Op.EQUALS, argList, null)) {
            argList = this._selectedNode({
                at: parenError.offset
            }).getAncestor(function (n) {
                return _common_1.is(n, any);
            });
        }
        if (utils_1.op(utils_1.Op.EQUALS, (function (_34_) { return (!!_34_) ? _34_.getAncestor(function (n) {
            return utils_1.op(utils_1.Op.EQUALS, n, _this.node);
        }) : null; })(argList), null)) {
            return false;
        }
        var previousInsertions = this._lengthOfInsertions();
        var loc = math.min(this.selectionOffset, utils_1.op(utils_1.Op.MINUS, argList.end, 1));
        var delta = 1;
        var semicolonError = this._findError(ParserErrorCode.EXPECTED_TOKEN, {
            partialMatch: "';'"
        });
        if (utils_1.op(utils_1.Op.EQUALS, semicolonError, null)) {
            loc += 1;
            delta = 0;
        }
        this._addInsertEdit(loc, ')');
        if (semicolonError != null) {
            this._addInsertEdit(loc, ';');
        }
        var indent = this.utils.getLinePrefix(this.selectionOffset);
        var exit = this.utils.getLineNext(this.selectionOffset);
        this._addInsertEdit(exit, indent + this.eol);
        exit += new core.DartString(indent).length + new core.DartString(this.eol).length + previousInsertions;
        this._setCompletionAt(DartStatementCompletion.SIMPLE_ENTER, exit + delta);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_simpleEnter = function () {
        var offset;
        if (!this.errors.isEmpty) {
            offset = this.selectionOffset;
        }
        else {
            var indent = this.utils.getLinePrefix(this.selectionOffset);
            var loc = this.utils.getLineNext(this.selectionOffset);
            this._addInsertEdit(loc, indent + this.eol);
            offset = loc + new core.DartString(indent).length;
        }
        this._setCompletionAt(DartStatementCompletion.SIMPLE_ENTER, offset);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_simpleSemicolon = function () {
        if (this.errors.length != 1) {
            return false;
        }
        var error = this._findError(ParserErrorCode.EXPECTED_TOKEN, {
            partialMatch: "';'"
        });
        if (error != null) {
            var previousInsertions = this._lengthOfInsertions();
            var insertOffset = utils_1.op(utils_1.Op.PLUS, error.offset, error.length);
            this._addInsertEdit(insertOffset, ';');
            var offset = this._appendNewlinePlusIndent() + 1 + previousInsertions;
            this._setCompletionAt(DartStatementCompletion.SIMPLE_SEMICOLON, offset);
            return true;
        }
        return false;
    };
    StatementCompletionProcessor.prototype._complete_switchStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var sb;
        var switchNode = this.node;
        if (switchNode.leftParenthesis.isSynthetic && switchNode.rightParenthesis.isSynthetic) {
            this.exitPosition = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, switchNode.switchKeyword.end, 2));
            var src = this.utils.getNodeText(switchNode);
            if (new core.DartString(new core.DartString(src).substring(utils_1.op(utils_1.Op.MINUS, switchNode.switchKeyword.end, switchNode.offset))).startsWith(new core.DartRegExp('[ \t]+'))) {
                sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, switchNode.switchKeyword.end, 1));
            }
            else {
                sb = new bare.createInstance(any, null, this.file, switchNode.switchKeyword.end);
                sb.append(' ');
            }
            sb.append('()');
        }
        else if (switchNode.leftParenthesis.isSynthetic || switchNode.rightParenthesis.isSynthetic) {
            return false;
        }
        else {
            sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, switchNode.rightParenthesis.offset, 1));
            if (this._isSyntheticExpression(switchNode.expression)) {
                this.exitPosition = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, switchNode.leftParenthesis.offset, 1));
            }
        }
        if (switchNode.leftBracket.isSynthetic) {
            sb.append(' ');
            this._appendEmptyBraces(sb, utils_1.op(utils_1.Op.EQUALS, this.exitPosition, null));
        }
        else {
            var member = this._findInvalidElement(switchNode.members);
            if (member != null) {
                if (member.colon.isSynthetic) {
                    var loc = _common_1.is(member, any) ? member.expression.end : member.keyword.end;
                    sb = new bare.createInstance(any, null, this.file, loc);
                    sb.append(': ');
                    this.exitPosition = new bare.createInstance(any, null, this.file, loc + 2);
                }
            }
        }
        this._insertBuilder(sb);
        this._setCompletion(DartStatementCompletion.COMPLETE_SWITCH_STMT);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_tryStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var tryNode = this.node;
        var sb;
        var catchNode;
        var addSpace = true;
        if (tryNode.body.leftBracket.isSynthetic) {
            var src = this.utils.getNodeText(tryNode);
            if (new core.DartString(new core.DartString(src).substring(utils_1.op(utils_1.Op.MINUS, tryNode.tryKeyword.end, tryNode.offset))).startsWith(new core.DartRegExp('[ \t]+'))) {
                sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, tryNode.tryKeyword.end, 1));
            }
            else {
                sb = new bare.createInstance(any, null, this.file, tryNode.tryKeyword.end);
                sb.append(' ');
            }
            this._appendEmptyBraces(sb, true);
            this._insertBuilder(sb);
            sb = null;
        }
        else if ((catchNode = this._findInvalidElement(tryNode.catchClauses)) != null) {
            if (catchNode.onKeyword != null) {
                if (utils_1.op(utils_1.Op.EQUALS, catchNode.exceptionType.length, 0) || null != this._findError(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE, {
                    partialMatch: "name 'catch"
                })) {
                    var src = this.utils.getNodeText(catchNode);
                    if (new core.DartString(src).startsWith(new core.DartRegExp('on[ \t]+'))) {
                        if (new core.DartString(src).startsWith(new core.DartRegExp('on[ \t][ \t]+'))) {
                            this.exitPosition = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, catchNode.onKeyword.end, 1));
                            sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, catchNode.onKeyword.end, 2));
                            addSpace = false;
                        }
                        else {
                            sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, catchNode.onKeyword.end, 1));
                            sb.setExitOffset();
                        }
                    }
                    else {
                        sb = new bare.createInstance(any, null, this.file, catchNode.onKeyword.end);
                        sb.append(' ');
                        sb.setExitOffset();
                    }
                }
                else {
                    sb = new bare.createInstance(any, null, this.file, catchNode.exceptionType.end);
                }
            }
            if (catchNode.catchKeyword != null) {
                var struct = new _KeywordConditionBlockStructure(catchNode.catchKeyword, catchNode.leftParenthesis, catchNode.exceptionParameter, catchNode.rightParenthesis, catchNode.body);
                if (sb != null) {
                    this._insertBuilder(sb);
                }
                sb = this._complete_keywordCondition(struct);
                if (utils_1.op(utils_1.Op.EQUALS, sb, null)) {
                    return false;
                }
            }
            if (catchNode.body.leftBracket.isSynthetic) {
                if (addSpace) {
                    sb.append(' ');
                }
                this._appendEmptyBraces(sb, utils_1.op(utils_1.Op.EQUALS, this.exitPosition, null));
            }
            this._insertBuilder(sb);
        }
        else if (tryNode.finallyKeyword != null) {
            if (tryNode.finallyBlock.leftBracket.isSynthetic) {
                sb = new bare.createInstance(any, null, this.file, tryNode.finallyKeyword.end);
                sb.append(' ');
                this._appendEmptyBraces(sb, true);
                this._insertBuilder(sb);
            }
        }
        this._setCompletion(DartStatementCompletion.COMPLETE_TRY_STMT);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_variableDeclaration = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        this._addInsertEdit(this.node.end, ';');
        this.exitPosition = new bare.createInstance(any, null, this.file, this._appendNewlinePlusIndentAt(this.node.end) + 1);
        this._setCompletion(DartStatementCompletion.COMPLETE_VARIABLE_DECLARATION);
        return true;
    };
    StatementCompletionProcessor.prototype._complete_whileStatement = function () {
        if (_common_1.isNot(this.node, any)) {
            return false;
        }
        var whileNode = this.node;
        if (whileNode != null) {
            var stmt = new _KeywordConditionBlockStructure(whileNode.whileKeyword, whileNode.leftParenthesis, whileNode.condition, whileNode.rightParenthesis, whileNode.body);
            return this._complete_ifOrWhileStatement(stmt, DartStatementCompletion.COMPLETE_WHILE_STMT);
        }
        return false;
    };
    StatementCompletionProcessor.prototype._findError = function (code, _namedArguments) {
        var partialMatch = Object.assign({
            "partialMatch": null
        }, _namedArguments).partialMatch;
        return this.errors.firstWhere(function (err) {
            return utils_1.op(utils_1.Op.EQUALS, err.errorCode, code) && (utils_1.op(utils_1.Op.EQUALS, partialMatch, null) ? true : err.message.contains(partialMatch));
        }, {
            orElse: function () {
                return null;
            }
        });
    };
    StatementCompletionProcessor.prototype._findInvalidElement = function (list) {
        var _this = this;
        return list.firstWhere(function (item) {
            return _this.selectionOffset >= item.offset && _this.selectionOffset <= item.end;
        }, {
            orElse: function () {
                return null;
            }
        });
    };
    StatementCompletionProcessor.prototype._getLinkedPosition = function (groupId) {
        var group = this.linkedPositionGroups.get(groupId);
        if (utils_1.op(utils_1.Op.EQUALS, group, null)) {
            group = new bare.createInstance(any, null);
            this.linkedPositionGroups.set(groupId, group);
        }
        return group;
    };
    StatementCompletionProcessor.prototype._insertBuilder = function (builder, length) {
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
    StatementCompletionProcessor.prototype._isEmptyBlock = function (stmt) {
        return _common_1.is(stmt, any) && stmt.statements.isEmpty;
    };
    StatementCompletionProcessor.prototype._isEmptyStatement = function (stmt) {
        return _common_1.is(stmt, any) || this._isEmptyBlock(stmt);
    };
    StatementCompletionProcessor.prototype._isNonStatementDeclaration = function (n) {
        if (_common_1.isNot(n, any)) {
            return false;
        }
        if (_common_1.isNot(n, any) && _common_1.isNot(n, any)) {
            return true;
        }
        var p = n.parent;
        return _common_1.isNot(p, any) && _common_1.isNot((function (t) { return (!!t) ? t.parent : null; })(p), any);
    };
    StatementCompletionProcessor.prototype._isSyntheticExpression = function (expr) {
        return _common_1.is(expr, any) && expr.isSynthetic;
    };
    StatementCompletionProcessor.prototype._lengthOfDeletions = function () {
        if (this.change.edits.isEmpty) {
            return 0;
        }
        var length = 0;
        for (var _i = 0, _a = this.change.edits; _i < _a.length; _i++) {
            var edit = _a[_i];
            for (var _b = 0, _c = edit.edits; _b < _c.length; _b++) {
                var srcEdit = _c[_b];
                if (utils_1.op(utils_1.Op.GT, srcEdit.length, 0)) {
                    length += utils_1.op(utils_1.Op.MINUS, srcEdit.length, srcEdit.replacement.length);
                }
            }
        }
        return length;
    };
    StatementCompletionProcessor.prototype._lengthOfInsertions = function () {
        if (this.change.edits.isEmpty) {
            return 0;
        }
        var length = 0;
        for (var _i = 0, _a = this.change.edits; _i < _a.length; _i++) {
            var edit = _a[_i];
            for (var _b = 0, _c = edit.edits; _b < _c.length; _b++) {
                var srcEdit = _c[_b];
                if (utils_1.op(utils_1.Op.EQUALS, srcEdit.length, 0)) {
                    length += srcEdit.replacement.length;
                }
            }
        }
        return length;
    };
    StatementCompletionProcessor.prototype._newPosition = function (offset) {
        return new bare.createInstance(any, null, this.file, offset);
    };
    StatementCompletionProcessor.prototype._removeError = function (errorCode, _namedArguments) {
        var partialMatch = Object.assign({
            "partialMatch": null
        }, _namedArguments).partialMatch;
        var error = this._findError(errorCode, {
            partialMatch: partialMatch
        });
        if (error != null) {
            this.errors.remove(error);
        }
    };
    StatementCompletionProcessor.prototype._selectedNode = function (_namedArguments) {
        var at = Object.assign({
            "at": null
        }, _namedArguments).at;
        return new bare.createInstance(any, null, at == null ? this.selectionOffset : at).searchWithin(this.unit);
    };
    StatementCompletionProcessor.prototype._setCompletion = function (kind, args) {
        var _this = this;
        /* TODO (AssertStatementImpl) : assert (exitPosition != null); */ ;
        this.change.selection = this.exitPosition;
        this.change.message = formatList(kind.message, args);
        this.linkedPositionGroups.values.forEach(function (group) {
            return _this.change.addLinkedEditGroup(group);
        });
        this.completion = new StatementCompletion(kind, this.change);
    };
    StatementCompletionProcessor.prototype._setCompletionAt = function (kind, offset, args) {
        this.exitPosition = this._newPosition(offset);
        this._setCompletion(kind, args);
    };
    StatementCompletionProcessor.prototype._sourceBuilderAfterKeyword = function (keyword) {
        var sb;
        var text = this._baseNodeText(this.node);
        text = new core.DartString(text).substring(utils_1.op(utils_1.Op.MINUS, keyword.offset, this.node.offset));
        var len = keyword.length;
        if (new core.DartString(text).length == len || !new core.DartString(new core.DartString(text).substring(len, len + 1)).contains(new core.DartRegExp('[ \t]'))) {
            sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, keyword.offset, len));
            sb.append(' ');
        }
        else {
            sb = new bare.createInstance(any, null, this.file, utils_1.op(utils_1.Op.PLUS, utils_1.op(utils_1.Op.PLUS, keyword.offset, len), 1));
        }
        return sb;
    };
    StatementCompletionProcessor.prototype._statementHasValidBody = function (keyword, body) {
        if (body.isSynthetic) {
            return false;
        }
        if (_common_1.is(body, any)) {
            var block = body;
            return (!(block.leftBracket.isSynthetic));
        }
        return (utils_1.op(utils_1.Op.EQUALS, this.lineInfo.getLocation(keyword.offset), this.lineInfo.getLocation(body.offset)));
    };
    var StatementCompletionProcessor_1;
    __decorate([
        utils_1.defaultConstructor
    ], StatementCompletionProcessor.prototype, "StatementCompletionProcessor", null);
    StatementCompletionProcessor = StatementCompletionProcessor_1 = __decorate([
        utils_1.DartClass
    ], StatementCompletionProcessor);
    return StatementCompletionProcessor;
}());
exports.StatementCompletionProcessor = StatementCompletionProcessor;
var _KeywordConditionBlockStructure = /** @class */ (function () {
    function _KeywordConditionBlockStructure(keyword, leftParenthesis, condition, rightParenthesis, block) {
    }
    _KeywordConditionBlockStructure.prototype._KeywordConditionBlockStructure = function (keyword, leftParenthesis, condition, rightParenthesis, block) {
        this.keyword = keyword;
        this.leftParenthesis = leftParenthesis;
        this.condition = condition;
        this.rightParenthesis = rightParenthesis;
        this.block = block;
    };
    Object.defineProperty(_KeywordConditionBlockStructure.prototype, "offset", {
        get: function () {
            return this.keyword.offset;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        utils_1.defaultConstructor
    ], _KeywordConditionBlockStructure.prototype, "_KeywordConditionBlockStructure", null);
    _KeywordConditionBlockStructure = __decorate([
        utils_1.DartClass
    ], _KeywordConditionBlockStructure);
    return _KeywordConditionBlockStructure;
}());
exports._KeywordConditionBlockStructure = _KeywordConditionBlockStructure;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=statement_completion.js.map
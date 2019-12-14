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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_declaration_visitor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var LocalDeclarationVisitor = /** @class */ (function (_super) {
    __extends(LocalDeclarationVisitor, _super);
    function LocalDeclarationVisitor(offset) {
        var _this = this;
        return _this;
    }
    LocalDeclarationVisitor_1 = LocalDeclarationVisitor;
    Object.defineProperty(LocalDeclarationVisitor, "STACKTRACE_TYPE", {
        get: function () {
            if (this.__$STACKTRACE_TYPE === undefined) {
                this.__$STACKTRACE_TYPE = astFactory.typeName(astFactory.simpleIdentifier(new bare.createInstance(any, null, TokenType.IDENTIFIER, 'StackTrace', 0)), null);
            }
            return this.__$STACKTRACE_TYPE;
        },
        set: function (__$value) {
            this.__$STACKTRACE_TYPE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    LocalDeclarationVisitor.prototype.LocalDeclarationVisitor = function (offset) {
        this.offset = offset;
    };
    LocalDeclarationVisitor.prototype.declaredClass = function (declaration) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredClassTypeAlias = function (declaration) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredEnum = function (declaration) {
    };
    LocalDeclarationVisitor.prototype.declaredField = function (fieldDecl, varDecl) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredFunction = function (declaration) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredFunctionTypeAlias = function (declaration) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredLabel = function (label, isCaseLabel) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredLocalVar = function (name, type) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredMethod = function (declaration) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredParam = function (name, type) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.declaredTopLevelVar = function (varList, varDecl) { throw 'abstract'; };
    LocalDeclarationVisitor.prototype.finished = function () {
        throw new _LocalDeclarationVisitorFinished();
    };
    LocalDeclarationVisitor.prototype.visit = function (node) {
        try {
            node.accept(this);
            return false;
        }
        catch (__error__) {
            if (_common_1.is(__error__, _LocalDeclarationVisitorFinished)) {
                return true;
            }
        }
    };
    LocalDeclarationVisitor.prototype.visitBlock = function (node) {
        this._visitStatements(node.statements);
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitCatchClause = function (node) {
        var param = node.exceptionParameter;
        if (param != null) {
            this.declaredParam(param, node.exceptionType);
        }
        param = node.stackTraceParameter;
        if (param != null) {
            this.declaredParam(param, LocalDeclarationVisitor_1.STACKTRACE_TYPE);
        }
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitClassDeclaration = function (node) {
        this._visitClassDeclarationMembers(node);
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitCompilationUnit = function (node) {
        var _this = this;
        node.declarations.forEach(function (declaration) {
            if (_common_1.is(declaration, any)) {
                _this.declaredClass(declaration);
            }
            else if (_common_1.is(declaration, any)) {
                _this.declaredEnum(declaration);
            }
            else if (_common_1.is(declaration, any)) {
                _this.declaredFunction(declaration);
            }
            else if (_common_1.is(declaration, any)) {
                var varList_1 = declaration.variables;
                if (varList_1 != null) {
                    varList_1.variables.forEach(function (varDecl) {
                        _this.declaredTopLevelVar(varList_1, varDecl);
                    });
                }
            }
            else if (_common_1.is(declaration, any)) {
                _this.declaredClassTypeAlias(declaration);
            }
            else if (_common_1.is(declaration, any)) {
                _this.declaredFunctionTypeAlias(declaration);
            }
        });
    };
    LocalDeclarationVisitor.prototype.visitConstructorDeclaration = function (node) {
        this._visitParamList(node.parameters);
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitForEachStatement = function (node) {
        var id;
        var type;
        var loopVar = node.loopVariable;
        if (loopVar != null) {
            id = loopVar.identifier;
            type = loopVar.type;
        }
        else {
            id = node.identifier;
            type = null;
        }
        if (id != null) {
            this.declaredLocalVar(id, type);
        }
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitForStatement = function (node) {
        var _this = this;
        var varList = node.variables;
        if (varList != null) {
            varList.variables.forEach(function (varDecl) {
                _this.declaredLocalVar(varDecl.name, varList.type);
            });
        }
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitFunctionDeclaration = function (node) {
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitFunctionExpression = function (node) {
        this._visitParamList(node.parameters);
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitInterpolationExpression = function (node) {
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitLabeledStatement = function (node) {
        for (var _i = 0, _a = node.labels; _i < _a.length; _i++) {
            var label = _a[_i];
            this.declaredLabel(label, false);
        }
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitMethodDeclaration = function (node) {
        this._visitParamList(node.parameters);
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitNode = function (node) {
        node.parent.accept(this);
    };
    LocalDeclarationVisitor.prototype.visitStringInterpolation = function (node) {
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitSwitchMember = function (node) {
        this._visitStatements(node.statements);
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype.visitSwitchStatement = function (node) {
        for (var _i = 0, _a = node.members; _i < _a.length; _i++) {
            var member = _a[_i];
            for (var _b = 0, _c = member.labels; _b < _c.length; _b++) {
                var label = _c[_b];
                this.declaredLabel(label, true);
            }
        }
        this.visitNode(node);
    };
    LocalDeclarationVisitor.prototype._visitClassDeclarationMembers = function (node) {
        var _this = this;
        var _loop_1 = function (member) {
            if (_common_1.is(member, any)) {
                member.fields.variables.forEach(function (varDecl) {
                    _this.declaredField(member, varDecl);
                });
            }
            else if (_common_1.is(member, any)) {
                this_1.declaredMethod(member);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = node.members; _i < _a.length; _i++) {
            var member = _a[_i];
            _loop_1(member);
        }
    };
    LocalDeclarationVisitor.prototype._visitParamList = function (paramList) {
        var _this = this;
        if (paramList != null) {
            paramList.parameters.forEach(function (param) {
                var normalParam;
                if (_common_1.is(param, any)) {
                    normalParam = param.parameter;
                }
                else if (_common_1.is(param, any)) {
                    normalParam = param;
                }
                var type = null;
                if (_common_1.is(normalParam, any)) {
                    type = normalParam.type;
                }
                else if (_common_1.is(normalParam, any)) {
                    type = normalParam.returnType;
                }
                else if (_common_1.is(normalParam, any)) {
                    type = normalParam.type;
                }
                var name = param.identifier;
                _this.declaredParam(name, type);
            });
        }
    };
    LocalDeclarationVisitor.prototype._visitStatements = function (statements) {
        for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
            var stmt = statements_1[_i];
            if (utils_1.op(utils_1.Op.LT, stmt.offset, this.offset)) {
                if (_common_1.is(stmt, any)) {
                    var varList = stmt.variables;
                    if (varList != null) {
                        for (var _a = 0, _b = varList.variables; _a < _b.length; _a++) {
                            var varDecl = _b[_a];
                            if (utils_1.op(utils_1.Op.LT, varDecl.end, this.offset)) {
                                this.declaredLocalVar(varDecl.name, varList.type);
                            }
                        }
                    }
                }
                else if (_common_1.is(stmt, any)) {
                    var declaration = stmt.functionDeclaration;
                    if (declaration != null && utils_1.op(utils_1.Op.LT, declaration.offset, this.offset)) {
                        var id = declaration.name;
                        if (id != null) {
                            var name_1 = id.name;
                            if (name_1 != null && new core.DartString(name_1).length > 0) {
                                this.declaredFunction(declaration);
                            }
                        }
                    }
                }
            }
        }
    };
    var LocalDeclarationVisitor_1;
    __decorate([
        utils_1.defaultConstructor
    ], LocalDeclarationVisitor.prototype, "LocalDeclarationVisitor", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredClass", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredClassTypeAlias", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredField", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredFunction", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredFunctionTypeAlias", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredLabel", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredLocalVar", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredMethod", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredParam", null);
    __decorate([
        utils_1.Abstract
    ], LocalDeclarationVisitor.prototype, "declaredTopLevelVar", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitBlock", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitCatchClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitClassDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitCompilationUnit", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitConstructorDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitForEachStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitForStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitFunctionDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitFunctionExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitInterpolationExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitLabeledStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitMethodDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitNode", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitStringInterpolation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitSwitchMember", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LocalDeclarationVisitor.prototype, "visitSwitchStatement", null);
    LocalDeclarationVisitor = LocalDeclarationVisitor_1 = __decorate([
        utils_1.DartClass
    ], LocalDeclarationVisitor);
    return LocalDeclarationVisitor;
}(any));
exports.LocalDeclarationVisitor = LocalDeclarationVisitor;
var _LocalDeclarationVisitorFinished = /** @class */ (function () {
    function _LocalDeclarationVisitorFinished() {
    }
    _LocalDeclarationVisitorFinished.prototype._LocalDeclarationVisitorFinished = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], _LocalDeclarationVisitorFinished.prototype, "_LocalDeclarationVisitorFinished", null);
    _LocalDeclarationVisitorFinished = __decorate([
        utils_1.DartClass
    ], _LocalDeclarationVisitorFinished);
    return _LocalDeclarationVisitorFinished;
}());
exports._LocalDeclarationVisitorFinished = _LocalDeclarationVisitorFinished;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=local_declaration_visitor.js.map
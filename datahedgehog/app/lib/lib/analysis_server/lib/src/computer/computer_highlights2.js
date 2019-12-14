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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_highlights2.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var DartUnitHighlightsComputer2 = /** @class */ (function () {
    function DartUnitHighlightsComputer2(_unit) {
    }
    DartUnitHighlightsComputer2_1 = DartUnitHighlightsComputer2;
    DartUnitHighlightsComputer2.prototype.DartUnitHighlightsComputer2 = function (_unit) {
        this._regions = new core.DartList.literal();
        this._unit = _unit;
    };
    DartUnitHighlightsComputer2.prototype.compute = function () {
        this._unit.accept(new _DartUnitHighlightsComputerVisitor2(this));
        this._addCommentRanges();
        return this._regions;
    };
    DartUnitHighlightsComputer2.prototype._addCommentRanges = function () {
        var token = this._unit.beginToken;
        while (token != null && token.type != TokenType.EOF) {
            var commentToken = token.precedingComments;
            while (commentToken != null) {
                var highlightType = null;
                if (utils_1.op(utils_1.Op.EQUALS, commentToken.type, TokenType.MULTI_LINE_COMMENT)) {
                    if (commentToken.lexeme.startsWith('/**')) {
                        highlightType = HighlightRegionType.COMMENT_DOCUMENTATION;
                    }
                    else {
                        highlightType = HighlightRegionType.COMMENT_BLOCK;
                    }
                }
                if (utils_1.op(utils_1.Op.EQUALS, commentToken.type, TokenType.SINGLE_LINE_COMMENT)) {
                    highlightType = HighlightRegionType.COMMENT_END_OF_LINE;
                }
                if (highlightType != null) {
                    this._addRegion_token(commentToken, highlightType);
                }
                commentToken = commentToken.next;
            }
            token = token.next;
        }
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion = function (node) {
        if (this._addIdentifierRegion_keyword(node)) {
            return;
        }
        if (this._addIdentifierRegion_class(node)) {
            return;
        }
        if (this._addIdentifierRegion_constructor(node)) {
            return;
        }
        if (this._addIdentifierRegion_getterSetterDeclaration(node)) {
            return;
        }
        if (this._addIdentifierRegion_field(node)) {
            return;
        }
        if (this._addIdentifierRegion_dynamicLocal(node)) {
            return;
        }
        if (this._addIdentifierRegion_function(node)) {
            return;
        }
        if (this._addIdentifierRegion_functionTypeAlias(node)) {
            return;
        }
        if (this._addIdentifierRegion_importPrefix(node)) {
            return;
        }
        if (this._addIdentifierRegion_label(node)) {
            return;
        }
        if (this._addIdentifierRegion_localVariable(node)) {
            return;
        }
        if (this._addIdentifierRegion_method(node)) {
            return;
        }
        if (this._addIdentifierRegion_parameter(node)) {
            return;
        }
        if (this._addIdentifierRegion_typeParameter(node)) {
            return;
        }
        if (this._addIdentifierRegion_unresolvedInstanceMemberReference(node)) {
            return;
        }
        this._addRegion_node(node, HighlightRegionType.IDENTIFIER_DEFAULT);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_annotation = function (node) {
        var arguments = node.arguments;
        if (utils_1.op(utils_1.Op.EQUALS, arguments, null)) {
            this._addRegion_node(node, HighlightRegionType.ANNOTATION);
        }
        else {
            this._addRegion_nodeStart_tokenEnd(node, arguments.beginToken, HighlightRegionType.ANNOTATION);
            this._addRegion_token(arguments.endToken, HighlightRegionType.ANNOTATION);
        }
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_class = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        var classElement = element;
        var type;
        if (classElement.isEnum) {
            type = HighlightRegionType.ENUM;
        }
        else {
            type = HighlightRegionType.CLASS;
        }
        return this._addRegion_node(node, type);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_constructor = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node, HighlightRegionType.CONSTRUCTOR);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_dynamicLocal = function (node) {
        if (node.propagatedType != null) {
            return false;
        }
        var staticType = node.staticType;
        if (utils_1.op(utils_1.Op.EQUALS, staticType, null) || !staticType.isDynamic) {
            return false;
        }
        var element = node.staticElement;
        if (_common_1.is(element, any)) {
            var type = node.inDeclarationContext() ? HighlightRegionType.DYNAMIC_LOCAL_VARIABLE_DECLARATION : HighlightRegionType.DYNAMIC_LOCAL_VARIABLE_REFERENCE;
            return this._addRegion_node(node, type);
        }
        if (_common_1.is(element, any)) {
            var type = node.inDeclarationContext() ? HighlightRegionType.DYNAMIC_PARAMETER_DECLARATION : HighlightRegionType.DYNAMIC_PARAMETER_REFERENCE;
            return this._addRegion_node(node, type);
        }
        return false;
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_field = function (node) {
        var element = node.bestElement;
        if (_common_1.is(element, any)) {
            if (_common_1.is(node.parent, any)) {
                element = element.field;
            }
        }
        var type;
        if (_common_1.is(element, any)) {
            var enclosingElement = element.enclosingElement;
            if (_common_1.is(enclosingElement, any) && enclosingElement.isEnum) {
                type = HighlightRegionType.ENUM_CONSTANT;
            }
            else if (element.isStatic) {
                type = HighlightRegionType.STATIC_FIELD_DECLARATION;
            }
            else {
                type = node.inDeclarationContext() ? HighlightRegionType.INSTANCE_FIELD_DECLARATION : HighlightRegionType.INSTANCE_FIELD_REFERENCE;
            }
        }
        else if (_common_1.is(element, any)) {
            type = HighlightRegionType.TOP_LEVEL_VARIABLE_DECLARATION;
        }
        if (_common_1.is(element, any)) {
            var accessor = element;
            var enclosingElement = element.enclosingElement;
            if (_common_1.is(accessor.variable, any)) {
                type = accessor.isGetter ? HighlightRegionType.TOP_LEVEL_GETTER_REFERENCE : HighlightRegionType.TOP_LEVEL_SETTER_REFERENCE;
            }
            else if (_common_1.is(enclosingElement, any) && enclosingElement.isEnum) {
                type = HighlightRegionType.ENUM_CONSTANT;
            }
            else if (accessor.isStatic) {
                type = accessor.isGetter ? HighlightRegionType.STATIC_GETTER_REFERENCE : HighlightRegionType.STATIC_SETTER_REFERENCE;
            }
            else {
                type = accessor.isGetter ? HighlightRegionType.INSTANCE_GETTER_REFERENCE : HighlightRegionType.INSTANCE_SETTER_REFERENCE;
            }
        }
        if (type != null) {
            return this._addRegion_node(node, type);
        }
        return false;
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_function = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        var type;
        var isTopLevel = _common_1.is(element.enclosingElement, any);
        if (node.inDeclarationContext()) {
            type = isTopLevel ? HighlightRegionType.TOP_LEVEL_FUNCTION_DECLARATION : HighlightRegionType.LOCAL_FUNCTION_DECLARATION;
        }
        else {
            type = isTopLevel ? HighlightRegionType.TOP_LEVEL_FUNCTION_REFERENCE : HighlightRegionType.LOCAL_FUNCTION_REFERENCE;
        }
        return this._addRegion_node(node, type);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_functionTypeAlias = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node, HighlightRegionType.FUNCTION_TYPE_ALIAS);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_getterSetterDeclaration = function (node) {
        var parent = node.parent;
        if (!(_common_1.is(parent, any) || _common_1.is(parent, any))) {
            return false;
        }
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        var propertyAccessorElement = element;
        var isTopLevel = _common_1.is(element.enclosingElement, any);
        var type;
        if (propertyAccessorElement.isGetter) {
            if (isTopLevel) {
                type = HighlightRegionType.TOP_LEVEL_GETTER_DECLARATION;
            }
            else if (propertyAccessorElement.isStatic) {
                type = HighlightRegionType.STATIC_GETTER_DECLARATION;
            }
            else {
                type = HighlightRegionType.INSTANCE_GETTER_DECLARATION;
            }
        }
        else {
            if (isTopLevel) {
                type = HighlightRegionType.TOP_LEVEL_SETTER_DECLARATION;
            }
            else if (propertyAccessorElement.isStatic) {
                type = HighlightRegionType.STATIC_SETTER_DECLARATION;
            }
            else {
                type = HighlightRegionType.INSTANCE_SETTER_DECLARATION;
            }
        }
        return this._addRegion_node(node, type);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_importPrefix = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node, HighlightRegionType.IMPORT_PREFIX);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_keyword = function (node) {
        var name = node.name;
        if (name == "void") {
            return this._addRegion_node(node, HighlightRegionType.KEYWORD);
        }
        return false;
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_label = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node, HighlightRegionType.LABEL);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_localVariable = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        var type = node.inDeclarationContext() ? HighlightRegionType.LOCAL_VARIABLE_DECLARATION : HighlightRegionType.LOCAL_VARIABLE_REFERENCE;
        return this._addRegion_node(node, type);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_method = function (node) {
        var element = node.bestElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        var methodElement = element;
        var isStatic = methodElement.isStatic;
        var type;
        if (node.inDeclarationContext()) {
            if (isStatic) {
                type = HighlightRegionType.STATIC_METHOD_DECLARATION;
            }
            else {
                type = HighlightRegionType.INSTANCE_METHOD_DECLARATION;
            }
        }
        else {
            if (isStatic) {
                type = HighlightRegionType.STATIC_METHOD_REFERENCE;
            }
            else {
                type = HighlightRegionType.INSTANCE_METHOD_REFERENCE;
            }
        }
        return this._addRegion_node(node, type);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_parameter = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        var type = node.inDeclarationContext() ? HighlightRegionType.PARAMETER_DECLARATION : HighlightRegionType.PARAMETER_REFERENCE;
        return this._addRegion_node(node, type);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_typeParameter = function (node) {
        var element = node.staticElement;
        if (_common_1.isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node, HighlightRegionType.TYPE_PARAMETER);
    };
    DartUnitHighlightsComputer2.prototype._addIdentifierRegion_unresolvedInstanceMemberReference = function (node) {
        var element = node.bestElement;
        if (element != null) {
            return false;
        }
        var decorate = false;
        var parent = node.parent;
        if (_common_1.is(parent, any)) {
            var target = parent.realTarget;
            if (utils_1.op(utils_1.Op.EQUALS, parent.methodName, node) && target != null && DartUnitHighlightsComputer2_1._isDynamicExpression(target)) {
                decorate = true;
            }
        }
        else if (node.inGetterContext() || node.inSetterContext()) {
            if (_common_1.is(parent, any)) {
                decorate = utils_1.op(utils_1.Op.EQUALS, parent.identifier, node);
            }
            else if (_common_1.is(parent, any)) {
                decorate = utils_1.op(utils_1.Op.EQUALS, parent.propertyName, node);
            }
        }
        if (decorate) {
            this._addRegion_node(node, HighlightRegionType.UNRESOLVED_INSTANCE_MEMBER_REFERENCE);
            return true;
        }
        return false;
    };
    DartUnitHighlightsComputer2.prototype._addRegion = function (offset, length, type) {
        this._regions.add(new bare.createInstance(any, null, type, offset, length));
    };
    DartUnitHighlightsComputer2.prototype._addRegion_node = function (node, type) {
        var offset = node.offset;
        var length = node.length;
        this._addRegion(offset, length, type);
        return true;
    };
    DartUnitHighlightsComputer2.prototype._addRegion_nodeStart_tokenEnd = function (a, b, type) {
        var offset = a.offset;
        var end = b.end;
        this._addRegion(offset, end - offset, type);
    };
    DartUnitHighlightsComputer2.prototype._addRegion_token = function (token, type) {
        if (token != null) {
            var offset = token.offset;
            var length_1 = token.length;
            this._addRegion(offset, length_1, type);
        }
    };
    DartUnitHighlightsComputer2.prototype._addRegion_tokenStart_tokenEnd = function (a, b, type) {
        var offset = a.offset;
        var end = b.end;
        this._addRegion(offset, end - offset, type);
    };
    DartUnitHighlightsComputer2._isDynamicExpression = function (e) {
        if (_common_1.is(e, any) && _common_1.is(e.staticElement, any)) {
            return false;
        }
        return resolutionMap.bestTypeForExpression(e).isDynamic;
    };
    var DartUnitHighlightsComputer2_1;
    __decorate([
        utils_1.defaultConstructor
    ], DartUnitHighlightsComputer2.prototype, "DartUnitHighlightsComputer2", null);
    DartUnitHighlightsComputer2 = DartUnitHighlightsComputer2_1 = __decorate([
        utils_1.DartClass
    ], DartUnitHighlightsComputer2);
    return DartUnitHighlightsComputer2;
}());
exports.DartUnitHighlightsComputer2 = DartUnitHighlightsComputer2;
var _DartUnitHighlightsComputerVisitor2 = /** @class */ (function (_super) {
    __extends(_DartUnitHighlightsComputerVisitor2, _super);
    function _DartUnitHighlightsComputerVisitor2(computer) {
        var _this = this;
        return _this;
    }
    _DartUnitHighlightsComputerVisitor2.prototype._DartUnitHighlightsComputerVisitor2 = function (computer) {
        this.computer = computer;
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitAnnotation = function (node) {
        this.computer._addIdentifierRegion_annotation(node);
        return _super.prototype.visitAnnotation.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitAsExpression = function (node) {
        this.computer._addRegion_token(node.asOperator, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitAsExpression.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitAssertStatement = function (node) {
        this.computer._addRegion_token(node.assertKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitAssertStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitAwaitExpression = function (node) {
        this.computer._addRegion_token(node.awaitKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitAwaitExpression.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitBlockFunctionBody = function (node) {
        this._addRegions_functionBody(node);
        return _super.prototype.visitBlockFunctionBody.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitBooleanLiteral = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.KEYWORD);
        this.computer._addRegion_node(node, HighlightRegionType.LITERAL_BOOLEAN);
        return _super.prototype.visitBooleanLiteral.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitBreakStatement = function (node) {
        this.computer._addRegion_token(node.breakKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitBreakStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitCatchClause = function (node) {
        this.computer._addRegion_token(node.catchKeyword, HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.onKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitCatchClause.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitClassDeclaration = function (node) {
        this.computer._addRegion_token(node.classKeyword, HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.abstractKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitClassDeclaration.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitClassTypeAlias = function (node) {
        this.computer._addRegion_token(node.abstractKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitClassTypeAlias.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitConstructorDeclaration = function (node) {
        this.computer._addRegion_token(node.externalKeyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.factoryKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitConstructorDeclaration.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitContinueStatement = function (node) {
        this.computer._addRegion_token(node.continueKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitContinueStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitDoStatement = function (node) {
        this.computer._addRegion_token(node.doKeyword, HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.whileKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitDoStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitDoubleLiteral = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.LITERAL_DOUBLE);
        return _super.prototype.visitDoubleLiteral.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitEnumDeclaration = function (node) {
        this.computer._addRegion_token(node.enumKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitEnumDeclaration.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitExportDirective = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitExportDirective.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitExpressionFunctionBody = function (node) {
        this._addRegions_functionBody(node);
        return _super.prototype.visitExpressionFunctionBody.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitFieldDeclaration = function (node) {
        this.computer._addRegion_token(node.staticKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitFieldDeclaration.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitForEachStatement = function (node) {
        this.computer._addRegion_token(node.awaitKeyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.forKeyword, HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.inKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitForEachStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitForStatement = function (node) {
        this.computer._addRegion_token(node.forKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitForStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitFunctionDeclaration = function (node) {
        this.computer._addRegion_token(node.externalKeyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.propertyKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitFunctionDeclaration.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitFunctionTypeAlias = function (node) {
        this.computer._addRegion_token(node.typedefKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitFunctionTypeAlias.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitGenericFunctionType = function (node) {
        this.computer._addRegion_token(node.functionKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitGenericFunctionType.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitGenericTypeAlias = function (node) {
        this.computer._addRegion_token(node.typedefKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitGenericTypeAlias.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitHideCombinator = function (node) {
        this.computer._addRegion_token(node.keyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitHideCombinator.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitIfStatement = function (node) {
        this.computer._addRegion_token(node.ifKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitIfStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitImplementsClause = function (node) {
        this.computer._addRegion_token(node.implementsKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitImplementsClause.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitImportDirective = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.deferredKeyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.asKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitImportDirective.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitInstanceCreationExpression = function (node) {
        this.computer._addRegion_token(node.keyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitInstanceCreationExpression.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitIntegerLiteral = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.LITERAL_INTEGER);
        return _super.prototype.visitIntegerLiteral.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitIsExpression = function (node) {
        this.computer._addRegion_token(node.isOperator, HighlightRegionType.KEYWORD);
        return _super.prototype.visitIsExpression.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitLibraryDirective = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitLibraryDirective.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitLibraryIdentifier = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.LIBRARY_NAME);
        return null;
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitListLiteral = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.LITERAL_LIST);
        this.computer._addRegion_token(node.constKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitListLiteral.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitMapLiteral = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.LITERAL_MAP);
        this.computer._addRegion_token(node.constKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitMapLiteral.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitMethodDeclaration = function (node) {
        this.computer._addRegion_token(node.externalKeyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.modifierKeyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.operatorKeyword, HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.propertyKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitMethodDeclaration.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitNativeClause = function (node) {
        this.computer._addRegion_token(node.nativeKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitNativeClause.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitNativeFunctionBody = function (node) {
        this.computer._addRegion_token(node.nativeKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitNativeFunctionBody.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitPartDirective = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitPartDirective.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitPartOfDirective = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_tokenStart_tokenEnd(node.partKeyword, node.ofKeyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitPartOfDirective.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitRethrowExpression = function (node) {
        this.computer._addRegion_token(node.rethrowKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitRethrowExpression.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitReturnStatement = function (node) {
        this.computer._addRegion_token(node.returnKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitReturnStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitShowCombinator = function (node) {
        this.computer._addRegion_token(node.keyword, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitShowCombinator.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitSimpleIdentifier = function (node) {
        this.computer._addIdentifierRegion(node);
        return _super.prototype.visitSimpleIdentifier.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitSimpleStringLiteral = function (node) {
        this.computer._addRegion_node(node, HighlightRegionType.LITERAL_STRING);
        return _super.prototype.visitSimpleStringLiteral.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitSuperConstructorInvocation = function (node) {
        this.computer._addRegion_token(node.superKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitSuperConstructorInvocation.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitSwitchCase = function (node) {
        this.computer._addRegion_token(node.keyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitSwitchCase.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitSwitchDefault = function (node) {
        this.computer._addRegion_token(node.keyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitSwitchDefault.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitSwitchStatement = function (node) {
        this.computer._addRegion_token(node.switchKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitSwitchStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitThisExpression = function (node) {
        this.computer._addRegion_token(node.thisKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitThisExpression.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitTryStatement = function (node) {
        this.computer._addRegion_token(node.tryKeyword, HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.finallyKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitTryStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitTypeName = function (node) {
        var type = node.type;
        if (type != null) {
            if (type.isDynamic && utils_1.op(utils_1.Op.EQUALS, node.name.name, "dynamic")) {
                this.computer._addRegion_node(node, HighlightRegionType.TYPE_NAME_DYNAMIC);
                return null;
            }
        }
        return _super.prototype.visitTypeName.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitVariableDeclarationList = function (node) {
        this.computer._addRegion_token(node.keyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitVariableDeclarationList.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitWhileStatement = function (node) {
        this.computer._addRegion_token(node.whileKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitWhileStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitWithClause = function (node) {
        this.computer._addRegion_token(node.withKeyword, HighlightRegionType.KEYWORD);
        return _super.prototype.visitWithClause.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype.visitYieldStatement = function (node) {
        var keyword = node.yieldKeyword;
        var star = node.star;
        var offset = keyword.offset;
        var end = star != null ? star.end : keyword.end;
        this.computer._addRegion(offset, end - offset, HighlightRegionType.BUILT_IN);
        return _super.prototype.visitYieldStatement.call(this, node);
    };
    _DartUnitHighlightsComputerVisitor2.prototype._addRegions_functionBody = function (node) {
        var keyword = node.keyword;
        if (keyword != null) {
            var star = node.star;
            var offset = keyword.offset;
            var end = star != null ? star.end : keyword.end;
            this.computer._addRegion(offset, end - offset, HighlightRegionType.BUILT_IN);
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DartUnitHighlightsComputerVisitor2.prototype, "_DartUnitHighlightsComputerVisitor2", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitAnnotation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitAsExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitAssertStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitAwaitExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitBlockFunctionBody", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitBooleanLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitBreakStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitCatchClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitClassDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitClassTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitConstructorDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitContinueStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitDoStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitDoubleLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitEnumDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitExportDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitExpressionFunctionBody", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitFieldDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitForEachStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitForStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitFunctionDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitFunctionTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitGenericFunctionType", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitGenericTypeAlias", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitHideCombinator", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitIfStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitImplementsClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitImportDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitInstanceCreationExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitIntegerLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitIsExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitLibraryDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitLibraryIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitListLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitMapLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitMethodDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitNativeClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitNativeFunctionBody", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitPartDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitPartOfDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitRethrowExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitReturnStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitShowCombinator", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitSimpleIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitSimpleStringLiteral", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitSuperConstructorInvocation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitSwitchCase", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitSwitchDefault", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitSwitchStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitThisExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitTryStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitTypeName", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitVariableDeclarationList", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitWhileStatement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitWithClause", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitHighlightsComputerVisitor2.prototype, "visitYieldStatement", null);
    _DartUnitHighlightsComputerVisitor2 = __decorate([
        utils_1.DartClass
    ], _DartUnitHighlightsComputerVisitor2);
    return _DartUnitHighlightsComputerVisitor2;
}(any));
exports._DartUnitHighlightsComputerVisitor2 = _DartUnitHighlightsComputerVisitor2;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=computer_highlights2.js.map
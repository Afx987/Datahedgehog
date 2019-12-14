/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_highlights2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartUnitHighlightsComputer2 {
    export type Constructors = 'DartUnitHighlightsComputer2';
    export type Interface = Omit<DartUnitHighlightsComputer2, Constructors>;
}
@DartClass
export class DartUnitHighlightsComputer2 {
    _unit : any;

    _regions : core.DartList<any>;

    constructor(_unit : any) {
    }
    @defaultConstructor
    DartUnitHighlightsComputer2(_unit : any) {
        this._regions = new core.DartList.literal<any>();
        this._unit = _unit;
    }
    compute() : core.DartList<any> {
        this._unit.accept(new _DartUnitHighlightsComputerVisitor2(this));
        this._addCommentRanges();
        return this._regions;
    }
    _addCommentRanges() : void {
        let token : any = this._unit.beginToken;
        while (token != null && token.type != TokenType.EOF){
            let commentToken : any = token.precedingComments;
            while (commentToken != null){
                let highlightType : any = null;
                if (op(Op.EQUALS,commentToken.type,TokenType.MULTI_LINE_COMMENT)) {
                    if (commentToken.lexeme.startsWith('/**')) {
                        highlightType = HighlightRegionType.COMMENT_DOCUMENTATION;
                    }else {
                        highlightType = HighlightRegionType.COMMENT_BLOCK;
                    }
                }
                if (op(Op.EQUALS,commentToken.type,TokenType.SINGLE_LINE_COMMENT)) {
                    highlightType = HighlightRegionType.COMMENT_END_OF_LINE;
                }
                if (highlightType != null) {
                    this._addRegion_token(commentToken,highlightType);
                }
                commentToken = commentToken.next;
            }
            token = token.next;
        }
    }
    _addIdentifierRegion(node : any) : void {
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
        this._addRegion_node(node,HighlightRegionType.IDENTIFIER_DEFAULT);
    }
    _addIdentifierRegion_annotation(node : any) : void {
        let arguments : any = node.arguments;
        if (op(Op.EQUALS,arguments,null)) {
            this._addRegion_node(node,HighlightRegionType.ANNOTATION);
        }else {
            this._addRegion_nodeStart_tokenEnd(node,arguments.beginToken,HighlightRegionType.ANNOTATION);
            this._addRegion_token(arguments.endToken,HighlightRegionType.ANNOTATION);
        }
    }
    _addIdentifierRegion_class(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        let classElement : any = element;
        let type : any;
        if (classElement.isEnum) {
            type = HighlightRegionType.ENUM;
        }else {
            type = HighlightRegionType.CLASS;
        }
        return this._addRegion_node(node,type);
    }
    _addIdentifierRegion_constructor(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node,HighlightRegionType.CONSTRUCTOR);
    }
    _addIdentifierRegion_dynamicLocal(node : any) : boolean {
        if (node.propagatedType != null) {
            return false;
        }
        let staticType : any = node.staticType;
        if (op(Op.EQUALS,staticType,null) || !staticType.isDynamic) {
            return false;
        }
        let element : any = node.staticElement;
        if (is(element, any)) {
            let type : any = node.inDeclarationContext() ? HighlightRegionType.DYNAMIC_LOCAL_VARIABLE_DECLARATION : HighlightRegionType.DYNAMIC_LOCAL_VARIABLE_REFERENCE;
            return this._addRegion_node(node,type);
        }
        if (is(element, any)) {
            let type : any = node.inDeclarationContext() ? HighlightRegionType.DYNAMIC_PARAMETER_DECLARATION : HighlightRegionType.DYNAMIC_PARAMETER_REFERENCE;
            return this._addRegion_node(node,type);
        }
        return false;
    }
    _addIdentifierRegion_field(node : any) : boolean {
        let element : any = node.bestElement;
        if (is(element, any)) {
            if (is(node.parent, any)) {
                element = (element as any).field;
            }
        }
        let type : any;
        if (is(element, any)) {
            let enclosingElement : any = element.enclosingElement;
            if (is(enclosingElement, any) && enclosingElement.isEnum) {
                type = HighlightRegionType.ENUM_CONSTANT;
            }else if (element.isStatic) {
                type = HighlightRegionType.STATIC_FIELD_DECLARATION;
            }else {
                type = node.inDeclarationContext() ? HighlightRegionType.INSTANCE_FIELD_DECLARATION : HighlightRegionType.INSTANCE_FIELD_REFERENCE;
            }
        }else if (is(element, any)) {
            type = HighlightRegionType.TOP_LEVEL_VARIABLE_DECLARATION;
        }
        if (is(element, any)) {
            let accessor : any = element;
            let enclosingElement : any = element.enclosingElement;
            if (is(accessor.variable, any)) {
                type = accessor.isGetter ? HighlightRegionType.TOP_LEVEL_GETTER_REFERENCE : HighlightRegionType.TOP_LEVEL_SETTER_REFERENCE;
            }else if (is(enclosingElement, any) && enclosingElement.isEnum) {
                type = HighlightRegionType.ENUM_CONSTANT;
            }else if (accessor.isStatic) {
                type = accessor.isGetter ? HighlightRegionType.STATIC_GETTER_REFERENCE : HighlightRegionType.STATIC_SETTER_REFERENCE;
            }else {
                type = accessor.isGetter ? HighlightRegionType.INSTANCE_GETTER_REFERENCE : HighlightRegionType.INSTANCE_SETTER_REFERENCE;
            }
        }
        if (type != null) {
            return this._addRegion_node(node,type);
        }
        return false;
    }
    _addIdentifierRegion_function(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        let type : any;
        let isTopLevel : boolean = is(element.enclosingElement, any);
        if (node.inDeclarationContext()) {
            type = isTopLevel ? HighlightRegionType.TOP_LEVEL_FUNCTION_DECLARATION : HighlightRegionType.LOCAL_FUNCTION_DECLARATION;
        }else {
            type = isTopLevel ? HighlightRegionType.TOP_LEVEL_FUNCTION_REFERENCE : HighlightRegionType.LOCAL_FUNCTION_REFERENCE;
        }
        return this._addRegion_node(node,type);
    }
    _addIdentifierRegion_functionTypeAlias(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node,HighlightRegionType.FUNCTION_TYPE_ALIAS);
    }
    _addIdentifierRegion_getterSetterDeclaration(node : any) : boolean {
        let parent : any = node.parent;
        if (!(is(parent, any) || is(parent, any))) {
            return false;
        }
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        let propertyAccessorElement : any = element as any;
        let isTopLevel : boolean = is(element.enclosingElement, any);
        let type : any;
        if (propertyAccessorElement.isGetter) {
            if (isTopLevel) {
                type = HighlightRegionType.TOP_LEVEL_GETTER_DECLARATION;
            }else if (propertyAccessorElement.isStatic) {
                type = HighlightRegionType.STATIC_GETTER_DECLARATION;
            }else {
                type = HighlightRegionType.INSTANCE_GETTER_DECLARATION;
            }
        }else {
            if (isTopLevel) {
                type = HighlightRegionType.TOP_LEVEL_SETTER_DECLARATION;
            }else if (propertyAccessorElement.isStatic) {
                type = HighlightRegionType.STATIC_SETTER_DECLARATION;
            }else {
                type = HighlightRegionType.INSTANCE_SETTER_DECLARATION;
            }
        }
        return this._addRegion_node(node,type);
    }
    _addIdentifierRegion_importPrefix(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node,HighlightRegionType.IMPORT_PREFIX);
    }
    _addIdentifierRegion_keyword(node : any) : boolean {
        let name : string = node.name;
        if (name == "void") {
            return this._addRegion_node(node,HighlightRegionType.KEYWORD);
        }
        return false;
    }
    _addIdentifierRegion_label(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node,HighlightRegionType.LABEL);
    }
    _addIdentifierRegion_localVariable(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        let type : any = node.inDeclarationContext() ? HighlightRegionType.LOCAL_VARIABLE_DECLARATION : HighlightRegionType.LOCAL_VARIABLE_REFERENCE;
        return this._addRegion_node(node,type);
    }
    _addIdentifierRegion_method(node : any) : boolean {
        let element : any = node.bestElement;
        if (isNot(element, any)) {
            return false;
        }
        let methodElement : any = element as any;
        let isStatic : boolean = methodElement.isStatic;
        let type : any;
        if (node.inDeclarationContext()) {
            if (isStatic) {
                type = HighlightRegionType.STATIC_METHOD_DECLARATION;
            }else {
                type = HighlightRegionType.INSTANCE_METHOD_DECLARATION;
            }
        }else {
            if (isStatic) {
                type = HighlightRegionType.STATIC_METHOD_REFERENCE;
            }else {
                type = HighlightRegionType.INSTANCE_METHOD_REFERENCE;
            }
        }
        return this._addRegion_node(node,type);
    }
    _addIdentifierRegion_parameter(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        let type : any = node.inDeclarationContext() ? HighlightRegionType.PARAMETER_DECLARATION : HighlightRegionType.PARAMETER_REFERENCE;
        return this._addRegion_node(node,type);
    }
    _addIdentifierRegion_typeParameter(node : any) : boolean {
        let element : any = node.staticElement;
        if (isNot(element, any)) {
            return false;
        }
        return this._addRegion_node(node,HighlightRegionType.TYPE_PARAMETER);
    }
    _addIdentifierRegion_unresolvedInstanceMemberReference(node : any) : boolean {
        let element : any = node.bestElement;
        if (element != null) {
            return false;
        }
        let decorate : boolean = false;
        let parent : any = node.parent;
        if (is(parent, any)) {
            let target : any = parent.realTarget;
            if (op(Op.EQUALS,parent.methodName,node) && target != null && DartUnitHighlightsComputer2._isDynamicExpression(target)) {
                decorate = true;
            }
        }else if (node.inGetterContext() || node.inSetterContext()) {
            if (is(parent, any)) {
                decorate = op(Op.EQUALS,parent.identifier,node);
            }else if (is(parent, any)) {
                decorate = op(Op.EQUALS,parent.propertyName,node);
            }
        }
        if (decorate) {
            this._addRegion_node(node,HighlightRegionType.UNRESOLVED_INSTANCE_MEMBER_REFERENCE);
            return true;
        }
        return false;
    }
    _addRegion(offset : number,length : number,type : any) : void {
        this._regions.add(new bare.createInstance(any,null,type,offset,length));
    }
    _addRegion_node(node : any,type : any) : boolean {
        let offset : number = node.offset;
        let length : number = node.length;
        this._addRegion(offset,length,type);
        return true;
    }
    _addRegion_nodeStart_tokenEnd(a : any,b : any,type : any) : void {
        let offset : number = a.offset;
        let end : number = b.end;
        this._addRegion(offset,end - offset,type);
    }
    _addRegion_token(token : any,type : any) : void {
        if (token != null) {
            let offset : number = token.offset;
            let length : number = token.length;
            this._addRegion(offset,length,type);
        }
    }
    _addRegion_tokenStart_tokenEnd(a : any,b : any,type : any) : void {
        let offset : number = a.offset;
        let end : number = b.end;
        this._addRegion(offset,end - offset,type);
    }
    static _isDynamicExpression(e : any) : boolean {
        if (is(e, any) && is(e.staticElement, any)) {
            return false;
        }
        return resolutionMap.bestTypeForExpression(e).isDynamic;
    }
}

export namespace _DartUnitHighlightsComputerVisitor2 {
    export type Constructors = '_DartUnitHighlightsComputerVisitor2';
    export type Interface = Omit<_DartUnitHighlightsComputerVisitor2, Constructors>;
}
@DartClass
export class _DartUnitHighlightsComputerVisitor2 extends any {
    computer : DartUnitHighlightsComputer2;

    constructor(computer : DartUnitHighlightsComputer2) {
    }
    @defaultConstructor
    _DartUnitHighlightsComputerVisitor2(computer : DartUnitHighlightsComputer2) {
        this.computer = computer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        this.computer._addIdentifierRegion_annotation(node);
        return super.visitAnnotation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : core.DartObject {
        this.computer._addRegion_token(node.asOperator,HighlightRegionType.BUILT_IN);
        return super.visitAsExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.assertKeyword,HighlightRegionType.KEYWORD);
        return super.visitAssertStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : core.DartObject {
        this.computer._addRegion_token(node.awaitKeyword,HighlightRegionType.BUILT_IN);
        return super.visitAwaitExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        this._addRegions_functionBody(node);
        return super.visitBlockFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.KEYWORD);
        this.computer._addRegion_node(node,HighlightRegionType.LITERAL_BOOLEAN);
        return super.visitBooleanLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.breakKeyword,HighlightRegionType.KEYWORD);
        return super.visitBreakStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        this.computer._addRegion_token(node.catchKeyword,HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.onKeyword,HighlightRegionType.BUILT_IN);
        return super.visitCatchClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        this.computer._addRegion_token(node.classKeyword,HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.abstractKeyword,HighlightRegionType.BUILT_IN);
        return super.visitClassDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        this.computer._addRegion_token(node.abstractKeyword,HighlightRegionType.BUILT_IN);
        return super.visitClassTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        this.computer._addRegion_token(node.externalKeyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.factoryKeyword,HighlightRegionType.BUILT_IN);
        return super.visitConstructorDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.continueKeyword,HighlightRegionType.KEYWORD);
        return super.visitContinueStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.doKeyword,HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.whileKeyword,HighlightRegionType.KEYWORD);
        return super.visitDoStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.LITERAL_DOUBLE);
        return super.visitDoubleLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        this.computer._addRegion_token(node.enumKeyword,HighlightRegionType.KEYWORD);
        return super.visitEnumDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword,HighlightRegionType.BUILT_IN);
        return super.visitExportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        this._addRegions_functionBody(node);
        return super.visitExpressionFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        this.computer._addRegion_token(node.staticKeyword,HighlightRegionType.BUILT_IN);
        return super.visitFieldDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.awaitKeyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.forKeyword,HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.inKeyword,HighlightRegionType.KEYWORD);
        return super.visitForEachStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.forKeyword,HighlightRegionType.KEYWORD);
        return super.visitForStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        this.computer._addRegion_token(node.externalKeyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.propertyKeyword,HighlightRegionType.BUILT_IN);
        return super.visitFunctionDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        this.computer._addRegion_token(node.typedefKeyword,HighlightRegionType.BUILT_IN);
        return super.visitFunctionTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        this.computer._addRegion_token(node.functionKeyword,HighlightRegionType.KEYWORD);
        return super.visitGenericFunctionType(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : core.DartObject {
        this.computer._addRegion_token(node.typedefKeyword,HighlightRegionType.KEYWORD);
        return super.visitGenericTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : core.DartObject {
        this.computer._addRegion_token(node.keyword,HighlightRegionType.BUILT_IN);
        return super.visitHideCombinator(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.ifKeyword,HighlightRegionType.KEYWORD);
        return super.visitIfStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : core.DartObject {
        this.computer._addRegion_token(node.implementsKeyword,HighlightRegionType.BUILT_IN);
        return super.visitImplementsClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.deferredKeyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.asKeyword,HighlightRegionType.BUILT_IN);
        return super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        this.computer._addRegion_token(node.keyword,HighlightRegionType.KEYWORD);
        return super.visitInstanceCreationExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.LITERAL_INTEGER);
        return super.visitIntegerLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : core.DartObject {
        this.computer._addRegion_token(node.isOperator,HighlightRegionType.KEYWORD);
        return super.visitIsExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword,HighlightRegionType.BUILT_IN);
        return super.visitLibraryDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.LIBRARY_NAME);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.LITERAL_LIST);
        this.computer._addRegion_token(node.constKeyword,HighlightRegionType.KEYWORD);
        return super.visitListLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.LITERAL_MAP);
        this.computer._addRegion_token(node.constKeyword,HighlightRegionType.KEYWORD);
        return super.visitMapLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        this.computer._addRegion_token(node.externalKeyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.modifierKeyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.operatorKeyword,HighlightRegionType.BUILT_IN);
        this.computer._addRegion_token(node.propertyKeyword,HighlightRegionType.BUILT_IN);
        return super.visitMethodDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : core.DartObject {
        this.computer._addRegion_token(node.nativeKeyword,HighlightRegionType.BUILT_IN);
        return super.visitNativeClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : core.DartObject {
        this.computer._addRegion_token(node.nativeKeyword,HighlightRegionType.BUILT_IN);
        return super.visitNativeFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_token(node.keyword,HighlightRegionType.BUILT_IN);
        return super.visitPartDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.DIRECTIVE);
        this.computer._addRegion_tokenStart_tokenEnd(node.partKeyword,node.ofKeyword,HighlightRegionType.BUILT_IN);
        return super.visitPartOfDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : core.DartObject {
        this.computer._addRegion_token(node.rethrowKeyword,HighlightRegionType.KEYWORD);
        return super.visitRethrowExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.returnKeyword,HighlightRegionType.KEYWORD);
        return super.visitReturnStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : core.DartObject {
        this.computer._addRegion_token(node.keyword,HighlightRegionType.BUILT_IN);
        return super.visitShowCombinator(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        this.computer._addIdentifierRegion(node);
        return super.visitSimpleIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : core.DartObject {
        this.computer._addRegion_node(node,HighlightRegionType.LITERAL_STRING);
        return super.visitSimpleStringLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        this.computer._addRegion_token(node.superKeyword,HighlightRegionType.KEYWORD);
        return super.visitSuperConstructorInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this.computer._addRegion_token(node.keyword,HighlightRegionType.KEYWORD);
        return super.visitSwitchCase(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this.computer._addRegion_token(node.keyword,HighlightRegionType.KEYWORD);
        return super.visitSwitchDefault(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.switchKeyword,HighlightRegionType.KEYWORD);
        return super.visitSwitchStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : core.DartObject {
        this.computer._addRegion_token(node.thisKeyword,HighlightRegionType.KEYWORD);
        return super.visitThisExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.tryKeyword,HighlightRegionType.KEYWORD);
        this.computer._addRegion_token(node.finallyKeyword,HighlightRegionType.KEYWORD);
        return super.visitTryStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        let type : any = node.type;
        if (type != null) {
            if (type.isDynamic && op(Op.EQUALS,node.name.name,"dynamic")) {
                this.computer._addRegion_node(node,HighlightRegionType.TYPE_NAME_DYNAMIC);
                return null;
            }
        }
        return super.visitTypeName(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : core.DartObject {
        this.computer._addRegion_token(node.keyword,HighlightRegionType.KEYWORD);
        return super.visitVariableDeclarationList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        this.computer._addRegion_token(node.whileKeyword,HighlightRegionType.KEYWORD);
        return super.visitWhileStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : core.DartObject {
        this.computer._addRegion_token(node.withKeyword,HighlightRegionType.KEYWORD);
        return super.visitWithClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : core.DartObject {
        let keyword : any = node.yieldKeyword;
        let star : any = node.star;
        let offset : number = keyword.offset;
        let end : number = star != null ? star.end : keyword.end;
        this.computer._addRegion(offset,end - offset,HighlightRegionType.BUILT_IN);
        return super.visitYieldStatement(node);
    }
    _addRegions_functionBody(node : any) : void {
        let keyword : any = node.keyword;
        if (keyword != null) {
            let star : any = node.star;
            let offset : number = keyword.offset;
            let end : number = star != null ? star.end : keyword.end;
            this.computer._addRegion(offset,end - offset,HighlightRegionType.BUILT_IN);
        }
    }
}

export class properties {
}

/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/ast/utilities.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace AstCloner {
    export type Constructors = 'AstCloner';
    export type Interface = Omit<AstCloner, Constructors>;
}
@DartClass
@Implements(any)
export class AstCloner implements any.Interface {
    cloneTokens : boolean;

    _clonedTokens : core.DartMap<any,any>;

    _nextToClone : any;

    _lastCloned : any;

    _lastClonedOffset : number;

    constructor(cloneTokens? : boolean) {
    }
    @defaultConstructor
    AstCloner(cloneTokens? : boolean) {
        cloneTokens = cloneTokens || false;
        this._clonedTokens = new core.DartMap.identity();
        this._lastClonedOffset = -1;
        this.cloneTokens = cloneTokens;
    }
    cloneNode(node : any) : any {
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        return node.accept(this) as any;
    }
    cloneNodeList(nodes : core.DartList<any>) : core.DartList<any> {
        let count : number = nodes.length;
        let clonedNodes : core.DartList<any> = new core.DartList<any>();
        for(let i : number = 0; i < count; i++){
            clonedNodes.add((nodes[i]).accept(this) as any);
        }
        return clonedNodes;
    }
    cloneToken(token : any) : any {
        if (this.cloneTokens) {
            if (op(Op.EQUALS,token,null)) {
                return null;
            }
            if (this._lastClonedOffset <= token.offset) {
                this._cloneTokens((this._nextToClone || token),token.offset);
            }
            let clone : any = this._clonedTokens.get(token);
            /* TODO (AssertStatementImpl) : assert (clone != null); */;
            return clone;
        }else {
            return token;
        }
    }
    cloneTokenList(tokens : core.DartList<any>) : core.DartList<any> {
        if (this.cloneTokens) {
            return tokens.map(this.cloneToken.bind(this)).toList();
        }
        return tokens;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : any {
        return astFactory.adjacentStrings(this.cloneNodeList(node.strings));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : any {
        return astFactory.annotation(this.cloneToken(node.atSign),this.cloneNode(node.name),this.cloneToken(node.period),this.cloneNode(node.constructorName),this.cloneNode(node.arguments));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : any {
        return astFactory.argumentList(this.cloneToken(node.leftParenthesis),this.cloneNodeList(node.arguments),this.cloneToken(node.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : any {
        return astFactory.asExpression(this.cloneNode(node.expression),this.cloneToken(node.asOperator),this.cloneNode(node.type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : any {
        return astFactory.assertInitializer(this.cloneToken(node.assertKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.condition),this.cloneToken(node.comma),this.cloneNode(node.message),this.cloneToken(node.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : any {
        return astFactory.assertStatement(this.cloneToken(node.assertKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.condition),this.cloneToken(node.comma),this.cloneNode(node.message),this.cloneToken(node.rightParenthesis),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : any {
        return astFactory.assignmentExpression(this.cloneNode(node.leftHandSide),this.cloneToken(node.operator),this.cloneNode(node.rightHandSide));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : any {
        return astFactory.awaitExpression(this.cloneToken(node.awaitKeyword),this.cloneNode(node.expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : any {
        return astFactory.binaryExpression(this.cloneNode(node.leftOperand),this.cloneToken(node.operator),this.cloneNode(node.rightOperand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : any {
        return astFactory.block(this.cloneToken(node.leftBracket),this.cloneNodeList(node.statements),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : any {
        return astFactory.blockFunctionBody(this.cloneToken(node.keyword),this.cloneToken(node.star),this.cloneNode(node.block));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : any {
        return astFactory.booleanLiteral(this.cloneToken(node.literal),node.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : any {
        return astFactory.breakStatement(this.cloneToken(node.breakKeyword),this.cloneNode(node.label),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : any {
        return astFactory.cascadeExpression(this.cloneNode(node.target),this.cloneNodeList(node.cascadeSections));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : any {
        return astFactory.catchClause(this.cloneToken(node.onKeyword),this.cloneNode(node.exceptionType),this.cloneToken(node.catchKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.exceptionParameter),this.cloneToken(node.comma),this.cloneNode(node.stackTraceParameter),this.cloneToken(node.rightParenthesis),this.cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : any {
        let copy : any = astFactory.classDeclaration(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.abstractKeyword),this.cloneToken(node.classKeyword),this.cloneNode(node.name),this.cloneNode(node.typeParameters),this.cloneNode(node.extendsClause),this.cloneNode(node.withClause),this.cloneNode(node.implementsClause),this.cloneToken(node.leftBracket),this.cloneNodeList(node.members),this.cloneToken(node.rightBracket));
        copy.nativeClause = this.cloneNode(node.nativeClause);
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : any {
        this.cloneToken(node.abstractKeyword);
        return astFactory.classTypeAlias(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.typedefKeyword),this.cloneNode(node.name),this.cloneNode(node.typeParameters),this.cloneToken(node.equals),this.cloneToken(node.abstractKeyword),this.cloneNode(node.superclass),this.cloneNode(node.withClause),this.cloneNode(node.implementsClause),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : any {
        if (node.isDocumentation) {
            return astFactory.documentationComment(this.cloneTokenList(node.tokens),this.cloneNodeList(node.references));
        }else if (node.isBlock) {
            return astFactory.blockComment(this.cloneTokenList(node.tokens));
        }
        return astFactory.endOfLineComment(this.cloneTokenList(node.tokens));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : any {
        return astFactory.commentReference(this.cloneToken(node.newKeyword),this.cloneNode(node.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : any {
        let clone : any = astFactory.compilationUnit(this.cloneToken(node.beginToken),this.cloneNode(node.scriptTag),this.cloneNodeList(node.directives),this.cloneNodeList(node.declarations),this.cloneToken(node.endToken));
        clone.lineInfo = node.lineInfo;
        return clone;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : any {
        return astFactory.conditionalExpression(this.cloneNode(node.condition),this.cloneToken(node.question),this.cloneNode(node.thenExpression),this.cloneToken(node.colon),this.cloneNode(node.elseExpression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConfiguration(node : any) : any {
        return astFactory.configuration(this.cloneToken(node.ifKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.name),this.cloneToken(node.equalToken),this.cloneNode(node.value),this.cloneToken(node.rightParenthesis),this.cloneNode(node.uri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : any {
        return astFactory.constructorDeclaration(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.externalKeyword),this.cloneToken(node.constKeyword),this.cloneToken(node.factoryKeyword),this.cloneNode(node.returnType),this.cloneToken(node.period),this.cloneNode(node.name),this.cloneNode(node.parameters),this.cloneToken(node.separator),this.cloneNodeList(node.initializers),this.cloneNode(node.redirectedConstructor),this.cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : any {
        return astFactory.constructorFieldInitializer(this.cloneToken(node.thisKeyword),this.cloneToken(node.period),this.cloneNode(node.fieldName),this.cloneToken(node.equals),this.cloneNode(node.expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : any {
        return astFactory.constructorName(this.cloneNode(node.type),this.cloneToken(node.period),this.cloneNode(node.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : any {
        return astFactory.continueStatement(this.cloneToken(node.continueKeyword),this.cloneNode(node.label),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : any {
        return astFactory.declaredIdentifier(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.keyword),this.cloneNode(node.type),this.cloneNode(node.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : any {
        return astFactory.defaultFormalParameter(this.cloneNode(node.parameter),node.kind,this.cloneToken(node.separator),this.cloneNode(node.defaultValue));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : any {
        return astFactory.doStatement(this.cloneToken(node.doKeyword),this.cloneNode(node.body),this.cloneToken(node.whileKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.condition),this.cloneToken(node.rightParenthesis),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDottedName(node : any) : any {
        return astFactory.dottedName(this.cloneNodeList(node.components));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : any {
        return astFactory.doubleLiteral(this.cloneToken(node.literal),node.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : any {
        return astFactory.emptyFunctionBody(this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : any {
        return astFactory.emptyStatement(this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumConstantDeclaration(node : any) : any {
        return astFactory.enumConstantDeclaration(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneNode(node.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : any {
        return astFactory.enumDeclaration(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.enumKeyword),this.cloneNode(node.name),this.cloneToken(node.leftBracket),this.cloneNodeList(node.constants),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : any {
        let directive : any = astFactory.exportDirective(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.keyword),this.cloneNode(node.uri),this.cloneNodeList(node.configurations),this.cloneNodeList(node.combinators),this.cloneToken(node.semicolon));
        directive.selectedUriContent = node.selectedUriContent;
        directive.selectedSource = node.selectedSource;
        directive.uriSource = node.uriSource;
        directive.uriContent = node.uriContent;
        return directive;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : any {
        return astFactory.expressionFunctionBody(this.cloneToken(node.keyword),this.cloneToken(node.functionDefinition),this.cloneNode(node.expression),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : any {
        return astFactory.expressionStatement(this.cloneNode(node.expression),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : any {
        return astFactory.extendsClause(this.cloneToken(node.extendsKeyword),this.cloneNode(node.superclass));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : any {
        return astFactory.fieldDeclaration2({
            comment : this.cloneNode(node.documentationComment),metadata : this.cloneNodeList(node.metadata),covariantKeyword : this.cloneToken(node.covariantKeyword),staticKeyword : this.cloneToken(node.staticKeyword),fieldList : this.cloneNode(node.fields),semicolon : this.cloneToken(node.semicolon)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : any {
        return astFactory.fieldFormalParameter2({
            comment : this.cloneNode(node.documentationComment),metadata : this.cloneNodeList(node.metadata),covariantKeyword : this.cloneToken(node.covariantKeyword),keyword : this.cloneToken(node.keyword),type : this.cloneNode(node.type),thisKeyword : this.cloneToken(node.thisKeyword),period : this.cloneToken(node.period),identifier : this.cloneNode(node.identifier),typeParameters : this.cloneNode(node.typeParameters),parameters : this.cloneNode(node.parameters)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : any {
        let loopVariable : any = node.loopVariable;
        if (op(Op.EQUALS,loopVariable,null)) {
            return astFactory.forEachStatementWithReference(this.cloneToken(node.awaitKeyword),this.cloneToken(node.forKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.identifier),this.cloneToken(node.inKeyword),this.cloneNode(node.iterable),this.cloneToken(node.rightParenthesis),this.cloneNode(node.body));
        }
        return astFactory.forEachStatementWithDeclaration(this.cloneToken(node.awaitKeyword),this.cloneToken(node.forKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(loopVariable),this.cloneToken(node.inKeyword),this.cloneNode(node.iterable),this.cloneToken(node.rightParenthesis),this.cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : any {
        return astFactory.formalParameterList(this.cloneToken(node.leftParenthesis),this.cloneNodeList(node.parameters),this.cloneToken(node.leftDelimiter),this.cloneToken(node.rightDelimiter),this.cloneToken(node.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : any {
        return astFactory.forStatement(this.cloneToken(node.forKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.variables),this.cloneNode(node.initialization),this.cloneToken(node.leftSeparator),this.cloneNode(node.condition),this.cloneToken(node.rightSeparator),this.cloneNodeList(node.updaters),this.cloneToken(node.rightParenthesis),this.cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : any {
        return astFactory.functionDeclaration(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.externalKeyword),this.cloneNode(node.returnType),this.cloneToken(node.propertyKeyword),this.cloneNode(node.name),this.cloneNode(node.functionExpression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : any {
        return astFactory.functionDeclarationStatement(this.cloneNode(node.functionDeclaration));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : any {
        return astFactory.functionExpression(this.cloneNode(node.typeParameters),this.cloneNode(node.parameters),this.cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : any {
        return astFactory.functionExpressionInvocation(this.cloneNode(node.function),this.cloneNode(node.typeArguments),this.cloneNode(node.argumentList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : any {
        return astFactory.functionTypeAlias(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.typedefKeyword),this.cloneNode(node.returnType),this.cloneNode(node.name),this.cloneNode(node.typeParameters),this.cloneNode(node.parameters),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : any {
        return astFactory.functionTypedFormalParameter2({
            comment : this.cloneNode(node.documentationComment),metadata : this.cloneNodeList(node.metadata),covariantKeyword : this.cloneToken(node.covariantKeyword),returnType : this.cloneNode(node.returnType),identifier : this.cloneNode(node.identifier),typeParameters : this.cloneNode(node.typeParameters),parameters : this.cloneNode(node.parameters)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : any {
        return astFactory.genericFunctionType(this.cloneNode(node.returnType),this.cloneToken(node.functionKeyword),this.cloneNode(node.typeParameters),this.cloneNode(node.parameters));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : any {
        return astFactory.genericTypeAlias(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.typedefKeyword),this.cloneNode(node.name),this.cloneNode(node.typeParameters),this.cloneToken(node.equals),this.cloneNode(node.functionType),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : any {
        return astFactory.hideCombinator(this.cloneToken(node.keyword),this.cloneNodeList(node.hiddenNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : any {
        return astFactory.ifStatement(this.cloneToken(node.ifKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.condition),this.cloneToken(node.rightParenthesis),this.cloneNode(node.thenStatement),this.cloneToken(node.elseKeyword),this.cloneNode(node.elseStatement));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : any {
        return astFactory.implementsClause(this.cloneToken(node.implementsKeyword),this.cloneNodeList(node.interfaces));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : any {
        let directive : any = astFactory.importDirective(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.keyword),this.cloneNode(node.uri),this.cloneNodeList(node.configurations),this.cloneToken(node.deferredKeyword),this.cloneToken(node.asKeyword),this.cloneNode(node.prefix),this.cloneNodeList(node.combinators),this.cloneToken(node.semicolon));
        directive.selectedUriContent = node.selectedUriContent;
        directive.selectedSource = node.selectedSource;
        directive.uriSource = node.uriSource;
        directive.uriContent = node.uriContent;
        return directive;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : any {
        let period : any = node.period;
        if (op(Op.EQUALS,period,null)) {
            return astFactory.indexExpressionForTarget(this.cloneNode(node.target),this.cloneToken(node.leftBracket),this.cloneNode(node.index),this.cloneToken(node.rightBracket));
        }else {
            return astFactory.indexExpressionForCascade(this.cloneToken(period),this.cloneToken(node.leftBracket),this.cloneNode(node.index),this.cloneToken(node.rightBracket));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : any {
        return astFactory.instanceCreationExpression(this.cloneToken(node.keyword),this.cloneNode(node.constructorName),this.cloneNode(node.argumentList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : any {
        return astFactory.integerLiteral(this.cloneToken(node.literal),node.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : any {
        return astFactory.interpolationExpression(this.cloneToken(node.leftBracket),this.cloneNode(node.expression),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : any {
        return astFactory.interpolationString(this.cloneToken(node.contents),node.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : any {
        return astFactory.isExpression(this.cloneNode(node.expression),this.cloneToken(node.isOperator),this.cloneToken(node.notOperator),this.cloneNode(node.type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : any {
        return astFactory.label(this.cloneNode(node.label),this.cloneToken(node.colon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : any {
        return astFactory.labeledStatement(this.cloneNodeList(node.labels),this.cloneNode(node.statement));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : any {
        return astFactory.libraryDirective(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.libraryKeyword),this.cloneNode(node.name),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : any {
        return astFactory.libraryIdentifier(this.cloneNodeList(node.components));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : any {
        return astFactory.listLiteral(this.cloneToken(node.constKeyword),this.cloneNode(node.typeArguments),this.cloneToken(node.leftBracket),this.cloneNodeList(node.elements),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : any {
        return astFactory.mapLiteral(this.cloneToken(node.constKeyword),this.cloneNode(node.typeArguments),this.cloneToken(node.leftBracket),this.cloneNodeList(node.entries),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : any {
        return astFactory.mapLiteralEntry(this.cloneNode(node.key),this.cloneToken(node.separator),this.cloneNode(node.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : any {
        return astFactory.methodDeclaration(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.externalKeyword),this.cloneToken(node.modifierKeyword),this.cloneNode(node.returnType),this.cloneToken(node.propertyKeyword),this.cloneToken(node.operatorKeyword),this.cloneNode(node.name),this.cloneNode(node.typeParameters),this.cloneNode(node.parameters),this.cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : any {
        return astFactory.methodInvocation(this.cloneNode(node.target),this.cloneToken(node.operator),this.cloneNode(node.methodName),this.cloneNode(node.typeArguments),this.cloneNode(node.argumentList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : any {
        return astFactory.namedExpression(this.cloneNode(node.name),this.cloneNode(node.expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : any {
        return astFactory.nativeClause(this.cloneToken(node.nativeKeyword),this.cloneNode(node.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : any {
        return astFactory.nativeFunctionBody(this.cloneToken(node.nativeKeyword),this.cloneNode(node.stringLiteral),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : any {
        return astFactory.nullLiteral(this.cloneToken(node.literal));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : any {
        return astFactory.parenthesizedExpression(this.cloneToken(node.leftParenthesis),this.cloneNode(node.expression),this.cloneToken(node.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : any {
        let directive : any = astFactory.partDirective(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.partKeyword),this.cloneNode(node.uri),this.cloneToken(node.semicolon));
        directive.uriSource = node.uriSource;
        directive.uriContent = node.uriContent;
        return directive;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : any {
        return astFactory.partOfDirective(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.partKeyword),this.cloneToken(node.ofKeyword),this.cloneNode(node.uri),this.cloneNode(node.libraryName),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : any {
        return astFactory.postfixExpression(this.cloneNode(node.operand),this.cloneToken(node.operator));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : any {
        return astFactory.prefixedIdentifier(this.cloneNode(node.prefix),this.cloneToken(node.period),this.cloneNode(node.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : any {
        return astFactory.prefixExpression(this.cloneToken(node.operator),this.cloneNode(node.operand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : any {
        return astFactory.propertyAccess(this.cloneNode(node.target),this.cloneToken(node.operator),this.cloneNode(node.propertyName));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : any {
        return astFactory.redirectingConstructorInvocation(this.cloneToken(node.thisKeyword),this.cloneToken(node.period),this.cloneNode(node.constructorName),this.cloneNode(node.argumentList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : any {
        return astFactory.rethrowExpression(this.cloneToken(node.rethrowKeyword));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : any {
        return astFactory.returnStatement(this.cloneToken(node.returnKeyword),this.cloneNode(node.expression),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitScriptTag(node : any) : any {
        return astFactory.scriptTag(this.cloneToken(node.scriptTag));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : any {
        return astFactory.showCombinator(this.cloneToken(node.keyword),this.cloneNodeList(node.shownNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : any {
        return astFactory.simpleFormalParameter2({
            comment : this.cloneNode(node.documentationComment),metadata : this.cloneNodeList(node.metadata),covariantKeyword : this.cloneToken(node.covariantKeyword),keyword : this.cloneToken(node.keyword),type : this.cloneNode(node.type),identifier : this.cloneNode(node.identifier)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : any {
        return astFactory.simpleIdentifier(this.cloneToken(node.token),{
            isDeclaration : node.inDeclarationContext()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : any {
        return astFactory.simpleStringLiteral(this.cloneToken(node.literal),node.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : any {
        return astFactory.stringInterpolation(this.cloneNodeList(node.elements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : any {
        return astFactory.superConstructorInvocation(this.cloneToken(node.superKeyword),this.cloneToken(node.period),this.cloneNode(node.constructorName),this.cloneNode(node.argumentList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : any {
        return astFactory.superExpression(this.cloneToken(node.superKeyword));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : any {
        return astFactory.switchCase(this.cloneNodeList(node.labels),this.cloneToken(node.keyword),this.cloneNode(node.expression),this.cloneToken(node.colon),this.cloneNodeList(node.statements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : any {
        return astFactory.switchDefault(this.cloneNodeList(node.labels),this.cloneToken(node.keyword),this.cloneToken(node.colon),this.cloneNodeList(node.statements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : any {
        return astFactory.switchStatement(this.cloneToken(node.switchKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.expression),this.cloneToken(node.rightParenthesis),this.cloneToken(node.leftBracket),this.cloneNodeList(node.members),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : any {
        return astFactory.symbolLiteral(this.cloneToken(node.poundSign),this.cloneTokenList(node.components));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : any {
        return astFactory.thisExpression(this.cloneToken(node.thisKeyword));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : any {
        return astFactory.throwExpression(this.cloneToken(node.throwKeyword),this.cloneNode(node.expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : any {
        return astFactory.topLevelVariableDeclaration(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneNode(node.variables),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : any {
        return astFactory.tryStatement(this.cloneToken(node.tryKeyword),this.cloneNode(node.body),this.cloneNodeList(node.catchClauses),this.cloneToken(node.finallyKeyword),this.cloneNode(node.finallyBlock));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : any {
        return astFactory.typeArgumentList(this.cloneToken(node.leftBracket),this.cloneNodeList(node.arguments),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : any {
        return astFactory.typeName(this.cloneNode(node.name),this.cloneNode(node.typeArguments));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : any {
        return astFactory.typeParameter(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneNode(node.name),this.cloneToken(node.extendsKeyword),this.cloneNode(node.bound));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : any {
        return astFactory.typeParameterList(this.cloneToken(node.leftBracket),this.cloneNodeList(node.typeParameters),this.cloneToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : any {
        return astFactory.variableDeclaration(this.cloneNode(node.name),this.cloneToken(node.equals),this.cloneNode(node.initializer));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : any {
        return astFactory.variableDeclarationList(this.cloneNode(node.documentationComment),this.cloneNodeList(node.metadata),this.cloneToken(node.keyword),this.cloneNode(node.type),this.cloneNodeList(node.variables));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : any {
        return astFactory.variableDeclarationStatement(this.cloneNode(node.variables),this.cloneToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : any {
        return astFactory.whileStatement(this.cloneToken(node.whileKeyword),this.cloneToken(node.leftParenthesis),this.cloneNode(node.condition),this.cloneToken(node.rightParenthesis),this.cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : any {
        return astFactory.withClause(this.cloneToken(node.withKeyword),this.cloneNodeList(node.mixinTypes));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : any {
        return astFactory.yieldStatement(this.cloneToken(node.yieldKeyword),this.cloneToken(node.star),this.cloneNode(node.expression),this.cloneToken(node.semicolon));
    }
    _cloneTokens(token : any,stopAfter : number) : void {
        if (op(Op.EQUALS,token,null)) {
            return;
        }
        var nonComment : (token : any) => any = (token : any) : any =>  {
            return is(token, any) ? token.parent : token;
        };
        token = nonComment(token);
        if (op(Op.EQUALS,this._lastCloned,null)) {
            this._lastCloned = new bare.createInstance(any,null,TokenType.EOF,-1);
            this._lastCloned.setNext(this._lastCloned);
        }
        while (token != null){
            let clone : any = token.copy();
            {
                let c1 : any = token.precedingComments;
                let c2 : any = clone.precedingComments;
                while (c1 != null && c2 != null){
                    this._clonedTokens.set(c1,c2);
                    if (is(c1, any) && is(c2, any)) {
                        for(let i : number = 0; i < c1.references.length; i++){
                            this._clonedTokens.set(op(Op.INDEX,c1.references,i),op(Op.INDEX,c2.references,i));
                        }
                    }
                    c1 = c1.next;
                    c2 = c2.next;
                }
            }
            this._clonedTokens.set(token,clone);
            this._lastCloned.setNext(clone);
            this._lastCloned = clone;
            if (op(Op.EQUALS,token.type,TokenType.EOF)) {
                break;
            }
            if (op(Op.GT,token.offset,stopAfter)) {
                this._nextToClone = token.next;
                this._lastClonedOffset = token.offset;
                break;
            }
            token = token.next;
        }
    }
    static clone(node : any) : any {
        return node.accept(new AstCloner());
    }
}

export namespace AstComparator {
    export type Constructors = 'AstComparator';
    export type Interface = Omit<AstComparator, Constructors>;
}
@DartClass
@Implements(any)
export class AstComparator implements any.Interface {
    _other : any;

    failDifferentLength(first : core.DartList<any>,second : core.DartList<any>) : boolean {
        return false;
    }
    failIfNotNull(first : core.DartObject,second : core.DartObject) : boolean {
        return op(Op.EQUALS,second,null);
    }
    failIsNull(first : core.DartObject,second : core.DartObject) : boolean {
        return false;
    }
    failRuntimeType(first : core.DartObject,second : core.DartObject) : boolean {
        return false;
    }
    isEqualNodes(first : any,second : any) : boolean {
        if (op(Op.EQUALS,first,null)) {
            return this.failIfNotNull(first,second);
        }else if (op(Op.EQUALS,second,null)) {
            return this.failIsNull(first,second);
        }else if (first.runtimeType != second.runtimeType) {
            return this.failRuntimeType(first,second);
        }
        this._other = second;
        return first.accept(this);
    }
    isEqualTokens(first : any,second : any) : boolean {
        if (op(Op.EQUALS,first,null)) {
            return this.failIfNotNull(first,second);
        }else if (op(Op.EQUALS,second,null)) {
            return this.failIsNull(first,second);
        }else if (core.identical(first,second)) {
            return true;
        }
        return this.isEqualTokensNotNull(first,second);
    }
    isEqualTokensNotNull(first : any,second : any) : boolean {
        return op(Op.EQUALS,first.offset,second.offset) && op(Op.EQUALS,first.length,second.length) && op(Op.EQUALS,first.lexeme,second.lexeme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.strings,other.strings);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.atSign,other.atSign) && this.isEqualNodes(node.name,other.name) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.constructorName,other.constructorName) && this.isEqualNodes(node.arguments,other.arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this._isEqualNodeLists(node.arguments,other.arguments) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.asOperator,other.asOperator) && this.isEqualNodes(node.type,other.type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.assertKeyword,other.assertKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.condition,other.condition) && this.isEqualTokens(node.comma,other.comma) && this.isEqualNodes(node.message,other.message) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.assertKeyword,other.assertKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.condition,other.condition) && this.isEqualTokens(node.comma,other.comma) && this.isEqualNodes(node.message,other.message) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.leftHandSide,other.leftHandSide) && this.isEqualTokens(node.operator,other.operator) && this.isEqualNodes(node.rightHandSide,other.rightHandSide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.awaitKeyword,other.awaitKeyword) && this.isEqualNodes(node.expression,other.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.leftOperand,other.leftOperand) && this.isEqualTokens(node.operator,other.operator) && this.isEqualNodes(node.rightOperand,other.rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.statements,other.statements) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.block,other.block);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.literal,other.literal) && op(Op.EQUALS,node.value,other.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.breakKeyword,other.breakKeyword) && this.isEqualNodes(node.label,other.label) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.target,other.target) && this._isEqualNodeLists(node.cascadeSections,other.cascadeSections);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.onKeyword,other.onKeyword) && this.isEqualNodes(node.exceptionType,other.exceptionType) && this.isEqualTokens(node.catchKeyword,other.catchKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.exceptionParameter,other.exceptionParameter) && this.isEqualTokens(node.comma,other.comma) && this.isEqualNodes(node.stackTraceParameter,other.stackTraceParameter) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualNodes(node.body,other.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.abstractKeyword,other.abstractKeyword) && this.isEqualTokens(node.classKeyword,other.classKeyword) && this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.typeParameters,other.typeParameters) && this.isEqualNodes(node.extendsClause,other.extendsClause) && this.isEqualNodes(node.withClause,other.withClause) && this.isEqualNodes(node.implementsClause,other.implementsClause) && this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.members,other.members) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.typedefKeyword,other.typedefKeyword) && this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.typeParameters,other.typeParameters) && this.isEqualTokens(node.equals,other.equals) && this.isEqualTokens(node.abstractKeyword,other.abstractKeyword) && this.isEqualNodes(node.superclass,other.superclass) && this.isEqualNodes(node.withClause,other.withClause) && this.isEqualNodes(node.implementsClause,other.implementsClause) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.references,other.references);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.newKeyword,other.newKeyword) && this.isEqualNodes(node.identifier,other.identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.beginToken,other.beginToken) && this.isEqualNodes(node.scriptTag,other.scriptTag) && this._isEqualNodeLists(node.directives,other.directives) && this._isEqualNodeLists(node.declarations,other.declarations) && this.isEqualTokens(node.endToken,other.endToken);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.condition,other.condition) && this.isEqualTokens(node.question,other.question) && this.isEqualNodes(node.thenExpression,other.thenExpression) && this.isEqualTokens(node.colon,other.colon) && this.isEqualNodes(node.elseExpression,other.elseExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConfiguration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.ifKeyword,other.ifKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.name,other.name) && this.isEqualTokens(node.equalToken,other.equalToken) && this.isEqualNodes(node.value,other.value) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualNodes(node.uri,other.uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.externalKeyword,other.externalKeyword) && this.isEqualTokens(node.constKeyword,other.constKeyword) && this.isEqualTokens(node.factoryKeyword,other.factoryKeyword) && this.isEqualNodes(node.returnType,other.returnType) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.parameters,other.parameters) && this.isEqualTokens(node.separator,other.separator) && this._isEqualNodeLists(node.initializers,other.initializers) && this.isEqualNodes(node.redirectedConstructor,other.redirectedConstructor) && this.isEqualNodes(node.body,other.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.thisKeyword,other.thisKeyword) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.fieldName,other.fieldName) && this.isEqualTokens(node.equals,other.equals) && this.isEqualNodes(node.expression,other.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.type,other.type) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.name,other.name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.continueKeyword,other.continueKeyword) && this.isEqualNodes(node.label,other.label) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.type,other.type) && this.isEqualNodes(node.identifier,other.identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.parameter,other.parameter) && op(Op.EQUALS,node.kind,other.kind) && this.isEqualTokens(node.separator,other.separator) && this.isEqualNodes(node.defaultValue,other.defaultValue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.doKeyword,other.doKeyword) && this.isEqualNodes(node.body,other.body) && this.isEqualTokens(node.whileKeyword,other.whileKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.condition,other.condition) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDottedName(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.components,other.components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.literal,other.literal) && op(Op.EQUALS,node.value,other.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumConstantDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualNodes(node.name,other.name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.enumKeyword,other.enumKeyword) && this.isEqualNodes(node.name,other.name) && this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.constants,other.constants) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.uri,other.uri) && this._isEqualNodeLists(node.combinators,other.combinators) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.functionDefinition,other.functionDefinition) && this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.extendsKeyword,other.extendsKeyword) && this.isEqualNodes(node.superclass,other.superclass);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.staticKeyword,other.staticKeyword) && this.isEqualNodes(node.fields,other.fields) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.type,other.type) && this.isEqualTokens(node.thisKeyword,other.thisKeyword) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.identifier,other.identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.forKeyword,other.forKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.loopVariable,other.loopVariable) && this.isEqualTokens(node.inKeyword,other.inKeyword) && this.isEqualNodes(node.iterable,other.iterable) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualNodes(node.body,other.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this._isEqualNodeLists(node.parameters,other.parameters) && this.isEqualTokens(node.leftDelimiter,other.leftDelimiter) && this.isEqualTokens(node.rightDelimiter,other.rightDelimiter) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.forKeyword,other.forKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.variables,other.variables) && this.isEqualNodes(node.initialization,other.initialization) && this.isEqualTokens(node.leftSeparator,other.leftSeparator) && this.isEqualNodes(node.condition,other.condition) && this.isEqualTokens(node.rightSeparator,other.rightSeparator) && this._isEqualNodeLists(node.updaters,other.updaters) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualNodes(node.body,other.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.externalKeyword,other.externalKeyword) && this.isEqualNodes(node.returnType,other.returnType) && this.isEqualTokens(node.propertyKeyword,other.propertyKeyword) && this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.functionExpression,other.functionExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.functionDeclaration,other.functionDeclaration);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.parameters,other.parameters) && this.isEqualNodes(node.body,other.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.function,other.function) && this.isEqualNodes(node.argumentList,other.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.typedefKeyword,other.typedefKeyword) && this.isEqualNodes(node.returnType,other.returnType) && this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.typeParameters,other.typeParameters) && this.isEqualNodes(node.parameters,other.parameters) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualNodes(node.returnType,other.returnType) && this.isEqualNodes(node.identifier,other.identifier) && this.isEqualNodes(node.parameters,other.parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.returnType,other.returnType) && this.isEqualTokens(node.functionKeyword,other.functionKeyword) && this.isEqualNodes(node.typeParameters,other.typeParameters) && this.isEqualNodes(node.parameters,other.parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.typedefKeyword,other.typedefKeyword) && this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.typeParameters,other.typeParameters) && this.isEqualTokens(node.equals,other.equals) && this.isEqualNodes(node.functionType,other.functionType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.keyword,other.keyword) && this._isEqualNodeLists(node.hiddenNames,other.hiddenNames);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.ifKeyword,other.ifKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.condition,other.condition) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualNodes(node.thenStatement,other.thenStatement) && this.isEqualTokens(node.elseKeyword,other.elseKeyword) && this.isEqualNodes(node.elseStatement,other.elseStatement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.implementsKeyword,other.implementsKeyword) && this._isEqualNodeLists(node.interfaces,other.interfaces);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.uri,other.uri) && this.isEqualTokens(node.deferredKeyword,other.deferredKeyword) && this.isEqualTokens(node.asKeyword,other.asKeyword) && this.isEqualNodes(node.prefix,other.prefix) && this._isEqualNodeLists(node.combinators,other.combinators) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.target,other.target) && this.isEqualTokens(node.leftBracket,other.leftBracket) && this.isEqualNodes(node.index,other.index) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.constructorName,other.constructorName) && this.isEqualNodes(node.argumentList,other.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.literal,other.literal) && (op(Op.EQUALS,node.value,other.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.leftBracket,other.leftBracket) && this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.contents,other.contents) && op(Op.EQUALS,node.value,other.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.isOperator,other.isOperator) && this.isEqualTokens(node.notOperator,other.notOperator) && this.isEqualNodes(node.type,other.type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.label,other.label) && this.isEqualTokens(node.colon,other.colon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.labels,other.labels) && this.isEqualNodes(node.statement,other.statement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.libraryKeyword,other.libraryKeyword) && this.isEqualNodes(node.name,other.name) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.components,other.components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.constKeyword,other.constKeyword) && this.isEqualNodes(node.typeArguments,other.typeArguments) && this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.elements,other.elements) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.constKeyword,other.constKeyword) && this.isEqualNodes(node.typeArguments,other.typeArguments) && this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.entries,other.entries) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.key,other.key) && this.isEqualTokens(node.separator,other.separator) && this.isEqualNodes(node.value,other.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.externalKeyword,other.externalKeyword) && this.isEqualTokens(node.modifierKeyword,other.modifierKeyword) && this.isEqualNodes(node.returnType,other.returnType) && this.isEqualTokens(node.propertyKeyword,other.propertyKeyword) && this.isEqualTokens(node.propertyKeyword,other.propertyKeyword) && this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.parameters,other.parameters) && this.isEqualNodes(node.body,other.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.target,other.target) && this.isEqualTokens(node.operator,other.operator) && this.isEqualNodes(node.methodName,other.methodName) && this.isEqualNodes(node.argumentList,other.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.expression,other.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.nativeKeyword,other.nativeKeyword) && this.isEqualNodes(node.name,other.name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.nativeKeyword,other.nativeKeyword) && this.isEqualNodes(node.stringLiteral,other.stringLiteral) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.literal,other.literal);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.partKeyword,other.partKeyword) && this.isEqualNodes(node.uri,other.uri) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.partKeyword,other.partKeyword) && this.isEqualTokens(node.ofKeyword,other.ofKeyword) && this.isEqualNodes(node.libraryName,other.libraryName) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.operand,other.operand) && this.isEqualTokens(node.operator,other.operator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.prefix,other.prefix) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.identifier,other.identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.operator,other.operator) && this.isEqualNodes(node.operand,other.operand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.target,other.target) && this.isEqualTokens(node.operator,other.operator) && this.isEqualNodes(node.propertyName,other.propertyName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.thisKeyword,other.thisKeyword) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.constructorName,other.constructorName) && this.isEqualNodes(node.argumentList,other.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.rethrowKeyword,other.rethrowKeyword);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.returnKeyword,other.returnKeyword) && this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitScriptTag(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.scriptTag,other.scriptTag);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.keyword,other.keyword) && this._isEqualNodeLists(node.shownNames,other.shownNames);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.type,other.type) && this.isEqualNodes(node.identifier,other.identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.token,other.token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.literal,other.literal) && (op(Op.EQUALS,node.value,other.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.elements,other.elements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.superKeyword,other.superKeyword) && this.isEqualTokens(node.period,other.period) && this.isEqualNodes(node.constructorName,other.constructorName) && this.isEqualNodes(node.argumentList,other.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.superKeyword,other.superKeyword);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.labels,other.labels) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.colon,other.colon) && this._isEqualNodeLists(node.statements,other.statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : boolean {
        let other : any = this._other as any;
        return this._isEqualNodeLists(node.labels,other.labels) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualTokens(node.colon,other.colon) && this._isEqualNodeLists(node.statements,other.statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.switchKeyword,other.switchKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.members,other.members) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.poundSign,other.poundSign) && this._isEqualTokenLists(node.components,other.components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.thisKeyword,other.thisKeyword);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.throwKeyword,other.throwKeyword) && this.isEqualNodes(node.expression,other.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualNodes(node.variables,other.variables) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.tryKeyword,other.tryKeyword) && this.isEqualNodes(node.body,other.body) && this._isEqualNodeLists(node.catchClauses,other.catchClauses) && this.isEqualTokens(node.finallyKeyword,other.finallyKeyword) && this.isEqualNodes(node.finallyBlock,other.finallyBlock);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.arguments,other.arguments) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.name,other.name) && this.isEqualNodes(node.typeArguments,other.typeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualNodes(node.name,other.name) && this.isEqualTokens(node.extendsKeyword,other.extendsKeyword) && this.isEqualNodes(node.bound,other.bound);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.leftBracket,other.leftBracket) && this._isEqualNodeLists(node.typeParameters,other.typeParameters) && this.isEqualTokens(node.rightBracket,other.rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualNodes(node.name,other.name) && this.isEqualTokens(node.equals,other.equals) && this.isEqualNodes(node.initializer,other.initializer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.documentationComment,other.documentationComment) && this._isEqualNodeLists(node.metadata,other.metadata) && this.isEqualTokens(node.keyword,other.keyword) && this.isEqualNodes(node.type,other.type) && this._isEqualNodeLists(node.variables,other.variables);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualNodes(node.variables,other.variables) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.whileKeyword,other.whileKeyword) && this.isEqualTokens(node.leftParenthesis,other.leftParenthesis) && this.isEqualNodes(node.condition,other.condition) && this.isEqualTokens(node.rightParenthesis,other.rightParenthesis) && this.isEqualNodes(node.body,other.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.withKeyword,other.withKeyword) && this._isEqualNodeLists(node.mixinTypes,other.mixinTypes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : boolean {
        let other : any = this._other as any;
        return this.isEqualTokens(node.yieldKeyword,other.yieldKeyword) && this.isEqualNodes(node.expression,other.expression) && this.isEqualTokens(node.semicolon,other.semicolon);
    }
    _isEqualNodeLists(first : any,second : any) : boolean {
        if (op(Op.EQUALS,first,null)) {
            return this.failIfNotNull(first,second);
        }else if (op(Op.EQUALS,second,null)) {
            return this.failIsNull(first,second);
        }
        let size : number = first.length;
        if (second.length != size) {
            return this.failDifferentLength(first,second);
        }
        for(let i : number = 0; i < size; i++){
            if (!this.isEqualNodes(op(Op.INDEX,first,i),op(Op.INDEX,second,i))) {
                return false;
            }
        }
        return true;
    }
    _isEqualTokenLists(first : core.DartList<any>,second : core.DartList<any>) : boolean {
        let length : number = first.length;
        if (second.length != length) {
            return this.failDifferentLength(first,second);
        }
        for(let i : number = 0; i < length; i++){
            if (!this.isEqualTokens(first[i],second[i])) {
                return false;
            }
        }
        return true;
    }
    static equalNodes(first : any,second : any) : boolean {
        let comparator : AstComparator = new AstComparator();
        return comparator.isEqualNodes(first,second);
    }
    constructor() {
    }
    @defaultConstructor
    AstComparator() {
    }
}

export namespace ConstantEvaluator {
    export type Constructors = 'ConstantEvaluator';
    export type Interface = Omit<ConstantEvaluator, Constructors>;
}
@DartClass
export class ConstantEvaluator extends any {
    private static __$NOT_A_CONSTANT : core.DartObject;
    static get NOT_A_CONSTANT() : core.DartObject { 
        if (this.__$NOT_A_CONSTANT===undefined) {
            this.__$NOT_A_CONSTANT = new core.DartObject();
        }
        return this.__$NOT_A_CONSTANT;
    }
    static set NOT_A_CONSTANT(__$value : core.DartObject)  { 
        this.__$NOT_A_CONSTANT = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : core.DartObject {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        for(let string of node.strings) {
            let value : core.DartObject = string.accept(this);
            if (core.identical(value,ConstantEvaluator.NOT_A_CONSTANT)) {
                return value;
            }
            buffer.write(value);
        }
        return buffer.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        let leftOperand : core.DartObject = node.leftOperand.accept(this);
        if (core.identical(leftOperand,ConstantEvaluator.NOT_A_CONSTANT)) {
            return leftOperand;
        }
        let rightOperand : core.DartObject = node.rightOperand.accept(this);
        if (core.identical(rightOperand,ConstantEvaluator.NOT_A_CONSTANT)) {
            return rightOperand;
        }
        while (true){
            if (op(Op.EQUALS,node.operator.type,TokenType.AMPERSAND)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand & rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.AMPERSAND_AMPERSAND)) {
                if (is(leftOperand, "boolean") && is(rightOperand, "boolean")) {
                    return leftOperand && rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.BANG_EQ)) {
                if (is(leftOperand, "boolean") && is(rightOperand, "boolean")) {
                    return leftOperand != rightOperand;
                }else if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand != rightOperand;
                }else if (is(leftOperand, "string") && is(rightOperand, "string")) {
                    return leftOperand != rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.BAR)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand | rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.BAR_BAR)) {
                if (is(leftOperand, "boolean") && is(rightOperand, "boolean")) {
                    return leftOperand || rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.CARET)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand ^ rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.EQ_EQ)) {
                if (is(leftOperand, "boolean") && is(rightOperand, "boolean")) {
                    return leftOperand == rightOperand;
                }else if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand == rightOperand;
                }else if (is(leftOperand, "string") && is(rightOperand, "string")) {
                    return leftOperand == rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.GT)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return new core.DartNumber(leftOperand).compareTo(rightOperand) > 0;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.GT_EQ)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return new core.DartNumber(leftOperand).compareTo(rightOperand) >= 0;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.GT_GT)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand >> rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.LT)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return new core.DartNumber(leftOperand).compareTo(rightOperand) < 0;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.LT_EQ)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return new core.DartNumber(leftOperand).compareTo(rightOperand) <= 0;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.LT_LT)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand << rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.MINUS)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand - rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.PERCENT)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return new core.DartNumber(leftOperand).remainder(rightOperand);
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.PLUS)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand + rightOperand;
                }
                if (is(leftOperand, "string") && is(rightOperand, "string")) {
                    return leftOperand + rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.STAR)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand * rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.SLASH)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return leftOperand / rightOperand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.TILDE_SLASH)) {
                if (is(leftOperand, "number") && is(rightOperand, "number")) {
                    return op(Op.QUOTIENT,leftOperand,rightOperand);
                }
            }
            break;
        }
        return visitExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : core.DartObject {
        return node.value ? true : false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : core.DartObject {
        return node.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : core.DartObject {
        return node.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : core.DartObject {
        let value : core.DartObject = node.expression.accept(this);
        if (op(Op.EQUALS,value,null) || is(value, "boolean") || is(value, "string") || is(value, "number")) {
            return value;
        }
        return ConstantEvaluator.NOT_A_CONSTANT;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : core.DartObject {
        return node.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        let list : core.DartList<core.DartObject> = new core.DartList<core.DartObject>();
        for(let element of node.elements) {
            let value : core.DartObject = element.accept(this);
            if (core.identical(value,ConstantEvaluator.NOT_A_CONSTANT)) {
                return value;
            }
            list.add(value);
        }
        return list;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        let map : core.DartHashMap<string,core.DartObject> = new core.DartHashMap<string,core.DartObject>();
        for(let entry of node.entries) {
            let key : core.DartObject = entry.key.accept(this);
            let value : core.DartObject = entry.value.accept(this);
            if (is(key, "string") && !core.identical(value,ConstantEvaluator.NOT_A_CONSTANT)) {
                op(Op.INDEX_ASSIGN,map,key,value);
            }else {
                return ConstantEvaluator.NOT_A_CONSTANT;
            }
        }
        return map;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        return ConstantEvaluator.NOT_A_CONSTANT;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : core.DartObject {
        return node.expression.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        return this._getConstantValue(null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        let operand : core.DartObject = node.operand.accept(this);
        if (core.identical(operand,ConstantEvaluator.NOT_A_CONSTANT)) {
            return operand;
        }
        while (true){
            if (op(Op.EQUALS,node.operator.type,TokenType.BANG)) {
                if (core.identical(operand,true)) {
                    return false;
                }else if (core.identical(operand,false)) {
                    return true;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.TILDE)) {
                if (is(operand, "number")) {
                    return ~operand;
                }
            }else if (op(Op.EQUALS,node.operator.type,TokenType.MINUS)) {
                if (op(Op.EQUALS,operand,null)) {
                    return null;
                }else if (is(operand, "number")) {
                    return -operand;
                }
            }else {
            }
            break;
        }
        return ConstantEvaluator.NOT_A_CONSTANT;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        return this._getConstantValue(null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        return this._getConstantValue(null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : core.DartObject {
        return node.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : core.DartObject {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        for(let element of node.elements) {
            let value : core.DartObject = element.accept(this);
            if (core.identical(value,ConstantEvaluator.NOT_A_CONSTANT)) {
                return value;
            }
            buffer.write(value);
        }
        return buffer.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : core.DartObject {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        for(let component of node.components) {
            if (buffer.length > 0) {
                buffer.writeCharCode(46);
            }
            buffer.write(component.lexeme);
        }
        return buffer.toString();
    }
    _getConstantValue(element : any) : core.DartObject {
        return ConstantEvaluator.NOT_A_CONSTANT;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantEvaluator() {
    }
}

export namespace DeferredLibraryReferenceDetector {
    export type Constructors = 'DeferredLibraryReferenceDetector';
    export type Interface = Omit<DeferredLibraryReferenceDetector, Constructors>;
}
@DartClass
export class DeferredLibraryReferenceDetector extends any {
    _result : boolean;

    get result() : boolean {
        return this._result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        if (!this._result) {
            if (node.isDeferred) {
                this._result = true;
            }
        }
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeferredLibraryReferenceDetector() {
        this._result = false;
    }
}

export namespace ElementLocator {
    export type Constructors = 'ElementLocator';
    export type Interface = Omit<ElementLocator, Constructors>;
}
@DartClass
export class ElementLocator {
    static locate(node : any) : any {
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        let mapper : ElementLocator_ElementMapper = new ElementLocator_ElementMapper();
        return node.accept(mapper);
    }
    constructor() {
    }
    @defaultConstructor
    ElementLocator() {
    }
}

export namespace ElementLocator_ElementMapper {
    export type Constructors = 'ElementLocator_ElementMapper';
    export type Interface = Omit<ElementLocator_ElementMapper, Constructors>;
}
@DartClass
export class ElementLocator_ElementMapper extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIdentifier(node : any) : any {
        let parent : any = node.parent;
        if (is(parent, any)) {
            if (core.identical(parent.name,node) && op(Op.EQUALS,parent.constructorName,null)) {
                return parent.element;
            }
        }else if (is(parent, any)) {
            let returnType : any = parent.returnType;
            if (core.identical(returnType,node)) {
                let name : any = parent.name;
                if (name != null) {
                    return name.bestElement;
                }
                let element : any = node.bestElement;
                if (is(element, any)) {
                    return element.unnamedConstructor;
                }
            }
        }else if (is(parent, any)) {
            let grandParent : any = parent.parent;
            if (is(grandParent, any)) {
                let element : any = grandParent.element;
                if (is(element, any)) {
                    return element.definingCompilationUnit;
                }
            }else if (is(grandParent, any)) {
                return grandParent.element;
            }
        }
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : any {
        return node.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : any {
        return node.methodName.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringLiteral(node : any) : any {
        let parent : any = node.parent;
        if (is(parent, any)) {
            return parent.uriElement;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : any {
        return node.element;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementLocator_ElementMapper() {
    }
}

export namespace ExceptionHandlingDelegatingAstVisitor {
    export type Constructors = 'ExceptionHandlingDelegatingAstVisitor';
    export type Interface<T> = Omit<ExceptionHandlingDelegatingAstVisitor<T>, Constructors>;
}
@DartClass
export class ExceptionHandlingDelegatingAstVisitor<T> extends any {
    handler : (node : any,visitor : any,exception : any,stackTrace : core.DartStackTrace) => void;

    constructor(delegates : core.DartIterable<any>,handler : (node : any,visitor : any,exception : any,stackTrace : core.DartStackTrace) => void) {
    }
    @defaultConstructor
    ExceptionHandlingDelegatingAstVisitor(delegates : core.DartIterable<any>,handler : (node : any,visitor : any,exception : any,stackTrace : core.DartStackTrace) => void) {
        super.DartObject(delegates);
        this.handler = handler;
        if (op(Op.EQUALS,this.handler,null)) {
            throw new core.ArgumentError('A handler must be provided');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : T {
        delegates.forEach((delegate : any) =>  {
            try {
                node.accept(delegate);
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    this.handler(node,delegate,exception,stackTrace);
                }
            }
        });
        node.visitChildren(this);
        return null;
    }
    static logException(node : any,visitor : any,exception : any,stackTrace : core.DartStackTrace) : void {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(`Exception while using a ${visitor.runtimeType} to visit a `);
        let currentNode : any = node;
        let first : boolean = true;
        while (currentNode != null){
            if (first) {
                first = false;
            }else {
                buffer.write(' in ');
            }
            buffer.write(currentNode.runtimeType);
            currentNode = currentNode.parent;
        }
        AnalysisEngine.instance.logger.logError(buffer.toString(),new bare.createInstance(any,null,exception,stackTrace));
    }
}

export namespace IncrementalAstCloner {
    export type Constructors = 'IncrementalAstCloner';
    export type Interface = Omit<IncrementalAstCloner, Constructors>;
}
@DartClass
@Implements(any)
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class IncrementalAstCloner implements any.Interface {
    _oldNode : any;

    _newNode : any;

    _tokenMap : any;

    constructor(_oldNode : any,_newNode : any,_tokenMap : any) {
    }
    @defaultConstructor
    IncrementalAstCloner(_oldNode : any,_newNode : any,_tokenMap : any) {
        this._oldNode = _oldNode;
        this._newNode = _newNode;
        this._tokenMap = _tokenMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : any {
        return astFactory.adjacentStrings(this._cloneNodeList(node.strings));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : any {
        let copy : any = astFactory.annotation(this._mapToken(node.atSign),this._cloneNode(node.name),this._mapToken(node.period),this._cloneNode(node.constructorName),this._cloneNode(node.arguments));
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : any {
        return astFactory.argumentList(this._mapToken(node.leftParenthesis),this._cloneNodeList(node.arguments),this._mapToken(node.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : any {
        let copy : any = astFactory.asExpression(this._cloneNode(node.expression),this._mapToken(node.asOperator),this._cloneNode(node.type));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : any {
        return astFactory.assertInitializer(this._mapToken(node.assertKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.condition),this._mapToken(node.comma),this._cloneNode(node.message),this._mapToken(node.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : any {
        return astFactory.assertStatement(this._mapToken(node.assertKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.condition),this._mapToken(node.comma),this._cloneNode(node.message),this._mapToken(node.rightParenthesis),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : any {
        let copy : any = astFactory.assignmentExpression(this._cloneNode(node.leftHandSide),this._mapToken(node.operator),this._cloneNode(node.rightHandSide));
        copy.propagatedElement = node.propagatedElement;
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : any {
        return astFactory.awaitExpression(this._mapToken(node.awaitKeyword),this._cloneNode(node.expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : any {
        let copy : any = astFactory.binaryExpression(this._cloneNode(node.leftOperand),this._mapToken(node.operator),this._cloneNode(node.rightOperand));
        copy.propagatedElement = node.propagatedElement;
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : any {
        return astFactory.block(this._mapToken(node.leftBracket),this._cloneNodeList(node.statements),this._mapToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : any {
        return astFactory.blockFunctionBody(this._mapToken(node.keyword),this._mapToken(node.star),this._cloneNode(node.block));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : any {
        let copy : any = astFactory.booleanLiteral(this._mapToken(node.literal),node.value);
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : any {
        return astFactory.breakStatement(this._mapToken(node.breakKeyword),this._cloneNode(node.label),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : any {
        let copy : any = astFactory.cascadeExpression(this._cloneNode(node.target),this._cloneNodeList(node.cascadeSections));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : any {
        return astFactory.catchClause(this._mapToken(node.onKeyword),this._cloneNode(node.exceptionType),this._mapToken(node.catchKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.exceptionParameter),this._mapToken(node.comma),this._cloneNode(node.stackTraceParameter),this._mapToken(node.rightParenthesis),this._cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : any {
        let copy : any = astFactory.classDeclaration(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.abstractKeyword),this._mapToken(node.classKeyword),this._cloneNode(node.name),this._cloneNode(node.typeParameters),this._cloneNode(node.extendsClause),this._cloneNode(node.withClause),this._cloneNode(node.implementsClause),this._mapToken(node.leftBracket),this._cloneNodeList(node.members),this._mapToken(node.rightBracket));
        copy.nativeClause = this._cloneNode(node.nativeClause);
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : any {
        return astFactory.classTypeAlias(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.typedefKeyword),this._cloneNode(node.name),this._cloneNode(node.typeParameters),this._mapToken(node.equals),this._mapToken(node.abstractKeyword),this._cloneNode(node.superclass),this._cloneNode(node.withClause),this._cloneNode(node.implementsClause),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : any {
        if (node.isDocumentation) {
            return astFactory.documentationComment(this._mapTokens(node.tokens),this._cloneNodeList(node.references));
        }else if (node.isBlock) {
            return astFactory.blockComment(this._mapTokens(node.tokens));
        }
        return astFactory.endOfLineComment(this._mapTokens(node.tokens));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : any {
        return astFactory.commentReference(this._mapToken(node.newKeyword),this._cloneNode(node.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : any {
        let copy : any = astFactory.compilationUnit(this._mapToken(node.beginToken),this._cloneNode(node.scriptTag),this._cloneNodeList(node.directives),this._cloneNodeList(node.declarations),this._mapToken(node.endToken));
        copy.lineInfo = node.lineInfo;
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : any {
        let copy : any = astFactory.conditionalExpression(this._cloneNode(node.condition),this._mapToken(node.question),this._cloneNode(node.thenExpression),this._mapToken(node.colon),this._cloneNode(node.elseExpression));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConfiguration(node : any) : any {
        return astFactory.configuration(this._mapToken(node.ifKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.name),this._mapToken(node.equalToken),this._cloneNode(node.value),this._mapToken(node.rightParenthesis),this._cloneNode(node.uri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : any {
        let copy : any = astFactory.constructorDeclaration(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.externalKeyword),this._mapToken(node.constKeyword),this._mapToken(node.factoryKeyword),this._cloneNode(node.returnType),this._mapToken(node.period),this._cloneNode(node.name),this._cloneNode(node.parameters),this._mapToken(node.separator),this._cloneNodeList(node.initializers),this._cloneNode(node.redirectedConstructor),this._cloneNode(node.body));
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : any {
        return astFactory.constructorFieldInitializer(this._mapToken(node.thisKeyword),this._mapToken(node.period),this._cloneNode(node.fieldName),this._mapToken(node.equals),this._cloneNode(node.expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : any {
        let copy : any = astFactory.constructorName(this._cloneNode(node.type),this._mapToken(node.period),this._cloneNode(node.name));
        copy.staticElement = node.staticElement;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : any {
        return astFactory.continueStatement(this._mapToken(node.continueKeyword),this._cloneNode(node.label),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : any {
        return astFactory.declaredIdentifier(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.keyword),this._cloneNode(node.type),this._cloneNode(node.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : any {
        return astFactory.defaultFormalParameter(this._cloneNode(node.parameter),node.kind,this._mapToken(node.separator),this._cloneNode(node.defaultValue));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : any {
        return astFactory.doStatement(this._mapToken(node.doKeyword),this._cloneNode(node.body),this._mapToken(node.whileKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.condition),this._mapToken(node.rightParenthesis),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDottedName(node : any) : any {
        return astFactory.dottedName(this._cloneNodeList(node.components));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : any {
        let copy : any = astFactory.doubleLiteral(this._mapToken(node.literal),node.value);
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : any {
        return astFactory.emptyFunctionBody(this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : any {
        return astFactory.emptyStatement(this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumConstantDeclaration(node : any) : any {
        return astFactory.enumConstantDeclaration(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._cloneNode(node.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : any {
        return astFactory.enumDeclaration(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.enumKeyword),this._cloneNode(node.name),this._mapToken(node.leftBracket),this._cloneNodeList(node.constants),this._mapToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : any {
        let copy : any = astFactory.exportDirective(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.keyword),this._cloneNode(node.uri),this._cloneNodeList(node.configurations),this._cloneNodeList(node.combinators),this._mapToken(node.semicolon));
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : any {
        return astFactory.expressionFunctionBody(this._mapToken(node.keyword),this._mapToken(node.functionDefinition),this._cloneNode(node.expression),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : any {
        return astFactory.expressionStatement(this._cloneNode(node.expression),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : any {
        return astFactory.extendsClause(this._mapToken(node.extendsKeyword),this._cloneNode(node.superclass));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : any {
        return astFactory.fieldDeclaration2({
            comment : this._cloneNode(node.documentationComment),metadata : this._cloneNodeList(node.metadata),covariantKeyword : this._mapToken(node.covariantKeyword),staticKeyword : this._mapToken(node.staticKeyword),fieldList : this._cloneNode(node.fields),semicolon : this._mapToken(node.semicolon)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : any {
        return astFactory.fieldFormalParameter2({
            comment : this._cloneNode(node.documentationComment),metadata : this._cloneNodeList(node.metadata),covariantKeyword : this._mapToken(node.covariantKeyword),keyword : this._mapToken(node.keyword),type : this._cloneNode(node.type),thisKeyword : this._mapToken(node.thisKeyword),period : this._mapToken(node.period),identifier : this._cloneNode(node.identifier),typeParameters : this._cloneNode(node.typeParameters),parameters : this._cloneNode(node.parameters)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : any {
        let loopVariable : any = node.loopVariable;
        if (op(Op.EQUALS,loopVariable,null)) {
            return astFactory.forEachStatementWithReference(this._mapToken(node.awaitKeyword),this._mapToken(node.forKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.identifier),this._mapToken(node.inKeyword),this._cloneNode(node.iterable),this._mapToken(node.rightParenthesis),this._cloneNode(node.body));
        }
        return astFactory.forEachStatementWithDeclaration(this._mapToken(node.awaitKeyword),this._mapToken(node.forKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(loopVariable),this._mapToken(node.inKeyword),this._cloneNode(node.iterable),this._mapToken(node.rightParenthesis),this._cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : any {
        return astFactory.formalParameterList(this._mapToken(node.leftParenthesis),this._cloneNodeList(node.parameters),this._mapToken(node.leftDelimiter),this._mapToken(node.rightDelimiter),this._mapToken(node.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : any {
        return astFactory.forStatement(this._mapToken(node.forKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.variables),this._cloneNode(node.initialization),this._mapToken(node.leftSeparator),this._cloneNode(node.condition),this._mapToken(node.rightSeparator),this._cloneNodeList(node.updaters),this._mapToken(node.rightParenthesis),this._cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : any {
        return astFactory.functionDeclaration(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.externalKeyword),this._cloneNode(node.returnType),this._mapToken(node.propertyKeyword),this._cloneNode(node.name),this._cloneNode(node.functionExpression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : any {
        return astFactory.functionDeclarationStatement(this._cloneNode(node.functionDeclaration));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : any {
        let copy : any = astFactory.functionExpression(this._cloneNode(node.typeParameters),this._cloneNode(node.parameters),this._cloneNode(node.body));
        copy.element = node.element;
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : any {
        let copy : any = astFactory.functionExpressionInvocation(this._cloneNode(node.function),this._cloneNode(node.typeArguments),this._cloneNode(node.argumentList));
        copy.propagatedElement = node.propagatedElement;
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : any {
        return astFactory.functionTypeAlias(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.typedefKeyword),this._cloneNode(node.returnType),this._cloneNode(node.name),this._cloneNode(node.typeParameters),this._cloneNode(node.parameters),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : any {
        return astFactory.functionTypedFormalParameter2({
            comment : this._cloneNode(node.documentationComment),metadata : this._cloneNodeList(node.metadata),covariantKeyword : this._mapToken(node.covariantKeyword),returnType : this._cloneNode(node.returnType),identifier : this._cloneNode(node.identifier),typeParameters : this._cloneNode(node.typeParameters),parameters : this._cloneNode(node.parameters)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : any {
        return astFactory.genericFunctionType(this._cloneNode(node.returnType),this._mapToken(node.functionKeyword),this._cloneNode(node.typeParameters),this._cloneNode(node.parameters));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : any {
        return astFactory.genericTypeAlias(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.typedefKeyword),this._cloneNode(node.name),this._cloneNode(node.typeParameters),this._mapToken(node.equals),this._cloneNode(node.functionType),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : any {
        return astFactory.hideCombinator(this._mapToken(node.keyword),this._cloneNodeList(node.hiddenNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : any {
        return astFactory.ifStatement(this._mapToken(node.ifKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.condition),this._mapToken(node.rightParenthesis),this._cloneNode(node.thenStatement),this._mapToken(node.elseKeyword),this._cloneNode(node.elseStatement));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : any {
        return astFactory.implementsClause(this._mapToken(node.implementsKeyword),this._cloneNodeList(node.interfaces));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : any {
        let copy : any = astFactory.importDirective(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.keyword),this._cloneNode(node.uri),this._cloneNodeList(node.configurations),this._mapToken(node.deferredKeyword),this._mapToken(node.asKeyword),this._cloneNode(node.prefix),this._cloneNodeList(node.combinators),this._mapToken(node.semicolon));
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : any {
        let period : any = this._mapToken(node.period);
        let copy : any;
        if (op(Op.EQUALS,period,null)) {
            copy = astFactory.indexExpressionForTarget(this._cloneNode(node.target),this._mapToken(node.leftBracket),this._cloneNode(node.index),this._mapToken(node.rightBracket));
        }else {
            copy = astFactory.indexExpressionForCascade(period,this._mapToken(node.leftBracket),this._cloneNode(node.index),this._mapToken(node.rightBracket));
        }
        copy.auxiliaryElements = node.auxiliaryElements;
        copy.propagatedElement = node.propagatedElement;
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : any {
        let copy : any = astFactory.instanceCreationExpression(this._mapToken(node.keyword),this._cloneNode(node.constructorName),this._cloneNode(node.argumentList));
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : any {
        let copy : any = astFactory.integerLiteral(this._mapToken(node.literal),node.value);
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : any {
        return astFactory.interpolationExpression(this._mapToken(node.leftBracket),this._cloneNode(node.expression),this._mapToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : any {
        return astFactory.interpolationString(this._mapToken(node.contents),node.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : any {
        let copy : any = astFactory.isExpression(this._cloneNode(node.expression),this._mapToken(node.isOperator),this._mapToken(node.notOperator),this._cloneNode(node.type));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : any {
        return astFactory.label(this._cloneNode(node.label),this._mapToken(node.colon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : any {
        return astFactory.labeledStatement(this._cloneNodeList(node.labels),this._cloneNode(node.statement));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : any {
        let copy : any = astFactory.libraryDirective(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.libraryKeyword),this._cloneNode(node.name),this._mapToken(node.semicolon));
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : any {
        let copy : any = astFactory.libraryIdentifier(this._cloneNodeList(node.components));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : any {
        let copy : any = astFactory.listLiteral(this._mapToken(node.constKeyword),this._cloneNode(node.typeArguments),this._mapToken(node.leftBracket),this._cloneNodeList(node.elements),this._mapToken(node.rightBracket));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : any {
        let copy : any = astFactory.mapLiteral(this._mapToken(node.constKeyword),this._cloneNode(node.typeArguments),this._mapToken(node.leftBracket),this._cloneNodeList(node.entries),this._mapToken(node.rightBracket));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : any {
        return astFactory.mapLiteralEntry(this._cloneNode(node.key),this._mapToken(node.separator),this._cloneNode(node.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : any {
        return astFactory.methodDeclaration(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.externalKeyword),this._mapToken(node.modifierKeyword),this._cloneNode(node.returnType),this._mapToken(node.propertyKeyword),this._mapToken(node.operatorKeyword),this._cloneNode(node.name),this._cloneNode(node.typeParameters),this._cloneNode(node.parameters),this._cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : any {
        let copy : any = astFactory.methodInvocation(this._cloneNode(node.target),this._mapToken(node.operator),this._cloneNode(node.methodName),this._cloneNode(node.typeArguments),this._cloneNode(node.argumentList));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : any {
        let copy : any = astFactory.namedExpression(this._cloneNode(node.name),this._cloneNode(node.expression));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : any {
        return astFactory.nativeClause(this._mapToken(node.nativeKeyword),this._cloneNode(node.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : any {
        return astFactory.nativeFunctionBody(this._mapToken(node.nativeKeyword),this._cloneNode(node.stringLiteral),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : any {
        let copy : any = astFactory.nullLiteral(this._mapToken(node.literal));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : any {
        let copy : any = astFactory.parenthesizedExpression(this._mapToken(node.leftParenthesis),this._cloneNode(node.expression),this._mapToken(node.rightParenthesis));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : any {
        let copy : any = astFactory.partDirective(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.partKeyword),this._cloneNode(node.uri),this._mapToken(node.semicolon));
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : any {
        let copy : any = astFactory.partOfDirective(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._mapToken(node.partKeyword),this._mapToken(node.ofKeyword),this._cloneNode(node.uri),this._cloneNode(node.libraryName),this._mapToken(node.semicolon));
        copy.element = node.element;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : any {
        let copy : any = astFactory.postfixExpression(this._cloneNode(node.operand),this._mapToken(node.operator));
        copy.propagatedElement = node.propagatedElement;
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : any {
        let copy : any = astFactory.prefixedIdentifier(this._cloneNode(node.prefix),this._mapToken(node.period),this._cloneNode(node.identifier));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : any {
        let copy : any = astFactory.prefixExpression(this._mapToken(node.operator),this._cloneNode(node.operand));
        copy.propagatedElement = node.propagatedElement;
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : any {
        let copy : any = astFactory.propertyAccess(this._cloneNode(node.target),this._mapToken(node.operator),this._cloneNode(node.propertyName));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : any {
        let copy : any = astFactory.redirectingConstructorInvocation(this._mapToken(node.thisKeyword),this._mapToken(node.period),this._cloneNode(node.constructorName),this._cloneNode(node.argumentList));
        copy.staticElement = node.staticElement;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : any {
        let copy : any = astFactory.rethrowExpression(this._mapToken(node.rethrowKeyword));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : any {
        return astFactory.returnStatement(this._mapToken(node.returnKeyword),this._cloneNode(node.expression),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitScriptTag(node : any) : any {
        return astFactory.scriptTag(this._mapToken(node.scriptTag));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : any {
        return astFactory.showCombinator(this._mapToken(node.keyword),this._cloneNodeList(node.shownNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : any {
        return astFactory.simpleFormalParameter2({
            comment : this._cloneNode(node.documentationComment),metadata : this._cloneNodeList(node.metadata),covariantKeyword : this._mapToken(node.covariantKeyword),keyword : this._mapToken(node.keyword),type : this._cloneNode(node.type),identifier : this._cloneNode(node.identifier)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : any {
        let mappedToken : any = this._mapToken(node.token);
        if (op(Op.EQUALS,mappedToken,null)) {
            mappedToken = node.token;
        }
        let copy : any = astFactory.simpleIdentifier(mappedToken,{
            isDeclaration : node.inDeclarationContext()});
        copy.auxiliaryElements = node.auxiliaryElements;
        copy.propagatedElement = node.propagatedElement;
        copy.propagatedType = node.propagatedType;
        copy.staticElement = node.staticElement;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : any {
        let copy : any = astFactory.simpleStringLiteral(this._mapToken(node.literal),node.value);
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : any {
        let copy : any = astFactory.stringInterpolation(this._cloneNodeList(node.elements));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : any {
        let copy : any = astFactory.superConstructorInvocation(this._mapToken(node.superKeyword),this._mapToken(node.period),this._cloneNode(node.constructorName),this._cloneNode(node.argumentList));
        copy.staticElement = node.staticElement;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : any {
        let copy : any = astFactory.superExpression(this._mapToken(node.superKeyword));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : any {
        return astFactory.switchCase(this._cloneNodeList(node.labels),this._mapToken(node.keyword),this._cloneNode(node.expression),this._mapToken(node.colon),this._cloneNodeList(node.statements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : any {
        return astFactory.switchDefault(this._cloneNodeList(node.labels),this._mapToken(node.keyword),this._mapToken(node.colon),this._cloneNodeList(node.statements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : any {
        return astFactory.switchStatement(this._mapToken(node.switchKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.expression),this._mapToken(node.rightParenthesis),this._mapToken(node.leftBracket),this._cloneNodeList(node.members),this._mapToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : any {
        let copy : any = astFactory.symbolLiteral(this._mapToken(node.poundSign),this._mapTokens(node.components));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : any {
        let copy : any = astFactory.thisExpression(this._mapToken(node.thisKeyword));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : any {
        let copy : any = astFactory.throwExpression(this._mapToken(node.throwKeyword),this._cloneNode(node.expression));
        copy.propagatedType = node.propagatedType;
        copy.staticType = node.staticType;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : any {
        return astFactory.topLevelVariableDeclaration(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._cloneNode(node.variables),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : any {
        return astFactory.tryStatement(this._mapToken(node.tryKeyword),this._cloneNode(node.body),this._cloneNodeList(node.catchClauses),this._mapToken(node.finallyKeyword),this._cloneNode(node.finallyBlock));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : any {
        return astFactory.typeArgumentList(this._mapToken(node.leftBracket),this._cloneNodeList(node.arguments),this._mapToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : any {
        let copy : any = astFactory.typeName(this._cloneNode(node.name),this._cloneNode(node.typeArguments));
        copy.type = node.type;
        return copy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : any {
        return astFactory.typeParameter(this._cloneNode(node.documentationComment),this._cloneNodeList(node.metadata),this._cloneNode(node.name),this._mapToken(node.extendsKeyword),this._cloneNode(node.bound));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : any {
        return astFactory.typeParameterList(this._mapToken(node.leftBracket),this._cloneNodeList(node.typeParameters),this._mapToken(node.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : any {
        return astFactory.variableDeclaration(this._cloneNode(node.name),this._mapToken(node.equals),this._cloneNode(node.initializer));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : any {
        return astFactory.variableDeclarationList(null,this._cloneNodeList(node.metadata),this._mapToken(node.keyword),this._cloneNode(node.type),this._cloneNodeList(node.variables));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : any {
        return astFactory.variableDeclarationStatement(this._cloneNode(node.variables),this._mapToken(node.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : any {
        return astFactory.whileStatement(this._mapToken(node.whileKeyword),this._mapToken(node.leftParenthesis),this._cloneNode(node.condition),this._mapToken(node.rightParenthesis),this._cloneNode(node.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : any {
        return astFactory.withClause(this._mapToken(node.withKeyword),this._cloneNodeList(node.mixinTypes));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : any {
        return astFactory.yieldStatement(this._mapToken(node.yieldKeyword),this._mapToken(node.star),this._cloneNode(node.expression),this._mapToken(node.semicolon));
    }
    _cloneNode(node : any) : any {
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        if (core.identical(node,this._oldNode)) {
            return this._newNode as any;
        }
        return node.accept(this) as any;
    }
    _cloneNodeList(nodes : any) : core.DartList<any> {
        let clonedNodes : core.DartList<any> = new core.DartList<any>();
        for(let node of nodes) {
            clonedNodes.add(this._cloneNode(node));
        }
        return clonedNodes;
    }
    _mapToken(oldToken : any) : any {
        if (op(Op.EQUALS,oldToken,null)) {
            return null;
        }
        return this._tokenMap.get(oldToken);
    }
    _mapTokens(oldTokens : core.DartList<any>) : core.DartList<any> {
        let newTokens : core.DartList<any> = new core.DartList<any>(oldTokens.length);
        for(let index : number = 0; index < newTokens.length; index++){
            newTokens[index] = this._mapToken(oldTokens[index]);
        }
        return newTokens;
    }
}

export namespace NodeLocator {
    export type Constructors = 'NodeLocator';
    export type Interface = Omit<NodeLocator, Constructors>;
}
@DartClass
export class NodeLocator extends any {
    _startOffset : number;

    _endOffset : number;

    _foundNode : any;

    constructor(startOffset : number,endOffset? : number) {
    }
    @defaultConstructor
    NodeLocator(startOffset : number,endOffset? : number) {
        this._startOffset = 0;
        this._endOffset = 0;
        this._startOffset = startOffset;
        this._endOffset = (endOffset || startOffset);
    }
    get foundNode() : any {
        return this._foundNode;
    }
    searchWithin(node : any) : any {
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        try {
            node.accept(this);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logInformation(`Unable to locate element at offset (${this._startOffset} - ${this._endOffset})`,new bare.createInstance(any,null,exception,stackTrace));
                return null;
            }
        }
        return this._foundNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        if (this._foundNode != null) {
            return null;
        }
        let beginToken : any = node.beginToken;
        let endToken : any = node.endToken;
        while (endToken != beginToken){
            if (op(Op.EQUALS,endToken.type,TokenType.EOF) || !endToken.isSynthetic) {
                break;
            }
            endToken = endToken.previous;
        }
        let end : number = endToken.end;
        let start : number = node.offset;
        if (end < this._startOffset) {
            return null;
        }
        if (start > this._endOffset) {
            return null;
        }
        try {
            node.visitChildren(this);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logInformation("Exception caught while traversing an AST structure.",new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        if (this._foundNode != null) {
            return null;
        }
        if (start <= this._startOffset && this._endOffset <= end) {
            this._foundNode = node;
        }
        return null;
    }
}

export namespace NodeLocator2 {
    export type Constructors = 'NodeLocator2';
    export type Interface = Omit<NodeLocator2, Constructors>;
}
@DartClass
export class NodeLocator2 extends any {
    _startOffset : number;

    _endOffset : number;

    _foundNode : any;

    constructor(startOffset : number,endOffset? : number) {
    }
    @defaultConstructor
    NodeLocator2(startOffset : number,endOffset? : number) {
        this._startOffset = 0;
        this._endOffset = 0;
        this._startOffset = startOffset;
        this._endOffset = (endOffset || startOffset);
    }
    searchWithin(node : any) : any {
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        try {
            node.accept(this);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logInformation(`Unable to locate element at offset (${this._startOffset} - ${this._endOffset})`,new bare.createInstance(any,null,exception,stackTrace));
                return null;
            }
        }
        return this._foundNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        if (this._foundNode != null) {
            return null;
        }
        let beginToken : any = node.beginToken;
        let endToken : any = node.endToken;
        while (endToken != beginToken){
            if (op(Op.EQUALS,endToken.type,TokenType.EOF) || !endToken.isSynthetic) {
                break;
            }
            endToken = endToken.previous;
        }
        let end : number = endToken.end;
        let start : number = node.offset;
        if (end <= this._startOffset) {
            return null;
        }
        if (start > this._endOffset) {
            return null;
        }
        try {
            node.visitChildren(this);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logInformation("Exception caught while traversing an AST structure.",new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        if (this._foundNode != null) {
            return null;
        }
        if (start <= this._startOffset && this._endOffset < end) {
            this._foundNode = node;
        }
        return null;
    }
}

export namespace NodeReplacer {
    export type Constructors = 'NodeReplacer';
    export type Interface = Omit<NodeReplacer, Constructors>;
}
@DartClass
@Implements(any)
export class NodeReplacer implements any.Interface {
    _oldNode : any;

    _newNode : any;

    constructor(_oldNode : any,_newNode : any) {
    }
    @defaultConstructor
    NodeReplacer(_oldNode : any,_newNode : any) {
        this._oldNode = _oldNode;
        this._newNode = _newNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : boolean {
        if (this._replaceInList(node.strings)) {
            return true;
        }
        return this.visitNode(node);
    }
    visitAnnotatedNode(node : any) : boolean {
        if (core.identical(node.documentationComment,this._oldNode)) {
            node.documentationComment = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.metadata)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : boolean {
        if (core.identical(node.arguments,this._oldNode)) {
            node.arguments = this._newNode as any;
            return true;
        }else if (core.identical(node.constructorName,this._oldNode)) {
            node.constructorName = this._newNode as any;
            return true;
        }else if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : boolean {
        if (this._replaceInList(node.arguments)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }else if (core.identical(node.type,this._oldNode)) {
            node.type = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : boolean {
        if (core.identical(node.condition,this._oldNode)) {
            node.condition = this._newNode as any;
            return true;
        }
        if (core.identical(node.message,this._oldNode)) {
            node.message = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : boolean {
        if (core.identical(node.condition,this._oldNode)) {
            node.condition = this._newNode as any;
            return true;
        }
        if (core.identical(node.message,this._oldNode)) {
            node.message = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : boolean {
        if (core.identical(node.leftHandSide,this._oldNode)) {
            node.leftHandSide = this._newNode as any;
            return true;
        }else if (core.identical(node.rightHandSide,this._oldNode)) {
            node.rightHandSide = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : boolean {
        if (core.identical(node.leftOperand,this._oldNode)) {
            node.leftOperand = this._newNode as any;
            return true;
        }else if (core.identical(node.rightOperand,this._oldNode)) {
            node.rightOperand = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : boolean {
        if (this._replaceInList(node.statements)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : boolean {
        if (core.identical(node.block,this._oldNode)) {
            node.block = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : boolean {
        if (core.identical(node.label,this._oldNode)) {
            node.label = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : boolean {
        if (core.identical(node.target,this._oldNode)) {
            node.target = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.cascadeSections)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : boolean {
        if (core.identical(node.exceptionType,this._oldNode)) {
            node.exceptionType = this._newNode as any;
            return true;
        }else if (core.identical(node.exceptionParameter,this._oldNode)) {
            node.exceptionParameter = this._newNode as any;
            return true;
        }else if (core.identical(node.stackTraceParameter,this._oldNode)) {
            node.stackTraceParameter = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.typeParameters,this._oldNode)) {
            node.typeParameters = this._newNode as any;
            return true;
        }else if (core.identical(node.extendsClause,this._oldNode)) {
            node.extendsClause = this._newNode as any;
            return true;
        }else if (core.identical(node.withClause,this._oldNode)) {
            node.withClause = this._newNode as any;
            return true;
        }else if (core.identical(node.implementsClause,this._oldNode)) {
            node.implementsClause = this._newNode as any;
            return true;
        }else if (core.identical(node.nativeClause,this._oldNode)) {
            node.nativeClause = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.members)) {
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.typeParameters,this._oldNode)) {
            node.typeParameters = this._newNode as any;
            return true;
        }else if (core.identical(node.superclass,this._oldNode)) {
            node.superclass = this._newNode as any;
            return true;
        }else if (core.identical(node.withClause,this._oldNode)) {
            node.withClause = this._newNode as any;
            return true;
        }else if (core.identical(node.implementsClause,this._oldNode)) {
            node.implementsClause = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : boolean {
        if (this._replaceInList(node.references)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : boolean {
        if (core.identical(node.identifier,this._oldNode)) {
            node.identifier = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : boolean {
        if (core.identical(node.scriptTag,this._oldNode)) {
            node.scriptTag = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.directives)) {
            return true;
        }else if (this._replaceInList(node.declarations)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : boolean {
        if (core.identical(node.condition,this._oldNode)) {
            node.condition = this._newNode as any;
            return true;
        }else if (core.identical(node.thenExpression,this._oldNode)) {
            node.thenExpression = this._newNode as any;
            return true;
        }else if (core.identical(node.elseExpression,this._oldNode)) {
            node.elseExpression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConfiguration(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.value,this._oldNode)) {
            node.value = this._newNode as any;
            return true;
        }else if (core.identical(node.uri,this._oldNode)) {
            node.uri = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : boolean {
        if (core.identical(node.returnType,this._oldNode)) {
            node.returnType = this._newNode as any;
            return true;
        }else if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.parameters,this._oldNode)) {
            node.parameters = this._newNode as any;
            return true;
        }else if (core.identical(node.redirectedConstructor,this._oldNode)) {
            node.redirectedConstructor = this._newNode as any;
            return true;
        }else if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.initializers)) {
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : boolean {
        if (core.identical(node.fieldName,this._oldNode)) {
            node.fieldName = this._newNode as any;
            return true;
        }else if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : boolean {
        if (core.identical(node.type,this._oldNode)) {
            node.type = this._newNode as any;
            return true;
        }else if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : boolean {
        if (core.identical(node.label,this._oldNode)) {
            node.label = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : boolean {
        if (core.identical(node.type,this._oldNode)) {
            node.type = this._newNode as any;
            return true;
        }else if (core.identical(node.identifier,this._oldNode)) {
            node.identifier = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : boolean {
        if (core.identical(node.parameter,this._oldNode)) {
            node.parameter = this._newNode as any;
            return true;
        }else if (core.identical(node.defaultValue,this._oldNode)) {
            node.defaultValue = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : boolean {
        if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }else if (core.identical(node.condition,this._oldNode)) {
            node.condition = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDottedName(node : any) : boolean {
        if (this._replaceInList(node.components)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumConstantDeclaration(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.constants)) {
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : boolean {
        return this.visitNamespaceDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : boolean {
        if (core.identical(node.superclass,this._oldNode)) {
            node.superclass = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : boolean {
        if (core.identical(node.fields,this._oldNode)) {
            node.fields = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : boolean {
        if (core.identical(node.type,this._oldNode)) {
            node.type = this._newNode as any;
            return true;
        }else if (core.identical(node.parameters,this._oldNode)) {
            node.parameters = this._newNode as any;
            return true;
        }
        return this.visitNormalFormalParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : boolean {
        if (core.identical(node.loopVariable,this._oldNode)) {
            node.loopVariable = this._newNode as any;
            return true;
        }else if (core.identical(node.identifier,this._oldNode)) {
            node.identifier = this._newNode as any;
            return true;
        }else if (core.identical(node.iterable,this._oldNode)) {
            node.iterable = this._newNode as any;
            return true;
        }else if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : boolean {
        if (this._replaceInList(node.parameters)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : boolean {
        if (core.identical(node.variables,this._oldNode)) {
            node.variables = this._newNode as any;
            return true;
        }else if (core.identical(node.initialization,this._oldNode)) {
            node.initialization = this._newNode as any;
            return true;
        }else if (core.identical(node.condition,this._oldNode)) {
            node.condition = this._newNode as any;
            return true;
        }else if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.updaters)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : boolean {
        if (core.identical(node.returnType,this._oldNode)) {
            node.returnType = this._newNode as any;
            return true;
        }else if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.functionExpression,this._oldNode)) {
            node.functionExpression = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : boolean {
        if (core.identical(node.functionDeclaration,this._oldNode)) {
            node.functionDeclaration = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : boolean {
        if (core.identical(node.parameters,this._oldNode)) {
            node.parameters = this._newNode as any;
            return true;
        }else if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : boolean {
        if (core.identical(node.function,this._oldNode)) {
            node.function = this._newNode as any;
            return true;
        }else if (core.identical(node.argumentList,this._oldNode)) {
            node.argumentList = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : boolean {
        if (core.identical(node.returnType,this._oldNode)) {
            node.returnType = this._newNode as any;
            return true;
        }else if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.typeParameters,this._oldNode)) {
            node.typeParameters = this._newNode as any;
            return true;
        }else if (core.identical(node.parameters,this._oldNode)) {
            node.parameters = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : boolean {
        if (core.identical(node.returnType,this._oldNode)) {
            node.returnType = this._newNode as any;
            return true;
        }else if (core.identical(node.parameters,this._oldNode)) {
            node.parameters = this._newNode as any;
            return true;
        }
        return this.visitNormalFormalParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : boolean {
        if (core.identical(node.returnType,this._oldNode)) {
            node.returnType = this._newNode as any;
            return true;
        }else if (core.identical(node.typeParameters,this._oldNode)) {
            node.typeParameters = this._newNode as any;
            return true;
        }else if (core.identical(node.parameters,this._oldNode)) {
            node.parameters = this._newNode as any;
            return true;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.typeParameters,this._oldNode)) {
            node.typeParameters = this._newNode as any;
            return true;
        }else if (core.identical(node.functionType,this._oldNode)) {
            node.functionType = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.metadata)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : boolean {
        if (this._replaceInList(node.hiddenNames)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : boolean {
        if (core.identical(node.condition,this._oldNode)) {
            node.condition = this._newNode as any;
            return true;
        }else if (core.identical(node.thenStatement,this._oldNode)) {
            node.thenStatement = this._newNode as any;
            return true;
        }else if (core.identical(node.elseStatement,this._oldNode)) {
            node.elseStatement = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : boolean {
        if (this._replaceInList(node.interfaces)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : boolean {
        if (core.identical(node.prefix,this._oldNode)) {
            node.prefix = this._newNode as any;
            return true;
        }
        return this.visitNamespaceDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : boolean {
        if (core.identical(node.target,this._oldNode)) {
            node.target = this._newNode as any;
            return true;
        }else if (core.identical(node.index,this._oldNode)) {
            node.index = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : boolean {
        if (core.identical(node.constructorName,this._oldNode)) {
            node.constructorName = this._newNode as any;
            return true;
        }else if (core.identical(node.argumentList,this._oldNode)) {
            node.argumentList = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }else if (core.identical(node.type,this._oldNode)) {
            node.type = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : boolean {
        if (core.identical(node.label,this._oldNode)) {
            node.label = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : boolean {
        if (core.identical(node.statement,this._oldNode)) {
            node.statement = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.labels)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : boolean {
        if (this._replaceInList(node.components)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : boolean {
        if (this._replaceInList(node.elements)) {
            return true;
        }
        return this.visitTypedLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : boolean {
        if (this._replaceInList(node.entries)) {
            return true;
        }
        return this.visitTypedLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : boolean {
        if (core.identical(node.key,this._oldNode)) {
            node.key = this._newNode as any;
            return true;
        }else if (core.identical(node.value,this._oldNode)) {
            node.value = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : boolean {
        if (core.identical(node.returnType,this._oldNode)) {
            node.returnType = this._newNode as any;
            return true;
        }else if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.parameters,this._oldNode)) {
            node.parameters = this._newNode as any;
            return true;
        }else if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : boolean {
        if (core.identical(node.target,this._oldNode)) {
            node.target = this._newNode as any;
            return true;
        }else if (core.identical(node.methodName,this._oldNode)) {
            node.methodName = this._newNode as any;
            return true;
        }else if (core.identical(node.argumentList,this._oldNode)) {
            node.argumentList = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    visitNamespaceDirective(node : any) : boolean {
        if (this._replaceInList(node.combinators)) {
            return true;
        }
        return this.visitUriBasedDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : boolean {
        if (core.identical(node.stringLiteral,this._oldNode)) {
            node.stringLiteral = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    visitNode(node : any) : boolean {
        throw new core.ArgumentError("The old node is not a child of it's parent");
    }
    visitNormalFormalParameter(node : any) : boolean {
        if (core.identical(node.documentationComment,this._oldNode)) {
            node.documentationComment = this._newNode as any;
            return true;
        }else if (core.identical(node.identifier,this._oldNode)) {
            node.identifier = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.metadata)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : boolean {
        return this.visitUriBasedDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : boolean {
        if (core.identical(node.libraryName,this._oldNode)) {
            node.libraryName = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : boolean {
        if (core.identical(node.operand,this._oldNode)) {
            node.operand = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : boolean {
        if (core.identical(node.prefix,this._oldNode)) {
            node.prefix = this._newNode as any;
            return true;
        }else if (core.identical(node.identifier,this._oldNode)) {
            node.identifier = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : boolean {
        if (core.identical(node.operand,this._oldNode)) {
            node.operand = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : boolean {
        if (core.identical(node.target,this._oldNode)) {
            node.target = this._newNode as any;
            return true;
        }else if (core.identical(node.propertyName,this._oldNode)) {
            node.propertyName = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : boolean {
        if (core.identical(node.constructorName,this._oldNode)) {
            node.constructorName = this._newNode as any;
            return true;
        }else if (core.identical(node.argumentList,this._oldNode)) {
            node.argumentList = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitScriptTag(scriptTag : any) : boolean {
        return this.visitNode(scriptTag);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : boolean {
        if (this._replaceInList(node.shownNames)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : boolean {
        if (core.identical(node.type,this._oldNode)) {
            node.type = this._newNode as any;
            return true;
        }
        return this.visitNormalFormalParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : boolean {
        if (this._replaceInList(node.elements)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : boolean {
        if (core.identical(node.constructorName,this._oldNode)) {
            node.constructorName = this._newNode as any;
            return true;
        }else if (core.identical(node.argumentList,this._oldNode)) {
            node.argumentList = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitSwitchMember(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : boolean {
        return this.visitSwitchMember(node);
    }
    visitSwitchMember(node : any) : boolean {
        if (this._replaceInList(node.labels)) {
            return true;
        }else if (this._replaceInList(node.statements)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.members)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : boolean {
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : boolean {
        if (core.identical(node.variables,this._oldNode)) {
            node.variables = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : boolean {
        if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }else if (core.identical(node.finallyBlock,this._oldNode)) {
            node.finallyBlock = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.catchClauses)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : boolean {
        if (this._replaceInList(node.arguments)) {
            return true;
        }
        return this.visitNode(node);
    }
    visitTypedLiteral(node : any) : boolean {
        if (core.identical(node.typeArguments,this._oldNode)) {
            node.typeArguments = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.typeArguments,this._oldNode)) {
            node.typeArguments = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.bound,this._oldNode)) {
            node.bound = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : boolean {
        if (this._replaceInList(node.typeParameters)) {
            return true;
        }
        return this.visitNode(node);
    }
    visitUriBasedDirective(node : any) : boolean {
        if (core.identical(node.uri,this._oldNode)) {
            node.uri = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : boolean {
        if (core.identical(node.name,this._oldNode)) {
            node.name = this._newNode as any;
            return true;
        }else if (core.identical(node.initializer,this._oldNode)) {
            node.initializer = this._newNode as any;
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : boolean {
        if (core.identical(node.type,this._oldNode)) {
            node.type = this._newNode as any;
            return true;
        }else if (this._replaceInList(node.variables)) {
            return true;
        }
        return this.visitAnnotatedNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : boolean {
        if (core.identical(node.variables,this._oldNode)) {
            node.variables = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : boolean {
        if (core.identical(node.condition,this._oldNode)) {
            node.condition = this._newNode as any;
            return true;
        }else if (core.identical(node.body,this._oldNode)) {
            node.body = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : boolean {
        if (this._replaceInList(node.mixinTypes)) {
            return true;
        }
        return this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : boolean {
        if (core.identical(node.expression,this._oldNode)) {
            node.expression = this._newNode as any;
            return true;
        }
        return this.visitNode(node);
    }
    _replaceInList(list : any) : boolean {
        let count : number = list.length;
        for(let i : number = 0; i < count; i++){
            if (core.identical(this._oldNode,op(Op.INDEX,list,i))) {
                op(Op.INDEX_ASSIGN,list,i,this._newNode);
                return true;
            }
        }
        return false;
    }
    static replace(oldNode : any,newNode : any) : boolean {
        if (op(Op.EQUALS,oldNode,null) || op(Op.EQUALS,newNode,null)) {
            throw new core.ArgumentError("The old and new nodes must be non-null");
        }else if (core.identical(oldNode,newNode)) {
            return true;
        }
        let parent : any = oldNode.parent;
        if (op(Op.EQUALS,parent,null)) {
            throw new core.ArgumentError("The old node is not a child of another node");
        }
        let replacer : NodeReplacer = new NodeReplacer(oldNode,newNode);
        return parent.accept(replacer);
    }
}

export namespace ResolutionCopier {
    export type Constructors = 'ResolutionCopier';
    export type Interface = Omit<ResolutionCopier, Constructors>;
}
@DartClass
@Implements(any)
export class ResolutionCopier implements any.Interface {
    _toNode : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualNodeLists(node.strings,toNode.strings)) {
            toNode.staticType = node.staticType;
            toNode.propagatedType = node.propagatedType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.atSign,toNode.atSign),this._isEqualNodes(node.name,toNode.name),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.constructorName,toNode.constructorName),this._isEqualNodes(node.arguments,toNode.arguments))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodeLists(node.arguments,toNode.arguments),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.asOperator,toNode.asOperator),this._isEqualNodes(node.type,toNode.type))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.assertKeyword,toNode.assertKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.condition,toNode.condition),this._isEqualTokens(node.comma,toNode.comma),this._isEqualNodes(node.message,toNode.message),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.assertKeyword,toNode.assertKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.condition,toNode.condition),this._isEqualTokens(node.comma,toNode.comma),this._isEqualNodes(node.message,toNode.message),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.leftHandSide,toNode.leftHandSide),this._isEqualTokens(node.operator,toNode.operator),this._isEqualNodes(node.rightHandSide,toNode.rightHandSide))) {
            toNode.propagatedElement = node.propagatedElement;
            toNode.propagatedType = node.propagatedType;
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.awaitKeyword,toNode.awaitKeyword),this._isEqualNodes(node.expression,toNode.expression))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.leftOperand,toNode.leftOperand),this._isEqualTokens(node.operator,toNode.operator),this._isEqualNodes(node.rightOperand,toNode.rightOperand))) {
            toNode.propagatedElement = node.propagatedElement;
            toNode.propagatedType = node.propagatedType;
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.statements,toNode.statements),this._isEqualTokens(node.rightBracket,toNode.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._isEqualNodes(node.block,toNode.block);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.literal,toNode.literal),op(Op.EQUALS,node.value,toNode.value))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.breakKeyword,toNode.breakKeyword),this._isEqualNodes(node.label,toNode.label),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.target,toNode.target),this._isEqualNodeLists(node.cascadeSections,toNode.cascadeSections))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.onKeyword,toNode.onKeyword),this._isEqualNodes(node.exceptionType,toNode.exceptionType),this._isEqualTokens(node.catchKeyword,toNode.catchKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.exceptionParameter,toNode.exceptionParameter),this._isEqualTokens(node.comma,toNode.comma),this._isEqualNodes(node.stackTraceParameter,toNode.stackTraceParameter),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualNodes(node.body,toNode.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.abstractKeyword,toNode.abstractKeyword),this._isEqualTokens(node.classKeyword,toNode.classKeyword),this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.typeParameters,toNode.typeParameters),this._isEqualNodes(node.extendsClause,toNode.extendsClause),this._isEqualNodes(node.withClause,toNode.withClause),this._isEqualNodes(node.implementsClause,toNode.implementsClause),this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.members,toNode.members),this._isEqualTokens(node.rightBracket,toNode.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.typedefKeyword,toNode.typedefKeyword),this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.typeParameters,toNode.typeParameters),this._isEqualTokens(node.equals,toNode.equals),this._isEqualTokens(node.abstractKeyword,toNode.abstractKeyword),this._isEqualNodes(node.superclass,toNode.superclass),this._isEqualNodes(node.withClause,toNode.withClause),this._isEqualNodes(node.implementsClause,toNode.implementsClause),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._isEqualNodeLists(node.references,toNode.references);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.newKeyword,toNode.newKeyword),this._isEqualNodes(node.identifier,toNode.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.beginToken,toNode.beginToken),this._isEqualNodes(node.scriptTag,toNode.scriptTag),this._isEqualNodeLists(node.directives,toNode.directives),this._isEqualNodeLists(node.declarations,toNode.declarations),this._isEqualTokens(node.endToken,toNode.endToken))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.condition,toNode.condition),this._isEqualTokens(node.question,toNode.question),this._isEqualNodes(node.thenExpression,toNode.thenExpression),this._isEqualTokens(node.colon,toNode.colon),this._isEqualNodes(node.elseExpression,toNode.elseExpression))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConfiguration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.ifKeyword,toNode.ifKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.name,toNode.name),this._isEqualTokens(node.equalToken,toNode.equalToken),this._isEqualNodes(node.value,toNode.value),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualNodes(node.uri,toNode.uri))) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.externalKeyword,toNode.externalKeyword),this._isEqualTokens(node.constKeyword,toNode.constKeyword),this._isEqualTokens(node.factoryKeyword,toNode.factoryKeyword),this._isEqualNodes(node.returnType,toNode.returnType),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.parameters,toNode.parameters),this._isEqualTokens(node.separator,toNode.separator),this._isEqualNodeLists(node.initializers,toNode.initializers),this._isEqualNodes(node.redirectedConstructor,toNode.redirectedConstructor),this._isEqualNodes(node.body,toNode.body))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.thisKeyword,toNode.thisKeyword),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.fieldName,toNode.fieldName),this._isEqualTokens(node.equals,toNode.equals),this._isEqualNodes(node.expression,toNode.expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.type,toNode.type),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.name,toNode.name))) {
            toNode.staticElement = node.staticElement;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.continueKeyword,toNode.continueKeyword),this._isEqualNodes(node.label,toNode.label),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.type,toNode.type),this._isEqualNodes(node.identifier,toNode.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.parameter,toNode.parameter),op(Op.EQUALS,node.kind,toNode.kind),this._isEqualTokens(node.separator,toNode.separator),this._isEqualNodes(node.defaultValue,toNode.defaultValue));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.doKeyword,toNode.doKeyword),this._isEqualNodes(node.body,toNode.body),this._isEqualTokens(node.whileKeyword,toNode.whileKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.condition,toNode.condition),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDottedName(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._isEqualNodeLists(node.components,toNode.components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.literal,toNode.literal),op(Op.EQUALS,node.value,toNode.value))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._isEqualTokens(node.semicolon,toNode.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._isEqualTokens(node.semicolon,toNode.semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumConstantDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualNodes(node.name,toNode.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.enumKeyword,toNode.enumKeyword),this._isEqualNodes(node.name,toNode.name),this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.constants,toNode.constants),this._isEqualTokens(node.rightBracket,toNode.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.uri,toNode.uri),this._isEqualNodeLists(node.combinators,toNode.combinators),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.functionDefinition,toNode.functionDefinition),this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.extendsKeyword,toNode.extendsKeyword),this._isEqualNodes(node.superclass,toNode.superclass));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.staticKeyword,toNode.staticKeyword),this._isEqualNodes(node.fields,toNode.fields),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.type,toNode.type),this._isEqualTokens(node.thisKeyword,toNode.thisKeyword),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.identifier,toNode.identifier));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.forKeyword,toNode.forKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.loopVariable,toNode.loopVariable),this._isEqualNodes(node.identifier,toNode.identifier),this._isEqualTokens(node.inKeyword,toNode.inKeyword),this._isEqualNodes(node.iterable,toNode.iterable),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualNodes(node.body,toNode.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodeLists(node.parameters,toNode.parameters),this._isEqualTokens(node.leftDelimiter,toNode.leftDelimiter),this._isEqualTokens(node.rightDelimiter,toNode.rightDelimiter),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.forKeyword,toNode.forKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.variables,toNode.variables),this._isEqualNodes(node.initialization,toNode.initialization),this._isEqualTokens(node.leftSeparator,toNode.leftSeparator),this._isEqualNodes(node.condition,toNode.condition),this._isEqualTokens(node.rightSeparator,toNode.rightSeparator),this._isEqualNodeLists(node.updaters,toNode.updaters),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualNodes(node.body,toNode.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.externalKeyword,toNode.externalKeyword),this._isEqualNodes(node.returnType,toNode.returnType),this._isEqualTokens(node.propertyKeyword,toNode.propertyKeyword),this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.functionExpression,toNode.functionExpression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._isEqualNodes(node.functionDeclaration,toNode.functionDeclaration);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.parameters,toNode.parameters),this._isEqualNodes(node.body,toNode.body))) {
            toNode.element = node.element;
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.function,toNode.function),this._isEqualNodes(node.typeArguments,toNode.typeArguments),this._isEqualNodes(node.argumentList,toNode.argumentList))) {
            toNode.propagatedElement = node.propagatedElement;
            toNode.propagatedInvokeType = node.propagatedInvokeType;
            toNode.propagatedType = node.propagatedType;
            toNode.staticInvokeType = node.staticInvokeType;
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.typedefKeyword,toNode.typedefKeyword),this._isEqualNodes(node.returnType,toNode.returnType),this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.typeParameters,toNode.typeParameters),this._isEqualNodes(node.parameters,toNode.parameters),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualNodes(node.returnType,toNode.returnType),this._isEqualNodes(node.identifier,toNode.identifier),this._isEqualNodes(node.parameters,toNode.parameters));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.returnType,toNode.returnType),this._isEqualTokens(node.functionKeyword,toNode.functionKeyword),this._isEqualNodes(node.typeParameters,toNode.typeParameters),this._isEqualNodes(node.parameters,toNode.parameters))) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.typedefKeyword,toNode.typedefKeyword),this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.typeParameters,toNode.typeParameters),this._isEqualTokens(node.equals,toNode.equals),this._isEqualNodes(node.functionType,toNode.functionType),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodeLists(node.hiddenNames,toNode.hiddenNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.ifKeyword,toNode.ifKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.condition,toNode.condition),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualNodes(node.thenStatement,toNode.thenStatement),this._isEqualTokens(node.elseKeyword,toNode.elseKeyword),this._isEqualNodes(node.elseStatement,toNode.elseStatement));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.implementsKeyword,toNode.implementsKeyword),this._isEqualNodeLists(node.interfaces,toNode.interfaces));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.uri,toNode.uri),this._isEqualTokens(node.asKeyword,toNode.asKeyword),this._isEqualNodes(node.prefix,toNode.prefix),this._isEqualNodeLists(node.combinators,toNode.combinators),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.target,toNode.target),this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodes(node.index,toNode.index),this._isEqualTokens(node.rightBracket,toNode.rightBracket))) {
            toNode.auxiliaryElements = node.auxiliaryElements;
            toNode.propagatedElement = node.propagatedElement;
            toNode.propagatedType = node.propagatedType;
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.constructorName,toNode.constructorName),this._isEqualNodes(node.argumentList,toNode.argumentList))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.literal,toNode.literal),op(Op.EQUALS,node.value,toNode.value))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.rightBracket,toNode.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.contents,toNode.contents),op(Op.EQUALS,node.value,toNode.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.isOperator,toNode.isOperator),this._isEqualTokens(node.notOperator,toNode.notOperator),this._isEqualNodes(node.type,toNode.type))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.label,toNode.label),this._isEqualTokens(node.colon,toNode.colon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodeLists(node.labels,toNode.labels),this._isEqualNodes(node.statement,toNode.statement));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.libraryKeyword,toNode.libraryKeyword),this._isEqualNodes(node.name,toNode.name),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualNodeLists(node.components,toNode.components)) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.constKeyword,toNode.constKeyword),this._isEqualNodes(node.typeArguments,toNode.typeArguments),this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.elements,toNode.elements),this._isEqualTokens(node.rightBracket,toNode.rightBracket))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.constKeyword,toNode.constKeyword),this._isEqualNodes(node.typeArguments,toNode.typeArguments),this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.entries,toNode.entries),this._isEqualTokens(node.rightBracket,toNode.rightBracket))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.key,toNode.key),this._isEqualTokens(node.separator,toNode.separator),this._isEqualNodes(node.value,toNode.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.externalKeyword,toNode.externalKeyword),this._isEqualTokens(node.modifierKeyword,toNode.modifierKeyword),this._isEqualNodes(node.returnType,toNode.returnType),this._isEqualTokens(node.propertyKeyword,toNode.propertyKeyword),this._isEqualTokens(node.propertyKeyword,toNode.propertyKeyword),this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.parameters,toNode.parameters),this._isEqualNodes(node.body,toNode.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.target,toNode.target),this._isEqualTokens(node.operator,toNode.operator),this._isEqualNodes(node.typeArguments,toNode.typeArguments),this._isEqualNodes(node.methodName,toNode.methodName),this._isEqualNodes(node.argumentList,toNode.argumentList))) {
            toNode.propagatedInvokeType = node.propagatedInvokeType;
            toNode.propagatedType = node.propagatedType;
            toNode.staticInvokeType = node.staticInvokeType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.expression,toNode.expression))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.nativeKeyword,toNode.nativeKeyword),this._isEqualNodes(node.name,toNode.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.nativeKeyword,toNode.nativeKeyword),this._isEqualNodes(node.stringLiteral,toNode.stringLiteral),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualTokens(node.literal,toNode.literal)) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.partKeyword,toNode.partKeyword),this._isEqualNodes(node.uri,toNode.uri),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.partKeyword,toNode.partKeyword),this._isEqualTokens(node.ofKeyword,toNode.ofKeyword),this._isEqualNodes(node.libraryName,toNode.libraryName),this._isEqualTokens(node.semicolon,toNode.semicolon))) {
            toNode.element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.operand,toNode.operand),this._isEqualTokens(node.operator,toNode.operator))) {
            toNode.propagatedElement = node.propagatedElement;
            toNode.propagatedType = node.propagatedType;
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.prefix,toNode.prefix),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.identifier,toNode.identifier))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.operator,toNode.operator),this._isEqualNodes(node.operand,toNode.operand))) {
            toNode.propagatedElement = node.propagatedElement;
            toNode.propagatedType = node.propagatedType;
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.target,toNode.target),this._isEqualTokens(node.operator,toNode.operator),this._isEqualNodes(node.propertyName,toNode.propertyName))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.thisKeyword,toNode.thisKeyword),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.constructorName,toNode.constructorName),this._isEqualNodes(node.argumentList,toNode.argumentList))) {
            toNode.staticElement = node.staticElement;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualTokens(node.rethrowKeyword,toNode.rethrowKeyword)) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.returnKeyword,toNode.returnKeyword),this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitScriptTag(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._isEqualTokens(node.scriptTag,toNode.scriptTag);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodeLists(node.shownNames,toNode.shownNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.type,toNode.type),this._isEqualNodes(node.identifier,toNode.identifier))) {
            (toNode as any).element = node.element;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualTokens(node.token,toNode.token)) {
            toNode.staticElement = node.staticElement;
            toNode.staticType = node.staticType;
            toNode.propagatedElement = node.propagatedElement;
            toNode.propagatedType = node.propagatedType;
            toNode.auxiliaryElements = node.auxiliaryElements;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.literal,toNode.literal),op(Op.EQUALS,node.value,toNode.value))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualNodeLists(node.elements,toNode.elements)) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.superKeyword,toNode.superKeyword),this._isEqualTokens(node.period,toNode.period),this._isEqualNodes(node.constructorName,toNode.constructorName),this._isEqualNodes(node.argumentList,toNode.argumentList))) {
            toNode.staticElement = node.staticElement;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualTokens(node.superKeyword,toNode.superKeyword)) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodeLists(node.labels,toNode.labels),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.colon,toNode.colon),this._isEqualNodeLists(node.statements,toNode.statements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodeLists(node.labels,toNode.labels),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualTokens(node.colon,toNode.colon),this._isEqualNodeLists(node.statements,toNode.statements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.switchKeyword,toNode.switchKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.members,toNode.members),this._isEqualTokens(node.rightBracket,toNode.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.poundSign,toNode.poundSign),this._isEqualTokenLists(node.components,toNode.components))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._isEqualTokens(node.thisKeyword,toNode.thisKeyword)) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualTokens(node.throwKeyword,toNode.throwKeyword),this._isEqualNodes(node.expression,toNode.expression))) {
            toNode.propagatedType = node.propagatedType;
            toNode.staticType = node.staticType;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualNodes(node.variables,toNode.variables),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.tryKeyword,toNode.tryKeyword),this._isEqualNodes(node.body,toNode.body),this._isEqualNodeLists(node.catchClauses,toNode.catchClauses),this._isEqualTokens(node.finallyKeyword,toNode.finallyKeyword),this._isEqualNodes(node.finallyBlock,toNode.finallyBlock));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.arguments,toNode.arguments),this._isEqualTokens(node.rightBracket,toNode.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : boolean {
        let toNode : any = this._toNode as any;
        if (this._and(this._isEqualNodes(node.name,toNode.name),this._isEqualNodes(node.typeArguments,toNode.typeArguments))) {
            toNode.type = node.type;
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualNodes(node.name,toNode.name),this._isEqualTokens(node.extendsKeyword,toNode.extendsKeyword),this._isEqualNodes(node.bound,toNode.bound));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.leftBracket,toNode.leftBracket),this._isEqualNodeLists(node.typeParameters,toNode.typeParameters),this._isEqualTokens(node.rightBracket,toNode.rightBracket));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualNodes(node.name,toNode.name),this._isEqualTokens(node.equals,toNode.equals),this._isEqualNodes(node.initializer,toNode.initializer));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.documentationComment,toNode.documentationComment),this._isEqualNodeLists(node.metadata,toNode.metadata),this._isEqualTokens(node.keyword,toNode.keyword),this._isEqualNodes(node.type,toNode.type),this._isEqualNodeLists(node.variables,toNode.variables));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualNodes(node.variables,toNode.variables),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.whileKeyword,toNode.whileKeyword),this._isEqualTokens(node.leftParenthesis,toNode.leftParenthesis),this._isEqualNodes(node.condition,toNode.condition),this._isEqualTokens(node.rightParenthesis,toNode.rightParenthesis),this._isEqualNodes(node.body,toNode.body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.withKeyword,toNode.withKeyword),this._isEqualNodeLists(node.mixinTypes,toNode.mixinTypes));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : boolean {
        let toNode : any = this._toNode as any;
        return this._and(this._isEqualTokens(node.yieldKeyword,toNode.yieldKeyword),this._isEqualNodes(node.expression,toNode.expression),this._isEqualTokens(node.semicolon,toNode.semicolon));
    }
    _and(b1 : boolean,b2 : boolean,b3? : boolean,b4? : boolean,b5? : boolean,b6? : boolean,b7? : boolean,b8? : boolean,b9? : boolean,b10? : boolean,b11? : boolean,b12? : boolean,b13? : boolean) : boolean {
        b3 = b3 || true;
        b4 = b4 || true;
        b5 = b5 || true;
        b6 = b6 || true;
        b7 = b7 || true;
        b8 = b8 || true;
        b9 = b9 || true;
        b10 = b10 || true;
        b11 = b11 || true;
        b12 = b12 || true;
        b13 = b13 || true;
        return b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11 && b12 && b13;
    }
    _isEqualNodeLists(first : any,second : any) : boolean {
        if (op(Op.EQUALS,first,null)) {
            return op(Op.EQUALS,second,null);
        }else if (op(Op.EQUALS,second,null)) {
            return false;
        }
        let size : number = first.length;
        if (second.length != size) {
            return false;
        }
        let equal : boolean = true;
        for(let i : number = 0; i < size; i++){
            if (!this._isEqualNodes(op(Op.INDEX,first,i),op(Op.INDEX,second,i))) {
                equal = false;
            }
        }
        return equal;
    }
    _isEqualNodes(fromNode : any,toNode : any) : boolean {
        if (op(Op.EQUALS,fromNode,null)) {
            return op(Op.EQUALS,toNode,null);
        }else if (op(Op.EQUALS,toNode,null)) {
            return false;
        }else if (op(Op.EQUALS,fromNode.runtimeType,toNode.runtimeType)) {
            this._toNode = toNode;
            return fromNode.accept(this);
        }
        if (is(toNode, any)) {
            let prefix : any = toNode.prefix;
            if (op(Op.EQUALS,fromNode.runtimeType,prefix.runtimeType)) {
                this._toNode = prefix;
                return fromNode.accept(this);
            }
        }else if (is(toNode, any)) {
            let target : any = toNode.target;
            if (op(Op.EQUALS,fromNode.runtimeType,target.runtimeType)) {
                this._toNode = target;
                return fromNode.accept(this);
            }
        }
        return false;
    }
    _isEqualTokenLists(first : core.DartList<any>,second : core.DartList<any>) : boolean {
        let length : number = first.length;
        if (second.length != length) {
            return false;
        }
        for(let i : number = 0; i < length; i++){
            if (!this._isEqualTokens(first[i],second[i])) {
                return false;
            }
        }
        return true;
    }
    _isEqualTokens(first : any,second : any) : boolean {
        if (op(Op.EQUALS,first,null)) {
            return op(Op.EQUALS,second,null);
        }else if (op(Op.EQUALS,second,null)) {
            return false;
        }
        return op(Op.EQUALS,first.lexeme,second.lexeme);
    }
    static copyResolutionData(fromNode : any,toNode : any) : void {
        let copier : ResolutionCopier = new ResolutionCopier();
        copier._isEqualNodes(fromNode,toNode);
    }
    constructor() {
    }
    @defaultConstructor
    ResolutionCopier() {
    }
}

export namespace ScopedNameFinder {
    export type Constructors = 'ScopedNameFinder';
    export type Interface = Omit<ScopedNameFinder, Constructors>;
}
@DartClass
export class ScopedNameFinder extends any {
    _declarationNode : any;

    _immediateChild : any;

    _locals : core.DartMap<string,any>;

    _position : number;

    _referenceIsWithinLocalFunction : boolean;

    constructor(_position : number) {
    }
    @defaultConstructor
    ScopedNameFinder(_position : number) {
        this._locals = new core.DartHashMap<string,any>();
        this._referenceIsWithinLocalFunction = false;
        this._position = _position;
    }
    get declaration() : any {
        return this._declarationNode;
    }
    get locals() : core.DartMap<string,any> {
        return this._locals;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : core.DartObject {
        this._checkStatements(node.statements);
        return super.visitBlock(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        this._addToScope(node.exceptionParameter);
        this._addToScope(node.stackTraceParameter);
        return super.visitCatchClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        if (!core.identical(this._immediateChild,node.parameters)) {
            this._addParameters(node.parameters.parameters);
        }
        this._declarationNode = node;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        this._declarationNode = node;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : core.DartObject {
        let loopVariable : any = node.loopVariable;
        if (loopVariable != null) {
            this._addToScope(loopVariable.identifier);
        }
        return super.visitForEachStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        if (!core.identical(this._immediateChild,node.variables) && node.variables != null) {
            this._addVariables(node.variables.variables);
        }
        return super.visitForStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            this._declarationNode = node;
            return null;
        }
        return super.visitFunctionDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : core.DartObject {
        this._referenceIsWithinLocalFunction = true;
        return super.visitFunctionDeclarationStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (node.parameters != null && !core.identical(this._immediateChild,node.parameters)) {
            this._addParameters(node.parameters.parameters);
        }
        return super.visitFunctionExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        this._declarationNode = node;
        if (op(Op.EQUALS,node.parameters,null)) {
            return null;
        }
        if (!core.identical(this._immediateChild,node.parameters)) {
            this._addParameters(node.parameters.parameters);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        this._immediateChild = node;
        let parent : any = node.parent;
        if (parent != null) {
            parent.accept(this);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchMember(node : any) : core.DartObject {
        this._checkStatements(node.statements);
        return super.visitSwitchMember(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : core.DartObject {
        this._declarationNode = node;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeAlias(node : any) : core.DartObject {
        this._declarationNode = node;
        return null;
    }
    _addParameters(vars : any) : void {
        for(let var2 of vars) {
            this._addToScope(var2.identifier);
        }
    }
    _addToScope(identifier : any) : void {
        if (identifier != null && this._isInRange(identifier)) {
            let name : string = identifier.name;
            if (!this._locals.containsKey(name)) {
                this._locals.set(name,identifier);
            }
        }
    }
    _addVariables(variables : any) : void {
        for(let variable of variables) {
            this._addToScope(variable.name);
        }
    }
    _checkStatements(statements : core.DartList<any>) : void {
        for(let statement of statements) {
            if (core.identical(statement,this._immediateChild)) {
                return;
            }
            if (is(statement, any)) {
                this._addVariables(statement.variables.variables);
            }else if (is(statement, any) && !this._referenceIsWithinLocalFunction) {
                this._addToScope(statement.functionDeclaration.name);
            }
        }
    }
    _isInRange(node : any) : boolean {
        if (this._position < 0) {
            return true;
        }
        return op(Op.LT,node.end,this._position);
    }
}

export namespace ToSourceVisitor {
    export type Constructors = 'ToSourceVisitor';
    export type Interface = Omit<ToSourceVisitor, Constructors>;
}
@DartClass
@Implements(any)
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class ToSourceVisitor implements any.Interface {
    _writer : any;

    constructor(_writer : any) {
    }
    @defaultConstructor
    ToSourceVisitor(_writer : any) {
        this._writer = _writer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : core.DartObject {
        this._visitNodeListWithSeparator(node.strings," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        this._writer.print('@');
        this._visitNode(node.name);
        this._visitNodeWithPrefix(".",node.constructorName);
        this._visitNode(node.arguments);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : core.DartObject {
        this._writer.print('(');
        this._visitNodeListWithSeparator(node.arguments,", ");
        this._writer.print(')');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : core.DartObject {
        this._visitNode(node.expression);
        this._writer.print(" as ");
        this._visitNode(node.type);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : boolean {
        this._writer.print("assert (");
        this._visitNode(node.condition);
        if (node.message != null) {
            this._writer.print(', ');
            this._visitNode(node.message);
        }
        this._writer.print(")");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : core.DartObject {
        this._writer.print("assert (");
        this._visitNode(node.condition);
        if (node.message != null) {
            this._writer.print(', ');
            this._visitNode(node.message);
        }
        this._writer.print(");");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        this._visitNode(node.leftHandSide);
        this._writer.print(' ');
        this._writer.print(node.operator.lexeme);
        this._writer.print(' ');
        this._visitNode(node.rightHandSide);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : core.DartObject {
        this._writer.print("await ");
        this._visitNode(node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        this._visitNode(node.leftOperand);
        this._writer.print(' ');
        this._writer.print(node.operator.lexeme);
        this._writer.print(' ');
        this._visitNode(node.rightOperand);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : core.DartObject {
        this._writer.print('{');
        this._visitNodeListWithSeparator(node.statements," ");
        this._writer.print('}');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        let keyword : any = node.keyword;
        if (keyword != null) {
            this._writer.print(keyword.lexeme);
            if (node.star != null) {
                this._writer.print('*');
            }
            this._writer.print(' ');
        }
        this._visitNode(node.block);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : core.DartObject {
        this._writer.print(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        this._writer.print("break");
        this._visitNodeWithPrefix(" ",node.label);
        this._writer.print(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : core.DartObject {
        this._visitNode(node.target);
        this._visitNodeList(node.cascadeSections);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        this._visitNodeWithPrefix("on ",node.exceptionType);
        if (node.catchKeyword != null) {
            if (node.exceptionType != null) {
                this._writer.print(' ');
            }
            this._writer.print("catch (");
            this._visitNode(node.exceptionParameter);
            this._visitNodeWithPrefix(", ",node.stackTraceParameter);
            this._writer.print(") ");
        }else {
            this._writer.print(" ");
        }
        this._visitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitTokenWithSuffix(node.abstractKeyword," ");
        this._writer.print("class ");
        this._visitNode(node.name);
        this._visitNode(node.typeParameters);
        this._visitNodeWithPrefix(" ",node.extendsClause);
        this._visitNodeWithPrefix(" ",node.withClause);
        this._visitNodeWithPrefix(" ",node.implementsClause);
        this._writer.print(" {");
        this._visitNodeListWithSeparator(node.members," ");
        this._writer.print("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        if (node.abstractKeyword != null) {
            this._writer.print("abstract ");
        }
        this._writer.print("class ");
        this._visitNode(node.name);
        this._visitNode(node.typeParameters);
        this._writer.print(" = ");
        this._visitNode(node.superclass);
        this._visitNodeWithPrefix(" ",node.withClause);
        this._visitNodeWithPrefix(" ",node.implementsClause);
        this._writer.print(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        let scriptTag : any = node.scriptTag;
        let directives : any = node.directives;
        this._visitNode(scriptTag);
        let prefix : string = op(Op.EQUALS,scriptTag,null) ? "" : " ";
        this._visitNodeListWithSeparatorAndPrefix(prefix,directives," ");
        prefix = op(Op.EQUALS,scriptTag,null) && directives.isEmpty ? "" : " ";
        this._visitNodeListWithSeparatorAndPrefix(prefix,node.declarations," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : core.DartObject {
        this._visitNode(node.condition);
        this._writer.print(" ? ");
        this._visitNode(node.thenExpression);
        this._writer.print(" : ");
        this._visitNode(node.elseExpression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConfiguration(node : any) : core.DartObject {
        this._writer.print('if (');
        this._visitNode(node.name);
        this._visitNodeWithPrefix(" == ",node.value);
        this._writer.print(') ');
        this._visitNode(node.uri);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitTokenWithSuffix(node.externalKeyword," ");
        this._visitTokenWithSuffix(node.constKeyword," ");
        this._visitTokenWithSuffix(node.factoryKeyword," ");
        this._visitNode(node.returnType);
        this._visitNodeWithPrefix(".",node.name);
        this._visitNode(node.parameters);
        this._visitNodeListWithSeparatorAndPrefix(" : ",node.initializers,", ");
        this._visitNodeWithPrefix(" = ",node.redirectedConstructor);
        this._visitFunctionWithPrefix(" ",node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : core.DartObject {
        this._visitTokenWithSuffix(node.thisKeyword,".");
        this._visitNode(node.fieldName);
        this._writer.print(" = ");
        this._visitNode(node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : core.DartObject {
        this._visitNode(node.type);
        this._visitNodeWithPrefix(".",node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        this._writer.print("continue");
        this._visitNodeWithPrefix(" ",node.label);
        this._writer.print(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitTokenWithSuffix(node.keyword," ");
        this._visitNodeWithSuffix(node.type," ");
        this._visitNode(node.identifier);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        this._visitNode(node.parameter);
        if (node.separator != null) {
            this._writer.print(" ");
            this._writer.print(node.separator.lexeme);
            this._visitNodeWithPrefix(" ",node.defaultValue);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        this._writer.print("do ");
        this._visitNode(node.body);
        this._writer.print(" while (");
        this._visitNode(node.condition);
        this._writer.print(");");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDottedName(node : any) : core.DartObject {
        this._visitNodeListWithSeparator(node.components,".");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : core.DartObject {
        this._writer.print(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : core.DartObject {
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : core.DartObject {
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumConstantDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitNode(node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("enum ");
        this._visitNode(node.name);
        this._writer.print(" {");
        this._visitNodeListWithSeparator(node.constants,", ");
        this._writer.print("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("export ");
        this._visitNode(node.uri);
        this._visitNodeListWithSeparatorAndPrefix(" ",node.combinators," ");
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        let keyword : any = node.keyword;
        if (keyword != null) {
            this._writer.print(keyword.lexeme);
            this._writer.print(' ');
        }
        this._writer.print("=> ");
        this._visitNode(node.expression);
        if (node.semicolon != null) {
            this._writer.print(';');
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : core.DartObject {
        this._visitNode(node.expression);
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : core.DartObject {
        this._writer.print("extends ");
        this._visitNode(node.superclass);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitTokenWithSuffix(node.staticKeyword," ");
        this._visitNode(node.fields);
        this._writer.print(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata,' ',' ');
        this._visitTokenWithSuffix(node.covariantKeyword,' ');
        this._visitTokenWithSuffix(node.keyword," ");
        this._visitNodeWithSuffix(node.type," ");
        this._writer.print("this.");
        this._visitNode(node.identifier);
        this._visitNode(node.typeParameters);
        this._visitNode(node.parameters);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : core.DartObject {
        let loopVariable : any = node.loopVariable;
        if (node.awaitKeyword != null) {
            this._writer.print("await ");
        }
        this._writer.print("for (");
        if (op(Op.EQUALS,loopVariable,null)) {
            this._visitNode(node.identifier);
        }else {
            this._visitNode(loopVariable);
        }
        this._writer.print(" in ");
        this._visitNode(node.iterable);
        this._writer.print(") ");
        this._visitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : core.DartObject {
        let groupEnd : string = null;
        this._writer.print('(');
        let parameters : any = node.parameters;
        let size : number = parameters.length;
        for(let i : number = 0; i < size; i++){
            let parameter : any = op(Op.INDEX,parameters,i);
            if (i > 0) {
                this._writer.print(", ");
            }
            if (groupEnd == null && is(parameter, any)) {
                if (op(Op.EQUALS,parameter.kind,ParameterKind.NAMED)) {
                    groupEnd = "}";
                    this._writer.print('{');
                }else {
                    groupEnd = "]";
                    this._writer.print('[');
                }
            }
            parameter.accept(this);
        }
        if (groupEnd != null) {
            this._writer.print(groupEnd);
        }
        this._writer.print(')');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        let initialization : any = node.initialization;
        this._writer.print("for (");
        if (initialization != null) {
            this._visitNode(initialization);
        }else {
            this._visitNode(node.variables);
        }
        this._writer.print(";");
        this._visitNodeWithPrefix(" ",node.condition);
        this._writer.print(";");
        this._visitNodeListWithSeparatorAndPrefix(" ",node.updaters,", ");
        this._writer.print(") ");
        this._visitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitTokenWithSuffix(node.externalKeyword," ");
        this._visitNodeWithSuffix(node.returnType," ");
        this._visitTokenWithSuffix(node.propertyKeyword," ");
        this._visitNode(node.name);
        this._visitNode(node.functionExpression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : core.DartObject {
        this._visitNode(node.functionDeclaration);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        this._visitNode(node.typeParameters);
        this._visitNode(node.parameters);
        if (isNot(node.body, any)) {
            this._writer.print(' ');
        }
        this._visitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        this._visitNode(node.function);
        this._visitNode(node.typeArguments);
        this._visitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("typedef ");
        this._visitNodeWithSuffix(node.returnType," ");
        this._visitNode(node.name);
        this._visitNode(node.typeParameters);
        this._visitNode(node.parameters);
        this._writer.print(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata,' ',' ');
        this._visitTokenWithSuffix(node.covariantKeyword,' ');
        this._visitNodeWithSuffix(node.returnType," ");
        this._visitNode(node.identifier);
        this._visitNode(node.typeParameters);
        this._visitNode(node.parameters);
        if (node.question != null) {
            this._writer.print('?');
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        this._visitNode(node.returnType);
        this._writer.print(' Function');
        this._visitNode(node.typeParameters);
        this._visitNode(node.parameters);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("typedef ");
        this._visitNode(node.name);
        this._visitNode(node.typeParameters);
        this._writer.print(" = ");
        this._visitNode(node.functionType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : core.DartObject {
        this._writer.print("hide ");
        this._visitNodeListWithSeparator(node.hiddenNames,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        this._writer.print("if (");
        this._visitNode(node.condition);
        this._writer.print(") ");
        this._visitNode(node.thenStatement);
        this._visitNodeWithPrefix(" else ",node.elseStatement);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : core.DartObject {
        this._writer.print("implements ");
        this._visitNodeListWithSeparator(node.interfaces,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("import ");
        this._visitNode(node.uri);
        if (node.deferredKeyword != null) {
            this._writer.print(" deferred");
        }
        this._visitNodeWithPrefix(" as ",node.prefix);
        this._visitNodeListWithSeparatorAndPrefix(" ",node.combinators," ");
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        if (node.isCascaded) {
            this._writer.print("..");
        }else {
            this._visitNode(node.target);
        }
        this._writer.print('[');
        this._visitNode(node.index);
        this._writer.print(']');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        this._visitTokenWithSuffix(node.keyword," ");
        this._visitNode(node.constructorName);
        this._visitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : core.DartObject {
        this._writer.print(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : core.DartObject {
        if (node.rightBracket != null) {
            this._writer.print("${");
            this._visitNode(node.expression);
            this._writer.print("}");
        }else {
            this._writer.print("$");
            this._visitNode(node.expression);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : core.DartObject {
        this._writer.print(node.contents.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : core.DartObject {
        this._visitNode(node.expression);
        if (op(Op.EQUALS,node.notOperator,null)) {
            this._writer.print(" is ");
        }else {
            this._writer.print(" is! ");
        }
        this._visitNode(node.type);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : core.DartObject {
        this._visitNode(node.label);
        this._writer.print(":");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.labels," "," ");
        this._visitNode(node.statement);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("library ");
        this._visitNode(node.name);
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : core.DartObject {
        this._writer.print(node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        if (node.constKeyword != null) {
            this._writer.print(node.constKeyword.lexeme);
            this._writer.print(' ');
        }
        this._visitNodeWithSuffix(node.typeArguments," ");
        this._writer.print("[");
        this._visitNodeListWithSeparator(node.elements,", ");
        this._writer.print("]");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        if (node.constKeyword != null) {
            this._writer.print(node.constKeyword.lexeme);
            this._writer.print(' ');
        }
        this._visitNodeWithSuffix(node.typeArguments," ");
        this._writer.print("{");
        this._visitNodeListWithSeparator(node.entries,", ");
        this._writer.print("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : core.DartObject {
        this._visitNode(node.key);
        this._writer.print(" : ");
        this._visitNode(node.value);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitTokenWithSuffix(node.externalKeyword," ");
        this._visitTokenWithSuffix(node.modifierKeyword," ");
        this._visitNodeWithSuffix(node.returnType," ");
        this._visitTokenWithSuffix(node.propertyKeyword," ");
        this._visitTokenWithSuffix(node.operatorKeyword," ");
        this._visitNode(node.name);
        if (!node.isGetter) {
            this._visitNode(node.typeParameters);
            this._visitNode(node.parameters);
        }
        this._visitFunctionWithPrefix(" ",node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        if (node.isCascaded) {
            this._writer.print("..");
        }else {
            if (node.target != null) {
                node.target.accept(this);
                this._writer.print(node.operator.lexeme);
            }
        }
        this._visitNode(node.methodName);
        this._visitNode(node.typeArguments);
        this._visitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : core.DartObject {
        this._visitNode(node.name);
        this._visitNodeWithPrefix(" ",node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : core.DartObject {
        this._writer.print("native ");
        this._visitNode(node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : core.DartObject {
        this._writer.print("native ");
        this._visitNode(node.stringLiteral);
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : core.DartObject {
        this._writer.print("null");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : core.DartObject {
        this._writer.print('(');
        this._visitNode(node.expression);
        this._writer.print(')');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("part ");
        this._visitNode(node.uri);
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._writer.print("part of ");
        this._visitNode(node.libraryName);
        this._writer.print(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        this._visitNode(node.operand);
        this._writer.print(node.operator.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        this._visitNode(node.prefix);
        this._writer.print('.');
        this._visitNode(node.identifier);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        this._writer.print(node.operator.lexeme);
        this._visitNode(node.operand);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        if (node.isCascaded) {
            this._writer.print("..");
        }else {
            this._visitNode(node.target);
            this._writer.print(node.operator.lexeme);
        }
        this._visitNode(node.propertyName);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        this._writer.print("this");
        this._visitNodeWithPrefix(".",node.constructorName);
        this._visitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : core.DartObject {
        this._writer.print("rethrow");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : core.DartObject {
        let expression : any = node.expression;
        if (op(Op.EQUALS,expression,null)) {
            this._writer.print("return;");
        }else {
            this._writer.print("return ");
            expression.accept(this);
            this._writer.print(";");
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitScriptTag(node : any) : core.DartObject {
        this._writer.print(node.scriptTag.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : core.DartObject {
        this._writer.print("show ");
        this._visitNodeListWithSeparator(node.shownNames,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata,' ',' ');
        this._visitTokenWithSuffix(node.covariantKeyword,' ');
        this._visitTokenWithSuffix(node.keyword," ");
        this._visitNode(node.type);
        if (node.type != null && node.identifier != null) {
            this._writer.print(' ');
        }
        this._visitNode(node.identifier);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        this._writer.print(node.token.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : core.DartObject {
        this._writer.print(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : core.DartObject {
        this._visitNodeList(node.elements);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        this._writer.print("super");
        this._visitNodeWithPrefix(".",node.constructorName);
        this._visitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : core.DartObject {
        this._writer.print("super");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.labels," "," ");
        this._writer.print("case ");
        this._visitNode(node.expression);
        this._writer.print(": ");
        this._visitNodeListWithSeparator(node.statements," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.labels," "," ");
        this._writer.print("default: ");
        this._visitNodeListWithSeparator(node.statements," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : core.DartObject {
        this._writer.print("switch (");
        this._visitNode(node.expression);
        this._writer.print(") {");
        this._visitNodeListWithSeparator(node.members," ");
        this._writer.print("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : core.DartObject {
        this._writer.print("#");
        let components : core.DartList<any> = node.components;
        for(let i : number = 0; i < components.length; i++){
            if (i > 0) {
                this._writer.print(".");
            }
            this._writer.print(components[i].lexeme);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : core.DartObject {
        this._writer.print("this");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : core.DartObject {
        this._writer.print("throw ");
        this._visitNode(node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : core.DartObject {
        this._visitNodeWithSuffix(node.variables,";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : core.DartObject {
        this._writer.print("try ");
        this._visitNode(node.body);
        this._visitNodeListWithSeparatorAndPrefix(" ",node.catchClauses," ");
        this._visitNodeWithPrefix(" finally ",node.finallyBlock);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : core.DartObject {
        this._writer.print('<');
        this._visitNodeListWithSeparator(node.arguments,", ");
        this._writer.print('>');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        this._visitNode(node.name);
        this._visitNode(node.typeArguments);
        if (node.question != null) {
            this._writer.print('?');
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitNode(node.name);
        this._visitNodeWithPrefix(" extends ",node.bound);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : core.DartObject {
        this._writer.print('<');
        this._visitNodeListWithSeparator(node.typeParameters,", ");
        this._writer.print('>');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitNode(node.name);
        this._visitNodeWithPrefix(" = ",node.initializer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : core.DartObject {
        this._visitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this._visitTokenWithSuffix(node.keyword," ");
        this._visitNodeWithSuffix(node.type," ");
        this._visitNodeListWithSeparator(node.variables,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : core.DartObject {
        this._visitNode(node.variables);
        this._writer.print(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        this._writer.print("while (");
        this._visitNode(node.condition);
        this._writer.print(") ");
        this._visitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : core.DartObject {
        this._writer.print("with ");
        this._visitNodeListWithSeparator(node.mixinTypes,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : core.DartObject {
        if (node.star != null) {
            this._writer.print("yield* ");
        }else {
            this._writer.print("yield ");
        }
        this._visitNode(node.expression);
        this._writer.print(";");
        return null;
    }
    _visitFunctionWithPrefix(prefix : string,body : any) : void {
        if (isNot(body, any)) {
            this._writer.print(prefix);
        }
        this._visitNode(body);
    }
    _visitNode(node : any) : void {
        if (node != null) {
            node.accept(this);
        }
    }
    _visitNodeList(nodes : any) : void {
        this._visitNodeListWithSeparator(nodes,"");
    }
    _visitNodeListWithSeparator(nodes : any,separator : string) : void {
        if (nodes != null) {
            let size : number = nodes.length;
            for(let i : number = 0; i < size; i++){
                if (i > 0) {
                    this._writer.print(separator);
                }
                op(Op.INDEX,nodes,i).accept(this);
            }
        }
    }
    _visitNodeListWithSeparatorAndPrefix(prefix : string,nodes : any,separator : string) : void {
        if (nodes != null) {
            let size : number = nodes.length;
            if (size > 0) {
                this._writer.print(prefix);
                for(let i : number = 0; i < size; i++){
                    if (i > 0) {
                        this._writer.print(separator);
                    }
                    op(Op.INDEX,nodes,i).accept(this);
                }
            }
        }
    }
    _visitNodeListWithSeparatorAndSuffix(nodes : any,separator : string,suffix : string) : void {
        if (nodes != null) {
            let size : number = nodes.length;
            if (size > 0) {
                for(let i : number = 0; i < size; i++){
                    if (i > 0) {
                        this._writer.print(separator);
                    }
                    op(Op.INDEX,nodes,i).accept(this);
                }
                this._writer.print(suffix);
            }
        }
    }
    _visitNodeWithPrefix(prefix : string,node : any) : void {
        if (node != null) {
            this._writer.print(prefix);
            node.accept(this);
        }
    }
    _visitNodeWithSuffix(node : any,suffix : string) : void {
        if (node != null) {
            node.accept(this);
            this._writer.print(suffix);
        }
    }
    _visitTokenWithSuffix(token : any,suffix : string) : void {
        if (token != null) {
            this._writer.print(token.lexeme);
            this._writer.print(suffix);
        }
    }
}

export namespace ToSourceVisitor2 {
    export type Constructors = 'ToSourceVisitor2';
    export type Interface = Omit<ToSourceVisitor2, Constructors>;
}
@DartClass
@Implements(any)
export class ToSourceVisitor2 implements any.Interface {
    @DartPropertyAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    sink : core.DartStringSink;

    constructor(sink : core.DartStringSink) {
    }
    @defaultConstructor
    ToSourceVisitor2(sink : core.DartStringSink) {
        this.sink = sink;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitFunctionWithPrefix(prefix : string,body : any) : void {
        if (isNot(body, any)) {
            this.sink.write(prefix);
        }
        this.safelyVisitNode(body);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitNode(node : any) : void {
        if (node != null) {
            node.accept(this);
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitNodeList(nodes : any) : void {
        this.safelyVisitNodeListWithSeparator(nodes,"");
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitNodeListWithSeparator(nodes : any,separator : string) : void {
        if (nodes != null) {
            let size : number = nodes.length;
            for(let i : number = 0; i < size; i++){
                if (i > 0) {
                    this.sink.write(separator);
                }
                op(Op.INDEX,nodes,i).accept(this);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitNodeListWithSeparatorAndPrefix(prefix : string,nodes : any,separator : string) : void {
        if (nodes != null) {
            let size : number = nodes.length;
            if (size > 0) {
                this.sink.write(prefix);
                for(let i : number = 0; i < size; i++){
                    if (i > 0) {
                        this.sink.write(separator);
                    }
                    op(Op.INDEX,nodes,i).accept(this);
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitNodeListWithSeparatorAndSuffix(nodes : any,separator : string,suffix : string) : void {
        if (nodes != null) {
            let size : number = nodes.length;
            if (size > 0) {
                for(let i : number = 0; i < size; i++){
                    if (i > 0) {
                        this.sink.write(separator);
                    }
                    op(Op.INDEX,nodes,i).accept(this);
                }
                this.sink.write(suffix);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitNodeWithPrefix(prefix : string,node : any) : void {
        if (node != null) {
            this.sink.write(prefix);
            node.accept(this);
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitNodeWithSuffix(node : any,suffix : string) : void {
        if (node != null) {
            node.accept(this);
            this.sink.write(suffix);
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitTokenWithSuffix(token : any,suffix : string) : void {
        if (token != null) {
            this.sink.write(token.lexeme);
            this.sink.write(suffix);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparator(node.strings," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        this.sink.write('@');
        this.safelyVisitNode(node.name);
        this.safelyVisitNodeWithPrefix(".",node.constructorName);
        this.safelyVisitNode(node.arguments);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : core.DartObject {
        this.sink.write('(');
        this.safelyVisitNodeListWithSeparator(node.arguments,", ");
        this.sink.write(')');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.expression);
        this.sink.write(" as ");
        this.safelyVisitNode(node.type);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : boolean {
        this.sink.write("assert (");
        this.safelyVisitNode(node.condition);
        if (node.message != null) {
            this.sink.write(', ');
            this.safelyVisitNode(node.message);
        }
        this.sink.write(");");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : core.DartObject {
        this.sink.write("assert (");
        this.safelyVisitNode(node.condition);
        if (node.message != null) {
            this.sink.write(', ');
            this.safelyVisitNode(node.message);
        }
        this.sink.write(");");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.leftHandSide);
        this.sink.write(' ');
        this.sink.write(node.operator.lexeme);
        this.sink.write(' ');
        this.safelyVisitNode(node.rightHandSide);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : core.DartObject {
        this.sink.write("await ");
        this.safelyVisitNode(node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.leftOperand);
        this.sink.write(' ');
        this.sink.write(node.operator.lexeme);
        this.sink.write(' ');
        this.safelyVisitNode(node.rightOperand);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : core.DartObject {
        this.sink.write('{');
        this.safelyVisitNodeListWithSeparator(node.statements," ");
        this.sink.write('}');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        let keyword : any = node.keyword;
        if (keyword != null) {
            this.sink.write(keyword.lexeme);
            if (node.star != null) {
                this.sink.write('*');
            }
            this.sink.write(' ');
        }
        this.safelyVisitNode(node.block);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : core.DartObject {
        this.sink.write(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        this.sink.write("break");
        this.safelyVisitNodeWithPrefix(" ",node.label);
        this.sink.write(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.target);
        this.safelyVisitNodeList(node.cascadeSections);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        this.safelyVisitNodeWithPrefix("on ",node.exceptionType);
        if (node.catchKeyword != null) {
            if (node.exceptionType != null) {
                this.sink.write(' ');
            }
            this.sink.write("catch (");
            this.safelyVisitNode(node.exceptionParameter);
            this.safelyVisitNodeWithPrefix(", ",node.stackTraceParameter);
            this.sink.write(") ");
        }else {
            this.sink.write(" ");
        }
        this.safelyVisitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitTokenWithSuffix(node.abstractKeyword," ");
        this.sink.write("class ");
        this.safelyVisitNode(node.name);
        this.safelyVisitNode(node.typeParameters);
        this.safelyVisitNodeWithPrefix(" ",node.extendsClause);
        this.safelyVisitNodeWithPrefix(" ",node.withClause);
        this.safelyVisitNodeWithPrefix(" ",node.implementsClause);
        this.sink.write(" {");
        this.safelyVisitNodeListWithSeparator(node.members," ");
        this.sink.write("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        if (node.abstractKeyword != null) {
            this.sink.write("abstract ");
        }
        this.sink.write("class ");
        this.safelyVisitNode(node.name);
        this.safelyVisitNode(node.typeParameters);
        this.sink.write(" = ");
        this.safelyVisitNode(node.superclass);
        this.safelyVisitNodeWithPrefix(" ",node.withClause);
        this.safelyVisitNodeWithPrefix(" ",node.implementsClause);
        this.sink.write(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        let scriptTag : any = node.scriptTag;
        let directives : any = node.directives;
        this.safelyVisitNode(scriptTag);
        let prefix : string = op(Op.EQUALS,scriptTag,null) ? "" : " ";
        this.safelyVisitNodeListWithSeparatorAndPrefix(prefix,directives," ");
        prefix = op(Op.EQUALS,scriptTag,null) && directives.isEmpty ? "" : " ";
        this.safelyVisitNodeListWithSeparatorAndPrefix(prefix,node.declarations," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.condition);
        this.sink.write(" ? ");
        this.safelyVisitNode(node.thenExpression);
        this.sink.write(" : ");
        this.safelyVisitNode(node.elseExpression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConfiguration(node : any) : core.DartObject {
        this.sink.write('if (');
        this.safelyVisitNode(node.name);
        this.safelyVisitNodeWithPrefix(" == ",node.value);
        this.sink.write(') ');
        this.safelyVisitNode(node.uri);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitTokenWithSuffix(node.externalKeyword," ");
        this.safelyVisitTokenWithSuffix(node.constKeyword," ");
        this.safelyVisitTokenWithSuffix(node.factoryKeyword," ");
        this.safelyVisitNode(node.returnType);
        this.safelyVisitNodeWithPrefix(".",node.name);
        this.safelyVisitNode(node.parameters);
        this.safelyVisitNodeListWithSeparatorAndPrefix(" : ",node.initializers,", ");
        this.safelyVisitNodeWithPrefix(" = ",node.redirectedConstructor);
        this.safelyVisitFunctionWithPrefix(" ",node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : core.DartObject {
        this.safelyVisitTokenWithSuffix(node.thisKeyword,".");
        this.safelyVisitNode(node.fieldName);
        this.sink.write(" = ");
        this.safelyVisitNode(node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : core.DartObject {
        this.safelyVisitNode(node.type);
        this.safelyVisitNodeWithPrefix(".",node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        this.sink.write("continue");
        this.safelyVisitNodeWithPrefix(" ",node.label);
        this.sink.write(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitTokenWithSuffix(node.keyword," ");
        this.safelyVisitNodeWithSuffix(node.type," ");
        this.safelyVisitNode(node.identifier);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        this.safelyVisitNode(node.parameter);
        if (node.separator != null) {
            this.sink.write(" ");
            this.sink.write(node.separator.lexeme);
            this.safelyVisitNodeWithPrefix(" ",node.defaultValue);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        this.sink.write("do ");
        this.safelyVisitNode(node.body);
        this.sink.write(" while (");
        this.safelyVisitNode(node.condition);
        this.sink.write(");");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDottedName(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparator(node.components,".");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : core.DartObject {
        this.sink.write(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : core.DartObject {
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : core.DartObject {
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumConstantDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitNode(node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("enum ");
        this.safelyVisitNode(node.name);
        this.sink.write(" {");
        this.safelyVisitNodeListWithSeparator(node.constants,", ");
        this.sink.write("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("export ");
        this.safelyVisitNode(node.uri);
        this.safelyVisitNodeListWithSeparatorAndPrefix(" ",node.combinators," ");
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        let keyword : any = node.keyword;
        if (keyword != null) {
            this.sink.write(keyword.lexeme);
            this.sink.write(' ');
        }
        this.sink.write("=> ");
        this.safelyVisitNode(node.expression);
        if (node.semicolon != null) {
            this.sink.write(';');
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : core.DartObject {
        this.safelyVisitNode(node.expression);
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : core.DartObject {
        this.sink.write("extends ");
        this.safelyVisitNode(node.superclass);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitTokenWithSuffix(node.staticKeyword," ");
        this.safelyVisitNode(node.fields);
        this.sink.write(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata,' ',' ');
        this.safelyVisitTokenWithSuffix(node.covariantKeyword,' ');
        this.safelyVisitTokenWithSuffix(node.keyword," ");
        this.safelyVisitNodeWithSuffix(node.type," ");
        this.sink.write("this.");
        this.safelyVisitNode(node.identifier);
        this.safelyVisitNode(node.typeParameters);
        this.safelyVisitNode(node.parameters);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : core.DartObject {
        let loopVariable : any = node.loopVariable;
        if (node.awaitKeyword != null) {
            this.sink.write("await ");
        }
        this.sink.write("for (");
        if (op(Op.EQUALS,loopVariable,null)) {
            this.safelyVisitNode(node.identifier);
        }else {
            this.safelyVisitNode(loopVariable);
        }
        this.sink.write(" in ");
        this.safelyVisitNode(node.iterable);
        this.sink.write(") ");
        this.safelyVisitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : core.DartObject {
        let groupEnd : string = null;
        this.sink.write('(');
        let parameters : any = node.parameters;
        let size : number = parameters.length;
        for(let i : number = 0; i < size; i++){
            let parameter : any = op(Op.INDEX,parameters,i);
            if (i > 0) {
                this.sink.write(", ");
            }
            if (groupEnd == null && is(parameter, any)) {
                if (op(Op.EQUALS,parameter.kind,ParameterKind.NAMED)) {
                    groupEnd = "}";
                    this.sink.write('{');
                }else {
                    groupEnd = "]";
                    this.sink.write('[');
                }
            }
            parameter.accept(this);
        }
        if (groupEnd != null) {
            this.sink.write(groupEnd);
        }
        this.sink.write(')');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        let initialization : any = node.initialization;
        this.sink.write("for (");
        if (initialization != null) {
            this.safelyVisitNode(initialization);
        }else {
            this.safelyVisitNode(node.variables);
        }
        this.sink.write(";");
        this.safelyVisitNodeWithPrefix(" ",node.condition);
        this.sink.write(";");
        this.safelyVisitNodeListWithSeparatorAndPrefix(" ",node.updaters,", ");
        this.sink.write(") ");
        this.safelyVisitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitTokenWithSuffix(node.externalKeyword," ");
        this.safelyVisitNodeWithSuffix(node.returnType," ");
        this.safelyVisitTokenWithSuffix(node.propertyKeyword," ");
        this.safelyVisitNode(node.name);
        this.safelyVisitNode(node.functionExpression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : core.DartObject {
        this.safelyVisitNode(node.functionDeclaration);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.typeParameters);
        this.safelyVisitNode(node.parameters);
        if (isNot(node.body, any)) {
            this.sink.write(' ');
        }
        this.safelyVisitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        this.safelyVisitNode(node.function);
        this.safelyVisitNode(node.typeArguments);
        this.safelyVisitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("typedef ");
        this.safelyVisitNodeWithSuffix(node.returnType," ");
        this.safelyVisitNode(node.name);
        this.safelyVisitNode(node.typeParameters);
        this.safelyVisitNode(node.parameters);
        this.sink.write(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata,' ',' ');
        this.safelyVisitTokenWithSuffix(node.covariantKeyword,' ');
        this.safelyVisitNodeWithSuffix(node.returnType," ");
        this.safelyVisitNode(node.identifier);
        this.safelyVisitNode(node.typeParameters);
        this.safelyVisitNode(node.parameters);
        if (node.question != null) {
            this.sink.write('?');
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        this.safelyVisitNode(node.returnType);
        this.sink.write(' Function');
        this.safelyVisitNode(node.typeParameters);
        this.safelyVisitNode(node.parameters);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("typedef ");
        this.safelyVisitNode(node.name);
        this.safelyVisitNode(node.typeParameters);
        this.sink.write(" = ");
        this.safelyVisitNode(node.functionType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : core.DartObject {
        this.sink.write("hide ");
        this.safelyVisitNodeListWithSeparator(node.hiddenNames,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        this.sink.write("if (");
        this.safelyVisitNode(node.condition);
        this.sink.write(") ");
        this.safelyVisitNode(node.thenStatement);
        this.safelyVisitNodeWithPrefix(" else ",node.elseStatement);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : core.DartObject {
        this.sink.write("implements ");
        this.safelyVisitNodeListWithSeparator(node.interfaces,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("import ");
        this.safelyVisitNode(node.uri);
        if (node.deferredKeyword != null) {
            this.sink.write(" deferred");
        }
        this.safelyVisitNodeWithPrefix(" as ",node.prefix);
        this.safelyVisitNodeListWithSeparatorAndPrefix(" ",node.combinators," ");
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        if (node.isCascaded) {
            this.sink.write("..");
        }else {
            this.safelyVisitNode(node.target);
        }
        this.sink.write('[');
        this.safelyVisitNode(node.index);
        this.sink.write(']');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        this.safelyVisitTokenWithSuffix(node.keyword," ");
        this.safelyVisitNode(node.constructorName);
        this.safelyVisitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : core.DartObject {
        this.sink.write(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : core.DartObject {
        if (node.rightBracket != null) {
            this.sink.write("${");
            this.safelyVisitNode(node.expression);
            this.sink.write("}");
        }else {
            this.sink.write("$");
            this.safelyVisitNode(node.expression);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : core.DartObject {
        this.sink.write(node.contents.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.expression);
        if (op(Op.EQUALS,node.notOperator,null)) {
            this.sink.write(" is ");
        }else {
            this.sink.write(" is! ");
        }
        this.safelyVisitNode(node.type);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : core.DartObject {
        this.safelyVisitNode(node.label);
        this.sink.write(":");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.labels," "," ");
        this.safelyVisitNode(node.statement);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("library ");
        this.safelyVisitNode(node.name);
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : core.DartObject {
        this.sink.write(node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        if (node.constKeyword != null) {
            this.sink.write(node.constKeyword.lexeme);
            this.sink.write(' ');
        }
        this.safelyVisitNodeWithSuffix(node.typeArguments," ");
        this.sink.write("[");
        this.safelyVisitNodeListWithSeparator(node.elements,", ");
        this.sink.write("]");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        if (node.constKeyword != null) {
            this.sink.write(node.constKeyword.lexeme);
            this.sink.write(' ');
        }
        this.safelyVisitNodeWithSuffix(node.typeArguments," ");
        this.sink.write("{");
        this.safelyVisitNodeListWithSeparator(node.entries,", ");
        this.sink.write("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : core.DartObject {
        this.safelyVisitNode(node.key);
        this.sink.write(" : ");
        this.safelyVisitNode(node.value);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitTokenWithSuffix(node.externalKeyword," ");
        this.safelyVisitTokenWithSuffix(node.modifierKeyword," ");
        this.safelyVisitNodeWithSuffix(node.returnType," ");
        this.safelyVisitTokenWithSuffix(node.propertyKeyword," ");
        this.safelyVisitTokenWithSuffix(node.operatorKeyword," ");
        this.safelyVisitNode(node.name);
        if (!node.isGetter) {
            this.safelyVisitNode(node.typeParameters);
            this.safelyVisitNode(node.parameters);
        }
        this.safelyVisitFunctionWithPrefix(" ",node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        if (node.isCascaded) {
            this.sink.write("..");
        }else {
            if (node.target != null) {
                node.target.accept(this);
                this.sink.write(node.operator.lexeme);
            }
        }
        this.safelyVisitNode(node.methodName);
        this.safelyVisitNode(node.typeArguments);
        this.safelyVisitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.name);
        this.safelyVisitNodeWithPrefix(" ",node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : core.DartObject {
        this.sink.write("native ");
        this.safelyVisitNode(node.name);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : core.DartObject {
        this.sink.write("native ");
        this.safelyVisitNode(node.stringLiteral);
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : core.DartObject {
        this.sink.write("null");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : core.DartObject {
        this.sink.write('(');
        this.safelyVisitNode(node.expression);
        this.sink.write(')');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("part ");
        this.safelyVisitNode(node.uri);
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.sink.write("part of ");
        this.safelyVisitNode(node.libraryName);
        this.sink.write(';');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        this.safelyVisitNode(node.operand);
        this.sink.write(node.operator.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        this.safelyVisitNode(node.prefix);
        this.sink.write('.');
        this.safelyVisitNode(node.identifier);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        this.sink.write(node.operator.lexeme);
        this.safelyVisitNode(node.operand);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        if (node.isCascaded) {
            this.sink.write("..");
        }else {
            this.safelyVisitNode(node.target);
            this.sink.write(node.operator.lexeme);
        }
        this.safelyVisitNode(node.propertyName);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        this.sink.write("this");
        this.safelyVisitNodeWithPrefix(".",node.constructorName);
        this.safelyVisitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : core.DartObject {
        this.sink.write("rethrow");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : core.DartObject {
        let expression : any = node.expression;
        if (op(Op.EQUALS,expression,null)) {
            this.sink.write("return;");
        }else {
            this.sink.write("return ");
            expression.accept(this);
            this.sink.write(";");
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitScriptTag(node : any) : core.DartObject {
        this.sink.write(node.scriptTag.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : core.DartObject {
        this.sink.write("show ");
        this.safelyVisitNodeListWithSeparator(node.shownNames,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata,' ',' ');
        this.safelyVisitTokenWithSuffix(node.covariantKeyword,' ');
        this.safelyVisitTokenWithSuffix(node.keyword," ");
        this.safelyVisitNode(node.type);
        if (node.type != null && node.identifier != null) {
            this.sink.write(' ');
        }
        this.safelyVisitNode(node.identifier);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        this.sink.write(node.token.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : core.DartObject {
        this.sink.write(node.literal.lexeme);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : core.DartObject {
        this.safelyVisitNodeList(node.elements);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        this.sink.write("super");
        this.safelyVisitNodeWithPrefix(".",node.constructorName);
        this.safelyVisitNode(node.argumentList);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : core.DartObject {
        this.sink.write("super");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.labels," "," ");
        this.sink.write("case ");
        this.safelyVisitNode(node.expression);
        this.sink.write(": ");
        this.safelyVisitNodeListWithSeparator(node.statements," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.labels," "," ");
        this.sink.write("default: ");
        this.safelyVisitNodeListWithSeparator(node.statements," ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : core.DartObject {
        this.sink.write("switch (");
        this.safelyVisitNode(node.expression);
        this.sink.write(") {");
        this.safelyVisitNodeListWithSeparator(node.members," ");
        this.sink.write("}");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : core.DartObject {
        this.sink.write("#");
        let components : core.DartList<any> = node.components;
        for(let i : number = 0; i < components.length; i++){
            if (i > 0) {
                this.sink.write(".");
            }
            this.sink.write(components[i].lexeme);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : core.DartObject {
        this.sink.write("this");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : core.DartObject {
        this.sink.write("throw ");
        this.safelyVisitNode(node.expression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeWithSuffix(node.variables,";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : core.DartObject {
        this.sink.write("try ");
        this.safelyVisitNode(node.body);
        this.safelyVisitNodeListWithSeparatorAndPrefix(" ",node.catchClauses," ");
        this.safelyVisitNodeWithPrefix(" finally ",node.finallyBlock);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : core.DartObject {
        this.sink.write('<');
        this.safelyVisitNodeListWithSeparator(node.arguments,", ");
        this.sink.write('>');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        this.safelyVisitNode(node.name);
        this.safelyVisitNode(node.typeArguments);
        if (node.question != null) {
            this.sink.write('?');
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitNode(node.name);
        this.safelyVisitNodeWithPrefix(" extends ",node.bound);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : core.DartObject {
        this.sink.write('<');
        this.safelyVisitNodeListWithSeparator(node.typeParameters,", ");
        this.sink.write('>');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitNode(node.name);
        this.safelyVisitNodeWithPrefix(" = ",node.initializer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : core.DartObject {
        this.safelyVisitNodeListWithSeparatorAndSuffix(node.metadata," "," ");
        this.safelyVisitTokenWithSuffix(node.keyword," ");
        this.safelyVisitNodeWithSuffix(node.type," ");
        this.safelyVisitNodeListWithSeparator(node.variables,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : core.DartObject {
        this.safelyVisitNode(node.variables);
        this.sink.write(";");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        this.sink.write("while (");
        this.safelyVisitNode(node.condition);
        this.sink.write(") ");
        this.safelyVisitNode(node.body);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : core.DartObject {
        this.sink.write("with ");
        this.safelyVisitNodeListWithSeparator(node.mixinTypes,", ");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : core.DartObject {
        if (node.star != null) {
            this.sink.write("yield* ");
        }else {
            this.sink.write("yield ");
        }
        this.safelyVisitNode(node.expression);
        this.sink.write(";");
        return null;
    }
}

export class properties {
}

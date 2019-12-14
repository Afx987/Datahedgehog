/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/dart/ast/ast_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AstFactory {
    export type Constructors = 'AstFactory';
    export type Interface = Omit<AstFactory, Constructors>;
}
@DartClass
export class AstFactory {
    @Abstract
    adjacentStrings(strings : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    annotation(atSign : any,name : any,period : any,constructorName : any,arguments : any) : any{ throw 'abstract'}
    @Abstract
    argumentList(leftParenthesis : any,arguments : core.DartList<any>,rightParenthesis : any) : any{ throw 'abstract'}
    @Abstract
    asExpression(expression : any,asOperator : any,type : any) : any{ throw 'abstract'}
    @Abstract
    assertInitializer(assertKeyword : any,leftParenthesis : any,condition : any,comma : any,message : any,rightParenthesis : any) : any{ throw 'abstract'}
    @Abstract
    assertStatement(assertKeyword : any,leftParenthesis : any,condition : any,comma : any,message : any,rightParenthesis : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    assignmentExpression(leftHandSide : any,operator : any,rightHandSide : any) : any{ throw 'abstract'}
    @Abstract
    awaitExpression(awaitKeyword : any,expression : any) : any{ throw 'abstract'}
    @Abstract
    binaryExpression(leftOperand : any,operator : any,rightOperand : any) : any{ throw 'abstract'}
    @Abstract
    block(leftBracket : any,statements : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    blockComment(tokens : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    blockFunctionBody(keyword : any,star : any,block : any) : any{ throw 'abstract'}
    @Abstract
    booleanLiteral(literal : any,value : boolean) : any{ throw 'abstract'}
    @Abstract
    breakStatement(breakKeyword : any,label : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    cascadeExpression(target : any,cascadeSections : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    catchClause(onKeyword : any,exceptionType : any,catchKeyword : any,leftParenthesis : any,exceptionParameter : any,comma : any,stackTraceParameter : any,rightParenthesis : any,body : any) : any{ throw 'abstract'}
    @Abstract
    classDeclaration(comment : any,metadata : core.DartList<any>,abstractKeyword : any,classKeyword : any,name : any,typeParameters : any,extendsClause : any,withClause : any,implementsClause : any,leftBracket : any,members : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    classTypeAlias(comment : any,metadata : core.DartList<any>,keyword : any,name : any,typeParameters : any,equals : any,abstractKeyword : any,superclass : any,withClause : any,implementsClause : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    commentReference(newKeyword : any,identifier : any) : any{ throw 'abstract'}
    @Abstract
    compilationUnit(beginToken : any,scriptTag : any,directives : core.DartList<any>,declarations : core.DartList<any>,endToken : any) : any{ throw 'abstract'}
    @Abstract
    conditionalExpression(condition : any,question : any,thenExpression : any,colon : any,elseExpression : any) : any{ throw 'abstract'}
    @Abstract
    configuration(ifKeyword : any,leftParenthesis : any,name : any,equalToken : any,value : any,rightParenthesis : any,libraryUri : any) : any{ throw 'abstract'}
    @Abstract
    constructorDeclaration(comment : any,metadata : core.DartList<any>,externalKeyword : any,constKeyword : any,factoryKeyword : any,returnType : any,period : any,name : any,parameters : any,separator : any,initializers : core.DartList<any>,redirectedConstructor : any,body : any) : any{ throw 'abstract'}
    @Abstract
    constructorFieldInitializer(thisKeyword : any,period : any,fieldName : any,equals : any,expression : any) : any{ throw 'abstract'}
    @Abstract
    constructorName(type : any,period : any,name : any) : any{ throw 'abstract'}
    @Abstract
    continueStatement(continueKeyword : any,label : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    declaredIdentifier(comment : any,metadata : core.DartList<any>,keyword : any,type : any,identifier : any) : any{ throw 'abstract'}
    @Abstract
    defaultFormalParameter(parameter : any,kind : any,separator : any,defaultValue : any) : any{ throw 'abstract'}
    @Abstract
    documentationComment(tokens : core.DartList<any>,references? : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    doStatement(doKeyword : any,body : any,whileKeyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    dottedName(components : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    doubleLiteral(literal : any,value : double) : any{ throw 'abstract'}
    @Abstract
    emptyFunctionBody(semicolon : any) : any{ throw 'abstract'}
    @Abstract
    emptyStatement(semicolon : any) : any{ throw 'abstract'}
    @Abstract
    endOfLineComment(tokens : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    enumConstantDeclaration(comment : any,metadata : core.DartList<any>,name : any) : any{ throw 'abstract'}
    @Abstract
    enumDeclaration(comment : any,metadata : core.DartList<any>,enumKeyword : any,name : any,leftBracket : any,constants : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    exportDirective(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,combinators : core.DartList<any>,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    expressionFunctionBody(keyword : any,functionDefinition : any,expression : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    expressionStatement(expression : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    extendsClause(extendsKeyword : any,superclass : any) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    fieldDeclaration(comment : any,metadata : core.DartList<any>,staticKeyword : any,fieldList : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    fieldDeclaration2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,staticKeyword? : any,fieldList? : any,semicolon? : any}) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    fieldFormalParameter(comment : any,metadata : core.DartList<any>,keyword : any,type : any,thisKeyword : any,period : any,identifier : any,typeParameters : any,parameters : any) : any{ throw 'abstract'}
    @Abstract
    fieldFormalParameter2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,keyword? : any,type? : any,thisKeyword? : any,period? : any,identifier? : any,typeParameters? : any,parameters? : any}) : any{ throw 'abstract'}
    @Abstract
    forEachStatementWithDeclaration(awaitKeyword : any,forKeyword : any,leftParenthesis : any,loopVariable : any,inKeyword : any,iterator : any,rightParenthesis : any,body : any) : any{ throw 'abstract'}
    @Abstract
    forEachStatementWithReference(awaitKeyword : any,forKeyword : any,leftParenthesis : any,identifier : any,inKeyword : any,iterator : any,rightParenthesis : any,body : any) : any{ throw 'abstract'}
    @Abstract
    formalParameterList(leftParenthesis : any,parameters : core.DartList<any>,leftDelimiter : any,rightDelimiter : any,rightParenthesis : any) : any{ throw 'abstract'}
    @Abstract
    forStatement(forKeyword : any,leftParenthesis : any,variableList : any,initialization : any,leftSeparator : any,condition : any,rightSeparator : any,updaters : core.DartList<any>,rightParenthesis : any,body : any) : any{ throw 'abstract'}
    @Abstract
    functionDeclaration(comment : any,metadata : core.DartList<any>,externalKeyword : any,returnType : any,propertyKeyword : any,name : any,functionExpression : any) : any{ throw 'abstract'}
    @Abstract
    functionDeclarationStatement(functionDeclaration : any) : any{ throw 'abstract'}
    @Abstract
    functionExpression(typeParameters : any,parameters : any,body : any) : any{ throw 'abstract'}
    @Abstract
    functionExpressionInvocation(function : any,typeArguments : any,argumentList : any) : any{ throw 'abstract'}
    @Abstract
    functionTypeAlias(comment : any,metadata : core.DartList<any>,keyword : any,returnType : any,name : any,typeParameters : any,parameters : any,semicolon : any) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    functionTypedFormalParameter(comment : any,metadata : core.DartList<any>,returnType : any,identifier : any,typeParameters : any,parameters : any,_namedArguments? : {question? : any}) : any{ throw 'abstract'}
    @Abstract
    functionTypedFormalParameter2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,returnType? : any,identifier? : any,typeParameters? : any,parameters? : any,question? : any}) : any{ throw 'abstract'}
    @Abstract
    genericFunctionType(returnType : any,functionKeyword : any,typeParameters : any,parameters : any) : any{ throw 'abstract'}
    @Abstract
    genericTypeAlias(comment : any,metadata : core.DartList<any>,typedefKeyword : any,name : any,typeParameters : any,equals : any,functionType : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    hideCombinator(keyword : any,hiddenNames : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    ifStatement(ifKeyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,thenStatement : any,elseKeyword : any,elseStatement : any) : any{ throw 'abstract'}
    @Abstract
    implementsClause(implementsKeyword : any,interfaces : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    importDirective(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,deferredKeyword : any,asKeyword : any,prefix : any,combinators : core.DartList<any>,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    indexExpressionForCascade(period : any,leftBracket : any,index : any,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    indexExpressionForTarget(target : any,leftBracket : any,index : any,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    instanceCreationExpression(keyword : any,constructorName : any,argumentList : any) : any{ throw 'abstract'}
    @Abstract
    integerLiteral(literal : any,value : number) : any{ throw 'abstract'}
    @Abstract
    interpolationExpression(leftBracket : any,expression : any,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    interpolationString(contents : any,value : string) : any{ throw 'abstract'}
    @Abstract
    isExpression(expression : any,isOperator : any,notOperator : any,type : any) : any{ throw 'abstract'}
    @Abstract
    label(label : any,colon : any) : any{ throw 'abstract'}
    @Abstract
    labeledStatement(labels : core.DartList<any>,statement : any) : any{ throw 'abstract'}
    @Abstract
    libraryDirective(comment : any,metadata : core.DartList<any>,libraryKeyword : any,name : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    libraryIdentifier(components : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    listLiteral(constKeyword : any,typeArguments : any,leftBracket : any,elements : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    mapLiteral(constKeyword : any,typeArguments : any,leftBracket : any,entries : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    mapLiteralEntry(key : any,separator : any,value : any) : any{ throw 'abstract'}
    @Abstract
    methodDeclaration(comment : any,metadata : core.DartList<any>,externalKeyword : any,modifierKeyword : any,returnType : any,propertyKeyword : any,operatorKeyword : any,name : any,typeParameters : any,parameters : any,body : any) : any{ throw 'abstract'}
    @Abstract
    methodInvocation(target : any,operator : any,methodName : any,typeArguments : any,argumentList : any) : any{ throw 'abstract'}
    @Abstract
    namedExpression(name : any,expression : any) : any{ throw 'abstract'}
    @Abstract
    nativeClause(nativeKeyword : any,name : any) : any{ throw 'abstract'}
    @Abstract
    nativeFunctionBody(nativeKeyword : any,stringLiteral : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    nodeList(owner : any,elements? : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    nullLiteral(literal : any) : any{ throw 'abstract'}
    @Abstract
    parenthesizedExpression(leftParenthesis : any,expression : any,rightParenthesis : any) : any{ throw 'abstract'}
    @Abstract
    partDirective(comment : any,metadata : core.DartList<any>,partKeyword : any,partUri : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    partOfDirective(comment : any,metadata : core.DartList<any>,partKeyword : any,ofKeyword : any,uri : any,libraryName : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    postfixExpression(operand : any,operator : any) : any{ throw 'abstract'}
    @Abstract
    prefixedIdentifier(prefix : any,period : any,identifier : any) : any{ throw 'abstract'}
    @Abstract
    prefixExpression(operator : any,operand : any) : any{ throw 'abstract'}
    @Abstract
    propertyAccess(target : any,operator : any,propertyName : any) : any{ throw 'abstract'}
    @Abstract
    redirectingConstructorInvocation(thisKeyword : any,period : any,constructorName : any,argumentList : any) : any{ throw 'abstract'}
    @Abstract
    rethrowExpression(rethrowKeyword : any) : any{ throw 'abstract'}
    @Abstract
    returnStatement(returnKeyword : any,expression : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    scriptTag(scriptTag : any) : any{ throw 'abstract'}
    @Abstract
    showCombinator(keyword : any,shownNames : core.DartList<any>) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    simpleFormalParameter(comment : any,metadata : core.DartList<any>,keyword : any,type : any,identifier : any) : any{ throw 'abstract'}
    @Abstract
    simpleFormalParameter2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,keyword? : any,type? : any,identifier? : any}) : any{ throw 'abstract'}
    @Abstract
    simpleIdentifier(token : any,_namedArguments? : {isDeclaration? : boolean}) : any{ throw 'abstract'}
    @Abstract
    simpleStringLiteral(literal : any,value : string) : any{ throw 'abstract'}
    @Abstract
    stringInterpolation(elements : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    superConstructorInvocation(superKeyword : any,period : any,constructorName : any,argumentList : any) : any{ throw 'abstract'}
    @Abstract
    superExpression(superKeyword : any) : any{ throw 'abstract'}
    @Abstract
    switchCase(labels : core.DartList<any>,keyword : any,expression : any,colon : any,statements : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    switchDefault(labels : core.DartList<any>,keyword : any,colon : any,statements : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    switchStatement(switchKeyword : any,leftParenthesis : any,expression : any,rightParenthesis : any,leftBracket : any,members : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    symbolLiteral(poundSign : any,components : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    thisExpression(thisKeyword : any) : any{ throw 'abstract'}
    @Abstract
    throwExpression(throwKeyword : any,expression : any) : any{ throw 'abstract'}
    @Abstract
    topLevelVariableDeclaration(comment : any,metadata : core.DartList<any>,variableList : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    tryStatement(tryKeyword : any,body : any,catchClauses : core.DartList<any>,finallyKeyword : any,finallyBlock : any) : any{ throw 'abstract'}
    @Abstract
    typeArgumentList(leftBracket : any,arguments : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    typeName(name : any,typeArguments : any,_namedArguments? : {question? : any}) : any{ throw 'abstract'}
    @Abstract
    typeParameter(comment : any,metadata : core.DartList<any>,name : any,extendsKeyword : any,bound : any) : any{ throw 'abstract'}
    @Abstract
    typeParameterList(leftBracket : any,typeParameters : core.DartList<any>,rightBracket : any) : any{ throw 'abstract'}
    @Abstract
    variableDeclaration(name : any,equals : any,initializer : any) : any{ throw 'abstract'}
    @Abstract
    variableDeclarationList(comment : any,metadata : core.DartList<any>,keyword : any,type : any,variables : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    variableDeclarationStatement(variableList : any,semicolon : any) : any{ throw 'abstract'}
    @Abstract
    whileStatement(whileKeyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,body : any) : any{ throw 'abstract'}
    @Abstract
    withClause(withKeyword : any,mixinTypes : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    yieldStatement(yieldKeyword : any,star : any,expression : any,semicolon : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AstFactory() {
    }
}

export class properties {
}

/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/ast/ast_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AstFactoryImpl {
    export type Constructors = 'AstFactoryImpl';
    export type Interface = Omit<AstFactoryImpl, Constructors>;
}
@DartClass
export class AstFactoryImpl extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    adjacentStrings(strings : core.DartList<any>) : any {
        return new bare.createInstance(any,null,strings);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    annotation(atSign : any,name : any,period : any,constructorName : any,arguments : any) : any {
        return new bare.createInstance(any,null,atSign,name,period,constructorName,arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    argumentList(leftParenthesis : any,arguments : core.DartList<any>,rightParenthesis : any) : any {
        return new bare.createInstance(any,null,leftParenthesis,arguments,rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asExpression(expression : any,asOperator : any,type : any) : any {
        return new bare.createInstance(any,null,expression,asOperator,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertInitializer(assertKeyword : any,leftParenthesis : any,condition : any,comma : any,message : any,rightParenthesis : any) : any {
        return new bare.createInstance(any,null,assertKeyword,leftParenthesis,condition,comma,message,rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertStatement(assertKeyword : any,leftParenthesis : any,condition : any,comma : any,message : any,rightParenthesis : any,semicolon : any) : any {
        return new bare.createInstance(any,null,assertKeyword,leftParenthesis,condition,comma,message,rightParenthesis,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assignmentExpression(leftHandSide : any,operator : any,rightHandSide : any) : any {
        return new bare.createInstance(any,null,leftHandSide,operator,rightHandSide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    awaitExpression(awaitKeyword : any,expression : any) : any {
        return new bare.createInstance(any,null,awaitKeyword,expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    binaryExpression(leftOperand : any,operator : any,rightOperand : any) : any {
        return new bare.createInstance(any,null,leftOperand,operator,rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    block(leftBracket : any,statements : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,leftBracket,statements,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    blockComment(tokens : core.DartList<any>) : any {
        return CommentImpl.createBlockComment(tokens);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    blockFunctionBody(keyword : any,star : any,block : any) : any {
        return new bare.createInstance(any,null,keyword,star,block);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    booleanLiteral(literal : any,value : boolean) : any {
        return new bare.createInstance(any,null,literal,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    breakStatement(breakKeyword : any,label : any,semicolon : any) : any {
        return new bare.createInstance(any,null,breakKeyword,label,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    cascadeExpression(target : any,cascadeSections : core.DartList<any>) : any {
        return new bare.createInstance(any,null,target,cascadeSections);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    catchClause(onKeyword : any,exceptionType : any,catchKeyword : any,leftParenthesis : any,exceptionParameter : any,comma : any,stackTraceParameter : any,rightParenthesis : any,body : any) : any {
        return new bare.createInstance(any,null,onKeyword,exceptionType,catchKeyword,leftParenthesis,exceptionParameter,comma,stackTraceParameter,rightParenthesis,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    classDeclaration(comment : any,metadata : core.DartList<any>,abstractKeyword : any,classKeyword : any,name : any,typeParameters : any,extendsClause : any,withClause : any,implementsClause : any,leftBracket : any,members : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,comment,metadata,abstractKeyword,classKeyword,name,typeParameters,extendsClause,withClause,implementsClause,leftBracket,members,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    classTypeAlias(comment : any,metadata : core.DartList<any>,keyword : any,name : any,typeParameters : any,equals : any,abstractKeyword : any,superclass : any,withClause : any,implementsClause : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,keyword,name,typeParameters,equals,abstractKeyword,superclass,withClause,implementsClause,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    commentReference(newKeyword : any,identifier : any) : any {
        return new bare.createInstance(any,null,newKeyword,identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compilationUnit(beginToken : any,scriptTag : any,directives : core.DartList<any>,declarations : core.DartList<any>,endToken : any) : any {
        return new bare.createInstance(any,null,beginToken,scriptTag,directives,declarations,endToken);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    conditionalExpression(condition : any,question : any,thenExpression : any,colon : any,elseExpression : any) : any {
        return new bare.createInstance(any,null,condition,question,thenExpression,colon,elseExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    configuration(ifKeyword : any,leftParenthesis : any,name : any,equalToken : any,value : any,rightParenthesis : any,libraryUri : any) : any {
        return new bare.createInstance(any,null,ifKeyword,leftParenthesis,name,equalToken,value,rightParenthesis,libraryUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    constructorDeclaration(comment : any,metadata : core.DartList<any>,externalKeyword : any,constKeyword : any,factoryKeyword : any,returnType : any,period : any,name : any,parameters : any,separator : any,initializers : core.DartList<any>,redirectedConstructor : any,body : any) : any {
        return new bare.createInstance(any,null,comment,metadata,externalKeyword,constKeyword,factoryKeyword,returnType,period,name,parameters,separator,initializers,redirectedConstructor,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    constructorFieldInitializer(thisKeyword : any,period : any,fieldName : any,equals : any,expression : any) : any {
        return new bare.createInstance(any,null,thisKeyword,period,fieldName,equals,expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    constructorName(type : any,period : any,name : any) : any {
        return new bare.createInstance(any,null,type,period,name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    continueStatement(continueKeyword : any,label : any,semicolon : any) : any {
        return new bare.createInstance(any,null,continueKeyword,label,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredIdentifier(comment : any,metadata : core.DartList<any>,keyword : any,type : any,identifier : any) : any {
        return new bare.createInstance(any,null,comment,metadata,keyword,type,identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultFormalParameter(parameter : any,kind : any,separator : any,defaultValue : any) : any {
        return new bare.createInstance(any,null,parameter,kind,separator,defaultValue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    documentationComment(tokens : core.DartList<any>,references? : core.DartList<any>) : any {
        return CommentImpl.createDocumentationCommentWithReferences(tokens,(references || new core.DartList.literal<any>()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    doStatement(doKeyword : any,body : any,whileKeyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,semicolon : any) : any {
        return new bare.createInstance(any,null,doKeyword,body,whileKeyword,leftParenthesis,condition,rightParenthesis,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dottedName(components : core.DartList<any>) : any {
        return new bare.createInstance(any,null,components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    doubleLiteral(literal : any,value : double) : any {
        return new bare.createInstance(any,null,literal,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    emptyFunctionBody(semicolon : any) : any {
        return new bare.createInstance(any,null,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    emptyStatement(semicolon : any) : any {
        return new bare.createInstance(any,null,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endOfLineComment(tokens : core.DartList<any>) : any {
        return CommentImpl.createEndOfLineComment(tokens);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enumConstantDeclaration(comment : any,metadata : core.DartList<any>,name : any) : any {
        return new bare.createInstance(any,null,comment,metadata,name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enumDeclaration(comment : any,metadata : core.DartList<any>,enumKeyword : any,name : any,leftBracket : any,constants : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,comment,metadata,enumKeyword,name,leftBracket,constants,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exportDirective(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,combinators : core.DartList<any>,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,keyword,libraryUri,configurations,combinators,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    expressionFunctionBody(keyword : any,functionDefinition : any,expression : any,semicolon : any) : any {
        return new bare.createInstance(any,null,keyword,functionDefinition,expression,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    expressionStatement(expression : any,semicolon : any) : any {
        return new bare.createInstance(any,null,expression,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    extendsClause(extendsKeyword : any,superclass : any) : any {
        return new bare.createInstance(any,null,extendsKeyword,superclass);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fieldDeclaration(comment : any,metadata : core.DartList<any>,staticKeyword : any,fieldList : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,null,staticKeyword,fieldList,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fieldDeclaration2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,staticKeyword? : any,fieldList? : any,semicolon? : any}) : any {
        let {comment,metadata,covariantKeyword,staticKeyword,fieldList,semicolon} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,comment,metadata,covariantKeyword,staticKeyword,fieldList,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fieldFormalParameter(comment : any,metadata : core.DartList<any>,keyword : any,type : any,thisKeyword : any,period : any,identifier : any,typeParameters : any,parameters : any) : any {
        return new bare.createInstance(any,null,comment,metadata,null,keyword,type,thisKeyword,period,identifier,typeParameters,parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fieldFormalParameter2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,keyword? : any,type? : any,thisKeyword? : any,period? : any,identifier? : any,typeParameters? : any,parameters? : any}) : any {
        let {comment,metadata,covariantKeyword,keyword,type,thisKeyword,period,identifier,typeParameters,parameters} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,comment,metadata,covariantKeyword,keyword,type,thisKeyword,period,identifier,typeParameters,parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachStatementWithDeclaration(awaitKeyword : any,forKeyword : any,leftParenthesis : any,loopVariable : any,inKeyword : any,iterator : any,rightParenthesis : any,body : any) : any {
        return new bare.createInstance(any,null,awaitKeyword,forKeyword,leftParenthesis,loopVariable,inKeyword,iterator,rightParenthesis,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachStatementWithReference(awaitKeyword : any,forKeyword : any,leftParenthesis : any,identifier : any,inKeyword : any,iterator : any,rightParenthesis : any,body : any) : any {
        return new bare.createInstance(any,null,awaitKeyword,forKeyword,leftParenthesis,identifier,inKeyword,iterator,rightParenthesis,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formalParameterList(leftParenthesis : any,parameters : core.DartList<any>,leftDelimiter : any,rightDelimiter : any,rightParenthesis : any) : any {
        return new bare.createInstance(any,null,leftParenthesis,parameters,leftDelimiter,rightDelimiter,rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forStatement(forKeyword : any,leftParenthesis : any,variableList : any,initialization : any,leftSeparator : any,condition : any,rightSeparator : any,updaters : core.DartList<any>,rightParenthesis : any,body : any) : any {
        return new bare.createInstance(any,null,forKeyword,leftParenthesis,variableList,initialization,leftSeparator,condition,rightSeparator,updaters,rightParenthesis,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionDeclaration(comment : any,metadata : core.DartList<any>,externalKeyword : any,returnType : any,propertyKeyword : any,name : any,functionExpression : any) : any {
        return new bare.createInstance(any,null,comment,metadata,externalKeyword,returnType,propertyKeyword,name,functionExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionDeclarationStatement(functionDeclaration : any) : any {
        return new bare.createInstance(any,null,functionDeclaration);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionExpression(typeParameters : any,parameters : any,body : any) : any {
        return new bare.createInstance(any,null,typeParameters,parameters,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionExpressionInvocation(function : any,typeArguments : any,argumentList : any) : any {
        return new bare.createInstance(any,null,function,typeArguments,argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionTypeAlias(comment : any,metadata : core.DartList<any>,keyword : any,returnType : any,name : any,typeParameters : any,parameters : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,keyword,returnType,name,typeParameters,parameters,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionTypedFormalParameter(comment : any,metadata : core.DartList<any>,returnType : any,identifier : any,typeParameters : any,parameters : any,_namedArguments? : {question? : any}) : any {
        let {question} = Object.assign({
            "question" : null}, _namedArguments );
        return new bare.createInstance(any,null,comment,metadata,null,returnType,identifier,typeParameters,parameters,question);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionTypedFormalParameter2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,returnType? : any,identifier? : any,typeParameters? : any,parameters? : any,question? : any}) : any {
        let {comment,metadata,covariantKeyword,returnType,identifier,typeParameters,parameters,question} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,comment,metadata,covariantKeyword,returnType,identifier,typeParameters,parameters,question);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    genericFunctionType(returnType : any,functionKeyword : any,typeParameters : any,parameters : any) : any {
        return new bare.createInstance(any,null,returnType,functionKeyword,typeParameters,parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    genericTypeAlias(comment : any,metadata : core.DartList<any>,typedefKeyword : any,name : any,typeParameters : any,equals : any,functionType : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,typedefKeyword,name,typeParameters,equals,functionType,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hideCombinator(keyword : any,hiddenNames : core.DartList<any>) : any {
        return new bare.createInstance(any,null,keyword,hiddenNames);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ifStatement(ifKeyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,thenStatement : any,elseKeyword : any,elseStatement : any) : any {
        return new bare.createInstance(any,null,ifKeyword,leftParenthesis,condition,rightParenthesis,thenStatement,elseKeyword,elseStatement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    implementsClause(implementsKeyword : any,interfaces : core.DartList<any>) : any {
        return new bare.createInstance(any,null,implementsKeyword,interfaces);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    importDirective(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,deferredKeyword : any,asKeyword : any,prefix : any,combinators : core.DartList<any>,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,keyword,libraryUri,configurations,deferredKeyword,asKeyword,prefix,combinators,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    indexExpressionForCascade(period : any,leftBracket : any,index : any,rightBracket : any) : any {
        return new bare.createInstance(any,null,period,leftBracket,index,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    indexExpressionForTarget(target : any,leftBracket : any,index : any,rightBracket : any) : any {
        return new bare.createInstance(any,null,target,leftBracket,index,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    instanceCreationExpression(keyword : any,constructorName : any,argumentList : any) : any {
        return new bare.createInstance(any,null,keyword,constructorName,argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    integerLiteral(literal : any,value : number) : any {
        return new bare.createInstance(any,null,literal,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    interpolationExpression(leftBracket : any,expression : any,rightBracket : any) : any {
        return new bare.createInstance(any,null,leftBracket,expression,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    interpolationString(contents : any,value : string) : any {
        return new bare.createInstance(any,null,contents,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isExpression(expression : any,isOperator : any,notOperator : any,type : any) : any {
        return new bare.createInstance(any,null,expression,isOperator,notOperator,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    label(label : any,colon : any) : any {
        return new bare.createInstance(any,null,label,colon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labeledStatement(labels : core.DartList<any>,statement : any) : any {
        return new bare.createInstance(any,null,labels,statement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    libraryDirective(comment : any,metadata : core.DartList<any>,libraryKeyword : any,name : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,libraryKeyword,name,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    libraryIdentifier(components : core.DartList<any>) : any {
        return new bare.createInstance(any,null,components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listLiteral(constKeyword : any,typeArguments : any,leftBracket : any,elements : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,constKeyword,typeArguments,leftBracket,elements,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapLiteral(constKeyword : any,typeArguments : any,leftBracket : any,entries : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,constKeyword,typeArguments,leftBracket,entries,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapLiteralEntry(key : any,separator : any,value : any) : any {
        return new bare.createInstance(any,null,key,separator,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    methodDeclaration(comment : any,metadata : core.DartList<any>,externalKeyword : any,modifierKeyword : any,returnType : any,propertyKeyword : any,operatorKeyword : any,name : any,typeParameters : any,parameters : any,body : any) : any {
        return new bare.createInstance(any,null,comment,metadata,externalKeyword,modifierKeyword,returnType,propertyKeyword,operatorKeyword,name,typeParameters,parameters,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    methodInvocation(target : any,operator : any,methodName : any,typeArguments : any,argumentList : any) : any {
        return new bare.createInstance(any,null,target,operator,methodName,typeArguments,argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    namedExpression(name : any,expression : any) : any {
        return new bare.createInstance(any,null,name,expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nativeClause(nativeKeyword : any,name : any) : any {
        return new bare.createInstance(any,null,nativeKeyword,name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nativeFunctionBody(nativeKeyword : any,stringLiteral : any,semicolon : any) : any {
        return new bare.createInstance(any,null,nativeKeyword,stringLiteral,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nodeList(owner : any,elements? : core.DartList<any>) : any {
        return new bare.createInstance(any,null,owner as any,elements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nullLiteral(literal : any) : any {
        return new bare.createInstance(any,null,literal);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parenthesizedExpression(leftParenthesis : any,expression : any,rightParenthesis : any) : any {
        return new bare.createInstance(any,null,leftParenthesis,expression,rightParenthesis);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    partDirective(comment : any,metadata : core.DartList<any>,partKeyword : any,partUri : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,partKeyword,partUri,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    partOfDirective(comment : any,metadata : core.DartList<any>,partKeyword : any,ofKeyword : any,uri : any,libraryName : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,partKeyword,ofKeyword,uri,libraryName,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    postfixExpression(operand : any,operator : any) : any {
        return new bare.createInstance(any,null,operand,operator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    prefixedIdentifier(prefix : any,period : any,identifier : any) : any {
        return new bare.createInstance(any,null,prefix,period,identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    prefixExpression(operator : any,operand : any) : any {
        return new bare.createInstance(any,null,operator,operand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propertyAccess(target : any,operator : any,propertyName : any) : any {
        return new bare.createInstance(any,null,target,operator,propertyName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    redirectingConstructorInvocation(thisKeyword : any,period : any,constructorName : any,argumentList : any) : any {
        return new bare.createInstance(any,null,thisKeyword,period,constructorName,argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rethrowExpression(rethrowKeyword : any) : any {
        return new bare.createInstance(any,null,rethrowKeyword);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    returnStatement(returnKeyword : any,expression : any,semicolon : any) : any {
        return new bare.createInstance(any,null,returnKeyword,expression,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scriptTag(scriptTag : any) : any {
        return new bare.createInstance(any,null,scriptTag);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    showCombinator(keyword : any,shownNames : core.DartList<any>) : any {
        return new bare.createInstance(any,null,keyword,shownNames);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    simpleFormalParameter(comment : any,metadata : core.DartList<any>,keyword : any,type : any,identifier : any) : any {
        return new bare.createInstance(any,null,comment,metadata,null,keyword,type,identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    simpleFormalParameter2(_namedArguments? : {comment? : any,metadata? : core.DartList<any>,covariantKeyword? : any,keyword? : any,type? : any,identifier? : any}) : any {
        let {comment,metadata,covariantKeyword,keyword,type,identifier} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,comment,metadata,covariantKeyword,keyword,type,identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    simpleIdentifier(token : any,_namedArguments? : {isDeclaration? : boolean}) : any {
        let {isDeclaration} = Object.assign({
            "isDeclaration" : false}, _namedArguments );
        if (isDeclaration) {
            return new bare.createInstance(any,null,token);
        }
        return new bare.createInstance(any,null,token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    simpleStringLiteral(literal : any,value : string) : any {
        return new bare.createInstance(any,null,literal,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stringInterpolation(elements : core.DartList<any>) : any {
        return new bare.createInstance(any,null,elements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    superConstructorInvocation(superKeyword : any,period : any,constructorName : any,argumentList : any) : any {
        return new bare.createInstance(any,null,superKeyword,period,constructorName,argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    superExpression(superKeyword : any) : any {
        return new bare.createInstance(any,null,superKeyword);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    switchCase(labels : core.DartList<any>,keyword : any,expression : any,colon : any,statements : core.DartList<any>) : any {
        return new bare.createInstance(any,null,labels,keyword,expression,colon,statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    switchDefault(labels : core.DartList<any>,keyword : any,colon : any,statements : core.DartList<any>) : any {
        return new bare.createInstance(any,null,labels,keyword,colon,statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    switchStatement(switchKeyword : any,leftParenthesis : any,expression : any,rightParenthesis : any,leftBracket : any,members : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,switchKeyword,leftParenthesis,expression,rightParenthesis,leftBracket,members,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    symbolLiteral(poundSign : any,components : core.DartList<any>) : any {
        return new bare.createInstance(any,null,poundSign,components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    thisExpression(thisKeyword : any) : any {
        return new bare.createInstance(any,null,thisKeyword);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    throwExpression(throwKeyword : any,expression : any) : any {
        return new bare.createInstance(any,null,throwKeyword,expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    topLevelVariableDeclaration(comment : any,metadata : core.DartList<any>,variableList : any,semicolon : any) : any {
        return new bare.createInstance(any,null,comment,metadata,variableList,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tryStatement(tryKeyword : any,body : any,catchClauses : core.DartList<any>,finallyKeyword : any,finallyBlock : any) : any {
        return new bare.createInstance(any,null,tryKeyword,body,catchClauses,finallyKeyword,finallyBlock);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeArgumentList(leftBracket : any,arguments : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,leftBracket,arguments,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeName(name : any,typeArguments : any,_namedArguments? : {question? : any}) : any {
        let {question} = Object.assign({
            "question" : null}, _namedArguments );
        return new bare.createInstance(any,null,name,typeArguments,question);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeParameter(comment : any,metadata : core.DartList<any>,name : any,extendsKeyword : any,bound : any) : any {
        return new bare.createInstance(any,null,comment,metadata,name,extendsKeyword,bound);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeParameterList(leftBracket : any,typeParameters : core.DartList<any>,rightBracket : any) : any {
        return new bare.createInstance(any,null,leftBracket,typeParameters,rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variableDeclaration(name : any,equals : any,initializer : any) : any {
        return new bare.createInstance(any,null,name,equals,initializer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variableDeclarationList(comment : any,metadata : core.DartList<any>,keyword : any,type : any,variables : core.DartList<any>) : any {
        return new bare.createInstance(any,null,comment,metadata,keyword,type,variables);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variableDeclarationStatement(variableList : any,semicolon : any) : any {
        return new bare.createInstance(any,null,variableList,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    whileStatement(whileKeyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,body : any) : any {
        return new bare.createInstance(any,null,whileKeyword,leftParenthesis,condition,rightParenthesis,body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    withClause(withKeyword : any,mixinTypes : core.DartList<any>) : any {
        return new bare.createInstance(any,null,withKeyword,mixinTypes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    yieldStatement(yieldKeyword : any,star : any,expression : any,semicolon : any) : any {
        return new bare.createInstance(any,null,yieldKeyword,star,expression,semicolon);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AstFactoryImpl() {
    }
}

export class properties {
}

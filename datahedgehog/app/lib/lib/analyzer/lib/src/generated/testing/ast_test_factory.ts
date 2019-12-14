/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/testing/ast_test_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AstTestFactory {
    export type Constructors = 'AstTestFactory';
    export type Interface = Omit<AstTestFactory, Constructors>;
}
@DartClass
export class AstTestFactory {
    static adjacentStrings(strings : core.DartList<any>) : any {
        return astFactory.adjacentStrings(strings);
    }
    static annotation(name : any) : any {
        return astFactory.annotation(TokenFactory.tokenFromType(TokenType.AT),name,null,null,null);
    }
    static annotation2(name : any,constructorName : any,arguments : any) : any {
        return astFactory.annotation(TokenFactory.tokenFromType(TokenType.AT),name,op(Op.EQUALS,constructorName,null) ? null : TokenFactory.tokenFromType(TokenType.PERIOD),constructorName,arguments);
    }
    static argumentList(arguments? : core.DartList<any>) : any {
        return astFactory.argumentList(TokenFactory.tokenFromType(TokenType.OPEN_PAREN),arguments,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN));
    }
    static asExpression(expression : any,type : any) : any {
        return astFactory.asExpression(expression,TokenFactory.tokenFromKeyword(Keyword.AS),type);
    }
    static assertInitializer(condition : any,message : any) : any {
        return astFactory.assertInitializer(TokenFactory.tokenFromKeyword(Keyword.ASSERT),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),condition,TokenFactory.tokenFromType(TokenType.COMMA),message,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN));
    }
    static assertStatement(condition : any,message? : any) : any {
        return astFactory.assertStatement(TokenFactory.tokenFromKeyword(Keyword.ASSERT),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),condition,op(Op.EQUALS,message,null) ? null : TokenFactory.tokenFromType(TokenType.COMMA),message,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static assignmentExpression(leftHandSide : any,operator : any,rightHandSide : any) : any {
        return astFactory.assignmentExpression(leftHandSide,TokenFactory.tokenFromType(operator),rightHandSide);
    }
    static asyncBlockFunctionBody(statements? : core.DartList<any>) : any {
        return astFactory.blockFunctionBody(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"async"),null,AstTestFactory.block(statements));
    }
    static asyncExpressionFunctionBody(expression : any) : any {
        return astFactory.expressionFunctionBody(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"async"),TokenFactory.tokenFromType(TokenType.FUNCTION),expression,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static asyncGeneratorBlockFunctionBody(statements? : core.DartList<any>) : any {
        return astFactory.blockFunctionBody(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"async"),TokenFactory.tokenFromType(TokenType.STAR),AstTestFactory.block(statements));
    }
    static awaitExpression(expression : any) : any {
        return astFactory.awaitExpression(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"await"),expression);
    }
    static binaryExpression(leftOperand : any,operator : any,rightOperand : any) : any {
        return astFactory.binaryExpression(leftOperand,TokenFactory.tokenFromType(operator),rightOperand);
    }
    static block(statements? : core.DartList<any>) : any {
        return astFactory.block(TokenFactory.tokenFromType(TokenType.OPEN_CURLY_BRACKET),statements,TokenFactory.tokenFromType(TokenType.CLOSE_CURLY_BRACKET));
    }
    static blockFunctionBody(block : any) : any {
        return astFactory.blockFunctionBody(null,null,block);
    }
    static blockFunctionBody2(statements? : core.DartList<any>) : any {
        return astFactory.blockFunctionBody(null,null,AstTestFactory.block(statements));
    }
    static booleanLiteral(value : boolean) : any {
        return astFactory.booleanLiteral(value ? TokenFactory.tokenFromKeyword(Keyword.TRUE) : TokenFactory.tokenFromKeyword(Keyword.FALSE),value);
    }
    static breakStatement() : any {
        return astFactory.breakStatement(TokenFactory.tokenFromKeyword(Keyword.BREAK),null,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static breakStatement2(label : string) : any {
        return astFactory.breakStatement(TokenFactory.tokenFromKeyword(Keyword.BREAK),AstTestFactory.identifier3(label),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static cascadedIndexExpression(index : any) : any {
        return astFactory.indexExpressionForCascade(TokenFactory.tokenFromType(TokenType.PERIOD_PERIOD),TokenFactory.tokenFromType(TokenType.OPEN_SQUARE_BRACKET),index,TokenFactory.tokenFromType(TokenType.CLOSE_SQUARE_BRACKET));
    }
    static cascadedMethodInvocation(methodName : string,arguments? : core.DartList<any>) : any {
        return astFactory.methodInvocation(null,TokenFactory.tokenFromType(TokenType.PERIOD_PERIOD),AstTestFactory.identifier3(methodName),null,AstTestFactory.argumentList(arguments));
    }
    static cascadedPropertyAccess(propertyName : string) : any {
        return astFactory.propertyAccess(null,TokenFactory.tokenFromType(TokenType.PERIOD_PERIOD),AstTestFactory.identifier3(propertyName));
    }
    static cascadeExpression(target : any,cascadeSections? : core.DartList<any>) : any {
        return astFactory.cascadeExpression(target,cascadeSections);
    }
    static catchClause(exceptionParameter : string,statements? : core.DartList<any>) : any {
        return AstTestFactory.catchClause5(null,exceptionParameter,null,statements);
    }
    static catchClause2(exceptionParameter : string,stackTraceParameter : string,statements? : core.DartList<any>) : any {
        return AstTestFactory.catchClause5(null,exceptionParameter,stackTraceParameter,statements);
    }
    static catchClause3(exceptionType : any,statements? : core.DartList<any>) : any {
        return AstTestFactory.catchClause5(exceptionType,null,null,statements);
    }
    static catchClause4(exceptionType : any,exceptionParameter : string,statements? : core.DartList<any>) : any {
        return AstTestFactory.catchClause5(exceptionType,exceptionParameter,null,statements);
    }
    static catchClause5(exceptionType : any,exceptionParameter : string,stackTraceParameter : string,statements? : core.DartList<any>) : any {
        return astFactory.catchClause(op(Op.EQUALS,exceptionType,null) ? null : TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"on"),exceptionType,exceptionParameter == null ? null : TokenFactory.tokenFromKeyword(Keyword.CATCH),exceptionParameter == null ? null : TokenFactory.tokenFromType(TokenType.OPEN_PAREN),exceptionParameter == null ? null : AstTestFactory.identifier3(exceptionParameter),stackTraceParameter == null ? null : TokenFactory.tokenFromType(TokenType.COMMA),stackTraceParameter == null ? null : AstTestFactory.identifier3(stackTraceParameter),exceptionParameter == null ? null : TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),AstTestFactory.block(statements));
    }
    static classDeclaration(abstractKeyword : any,name : string,typeParameters : any,extendsClause : any,withClause : any,implementsClause : any,members? : core.DartList<any>) : any {
        return astFactory.classDeclaration(null,null,op(Op.EQUALS,abstractKeyword,null) ? null : TokenFactory.tokenFromKeyword(abstractKeyword),TokenFactory.tokenFromKeyword(Keyword.CLASS),AstTestFactory.identifier3(name),typeParameters,extendsClause,withClause,implementsClause,TokenFactory.tokenFromType(TokenType.OPEN_CURLY_BRACKET),members,TokenFactory.tokenFromType(TokenType.CLOSE_CURLY_BRACKET));
    }
    static classTypeAlias(name : string,typeParameters : any,abstractKeyword : any,superclass : any,withClause : any,implementsClause : any) : any {
        return astFactory.classTypeAlias(null,null,TokenFactory.tokenFromKeyword(Keyword.CLASS),AstTestFactory.identifier3(name),typeParameters,TokenFactory.tokenFromType(TokenType.EQ),op(Op.EQUALS,abstractKeyword,null) ? null : TokenFactory.tokenFromKeyword(abstractKeyword),superclass,withClause,implementsClause,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static compilationUnit() : any {
        return AstTestFactory.compilationUnit8(null,null,null);
    }
    static compilationUnit2(declarations : core.DartList<any>) : any {
        return AstTestFactory.compilationUnit8(null,null,declarations);
    }
    static compilationUnit3(directives : core.DartList<any>) : any {
        return AstTestFactory.compilationUnit8(null,directives,null);
    }
    static compilationUnit4(directives : core.DartList<any>,declarations : core.DartList<any>) : any {
        return AstTestFactory.compilationUnit8(null,directives,declarations);
    }
    static compilationUnit5(scriptTag : string) : any {
        return AstTestFactory.compilationUnit8(scriptTag,null,null);
    }
    static compilationUnit6(scriptTag : string,declarations : core.DartList<any>) : any {
        return AstTestFactory.compilationUnit8(scriptTag,null,declarations);
    }
    static compilationUnit7(scriptTag : string,directives : core.DartList<any>) : any {
        return AstTestFactory.compilationUnit8(scriptTag,directives,null);
    }
    static compilationUnit8(scriptTag : string,directives : core.DartList<any>,declarations : core.DartList<any>) : any {
        return astFactory.compilationUnit(TokenFactory.tokenFromType(TokenType.EOF),scriptTag == null ? null : AstTestFactory.scriptTag(scriptTag),directives == null ? new core.DartList<any>() : directives,declarations == null ? new core.DartList<any>() : declarations,TokenFactory.tokenFromType(TokenType.EOF));
    }
    static conditionalExpression(condition : any,thenExpression : any,elseExpression : any) : any {
        return astFactory.conditionalExpression(condition,TokenFactory.tokenFromType(TokenType.QUESTION),thenExpression,TokenFactory.tokenFromType(TokenType.COLON),elseExpression);
    }
    static constructorDeclaration(returnType : any,name : string,parameters : any,initializers : core.DartList<any>) : any {
        return astFactory.constructorDeclaration(null,null,TokenFactory.tokenFromKeyword(Keyword.EXTERNAL),null,null,returnType,name == null ? null : TokenFactory.tokenFromType(TokenType.PERIOD),name == null ? null : AstTestFactory.identifier3(name),parameters,initializers == null || initializers.isEmpty ? null : TokenFactory.tokenFromType(TokenType.PERIOD),initializers == null ? new core.DartList<any>() : initializers,null,AstTestFactory.emptyFunctionBody());
    }
    static constructorDeclaration2(constKeyword : any,factoryKeyword : any,returnType : any,name : string,parameters : any,initializers : core.DartList<any>,body : any) : any {
        return astFactory.constructorDeclaration(null,null,null,op(Op.EQUALS,constKeyword,null) ? null : TokenFactory.tokenFromKeyword(constKeyword),op(Op.EQUALS,factoryKeyword,null) ? null : TokenFactory.tokenFromKeyword(factoryKeyword),returnType,name == null ? null : TokenFactory.tokenFromType(TokenType.PERIOD),name == null ? null : AstTestFactory.identifier3(name),parameters,initializers == null || initializers.isEmpty ? null : TokenFactory.tokenFromType(TokenType.PERIOD),initializers == null ? new core.DartList<any>() : initializers,null,body);
    }
    static constructorFieldInitializer(prefixedWithThis : boolean,fieldName : string,expression : any) : any {
        return astFactory.constructorFieldInitializer(prefixedWithThis ? TokenFactory.tokenFromKeyword(Keyword.THIS) : null,prefixedWithThis ? TokenFactory.tokenFromType(TokenType.PERIOD) : null,AstTestFactory.identifier3(fieldName),TokenFactory.tokenFromType(TokenType.EQ),expression);
    }
    static constructorName(type : any,name : string) : any {
        return astFactory.constructorName(type,name == null ? null : TokenFactory.tokenFromType(TokenType.PERIOD),name == null ? null : AstTestFactory.identifier3(name));
    }
    static continueStatement(label? : string) : any {
        return astFactory.continueStatement(TokenFactory.tokenFromKeyword(Keyword.CONTINUE),label == null ? null : AstTestFactory.identifier3(label),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static declaredIdentifier(keyword : any,identifier : string) : any {
        return AstTestFactory.declaredIdentifier2(keyword,null,identifier);
    }
    static declaredIdentifier2(keyword : any,type : any,identifier : string) : any {
        return astFactory.declaredIdentifier(null,null,op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),type,AstTestFactory.identifier3(identifier));
    }
    static declaredIdentifier3(identifier : string) : any {
        return AstTestFactory.declaredIdentifier2(Keyword.VAR,null,identifier);
    }
    static declaredIdentifier4(type : any,identifier : string) : any {
        return AstTestFactory.declaredIdentifier2(null,type,identifier);
    }
    static documentationComment(tokens : core.DartList<any>,references : core.DartList<any>) : any {
        return astFactory.documentationComment(tokens,references);
    }
    static doStatement(body : any,condition : any) : any {
        return astFactory.doStatement(TokenFactory.tokenFromKeyword(Keyword.DO),body,TokenFactory.tokenFromKeyword(Keyword.WHILE),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),condition,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static doubleLiteral(value : double) : any {
        return astFactory.doubleLiteral(TokenFactory.tokenFromString(new core.DartDouble(value).toString()),value);
    }
    static emptyFunctionBody() : any {
        return astFactory.emptyFunctionBody(TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static emptyStatement() : any {
        return astFactory.emptyStatement(TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static enumDeclaration(name : any,constants : core.DartList<any>) : any {
        return astFactory.enumDeclaration(null,null,TokenFactory.tokenFromKeyword(Keyword.ENUM),name,TokenFactory.tokenFromType(TokenType.OPEN_CURLY_BRACKET),constants,TokenFactory.tokenFromType(TokenType.CLOSE_CURLY_BRACKET));
    }
    static enumDeclaration2(name : string,constantNames : core.DartList<string>) : any {
        let count : number = constantNames.length;
        let constants : core.DartList<any> = new core.DartList<any>(count);
        for(let i : number = 0; i < count; i++){
            constants[i] = astFactory.enumConstantDeclaration(null,null,AstTestFactory.identifier3(constantNames[i]));
        }
        return AstTestFactory.enumDeclaration(AstTestFactory.identifier3(name),constants);
    }
    static exportDirective(metadata : core.DartList<any>,uri : string,combinators? : core.DartList<any>) : any {
        return astFactory.exportDirective(null,metadata,TokenFactory.tokenFromKeyword(Keyword.EXPORT),AstTestFactory.string2(uri),null,combinators,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static exportDirective2(uri : string,combinators? : core.DartList<any>) : any {
        return AstTestFactory.exportDirective(null,uri,combinators);
    }
    static expressionFunctionBody(expression : any) : any {
        return astFactory.expressionFunctionBody(null,TokenFactory.tokenFromType(TokenType.FUNCTION),expression,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static expressionStatement(expression : any) : any {
        return astFactory.expressionStatement(expression,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static extendsClause(type : any) : any {
        return astFactory.extendsClause(TokenFactory.tokenFromKeyword(Keyword.EXTENDS),type);
    }
    static fieldDeclaration(isStatic : boolean,keyword : any,type : any,variables : core.DartList<any>) : any {
        return astFactory.fieldDeclaration2({
            staticKeyword : isStatic ? TokenFactory.tokenFromKeyword(Keyword.STATIC) : null,fieldList : AstTestFactory.variableDeclarationList(keyword,type,variables),semicolon : TokenFactory.tokenFromType(TokenType.SEMICOLON)});
    }
    static fieldDeclaration2(isStatic : boolean,keyword : any,variables : core.DartList<any>) : any {
        return AstTestFactory.fieldDeclaration(isStatic,keyword,null,variables);
    }
    static fieldFormalParameter(keyword : any,type : any,identifier : string,parameterList? : any) : any {
        return astFactory.fieldFormalParameter2({
            keyword : op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),type : type,thisKeyword : TokenFactory.tokenFromKeyword(Keyword.THIS),period : TokenFactory.tokenFromType(TokenType.PERIOD),identifier : AstTestFactory.identifier3(identifier),parameters : parameterList});
    }
    static fieldFormalParameter2(identifier : string) : any {
        return AstTestFactory.fieldFormalParameter(null,null,identifier);
    }
    static forEachStatement(loopVariable : any,iterator : any,body : any) : any {
        return astFactory.forEachStatementWithDeclaration(null,TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),loopVariable,TokenFactory.tokenFromKeyword(Keyword.IN),iterator,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),body);
    }
    static forEachStatement2(identifier : any,iterator : any,body : any) : any {
        return astFactory.forEachStatementWithReference(null,TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),identifier,TokenFactory.tokenFromKeyword(Keyword.IN),iterator,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),body);
    }
    static formalParameterList(parameters? : core.DartList<any>) : any {
        return astFactory.formalParameterList(TokenFactory.tokenFromType(TokenType.OPEN_PAREN),parameters,null,null,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN));
    }
    static forStatement(initialization : any,condition : any,updaters : core.DartList<any>,body : any) : any {
        return astFactory.forStatement(TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),null,initialization,TokenFactory.tokenFromType(TokenType.SEMICOLON),condition,TokenFactory.tokenFromType(TokenType.SEMICOLON),updaters,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),body);
    }
    static forStatement2(variableList : any,condition : any,updaters : core.DartList<any>,body : any) : any {
        return astFactory.forStatement(TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),variableList,null,TokenFactory.tokenFromType(TokenType.SEMICOLON),condition,TokenFactory.tokenFromType(TokenType.SEMICOLON),updaters,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),body);
    }
    static functionDeclaration(type : any,keyword : any,name : string,functionExpression : any) : any {
        return astFactory.functionDeclaration(null,null,null,type,op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),AstTestFactory.identifier3(name),functionExpression);
    }
    static functionDeclarationStatement(type : any,keyword : any,name : string,functionExpression : any) : any {
        return astFactory.functionDeclarationStatement(AstTestFactory.functionDeclaration(type,keyword,name,functionExpression));
    }
    static functionExpression() : any {
        return astFactory.functionExpression(null,AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
    }
    static functionExpression2(parameters : any,body : any) : any {
        return astFactory.functionExpression(null,parameters,body);
    }
    static functionExpression3(typeParameters : any,parameters : any,body : any) : any {
        return astFactory.functionExpression(typeParameters,parameters,body);
    }
    static functionExpressionInvocation(function : any,arguments? : core.DartList<any>) : any {
        return AstTestFactory.functionExpressionInvocation2(function,null,arguments);
    }
    static functionExpressionInvocation2(function : any,typeArguments? : any,arguments? : core.DartList<any>) : any {
        return astFactory.functionExpressionInvocation(function,typeArguments,AstTestFactory.argumentList(arguments));
    }
    static functionTypedFormalParameter(returnType : any,identifier : string,parameters? : core.DartList<any>) : any {
        return astFactory.functionTypedFormalParameter2({
            returnType : returnType,identifier : AstTestFactory.identifier3(identifier),parameters : AstTestFactory.formalParameterList(parameters)});
    }
    static genericFunctionType(returnType : any,typeParameters : any,parameters : any) : any {
        return astFactory.genericFunctionType(returnType,TokenFactory.tokenFromString("Function"),typeParameters,parameters);
    }
    static genericTypeAlias(name : string,typeParameters : any,functionType : any) : any {
        return astFactory.genericTypeAlias(null,null,TokenFactory.tokenFromKeyword(Keyword.TYPEDEF),AstTestFactory.identifier3(name),typeParameters,TokenFactory.tokenFromType(TokenType.EQ),functionType,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static hideCombinator(identifiers : core.DartList<any>) : any {
        return astFactory.hideCombinator(TokenFactory.tokenFromString("hide"),identifiers);
    }
    static hideCombinator2(identifiers : core.DartList<string>) : any {
        return astFactory.hideCombinator(TokenFactory.tokenFromString("hide"),AstTestFactory.identifierList(identifiers));
    }
    static identifier(prefix : any,identifier : any) : any {
        return astFactory.prefixedIdentifier(prefix,TokenFactory.tokenFromType(TokenType.PERIOD),identifier);
    }
    static identifier3(lexeme : string) : any {
        return astFactory.simpleIdentifier(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,lexeme));
    }
    static identifier4(prefix : string,identifier : any) : any {
        return astFactory.prefixedIdentifier(AstTestFactory.identifier3(prefix),TokenFactory.tokenFromType(TokenType.PERIOD),identifier);
    }
    static identifier5(prefix : string,identifier : string) : any {
        return astFactory.prefixedIdentifier(AstTestFactory.identifier3(prefix),TokenFactory.tokenFromType(TokenType.PERIOD),AstTestFactory.identifier3(identifier));
    }
    static identifierList(identifiers : core.DartList<string>) : core.DartList<any> {
        if (identifiers == null) {
            return null;
        }
        return identifiers.map((identifier : string) =>  {
            return AstTestFactory.identifier3(identifier);
        }).toList();
    }
    static ifStatement(condition : any,thenStatement : any) : any {
        return AstTestFactory.ifStatement2(condition,thenStatement,null);
    }
    static ifStatement2(condition : any,thenStatement : any,elseStatement : any) : any {
        return astFactory.ifStatement(TokenFactory.tokenFromKeyword(Keyword.IF),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),condition,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),thenStatement,op(Op.EQUALS,elseStatement,null) ? null : TokenFactory.tokenFromKeyword(Keyword.ELSE),elseStatement);
    }
    static implementsClause(types : core.DartList<any>) : any {
        return astFactory.implementsClause(TokenFactory.tokenFromKeyword(Keyword.IMPLEMENTS),types);
    }
    static importDirective(metadata : core.DartList<any>,uri : string,isDeferred : boolean,prefix : string,combinators? : core.DartList<any>) : any {
        return astFactory.importDirective(null,metadata,TokenFactory.tokenFromKeyword(Keyword.IMPORT),AstTestFactory.string2(uri),null,!isDeferred ? null : TokenFactory.tokenFromKeyword(Keyword.DEFERRED),prefix == null ? null : TokenFactory.tokenFromKeyword(Keyword.AS),prefix == null ? null : AstTestFactory.identifier3(prefix),combinators,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static importDirective2(uri : string,isDeferred : boolean,prefix : string,combinators? : core.DartList<any>) : any {
        return AstTestFactory.importDirective(null,uri,isDeferred,prefix,combinators);
    }
    static importDirective3(uri : string,prefix : string,combinators? : core.DartList<any>) : any {
        return AstTestFactory.importDirective(null,uri,false,prefix,combinators);
    }
    static indexExpression(array : any,index : any) : any {
        return astFactory.indexExpressionForTarget(array,TokenFactory.tokenFromType(TokenType.OPEN_SQUARE_BRACKET),index,TokenFactory.tokenFromType(TokenType.CLOSE_SQUARE_BRACKET));
    }
    static instanceCreationExpression(keyword : any,name : any,arguments? : core.DartList<any>) : any {
        return astFactory.instanceCreationExpression(op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),name,AstTestFactory.argumentList(arguments));
    }
    static instanceCreationExpression2(keyword : any,type : any,arguments? : core.DartList<any>) : any {
        return AstTestFactory.instanceCreationExpression3(keyword,type,null,arguments);
    }
    static instanceCreationExpression3(keyword : any,type : any,identifier : string,arguments? : core.DartList<any>) : any {
        return AstTestFactory.instanceCreationExpression(keyword,astFactory.constructorName(type,identifier == null ? null : TokenFactory.tokenFromType(TokenType.PERIOD),identifier == null ? null : AstTestFactory.identifier3(identifier)),arguments);
    }
    static integer(value : number) : any {
        return astFactory.integerLiteral(TokenFactory.tokenFromTypeAndString(TokenType.INT,new core.DartInt(value).toString()),value);
    }
    static interpolationExpression(expression : any) : any {
        return astFactory.interpolationExpression(TokenFactory.tokenFromType(TokenType.STRING_INTERPOLATION_EXPRESSION),expression,TokenFactory.tokenFromType(TokenType.CLOSE_CURLY_BRACKET));
    }
    static interpolationExpression2(identifier : string) : any {
        return astFactory.interpolationExpression(TokenFactory.tokenFromType(TokenType.STRING_INTERPOLATION_IDENTIFIER),AstTestFactory.identifier3(identifier),null);
    }
    static interpolationString(contents : string,value : string) : any {
        return astFactory.interpolationString(TokenFactory.tokenFromString(contents),value);
    }
    static isExpression(expression : any,negated : boolean,type : any) : any {
        return astFactory.isExpression(expression,TokenFactory.tokenFromKeyword(Keyword.IS),negated ? TokenFactory.tokenFromType(TokenType.BANG) : null,type);
    }
    static label(label : any) : any {
        return astFactory.label(label,TokenFactory.tokenFromType(TokenType.COLON));
    }
    static label2(label : string) : any {
        return AstTestFactory.label(AstTestFactory.identifier3(label));
    }
    static labeledStatement(labels : core.DartList<any>,statement : any) : any {
        return astFactory.labeledStatement(labels,statement);
    }
    static libraryDirective(metadata : core.DartList<any>,libraryName : any) : any {
        return astFactory.libraryDirective(null,metadata,TokenFactory.tokenFromKeyword(Keyword.LIBRARY),libraryName,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static libraryDirective2(libraryName : string) : any {
        return AstTestFactory.libraryDirective(new core.DartList<any>(),AstTestFactory.libraryIdentifier2(new core.DartList.literal(libraryName)));
    }
    static libraryIdentifier(components : core.DartList<any>) : any {
        return astFactory.libraryIdentifier(components);
    }
    static libraryIdentifier2(components : core.DartList<string>) : any {
        return astFactory.libraryIdentifier(AstTestFactory.identifierList(components));
    }
    static list(elements : core.DartList<core.DartObject>) : core.DartList<any> {
        return elements;
    }
    static listLiteral(elements? : core.DartList<any>) : any {
        return AstTestFactory.listLiteral2(null,null,elements);
    }
    static listLiteral2(keyword : any,typeArguments : any,elements? : core.DartList<any>) : any {
        return astFactory.listLiteral(op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),typeArguments,TokenFactory.tokenFromType(TokenType.OPEN_SQUARE_BRACKET),elements,TokenFactory.tokenFromType(TokenType.CLOSE_SQUARE_BRACKET));
    }
    static mapLiteral(keyword : any,typeArguments : any,entries? : core.DartList<any>) : any {
        return astFactory.mapLiteral(op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),typeArguments,TokenFactory.tokenFromType(TokenType.OPEN_CURLY_BRACKET),entries,TokenFactory.tokenFromType(TokenType.CLOSE_CURLY_BRACKET));
    }
    static mapLiteral2(entries? : core.DartList<any>) : any {
        return AstTestFactory.mapLiteral(null,null,entries);
    }
    static mapLiteralEntry(key : string,value : any) : any {
        return astFactory.mapLiteralEntry(AstTestFactory.string2(key),TokenFactory.tokenFromType(TokenType.COLON),value);
    }
    static mapLiteralEntry2(key : any,value : any) : any {
        return astFactory.mapLiteralEntry(key,TokenFactory.tokenFromType(TokenType.COLON),value);
    }
    static methodDeclaration(modifier : any,returnType : any,property : any,operator : any,name : any,parameters : any) : any {
        return astFactory.methodDeclaration(null,null,TokenFactory.tokenFromKeyword(Keyword.EXTERNAL),op(Op.EQUALS,modifier,null) ? null : TokenFactory.tokenFromKeyword(modifier),returnType,op(Op.EQUALS,property,null) ? null : TokenFactory.tokenFromKeyword(property),op(Op.EQUALS,operator,null) ? null : TokenFactory.tokenFromKeyword(operator),name,null,parameters,AstTestFactory.emptyFunctionBody());
    }
    static methodDeclaration2(modifier : any,returnType : any,property : any,operator : any,name : any,parameters : any,body : any) : any {
        return astFactory.methodDeclaration(null,null,null,op(Op.EQUALS,modifier,null) ? null : TokenFactory.tokenFromKeyword(modifier),returnType,op(Op.EQUALS,property,null) ? null : TokenFactory.tokenFromKeyword(property),op(Op.EQUALS,operator,null) ? null : TokenFactory.tokenFromKeyword(operator),name,null,parameters,body);
    }
    static methodDeclaration3(modifier : any,returnType : any,property : any,operator : any,name : any,typeParameters : any,parameters : any,body : any) : any {
        return astFactory.methodDeclaration(null,null,null,op(Op.EQUALS,modifier,null) ? null : TokenFactory.tokenFromKeyword(modifier),returnType,op(Op.EQUALS,property,null) ? null : TokenFactory.tokenFromKeyword(property),op(Op.EQUALS,operator,null) ? null : TokenFactory.tokenFromKeyword(operator),name,typeParameters,parameters,body);
    }
    static methodDeclaration4(_namedArguments? : {external? : boolean,modifier? : any,returnType? : any,property? : any,operator? : boolean,name? : string,parameters? : any,body? : any}) : any {
        let {external,modifier,returnType,property,operator,name,parameters,body} = Object.assign({
            "external" : false,
            "operator" : false}, _namedArguments );
        return astFactory.methodDeclaration(null,null,external ? TokenFactory.tokenFromKeyword(Keyword.EXTERNAL) : null,op(Op.EQUALS,modifier,null) ? null : TokenFactory.tokenFromKeyword(modifier),returnType,op(Op.EQUALS,property,null) ? null : TokenFactory.tokenFromKeyword(property),operator ? TokenFactory.tokenFromKeyword(Keyword.OPERATOR) : null,AstTestFactory.identifier3(name),null,parameters,body);
    }
    static methodInvocation(target : any,methodName : string,arguments? : core.DartList<any>,operator? : any) : any {
        operator = operator || TokenType.PERIOD;
        return astFactory.methodInvocation(target,op(Op.EQUALS,target,null) ? null : TokenFactory.tokenFromType(operator),AstTestFactory.identifier3(methodName),null,AstTestFactory.argumentList(arguments));
    }
    static methodInvocation2(methodName : string,arguments? : core.DartList<any>) : any {
        return AstTestFactory.methodInvocation(null,methodName,arguments);
    }
    static methodInvocation3(target : any,methodName : string,typeArguments : any,arguments? : core.DartList<any>,operator? : any) : any {
        operator = operator || TokenType.PERIOD;
        return astFactory.methodInvocation(target,op(Op.EQUALS,target,null) ? null : TokenFactory.tokenFromType(operator),AstTestFactory.identifier3(methodName),typeArguments,AstTestFactory.argumentList(arguments));
    }
    static namedExpression(label : any,expression : any) : any {
        return astFactory.namedExpression(label,expression);
    }
    static namedExpression2(label : string,expression : any) : any {
        return AstTestFactory.namedExpression(AstTestFactory.label2(label),expression);
    }
    static namedFormalParameter(parameter : any,expression : any) : any {
        return astFactory.defaultFormalParameter(parameter,ParameterKind.NAMED,op(Op.EQUALS,expression,null) ? null : TokenFactory.tokenFromType(TokenType.COLON),expression);
    }
    static nativeClause(nativeCode : string) : any {
        return astFactory.nativeClause(TokenFactory.tokenFromString("native"),AstTestFactory.string2(nativeCode));
    }
    static nativeFunctionBody(nativeMethodName : string) : any {
        return astFactory.nativeFunctionBody(TokenFactory.tokenFromString("native"),AstTestFactory.string2(nativeMethodName),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static nullLiteral() : any {
        return astFactory.nullLiteral(TokenFactory.tokenFromKeyword(Keyword.NULL));
    }
    static parenthesizedExpression(expression : any) : any {
        return astFactory.parenthesizedExpression(TokenFactory.tokenFromType(TokenType.OPEN_PAREN),expression,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN));
    }
    static partDirective(metadata : core.DartList<any>,url : string) : any {
        return astFactory.partDirective(null,metadata,TokenFactory.tokenFromKeyword(Keyword.PART),AstTestFactory.string2(url),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static partDirective2(url : string) : any {
        return AstTestFactory.partDirective(new core.DartList<any>(),url);
    }
    static partOfDirective(libraryName : any) : any {
        return AstTestFactory.partOfDirective2(new core.DartList<any>(),libraryName);
    }
    static partOfDirective2(metadata : core.DartList<any>,libraryName : any) : any {
        return astFactory.partOfDirective(null,metadata,TokenFactory.tokenFromKeyword(Keyword.PART),TokenFactory.tokenFromString("of"),null,libraryName,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static positionalFormalParameter(parameter : any,expression : any) : any {
        return astFactory.defaultFormalParameter(parameter,ParameterKind.POSITIONAL,op(Op.EQUALS,expression,null) ? null : TokenFactory.tokenFromType(TokenType.EQ),expression);
    }
    static postfixExpression(expression : any,operator : any) : any {
        return astFactory.postfixExpression(expression,TokenFactory.tokenFromType(operator));
    }
    static prefixExpression(operator : any,expression : any) : any {
        return astFactory.prefixExpression(TokenFactory.tokenFromType(operator),expression);
    }
    static propertyAccess(target : any,propertyName : any) : any {
        return astFactory.propertyAccess(target,TokenFactory.tokenFromType(TokenType.PERIOD),propertyName);
    }
    static propertyAccess2(target : any,propertyName : string,operator? : any) : any {
        operator = operator || TokenType.PERIOD;
        return astFactory.propertyAccess(target,TokenFactory.tokenFromType(operator),AstTestFactory.identifier3(propertyName));
    }
    static redirectingConstructorInvocation(arguments? : core.DartList<any>) : any {
        return AstTestFactory.redirectingConstructorInvocation2(null,arguments);
    }
    static redirectingConstructorInvocation2(constructorName : string,arguments? : core.DartList<any>) : any {
        return astFactory.redirectingConstructorInvocation(TokenFactory.tokenFromKeyword(Keyword.THIS),constructorName == null ? null : TokenFactory.tokenFromType(TokenType.PERIOD),constructorName == null ? null : AstTestFactory.identifier3(constructorName),AstTestFactory.argumentList(arguments));
    }
    static rethrowExpression() : any {
        return astFactory.rethrowExpression(TokenFactory.tokenFromKeyword(Keyword.RETHROW));
    }
    static returnStatement() : any {
        return AstTestFactory.returnStatement2(null);
    }
    static returnStatement2(expression : any) : any {
        return astFactory.returnStatement(TokenFactory.tokenFromKeyword(Keyword.RETURN),expression,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static scriptTag(scriptTag : string) : any {
        return astFactory.scriptTag(TokenFactory.tokenFromString(scriptTag));
    }
    static showCombinator(identifiers : core.DartList<any>) : any {
        return astFactory.showCombinator(TokenFactory.tokenFromString("show"),identifiers);
    }
    static showCombinator2(identifiers : core.DartList<string>) : any {
        return astFactory.showCombinator(TokenFactory.tokenFromString("show"),AstTestFactory.identifierList(identifiers));
    }
    static simpleFormalParameter(keyword : any,parameterName : string) : any {
        return AstTestFactory.simpleFormalParameter2(keyword,null,parameterName);
    }
    static simpleFormalParameter2(keyword : any,type : any,parameterName : string) : any {
        return astFactory.simpleFormalParameter2({
            keyword : op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),type : type,identifier : parameterName == null ? null : AstTestFactory.identifier3(parameterName)});
    }
    static simpleFormalParameter3(parameterName : string) : any {
        return AstTestFactory.simpleFormalParameter2(null,null,parameterName);
    }
    static simpleFormalParameter4(type : any,parameterName : string) : any {
        return AstTestFactory.simpleFormalParameter2(null,type,parameterName);
    }
    static string(elements? : core.DartList<any>) : any {
        return astFactory.stringInterpolation(elements);
    }
    static string2(content : string) : any {
        return astFactory.simpleStringLiteral(TokenFactory.tokenFromString(`'${content}'`),content);
    }
    static superConstructorInvocation(arguments? : core.DartList<any>) : any {
        return AstTestFactory.superConstructorInvocation2(null,arguments);
    }
    static superConstructorInvocation2(name : string,arguments? : core.DartList<any>) : any {
        return astFactory.superConstructorInvocation(TokenFactory.tokenFromKeyword(Keyword.SUPER),name == null ? null : TokenFactory.tokenFromType(TokenType.PERIOD),name == null ? null : AstTestFactory.identifier3(name),AstTestFactory.argumentList(arguments));
    }
    static superExpression() : any {
        return astFactory.superExpression(TokenFactory.tokenFromKeyword(Keyword.SUPER));
    }
    static switchCase(expression : any,statements : core.DartList<any>) : any {
        return AstTestFactory.switchCase2(new core.DartList<any>(),expression,statements);
    }
    static switchCase2(labels : core.DartList<any>,expression : any,statements : core.DartList<any>) : any {
        return astFactory.switchCase(labels,TokenFactory.tokenFromKeyword(Keyword.CASE),expression,TokenFactory.tokenFromType(TokenType.COLON),statements);
    }
    static switchDefault(labels : core.DartList<any>,statements : core.DartList<any>) : any {
        return astFactory.switchDefault(labels,TokenFactory.tokenFromKeyword(Keyword.DEFAULT),TokenFactory.tokenFromType(TokenType.COLON),statements);
    }
    static switchDefault2(statements : core.DartList<any>) : any {
        return AstTestFactory.switchDefault(new core.DartList<any>(),statements);
    }
    static switchStatement(expression : any,members : core.DartList<any>) : any {
        return astFactory.switchStatement(TokenFactory.tokenFromKeyword(Keyword.SWITCH),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),expression,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),TokenFactory.tokenFromType(TokenType.OPEN_CURLY_BRACKET),members,TokenFactory.tokenFromType(TokenType.CLOSE_CURLY_BRACKET));
    }
    static symbolLiteral(components : core.DartList<string>) : any {
        let identifierList : core.DartList<any> = new core.DartList<any>();
        for(let component of components) {
            identifierList.add(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,component));
        }
        return astFactory.symbolLiteral(TokenFactory.tokenFromType(TokenType.HASH),identifierList);
    }
    static syncBlockFunctionBody(statements? : core.DartList<any>) : any {
        return astFactory.blockFunctionBody(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"sync"),null,AstTestFactory.block(statements));
    }
    static syncGeneratorBlockFunctionBody(statements? : core.DartList<any>) : any {
        return astFactory.blockFunctionBody(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"sync"),TokenFactory.tokenFromType(TokenType.STAR),AstTestFactory.block(statements));
    }
    static thisExpression() : any {
        return astFactory.thisExpression(TokenFactory.tokenFromKeyword(Keyword.THIS));
    }
    static throwExpression() : any {
        return AstTestFactory.throwExpression2(null);
    }
    static throwExpression2(expression : any) : any {
        return astFactory.throwExpression(TokenFactory.tokenFromKeyword(Keyword.THROW),expression);
    }
    static topLevelVariableDeclaration(keyword : any,type : any,variables : core.DartList<any>) : any {
        return astFactory.topLevelVariableDeclaration(null,null,AstTestFactory.variableDeclarationList(keyword,type,variables),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static topLevelVariableDeclaration2(keyword : any,variables : core.DartList<any>) : any {
        return astFactory.topLevelVariableDeclaration(null,null,AstTestFactory.variableDeclarationList(keyword,null,variables),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static tryStatement(body : any,finallyClause : any) : any {
        return AstTestFactory.tryStatement3(body,new core.DartList<any>(),finallyClause);
    }
    static tryStatement2(body : any,catchClauses : core.DartList<any>) : any {
        return AstTestFactory.tryStatement3(body,catchClauses,null);
    }
    static tryStatement3(body : any,catchClauses : core.DartList<any>,finallyClause : any) : any {
        return astFactory.tryStatement(TokenFactory.tokenFromKeyword(Keyword.TRY),body,catchClauses,op(Op.EQUALS,finallyClause,null) ? null : TokenFactory.tokenFromKeyword(Keyword.FINALLY),finallyClause);
    }
    static typeAlias(returnType : any,name : string,typeParameters : any,parameters : any) : any {
        return astFactory.functionTypeAlias(null,null,TokenFactory.tokenFromKeyword(Keyword.TYPEDEF),returnType,AstTestFactory.identifier3(name),typeParameters,parameters,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static typeArgumentList(types : core.DartList<any>) : any {
        if (types == null || types.length == 0) {
            return null;
        }
        return astFactory.typeArgumentList(TokenFactory.tokenFromType(TokenType.LT),types,TokenFactory.tokenFromType(TokenType.GT));
    }
    static typeName(element : any,arguments? : core.DartList<any>) : any {
        let name : any = AstTestFactory.identifier3(element.name);
        name.staticElement = element;
        let typeName : any = AstTestFactory.typeName3(name,arguments);
        typeName.type = element.type;
        return typeName;
    }
    static typeName3(name : any,arguments? : core.DartList<any>) : any {
        return astFactory.typeName(name,AstTestFactory.typeArgumentList(arguments));
    }
    static typeName4(name : string,arguments? : core.DartList<any>) : any {
        return astFactory.typeName(AstTestFactory.identifier3(name),AstTestFactory.typeArgumentList(arguments));
    }
    static typeParameter(name : string) : any {
        return astFactory.typeParameter(null,null,AstTestFactory.identifier3(name),null,null);
    }
    static typeParameter2(name : string,bound : any) : any {
        return astFactory.typeParameter(null,null,AstTestFactory.identifier3(name),TokenFactory.tokenFromKeyword(Keyword.EXTENDS),bound);
    }
    static typeParameterList(typeNames? : core.DartList<string>) : any {
        let typeParameters : core.DartList<any> = null;
        if (typeNames != null && !typeNames.isEmpty) {
            typeParameters = new core.DartList<any>();
            for(let typeName of typeNames) {
                typeParameters.add(AstTestFactory.typeParameter(typeName));
            }
        }
        return astFactory.typeParameterList(TokenFactory.tokenFromType(TokenType.LT),typeParameters,TokenFactory.tokenFromType(TokenType.GT));
    }
    static variableDeclaration(name : string) : any {
        return astFactory.variableDeclaration(AstTestFactory.identifier3(name),null,null);
    }
    static variableDeclaration2(name : string,initializer : any) : any {
        return astFactory.variableDeclaration(AstTestFactory.identifier3(name),TokenFactory.tokenFromType(TokenType.EQ),initializer);
    }
    static variableDeclarationList(keyword : any,type : any,variables : core.DartList<any>) : any {
        return astFactory.variableDeclarationList(null,null,op(Op.EQUALS,keyword,null) ? null : TokenFactory.tokenFromKeyword(keyword),type,variables);
    }
    static variableDeclarationList2(keyword : any,variables : core.DartList<any>) : any {
        return AstTestFactory.variableDeclarationList(keyword,null,variables);
    }
    static variableDeclarationStatement(keyword : any,type : any,variables : core.DartList<any>) : any {
        return astFactory.variableDeclarationStatement(AstTestFactory.variableDeclarationList(keyword,type,variables),TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static variableDeclarationStatement2(keyword : any,variables : core.DartList<any>) : any {
        return AstTestFactory.variableDeclarationStatement(keyword,null,variables);
    }
    static whileStatement(condition : any,body : any) : any {
        return astFactory.whileStatement(TokenFactory.tokenFromKeyword(Keyword.WHILE),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),condition,TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),body);
    }
    static withClause(types : core.DartList<any>) : any {
        return astFactory.withClause(TokenFactory.tokenFromKeyword(Keyword.WITH),types);
    }
    static yieldEachStatement(expression : any) : any {
        return astFactory.yieldStatement(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"yield"),TokenFactory.tokenFromType(TokenType.STAR),expression,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    static yieldStatement(expression : any) : any {
        return astFactory.yieldStatement(TokenFactory.tokenFromTypeAndString(TokenType.IDENTIFIER,"yield"),null,expression,TokenFactory.tokenFromType(TokenType.SEMICOLON));
    }
    constructor() {
    }
    @defaultConstructor
    AstTestFactory() {
    }
}

export class properties {
}

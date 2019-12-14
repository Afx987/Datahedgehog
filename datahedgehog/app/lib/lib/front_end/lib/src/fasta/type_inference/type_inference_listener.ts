/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_inference_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TypeInferenceBase {
    export type Constructors = 'TypeInferenceBase';
    export type Interface = Omit<TypeInferenceBase, Constructors>;
}
@DartClass
export class TypeInferenceBase {
    debugExpressionEnter(expressionType : string,expression : any,typeContext : any) : boolean {
        return false;
    }
    debugExpressionExit(expressionType : string,expression : any,inferredType : any) : void {
    }
    debugStatementEnter(statementType : string,statement : any) : void {
    }
    debugStatementExit(statementType : string,statement : any) : void {
    }
    constructor() {
    }
    @defaultConstructor
    TypeInferenceBase() {
    }
}

export namespace TypeInferenceDebugging {
    export type Constructors = 'TypeInferenceDebugging';
    export type Interface = Omit<TypeInferenceDebugging, Constructors>;
}
@DartClass
@Implements(TypeInferenceBase)
export class TypeInferenceDebugging implements TypeInferenceBase.Interface {
    debugExpressionEnter(expressionType : string,expression : any,typeContext : any) : boolean {
        core.print(`Enter ${expressionType}(${expression}) (context=${typeContext})`);
        return true;
    }
    debugExpressionExit(expressionType : string,expression : any,inferredType : any) : void {
        core.print(`Exit ${expressionType}(${expression}) (type=${inferredType})`);
    }
    debugStatementEnter(statementType : string,statement : any) : void {
        core.print(`Enter ${statementType}(${statement})`);
    }
    debugStatementExit(statementType : string,statement : any) : void {
        core.print(`Exit ${statementType}(${statement})`);
    }
    constructor() {
    }
    @defaultConstructor
    TypeInferenceDebugging() {
    }
}

export namespace TypeInferenceListener {
    export type Constructors = TypeInferenceBase.Constructors | 'TypeInferenceListener';
    export type Interface = Omit<TypeInferenceListener, Constructors>;
}
@DartClass
export class TypeInferenceListener extends TypeInferenceBase {
    asExpressionEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("asExpression",expression,typeContext);
    }
    asExpressionExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("asExpression",expression,inferredType);
    }
    blockEnter(statement : any) : void {
        return this.debugStatementEnter('block',statement);
    }
    blockExit(statement : any) : void {
        return this.debugStatementExit('block',statement);
    }
    boolLiteralEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("boolLiteral",expression,typeContext);
    }
    boolLiteralExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("boolLiteral",expression,inferredType);
    }
    conditionalExpressionEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("conditionalExpression",expression,typeContext);
    }
    conditionalExpressionExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("conditionalExpression",expression,inferredType);
    }
    constructorInvocationEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("constructorInvocation",expression,typeContext);
    }
    constructorInvocationExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("constructorInvocation",expression,inferredType);
    }
    doubleLiteralEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("doubleLiteral",expression,typeContext);
    }
    doubleLiteralExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("doubleLiteral",expression,inferredType);
    }
    expressionStatementEnter(statement : any) : void {
        return this.debugStatementEnter('expressionStatement',statement);
    }
    expressionStatementExit(statement : any) : void {
        return this.debugStatementExit('expressionStatement',statement);
    }
    functionDeclarationEnter(statement : any) : void {
        return this.debugStatementEnter('functionDeclaration',statement);
    }
    functionDeclarationExit(statement : any) : void {
        return this.debugStatementExit('functionDeclaration',statement);
    }
    functionExpressionEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("functionExpression",expression,typeContext);
    }
    functionExpressionExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("functionExpression",expression,inferredType);
    }
    ifStatementEnter(statement : any) : void {
        return this.debugStatementEnter('ifStatement',statement);
    }
    ifStatementExit(statement : any) : void {
        return this.debugStatementExit('ifStatement',statement);
    }
    intLiteralEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("intLiteral",expression,typeContext);
    }
    intLiteralExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("intLiteral",expression,inferredType);
    }
    isExpressionEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("isExpression",expression,typeContext);
    }
    isExpressionExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("isExpression",expression,inferredType);
    }
    isNotExpressionEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("isNotExpression",expression,typeContext);
    }
    isNotExpressionExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("isNotExpression",expression,inferredType);
    }
    listLiteralEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("listLiteral",expression,typeContext);
    }
    listLiteralExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("listLiteral",expression,inferredType);
    }
    methodInvocationEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("methodInvocation",expression,typeContext);
    }
    methodInvocationExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("methodInvocation",expression,inferredType);
    }
    nullLiteralEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("nullLiteral",expression,typeContext);
    }
    nullLiteralExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("nullLiteral",expression,inferredType);
    }
    returnStatementEnter(statement : any) : void {
        return this.debugStatementEnter('returnStatement',statement);
    }
    returnStatementExit(statement : any) : void {
        return this.debugStatementExit('returnStatement',statement);
    }
    staticGetEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("staticGet",expression,typeContext);
    }
    staticGetExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("staticGet",expression,inferredType);
    }
    staticInvocationEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("staticInvocation",expression,typeContext);
    }
    staticInvocationExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("staticInvocation",expression,inferredType);
    }
    stringConcatenationEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("stringConcatenation",expression,typeContext);
    }
    stringConcatenationExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("stringConcatenation",expression,inferredType);
    }
    stringLiteralEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("StringLiteral",expression,typeContext);
    }
    stringLiteralExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("StringLiteral",expression,inferredType);
    }
    variableDeclarationEnter(statement : any) : void {
        return this.debugStatementEnter('variableDeclaration',statement);
    }
    variableDeclarationExit(statement : any) : void {
        return this.debugStatementExit('variableDeclaration',statement);
    }
    variableGetEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("variableGet",expression,typeContext);
    }
    variableGetExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("variableGet",expression,inferredType);
    }
    variableSetEnter(expression : any,typeContext : any) : boolean {
        return this.debugExpressionEnter("variableSet",expression,typeContext);
    }
    variableSetExit(expression : any,inferredType : any) : void {
        return this.debugExpressionExit("variableSet",expression,inferredType);
    }
    yieldStatementEnter(statement : any) : void {
        return this.debugStatementEnter('yieldStatement',statement);
    }
    yieldStatementExit(statement : any) : void {
        return this.debugStatementExit('yieldStatement',statement);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeInferenceListener() {
    }
}

export class properties {
}

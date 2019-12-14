/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/ast_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AstFactory {
    export type Constructors = 'AstFactory';
    export type Interface<V> = Omit<AstFactory<V>, Constructors>;
}
@DartClass
export class AstFactory<V> {
    @Abstract
    arguments(positional : core.DartList<any>,_namedArguments? : {types? : core.DartList<any>,named? : core.DartList<any>}) : any{ throw 'abstract'}
    @Abstract
    asExpression(operand : any,operator : any,type : any) : any{ throw 'abstract'}
    @Abstract
    awaitExpression(keyword : any,operand : any) : any{ throw 'abstract'}
    @Abstract
    block(statements : core.DartList<any>,beginToken : any) : any{ throw 'abstract'}
    @Abstract
    boolLiteral(value : boolean,token : any) : any{ throw 'abstract'}
    @Abstract
    conditionalExpression(condition : any,thenExpression : any,elseExpression : any) : any{ throw 'abstract'}
    @Abstract
    constructorInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) : any{ throw 'abstract'}
    @Abstract
    directMethodInvocation(receiver : any,target : any,arguments : any) : any{ throw 'abstract'}
    @Abstract
    directPropertyGet(receiver : any,target : any) : any{ throw 'abstract'}
    @Abstract
    directPropertySet(receiver : any,target : any,value : any) : any{ throw 'abstract'}
    @Abstract
    doubleLiteral(value : double,token : any) : any{ throw 'abstract'}
    @Abstract
    expressionStatement(expression : any) : any{ throw 'abstract'}
    @Abstract
    functionExpression(function : any,token : any) : any{ throw 'abstract'}
    @Abstract
    ifStatement(condition : any,thenPart : any,elsePart : any) : any{ throw 'abstract'}
    @Abstract
    intLiteral(value : number,token : any) : any{ throw 'abstract'}
    @Abstract
    isExpression(expression : any,type : any,token : any,isInverted : boolean) : any{ throw 'abstract'}
    @Abstract
    listLiteral(expressions : core.DartList<any>,typeArgument : any,isConst : boolean,token : any) : any{ throw 'abstract'}
    @Abstract
    logicalExpression(left : any,operator : string,right : any) : any{ throw 'abstract'}
    @Abstract
    mapLiteral(beginToken : any,constKeyword : any,entries : core.DartList<any>,_namedArguments? : {keyType? : any,valueType? : any}) : any{ throw 'abstract'}
    @Abstract
    methodInvocation(receiver : any,name : any,arguments : any,interfaceTarget? : any) : any{ throw 'abstract'}
    @Abstract
    not(token : any,operand : any) : any{ throw 'abstract'}
    @Abstract
    nullLiteral(token : any) : any{ throw 'abstract'}
    @Abstract
    propertyGet(receiver : any,name : any,interfaceTarget? : any) : any{ throw 'abstract'}
    @Abstract
    propertySet(receiver : any,name : any,value : any,interfaceTarget? : any) : any{ throw 'abstract'}
    @Abstract
    rethrowExpression(keyword : any) : any{ throw 'abstract'}
    @Abstract
    returnStatement(expression : any,token : any) : any{ throw 'abstract'}
    @Abstract
    setExplicitArgumentTypes(arguments : any,types : core.DartList<any>) : void{ throw 'abstract'}
    @Abstract
    staticGet(readTarget : any,token : any) : any{ throw 'abstract'}
    @Abstract
    staticInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) : any{ throw 'abstract'}
    @Abstract
    stringConcatenation(expressions : core.DartList<any>,token : any) : any{ throw 'abstract'}
    @Abstract
    stringLiteral(value : string,token : any) : any{ throw 'abstract'}
    @Abstract
    superMethodInvocation(beginToken : any,name : any,arguments : any,interfaceTarget? : any) : any{ throw 'abstract'}
    @Abstract
    superPropertyGet(name : any,interfaceTarget? : any) : any{ throw 'abstract'}
    @Abstract
    symbolLiteral(hashToken : any,value : string) : any{ throw 'abstract'}
    @Abstract
    thisExpression(keyword : any) : any{ throw 'abstract'}
    @Abstract
    throwExpression(keyword : any,expression : any) : any{ throw 'abstract'}
    @Abstract
    typeLiteral(type : any) : any{ throw 'abstract'}
    @Abstract
    variableDeclaration(name : string,token : any,functionNestingLevel : number,_namedArguments? : {type? : any,initializer? : any,equalsToken? : any,isFinal? : boolean,isConst? : boolean,isLocalFunction? : boolean}) : any{ throw 'abstract'}
    @Abstract
    variableGet(variable : any,fact : any,scope : any,token : any) : any{ throw 'abstract'}
    @Abstract
    variableSet(variable : any,value : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AstFactory() {
    }
}

export class properties {
}

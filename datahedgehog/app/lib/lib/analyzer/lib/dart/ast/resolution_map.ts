/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/dart/ast/resolution_map.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ResolutionMap {
    export type Constructors = 'ResolutionMap';
    export type Interface = Omit<ResolutionMap, Constructors>;
}
@DartClass
export class ResolutionMap {
    @Abstract
    bestElementForFunctionExpressionInvocation(node : any) : any{ throw 'abstract'}
    @Abstract
    bestElementForIdentifier(node : any) : any{ throw 'abstract'}
    @Abstract
    bestElementForMethodReference(node : any) : any{ throw 'abstract'}
    @Abstract
    bestParameterElementForExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    bestTypeForExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    elementAnnotationForAnnotation(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByClassDeclaration(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByCompilationUnit(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByConstructorDeclaration(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByDeclaration(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByDeclaredIdentifier(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByDirective(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByEnumDeclaration(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByFormalParameter(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByFunctionDeclaration(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByFunctionExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByMethodDeclaration(node : any) : any{ throw 'abstract'}
    @Abstract
    elementDeclaredByVariableDeclaration(node : any) : any{ throw 'abstract'}
    @Abstract
    elementForAnnotation(node : any) : any{ throw 'abstract'}
    @Abstract
    elementForNamedExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    parameterElementsForFormalParameterList(node : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    propagatedElementForFunctionExpressionInvocation(node : any) : any{ throw 'abstract'}
    @Abstract
    propagatedElementForIdentifier(node : any) : any{ throw 'abstract'}
    @Abstract
    propagatedElementForMethodReference(node : any) : any{ throw 'abstract'}
    @Abstract
    propagatedParameterElementForExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    propagatedTypeForExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    staticElementForConstructorReference(node : any) : any{ throw 'abstract'}
    @Abstract
    staticElementForFunctionExpressionInvocation(node : any) : any{ throw 'abstract'}
    @Abstract
    staticElementForIdentifier(node : any) : any{ throw 'abstract'}
    @Abstract
    staticElementForMethodReference(node : any) : any{ throw 'abstract'}
    @Abstract
    staticInvokeTypeForInvocationExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    staticParameterElementForExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    staticTypeForExpression(node : any) : any{ throw 'abstract'}
    @Abstract
    typeForTypeName(node : any) : any{ throw 'abstract'}
    @Abstract
    uriElementForDirective(node : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ResolutionMap() {
    }
}

export class properties {
}

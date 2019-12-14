/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/ast/resolution_map.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ResolutionMapImpl {
    export type Constructors = 'ResolutionMapImpl';
    export type Interface = Omit<ResolutionMapImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ResolutionMapImpl implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bestElementForFunctionExpressionInvocation(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bestElementForIdentifier(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bestElementForMethodReference(node : any) : any {
        return node.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bestParameterElementForExpression(node : any) : any {
        return node.bestParameterElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bestTypeForExpression(node : any) : any {
        return node.bestType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementAnnotationForAnnotation(node : any) : any {
        return node.elementAnnotation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByClassDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByCompilationUnit(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByConstructorDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByDeclaredIdentifier(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByDirective(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByEnumDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByFormalParameter(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByFunctionDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByFunctionExpression(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByMethodDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementDeclaredByVariableDeclaration(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementForAnnotation(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementForNamedExpression(node : any) : any {
        return node.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parameterElementsForFormalParameterList(node : any) : core.DartList<any> {
        return node.parameterElements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElementForFunctionExpressionInvocation(node : any) : any {
        return node.propagatedElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElementForIdentifier(node : any) : any {
        return node.propagatedElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElementForMethodReference(node : any) : any {
        return node.propagatedElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedParameterElementForExpression(node : any) : any {
        return node.propagatedParameterElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedTypeForExpression(node : any) : any {
        return node.propagatedType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElementForConstructorReference(node : any) : any {
        return node.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElementForFunctionExpressionInvocation(node : any) : any {
        return node.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElementForIdentifier(node : any) : any {
        return node.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElementForMethodReference(node : any) : any {
        return node.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticInvokeTypeForInvocationExpression(node : any) : any {
        return node.staticInvokeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticParameterElementForExpression(node : any) : any {
        return node.staticParameterElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticTypeForExpression(node : any) : any {
        return node.staticType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeForTypeName(node : any) : any {
        return node.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uriElementForDirective(node : any) : any {
        return node.uriElement;
    }
    constructor() {
    }
    @defaultConstructor
    ResolutionMapImpl() {
    }
}

export class properties {
}

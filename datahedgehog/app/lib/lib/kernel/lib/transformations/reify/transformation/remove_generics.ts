/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/reify/transformation/remove_generics.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./transformer";

export namespace Erasure {
    export type Constructors = 'Erasure';
    export type Interface = Omit<Erasure, Constructors>;
}
@DartClass
@With(any)
export class Erasure extends any implements any.Interface {
    reifyVisitor : lib3.ReifyVisitor;

    constructor(reifyVisitor : lib3.ReifyVisitor) {
    }
    @defaultConstructor
    Erasure(reifyVisitor : lib3.ReifyVisitor) {
        this.reifyVisitor = reifyVisitor;
    }
    removeTypeParameters(cls : any) : boolean {
        return this.reifyVisitor.needsTypeInformation(cls);
    }
    removeTypeArgumentsOfConstructorCall(node : any) : any {
        let cls : any = node.target.parent;
        if (this.removeTypeParameters(cls)) {
            node.arguments.types.clear();
            let target : any = node.target;
            target.enclosingClass.typeParameters.clear();
        }
        return node;
    }
    removeTypeArgumentsOfStaticCall(node : any) : any {
        if (is(node.target.parent, any)) {
            let cls : any = node.target.parent;
            if (!this.removeTypeParameters(cls)) {
                return node;
            }
        }else {
            /* TODO (AssertStatementImpl) : assert (node.target.parent is Library); */;
        }
        node.arguments.types.clear();
        let target : any = node.target;
        target.function.typeParameters.clear();
        return node;
    }
    removeTypeArgumentOfMethodInvocation(node : any) : any {
        node.arguments.types.clear();
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultDartType(type : any) {
        return type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterfaceType(type : any) : any {
        if (this.removeTypeParameters(type.classNode)) {
            return new bare.createInstance(any,null,type.classNode,new core.DartList.literal<any>());
        }
        return type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypedefType(type : any) : any {
        throw 'Typedef types not implemented in erasure';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSupertype(type : any) : any {
        if (this.removeTypeParameters(type.classNode)) {
            return new bare.createInstance(any,null,type.classNode,new core.DartList.literal<any>());
        }
        return type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionType(type : any) : any {
        let partHasChanged : boolean = false;
        var translate : (type : any) => any = (type : any) : any =>  {
            let newType : any = type.accept(this);
            if (newType != type) {
                partHasChanged = true;
                return newType;
            }else {
                return type;
            }
        };
        let returnType : any = translate(type.returnType);
        let positionalTypes : core.DartList<any> = type.positionalParameters.map(translate).toList();
        let namedParameters : core.DartList<any> = new core.DartList<any>();
        for(let param of type.namedParameters) {
            namedParameters.add(new bare.createInstance(any,null,param.name,translate(param.type)));
        }
        if (partHasChanged) {
            return new bare.createInstance(any,null,positionalTypes,returnType,{
                namedParameters : namedParameters,requiredParameterCount : type.requiredParameterCount});
        }else {
            return type;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterType(_ : any) : any {
        return new bare.createInstance(any,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDartType(type : any) : any {
        return type.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticInvocation(node : any) : any {
        node.transformChildren(this);
        if (op(Op.EQUALS,node.target.kind,ProcedureKind.Factory) || op(Op.EQUALS,node.target.kind,ProcedureKind.Method)) {
            node = this.removeTypeArgumentsOfStaticCall(node);
        }
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInvocation(node : any) : any {
        node.transformChildren(this);
        return this.removeTypeArgumentsOfConstructorCall(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClass(node : any) : any {
        node.transformChildren(this);
        if (this.removeTypeParameters(node)) {
            node.typeParameters.clear();
        }
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : any {
        node.transformChildren(this);
        return this.removeTypeArgumentOfMethodInvocation(node);
    }
}

export class properties {
}

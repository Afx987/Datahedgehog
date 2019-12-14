/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/erasure.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../visitor";
import * as lib4 from "./../ast";
import * as lib5 from "./../type_algebra";

export namespace Erasure {
    export type Constructors = lib3.Transformer.Constructors | 'Erasure';
    export type Interface = Omit<Erasure, Constructors>;
}
@DartClass
export class Erasure extends lib3.Transformer {
    substitution : core.DartMap<lib4.TypeParameter,lib4.DartType>;

    constantSubstitution : core.DartMap<lib4.TypeParameter,lib4.DartType>;

    constantContexts : number;

    transform(program : lib4.Program) : void {
        program.accept(this);
    }
    pushConstantContext() : void {
        ++this.constantContexts;
    }
    popConstantContext() : void {
        --this.constantContexts;
    }
    get isInConstantContext() : boolean {
        return this.constantContexts > 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDartType(type : lib4.DartType) {
        type = lib5.substitute(type,this.substitution);
        if (this.isInConstantContext) {
            type = lib5.substitute(type,this.constantSubstitution);
        }
        return type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClass(node : lib4.Class) {
        for(let parameter of node.typeParameters) {
            this.constantSubstitution.set(parameter,new lib4.DynamicType());
        }
        node.transformChildren(this);
        this.constantSubstitution.clear();
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitProcedure(node : lib4.Procedure) {
        if (op(Op.EQUALS,node.kind,lib4.ProcedureKind.Factory)) {
            /* TODO (AssertStatementImpl) : assert (node.enclosingClass != null); */;
            /* TODO (AssertStatementImpl) : assert (node.enclosingClass.typeParameters.length == node.function.typeParameters.length); */;
            for(let parameter of node.function.typeParameters) {
                this.constantSubstitution.set(parameter,new lib4.DynamicType());
            }
            node.function.transformChildren(this);
            node.function.typeParameters.forEach(this.constantSubstitution.remove.bind(this.constantSubstitution));
        }else {
            node.transformChildren(this);
        }
        return node;
    }
    isObject(type : lib4.DartType) : boolean {
        return is(type, lib4.InterfaceType) && op(Op.EQUALS,type.classNode.supertype,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionNode(node : lib4.FunctionNode) {
        for(let parameter of node.typeParameters) {
            this.substitution.set(parameter,new lib4.DynamicType());
        }
        for(let parameter of node.typeParameters) {
            if (!this.isObject(parameter.bound)) {
                this.substitution.set(parameter,lib5.substitute(parameter.bound,this.substitution));
            }
        }
        node.transformChildren(this);
        node.typeParameters.forEach(this.substitution.remove.bind(this.substitution));
        node.typeParameters.clear();
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticInvocation(node : lib4.StaticInvocation) {
        if (node.target.kind != lib4.ProcedureKind.Factory) {
            node.arguments.types.clear();
        }
        if (node.isConst) this.pushConstantContext();
        node.transformChildren(this);
        if (node.isConst) this.popConstantContext();
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : lib4.MethodInvocation) {
        node.arguments.types.clear();
        node.transformChildren(this);
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectMethodInvocation(node : lib4.DirectMethodInvocation) {
        node.arguments.types.clear();
        node.transformChildren(this);
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInvocation(node : lib4.ConstructorInvocation) {
        if (node.isConst) this.pushConstantContext();
        node.transformChildren(this);
        if (node.isConst) this.popConstantContext();
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : lib4.ListLiteral) {
        if (node.isConst) this.pushConstantContext();
        node.transformChildren(this);
        if (node.isConst) this.popConstantContext();
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : lib4.MapLiteral) {
        if (node.isConst) this.pushConstantContext();
        node.transformChildren(this);
        if (node.isConst) this.popConstantContext();
        return node;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Erasure() {
        this.substitution = new core.DartMap.literal([
        ]);
        this.constantSubstitution = new core.DartMap.literal([
        ]);
        this.constantContexts = 0;
    }
}

export class properties {
}

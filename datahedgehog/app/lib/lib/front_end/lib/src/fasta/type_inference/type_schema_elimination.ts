/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_schema_elimination.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var greatestClosure : (coreTypes : any,schema : any) => any = (coreTypes : any,schema : any) : any =>  {
    return _TypeSchemaEliminationVisitor.run(coreTypes,false,schema);
};
export var leastClosure : (coreTypes : any,schema : any) => any = (coreTypes : any,schema : any) : any =>  {
    return _TypeSchemaEliminationVisitor.run(coreTypes,true,schema);
};
export namespace _TypeSchemaEliminationVisitor {
    export type Constructors = '_TypeSchemaEliminationVisitor';
    export type Interface = Omit<_TypeSchemaEliminationVisitor, Constructors>;
}
@DartClass
export class _TypeSchemaEliminationVisitor extends any {
    nullType : any;

    isLeastClosure : boolean;

    constructor(coreTypes : any,isLeastClosure : boolean) {
    }
    @defaultConstructor
    _TypeSchemaEliminationVisitor(coreTypes : any,isLeastClosure : boolean) {
        this.nullType = coreTypes.nullClass.rawType;
        this.isLeastClosure = isLeastClosure;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionType(node : any) : any {
        let newReturnType : any = node.returnType.accept(this);
        this.isLeastClosure = !this.isLeastClosure;
        let newPositionalParameters : core.DartList<any> = null;
        for(let i : number = 0; i < node.positionalParameters.length; i++){
            let substitution : any = op(Op.INDEX,node.positionalParameters,i).accept(this);
            if (substitution != null) {
                newPositionalParameters = node.positionalParameters.toList({
                    growable : false});
                newPositionalParameters[i] = substitution;
            }
        }
        let newNamedParameters : core.DartList<any> = null;
        for(let i : number = 0; i < node.namedParameters.length; i++){
            let substitution : any = op(Op.INDEX,node.namedParameters,i).type.accept(this);
            if (substitution != null) {
                newNamedParameters = node.namedParameters.toList({
                    growable : false});
                newNamedParameters[i] = new bare.createInstance(any,null,op(Op.INDEX,node.namedParameters,i).name,substitution);
            }
        }
        this.isLeastClosure = !this.isLeastClosure;
        if (op(Op.EQUALS,newReturnType,null) && newPositionalParameters == null && newNamedParameters == null) {
            return null;
        }else {
            return new bare.createInstance(any,null,(newPositionalParameters || node.positionalParameters),(newReturnType || node.returnType),{
                namedParameters : (newNamedParameters || node.namedParameters),typeParameters : node.typeParameters,requiredParameterCount : node.requiredParameterCount});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterfaceType(node : any) : any {
        let newTypeArguments : core.DartList<any> = null;
        for(let i : number = 0; i < node.typeArguments.length; i++){
            let substitution : any = op(Op.INDEX,node.typeArguments,i).accept(this);
            if (substitution != null) {
                newTypeArguments = ( newTypeArguments ) || ( node.typeArguments.toList({
                    growable : false}) );
                newTypeArguments[i] = substitution;
            }
        }
        if (newTypeArguments == null) {
            return null;
        }else {
            return new bare.createInstance(any,null,node.classNode,newTypeArguments);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitUnknownType(node : any) : any {
        return this.isLeastClosure ? this.nullType : new bare.createInstance(any,null);
    }
    static run(coreTypes : any,isLeastClosure : boolean,schema : any) : any {
        let visitor = new _TypeSchemaEliminationVisitor(coreTypes,isLeastClosure);
        let result = schema.accept(visitor);
        /* TODO (AssertStatementImpl) : assert (visitor.isLeastClosure == isLeastClosure); */;
        return (result || schema);
    }
}

export class properties {
}

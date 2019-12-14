/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_function_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/function_type_builder";
import * as lib4 from "./kernel_type_builder";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./../builder/type_variable_builder";
import * as lib7 from "./../builder/formal_parameter_builder";
import * as lib8 from "./../builder/library_builder";

export var buildFunctionType : (library : lib8.LibraryBuilder<any,any>,returnType : lib4.KernelTypeBuilder,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>) => any = (library : lib8.LibraryBuilder<any,any>,returnType : lib4.KernelTypeBuilder,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>) : any =>  {
    let builtReturnType : any = (((_539_)=>(!!_539_)?_539_.build(library):null)(returnType) || new bare.createInstance(any,null));
    let positionalParameters : core.DartList<any> = new core.DartList.literal<any>();
    let namedParameters : core.DartList<any>;
    let requiredParameterCount : number = 0;
    if (formals != null) {
        for(let formal of formals) {
            let type : any = (((_540_)=>(!!_540_)?_540_.build(library):null)(formal.type) || new bare.createInstance(any,null));
            if (formal.isPositional) {
                positionalParameters.add(type);
                if (formal.isRequired) requiredParameterCount++;
            }else if (formal.isNamed) {
                namedParameters = ( namedParameters ) || ( new core.DartList.literal<any>() );
                namedParameters.add(new bare.createInstance(any,null,formal.name,type));
            }
        }
        if (namedParameters != null) {
            namedParameters.sort();
        }
    }
    let typeParameters : core.DartList<any>;
    if (typeVariables != null) {
        typeParameters = new core.DartList.literal<any>();
        for(let t of typeVariables) {
            typeParameters.add(t.parameter);
        }
    }
    return new bare.createInstance(any,null,positionalParameters,builtReturnType,{
        namedParameters : (namedParameters || new core.DartList.literal<any>()),typeParameters : (typeParameters || new core.DartList.literal<any>()),requiredParameterCount : requiredParameterCount});
};
export namespace KernelFunctionTypeBuilder {
    export type Constructors = lib3.FunctionTypeBuilder.Constructors | 'KernelFunctionTypeBuilder';
    export type Interface = Omit<KernelFunctionTypeBuilder, Constructors>;
}
@DartClass
@Implements(lib4.KernelTypeBuilder)
export class KernelFunctionTypeBuilder extends lib3.FunctionTypeBuilder implements lib4.KernelTypeBuilder.Interface {
    constructor(charOffset : number,fileUri : lib5.Uri,returnType : lib4.KernelTypeBuilder,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelFunctionTypeBuilder(charOffset : number,fileUri : lib5.Uri,returnType : lib4.KernelTypeBuilder,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>) {
        super.FunctionTypeBuilder(charOffset,fileUri,returnType,typeVariables,formals);
    }
    build(library : lib8.LibraryBuilder<any,any>) : any {
        return buildFunctionType(library,this.returnType,this.typeVariables,this.formals);
    }
    buildSupertype(library : lib8.LibraryBuilder<any,any>) : any {
        library.addCompileTimeError(this.charOffset,"Can't use a function type as supertype.",{
            fileUri : this.fileUri});
        return null;
    }
}

export class properties {
}

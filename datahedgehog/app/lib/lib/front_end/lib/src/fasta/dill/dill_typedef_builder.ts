/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/dill/dill_typedef_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../kernel/kernel_function_type_alias_builder";
import * as lib4 from "./dill_library_builder";
import * as lib5 from "./../builder/formal_parameter_builder";
import * as lib6 from "./../builder/metadata_builder";
import * as lib7 from "./../kernel/kernel_type_builder";
import * as lib8 from "./../builder/type_variable_builder";

export namespace DillFunctionTypeAliasBuilder {
    export type Constructors = lib3.KernelFunctionTypeAliasBuilder.Constructors | 'DillFunctionTypeAliasBuilder';
    export type Interface = Omit<DillFunctionTypeAliasBuilder, Constructors>;
}
@DartClass
export class DillFunctionTypeAliasBuilder extends lib3.KernelFunctionTypeAliasBuilder {
    constructor(typedef : any,parent : lib4.DillLibraryBuilder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DillFunctionTypeAliasBuilder(typedef : any,parent : lib4.DillLibraryBuilder) {
        super.KernelFunctionTypeAliasBuilder(null,null,typedef.name,null,null,parent,typedef.fileOffset,typedef);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get formals() : core.DartList<lib5.FormalParameterBuilder<any>> {
        return internalError('Not implemented.');
    }
    get metadata() : core.DartList<lib6.MetadataBuilder<any>> {
        return internalError('Not implemented.');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : lib7.KernelTypeBuilder {
        return internalError('Not implemented.');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeVariables() : core.DartList<lib8.TypeVariableBuilder<any,any>> {
        return internalError('Not implemented.');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildThisType(library : any) : any {
        return this.thisType = ( this.thisType ) || ( this.target.type );
    }
}

export class properties {
}

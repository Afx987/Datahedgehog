/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_function_type_alias_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/function_type_alias_builder";
import * as lib4 from "./../builder/metadata_builder";
import * as lib5 from "./kernel_type_builder";
import * as lib6 from "./../builder/type_variable_builder";
import * as lib7 from "./../builder/formal_parameter_builder";
import * as lib8 from "./../builder/library_builder";
import * as lib9 from "./../messages";
import * as lib10 from "./kernel_function_type_builder";
import * as lib11 from "./kernel_builder";

export namespace KernelFunctionTypeAliasBuilder {
    export type Constructors = lib3.FunctionTypeAliasBuilder.Constructors | 'KernelFunctionTypeAliasBuilder';
    export type Interface = Omit<KernelFunctionTypeAliasBuilder, Constructors>;
}
@DartClass
export class KernelFunctionTypeAliasBuilder extends lib3.FunctionTypeAliasBuilder<lib5.KernelTypeBuilder,any> {
    target : any;

    thisType : any;

    constructor(metadata : core.DartList<lib4.MetadataBuilder<any>>,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,parent : lib8.LibraryBuilder<any,any>,charOffset : number,target? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelFunctionTypeAliasBuilder(metadata : core.DartList<lib4.MetadataBuilder<any>>,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,parent : lib8.LibraryBuilder<any,any>,charOffset : number,target? : any) {
        this.target = (target || (((_) : any =>  {
            {
                _.fileOffset = charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,name,null,{
            fileUri : parent.target.fileUri}))));
        super.FunctionTypeAliasBuilder(metadata,returnType,name,typeVariables,formals,parent,charOffset);
    }
    build(libraryBuilder : lib8.LibraryBuilder<any,any>) : any {
        return ((_) : any =>  {
            {
                _.type = ( _.type ) || ( this.buildThisType(libraryBuilder) );
                return _;
            }
        })(this.target);
    }
    buildThisType(library : lib8.LibraryBuilder<any,any>) : any {
        if (this.thisType != null) {
            if (op(Op.EQUALS,this.thisType,new bare.createInstance(any,null))) {
                this.thisType = new bare.createInstance(any,null);
                lib9.warning(this.parent.uri,-1,`The typedef '${this.name}' has a reference to itself.`);
            }
            return this.thisType;
        }
        this.thisType = new bare.createInstance(any,null);
        return this.thisType = lib10.buildFunctionType(library,this.returnType,this.typeVariables,this.formals);
    }
    buildTypesWithBuiltArguments(library : lib8.LibraryBuilder<any,any>,arguments : core.DartList<any>) : any {
        let thisType = this.buildThisType(library);
        if (is(thisType, any)) return thisType;
        let result : any = thisType;
        if (result.typeParameters.isEmpty && arguments == null) return result;
        arguments = lib11.computeDefaultTypeArguments(library,result.typeParameters,arguments);
        let substitution : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        for(let i : number = 0; i < result.typeParameters.length; i++){
            substitution.set(op(Op.INDEX,result.typeParameters,i),arguments[i]);
        }
        return substitute(result.withoutTypeParameters,substitution);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildType(library : lib8.LibraryBuilder<any,any>,arguments : core.DartList<lib5.KernelTypeBuilder>) : any {
        let thisType = this.buildThisType(library);
        if (is(thisType, any)) return thisType;
        let result : any = thisType;
        if (result.typeParameters.isEmpty && arguments == null) return result;
        let builtArguments : core.DartList<any> = new core.DartList.literal<any>();
        if (arguments != null) {
            for(let i : number = 0; i < arguments.length; i++){
                builtArguments.add(arguments[i].build(library));
            }
        }
        return this.buildTypesWithBuiltArguments(library,builtArguments);
    }
}

export class properties {
}

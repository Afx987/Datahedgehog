/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/function_type_alias_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_declaration_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./type_variable_builder";
import * as lib6 from "./formal_parameter_builder";
import * as lib7 from "./metadata_builder";
import * as lib8 from "./library_builder";

export namespace FunctionTypeAliasBuilder {
    export type Constructors = lib3.TypeDeclarationBuilder.Constructors | 'FunctionTypeAliasBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<FunctionTypeAliasBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class FunctionTypeAliasBuilder<T extends lib4.TypeBuilder,R> extends lib3.TypeDeclarationBuilder<T,R> {
    returnType : T;

    typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>;

    formals : core.DartList<lib6.FormalParameterBuilder<any>>;

    constructor(metadata : core.DartList<lib7.MetadataBuilder<any>>,returnType : T,name : string,typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>,formals : core.DartList<lib6.FormalParameterBuilder<any>>,parent : lib8.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeAliasBuilder(metadata : core.DartList<lib7.MetadataBuilder<any>>,returnType : T,name : string,typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>,formals : core.DartList<lib6.FormalParameterBuilder<any>>,parent : lib8.LibraryBuilder<any,any>,charOffset : number) {
        super.TypeDeclarationBuilder(metadata,null,name,parent,charOffset);
        this.returnType = returnType;
        this.typeVariables = typeVariables;
        this.formals = formals;
    }
    get parent() : lib8.LibraryBuilder<any,any> {
        return super.parent;
    }
}

export class properties {
}

/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/function_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../scope";
import * as lib6 from "./type_declaration_builder";
import * as lib7 from "./library_builder";

export namespace FunctionTypeBuilder {
    export type Constructors = lib3.TypeBuilder.Constructors | 'FunctionTypeBuilder';
    export type Interface = Omit<FunctionTypeBuilder, Constructors>;
}
@DartClass
export class FunctionTypeBuilder extends lib3.TypeBuilder {
    returnType : lib3.TypeBuilder;

    typeVariables : core.DartList<any>;

    formals : core.DartList<any>;

    constructor(charOffset : number,fileUri : lib4.Uri,returnType : lib3.TypeBuilder,typeVariables : core.DartList<any>,formals : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeBuilder(charOffset : number,fileUri : lib4.Uri,returnType : lib3.TypeBuilder,typeVariables : core.DartList<any>,formals : core.DartList<any>) {
        super.TypeBuilder(charOffset,fileUri);
        this.returnType = returnType;
        this.typeVariables = typeVariables;
        this.formals = formals;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveIn(scope : lib5.Scope) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bind(builder : lib6.TypeDeclarationBuilder<any,any>) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugName() : string {
        return "Function";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    printOn(buffer : core.DartStringBuffer) : core.DartStringBuffer {
        buffer.write(this.typeVariables);
        buffer.write(this.formals);
        buffer.write(" -> ");
        buffer.write(this.returnType);
        return buffer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(library : lib7.LibraryBuilder<any,any>) {
    }
}

export class properties {
}

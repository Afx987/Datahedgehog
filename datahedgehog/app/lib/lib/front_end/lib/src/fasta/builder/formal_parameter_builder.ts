/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/formal_parameter_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./modifier_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./metadata_builder";
import * as lib6 from "./../parser/parser";
import * as lib7 from "./library_builder";

export namespace FormalParameterBuilder {
    export type Constructors = lib3.ModifierBuilder.Constructors | 'FormalParameterBuilder';
    export type Interface<T extends lib4.TypeBuilder> = Omit<FormalParameterBuilder<T extends lib4.TypeBuilder>, Constructors>;
}
@DartClass
export class FormalParameterBuilder<T extends lib4.TypeBuilder> extends lib3.ModifierBuilder {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    charOffset : number;

    metadata : core.DartList<lib5.MetadataBuilder<any>>;

    modifiers : number;

    type : T;

    name : string;

    hasThis : boolean;

    kind : lib6.FormalParameterType;

    constructor(metadata : core.DartList<lib5.MetadataBuilder<any>>,modifiers : number,type : T,name : string,hasThis : boolean,compilationUnit : lib7.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormalParameterBuilder(metadata : core.DartList<lib5.MetadataBuilder<any>>,modifiers : number,type : T,name : string,hasThis : boolean,compilationUnit : lib7.LibraryBuilder<any,any>,charOffset : number) {
        this.kind = lib6.FormalParameterType.REQUIRED;
        super.ModifierBuilder(compilationUnit,charOffset);
        this.metadata = metadata;
        this.modifiers = modifiers;
        this.type = type;
        this.name = name;
        this.hasThis = hasThis;
        this.charOffset = charOffset;
    }
    get isRequired() : boolean {
        return this.kind.isRequired;
    }
    get isPositional() : boolean {
        return this.kind.isPositional || this.kind.isRequired;
    }
    get isNamed() : boolean {
        return this.kind.isNamed;
    }
    get isOptional() : boolean {
        return !this.isRequired;
    }
    get isLocal() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return this.name;
    }
}

export class properties {
}

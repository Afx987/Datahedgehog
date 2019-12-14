/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/metadata_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./constructor_reference_builder";

export namespace MetadataBuilder {
    export type Constructors = lib3.Builder.Constructors | 'MetadataBuilder';
    export type Interface<T extends lib4.TypeBuilder> = Omit<MetadataBuilder<T extends lib4.TypeBuilder>, Constructors>;
}
@DartClass
export class MetadataBuilder<T extends lib4.TypeBuilder> extends lib3.Builder {
    constructor(parent : lib3.Builder,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MetadataBuilder(parent : lib3.Builder,charOffset : number) {
        super.Builder(parent,-1,parent.fileUri);
    }
    @namedFactory
    static $fromConstructor<T extends lib4.TypeBuilder>(constructorReference : lib5.ConstructorReferenceBuilder,arguments : core.DartList<any>,parent : lib3.Builder,charOffset : number) : MetadataBuilder<T> {
        return new ConstructorMetadataBuilder<any>(constructorReference,arguments,parent,charOffset);
    }
    static fromConstructor : new<T extends lib4.TypeBuilder>(constructorReference : lib5.ConstructorReferenceBuilder,arguments : core.DartList<any>,parent : lib3.Builder,charOffset : number) => MetadataBuilder<T>;

    @namedFactory
    static $fromExpression<T extends lib4.TypeBuilder>(expression : string,postfix : string,parent : lib3.Builder,charOffset : number) : MetadataBuilder<T> {
        return new ExpressionMetadataBuilder<any>(expression,postfix,parent,charOffset);
    }
    static fromExpression : new<T extends lib4.TypeBuilder>(expression : string,postfix : string,parent : lib3.Builder,charOffset : number) => MetadataBuilder<T>;

}

export namespace ConstructorMetadataBuilder {
    export type Constructors = MetadataBuilder.Constructors | 'ConstructorMetadataBuilder';
    export type Interface<T extends lib4.TypeBuilder> = Omit<ConstructorMetadataBuilder<T extends lib4.TypeBuilder>, Constructors>;
}
@DartClass
export class ConstructorMetadataBuilder<T extends lib4.TypeBuilder> extends MetadataBuilder<T> {
    constructorReference : lib5.ConstructorReferenceBuilder;

    arguments : core.DartList<any>;

    constructor(constructorReference : lib5.ConstructorReferenceBuilder,arguments : core.DartList<any>,parent : lib3.Builder,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorMetadataBuilder(constructorReference : lib5.ConstructorReferenceBuilder,arguments : core.DartList<any>,parent : lib3.Builder,charOffset : number) {
        super.MetadataBuilder(parent,charOffset);
        this.constructorReference = constructorReference;
        this.arguments = arguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return this.constructorReference.fullNameForErrors;
    }
}

export namespace ExpressionMetadataBuilder {
    export type Constructors = MetadataBuilder.Constructors | 'ExpressionMetadataBuilder';
    export type Interface<T extends lib4.TypeBuilder> = Omit<ExpressionMetadataBuilder<T extends lib4.TypeBuilder>, Constructors>;
}
@DartClass
export class ExpressionMetadataBuilder<T extends lib4.TypeBuilder> extends MetadataBuilder<T> {
    qualified : string;

    identifier : string;

    constructor(qualified : string,identifier : string,parent : lib3.Builder,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionMetadataBuilder(qualified : string,identifier : string,parent : lib3.Builder,charOffset : number) {
        super.MetadataBuilder(parent,charOffset);
        this.qualified = qualified;
        this.identifier = identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return this.identifier == null ? this.qualified : `${this.qualified}.${this.identifier}`;
    }
}

export class properties {
}
